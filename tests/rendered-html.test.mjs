import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

for (const path of ["/", "/projects", "/projects/kings-revival"]) {
  test(`serves King's Revival on ${path}`, async () => {
    const { default: worker } = await import("../dist/server/index.js");
    const response = await worker.fetch(
      new Request(`https://portfolio.example${path}`),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes("国王复兴"), "King's Revival must be visible");
    assert.ok(html.includes("/images/kings-revival-diplomacy.jpg"), "project image must be referenced");
    if (path === "/projects/kings-revival") {
      assert.ok(html.includes("https://www.taptap.cn/app/959274"), "play link must be present");
    }
  });
}

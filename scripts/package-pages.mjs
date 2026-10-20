import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(root, "dist-pages");
// Only remove this script's fixed output directory inside its repository.
if (output !== resolve(root, "dist-pages")) throw new Error("Invalid output path");
await readFile(resolve(root, "dist/server/index.js"));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "dist/client"), output, { recursive: true });
const worker = resolve(output, "_worker.js");
await cp(resolve(root, "dist/server"), resolve(worker, "server"), { recursive: true });
await writeFile(resolve(worker, "index.js"), `import app from "./server/index.js";
export default {
  async fetch(request, env, ctx) {
    const path = new URL(request.url).pathname;
    if (/^\\/(assets|images|media|downloads)\\//.test(path) || /\\.(svg|ico|txt)$/.test(path)) {
      return env.ASSETS.fetch(request);
    }
    return app.fetch(request, env, ctx);
  }
};
`);
await rm(resolve(worker, "server/wrangler.json"), { force: true });
await writeFile(resolve(output, "_routes.json"), JSON.stringify({
  version: 1,
  include: ["/*"],
  exclude: ["/assets/*", "/images/*", "/media/*", "/downloads/*", "/favicon.svg", "/file.svg", "/globe.svg", "/window.svg"],
}, null, 2) + "\n");
// Pages must read the root Pages config, not Vite's Worker redirect.
await rm(resolve(root, ".wrangler/deploy/config.json"), { force: true });
console.log("Pages output ready: dist-pages");

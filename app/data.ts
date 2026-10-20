export type SkillLevel = "熟练使用" | "项目实践" | "正在学习";

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  category: "游戏项目" | "工具与引擎";
  status: string;
  period: string;
  role: string;
  summary: string;
  technologies: string[];
  cover?: string;
  video?: string;
  videoCover?: boolean;
  links: { label: string; href?: string; note?: string }[];
  background: string;
  goals: string[];
  responsibilities: string[];
  systems: { title: string; description: string }[];
  challenges: {
    problem: string;
    solution: string;
    result?: string;
  }[];
  results: string[];
  retrospective: string[];
  media: ProjectMedia[];
  codeHighlights?: {
    label: string;
    title: string;
    file: string;
    description: string;
    points: string[];
    code: string;
  }[];
};

const mediaBaseUrl =
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL ??
  "https://guandaqing-unity-portfolio.cardai.chatgpt.site";

const mediaUrl = (filename: string) =>
  `${mediaBaseUrl.replace(/\/$/, "")}/media/${filename}`;

export const projects: Project[] = [
  {
    slug: "thirdbattleline",
    title: "妖怪牌",
    eyebrow: "主力项目 · 独立开发",
    category: "游戏项目",
    status: "持续开发",
    period: "个人长期项目",
    role: "独立开发 / 系统、玩法与 UI",
    summary:
      "一款围绕五行元素、元素反应与天气机制展开的 Unity 卡牌对战游戏。重点不只在卡牌数量，而在可扩展的效果组合、稳定的结算顺序与移动端可读性。",
    technologies: [
      "Unity 2022 LTS",
      "C#",
      "ScriptableObject",
      "URP",
      "Addressables",
      "DOTween",
    ],
    cover: "/images/yaokaid-showcase.jpg",
    video: "/media/yaokaid-showcase.mp4",
    videoCover: true,
    links: [
      {
        label: "TapTap 页面",
        href: "https://www.taptap.cn/app/865611?os=android",
      },
      { label: "GitHub 源码", note: "私有仓库，暂未公开" },
    ],
    background:
      "项目源于对传统卡牌战斗系统的拆解实践。我希望用五行元素、天气与反制机制形成可推演的对局，同时让新增卡牌尽量通过配置完成，而不是持续堆叠特殊判断。",
    goals: [
      "建立可扩展的数据驱动卡牌系统",
      "保证连锁效果、事件响应和表现播放顺序清晰",
      "完成单机与 AI 对局闭环",
      "在移动端维持卡牌信息的可读性与操作反馈",
    ],
    responsibilities: [
      "整体架构、核心玩法与回合流程设计",
      "卡牌配置、运行时状态和效果系统开发",
      "事件结算、表现队列与 AI 决策链路",
      "卡牌 UI、交互反馈与移动端适配",
      "核心规则测试、性能热点定位与渐进式重构",
    ],
    systems: [
      {
        title: "数据驱动卡牌",
        description:
          "使用 CardSO 保存静态配置，RuntimeCard 承载对局状态；EffectSO、ActionSO 与 ConditionSO 组合复用卡牌效果。",
      },
      {
        title: "效果与事件结算",
        description:
          "主流程通过队列顺序结算，跨系统响应通过事件机制分发；将战斗逻辑和动画表现拆开，避免动画时长反向影响规则。",
      },
      {
        title: "五行与天气",
        description:
          "元素克制、元素反应和天气共同改变对局条件，使牌序、站位与触发时机成为可规划的决策。",
      },
      {
        title: "AI 对局",
        description:
          "按照动作生成、规则过滤、局面评分和执行拆分决策流程，方便单独测试并逐步调整策略。",
      },
    ],
    challenges: [
      {
        problem: "多个效果连续触发时，逻辑结算与动画播放容易互相阻塞。",
        solution:
          "拆分规则队列与表现队列，规则先产生明确结果，再由表现层消费指令；跨系统事件按优先级响应。",
        result: "结算职责更清晰，新效果接入时不必直接控制整段动画流程。",
      },
      {
        problem: "卡牌数量增加后，大量继承类和条件判断难以维护。",
        solution:
          "将静态配置、运行时状态、执行动作与触发条件分离，通过 ScriptableObject 组合效果。",
        result: "相似效果可以复用，配置与运行时修改互不污染。",
      },
      {
        problem: "移动屏幕上同时展示费用、名称、属性、攻防与描述会造成拥挤。",
        solution:
          "建立统一信息层级，关键数值固定位置，次要说明使用分区排版，并针对手机触控尺寸调整交互区域。",
      },
    ],
    results: [
      "完成单机与 AI 对局链路",
      "建立核心规则 EditMode 测试",
      "形成卡牌配置、运行时状态、效果结算和表现播放的完整链路",
      "已提供 TapTap 试玩版本与玩家反馈记录",
    ],
    retrospective: [
      "系统扩展性不能只依赖抽象层数量，新增一张卡牌所需的修改范围更能检验架构。",
      "逻辑和表现解耦后，需要更明确的事件生命周期与取消策略。",
      "下一阶段将继续验证网络化边界和更完整的对局内容。",
    ],
    media: [
      {
        type: "video",
        src: "/media/yaokaid-showcase.mp4",
        poster: "/images/yaokaid-showcase.jpg",
        alt: "Yaokaid 保护区场景与天气录屏",
        caption: "45 秒场景展示：玩家、妖怪与晴雨雾天气。",
      },
      {
        type: "video",
        src: mediaUrl("thirdbattleline-demo.mp4"),
        poster: "/images/yaokaid-battle-20261020.png",
        alt: "妖怪牌 实机对战演示",
        caption: "实机剪辑：回合流程、卡牌部署与效果结算",
      },
      {
        type: "image",
        src: "/images/yaokaid-card-wuer-ta-20261020.png",
        alt: "妖怪牌 雾耳獭卡牌",
        caption: "单位牌示例：费用、攻防、关键词与描述层级",
      },
      {
        type: "image",
        src: "/images/yaokaid-card-nipan-xie-20261020.png",
        alt: "妖怪牌 泥盘蟹卡牌",
        caption: "单位牌示例",
      },
      {
        type: "image",
        src: "/images/yaokaid-card-weiwei-li-20261020.png",
        alt: "妖怪牌 苇尾狸卡牌",
        caption: "单位牌示例：苇尾狸",
      },
      {
        type: "image",
        src: "/images/thirdbattleline-review.webp",
        alt: "妖怪牌 TapTap 评价截图",
        caption: "TapTap 试玩反馈截图，分数为截图当时记录",
      },
    ],
    codeHighlights: [
      {
        label: "创新机制",
        title: "五行反应的可预测结算内核",
        file: "ElementalHitSystem.cs",
        description:
          "把元素组合、伤害来源、天气快照、概率与随机结果收束为不可变结果对象；同一入口既能用于正式结算，也能用于 AI 预演与测试注入。",
        points: [
          "显式传入 WeatherSnapshot，避免读取易变的全局天气状态",
          "rollPercent 可注入，使概率逻辑能够稳定复现并编写单元测试",
          "配置数据库与 FallbackRules 双路径，兼顾数据驱动和资源缺失兜底",
        ],
        code: `public readonly struct ElementalReactionResult
{
    public readonly bool Triggered;
    public readonly ElementalReactionType ReactionType;
    public readonly int ChancePercent;
    public readonly int RollPercent;
}

public static ElementalReactionResult PreviewCombat(
    RuntimeCard attacker,
    RuntimeCard defender,
    WeatherSnapshot weather,
    int? rollPercent = null)
{
    var result = Preview(
        attacker.NativeElement,
        defender.NativeElement,
        DamageSourceType.Combat,
        attacker.CurrentAttack,
        weather,
        rollPercent);

    return IsSuppressedByExtinguish(attacker, defender, result)
        ? ElementalReactionResult.NoReaction
        : result;
}`,
      },
      {
        label: "核心框架",
        title: "效果逻辑与视觉表现的提交点分离",
        file: "EffectPresentationService / EffectContext",
        description:
          "法术、部署、持续触发、普攻和死亡共用同一表现入口。表现层在命中关键帧调用 onImpact，规则层不需要知道弹道、全屏动画或目标锚点如何实现。",
        points: [
          "Projectile、SpawnAtTarget、Fullscreen、CardCollision 与自定义 Presenter 统一分发",
          "EffectContext 保存逻辑语义，PresentationProfile 保存视觉语义",
          "旧资源字段可自动解析为新 Profile，支持渐进式迁移而非一次性重写",
        ],
        code: `IEnumerator PlayRoutine(
    EffectPresentationRequest request,
    Func<IEnumerator> onImpact = null,
    Action onComplete = null);

// 表现层只在命中关键帧提交规则结算
yield return presentationService.PlayRoutine(
    request,
    onImpact: () => ResolveSpellImpactRoutine(context),
    onComplete: () => ReleasePresentation(request));`,
      },
      {
        label: "网络架构",
        title: "Nakama Relay 与对局编排器",
        file: "Networking/Core + Networking/DTO",
        description:
          "网络层通过独立程序集接入 Nakama，将玩家意图 PlayerCommandDto 与服务器/Relay 结果 GameEventDto 分开处理，再由 NetworkGameOrchestrator 负责入队、去重和远端回放。",
        points: [
          "设备认证、Session 缓存、Socket、Matchmaker 与 Relay 已形成隔离封装",
          "OpCode、DTO 与序列化集中管理，降低客户端和服务端协议漂移风险",
          "NetworkCardLocator 使用 runtimeCardId、手牌索引与 sourceCardId 多级定位远端卡牌",
        ],
        code: `public interface IMatchNetworkClient
{
    event Action<PlayerCommandDto> OnPlayerCommand;
    event Action<GameEventDto> OnGameEvent;

    Task ConnectAsync();
    Task SendCommandAsync(PlayerCommandDto command);
}

// Orchestrator 统一接收、去重并排队回放
private void HandleRemoteCommand(PlayerCommandDto command)
{
    if (!processedCommandIds.Add(command.commandId)) return;
    pendingCommands.Enqueue(command);
}`,
      },
    ],
  },
  {
    slug: "kings-revival",
    title: "《国王复兴》",
    eyebrow: "GameJam · 独立开发与上线迭代",
    category: "游戏项目",
    status: "试玩版已发布 · 持续迭代",
    period: "2026.10 — 至今",
    role: "独立开发 / 玩法系统、功能集成与版本迭代",
    summary:
      "将城市发展与卡牌防守串联的 Unity 单机策略游戏。从阶段经营与战斗闭环扩展到攻城战、外交和贸易，重点实践多系统规则联动，以及上线后根据玩家反馈安排迭代。",
    technologies: ["Unity", "C#", "策略系统", "卡牌战斗", "版本迭代"],
    cover: "/images/kings-revival-showcase.jpg",
    video: "/media/kings-revival-showcase.mp4",
    videoCover: true,
    links: [
      { label: "TapTap 试玩页面", href: "https://www.taptap.cn/app/959274" },
      { label: "外交与贸易公告", href: "https://www.taptap.cn/moment/859258391162257518" },
      { label: "玩家反馈与开发者回复", href: "https://www.taptap.cn/app/959274/review" },
    ],
    background:
      "围绕 TapTap GameJam 的“涌现”主题开展短周期独立开发：先让收税、人才选择、城市升级、事件和防守战组成可玩的循环，再扩展经营与战斗内容。项目于 2026 年 10 月 7 日上线试玩；本案例依据已发布内容与玩家反馈整理，侧重规则设计、系统交互和迭代取舍。",
    goals: [
      "完成从城市经营、卡组编排到战斗结果的完整玩法循环",
      "让发展方向改变资源与可用卡牌，使建设决策影响战场选择",
      "通过外交与贸易扩展资源用途和后期经营决策",
      "区分功能交付与平衡验证，用真实试玩反馈确定后续改动",
    ],
    responsibilities: [
      "阶段经营流程与卡牌防守玩法开发",
      "军事、经济、工业、科技等发展板块的规则与内容整合",
      "攻城战、外交与贸易功能接入",
      "试玩版本发布、玩家反馈整理与后续更新安排",
    ],
    systems: [
      {
        title: "阶段经营与战斗循环",
        description: "收税提供发展预算，人才选择带来阶段增益；城市升级和事件改变备战条件，再通过编组进入防守战。战斗中暴露的不足成为下一轮资源投入的依据。",
      },
      {
        title: "跨板块发展条件",
        description: "军事、经济、工业与科技共同影响卡牌和资源。例如重盾兵的进一步推广需要军事与工业配合，经济与科技的阶段进度影响额外税收；区域发展还会推动主城成长，改变城防与编组容量。",
      },
      {
        title: "三国外交",
        description: "精灵、矮人、兽人分别拥有关系与外交等级。税银、矿物和货物可用于合作，使国内发展与对外关系竞争同一批资源；关系状态与成长等级承载不同的进度信息。",
      },
      {
        title: "贸易与资源分配",
        description: "按贸易对象区分页面，买卖数量加入清单后统一交易，并预览收入、支出与净收益。国内市场提供不受外国关系限制的交换渠道，同时用年度额度约束交易规模。",
      },
      {
        title: "攻城战与难度迭代",
        description: "在原有防守战基础上加入攻城战，扩展战斗内容。新增战斗会改变难度体验，因此本轮保留原敌人 AI 的行为，先收集新版反馈，再决定近战、远程和敌人行为的平衡调整。",
      },
    ],
    challenges: [
      {
        problem: "玩家反馈后期流程偏短，经营内容需要继续扩展。",
        solution: "在原有建设与战斗循环上接入外交、贸易和攻城战，增加对外合作及资源分配决策。",
        result: "已发布相关功能；后期节奏与经济平衡仍需结合新版本反馈验证。",
      },
      {
        problem: "近战承伤与远程输出的收益不匹配，修改敌人 AI 又会牵动整体难度。",
        solution: "本轮没有同时加强原敌人 AI；先观察加入攻城战后的实际体验，再安排针对性的平衡更新。",
        result: "明确了本轮改动边界，尚不将近战与远程平衡标记为已解决。",
      },
      {
        problem: "顾问增益和后期税收增长与升级成本不匹配。",
        solution: "将该问题纳入后续平衡范围，先观察贸易接入后资源循环的变化，再评估顾问和升级收益。",
      },
      {
        problem: "开场之后的剧情衔接和事件重复性影响体验。",
        solution: "本轮补充剧情衔接；更完整的剧情与事件内容留待后续迭代，无尽模式仍属于计划。",
        result: "已补充部分衔接内容，但没有将事件重复性描述为已彻底解决。",
      },
    ],
    results: [
      "完成可公开试玩的城市经营与卡牌战斗闭环",
      "在已发布版本中加入攻城战、外交与贸易内容",
      "收到具体玩家反馈，并公开说明已改内容、暂缓调整与后续计划",
      "形成从玩法实现、发布到反馈驱动迭代的独立开发经历",
    ],
    retrospective: [
      "多个板块共用资源后，单个升级的价值取决于其他系统的进度，需要从完整经营循环判断收益。",
      "新增战斗与经济系统会改变原有平衡；功能上线不能等同于平衡问题已经解决。",
      "后续重点是战斗收益、顾问与税收曲线、剧情事件和界面可读性；先验证现有内容，再推进额外模式。",
      "当前展示的是玩法与发布层面的工程案例；未附源码分析、自动化测试数量或性能指标。",
    ],
    media: [
      {
        type: "video",
        src: "/media/kings-revival-showcase.mp4",
        poster: "/images/kings-revival-showcase.jpg",
        alt: "国王复兴游戏录屏",
        caption: "45 秒游戏展示：城镇场景、发展、事件与卡牌战斗。",
      },
      {
        type: "image",
        src: "/images/kings-revival-diplomacy.jpg",
        alt: "国王复兴外交界面：三个势力标签、关系状态与外交等级",
        caption: "官方外交与贸易公告截图：关系状态、成长等级与资源消耗分别展示。",
      },
      {
        type: "image",
        src: "/images/kings-revival-trade.jpg",
        alt: "国王复兴贸易界面与交易清单",
        caption: "官方外交与贸易公告截图：按对象选择贸易，并预览交易收支。",
      },
    ],
  },
  {
    slug: "afterglow",
    title: "《余光》",
    eyebrow: "GameJam 作品 · 主程",
    category: "游戏项目",
    status: "已完成",
    period: "2024.10 — 2024.11",
    role: "主程 / Unity 客户端",
    summary:
      "一款以星空与光线变化为氛围核心的横版闯关作品。我负责从架构搭建到角色控制、关卡流程、存档和最终可试玩版本的开发闭环。",
    technologies: ["Unity", "C#", "UGUI", "Animator", "对象池", "本地存档"],
    cover: "/images/yuguang-cover.jpg",
    video: mediaUrl("yuguang-demo.mp4"),
    links: [
      {
        label: "TapTap 页面",
        href: "https://www.taptap.cn/app/728016?os=pc",
      },
    ],
    background:
      "《余光》是在限定时间内完成的 GameJam 横版闯关项目。团队需要快速确定可落地的核心体验，并把视觉氛围、角色手感和关卡节奏组合成完整 Demo。",
    goals: [
      "在有限周期内完成可独立试玩的核心循环",
      "实现移动、冲刺、二段跳与关卡交互",
      "用星空和洞穴环境建立清晰的视觉记忆点",
      "保证模块划分和协作过程可控",
    ],
    responsibilities: [
      "项目整体架构与代码模块划分",
      "角色控制、交互系统和关卡流程",
      "基础 UI、音频接入与游戏状态管理",
      "本地存档、关键数据持久化与资源管理",
      "根据试玩反馈调整参数、操作手感与节奏",
    ],
    systems: [
      {
        title: "角色控制",
        description:
          "组合基础移动、冲刺和二段跳，统一处理输入、状态切换与落地反馈，保证横版关卡中的操作连贯性。",
      },
      {
        title: "模块化结构",
        description:
          "按照 UI、Gameplay、Data 与 Audio 划分代码职责，使 GameJam 并行开发时的修改范围更加明确。",
      },
      {
        title: "关卡流程",
        description:
          "管理检查点、收集物、失败重置和关卡切换，并保存必要的玩家进度。",
      },
    ],
    challenges: [
      {
        problem: "GameJam 周期短，玩法、视觉与关卡需要同时快速迭代。",
        solution:
          "先完成最小可玩闭环，再按模块补充表现；用集中配置调整移动参数和关卡节奏。",
        result: "按期形成可试玩版本，并能根据反馈快速修改操作手感。",
      },
      {
        problem: "冲刺和二段跳叠加后容易出现状态冲突。",
        solution:
          "明确角色状态切换条件，统一处理空中次数、速度覆盖和落地重置。",
      },
    ],
    results: [
      "完成横版关卡、角色能力、收集与流程闭环",
      "形成 PC 端可试玩 Demo",
      "获得 TapTap 玩家正向操作与画面反馈",
    ],
    retrospective: [
      "限时开发中，先锁定可玩闭环比提前铺开大量内容更重要。",
      "角色手感需要结合关卡尺寸测试，不能只在空场景中调整参数。",
      "后续项目中继续加强自动化测试与更细的性能基线。",
    ],
    media: [
      {
        type: "video",
        src: mediaUrl("yuguang-demo.mp4"),
        poster: "/images/yuguang-cover.jpg",
        alt: "余光横版闯关实机演示",
        caption: "实机剪辑：移动、冲刺、二段跳与关卡场景",
      },
      {
        type: "image",
        src: "/images/yuguang-review.webp",
        alt: "余光 TapTap 玩家评价截图",
        caption: "TapTap 玩家反馈截图，分数为截图当时记录",
      },
    ],
  },
  {
    slug: "runtime-asset-engine",
    title: "自研引擎与程序资产体系",
    eyebrow: "技术研发 · 持续推进",
    category: "工具与引擎",
    status: "研发中",
    period: "持续开发",
    role: "架构设计 / 工具与运行时开发",
    summary:
      "围绕模板引擎、程序资产、独立启动器和运行时编辑器展开的长期技术项目，关注模块边界、稳定资源入口与可组合的工程工作流。",
    technologies: ["C++", "C#", "TypeScript", "ImGui", "序列化", "JobSystem"],
    links: [{ label: "项目资料", note: "整理后公开" }],
    background:
      "该项目用于探索游戏运行时、工具链和可复用程序资产之间的边界。重点不是复刻商业引擎功能，而是验证一条清晰、可演进的模块化主线。",
    goals: [
      "建立单向依赖的程序资产分层",
      "统一场景、资源、序列化和宿主接入方式",
      "支持源码或二进制形式的模板实例化",
      "为运行时编辑器与 AI 协作预留受控接口",
    ],
    responsibilities: [
      "整体模块边界、接口和依赖规则设计",
      "场景文档、缓存与序列化主线",
      "JobSystem、高精度计时与主线程断言",
      "启动器、资产扫描和模板实例化工作流",
      "C# 与 TypeScript 脚本接入方案",
    ],
    systems: [
      {
        title: "六层程序资产",
        description:
          "按照数据、基础、控制、系统、启动器与工具分层，核心接口向上提供能力，并限制反向依赖。",
      },
      {
        title: "场景与序列化",
        description:
          "围绕统一 SceneDocument 与版本控制组织场景缓存和 codec，减少不同加载路径产生的数据分歧。",
      },
      {
        title: "并行与运行时",
        description:
          "规划逻辑、渲染任务分离、无锁队列、并行 for 和主线程断言，并加入资源预算监测。",
      },
      {
        title: "资产管理工具",
        description:
          "独立启动器扫描接口与依赖，展示项目和模板信息，并输出源码或二进制实例。",
      },
    ],
    challenges: [
      {
        problem: "系统能力不断增加时，入口和依赖方向容易失控。",
        solution:
          "固定分层、接口、资源入口与宿主接入规则，让非法用法尽早失败，并保持模板为薄包装。",
      },
      {
        problem: "缓存场景加载后可能出现模型或动画材质丢失。",
        solution:
          "统一场景文档版本与 codec 路径，逐项核对资源引用在保存、缓存和恢复阶段的生命周期。",
      },
    ],
    results: [
      "已形成模块分层、依赖红线和关键系统方案",
      "持续验证场景缓存、资源恢复和工具链工作流",
      "项目仍在研发中，完成度与演示材料将随开发更新",
    ],
    retrospective: [
      "长期架构项目需要用可运行切片持续验证，而不是只积累设计文档。",
      "接口稳定性来自明确的不变量和失败策略，而不是一次性预测所有需求。",
    ],
    media: [],
  },
  {
    slug: "seekpilot",
    title: "SeekPilot",
    eyebrow: "原创工具 · AI Agent Workbench",
    category: "工具与引擎",
    status: "v0.2 开发中",
    period: "个人项目",
    role: "产品设计 / Agent 架构 / Python 开发",
    summary:
      "面向 DeepSeek 的本地优先 AI 编程智能体工作台，覆盖项目上下文理解、安全工具调用、补丁预览与回滚、测试执行及对抗式验收数据结构。",
    technologies: ["Python", "DeepSeek API", "Agent Loop", "Patch Engine", "Pytest", "PySide6"],
    links: [{ label: "GitHub 源码", note: "私有仓库，暂未公开" }],
    background:
      "SeekPilot 用于验证一个可控的本地编程 Agent：模型不直接任意修改工程，而是先读取上下文、生成可审查的修改提案，再经过风险分级、Diff 预览、应用和测试闭环。",
    goals: ["建立可继续执行的 Agent Loop", "限制高风险工具调用", "让补丁可预览、应用与回滚", "用测试和 Judge 数据结构记录验收结果"],
    responsibilities: ["Agent Loop 与上下文预算设计", "SEARCH/REPLACE Patch Engine", "Proposal Gate 与多文件修改流程", "Shell 风险分级与测试执行", "JSONL 会话持久化与桌面端骨架"],
    systems: [
      { title: "安全工具闭环", description: "将 read、search、git、shell 与测试工具纳入统一循环，并按 safe、confirm、dangerous 划分执行权限。" },
      { title: "Patch Engine", description: "生成 SEARCH/REPLACE 提案，先校验并展示 Diff，再批量应用；失败或结果不符合预期时支持回滚。" },
      { title: "上下文预算", description: "通过 ProjectOverview、可配置 max_steps 与可恢复会话减少重复读取，在步骤上限后保留继续分析能力。" },
      { title: "DeepJudge", description: "以 TaskContract、ChangeManifest、JudgeVerdict 和 Objection 描述任务、变更与验收意见，为后续对抗式验证预留运行时。" },
    ],
    challenges: [
      { problem: "Agent 能力越强，误改文件或执行危险命令的风险越高。", solution: "把修改拆成 proposal、diff、apply 和 rollback 阶段，并对 shell 操作做风险分级。", result: "模型输出与真实工程写入之间形成可审查的安全边界。" },
      { problem: "长任务会反复读取项目并耗尽上下文。", solution: "增加一次性 ProjectOverview、步骤预算和会话恢复，保存已完成操作摘要。" },
    ],
    results: ["已完成流式对话与 reasoning 展示", "已完成 Agent 工具调用闭环和 Patch Engine", "已接入 pytest 结构化结果", "DeepJudge 数据结构已就绪，桌面 MVP 正在推进"],
    retrospective: ["智能体的价值不仅是生成代码，还包括限制权限、保留证据与可恢复执行。", "下一阶段重点是完成 DeepJudge Runtime 和 PySide6 Desktop MVP。"],
    media: [],
  },
  {
    slug: "thirdbattleline-network",
    title: "妖怪牌 网络对战框架",
    eyebrow: "网络模块 · 从主项目抽离展示",
    category: "工具与引擎",
    status: "M3 推进中",
    period: "2026 — 至今",
    role: "客户端网络架构 / 协议与联调",
    summary:
      "基于 Nakama 的卡牌对战网络层：独立程序集封装认证、Socket、Matchmaker、Relay、DTO 与序列化，并以对局编排器逐步接入双玩家回放和确定性同步。",
    technologies: ["Unity", "C#", "Nakama", "WebSocket", "DTO", "TypeScript RPC"],
    links: [{ label: "所属项目", href: "/projects/thirdbattleline" }, { label: "NetCardGame", href: "https://github.com/bigqingG/NetCardGame" }],
    background:
      "该模块从 妖怪牌 的稳定单机/AI 主链之外隔离接入。先用双客户端 Ping/Pong 验证连接和 Relay，再逐步接入 EndTurn、PlayCard 与后续状态校验，避免网络改造破坏既有玩法。",
    goals: ["完成双玩家最小可验证 PvP 链路", "建立客户端与服务端共享的协议事实源", "支持命令去重和远端动作回放", "为确定性随机、状态哈希与断线恢复预留边界"],
    responsibilities: ["Nakama 客户端与 Session 管理", "Matchmaker、Relay 和 OpCode 分流", "PlayerCommandDto / GameEventDto 协议设计", "NetworkGameOrchestrator 与远端玩家装配", "双 Editor 联调与 Smoke Test"],
    systems: [
      { title: "隔离网络程序集", description: "ThirdBattleLine.Networking 显式依赖 Runtime 与 NakamaRuntime，联网能力仅由调试入口或编排器主动启用。" },
      { title: "命令与事件双通道", description: "玩家意图和服务器结果使用不同 DTO 通道，便于权限校验、回放与后续权威状态演进。" },
      { title: "远端卡牌定位", description: "按 runtimeCardId、handIndex、sourceCardId 多级映射网络命令，降低运行时对象引用无法跨客户端传输的问题。" },
    ],
    challenges: [
      { problem: "Unity 运行时对象引用不能直接在两个客户端间共享。", solution: "使用稳定 DTO 和多级卡牌定位策略，将网络标识映射回本地 RuntimeCard。" },
      { problem: "一次性网络化整个战斗系统会显著扩大回归范围。", solution: "按认证、Relay、EndTurn、无目标出牌、确定性随机和重连分里程碑推进。", result: "目前单机/AI 仍保持稳定主路径，网络模块可独立验证。" },
    ],
    results: ["完成设备认证、Session 缓存和 Socket 连接", "完成 Matchmaker 与双 Editor Relay Ping/Pong 验证", "建立网络编排器、远端玩家与 DTO 基础结构", "PlayCard Relay、状态校验与重连仍在开发中"],
    retrospective: ["网络模块需要明确区分“代码已接入”和“完整对局已验收”。", "NetCardGame 仓库目前作为后续独立整理入口，实际可展示实现以 妖怪牌 私有仓库为准。"],
    media: [],
  },
  {
    slug: "urp-toon-shader-study",
    title: "URP Toon Shader 学习实践",
    eyebrow: "Shader 学习与验证 · 非原创上游项目",
    category: "工具与引擎",
    status: "学习记录",
    period: "个人学习",
    role: "Unity 6 / URP 兼容验证与源码阅读",
    summary:
      "围绕公开的 URP Toon Shader 教程仓库进行源码阅读和 Unity 6 兼容性学习。该仓库并非我的原创 Shader，因此在作品集中明确标注为学习实践。",
    technologies: ["Unity 6", "URP", "HLSL", "Toon Shading", "ShaderLab"],
    links: [{ label: "GitHub 仓库", href: "https://github.com/bigqingG/UnityURPToonLitShaderExample" }],
    background: "通过结构较短、可阅读的 URP Toon Shader 示例理解卡通光照、描边与跨版本渲染管线适配。",
    goals: ["阅读 URP Toon 光照实现", "验证 Unity 6 / URP 环境兼容性", "积累可用于卡牌项目的二次元渲染知识"],
    responsibilities: ["源码阅读与运行验证", "材质参数与渲染效果对比", "记录 Unity 版本与 URP 依赖"],
    systems: [{ title: "学习边界", description: "当前仓库内容来自公开教程项目；网站只展示学习、验证与理解，不把上游实现表述为个人原创成果。" }],
    challenges: [{ problem: "不同 Unity 与 URP 版本的 Shader API 会变化。", solution: "核对 Package 版本、Pass 与 URP Include，并通过实际材质表现验证兼容性。" }],
    results: ["建立 URP Toon Shader 源码阅读入口", "明确支持版本和学习范围"],
    retrospective: ["后续只有在形成明确的原创改动、对比图与技术说明后，才升级为独立原创 Shader 项目。"],
    media: [],
  },
];

export const skillGroups = [
  {
    category: "游戏开发",
    items: [
      ["Unity", "熟练使用", "多款 PC / 移动端项目"],
      ["UGUI", "熟练使用", "卡牌 UI 与编辑器界面"],
      ["Animator", "项目实践", "角色与界面表现"],
      ["Timeline", "项目实践", "项目演出与流程"],
    ],
  },
  {
    category: "编程语言",
    items: [
      ["C#", "熟练使用", "Unity 主力语言"],
      ["C++", "项目实践", "引擎与图形方向"],
      ["TypeScript", "项目实践", "UGC 与脚本方向"],
    ],
  },
  {
    category: "游戏架构",
    items: [
      ["状态机", "熟练使用", "角色、回合和组件状态"],
      ["事件系统", "熟练使用", "卡牌结算与跨系统通信"],
      ["数据驱动", "熟练使用", "ScriptableObject 卡牌系统"],
      ["对象池", "项目实践", "项目性能与资源复用"],
      ["MVC", "项目实践", "模块职责划分"],
    ],
  },
  {
    category: "图形与优化",
    items: [
      ["Shader Graph", "项目实践", "效果实验与材质"],
      ["URP / HDRP", "项目实践", "渲染项目实践"],
      ["性能分析", "项目实践", "DrawCall、资源与热点定位"],
    ],
  },
  {
    category: "工程工具",
    items: [
      ["Git / GitHub", "熟练使用", "分支、合并与版本协作"],
      ["Visual Studio", "熟练使用", "C# 日常开发"],
      ["Cursor", "项目实践", "代码检索与 AI 协作"],
    ],
  },
  {
    category: "平台与发布",
    items: [
      ["Windows", "熟练使用", "PC 项目开发与发布"],
      ["WebGL", "项目实践", "构建、字体与兼容问题定位"],
      ["移动端适配", "项目实践", "布局、触控与资源优化"],
    ],
  },
] as const;

export const timeline = [
  {
    date: "2023 — 2027",
    title: "河南城建学院 · 数字媒体技术本科",
    text: "系统学习数字媒体、程序设计与交互内容制作，并将主要方向逐步聚焦到 Unity 游戏开发。",
  },
  {
    date: "2024.06 — 2025.06",
    title: "悟空互游 · 前端开发工程师",
    text: "参与抖音小游戏玩法界面、交互逻辑与功能维护，经历需求实现、测试定位和版本上线流程。",
  },
  {
    date: "2024.10 — 2024.11",
    title: "《余光》GameJam · 主程",
    text: "负责项目架构、角色控制、关卡流程、基础 UI 和存档，从原型完成到可试玩 Demo。",
  },
  {
    date: "个人长期项目",
    title: "妖怪牌 · 独立开发",
    text: "持续迭代数据驱动卡牌、事件结算、AI、移动端 UI 和测试体系，逐步推进架构重构。",
  },
  {
    date: "2026.03 — 至今",
    title: "MetaApp · UGC 编辑器开发实习生",
    text: "参与组件生命周期、运行时状态管理、事件释放与场景切换问题修复，并支持版本集成和回归。",
  },
  {
    date: "当前",
    title: "继续学习",
    text: "持续深入 Unity 客户端架构、工具开发、渲染性能、网络化与自研运行时系统。",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

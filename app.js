/**
 * 初二古诗文背诵小游戏
 * 纯静态 H5：无构建步骤，直接浏览器打开 index.html 即可运行。
 */

// ==================== 诗文数据 ====================
// contentRaw 保留用户提供的带拼音原文，游戏展示时会自动剥离拼音。
const works = [
  // ---------- 诗 ----------
  {
    id: "yewang",
    title: "野望",
    author: "王绩",
    dynasty: "唐",
    type: "poem",
    tags: ["唐诗", "八上"],
    contentRaw: [
      "东皋gāo薄暮望，",
      "徙xǐ倚yǐ欲何依。",
      "树树皆秋色，",
      "山山唯落晖。",
      "牧人驱犊dú返，",
      "猎马带禽归。",
      "相顾无相识，",
      "长歌怀采薇。"
    ]
  },
  {
    id: "huanghelou",
    title: "黄鹤楼",
    author: "崔颢",
    dynasty: "唐",
    type: "poem",
    tags: ["唐诗", "八上"],
    contentRaw: [
      "昔人已乘黄鹤去，",
      "此地空余黄鹤楼。",
      "黄鹤一去不复返，",
      "白云千载空悠悠。",
      "晴川历历汉阳树，",
      "芳草萋萋鹦鹉洲。",
      "日暮乡关何处是？",
      "烟波江上使人愁。"
    ]
  },
  {
    id: "shizhisaishang",
    title: "使至塞上",
    author: "王维",
    dynasty: "唐",
    type: "poem",
    tags: ["唐诗", "八上"],
    contentRaw: [
      "单车欲问边，",
      "属国过居延。",
      "征蓬出汉塞，",
      "归雁入胡天。",
      "大漠孤烟直，",
      "长河落日圆。",
      "萧关逢候骑，",
      "都护在燕然。"
    ]
  },
  {
    id: "dujingmensongbie",
    title: "渡荆门送别",
    author: "李白",
    dynasty: "唐",
    type: "poem",
    tags: ["唐诗", "八上"],
    contentRaw: [
      "渡远荆门外，",
      "来从楚国游。",
      "山随平野尽，",
      "江入大荒流。",
      "月下飞天镜，",
      "云生结海楼。",
      "仍怜故乡水，",
      "万里送行舟。"
    ]
  },
  {
    id: "qiantanghuchunxing",
    title: "钱塘湖春行",
    author: "白居易",
    dynasty: "唐",
    type: "poem",
    tags: ["唐诗", "八上"],
    contentRaw: [
      "孤山寺北贾亭西，",
      "水面初平云脚低。",
      "几处早莺争暖树，",
      "谁家新燕啄春泥。",
      "乱花渐欲迷人眼，",
      "浅草才能没马蹄。",
      "最爱湖东行不足，",
      "绿杨阴里白沙堤dī。"
    ]
  },
  {
    id: "tingzhongyouqishu",
    title: "庭中有奇树",
    author: "佚名",
    dynasty: "两汉",
    type: "poem",
    tags: ["古诗十九首", "八上"],
    contentRaw: [
      "庭中有奇树，",
      "绿叶发华滋。",
      "攀条折其荣，",
      "将以遗所思。",
      "馨香盈怀袖，",
      "路远莫致之。",
      "此物何足贵？",
      "但感别经时。"
    ]
  },
  {
    id: "guisuishou",
    title: "龟虽寿",
    author: "曹操",
    dynasty: "两汉",
    type: "poem",
    tags: ["乐府", "八上"],
    contentRaw: [
      "神龟虽寿，",
      "犹有竟时。",
      "腾蛇乘雾，",
      "终为土灰。",
      "老骥jì伏枥lì，",
      "志在千里。",
      "烈士暮年，",
      "壮心不已。",
      "盈缩之期，",
      "不但在天；",
      "养怡之福，",
      "可得永年。",
      "幸甚至哉zāi，",
      "歌以咏志。"
    ]
  },
  {
    id: "zengcongdier",
    title: "赠从弟·其二",
    author: "刘桢",
    dynasty: "两汉",
    type: "poem",
    tags: ["建安", "八上"],
    contentRaw: [
      "亭亭山上松，",
      "瑟sè瑟谷中风。",
      "风声一何盛，",
      "松枝一何劲。",
      "冰霜正惨凄，",
      "终岁常端正。",
      "岂不罹lí凝寒，",
      "松柏有本性。"
    ]
  },
  {
    id: "liangfuxing",
    title: "梁甫行",
    author: "曹植",
    dynasty: "魏晋",
    type: "poem",
    tags: ["乐府", "八上"],
    contentRaw: [
      "八方各异气，",
      "千里殊风雨。",
      "剧哉zāi边海民，",
      "寄身于草野。",
      "妻子象禽兽，",
      "行止依林阻。",
      "柴门何萧条，",
      "狐兔翔我宇。"
    ]
  },
  {
    id: "yinjiuwu",
    title: "饮酒·其五",
    author: "陶渊明",
    dynasty: "魏晋",
    type: "poem",
    tags: ["田园", "八上"],
    contentRaw: [
      "结庐在人境，",
      "而无车马喧。",
      "问君何能尔？",
      "心远地自偏。",
      "采菊东篱下，",
      "悠然见南山。",
      "山气日夕佳，",
      "飞鸟相与还。",
      "此中有真意，",
      "欲辨已忘言。"
    ]
  },
  {
    id: "chunwang",
    title: "春望",
    author: "杜甫",
    dynasty: "唐",
    type: "poem",
    tags: ["唐诗", "八上"],
    contentRaw: [
      "国破山河在，",
      "城春草木深。",
      "感时花溅泪，",
      "恨别鸟惊心。",
      "烽火连三月，",
      "家书抵dǐ万金。",
      "白头搔更短，",
      "浑欲不胜簪zān。"
    ]
  },
  {
    id: "yanmentaishouxing",
    title: "雁门太守行",
    author: "李贺",
    dynasty: "唐",
    type: "poem",
    tags: ["唐诗", "八上"],
    contentRaw: [
      "黑云压城城欲摧，",
      "甲光向日金鳞开。",
      "角声满天秋色里，",
      "塞上燕yān脂凝夜紫。",
      "半卷红旗临易水，",
      "霜重鼓寒声不起。",
      "报君黄金台上意，",
      "提携xié玉龙为君死。"
    ]
  },
  {
    id: "chibi",
    title: "赤壁",
    author: "杜牧",
    dynasty: "唐",
    type: "poem",
    tags: ["唐诗", "八上"],
    contentRaw: [
      "折戟jǐ沉沙铁未销，",
      "自将磨洗认前朝。",
      "东风不与周郎便，",
      "铜雀春深锁二乔。"
    ]
  },
  {
    id: "yujiaao",
    title: "渔家傲",
    author: "李清照",
    dynasty: "宋",
    type: "poem",
    tags: ["宋词", "八上"],
    contentRaw: [
      "天接云涛连晓雾，",
      "星河欲转千帆舞。",
      "仿佛梦魂归帝所。",
      "闻天语，",
      "殷yīn勤问我归何处。",
      "我报路长嗟日暮，",
      "学诗谩màn有惊人句。",
      "九万里风鹏正举。",
      "风休住，",
      "蓬舟吹取三山去！"
    ]
  },
  {
    id: "huanxisha",
    title: "浣溪沙",
    author: "晏殊",
    dynasty: "宋",
    type: "poem",
    tags: ["宋词", "八上"],
    contentRaw: [
      "一曲新词酒一杯，",
      "去年天气旧亭台。",
      "夕阳西下几时回？",
      "无可奈何花落去，",
      "似曾相识燕归来。",
      "小园香径独徘徊páihuái。"
    ]
  },
  {
    id: "caisangzi",
    title: "采桑子",
    author: "欧阳修",
    dynasty: "宋",
    type: "poem",
    tags: ["宋词", "八上"],
    contentRaw: [
      "轻舟短棹zhào西湖好，",
      "绿水逶迤wēiyí。",
      "芳草长堤，",
      "隐隐笙shēng歌处处随。",
      "无风水面琉璃滑，",
      "不觉船移。",
      "微动涟漪yī，",
      "惊起沙禽掠lüè岸飞。"
    ]
  },
  {
    id: "xiangjianhuan",
    title: "相见欢",
    author: "朱敦儒",
    dynasty: "宋",
    type: "poem",
    tags: ["宋词", "八上"],
    contentRaw: [
      "金陵城上西楼，",
      "倚清秋。",
      "万里夕阳垂地大江流。",
      "中原乱，",
      "簪zān缨yīng散，",
      "几时收？",
      "试倩悲风吹泪过扬州。"
    ]
  },
  {
    id: "rumengling",
    title: "如梦令",
    author: "李清照",
    dynasty: "宋",
    type: "poem",
    tags: ["宋词", "八上"],
    contentRaw: [
      "常记溪亭日暮，",
      "沉醉不知归路。",
      "兴尽晚回舟，",
      "误入藕花深处。",
      "争渡，",
      "争渡，",
      "惊起一滩鸥鹭。"
    ]
  },
  // ---------- 文言文 ----------
  {
    id: "sanxia",
    title: "三峡",
    author: "郦道元",
    dynasty: "南北朝",
    type: "prose",
    tags: ["散文", "八上"],
    contentRaw: [
      "自三峡七百里中，两岸连山，略无阙quē处。",
      "重chóng岩叠嶂，隐天蔽日。",
      "自非亭午夜分，不见曦xī月。",
      "至于夏水襄xiāng陵，沿溯sù阻绝。",
      "或王命急宣，有时朝发白帝，暮到江陵，其间千二百里，虽乘奔御风，不以疾也。",
      "春冬之时，则素湍绿潭，回清倒影。",
      "绝巘yǎn多生怪柏，悬泉瀑布，飞漱sù其间，清荣峻茂，良多趣味。",
      "每至晴初霜旦，林寒涧肃，常有高猿长啸，属zhǔ引凄异，空谷传响，哀转久绝。",
      "故渔者歌曰：“巴东三峡巫峡长，猿鸣三声泪沾裳。”"
    ]
  },
  {
    id: "daxiezhongshushu",
    title: "答谢中书书",
    author: "陶弘景",
    dynasty: "南朝",
    type: "prose",
    tags: ["散文", "八上"],
    contentRaw: [
      "山川之美，古来共谈。",
      "高峰入云，清流见底。",
      "两岸石壁，五色交辉。",
      "青林翠竹，四时俱备。",
      "晓雾将歇，猿鸟乱鸣；",
      "夕日欲颓tuí，沉麟竞跃。",
      "实是欲界之仙都。",
      "自康乐以来，未复有能与yù其奇者。"
    ]
  },
  {
    id: "jichengtiansiyeyou",
    title: "记承天寺夜游",
    author: "苏轼",
    dynasty: "宋",
    type: "prose",
    tags: ["散文", "八上"],
    contentRaw: [
      "元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。",
      "念无与为乐者，遂至承天寺寻张怀民。",
      "怀民亦未寝，相与步于中庭。",
      "庭下如积水空明，水中藻、荇xìng交横，盖竹柏影也。",
      "何夜无月？",
      "何处无竹柏？",
      "但少闲人如吾两人者耳。"
    ]
  },
  {
    id: "deduoduozhu",
    title: "得道多助，失道寡助",
    author: "孟子",
    dynasty: "战国",
    type: "prose",
    tags: ["孟子", "八上"],
    contentRaw: [
      "天时不如地利，地利不如人和。",
      "三里之城，七里之郭，环而攻之而不胜。",
      "夫环而攻之，必有得天时者矣，然而不胜者，是天时不如地利也。",
      "城非不高也，池非不深也，兵革非不坚利也，米粟sù非不多也，委而去之，是地利不如人和也。",
      "故曰：域yù民不以封疆之界，固国不以山溪之险，威天下不以兵革之利。",
      "得道者多助，失道者寡助。",
      "寡助之至，亲戚畔pàn之；",
      "多助之至，天下顺之。",
      "以天下之所顺，攻亲戚之所畔，故君子有不战，战必胜矣。"
    ]
  },
  {
    id: "fugubunengyin",
    title: "富贵不能淫",
    author: "孟子",
    dynasty: "战国",
    type: "prose",
    tags: ["孟子", "八上"],
    contentRaw: [
      "景春曰：“公孙衍yǎn、张仪岂不诚大丈夫哉？",
      "一怒而诸侯惧，安居而天下熄xī。”",
      "孟子曰：“是焉得为大丈夫乎？",
      "子未学礼乎？",
      "丈夫之冠也，父命之；",
      "女子之嫁也，母命之，往送之门，戒之曰：‘往之女家，必敬必戒，无违夫子！’",
      "以顺为正者，妾妇之道也。",
      "居天下之广居，立天下之正位，行天下之大道。",
      "得志，与民由之；",
      "不得志，独行其道。",
      "富贵不能淫，贫贱不能移，威武不能屈，此之谓大丈夫。”"
    ]
  },
  {
    id: "shengyuhuan",
    title: "生于忧患，死于安乐",
    author: "孟子",
    dynasty: "战国",
    type: "prose",
    tags: ["孟子", "八上"],
    contentRaw: [
      "舜shùn发于畎亩之中，傅说yuè举于版筑之间，胶鬲gé举于鱼盐之中，管夷吾举于士，孙叔敖举于海，百里奚举于市。",
      "故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂yú乱其所为，所以动心忍性，曾益其所不能。",
      "人恒过，然后能改；",
      "困于心，衡héng于虑，而后作；",
      "征于色，发于声，而后喻。",
      "入则无法家拂bì士，出则无敌国外患者，国恒亡。",
      "然后知生于忧患而死于安乐也。"
    ]
  },
  {
    id: "yuzhuusishu",
    title: "与朱元思书",
    author: "吴均",
    dynasty: "南北朝",
    type: "prose",
    tags: ["散文", "八上"],
    contentRaw: [
      "风烟俱净，天山共色。",
      "从流飘荡，任意东西。",
      "自富阳至桐庐一百许里，奇山异水，天下独绝。",
      "水皆缥碧，千丈见底。",
      "游鱼细石，直视无碍。",
      "急湍甚箭，猛浪若奔。",
      "夹岸高山，皆生寒树，负势竞上，互相轩邈miǎo，争高直指，千百成峰。",
      "泉水激石，泠泠líng作响；",
      "好鸟相鸣，嘤嘤成韵。",
      "蝉则千转不穷，猿则百叫无绝。",
      "鸢yān飞戾lì天者，望峰息心；",
      "经纶lún世务者，窥kuī谷忘反。",
      "横柯kē上蔽，在昼犹昏；",
      "疏条交映，有时见日。"
    ]
  }
];

// ==================== 工具函数 ====================
const $ = (id) => document.getElementById(id);

function stripPinyin(text) {
  return text.replace(
    /([一-龥])[a-zA-Züāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]+/g,
    '$1'
  );
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(answer, sourceWork, allWorks, count = 3) {
  const set = new Set();
  const sameWorkLines = sourceWork.contentRaw
    .map(stripPinyin)
    .filter((line) => line && line !== answer);
  if (sameWorkLines.length) {
    set.add(shuffle(sameWorkLines)[0]);
  }
  const allLines = allWorks
    .flatMap((w) => w.contentRaw.map(stripPinyin))
    .filter((line) => line && line !== answer);
  const shuffled = shuffle(allLines);
  for (const line of shuffled) {
    if (set.size >= count) break;
    set.add(line);
  }
  return shuffle([...set]);
}

function pickOthers(allValues, correct, count = 3) {
  const others = shuffle(allValues.filter((v) => v !== correct));
  return others.slice(0, count);
}

function getWorkById(id) {
  return works.find((w) => w.id === id);
}

function getWorkFullText(work, withPinyin = false) {
  return work.contentRaw.map((line) => (withPinyin ? line : stripPinyin(line))).join('<br>');
}

// ==================== 状态 ====================
const STORAGE_KEYS = {
  score: 'poetryScore',
  difficult: 'poetryDifficult',
  filter: 'poetryFilter'
};

const state = {
  score: Number(localStorage.getItem(STORAGE_KEYS.score) || 0),
  streak: 0,
  quizPool: [],
  quizIndex: 0,
  quizCurrent: null,
  quizFilter: localStorage.getItem(STORAGE_KEYS.filter) || 'all',
  quizShowPinyin: false,
  orderWork: works[0],
  orderCurrent: [],
  metaType: 'author',
  metaCurrent: null,
  difficult: JSON.parse(localStorage.getItem(STORAGE_KEYS.difficult) || '[]'),
  catalogFilter: 'all',
  catalogPinyin: false
};

// ==================== 题库生成 ====================
function buildQuizPool() {
  const filter = state.quizFilter;
  const filtered = filter === 'all'
    ? works
    : filter === 'poem'
    ? works.filter((w) => w.type === 'poem')
    : filter === 'prose'
    ? works.filter((w) => w.type === 'prose')
    : works.filter((w) => w.id === filter);

  const pool = [];
  filtered.forEach((work) => {
    const lines = work.contentRaw.map(stripPinyin);
    lines.forEach((line, i) => {
      if (i >= lines.length - 1) return;
      const answer = lines[i + 1];
      const distractors = pickDistractors(answer, work, works, 3);
      const options = shuffle([answer, ...distractors]);
      pool.push({
        id: `${work.id}-${i}`,
        workId: work.id,
        title: work.title,
        author: work.author,
        dynasty: work.dynasty,
        promptLine: line,
        answer,
        options,
        answerIndex: options.indexOf(answer),
        rawPrompt: work.contentRaw[i],
        rawAnswer: work.contentRaw[i + 1]
      });
    });
  });
  return shuffle(pool);
}

function buildMetaPool(type) {
  const allAuthors = [...new Set(works.map((w) => w.author))];
  const allDynasties = [...new Set(works.map((w) => w.dynasty))];
  const pool = works.map((work) => {
    const correct = type === 'author' ? work.author : work.dynasty;
    const allValues = type === 'author' ? allAuthors : allDynasties;
    const options = shuffle([correct, ...pickOthers(allValues, correct, 3)]);
    return {
      workId: work.id,
      title: work.title,
      author: work.author,
      dynasty: work.dynasty,
      type,
      question: type === 'author'
        ? `《${work.title}》的作者是？`
        : `《${work.title}》创作于哪个朝代？`,
      correct,
      options,
      answerIndex: options.indexOf(correct)
    };
  });
  return shuffle(pool);
}

// ==================== 渲染：下一句闯关 ====================
function initQuizFilter() {
  const select = $('quizFilter');
  select.innerHTML = `
    <option value="all">全部作品</option>
    <option value="poem">仅诗</option>
    <option value="prose">仅文言文</option>
    ${works.map((w) => `<option value="${w.id}">《${w.title}》</option>`).join('')}
  `;
  select.value = state.quizFilter;
}

function renderScoreboard() {
  $('score').textContent = state.score;
  $('streak').textContent = state.streak;
  $('difficultCount').textContent = state.difficult.length;
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.score, state.score);
  localStorage.setItem(STORAGE_KEYS.difficult, JSON.stringify(state.difficult));
  localStorage.setItem(STORAGE_KEYS.filter, state.quizFilter);
  renderScoreboard();
}

function nextQuiz() {
  if (!state.quizPool.length || state.quizIndex >= state.quizPool.length) {
    state.quizPool = buildQuizPool();
    state.quizIndex = 0;
  }
  state.quizCurrent = state.quizPool[state.quizIndex];
  state.quizShowPinyin = false;
  renderQuiz();
}

function renderQuiz() {
  const q = state.quizCurrent;
  if (!q) return;
  const prompt = state.quizShowPinyin ? q.rawPrompt : stripPinyin(q.rawPrompt);
  const pinyinHint = state.quizShowPinyin
    ? ''
    : '<p class="prompt-hint">点击「显示拼音」可查看提示</p>';
  $('quizCard').innerHTML = `
    <div class="meta">
      <span class="title">《${q.title}》</span>
      <span class="author">${q.author} · ${q.dynasty}</span>
    </div>
    <div class="progress">题目 ${state.quizIndex + 1} / ${state.quizPool.length}</div>
    <div class="prompt">${prompt}${pinyinHint}</div>
    <div class="options">
      ${q.options.map((opt, i) => `
        <button class="option" data-index="${i}">
          ${state.quizShowPinyin ? q.workId ? getRawLine(q.workId, opt) : opt : opt}
        </button>
      `).join('')}
    </div>
  `;
  $('quizFeedback').className = 'feedback';
  $('quizFeedback').innerHTML = '';
  $('pinyinQuizBtn').textContent = state.quizShowPinyin ? '隐藏拼音' : '显示拼音';

  document.querySelectorAll('#quizCard .option').forEach((btn) => {
    btn.addEventListener('click', onQuizAnswer);
  });
}

function getRawLine(workId, cleanLine) {
  const work = getWorkById(workId);
  if (!work) return cleanLine;
  const raw = work.contentRaw.find((line) => stripPinyin(line) === cleanLine);
  return raw || cleanLine;
}

function onQuizAnswer(e) {
  const btn = e.currentTarget;
  const index = Number(btn.dataset.index);
  const q = state.quizCurrent;
  const allBtns = document.querySelectorAll('#quizCard .option');
  allBtns.forEach((b) => (b.disabled = true));

  if (index === q.answerIndex) {
    btn.classList.add('correct');
    const bonus = Math.min(state.streak, 5) * 2;
    state.score += 10 + bonus;
    state.streak += 1;
    showFeedback('quizFeedback', true, `回答正确！${bonus ? `连击加成 +${bonus}` : ''}`);
  } else {
    btn.classList.add('wrong');
    allBtns[q.answerIndex].classList.add('correct');
    state.streak = 0;
    addDifficult(q);
    showFeedback('quizFeedback', false, `正确答案是：${q.answer}`);
  }
  saveState();
}

// ==================== 渲染：诗句排序（拖拽） ====================
function initOrderSelect() {
  const select = $('orderSelect');
  select.innerHTML = works.map((w) => `<option value="${w.id}">《${w.title}》</option>`).join('');
}

function newOrder() {
  const work = getWorkById($('orderSelect').value) || works[0];
  state.orderWork = work;
  state.orderCurrent = shuffle(work.contentRaw.map(stripPinyin));
  renderOrder();
}

function renderOrder() {
  const work = state.orderWork;
  $('orderCard').innerHTML = `
    <div class="meta">
      <span class="title">《${work.title}》</span>
      <span class="author">${work.author} · ${work.dynasty}</span>
    </div>
    <p style="margin:0 0 12px; font-size:14px; color:var(--muted);">
      拖拽 ⠿ 调整顺序
    </p>
    <div class="order-rows">
      ${state.orderCurrent.map((line, i) => `
        <div class="order-row" draggable="true" data-index="${i}">
          <span class="drag-handle" aria-label="拖拽排序">⠿</span>
          <span class="idx">${i + 1}</span>
          <span class="line">${line}</span>
        </div>
      `).join('')}
    </div>
  `;
  $('orderFeedback').className = 'feedback';
  $('orderFeedback').innerHTML = '';
  _initOrderDrag();
}

// ========== 拖拽排序引擎 ==========
function _reorder(from, to) {
  if (from === to) return;
  const item = state.orderCurrent.splice(from, 1)[0];
  state.orderCurrent.splice(to, 0, item);
  renderOrder();
}

function _initOrderDrag() {
  const container = document.querySelector('.order-rows');
  if (!container) return;

  let dragEl = null;
  let dragIdx = -1;

  // ----- HTML5 Drag & Drop（桌面 / Android Chrome） -----
  container.querySelectorAll('.order-row').forEach((row) => {
    row.addEventListener('dragstart', (e) => {
      dragEl = row;
      dragIdx = parseInt(row.dataset.index);
      row.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(dragIdx));
    });

    row.addEventListener('dragenter', (e) => {
      e.preventDefault();
      if (row === dragEl) return;
      const rect = row.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      row.classList.add(e.clientY < mid ? 'drag-over-top' : 'drag-over-bottom');
    });

    row.addEventListener('dragleave', () => {
      row.classList.remove('drag-over-top', 'drag-over-bottom');
    });

    row.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });

    row.addEventListener('drop', (e) => {
      e.preventDefault();
      row.classList.remove('drag-over-top', 'drag-over-bottom');
      if (row === dragEl) return;
      const from = dragIdx;
      const rect = row.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      let to = parseInt(row.dataset.index);
      if (e.clientY > mid && from < to) to += 1;
      else if (e.clientY <= mid && from > to) to -= 1;
      _reorder(from, Math.max(0, Math.min(state.orderCurrent.length - 1, to)));
    });
  });

  container.addEventListener('dragend', () => {
    container.querySelectorAll('.order-row').forEach((r) => {
      r.classList.remove('dragging', 'drag-over-top', 'drag-over-bottom');
    });
    dragEl = null;
    dragIdx = -1;
  });

  // ----- 触摸拖拽（iOS / 全平台兼容） -----
  let ts = null; // { row, fromIndex, lastY }

  container.addEventListener('touchstart', (e) => {
    const row = e.target.closest('.order-row');
    if (!row) return;
    ts = {
      row,
      fromIndex: parseInt(row.dataset.index),
      lastY: e.touches[0].clientY
    };
    row.classList.add('dragging');
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (!ts) return;
    e.preventDefault();
    const touch = e.touches[0];
    ts.lastY = touch.clientY;

    // 用 elementFromPoint 找手指位置对应的行
    ts.row.style.display = 'none';
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    ts.row.style.display = '';

    const targetRow = el ? el.closest('.order-row') : null;
    if (targetRow && targetRow !== ts.row) {
      const toIdx = parseInt(targetRow.dataset.index);
      const fromIdx = ts.fromIndex;
      if (toIdx !== fromIdx) {
        const item = state.orderCurrent.splice(fromIdx, 1)[0];
        state.orderCurrent.splice(toIdx, 0, item);
        ts.fromIndex = toIdx;
        renderOrder();
        // 重绘后重新获取 row 引用
        const rows = document.querySelectorAll('.order-row');
        if (rows[toIdx]) ts.row = rows[toIdx];
      }
    }
  }, { passive: false });

  container.addEventListener('touchend', () => { ts = null; });
  container.addEventListener('touchcancel', () => { ts = null; });
}

function checkOrder() {
  const target = state.orderWork.contentRaw.map(stripPinyin);
  const isCorrect = state.orderCurrent.every((line, i) => line === target[i]);
  if (isCorrect) {
    state.score += 30;
    state.streak += 1;
    showFeedback('orderFeedback', true, '排序正确！+30 分');
  } else {
    state.streak = 0;
    showFeedback('orderFeedback', false, `正确顺序：<br>${target.join('<br>')}`);
  }
  saveState();
}

// ==================== 渲染：作者朝代 ====================
function nextMeta() {
  const pool = buildMetaPool(state.metaType);
  state.metaCurrent = pool[0];
  renderMeta();
}

function renderMeta() {
  const q = state.metaCurrent;
  if (!q) return;
  $('metaCard').innerHTML = `
    <div class="meta">
      <span class="title">《${q.title}》</span>
    </div>
    <div class="prompt">${q.question}</div>
    <div class="options">
      ${q.options.map((opt, i) => `
        <button class="option" data-index="${i}">${opt}</button>
      `).join('')}
    </div>
  `;
  $('metaFeedback').className = 'feedback';
  $('metaFeedback').innerHTML = '';

  document.querySelectorAll('#metaCard .option').forEach((btn) => {
    btn.addEventListener('click', onMetaAnswer);
  });
}

function onMetaAnswer(e) {
  const btn = e.currentTarget;
  const index = Number(btn.dataset.index);
  const q = state.metaCurrent;
  const allBtns = document.querySelectorAll('#metaCard .option');
  allBtns.forEach((b) => (b.disabled = true));

  if (index === q.answerIndex) {
    btn.classList.add('correct');
    const bonus = Math.min(state.streak, 5) * 2;
    state.score += 10 + bonus;
    state.streak += 1;
    showFeedback('metaFeedback', true, `回答正确！${bonus ? `连击加成 +${bonus}` : ''}`);
  } else {
    btn.classList.add('wrong');
    allBtns[q.answerIndex].classList.add('correct');
    state.streak = 0;
    addDifficult({
      id: `meta-${q.workId}-${q.type}`,
      title: q.title,
      promptLine: q.question,
      answer: q.correct
    });
    showFeedback('metaFeedback', false, `正确答案是：${q.correct}`);
  }
  saveState();
}

// ==================== 渲染：全篇目录 ====================
function renderCatalog() {
  const filter = state.catalogFilter;
  const filtered = filter === 'all'
    ? works
    : works.filter((w) => w.type === filter);

  $('catalogGrid').innerHTML = filtered.map((w) => {
    const fullText = getWorkFullText(w, state.catalogPinyin);
    return `
      <div class="catalog-card" data-id="${w.id}">
        <div class="cat-title">《${w.title}》</div>
        <div class="cat-author">${w.author} · ${w.dynasty}</div>
        <div class="cat-tags">
          ${w.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="fulltext">${state.catalogPinyin ? `<span class="pinyin">${fullText}</span>` : fullText}</div>
        <div class="actions">
          <button class="btn-ghost order-this" data-id="${w.id}">去排序</button>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.catalog-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.order-this')) return;
      card.classList.toggle('expanded');
    });
  });

  document.querySelectorAll('.order-this').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.currentTarget.dataset.id;
      $('orderSelect').value = id;
      switchTab('order');
      newOrder();
    });
  });
}

// ==================== 难句本 ====================
function addDifficult(item) {
  const key = item.id || `${item.workId}-${item.promptLine}`;
  if (state.difficult.some((d) => d.key === key)) return;
  state.difficult.push({
    key,
    title: item.title,
    prompt: item.promptLine,
    answer: item.answer
  });
  saveState();
}

function removeDifficult(key) {
  state.difficult = state.difficult.filter((d) => d.key !== key);
  saveState();
  renderDifficult();
}

function clearDifficult() {
  if (!confirm('确定清空所有难句吗？')) return;
  state.difficult = [];
  saveState();
  renderDifficult();
}

function renderDifficult() {
  const list = $('difficultList');
  if (!state.difficult.length) {
    list.innerHTML = '<div class="empty-tip">还没有难句，答错题后自动加入。</div>';
    return;
  }
  list.innerHTML = state.difficult.map((d) => `
    <div class="difficult-card">
      <div class="q">${d.title ? `《${d.title}》` : ''} ${d.prompt}</div>
      <div class="a">答案：${d.answer}</div>
      <button class="remove" data-key="${d.key}">移除</button>
    </div>
  `).join('');

  document.querySelectorAll('.difficult-card .remove').forEach((btn) => {
    btn.addEventListener('click', (e) => removeDifficult(e.currentTarget.dataset.key));
  });
}

function practiceDifficult() {
  if (!state.difficult.length) {
    alert('难句本为空，先去闯关答题吧！');
    return;
  }
  // 用难句本的篇目来构建题库
  const difficultWorkIds = new Set(
    state.difficult.map((d) => {
      const match = works.find((w) => d.title === w.title || d.key.startsWith(w.id));
      return match ? match.id : null;
    }).filter(Boolean)
  );
  if (difficultWorkIds.size) {
    state.quizFilter = 'all';
    // 优先从难句相关篇目出题
    const relatedPool = buildQuizPool().filter((q) => difficultWorkIds.has(q.workId));
    state.quizPool = relatedPool.length ? relatedPool : buildQuizPool();
  } else {
    state.quizPool = buildQuizPool();
  }
  state.quizIndex = 0;
  switchTab('quiz');
  nextQuiz();
}

// ==================== 公共反馈 ====================
function showFeedback(id, isGood, html) {
  const el = $(id);
  el.className = `feedback show ${isGood ? 'good' : 'bad'}`;
  el.innerHTML = html;
}

// ==================== Tab 切换 ====================
function switchTab(name) {
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === name);
  });
  document.querySelectorAll('.panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === `panel-${name}`);
  });
  if (name === 'catalog') renderCatalog();
  if (name === 'difficult') renderDifficult();
}

// ==================== 事件绑定 ====================
function bindEvents() {
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  $('quizFilter').addEventListener('change', (e) => {
    state.quizFilter = e.target.value;
    state.quizIndex = 0;
    state.quizPool = buildQuizPool();
    saveState();
    nextQuiz();
  });

  $('nextQuizBtn').addEventListener('click', () => {
    state.quizIndex += 1;
    nextQuiz();
  });

  $('resetQuizBtn').addEventListener('click', () => {
    if (!confirm('确定重置闯关进度吗？得分会保留。')) return;
    state.quizIndex = 0;
    state.quizPool = buildQuizPool();
    nextQuiz();
  });

  $('pinyinQuizBtn').addEventListener('click', () => {
    state.quizShowPinyin = !state.quizShowPinyin;
    renderQuiz();
  });

  $('orderSelect').addEventListener('change', newOrder);
  $('newOrderBtn').addEventListener('click', newOrder);
  $('checkOrderBtn').addEventListener('click', checkOrder);

  $('metaType').addEventListener('change', (e) => {
    state.metaType = e.target.value;
    nextMeta();
  });
  $('nextMetaBtn').addEventListener('click', nextMeta);

  $('catalogFilter').addEventListener('change', (e) => {
    state.catalogFilter = e.target.value;
    renderCatalog();
  });
  $('pinyinCatalogBtn').addEventListener('click', () => {
    state.catalogPinyin = !state.catalogPinyin;
    $('pinyinCatalogBtn').textContent = state.catalogPinyin ? '全部隐藏拼音' : '全部显示拼音';
    renderCatalog();
  });

  $('practiceDifficultBtn').addEventListener('click', practiceDifficult);
  $('clearDifficultBtn').addEventListener('click', clearDifficult);

  // 分享按钮（Web Share API）
  $('shareBtn').addEventListener('click', () => {
    const url = location.href;
    if (navigator.share) {
      navigator.share({
        title: '初二古诗文背诵游戏',
        text: '来挑战古诗文背诵吧！18 首诗 + 7 篇文言文，下一句闯关、拖拽排序、作者朝代匹配。',
        url
      }).catch(() => {});
    } else {
      // 降级：复制链接
      navigator.clipboard.writeText(url).then(() => {
        alert('链接已复制，分享给同学吧！');
      }).catch(() => {
        prompt('复制以下链接分享：', url);
      });
    }
  });
}

// ==================== 初始化 ====================
function init() {
  initQuizFilter();
  initOrderSelect();
  bindEvents();
  renderScoreboard();
  state.quizPool = buildQuizPool();
  nextQuiz();
  nextMeta();
  newOrder();
}

init();

// 本地测试用导出（浏览器中无影响）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { works, stripPinyin, buildQuizPool, buildMetaPool, state, getWorkById };
}

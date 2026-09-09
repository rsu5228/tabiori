const defaultTrips = [
  {
    title: "DAY 1 — 9/5 SAT",
    items: [
      { time: "08:55", icon: "✈️", name: "成田発", detail: "仁川国際空港へ出発", tag: "FLIGHT" },
      { time: "11:25", icon: "🛬", name: "仁川T1着", detail: "11:25〜12:30\n入国審査など", tag: "ARRIVAL" },
      { time: "12:30", icon: "🚆", name: "AREX一般", detail: "仁川T1 → ソウル駅", tag: "MOVE" },
      { time: "13:30", icon: "🚇", name: "ソウル駅 → 明洞方面", detail: "地下鉄4号線で明洞駅へ", tag: "MOVE" },
      { time: "13:40", icon: "💱", name: "MONEY PLANET", detail: "13:40〜13:55\n両替", tag: "MONEY" },
      { time: "14:00", icon: "🏨", name: "相鉄フレッサイン ソウル明洞", detail: "ホテルへ荷物預け", tag: "HOTEL" },
      { time: "14:05", icon: "💳", name: "WOWPASSチャージ", detail: "ホテル内のWOWPASS機でチャージ", tag: "MONEY" },
      { time: "14:15", icon: "🥟", name: "明洞餃子", detail: "14:15〜15:15\nランチ", tag: "FOOD" },
      { time: "15:15", icon: "🛍️", name: "ミミライン＋明洞ショッピング", detail: "15:15〜17:00", tag: "SHOPPING" },
      { time: "17:30", icon: "🦀", name: "オダリチプ", detail: "予約済み", tag: "RESERVATION" },
      { time: "19:00", icon: "🌙", name: "明洞散策・ホテル", detail: "19:00〜\n自由時間", tag: "FREE TIME" }
    ]
  },
  {
    title: "DAY 2 — 9/6 SUN",
    items: [
      { time: "08:15", icon: "🚇", name: "ホテル出発", detail: "4号線 → 忠武路 → 3号線\n景福宮方面へ", tag: "MOVE" },
      { time: "08:40", icon: "👘", name: "インコリア韓服", detail: "08:40頃 到着", tag: "HANBOK" },
      { time: "09:00", icon: "👘", name: "韓服レンタル", detail: "レンタル開始", tag: "HANBOK" },
      { time: "09:15", icon: "🏯", name: "景福宮", detail: "09:15〜11:10\n韓服で観光", tag: "SIGHTSEEING" },
      { time: "11:10", icon: "🚶", name: "韓服店へ戻る", detail: "11:10〜11:30", tag: "MOVE" },
      { time: "11:30", icon: "👘", name: "韓服返却", detail: "レンタル終了", tag: "HANBOK" },
      { time: "11:30", icon: "🍲", name: "土俗村", detail: "11:30〜12:30\n参鶏湯ランチ", tag: "FOOD" },
      { time: "12:30", icon: "🚇", name: "景福宮駅 → 安国駅", detail: "3号線／梧琴方面\n1駅", tag: "MOVE" },
      { time: "12:50", icon: "🥐", name: "Artist Bakery", detail: "12:50〜13:40\n塩パンを9/7朝食用に購入", tag: "SHOPPING" },
      { time: "13:40", icon: "🧄", name: "Garlic Boy 安国店", detail: "13:40〜14:00\nパン購入", tag: "SHOPPING" },
      { time: "14:00", icon: "🚶", name: "安国 → イクソンドン", detail: "徒歩で移動\n14:00〜14:20", tag: "MOVE" },
      { time: "14:20", icon: "🏘️", name: "イクソンドン散策", detail: "14:20〜15:10", tag: "SIGHTSEEING" },
      { time: "15:10", icon: "🍵", name: "清水堂", detail: "15:10〜16:10", tag: "CAFE" },
      { time: "16:10", icon: "🌷", name: "イクソンドン散策・駅へ", detail: "16:10〜16:30", tag: "FREE TIME" },
      { time: "16:30", icon: "🚇", name: "鍾路3街駅 → 狎鴎亭", detail: "3号線／梧琴方面", tag: "MOVE" },
      { time: "17:00", icon: "🛍️", name: "狎鴎亭散策＋黒ゴマもち", detail: "17:00〜17:50\n黒ゴマもち購入", tag: "SHOPPING" },
      { time: "17:50", icon: "🚕", name: "タクシー", detail: "盤浦漢江公園へ", tag: "MOVE" },
      { time: "18:10", icon: "🌉", name: "盤浦漢江公園", detail: "18:10頃 到着\nパン・黒ゴマもち準備、散策", tag: "SIGHTSEEING" },
      { time: "19:30", icon: "⛲", name: "噴水ショー", detail: "19:30〜19:50\n※間に合わなければ20:00の回", tag: "EVENT" },
      { time: "19:50", icon: "🚌", name: "ホテルへ移動", detail: "740番バス → 漢江中学校\n→ 401または406番 → 明洞方面", tag: "MOVE" },
      { time: "20:30", icon: "🏨", name: "ホテル", detail: "20:30頃\n余裕があれば明洞で食べ歩き", tag: "FREE TIME" }
    ]
  },
  {
    title: "DAY 3 — 9/7 MON",
    items: [
      { time: "07:00", icon: "☀️", name: "起床", detail: "07:00〜07:30", tag: "MORNING" },
      { time: "07:30", icon: "🥐", name: "朝食", detail: "07:30〜08:00\nArtist Bakeryの塩パン", tag: "FOOD" },
      { time: "08:00", icon: "🧳", name: "荷造り・身支度", detail: "08:00〜08:30", tag: "PREPARE" },
      { time: "08:30", icon: "🏨", name: "チェックアウト", detail: "ホテルを出発", tag: "HOTEL" },
      { time: "08:40", icon: "🚇", name: "明洞駅 → ソウル駅", detail: "4号線で移動", tag: "MOVE" },
      { time: "09:00", icon: "🚆", name: "AREX一般", detail: "ソウル駅 → 仁川T1", tag: "MOVE" },
      { time: "10:00", icon: "🛫", name: "仁川空港T1着", detail: "チェックイン・荷物預け・保安検査", tag: "AIRPORT" },
      { time: "12:55", icon: "✈️", name: "仁川発", detail: "成田へ出発", tag: "FLIGHT" },
      { time: "15:30", icon: "🛬", name: "成田着", detail: "おつかれさまでした！", tag: "ARRIVAL" }
    ]
  }
];

const STORAGE_KEY = "tabiori-seoul-v0.2";
function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
function loadTrips(){ try { const saved=localStorage.getItem(STORAGE_KEY); return saved ? JSON.parse(saved) : clone(defaultTrips); } catch(e){ return clone(defaultTrips); } }
let trips = loadTrips();
let editingTrips = null;
let selectedDay = 0;

function timeToMinutes(value) {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}

function getActiveItem(items) {
  items = items.filter(item => !item.skipped);
  if (!items.length) return { item: null, status: "予定なし" };
  const now = new Date();
  const selectedDate = new Date(2026, 8, 5 + selectedDay);
  const isToday =
    now.getFullYear() === selectedDate.getFullYear() &&
    now.getMonth() === selectedDate.getMonth() &&
    now.getDate() === selectedDate.getDate();

  if (!isToday) return { item: items[0], status: "次の予定" };

  const current = now.getHours() * 60 + now.getMinutes();
  const next = items.find(item => timeToMinutes(item.time) >= current);

  if (next) return { item: next, status: "次の予定" };

  return { item: items[items.length - 1], status: "DAY COMPLETED 🎉" };
}

function renderNext() {
  const { item, status } = getActiveItem(trips[selectedDay].items);
  const nextCard = document.getElementById("nextCard");
  if (!item) { nextCard.innerHTML = `<p class="next-note">この日の予定はすべてスキップされています。</p>`; return; }

  nextCard.innerHTML = `
    <div class="next-top">
      <div class="icon-bubble">${item.icon}</div>
      <div>
        <p class="next-time">${item.time}</p>
        <h3 class="next-name">${item.name}</h3>
        <p class="next-note">${item.detail.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
    <span class="status-pill">${status}</span>
  `;
}

function renderTimeline() {
  const day = trips[selectedDay];
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = day.items.map((item, index) => `
    <article class="timeline-item">
      <div class="time" data-time-index="${index}" role="button" tabindex="0"
           aria-label="${item.name}の時間を変更">${item.time}</div>
      <div class="plan-card ${item.skipped ? "skipped" : ""}">
        <div class="plan-header">
          <div class="plan-icon">${item.icon}</div>
          <div>
            <h3 class="plan-name">${item.name}${item.skipped ? '<span class="skip-label">SKIPPED</span>' : ""}</h3>
            <p class="plan-detail">${item.detail}</p>
            <span class="tag">${item.tag}</span>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  // Keep the add button outside the cards.
  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.id = "addPlanButton";
  addButton.className = "add-plan-button";
  addButton.textContent = "＋ 予定を追加";
  timeline.appendChild(addButton);
}


function render() {
  document.querySelectorAll(".day-tab").forEach((button, index) => {
    button.classList.toggle("active", index === selectedDay);
  });
  renderNext();
  renderTimeline();
}

document.querySelectorAll(".day-tab").forEach(button => {
  button.addEventListener("click", () => {
    selectedDay = Number(button.dataset.day);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.getElementById("todayButton").addEventListener("click", () => {
  const now = new Date();
  if (now.getFullYear() === 2026 && now.getMonth() === 8 && now.getDate() >= 5 && now.getDate() <= 7) {
    selectedDay = now.getDate() - 5;
    render();
  }
});


const fixedNames = ["オダリチプ","韓服レンタル","韓服返却","噴水ショー","チェックアウト","仁川発","成田着"];
function updateCurrentTime(){ const now=new Date(); document.getElementById("currentTime").textContent=now.toLocaleTimeString("ja-JP",{hour:"2-digit",minute:"2-digit",hour12:false}); }
function isFixed(item){ return fixedNames.includes(item.name); }
function openAdjust(){ editingTrips=clone(trips); updateCurrentTime(); renderAdjustList(); document.getElementById("modalBackdrop").classList.remove("hidden"); document.body.style.overflow="hidden"; }
function closeAdjust(){ document.getElementById("modalBackdrop").classList.add("hidden"); document.body.style.overflow=""; editingTrips=null; }
function renderAdjustList(){
 const items=editingTrips[selectedDay].items; const list=document.getElementById("adjustList");
 list.innerHTML=items.map((item,i)=>{ const fixed=isFixed(item); return `<article class="adjust-item ${item.skipped?"is-skipped":""}"><div class="adjust-row"><div class="adjust-icon">${item.icon}</div><div class="adjust-main"><h3 class="adjust-name">${item.name}</h3><p class="adjust-detail">${item.detail}</p><div class="time-editor"><input type="time" value="${item.time}" data-index="${i}" ${fixed?"disabled":""}></div>${fixed?'<div class="fixed-note">🔒 固定予定（予約・飛行機など）</div>':''}<div class="adjust-controls"><button class="small-button up" data-index="${i}" ${i===0?"disabled":""}>↑ 上へ</button><button class="small-button down" data-index="${i}" ${i===items.length-1?"disabled":""}>↓ 下へ</button>${!fixed?`<button class="small-button ${item.skipped?"skip-active":""} skip" data-index="${i}">${item.skipped?"↩ 戻す":"⏭ スキップ"}</button>`:""}</div></div></div></article>`; }).join("");
 list.querySelectorAll('input[type="time"]').forEach(el=>el.addEventListener("change",e=>{ editingTrips[selectedDay].items[Number(e.target.dataset.index)].time=e.target.value; }));
 list.querySelectorAll(".up").forEach(b=>b.addEventListener("click",()=>moveItem(Number(b.dataset.index),-1)));
 list.querySelectorAll(".down").forEach(b=>b.addEventListener("click",()=>moveItem(Number(b.dataset.index),1)));
 list.querySelectorAll(".skip").forEach(b=>b.addEventListener("click",()=>{ const item=editingTrips[selectedDay].items[Number(b.dataset.index)]; item.skipped=!item.skipped; renderAdjustList(); }));
}
function moveItem(i,d){ const a=editingTrips[selectedDay].items,j=i+d;if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];renderAdjustList(); }
function saveAdjust(){ trips=clone(editingTrips); localStorage.setItem(STORAGE_KEY,JSON.stringify(trips)); closeAdjust(); render(); }
function resetSchedule(){ if(!confirm("この旅行のスケジュール調整をすべて元の予定に戻しますか？"))return; trips=clone(defaultTrips); localStorage.removeItem(STORAGE_KEY); editingTrips=clone(trips); renderAdjustList(); render(); }
document.getElementById("openAdjust").addEventListener("click",openAdjust);
document.getElementById("closeAdjust").addEventListener("click",closeAdjust);
document.getElementById("refreshTime").addEventListener("click",updateCurrentTime);
document.getElementById("saveSchedule").addEventListener("click",saveAdjust);
document.getElementById("resetSchedule").addEventListener("click",resetSchedule);
document.getElementById("modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeAdjust();});


/* ===== v0.6: direct time tap + add plan ===== */

let timeEditDayIndex = null;
let timeEditItemIndex = null;

function openTimeEdit(dayIndex, itemIndex) {
  const item = trips[dayIndex]?.items?.[itemIndex];
  if (!item) return;

  timeEditDayIndex = dayIndex;
  timeEditItemIndex = itemIndex;

  const backdrop = document.getElementById("timeEditBackdrop");
  const name = document.getElementById("timeEditName");
  const input = document.getElementById("timeEditInput");
  if (!backdrop || !input) return;

  if (name) name.textContent = item.name;
  input.value = item.time || "";
  backdrop.classList.remove("hidden");
  requestAnimationFrame(() => input.focus());
}

function closeTimeEdit() {
  const backdrop = document.getElementById("timeEditBackdrop");
  if (backdrop) backdrop.classList.add("hidden");
  timeEditDayIndex = null;
  timeEditItemIndex = null;
}

function saveTimeEdit() {
  if (timeEditDayIndex === null || timeEditItemIndex === null) return;

  const input = document.getElementById("timeEditInput");
  if (!input || !input.value) return;

  const item = trips[timeEditDayIndex]?.items?.[timeEditItemIndex];
  if (!item) return;

  const returnDay = timeEditDayIndex;
  item.time = input.value;
  trips[returnDay].items.sort((a, b) => (a.time || "").localeCompare(b.time || ""));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));

  closeTimeEdit();
  selectedDay = returnDay;
  render();
}

let addPlanDayIndex = null;

function openAddPlan() {
  addPlanDayIndex = selectedDay;
  const backdrop = document.getElementById("addPlanBackdrop");
  const name = document.getElementById("addPlanName");
  const time = document.getElementById("addPlanTime");
  const detail = document.getElementById("addPlanDetail");
  if (!backdrop) return;

  if (name) name.value = "";
  if (time) time.value = "";
  if (detail) detail.value = "";
  backdrop.classList.remove("hidden");
  requestAnimationFrame(() => name?.focus());
}

function closeAddPlan() {
  const backdrop = document.getElementById("addPlanBackdrop");
  if (backdrop) backdrop.classList.add("hidden");
  addPlanDayIndex = null;
}

function saveAddPlan() {
  const name = document.getElementById("addPlanName")?.value.trim();
  const time = document.getElementById("addPlanTime")?.value;
  const detail = document.getElementById("addPlanDetail")?.value.trim();

  if (!name || !time || addPlanDayIndex === null) return;

  const day = trips[addPlanDayIndex];
  day.items.push({
    time,
    name,
    detail: detail || "追加した予定",
    tag: "CUSTOM",
    icon: "📍",
    skipped: false
  });

  day.items.sort((a, b) => (a.time || "").localeCompare(b.time || ""));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));

  const returnDay = addPlanDayIndex;
  closeAddPlan();
  selectedDay = returnDay;
  render();
}

document.addEventListener("click", (event) => {
  const timeEl = event.target.closest("#timeline .timeline-item > .time");
  if (timeEl) {
    openTimeEdit(selectedDay, Number(timeEl.dataset.timeIndex));
    return;
  }

  const addButton = event.target.closest("#addPlanButton");
  if (addButton) {
    openAddPlan();
  }
});

document.addEventListener("keydown", (event) => {
  const timeEl = event.target.closest?.("#timeline .timeline-item > .time");
  if (timeEl && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openTimeEdit(selectedDay, Number(timeEl.dataset.timeIndex));
  }
});

document.getElementById("closeTimeEdit")?.addEventListener("click", closeTimeEdit);
document.getElementById("saveTimeEdit")?.addEventListener("click", saveTimeEdit);
document.getElementById("timeEditBackdrop")?.addEventListener("click", (event) => {
  if (event.target.id === "timeEditBackdrop") closeTimeEdit();
});

document.getElementById("closeAddPlan")?.addEventListener("click", closeAddPlan);
document.getElementById("cancelAddPlan")?.addEventListener("click", closeAddPlan);
document.getElementById("saveAddPlan")?.addEventListener("click", saveAddPlan);
document.getElementById("addPlanBackdrop")?.addEventListener("click", (event) => {
  if (event.target.id === "addPlanBackdrop") closeAddPlan();
});

render();






// ===== v0.4 Plan details =====
const planDetails={
"MONEY PLANET":{place:"MONEY PLANET（明洞）",memo:"旅行用の両替をする場所です。",route:"明洞駅周辺に到着\n↓\nMONEY PLANETへ徒歩",query:"MONEY PLANET 명동"},
"相鉄フレッサイン ソウル明洞":{place:"相鉄フレッサイン ソウル明洞",memo:"荷物を預けてから明洞観光へ。",route:"MONEY PLANET\n↓ 徒歩\nホテル",query:"소테츠 프레사 인 서울 명동"},
"WOWPASSチャージ":{place:"相鉄フレッサイン ソウル明洞",memo:"ホテル内のWOWPASS機でチャージ。",route:"ホテル内で移動",query:"소테츠 프레사 인 서울 명동"},
"明洞餃子":{place:"明洞餃子 本店",memo:"ランチ。混雑している場合は待ち時間に注意。",route:"相鉄フレッサイン ソウル明洞\n↓ 徒歩\n明洞餃子 本店",query:"명동교자 본점"},
"ミミライン＋明洞ショッピング":{place:"MIMILINE／明洞",memo:"MIMILINEを見ながら明洞ショッピング。",route:"明洞餃子\n↓ 徒歩\nMIMILINE\n↓\n明洞ショッピング",query:"미미라인 명동"},
"オダリチプ":{place:"オダリチプ 明洞直営店",memo:"17:30予約済み。",route:"明洞ショッピング\n↓ 徒歩\nオダリチプ",query:"오다리집 명동"},
"明洞散策・ホテル":{place:"明洞",memo:"ホテルへ戻る前に自由散策。",route:"オダリチプ\n↓ 徒歩\n明洞散策\n↓\nホテル",query:"명동"},

"インコリア韓服":{place:"インコリア韓服",memo:"09:00 韓服レンタル。",route:"ホテル\n↓ 4号線\n忠武路駅で3号線へ乗り換え\n↓ 徒歩\nインコリア韓服",query:"인코리아한복 경복궁"},
"景福宮":{place:"景福宮",memo:"韓服で観光。09:15〜11:10予定。",route:"インコリア韓服\n↓ 徒歩\n景福宮",query:"경복궁"},
"韓服返却":{place:"インコリア韓服",memo:"景福宮観光後、韓服店へ戻って返却。",route:"景福宮\n↓ 徒歩\nインコリア韓服",query:"인코리아한복 경복궁"},
"土俗村":{place:"土俗村（参鶏湯）",memo:"ランチで参鶏湯。",route:"インコリア韓服\n↓ 徒歩\n土俗村",query:"토속촌 삼계탕"},
"アーティストベーカリー":{place:"Artist Bakery 安国",memo:"塩パンを9/7の朝食用に購入。",route:"景福宮駅\n↓ 3号線（梧琴方面・1駅）\n安国駅\n↓ 徒歩\nArtist Bakery",query:"아티스트베이커리 안국"},
"ガーリックボーイ安国店":{place:"Garlic Boy 安国店",memo:"パンを購入。",route:"Artist Bakery\n↓ 徒歩\nGarlic Boy 安国店",query:"갈릭보이 안국"},
"イクソンドン散策":{place:"益善洞（イクソンドン）",memo:"韓屋が並ぶエリアを散策。",route:"安国周辺\n↓ 徒歩 約20分\nイクソンドン",query:"익선동"},
"清水堂":{place:"清水堂 益善洞",memo:"カフェ休憩。",route:"イクソンドン散策\n↓ 徒歩\n清水堂",query:"청수당 익선동"},
"狎鴎亭散策＋黒ゴマもち購入":{place:"狎鴎亭",memo:"散策しながら黒ゴマもちを購入。",route:"鍾路3街駅\n↓ 3号線（梧琴方面）\n狎鴎亭駅\n↓ 散策",query:"압구정역"},
"盤浦漢江公園":{place:"盤浦漢江公園",memo:"パン・黒ゴマもちを準備して散策。",route:"狎鴎亭\n↓ タクシー\n盤浦漢江公園",query:"반포한강공원"},
"噴水ショー":{place:"盤浦漢江公園・月光虹噴水",memo:"19:30に間に合わなければ20:00の回。",route:"盤浦漢江公園内",query:"반포대교 달빛무지개분수"},
"ホテルへ":{place:"相鉄フレッサイン ソウル明洞",memo:"740番→漢江中学校→401または406番→明洞方面。",route:"盤浦漢江公園\n↓ バス\n明洞方面\n↓ ホテル",query:"소테츠 프레사 인 서울 명동"}
};
function closeDetail(){const b=document.getElementById("detailBackdrop");if(b)b.classList.add("hidden");document.body.style.overflow="";}
function openDetail(item){const d=planDetails[item.name],t=document.getElementById("detailTitle"),c=document.getElementById("detailContent"),b=document.getElementById("detailBackdrop");if(!t||!c||!b)return;t.textContent=item.name||"予定の詳細";const p=d?d.place:"詳細情報を準備中",m=d?d.memo:(item.detail||"詳細情報を準備中"),r=d?d.route:"この予定の移動情報は準備中です。",map=d&&d.query?`<a class="map-button" href="https://map.naver.com/p/search/${encodeURIComponent(d.query)}" target="_blank" rel="noopener">🗺️ NAVER Mapで開く</a>`:"";c.innerHTML=`<div class="detail-hero"><div class="icon-bubble">${item.icon||"📍"}</div><div><p class="detail-time">${item.time||""}</p><h3 class="detail-name">${item.name||""}</h3></div></div><section class="detail-section"><h3>📍 場所</h3><p>${p}</p></section><section class="detail-section"><h3>🚇 行き方</h3><div class="route-box">${r}</div></section><section class="detail-section"><h3>📝 メモ</h3><p>${m}</p></section>${map}`;b.classList.remove("hidden");document.body.style.overflow="hidden";}
function attachDetailHandlers(){document.querySelectorAll(".plan-card").forEach((card,i)=>{card.onclick=e=>{e.preventDefault();const day=trips[selectedDay],item=day&&day.items?day.items[i]:null;if(item)openDetail(item);};});}
const x=document.getElementById("closeDetail");if(x)x.onclick=closeDetail;const b=document.getElementById("detailBackdrop");if(b)b.onclick=e=>{if(e.target===b)closeDetail();};new MutationObserver(attachDetailHandlers).observe(document.body,{childList:true,subtree:true});attachDetailHandlers();

// ===== v0.4.1 close button fix =====
document.addEventListener("click", function(event) {
  const closeButton = event.target.closest && event.target.closest("#closeDetail");
  if (closeButton) {
    event.preventDefault();
    event.stopPropagation();
    const backdrop = document.getElementById("detailBackdrop");
    if (backdrop) backdrop.classList.add("hidden");
    document.body.style.overflow = "";
  }
}, true);


// ===== v0.5 One-tap time editing =====
let editingDayIndex = null;
let editingItemIndex = null;

function normalizeTimeValue(value) {
  if (!value) return "";
  const match = String(value).match(/(\d{1,2})[:：](\d{2})/);
  if (!match) return "";
  return String(match[1]).padStart(2, "0") + ":" + match[2];
}

function closeTimeEdit() {
  const modal = document.getElementById("timeEditBackdrop");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
  editingDayIndex = null;
  editingItemIndex = null;
}

function openTimeEdit(dayIndex, itemIndex) {
  const day = trips[dayIndex];
  const item = day && day.items ? day.items[itemIndex] : null;
  if (!item) return;

  editingDayIndex = dayIndex;
  editingItemIndex = itemIndex;

  const name = document.getElementById("timeEditName");
  const input = document.getElementById("timeEditInput");
  const modal = document.getElementById("timeEditBackdrop");

  if (name) name.textContent = item.name || "予定";
  if (input) input.value = normalizeTimeValue(item.time);
  if (modal) modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";
  setTimeout(() => input && input.focus(), 100);
}

function saveTimeEdit() {
  if (editingDayIndex === null || editingItemIndex === null) return;

  const input = document.getElementById("timeEditInput");
  const newTime = input ? input.value : "";
  if (!newTime) return;

  const item = trips[editingDayIndex].items[editingItemIndex];
  item.time = newTime;

  // Save the updated trip schedule locally in the browser.
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  } catch (error) {}

  closeTimeEdit();

  // Re-render using the app's existing day rendering flow.
  if (typeof renderSchedule === "function") {
    renderSchedule();
  } else if (typeof renderPlans === "function") {
    renderPlans();
  } else {
    // Fallback: reload so the changed data is reflected.
    location.reload();
  }
}

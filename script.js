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
  document.getElementById("dayHeading").textContent = day.title;

  document.getElementById("timeline").innerHTML = day.items.map(item => `
    <article class="timeline-item">
      <div class="time">${item.time}</div>
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

render();


// ===== v0.3 Plan details (DAY 1) =====
const planDetails={
"d1-5":{place:"MONEY PLANET（明洞）",memo:"旅行用の両替をする場所です。",route:"明洞駅周辺に到着\n↓\nMONEY PLANETへ徒歩",query:"MONEY PLANET 명동"},
"d1-6":{place:"相鉄フレッサイン ソウル明洞",memo:"荷物を預けてから明洞観光へ。",route:"MONEY PLANET\n↓ 徒歩\nホテル",query:"소테츠 프레사 인 서울 명동"},
"d1-7":{place:"相鉄フレッサイン ソウル明洞",memo:"ホテル内のWOWPASS機でチャージ。",route:"ホテル内で移動",query:"소테츠 프레사 인 서울 명동"},
"d1-8":{place:"明洞餃子 本店",memo:"ランチ。混雑している場合は待ち時間に注意。",route:"相鉄フレッサイン ソウル明洞\n↓ 徒歩\n明洞餃子 本店",query:"명동교자 본점"},
"d1-9":{place:"MIMILINE／明洞",memo:"MIMILINEを見ながら明洞ショッピング。",route:"明洞餃子\n↓ 徒歩\nMIMILINE\n↓\n明洞ショッピング",query:"미미라인 명동"},
"d1-10":{place:"オダリチプ 明洞直営店",memo:"17:30予約済み。予約時間に遅れないよう注意。",route:"明洞ショッピング\n↓ 徒歩\nオダリチプ",query:"오다리집 명동"},
"d1-11":{place:"明洞",memo:"ホテルへ戻る前に自由散策。",route:"オダリチプ\n↓ 徒歩\n明洞散策\n↓\nホテル",query:"명동"}
};
function naverMapSearchUrl(query){const appname=encodeURIComponent(location.origin||"tabiori");return `nmap://search?query=${encodeURIComponent(query)}&appname=${appname}`;}
function openDetail(item){const detail=planDetails[item.id];const content=document.getElementById("detailContent");document.getElementById("detailTitle").textContent=item.name;const place=detail?.place||"詳細情報を準備中";const memo=detail?.memo||item.detail||"";const route=detail?.route||"この予定の移動情報は準備中です。";const mapButton=detail?.query?`<a class="map-button" href="${naverMapSearchUrl(detail.query)}">🗺️ NAVER Mapで開く</a><p class="map-note">NAVER Mapアプリで目的地を検索して開きます</p>`:"";content.innerHTML=`<div class="detail-hero"><div class="icon-bubble">${item.icon}</div><div><p class="detail-time">${formatTimeRange(item)}</p><h3 class="detail-name">${item.name}</h3></div></div><section class="detail-section"><h3>📍 場所</h3><p>${place}</p></section><section class="detail-section"><h3>🚇 行き方</h3><div class="route-box">${route}</div></section><section class="detail-section"><h3>📝 メモ</h3><p>${memo}</p></section>${mapButton}`;document.getElementById("detailBackdrop").classList.remove("hidden");document.body.style.overflow="hidden";}
function closeDetail(){document.getElementById("detailBackdrop").classList.add("hidden");document.body.style.overflow="";}
const originalRenderTimeline=renderTimeline;renderTimeline=function(){originalRenderTimeline();document.querySelectorAll(".plan-card").forEach((card,index)=>{const item=trips[selectedDay].items[index];card.addEventListener("click",()=>openDetail(item));});};
document.getElementById("closeDetail").addEventListener("click",closeDetail);document.getElementById("detailBackdrop").addEventListener("click",event=>{if(event.target.id==="detailBackdrop")closeDetail();});render();

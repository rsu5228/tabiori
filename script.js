const DEFAULT_ITINERARY = [
  {title:'DAY 1 — 9/5 SAT',items:[
    ['08:55','✈️','成田発','仁川国際空港へ出発'],['11:25','🛬','仁川T1着','11:25〜12:30\n入国審査など'],['12:30','🚆','AREX一般','仁川T1 → ソウル駅'],['13:30','🚇','ソウル駅 → 明洞方面','地下鉄4号線で明洞駅へ'],['13:40','💱','MONEY PLANET','13:40〜13:55\n両替'],['14:00','🏨','相鉄フレッサイン ソウル明洞','ホテルへ荷物預け'],['14:05','💳','WOWPASSチャージ','ホテル内のWOWPASS機でチャージ'],['14:15','🥟','明洞餃子','14:15〜15:15\nランチ'],['15:15','🛍️','ミミライン＋明洞ショッピング','15:15〜17:00'],['17:30','🦀','オダリチプ','予約済み'],['19:00','🌙','明洞散策・ホテル','19:00〜\n自由時間']]},
  {title:'DAY 2 — 9/6 SUN',items:[
    ['08:15','🚇','ホテル出発','4号線 → 忠武路 → 3号線\n景福宮方面へ'],['08:40','👘','インコリア韓服','08:40頃 到着'],['09:00','👘','韓服レンタル','レンタル開始'],['09:15','🏯','景福宮','09:15〜11:10\n韓服で観光'],['11:10','🚶','韓服店へ戻る','11:10〜11:30'],['11:30','👘','韓服返却','レンタル終了'],['11:30','🍲','土俗村','11:30〜12:30\n参鶏湯ランチ'],['12:30','🚇','景福宮駅 → 安国駅','3号線／梧琴方面\n1駅'],['12:50','🥐','Artist Bakery','12:50〜13:40\n塩パンを9/7朝食用に購入'],['13:40','🧄','Garlic Boy 安国店','13:40〜14:00\nパン購入'],['14:00','🚶','安国 → イクソンドン','徒歩で移動\n14:00〜14:20'],['14:20','🏘️','イクソンドン散策','14:20〜15:10'],['15:10','🍵','清水堂','15:10〜16:10'],['16:10','🌷','イクソンドン散策・駅へ','16:10〜16:30'],['16:30','🚇','鍾路3街駅 → 狎鴎亭','3号線／梧琴方面'],['17:00','🛍️','狎鴎亭散策＋黒ゴマもち','17:00〜17:50\n黒ゴマもち購入'],['17:50','🚕','タクシー','盤浦漢江公園へ'],['18:10','🌉','盤浦漢江公園','18:10頃 到着\nパン・黒ゴマもち準備、散策'],['19:30','⛲','噴水ショー','19:30〜19:50\n※間に合わなければ20:00の回'],['19:50','🚌','ホテルへ移動','740番バス → 漢江中学校\n→ 401または406番 → 明洞方面'],['20:30','🏨','ホテル','20:30頃\n余裕があれば明洞で食べ歩き']]},
  {title:'DAY 3 — 9/7 MON',items:[
    ['07:00','☀️','起床','07:00〜07:30'],['07:30','🥐','朝食','07:30〜08:00\nArtist Bakeryの塩パン'],['08:00','🧳','荷造り・身支度','08:00〜08:30'],['08:30','🏨','チェックアウト','ホテルを出発'],['08:40','🚇','明洞駅 → ソウル駅','4号線で移動'],['09:00','🚆','AREX一般','ソウル駅 → 仁川T1'],['10:00','🛫','仁川空港T1着','チェックイン・荷物預け・保安検査'],['12:55','✈️','仁川発','成田へ出発'],['15:30','🛬','成田着','おつかれさまでした！']]}
].map(d=>({title:d.title,items:d.items.map(x=>({time:x[0],icon:x[1],name:x[2],detail:x[3]}))}));
const TRIPS_KEY='tabiori_trips'; const ITIN_KEY='tabiori_itineraries_v081'; const OLD_KEY='tabiori-seoul-v0.2';
const clone=o=>JSON.parse(JSON.stringify(o));
let tripList=JSON.parse(localStorage.getItem(TRIPS_KEY)||'null');
if(!Array.isArray(tripList)||!tripList.length){tripList=[{id:'seoul-2026',title:'ソウル2泊3日',flag:'🇰🇷',startDate:'2026-09-05',endDate:'2026-09-07',hotel:'相鉄フレッサイン ソウル明洞'}];}
tripList=tripList.map(t=>{
  const destination=typeof t.destination==='string'?t.destination:'';
  let flag=t.flag||((destination.match(/^\s*(\p{Extended_Pictographic}(?:\uFE0F)?)/u)||[])[1]);
  // 既存データで国旗がすべて「✈️」になっていた場合も、韓国旅行は韓国国旗へ戻す。
  if(t.id==='seoul-2026' || destination.trim().startsWith('🇰🇷')) flag='🇰🇷';
  flag=flag||'';
  let start=t.startDate||'';let end=t.endDate||'';
  if(t.id==='seoul-2026'){start=start||'2026-09-05';end=end||'2026-09-07';}
  return {...t,flag,startDate:start,endDate:end};
});
localStorage.setItem(TRIPS_KEY,JSON.stringify(tripList));
let itineraries=JSON.parse(localStorage.getItem(ITIN_KEY)||'{}');
function normalize(days){
  if(!Array.isArray(days)) return [];
  return days.map((d,i)=>({title:d?.title||`DAY ${i+1}`,items:Array.isArray(d?.items)?d.items.map(x=>({time:x?.time||'09:00',icon:x?.icon||'📍',name:x?.name||'予定',detail:x?.detail||'',skipped:!!x?.skipped})):[]}));
}
function hasPlans(days){return Array.isArray(days)&&days.some(d=>Array.isArray(d?.items)&&d.items.length>0);}
function saveItineraries(){localStorage.setItem(ITIN_KEY,JSON.stringify(itineraries));}
function getItinerary(id){
  let days=normalize(itineraries[id]);
  // 韓国旅行だけ、既存予定が無い場合に旧保存データ→初期予定の順で復元する。
  // 他の旅行には韓国の予定を流用しない。
  if(id==='seoul-2026' && !hasPlans(days)){
    let restored=null;
    try{
      const legacy=JSON.parse(localStorage.getItem(OLD_KEY)||'null');
      if(hasPlans(legacy)) restored=normalize(legacy);
    }catch(e){}
    days=restored&&hasPlans(restored)?restored:clone(DEFAULT_ITINERARY);
    itineraries[id]=days;
    saveItineraries();
  }else if(!Array.isArray(itineraries[id])){
    itineraries[id]=days;
    saveItineraries();
  }else{
    itineraries[id]=days;
  }
  return days;
}
Object.keys(itineraries).forEach(k=>{itineraries[k]=normalize(itineraries[k]);});
// 起動時に韓国旅行だけを復元。他の旅行は予定なしのまま維持する。
getItinerary('seoul-2026');
saveItineraries();
let currentTripId=null,selectedDay=0,detailIndex=null,timeIndex=null,editingDays=null,editingTripId=null,longPressTriggered=false;
const $=id=>document.getElementById(id); const show=id=>$(id)?.classList.remove('hidden'); const hide=id=>$(id)?.classList.add('hidden'); const setText=(id,value)=>{const el=$(id);if(el)el.textContent=value;};
function saveAll(){localStorage.setItem(TRIPS_KEY,JSON.stringify(tripList));saveItineraries();}
function getTripDayCount(id){const t=tripList.find(x=>x.id===id);if(!t||!t.startDate||!t.endDate)return 1;const start=new Date(t.startDate+'T00:00:00');const end=new Date(t.endDate+'T00:00:00');const diff=Math.round((end-start)/86400000)+1;return Math.max(1,diff);}
function formatDayTabDate(startDate,index){if(!startDate)return '';const d=new Date(startDate+'T00:00:00');d.setDate(d.getDate()+index);return `${d.getMonth()+1}/${d.getDate()}`;}
function ensureItems(id){const count=getTripDayCount(id);let days=Array.isArray(itineraries[id])?normalize(itineraries[id]):[];while(days.length<count)days.push({title:`DAY ${days.length+1}`,items:[]});if(days.length>count)days=days.slice(0,count);days=days.map((d,i)=>({...d,title:(d.title&&/^DAY \d+/.test(d.title))?`DAY ${i+1}${d.title.slice(d.title.indexOf(' ')+1).includes('—')?d.title.slice(d.title.indexOf(' ')+1):''}`:(d.title||`DAY ${i+1}`)}));itineraries[id]=days;saveItineraries();}
function formatDate(a,b){if(!a&&!b)return '日程未設定'; const f=s=>s?s.replace(/-/g,'.'):''; return b&&a?`${f(a)} — ${b.slice(0,4)===a.slice(0,4)?f(b).slice(5):f(b)}`:f(a||b);}
function renderTripList(){const box=$('tripCards');const sorted=[...tripList].sort((a,b)=>{const ad=a.startDate?Date.parse(a.startDate+'T00:00:00'):Number.NEGATIVE_INFINITY;const bd=b.startDate?Date.parse(b.startDate+'T00:00:00'):Number.NEGATIVE_INFINITY;return bd-ad;});box.innerHTML=sorted.map(t=>`<button type="button" class="trip-card" data-trip-id="${t.id}"><div class="trip-card-main"><div class="trip-card-title">${t.flag?esc(t.flag)+' ':''}${esc(t.title||'無題の旅行')}</div><div class="trip-card-date">${esc(formatDate(t.startDate,t.endDate))}</div>${t.hotel?`<div class="trip-card-hotel">${esc(t.hotel)}</div>`:''}</div><span class="trip-card-arrow">›</span></button>`).join('');}
function showList(){currentTripId=null;hide('tripDetailView');show('tripListView');closeAllModals();renderTripList();window.scrollTo(0,0);}
function openTrip(id){
  const t=tripList.find(x=>x.id===id);if(!t)return;
  currentTripId=id;
  const days=getItinerary(id);
  ensureItems(id);
  selectedDay=0;
  hide('tripListView');show('tripDetailView');render();window.scrollTo(0,0);
}
function render(){
  const t=tripList.find(x=>x.id===currentTripId);if(!t)return;
  setText('tripFlag',t.flag||''); setText('tripName',t.title||'旅行'); setText('tripDate',formatDate(t.startDate,t.endDate)); setText('tripBadge',t.hotel||'');
  const dayTabs=$('dayTabs');
  const dayCount=getTripDayCount(currentTripId);
  dayTabs.innerHTML=Array.from({length:dayCount},(_,i)=>`<button class="day-tab ${i===selectedDay?'active':''}" data-day="${i}">DAY ${i+1}<span>${esc(formatDayTabDate(t.startDate,i))}</span></button>`).join('');
  const days=getItinerary(currentTripId);
  if(selectedDay>=dayCount)selectedDay=dayCount-1;
  const d=days[selectedDay]||{title:`DAY ${selectedDay+1}`,items:[]};
  $('dayHeading').textContent=d.title;renderNext(d.items);renderTimeline(d.items);
}
function renderNext(items){const active=items.filter(x=>!x.skipped);const card=$('nextCard');if(!active.length){card.innerHTML='<p class="next-note">この日の予定はありません。</p>';return;}let item=active[0];const now=new Date();const t=tripList.find(x=>x.id===currentTripId);const date=t?.startDate?new Date(t.startDate+'T00:00:00'):null;if(date&&date.getFullYear()===now.getFullYear()&&date.getMonth()===now.getMonth()&&now.getDate()===date.getDate()+selectedDay){const mins=now.getHours()*60+now.getMinutes();item=active.find(x=>toMin(x.time)>=mins)||active[active.length-1];}card.innerHTML=`<div class="next-top"><div class="icon-bubble">${esc(item.icon)}</div><div><p class="next-time">${esc(item.time)}</p><h3 class="next-name">${esc(item.name)}</h3><p class="next-note">${esc(item.detail).replace(/\n/g,'<br>')}</p></div></div>`;}
function renderTimeline(items){const tl=$('timeline');tl.innerHTML=items.map((x,i)=>`<article class="timeline-item"><div class="time" data-time-index="${i}" role="button" tabindex="0">${esc(x.time)}</div><div class="plan-card ${x.skipped?'skipped':''}" data-detail-index="${i}" role="button" tabindex="0"><div class="plan-header"><div class="plan-icon">${esc(x.icon)}</div><div><h3 class="plan-name">${esc(x.name)}${x.skipped?'<span class="skip-label">SKIPPED</span>':''}</h3><p class="plan-detail">${esc(x.detail).replace(/\n/g,'<br>')}</p></div></div></div></article>`).join('')+`<button type="button" id="addPlanButton" class="add-plan-button">＋ 予定を追加</button>`;}
function openDetail(i){const days=getItinerary(currentTripId);const x=days[selectedDay]?.items?.[i];if(!x)return;detailIndex=i;$('detailEditTitle').value=x.name||'';$('detailEditLocation').value=x.location||'';$('detailEditMemo').value=x.detail||'';show('detailBackdrop');lock();}
function openTimeEdit(i){const days=getItinerary(currentTripId);const x=days[selectedDay]?.items?.[i];if(!x)return;timeIndex=i;$('timeEditName').textContent=x.name;$('timeEditInput').value=x.time;show('timeEditBackdrop');lock();}
function openAdd(){ $('addPlanName').value='';$('addPlanTime').value='';$('addPlanDetail').value='';show('addPlanBackdrop');lock();}
function openAdjust(){editingDays=clone(getItinerary(currentTripId));$('currentTime').textContent=new Date().toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit',hour12:false});renderAdjust();show('modalBackdrop');lock();}
const fixedNames=['オダリチプ','韓服レンタル','韓服返却','噴水ショー','チェックアウト','仁川発','成田着'];
function renderAdjust(){const list=$('adjustList'),items=editingDays[selectedDay].items;list.innerHTML=items.map((x,i)=>`<article class="adjust-item ${x.skipped?'is-skipped':''}"><div class="adjust-row"><div class="adjust-icon">${esc(x.icon)}</div><div class="adjust-main"><h3 class="adjust-name">${esc(x.name)}</h3><p class="adjust-detail">${esc(x.detail).replace(/\n/g,'<br>')}</p><div class="time-editor"><input type="time" value="${esc(x.time)}" data-adjust-time="${i}" ${fixedNames.includes(x.name)?'disabled':''}></div>${fixedNames.includes(x.name)?'<div class="fixed-note">🔒 固定予定（予約・飛行機など）</div>':''}<div class="adjust-controls"><button class="small-button up" data-move="up" data-index="${i}" ${i===0?'disabled':''}>↑</button><button class="small-button down" data-move="down" data-index="${i}" ${i===items.length-1?'disabled':''}>↓</button><button class="small-button skip" data-skip="${i}">${x.skipped?'戻す':'スキップ'}</button></div></div></div></article>`).join('');}
function openTripEdit(id){const t=tripList.find(x=>x.id===id);if(!t)return;editingTripId=id;$('tripEditTitle').value=t.title||'';$('tripEditFlag').value=t.flag||'';$('tripEditStart').value=t.startDate||'';$('tripEditEnd').value=t.endDate||'';$('tripEditHotel').value=t.hotel||'';show('tripEditBackdrop');lock();}
function closeAllModals(){document.querySelectorAll('.modal-backdrop').forEach(x=>x.classList.add('hidden'));document.body.style.overflow='';}
function lock(){document.body.style.overflow='hidden';}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function toMin(s){const [h,m]=s.split(':').map(Number);return h*60+m;}
function makeId(){return 'trip-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7);}
function bind(){
 document.body.addEventListener('click',e=>{
   const card=e.target.closest('.trip-card'); if(card){if(longPressTriggered){longPressTriggered=false;return;}openTrip(card.dataset.tripId);return;}
   const day=e.target.closest('.day-tab');if(day){selectedDay=Number(day.dataset.day);render();window.scrollTo({top:0,behavior:'smooth'});return;}
   if(e.target.closest('#backToTrips')){showList();return;} if(e.target.closest('#openAdjust')){openAdjust();return;} if(e.target.closest('#closeAdjust')){closeAllModals();return;}
   const time=e.target.closest('.timeline-item > .time');if(time){openTimeEdit(Number(time.dataset.timeIndex));return;} const plan=e.target.closest('.plan-card');if(plan){openDetail(Number(plan.dataset.detailIndex));return;}
   if(e.target.closest('#todayButton')){const t=tripList.find(x=>x.id===currentTripId);const now=new Date();if(t?.startDate){const d=new Date(t.startDate+'T00:00:00');const n=Math.round((new Date(now.getFullYear(),now.getMonth(),now.getDate())-d)/86400000);if(n>=0&&n<3){selectedDay=n;render();}}return;}
   if(e.target.closest('#closeDetail')){closeAllModals();return;} if(e.target.closest('#saveDetail')){const days=getItinerary(currentTripId);const x=days[selectedDay]?.items?.[detailIndex];if(!x)return;x.name=$('detailEditTitle').value.trim()||'予定';x.location=$('detailEditLocation').value.trim();x.detail=$('detailEditMemo').value;delete x.tag;saveAll();closeAllModals();render();return;} if(e.target.closest('#deleteDetailPlan')){const days=getItinerary(currentTripId);if(!days[selectedDay]?.items?.[detailIndex])return;days[selectedDay].items.splice(detailIndex,1);saveAll();closeAllModals();render();return;}
   if(e.target.closest('#closeTimeEdit')){closeAllModals();return;}if(e.target.closest('#saveTimeEdit')){const days=getItinerary(currentTripId);const x=days[selectedDay]?.items?.[timeIndex];if(!x)return;x.time=$('timeEditInput').value||x.time;saveAll();closeAllModals();render();return;}
   if(e.target.closest('#addPlanButton')){openAdd();return;}if(e.target.closest('#closeAddPlan')||e.target.closest('#cancelAddPlan')){closeAllModals();return;}if(e.target.closest('#saveAddPlan')){if(!currentTripId)return;let days=getItinerary(currentTripId);if(!Array.isArray(days)||!days.length){ensureItems(currentTripId);days=getItinerary(currentTripId);}if(!days[selectedDay]){days[selectedDay]={title:`DAY ${selectedDay+1}`,items:[]};}if(!Array.isArray(days[selectedDay].items))days[selectedDay].items=[];const name=$('addPlanName').value.trim();if(!name)return alert('予定名を入力してください。');days[selectedDay].items.push({time:$('addPlanTime').value||'09:00',icon:'📍',name,detail:$('addPlanDetail').value||''});days[selectedDay].items.sort((a,b)=>toMin(a.time)-toMin(b.time));itineraries[currentTripId]=normalize(days);saveAll();closeAllModals();render();return;}
   if(e.target.closest('#refreshTime')){$('currentTime').textContent=new Date().toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit',hour12:false});return;}if(e.target.closest('#resetSchedule')){editingDays=currentTripId==='seoul-2026'?clone(DEFAULT_ITINERARY):Array.from({length:getTripDayCount(currentTripId)},(_,i)=>({title:`DAY ${i+1}`,items:[]}));renderAdjust();return;}if(e.target.closest('#closeAdjust')){closeAllModals();return;}if(e.target.closest('#saveSchedule')){itineraries[currentTripId]=normalize(editingDays);saveAll();closeAllModals();render();return;}
   const up=e.target.closest('[data-move]');if(up){const i=Number(up.dataset.index),j=up.dataset.move==='up'?i-1:i+1;const arr=editingDays[selectedDay].items;if(j>=0&&j<arr.length)[arr[i],arr[j]]=[arr[j],arr[i]];renderAdjust();return;}const sk=e.target.closest('[data-skip]');if(sk){editingDays[selectedDay].items[Number(sk.dataset.skip)].skipped=!editingDays[selectedDay].items[Number(sk.dataset.skip)].skipped;renderAdjust();return;}
   if(e.target.closest('#addTripButton')){const id=makeId();tripList.push({id,title:'新しい旅行',flag:'',startDate:'',endDate:'',hotel:''});ensureItems(id);saveAll();renderTripList();openTripEdit(id);return;}
   if(e.target.closest('#closeTripEdit')){closeAllModals();return;}if(e.target.closest('#saveTrip')){const t=tripList.find(x=>x.id===editingTripId);if(!t)return;t.title=$('tripEditTitle').value.trim()||'無題の旅行';t.flag=$('tripEditFlag').value.trim();t.startDate=$('tripEditStart').value;t.endDate=$('tripEditEnd').value;t.hotel=$('tripEditHotel').value.trim();saveAll();closeAllModals();renderTripList();if(currentTripId===t.id)render();return;}if(e.target.closest('#deleteTrip')){const idx=tripList.findIndex(x=>x.id===editingTripId);if(idx<0)return;const id=editingTripId;tripList.splice(idx,1);delete itineraries[id];saveAll();closeAllModals();showList();return;}
 });
 document.body.addEventListener('input',e=>{const inp=e.target.closest('[data-adjust-time]');if(inp)editingDays[selectedDay].items[Number(inp.dataset.adjustTime)].time=inp.value;});
 document.body.addEventListener('pointerdown',e=>{const card=e.target.closest('.trip-card');if(!card)return;longPressTriggered=false;card._lp=setTimeout(()=>{longPressTriggered=true;openTripEdit(card.dataset.tripId);},650);});
 ['pointerup','pointercancel','pointerleave'].forEach(ev=>document.body.addEventListener(ev,e=>{const card=e.target.closest?.('.trip-card');if(card&&card._lp){clearTimeout(card._lp);card._lp=null;}}));
}
bind();
// Always start on the travel list. The itinerary is intentionally not rendered until a trip card is tapped.
showList();

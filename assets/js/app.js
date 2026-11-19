'use strict';
const TROPHIES = [{"id":"boar-trophy","name":"Кабан","creature":"Boar","biome":"meadows","chance":15,"prefab":"TrophyBoar","note":"","boss":false},{"id":"deer-trophy","name":"Олень","creature":"Deer","biome":"meadows","chance":50,"prefab":"TrophyDeer","note":"","boss":false},{"id":"neck-trophy","name":"Никс","creature":"Neck","biome":"meadows","chance":5,"prefab":"TrophyNeck","note":"","boss":false},{"id":"eikthyr-trophy","name":"Эйктюр","creature":"Eikthyr","biome":"meadows","chance":100,"prefab":"TrophyEikthyr","note":"Босс биома","boss":true},{"id":"greydwarf-trophy","name":"Грейдворф","creature":"Greydwarf","biome":"forest","chance":5,"prefab":"TrophyGreydwarf","note":"","boss":false},{"id":"greydwarf-brute-trophy","name":"Грейдворф-дикарь","creature":"Greydwarf Brute","biome":"forest","chance":10,"prefab":"TrophyGreydwarfBrute","note":"","boss":false},{"id":"greydwarf-shaman-trophy","name":"Грейдворф-шаман","creature":"Greydwarf Shaman","biome":"forest","chance":10,"prefab":"TrophyGreydwarfShaman","note":"","boss":false},{"id":"rancid-remains-trophy","name":"Сгнившие останки","creature":"Rancid Remains","biome":"forest","chance":10,"prefab":"TrophySkeletonPoison","note":"В погребальных комнатах","boss":false},{"id":"skeleton-trophy","name":"Скелет","creature":"Skeleton","biome":"forest","chance":10,"prefab":"TrophySkeleton","note":"Также встречается в болотах","boss":false},{"id":"ghost-trophy","name":"Дух","creature":"Ghost","biome":"forest","chance":10,"prefab":"TrophyGhost","note":"В погребальных комнатах","boss":false},{"id":"troll-trophy","name":"Лесной тролль","creature":"Troll","biome":"forest","chance":50,"prefab":"TrophyForestTroll","note":"","boss":false},{"id":"bear-trophy","name":"Медведь","creature":"Bear","biome":"forest","chance":10,"prefab":"TrophyBjorn","note":"","boss":false},{"id":"brenna-trophy","name":"Бренна","creature":"Brenna","biome":"forest","chance":100,"prefab":"TrophySkeletonHildir","note":"Мини-босс из задания Хильдир","boss":false},{"id":"the-elder-trophy","name":"Древний","creature":"The Elder","biome":"forest","chance":100,"prefab":"TrophyTheElder","note":"Босс биома","boss":true},{"id":"serpent-trophy","name":"Змей","creature":"Serpent","biome":"ocean","chance":33,"prefab":"TrophySerpent","note":"Трофей тонет — добывайте возле берега","boss":false},{"id":"abomination-trophy","name":"Мерзость","creature":"Abomination","biome":"swamp","chance":50,"prefab":"TrophyAbomination","note":"","boss":false},{"id":"blob-trophy","name":"Сгустень","creature":"Blob / Oozer","biome":"swamp","chance":10,"prefab":"TrophyBlob","note":"Также выпадает из озера","boss":false},{"id":"draugr-trophy","name":"Драугр","creature":"Draugr","biome":"swamp","chance":10,"prefab":"TrophyDraugr","note":"","boss":false},{"id":"draugr-elite-trophy","name":"Элитный драугр","creature":"Draugr Elite","biome":"swamp","chance":10,"prefab":"TrophyDraugrElite","note":"","boss":false},{"id":"leech-trophy","name":"Пиявка","creature":"Leech","biome":"swamp","chance":10,"prefab":"TrophyLeech","note":"","boss":false},{"id":"surtling-trophy","name":"Суртлинг","creature":"Surtling","biome":"swamp","chance":5,"prefab":"TrophySurtling","note":"","boss":false},{"id":"wraith-trophy","name":"Призрак","creature":"Wraith","biome":"swamp","chance":5,"prefab":"TrophyWraith","note":"Чаще ночью","boss":false},{"id":"kvastur","name":"Квастур","creature":"Kvastur","biome":"swamp","chance":100,"prefab":"TrophyKvastur","note":"Особый противник","boss":false},{"id":"bonemass-trophy","name":"Масса костей","creature":"Bonemass","biome":"swamp","chance":100,"prefab":"TrophyBonemass","note":"Босс биома","boss":true},{"id":"writhan-trophy","name":"Вритан","creature":"Writhan","biome":"swamp","chance":10,"prefab":"TrophyWrithan","note":"","boss":false},{"id":"cultist-trophy","name":"Культист","creature":"Cultist","biome":"mountains","chance":10,"prefab":"TrophyCultist","note":"В ледяных пещерах","boss":false},{"id":"drake-trophy","name":"Дракон","creature":"Drake","biome":"mountains","chance":10,"prefab":"TrophyHatchling","note":"","boss":false},{"id":"fenring-trophy","name":"Фенринг","creature":"Fenring","biome":"mountains","chance":10,"prefab":"TrophyFenring","note":"Появляется ночью","boss":false},{"id":"stone-golem-trophy","name":"Каменный голем","creature":"Stone Golem","biome":"mountains","chance":5,"prefab":"TrophySGolem","note":"","boss":false},{"id":"ulv-trophy","name":"Ульв","creature":"Ulv","biome":"mountains","chance":10,"prefab":"TrophyUlv","note":"В ледяных пещерах","boss":false},{"id":"wolf-trophy","name":"Волк","creature":"Wolf","biome":"mountains","chance":10,"prefab":"TrophyWolf","note":"","boss":false},{"id":"geirrhafa-trophy","name":"Гейрафа","creature":"Geirrhafa","biome":"mountains","chance":100,"prefab":"TrophyCultist_Hildir","note":"Мини-босс из задания Хильдир","boss":false},{"id":"moder-trophy","name":"Матерь","creature":"Moder","biome":"mountains","chance":100,"prefab":"TrophyDragonQueen","note":"Босс биома","boss":true},{"id":"frost-blob-trophy","name":"Ледяной сгустень","creature":"Frost Blob","biome":"mountains","chance":10,"prefab":"TrophyBlob_Frost","note":"Призывается морозной бомбой, не обычный спавн биома","boss":false},{"id":"deathsquito-trophy","name":"Смертожал","creature":"Deathsquito","biome":"plains","chance":5,"prefab":"TrophyDeathsquito","note":"","boss":false},{"id":"fuling-trophy","name":"Фулинг","creature":"Fuling","biome":"plains","chance":10,"prefab":"TrophyGoblin","note":"","boss":false},{"id":"fuling-berserker-trophy","name":"Фулинг-берсерк","creature":"Fuling Berserker","biome":"plains","chance":5,"prefab":"TrophyGoblinBrute","note":"","boss":false},{"id":"fuling-shaman-trophy","name":"Фулинг-шаман","creature":"Fuling Shaman","biome":"plains","chance":10,"prefab":"TrophyGoblinShaman","note":"","boss":false},{"id":"growth-trophy","name":"Поросль","creature":"Growth","biome":"plains","chance":10,"prefab":"TrophyGrowth","note":"В смоляных ямах","boss":false},{"id":"lox-trophy","name":"Быкоящер","creature":"Lox","biome":"plains","chance":10,"prefab":"TrophyLox","note":"","boss":false},{"id":"vile-trophy","name":"Гнилолап","creature":"Vile","biome":"plains","chance":10,"prefab":"TrophyBjornUndead","note":"","boss":false},{"id":"zil-trophy","name":"Зил","creature":"Zil","biome":"plains","chance":100,"prefab":"TrophyGoblinBruteBrosShaman","note":"Мини-босс из задания Хильдир","boss":false},{"id":"thungr-trophy","name":"Тангр","creature":"Thungr","biome":"plains","chance":100,"prefab":"TrophyGoblinBruteBrosBrute","note":"Мини-босс из задания Хильдир","boss":false},{"id":"yagluth-trophy","name":"Яглут","creature":"Yagluth","biome":"plains","chance":100,"prefab":"TrophyGoblinKing","note":"Босс биома","boss":true},{"id":"dvergr-trophy","name":"Дверг","creature":"Dvergr","biome":"mistlands","chance":5,"prefab":"TrophyDvergr","note":"Также в Землях пепла и Крайнем Севере","boss":false},{"id":"hare-trophy","name":"Заяц","creature":"Hare","biome":"mistlands","chance":5,"prefab":"TrophyHare","note":"","boss":false},{"id":"gjall-trophy","name":"Гьялль","creature":"Gjall","biome":"mistlands","chance":30,"prefab":"TrophyGjall","note":"","boss":false},{"id":"seeker-trophy","name":"Искатель","creature":"Seeker","biome":"mistlands","chance":5,"prefab":"TrophySeeker","note":"","boss":false},{"id":"seeker-soldier-trophy","name":"Искатель-солдат","creature":"Seeker Soldier","biome":"mistlands","chance":5,"prefab":"TrophySeekerBrute","note":"","boss":false},{"id":"tick-trophy","name":"Клещ","creature":"Tick","biome":"mistlands","chance":5,"prefab":"TrophyTick","note":"","boss":false},{"id":"the-queen-trophy","name":"Королева","creature":"The Queen","biome":"mistlands","chance":100,"prefab":"TrophySeekerQueen","note":"Босс биома","boss":true},{"id":"asksvin-trophy","name":"Пеплозавр","creature":"Asksvin","biome":"ashlands","chance":10,"prefab":"TrophyAsksvin","note":"","boss":false},{"id":"bonemaw-trophy","name":"Костепасть","creature":"Bonemaw","biome":"ashlands","chance":33,"prefab":"TrophyBonemawSerpent","note":"Прибрежные воды Земель пепла","boss":false},{"id":"fallen-valkyrie-trophy","name":"Падшая валькирия","creature":"Fallen Valkyrie","biome":"ashlands","chance":5,"prefab":"TrophyFallenValkyrie","note":"","boss":false},{"id":"marksman-trophy","name":"Лучник","creature":"Charred Marksman","biome":"ashlands","chance":5,"prefab":"TrophyCharredArcher","note":"","boss":false},{"id":"morgen-trophy","name":"Морген","creature":"Morgen","biome":"ashlands","chance":5,"prefab":"TrophyMorgen","note":"","boss":false},{"id":"volture-trophy","name":"Стервулканник","creature":"Volture","biome":"ashlands","chance":10,"prefab":"TrophyVolture","note":"","boss":false},{"id":"warlock-trophy","name":"Чернокнижник","creature":"Charred Warlock","biome":"ashlands","chance":5,"prefab":"TrophyCharredMage","note":"","boss":false},{"id":"warrior-trophy","name":"Воин","creature":"Charred Warrior","biome":"ashlands","chance":5,"prefab":"TrophyCharredMelee","note":"","boss":false},{"id":"fader-trophy","name":"Прародитель","creature":"Fader","biome":"ashlands","chance":100,"prefab":"TrophyFader","note":"Босс биома","boss":true},{"id":"lava-blob-trophy","name":"Лавовый сгустень","creature":"Lava Blob","biome":"ashlands","chance":10,"prefab":"TrophyBlob_Lava","note":"","boss":false},{"id":"barka-trophy","name":"Барка","creature":"Barka","biome":"north","chance":10,"prefab":"TrophyBarka","note":"","boss":false},{"id":"elaking-trophy","name":"Элакинг","creature":"Elaking","biome":"north","chance":10,"prefab":"TrophyElaking","note":"","boss":false},{"id":"eyeless-one-trophy","name":"Безглазый","creature":"Eyeless One","biome":"north","chance":10,"prefab":"TrophyMole","note":"","boss":false},{"id":"hexen-trophy","name":"Хексен","creature":"Hexen","biome":"north","chance":10,"prefab":"TrophyJotunWitch","note":"","boss":false},{"id":"krigen-trophy","name":"Криген","creature":"Krigen","biome":"north","chance":10,"prefab":"TrophyJotunWarrior","note":"","boss":false},{"id":"moose-trophy","name":"Лось","creature":"Moose","biome":"north","chance":10,"prefab":"TrophyMoose","note":"","boss":false},{"id":"pulp-trophy","name":"Масса","creature":"Shapeless Pulp","biome":"north","chance":10,"prefab":"TrophyBlob_Morkhalla","note":"","boss":false},{"id":"seal-trophy","name":"Тюлень","creature":"Seal","biome":"north","chance":10,"prefab":"TrophySeal","note":"","boss":false}];
const BIOMES = {meadows:{name:'Луга',icon:'☘',note:'Начало путешествия'},forest:{name:'Чёрный лес',icon:'♠',note:'Тёмные леса и подземелья'},ocean:{name:'Океан',icon:'≋',note:'Открытое море'},swamp:{name:'Болото',icon:'♣',note:'Топи и затонувшие склепы'},mountains:{name:'Горы',icon:'❄',note:'Снежные вершины и пещеры'},plains:{name:'Равнины',icon:'☀',note:'Земли фулингов'},mistlands:{name:'Туманные земли',icon:'◈',note:'В тумане и среди руин'},ashlands:{name:'Пепельные земли',icon:'✹',note:'Раскалённый юг'},north:{name:'Дальний север',icon:'✥',note:'Замёрзший северный край'}};
const TIERS=[{key:'S',title:'Легендарная редкость',description:'Шанс выпадения 5% — самые редкие обычные трофеи'},{key:'A',title:'Очень редкие',description:'Шанс выпадения 10%'},{key:'B',title:'Необычные',description:'Шанс выпадения 15%'},{key:'C',title:'Умеренно редкие',description:'Шанс выпадения 30–33%'},{key:'D',title:'Частые',description:'Шанс выпадения 50%'},{key:'★',title:'Гарантированная добыча',description:'Шанс выпадения 100% — боссы и особые противники'}];
const $=s=>document.querySelector(s);
const IMAGE_ROOT='https://valheim-modding.github.io/Jotunn/Documentation/images/items/';
const CREATURE_ROOT='https://valheim-modding.github.io/Jotunn/Documentation/images/characters/';
const CREATURE_IMAGES={"boar-trophy":"Boar","deer-trophy":"Deer","neck-trophy":"Neck","eikthyr-trophy":"Eikthyr","greydwarf-trophy":"Greydwarf","greydwarf-brute-trophy":"Greydwarf_Elite","greydwarf-shaman-trophy":"Greydwarf_Shaman","rancid-remains-trophy":"Skeleton_Poison","skeleton-trophy":"Skeleton","ghost-trophy":"Ghost","troll-trophy":"Troll","bear-trophy":"Bjorn","brenna-trophy":"Skeleton_Hildir","the-elder-trophy":"gd_king","serpent-trophy":"Serpent","abomination-trophy":"Abomination","blob-trophy":"Blob","draugr-trophy":"Draugr","draugr-elite-trophy":"Draugr_Elite","leech-trophy":"Leech","surtling-trophy":"Surtling","wraith-trophy":"Wraith","kvastur":"BogWitchKvastur","bonemass-trophy":"Bonemass","writhan-trophy":"Writhan","cultist-trophy":"Fenring_Cultist","drake-trophy":"Hatchling","fenring-trophy":"Fenring","stone-golem-trophy":"StoneGolem","ulv-trophy":"Ulv","wolf-trophy":"Wolf","geirrhafa-trophy":"Fenring_Cultist_Hildir","moder-trophy":"Dragon","frost-blob-trophy":"BlobFrost","deathsquito-trophy":"Deathsquito","fuling-trophy":"Goblin","fuling-berserker-trophy":"GoblinBrute","fuling-shaman-trophy":"GoblinShaman","growth-trophy":"BlobTar","lox-trophy":"Lox","vile-trophy":"Unbjorn","zil-trophy":"GoblinShaman_Hildir","thungr-trophy":"GoblinBrute_Hildir","yagluth-trophy":"GoblinKing","dvergr-trophy":"Dverger","hare-trophy":"Hare","gjall-trophy":"Gjall","seeker-trophy":"Seeker","seeker-soldier-trophy":"SeekerBrute","tick-trophy":"Tick","the-queen-trophy":"SeekerQueen","asksvin-trophy":"Asksvin","bonemaw-trophy":"BonemawSerpent","fallen-valkyrie-trophy":"FallenValkyrie","marksman-trophy":"Charred_Archer","morgen-trophy":"Morgen","volture-trophy":"Volture","warlock-trophy":"Charred_Mage","warrior-trophy":"Charred_Melee","fader-trophy":"Fader","lava-blob-trophy":"BlobLava","barka-trophy":"Barka","elaking-trophy":"Elaking","eyeless-one-trophy":"ElakingMole","hexen-trophy":"JotunWitch","krigen-trophy":"JotunWarrior","moose-trophy":"Moose","pulp-trophy":"BlobMork","seal-trophy":"Seal"};
const creatureImage=t=>CREATURE_ROOT+encodeURIComponent(CREATURE_IMAGES[t.id])+'.png';
const STORAGE_KEY='valheim_trophy_hall_ru_v1';
const tier=t=>t.chance===100?'★':t.chance<=5?'S':t.chance<=10?'A':t.chance<=15?'B':t.chance<=33?'C':'D';
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
let saved=new Set();let mode='tier';let toastTimer;
try {const json=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');if(Array.isArray(json))saved=new Set(json.filter(id=>TROPHIES.some(t=>t.id===id)));} catch(e) {console.warn('Не удалось прочитать локальный прогресс',e)}
function persist(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify([...saved]));}catch(e){notify('Нет доступа к памяти браузера: сохраните прогресс в файл')}}
function notify(s){let box=$('#toast');box.textContent=s;box.classList.remove('hide');clearTimeout(toastTimer);toastTimer=setTimeout(()=>box.classList.add('hide'),3400)}
function updateStats(){let n=saved.size;$('#foundCount').textContent=n;$('#progressPct').textContent=Math.round(n/TROPHIES.length*100)+'%';$('#progressFill').style.width=(n/TROPHIES.length*100)+'%';$('#missingStat').textContent=TROPHIES.length-n;const rs=TROPHIES.filter(t=>tier(t)==='S');const bs=TROPHIES.filter(t=>t.boss);$('#rareStat').textContent=rs.filter(t=>saved.has(t.id)).length+' / '+rs.length;$('#bossStat').textContent=bs.filter(t=>saved.has(t.id)).length+' / '+bs.length}
function getFiltered(){const q=$('#search').value.trim().toLocaleLowerCase('ru');const biome=$('#biomeFilter').value;const status=$('#statusFilter').value;return TROPHIES.filter(t=>{if(biome!=='all'&&t.biome!==biome)return false;if(status==='found'&&!saved.has(t.id))return false;if(status==='missing'&&saved.has(t.id))return false;if(status==='boss'&&!t.boss)return false;return !q||[t.name,t.creature,BIOMES[t.biome].name,t.id,t.prefab].some(v=>v.toLocaleLowerCase('ru').includes(q))})}
function makeCard(t){let found=saved.has(t.id),b=BIOMES[t.biome];return `<article class="card ${found?'found':''}" data-id="${escapeHtml(t.id)}"><div class="art"><span class="tag-tier">${tier(t)} · ${t.chance}%</span><img loading="lazy" alt="Трофей: ${escapeHtml(t.name)}" src="${IMAGE_ROOT+encodeURIComponent(t.prefab)}.png" onerror="this.style.display='none';this.nextElementSibling.hidden=false"><span class="image-fallback" aria-hidden="true" hidden>ᛟ</span><button class="status-icon" type="button" data-action="toggle" data-id="${escapeHtml(t.id)}" aria-pressed="${found}" aria-label="${found?'Снять отметку: ':'Отметить найденным: '}${escapeHtml(t.name)}" title="${found?'Снять отметку':'Отметить найденным'}">${found?'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5 10 17.5 19 6.5"/></svg>':''}</button></div><div class="details"><h3>${escapeHtml(t.name)}</h3><div class="name-en">${escapeHtml(t.creature)}</div><div class="meta"><span class="biome-tag">${escapeHtml(b.name)}</span><span class="chance">${t.chance}%</span></div><div class="card-footer"><button class="collect" type="button" data-action="toggle" data-id="${escapeHtml(t.id)}" aria-pressed="${found}">${found?'Найдено':'Отметить'}</button><button class="info" type="button" data-action="detail" data-id="${escapeHtml(t.id)}" aria-label="Подробно о трофее ${escapeHtml(t.name)}" title="Подробнее"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><circle class="info-dot" cx="12" cy="7.4" r="1"/></svg></button></div></div></article>`}
function render(){const arr=getFiltered();const host=$('#groups');const groups=mode==='tier'?TIERS.map(t=>({id:t.key,name:t.title,desc:t.description,mark:t.key,entries:arr.filter(x=>tier(x)===t.key),type:'tier'})):Object.entries(BIOMES).map(([key,b])=>({id:key,name:b.name,desc:b.note,mark:b.icon,entries:arr.filter(x=>x.biome===key),type:'biome'}));$('#filterCount').textContent='Показано: '+arr.length;updateStats();let shown=groups.filter(x=>x.entries.length);if(!shown.length){host.innerHTML='<section class="empty"><h2>Ничего не найдено</h2><p>Попробуй другой запрос или сбрось фильтры</p><button class="btn" id="clearFilters" type="button">Сбросить фильтры</button></section>';return}host.innerHTML=shown.map(g=>{g.entries.sort((a,b)=>a.chance-b.chance||a.name.localeCompare(b.name,'ru'));let n=g.entries.filter(t=>saved.has(t.id)).length;return `<section class="group ${g.type==='biome'?'biome':''}" data-tier="${g.id}"><header class="group-head"><div class="g-left"><div class="tier-emblem" aria-hidden="true">${escapeHtml(g.mark)}</div><div><h2>${escapeHtml(g.name)}</h2><p>${escapeHtml(g.desc)}</p></div></div><div class="g-count"><strong>${n}</strong> / ${g.entries.length} найдено</div></header><div class="cards">${g.entries.map(makeCard).join('')}</div></section>`}).join('')}
function setFound(id){if(saved.has(id))saved.delete(id);else saved.add(id);persist();render()}
function dropExplanation(t){
 if(t.chance>30)return '';
 const firstMax=Math.floor(200/t.chance);
 return `<section class="drop-explain" aria-label="Как работает выпадение трофея">
  <strong>Как работает шанс ${t.chance}%?</strong>
  <p>Игра заранее выбирает номер подходящего убийства, на котором выпадет трофей. С начала нового отсчёта первый трофей появится <b>не позднее ${firstMax}-го убийства</b>, а после выпадения следующий — не позднее ${firstMax+1}-го.</p>
  <details><summary>Подробнее о счётчике</summary><p>Счётчик сохраняется после выхода из игры. У существ с разным числом звёзд шанс и счётчик могут отличаться. Если итоговый шанс выше 30%, действует обычная случайная проверка при каждом убийстве.</p><a href="https://valheim.maxdps.com/drop-odds" target="_blank" rel="noopener noreferrer">Подробный разбор механики</a></details>
 </section>`;
}
function showDetail(id){const t=TROPHIES.find(x=>x.id===id);if(!t)return;const b=BIOMES[t.biome];const found=saved.has(t.id);$('#modalHolder').innerHTML=`<div class="modal-back" id="overlay"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><button class="close" id="closeModal" aria-label="Закрыть карточку трофея" type="button"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6 18 18M18 6 6 18"/></svg></button><div class="modal-top"><div class="eyebrow">ТРОФЕЙ · РАНГ ${tier(t)}</div><h2 id="modalTitle">${escapeHtml(t.name)}</h2><div class="en">${escapeHtml(t.creature)}</div></div><div class="modal-visuals"><figure class="modal-asset trophy-preview"><img src="${IMAGE_ROOT+encodeURIComponent(t.prefab)}.png" alt="Трофей: ${escapeHtml(t.name)}" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="media-fallback" hidden>Нет изображения</span><figcaption>Трофей</figcaption></figure><figure class="modal-asset creature-preview"><img src="${creatureImage(t)}" alt="Существо: ${escapeHtml(t.name)}" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="media-fallback" hidden>Нет изображения</span><figcaption>Существо</figcaption></figure></div><div class="kv"><span>Где искать</span><strong>${escapeHtml(b.name)}</strong></div><div class="kv"><span>Шанс выпадения</span><strong>${t.chance}% (базовое значение)</strong></div><div class="kv"><span>Редкость</span><strong>${tier(t)==='★'?'Гарантированно':TIERS.find(x=>x.key===tier(t)).title}</strong></div>${t.note?`<div class="kv"><span>Особенности</span><strong>${escapeHtml(t.note)}</strong></div>`:''}<div class="kv"><span>ID предмета</span><code>${escapeHtml(t.prefab)}</code></div><div class="modal-actions"><button class="btn primary" data-action="togglemodal" data-id="${escapeHtml(t.id)}" type="button">${found?'Снять отметку':'Отметить найденным'}</button><a class="btn" href="https://valheimdb.com/items/${encodeURIComponent(t.id)}" target="_blank" rel="noopener noreferrer">Справочник <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 5h6v6M10 14 19 5"/><path d="M19 14v5H5V5h5"/></svg></a></div>${dropExplanation(t)}</section></div>`;$('#closeModal').focus();document.body.style.overflow='hidden'}
function closeModal(){if($('#overlay'))$('#modalHolder').innerHTML='';document.body.style.overflow=''}
$('#groups').addEventListener('click',e=>{const btn=e.target.closest('[data-action]');if(btn){if(btn.dataset.action==='toggle')setFound(btn.dataset.id);else showDetail(btn.dataset.id)}else if(e.target.id==='clearFilters'){resetFilters()}});
$('#modalHolder').addEventListener('click',e=>{const btn=e.target.closest('[data-action]');if(btn&&btn.dataset.action==='togglemodal'){setFound(btn.dataset.id);showDetail(btn.dataset.id)}else if(e.target.id==='overlay'||e.target.closest('#closeModal'))closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
function setMode(next){mode=next;$('#tierMode').setAttribute('aria-pressed',String(mode==='tier'));$('#biomeMode').setAttribute('aria-pressed',String(mode==='biome'));render()}
$('#tierMode').addEventListener('click',()=>setMode('tier'));
$('#biomeMode').addEventListener('click',()=>setMode('biome'));
$('#search').addEventListener('input',render);
$('#biomeFilter').addEventListener('change',render);
$('#statusFilter').addEventListener('change',render);
function resetFilters(){$('#search').value='';$('#statusFilter').value='all';$('#biomeFilter').value='all';render()}
for(let [id,b] of Object.entries(BIOMES)){$('#biomeFilter').add(new Option(b.name,id))}
/**
 * Accessible in-page confirmation, styled like the trophy detail panel.
 * The caller receives a boolean and never changes stored progress on cancel.
 */
function requestConfirmation({title,message,confirmText,destructive=false}){
 return new Promise(resolve=>{
  const host=$('#confirmHolder');
  if(!host||host.firstChild){resolve(false);return}
  const previouslyFocused=document.activeElement;
  const previousOverflow=document.body.style.overflow;
  host.innerHTML=`<div class="confirm-back" id="confirmOverlay">
   <section class="confirm-panel" role="${destructive?'alertdialog':'dialog'}" aria-modal="true" aria-labelledby="confirmTitle" aria-describedby="confirmMessage">
    <div class="confirm-header"><span class="confirm-seal" aria-hidden="true">ᛟ</span><span class="eyebrow">Зал трофеев · Подтверждение</span></div>
    <h2 id="confirmTitle">${escapeHtml(title)}</h2>
    <p id="confirmMessage">${escapeHtml(message)}</p>
    <div class="confirm-actions">
     <button type="button" class="btn confirm-cancel" id="confirmCancel">Отмена</button>
     <button type="button" class="btn ${destructive?'confirm-danger':'primary'}" id="confirmAccept">${escapeHtml(confirmText)}</button>
    </div>
   </section>
  </div>`;
  const overlay=$('#confirmOverlay');
  const cancel=$('#confirmCancel');
  const accept=$('#confirmAccept');
  let closing=false,removed=false;
  const cleanUp=(value)=>{
   if(removed)return;
   removed=true;
   host.replaceChildren();
   document.body.style.overflow=previousOverflow;
   if(previouslyFocused?.isConnected&&typeof previouslyFocused.focus==='function')previouslyFocused.focus();
   resolve(value);
  };
  const finish=(value)=>{
   if(closing)return;
   closing=true;
   document.removeEventListener('keydown',onKeydown,true);
   overlay.classList.add('is-closing');
   if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){cleanUp(value);return}
   const fallback=window.setTimeout(()=>cleanUp(value),230);
   overlay.addEventListener('animationend',event=>{
    if(event.target!==overlay)return;
    window.clearTimeout(fallback);
    cleanUp(value);
   },{once:true});
  };
  const onKeydown=(event)=>{
   if(event.key==='Escape'){event.preventDefault();event.stopPropagation();finish(false);return}
   if(event.key==='Tab'){
    const first=cancel,last=accept;
    if(event.shiftKey&&(document.activeElement===first||!overlay.contains(document.activeElement))){
     event.preventDefault();last.focus();
    }else if(!event.shiftKey&&(document.activeElement===last||!overlay.contains(document.activeElement))){
     event.preventDefault();first.focus();
    }
   }
  };
  cancel.addEventListener('click',()=>finish(false));
  accept.addEventListener('click',()=>finish(true));
  overlay.addEventListener('click',event=>{if(event.target===overlay)finish(false)});
  document.body.style.overflow='hidden';
  document.addEventListener('keydown',onKeydown,true);
  cancel.focus();
 });
}
$('#resetBtn').addEventListener('click',async()=>{
 if(!saved.size){notify('Коллекция уже пуста');return}
 const approved=await requestConfirmation({
  title:'Сбросить коллекцию?',
  message:'Будут удалены все отметки о найденных трофеях ('+saved.size+'). Это действие нельзя отменить. Перед удалением можно сохранить прогресс в файл.',
  confirmText:'Удалить отметки',
  destructive:true
 });
 if(!approved)return;
 saved.clear();persist();render();notify('Все отметки сброшены');
});
$('#exportBtn').addEventListener('click',()=>{const payload={app:'valheim-trophy-hall',formatVersion:1,gameVersion:'1.0.21',exportedAt:new Date().toISOString(),collected:[...saved]};let blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='valheim-trophies-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);notify('Файл прогресса подготовлен')});
$('#importBtn').addEventListener('click',()=>$('#importFile').click());
$('#importFile').addEventListener('change',async e=>{let file=e.target.files[0];if(!file)return;e.target.value='';if(file.size>200000){notify('Файл слишком большой');return}try{let parsed=JSON.parse(await file.text());let ids=Array.isArray(parsed)?parsed:parsed.collected;if(!Array.isArray(ids)||ids.length>200){throw Error('Неверный формат файла')}const allowed=new Set(TROPHIES.map(t=>t.id));let clean=[...new Set(ids.filter(id=>typeof id==='string'&&allowed.has(id)))];if(!await requestConfirmation({title:'Загрузить сохранение?',message:'Текущая коллекция будет заменена данными из файла ('+clean.length+' трофеев). При необходимости сначала сохрани текущий прогресс.',confirmText:'Заменить коллекцию'}))return;saved=new Set(clean);persist();render();notify('Загружено трофеев: '+clean.length)}catch(err){notify('Не удалось прочитать файл прогресса')}});
render();

/* Switch the top border and corner radius only while the sticky toolbar touches the viewport top.
   A zero-height marker records its normal document position without shifting the page. */
const filterPanel=document.querySelector('.filters-sticky');
if(filterPanel){
 const marker=document.createElement('span');
 marker.className='filters-sticky-trigger';
 marker.setAttribute('aria-hidden','true');
 filterPanel.before(marker);
 const syncFilterDock=()=>{
  const isDocked=marker.getBoundingClientRect().top<=0 && window.scrollY>0;
  filterPanel.classList.toggle('is-stuck',isDocked);
 };
 window.addEventListener('scroll',syncFilterDock,{passive:true});
 window.addEventListener('resize',syncFilterDock,{passive:true});
 syncFilterDock();
}

/* Installable static site: works in browsers without service-worker support. */
let installPromptEvent=null;
window.addEventListener('beforeinstallprompt', event=>{
  event.preventDefault();
  installPromptEvent=event;
  const button=document.querySelector('#installBtn');
  if(button)button.hidden=false;
});
document.querySelector('#installBtn')?.addEventListener('click',async()=>{
  if(!installPromptEvent)return;
  const prompt=installPromptEvent;
  installPromptEvent=null;
  document.querySelector('#installBtn').hidden=true;
  await prompt.prompt();
  try{await prompt.userChoice}catch(_e){}
});
window.addEventListener('appinstalled',()=>{
  const button=document.querySelector('#installBtn');
  if(button)button.hidden=true;
  notify('Сайт добавлен на устройство');
});
if('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost' || location.hostname==='127.0.0.1')){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(err=>console.warn('Офлайн-режим недоступен',err));
  });
}

// Curated Korean copy supplied by the artist; English remains the initial language.
(()=>{
 const entries=[];
 function bind(selector,korean,attribute){
  const elements=[...document.querySelectorAll(selector)];
  elements.forEach((element,i)=>{
   const ko=Array.isArray(korean)?korean[i]:korean;
   if(ko===undefined)throw new Error(`Missing translation: ${selector} ${i}`);
   entries.push({element,attribute,en:attribute?element.getAttribute(attribute):element.textContent,ko});
  });
 }
 const biographies={
 kian:['보상을 위해서라면 수단과 방법을 가리지 않는 냉정한 인물로 그가 지나온 길에는 늘 피비린내로 얼룩져 있습니다.','아르킨 왕가의 의뢰를 계기로 거대한 운명에 휘말립니다.','그에게 화려한 기교나 기사도와 같은 예절은 존재하지 않습니다. 철저히 적의 숨통을 끊고 살아남는 데 특화된 거친 전투를 구사합니다.'],
 elia:['아르킨이라는 이름의 굴레에 얽매인 인물로 스스로를 지킬 무력조차 없는 비전투원임에도','선한 마음으로 약자들의 비극을 결코 지나치지 못합니다.','이러한 그녀의 맹목적인 이타심은 일행을 예측 불가능한 위험에 끌어들이기도 합니다.','하지만 끊임없이 자신을 벼랑 끝으로 몰아세우는 잔혹한 운명 앞에서도, 타인을 향한 다정함은 스스로의 존엄을 잃지 않는 그녀만의 투쟁 방식입니다.'],
 rian:['고결한 의무감으로 무장한 그녀는 인간들의 얄팍한 욕망과 핏빛으로 얼룩진 혼란 속에서도 결코 흔들리지 않습니다.','자신의 임무에 따라 운명을 짊어진 자를 지키기 위해 묵묵히 앞을 가로막는 위협을 배제하며','오랜 세월 연마한 기품 있고 강력한 힘은 일행을 수호하는 방벽이 됩니다.'],
 vigo:['스스로의 힘을 조절하지 못해, 드워프임에도 동족의 긍지와도 같은 무기를 벼려내지 못하는 소년입니다.','쇠를 다루는 대신 무언가를 부수고 으스러뜨릴 수밖에 없는 이질적인 체질 탓에 깊은 결핍과 소외감을 안고 자랐습니다.','그럼에도 불구하고 선하고 여린 심성을 가진 그는','자신만의 대장간을 차리겠다는 꿈을 포기하지 않고 끊임없이 도전하는 굳센 끈기를 가졌습니다.']
 };
 const names={kian:'카이언',elia:'엘리아 아르킨',rian:'리안',vigo:'비고'};
 const roles={kian:'떠돌이 용병',elia:'닐렌 왕국의 공주',rian:'엘프 전사',vigo:'드워프 소년'};
 for(const id of Object.keys(names)){
  bind(`#${id} .biography h3`,names[id]);bind(`#${id} .eyebrow`,roles[id]);
  bind(`#${id} .biography p:not(.eyebrow)`,biographies[id]);
 }
 bind('#dragon-0 h3','카가리스');bind('#dragon-0 h4','고대 레드 드래곤');
 bind('#dragon-0 .creature-copy p',[
 '인간의 역사가 시작되기 아득한 옛날, 태초의 불길 속에서 깨어난 고룡.',
 '용암이 대륙을 가로지르고 화산재가 하늘을 뒤덮던 태고의 시대, 고대 종족 엘다르와 맹약을 맺어 그들의 영토를 수호했습니다.',
 '산과 같은 거체와 창날처럼 벼려진 발톱은 마주한 이의 혼을 얼어붙게 하며, 오랜 세월 화산의 열기를 머금은 붉은 비늘은 강철 갑주보다 견고합니다.',
 '거대한 아가리를 벌리면 목구멍 깊은 곳에서 용광로의 불빛이 일렁이고, 이윽고 쏟아지는 화염은 대지를 휩쓸어 그 위에 선 모든 것을 잿더미로 돌려놓습니다.'
 ]);
 bind('#volgras-title','볼그라스');bind('#lithivore-title','리소보어');
 bind('.creature-row:not(.creature-row-reverse) .creature-copy p',[
 "과거 평범한 늑대였으나, 엘다르의 잔재인 '검은돌'을 섭취한 뒤 변이를 일으킨 늑대의 상위종입니다.",
 '변이 과정에서 조금의 지능과 상체, 앞다리 등의 근육이 비정상적으로 발달했으며, 거대해진 앞다리를 지면에 짚고 이동하는 너클 워킹이 특징입니다.',
 '깊은 숲속에 서식하며, 개체 수는 적지만, 늑대 무리들을 거느리고 먹이를 사냥하며 살아갑니다.'
 ]);
 bind('.creature-row-reverse .creature-copy p',[
 '광물을 주식으로 삼는 마수로, 주로 고산 지대나 광맥이 풍부한 광산에 서식합니다.',
 '태어나 처음 섭취한 광물이 평생의 주식으로 결정되는 독특한 생태를 지니고 있으며, 섭취 광물은 체내에 축적되어 피부 밖으로 자라납니다.',
 '형성된 광물층은 단단한 갑옷처럼 신체를 보호하는 역할을 합니다. 광물 종류에 따라 외형과 신체적 특징이 달라지며, 크리스탈보어, 오팔보어, 다이아보어 등 다양한 아종으로 구분됩니다.'
 ]);
 bind('.section-title span',['트레일러','메인 아트','캐릭터','지도','종족','크리쳐','장면']);
 bind('.dragon-pending h3',['글라시엠','페룸','아우렐리우스']);
 bind('.dragon-pending h4',['고대 아이스 드래곤','고대 아이언 드래곤','고대 골드 드래곤']);
 bind('.dragon-pending p','업데이트 예정');
 bind('[data-dragon]',['카가리스','글라시엠','페룸','아우렐리우스']);
 bind('.race-card h3',['인간 (닐렌)','엘프','드워프','엘다르']);bind('.race-card figcaption p','(업데이트 예정)');
 bind('.flag-caption',['닐렌','아우렌','벨로스','솔람',...Array(5).fill('업데이트 예정')]);
 bind('.map-instruction','국기를 선택하면 해당 국가의 병사들을 볼 수 있습니다.');
 bind('.zoom-hint', [...document.querySelectorAll('.zoom-hint')].map(e=>e.textContent.includes('concept')?'컨셉 시트 보기 ↗':'확대보기 ↗'));
 bind('.poster-caption strong','트레일러');bind('.poster-caption p','제작 중');
 bind('.skip','본문으로 이동');bind('footer a','맨 위로 ↑');
 bind('#viewer-close','닫기 ×');bind('#viewer-close','이미지 확대창 닫기','aria-label');
 bind('#image-viewer','이미지 확대보기','aria-label');bind('#viewer-message h3','업데이트 예정');
 bind('#viewer-message p','현재 제작 중인 병사들입니다. 추후 업데이트될 예정입니다.');
 entries[entries.length-1].en='These soldiers are currently in development. Artwork will be added in a future update.';
 bind('.dragon-prev','이전 드래곤','aria-label');bind('.dragon-next','다음 드래곤','aria-label');
 const descriptions={
 'main-art':'카이언, 엘리아, 리안, 비고의 전투 일러스트','world-map-v2':'발렌 대륙 지도',
 'kagaris-hd':'불타는 도시를 습격하는 카가리스','kagaris-sheet-hd':'카가리스 컨셉 시트',
 'volgras-hd':'볼그라스 컨셉 아트','lithivore-hd':'리소보어 컨셉 아트',
 'race-human':'인간 (닐렌) 종족 원화','race-elf':'엘프 종족 원화','race-dwarf':'드워프 종족 원화','race-eldar':'엘다르 종족 원화',
 'scene-1':'볼그라스와 늑대 무리에 맞서는 검사','scene-2':'마차 곁에서 벌어지는 볼그라스와의 전투','scene-3':'숲속 모닥불 주변에서 쉬는 일행','scene-4':'마법 장벽 안에서 부상당한 왕을 보호하는 공주'
 };
 for(const id of Object.keys(names)){descriptions[id]=`${names[id]} 전신 원화`;descriptions[`${id}-sheet`]=`${names[id]} 컨셉 시트: 포즈, 표정, 의상 및 장비`;}
 const soldiers=['닐렌 왕국','아우렌 제국','벨로스 제국','솔람 제국'];
 document.querySelectorAll('[data-full]').forEach(button=>{
  const file=button.dataset.full.split('/').pop().replace('.webp','');
  const country=['nillen','auren','belos','solam'].indexOf(file.replace('-soldiers',''));
  const ko=country>=0?`${soldiers[country]} — 병사`:descriptions[file];
  if(!ko)throw new Error(`Missing artwork translation: ${file}`);
  entries.push({element:button,attribute:'data-title',en:button.dataset.title||button.querySelector('img').alt,ko});
  entries.push({element:button,attribute:'aria-label',en:button.getAttribute('aria-label'),ko:`${ko} 확대보기`});
 });
 let language='en';
 window.refreshViewerLanguage=()=>{
  if(!opener)return;
  const pending=opener.hasAttribute('data-coming');
  document.querySelector('#viewer-title').textContent=pending?(language==='ko'?'업데이트 예정':'Coming soon'):opener.dataset.title;
  if(!pending)document.querySelector('#viewer-image').alt=opener.dataset.title;
 };
 function applyLanguage(next){
  language=next==='ko'?'ko':'en';document.documentElement.lang=language;
  entries.forEach(({element,attribute,en,ko})=>{const value=language==='ko'?ko:en;if(attribute)element.setAttribute(attribute,value);else element.textContent=value;});
  const toggle=document.querySelector('#language-toggle');toggle.textContent=language==='ko'?'English':'한국어';toggle.setAttribute('aria-label',language==='ko'?'Switch to English':'한국어로 전환');
  const active=document.querySelector('[data-dragon][aria-pressed="true"]');
  document.querySelector('.dragon-status').textContent=`${Number(active.dataset.dragon)+1} / 4 · ${active.textContent}`;
  window.refreshViewerLanguage();
  try{localStorage.setItem('arsanc-language',language);}catch{}
  updateNav();
 }
 document.querySelector('#language-toggle').addEventListener('click',()=>applyLanguage(language==='en'?'ko':'en'));
 let saved='en';try{saved=localStorage.getItem('arsanc-language')||'en';}catch{}
 applyLanguage(saved);
})();

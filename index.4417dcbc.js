const e=new class{constructor(e){this.initialState=e,this.messageStart=document.querySelector(".message-start"),this.messageLose=document.querySelector(".message-lose"),this.messageWin=document.querySelector(".message-win"),this.startActive=!1,this.score=0}moveLeft(){let e=[...document.querySelector("tbody").children];"playing"===this.getStatus()&&e.forEach(e=>{let t=[],l=(e,l,n)=>{for(let s=e+1;s<l;s++)if(t.some(e=>e.cellIndex===s&&e.cellContent!==n))return!1;return!0};[...e.children].forEach((e,n)=>{let s={},r=parseInt(e.textContent);if(r){let c=t.find(e=>e.cellContent===r&&!0===l(e.cellIndex,n,r)&&e.mergeTry<1);c?(c.cellContent+=r,c.mergeTry++,this.score+=c.cellContent):(s.cellIndex=n,s.cellContent=r,s.mergeTry=0,t.push(s));let i=document.createElement("td");i.classList.add("field-cell"),e.replaceWith(i)}}),0!==t.length&&t.forEach(t=>{for(let l of[...e.children])if(!l.textContent){l.textContent=t.cellContent,l.classList.add(`field-cell--${t.cellContent}`),2048===t.cellContent&&(this.messageWin.classList.remove("hidden"),this.startActive=!1);break}})})}moveRight(){let e=[...document.querySelector("tbody").children];"playing"===this.getStatus()&&e.forEach(e=>{let t=[],l=(e,l,n)=>{for(let s=e+1;s<l;s++)if(t.some(e=>e.cellIndex===s&&e.cellContent!==n))return!1;return!0};[...e.children].reverse().forEach((e,n)=>{let s={},r=parseInt(e.textContent);if(r){let c=t.find(e=>e.cellContent===r&&!0===l(e.cellIndex,n,r)&&e.mergeTry<1);c?(c.cellContent+=r,c.mergeTry++,this.score+=c.cellContent):(s.cellIndex=n,s.cellContent=r,s.mergeTry=0,t.push(s));let i=document.createElement("td");i.classList.add("field-cell"),e.replaceWith(i)}}),0!==t.length&&t.forEach(t=>{for(let l of[...e.children].reverse())if(!l.textContent){l.textContent=t.cellContent,l.classList.add(`field-cell--${t.cellContent}`),2048===t.cellContent&&(this.messageWin.classList.remove("hidden"),this.startActive=!1);break}})})}moveUp(){let e=[...document.querySelector("tbody").children],t=[],l=(e,l,n,s)=>{for(let r=l+1;r<n;r++)if(t.some(t=>t.rowIndex===r&&t.cellIndex===e&&t.cellContent!==s))return!1;return!0};"playing"===this.getStatus()&&(e.forEach((e,n)=>{[...e.children].forEach((e,s)=>{let r={},c=parseInt(e.textContent);if(c){let i=t.find(e=>e.cellIndex===s&&e.cellContent===c&&!0===l(s,e.rowIndex,n,c));i?(i.cellContent+=c,this.score+=i.cellContent):(r.rowIndex=n,r.cellIndex=s,r.cellContent=c,t.push(r));let o=document.createElement("td");o.classList.add("field-cell"),e.replaceWith(o)}})}),t.forEach(t=>{for(let[l,n]of Object.entries(t))if("cellIndex"===l)for(let l of e){let e=parseInt(n)+1,s=l.querySelector(`*:nth-child(${e})`);if(!s.textContent){s.textContent=t.cellContent,s.classList.add(`field-cell--${t.cellContent}`),2048===t.cellContent&&(this.messageWin.classList.remove("hidden"),this.startActive=!1);break}}}))}moveDown(){let e=[...document.querySelector("tbody").children].reverse(),t=[],l=(e,l,n,s)=>{for(let r=l+1;r<n;r++)if(t.some(t=>t.rowIndex===r&&t.cellIndex===e&&t.cellContent!==s))return!1;return!0};"playing"===this.getStatus()&&(e.forEach((e,n)=>{[...e.children].forEach((e,s)=>{let r={},c=parseInt(e.textContent);if(c){let i=t.find(e=>e.cellIndex===s&&e.cellContent===c&&!0===l(s,e.rowIndex,n,c));i?(i.cellContent+=c,this.score+=i.cellContent):(r.rowIndex=n,r.cellIndex=s,r.cellContent=c,t.push(r));let o=document.createElement("td");o.classList.add("field-cell"),e.replaceWith(o)}})}),t.forEach(t=>{for(let[l,n]of Object.entries(t))if("cellIndex"===l)for(let l of e){let e=parseInt(n)+1,s=l.querySelector(`*:nth-child(${e})`);if(!s.textContent){s.textContent=t.cellContent,s.classList.add(`field-cell--${t.cellContent}`),2048===t.cellContent&&(this.messageWin.classList.remove("hidden"),this.startActive=!1);break}}}))}getScore(){let e=document.querySelector(".game-score");return this.startActive||(this.score=0),e.textContent=this.score,this.score}getState(){let e=[...document.querySelector("tbody").children];this.initialState=e.map(e=>[...e.children].map(e=>{let t=parseInt(e.textContent);return t||(t=0),t}))}getStatus(){let e="";return!1===this.startActive&&(e="idle"),!0===this.startActive&&(e="playing"),this.messageWin.classList.contains("hidden")||(e="win"),this.messageLose.classList.contains("hidden")||(e="lose"),e}start(){this.messageStart.classList.add("hidden"),this.switchButton(),this.startActive=!0,this.addTiles(2)}restart(){let e=[...document.querySelector("tbody").children];this.messageStart.classList.remove("hidden"),this.messageLose.classList.add("hidden"),e.forEach(e=>{[...e.children].forEach(e=>{let t=document.createElement("td");t.classList.add("field-cell"),e.replaceWith(t)})}),this.startActive=!1,this.switchButton(),this.getScore()}switchButton(){let e=document.querySelector(".button");e.classList.contains("restart")?(e.classList.replace("restart","start"),e.textContent="Start"):(e.classList.replace("start","restart"),e.textContent="Restart")}generateTiles(){let e={2:.9,4:.1},t=0;for(let l in e)t+=e[l];return function(){let l=Math.random()*t;for(let t in e)if((l-=e[t])<=0)return t}()}addTiles(e){let t=[...document.querySelector("tbody").children],l=[];t.forEach(e=>{[...e.children].forEach(e=>{e.textContent||l.push(e)})});for(let t=0;t<e;t++){let e=Math.floor(Math.random()*l.length),t=l[e],n=this.generateTiles();t.textContent=n,t.classList.add(`field-cell--${n}`),l.splice(e,1)}}hasEmptyCell(){for(let e of this.initialState)if(e.some(e=>0===e))return!0;return!1}},t=document.querySelector("body"),l=document.querySelector(".button");l.addEventListener("click",()=>{l.classList.contains("start")?e.start():l.classList.contains("restart")&&e.restart()}),t.addEventListener("keydown",t=>{e.getState();let l=JSON.stringify(e.initialState);switch(t.key){case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight()}e.getState(),l!==JSON.stringify(e.initialState)&&e.addTiles(1),e.hasEmptyCell()||e.messageLose.classList.remove("hidden"),e.getScore()});
//# sourceMappingURL=index.4417dcbc.js.map
const e=function(e){const t=e.reduce(((e,{title:t,genre_ids:i})=>e+`<li><h2>${t}</h2><ul>${i.reduce(((e,t)=>e+`<li>${t}</li>`),"")}</ul></li>`),"");return console.log(t),t}([{title:"Interceptor",genre_ids:[28,53,12,18]},{title:"Fantastic Beasts: The Secrets of Dumbledore",genre_ids:[14,12,28]},{title:"Last Seen Alive",genre_ids:[28,53]},{title:"Jurassic World Dominion",genre_ids:[878,28,12,53]}]);document.querySelector(".list").innerHTML=e;
//# sourceMappingURL=index.d13bff94.js.map

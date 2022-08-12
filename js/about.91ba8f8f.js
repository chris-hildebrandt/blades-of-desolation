"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[443],{7664:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var l=t(3396),o=t(7139);const r=["id","onClick"];function s(e,a,t,s,i,n){return(0,l.wg)(),(0,l.iD)("div",{class:"container area-map map",style:(0,o.j5)("background-image: url("+e.bgImg+")")},[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(10,(a=>(0,l._)("div",{class:"row",key:a},[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(6,(t=>(0,l._)("div",{id:e.location+"-"+a+"-"+t,class:(0,o.C_)(["col bg-shadow",n.findIfVisible(a,t)?"":"bg-dark disabled"]),onClick:l=>n.explore(e.location+"-"+a+"-"+t),key:t},null,10,r))),64))]))),64))],4)}var i=t(4870),n=t(8914),c=t(7387),d=t.n(c),p=t(5469),h=t(1067),u=t(5216),g={name:"AreaLocation",components:{},setup(){(0,l.bv)((()=>{let e=n.Z.state.player.explored[n.Z.state.location];e.forEach((e=>{d()("#"+e).removeClass("bg-shadow")}))}));const e=(0,i.qj)({location:(0,l.Fl)((()=>n.Z.state.location)),explored:(0,l.Fl)((()=>n.Z.state.player.explored[n.Z.state.location])),bgImg:(0,l.Fl)((()=>n.Z.state.locationImgList.find((e=>e.includes("area"+(n.Z.state.location+1)+".")))))});return e},methods:{explore(e){let a=n.Z.state.player.explored[n.Z.state.location];a.includes(e)||(a.push(e),d()("#"+e).removeClass("bg-shadow")),this.getRandomEncounter()},async getRandomEncounter(){let e=Math.ceil(100*Math.random());if(e>40)p.Z.push({name:"battleField"});else if(e>20)h.Z.toast("You found some nice trees");else if(e>10){let e=Math.round(100*Math.random());n.Z.state.player.gold+=e,h.Z.toast("You found "+e+"Gold!")}else if(e>5){let e=u.x.findRandomItem();n.Z.state.player.items.push(e),h.Z.toast("You found a "+e.name)}else await h.Z.confirm("Encounter","Hello weary travaler, would you like to buy some wears?")&&p.Z.push({name:"MainShop"})},findIfVisible(e,a){let t=!1;return 0==this.explored.length?e+a==2:(this.explored.forEach((l=>{let o=l.split("-");o[1]!=e||o[2]!=a?(+o[1]+1==e&&+o[2]==a||+o[1]-1==e&&+o[2]==a||+o[2]+1==a&&+o[1]==e||+o[2]-1==a&&+o[1]==e)&&(t=!0):t=!0})),t)}}},m=t(89);const v=(0,m.Z)(g,[["render",s]]);var y=v},7381:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var l=t(3396);const o={class:"about"},r=(0,l._)("h1",null,"This is an about page",-1),s=[r];function i(e,a){return(0,l.wg)(),(0,l.iD)("div",o,s)}var n=t(89);const c={},d=(0,n.Z)(c,[["render",i]]);var p=d},7743:function(e,a,t){t.r(a),t.d(a,{default:function(){return le}});var l=t(3396);const o={class:"container mt-5 pt-5"},r={key:0},s={key:1},i={key:2};function n(e,a,t,n,c,d){const p=(0,l.up)("ShopNavBar"),h=(0,l.up)("GeneralShop"),u=(0,l.up)("SellShop"),g=(0,l.up)("MagicShop");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(p),(0,l._)("div",o,["general"==e.activeShop?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(h,{storeItems:e.storeItems},null,8,["storeItems"])])):(0,l.kq)("",!0),"sell"==e.activeShop?((0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(u)])):(0,l.kq)("",!0),"magic"==e.activeShop?((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(g,{spellList:e.spellList},null,8,["spellList"])])):(0,l.kq)("",!0)])],64)}var c=t(4870),d=t(8914),p=t(5216),h=t(4485),u=t(6897),g=t(118),m=t(7139);const v={class:"navbar navbar-dark bg-darker"},y={class:"w-25 d-flex justify-content-between"},b={class:"mr-3"},C=["disabled"],f=["onClick","disabled"];function k(e,a,t,o,r,s){return(0,l.wg)(),(0,l.iD)("nav",v,[(0,l._)("div",y,[(0,l._)("a",{class:"btn btn-sm btn-outline-secondary",onClick:a[0]||(a[0]=e=>s.changeShop("sell"))},"Sell"),(0,l._)("a",{class:"btn btn-sm btn-outline-secondary",onClick:a[1]||(a[1]=e=>s.changeShop("general"))},"Items Shop"),(0,l._)("a",{class:"btn btn-sm btn-outline-secondary",onClick:a[2]||(a[2]=e=>s.changeShop("magic"))},"Magic Shop")]),(0,l._)("div",b,[(0,l._)("button",{class:"btn btn-warning mr-2",onClick:a[3]||(a[3]=(...e)=>s.adventureOn&&s.adventureOn(...e))},"Adventure On!"),(0,l._)("button",{class:"btn btn-primary",onClick:a[4]||(a[4]=e=>s.rest()),disabled:o.state.playersGold<50*o.state.location+50},"Rest ("+(0,m.zw)(50*o.state.location+50)+" gold)",9,C),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.state.revive,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id},[(0,l._)("button",{class:"btn btn-secondary m-3",onClick:a=>s.reviveCharacter(e.id),disabled:o.state.playersGold<e.cost},"Revive "+(0,m.zw)(e.name)+" ("+(0,m.zw)(-10*(e.hp-e.baseHp))+" gold)",9,f)])))),128))])])}var _=t(5469),w={name:"ShopNavBar",setup(){const e=(0,c.qj)({healPartyCost:(0,l.Fl)((()=>Math.round(d.Z.state.player.characters.map((e=>e.hp>0?e.baseHp-e.hp:0)).reduce(((e,a)=>e+a))))),restorePartyMagicCost:(0,l.Fl)((()=>Math.round(3*d.Z.state.player.characters.map((e=>e.baseMagic>0?e.baseMagic-e.magic:0)).reduce(((e,a)=>e+a))))),revive:(0,l.Fl)((()=>d.Z.state.player.characters.filter((e=>e.hp<1)))),playersGold:(0,l.Fl)((()=>d.Z.state.player.gold)),location:(0,l.Fl)((()=>d.Z.state.location))});return{state:e}},methods:{reviveCharacter(e){let a=this.state.revive.find((a=>a.id=e)),t=-10*(a.hp-a.baseHp);this.$store.commit("reducePlayerGold",t),this.$store.state.player.characters.forEach((a=>a.id==e?a.hp=a.baseHp:""))},healParty(){this.$store.commit("reducePlayerGold",this.state.healPartyCost),this.$store.state.player.characters.forEach((e=>e.hp<e.baseHp&&e.hp>0?e.hp=e.baseHp:""))},RestorePartyMagic(){this.$store.commit("reducePlayerGold",this.state.restorePartyMagicCost),this.$store.state.player.characters.forEach((e=>e.magic<e.baseMagic?e.magic=e.baseMagic:""))},rest(){d.Z.state.player.characters.forEach((e=>{e.hp=e.baseHp,e.magic=e.baseMagic,e.abilities.forEach((e=>e.uses=e.baseUses))}))},adventureOn(){_.Z.push({name:"AreaLocation"})},changeShop(e){d.Z.state.shop=e}}},Z=t(89);const S=(0,Z.Z)(w,[["render",k],["__scopeId","data-v-9311a3aa"]]);var I=S,M=t(1067),A=t(9359);const D=(0,l._)("div",{class:"row pt-5"},[(0,l._)("div",{class:"col-6"},[(0,l._)("label",{for:"sell"},"Sell Items")])],-1),F={class:"row mh-100"},H={class:"col-6"},L=["onClick"];function q(e,a,t,o,r,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,[D,(0,l._)("div",F,[(0,l._)("div",H,[(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.playerItems,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,m.C_)(s.getRarityFullName(e.rarity)),key:e.id,onClick:a=>s.sell(e)},(0,m.zw)(e.name)+" - "+(0,m.zw)(e.price/10)+"gold",11,L)))),128))])])])],64)}var x={name:"SellSop",setup(){const e=(0,c.qj)({playersGold:(0,l.Fl)((()=>d.Z.state.player.gold)),playerItems:(0,l.Fl)((()=>d.Z.state.player.items))});return e},methods:{sell(e){p.x.sellItem(e)},getRarityFullName:h.$}};const G=(0,Z.Z)(x,[["render",q]]);var j=G;const P=(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col-6"},[(0,l._)("label",{for:"buy"},"Buy Items")])],-1),Y={class:"row mh-100"},R={class:"col-6"};function $(e,a,t,o,r,s){const i=(0,l.up)("Item");return(0,l.wg)(),(0,l.iD)(l.HY,null,[P,(0,l._)("div",Y,[(0,l._)("div",R,[(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.storeItems,(e=>((0,l.wg)(),(0,l.j4)(i,{class:(0,m.C_)(s.getRarityFullName(e.rarity)),key:e.id,item:e,display:"shop",onClick:a=>s.buy(e)},null,8,["class","item","onClick"])))),128))])])])],64)}var E=t(3406),z={name:"GeneralShop",components:{Item:E.Z},props:{storeItems:{type:Object}},setup(){const e=(0,c.qj)({playersGold:(0,l.Fl)((()=>d.Z.state.player.gold)),quest:null,activeShop:(0,l.Fl)((()=>d.Z.state.shop))});return e},methods:{buy(e){this.$store.state.player.gold>=e.price?(this.$store.commit("reducePlayerGold",e.price),p.x.buyItem(e),M.Z.toast("Purchased "+e.name,"success")):M.Z.toast("Insufficient resources","warning")},getRarityFullName:h.$}};const N=(0,Z.Z)(z,[["render",$]]);var K=N;const O=e=>((0,l.dD)("data-v-08c3e4e2"),e=e(),(0,l.Cn)(),e),B=O((()=>(0,l._)("div",{class:"row pt-5"},[(0,l._)("div",{class:"col-6 text-right"},[(0,l._)("label",{for:"buy"},"Learn Spells")])],-1))),T={class:"row mh-100"},W={class:"col-6"},Q={key:0,for:"spells"},V=["onClick","title"];function U(e,a,t,o,r,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,[B,(0,l._)("div",T,[(0,l._)("div",W,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.spellList,(e=>((0,l.wg)(),(0,l.iD)("ul",{key:e},[e.length>0?((0,l.wg)(),(0,l.iD)("label",Q,(0,m.zw)(e[0].level>0?"Level "+e[0].level:"Cantrip")+" Spells",1)):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.name,onClick:a=>s.buySpell(e),title:e.title??s.getTitle(e)},(0,m.zw)(e.name)+" - "+(0,m.zw)(e.price??1e3*e.level+1e3)+"gold",9,V)))),128))])))),128))])])],64)}var J={name:"MagicShop",props:{spellList:{type:Object}},setup(){const e=(0,c.qj)({});return e},methods:{async buySpell(e){let a=e.price??1e3*e.level+1e3;if(d.Z.state.player.gold<a)return void M.Z.toast("Insufficient resources","warning");let t=await M.Z.selectChar(e.name,a);if(0==t||!t)return;let l=d.Z.state.player.characters.filter((e=>e.id==t))[0];this.$store.commit("reducePlayerGold",a),A.w.learnSpell(e.name,l)},getTitle(e){let a="";return e.strength?a=e.strength+" "+e.dmgType+" dmg":(a=e.buff?"+":"-",a+=e.value+" "+e.effect),a+=e.areaEffect?" (Mass effect)":"",a}}};const X=(0,Z.Z)(J,[["render",U],["__scopeId","data-v-08c3e4e2"]]);var ee=X,ae={name:"MainShop",components:{ShopNavBar:I,SellShop:j,GeneralShop:K,MagicShop:ee},setup(){(0,l.bv)((async()=>{let e=1+g._.getPartyLuck(),a=Math.ceil(25*Math.random());if(e>a){let e=Math.floor(Math.random()*d.Z.state.quests.length),a=d.Z.state.quests[e];await M.Z.confirm(a.objective,a.target)&&u.g.acceptQuest(a)}u.g.checkQuestProgress(),d.Z.state.shopItems=p.x.getStoreItems()}));const e=(0,c.qj)({playersGold:(0,l.Fl)((()=>d.Z.state.player.gold)),storeItems:(0,l.Fl)((()=>d.Z.state.shopItems)),quest:null,activeShop:(0,l.Fl)((()=>d.Z.state.shop)),spellList:(0,l.Fl)((()=>A.w.getRandomSpellList()))});return e},methods:{getRarityFullName:h.$}};const te=(0,Z.Z)(ae,[["render",n]]);var le=te},3140:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var l=t(3396);const o={class:"container map"},r=(0,l._)("img",{class:"",src:"https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/imageedit_1_8804535635.png?alt=media&token=d39097b7-e9a9-42dc-8ad9-580d7daab080",width:"1000",height:"840",usemap:"#world-map"},null,-1),s={name:"world-map",id:"world-map"};function i(e,a,t,i,n,c){return(0,l.wg)(),(0,l.iD)("div",o,[r,(0,l._)("map",s,[(0,l._)("area",{id:"area-1",shape:"circle",coords:"708,238,10",alt:"1",title:"Area 1",onClick:a[0]||(a[0]=e=>c.locationChange(0))}),(0,l._)("area",{id:"area-2",shape:"circle",coords:"733,336,10",alt:"2",title:"Area 2",onClick:a[1]||(a[1]=e=>c.locationChange(1))}),(0,l._)("area",{id:"area-3",shape:"circle",coords:"620,360,10",alt:"3",title:"Area 3",onClick:a[2]||(a[2]=e=>c.locationChange(2))}),(0,l._)("area",{id:"area-4",shape:"circle",coords:"482,328,10",alt:"4",title:"Area 4",onClick:a[3]||(a[3]=e=>c.locationChange(3))}),(0,l._)("area",{id:"area-5",shape:"circle",coords:"454,232,10",alt:"5",title:"Area 5",onClick:a[4]||(a[4]=e=>c.locationChange(4))}),(0,l._)("area",{id:"area-6",shape:"circle",coords:"682,132,10",alt:"6",title:"Area 6",onClick:a[5]||(a[5]=e=>c.locationChange(5))}),(0,l._)("area",{id:"area-7",shape:"circle",coords:"270,225,10",alt:"7",title:"Area 7",onClick:a[6]||(a[6]=e=>c.locationChange(6))}),(0,l._)("area",{id:"area-8",shape:"circle",coords:"113,265,10",alt:"8",title:"Area 8",onClick:a[7]||(a[7]=e=>c.locationChange(7))}),(0,l._)("area",{id:"area-9",shape:"circle",coords:"299,340,10",alt:"9",title:"Area 9",onClick:a[8]||(a[8]=e=>c.locationChange(8))}),(0,l._)("area",{id:"area-10",shape:"circle",coords:"320,392,10",alt:"10",title:"Area 10",onClick:a[9]||(a[9]=e=>c.locationChange(9))}),(0,l._)("area",{id:"area-11",shape:"circle",coords:"480,444,10",alt:"11",title:"Area 11",onClick:a[10]||(a[10]=e=>c.locationChange(10))}),(0,l._)("area",{id:"area-12",shape:"circle",coords:"633,485,10",alt:"12",title:"Area 12",onClick:a[11]||(a[11]=e=>c.locationChange(11))}),(0,l._)("area",{id:"area-13",shape:"circle",coords:"809,519,10",alt:"13",title:"Area 13",onClick:a[12]||(a[12]=e=>c.locationChange(12))}),(0,l._)("area",{id:"area-14",shape:"circle",coords:"635,622,10",alt:"14",title:"Area 14",onClick:a[13]||(a[13]=e=>c.locationChange(13))}),(0,l._)("area",{id:"area-15",shape:"circle",coords:"455,541,10",alt:"15",title:"Area 15",onClick:a[14]||(a[14]=e=>c.locationChange(14))}),(0,l._)("area",{id:"area-16",shape:"circle",coords:"450,605,10",alt:"16",title:"Area 16",onClick:a[15]||(a[15]=e=>c.locationChange(15))}),(0,l._)("area",{id:"area-17",shape:"circle",coords:"360,665,10",alt:"17",title:"Area 17",onClick:a[16]||(a[16]=e=>c.locationChange(16))}),(0,l._)("area",{id:"area-18",shape:"circle",coords:"285,590,10",alt:"18",title:"Area 18",onClick:a[17]||(a[17]=e=>c.locationChange(17))}),(0,l._)("area",{id:"area-19",shape:"circle",coords:"211,675,10",alt:"19",title:"Area 19",onClick:a[18]||(a[18]=e=>c.locationChange(18))}),(0,l._)("area",{id:"area-20",shape:"circle",coords:"734,747,10",alt:"20",title:"Area 20",onClick:a[19]||(a[19]=e=>c.locationChange(19))}),(0,l._)("area",{id:"area-secret",shape:"circle",coords:"100,100,10",alt:"death",onClick:a[20]||(a[20]=e=>c.locationChange(20))})])])}var n=t(4870),c=t(5469),d=t(8914),p=t(1067),h={name:"MapLocation",components:{},setup(){const e=(0,n.qj)({});return e},methods:{locationChange(e){this.checkLocationChange(e)||0==e?(d.Z.state.location=e,c.Z.push({name:"AreaLocation"})):p.Z.toast("Cannot access this location")},checkLocationChange(e){if(!(Math.abs(d.Z.state.location-e)>1))return 12==d.Z.state.player.explored[d.Z.state.location].length;p.Z.toast("Cannot Skip areas in journey")}}},u=t(89);const g=(0,u.Z)(h,[["render",i]]);var m=g}}]);
//# sourceMappingURL=about.91ba8f8f.js.map
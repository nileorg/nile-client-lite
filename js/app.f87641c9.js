(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([1,"chunk-vendors"]),a()})({0:function(t,e){},"0251":function(t,e,a){t.exports=a.p+"img/flag.a256d45b.svg"},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0825":function(t){t.exports=JSON.parse('{"title":"Nile, nasci!","subtitle":"Viviamo in una società in cui le grandi aziende hanno il potere di influenzare le economie e le tendenze. Oggi le grandi aziende che possiedono il mercato online non pagano le tasse, non pagano le imposte, non pagano i loro dipendenti e stanno perturbando le economie locali. Pensiamo che il mondo meriti un\'alternativa migliore, così decidiamo di fondare il Nilo","citySelectorTitle":"Scorri per esplorare le città","citySelectorFilter":"Ricerca per nome della città","tagFilterShops":"Cliccare sui tag per filtrare i negozi, cliccare di nuovo per disattivare","tagFilterProducts":"Cliccare sui tag per filtrare i prodotti, cliccare di nuovo per disattivare","cartTitle":"Il tuo ordine","cartAdd":"Aggiungi","cartEdit":"Modifica","cartTotal":"Totale","cartNotes":"Note","cartEditAddress":"Modifica indirizzo","cartWarningEmptyAccount":"Nessun indirizzo è impostato","payOrderInstruction":"Dopo aver effettuato il pagamento torna su questa pagina e invia l\'ordine.","payOrderVia":"Paga ordine via","payOrderCash":"Paga ordine in contanti","payOrderCancel":"Torna ai metodi di pagamento","cartSendOrderVia":"Invia ordine via","accountTitle":"Inserisci i tuoi dati","accountFirstname":"Nome","accountLastname":"Cognome","accountAddress":"Indirizzo","accountPhone":"Telefono","accountNotes":"Note","accountRingbell":"Campanello","accountClose":"Chiudere","languageTitle":"Seleziona la lingua"}')},"0f62":function(t,e,a){t.exports=a.p+"img/user.c8d0a8bb.svg"},1:function(t,e,a){t.exports=a("56d7")},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},2:function(t,e){},3:function(t,e){},3560:function(t,e,a){"use strict";var n=a("6c34"),r=a.n(n);r.a},"3b60":function(t,e,a){t.exports=a.p+"img/go-back-left-arrow.358b4c8e.svg"},4:function(t,e){},"49f8":function(t,e,a){var n={"./en.json":"edd4","./it.json":"0825"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="49f8"},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("0a63"),o=a.n(r),s=a("1881"),i=a.n(s),c=a("4ae6"),u=a.n(c),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"account",attrs:{src:a("0f62")},on:{click:function(){t.$modal.hide("account"),t.$modal.show("account")}}}),n("img",{staticClass:"language-selector",attrs:{src:a("0251")},on:{click:function(){t.$modal.hide("language-selector"),t.$modal.show("language-selector")}}}),n("modal",{attrs:{styles:"border-radius: 10px; border: var(--border-lg); padding: 20px; text-align: center;",height:"auto",width:"320",name:"account"}},[n("div",[n("h4",[t._v(t._s(t.$t("accountTitle")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.account.firstname,expression:"$store.state.account.firstname"}],staticClass:"el-input account-input",attrs:{type:"text",placeholder:t.$t("accountFirstname")},domProps:{value:t.$store.state.account.firstname},on:{change:function(){return t.$store.commit("saveAccount")},input:function(e){e.target.composing||t.$set(t.$store.state.account,"firstname",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.account.lastname,expression:"$store.state.account.lastname"}],staticClass:"el-input account-input",attrs:{type:"text",placeholder:t.$t("accountLastname")},domProps:{value:t.$store.state.account.lastname},on:{change:function(){return t.$store.commit("saveAccount")},input:function(e){e.target.composing||t.$set(t.$store.state.account,"lastname",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.account.address,expression:"$store.state.account.address"}],staticClass:"el-input account-input",attrs:{type:"text",placeholder:t.$t("accountAddress")},domProps:{value:t.$store.state.account.address},on:{change:function(){return t.$store.commit("saveAccount")},input:function(e){e.target.composing||t.$set(t.$store.state.account,"address",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.account.doorbell,expression:"$store.state.account.doorbell"}],staticClass:"el-input account-input",attrs:{type:"text",placeholder:t.$t("accountRingbell")},domProps:{value:t.$store.state.account.doorbell},on:{change:function(){return t.$store.commit("saveAccount")},input:function(e){e.target.composing||t.$set(t.$store.state.account,"doorbell",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.account.phone,expression:"$store.state.account.phone"}],staticClass:"el-input account-input",attrs:{type:"text",placeholder:t.$t("accountPhone")},domProps:{value:t.$store.state.account.phone},on:{change:function(){return t.$store.commit("saveAccount")},input:function(e){e.target.composing||t.$set(t.$store.state.account,"phone",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.account.notes,expression:"$store.state.account.notes"}],staticClass:"el-input account-input",attrs:{type:"text",placeholder:t.$t("accountNotes")},domProps:{value:t.$store.state.account.notes},on:{change:function(){return t.$store.commit("saveAccount")},input:function(e){e.target.composing||t.$set(t.$store.state.account,"notes",e.target.value)}}}),n("button",{staticClass:"el-button el-button-sm el-button--primary card-button account-input",on:{click:function(){t.$modal.hide("account")}}},[t._v(t._s(t.$t("accountClose")))])])]),n("modal",{attrs:{styles:"border-radius: 10px; border: var(--border-lg); padding: 20px; text-align: center;",height:"auto",width:"320",name:"language-selector"}},[n("h4",[t._v(t._s(t.$t("languageTitle")))]),n("button",{staticClass:"el-button el-button-sm el-button--primary card-button account-input",on:{click:function(){t.$modal.hide("language-selector"),t.$store.commit("setLang","en"),t.$root.$i18n.locale="en"}}},[t._v("English")]),n("button",{staticClass:"el-button el-button-sm el-button--primary card-button account-input",on:{click:function(){t.$modal.hide("language-selector"),t.$store.commit("setLang","it"),t.$root.$i18n.locale="it"}}},[t._v("Italiano")])]),n("router-view")],1)},d=[],p={mounted:function(){this.$store.state.lang&&(this.$root.$i18n.locale=this.$store.state.lang)}},h=p,m=(a("034f"),a("2877")),f=Object(m["a"])(h,l,d,!1,null,null,null),v=f.exports,g=a("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"section section--hero",style:"background-image: url('"+a("fb16")+"');",attrs:{id:"home"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"el-row"},[n("div",{staticClass:"el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12 el-col-lg-12"},[n("h1",[t._v(t._s(t.$t("title")))]),n("p",[t._v(t._s(t.$t("subtitle")))])])])]),t._m(0),t._m(1)]),n("div",{staticClass:"el-row",staticStyle:{"background-color":"#f5f8fa"}},[n("div",{staticClass:"el-col el-col-24 el-col-xs-24 city-selector"},[n("div",{staticStyle:{"padding-top":"30px","padding-left":"30px","padding-right":"30px"}},[n("h4",{staticClass:"city-selector-label"},[t._v(t._s(t.$t("citySelectorTitle")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cityFilter,expression:"cityFilter"}],staticClass:"el-input city-selector-filter",attrs:{type:"text",placeholder:t.$t("citySelectorFilter")},domProps:{value:t.cityFilter},on:{input:function(e){e.target.composing||(t.cityFilter=e.target.value)}}})]),n("carousel",{staticClass:"city-selector-carousel",attrs:{perPageCustom:[[0,1],[768,3],[1024,4],[1240,6]],paginationEnabled:!1}},t._l(t.filteredCities,(function(e,a){return n("slide",{key:a,staticClass:"city-selector-carousel-item"},[n("Card",{key:"card-"+a,attrs:{title:e.name,description:e.description,image:e.image},nativeOn:{click:function(a){return function(){return t.openCity(e)}()}}})],1)})),1)],1)])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"earth-wrapper animation-target"},[n("img",{staticClass:"earth rotating",attrs:{alt:"earth",src:a("b830")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-divider",staticStyle:{width:"100vw"}},[n("img",{staticClass:"divider",attrs:{alt:"divider",src:a("9a46")}})])}],$=(a("4de4"),a("caad"),a("b0c0"),a("2532"),a("9911"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",staticStyle:{"max-height":"250px",overflow:"hidden"}},[a("div",{staticClass:"card-header",style:"background-image: url('"+t.image+"');"},[a("div",{staticClass:"card-title"},[t._v(t._s(t.title))])]),a("div",{staticClass:"card-body"},[t._v(" "+t._s(t.description)+" "),t.button?a("button",{staticClass:"el-button el-button-sm el-button--primary card-button",on:{click:t.button.click}},[t._v(t._s(t.button.label))]):t._e()])])}),C=[],k={name:"Card",props:{title:String,description:String,image:String,button:Object}},x=k,_=(a("bb91"),Object(m["a"])(x,$,C,!1,null,"7d9c40b3",null)),w=_.exports,S=(a("99af"),a("d3b7"),a("25f0"),a("96cf"),a("1da1")),O=a("668b"),T=a("cde5"),P=a.n(T);function A(){return N.apply(this,arguments)}function N(){return N=Object(S["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r,o,s,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$ipfs;case 3:e=t.sent,this.ipfsStatus=!0,t.next=11;break;case 7:return t.prev=7,t.t0=t["catch"](0),this.ipfsStatus=!1,t.abrupt("return");case 11:this.$store.commit("setHash",window.hash),a=[],n=!0,r=!1,t.prev=15,s=Object(O["a"])(e.cat(window.hash));case 17:return t.next=19,s.next();case 19:return i=t.sent,n=i.done,t.next=23,i.value;case 23:if(c=t.sent,n){t.next=30;break}u=c,a.push(u);case 27:n=!0,t.next=17;break;case 30:t.next=36;break;case 32:t.prev=32,t.t1=t["catch"](15),r=!0,o=t.t1;case 36:if(t.prev=36,t.prev=37,n||null==s.return){t.next=41;break}return t.next=41,s.return();case 41:if(t.prev=41,!r){t.next=44;break}throw o;case 44:return t.finish(41);case 45:return t.finish(36);case 46:try{this.cities=JSON.parse(T["Buffer"].concat(a).toString())}catch(l){this.cities=[]}case 47:case"end":return t.stop()}}),t,this,[[0,7],[15,32,36,46],[37,,41,45]])}))),N.apply(this,arguments)}var j={name:"Home",components:{Card:w},data:function(){return{ipfsStatus:!1,cities:[],cityFilter:""}},computed:{filteredCities:function(){var t=this;return""!==this.cityFilter?this.cities.filter((function(e){return e.name.toUpperCase().includes(t.cityFilter.toUpperCase())})):this.cities}},mounted:function(){this.$store.state.city&&this.$store.state.city.link?this.$router.push({name:"City",params:{city:this.$store.state.city,cityLink:this.$store.state.city.link}}):A.bind(this)()},methods:{openCity:function(t){this.$store.commit("setCity",t),this.$router.push({name:"City",params:{city:t,cityLink:this.$store.state.city.link}})}}},D=j,E=(a("3560"),Object(m["a"])(D,b,y,!1,null,"555da7a3",null)),F=E.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.error||!t.cityData?n("div",[t._v("404")]):n("div",[n("div",{staticClass:"section section--hero section--hero__sm",style:{backgroundImage:"url('"+t.cityData.image+"')"}},[n("img",{staticClass:"go-back",attrs:{src:a("3b60")},on:{click:t.backToCitySelector}}),n("div",{staticClass:"container"},[n("div",{staticClass:"avatar-container"},[n("img",{attrs:{alt:"vendor avatar",src:t.cityData.logo}})])]),t._m(0)]),n("div",{staticClass:"container"},[n("div",{staticClass:"el-row"},[n("div",{staticClass:"el-col el-col-24 el-col-xs-24 city-selector"},[n("h3",[t._v(t._s(t.cityData.name))]),n("p",[t._v(t._s(t.cityData.description))])])]),n("hr"),n("div",{staticClass:"el-row"},[n("div",{staticClass:"el-col el-col-24"},[n("p",{staticStyle:{margin:"0","font-size":"13px"}},[t._v(t._s(t.$t("tagFilterShops")))]),n("carousel",{staticClass:"tag-carousel-available",attrs:{perPageCustom:[[0,3],[768,6],[1024,7],[1240,8]],paginationEnabled:!1}},t._l(t.tags,(function(e,a){return n("slide",{key:"tag-"+a},[n("button",{staticClass:"el-button el-button-sm tag-carousel-slide",class:{"el-button--success":t.activeTags.includes(e),"el-button--primary":!t.activeTags.includes(e)},on:{click:function(){return t.toggleTag(e)}}},[t._v(t._s(e))])])})),1)],1)]),n("hr"),n("div",{staticClass:"el-row"},t._l(t.shopsFiltered,(function(e,a){return n("div",{key:a,staticClass:"el-col el-col-6 el-col-xs-24",staticStyle:{padding:"10px"}},[n("Card",{attrs:{title:e.name,description:e.description,image:e.image},nativeOn:{click:function(a){return function(){return t.openShop(e)}()}}})],1)})),0)])])])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-divider"},[n("img",{staticClass:"divider",attrs:{alt:"divider",src:a("9a46")}})])}];a("a623"),a("7db0"),a("4160"),a("a630"),a("c975"),a("a434"),a("6062"),a("3ca3"),a("159b"),a("ddb0");function Q(t){return z.apply(this,arguments)}function z(){return z=Object(S["a"])(regeneratorRuntime.mark((function t(e){var a,n,r,o,s,i,c,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$ipfs;case 3:a=t.sent,this.ipfsStatus=!0,t.next=11;break;case 7:return t.prev=7,t.t0=t["catch"](0),this.ipfsStatus=!1,t.abrupt("return");case 11:n=[],r=!0,o=!1,t.prev=14,i=Object(O["a"])(a.cat(e));case 16:return t.next=18,i.next();case 18:return c=t.sent,r=c.done,t.next=22,c.value;case 22:if(u=t.sent,r){t.next=29;break}l=u,n.push(l);case 26:r=!0,t.next=16;break;case 29:t.next=35;break;case 31:t.prev=31,t.t1=t["catch"](14),o=!0,s=t.t1;case 35:if(t.prev=35,t.prev=36,r||null==i.return){t.next=40;break}return t.next=40,i.return();case 40:if(t.prev=40,!o){t.next=43;break}throw s;case 43:return t.finish(40);case 44:return t.finish(35);case 45:try{this.shops=JSON.parse(T["Buffer"].concat(n).toString())}catch(d){this.shops=[]}case 46:case"end":return t.stop()}}),t,this,[[0,7],[14,31,35,45],[36,,40,44]])}))),z.apply(this,arguments)}var R={name:"City",props:{city:Object,cityLink:String},components:{Card:w},data:function(){return{ipfsStatus:!1,cities:[],shops:[],error:!1,cityData:{},activeTags:[]}},computed:{tags:function(){var t=[];return this.shops.forEach((function(e){t=t.concat(e.tags)})),Array.from(new Set(t))},shopsFiltered:function(){var t=this;return this.activeTags.length>0?this.shops.filter((function(e){return t.activeTags.every((function(t){return e.tags.includes(t)}))})):this.shops}},mounted:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.cityLink){e.next=6;break}return e.next=3,A.bind(t)();case 3:t.cityData=t.cities.find((function(e){return e.link===t.cityLink})),e.next=12;break;case 6:if(window.hash===t.$store.state.hash){e.next=11;break}return t.backToCitySelector(),e.abrupt("return");case 11:t.city?t.cityData=t.city:t.$store.state.city&&(t.cityData=t.$store.state.city);case 12:t.cityData&&t.cityData.link?Q.bind(t)(t.cityData.link):t.backToCitySelector();case 13:case"end":return e.stop()}}),e)})))()},methods:{toggleTag:function(t){var e=this.activeTags.indexOf(t);e>=0?this.activeTags.splice(e,1):this.activeTags.push(t)},backToCitySelector:function(){this.$store.commit("setCity",null),this.$router.push({name:"Home"})},openShop:function(t){this.$store.commit("setShop",t),this.$router.push({name:"Shop",params:{shop:t,cityLink:this.cityData.link,shopLink:t.link}})}}},I=R,M=(a("c547"),Object(m["a"])(I,L,q,!1,null,"e030d362",null)),V=M.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.error||!t.shopData?n("div",[t._v("404")]):n("div",[n("div",{staticClass:"section section--hero section--hero__sm",style:{backgroundImage:"url('"+t.shopData.image+"')"}},[n("img",{staticClass:"go-back",attrs:{src:a("3b60")},on:{click:t.backToCity}}),n("div",{staticClass:"container"},[n("div",{staticClass:"avatar-container"},[n("img",{attrs:{alt:"vendor avatar",src:t.shopData.logo}})])]),t._m(0)]),n("div",{staticClass:"container"},[n("div",{staticClass:"el-row"},[n("div",{staticClass:"el-col el-col-24 el-col-xs-24 city-selector"},[n("h3",[t._v(t._s(t.shopData.name))]),n("p",[t._v(t._s(t.shopData.description))])])]),n("hr"),n("div",{staticClass:"el-row"},[n("div",{staticClass:"el-col el-col-24"},[n("p",{staticStyle:{margin:"0","font-size":"13px"}},[t._v(t._s(t.$t("tagFilterProducts")))]),n("carousel",{staticClass:"tag-carousel-available",attrs:{perPageCustom:[[0,3],[768,6],[1024,7],[1240,8]],paginationEnabled:!1}},t._l(t.tags,(function(e,a){return n("slide",{key:"tag-"+a},[n("button",{staticClass:"el-button el-button-sm tag-carousel-slide",class:{"el-button--success":t.activeTags.includes(e),"el-button--primary":!t.activeTags.includes(e)},on:{click:function(){return t.toggleTag(e)}}},[t._v(t._s(e))])])})),1)],1)]),n("hr"),t._l(t.chunkedProductsFiltered,(function(e,a){return n("div",{key:a,staticClass:"el-row"},t._l(e,(function(e,a){return n("div",{key:a,staticClass:"el-col el-col-6 el-col-xs-24",staticStyle:{padding:"10px"}},[n("Card",{attrs:{title:e.name,description:""+e.description,image:e.image,button:t.getButtonAction(e)}})],1)})),0)}))],2)]),Object.keys(t.$store.state.cart.orders).length>0?n("button",{staticClass:"order-floating-button animation-target",on:{click:t.goToCart}},[n("img",{attrs:{src:a("6f5d")}})]):t._e(),n("modal",{attrs:{styles:"border-radius: 10px; border: var(--border-lg); padding: 20px; text-align: center;",height:"auto",width:"320",name:"product-quantity-selector"}},[t.productQuantitySelector?n("div",[n("h4",[t._v(t._s(t.productQuantitySelector.name))]),n("p",[t._v(t._s(t.productQuantitySelector.description))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.productQuantity,expression:"productQuantity"}],staticClass:"add-to-cart-quantity",attrs:{type:"number",value:"1",min:"1"},domProps:{value:t.productQuantity},on:{input:function(e){e.target.composing||(t.productQuantity=e.target.value)}}}),n("button",{staticClass:"el-button el-button-sm el-button--primary card-button add-to-cart-button",on:{click:function(){return t.addToCart(t.productQuantitySelector.name,t.productQuantitySelector.price,t.productQuantity)}}},[t._v(t._s(t.$t("cartAdd")))])]):t._e()]),n("modal",{attrs:{styles:"border-radius: 10px; border: var(--border-lg); padding: 20px; text-align: center;",height:"auto",width:"320",name:"cart"}},[t.$store.state.cart.shop?n("div",[n("h4",[t._v(t._s(t.$t("cartTitle")))]),t._l(t.$store.state.cart.orders,(function(e,r){return n("div",{key:r,staticClass:"cart-item"},[n("span",{staticStyle:{"font-size":"12px"}},[t._v(" "+t._s(r)+" - "+t._s(t.$store.state.cart.orders[r].quantity*t.$store.state.cart.orders[r].price)+"€ ")]),n("div",{staticClass:"quantity-selector-editor"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.cart.orders[r].quantity,expression:"$store.state.cart.orders[product].quantity"}],staticClass:"add-to-cart-quantity",attrs:{type:"number",value:"1",min:"1"},domProps:{value:t.$store.state.cart.orders[r].quantity},on:{change:function(){return t.$store.commit("saveOrder")},input:function(e){e.target.composing||t.$set(t.$store.state.cart.orders[r],"quantity",e.target.value)}}}),n("button",{staticClass:"el-button el-button-sm el-button--danger card-button remove-from-cart-button",on:{click:function(){return t.deleteFromCart(r)}}},[n("img",{attrs:{src:a("e1dc")}})])])])})),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.cart.notes,expression:"$store.state.cart.notes"}],staticClass:"custom-notes",attrs:{placeholder:t.$t("cartNotes")},domProps:{value:t.$store.state.cart.notes},on:{change:function(){return t.$store.commit("saveOrder")},input:function(e){e.target.composing||t.$set(t.$store.state.cart,"notes",e.target.value)}}}),n("b",[t._v(t._s(t.$t("cartTotal"))+": "+t._s(t.totalPrice)+"€")]),n("br"),n("p",{domProps:{innerHTML:t._s(t.address)}}),n("span",{staticClass:"button-text",on:{click:function(){t.$modal.hide("cart"),t.$modal.show("account")}}},[t._v(t._s(t.$t("cartEditAddress")))]),t.payed?n("div",[n("p",[n("span",{staticClass:"button-text",on:{click:function(){return t.payed=!1}}},[t._v(" "+t._s(t.$t("payOrderCancel"))+" ")])]),t._l(t.shopData.contacts,(function(e,a){return n("button",{key:a,staticClass:"el-button el-button-sm el-button--primary card-button send-order-button",on:{click:function(){return t.sendOrder(e.type,e.value)}}},[t._v(" "+t._s(t.$t("cartSendOrderVia"))+" "+t._s(e.type)+" ")])}))],2):n("div",[n("p",[t._v(" "+t._s(t.$t("payOrderInstruction"))+" ")]),t._l(t.shopData.paymentMethods,(function(e,a){return n("button",{key:a,staticClass:"el-button el-button-sm el-button--primary card-button send-order-button",on:{click:function(){t.payOrder(e.type,e.value)}}},[t._v(" "+t._s("cash"===e.type?t.$t("payOrderCash"):t.$t("payOrderVia")+" "+e.type)+" ")])}))],2)],2):t._e()]),n("v-dialog")],1)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-divider"},[n("img",{staticClass:"divider",attrs:{alt:"divider",src:a("9a46")}})])}],H=(a("b64b"),a("6118")),W=a.n(H),U={name:"Shop",props:{shop:Object,cityLink:String,shopLink:String},components:{Card:w},data:function(){return{ipfsStatus:!1,products:[],shopData:{},error:!1,activeTags:[],productQuantitySelector:null,productQuantity:1,shops:[],payed:!1}},computed:{tags:function(){var t=[];return this.products.forEach((function(e){t=t.concat(e.tags)})),Array.from(new Set(t))},productsFiltered:function(){var t=this;return this.activeTags.length>0?this.products.filter((function(e){return t.activeTags.every((function(t){return e.tags.includes(t)}))})):this.products},chunkedProductsFiltered:function(){return W()(this.productsFiltered,4)},totalPrice:function(){var t=0,e=this.$store.state.cart.orders;for(var a in e)if(e[a]){var n=e[a],r=n.quantity,o=n.price;t+=o*r}return t},address:function(){var t=this.$store.state,e="";return(t.account.firstname||t.account.lastname)&&(e+="".concat(t.account.firstname," ").concat(t.account.lastname,"<br/>")),t.account.address&&(e+="".concat(t.account.address,"<br/>")),t.account.doorbell&&(e+="".concat(t.account.doorbell,"<br/>")),t.account.phone&&(e+="".concat(t.account.phone,"<br/>")),t.account.notes&&(e+="".concat(t.account.notes)),e||this.$t("cartWarningEmptyAccount")}},mounted:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.cityLink){e.next=6;break}return e.next=3,Q.bind(t)(t.cityLink);case 3:t.shopData=t.shops.find((function(e){return e.link===t.shopLink})),e.next=13;break;case 6:if(window.hash===t.$store.state.hash){e.next=12;break}return t.$store.commit("setShop",null),t.$router.push({name:"City"}),e.abrupt("return");case 12:t.shop?t.shopData=t.shop:t.shopData=t.$store.state.shop;case 13:t.shopData.link?t.fetchProducts(t.shopData.link):t.error=!0;case 14:case"end":return e.stop()}}),e)})))()},methods:{calculateTotal:function(){var t=0,e=this.$store.state.cart.orders;for(var a in e)if(e[a]){var n=e[a],r=n.quantity,o=n.price;t+=o*r}return t},payOrder:function(t,e){var a=this.calculateTotal();switch(t){case"satispay":window.open("https://tag.satispay.com/".concat(e,"/").concat(a));break;default:}this.payed=!0},sendOrder:function(t,e){var a="",n=this.calculateTotal(),r=this.$store.state.cart,o=r.orders,s=r.notes;for(var i in o)if(o[i]){var c=o[i],u=c.quantity,l=c.price;a+="".concat(u," x ").concat(i," - ").concat(l,"€ = ").concat(l*u,"€%0A")}a+="".concat(s),a+="%0A".concat(this.$t("cartTotal"),": ").concat(n,"€%0A");var d=this.$store.state;switch(d.account&&(d.account.address&&(a+="".concat(this.$t("accountAddress"),": ").concat(d.account.address,"%0A")),d.account.doorbell&&(a+="".concat(this.$t("accountRingbell"),": ").concat(d.account.doorbell,"%0A")),d.account.phone&&(a+="".concat(this.$t("accountPhone"),": ").concat(d.account.phone,"%0A")),d.account.notes&&(a+="".concat(this.$t("accountNotes"),": ").concat(d.account.notes,"%0A"))),t){case"whatsapp":window.open("https://api.whatsapp.com/send?phone=".concat(e,"&text=").concat(a));break;case"sms":window.open("sms:".concat(e,"?&body=").concat(a));break;case"call":window.open("tel:".concat(e));break;default:this.$clipboard(a)}},getButtonAction:function(t){var e=this;return Object.keys(this.$store.state.cart.orders).includes(t.name)?{label:this.$t("cartEdit"),click:function(){return e.goToCart()}}:{label:"".concat(t.price,"€ ").concat(this.$t("cartAdd")),click:function(){return e.openProductQuantitySelector(t)}}},deleteFromCart:function(t){this.$delete(this.$store.state.cart.orders,t),0===Object.keys(this.$store.state.cart.orders).length&&this.$modal.hide("cart")},goToCart:function(){this.$modal.hide("cart"),this.$modal.show("cart")},openProductQuantitySelector:function(t){this.productQuantitySelector=t,this.$modal.show("product-quantity-selector")},addToCart:function(t,e,a){this.$store.commit("addToCart",{name:t,price:e,quantity:a,shop:this.shopData.name}),this.$modal.hide("product-quantity-selector"),this.productQuantitySelector=null,this.productQuantity=1},toggleTag:function(t){var e=this.activeTags.indexOf(t);e>=0?this.activeTags.splice(e,1):this.activeTags.push(t)},leaveShop:function(){this.$store.commit("emptyCart"),this.$store.commit("setShop",null),this.$router.push({name:"City",params:{cityLink:this.cityLink}})},backToCity:function(){var t=this;0===Object.keys(this.$store.state.cart.orders).length?this.leaveShop():this.$modal.show("dialog",{title:"Leaving this shop will delete your order",buttons:[{title:"Ok, leave",handler:function(){t.leaveShop()}},{title:"No, stay on this shop"}]})},fetchProducts:function(t){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function a(){var n,r,o,s,i,c,u,l,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$ipfs;case 3:n=a.sent,e.ipfsStatus=!0,a.next=11;break;case 7:return a.prev=7,a.t0=a["catch"](0),e.ipfsStatus=!1,a.abrupt("return");case 11:r=[],o=!0,s=!1,a.prev=14,c=Object(O["a"])(n.cat(t));case 16:return a.next=18,c.next();case 18:return u=a.sent,o=u.done,a.next=22,u.value;case 22:if(l=a.sent,o){a.next=29;break}d=l,r.push(d);case 26:o=!0,a.next=16;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a["catch"](14),s=!0,i=a.t1;case 35:if(a.prev=35,a.prev=36,o||null==c.return){a.next=40;break}return a.next=40,c.return();case 40:if(a.prev=40,!s){a.next=43;break}throw i;case 43:return a.finish(40);case 44:return a.finish(35);case 45:try{e.products=JSON.parse(T["Buffer"].concat(r).toString())}catch(p){e.products=[]}case 46:case"end":return a.stop()}}),a,null,[[0,7],[14,31,35,45],[36,,40,44]])})))()}}},Y=U,Z=(a("b1a1"),Object(m["a"])(Y,J,B,!1,null,"285adbc2",null)),G=Z.exports;n["a"].use(g["a"]);var K=[{path:"/",name:"Home",component:F},{path:"/:cityLink",name:"City",component:V,props:!0},{path:"/:cityLink/:shopLink",name:"Shop",component:G,props:!0}],X=new g["a"]({mode:"hash",base:"/",routes:K}),tt=X,et=a("2f62"),at=a("bfa9");n["a"].use(et["a"]);var nt=new at["a"]({storage:window.localStorage}),rt=new et["a"].Store({state:{hash:null,lang:"en",city:{},shop:{},cart:{shop:"",orders:{},notes:""},account:{firstname:"",lastname:"",address:"",doorbell:"",notes:"",phone:""}},mutations:{setHash:function(t,e){t.hash=e},setLang:function(t,e){t.lang=e},setCity:function(t,e){t.city=e},setShop:function(t,e){t.shop=e},addToCart:function(t,e){n["a"].set(t.cart,"shop",e.shop),n["a"].set(t.cart.orders,e.name,{price:e.price,quantity:e.quantity})},emptyCart:function(t){t.cart={shop:"",orders:{},notes:""}},saveAccount:function(){},saveOrder:function(){}},plugins:[nt.plugin]}),ot=(a("ac1f"),a("466d"),a("a925"));function st(){var t=a("49f8"),e={};return t.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];e[r]=t(a)}})),e}n["a"].use(ot["a"]);var it=new ot["a"]({locale:"en",fallbackLocale:"it",messages:st()}),ct={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t;a.prototype.$ipfs=P.a.create(e)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(ct);var ut=ct;n["a"].use(o.a),n["a"].use(ut),n["a"].use(i.a,{dialog:!0}),n["a"].use(u.a),n["a"].config.productionTip=!1,new n["a"]({router:tt,store:rt,i18n:it,render:function(t){return t(v)}}).$mount("#app")},6:function(t,e){},"6c34":function(t,e,a){},"6f5d":function(t,e,a){t.exports=a.p+"img/cart.6e653c80.svg"},7:function(t,e){},8:function(t,e){},"85ec":function(t,e,a){},9:function(t,e){},"9a46":function(t,e,a){t.exports=a.p+"img/divider_grey.e0cacbe7.svg"},b1a1:function(t,e,a){"use strict";var n=a("f5d5"),r=a.n(n);r.a},b830:function(t,e,a){t.exports=a.p+"img/earth.34fbc754.svg"},bb91:function(t,e,a){"use strict";var n=a("cf3a"),r=a.n(n);r.a},c547:function(t,e,a){"use strict";var n=a("ff90"),r=a.n(n);r.a},cf3a:function(t,e,a){},e1dc:function(t,e,a){t.exports=a.p+"img/bin.1ec9d2b5.svg"},edd4:function(t){t.exports=JSON.parse('{"title":"Nile, rise!","subtitle":"We live in a society in which huge corporations have the power to influence economies and trends. Today the big companies that own the online market don’t pay taxes, they underpay their employees, and they are disrupting local economies. We think that the world deserves a better alternative, so we decide to found Nile.","citySelectorTitle":"Swipe to browse cities","citySelectorFilter":"Search by city name","tagFilterShops":"Click on the tags to filter stores, click again to disable","tagFilterProducts":"Click on the tags to filter products, click again to disable","cartTitle":"Your order","cartAdd":"Add","cartEdit":"Edit","cartTotal":"Total","cartNotes":"Notes","cartEditAddress":"Edit address","cartWarningEmptyAccount":"No address is set","payOrderInstruction":"After you complete the payment, return to this page and send the order","payOrderVia":"Pay order via","payOrderCash":"Pay order in cash","payOrderCancel":"Back to payment methods","cartSendOrderVia":"Send order via","accountTitle":"Enter your information","accountFirstname":"Firstname","accountLastname":"Lastname","accountAddress":"Address","accountPhone":"Phone","accountNotes":"Notes","accountRingbell":"Doorbell","accountClose":"Close","languageTitle":"Select language"}')},f5d5:function(t,e,a){},fb16:function(t,e,a){t.exports=a.p+"img/home_hero.afce63c4.jpg"},ff90:function(t,e,a){}});
//# sourceMappingURL=app.f87641c9.js.map
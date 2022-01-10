"use strict";(self.webpackChunkPlanetary_app=self.webpackChunkPlanetary_app||[]).push([[551],{551:(b,m,o)=>{o.r(m),o.d(m,{MainModule:()=>P});var g=o(466),l=o(808),t=o(223),c=o(648),s=o(241);let _=(()=>{class e{constructor(n,a){this.service=n,this.router=a}canActivate(n,a){return!!this.service.planet||(this.router.navigate(["/"]),!1)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(c.R),t.LFG(s.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-planet-image-wrapper"]],inputs:{animPlanet:"animPlanet",actualPlanet:"actualPlanet"},decls:5,vars:6,consts:[[1,"details__image-wrapper"],["alt","surface image",1,"planet__image","planet__image-surface",3,"src"],["alt","planet image",1,"planet__image","planet__image-planet",3,"src"],["alt","geology image",1,"planet__image","planet__image-geology",3,"src"]],template:function(n,a){1&n&&(t.TgZ(0,"div"),t.TgZ(1,"div",0),t._UZ(2,"img",1),t._UZ(3,"img",2),t._UZ(4,"img",3),t.qZA(),t.qZA()),2&n&&(t.Gre("planet__container ",a.animPlanet,""),t.xp6(2),t.s9C("src",a.actualPlanet.images.internal,t.LSH),t.xp6(1),t.s9C("src",a.actualPlanet.images.planet,t.LSH),t.xp6(1),t.s9C("src",a.actualPlanet.images.geology,t.LSH))},styles:[".details__image-wrapper[_ngcontent-%COMP%]{position:relative;animation:entrance-anim 10s,rotate-anim 10s infinite 10s linear;transform:translate(-250%) rotate3d(1,1,1,360deg);transform-style:preserve-3d;transition:opacity .5s}.planet__image[_ngcontent-%COMP%]{position:absolute;max-width:100%;width:100%}.planet__image-planet[_ngcontent-%COMP%]{perspective:800;transform-style:preserve-3d;transform:rotateY(90deg)}.planet__image-geology[_ngcontent-%COMP%]{width:50%;top:5%;transform:rotate3d(1,2,5,90deg) translateZ(4em) translate(4em) translateY(2em)}@keyframes entrance-anim{to{transform:translate(0) rotate3d(0,0,0,0)}}@keyframes rotate-anim{0%{transform:translate(0) rotateY(0)}to{transform:translate(0) rotateY(360deg)}}.planet__container[_ngcontent-%COMP%]{transition:opacity .5s}.disolve[_ngcontent-%COMP%]{opacity:0}"]}),e})();function u(e,i){if(1&e&&(t.TgZ(0,"div",5),t.TgZ(1,"p",6),t._uU(2),t.qZA(),t.TgZ(3,"p",7),t._uU(4),t.qZA(),t.qZA()),2&e){const n=i.$implicit,a=t.oxw();t.xp6(2),t.Oqu(n),t.xp6(2),t.Oqu(a.actualPlanet.facts[n])}}let p=(()=>{class e{constructor(n){this.service=n,this.Object=Object,this.animator={animTitle:"",animOverview:"",animButtons:"",animFacts:"",animPlanet:""},this.subsciptions=[],this.actualPlanet=n.planet,this.tab="overview"}ngAfterViewInit(){this.toggleAnimation(this.actualPlanet)}ngOnInit(){this.selectedData=this.actualPlanet[this.tab];const n=this.service.actualPlanet.subscribe(a=>{a?(this.selectedData=this.actualPlanet[this.tab],this.toggleAnimation(a)):(this.subsciptions.forEach(r=>{r.unsubscribe()}),this.animator={animPlanet:"disolve",animTitle:"",animOverview:"",animButtons:"",animFacts:""})});this.subsciptions.push(n)}toggleAnimation(n){this.animator={animPlanet:"disolve",animTitle:"",animOverview:"",animButtons:"",animFacts:""},setTimeout(()=>{this.actualPlanet=n,this.animator={animPlanet:"",animTitle:"float-in",animOverview:"float-in",animButtons:"float-in",animFacts:"float-in"}},500)}changeTab(n){this.tab=n,this.animator.animOverview="",setTimeout(()=>{this.selectedData=this.actualPlanet[this.tab],this.animator.animOverview="float-in"},400)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.R))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-details"]],inputs:{actualPlanet:"actualPlanet"},decls:14,vars:29,consts:[[1,"container"],[1,"details__image",3,"actualPlanet","animPlanet"],[3,"click"],[1,"details__data"],["class","details__fact",4,"ngFor","ngForOf"],[1,"details__fact"],[1,"details__fact-title"],[1,"details__fact-data"]],template:function(n,a){1&n&&(t.TgZ(0,"div"),t.TgZ(1,"div",0),t._UZ(2,"app-planet-image-wrapper",1),t.TgZ(3,"div"),t.TgZ(4,"button",2),t.NdJ("click",function(){return a.changeTab("overview")}),t.qZA(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.changeTab("structure")}),t.qZA(),t.TgZ(6,"button",2),t.NdJ("click",function(){return a.changeTab("geology")}),t.qZA(),t.qZA(),t.TgZ(7,"div",3),t.TgZ(8,"h2"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div"),t.YNc(13,u,5,2,"div",4),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.Gre("details ",null==a.actualPlanet?null:a.actualPlanet.class,""),t.xp6(2),t.Q6J("actualPlanet",a.actualPlanet)("animPlanet",a.animator.animPlanet),t.xp6(1),t.Gre("details__buttons ",a.animator.animButtons,""),t.xp6(1),t.Gre("details__button one btn ","overview"===a.tab?"details__button-active":"",""),t.xp6(1),t.Gre("details__button two btn ","structure"===a.tab?"details__button-active":"",""),t.xp6(1),t.Gre("details__button three btn ","geology"===a.tab?"details__button-active":"",""),t.xp6(2),t.Gre("details__title ",a.animator.animTitle,""),t.xp6(1),t.Oqu(null==a.actualPlanet?null:a.actualPlanet.name),t.xp6(1),t.Gre("details__overview ",a.animator.animOverview,""),t.xp6(1),t.hij(" ",a.selectedData.content," "),t.xp6(1),t.Gre("details__facts-container ",a.animator.animFacts,""),t.xp6(1),t.Q6J("ngForOf",a.Object.keys(a.actualPlanet.facts)))},directives:[d,l.sg],styles:['.details[_ngcontent-%COMP%]{display:flex;margin-top:5em}.container[_ngcontent-%COMP%]{margin:auto;display:grid;max-width:1200px;width:90vw;min-width:270px}.details__buttons[_ngcontent-%COMP%]{order:1;display:flex;justify-content:space-evenly;margin-bottom:1em;border-bottom:1px solid var(--clr-dark-gray);width:130%;margin-left:-15%}.details__image[_ngcontent-%COMP%]{--planet-size: clamp(10em, 25vw, 25em);max-width:100%;width:var(--planet-size);height:var(--planet-size);order:2;margin:auto}.details__data[_ngcontent-%COMP%]{order:3;color:#ffffffa1}.details__overview[_ngcontent-%COMP%]{min-height:14em;font-size:clamp(10px,2vw,14px)}.details__button[_ngcontent-%COMP%]{color:var(--clr-light-gray);-webkit-tap-highlight-color:transparent}.details__title[_ngcontent-%COMP%]{transition:font-size .5s;color:#fff;text-align:center;font-size:3em;text-transform:uppercase;max-width:90%;padding:0 1rem;margin:5%}.details__facts-container[_ngcontent-%COMP%]{font-size:clamp(11px,2vw,15px)}.details__facts-container[_ngcontent-%COMP%], .details__overview[_ngcontent-%COMP%]{font-family:Spartan,sans-serif;line-height:1.5em;max-width:90%;padding:1em;margin:2% 5%;text-align:center}.details__facts-container[_ngcontent-%COMP%]{color:var(--clr-light-gray)}.details__button[_ngcontent-%COMP%]{padding:1em 0;position:relative}.details__button[_ngcontent-%COMP%]:after{font-family:spartan,sans-serif}.details__button.one[_ngcontent-%COMP%]:after{content:"Overview"}.details__button.two[_ngcontent-%COMP%]:after{content:"Structure"}.details__button.three[_ngcontent-%COMP%]:after{content:"Geology"}.details__facts-container[_ngcontent-%COMP%]{order:4}.details__fact[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:1px solid var(--clr-dark-gray);padding:1em;margin:1em 0}.details__fact-title[_ngcontent-%COMP%]{text-transform:capitalize;margin:0}.details__fact-data[_ngcontent-%COMP%]{margin:0;color:#fff;font-size:1.4em;text-transform:uppercase;font-family:antonio,sans-serif}.details__button-active[_ngcontent-%COMP%]{color:#fff}.details__button-active[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:.2em;bottom:0;background-color:var(--clr-actual-color)}@media screen and (min-width: 500px){.details[_ngcontent-%COMP%]{margin-top:8em}.container[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;grid-row-gap:1em;row-gap:1em;grid-column-gap:1em;column-gap:1em}.details__title[_ngcontent-%COMP%], .details__overview[_ngcontent-%COMP%]{text-align:left}.details__title[_ngcontent-%COMP%]{font-size:4em}.details__overview[_ngcontent-%COMP%]{min-height:19em}.details__buttons[_ngcontent-%COMP%]{grid-row:2;grid-column:1;flex-direction:column;justify-content:center;border:none;width:85%;margin-left:0%;padding-left:2em;min-width:14em}.details__image[_ngcontent-%COMP%]{grid-row:1;grid-column:1/3}.details__data[_ngcontent-%COMP%]{grid-row:2;order:3}.details__facts-container[_ngcontent-%COMP%]{grid-row:3;min-width:42em;display:grid;grid-column-gap:2em;column-gap:2em;grid-template-columns:1fr 1fr 1fr 1fr;grid-column:1/3}.details__button-active[_ngcontent-%COMP%]{background-color:var(--clr-actual-color)}.details__button[_ngcontent-%COMP%]{padding:1em;border:1px solid var(--clr-light-gray);margin-bottom:1em;text-align:left}.details__button.one[_ngcontent-%COMP%]:after{content:"01. Overview"}.details__button.two[_ngcontent-%COMP%]:after{content:"02. Internal structure"}.details__button.three[_ngcontent-%COMP%]:after{content:"03. Surface geology"}.details__button-active[_ngcontent-%COMP%]:before{all:unset}.details__fact[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}@media screen and (min-width: 700px){.container[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.details__overview[_ngcontent-%COMP%]{min-height:13em}.details__buttons[_ngcontent-%COMP%]{grid-row:2;grid-column:2;flex-direction:column;border:none;margin-left:0%;padding-left:2em;min-width:14em}.details__image[_ngcontent-%COMP%]{grid-row:1/3;grid-column:1}.details__data[_ngcontent-%COMP%]{grid-column:2;grid-row:1;order:3}.details__title[_ngcontent-%COMP%]{font-size:clamp(4em,10vw,6em)}}.details__title[_ngcontent-%COMP%]{transform:translate(-250%);opacity:0;transition:opacity .5s,transform .5s}.details__overview[_ngcontent-%COMP%]{transform:translate(250%);opacity:0;transition:opacity .5s,transform .5s}.details__facts-container[_ngcontent-%COMP%], .details__buttons[_ngcontent-%COMP%]{transform:translateY(250%);opacity:0;transition:opacity .5s,transform .5s}.float-in[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}.float-left-out[_ngcontent-%COMP%], .float-right-out[_ngcontent-%COMP%]{transform:translate(250%);opacity:0}.float-bottom-out[_ngcontent-%COMP%]{transform:translateY(250%);opacity:0}']}),e})();function f(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",1),t.NdJ("click",function(){const C=t.CHM(n).$implicit;return t.oxw().onPlanetChange(C)}),t._UZ(1,"div"),t.qZA()}if(2&e){const n=i.$implicit;t.xp6(1),t.Gre("",n," astro")}}const v=[{path:"",component:(()=>{class e{constructor(n,a,r){this.service=n,this.router=a,this.cd=r,this.astros=["neptune","uranus","saturn","jupiter","mars","earth","venus","mercury","sun"],this.animation="",this.planetClosing=!1,this.subsciptions=[]}ngAfterViewInit(){this.toggleAnimation()}ngOnInit(){const n=this.service.actualPlanet.subscribe(a=>{this.actualPlanet=void 0,a&&this.toggleAnimation(),setTimeout(()=>this.actualPlanet=a,0)});this.subsciptions.push(n)}onPlanetChange(n){"sun"!==n&&(this.service.alertChange(n),this.navigateOut())}navigateOut(){setTimeout(()=>{this.router.navigate(["/","details"])},1400)}toggleAnimation(){setTimeout(()=>{this.animation="cool_entrance"===this.animation?"cool_exit":"cool_entrance"},0)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.R),t.Y36(s.F0),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-main"]],decls:2,vars:4,consts:[["class","astro__container",3,"click",4,"ngFor","ngForOf"],[1,"astro__container",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"div"),t.YNc(1,f,2,3,"div",0),t.qZA()),2&n&&(t.Gre("planets__container ",a.animation," float-in"),t.xp6(1),t.Q6J("ngForOf",a.astros))},directives:[l.sg],styles:['.planets__container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative;color:#fff;height:calc(100vh - 6em);transform:scale(0);transition-timing-function:cubic-bezier(.78,.25,.07,.5)}.planets__container.cool_entrance[_ngcontent-%COMP%]{transition:transform 5s;transform:scale(1)}.planets__container.cool_exit[_ngcontent-%COMP%]{transition:transform 2s;transform:scale(0)}.astro[_ngcontent-%COMP%]{position:absolute;background-position:center;background-size:contain;border-radius:50%;border:1px solid rgba(172,170,170,.151);animation:rotate var(--actual-timing) infinite linear;width:var(--actual-orbit);height:var(--actual-orbit);transform:rotate(var(--actual-defase))}.astro[_ngcontent-%COMP%]:after{width:var(--actual-size);height:var(--actual-size);content:"";top:calc(var(--actual-size) / 2 * -1);left:50%;position:absolute;background-image:var(--img-actual-img);background-position:center;background-size:contain}.astro__container[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;transition:transform .5s}.astro__container[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05)}.astro__container[_ngcontent-%COMP%]:hover > .astro[_ngcontent-%COMP%]{border:1px solid var(--clr-actual-color)}.sun[_ngcontent-%COMP%]{width:4em;height:4em;background-image:var(--img-actual-img);background-size:110%;border-radius:50%;box-shadow:0 0 10px 2px orange inset,0 0 10px 2px orange}@keyframes rotate{to{transform:rotate(calc(var(--actual-defase) + 360deg))}}']}),e})()},{path:"details",component:p,canActivate:[_]}];let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,h,g.m]]}),e})()}}]);
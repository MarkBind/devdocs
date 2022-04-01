
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/devdocs/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/devdocs/images/logo-darkbackground.svg","height":"20"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/devdocs/index.html"}},[_v("HOME")])]),_v(" "),_c('div',{attrs:{"tags":"environment--dg"}},[_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/devdocs/devGuide/index.html"}},[_v("DEVELOPER GUIDE")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/devdocs/showcase.html"}},[_v("SHOWCASE")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/devdocs/about.html"}},[_v("ABOUT")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/MarkBind/markbind","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1)]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Developer Guide")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/devGuide.html"}},[_v("Contributing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/settingUp.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/workflow.html"}},[_v("Workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Design \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/design/projectStructure.html"}},[_v("Project Structure")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/design/architecture.html"}},[_v("Architecture")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/design/serverSideRendering.html"}},[_v("Server Side Rendering")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/writingPlugins.html"}},[_v("Writing Plugins")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/projectManagement.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Appendices \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/styleGuides.html"}},[_v("Style guides")])])])])])])],1)],1)]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('p',[_v("To deal with SSR, it is important to first have a good understanding of two things:")]),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('p',[_v("Here is a short list of questions to check your understanding of Vue:")]),_v(" "),_m(6),_v(" "),_c('box',{attrs:{"type":"info","seamless":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('h5',{attrs:{"id":"useful-resources-to-understand-vue-better"}},[_c('span',{staticClass:"anchor",attrs:{"id":"useful-resources-to-understand-vue-better"}}),_v("Useful Resources to understand Vue better"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#useful-resources-to-understand-vue-better","onclick":"event.stopPropagation()"}})])]},proxy:true}])},[_v(" "),_c('p',[_v("If there are any doubts regarding the questions above, here are some good resources to refer to:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org/v2/guide"}},[_v("Vue Official Documentation")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=wZN_FtZRYC8&ab_channel=LaraconEU"}},[_v("Evan You - Inside Vue Components - Laracon EU 2017")])])])]),_v(" "),_m(7),_v(" "),_c('p',[_v("There are four packages in MarkBind's codebase:")]),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('p',[_v("In MarkBind's context, SSR refers to the generation of proper HTML strings from Vue components on the server (core library) instead of shifting that responsibility to the client-side (browser).")]),_v(" "),_c('p',[_v("The main motivation that we had for introducing SSR into MarkBind is to enhance user experience by resolving the unsightly issue of Flash-of-Unstyled-Content (FOUC), which occurs due to our reliance on Client-side Rendering (CSR).")]),_v(" "),_m(11),_v(" "),_c('p',[_v("SSR and Client-side Hydration are 2 concepts that go hand-in-hand. Essentially, once we produce the static HTML via SSR and send it over to the client-side, Vue on the client-side will execute what is known as Client-side Hydration on the static HTML.")]),_v(" "),_c('p',[_v("During the hydration process, Vue essentially compares your SSR HTML markup against the virtual DOM generated by the render function on the client-side. If any difference is found, meaning that the application that we have on the client-side (the virtual DOM tree) differs from the SSR HTML mark-up that we send to the client, Vue will reject the SSR HTML output, bail Client-side Hydration, and execute full CSR.")]),_v(" "),_c('p',[_v("This is known as \"Hydration Issue\" and it is one of the main challenges you will face with SSR in MarkBind.")]),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('h4',{attrs:{"id":"using-production-build"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-production-build"}}),_v("Using production build"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-production-build","onclick":"event.stopPropagation()"}})])]},proxy:true}])},[_v(" "),_c('p',[_v("In production build, Vue does not perform hydration check. Any errors resulting from hydration will trigger full CSR without warning. MarkBind "),_c('strong',[_v("uses the development build by default")]),_v(" when you serve it in development mode ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-d")]),_v(" option).")])]),_v(" "),_m(12),_v(" "),_c('p',[_v("When hydration fails, on top of the wasted time and effort in executing SSR, we will also incur the additional time penalty of executing Client-side Hydration (where CSR will follow afterwards).")]),_v(" "),_c('p',[_v("Fortunately, even if we face hydration issues and execute full CSR, the FOUC problem will still be resolved nonetheless. The reason for this is because the SSR HTML markup should resemble the CSR HTML markup to a large extent.")]),_v(" "),_c('p',[_v("Supposedly, hydration issues typically occurs due to minor differences between client-side rendered virtual DOM tree and the server-rendered content. Of course, this is assuming that we are adhering to the concept of \"universal application\" as much as possible, which will be explained in the following section.")]),_v(" "),_m(13),_v(" "),_c('p',[_v("Conceptually, to prevent hydration issue, what we should always strive to achieve is a \"universal application\".")]),_v(" "),_c('p',[_v("It is not difficult to achieve a \"universal application\" per-se because we merely have to ensure two things:")]),_v(" "),_m(14),_v(" "),_c('p',[_v("Beyond achieving a \"universal application\", note that the HTML specifications should also be adhered to.")]),_v(" "),_c('p',[_v("Some common mistakes are as such:")]),_v(" "),_m(15),_v(" "),_c('box',{attrs:{"type":"success","seamless":""}},[_c('p',[_v("If you are unsure what elements are allowed within other elements, or what constitutes invalid HTML in general, a good resource to reference would be the "),_c('a',{attrs:{"href":"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"}},[_v("MDN Web Docs")]),_v(".")])]),_v(" "),_c('p',[_v("Note that the list only included the common causes of hydration issue that MarkBind developers have ran into. There may be other causes of hydration issue that are not listed here (although unlikely).")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#server-side-rendering"}},[_v("Server Side Rendering‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#pre-requisite-knowledge"}},[_v("Pre-requisite Knowledge‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#understanding-vue"}},[_v("Understanding Vue‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#useful-resources-to-understand-vue-better"}},[_v("Useful Resources to understand Vue better‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#understanding-markbind-s-packages"}},[_v("Understanding MarkBind's Packages‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#what-is-server-side-rendering-and-why"}},[_v("What is Server-side Rendering and Why?‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#client-side-hydration"}},[_v("Client-side Hydration‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-production-build"}},[_v("Using production build‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#penalties-of-hydration-issue"}},[_v("Penalties of Hydration Issue‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#avoiding-hydration-issue"}},[_v("Avoiding Hydration Issue‎")])])])],1)])],1),_v(" "),_m(16)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('p',[_c('span',{staticClass:"d-none",attrs:{"id":"title"}},[_v("Server Side Rendering")])])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"server-side-rendering"}},[_c('span',{staticClass:"anchor",attrs:{"id":"server-side-rendering"}}),_v("Server Side Rendering"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#server-side-rendering","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_v("MarkBind uses Server-side Rendering (SSR) for its pages.")]),_v(" "),_c('p',[_v("To ensure SSR works properly, there are certain rules that developers should adhere to.")]),_v(" "),_c('p',[_v("This page will describe SSR in general and elaborate on the caveats that developers should take note of when contributing to MarkBind.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"pre-requisite-knowledge"}},[_c('span',{staticClass:"anchor",attrs:{"id":"pre-requisite-knowledge"}}),_v("Pre-requisite Knowledge"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#pre-requisite-knowledge","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Vue")]),_v(" "),_c('li',[_v("MarkBind's Packages")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"understanding-vue"}},[_c('span',{staticClass:"anchor",attrs:{"id":"understanding-vue"}}),_v("Understanding Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#understanding-vue","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("What is a Vue instance?")]),_v(" "),_c('li',[_v("What does it mean to compile Vue?")]),_v(" "),_c('li',[_v("What are render functions?")]),_v(" "),_c('li',[_v("Are there any differences between compiling Vue on client-side versus server-side?")]),_v(" "),_c('li',[_v("What is the difference between compiling and rendering?")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"understanding-markbind-s-packages"}},[_c('span',{staticClass:"anchor",attrs:{"id":"understanding-markbind-s-packages"}}),_v("Understanding MarkBind's Packages"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#understanding-markbind-s-packages","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("cli")]),_v(" "),_c('li',[_v("core")]),_v(" "),_c('li',[_v("core-web")]),_v(" "),_c('li',[_v("vue-components")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("You may refer to MarkBind's "),_c('a',{attrs:{"href":"/devdocs/devGuide/design/projectStructure.html"}},[_v("project structure")]),_v(" to get a better understanding of how the packages work together.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"what-is-server-side-rendering-and-why"}},[_c('span',{staticClass:"anchor",attrs:{"id":"what-is-server-side-rendering-and-why"}}),_v("What is Server-side Rendering and Why?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#what-is-server-side-rendering-and-why","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"client-side-hydration"}},[_c('span',{staticClass:"anchor",attrs:{"id":"client-side-hydration"}}),_v("Client-side Hydration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#client-side-hydration","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"penalties-of-hydration-issue"}},[_c('span',{staticClass:"anchor",attrs:{"id":"penalties-of-hydration-issue"}}),_v("Penalties of Hydration Issue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#penalties-of-hydration-issue","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"avoiding-hydration-issue"}},[_c('span',{staticClass:"anchor",attrs:{"id":"avoiding-hydration-issue"}}),_v("Avoiding Hydration Issue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#avoiding-hydration-issue","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("the initial state is the same between client-side and server-side.")]),_v(" "),_c('li',[_v("after compiling and rendering the Vue page application, the SSR HTML mark-up is not modified.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Having block-level elements within "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<p>")]),_v(" tag")]),_v(" "),_c('li',[_v("Having unknown HTML elements within our Vue application during compilation/rendering (though this can be easily resolved by adding "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v-pre")]),_v(" to the unknown element, so that Vue will ignore that element during compilation).")])])}
},function anonymous(
) {
with(this){return _c('div',[_c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.1.1")]),_v(" on Fri, Apr 1, 2022, 3:44:26 PM UTC]")]),_c('br'),_v(" "),_c('small',[_v("This site is powered by "),_c('a',{attrs:{"href":"https://www.netlify.com/"}},[_v("Netlify")]),_v(".")])])])])}
}];
  
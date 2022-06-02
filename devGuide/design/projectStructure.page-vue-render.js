
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/devdocs/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/devdocs/images/logo-darkbackground.svg","height":"20"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/devdocs/index.html"}},[_v("HOME")])]),_v(" "),_c('div',{attrs:{"tags":"environment--dg"}},[_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/devdocs/devGuide/index.html"}},[_v("DEVELOPER GUIDE")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/devdocs/showcase.html"}},[_v("SHOWCASE")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/devdocs/about.html"}},[_v("ABOUT")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/MarkBind/markbind","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1)]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Developer Guide")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/devGuide.html"}},[_v("Contributing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/settingUp.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/workflow.html"}},[_v("Workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Design \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/design/projectStructure.html"}},[_v("Project Structure")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/design/architecture.html"}},[_v("Architecture")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/design/serverSideRendering.html"}},[_v("Server Side Rendering")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/writingComponents.html"}},[_v("Writing Components")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/writingPlugins.html"}},[_v("Writing Plugins")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/migratingToTypeScript.html"}},[_v("Migrating to TypeScript")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("GitHub Actions \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/githubActions/overview.html"}},[_v("Overview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/githubActions/markbindAction.html"}},[_v("markbind-action")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/githubActions/markbindReusableWorkflows.html"}},[_v("markbind-reusable-workflows")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/projectManagement.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Appendices \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/styleGuides.html"}},[_v("Style guides")])])])])])])],1)],1)]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('p',[_v("The MarkBind project is developed in a "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("We follow a monorepo approach, similar to Babel and other open source projects. To see a discussion on the pros and cons of this approach, read "),_c('a',{attrs:{"href":"https://github.com/babel/babel/blob/main/doc/design/monorepo.md"}},[_v("here")]),_v(".")]},proxy:true}])},[_v("monorepo")]),_v(" ("),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind"}},[_v("MarkBind/markbind")]),_v(") of 4 packages:")],1),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('p',[_v("This package houses the various frontend assets used in the core package.")]),_v(" "),_c('p',[_v("Some external assets included are Vue.js, jQuery, Bootstrap bundles, and FontAwesome bundles.")]),_v(" "),_c('p',[_v("Internal bundles are also present, generated from setup scripts, custom stylesheets and the UI components library.")]),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#project-structure"}},[_v("Project Structure‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#packages"}},[_v("Packages‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#markbind-core-library"}},[_v("MarkBind core library‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#markbind-cli"}},[_v("MarkBind CLI‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#markbind-core-web-library"}},[_v("MarkBind core-web library‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#ui-components-library"}},[_v("UI components library‎")])])])])],1)])],1),_v(" "),_m(18)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('p',[_c('span',{staticClass:"d-none",attrs:{"id":"title"}},[_v("Project Structure")])])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"project-structure"}},[_c('span',{staticClass:"anchor",attrs:{"id":"project-structure"}}),_v("Project Structure"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-structure","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_v("This page gives you an overview of the MarkBind's internal project structure.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"packages"}},[_c('span',{staticClass:"anchor",attrs:{"id":"packages"}}),_v("Packages"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#packages","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("The core library, which parses and processes MarkBind's various syntaxes, resides in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("packages/core/")]),_v(" directory.")])]),_v(" "),_c('li',[_c('p',[_v("The command-line interface (CLI) application, which accepts commands from users and then uses the core library to parse and generate web pages, resides in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("packages/cli/")]),_v(" directory.")])]),_v(" "),_c('li',[_c('p',[_v("The core web library, which contains a generated web bundle from various setup scripts and the UI components library, resides in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("packages/core-web/")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("The UI components library, which MarkBind authors can use to create content with complex and interactive structure, resides in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("packages/vue-components/")]),_v(" directory.")]),_v(" "),_c('p',[_v("Stack used: "),_c('em',[_v("Node.js")]),_v(", "),_c('em',[_v("Vue.js")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"markbind-core-library"}},[_c('span',{staticClass:"anchor",attrs:{"id":"markbind-core-library"}}),_v("MarkBind core library"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-core-library","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("The core library mainly houses:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("Functions and libraries used to parse and process MarkBind into usable output are stored in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src")]),_v(". The architecture described in "),_c('a',{attrs:{"href":"/devdocs/devGuide/design/architecture.html"}},[_v("Architecture")]),_v(" is contained here. A brief rundown of what it includes:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Various key functionalities in processing MarkBind syntax into valid HTML output, stored in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("html")]),_v(". The other part of the content processing flow is found in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("variables")]),_v(", which manages site variables and facilitates the Nunjucks calls.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Page")]),_v(" files generate a single page of the site, and are managed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Site")]),_v(" instance. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Site")]),_v(" uses the Page model's interface to generate pages, and performs various other utility-like functions related to site generation such as copying of external assets into the output folder.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Layout")]),_v(" holds the files relating to the layout of the site and are managed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LayoutManager")]),_v(". Similarly, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("External")]),_v(" files, which are separate output files to be loaded dynamically and on-demand, are managed by a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExternalManager")]),_v(" instance.")])]),_v(" "),_c('li',[_c('p',[_v("Various libraries (contained in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("lib")]),_v(") and plugins (in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("plugins")]),_v(") are also stored here. Some external libraries have also been amended to suit MarkBind's purpose – see "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("patches")]),_v(".")])])])]),_v(" "),_c('li',[_c('p',[_v("MarkBind's "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/templates.html"}},[_v("templates")]),_v(", used in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind init")]),_v(" command.")])]),_v(" "),_c('li',[_c('p',[_v("Unit Tests (though there are more unit tests and functional tests in the cli library)")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("The key external libraries used are:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/markdown-it/markdown-it"}},[_v("markdown-it")]),_v(", which does the Markdown parsing and rendering. There are also several customized markdown-it plugins used in MarkBind, which are located inside the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/lib/markdown-it/")]),_v(" directory.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Several markdown-it plugins are installed to enhance the existing Markdown syntax. They can be found in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/package.json")]),_v(". Some of them are patched in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/lib/markdown-it/patches/")]),_v(" directory to fit MarkBind's needs.")])]),_v(" "),_c('li',[_c('p',[_v("Additionally, there are some markdown-it plugins in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/lib/markdown-it/plugins/")]),_v(" directory (either forked, modified or written to enhance existing functionalities).")])])])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/fb55/htmlparser2"}},[_v("htmlparser2")]),_v(", a speedy and forgiving HTML parser which exposes a DOM-like object structure to work on. To comply with the markdown spec, and our custom requirements, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/patches/htmlparser2.js")]),_v(" patches various behaviours of this library.")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://cheerio.js.org/"}},[_v("cheerio")]),_v(", which is a node.js equivalent of "),_c('a',{attrs:{"href":"https://jquery.com/"}},[_v("jQuery")]),_v(". Cheerio uses "),_c('a',{attrs:{"href":"https://github.com/fb55/htmlparser2"}},[_v("htmlparser2")]),_v(" to parse the HTML as well, hence our patches propagate here.")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://mozilla.github.io/nunjucks/"}},[_v("Nunjucks")]),_v(", which is a JavaScript templating engine. Nunjucks is used to support our variable system to help with reusing small bits of code in multiple places. The package is patched and stored in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/patches/nunjucks")]),_v(" to make it compatible with other MarkBind syntax processing steps.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"markbind-cli"}},[_c('span',{staticClass:"anchor",attrs:{"id":"markbind-cli"}}),_v("MarkBind CLI"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-cli","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The CLI application uses and further builds on the interface exposed by the core library's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Site")]),_v(" model to provide functionalities for the author, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind serve")]),_v(" which initiates a live reload workflow.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("The key external libraries used are:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/tj/commander.js/"}},[_v("commander.js")]),_v(", which is a node.js CLI framework.")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/tapio/live-server"}},[_v("live-server")]),_v(", which is a simple web server for local development and preview of a MarkBind site. The package is patched and stored in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/lib/live-server")]),_v(" with our custom fine tuning.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"markbind-core-web-library"}},[_c('span',{staticClass:"anchor",attrs:{"id":"markbind-core-web-library"}}),_v("MarkBind core-web library"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-core-web-library","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ui-components-library"}},[_c('span',{staticClass:"anchor",attrs:{"id":"ui-components-library"}}),_v("UI components library"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-components-library","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("This package consists of a mix of "),_c('a',{attrs:{"href":"https://getbootstrap.com/components/"}},[_v("Bootstrap")]),_v(" and proprietary components rewritten in "),_c('a',{attrs:{"href":"https://vuejs.org"}},[_v("Vue.js")]),_v(" based on our needs for educational websites.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("We forked it from the original "),_c('a',{attrs:{"href":"https://github.com/yuche/vue-strap"}},[_v("yuche/vue-strap")]),_v(" repo into the "),_c('a',{attrs:{"href":"https://github.com/MarkBind/vue-strap"}},[_v("MarkBind/vue-strap")]),_v(" repo, and then later merged it into the main "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind"}},[_v("MarkBind/markbind")]),_v(" repo.")])}
},function anonymous(
) {
with(this){return _c('div',[_c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.1.1")]),_v(" on Thu, 2 Jun 2022, 15:06:45 UTC]")]),_c('br'),_v(" "),_c('small',[_v("This site is powered by "),_c('a',{attrs:{"href":"https://www.netlify.com/"}},[_v("Netlify")]),_v(".")])])])])}
}];
  
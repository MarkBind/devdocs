
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/devdocs/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/devdocs/images/logo-darkbackground.svg","height":"20"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/devdocs/index.html"}},[_v("HOME")])]),_v(" "),_c('div',{attrs:{"tags":"environment--dg"}},[_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/devdocs/devGuide/index.html"}},[_v("DEVELOPER GUIDE")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/devdocs/showcase.html"}},[_v("SHOWCASE")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/devdocs/about.html"}},[_v("ABOUT")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/MarkBind/markbind","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1)]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Developer Guide")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/devGuide.html"}},[_v("Contributing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/settingUp.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/workflow.html"}},[_v("Workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Design \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/design/projectStructure.html"}},[_v("Project Structure")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/design/architecture.html"}},[_v("Architecture")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/design/serverSideRendering.html"}},[_v("Server Side Rendering")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/writingComponents.html"}},[_v("Writing Components")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/writingPlugins.html"}},[_v("Writing Plugins")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/migratingToTypeScript.html"}},[_v("Migrating to TypeScript")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("GitHub Actions \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/githubActions/overview.html"}},[_v("Overview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/githubActions/markbindAction.html"}},[_v("markbind-action")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/githubActions/markbindReusableWorkflows.html"}},[_v("markbind-reusable-workflows")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/projectManagement.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Appendices \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/devdocs/devGuide/styleGuides.html"}},[_v("Style guides")])])])])])])],1)],1)]),_v(" "),_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#github-actions-overview"}},[_v("GitHub Actions: Overview‎")])])],1)])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('p',[_c('span',{staticClass:"d-none",attrs:{"id":"title"}},[_v("GitHub Actions: Overview")])]),_v(" "),_c('h1',{attrs:{"id":"github-actions-overview"}},[_c('span',{staticClass:"anchor",attrs:{"id":"github-actions-overview"}}),_v("GitHub Actions: Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions-overview","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"lead"},[_c('p',[_v("A GitHub Action can perform a variety of tasks, including automating the build and deployment of a MarkBind site.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind-action"}},[_v("markbind-action")]),_v(" is a "),_c('a',{attrs:{"href":"https://github.com/marketplace/actions/markbind-action"}},[_v("published action")]),_v(" that builds and deploys your MarkBind site.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind-action/tree/master/.github/workflows"}},[_v("markbind-reusable-workflows")]),_v(" is a list of reusable workflows that help improve your CI/CD with a MarkBind site.")])])]),_v(" "),_c('p',[_c('strong',[_v("Before any development, ensure you have a basic knowledge of GitHub Actions")])]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"}},[_v("Official GitHub Actions documentation")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"}},[_v("Workflow syntax")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/creating-actions/creating-a-composite-action"}},[_v("Creating a composite action")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/creating-actions/releasing-and-maintaining-actions"}},[_v("Releasing and maintaining actions")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/using-workflows/reusing-workflows"}},[_v("Reusing workflows")])])])])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('div',[_c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.1.1")]),_v(" on Fri, May 6, 2022, 3:39:09 PM UTC]")]),_c('br'),_v(" "),_c('small',[_v("This site is powered by "),_c('a',{attrs:{"href":"https://www.netlify.com/"}},[_v("Netlify")]),_v(".")])])])])}
}];
  
"use strict";(self.webpackChunkmy_gh_page=self.webpackChunkmy_gh_page||[]).push([[8209],{2451:(e,t,s)=>{s.d(t,{A:()=>v});var a=s(758),i=s(3526),r=s(5084),l=s(6587),n=s(3092),c=s(8995),o=s(5557),m=s(8839);function d(e){const{pathname:t}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const g={sidebar:"sidebar_EGXY",sidebarItemTitle:"sidebarItemTitle_LMbS",sidebarItemList:"sidebarItemList_jM0T",sidebarItem:"sidebarItem_AIqB",sidebarItemLink:"sidebarItemLink_CGCW",sidebarItemLinkActive:"sidebarItemLinkActive_rleZ"};var u=s(6070);function b(e){let{sidebar:t}=e;const s=d(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,i.A)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,i.A)(g.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,i.A)(g.sidebarItemList,"clean-list"),children:s.map((e=>(0,u.jsx)("li",{className:g.sidebarItem,children:(0,u.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(5794);function j(e){let{sidebar:t}=e;const s=d(t.items);return(0,u.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,u.jsx)(h.GX,{component:j,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,u.jsx)(p,{sidebar:t}):(0,u.jsx)(b,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,u.jsx)(r.A,{...l,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(x,{sidebar:t}),(0,u.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),s&&(0,u.jsx)("div",{className:"col col--2",children:s})]})})})}},6879:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(758);var a=s(3526),i=s(8995);const r=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(2953),n=s(1593),c=s(2451),o=s(8038),m=s(8784);const d={tag:"tag_X5Mz"};var g=s(6070);function u(e){let{letterEntry:t}=e;return(0,g.jsxs)("article",{children:[(0,g.jsx)(m.A,{as:"h2",id:t.letter,children:t.letter}),(0,g.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,g.jsx)("li",{className:d.tag,children:(0,g.jsx)(o.A,{...e})},e.permalink)))}),(0,g.jsx)("hr",{})]})}function b(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,g.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,g.jsx)(u,{letterEntry:e},e.letter)))})}var h=s(5845);function j(e){let{tags:t,sidebar:s}=e;const i=r();return(0,g.jsxs)(l.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,g.jsx)(l.be,{title:i}),(0,g.jsx)(h.A,{tag:"blog_tags_list"}),(0,g.jsxs)(c.A,{sidebar:s,children:[(0,g.jsx)(m.A,{as:"h1",children:i}),(0,g.jsx)(b,{tags:t})]})]})}},8038:(e,t,s)=>{s.d(t,{A:()=>n});s(758);var a=s(3526),i=s(3092);const r={tag:"tag_GIYv",tagRegular:"tagRegular_qUvn",tagWithCount:"tagWithCount_khP7"};var l=s(6070);function n(e){let{permalink:t,label:s,count:n,description:c}=e;return(0,l.jsxs)(i.A,{href:t,title:c,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}}}]);
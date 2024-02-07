"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[258],{258:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var n=s(791),r=s(880),a=s(946),c=s(483),o=s(832),l=s(184);const i=e=>{const t=(0,n.useRef)(),{center:s,zoom:r}=e;return(0,n.useEffect)((()=>{let e;(async()=>{e=await new window.google.maps.Map(t.current,{center:s,zoom:r}),await new window.google.maps.Marker({position:s,map:e})})()}),[s,r]),(0,l.jsx)("div",{ref:t,className:"map ".concat(e.className),style:e.style})};var d=s(708),h=s(722),m=s(639),u=s(38);const x=e=>{const t=(0,n.useContext)(d.V),[s,r]=(0,n.useState)(!1),[x,j]=(0,n.useState)(!1),{isLoading:p,error:f,sendrequest:g,clearError:v}=(0,h.x)(),C=()=>{r(!1)},E=()=>{j(!1)};return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(m.Z,{error:f,onClear:v}),(0,l.jsx)(o.Z,{show:s,onCancel:C,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,l.jsx)(c.Z,{onClick:C,children:"CLOSE"}),children:(0,l.jsx)("div",{className:"map-container",children:(0,l.jsx)(i,{center:e.coordinates,zoom:16})})}),(0,l.jsx)(o.Z,{show:x,onCancel:E,header:"Are you Sure?",footerClass:"place-item__model-actions",footer:(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(c.Z,{inverse:!0,onClick:E,children:"CANCEL"}),(0,l.jsx)(c.Z,{danger:!0,onClick:async()=>{j(!1);try{await g("".concat("http://localhost:8000","/api/places/").concat(e.id),"DELETE",{Authorization:"Bearer "+t.token}),e.onDelete(e.id)}catch(f){}},children:"DELETE"})]}),children:(0,l.jsxs)("p",{children:["You want to delete ",(0,l.jsx)("span",{style:{color:"red"},children:e.title})," "]})}),(0,l.jsx)("li",{className:"place-item",children:(0,l.jsxs)(a.Z,{className:"place.item__content",children:[p&&(0,l.jsx)(u.Z,{asOverlay:!0}),(0,l.jsx)("div",{className:"place-item__image",children:(0,l.jsx)("img",{src:"".concat("http://localhost:8000","/").concat(e.image),alt:e.title})}),(0,l.jsxs)("div",{className:"place-item__info",children:[(0,l.jsx)("h2",{children:e.title}),(0,l.jsx)("h3",{children:e.aaddress}),(0,l.jsx)("p",{children:e.description})]}),(0,l.jsxs)("div",{className:"place-item__actions",children:[(0,l.jsx)(c.Z,{inverse:!0,onClick:()=>{r(!0)},children:"VIEW ON MAP"}),t.userId===e.creatorId&&(0,l.jsx)(c.Z,{to:"/places/".concat(e.id),children:"EDIT"}),t.userId===e.creatorId&&(0,l.jsx)(c.Z,{onClick:()=>{j(!0)},danger:!0,children:"DELETE"})]})]})})]})},j=e=>0===e.items.length?(0,l.jsx)("div",{className:"place-list center",children:(0,l.jsxs)(a.Z,{children:[(0,l.jsx)("h2",{children:"Places Not Found"}),(0,l.jsx)(c.Z,{to:"/places/new",children:"SHARE"})]})}):(0,l.jsx)("ul",{className:"place-list",children:e.items.map((t=>(0,l.jsx)(x,{id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDelete},t.id)))}),p=()=>{const{isLoading:e,error:t,sendrequest:s,clearError:a}=(0,h.x)(),[c,o]=(0,n.useState)(),i=(0,r.UO)().userId;(0,n.useEffect)((()=>{(async()=>{try{const e=await s("".concat("http://localhost:8000","/api/places/user/").concat(i));o(e.places)}catch(t){}})()}),[s,i]);return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(m.Z,{error:t,onClear:a}),e&&(0,l.jsx)("div",{className:"center",children:(0,l.jsx)(u.Z,{asOverlay:!0})}),!e&&c&&(0,l.jsx)(j,{items:c,onDelete:e=>{o((t=>t.filter((t=>t.id!==e))))}})]})}},483:(e,t,s)=>{s.d(t,{Z:()=>a});s(791);var n=s(523),r=s(184);const a=e=>e.href?(0,r.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,r.jsx)(n.rU,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,r.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},946:(e,t,s)=>{s.d(t,{Z:()=>r});s(791);var n=s(184);const r=e=>(0,n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},639:(e,t,s)=>{s.d(t,{Z:()=>c});s(791);var n=s(832),r=s(483),a=s(184);const c=e=>(0,a.jsx)(n.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,a.jsx)(r.Z,{onClick:e.onClear,children:"Okay"}),children:(0,a.jsx)("p",{children:e.error})})},832:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(791),r=s(164),a=s(549),c=s(522),o=s(184);const l=e=>{const t=(0,o.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,o.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,o.jsx)("h2",{children:e.header})}),(0,o.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>{e.preventDefault()},children:[(0,o.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,o.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return r.createPortal(t,document.getElementById("modal-hook"))},i=e=>(0,o.jsxs)(n.Fragment,{children:[e.show&&(0,o.jsx)(c.Z,{onClick:e.onCancel}),(0,o.jsx)(a.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,o.jsx)(l,{...e})})]})},722:(e,t,s)=>{s.d(t,{x:()=>r});var n=s(791);const r=()=>{const[e,t]=(0,n.useState)(!1),[s,r]=(0,n.useState)(),a=(0,n.useRef)([]),c=(0,n.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t(!0);const l=new AbortController;a.current.push(l);try{const s=await fetch(e,{method:n,headers:c,body:o,signal:l.signal}),r=await s.json();if(a.current=a.current.filter((e=>e!==l)),!s.ok)throw new Error(r.message);return t(!1),r}catch(s){throw r(s.message),t(!1),s}}),[]);return(0,n.useEffect)((()=>()=>{a.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:s,sendrequest:c,clearError:()=>{r(null)}}}}}]);
//# sourceMappingURL=258.482c91d2.chunk.js.map
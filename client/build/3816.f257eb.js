(self.webpackChunkbarbershop=self.webpackChunkbarbershop||[]).push([[3816],{77449:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return C}});var t=r(63038),n=r.n(t),o=r(67294),s=r(84751),u=r(79521),l=(r(17547),r(16550)),c=r(15616),i=r.n(c),d=function(e,a,r){var t=(0,s.v9)((function(e){return e.bookedOrdersData})),n=(0,l.k6)();return{columns:(0,o.useMemo)((function(){return[{Header:"Name Surname",accessor:"name"},{Header:"Date booking",accessor:"date",Cell:function(e){var a=e.value;return i()(new Date(a),"dd/MM/yyyy")}},{Header:"Time booking",accessor:"bookTime",Cell:function(e){var a=e.value;return i()(new Date(a),"HH:mm")}},{Header:"Hairdresser",accessor:"hairdresserName"},{Header:"Details",disableSortBy:!0,id:"details",accessor:function(e){return"details"},Cell:function(e){return o.createElement("button",{className:"admin-booked__btn-remove",onClick:function(){n.push("/admin/details-booked-order/".concat(e.row.original._id))}},"Details")}},{Header:"Remove",disableSortBy:!0,id:"remove",accessor:function(e){return"remove"},Cell:function(t){return o.createElement("button",{className:"admin-booked__btn-remove",onClick:function(){r(!0),e(t.row.original._id),a(t.row.original.cancelCode)}},o.createElement("i",{className:"fas fa-trash-alt"}))}}]}),[t]),data:(0,o.useMemo)((function(){return t}),[t])}},m=r(76961),p=r(73637),b=r(21696),v=r(73680),f=r(16431),g=r(22584),k=r(87757),P=r.n(k),h=r(48926),w=r.n(h),y=r(73406),E=r(65467),N=r(55948),x=function(e,a,r){var t=(0,s.I0)();return{handleRemoveItem:function(){var n=w()(P().mark((function n(){var o,s,u;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,E.XP)(e);case 2:return o=n.sent,s=o.data,u=o.status,n.next=7,(0,E._o)(a);case 7:200===u?(t((0,y.Ob)(s.success,"removeAtTableAdmin")),t((0,N.Ac)(e)),r(!1)):t((0,y.PA)(s.alert,"removeAtTableAdmin"));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}},C=function(){(0,s.I0)();var e=(0,s.v9)((function(e){return e.useAdminData})),a=(0,s.v9)((function(e){return e.bookedOrdersData})),r=(0,s.v9)((function(e){return e.alertData})),t=(0,o.useState)(null),l=n()(t,2),c=l[0],i=l[1],k=(0,o.useState)(null),P=n()(k,2),h=P[0],w=P[1],y=(0,o.useState)(!1),E=n()(y,2),N=E[0],C=E[1],D=d(i,w,C),H=D.columns,T=D.data,_=x(c,h,C).handleRemoveItem;(0,g.Z)();var A=(0,u.useTable)({columns:H,data:T},u.useGlobalFilter,u.useSortBy,u.usePagination),I=A.getTableProps,S=A.getTableBodyProps,R=A.headerGroups,B=A.page,M=A.nextPage,O=A.previousPage,Z=A.canNextPage,F=A.canPreviousPage,G=A.pageOptions,X=A.prepareRow,j=A.state,q=A.setGlobalFilter,z=j.globalFilter,J=j.pageIndex;return o.createElement("article",{className:"admin-booked"},(r.errorServerMsg,o.createElement(f.Z,null)),o.createElement("div",{className:"admin-booked__wrapper"},o.createElement(p.Z,{data:a,filter:z,setFilter:q}),o.createElement(b.Z,{getTableProps:I,getTableBodyProps:S,headerGroups:R,page:B,prepareRow:X}),o.createElement(m.Z,{canNextPage:Z,canPreviousPage:F,nextPage:M,pageIndex:J,pageOptions:G,previousPage:O}),o.createElement(v.Z,{enableAction:e.enableBook,isOpenModal:N,handleRemoveItem:_,handleNotRemoveItem:function(){C(!1)},purpose:"order"})))}},17547:function(){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-01c7"],{"+wnM":function(t,e,n){},c67U:function(t,e,n){"use strict";n.r(e);var i,a,l=n("Kz1y"),s=n.n(l),o=(n("tBtl"),n("U227")),h=n.n(o),r=n("YUSd"),c=n.n(r),u=n("Zv/C"),d=n.n(u),p=n("2lBV"),m=n.n(p),w=n("Dkg+"),f=n.n(w),v=n("Gjrs"),k=n.n(v),E=n("mXGw"),S=n.n(E),y=n("W0B4"),C=n.n(y),R=n("aKSz"),N=(n("+wnM"),n("pNn+")),P=(a=i=function(t){function e(t){d()(this,e);var n=f()(this,(e.__proto__||c()(e)).call(this,t));return n.state={isShow:!1,unlisten:null},n}return k()(e,t),m()(e,[{key:"componentDidMount",value:function(){var t=this;this.shouldShowChildWindow();var e=N.a.listen(function(){t.shouldShowChildWindow()});this.setState({unlisten:e})}},{key:"componentWillUnmount",value:function(){this.state.unlisten()}},{key:"shouldShowChildWindow",value:function(){this.setState({isShow:N.a.location.pathname===this.props.childRoutePath})}},{key:"handleClose",value:function(){this.setState({isShow:!1}),this.props.parentRoutePath?N.a.replace(this.props.parentRoutePath):N.a.go(-1)}},{key:"render",value:function(){return S.a.createElement(R.CSSTransitionGroup,{transitionName:"child-window",transitionEnterTimeout:500,transitionLeaveTimeout:600},this.state.isShow&&S.a.createElement("div",{className:"child-window"},S.a.createElement("div",{className:"header clearfix"},S.a.createElement("div",{className:"pull-left lh60 p-l-26"},S.a.createElement("span",{className:"f16"},this.props.title)),S.a.createElement("div",{className:"pull-right p-r-20 f14 lh60 hand",onClick:this.handleClose.bind(this)},S.a.createElement("i",{className:"fa fa-compress f14 c-blue"}),"  退出")),S.a.createElement("div",{className:"content"},this.props.children)))}}]),e}(S.a.Component),i.propTypes={title:C.a.string.isRequired,childRoutePath:C.a.string.isRequired,parentRoutePath:C.a.string},a),W=n("Oyme"),_=function(t){function e(t){d()(this,e);var n=f()(this,(e.__proto__||c()(e)).call(this,t));return n.state={childWindow:{title:"子层标题",childRoutePath:"/subnav/option1/detail"}},n}return k()(e,t),m()(e,[{key:"handleOpenChild",value:function(){N.a.push(this.state.childWindow.childRoutePath)}},{key:"render",value:function(){return S.a.createElement("div",null,"option1",S.a.createElement("br",null),S.a.createElement(h.a,{type:"primary",onClick:this.handleOpenChild.bind(this)},"打开子层"),S.a.createElement(P,{title:this.state.childWindow.title,childRoutePath:this.state.childWindow.childRoutePath},this.props.routes.map(function(t,e){return S.a.createElement(W.a,s()({key:e},t))})))}}]),e}(S.a.Component);e.default=_}}]);
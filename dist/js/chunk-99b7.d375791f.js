(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-99b7"],{Gs2z:function(e,t,a){"use strict";a.r(t);a("tBtl");var n=a("U227"),r=a.n(n),l=(a("RllP"),a("1iFs")),o=a.n(l),i=(a("WZS7"),a("xufw")),s=a.n(i),c=a("YUSd"),m=a.n(c),u=a("Zv/C"),p=a.n(u),f=a("2lBV"),d=a.n(f),h=a("Dkg+"),w=a.n(h),v=a("Gjrs"),g=a.n(v),E=a("mXGw"),k=a.n(E),I=a("aEK/"),y=a("Qi1R"),S=(a("Q4P+"),function(e){function t(e){p()(this,t);var a=w()(this,(t.__proto__||m()(t)).call(this,e));return a.state={token:""},a}return g()(t,e),d()(t,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFields(function(e,a){e||(t.setState({token:a.username}),y.a.setLocalItem("token",a.username))})}},{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;if(this.state.token)return k.a.createElement(I.a,{to:e});var t=this.props.form.getFieldDecorator;return k.a.createElement("div",{className:"login-container"},k.a.createElement(s.a,{className:"login-form",onSubmit:this.handleSubmit.bind(this)},k.a.createElement(s.a.Item,{className:"title text-center bold"},"系统登录"),k.a.createElement(s.a.Item,null,t("username",{rules:[{required:!0,message:"请输入用户名"}],initialValue:"admin"})(k.a.createElement(o.a,{placeholder:"用户名",size:"large",prefix:k.a.createElement("i",{className:"fa fa-user",style:{color:"#889aa4"}})}))),k.a.createElement(s.a.Item,null,t("password",{rules:[{required:!0,message:"请输入密码"}],initialValue:"password"})(k.a.createElement(o.a,{placeholder:"密码",size:"large",type:"password",prefix:k.a.createElement("i",{className:"fa fa-lock",style:{color:"#889aa4"}})}))),k.a.createElement(s.a.Item,null,k.a.createElement(r.a,{type:"primary",size:"large",htmlType:"submit",style:{width:"100%"}},"登录"))))}}]),t}(k.a.Component));t.default=s.a.create()(S)},"Q4P+":function(e,t,a){},Qi1R:function(e,t,a){"use strict";var n=a("/9Wh"),r=a.n(n);t.a={getLocalItem:function(e){var t=window.localStorage.getItem(e);return t?JSON.parse(t):null},setLocalItem:function(e,t){window.localStorage.setItem(e,r()(t))},removeLocalItem:function(e){window.localStorage.removeItem(e)}}}}]);
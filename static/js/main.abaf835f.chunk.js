(this.webpackJsonpfindface=this.webpackJsonpfindface||[]).push([[0],{296:function(e,t,a){},298:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),s=a(39),r=a.n(s),o=(a(80),a(17)),l=a(18),c=a(20),m=a(19),u=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim white underline pa3 pointer"},"Sign Out")):i.a.createElement("div",null,i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f4 link dim white underline pa3 pointer"},"Sign in"),i.a.createElement("p",{onClick:function(){return t("Register")},className:"f4 link dim white underline pa3 pointer"},"Register")))},p=a(72),h=a.n(p),d=(a(81),a(73)),g=a.n(d),b=function(){return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement(h.a,{className:"Tilt br3 shadow-2",options:{max:75},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3"},i.a.createElement("img",{alt:"logo",src:g.a}))))},f=(a(82),function(e){var t=e.onInputChange,a=e.onSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3 white"},"This Magic Brain will detect faces in pictures. Give it a try."),i.a.createElement("div",{className:"pa3"},i.a.createElement("div",{className:"form pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 br3 pa2 w-70 center",type:"text",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),w=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"Hello, ",t,", your entry count is..."),i.a.createElement("div",{className:"white f1"},a))},v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(e){e.preventDefault();var t=n.state,a=t.email,i=t.password,s=t.name;console.log(n.state),fetch("https://findfaceapp.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:i,name:s})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("article",{className:"br2 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("form",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"textl",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"new-password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(i.a.Component),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(e){e.preventDefault();var t=n.state,a=t.signInEmail,i=t.signInPassword;fetch("https://findfaceapp.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:i})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.props.onRouteChange("home")):alert("unregistered user")}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("article",{className:"br2 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("form",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"current-password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e.props.onRouteChange("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),a}(i.a.Component),N=(a(83),function(e){var t=e.imageUrl,a=e.box;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",alt:"hi",src:t,width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),C=a(74),y=a.n(C),S=(a(296),{particles:{number:{value:200,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.02},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}),k={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFacebox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://findfaceapp.herokuapp.com/imageUrl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://findfaceapp.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch((function(e){return console.log(e)})),e.displayFacebox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(k):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=k,e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y.a,{className:"particles",params:S}),i.a.createElement(u,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement(w,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(f,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),i.a.createElement(N,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?i.a.createElement(E,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(297);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a.p+"static/media/brainiac.19f1e510.png"},75:function(e,t,a){e.exports=a(298)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.abaf835f.chunk.js.map
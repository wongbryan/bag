(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{268:function(e,t,n){e.exports=n(634)},629:function(e,t,n){},634:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(71),o=n(48),c=n(37),l=(n(280),n(27)),s=n(255),u=n(256),d=n.n(u),m=n(106),p="FETCH_APPLIATIONS_REQUESTED",g="FETCH_APPLICATIONS_SUCCEEDED",h="FETCH_APPLICATIONS_FAILED",b="CREATE_APPLICATION_REQUESTED",f="CREATE_APPLICATION_SUCCEEDED",v="CREATE_APPLICATION_FAILED",y="FETCHING",O="FAILED",E="IDLE",k="CREATING",j="FAILED",N="IDLE",S="SUCCESS",C=Object(l.c)({fetchStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;switch((arguments.length>1?arguments[1]:void 0).type){case p:return y;case g:return E;case h:return O;default:return e}},createStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;switch((arguments.length>1?arguments[1]:void 0).type){case b:return k;case f:return S;case v:return j;default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(m.a)(t.applications);default:return e}}}),w=Object(l.c)({router:c.d,action:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;return e},applications:C,balances:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{checkings:0,savings:0,investment:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateBalances":return t.payload;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedIn:!1,username:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return{loggedIn:!0,username:t.payload.username};case"logout":return{loggedIn:!1,username:""};default:return e}},budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{food:25,gas:25,travel:25,clothing:25},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateBudget":return t.payload;default:return e}},goals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addGoal":var n=Object(m.a)(e);return-1==n.indexOf(t.payload)&&n.push(t.payload),n;case"addGoals":var a=Object(m.a)(e);return t.payload.forEach(function(e){-1==a.indexOf(e)&&a.push(e)}),a;default:return e}},spending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateSpendingHistory":return t.payload;default:return e}},accountNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateAccountNumber":return t.payload;default:return e}},routingNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateRoutingNumber":return t.payload;default:return e}}}),x=d()(),A=[s.a,Object(c.c)(x)],F=l.d.apply(void 0,[l.a.apply(void 0,A)].concat([])),B=Object(l.e)(w,{},F);window.store=B;var R=n(638),I=n(637),D=n(185),P=n.n(D),T=n(257),H=n(16),M=n(17),G=n(20),L=n(18),_=n(19),W=n(7),U=n(21),q=n(15);function K(){var e=Object(U.a)(["\n  font-size: 1rem;\n"]);return K=function(){return e},e}function z(){var e=Object(U.a)(["\n  font-size: 1.25rem;\n  position: relative;\n  padding: 3px;\n  border: 1px solid black;\n  border-radius: 2px;\n  transform-origin: left;\n  display: block;\n  margin: 8px;\n"]);return z=function(){return e},e}var X=Object(q.a)("div")(z()),$=Object(q.a)("input")(K()),J=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state={},n.liftInput=n.liftInput.bind(Object(W.a)(Object(W.a)(n))),n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"liftInput",value:function(e){var t=this.props.onChange;t&&t(e.target.value)}},{key:"render",value:function(){var e=this,t=this.props.value;return r.a.createElement(X,null,r.a.createElement($,{type:"input",placeholder:t,onChange:function(t){return e.liftInput(t)}}))}}]),t}(r.a.Component),Q=function(e){var t="btn btn-".concat(e.color);return null!=e.className&&(t+=" "+e.className),r.a.createElement("div",null,r.a.createElement("button",{className:t,onClick:e.onClick,style:e.style},r.a.createElement("span",null,e.label)))},Y=n(639),V=n(186),Z=n.n(V);Z.a.initializeApp({apiKey:"AIzaSyCdMeQGo0V_6OQYoUBuMeh6kdjIpgnamiw",authDomain:"map-aa47b.firebaseapp.com",databaseURL:"https://map-aa47b.firebaseio.com",projectId:"map-aa47b",storageBucket:"map-aa47b.appspot.com",messagingSenderId:"125056356153"});var ee=Z.a.database();var te=function(){return{user:function(e,t){var n=t+"users/";return{create:function(t,a){console.log(t,a),e.ref(n+t).set({username:t,password:a},function(e){e&&console.log(e)})},validate:function(t,n){return e.ref("users/"+t).once("value").then(function(e){return!(!e||!e.val())&&e.val().password===n})},updateBalances:function(e,t){ee.ref("balances/"+e).set(t,function(e){e&&alert("Something went when adding to firebase",JSON.stringify(e,null,2))})},getBalances:function(e){return new Promise(function(t,n){var a={};ee.ref("balances/"+e).once("value",function(e){e.forEach(function(e){a[e.key]=e.val()}),t(a)})})},updateBudget:function(e,t){ee.ref("budget/"+e).set(t,function(e){e&&alert("Something went when adding to firebase",JSON.stringify(e,null,2))})},getBudget:function(e){return new Promise(function(t,n){var a={};ee.ref("budget/"+e).once("value",function(e){e.forEach(function(e){a[e.key]=e.val()}),t(a)})})},updateSpendingHistory:function(e,t){ee.ref("spendingHistory/"+e).set(t,function(e){e&&alert("Something went when adding to firebase",JSON.stringify(e,null,2))})},getSpendingHistory:function(e){return new Promise(function(t,n){var a={};ee.ref("spendingHistory/"+e).once("value",function(e){e.forEach(function(e){a[e.key]=e.val()}),t(a)})})},updateDetails:function(e,t,n){ee.ref("accountNumber/"+e).set(t,function(e){e&&alert("Something went when adding to firebase",JSON.stringify(e,null,2))}),ee.ref("routingNumber/"+e).set(n,function(e){e&&alert("Something went when adding to firebase",JSON.stringify(e,null,2))})},getAccountNumber:function(e){return new Promise(function(t,n){var a="";ee.ref("accountNumber/"+e).once("value",function(e){a=e.val(),t(a)})})},getRoutingNumber:function(e){return new Promise(function(t,n){var a="";ee.ref("routingNumber/"+e).once("value",function(e){a=e.val(),t(a)})})},addGoal:function(e,t){ee.ref("goals/"+e).push(t,function(e){e&&alert("Something went when adding to firebase",JSON.stringify(e,null,2))})},getGoals:function(e){var t=[];return new Promise(function(n,a){ee.ref("goals/"+e).once("value",function(e){e.forEach(function(e){t.push(e.val())}),n(t)})})}}}(ee,"")}};function ne(){var e=Object(U.a)(['\n  font-size: 1rem;\n  position: relative;\n  padding: 0;\n  transform-origin: left;\n  display: inline-block;\n  margin: 4px;\n\n  &::before {\n    content: "";\n    height: 1px;\n    background-color: $lightgray;\n    width: 100%;\n    transform: scaleX(0);\n    transition: all 0.25s ease;\n    position: absolute;\n    bottom: 0;\n    transform-origin: left;\n  }\n\n  &:hover {\n    cursor: pointer;\n    color: $black;\n  }\n\n  &:hover::before {\n    transform: scaleX(1);\n    background-color: $black;\n  }\n']);return ne=function(){return e},e}function ae(){var e=Object(U.a)(["\n  font-size: 1.25rem;\n  padding: 5px;\n"]);return ae=function(){return e},e}function re(){var e=Object(U.a)(["\n  text-align: center;\n"]);return re=function(){return e},e}var ie=Object(q.a)("div")(re()),oe=Object(q.a)("h1")(ae()),ce=Object(q.a)("div")(ne()),le=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state={username:"",password:"",error:"",isLoggedIn:!1},n.updatePassword=n.updatePassword.bind(Object(W.a)(Object(W.a)(n))),n.updateUsername=n.updateUsername.bind(Object(W.a)(Object(W.a)(n))),n.login=n.login.bind(Object(W.a)(Object(W.a)(n))),n.createUser=n.createUser.bind(Object(W.a)(Object(W.a)(n))),n.attemptToNavigate=n.attemptToNavigate.bind(Object(W.a)(Object(W.a)(n))),n.logout=n.logout.bind(Object(W.a)(Object(W.a)(n))),n.generateAccountNumber=n.generateAccountNumber.bind(Object(W.a)(Object(W.a)(n))),n.generateRoutingNumber=n.generateRoutingNumber.bind(Object(W.a)(Object(W.a)(n))),n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"generateRoutingNumber",value:function(){return Math.random().toString().slice(2,11)}},{key:"generateAccountNumber",value:function(){return Math.random().toString().slice(2,15)}},{key:"createUser",value:function(){var e=this.state,t=e.username,n=e.password;te().user.create(t,n),B.dispatch({type:"login",payload:{username:t}});for(var a={checkings:1e3*Math.random()+50,savings:1e4*Math.random()+200,investments:5e3*Math.random()},r=function(){var e=100,t={};return["food","gas","travel","clothing"].forEach(function(n){var a=Math.random()*e+20;e=a<0?0:e-a,t[n]=a}),t}(),i=["Gushi Korean Barbeque - Westwood, CA","Subway - Westwood, CA","Urban Outfitters - Westwood, CA","Meatlove - Westwood, CA","Whole Foods - Westwood, CA","Flame Broiler - Westwood, CA","The Spot - Berkeley, CA","Kingpin Donuts - Berkeley, CA","Thai Noodle - Berkeley, CA","Asha Tea House - Berkeley, CA","Waba Grill - Walnut, CA","Bangkok BBQ - Walnut, CA","Bed Bath and Beyond - Walnut, CA","Cluck2Go - Walnut, CA","Man Chan Cuisine - Walnut, CA","Panda Express - Walnut, CA","Berkeley Bowl - Berkeley, CA","Steve's KBBQ - Berkeley, CA","Shandong Noodle - Oakland, CA","Dessert Time - Oakland, CA","YuGiOh Cafe - Oakland, CA","Hello Kitty cafe - Oakland, CA","Starbucks - Oakland, CA","Class 302 - Rowland Heights, CA","Yoshinoya - Rowland Heights, CA","Tea Bar - Rowland Heights, CA","Tastea - Rowland Heights, CA","Burger King - Rowland Heights, CA","McDonalds - Rowland Heights, CA"],o={},c=0;c<10;c++){var l=Math.floor(i.length*Math.random()),s=i[l];void 0!=s&&(o[s]=Math.floor(50*Math.random()).toFixed(2),i.splice(l))}te().user.updateSpendingHistory(t,o),te().user.updateBalances(t,a),te().user.updateBudget(t,r);var u=this.generateAccountNumber(),d=this.generateRoutingNumber();te().user.updateDetails(t,u,d),B.dispatch({type:"updateSpendingHistory",payload:o}),B.dispatch({type:"updateBalances",payload:a}),B.dispatch({type:"updateBudget",payload:r}),B.dispatch({type:"updateAccountNumber",payload:u}),B.dispatch({type:"updateRoutingNumber",payload:d}),this.attemptToNavigate(!0)}},{key:"login",value:function(){var e=Object(T.a)(P.a.mark(function e(){var t,n,a,r,i,o,c,l,s,u;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.username,a=t.password,e.next=3,te().user.validate(n,a);case 3:if((r=e.sent)||this.setState({error:"User not found"}),this.setState({isLoggedIn:r}),!r){e.next=32;break}return e.next=9,te().user.getBudget(n);case 9:return i=e.sent,e.next=12,te().user.getBalances(n);case 12:return o=e.sent,e.next=15,te().user.getGoals(n);case 15:return c=e.sent,e.next=18,te().user.getSpendingHistory(n);case 18:return l=e.sent,e.next=21,te().user.getAccountNumber(n);case 21:return s=e.sent,e.next=24,te().user.getRoutingNumber(n);case 24:u=e.sent,B.dispatch({type:"addGoals",payload:c}),B.dispatch({type:"updateSpendingHistory",payload:l}),B.dispatch({type:"updateBalances",payload:o}),B.dispatch({type:"updateBudget",payload:i}),B.dispatch({type:"login",payload:{username:n}}),B.dispatch({type:"updateAccountNumber",payload:s}),B.dispatch({type:"updateRoutingNumber",payload:u});case 32:return this.attemptToNavigate(r),e.abrupt("return",r);case 34:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"attemptToNavigate",value:function(e){e&&this.props.history.push("/budget")}},{key:"updateUsername",value:function(e){this.setState({username:e})}},{key:"updatePassword",value:function(e){this.setState({password:e})}},{key:"logout",value:function(){B.dispatch({type:"logout"}),this.forceUpdate()}},{key:"render",value:function(){var e=this.state.error;return B.getState().user.loggedIn?r.a.createElement("div",null,r.a.createElement(oe,{className:"sentinel-primary black"},"You are logged in."),r.a.createElement(Q,{label:"Log out",color:"primary",onClick:this.logout})):r.a.createElement(ie,{className:"landing-container"},r.a.createElement(oe,{className:"sentinel-primary black"},"Sign into your banking account."),r.a.createElement(J,{value:"username",onChange:this.updateUsername}),r.a.createElement(J,{value:"password",onChange:this.updatePassword}),r.a.createElement(ce,{className:"untitled-primary gray navbar-link",onClick:this.login},"Sign In"),r.a.createElement(ce,{className:"untitled-primary gray navbar-link",onClick:this.createUser},"Create User"),e&&r.a.createElement("p",null,e))}}]),t}(r.a.Component),se=Object(Y.a)(le),ue=n(43),de=n(636),me=n(264),pe=n(259);function ge(){var e=Object(U.a)(["\n  width: 250px;\n  height: 250px;\n  border-radius: 125px;\n  margin: 24px;\n"]);return ge=function(){return e},e}Object(q.a)("div")(ge());var he=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state={},n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=B.getState().budget;return r.a.createElement("div",{style:{marginTop:"50px",margin:"auto",padding:"30px"}},r.a.createElement("div",{className:"goals"},B.getState().goals.map(function(t){return r.a.createElement("div",{key:t,style:{marginBottom:"50px"}},r.a.createElement("h2",{className:"sentinel-secondary"},"Budget remaining for "+t+" this month:"),r.a.createElement(me.a,{percent:e[t].toFixed(2).toString(),strokeWidth:"2",strokeColor:"#478af5"}),r.a.createElement("h3",{className:"untitled-secondary",style:{marginRight:"0"}},"$"+(e[t].toFixed(2)/100*300).toFixed(0).toString()+" / $300"))})),r.a.createElement(pe.PieChart,{size:250,labels:!0,data:[{key:"Food "+e.food.toFixed(2).toString()+"%",value:e.food,color:"#FFD154"},{key:"Travel "+e.travel.toFixed(2).toString()+"%",value:e.travel,color:"#FFA987"},{key:"Gas "+e.gas.toFixed(2).toString()+"%",value:e.gas,color:"#87D0F2"},{key:"Clothing "+e.clothing.toFixed(2).toString()+"%",value:e.clothing,color:"#FFD3F2"}],styles:{".chart_text":{fontSize:"1.25rem",color:"white"}}}),r.a.createElement("p",{style:{textAlign:"center"}},"Insights: You spent ",e.food.toFixed(2).toString()+"%"," of your monthly income on food."),r.a.createElement(de.a,{to:"/spending",style:{textDecoration:"none",display:"block",textAlign:"center"}},r.a.createElement("h3",{className:"navbar-link blue",style:{textAlign:"center"}},"View Transaction History")))}}]),t}(r.a.Component),be=Object(o.b)(function(e){return Object(ue.a)({},e.user)},function(e){return Object(l.b)({navigate:function(e){return Object(c.b)(e)}},e)})(he),fe=function(e){var t=["row"],n="Manage";e.background&&t.push(e.background),e.fixed&&t.push("fixed"),e.large&&t.push("large"),e.transaction&&(n="View details >");return r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:"left"},e.children),r.a.createElement("div",{className:"right"},e.right),r.a.createElement("button",{className:"details",color:"black",onClick:e.transaction?function(){console.log("click");var e=document.getElementById("detailsModal");e.style.display="block",document.getElementById("closeModal").onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}}:function(){console.log("click");var e=document.getElementById("accountsModal");e.style.display="block",document.getElementById("closeModalAccounts").onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}}},n))},ve=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state={goalAdded:!1},n.addGoal=n.addGoal.bind(Object(W.a)(Object(W.a)(n))),n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){}},{key:"addGoal",value:function(e){B.dispatch({type:"addGoal",payload:e}),te().user.addGoal(B.getState().user.username,e),this.setState({goalAdded:!0})}},{key:"render",value:function(){var e=this;return this.state.goalAdded?r.a.createElement("div",{className:"abs-center"},"Goal added. View it on the budget page."):r.a.createElement("div",{className:"abs-center"},r.a.createElement(Q,{color:"primary",label:"Save on clothing",style:{color:"black"},onClick:function(){return e.addGoal("clothing")}}),r.a.createElement(Q,{color:"primary",label:"Save on food",style:{color:"black"},onClick:function(){return e.addGoal("food")}}),r.a.createElement(Q,{color:"primary",label:"Save on travel",style:{color:"black"},onClick:function(){return e.addGoal("travel")}}),r.a.createElement(Q,{color:"primary",label:"Save on gas",style:{color:"black"},onClick:function(){return e.addGoal("gas")}}))}}]),t}(r.a.Component);function ye(){var e=Object(U.a)(["\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);return ye=function(){return e},e}var Oe=Object(q.a)("div")(ye()),Ee=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state={spending:[]},n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=B.getState().spending,t=Object.keys(e).map(function(t){return{left:t,right:"$"+e[t].toString()}});this.setState({spending:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Oe,{className:"landing-container"},this.state.spending.map(function(e){return r.a.createElement(fe,{key:e.left,background:"lightblue-bg",fixed:!0,transaction:!0,right:e.right},e.left)})),r.a.createElement("div",{id:"detailsModal",class:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close",id:"closeModal"},"\xd7"),r.a.createElement("h2",null,"Transaction details"))))}}]),t}(r.a.Component),ke=Object(o.b)(function(e){return Object(ue.a)({},e.user)},function(e){return Object(l.b)({navigate:function(e){return Object(c.b)(e)}},e)})(Ee);function je(){var e=Object(U.a)(["\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);return je=function(){return e},e}var Ne=Object(q.a)("div")(je()),Se=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state={accounts:[],accountNumber:"",routingNumber:""},n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=B.getState().user.username;te().user.getBalances(t).then(function(t){console.log(t),e.setState({accounts:[{left:"Checking",right:"$"+t.checkings.toFixed(2).toString()},{left:"Savings",right:"$"+t.savings.toFixed(2).toString()},{left:"Investment",right:"$"+t.investments.toFixed(2).toString()}]})});var n=B.getState().routingNumber;console.log(n);var a=B.getState().accountNumber;this.setState({accountNumber:a,routingNumber:n})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ne,{className:"landing-container"},this.state.accounts.map(function(e){return r.a.createElement(fe,{key:e.left,background:"lightblue-bg",fixed:!0,large:!0,right:e.right},e.left)})),r.a.createElement("div",{id:"accountsModal",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close",id:"closeModalAccounts"},"\xd7"),r.a.createElement("h2",null,"Manage your account"),r.a.createElement("h3",null,"Routing Number"),r.a.createElement("p",null,this.state.routingNumber),r.a.createElement("h3",null,"Account Number"),r.a.createElement("p",null,this.state.accountNumber))))}}]),t}(r.a.Component),Ce=Object(o.b)(function(e){return Object(ue.a)({},e.user)},function(e){return Object(l.b)({navigate:function(e){return Object(c.b)(e)}},e)})(Se),we=n(2),xe=n.n(we),Ae=(xe.a.shape({id:xe.a.string.isRequired,type:xe.a.string.isRequired,title:xe.a.string.isRequired,required:xe.a.bool,options:xe.a.arrayOf(xe.a.string),secure:xe.a.bool}),{BOOL:"BOOL",CHECKBOX:"CHECKBOX",SHORT_RESPONSE:"SHORT_RESPONSE",LONG_RESPONSE:"LONG_RESPONSE",DROPDOWN:"DROPDOWN"}),Fe=n(266);function Be(){var e=Object(U.a)(["\n  width: 80%;\n  resize: none;\n"]);return Be=function(){return e},e}function Re(){var e=Object(U.a)(["\n  background-color: transparent;\n  border-color: transparent;\n  outline: none;\n  font-size: 1.1rem;\n"]);return Re=function(){return e},e}function Ie(){var e=Object(U.a)(["\n  margin: 2px;\n  padding-left: 5px;\n  display: inline;\n  color: red;\n  font-size: 0.8rem;\n"]);return Ie=function(){return e},e}function De(){var e=Object(U.a)(["\n  margin-top: 40px;\n  margin-bottom: 10px;\n  font-size: 1.3rem;\n"]);return De=function(){return e},e}function Pe(){var e=Object(U.a)(["\n  display: inline;\n"]);return Pe=function(){return e},e}var Te=Object(q.a)("p")(Pe()),He=Object(q.a)("h2")(De()),Me=Object(q.a)("p")(Ie()),Ge=Object(q.a)("input")(Re()),Le=Object(q.a)(Ge.withComponent("textarea"))(Be()),_e=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state=e.item.type===Ae.DROPDOWN?{selectedOption:null}:{},n.updateForm=n.updateForm.bind(Object(W.a)(Object(W.a)(n))),n.updateDropdown=n.updateDropdown.bind(Object(W.a)(Object(W.a)(n))),n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.item.options;if(e){var t={};e.forEach(function(e){t[e]=!1}),this.setState(Object(ue.a)({},t))}}},{key:"checkboxSelect",value:function(e,t,n){this.props.updateForm;var a={};n||Object.keys(this.state).forEach(function(e){a[e]=!1}),a[t]=!0,this.setState(function(e){return Object(ue.a)({},a)});var r=[];return Object.keys(a).forEach(function(e){a[e]&&r.push(e)}),r}},{key:"updateForm",value:function(e){var t=this.props,n=t.updateForm,a=t.item,r=a.type,i=a.id;switch(r){case Ae.SHORT_RESPONSE:case Ae.LONG_RESPONSE:n(i,e.target.value);break;case Ae.CHECKBOX:var o=e.target.name;n(i,this.checkboxSelect(i,o)[0])}}},{key:"updateDropdown",value:function(e){var t=this.props,n=t.updateForm,a=t.item,r=(a.type,a.id);this.setState({selectedOption:e}),n(r,e.value)}},{key:"checkbox",value:function(e,t,n){var a=this,i=[];Object.keys(this.state).forEach(function(e){i.push(a.state[e])});var o=t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("input",{type:Ae.CHECKBOX,name:e,className:"click",required:n,checked:i[t],onClick:function(e){return a.updateForm(e)}}),r.a.createElement(Te,{className:"untitled-secondary gray"},e))});return o}},{key:"dropdown",value:function(e,t){var n=t.map(function(e){return{value:e,label:e}});return r.a.createElement(Fe.a,{className:"form-dropdown untitled-primary",value:e,onChange:this.updateDropdown,options:n})}},{key:"short_resp",value:function(e,t){var n=this,a=t?"password":"text";return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Ge,{type:a,maxLength:"50",placeholder:"type something...",className:"untitled-secondary text-underline gray",required:e,onChange:function(e){return n.updateForm(e)}})))}},{key:"long_resp",value:function(e){var t=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Le,{cols:"40",rows:"5",maxLength:"1200",placeholder:"type something...",className:"untitled-secondary gray",required:e,onChange:function(e){return t.updateForm(e)}})))}},{key:"displayWrapper",value:function(e,t,n,a,i){var o;switch(e){case Ae.CHECKBOX:o=this.checkbox(t,a,n);break;case Ae.SHORT_RESPONSE:o=this.short_resp(n,i);break;case Ae.LONG_RESPONSE:o=this.long_resp(t,n);break;case Ae.DROPDOWN:o=this.dropdown(this.state.selectedOption,a)}var c=r.a.createElement("div",{className:"required-msg red untitled-secondary"},"Please enter an answer.");return r.a.createElement("div",{className:"form-item-container"},r.a.createElement(He,{className:"untitled-primary gray"},t,n&&r.a.createElement(Me,null,"(Required)")),o,this.props.missingReqAnswer?c:null)}},{key:"render",value:function(){var e=this.props.item,t=e.type,n=e.title,a=e.required,r=e.options,i=e.secure,o=r||[];return this.displayWrapper(t,n,a,o,i)}}]),t}(r.a.Component),We=function(){return r.a.createElement("div",{className:"loading-screen"},r.a.createElement("div",{className:"loading-screen-block"},r.a.createElement("h1",{className:"untitled-primary black"},"Loading...")))},Ue=function(e){return r.a.createElement("div",{className:"success-screen"},r.a.createElement("div",{className:"success-screen-block"},r.a.createElement("h1",{className:"untitled-primary black"},e.text)))},qe={display:"block"},Ke=function(e){function t(e){return Object(H.a)(this,t),Object(G.a)(this,Object(L.a)(t).call(this,e))}return Object(_.a)(t,e),Object(M.a)(t,[{key:"reload",value:function(){window.location.reload()}},{key:"render",value:function(){return r.a.createElement("div",{className:"failed-screen"},r.a.createElement("div",{className:"failed-screen-block",style:{paddingLeft:"15vw",paddingRight:"15vw",textAlign:"center"}},r.a.createElement("h1",{className:"untitled-primary black"},this.props.text),null!=this.props.link?r.a.createElement(de.a,{to:this.props.link,className:"untitled-secondary gray",style:qe,onClick:this.reload},this.props.linkText):null))}}]),t}(r.a.Component);function ze(){var e=Object(U.a)(["\n  border-bottom: 1px solid #a9a9ad;\n  width: 5%;\n  margin: 0 auto;\n  margin-top: 40px;\n"]);return ze=function(){return e},e}function Xe(){var e=Object(U.a)(["\n  text-align: left;\n  width: 60%;\n  margin: 0 auto;\n  min-width: 500px;\n"]);return Xe=function(){return e},e}var $e=Object(q.a)("div")(Xe()),Je=Object(q.a)("div")(ze()),Qe=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state={triedSubmit:!1,missingFields:[]},n.handleSubmit=n.handleSubmit.bind(Object(W.a)(Object(W.a)(n))),n.updateForm=n.updateForm.bind(Object(W.a)(Object(W.a)(n))),n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.items,t={};e.forEach(function(e){var n;switch(e.type){case Ae.BOOL:n=null;break;default:n=""}t[e.id]=n}),this.setState(Object(ue.a)({},t))}},{key:"handleSubmit",value:function(){var e=this;this.setState({triedSubmit:!0});var t=this.props.onSubmit,n=this.props.items,a=[],r=!1;n.forEach(function(t){var n=e.state[t.id];!t.required||null!=n&&""!=n||(a.push(t.id),r=!0)}),r?this.setState({missingFields:a}):t(this.state)}},{key:"updateForm",value:function(e,t){var n={};n[e]=t,this.setState(function(e){return Object(ue.a)({},e,n)})}},{key:"idleForm",value:function(){var e=this,t=this.props,n=t.title,a=t.description,i=t.items;return r.a.createElement("div",{className:"apply-project-member"},r.a.createElement("div",{className:"apply-teaser"},r.a.createElement("h1",{className:"apply-teaser-header sentinel-secondary black"},n),r.a.createElement("h2",{className:"untitled-secondary gray apply-teaser-header2"},a)),r.a.createElement(Je,null),r.a.createElement($e,null,i.map(function(t,n){var a=e.state.missingFields.indexOf(t.id)>-1;return r.a.createElement(_e,{key:n,item:t,updateForm:e.updateForm,missingReqAnswer:a})}),r.a.createElement(Q,{onClick:this.handleSubmit,color:"primary",label:"Submit Application",className:"app-submit-button"})))}},{key:"creatingForm",value:function(){return r.a.createElement(We,null)}},{key:"failedForm",value:function(){return r.a.createElement(Ke,{link:"/apply",text:"Our code monkeys ditched work today. Please let us know by contacting us on Facebook.",linkText:"Refresh and try again"})}},{key:"successForm",value:function(){return r.a.createElement(Ue,{text:"Thanks for applying!"})}},{key:"render",value:function(){switch(this.props.createStatus){case N:return this.idleForm();case k:return this.creatingForm();case j:return this.failedForm();case S:return this.successForm();default:return this.idleForm()}}}]),t}(r.a.Component),Ye=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state={},n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=[{id:"name",type:Ae.SHORT_RESPONSE,title:"Name",required:!0},{id:"email",type:Ae.SHORT_RESPONSE,title:"Email",required:!1},{id:"year",type:Ae.CHECKBOX,title:"What year are you?",options:["1","2","3","4"]},{id:"interests",type:Ae.CHECKBOX,title:"What are your interests",options:["UI/UX Design","Web Development","Art","Engineering"]},{id:"meeting",type:Ae.BOOL,title:"Are you coming to our first meeting?"}];return r.a.createElement(Qe,{items:e,title:"Interest Form",description:"thanks for visiting!  Fill this out and come to our first meeting!"})}}]),t}(r.a.Component),Ve={textDecoration:"none",display:"block"},Ze=function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(L.a)(t).call(this,e))).state={},n}return Object(_.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"sentinel-primary black navbar-logo"},r.a.createElement(de.a,{className:"black",to:"/"},"Papyrus")),B.getState().user.loggedIn?r.a.createElement("div",{className:"navbar-links"},r.a.createElement(de.a,{to:"/budget",style:Ve},r.a.createElement("div",{className:"untitled-primary lightgray navbar-link"},"Budget")),r.a.createElement(de.a,{to:"/accounts",style:Ve},r.a.createElement("div",{className:"untitled-primary lightgray navbar-link"},"Account Details")),r.a.createElement(de.a,{to:"/spending",style:Ve},r.a.createElement("div",{className:"untitled-primary lightgray navbar-link"},"Transaction History")),r.a.createElement(de.a,{to:"/goals",style:Ve},r.a.createElement("div",{className:"untitled-primary lightgray navbar-link"},"Goals"))):null)}}]),t}(r.a.Component),et=Object(o.b)(function(e){return{loggedIn:e.user.loggedIn}})(Ze),tt=function(){return r.a.createElement(R.a,null,r.a.createElement("div",{className:"main-content"},r.a.createElement(et,null),r.a.createElement(I.a,{exact:!0,path:"/",component:se}),r.a.createElement(I.a,{exact:!0,path:"/goals",component:ve}),r.a.createElement(I.a,{exact:!0,path:"/budget",component:be}),r.a.createElement(I.a,{exact:!0,path:"/spending",component:ke}),r.a.createElement(I.a,{exact:!0,path:"/accounts",component:Ce}),r.a.createElement(I.a,{exact:!0,path:"/interest",component:Ye})))},nt=(n(629),document.querySelector("#root"));Object(i.render)(r.a.createElement(o.a,{store:B},r.a.createElement(c.a,{history:x},r.a.createElement("div",null,r.a.createElement(tt,null)))),nt)}},[[268,2,1]]]);
//# sourceMappingURL=main.03177b48.chunk.js.map
(this["webpackJsonpweatherman-react"]=this["webpackJsonpweatherman-react"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/weatherman.d0288ce5.png"},38:function(e,t,a){e.exports={container:"Search_container__2Iupt",input:"Search_input__1-wK5",suggestionsContainer:"Search_suggestionsContainer__3y4xs",suggestionsContainerOpen:"Search_suggestionsContainerOpen__X19wF",suggestion:"Search_suggestion__xBaXb",suggestionHighlighted:"Search_suggestionHighlighted__QJlpM"}},46:function(e,t,a){e.exports=a(82)},74:function(e,t,a){},75:function(e,t,a){},76:function(e){e.exports=JSON.parse("{}")},79:function(e){e.exports=JSON.parse("{}")},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),o=a.n(c),s=a(9),l=a(10),i=a(11),u=a(7),m=a(12),d=a(31),h=a.n(d),f=function(){return r.a.createElement("div",{id:"",className:"w-100 d-flex justify-content-center p-3"},r.a.createElement("div",{className:"mx-2 px-2"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{id:"weatherman-logo",alt:"Weather Man",style:{width:"3rem",height:"3rem"},src:h.a,className:""}))))},p=a(21),g=function(){return r.a.createElement("div",{id:"footer",className:"p-4 d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center align-items-center text-dark w-100",style:{backgroundColor:"#fafafa"}},r.a.createElement("div",{className:"footer-component text-center d-flex  w-100 w-md-25 my-2 my-md-0 justify-content-center"},r.a.createElement("a",{href:"https://github.com/dsaw/weatherman-react"},"Github")),r.a.createElement("div",{className:"footer-component text-center d-flex  w-100 w-md-50 my-2 my-md-0 justify-content-center"},"Made with\xa0",r.a.createElement("span",{title:"Heart",role:"img","aria-label":"Love"}," ",r.a.createElement(p.a,{color:"#e31b23",size:18})," "),"\xa0using\xa0",r.a.createElement("span",{title:"React",role:"img","aria-label":"React"}," ",r.a.createElement(p.b,{color:"#2acef7",size:18})," "),"\xa0by\xa0 ",r.a.createElement("a",{href:"/"}," Devesh")),r.a.createElement("div",{className:"footer-component text-center d-flex w-100 w-md-25 my-2 my-md-0 justify-content-center"},r.a.createElement("a",{href:"https://github.com/dsaw/weatherman-react/blob/master/LICENSE"},"Privacy Policy ")))},w=a(4),v=a.n(w),b=a(43),E=(a(42),a(16),a(32)),x=a.n(E),y=a(33),j=a.n(y),N=a(34),S=a.n(N),O=a(5),k=a(85),C=(a(74),function(e){var t=e.errorMessage,a=Object(n.useState)(!0),c=Object(O.a)(a,2),o=c[0],s=c[1];return o?r.a.createElement(k.a,{className:"text-center",variant:"danger",onClose:function(){return s(!1)},dismissible:!0},r.a.createElement("p",null,t||"Unfortunately, some error has occurred.")):null}),_=(a(75),function(e){e.color;var t=e.message;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"puff-one"}," "),r.a.createElement("div",{className:"puff-two"})),t?r.a.createElement("div",{className:"message text-info text-center my-1"},t):null)}),M=a(37),L=function(e){var t=e.split(",").map((function(e){return parseFloat(e)}));return{lat:t[0],lng:t[1]}},F=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.awrap(fetch("http://ip-api.com/json").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})));case 3:e=t.sent,t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),e={},console.log(t.t0);case 10:return t.prev=10,t.abrupt("return",e);case 13:case"end":return t.stop()}}),null,null,[[0,6,10,13]])},T=a(22),I=function(e){return e&&!e.detail},P=function(e){return!Object(T.isEmpty)(e)&&!Object(T.isNil)(e)};function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var R=r.a.createContext(null),q=function(e){Object(m.a)(a,e);var t=D(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updateAddress=function(e){fetch("https://www.metaweather.com/api/location/search/?lattlong=".concat(e.lat,",").concat(e.lng),{mode:"cors"}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){e.length&&(console.log(e[0]),n.updateState({address:e[0],cityName:e[0].title,latLng:L(e[0].latt_long)})),console.log(e)})).catch((function(e){console.error("There is a problem with your fetch:",e)}))},n.updateIPAddress=function(){var e,t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(F());case 2:e=a.sent,P(e)&&(t={lat:e.lat,lng:e.lon},n.updateAddress(t));case 4:case"end":return a.stop()}}),null,null,null,Promise)},n.getCurrentCoordinates=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude};n.updateAddress(t),console.log(t)}),(function(e){console.error(e),n.updateIPAddress()})):n.updateIPAddress()},n.updateState=function(e){n.setState(Object(M.a)({},e))},n.state={address:{},latLng:{},cityName:"",updateState:n.updateState},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getCurrentCoordinates()}},{key:"render",value:function(){return r.a.createElement(R.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),W=(a(76),a(38)),z=a.n(W);var A=function(e){return e.value.split(",")[0]},U=function(e,t){t.query;return t.isHighlighted?r.a.createElement("div",{style:{backgroundColor:"black",color:"white",padding:"5px 0 5px 3px"}},e.value):r.a.createElement("div",{style:{padding:"5px 0 5px 5px"}},e.value)},Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).debounceQuery=S()(a.getSuggestions,1200),a.onSuggestionSelected=function(e,t){var n=t.suggestion;t.suggestionValue,t.suggestionIndex,t.sectionIndex,t.method;console.log(n);fetch("https://www.metaweather.com/api/location/search/?lattlong=".concat(n.latLng.lat,",").concat(n.latLng.lng),{mode:"cors"}).then((function(e){if(!e.ok)throw new C("Network response was not ok");return e.json()})).then((function(e){e.length&&(console.log(a.context),e[0].title=n.value,a.context.updateState({address:e[0],cityName:e[0].tite,latLng:L(e[0].latt_long)})),console.log(e)})).catch((function(e){console.error("There is a problem with your fetch: ",e),a.setState({showLoader:!1,errorMessage:"Something went wrong, weather address list can't be fetched right now"})}))},a.onChange=function(e,t){var n=t.newValue;console.log("change:",e),a.setState({value:n})},a.onBlur=function(e,t){t.newValue;console.log("change:",e)},a.onSuggestionsFetchRequested=function(e){var t=e.value,n=e.reason;console.log("fetch requested:",n),"input-focused"!==n&&a.debounceQuery(t)},a.componentDidUpdate=function(e,t){console.log("component updated",a.items)},a.onSuggestionsClearRequested=function(){console.log("clear requested:")},a.renderSuggestionContainer=function(e){var t=e.containerProps,a=e.children,n=t.ref;Object(b.a)(t,["ref"]);return r.a.createElement(j.a,Object.assign({ref:function(e){null!==e&&n(e.component)}},t),a)},a.state={value:"",suggestions:[],showLoader:!1,errorMessage:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getSuggestions",value:function(e){var t,a,n,r,c;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=e?e.trim().toLowerCase():"",a=t.length,n=[],o.prev=3,0!==a){o.next=8;break}n=[],o.next=17;break;case 8:return this.setState({suggestions:[],showLoader:!0}),o.next=11,v.a.awrap(fetch("https://places-dsn.algolia.net/1/places/query",{method:"POST",headers:{"Content-Type":"application/json"},redirect:"follow",body:JSON.stringify({query:t,type:"city",aroundLatLngViaIP:!1,language:"en"})}));case 11:return r=o.sent,o.next=14,v.a.awrap(r.json());case 14:c=o.sent,console.log(c),c.nbHits>0&&(n=c.hits.map((function(e){var t=Array.isArray(e.locale_names)&&e.locale_names.length?e.locale_names[0]:"",a=e.administrative?e.administrative[0]:"",n=e.country||"";return{value:a?t+", "+a+", "+n:t+", "+n,id:parseInt(e.objectID.split("_")[0]),latLng:e._geoloc}})));case 17:this.setState({suggestions:n,showLoader:!1,errorMessage:n.length>0&&t.length>0?"":t.length>0?"There seems to be no results for the query entered, please try again":""}),console.log(t),o.next=24;break;case 21:o.prev=21,o.t0=o.catch(3),this.setState({suggestions:[],showLoader:!1,errorMessage:"Some error came up:"+o.t0});case 24:return o.abrupt("return",n);case 25:case"end":return o.stop()}}),null,this,[[3,21]])}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,c=(e.showLoader,e.errorMessage),o={placeholder:"Type a location",value:t,onChange:this.onChange},s=this.state.showLoader;return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,onSuggestionSelected:this.onSuggestionSelected,getSuggestionValue:A,highlightFirstSuggestion:!0,renderSuggestion:U,renderSuggestionContainer:this.renderSuggestionContainer,inputProps:o,theme:z.a}),s?r.a.createElement(n.Fragment,null,r.a.createElement(_,{message:"Loading suggestions for ".concat(t,"...")})):c?r.a.createElement(C,{errorMessage:c}):null)}}]),t}(n.Component);Y.contextType=R;var H=Y,J=function(e){return"static/img/weather/"+e+".svg"},B=".",V=function(e){return 1.8*e+32},Q=r.a.createContext({weatherUnit:"C"});function X(e){var t=e.children,a=Object(n.useState)("C"),c=Object(O.a)(a,2),o=c[0],s=c[1];return r.a.createElement(Q.Provider,{value:{weatherUnit:o,setWeatherUnit:s}},t)}var G=function(e){return Math.round(e)},K=function(e){function t(e){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getWeatherIcon",value:function(e){return"assets/icons/"+e+".svg"}},{key:"render",value:function(){var e=this.props.isSelected?"bg-dark text-white":"";return r.a.createElement("div",{className:"card d-flex flex-row flex-sm-row flex-md-column bd-highlight align-items-center justify-content-center ".concat(e),onClick:this.props.clickCallback},r.a.createElement("div",{className:"card-component mx-auto p-2 text-center"},this.props.day.substring(0,3)),r.a.createElement("div",{className:"card-component mx-auto p-2"},r.a.createElement("img",{src:"".concat(B,"/").concat(J(this.props.weatherType.abbr)),alt:this.props.weatherType.name,className:"weather-icon"})),r.a.createElement("div",{className:"card-component mx-auto d-flex flex-row p-1"},r.a.createElement("div",{className:"mx-1"},G("C"===this.context.weatherUnit?this.props.highestTemp:V(this.props.highestTemp))," ",r.a.createElement("sup",null,"o")),r.a.createElement("div",{className:"mx-1"},G("C"===this.context.weatherUnit?this.props.lowestTemp:V(this.props.lowestTemp))," ",r.a.createElement("sup",null,"o"))),r.a.createElement("div",{className:"card-component mx-auto p-2"},r.a.createElement("div",null,G(this.props.humidity)),r.a.createElement("div",null,G(this.props.speed))))}}]),t}(n.Component);K.contextType=Q;var $=K,Z=a(14),ee=a.n(Z);var te=function(e){var t=e.forecast,a=e.address,c=Object(n.useState)(""),o=Object(O.a)(c,2),s=o[0],l=o[1],i=Object(n.useState)(""),u=Object(O.a)(i,2),m=u[0],d=u[1],h=Object(n.useState)(""),f=Object(O.a)(h,2),p=f[0],g=f[1],w=Object(n.useRef)(),v=function(e){l(e?e.format("dddd, MMMM Do YYYY"):""),d(e?e.format("hh:mm:ss a"):""),w.current=e};return Object(n.useEffect)((function(){a.title&&g(a.title)}),[a]),Object(n.useEffect)((function(){if(P(t)){v(ee()().tz(t.timezone));var e=setInterval((function(){if(t.time){var e=ee.a.tz(w.current,t.timezone).add(1,"s");v(e)}}),1e3);return function(){clearInterval(e)}}}),[t]),P(t)?r.a.createElement("div",{className:"p-2",style:{fontSize:"1.5rem"}},p?r.a.createElement("p",{className:"mb-2 font-weight-bold"},p):"",s&&m?r.a.createElement(n.Fragment,null,r.a.createElement("p",{className:"mb-2"},s,r.a.createElement("span",{className:"font-weight-bold"}," | "),m)):null):null},ae=a(39),ne=function(e){var t=e.iconName;return{degrees:r.a.createElement(ae.a,{style:{fontSize:"2rem"}})}[t]},re=function(e){var t=e.iconName;return r.a.createElement("i",{className:"wi wi-wind wi-wind-towards-"+t.toLowerCase()})};var ce=function(e){var t,a=e.currentWeather,c=(e.address,Object(n.useContext)(Q)),o=c.weatherUnit,s=c.setWeatherUnit,l=function(e){s(e)};return P(a)?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"detail-container d-flex flex-row p-2 justify-content-center align-items-center"},r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("img",{src:"".concat(B,"/").concat(J(a.weather_state_abbr)),alt:a.weather_state_name,className:"img-fluid w-75 h-75 p-2"}),r.a.createElement("p",{className:"my-2 text-center text-capitalize font-medium"},a.weather_state_name||"")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{className:"h3"},Math.round("C"===o?a.the_temp:V(a.the_temp)))," ",r.a.createElement(ne,{iconName:"degrees"}),r.a.createElement("span",{className:"font-weight-light",style:{fontSize:"1.5rem"}},r.a.createElement("span",{className:"cursor-pointer ".concat("C"===o?"font-weight-normal border-light":"opacity-75"),onClick:function(){return l("C")}},"C"),"  \xa0|\xa0",r.a.createElement("span",{className:"cursor-pointer ".concat("F"===o?"font-weight-normal border-light":"opacity-75"),onClick:function(){return l("F")}},"F"))),r.a.createElement("p",null,r.a.createElement("span",{className:"font-weight-normal"},ee()(a.applicable_date,"YYYY-MM-DD").format("MMM Do")||"")))),r.a.createElement("div",{className:"detail-container d-flex flex-column justify-content-center align-items-center p-2"},r.a.createElement("div",{className:"ml-sm-3 ml-md-3 ml-lg-3"},a.precipitation?r.a.createElement("div",{className:"my-1"},r.a.createElement("p",{className:"mb-2"},r.a.createElement("span",{className:"font-weight-bold"},"Precipitation:")," ",a.precipitation||"")):null,a.humidity?r.a.createElement("div",{className:"my-1"},r.a.createElement("p",{className:"mb-2"},r.a.createElement("span",{className:"font-weight-bold"},"Humidity:")," ",a.humidity||""," %")):null,a.wind_speed?r.a.createElement("div",{className:"my-1"},r.a.createElement("p",{className:"mb-2"},r.a.createElement("span",{className:"font-weight-bold"},"Wind speed:")," ","C"===o?(t=a.wind_speed,.45*t).toFixed(2)+" mps":a.wind_speed.toFixed(2)+" mph","\xa0",r.a.createElement(re,{iconName:a.wind_direction_compass})," ")):null))):null},oe=function(e){return P(e.forecast)?e.forecast.map((function(t,a){var n,c={abbr:t.weather_state_abbr,name:t.weather_state_name};return r.a.createElement($,{isSelected:e.selectedIndex===a,day:(n=t.applicable_date,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(n).getDay()]),highestTemp:t.max_temp,lowestTemp:t.min_temp,weatherType:c,humidity:t.humidity,speed:t.wind_speed,clickCallback:function(){e.clickCallback(a)}})})):null},se=function(e){var t,a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if([],n.prev=1,!e.address.woeid){n.next=9;break}return a="".concat("https://weather-react-api.now.sh","location/").concat(e.address.woeid,"/"),{},n.next=7,v.a.awrap(fetch(a).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})));case 7:t=n.sent,t.consolidated_weather;case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:return n.abrupt("return",t);case 15:case"end":return n.stop()}}),null,null,[[1,11]])},le=(a(79),a(80),function(){var e,t=Object(n.useContext)(R),a=Object(n.useState)({}),c=Object(O.a)(a,2),o=c[0],s=c[1],l=Object(n.useState)([{}]),i=Object(O.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(!1),h=Object(O.a)(d,2),f=h[0],p=h[1],g=Object(n.useState)(!1),w=Object(O.a)(g,2),b=w[0],E=w[1],x=Object(n.useState)(!1),y=Object(O.a)(x,2),j=y[0],N=y[1],S=Object(n.useState)(0),k=Object(O.a)(S,2),M=k[0],L=k[1];return Object(n.useEffect)((function(){t.latLng&&function(){var e;v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,p(!0),a.next=4,v.a.awrap(se(t));case 4:e=a.sent,I(e)&&(N(!0),s(e),m(e.consolidated_weather),L(0),E(!1)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),E(!0),console.log(a.t0);case 12:return a.prev=12,p(!1),a.finish(12);case 15:case"end":return a.stop()}}),null,null,[[0,8,12,15]])}()}),[t.latLng]),f?r.a.createElement(n.Fragment,null," ",r.a.createElement(_,{message:(e=t.cityName,e?"Loading weather forecast for ".concat(t.cityName,"..."):"Loading weather forecast...")})):b?r.a.createElement(C,{errorMessage:"Something went wrong, weather can't be fetched right now"}):j?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"forecast-container p-3 mx-auto"},r.a.createElement("div",{className:"d-flex flex-row justify-content-md-space-between"},r.a.createElement(te,{forecast:o,address:t.address})),r.a.createElement("div",{className:"d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-between"},r.a.createElement(ce,{currentWeather:u[M]}," ")," "),r.a.createElement("div",{className:"d-flex flex-column flex-sm-column flex-md-row flex-lg-row"},r.a.createElement(oe,{selectedIndex:M,forecast:u,clickCallback:function(e){L(e)}}))),r.a.createElement("div",{id:"poweredBy",className:"mx-auto text-center text-dark"},"Powered by\xa0",r.a.createElement("a",{href:"https://www.metaweather.com/api/",target:"_blank",rel:"noreferrer noopener",class:""},"MetaWeather"))):null}),ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement(C,{errorMessage:"Something went wrong.. :-/"})):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(n.Component),ue=(a(81),a(84)),me=function(e){function t(e){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ue.a,{id:"header"},r.a.createElement(f,null)),r.a.createElement(q,null,r.a.createElement(ie,null,r.a.createElement("div",{className:"mw-100 w-50 mx-auto d-flex flex-column align-items-center",style:{minWidth:"10rem"}},r.a.createElement(H,null))),r.a.createElement(ue.a,{id:"content"},r.a.createElement(X,null,r.a.createElement(ie,null,r.a.createElement(le,null))))),r.a.createElement(ue.a,null,r.a.createElement("div",{className:"my-4 p-2"})),r.a.createElement(ue.a,{id:"footer"},r.a.createElement(g,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.2efc5014.chunk.js.map
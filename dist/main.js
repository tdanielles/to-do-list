(()=>{"use strict";const t=t=>{const e=t.target.matches("[data-dropdown-button]");if(!e&&null!=t.target.closest("[data-dropdown]"))return;let n;e&&(function(t){const e=t.target.closest(".editContainer");if(null!=t.target.closest(".tile")){const t=document.getElementById("projectOption");t.classList.remove("hidden"),e.appendChild(t)}else if(null!=t.target.closest("li")){const t=document.getElementById("listOption");t.classList.remove("hidden"),e.appendChild(t)}}(t),n=t.target.closest("[data-dropdown]"),setTimeout((function(){n.classList.toggle("active")}),0)),document.querySelectorAll("[data-dropdown].active").forEach((t=>{t!==n&&t.classList.remove("active")}))},e=t=>{let e=t.target.parentNode.parentNode,u=e.parentNode;n(e),!0===r()&&(a(),i()),function(t){const e=t.parentNode,n=document.getElementById("renameForm");let r=t.querySelector(".projectName").textContent;n.querySelector("input").value=r,e.insertBefore(n,t)}(u),o(),document.getElementById("projectRenameInput").focus(),u.classList.add("hidden")},n=t=>{t.classList.remove("active")},r=()=>!document.querySelector("#renameForm").classList.contains("hidden");function a(){const t=document.getElementById("renameForm"),e=document.querySelector(".project");t.classList.add("hidden"),e.appendChild(t)}const o=()=>{const t=document.querySelector("#renameForm");setTimeout((function(){t.classList.remove("hidden")}),0)},i=()=>{document.querySelector("div.hidden").classList.remove("hidden")},u=t=>{let e=t.target.closest(".tile"),n=e.dataset.project;if(e.classList.contains("selected")){const t=document.querySelector("#today"),e=t.querySelector("[data-name]");t.classList.add("selected"),Bt(e)}s(),e.remove(),c(),At.splice(n,1),Rt()};function c(){let t=0;document.querySelectorAll(".project .tile").forEach((e=>{let n=e.dataset.project;e.dataset.project=t,At[n].dataProject=t,t++})),At.sort(((t,e)=>t.dataProject-e.dataProject)),Rt()}function s(){const t=document.querySelector("#projectOption");t.classList.add("hidden"),document.querySelector(".project").appendChild(t);const e=document.querySelector("#listOption");e.classList.add("hidden"),document.querySelector(".list-todo").appendChild(e)}function d(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function l(t){return d(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function m(t){d(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function f(t){if(d(1,arguments),!l(t)&&"number"!=typeof t)return!1;var e=m(t);return!isNaN(Number(e))}var h={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function g(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var p,v={date:g({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:g({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:g({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},w={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function b(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?T(c,(function(t){return t.test(u)})):C(c,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(u.length);return{value:i,rest:d}}}function C(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function T(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const S={code:"en-US",formatDistance:function(t,e,n){var r,a=h[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:v,formatRelative:function(t,e,n,r){return w[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(p={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(p.matchPattern);if(!n)return null;var r=n[0],a=t.match(p.parsePattern);if(!a)return null;var o=p.valueCallback?p.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:b({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:b({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:b({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:b({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function D(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function L(t,e){d(2,arguments);var n=m(t).getTime(),r=D(e);return new Date(n+r)}function E(t,e){d(2,arguments);var n=D(e);return L(t,-n)}var q=864e5;function k(t){d(1,arguments);var e=1,n=m(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function N(t){d(1,arguments);var e=m(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=k(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=k(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function M(t){d(1,arguments);var e=N(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=k(n);return r}var x=6048e5;function j(t,e){d(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:D(a),i=null==n.weekStartsOn?o:D(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=m(t),c=u.getUTCDay(),s=(c<i?7:0)+c-i;return u.setUTCDate(u.getUTCDate()-s),u.setUTCHours(0,0,0,0),u}function P(t,e){d(1,arguments);var n=m(t),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:D(i),c=null==a.firstWeekContainsDate?u:D(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var s=new Date(0);s.setUTCFullYear(r+1,0,c),s.setUTCHours(0,0,0,0);var l=j(s,e),f=new Date(0);f.setUTCFullYear(r,0,c),f.setUTCHours(0,0,0,0);var h=j(f,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function U(t,e){d(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:D(a),i=null==n.firstWeekContainsDate?o:D(n.firstWeekContainsDate),u=P(t,e),c=new Date(0);c.setUTCFullYear(u,0,i),c.setUTCHours(0,0,0,0);var s=j(c,e);return s}var I=6048e5;function Y(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const W=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Y("yy"===e?r%100:r,e.length)},B=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Y(n+1,2)},F=function(t,e){return Y(t.getUTCDate(),e.length)},O=function(t,e){return Y(t.getUTCHours()%12||12,e.length)},H=function(t,e){return Y(t.getUTCHours(),e.length)},A=function(t,e){return Y(t.getUTCMinutes(),e.length)},z=function(t,e){return Y(t.getUTCSeconds(),e.length)},R=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Y(Math.floor(r*Math.pow(10,n-3)),e.length)};function Q(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+Y(o,2)}function G(t,e){return t%60==0?(t>0?"-":"+")+Y(Math.abs(t)/60,2):X(t,e)}function X(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+Y(Math.floor(a/60),2)+n+Y(a%60,2)}const J={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return W(t,e)},Y:function(t,e,n,r){var a=P(t,r),o=a>0?a:1-a;return"YY"===e?Y(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):Y(o,e.length)},R:function(t,e){return Y(N(t),e.length)},u:function(t,e){return Y(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return B(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){d(1,arguments);var n=m(t),r=j(n,e).getTime()-U(n,e).getTime();return Math.round(r/I)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Y(a,e.length)},I:function(t,e,n){var r=function(t){d(1,arguments);var e=m(t),n=k(e).getTime()-M(e).getTime();return Math.round(n/x)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Y(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):F(t,e)},D:function(t,e,n){var r=function(t){d(1,arguments);var e=m(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/q)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Y(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Y(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Y(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Y(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return O(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Y(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Y(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):A(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):z(t,e)},S:function(t,e){return R(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return G(a);case"XXXX":case"XX":return X(a);default:return X(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return G(a);case"xxxx":case"xx":return X(a);default:return X(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(a,":");default:return"GMT"+X(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(a,":");default:return"GMT"+X(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return Y(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return Y((r._originalDate||t).getTime(),e.length)}};function _(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function $(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var Z={p:$,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return _(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",_(a,e)).replace("{{time}}",$(o,e))}};const V=Z;function K(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var tt=["D","DD"],et=["YY","YYYY"];function nt(t){return-1!==tt.indexOf(t)}function rt(t){return-1!==et.indexOf(t)}function at(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,it=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ut=/^'([^]*?)'?$/,ct=/''/g,st=/[a-zA-Z]/;function dt(t){return t.match(ut)[1].replace(ct,"'")}Math.pow(10,8);var lt=36e5,mt={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ft=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ht=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,gt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function pt(t){var e,n={},r=t.split(mt.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],mt.timeZoneDelimiter.test(n.date)&&(n.date=t.split(mt.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=mt.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function vt(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}function wt(t,e){if(null===e)return new Date(NaN);var n=t.match(ft);if(!n)return new Date(NaN);var r=!!n[4],a=yt(n[1]),o=yt(n[2])-1,i=yt(n[3]),u=yt(n[4]),c=yt(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,c)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,c):new Date(NaN);var s=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(St[e]||(Dt(t)?29:28))}(e,o,i)&&function(t,e){return e>=1&&e<=(Dt(t)?366:365)}(e,a)?(s.setUTCFullYear(e,o,Math.max(a,i)),s):new Date(NaN)}function yt(t){return t?parseInt(t):1}function bt(t){var e=t.match(ht);if(!e)return NaN;var n=Ct(e[1]),r=Ct(e[2]),a=Ct(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*lt+6e4*r+1e3*a:NaN}function Ct(t){return t&&parseFloat(t.replace(",","."))||0}function Tt(t){if("Z"===t)return 0;var e=t.match(gt);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*lt+6e4*a):NaN}var St=[31,null,31,30,31,30,31,31,30,31,30,31];function Dt(t){return t%400==0||t%4==0&&t%100!=0}function Lt(t){t.matches("#allTasks")?qt():t.matches("#today")?function(){Et();let t=Date.parse(function(t,e,n){d(2,arguments);var r=String(e),a=n||{},o=a.locale||S,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:D(i),c=null==a.firstWeekContainsDate?u:D(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var s=o.options&&o.options.weekStartsOn,l=null==s?0:D(s),h=null==a.weekStartsOn?l:D(a.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=m(t);if(!f(g))throw new RangeError("Invalid time value");var p=K(g),v=E(g,p),w={firstWeekContainsDate:c,weekStartsOn:h,locale:o,_originalDate:g};return r.match(it).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,V[e])(t,o.formatLong,w):t})).join("").match(ot).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return dt(n);var i=J[r];if(i)return!a.useAdditionalWeekYearTokens&&rt(n)&&at(n,e,t),!a.useAdditionalDayOfYearTokens&&nt(n)&&at(n,e,t),i(v,n,o.localize,w);if(r.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date,"yyyy-MM-dd"));At.forEach((e=>{e.taskList.forEach((e=>{(function(t,e){d(2,arguments);var n=m(t),r=m(e);return n.getTime()===r.getTime()})(Date.parse(e.date),t)&&Wt(e.id,e.title,e.details,e.date,e.completed,e.important)}))})),kt()}():t.matches("#thisWeek")?(Et(),At.forEach((t=>{t.taskList.forEach((t=>{let e=function(t,e){d(1,arguments);var n=e||{},r=null==n.additionalDigits?2:D(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,o=pt(t);if(o.date){var i=vt(o.date,r);a=wt(i.restDateString,i.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var u,c=a.getTime(),s=0;if(o.time&&(s=bt(o.time),isNaN(s)))return new Date(NaN);if(!o.timezone){var l=new Date(c+s),m=new Date(0);return m.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),m.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),m}return u=Tt(o.timezone),isNaN(u)?new Date(NaN):new Date(c+s+u)}(t.date);(function(t){let e=function(t,e){d(2,arguments);var n=m(t),r=D(e);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}(new Date,8);return function(t,e){d(2,arguments);var n=m(t).getTime(),r=m(e.start).getTime(),a=m(e.end).getTime();if(!(r<=a))throw new RangeError("Invalid interval");return n>=r&&n<=a}(t,{start:new Date,end:e})})(e)&&Wt(t.id,t.title,t.details,t.date,t.completed,t.important)}))})),kt()):t.matches("#important")&&(Et(),At.forEach((t=>{t.taskList.forEach((t=>{t.important&&Wt(t.id,t.title,t.details,t.date,t.completed,t.important)}))})),kt())}function Et(){document.querySelector("ul").textContent=""}function qt(){Et(),At.forEach((t=>{t.taskList.forEach((t=>{Wt(t.id,t.title,t.details,t.date,t.completed,t.important)}))})),Zt(),kt()}function kt(){""===document.querySelector("ul").textContent&&function(){const t=document.querySelector("ul"),e=document.createElement("div");e.classList.add("noTask"),e.textContent="Yay! No to-do's yet :)",t.appendChild(e)}()}function Nt(t){return At.reduce(((e,n)=>{let r=n.taskList.find((e=>e.id==t));return null!=r&&(e=r),e}),{})}function Mt(t){const e=document.querySelector(".selected");if(null!=e.closest(".project"))Yt(t);else{if(null==e.closest(".home"))return;Lt(e)}}function xt(){const t=document.querySelector("#editListForm"),e=document.querySelector(".list-todo");t.classList.add("hidden"),e.appendChild(t)}function jt(){document.querySelector("li.hidden").classList.remove("hidden")}const Pt=()=>{const t=document.querySelector("#listForm"),e=document.querySelector("#listInput"),n=document.querySelector("#listInputDetail"),r=document.querySelector("#listInputDate");e.value="",n.value="",r.value="",t.classList.add("hidden")};let Ut=Number(localStorage.getItem("currentId"))||0;function It(t){let e;return e=t||"No Due Date",e}function Yt(t){document.querySelector("ul").textContent="",At[t].taskList.forEach((t=>{Wt(t.id,t.title,t.details,t.date,t.completed,t.important)}))}function Wt(t,e,n,r,a,o){const i=document.querySelector("ul"),u=document.createElement("li");u.id=t,i.appendChild(u);const c=document.createElement("div");c.classList.add("unchecked"),u.appendChild(c);const s=document.createElement("div");s.classList.add("list-details"),u.appendChild(s),a&&(c.classList.toggle("checked"),s.classList.toggle("lineThrough"),s.classList.toggle("fade"));const d=document.createElement("div");d.classList.add("taskTitle"),d.textContent=e,s.appendChild(d);const l=document.createElement("div");l.classList.add("taskDetails"),l.textContent=n,s.appendChild(l);const m=document.createElement("div");m.classList.add("date"),m.textContent=r,u.appendChild(m);const f=document.createElement("div");f.classList.add("list-right"),u.appendChild(f);const h=_t("star_outline");h.classList.add("star-outline"),f.appendChild(h);const g=_t("star");g.classList.add("important"),f.appendChild(g),o?h.classList.add("listHidden"):g.classList.add("listHidden");const p=document.createElement("div");p.dataset.dropdown="",p.classList.add("editContainer"),f.appendChild(p);const v=_t("more_vert");v.dataset.dropdownButton="",p.appendChild(v)}function Bt(t){document.querySelector(".title").textContent=t.textContent}function Ft(t){t.target.matches("[data-drag]")&&(t.target.parentNode.draggable=!0)}function Ot(t){t.addEventListener("dragstart",(()=>{t.classList.add("dragging")})),t.addEventListener("dragend",(()=>{t.classList.remove("dragging"),t.draggable=!1,c(),console.log(At)}))}function Ht(t){t.preventDefault();const e=document.querySelector(".project"),n=document.querySelector(".dragging"),r=document.querySelector("#projectForm"),a=(o=t.clientY,[...document.querySelectorAll(".project .tile:not(.dragging)")].reduce(((t,e)=>{const n=e.getBoundingClientRect(),r=o-n.top-n.height/2;return r<0&&r>t.offset?{offset:r,element:e}:t}),{offset:Number.NEGATIVE_INFINITY}).element);var o;null==a?e.insertBefore(n,r):e.insertBefore(n,a)}let At=localStorage.getItem("myProjectList");At=JSON.parse(At||JSON.stringify([]));const zt=t=>{let e=document.getElementById("projectInput").value,n=$t();const r=Qt(n,e);At.push(r),Rt(),Jt(n,e),Xt(),t.preventDefault()};function Rt(){localStorage.setItem("myProjectList",JSON.stringify(At)),localStorage.setItem("currentId",Ut.toString())}const Qt=(t,e)=>{const n=[];return{dataProject:t,name:e,taskList:n,taskNum:n.length}},Gt=()=>{document.querySelector("#projectForm").classList.remove("hidden"),document.getElementById("projectInput").focus()},Xt=()=>{const t=document.querySelector("#projectForm");document.querySelector("#projectInput").value="",t.classList.add("hidden")},Jt=(t,e)=>{const n=document.querySelector(".project"),r=document.querySelector("#projectForm"),a=document.createElement("div");a.setAttribute("data-project",`${t}`),a.classList.add("tile"),n.insertBefore(a,r);const o=_t("menu");o.setAttribute("data-drag",""),a.appendChild(o);const i=document.createElement("div");i.classList.add("projectInfo"),a.appendChild(i);const u=document.createElement("div");u.classList.add("projectName"),u.textContent=e,i.appendChild(u);const c=document.createElement("div");c.classList.add("editContainer"),c.setAttribute("data-dropdown",""),a.appendChild(c);const s=_t("more_vert");s.setAttribute("data-dropdown-button",""),c.appendChild(s),Ot(a)},_t=t=>{const e=document.createElement("span");return e.classList.add("material-icons-round"),e.textContent=t,e},$t=()=>document.querySelectorAll("[data-project]").length;function Zt(){document.getElementById("addList").classList.add("hidden")}function Vt(t){let e=t.target.closest(".home .tile"),n=t.target.closest(".project .tile");if(null!=e){const t=e.querySelector("[data-name]");Kt(e),s(),Lt(e),Bt(t),Zt()}else{if(null==n)return;{const t=n.querySelector(".projectName");let e=n.dataset.project;xt(),s(),Yt(e),Kt(n),Bt(t),document.getElementById("addList").classList.remove("hidden")}}}const Kt=t=>{document.querySelector(".selected").classList.remove("selected"),t.classList.add("selected")};document.querySelector("#addList").addEventListener("click",(()=>{document.querySelector("#listForm").classList.remove("hidden"),document.getElementById("listInput").focus()})),document.querySelector("#listCancelBtn").addEventListener("click",Pt),document.getElementById("listForm").addEventListener("submit",(function(t){let e=document.getElementById("listInput").value,n=document.getElementById("listInputDetail").value,r=document.getElementById("listInputDate").value,a=document.querySelector(".selected").dataset.project,o=It(r),i=Ut;const u=((t,e,n,r,a,o,i)=>({dataProject:t,id:e,title:n,details:r,completed:!1,important:!1,date:i}))(a,i,e,n,0,0,o);At[a].taskList.push(u),Ut++,Rt(),Wt(i,e,n,o),Pt(),t.preventDefault()})),document.querySelector(".list-todo").addEventListener("click",(function(t){let e=t.target.matches(".star-outline"),r=t.target.matches(".unchecked"),a=t.target.matches("#editTaskSubmitBtn"),o=t.target.matches("#editTaskCancelBtn"),i=t.target.matches("#listDelete"),u=t.target.matches("#listEdit");if(e)!function(t){t.target.classList.toggle("listHidden"),t.target.nextElementSibling.classList.toggle("listHidden")}(t),function(t){let e=Nt(t.target.closest("li").id);e.important=!e.important,Rt(),s(),Mt(e.dataProject)}(t);else if(r)!function(t){let e=t.target,n=t.target.closest("li").querySelector(".list-details");n.classList.toggle("lineThrough"),n.classList.toggle("fade"),e.classList.toggle("checked")}(t),function(t){let e=Nt(t.target.closest("li").id);e.completed=!e.completed,Rt()}(t);else if(i)!function(t){let e=t.target.closest("li"),n=Nt(e.id),r=n.dataProject;At[r].taskList=At[r].taskList.filter((t=>t!=n)),Rt(),s(),e.remove()}(t);else if(u)!function(t){let e=t.target.parentNode.parentNode;n(e),function(t){let e=t.target.closest("li"),n=e.parentNode;const r=document.getElementById("editListForm"),a=e.querySelector(".taskTitle").textContent,o=e.querySelector(".taskDetails").textContent,i=e.querySelector(".date").textContent,u=r.querySelector("#editListTitle"),c=r.querySelector("#editListInputDetail"),s=r.querySelector("#editListInputDate");u.value=a,c.value=o,s.value=i,e.classList.add("hidden"),r.classList.remove("hidden"),n.insertBefore(r,e)}(t),document.getElementById("editListTitle").focus()}(t);else if(a)!function(t){let e=document.querySelector("#editListTitle").value,n=document.querySelector("#editListInputDetail").value,r=document.querySelector("#editListInputDate").value,a=Nt(document.querySelector("li.hidden").id);a.title=e,a.details=n,a.date=It(r),Rt(),xt(),s(),jt(),Mt(a.dataProject),t.preventDefault()}(t);else{if(!o)return;xt(),jt()}})),document.getElementById("projectCancelBtn").addEventListener("click",Xt),document.getElementById("addProject").addEventListener("click",Gt),document.getElementById("projectForm").addEventListener("submit",zt),document.getElementById("leftPanel").addEventListener("click",Vt),At.forEach((t=>{Jt(t.dataProject,t.name)})),function(){document.addEventListener("click",t);const n=document.querySelector(".project .option");n.firstElementChild.addEventListener("click",e),n.lastElementChild.addEventListener("click",u),document.querySelector(".rename-rename-btn").addEventListener("click",(function(t){(t=>{const e=document.querySelector(".project .tile.hidden");let n=document.getElementById("projectRenameInput").value;const r=e.querySelector(".projectName");r.textContent=n;let o=e.dataset.project;At[o].name=n,Rt(),i(),Bt(r),a()})(),t.preventDefault()})),document.querySelector(".rename-cancel-btn").addEventListener("click",(function(){a(),i()}))}(),function(){const t=document.querySelector(".project");t.addEventListener("mousedown",Ft),document.querySelectorAll(".project .tile").forEach((t=>{Ot(t)})),t.addEventListener("dragover",Ht)}(),qt(),document.querySelector(".hidden-menu").addEventListener("click",(()=>{document.getElementById("leftPanel").classList.toggle("hidden")}))})();
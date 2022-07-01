(()=>{"use strict";const e=(()=>{const e=document.getElementById("errorbox");return{getAPIData:async function(t){try{e.innerText="";const r=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=1&appid=8c958c34c399d529ae6bb1e94b934485`,{mode:"cors"}),a=await r.json(),i=[a[0].lat,a[0].lon],o=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${i[0]}&lon=${i[1]}&appid=8c958c34c399d529ae6bb1e94b934485`);return{temperature:(n=await o.json()).main.temp,feelslike:n.main.feels_like,airhumidity:n.main.humidity,wind:n.wind.speed,weatherdescription:n.weather[0].description,countryname:n.sys.country,cityname:n.name}}catch(n){return function(t){e.innerText=""===t?"Please enter a location":"Oops! Location could not be found"}(t),console.log(n),null}var n}}})(),t=async function(e){try{const t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=1&appid=8c958c34c399d529ae6bb1e94b934485`,{mode:"cors"}),n=await t.json(),r=[n[0].lat,n[0].lon],a=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${r[0]}&lon=${r[1]}&appid=8c958c34c399d529ae6bb1e94b934485`);return function(e){const t=[],n=[],r=[],a=[],i=[],o=[];return e.list.forEach((e=>{t.push(e.main.temp),n.push(e.main.feels_like),r.push(e.main.humidity),a.push(e.wind.speed),i.push(e.weather[0].description),o.push(e.pop)})),{temperature:t,feelslike:n,airhumidity:r,wind:a,weatherdescription:i,rainperc:o}}(await a.json())}catch(e){return console.log(e),null}};function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){return n(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function a(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e){if(n(1,arguments),!r(e)&&"number"!=typeof e)return!1;var t=a(e);return!isNaN(Number(t))}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var s,c={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,u=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?f(s,(function(e){return e.test(u)})):m(s,(function(e){return e.test(u)}));o=e.valueCallback?e.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=t.slice(u.length);return{value:o,rest:d}}}function m(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function f(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const g={code:"en-US",formatDistance:function(e,t,n){var r,a=o[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(e,t,n,r){return d[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(s={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(s.matchPattern);if(!n)return null;var r=n[0],a=e.match(s.parsePattern);if(!a)return null;var i=s.valueCallback?s.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;var o=e.slice(r.length);return{value:i,rest:o}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e,t){n(2,arguments);var r=a(e).getTime(),i=w(t);return new Date(r+i)}function p(e,t){n(2,arguments);var r=w(t);return y(e,-r)}var v=864e5;function b(e){n(1,arguments);var t=1,r=a(e),i=r.getUTCDay(),o=(i<t?7:0)+i-t;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function T(e){n(1,arguments);var t=a(e),r=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=b(i),u=new Date(0);u.setUTCFullYear(r,0,4),u.setUTCHours(0,0,0,0);var s=b(u);return t.getTime()>=o.getTime()?r+1:t.getTime()>=s.getTime()?r:r-1}function C(e){n(1,arguments);var t=T(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var a=b(r);return a}var x=6048e5;function M(e,t){n(1,arguments);var r=t||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:w(o),s=null==r.weekStartsOn?u:w(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(e),d=c.getUTCDay(),l=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function D(e,t){n(1,arguments);var r=a(e),i=r.getUTCFullYear(),o=t||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:w(s),d=null==o.firstWeekContainsDate?c:w(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var h=M(l,t),m=new Date(0);m.setUTCFullYear(i,0,d),m.setUTCHours(0,0,0,0);var f=M(m,t);return r.getTime()>=h.getTime()?i+1:r.getTime()>=f.getTime()?i:i-1}function E(e,t){n(1,arguments);var r=t||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:w(i),u=null==r.firstWeekContainsDate?o:w(r.firstWeekContainsDate),s=D(e,t),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=M(c,t);return d}var k=6048e5;function P(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const U=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return P("yy"===t?r%100:r,t.length)},S=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):P(n+1,2)},W=function(e,t){return P(e.getUTCDate(),t.length)},Y=function(e,t){return P(e.getUTCHours()%12||12,t.length)},L=function(e,t){return P(e.getUTCHours(),t.length)},N=function(e,t){return P(e.getUTCMinutes(),t.length)},B=function(e,t){return P(e.getUTCSeconds(),t.length)},O=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return P(Math.floor(r*Math.pow(10,n-3)),t.length)};function q(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+P(i,2)}function H(e,t){return e%60==0?(e>0?"-":"+")+P(Math.abs(e)/60,2):F(e,t)}function F(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+P(Math.floor(a/60),2)+n+P(a%60,2)}const I={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return U(e,t)},Y:function(e,t,n,r){var a=D(e,r),i=a>0?a:1-a;return"YY"===t?P(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):P(i,t.length)},R:function(e,t){return P(T(e),t.length)},u:function(e,t){return P(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return P(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return P(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return S(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return P(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,r,i){var o=function(e,t){n(1,arguments);var r=a(e),i=M(r,t).getTime()-E(r,t).getTime();return Math.round(i/k)+1}(e,i);return"wo"===t?r.ordinalNumber(o,{unit:"week"}):P(o,t.length)},I:function(e,t,r){var i=function(e){n(1,arguments);var t=a(e),r=b(t).getTime()-C(t).getTime();return Math.round(r/x)+1}(e);return"Io"===t?r.ordinalNumber(i,{unit:"week"}):P(i,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):W(e,t)},D:function(e,t,r){var i=function(e){n(1,arguments);var t=a(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),o=r-i;return Math.floor(o/v)+1}(e);return"Do"===t?r.ordinalNumber(i,{unit:"dayOfYear"}):P(i,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return P(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return P(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return P(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Y(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):L(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):P(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):P(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):N(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):B(e,t)},S:function(e,t){return O(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return H(a);case"XXXX":case"XX":return F(a);default:return F(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return H(a);case"xxxx":case"xx":return F(a);default:return F(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(a,":");default:return"GMT"+F(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(a,":");default:return"GMT"+F(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return P(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return P((r._originalDate||e).getTime(),t.length)}};function j(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function A(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var z={p:A,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return j(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",j(a,t)).replace("{{time}}",A(i,t))}};const $=z;function Q(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var G=["D","DD"],X=["YY","YYYY"];function R(e){return-1!==G.indexOf(e)}function J(e){return-1!==X.indexOf(e)}function _(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,ee=/''/g,te=/[a-zA-Z]/;function ne(e,t,r){n(2,arguments);var o=String(t),u=r||{},s=u.locale||g,c=s.options&&s.options.firstWeekContainsDate,d=null==c?1:w(c),l=null==u.firstWeekContainsDate?d:w(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=s.options&&s.options.weekStartsOn,m=null==h?0:w(h),f=null==u.weekStartsOn?m:w(u.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var y=a(e);if(!i(y))throw new RangeError("Invalid time value");var v=Q(y),b=p(y,v),T={firstWeekContainsDate:l,weekStartsOn:f,locale:s,_originalDate:y},C=o.match(K).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,$[t])(e,s.formatLong,T):e})).join("").match(V).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return re(n);var a=I[r];if(a)return!u.useAdditionalWeekYearTokens&&J(n)&&_(n,t,e),!u.useAdditionalDayOfYearTokens&&R(n)&&_(n,t,e),a(b,n,s.localize,T);if(r.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return C}function re(e){return e.match(Z)[1].replace(ee,"'")}const ae=e=>{const t=document.getElementById("currenttime"),n=document.getElementById("city"),r=document.getElementById("description"),a=document.getElementById("temp"),i=document.getElementById("feelslike"),o=document.getElementById("humidity"),u=document.getElementById("wind"),s=document.getElementById("descriptionimg"),c=ne(new Date,"PPPPp");t.innerText=c,n.innerText=`${e.cityname}, ${e.countryname}`||"Montreal",r.innerText=e.weatherdescription.charAt(0).toUpperCase()+e.weatherdescription.slice(1),a.innerText=`${(e.temperature-273.15).toFixed(0)} °C`,i.innerText=`${(e.feelslike-273.15).toFixed(0)} °C`,o.innerText=`${e.airhumidity} %`,u.innerText=`${e.wind} m/s`,"scattered clouds"===e.weatherdescription||"few clouds"===e.weatherdescription?s.src="icons/partlycloudy.svg":"broken clouds"===e.weatherdescription||"overcast clouds"===e.weatherdescription?s.src="icons/cloudy.svg":"clear sky"===e.weatherdescription?s.src="icons/sunny.svg":"light rain"===e.weatherdescription?s.src="icons/rainy.svg":"moderate rain"!==e.weatherdescription&&"heavy intensity rain"!==e.weatherdescription||(s.src="icons/pouring.svg")};var ie=36e5;function oe(e,t){n(2,arguments);var r=w(t);return y(e,r*ie)}function ue(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only none provided present");var n=t&&"nearestTo"in t?w(t.nearestTo):1;if(n<1||n>30)throw new RangeError("`options.nearestTo` must be between 1 and 30");var r=a(e),i=r.getSeconds(),o=r.getMinutes()+i/60,u=Math.floor(o/n)*n,s=o%n,c=Math.round(s/n)*n;return new Date(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),u+c)}const se=e=>{const t=document.getElementById("dailytimebox"),n=document.getElementById("dailydescriptionbox"),r=document.getElementById("dailyimgbox"),a=document.getElementById("dailytempbox"),i=document.getElementById("dailyfeelslikebox"),o=document.getElementById("dailyrainpercbox"),u=document.getElementById("dailyhumiditybox"),s=document.getElementById("dailywindbox");let c=new Date;t.innerHTML="",n.innerHTML="",r.innerHTML="",a.innerHTML="",i.innerHTML="",o.innerHTML="",u.innerHTML="",s.innerHTML="";for(let e=0;e<40;e+=1){const e=document.createElement("div");c=oe(c,3);const n=ne(ue(c,{nearestTo:30}),"eeee p");e.innerText=n,e.classList.add("singleweatherbox"),t.appendChild(e)}e.weatherdescription.forEach((e=>{const t=document.createElement("div");t.innerText=e.charAt(0).toUpperCase()+e.slice(1),t.classList.add("singleweatherbox"),t.style.fontWeight="700";const a=document.createElement("img");"scattered clouds"===e||"few clouds"===e?a.src="icons/partlycloudy.svg":"broken clouds"===e||"overcast clouds"===e?a.src="icons/cloudy.svg":"clear sky"===e?a.src="icons/sunny.svg":"light rain"===e?a.src="icons/rainy.svg":"moderate rain"!==e&&"heavy intensity rain"!==e||(a.src="icons/pouring.svg"),a.classList.add("dailyimg"),a.classList.add("singleweatherbox"),n.appendChild(t),r.appendChild(a)})),e.temperature.forEach((e=>{const t=document.createElement("div");t.innerText=`${(e-273.15).toFixed(0)} °C`,t.classList.add("singleweatherbox"),a.appendChild(t)})),e.feelslike.forEach((e=>{const t=document.createElement("div");t.innerText=`${(e-273.15).toFixed(0)} °C`,t.classList.add("singleweatherbox"),i.appendChild(t)})),e.rainperc.forEach((e=>{const t=document.createElement("div");t.innerText=100*e+" %",t.classList.add("singleweatherbox"),o.appendChild(t)})),e.airhumidity.forEach((e=>{const t=document.createElement("div");t.innerText=`${e} %`,t.classList.add("singleweatherbox"),u.appendChild(t)})),e.wind.forEach((e=>{const t=document.createElement("div");t.innerText=`${e} m/s`,t.classList.add("singleweatherbox"),s.appendChild(t)}))},ce=document.getElementById("getweather"),de=document.getElementById("loading");ce.addEventListener("click",(async()=>{de.classList.add("display"),setTimeout((()=>{de.classList.remove("display")}),3e3);const n=document.getElementById("choosecity"),r=await e.getAPIData(n.value);ae(r);const a=await t(n.value);se(a),de.classList.remove("display")})),(async()=>{de.classList.add("display"),setTimeout((()=>{de.classList.remove("display")}),3e3);const n=await e.getAPIData("montreal"),r=await t("montreal");ae(n),se(r),de.classList.remove("display")})()})();
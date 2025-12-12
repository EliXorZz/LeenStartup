import{e as kc,f as Wc,g as Xc,c as Yc,o as qc,a as or,_ as jc}from"./eWEjO_t7.js";const Qa="182",Kc=0,Ro=1,Zc=2,is=1,$c=2,pr=3,Xn=0,rn=1,yn=2,kn=0,Ei=1,Co=2,Po=3,sa=4,Jc=5,xi=100,Qc=101,eu=102,tu=103,nu=104,iu=200,ru=201,su=202,au=203,aa=204,oa=205,ou=206,lu=207,cu=208,uu=209,fu=210,hu=211,du=212,pu=213,mu=214,la=0,ca=1,ua=2,Yi=3,fa=4,ha=5,da=6,pa=7,bl=0,gu=1,_u=2,Pn=0,wl=1,Rl=2,Cl=3,Pl=4,Ll=5,Dl=6,Il=7,Ul=300,Ai=301,qi=302,ma=303,ga=304,hs=306,_a=1e3,kt=1001,va=1002,Wt=1003,vu=1004,Nr=1005,jt=1006,Ts=1007,Mi=1008,mn=1009,Nl=1010,Fl=1011,Sr=1012,eo=1013,In=1014,Rn=1015,Yn=1016,to=1017,no=1018,Mr=1020,Ol=35902,Bl=35899,zl=1021,Gl=1022,gn=1023,qn=1026,yi=1027,Vl=1028,io=1029,ji=1030,ro=1031,so=1033,rs=33776,ss=33777,as=33778,os=33779,xa=35840,Sa=35841,Ma=35842,ya=35843,Ea=36196,Ta=37492,Aa=37496,ba=37488,wa=37489,Ra=37490,Ca=37491,Pa=37808,La=37809,Da=37810,Ia=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,Ba=37816,za=37817,Ga=37818,Va=37819,Ha=37820,ka=37821,Wa=36492,Xa=36494,Ya=36495,qa=36283,ja=36284,Ka=36285,Za=36286,xu=3200,Su=0,Mu=1,si="",dn="srgb",Ki="srgb-linear",cs="linear",xt="srgb",Ci=7680,Lo=519,yu=512,Eu=513,Tu=514,ao=515,Au=516,bu=517,oo=518,wu=519,Do=35044,Io="300 es",Cn=2e3,us=2001;function Hl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ru(){const i=yr("canvas");return i.style.display="block",i}const Uo={};function No(...i){const e="THREE."+i.shift();console.log(e,...i)}function je(...i){const e="THREE."+i.shift();console.warn(e,...i)}function ht(...i){const e="THREE."+i.shift();console.error(e,...i)}function Er(...i){const e=i.join(" ");e in Uo||(Uo[e]=!0,je(...i))}function Cu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fo=1234567;const gr=Math.PI/180,Tr=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function lo(i,e){return(i%e+e)%e}function Pu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Lu(i,e,t){return i!==e?(t-i)/(e-i):0}function _r(i,e,t){return(1-t)*i+t*e}function Du(i,e,t,n){return _r(i,e,1-Math.exp(-t*n))}function Iu(i,e=1){return e-Math.abs(lo(i,e*2)-e)}function Uu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Fu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ou(i,e){return i+Math.random()*(e-i)}function Bu(i){return i*(.5-Math.random())}function zu(i){i!==void 0&&(Fo=i);let e=Fo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gu(i){return i*gr}function Vu(i){return i*Tr}function Hu(i){return(i&i-1)===0&&i!==0}function ku(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xu(i,e,t,n,r){const s=Math.cos,l=Math.sin,o=s(t/2),u=l(t/2),f=s((e+n)/2),d=l((e+n)/2),p=s((e-n)/2),_=l((e-n)/2),v=s((n-e)/2),y=l((n-e)/2);switch(r){case"XYX":i.set(o*d,u*p,u*_,o*f);break;case"YZY":i.set(u*_,o*d,u*p,o*f);break;case"ZXZ":i.set(u*p,u*_,o*d,o*f);break;case"XZX":i.set(o*d,u*y,u*v,o*f);break;case"YXY":i.set(u*v,o*d,u*y,o*f);break;case"ZYZ":i.set(u*y,u*v,o*d,o*f);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const As={DEG2RAD:gr,RAD2DEG:Tr,generateUUID:Ji,clamp:it,euclideanModulo:lo,mapLinear:Pu,inverseLerp:Lu,lerp:_r,damp:Du,pingpong:Iu,smoothstep:Uu,smootherstep:Nu,randInt:Fu,randFloat:Ou,randFloatSpread:Bu,seededRandom:zu,degToRad:Gu,radToDeg:Vu,isPowerOfTwo:Hu,ceilPowerOfTwo:ku,floorPowerOfTwo:Wu,setQuaternionFromProperEuler:Xu,normalize:$t,denormalize:Wi};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*r+e.x,this.y=s*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class br{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,l,o){let u=n[r+0],f=n[r+1],d=n[r+2],p=n[r+3],_=s[l+0],v=s[l+1],y=s[l+2],A=s[l+3];if(o<=0){e[t+0]=u,e[t+1]=f,e[t+2]=d,e[t+3]=p;return}if(o>=1){e[t+0]=_,e[t+1]=v,e[t+2]=y,e[t+3]=A;return}if(p!==A||u!==_||f!==v||d!==y){let x=u*_+f*v+d*y+p*A;x<0&&(_=-_,v=-v,y=-y,A=-A,x=-x);let g=1-o;if(x<.9995){const I=Math.acos(x),P=Math.sin(I);g=Math.sin(g*I)/P,o=Math.sin(o*I)/P,u=u*g+_*o,f=f*g+v*o,d=d*g+y*o,p=p*g+A*o}else{u=u*g+_*o,f=f*g+v*o,d=d*g+y*o,p=p*g+A*o;const I=1/Math.sqrt(u*u+f*f+d*d+p*p);u*=I,f*=I,d*=I,p*=I}}e[t]=u,e[t+1]=f,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,l){const o=n[r],u=n[r+1],f=n[r+2],d=n[r+3],p=s[l],_=s[l+1],v=s[l+2],y=s[l+3];return e[t]=o*y+d*p+u*v-f*_,e[t+1]=u*y+d*_+f*p-o*v,e[t+2]=f*y+d*v+o*_-u*p,e[t+3]=d*y-o*p-u*_-f*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,l=e._order,o=Math.cos,u=Math.sin,f=o(n/2),d=o(r/2),p=o(s/2),_=u(n/2),v=u(r/2),y=u(s/2);switch(l){case"XYZ":this._x=_*d*p+f*v*y,this._y=f*v*p-_*d*y,this._z=f*d*y+_*v*p,this._w=f*d*p-_*v*y;break;case"YXZ":this._x=_*d*p+f*v*y,this._y=f*v*p-_*d*y,this._z=f*d*y-_*v*p,this._w=f*d*p+_*v*y;break;case"ZXY":this._x=_*d*p-f*v*y,this._y=f*v*p+_*d*y,this._z=f*d*y+_*v*p,this._w=f*d*p-_*v*y;break;case"ZYX":this._x=_*d*p-f*v*y,this._y=f*v*p+_*d*y,this._z=f*d*y-_*v*p,this._w=f*d*p+_*v*y;break;case"YZX":this._x=_*d*p+f*v*y,this._y=f*v*p+_*d*y,this._z=f*d*y-_*v*p,this._w=f*d*p-_*v*y;break;case"XZY":this._x=_*d*p-f*v*y,this._y=f*v*p-_*d*y,this._z=f*d*y+_*v*p,this._w=f*d*p+_*v*y;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],l=t[1],o=t[5],u=t[9],f=t[2],d=t[6],p=t[10],_=n+o+p;if(_>0){const v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(d-u)*v,this._y=(s-f)*v,this._z=(l-r)*v}else if(n>o&&n>p){const v=2*Math.sqrt(1+n-o-p);this._w=(d-u)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(s+f)/v}else if(o>p){const v=2*Math.sqrt(1+o-n-p);this._w=(s-f)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(u+d)/v}else{const v=2*Math.sqrt(1+p-n-o);this._w=(l-r)/v,this._x=(s+f)/v,this._y=(u+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,l=e._w,o=t._x,u=t._y,f=t._z,d=t._w;return this._x=n*d+l*o+r*f-s*u,this._y=r*d+l*u+s*o-n*f,this._z=s*d+l*f+n*u-r*o,this._w=l*d-n*o-r*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,l=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,l=-l,o=-o);let u=1-t;if(o<.9995){const f=Math.acos(o),d=Math.sin(f);u=Math.sin(u*f)/d,t=Math.sin(t*f)/d,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+l*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,l=e.y,o=e.z,u=e.w,f=2*(l*r-o*n),d=2*(o*t-s*r),p=2*(s*n-l*t);return this.x=t+u*f+l*p-o*d,this.y=n+u*d+o*f-s*p,this.z=r+u*p+s*d-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,l=t.x,o=t.y,u=t.z;return this.x=r*u-s*o,this.y=s*l-n*u,this.z=n*o-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bs.copy(this).projectOnVector(e),this.sub(bs)}reflect(e){return this.sub(bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bs=new H,Oo=new br;class Je{constructor(e,t,n,r,s,l,o,u,f){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,l,o,u,f)}set(e,t,n,r,s,l,o,u,f){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=u,d[6]=n,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,l=n[0],o=n[3],u=n[6],f=n[1],d=n[4],p=n[7],_=n[2],v=n[5],y=n[8],A=r[0],x=r[3],g=r[6],I=r[1],P=r[4],w=r[7],U=r[2],N=r[5],B=r[8];return s[0]=l*A+o*I+u*U,s[3]=l*x+o*P+u*N,s[6]=l*g+o*w+u*B,s[1]=f*A+d*I+p*U,s[4]=f*x+d*P+p*N,s[7]=f*g+d*w+p*B,s[2]=_*A+v*I+y*U,s[5]=_*x+v*P+y*N,s[8]=_*g+v*w+y*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],o=e[5],u=e[6],f=e[7],d=e[8];return t*l*d-t*o*f-n*s*d+n*o*u+r*s*f-r*l*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],o=e[5],u=e[6],f=e[7],d=e[8],p=d*l-o*f,_=o*u-d*s,v=f*s-l*u,y=t*p+n*_+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=p*A,e[1]=(r*f-d*n)*A,e[2]=(o*n-r*l)*A,e[3]=_*A,e[4]=(d*t-r*u)*A,e[5]=(r*s-o*t)*A,e[6]=v*A,e[7]=(n*u-f*t)*A,e[8]=(l*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,l,o){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*l+f*o)+l+e,-r*f,r*u,-r*(-f*l+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ws.makeScale(e,t)),this}rotate(e){return this.premultiply(ws.makeRotation(-e)),this}translate(e,t){return this.premultiply(ws.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ws=new Je,Bo=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zo=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yu(){const i={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(r,s,l){return this.enabled===!1||s===l||!s||!l||(this.spaces[s].transfer===xt&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===xt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,l){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ki]:{primaries:e,whitePoint:n,transfer:cs,toXYZ:Bo,fromXYZ:zo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Bo,fromXYZ:zo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}const ot=Yu();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class qu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=yr("canvas")),Pi.width=e.width,Pi.height=e.height;const r=Pi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=Wn(s[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ju=0;class co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,o=r.length;l<o;l++)r[l].isDataTexture?s.push(Rs(r[l].image)):s.push(Rs(r[l]))}else s=Rs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let Ku=0;const Cs=new H;class Kt extends $i{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=kt,r=kt,s=jt,l=Mi,o=gn,u=mn,f=Kt.DEFAULT_ANISOTROPY,d=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Ji(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=u,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cs).x}get height(){return this.source.getSize(Cs).y}get depth(){return this.source.getSize(Cs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _a:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _a:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Ul;Kt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,f=u[0],d=u[4],p=u[8],_=u[1],v=u[5],y=u[9],A=u[2],x=u[6],g=u[10];if(Math.abs(d-_)<.01&&Math.abs(p-A)<.01&&Math.abs(y-x)<.01){if(Math.abs(d+_)<.1&&Math.abs(p+A)<.1&&Math.abs(y+x)<.1&&Math.abs(f+v+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,w=(v+1)/2,U=(g+1)/2,N=(d+_)/4,B=(p+A)/4,j=(y+x)/4;return P>w&&P>U?P<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(P),r=N/n,s=B/n):w>U?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=N/r,s=j/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=B/s,r=j/s),this.set(n,r,s,t),this}let I=Math.sqrt((x-y)*(x-y)+(p-A)*(p-A)+(_-d)*(_-d));return Math.abs(I)<.001&&(I=1),this.x=(x-y)/I,this.y=(p-A)/I,this.z=(_-d)/I,this.w=Math.acos((f+v+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zu extends $i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Kt(r);this.textures=[];const l=n.count;for(let o=0;o<l;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new co(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kl extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,o=s.count;l<o;l++)e.isMesh===!0?e.getVertexPosition(l,xn):xn.fromBufferAttribute(s,l),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const r=e.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Or.subVectors(this.max,lr),Li.subVectors(e.a,lr),Di.subVectors(e.b,lr),Ii.subVectors(e.c,lr),Qn.subVectors(Di,Li),ei.subVectors(Ii,Di),hi.subVectors(Li,Ii);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-hi.z,hi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,hi.z,0,-hi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-hi.y,hi.x,0];return!Ps(t,Li,Di,Ii,Or)||(t=[1,0,0,0,1,0,0,0,1],!Ps(t,Li,Di,Ii,Or))?!1:(Br.crossVectors(Qn,ei),t=[Br.x,Br.y,Br.z],Ps(t,Li,Di,Ii,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new H,new H,new H,new H,new H,new H,new H,new H],xn=new H,Fr=new wr,Li=new H,Di=new H,Ii=new H,Qn=new H,ei=new H,hi=new H,lr=new H,Or=new H,Br=new H,di=new H;function Ps(i,e,t,n,r){for(let s=0,l=i.length-3;s<=l;s+=3){di.fromArray(i,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),u=e.dot(di),f=t.dot(di),d=n.dot(di);if(Math.max(-Math.max(u,f,d),Math.min(u,f,d))>o)return!1}return!0}const Ju=new wr,cr=new H,Ls=new H;class uo{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ju.setFromPoints(e).getCenter(n);let r=0;for(let s=0,l=e.length;s<l;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(cr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ls)),this.expandByPoint(cr.copy(e.center).sub(Ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new H,Ds=new H,zr=new H,ti=new H,Is=new H,Gr=new H,Us=new H;class Qu{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ds.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Ds);const s=e.distanceTo(t)*.5,l=-this.direction.dot(zr),o=ti.dot(this.direction),u=-ti.dot(zr),f=ti.lengthSq(),d=Math.abs(1-l*l);let p,_,v,y;if(d>0)if(p=l*u-o,_=l*o-u,y=s*d,p>=0)if(_>=-y)if(_<=y){const A=1/d;p*=A,_*=A,v=p*(p+l*_+2*o)+_*(l*p+_+2*u)+f}else _=s,p=Math.max(0,-(l*_+o)),v=-p*p+_*(_+2*u)+f;else _=-s,p=Math.max(0,-(l*_+o)),v=-p*p+_*(_+2*u)+f;else _<=-y?(p=Math.max(0,-(-l*s+o)),_=p>0?-s:Math.min(Math.max(-s,-u),s),v=-p*p+_*(_+2*u)+f):_<=y?(p=0,_=Math.min(Math.max(-s,-u),s),v=_*(_+2*u)+f):(p=Math.max(0,-(l*s+o)),_=p>0?s:Math.min(Math.max(-s,-u),s),v=-p*p+_*(_+2*u)+f);else _=l>0?-s:s,p=Math.max(0,-(l*_+o)),v=-p*p+_*(_+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ds).addScaledVector(zr,_),v}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),r=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(r>s)return null;const l=Math.sqrt(s-r),o=n-l,u=n+l;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,l,o,u;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,_=this.origin;return f>=0?(n=(e.min.x-_.x)*f,r=(e.max.x-_.x)*f):(n=(e.max.x-_.x)*f,r=(e.min.x-_.x)*f),d>=0?(s=(e.min.y-_.y)*d,l=(e.max.y-_.y)*d):(s=(e.max.y-_.y)*d,l=(e.min.y-_.y)*d),n>l||s>r||((s>n||isNaN(n))&&(n=s),(l<r||isNaN(r))&&(r=l),p>=0?(o=(e.min.z-_.z)*p,u=(e.max.z-_.z)*p):(o=(e.max.z-_.z)*p,u=(e.min.z-_.z)*p),n>u||o>r)||((o>n||n!==n)&&(n=o),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,r,s){Is.subVectors(t,e),Gr.subVectors(n,e),Us.crossVectors(Is,Gr);let l=this.direction.dot(Us),o;if(l>0){if(r)return null;o=1}else if(l<0)o=-1,l=-l;else return null;ti.subVectors(this.origin,e);const u=o*this.direction.dot(Gr.crossVectors(ti,Gr));if(u<0)return null;const f=o*this.direction.dot(Is.cross(ti));if(f<0||u+f>l)return null;const d=-o*ti.dot(Us);return d<0?null:this.at(d/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,n,r,s,l,o,u,f,d,p,_,v,y,A,x){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,l,o,u,f,d,p,_,v,y,A,x)}set(e,t,n,r,s,l,o,u,f,d,p,_,v,y,A,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=l,g[9]=o,g[13]=u,g[2]=f,g[6]=d,g[10]=p,g[14]=_,g[3]=v,g[7]=y,g[11]=A,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),l=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,l=Math.cos(n),o=Math.sin(n),u=Math.cos(r),f=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const _=l*d,v=l*p,y=o*d,A=o*p;t[0]=u*d,t[4]=-u*p,t[8]=f,t[1]=v+y*f,t[5]=_-A*f,t[9]=-o*u,t[2]=A-_*f,t[6]=y+v*f,t[10]=l*u}else if(e.order==="YXZ"){const _=u*d,v=u*p,y=f*d,A=f*p;t[0]=_+A*o,t[4]=y*o-v,t[8]=l*f,t[1]=l*p,t[5]=l*d,t[9]=-o,t[2]=v*o-y,t[6]=A+_*o,t[10]=l*u}else if(e.order==="ZXY"){const _=u*d,v=u*p,y=f*d,A=f*p;t[0]=_-A*o,t[4]=-l*p,t[8]=y+v*o,t[1]=v+y*o,t[5]=l*d,t[9]=A-_*o,t[2]=-l*f,t[6]=o,t[10]=l*u}else if(e.order==="ZYX"){const _=l*d,v=l*p,y=o*d,A=o*p;t[0]=u*d,t[4]=y*f-v,t[8]=_*f+A,t[1]=u*p,t[5]=A*f+_,t[9]=v*f-y,t[2]=-f,t[6]=o*u,t[10]=l*u}else if(e.order==="YZX"){const _=l*u,v=l*f,y=o*u,A=o*f;t[0]=u*d,t[4]=A-_*p,t[8]=y*p+v,t[1]=p,t[5]=l*d,t[9]=-o*d,t[2]=-f*d,t[6]=v*p+y,t[10]=_-A*p}else if(e.order==="XZY"){const _=l*u,v=l*f,y=o*u,A=o*f;t[0]=u*d,t[4]=-p,t[8]=f*d,t[1]=_*p+A,t[5]=l*d,t[9]=v*p-y,t[2]=y*p-v,t[6]=o*d,t[10]=A*p+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ef,e,tf)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ni.crossVectors(n,ln),ni.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ni.crossVectors(n,ln)),ni.normalize(),Vr.crossVectors(ln,ni),r[0]=ni.x,r[4]=Vr.x,r[8]=ln.x,r[1]=ni.y,r[5]=Vr.y,r[9]=ln.y,r[2]=ni.z,r[6]=Vr.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,l=n[0],o=n[4],u=n[8],f=n[12],d=n[1],p=n[5],_=n[9],v=n[13],y=n[2],A=n[6],x=n[10],g=n[14],I=n[3],P=n[7],w=n[11],U=n[15],N=r[0],B=r[4],j=r[8],T=r[12],b=r[1],F=r[5],$=r[9],Z=r[13],ae=r[2],oe=r[6],ee=r[10],te=r[14],ue=r[3],be=r[7],xe=r[11],Pe=r[15];return s[0]=l*N+o*b+u*ae+f*ue,s[4]=l*B+o*F+u*oe+f*be,s[8]=l*j+o*$+u*ee+f*xe,s[12]=l*T+o*Z+u*te+f*Pe,s[1]=d*N+p*b+_*ae+v*ue,s[5]=d*B+p*F+_*oe+v*be,s[9]=d*j+p*$+_*ee+v*xe,s[13]=d*T+p*Z+_*te+v*Pe,s[2]=y*N+A*b+x*ae+g*ue,s[6]=y*B+A*F+x*oe+g*be,s[10]=y*j+A*$+x*ee+g*xe,s[14]=y*T+A*Z+x*te+g*Pe,s[3]=I*N+P*b+w*ae+U*ue,s[7]=I*B+P*F+w*oe+U*be,s[11]=I*j+P*$+w*ee+U*xe,s[15]=I*T+P*Z+w*te+U*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],l=e[1],o=e[5],u=e[9],f=e[13],d=e[2],p=e[6],_=e[10],v=e[14],y=e[3],A=e[7],x=e[11],g=e[15],I=u*v-f*_,P=o*v-f*p,w=o*_-u*p,U=l*v-f*d,N=l*_-u*d,B=l*p-o*d;return t*(A*I-x*P+g*w)-n*(y*I-x*U+g*N)+r*(y*P-A*U+g*B)-s*(y*w-A*N+x*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],o=e[5],u=e[6],f=e[7],d=e[8],p=e[9],_=e[10],v=e[11],y=e[12],A=e[13],x=e[14],g=e[15],I=p*x*f-A*_*f+A*u*v-o*x*v-p*u*g+o*_*g,P=y*_*f-d*x*f-y*u*v+l*x*v+d*u*g-l*_*g,w=d*A*f-y*p*f+y*o*v-l*A*v-d*o*g+l*p*g,U=y*p*u-d*A*u-y*o*_+l*A*_+d*o*x-l*p*x,N=t*I+n*P+r*w+s*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=I*B,e[1]=(A*_*s-p*x*s-A*r*v+n*x*v+p*r*g-n*_*g)*B,e[2]=(o*x*s-A*u*s+A*r*f-n*x*f-o*r*g+n*u*g)*B,e[3]=(p*u*s-o*_*s-p*r*f+n*_*f+o*r*v-n*u*v)*B,e[4]=P*B,e[5]=(d*x*s-y*_*s+y*r*v-t*x*v-d*r*g+t*_*g)*B,e[6]=(y*u*s-l*x*s-y*r*f+t*x*f+l*r*g-t*u*g)*B,e[7]=(l*_*s-d*u*s+d*r*f-t*_*f-l*r*v+t*u*v)*B,e[8]=w*B,e[9]=(y*p*s-d*A*s-y*n*v+t*A*v+d*n*g-t*p*g)*B,e[10]=(l*A*s-y*o*s+y*n*f-t*A*f-l*n*g+t*o*g)*B,e[11]=(d*o*s-l*p*s-d*n*f+t*p*f+l*n*v-t*o*v)*B,e[12]=U*B,e[13]=(d*A*r-y*p*r+y*n*_-t*A*_-d*n*x+t*p*x)*B,e[14]=(y*o*r-l*A*r-y*n*u+t*A*u+l*n*x-t*o*x)*B,e[15]=(l*p*r-d*o*r+d*n*u-t*p*u-l*n*_+t*o*_)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,l=e.x,o=e.y,u=e.z,f=s*l,d=s*o;return this.set(f*l+n,f*o-r*u,f*u+r*o,0,f*o+r*u,d*o+n,d*u-r*l,0,f*u-r*o,d*u+r*l,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,l){return this.set(1,n,s,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,l=t._y,o=t._z,u=t._w,f=s+s,d=l+l,p=o+o,_=s*f,v=s*d,y=s*p,A=l*d,x=l*p,g=o*p,I=u*f,P=u*d,w=u*p,U=n.x,N=n.y,B=n.z;return r[0]=(1-(A+g))*U,r[1]=(v+w)*U,r[2]=(y-P)*U,r[3]=0,r[4]=(v-w)*N,r[5]=(1-(_+g))*N,r[6]=(x+I)*N,r[7]=0,r[8]=(y+P)*B,r[9]=(x-I)*B,r[10]=(1-(_+A))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ui.set(r[0],r[1],r[2]).length();const l=Ui.set(r[4],r[5],r[6]).length(),o=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Sn.copy(this);const f=1/s,d=1/l,p=1/o;return Sn.elements[0]*=f,Sn.elements[1]*=f,Sn.elements[2]*=f,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=p,Sn.elements[9]*=p,Sn.elements[10]*=p,t.setFromRotationMatrix(Sn),n.x=s,n.y=l,n.z=o,this}makePerspective(e,t,n,r,s,l,o=Cn,u=!1){const f=this.elements,d=2*s/(t-e),p=2*s/(n-r),_=(t+e)/(t-e),v=(n+r)/(n-r);let y,A;if(u)y=s/(l-s),A=l*s/(l-s);else if(o===Cn)y=-(l+s)/(l-s),A=-2*l*s/(l-s);else if(o===us)y=-l/(l-s),A=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=A,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,s,l,o=Cn,u=!1){const f=this.elements,d=2/(t-e),p=2/(n-r),_=-(t+e)/(t-e),v=-(n+r)/(n-r);let y,A;if(u)y=1/(l-s),A=l/(l-s);else if(o===Cn)y=-2/(l-s),A=-(l+s)/(l-s);else if(o===us)y=-1/(l-s),A=-s/(l-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return f[0]=d,f[4]=0,f[8]=0,f[12]=_,f[1]=0,f[5]=p,f[9]=0,f[13]=v,f[2]=0,f[6]=0,f[10]=y,f[14]=A,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new H,Sn=new Ct,ef=new H(0,0,0),tf=new H(1,1,1),ni=new H,Vr=new H,ln=new H,Go=new Ct,Vo=new br;class jn{constructor(e=0,t=0,n=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],l=r[4],o=r[8],u=r[1],f=r[5],d=r[9],p=r[2],_=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-it(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nf=0;const Ho=new H,Ni=new br,zn=new Ct,Hr=new H,ur=new H,rf=new H,sf=new br,ko=new H(1,0,0),Wo=new H(0,1,0),Xo=new H(0,0,1),Yo={type:"added"},af={type:"removed"},Fi={type:"childadded",child:null},Ns={type:"childremoved",child:null};class en extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new H,t=new jn,n=new br,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Je}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(ko,e)}rotateY(e){return this.rotateOnAxis(Wo,e)}rotateZ(e){return this.rotateOnAxis(Xo,e)}translateOnAxis(e,t){return Ho.copy(e).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ko,e)}translateY(e){return this.translateOnAxis(Wo,e)}translateZ(e){return this.translateOnAxis(Xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hr.copy(e):Hr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(ur,Hr,this.up):zn.lookAt(Hr,ur,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(zn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yo),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(af),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yo),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,sf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let f=0,d=u.length;f<d;f++){const p=u[f];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,f=this.material.length;u<f;u++)o.push(s(e.materials,this.material[u]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];r.animations.push(s(e.animations,u))}}if(t){const o=l(e.geometries),u=l(e.materials),f=l(e.textures),d=l(e.images),p=l(e.shapes),_=l(e.skeletons),v=l(e.animations),y=l(e.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),_.length>0&&(n.skeletons=_),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=r,n;function l(o){const u=[];for(const f in o){const d=o[f];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}en.DEFAULT_UP=new H(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new H,Gn=new H,Fs=new H,Vn=new H,Oi=new H,Bi=new H,qo=new H,Os=new H,Bs=new H,zs=new H,Gs=new Pt,Vs=new Pt,Hs=new Pt;class En{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Mn.subVectors(r,t),Gn.subVectors(n,t),Fs.subVectors(e,t);const l=Mn.dot(Mn),o=Mn.dot(Gn),u=Mn.dot(Fs),f=Gn.dot(Gn),d=Gn.dot(Fs),p=l*f-o*o;if(p===0)return s.set(0,0,0),null;const _=1/p,v=(f*u-o*d)*_,y=(l*d-o*u)*_;return s.set(1-v-y,y,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,s,l,o,u){return this.getBarycoord(e,t,n,r,Vn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Vn.x),u.addScaledVector(l,Vn.y),u.addScaledVector(o,Vn.z),u)}static getInterpolatedAttribute(e,t,n,r,s,l){return Gs.setScalar(0),Vs.setScalar(0),Hs.setScalar(0),Gs.fromBufferAttribute(e,t),Vs.fromBufferAttribute(e,n),Hs.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Gs,s.x),l.addScaledVector(Vs,s.y),l.addScaledVector(Hs,s.z),l}static isFrontFacing(e,t,n,r){return Mn.subVectors(n,t),Gn.subVectors(e,t),Mn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return En.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let l,o;Oi.subVectors(r,n),Bi.subVectors(s,n),Os.subVectors(e,n);const u=Oi.dot(Os),f=Bi.dot(Os);if(u<=0&&f<=0)return t.copy(n);Bs.subVectors(e,r);const d=Oi.dot(Bs),p=Bi.dot(Bs);if(d>=0&&p<=d)return t.copy(r);const _=u*p-d*f;if(_<=0&&u>=0&&d<=0)return l=u/(u-d),t.copy(n).addScaledVector(Oi,l);zs.subVectors(e,s);const v=Oi.dot(zs),y=Bi.dot(zs);if(y>=0&&v<=y)return t.copy(s);const A=v*f-u*y;if(A<=0&&f>=0&&y<=0)return o=f/(f-y),t.copy(n).addScaledVector(Bi,o);const x=d*y-v*p;if(x<=0&&p-d>=0&&v-y>=0)return qo.subVectors(s,r),o=(p-d)/(p-d+(v-y)),t.copy(r).addScaledVector(qo,o);const g=1/(x+A+_);return l=A*g,o=_*g,t.copy(n).addScaledVector(Oi,l).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ks(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=lo(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=ks(l,s,e+1/3),this.g=ks(l,s,e),this.b=ks(l,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=dn){function n(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=r[1],o=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=Xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return ot.workingToColorSpace(qt.copy(this),e),Math.round(it(qt.r*255,0,255))*65536+Math.round(it(qt.g*255,0,255))*256+Math.round(it(qt.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(qt.copy(this),t);const n=qt.r,r=qt.g,s=qt.b,l=Math.max(n,r,s),o=Math.min(n,r,s);let u,f;const d=(o+l)/2;if(o===l)u=0,f=0;else{const p=l-o;switch(f=d<=.5?p/(l+o):p/(2-l-o),l){case n:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-n)/p+2;break;case s:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=f,e.l=d,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=dn){ot.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,r=qt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(kr);const n=_r(ii.h,kr.h,t),r=_r(ii.s,kr.s,t),s=_r(ii.l,kr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new _t;_t.NAMES=Xl;let of=0;class ds extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Ei,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=oa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const l=[];for(const o in s){const u=s[o];delete u.metadata,l.push(u)}return l}if(t){const s=r(e.textures),l=r(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hn extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new H,Wr=new Ye;let lf=0;class Dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}}class Yl extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ql extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cf=0;const hn=new Ct,Ws=new en,zi=new H,cn=new wr,fr=new wr,Ot=new H;class Tn extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hl(e)?ql:Yl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Ws.lookAt(e),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new tn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const o=t[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(cn.min,fr.min),cn.expandByPoint(Ot),Ot.addVectors(cn.max,fr.max),cn.expandByPoint(Ot)):(cn.expandByPoint(fr.min),cn.expandByPoint(fr.max))}cn.getCenter(n);let r=0;for(let s=0,l=e.count;s<l;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,l=t.length;s<l;s++){const o=t[s],u=this.morphTargetsRelative;for(let f=0,d=o.count;f<d;f++)Ot.fromBufferAttribute(o,f),u&&(zi.fromBufferAttribute(e,f),Ot.add(zi)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),o=[],u=[];for(let j=0;j<n.count;j++)o[j]=new H,u[j]=new H;const f=new H,d=new H,p=new H,_=new Ye,v=new Ye,y=new Ye,A=new H,x=new H;function g(j,T,b){f.fromBufferAttribute(n,j),d.fromBufferAttribute(n,T),p.fromBufferAttribute(n,b),_.fromBufferAttribute(s,j),v.fromBufferAttribute(s,T),y.fromBufferAttribute(s,b),d.sub(f),p.sub(f),v.sub(_),y.sub(_);const F=1/(v.x*y.y-y.x*v.y);isFinite(F)&&(A.copy(d).multiplyScalar(y.y).addScaledVector(p,-v.y).multiplyScalar(F),x.copy(p).multiplyScalar(v.x).addScaledVector(d,-y.x).multiplyScalar(F),o[j].add(A),o[T].add(A),o[b].add(A),u[j].add(x),u[T].add(x),u[b].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let j=0,T=I.length;j<T;++j){const b=I[j],F=b.start,$=b.count;for(let Z=F,ae=F+$;Z<ae;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new H,w=new H,U=new H,N=new H;function B(j){U.fromBufferAttribute(r,j),N.copy(U);const T=o[j];P.copy(T),P.sub(U.multiplyScalar(U.dot(T))).normalize(),w.crossVectors(N,T);const F=w.dot(u[j])<0?-1:1;l.setXYZW(j,P.x,P.y,P.z,F)}for(let j=0,T=I.length;j<T;++j){const b=I[j],F=b.start,$=b.count;for(let Z=F,ae=F+$;Z<ae;Z+=3)B(e.getX(Z+0)),B(e.getX(Z+1)),B(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,v=n.count;_<v;_++)n.setXYZ(_,0,0,0);const r=new H,s=new H,l=new H,o=new H,u=new H,f=new H,d=new H,p=new H;if(e)for(let _=0,v=e.count;_<v;_+=3){const y=e.getX(_+0),A=e.getX(_+1),x=e.getX(_+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,A),l.fromBufferAttribute(t,x),d.subVectors(l,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(n,y),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,x),o.add(d),u.add(d),f.add(d),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(A,u.x,u.y,u.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let _=0,v=t.count;_<v;_+=3)r.fromBufferAttribute(t,_+0),s.fromBufferAttribute(t,_+1),l.fromBufferAttribute(t,_+2),d.subVectors(l,s),p.subVectors(r,s),d.cross(p),n.setXYZ(_+0,d.x,d.y,d.z),n.setXYZ(_+1,d.x,d.y,d.z),n.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,u){const f=o.array,d=o.itemSize,p=o.normalized,_=new f.constructor(u.length*d);let v=0,y=0;for(let A=0,x=u.length;A<x;A++){o.isInterleavedBufferAttribute?v=u[A]*o.data.stride+o.offset:v=u[A]*d;for(let g=0;g<d;g++)_[y++]=f[v++]}return new Dn(_,d,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,r=this.attributes;for(const o in r){const u=r[o],f=e(u,n);t.setAttribute(o,f)}const s=this.morphAttributes;for(const o in s){const u=[],f=s[o];for(let d=0,p=f.length;d<p;d++){const _=f[d],v=e(_,n);u.push(v)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let o=0,u=l.length;o<u;o++){const f=l[o];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],d=[];for(let p=0,_=f.length;p<_;p++){const v=f[p];d.push(v.toJSON(e.data))}d.length>0&&(r[u]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const f in r){const d=r[f];this.setAttribute(f,d.clone(t))}const s=e.morphAttributes;for(const f in s){const d=[],p=s[f];for(let _=0,v=p.length;_<v;_++)d.push(p[_].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,d=l.length;f<d;f++){const p=l[f];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jo=new Ct,pi=new Qu,Xr=new uo,Ko=new H,Yr=new H,qr=new H,jr=new H,Xs=new H,Kr=new H,Zo=new H,Zr=new H;class Qt extends en{constructor(e=new Tn,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Kr.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const d=o[u],p=s[u];d!==0&&(Xs.fromBufferAttribute(p,e),l?Kr.addScaledVector(Xs,d):Kr.addScaledVector(Xs.sub(t),d))}t.add(Kr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(Xr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Xr,Ko)===null||pi.origin.distanceToSquared(Ko)>(e.far-e.near)**2))&&(jo.copy(s).invert(),pi.copy(e.ray).applyMatrix4(jo),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,l=this.material,o=s.index,u=s.attributes.position,f=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,_=s.groups,v=s.drawRange;if(o!==null)if(Array.isArray(l))for(let y=0,A=_.length;y<A;y++){const x=_[y],g=l[x.materialIndex],I=Math.max(x.start,v.start),P=Math.min(o.count,Math.min(x.start+x.count,v.start+v.count));for(let w=I,U=P;w<U;w+=3){const N=o.getX(w),B=o.getX(w+1),j=o.getX(w+2);r=$r(this,g,e,n,f,d,p,N,B,j),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),A=Math.min(o.count,v.start+v.count);for(let x=y,g=A;x<g;x+=3){const I=o.getX(x),P=o.getX(x+1),w=o.getX(x+2);r=$r(this,l,e,n,f,d,p,I,P,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let y=0,A=_.length;y<A;y++){const x=_[y],g=l[x.materialIndex],I=Math.max(x.start,v.start),P=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let w=I,U=P;w<U;w+=3){const N=w,B=w+1,j=w+2;r=$r(this,g,e,n,f,d,p,N,B,j),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),A=Math.min(u.count,v.start+v.count);for(let x=y,g=A;x<g;x+=3){const I=x,P=x+1,w=x+2;r=$r(this,l,e,n,f,d,p,I,P,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function uf(i,e,t,n,r,s,l,o){let u;if(e.side===rn?u=n.intersectTriangle(l,s,r,!0,o):u=n.intersectTriangle(r,s,l,e.side===Xn,o),u===null)return null;Zr.copy(o),Zr.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Zr);return f<t.near||f>t.far?null:{distance:f,point:Zr.clone(),object:i}}function $r(i,e,t,n,r,s,l,o,u,f){i.getVertexPosition(o,Yr),i.getVertexPosition(u,qr),i.getVertexPosition(f,jr);const d=uf(i,e,t,n,Yr,qr,jr,Zo);if(d){const p=new H;En.getBarycoord(Zo,Yr,qr,jr,p),r&&(d.uv=En.getInterpolatedAttribute(r,o,u,f,p,new Ye)),s&&(d.uv1=En.getInterpolatedAttribute(s,o,u,f,p,new Ye)),l&&(d.normal=En.getInterpolatedAttribute(l,o,u,f,p,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const _={a:o,b:u,c:f,normal:new H,materialIndex:0};En.getNormal(Yr,qr,jr,_.normal),d.face=_,d.barycoord=p}return d}class Rr extends Tn{constructor(e=1,t=1,n=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:l};const o=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const u=[],f=[],d=[],p=[];let _=0,v=0;y("z","y","x",-1,-1,n,t,e,l,s,0),y("z","y","x",1,-1,n,t,-e,l,s,1),y("x","z","y",1,1,e,n,t,r,l,2),y("x","z","y",1,-1,e,n,-t,r,l,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new tn(f,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(p,2));function y(A,x,g,I,P,w,U,N,B,j,T){const b=w/B,F=U/j,$=w/2,Z=U/2,ae=N/2,oe=B+1,ee=j+1;let te=0,ue=0;const be=new H;for(let xe=0;xe<ee;xe++){const Pe=xe*F-Z;for(let Ke=0;Ke<oe;Ke++){const Ze=Ke*b-$;be[A]=Ze*I,be[x]=Pe*P,be[g]=ae,f.push(be.x,be.y,be.z),be[A]=0,be[x]=0,be[g]=N>0?1:-1,d.push(be.x,be.y,be.z),p.push(Ke/B),p.push(1-xe/j),te+=1}}for(let xe=0;xe<j;xe++)for(let Pe=0;Pe<B;Pe++){const Ke=_+Pe+oe*xe,Ze=_+Pe+oe*(xe+1),vt=_+(Pe+1)+oe*(xe+1),dt=_+(Pe+1)+oe*xe;u.push(Ke,Ze,dt),u.push(Ze,vt,dt),ue+=6}o.addGroup(v,ue,T),v+=ue,_+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=Zi(i[t]);for(const r in n)e[r]=n[r]}return e}function ff(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const hf={clone:Zi,merge:Jt};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kl extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new H,$o=new Ye,Jo=new Ye;class pn extends Kl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,$o,Jo),t.subVectors(Jo,$o)}setViewOffset(e,t,n,r,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,f=l.fullHeight;s+=l.offsetX*r/u,t-=l.offsetY*n/f,r*=l.width/u,n*=l.height/f}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class mf extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const s=new pn(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const l=new pn(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const o=new pn(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const u=new pn(Gi,Vi,e,t);u.layers=this.layers,this.add(u);const f=new pn(Gi,Vi,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,l,o,u]=t;for(const f of t)this.remove(f);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,o,u,f,d]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,_,v),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Zl extends Kt{constructor(e=[],t=Ai,n,r,s,l,o,u,f,d){super(e,t,n,r,s,l,o,u,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $l extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rr(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:kn});s.uniforms.tEquirect.value=t;const l=new Qt(r,s),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=jt),new mf(1,10,this).update(e,l),t.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(s)}}class Jr extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gf={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,l=null;const o=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,n),g=this._getHandJoint(f,A);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],_=d.position.distanceTo(p.position),v=.02,y=.005;f.inputState.pinching&&_>v+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=v-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gf)))}return o!==null&&(o.visible=r!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _f extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vf extends Kt{constructor(e=null,t=1,n=1,r,s,l,o,u,f=Wt,d=Wt,p,_){super(null,l,o,u,f,d,r,s,p,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qs=new H,xf=new H,Sf=new Je;class vi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=qs.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sf.getNormalMatrix(e),r=this.coplanarPoint(qs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new uo,Mf=new Ye(.5,.5),Qr=new H;class Jl{constructor(e=new vi,t=new vi,n=new vi,r=new vi,s=new vi,l=new vi){this.planes=[e,t,n,r,s,l]}set(e,t,n,r,s,l){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){const r=this.planes,s=e.elements,l=s[0],o=s[1],u=s[2],f=s[3],d=s[4],p=s[5],_=s[6],v=s[7],y=s[8],A=s[9],x=s[10],g=s[11],I=s[12],P=s[13],w=s[14],U=s[15];if(r[0].setComponents(f-l,v-d,g-y,U-I).normalize(),r[1].setComponents(f+l,v+d,g+y,U+I).normalize(),r[2].setComponents(f+o,v+p,g+A,U+P).normalize(),r[3].setComponents(f-o,v-p,g-A,U-P).normalize(),n)r[4].setComponents(u,_,x,w).normalize(),r[5].setComponents(f-u,v-_,g-x,U-w).normalize();else if(r[4].setComponents(f-u,v-_,g-x,U-w).normalize(),t===Cn)r[5].setComponents(f+u,v+_,g+x,U+w).normalize();else if(t===us)r[5].setComponents(u,_,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=Mf.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qr.x=r.normal.x>0?e.max.x:e.min.x,Qr.y=r.normal.y>0?e.max.y:e.min.y,Qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ar extends Kt{constructor(e,t,n=In,r,s,l,o=Wt,u=Wt,f,d=qn,p=1){if(d!==qn&&d!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:p};super(_,r,s,l,o,u,d,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yf extends Ar{constructor(e,t=In,n=Ai,r,s,l=Wt,o=Wt,u,f=qn){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,r,s,l,o,u,f),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ql extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let l;t?l=t:l=e*n[s-1];let o=0,u=s-1,f;for(;o<=u;)if(r=Math.floor(o+(u-o)/2),f=n[r]-l,f<0)o=r+1;else if(f>0)u=r-1;else{u=r;break}if(r=u,n[r]===l)return r/(s-1);const d=n[r],_=n[r+1]-d,v=(l-d)/_;return(r+v)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const l=this.getPoint(r),o=this.getPoint(s),u=t||(l.isVector2?new Ye:new H);return u.copy(o).sub(l).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new H,r=[],s=[],l=[],o=new H,u=new Ct;for(let v=0;v<=e;v++){const y=v/e;r[v]=this.getTangentAt(y,new H)}s[0]=new H,l[0]=new H;let f=Number.MAX_VALUE;const d=Math.abs(r[0].x),p=Math.abs(r[0].y),_=Math.abs(r[0].z);d<=f&&(f=d,n.set(1,0,0)),p<=f&&(f=p,n.set(0,1,0)),_<=f&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),l[0].crossVectors(r[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),l[v]=l[v-1].clone(),o.crossVectors(r[v-1],r[v]),o.length()>Number.EPSILON){o.normalize();const y=Math.acos(it(r[v-1].dot(r[v]),-1,1));s[v].applyMatrix4(u.makeRotationAxis(o,y))}l[v].crossVectors(r[v],s[v])}if(t===!0){let v=Math.acos(it(s[0].dot(s[e]),-1,1));v/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(v=-v);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(r[y],v*y)),l[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ec extends Kn{constructor(e=0,t=0,n=1,r=1,s=0,l=Math.PI*2,o=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=l,this.aClockwise=o,this.aRotation=u}getPoint(e,t=new Ye){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const l=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(l?s=0:s=r),this.aClockwise===!0&&!l&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(o),f=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),_=u-this.aX,v=f-this.aY;u=_*d-v*p+this.aX,f=_*p+v*d+this.aY}return n.set(u,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ef extends ec{constructor(e,t,n,r,s,l){super(e,t,n,n,r,s,l),this.isArcCurve=!0,this.type="ArcCurve"}}function fo(){let i=0,e=0,t=0,n=0;function r(s,l,o,u){i=s,e=o,t=-3*s+3*l-2*o-u,n=2*s-2*l+o+u}return{initCatmullRom:function(s,l,o,u,f){r(l,o,f*(o-s),f*(u-l))},initNonuniformCatmullRom:function(s,l,o,u,f,d,p){let _=(l-s)/f-(o-s)/(f+d)+(o-l)/d,v=(o-l)/d-(u-l)/(d+p)+(u-o)/p;_*=d,v*=d,r(l,o,_,v)},calc:function(s){const l=s*s,o=l*s;return i+e*s+t*l+n*o}}}const es=new H,js=new fo,Ks=new fo,Zs=new fo;class tc extends Kn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){const n=t,r=this.points,s=r.length,l=(s-(this.closed?0:1))*e;let o=Math.floor(l),u=l-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:u===0&&o===s-1&&(o=s-2,u=1);let f,d;this.closed||o>0?f=r[(o-1)%s]:(es.subVectors(r[0],r[1]).add(r[0]),f=es);const p=r[o%s],_=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(es.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=es),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let y=Math.pow(f.distanceToSquared(p),v),A=Math.pow(p.distanceToSquared(_),v),x=Math.pow(_.distanceToSquared(d),v);A<1e-4&&(A=1),y<1e-4&&(y=A),x<1e-4&&(x=A),js.initNonuniformCatmullRom(f.x,p.x,_.x,d.x,y,A,x),Ks.initNonuniformCatmullRom(f.y,p.y,_.y,d.y,y,A,x),Zs.initNonuniformCatmullRom(f.z,p.z,_.z,d.z,y,A,x)}else this.curveType==="catmullrom"&&(js.initCatmullRom(f.x,p.x,_.x,d.x,this.tension),Ks.initCatmullRom(f.y,p.y,_.y,d.y,this.tension),Zs.initCatmullRom(f.z,p.z,_.z,d.z,this.tension));return n.set(js.calc(u),Ks.calc(u),Zs.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qo(i,e,t,n,r){const s=(n-e)*.5,l=(r-t)*.5,o=i*i,u=i*o;return(2*t-2*n+s+l)*u+(-3*t+3*n-2*s-l)*o+s*i+t}function Tf(i,e){const t=1-i;return t*t*e}function Af(i,e){return 2*(1-i)*i*e}function bf(i,e){return i*i*e}function vr(i,e,t,n){return Tf(i,e)+Af(i,t)+bf(i,n)}function wf(i,e){const t=1-i;return t*t*t*e}function Rf(i,e){const t=1-i;return 3*t*t*i*e}function Cf(i,e){return 3*(1-i)*i*i*e}function Pf(i,e){return i*i*i*e}function xr(i,e,t,n,r){return wf(i,e)+Rf(i,t)+Cf(i,n)+Pf(i,r)}class Lf extends Kn{constructor(e=new Ye,t=new Ye,n=new Ye,r=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ye){const n=t,r=this.v0,s=this.v1,l=this.v2,o=this.v3;return n.set(xr(e,r.x,s.x,l.x,o.x),xr(e,r.y,s.y,l.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Df extends Kn{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){const n=t,r=this.v0,s=this.v1,l=this.v2,o=this.v3;return n.set(xr(e,r.x,s.x,l.x,o.x),xr(e,r.y,s.y,l.y,o.y),xr(e,r.z,s.z,l.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class If extends Kn{constructor(e=new Ye,t=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uf extends Kn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nf extends Kn{constructor(e=new Ye,t=new Ye,n=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ye){const n=t,r=this.v0,s=this.v1,l=this.v2;return n.set(vr(e,r.x,s.x,l.x),vr(e,r.y,s.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nc extends Kn{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){const n=t,r=this.v0,s=this.v1,l=this.v2;return n.set(vr(e,r.x,s.x,l.x),vr(e,r.y,s.y,l.y),vr(e,r.z,s.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ff extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ye){const n=t,r=this.points,s=(r.length-1)*e,l=Math.floor(s),o=s-l,u=r[l===0?l:l-1],f=r[l],d=r[l>r.length-2?r.length-1:l+1],p=r[l>r.length-3?r.length-1:l+2];return n.set(Qo(o,u.x,f.x,d.x,p.x),Qo(o,u.y,f.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ye().fromArray(r))}return this}}var Of=Object.freeze({__proto__:null,ArcCurve:Ef,CatmullRomCurve3:tc,CubicBezierCurve:Lf,CubicBezierCurve3:Df,EllipseCurve:ec,LineCurve:If,LineCurve3:Uf,QuadraticBezierCurve:Nf,QuadraticBezierCurve3:nc,SplineCurve:Ff});class Ti extends Tn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,l=t/2,o=Math.floor(n),u=Math.floor(r),f=o+1,d=u+1,p=e/o,_=t/u,v=[],y=[],A=[],x=[];for(let g=0;g<d;g++){const I=g*_-l;for(let P=0;P<f;P++){const w=P*p-s;y.push(w,-I,0),A.push(0,0,1),x.push(P/o),x.push(1-g/u)}}for(let g=0;g<u;g++)for(let I=0;I<o;I++){const P=I+f*g,w=I+f*(g+1),U=I+1+f*(g+1),N=I+1+f*g;v.push(P,w,N),v.push(w,U,N)}this.setIndex(v),this.setAttribute("position",new tn(y,3)),this.setAttribute("normal",new tn(A,3)),this.setAttribute("uv",new tn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.widthSegments,e.heightSegments)}}class fs extends Tn{constructor(e=.5,t=1,n=32,r=1,s=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:l},n=Math.max(3,n),r=Math.max(1,r);const o=[],u=[],f=[],d=[];let p=e;const _=(t-e)/r,v=new H,y=new Ye;for(let A=0;A<=r;A++){for(let x=0;x<=n;x++){const g=s+x/n*l;v.x=p*Math.cos(g),v.y=p*Math.sin(g),u.push(v.x,v.y,v.z),f.push(0,0,1),y.x=(v.x/t+1)/2,y.y=(v.y/t+1)/2,d.push(y.x,y.y)}p+=_}for(let A=0;A<r;A++){const x=A*(n+1);for(let g=0;g<n;g++){const I=g+x,P=I,w=I+n+1,U=I+n+2,N=I+1;o.push(P,w,N),o.push(w,U,N)}}this.setIndex(o),this.setAttribute("position",new tn(u,3)),this.setAttribute("normal",new tn(f,3)),this.setAttribute("uv",new tn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ho extends Tn{constructor(e=new nc(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const l=e.computeFrenetFrames(t,s);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const o=new H,u=new H,f=new Ye;let d=new H;const p=[],_=[],v=[],y=[];A(),this.setIndex(y),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(v,2));function A(){for(let P=0;P<t;P++)x(P);x(s===!1?t:0),I(),g()}function x(P){d=e.getPointAt(P/t,d);const w=l.normals[P],U=l.binormals[P];for(let N=0;N<=r;N++){const B=N/r*Math.PI*2,j=Math.sin(B),T=-Math.cos(B);u.x=T*w.x+j*U.x,u.y=T*w.y+j*U.y,u.z=T*w.z+j*U.z,u.normalize(),_.push(u.x,u.y,u.z),o.x=d.x+n*u.x,o.y=d.y+n*u.y,o.z=d.z+n*u.z,p.push(o.x,o.y,o.z)}}function g(){for(let P=1;P<=t;P++)for(let w=1;w<=r;w++){const U=(r+1)*(P-1)+(w-1),N=(r+1)*P+(w-1),B=(r+1)*P+w,j=(r+1)*(P-1)+w;y.push(U,N,j),y.push(N,B,j)}}function I(){for(let P=0;P<=t;P++)for(let w=0;w<=r;w++)f.x=P/t,f.y=w/r,v.push(f.x,f.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ho(new Of[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Bf extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zf extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gf extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $s={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vf{constructor(e,t,n){const r=this;let s=!1,l=0,o=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,l,o),s=!0},this.itemEnd=function(d){l++,r.onProgress!==void 0&&r.onProgress(d,l,o),l===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,p){return f.push(d,p),this},this.removeHandler=function(d){const p=f.indexOf(d);return p!==-1&&f.splice(p,2),this},this.getHandler=function(d){for(let p=0,_=f.length;p<_;p+=2){const v=f[p],y=f[p+1];if(v.global&&(v.lastIndex=0),v.test(d))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Hf=new Vf;class po{constructor(e){this.manager=e!==void 0?e:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}po.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi=new WeakMap;class kf extends po{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=$s.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0);else{let p=Hi.get(l);p===void 0&&(p=[],Hi.set(l,p)),p.push({onLoad:t,onError:r})}return l}const o=yr("img");function u(){d(),t&&t(this);const p=Hi.get(this)||[];for(let _=0;_<p.length;_++){const v=p[_];v.onLoad&&v.onLoad(this)}Hi.delete(this),s.manager.itemEnd(e)}function f(p){d(),r&&r(p),$s.remove(`image:${e}`);const _=Hi.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onError&&y.onError(p)}Hi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",u,!1),o.removeEventListener("error",f,!1)}return o.addEventListener("load",u,!1),o.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$s.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Wf extends po{constructor(e){super(e)}load(e,t,n,r){const s=new Kt,l=new kf(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Xf extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Yf extends Xf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}class ic extends Kl{constructor(e=-1,t=1,n=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,l=n+e,o=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,l=s+f*this.view.width,o-=d*this.view.offsetY,u=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,l,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qf extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function el(i,e,t,n){const r=jf(n);switch(t){case zl:return i*e;case Vl:return i*e/r.components*r.byteLength;case io:return i*e/r.components*r.byteLength;case ji:return i*e*2/r.components*r.byteLength;case ro:return i*e*2/r.components*r.byteLength;case Gl:return i*e*3/r.components*r.byteLength;case gn:return i*e*4/r.components*r.byteLength;case so:return i*e*4/r.components*r.byteLength;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case as:case os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:case ya:return Math.max(i,16)*Math.max(e,8)/4;case xa:case Ma:return Math.max(i,8)*Math.max(e,8)/2;case Ea:case Ta:case ba:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case Xa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qa:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ka:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jf(i){switch(i){case mn:case Nl:return{byteLength:1,components:1};case Sr:case Fl:case Yn:return{byteLength:2,components:1};case to:case no:return{byteLength:2,components:4};case In:case eo:case Rn:return{byteLength:4,components:1};case Ol:case Bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);function rc(){let i=null,e=!1,t=null,n=null;function r(s,l){t(s,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Kf(i){const e=new WeakMap;function t(o,u){const f=o.array,d=o.usage,p=f.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,f,d),o.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)v=i.HALF_FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,u,f){const d=u.array,p=u.updateRanges;if(i.bindBuffer(f,o),p.length===0)i.bufferSubData(f,0,d);else{p.sort((v,y)=>v.start-y.start);let _=0;for(let v=1;v<p.length;v++){const y=p[_],A=p[v];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++_,p[_]=A)}p.length=_+1;for(let v=0,y=p.length;v<y;v++){const A=p[v];i.bufferSubData(f,A.start*d.BYTES_PER_ELEMENT,d,A.start,A.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(i.deleteBuffer(u.buffer),e.delete(o))}function l(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=e.get(o);if(f===void 0)e.set(o,t(o,u));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,o,u),f.version=o.version}}return{get:r,remove:s,update:l}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",wh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ih=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Id=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ud=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,np=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Zf,alphahash_pars_fragment:$f,alphamap_fragment:Jf,alphamap_pars_fragment:Qf,alphatest_fragment:eh,alphatest_pars_fragment:th,aomap_fragment:nh,aomap_pars_fragment:ih,batching_pars_vertex:rh,batching_vertex:sh,begin_vertex:ah,beginnormal_vertex:oh,bsdfs:lh,iridescence_fragment:ch,bumpmap_pars_fragment:uh,clipping_planes_fragment:fh,clipping_planes_pars_fragment:hh,clipping_planes_pars_vertex:dh,clipping_planes_vertex:ph,color_fragment:mh,color_pars_fragment:gh,color_pars_vertex:_h,color_vertex:vh,common:xh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:Mh,displacementmap_pars_vertex:yh,displacementmap_vertex:Eh,emissivemap_fragment:Th,emissivemap_pars_fragment:Ah,colorspace_fragment:bh,colorspace_pars_fragment:wh,envmap_fragment:Rh,envmap_common_pars_fragment:Ch,envmap_pars_fragment:Ph,envmap_pars_vertex:Lh,envmap_physical_pars_fragment:Hh,envmap_vertex:Dh,fog_vertex:Ih,fog_pars_vertex:Uh,fog_fragment:Nh,fog_pars_fragment:Fh,gradientmap_pars_fragment:Oh,lightmap_pars_fragment:Bh,lights_lambert_fragment:zh,lights_lambert_pars_fragment:Gh,lights_pars_begin:Vh,lights_toon_fragment:kh,lights_toon_pars_fragment:Wh,lights_phong_fragment:Xh,lights_phong_pars_fragment:Yh,lights_physical_fragment:qh,lights_physical_pars_fragment:jh,lights_fragment_begin:Kh,lights_fragment_maps:Zh,lights_fragment_end:$h,logdepthbuf_fragment:Jh,logdepthbuf_pars_fragment:Qh,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:td,map_fragment:nd,map_pars_fragment:id,map_particle_fragment:rd,map_particle_pars_fragment:sd,metalnessmap_fragment:ad,metalnessmap_pars_fragment:od,morphinstance_vertex:ld,morphcolor_vertex:cd,morphnormal_vertex:ud,morphtarget_pars_vertex:fd,morphtarget_vertex:hd,normal_fragment_begin:dd,normal_fragment_maps:pd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:_d,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:Md,iridescence_pars_fragment:yd,opaque_fragment:Ed,packing:Td,premultiplied_alpha_fragment:Ad,project_vertex:bd,dithering_fragment:wd,dithering_pars_fragment:Rd,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Dd,shadowmap_vertex:Id,shadowmask_pars_fragment:Ud,skinbase_vertex:Nd,skinning_pars_vertex:Fd,skinning_vertex:Od,skinnormal_vertex:Bd,specularmap_fragment:zd,specularmap_pars_fragment:Gd,tonemapping_fragment:Vd,tonemapping_pars_fragment:Hd,transmission_fragment:kd,transmission_pars_fragment:Wd,uv_pars_fragment:Xd,uv_pars_vertex:Yd,uv_vertex:qd,worldpos_vertex:jd,background_vert:Kd,background_frag:Zd,backgroundCube_vert:$d,backgroundCube_frag:Jd,cube_vert:Qd,cube_frag:ep,depth_vert:tp,depth_frag:np,distance_vert:ip,distance_frag:rp,equirect_vert:sp,equirect_frag:ap,linedashed_vert:op,linedashed_frag:lp,meshbasic_vert:cp,meshbasic_frag:up,meshlambert_vert:fp,meshlambert_frag:hp,meshmatcap_vert:dp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:_p,meshphong_frag:vp,meshphysical_vert:xp,meshphysical_frag:Sp,meshtoon_vert:Mp,meshtoon_frag:yp,points_vert:Ep,points_frag:Tp,shadow_vert:Ap,shadow_frag:bp,sprite_vert:wp,sprite_frag:Rp},Ce={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},wn={basic:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new _t(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Jt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Jt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new _t(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Jt([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Jt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Jt([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Jt([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Jt([Ce.common,Ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Jt([Ce.lights,Ce.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};wn.physical={uniforms:Jt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ts={r:0,b:0,g:0},gi=new jn,Cp=new Ct;function Pp(i,e,t,n,r,s,l){const o=new _t(0);let u=s===!0?0:1,f,d,p=null,_=0,v=null;function y(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?t:e).get(w)),w}function A(P){let w=!1;const U=y(P);U===null?g(o,u):U&&U.isColor&&(g(U,1),w=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(P,w){const U=y(w);U&&(U.isCubeTexture||U.mapping===hs)?(d===void 0&&(d=new Qt(new Rr(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Zi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,B,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),gi.copy(w.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(gi)),d.material.toneMapped=ot.getTransfer(U.colorSpace)!==xt,(p!==U||_!==U.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,p=U,_=U.version,v=i.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(f===void 0&&(f=new Qt(new Ti(2,2),new Un({name:"BackgroundMaterial",uniforms:Zi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=U,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=ot.getTransfer(U.colorSpace)!==xt,U.matrixAutoUpdate===!0&&U.updateMatrix(),f.material.uniforms.uvTransform.value.copy(U.matrix),(p!==U||_!==U.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,p=U,_=U.version,v=i.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function g(P,w){P.getRGB(ts,jl(i)),n.buffers.color.setClear(ts.r,ts.g,ts.b,w,l)}function I(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,w=1){o.set(P),u=w,g(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,g(o,u)},render:A,addToRenderList:x,dispose:I}}function Lp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let s=r,l=!1;function o(b,F,$,Z,ae){let oe=!1;const ee=p(Z,$,F);s!==ee&&(s=ee,f(s.object)),oe=v(b,Z,$,ae),oe&&y(b,Z,$,ae),ae!==null&&e.update(ae,i.ELEMENT_ARRAY_BUFFER),(oe||l)&&(l=!1,w(b,F,$,Z),ae!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function u(){return i.createVertexArray()}function f(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function p(b,F,$){const Z=$.wireframe===!0;let ae=n[b.id];ae===void 0&&(ae={},n[b.id]=ae);let oe=ae[F.id];oe===void 0&&(oe={},ae[F.id]=oe);let ee=oe[Z];return ee===void 0&&(ee=_(u()),oe[Z]=ee),ee}function _(b){const F=[],$=[],Z=[];for(let ae=0;ae<t;ae++)F[ae]=0,$[ae]=0,Z[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:Z,object:b,attributes:{},index:null}}function v(b,F,$,Z){const ae=s.attributes,oe=F.attributes;let ee=0;const te=$.getAttributes();for(const ue in te)if(te[ue].location>=0){const xe=ae[ue];let Pe=oe[ue];if(Pe===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(Pe=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(Pe=b.instanceColor)),xe===void 0||xe.attribute!==Pe||Pe&&xe.data!==Pe.data)return!0;ee++}return s.attributesNum!==ee||s.index!==Z}function y(b,F,$,Z){const ae={},oe=F.attributes;let ee=0;const te=$.getAttributes();for(const ue in te)if(te[ue].location>=0){let xe=oe[ue];xe===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));const Pe={};Pe.attribute=xe,xe&&xe.data&&(Pe.data=xe.data),ae[ue]=Pe,ee++}s.attributes=ae,s.attributesNum=ee,s.index=Z}function A(){const b=s.newAttributes;for(let F=0,$=b.length;F<$;F++)b[F]=0}function x(b){g(b,0)}function g(b,F){const $=s.newAttributes,Z=s.enabledAttributes,ae=s.attributeDivisors;$[b]=1,Z[b]===0&&(i.enableVertexAttribArray(b),Z[b]=1),ae[b]!==F&&(i.vertexAttribDivisor(b,F),ae[b]=F)}function I(){const b=s.newAttributes,F=s.enabledAttributes;for(let $=0,Z=F.length;$<Z;$++)F[$]!==b[$]&&(i.disableVertexAttribArray($),F[$]=0)}function P(b,F,$,Z,ae,oe,ee){ee===!0?i.vertexAttribIPointer(b,F,$,ae,oe):i.vertexAttribPointer(b,F,$,Z,ae,oe)}function w(b,F,$,Z){A();const ae=Z.attributes,oe=$.getAttributes(),ee=F.defaultAttributeValues;for(const te in oe){const ue=oe[te];if(ue.location>=0){let be=ae[te];if(be===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),be!==void 0){const xe=be.normalized,Pe=be.itemSize,Ke=e.get(be);if(Ke===void 0)continue;const Ze=Ke.buffer,vt=Ke.type,dt=Ke.bytesPerElement,ce=vt===i.INT||vt===i.UNSIGNED_INT||be.gpuType===eo;if(be.isInterleavedBufferAttribute){const fe=be.data,De=fe.stride,qe=be.offset;if(fe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<ue.locationSize;Ue++)g(ue.location+Ue,fe.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ue=0;Ue<ue.locationSize;Ue++)x(ue.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Ue=0;Ue<ue.locationSize;Ue++)P(ue.location+Ue,Pe/ue.locationSize,vt,xe,De*dt,(qe+Pe/ue.locationSize*Ue)*dt,ce)}else{if(be.isInstancedBufferAttribute){for(let fe=0;fe<ue.locationSize;fe++)g(ue.location+fe,be.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let fe=0;fe<ue.locationSize;fe++)x(ue.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let fe=0;fe<ue.locationSize;fe++)P(ue.location+fe,Pe/ue.locationSize,vt,xe,Pe*dt,Pe/ue.locationSize*fe*dt,ce)}}else if(ee!==void 0){const xe=ee[te];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(ue.location,xe);break;case 3:i.vertexAttrib3fv(ue.location,xe);break;case 4:i.vertexAttrib4fv(ue.location,xe);break;default:i.vertexAttrib1fv(ue.location,xe)}}}}I()}function U(){j();for(const b in n){const F=n[b];for(const $ in F){const Z=F[$];for(const ae in Z)d(Z[ae].object),delete Z[ae];delete F[$]}delete n[b]}}function N(b){if(n[b.id]===void 0)return;const F=n[b.id];for(const $ in F){const Z=F[$];for(const ae in Z)d(Z[ae].object),delete Z[ae];delete F[$]}delete n[b.id]}function B(b){for(const F in n){const $=n[F];if($[b.id]===void 0)continue;const Z=$[b.id];for(const ae in Z)d(Z[ae].object),delete Z[ae];delete $[b.id]}}function j(){T(),l=!0,s!==r&&(s=r,f(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:j,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:x,disableUnusedAttributes:I}}function Dp(i,e,t){let n;function r(f){n=f}function s(f,d){i.drawArrays(n,f,d),t.update(d,n,1)}function l(f,d,p){p!==0&&(i.drawArraysInstanced(n,f,d,p),t.update(d,n,p))}function o(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,p);let v=0;for(let y=0;y<p;y++)v+=d[y];t.update(v,n,1)}function u(f,d,p,_){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<f.length;y++)l(f[y],d[y],_[y]);else{v.multiDrawArraysInstancedWEBGL(n,f,0,d,0,_,0,p);let y=0;for(let A=0;A<p;A++)y+=d[A]*_[A];t.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=l,this.renderMultiDraw=o,this.renderMultiDrawInstances=u}function Ip(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(B){return!(B!==gn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(B){const j=B===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==mn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Rn&&!j)}function u(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const d=u(f);d!==f&&(je("WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const p=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=i.getParameter(i.MAX_SAMPLES),N=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:p,reversedDepthBuffer:_,maxTextures:v,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:w,maxSamples:U,samples:N}}function Up(i){const e=this;let t=null,n=0,r=!1,s=!1;const l=new vi,o=new Je,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const v=p.length!==0||_||n!==0||r;return r=_,n=p.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,_){t=d(p,_,0)},this.setState=function(p,_,v){const y=p.clippingPlanes,A=p.clipIntersection,x=p.clipShadows,g=i.get(p);if(!r||y===null||y.length===0||s&&!x)s?d(null):f();else{const I=s?0:n,P=I*4;let w=g.clippingState||null;u.value=w,w=d(y,_,P,v);for(let U=0;U!==P;++U)w[U]=t[U];g.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,_,v,y){const A=p!==null?p.length:0;let x=null;if(A!==0){if(x=u.value,y!==!0||x===null){const g=v+A*4,I=_.matrixWorldInverse;o.getNormalMatrix(I),(x===null||x.length<g)&&(x=new Float32Array(g));for(let P=0,w=v;P!==A;++P,w+=4)l.copy(p[P]).applyMatrix4(I,o),l.normal.toArray(x,w),x[w+3]=l.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function Np(i){let e=new WeakMap;function t(l,o){return o===ma?l.mapping=Ai:o===ga&&(l.mapping=qi),l}function n(l){if(l&&l.isTexture){const o=l.mapping;if(o===ma||o===ga)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const f=new $l(u.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",r),t(f.texture,l.mapping)}else return null}}return l}function r(l){const o=l.target;o.removeEventListener("dispose",r);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ai=4,tl=[.125,.215,.35,.446,.526,.582],Si=20,Fp=256,hr=new ic,nl=new _t;let Js=null,Qs=0,ea=0,ta=!1;const Op=new H;class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:l=256,position:o=Op}=s;Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,o),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Js,Qs,ea),this._renderer.xr.enabled=ta,e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Yn,format:gn,colorSpace:Ki,depthBuffer:!1},r=rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bp(s)),this._blurMaterial=Gp(s,e,t),this._ggxMaterial=zp(s,e,t)}return r}_compileMaterial(e){const t=new Qt(new Tn,e);this._renderer.compile(t,hr)}_sceneToCubeUV(e,t,n,r,s){const u=new pn(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(nl),p.toneMapping=Pn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new Rr,new Hn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let g=!1;const I=e.background;I?I.isColor&&(x.color.copy(I),e.background=null,g=!0):(x.color.copy(nl),g=!0);for(let P=0;P<6;P++){const w=P%3;w===0?(u.up.set(0,f[P],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+d[P],s.y,s.z)):w===1?(u.up.set(0,0,f[P]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+d[P],s.z)):(u.up.set(0,f[P],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+d[P]));const U=this._cubeSize;ki(r,w*U,P>2?U:0,U,U),p.setRenderTarget(r),g&&p.render(A,u),p.render(e,u)}p.toneMapping=v,p.autoClear=_,e.background=I}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ai||e.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const s=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=s;const o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;ki(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,l=this._ggxMaterial,o=this._lodMeshes[n];o.material=l;const u=l.uniforms,f=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(f*f-d*d),_=0+f*1.25,v=p*_,{_lodMax:y}=this,A=this._sizeLods[n],x=3*A*(n>y-ai?n-y+ai:0),g=4*(this._cubeSize-A);u.envMap.value=e.texture,u.roughness.value=v,u.mipInt.value=y-t,ki(s,x,g,3*A,2*A),r.setRenderTarget(s),r.render(o,hr),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=y-n,ki(e,x,g,3*A,2*A),r.setRenderTarget(e),r.render(o,hr)}_blur(e,t,n,r,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",s),this._halfBlur(l,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,l,o){const u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=f;const _=f.uniforms,v=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Si-1),A=s/y,x=isFinite(s)?1+Math.floor(d*A):Si;x>Si&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Si}`);const g=[];let I=0;for(let B=0;B<Si;++B){const j=B/A,T=Math.exp(-j*j/2);g.push(T),B===0?I+=T:B<x&&(I+=2*T)}for(let B=0;B<g.length;B++)g[B]=g[B]/I;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=g,_.latitudinal.value=l==="latitudinal",o&&(_.poleAxis.value=o);const{_lodMax:P}=this;_.dTheta.value=y,_.mipInt.value=P-n;const w=this._sizeLods[r],U=3*w*(r>P-ai?r-P+ai:0),N=4*(this._cubeSize-w);ki(t,U,N,3*w,2*w),u.setRenderTarget(t),u.render(p,hr)}}function Bp(i){const e=[],t=[],n=[];let r=i;const s=i-ai+1+tl.length;for(let l=0;l<s;l++){const o=Math.pow(2,r);e.push(o);let u=1/o;l>i-ai?u=tl[l-i+ai-1]:l===0&&(u=0),t.push(u);const f=1/(o-2),d=-f,p=1+f,_=[d,d,p,d,p,p,d,d,p,p,d,p],v=6,y=6,A=3,x=2,g=1,I=new Float32Array(A*y*v),P=new Float32Array(x*y*v),w=new Float32Array(g*y*v);for(let N=0;N<v;N++){const B=N%3*2/3-1,j=N>2?0:-1,T=[B,j,0,B+2/3,j,0,B+2/3,j+1,0,B,j,0,B+2/3,j+1,0,B,j+1,0];I.set(T,A*y*N),P.set(_,x*y*N);const b=[N,N,N,N,N,N];w.set(b,g*y*N)}const U=new Tn;U.setAttribute("position",new Dn(I,A)),U.setAttribute("uv",new Dn(P,x)),U.setAttribute("faceIndex",new Dn(w,g)),n.push(new Qt(U,null)),r>ai&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function rl(i,e,t){const n=new Ln(i,e,t);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function zp(i,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ps(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Gp(i,e,t){const n=new Float32Array(Si),r=new H(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function sl(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function al(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ps(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const u=o.mapping,f=u===ma||u===ga,d=u===Ai||u===qi;if(f||d){let p=e.get(o);const _=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==_)return t===null&&(t=new il(i)),p=f?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const v=o.image;return f&&v&&v.height>0||d&&v&&r(v)?(t===null&&(t=new il(i)),p=f?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let u=0;const f=6;for(let d=0;d<f;d++)o[d]!==void 0&&u++;return u===f}function s(o){const u=o.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Hp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Er("WebGLRenderer: "+n+" extension not supported."),r}}}function kp(i,e,t,n){const r={},s=new WeakMap;function l(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const y in _.attributes)e.remove(_.attributes[y]);_.removeEventListener("dispose",l),delete r[_.id];const v=s.get(_);v&&(e.remove(v),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function o(p,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,t.memory.geometries++),_}function u(p){const _=p.attributes;for(const v in _)e.update(_[v],i.ARRAY_BUFFER)}function f(p){const _=[],v=p.index,y=p.attributes.position;let A=0;if(v!==null){const I=v.array;A=v.version;for(let P=0,w=I.length;P<w;P+=3){const U=I[P+0],N=I[P+1],B=I[P+2];_.push(U,N,N,B,B,U)}}else if(y!==void 0){const I=y.array;A=y.version;for(let P=0,w=I.length/3-1;P<w;P+=3){const U=P+0,N=P+1,B=P+2;_.push(U,N,N,B,B,U)}}else return;const x=new(Hl(_)?ql:Yl)(_,1);x.version=A;const g=s.get(p);g&&e.remove(g),s.set(p,x)}function d(p){const _=s.get(p);if(_){const v=p.index;v!==null&&_.version<v.version&&f(p)}else f(p);return s.get(p)}return{get:o,update:u,getWireframeAttribute:d}}function Wp(i,e,t){let n;function r(_){n=_}let s,l;function o(_){s=_.type,l=_.bytesPerElement}function u(_,v){i.drawElements(n,v,s,_*l),t.update(v,n,1)}function f(_,v,y){y!==0&&(i.drawElementsInstanced(n,v,s,_*l,y),t.update(v,n,y))}function d(_,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,_,0,y);let x=0;for(let g=0;g<y;g++)x+=v[g];t.update(x,n,1)}function p(_,v,y,A){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<_.length;g++)f(_[g]/l,v[g],A[g]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,s,_,0,A,0,y);let g=0;for(let I=0;I<y;I++)g+=v[I]*A[I];t.update(g,n,1)}}this.setMode=r,this.setIndex=o,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Xp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,o){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ht("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Yp(i,e,t){const n=new WeakMap,r=new Pt;function s(l,o,u){const f=l.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let _=n.get(o);if(_===void 0||_.count!==p){let T=function(){B.dispose(),n.delete(o),o.removeEventListener("dispose",T)};_!==void 0&&_.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],I=o.morphAttributes.color||[];let P=0;v===!0&&(P=1),y===!0&&(P=2),A===!0&&(P=3);let w=o.attributes.position.count*P,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const N=new Float32Array(w*U*4*p),B=new kl(N,w,U,p);B.type=Rn,B.needsUpdate=!0;const j=P*4;for(let b=0;b<p;b++){const F=x[b],$=g[b],Z=I[b],ae=w*U*4*b;for(let oe=0;oe<F.count;oe++){const ee=oe*j;v===!0&&(r.fromBufferAttribute(F,oe),N[ae+ee+0]=r.x,N[ae+ee+1]=r.y,N[ae+ee+2]=r.z,N[ae+ee+3]=0),y===!0&&(r.fromBufferAttribute($,oe),N[ae+ee+4]=r.x,N[ae+ee+5]=r.y,N[ae+ee+6]=r.z,N[ae+ee+7]=0),A===!0&&(r.fromBufferAttribute(Z,oe),N[ae+ee+8]=r.x,N[ae+ee+9]=r.y,N[ae+ee+10]=r.z,N[ae+ee+11]=Z.itemSize===4?r.w:1)}}_={count:p,texture:B,size:new Ye(w,U)},n.set(o,_),o.addEventListener("dispose",T)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let v=0;for(let A=0;A<f.length;A++)v+=f[A];const y=o.morphTargetsRelative?1:1-v;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",f)}u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:s}}function qp(i,e,t,n){let r=new WeakMap;function s(u){const f=n.render.frame,d=u.geometry,p=e.get(u,d);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const _=u.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return p}function l(){r=new WeakMap}function o(u){const f=u.target;f.removeEventListener("dispose",o),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:l}}const jp={[wl]:"LINEAR_TONE_MAPPING",[Rl]:"REINHARD_TONE_MAPPING",[Cl]:"CINEON_TONE_MAPPING",[Pl]:"ACES_FILMIC_TONE_MAPPING",[Dl]:"AGX_TONE_MAPPING",[Il]:"NEUTRAL_TONE_MAPPING",[Ll]:"CUSTOM_TONE_MAPPING"};function Kp(i,e,t,n,r){const s=new Ln(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),l=new Ln(e,t,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),o=new Tn;o.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new tn([0,2,0,0,2,0],2));const u=new Bf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Qt(o,u),d=new ic(-1,1,1,-1,0,1);let p=null,_=null,v=!1,y,A=null,x=[],g=!1;this.setSize=function(I,P){s.setSize(I,P),l.setSize(I,P);for(let w=0;w<x.length;w++){const U=x[w];U.setSize&&U.setSize(I,P)}},this.setEffects=function(I){x=I,g=x.length>0&&x[0].isRenderPass===!0;const P=s.width,w=s.height;for(let U=0;U<x.length;U++){const N=x[U];N.setSize&&N.setSize(P,w)}},this.begin=function(I,P){if(v||I.toneMapping===Pn&&x.length===0)return!1;if(A=P,P!==null){const w=P.width,U=P.height;(s.width!==w||s.height!==U)&&this.setSize(w,U)}return g===!1&&I.setRenderTarget(s),y=I.toneMapping,I.toneMapping=Pn,!0},this.hasRenderPass=function(){return g},this.end=function(I,P){I.toneMapping=y,v=!0;let w=s,U=l;for(let N=0;N<x.length;N++){const B=x[N];if(B.enabled!==!1&&(B.render(I,U,w,P),B.needsSwap!==!1)){const j=w;w=U,U=j}}if(p!==I.outputColorSpace||_!==I.toneMapping){p=I.outputColorSpace,_=I.toneMapping,u.defines={},ot.getTransfer(p)===xt&&(u.defines.SRGB_TRANSFER="");const N=jp[_];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,I.setRenderTarget(A),I.render(f,d),A=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),l.dispose(),o.dispose(),u.dispose()}}const sc=new Kt,$a=new Ar(1,1),ac=new kl,oc=new $u,lc=new Zl,ol=[],ll=[],cl=new Float32Array(16),ul=new Float32Array(9),fl=new Float32Array(4);function Qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ol[r];if(s===void 0&&(s=new Float32Array(r),ol[r]=s),e!==0){n.toArray(s,0);for(let l=1,o=0;l!==e;++l)o+=t,i[l].toArray(s,o)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ms(i,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;fl.set(n),i.uniformMatrix2fv(this.addr,!1,fl),Ut(t,n)}}function tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;ul.set(n),i.uniformMatrix3fv(this.addr,!1,ul),Ut(t,n)}}function nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),Ut(t,n)}}function im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?($a.compareFunction=t.isReversedDepthBuffer()?oo:ao,s=$a):s=sc,t.setTexture2D(e||s,r)}function hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||oc,r)}function dm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||lc,r)}function pm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ac,r)}function mm(i){switch(i){case 5126:return Zp;case 35664:return $p;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return sm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(i,e){i.uniform1fv(this.addr,e)}function _m(i,e){const t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function vm(i,e){const t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function xm(i,e){const t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function Sm(i,e){const t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mm(i,e){const t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ym(i,e){const t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Em(i,e){i.uniform1iv(this.addr,e)}function Tm(i,e){i.uniform2iv(this.addr,e)}function Am(i,e){i.uniform3iv(this.addr,e)}function bm(i,e){i.uniform4iv(this.addr,e)}function wm(i,e){i.uniform1uiv(this.addr,e)}function Rm(i,e){i.uniform2uiv(this.addr,e)}function Cm(i,e){i.uniform3uiv(this.addr,e)}function Pm(i,e){i.uniform4uiv(this.addr,e)}function Lm(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));let l;this.type===i.SAMPLER_2D_SHADOW?l=$a:l=sc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||l,s[o])}function Dm(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||oc,s[l])}function Im(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||lc,s[l])}function Um(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||ac,s[l])}function Nm(i){switch(i){case 5126:return gm;case 35664:return _m;case 35665:return vm;case 35666:return xm;case 35674:return Sm;case 35675:return Mm;case 35676:return ym;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return bm;case 5125:return wm;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Um}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}}class Bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function hl(i,e){i.seq.push(e),i.map[e.id]=e}function zm(i,e,t){const n=i.name,r=n.length;for(na.lastIndex=0;;){const s=na.exec(n),l=na.lastIndex;let o=s[1];const u=s[2]==="]",f=s[3];if(u&&(o=o|0),f===void 0||f==="["&&l+2===r){hl(t,f===void 0?new Fm(o,i,e):new Om(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Bm(o),hl(t,p)),t=p}}}class ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const o=e.getActiveUniform(t,l),u=e.getUniformLocation(t,o.name);zm(o,u,this)}const r=[],s=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):s.push(l);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,l=t.length;s!==l;++s){const o=t[s],u=n[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function dl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gm=37297;let Vm=0;function Hm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=r;l<s;l++){const o=l+1;n.push(`${o===e?">":" "} ${o}: ${t[l]}`)}return n.join(`
`)}const pl=new Je;function km(i){ot._getMatrix(pl,ot.workingColorSpace,i);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case cs:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ml(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const o=parseInt(l[1]);return t.toUpperCase()+`

`+s+`

`+Hm(i.getShaderSource(e),o)}else return s}function Wm(i,e){const t=km(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Xm={[wl]:"Linear",[Rl]:"Reinhard",[Cl]:"Cineon",[Pl]:"ACESFilmic",[Dl]:"AgX",[Il]:"Neutral",[Ll]:"Custom"};function Ym(i,e){const t=Xm[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ns=new H;function qm(){ot.getLuminanceCoefficients(ns);const i=ns.x.toFixed(4),e=ns.y.toFixed(4),t=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Km(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),l=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[l]={type:s.type,location:i.getAttribLocation(e,l),locationSize:o}}return t}function mr(i){return i!==""}function gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $m=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace($m,Qm)}const Jm=new Map;function Qm(i,e){let t=tt[e];if(t===void 0){const n=Jm.get(e);if(n!==void 0)t=tt[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ja(t)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(eg,tg)}function tg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ng={[is]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function ig(i){return ng[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rg={[Ai]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE_UV"};function sg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ag={[qi]:"ENVMAP_MODE_REFRACTION"};function og(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ag[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lg={[bl]:"ENVMAP_BLENDING_MULTIPLY",[gu]:"ENVMAP_BLENDING_MIX",[_u]:"ENVMAP_BLENDING_ADD"};function cg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lg[i.combine]||"ENVMAP_BLENDING_NONE"}function ug(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fg(i,e,t,n){const r=i.getContext(),s=t.defines;let l=t.vertexShader,o=t.fragmentShader;const u=ig(t),f=sg(t),d=og(t),p=cg(t),_=ug(t),v=jm(t),y=Km(s),A=r.createProgram();let x,g,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(mr).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(mr).join(`
`),g.length>0&&(g+=`
`)):(x=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),g=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Ym("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),l=Ja(l),l=gl(l,t),l=_l(l,t),o=Ja(o),o=gl(o,t),o=_l(o,t),l=vl(l),o=vl(o),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=I+x+l,w=I+g+o,U=dl(r,r.VERTEX_SHADER,P),N=dl(r,r.FRAGMENT_SHADER,w);r.attachShader(A,U),r.attachShader(A,N),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function B(F){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(A)||"",Z=r.getShaderInfoLog(U)||"",ae=r.getShaderInfoLog(N)||"",oe=$.trim(),ee=Z.trim(),te=ae.trim();let ue=!0,be=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(ue=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,U,N);else{const xe=ml(r,U,"vertex"),Pe=ml(r,N,"fragment");ht("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+oe+`
`+xe+`
`+Pe)}else oe!==""?je("WebGLProgram: Program Info Log:",oe):(ee===""||te==="")&&(be=!1);be&&(F.diagnostics={runnable:ue,programLog:oe,vertexShader:{log:ee,prefix:x},fragmentShader:{log:te,prefix:g}})}r.deleteShader(U),r.deleteShader(N),j=new ls(r,A),T=Zm(r,A)}let j;this.getUniforms=function(){return j===void 0&&B(this),j};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(A,Gm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=N,this}let hg=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pg(e),t.set(e,n)),n}}class pg{constructor(e){this.id=hg++,this.code=e,this.usedTimes=0}}function mg(i,e,t,n,r,s,l){const o=new Wl,u=new dg,f=new Set,d=[],p=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return f.add(T),T===0?"uv":`uv${T}`}function x(T,b,F,$,Z){const ae=$.fog,oe=Z.geometry,ee=T.isMeshStandardMaterial?$.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||ee),ue=te&&te.mapping===hs?te.image.height:null,be=y[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&je("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const xe=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Pe=xe!==void 0?xe.length:0;let Ke=0;oe.morphAttributes.position!==void 0&&(Ke=1),oe.morphAttributes.normal!==void 0&&(Ke=2),oe.morphAttributes.color!==void 0&&(Ke=3);let Ze,vt,dt,ce;if(be){const rt=wn[be];Ze=rt.vertexShader,vt=rt.fragmentShader}else Ze=T.vertexShader,vt=T.fragmentShader,u.update(T),dt=u.getVertexShaderID(T),ce=u.getFragmentShaderID(T);const fe=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),qe=Z.isInstancedMesh===!0,Ue=Z.isBatchedMesh===!0,Qe=!!T.map,wt=!!T.matcap,Oe=!!te,Xe=!!T.aoMap,lt=!!T.lightMap,$e=!!T.bumpMap,yt=!!T.normalMap,O=!!T.displacementMap,St=!!T.emissiveMap,st=!!T.metalnessMap,pt=!!T.roughnessMap,q=T.anisotropy>0,M=T.clearcoat>0,m=T.dispersion>0,D=T.iridescence>0,W=T.sheen>0,X=T.transmission>0,G=q&&!!T.anisotropyMap,re=M&&!!T.clearcoatMap,ne=M&&!!T.clearcoatNormalMap,ie=M&&!!T.clearcoatRoughnessMap,ve=D&&!!T.iridescenceMap,se=D&&!!T.iridescenceThicknessMap,pe=W&&!!T.sheenColorMap,Me=W&&!!T.sheenRoughnessMap,Re=!!T.specularMap,ge=!!T.specularColorMap,Be=!!T.specularIntensityMap,z=X&&!!T.transmissionMap,Se=X&&!!T.thicknessMap,de=!!T.gradientMap,Te=!!T.alphaMap,he=T.alphaTest>0,le=!!T.alphaHash,_e=!!T.extensions;let Ge=Pn;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const ct={shaderID:be,shaderType:T.type,shaderName:T.name,vertexShader:Ze,fragmentShader:vt,defines:T.defines,customVertexShaderID:dt,customFragmentShaderID:ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Ue,batchingColor:Ue&&Z._colorsTexture!==null,instancing:qe,instancingColor:qe&&Z.instanceColor!==null,instancingMorph:qe&&Z.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ki,alphaToCoverage:!!T.alphaToCoverage,map:Qe,matcap:wt,envMap:Oe,envMapMode:Oe&&te.mapping,envMapCubeUVHeight:ue,aoMap:Xe,lightMap:lt,bumpMap:$e,normalMap:yt,displacementMap:O,emissiveMap:St,normalMapObjectSpace:yt&&T.normalMapType===Mu,normalMapTangentSpace:yt&&T.normalMapType===Su,metalnessMap:st,roughnessMap:pt,anisotropy:q,anisotropyMap:G,clearcoat:M,clearcoatMap:re,clearcoatNormalMap:ne,clearcoatRoughnessMap:ie,dispersion:m,iridescence:D,iridescenceMap:ve,iridescenceThicknessMap:se,sheen:W,sheenColorMap:pe,sheenRoughnessMap:Me,specularMap:Re,specularColorMap:ge,specularIntensityMap:Be,transmission:X,transmissionMap:z,thicknessMap:Se,gradientMap:de,opaque:T.transparent===!1&&T.blending===Ei&&T.alphaToCoverage===!1,alphaMap:Te,alphaTest:he,alphaHash:le,combine:T.combine,mapUv:Qe&&A(T.map.channel),aoMapUv:Xe&&A(T.aoMap.channel),lightMapUv:lt&&A(T.lightMap.channel),bumpMapUv:$e&&A(T.bumpMap.channel),normalMapUv:yt&&A(T.normalMap.channel),displacementMapUv:O&&A(T.displacementMap.channel),emissiveMapUv:St&&A(T.emissiveMap.channel),metalnessMapUv:st&&A(T.metalnessMap.channel),roughnessMapUv:pt&&A(T.roughnessMap.channel),anisotropyMapUv:G&&A(T.anisotropyMap.channel),clearcoatMapUv:re&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:ne&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:se&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Me&&A(T.sheenRoughnessMap.channel),specularMapUv:Re&&A(T.specularMap.channel),specularColorMapUv:ge&&A(T.specularColorMap.channel),specularIntensityMapUv:Be&&A(T.specularIntensityMap.channel),transmissionMapUv:z&&A(T.transmissionMap.channel),thicknessMapUv:Se&&A(T.thicknessMap.channel),alphaMapUv:Te&&A(T.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(yt||q),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!oe.attributes.uv&&(Qe||Te),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:De,skinning:Z.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Qe&&T.map.isVideoTexture===!0&&ot.getTransfer(T.map.colorSpace)===xt,decodeVideoTextureEmissive:St&&T.emissiveMap.isVideoTexture===!0&&ot.getTransfer(T.emissiveMap.colorSpace)===xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===yn,flipSided:T.side===rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:_e&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&T.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ct.vertexUv1s=f.has(1),ct.vertexUv2s=f.has(2),ct.vertexUv3s=f.has(3),f.clear(),ct}function g(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)b.push(F),b.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(I(b,T),P(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function I(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function P(T,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function w(T){const b=y[T.type];let F;if(b){const $=wn[b];F=hf.clone($.uniforms)}else F=T.uniforms;return F}function U(T,b){let F=p.get(b);return F!==void 0?++F.usedTimes:(F=new fg(i,b,T,s),d.push(F),p.set(b,F)),F}function N(T){if(--T.usedTimes===0){const b=d.indexOf(T);d[b]=d[d.length-1],d.pop(),p.delete(T.cacheKey),T.destroy()}}function B(T){u.remove(T)}function j(){u.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:U,releaseProgram:N,releaseShaderCache:B,programs:d,dispose:j}}function gg(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let o=i.get(l);return o===void 0&&(o={},i.set(l,o)),o}function n(l){i.delete(l)}function r(l,o,u){i.get(l)[o]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function _g(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ml(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function l(p,_,v,y,A,x){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:_,material:v,groupOrder:y,renderOrder:p.renderOrder,z:A,group:x},i[e]=g):(g.id=p.id,g.object=p,g.geometry=_,g.material=v,g.groupOrder=y,g.renderOrder=p.renderOrder,g.z=A,g.group=x),e++,g}function o(p,_,v,y,A,x){const g=l(p,_,v,y,A,x);v.transmission>0?n.push(g):v.transparent===!0?r.push(g):t.push(g)}function u(p,_,v,y,A,x){const g=l(p,_,v,y,A,x);v.transmission>0?n.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function f(p,_){t.length>1&&t.sort(p||_g),n.length>1&&n.sort(_||Sl),r.length>1&&r.sort(_||Sl)}function d(){for(let p=e,_=i.length;p<_;p++){const v=i[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:u,finish:d,sort:f}}function vg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let l;return s===void 0?(l=new Ml,i.set(n,[l])):r>=s.length?(l=new Ml,s.push(l)):l=s[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function xg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new _t};break;case"SpotLight":t={position:new H,direction:new H,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Sg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Mg=0;function yg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Eg(i){const e=new xg,t=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new H);const r=new H,s=new Ct,l=new Ct;function o(f){let d=0,p=0,_=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let v=0,y=0,A=0,x=0,g=0,I=0,P=0,w=0,U=0,N=0,B=0;f.sort(yg);for(let T=0,b=f.length;T<b;T++){const F=f[T],$=F.color,Z=F.intensity,ae=F.distance;let oe=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ji?oe=F.shadow.map.texture:oe=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=$.r*Z,p+=$.g*Z,_+=$.b*Z;else if(F.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(F.sh.coefficients[ee],Z);B++}else if(F.isDirectionalLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const te=F.shadow,ue=t.get(F);ue.shadowIntensity=te.intensity,ue.shadowBias=te.bias,ue.shadowNormalBias=te.normalBias,ue.shadowRadius=te.radius,ue.shadowMapSize=te.mapSize,n.directionalShadow[v]=ue,n.directionalShadowMap[v]=oe,n.directionalShadowMatrix[v]=F.shadow.matrix,I++}n.directional[v]=ee,v++}else if(F.isSpotLight){const ee=e.get(F);ee.position.setFromMatrixPosition(F.matrixWorld),ee.color.copy($).multiplyScalar(Z),ee.distance=ae,ee.coneCos=Math.cos(F.angle),ee.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ee.decay=F.decay,n.spot[A]=ee;const te=F.shadow;if(F.map&&(n.spotLightMap[U]=F.map,U++,te.updateMatrices(F),F.castShadow&&N++),n.spotLightMatrix[A]=te.matrix,F.castShadow){const ue=t.get(F);ue.shadowIntensity=te.intensity,ue.shadowBias=te.bias,ue.shadowNormalBias=te.normalBias,ue.shadowRadius=te.radius,ue.shadowMapSize=te.mapSize,n.spotShadow[A]=ue,n.spotShadowMap[A]=oe,w++}A++}else if(F.isRectAreaLight){const ee=e.get(F);ee.color.copy($).multiplyScalar(Z),ee.halfWidth.set(F.width*.5,0,0),ee.halfHeight.set(0,F.height*.5,0),n.rectArea[x]=ee,x++}else if(F.isPointLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),ee.distance=F.distance,ee.decay=F.decay,F.castShadow){const te=F.shadow,ue=t.get(F);ue.shadowIntensity=te.intensity,ue.shadowBias=te.bias,ue.shadowNormalBias=te.normalBias,ue.shadowRadius=te.radius,ue.shadowMapSize=te.mapSize,ue.shadowCameraNear=te.camera.near,ue.shadowCameraFar=te.camera.far,n.pointShadow[y]=ue,n.pointShadowMap[y]=oe,n.pointShadowMatrix[y]=F.shadow.matrix,P++}n.point[y]=ee,y++}else if(F.isHemisphereLight){const ee=e.get(F);ee.skyColor.copy(F.color).multiplyScalar(Z),ee.groundColor.copy(F.groundColor).multiplyScalar(Z),n.hemi[g]=ee,g++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=_;const j=n.hash;(j.directionalLength!==v||j.pointLength!==y||j.spotLength!==A||j.rectAreaLength!==x||j.hemiLength!==g||j.numDirectionalShadows!==I||j.numPointShadows!==P||j.numSpotShadows!==w||j.numSpotMaps!==U||j.numLightProbes!==B)&&(n.directional.length=v,n.spot.length=A,n.rectArea.length=x,n.point.length=y,n.hemi.length=g,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=w+U-N,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=B,j.directionalLength=v,j.pointLength=y,j.spotLength=A,j.rectAreaLength=x,j.hemiLength=g,j.numDirectionalShadows=I,j.numPointShadows=P,j.numSpotShadows=w,j.numSpotMaps=U,j.numLightProbes=B,n.version=Mg++)}function u(f,d){let p=0,_=0,v=0,y=0,A=0;const x=d.matrixWorldInverse;for(let g=0,I=f.length;g<I;g++){const P=f[g];if(P.isDirectionalLight){const w=n.directional[p];w.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),p++}else if(P.isSpotLight){const w=n.spot[v];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),v++}else if(P.isRectAreaLight){const w=n.rectArea[y];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(x),l.identity(),s.copy(P.matrixWorld),s.premultiply(x),l.extractRotation(s),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),y++}else if(P.isPointLight){const w=n.point[_];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(x),_++}else if(P.isHemisphereLight){const w=n.hemi[A];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(x),A++}}}return{setup:o,setupView:u,state:n}}function yl(i){const e=new Eg(i),t=[],n=[];function r(d){f.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function l(d){n.push(d)}function o(){e.setup(t)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:o,setupLightsView:u,pushLight:s,pushShadow:l}}function Tg(i){let e=new WeakMap;function t(r,s=0){const l=e.get(r);let o;return l===void 0?(o=new yl(i),e.set(r,[o])):s>=l.length?(o=new yl(i),l.push(o)):o=l[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wg=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Rg=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],El=new Ct,dr=new H,ia=new H;function Cg(i,e,t){let n=new Jl;const r=new Ye,s=new Ye,l=new Pt,o=new zf,u=new Gf,f={},d=t.maxTextureSize,p={[Xn]:rn,[rn]:Xn,[yn]:yn},_=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Ag,fragmentShader:bg}),v=_.clone();v.defines.HORIZONTAL_PASS=1;const y=new Tn;y.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qt(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is;let g=this.type;this.render=function(N,B,j){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;N.type===$c&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),N.type=is);const T=i.getRenderTarget(),b=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),$=i.state;$.setBlending(kn),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=g!==this.type;Z&&B.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(oe=>oe.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,oe=N.length;ae<oe;ae++){const ee=N[ae],te=ee.shadow;if(te===void 0){je("WebGLShadowMap:",ee,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);const ue=te.getFrameExtents();if(r.multiply(ue),s.copy(te.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ue.x),r.x=s.x*ue.x,te.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ue.y),r.y=s.y*ue.y,te.mapSize.y=s.y)),te.map===null||Z===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===pr){if(ee.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new Ln(r.x,r.y,{format:ji,type:Yn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),te.map.texture.name=ee.name+".shadowMap",te.map.depthTexture=new Ar(r.x,r.y,Rn),te.map.depthTexture.name=ee.name+".shadowMapDepth",te.map.depthTexture.format=qn,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Wt,te.map.depthTexture.magFilter=Wt}else{ee.isPointLight?(te.map=new $l(r.x),te.map.depthTexture=new yf(r.x,In)):(te.map=new Ln(r.x,r.y),te.map.depthTexture=new Ar(r.x,r.y,In)),te.map.depthTexture.name=ee.name+".shadowMap",te.map.depthTexture.format=qn;const xe=i.state.buffers.depth.getReversed();this.type===is?(te.map.depthTexture.compareFunction=xe?oo:ao,te.map.depthTexture.minFilter=jt,te.map.depthTexture.magFilter=jt):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Wt,te.map.depthTexture.magFilter=Wt)}te.camera.updateProjectionMatrix()}const be=te.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<be;xe++){if(te.map.isWebGLCubeRenderTarget)i.setRenderTarget(te.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(te.map),i.clear());const Pe=te.getViewport(xe);l.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),$.viewport(l)}if(ee.isPointLight){const Pe=te.camera,Ke=te.matrix,Ze=ee.distance||Pe.far;Ze!==Pe.far&&(Pe.far=Ze,Pe.updateProjectionMatrix()),dr.setFromMatrixPosition(ee.matrixWorld),Pe.position.copy(dr),ia.copy(Pe.position),ia.add(wg[xe]),Pe.up.copy(Rg[xe]),Pe.lookAt(ia),Pe.updateMatrixWorld(),Ke.makeTranslation(-dr.x,-dr.y,-dr.z),El.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),te._frustum.setFromProjectionMatrix(El,Pe.coordinateSystem,Pe.reversedDepth)}else te.updateMatrices(ee);n=te.getFrustum(),w(B,j,te.camera,ee,this.type)}te.isPointLightShadow!==!0&&this.type===pr&&I(te,j),te.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(T,b,F)};function I(N,B){const j=e.update(A);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ln(r.x,r.y,{format:ji,type:Yn})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(B,null,j,_,A,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(B,null,j,v,A,null)}function P(N,B,j,T){let b=null;const F=j.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)b=F;else if(b=j.isPointLight===!0?u:o,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=b.uuid,Z=B.uuid;let ae=f[$];ae===void 0&&(ae={},f[$]=ae);let oe=ae[Z];oe===void 0&&(oe=b.clone(),ae[Z]=oe,B.addEventListener("dispose",U)),b=oe}if(b.visible=B.visible,b.wireframe=B.wireframe,T===pr?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:p[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,j.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=i.properties.get(b);$.light=j}return b}function w(N,B,j,T,b){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===pr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,N.matrixWorld);const Z=e.update(N),ae=N.material;if(Array.isArray(ae)){const oe=Z.groups;for(let ee=0,te=oe.length;ee<te;ee++){const ue=oe[ee],be=ae[ue.materialIndex];if(be&&be.visible){const xe=P(N,be,T,b);N.onBeforeShadow(i,N,B,j,Z,xe,ue),i.renderBufferDirect(j,null,Z,xe,N,ue),N.onAfterShadow(i,N,B,j,Z,xe,ue)}}}else if(ae.visible){const oe=P(N,ae,T,b);N.onBeforeShadow(i,N,B,j,Z,oe,null),i.renderBufferDirect(j,null,Z,oe,N,null),N.onAfterShadow(i,N,B,j,Z,oe,null)}}const $=N.children;for(let Z=0,ae=$.length;Z<ae;Z++)w($[Z],B,j,T,b)}function U(N){N.target.removeEventListener("dispose",U);for(const j in f){const T=f[j],b=N.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const Pg={[la]:ca,[ua]:da,[fa]:pa,[Yi]:ha,[ca]:la,[da]:ua,[pa]:fa,[ha]:Yi};function Lg(i,e){function t(){let z=!1;const Se=new Pt;let de=null;const Te=new Pt(0,0,0,0);return{setMask:function(he){de!==he&&!z&&(i.colorMask(he,he,he,he),de=he)},setLocked:function(he){z=he},setClear:function(he,le,_e,Ge,ct){ct===!0&&(he*=Ge,le*=Ge,_e*=Ge),Se.set(he,le,_e,Ge),Te.equals(Se)===!1&&(i.clearColor(he,le,_e,Ge),Te.copy(Se))},reset:function(){z=!1,de=null,Te.set(-1,0,0,0)}}}function n(){let z=!1,Se=!1,de=null,Te=null,he=null;return{setReversed:function(le){if(Se!==le){const _e=e.get("EXT_clip_control");le?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),Se=le;const Ge=he;he=null,this.setClear(Ge)}},getReversed:function(){return Se},setTest:function(le){le?fe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(le){de!==le&&!z&&(i.depthMask(le),de=le)},setFunc:function(le){if(Se&&(le=Pg[le]),Te!==le){switch(le){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case da:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=le}},setLocked:function(le){z=le},setClear:function(le){he!==le&&(Se&&(le=1-le),i.clearDepth(le),he=le)},reset:function(){z=!1,de=null,Te=null,he=null,Se=!1}}}function r(){let z=!1,Se=null,de=null,Te=null,he=null,le=null,_e=null,Ge=null,ct=null;return{setTest:function(rt){z||(rt?fe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(rt){Se!==rt&&!z&&(i.stencilMask(rt),Se=rt)},setFunc:function(rt,Bt,_n){(de!==rt||Te!==Bt||he!==_n)&&(i.stencilFunc(rt,Bt,_n),de=rt,Te=Bt,he=_n)},setOp:function(rt,Bt,_n){(le!==rt||_e!==Bt||Ge!==_n)&&(i.stencilOp(rt,Bt,_n),le=rt,_e=Bt,Ge=_n)},setLocked:function(rt){z=rt},setClear:function(rt){ct!==rt&&(i.clearStencil(rt),ct=rt)},reset:function(){z=!1,Se=null,de=null,Te=null,he=null,le=null,_e=null,Ge=null,ct=null}}}const s=new t,l=new n,o=new r,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,v=[],y=null,A=!1,x=null,g=null,I=null,P=null,w=null,U=null,N=null,B=new _t(0,0,0),j=0,T=!1,b=null,F=null,$=null,Z=null,ae=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,te=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ee=te>=1):ue.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ee=te>=2);let be=null,xe={};const Pe=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),Ze=new Pt().fromArray(Pe),vt=new Pt().fromArray(Ke);function dt(z,Se,de,Te){const he=new Uint8Array(4),le=i.createTexture();i.bindTexture(z,le),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<de;_e++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(Se+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return le}const ce={};ce[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),l.setFunc(Yi),$e(!1),yt(Ro),fe(i.CULL_FACE),Xe(kn);function fe(z){d[z]!==!0&&(i.enable(z),d[z]=!0)}function De(z){d[z]!==!1&&(i.disable(z),d[z]=!1)}function qe(z,Se){return p[z]!==Se?(i.bindFramebuffer(z,Se),p[z]=Se,z===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Se),z===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ue(z,Se){let de=v,Te=!1;if(z){de=_.get(Se),de===void 0&&(de=[],_.set(Se,de));const he=z.textures;if(de.length!==he.length||de[0]!==i.COLOR_ATTACHMENT0){for(let le=0,_e=he.length;le<_e;le++)de[le]=i.COLOR_ATTACHMENT0+le;de.length=he.length,Te=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Te=!0);Te&&i.drawBuffers(de)}function Qe(z){return y!==z?(i.useProgram(z),y=z,!0):!1}const wt={[xi]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};wt[tu]=i.MIN,wt[nu]=i.MAX;const Oe={[iu]:i.ZERO,[ru]:i.ONE,[su]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[cu]:i.DST_COLOR,[ou]:i.DST_ALPHA,[au]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA,[hu]:i.CONSTANT_COLOR,[du]:i.ONE_MINUS_CONSTANT_COLOR,[pu]:i.CONSTANT_ALPHA,[mu]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(z,Se,de,Te,he,le,_e,Ge,ct,rt){if(z===kn){A===!0&&(De(i.BLEND),A=!1);return}if(A===!1&&(fe(i.BLEND),A=!0),z!==Jc){if(z!==x||rt!==T){if((g!==xi||w!==xi)&&(i.blendEquation(i.FUNC_ADD),g=xi,w=xi),rt)switch(z){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ht("WebGLState: Invalid blending: ",z);break}else switch(z){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Po:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sa:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",z);break}I=null,P=null,U=null,N=null,B.set(0,0,0),j=0,x=z,T=rt}return}he=he||Se,le=le||de,_e=_e||Te,(Se!==g||he!==w)&&(i.blendEquationSeparate(wt[Se],wt[he]),g=Se,w=he),(de!==I||Te!==P||le!==U||_e!==N)&&(i.blendFuncSeparate(Oe[de],Oe[Te],Oe[le],Oe[_e]),I=de,P=Te,U=le,N=_e),(Ge.equals(B)===!1||ct!==j)&&(i.blendColor(Ge.r,Ge.g,Ge.b,ct),B.copy(Ge),j=ct),x=z,T=!1}function lt(z,Se){z.side===yn?De(i.CULL_FACE):fe(i.CULL_FACE);let de=z.side===rn;Se&&(de=!de),$e(de),z.blending===Ei&&z.transparent===!1?Xe(kn):Xe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),s.setMask(z.colorWrite);const Te=z.stencilWrite;o.setTest(Te),Te&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),St(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(z){b!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),b=z)}function yt(z){z!==Kc?(fe(i.CULL_FACE),z!==F&&(z===Ro?i.cullFace(i.BACK):z===Zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),F=z}function O(z){z!==$&&(ee&&i.lineWidth(z),$=z)}function St(z,Se,de){z?(fe(i.POLYGON_OFFSET_FILL),(Z!==Se||ae!==de)&&(i.polygonOffset(Se,de),Z=Se,ae=de)):De(i.POLYGON_OFFSET_FILL)}function st(z){z?fe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function pt(z){z===void 0&&(z=i.TEXTURE0+oe-1),be!==z&&(i.activeTexture(z),be=z)}function q(z,Se,de){de===void 0&&(be===null?de=i.TEXTURE0+oe-1:de=be);let Te=xe[de];Te===void 0&&(Te={type:void 0,texture:void 0},xe[de]=Te),(Te.type!==z||Te.texture!==Se)&&(be!==de&&(i.activeTexture(de),be=de),i.bindTexture(z,Se||ce[z]),Te.type=z,Te.texture=Se)}function M(){const z=xe[be];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function m(){try{i.compressedTexImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function W(){try{i.texSubImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function X(){try{i.texSubImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function ne(){try{i.texStorage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function ie(){try{i.texStorage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function ve(){try{i.texImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function se(){try{i.texImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function pe(z){Ze.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ze.copy(z))}function Me(z){vt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),vt.copy(z))}function Re(z,Se){let de=f.get(Se);de===void 0&&(de=new WeakMap,f.set(Se,de));let Te=de.get(z);Te===void 0&&(Te=i.getUniformBlockIndex(Se,z.name),de.set(z,Te))}function ge(z,Se){const Te=f.get(Se).get(z);u.get(Se)!==Te&&(i.uniformBlockBinding(Se,Te,z.__bindingPointIndex),u.set(Se,Te))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},be=null,xe={},p={},_=new WeakMap,v=[],y=null,A=!1,x=null,g=null,I=null,P=null,w=null,U=null,N=null,B=new _t(0,0,0),j=0,T=!1,b=null,F=null,$=null,Z=null,ae=null,Ze.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),o.reset()}return{buffers:{color:s,depth:l,stencil:o},enable:fe,disable:De,bindFramebuffer:qe,drawBuffers:Ue,useProgram:Qe,setBlending:Xe,setMaterial:lt,setFlipSided:$e,setCullFace:yt,setLineWidth:O,setPolygonOffset:St,setScissorTest:st,activeTexture:pt,bindTexture:q,unbindTexture:M,compressedTexImage2D:m,compressedTexImage3D:D,texImage2D:ve,texImage3D:se,updateUBOMapping:Re,uniformBlockBinding:ge,texStorage2D:ne,texStorage3D:ie,texSubImage2D:W,texSubImage3D:X,compressedTexSubImage2D:G,compressedTexSubImage3D:re,scissor:pe,viewport:Me,reset:Be}}function Dg(i,e,t,n,r,s,l){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ye,d=new WeakMap;let p;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,m){return v?new OffscreenCanvas(M,m):yr("canvas")}function A(M,m,D){let W=1;const X=q(M);if((X.width>D||X.height>D)&&(W=D/Math.max(X.width,X.height)),W<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const G=Math.floor(W*X.width),re=Math.floor(W*X.height);p===void 0&&(p=y(G,re));const ne=m?y(G,re):p;return ne.width=G,ne.height=re,ne.getContext("2d").drawImage(M,0,0,G,re),je("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+G+"x"+re+")."),ne}else return"data"in M&&je("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),M;return M}function x(M){return M.generateMipmaps}function g(M){i.generateMipmap(M)}function I(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(M,m,D,W,X=!1){if(M!==null){if(i[M]!==void 0)return i[M];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=m;if(m===i.RED&&(D===i.FLOAT&&(G=i.R32F),D===i.HALF_FLOAT&&(G=i.R16F),D===i.UNSIGNED_BYTE&&(G=i.R8)),m===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.R8UI),D===i.UNSIGNED_SHORT&&(G=i.R16UI),D===i.UNSIGNED_INT&&(G=i.R32UI),D===i.BYTE&&(G=i.R8I),D===i.SHORT&&(G=i.R16I),D===i.INT&&(G=i.R32I)),m===i.RG&&(D===i.FLOAT&&(G=i.RG32F),D===i.HALF_FLOAT&&(G=i.RG16F),D===i.UNSIGNED_BYTE&&(G=i.RG8)),m===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.RG8UI),D===i.UNSIGNED_SHORT&&(G=i.RG16UI),D===i.UNSIGNED_INT&&(G=i.RG32UI),D===i.BYTE&&(G=i.RG8I),D===i.SHORT&&(G=i.RG16I),D===i.INT&&(G=i.RG32I)),m===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.RGB8UI),D===i.UNSIGNED_SHORT&&(G=i.RGB16UI),D===i.UNSIGNED_INT&&(G=i.RGB32UI),D===i.BYTE&&(G=i.RGB8I),D===i.SHORT&&(G=i.RGB16I),D===i.INT&&(G=i.RGB32I)),m===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),D===i.UNSIGNED_INT&&(G=i.RGBA32UI),D===i.BYTE&&(G=i.RGBA8I),D===i.SHORT&&(G=i.RGBA16I),D===i.INT&&(G=i.RGBA32I)),m===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),m===i.RGBA){const re=X?cs:ot.getTransfer(W);D===i.FLOAT&&(G=i.RGBA32F),D===i.HALF_FLOAT&&(G=i.RGBA16F),D===i.UNSIGNED_BYTE&&(G=re===xt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function w(M,m){let D;return M?m===null||m===In||m===Mr?D=i.DEPTH24_STENCIL8:m===Rn?D=i.DEPTH32F_STENCIL8:m===Sr&&(D=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===In||m===Mr?D=i.DEPTH_COMPONENT24:m===Rn?D=i.DEPTH_COMPONENT32F:m===Sr&&(D=i.DEPTH_COMPONENT16),D}function U(M,m){return x(M)===!0||M.isFramebufferTexture&&M.minFilter!==Wt&&M.minFilter!==jt?Math.log2(Math.max(m.width,m.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?m.mipmaps.length:1}function N(M){const m=M.target;m.removeEventListener("dispose",N),j(m),m.isVideoTexture&&d.delete(m)}function B(M){const m=M.target;m.removeEventListener("dispose",B),b(m)}function j(M){const m=n.get(M);if(m.__webglInit===void 0)return;const D=M.source,W=_.get(D);if(W){const X=W[m.__cacheKey];X.usedTimes--,X.usedTimes===0&&T(M),Object.keys(W).length===0&&_.delete(D)}n.remove(M)}function T(M){const m=n.get(M);i.deleteTexture(m.__webglTexture);const D=M.source,W=_.get(D);delete W[m.__cacheKey],l.memory.textures--}function b(M){const m=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(m.__webglFramebuffer[W]))for(let X=0;X<m.__webglFramebuffer[W].length;X++)i.deleteFramebuffer(m.__webglFramebuffer[W][X]);else i.deleteFramebuffer(m.__webglFramebuffer[W]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[W])}else{if(Array.isArray(m.__webglFramebuffer))for(let W=0;W<m.__webglFramebuffer.length;W++)i.deleteFramebuffer(m.__webglFramebuffer[W]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let W=0;W<m.__webglColorRenderbuffer.length;W++)m.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[W]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const D=M.textures;for(let W=0,X=D.length;W<X;W++){const G=n.get(D[W]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),l.memory.textures--),n.remove(D[W])}n.remove(M)}let F=0;function $(){F=0}function Z(){const M=F;return M>=r.maxTextures&&je("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),F+=1,M}function ae(M){const m=[];return m.push(M.wrapS),m.push(M.wrapT),m.push(M.wrapR||0),m.push(M.magFilter),m.push(M.minFilter),m.push(M.anisotropy),m.push(M.internalFormat),m.push(M.format),m.push(M.type),m.push(M.generateMipmaps),m.push(M.premultiplyAlpha),m.push(M.flipY),m.push(M.unpackAlignment),m.push(M.colorSpace),m.join()}function oe(M,m){const D=n.get(M);if(M.isVideoTexture&&st(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&D.__version!==M.version){const W=M.image;if(W===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(D,M,m);return}}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+m)}function ee(M,m){const D=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){ce(D,M,m);return}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+m)}function te(M,m){const D=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){ce(D,M,m);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+m)}function ue(M,m){const D=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&D.__version!==M.version){fe(D,M,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+m)}const be={[_a]:i.REPEAT,[kt]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},xe={[Wt]:i.NEAREST,[vu]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[Ts]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},Pe={[yu]:i.NEVER,[wu]:i.ALWAYS,[Eu]:i.LESS,[ao]:i.LEQUAL,[Tu]:i.EQUAL,[oo]:i.GEQUAL,[Au]:i.GREATER,[bu]:i.NOTEQUAL};function Ke(M,m){if(m.type===Rn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===jt||m.magFilter===Ts||m.magFilter===Nr||m.magFilter===Mi||m.minFilter===jt||m.minFilter===Ts||m.minFilter===Nr||m.minFilter===Mi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,be[m.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,be[m.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,be[m.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,xe[m.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,xe[m.minFilter]),m.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Pe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Wt||m.minFilter!==Nr&&m.minFilter!==Mi||m.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Ze(M,m){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,m.addEventListener("dispose",N));const W=m.source;let X=_.get(W);X===void 0&&(X={},_.set(W,X));const G=ae(m);if(G!==M.__cacheKey){X[G]===void 0&&(X[G]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,D=!0),X[G].usedTimes++;const re=X[M.__cacheKey];re!==void 0&&(X[M.__cacheKey].usedTimes--,re.usedTimes===0&&T(m)),M.__cacheKey=G,M.__webglTexture=X[G].texture}return D}function vt(M,m,D){return Math.floor(Math.floor(M/D)/m)}function dt(M,m,D,W){const G=M.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,D,W,m.data);else{G.sort((se,pe)=>se.start-pe.start);let re=0;for(let se=1;se<G.length;se++){const pe=G[re],Me=G[se],Re=pe.start+pe.count,ge=vt(Me.start,m.width,4),Be=vt(pe.start,m.width,4);Me.start<=Re+1&&ge===Be&&vt(Me.start+Me.count-1,m.width,4)===ge?pe.count=Math.max(pe.count,Me.start+Me.count-pe.start):(++re,G[re]=Me)}G.length=re+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),ie=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let se=0,pe=G.length;se<pe;se++){const Me=G[se],Re=Math.floor(Me.start/4),ge=Math.ceil(Me.count/4),Be=Re%m.width,z=Math.floor(Re/m.width),Se=ge,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Be,z,Se,de,D,W,m.data)}M.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function ce(M,m,D){let W=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(W=i.TEXTURE_3D);const X=Ze(M,m),G=m.source;t.bindTexture(W,M.__webglTexture,i.TEXTURE0+D);const re=n.get(G);if(G.version!==re.__version||X===!0){t.activeTexture(i.TEXTURE0+D);const ne=ot.getPrimaries(ot.workingColorSpace),ie=m.colorSpace===si?null:ot.getPrimaries(m.colorSpace),ve=m.colorSpace===si||ne===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let se=A(m.image,!1,r.maxTextureSize);se=pt(m,se);const pe=s.convert(m.format,m.colorSpace),Me=s.convert(m.type);let Re=P(m.internalFormat,pe,Me,m.colorSpace,m.isVideoTexture);Ke(W,m);let ge;const Be=m.mipmaps,z=m.isVideoTexture!==!0,Se=re.__version===void 0||X===!0,de=G.dataReady,Te=U(m,se);if(m.isDepthTexture)Re=w(m.format===yi,m.type),Se&&(z?t.texStorage2D(i.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Re,se.width,se.height,0,pe,Me,null));else if(m.isDataTexture)if(Be.length>0){z&&Se&&t.texStorage2D(i.TEXTURE_2D,Te,Re,Be[0].width,Be[0].height);for(let he=0,le=Be.length;he<le;he++)ge=Be[he],z?de&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ge.width,ge.height,pe,Me,ge.data):t.texImage2D(i.TEXTURE_2D,he,Re,ge.width,ge.height,0,pe,Me,ge.data);m.generateMipmaps=!1}else z?(Se&&t.texStorage2D(i.TEXTURE_2D,Te,Re,se.width,se.height),de&&dt(m,se,pe,Me)):t.texImage2D(i.TEXTURE_2D,0,Re,se.width,se.height,0,pe,Me,se.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){z&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Re,Be[0].width,Be[0].height,se.depth);for(let he=0,le=Be.length;he<le;he++)if(ge=Be[he],m.format!==gn)if(pe!==null)if(z){if(de)if(m.layerUpdates.size>0){const _e=el(ge.width,ge.height,m.format,m.type);for(const Ge of m.layerUpdates){const ct=ge.data.subarray(Ge*_e/ge.data.BYTES_PER_ELEMENT,(Ge+1)*_e/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Ge,ge.width,ge.height,1,pe,ct)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ge.width,ge.height,se.depth,pe,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Re,ge.width,ge.height,se.depth,0,ge.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ge.width,ge.height,se.depth,pe,Me,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Re,ge.width,ge.height,se.depth,0,pe,Me,ge.data)}else{z&&Se&&t.texStorage2D(i.TEXTURE_2D,Te,Re,Be[0].width,Be[0].height);for(let he=0,le=Be.length;he<le;he++)ge=Be[he],m.format!==gn?pe!==null?z?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ge.width,ge.height,pe,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Re,ge.width,ge.height,0,ge.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?de&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ge.width,ge.height,pe,Me,ge.data):t.texImage2D(i.TEXTURE_2D,he,Re,ge.width,ge.height,0,pe,Me,ge.data)}else if(m.isDataArrayTexture)if(z){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Re,se.width,se.height,se.depth),de)if(m.layerUpdates.size>0){const he=el(se.width,se.height,m.format,m.type);for(const le of m.layerUpdates){const _e=se.data.subarray(le*he/se.data.BYTES_PER_ELEMENT,(le+1)*he/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,se.width,se.height,1,pe,Me,_e)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,Me,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,pe,Me,se.data);else if(m.isData3DTexture)z?(Se&&t.texStorage3D(i.TEXTURE_3D,Te,Re,se.width,se.height,se.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,Me,se.data)):t.texImage3D(i.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,pe,Me,se.data);else if(m.isFramebufferTexture){if(Se)if(z)t.texStorage2D(i.TEXTURE_2D,Te,Re,se.width,se.height);else{let he=se.width,le=se.height;for(let _e=0;_e<Te;_e++)t.texImage2D(i.TEXTURE_2D,_e,Re,he,le,0,pe,Me,null),he>>=1,le>>=1}}else if(Be.length>0){if(z&&Se){const he=q(Be[0]);t.texStorage2D(i.TEXTURE_2D,Te,Re,he.width,he.height)}for(let he=0,le=Be.length;he<le;he++)ge=Be[he],z?de&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,pe,Me,ge):t.texImage2D(i.TEXTURE_2D,he,Re,pe,Me,ge);m.generateMipmaps=!1}else if(z){if(Se){const he=q(se);t.texStorage2D(i.TEXTURE_2D,Te,Re,he.width,he.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Me,se)}else t.texImage2D(i.TEXTURE_2D,0,Re,pe,Me,se);x(m)&&g(W),re.__version=G.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function fe(M,m,D){if(m.image.length!==6)return;const W=Ze(M,m),X=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+D);const G=n.get(X);if(X.version!==G.__version||W===!0){t.activeTexture(i.TEXTURE0+D);const re=ot.getPrimaries(ot.workingColorSpace),ne=m.colorSpace===si?null:ot.getPrimaries(m.colorSpace),ie=m.colorSpace===si||re===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ve=m.isCompressedTexture||m.image[0].isCompressedTexture,se=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let le=0;le<6;le++)!ve&&!se?pe[le]=A(m.image[le],!0,r.maxCubemapSize):pe[le]=se?m.image[le].image:m.image[le],pe[le]=pt(m,pe[le]);const Me=pe[0],Re=s.convert(m.format,m.colorSpace),ge=s.convert(m.type),Be=P(m.internalFormat,Re,ge,m.colorSpace),z=m.isVideoTexture!==!0,Se=G.__version===void 0||W===!0,de=X.dataReady;let Te=U(m,Me);Ke(i.TEXTURE_CUBE_MAP,m);let he;if(ve){z&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Be,Me.width,Me.height);for(let le=0;le<6;le++){he=pe[le].mipmaps;for(let _e=0;_e<he.length;_e++){const Ge=he[_e];m.format!==gn?Re!==null?z?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e,0,0,Ge.width,Ge.height,Re,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e,Be,Ge.width,Ge.height,0,Ge.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e,0,0,Ge.width,Ge.height,Re,ge,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e,Be,Ge.width,Ge.height,0,Re,ge,Ge.data)}}}else{if(he=m.mipmaps,z&&Se){he.length>0&&Te++;const le=q(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Be,le.width,le.height)}for(let le=0;le<6;le++)if(se){z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,pe[le].width,pe[le].height,Re,ge,pe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,pe[le].width,pe[le].height,0,Re,ge,pe[le].data);for(let _e=0;_e<he.length;_e++){const ct=he[_e].image[le].image;z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e+1,0,0,ct.width,ct.height,Re,ge,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e+1,Be,ct.width,ct.height,0,Re,ge,ct.data)}}else{z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re,ge,pe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,Re,ge,pe[le]);for(let _e=0;_e<he.length;_e++){const Ge=he[_e];z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e+1,0,0,Re,ge,Ge.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e+1,Be,Re,ge,Ge.image[le])}}}x(m)&&g(i.TEXTURE_CUBE_MAP),G.__version=X.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function De(M,m,D,W,X,G){const re=s.convert(D.format,D.colorSpace),ne=s.convert(D.type),ie=P(D.internalFormat,re,ne,D.colorSpace),ve=n.get(m),se=n.get(D);if(se.__renderTarget=m,!ve.__hasExternalTextures){const pe=Math.max(1,m.width>>G),Me=Math.max(1,m.height>>G);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,G,ie,pe,Me,m.depth,0,re,ne,null):t.texImage2D(X,G,ie,pe,Me,0,re,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),St(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,X,se.__webglTexture,0,O(m)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,X,se.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(M,m,D){if(i.bindRenderbuffer(i.RENDERBUFFER,M),m.depthBuffer){const W=m.depthTexture,X=W&&W.isDepthTexture?W.type:null,G=w(m.stencilBuffer,X),re=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(m),G,m.width,m.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(m),G,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,G,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,M)}else{const W=m.textures;for(let X=0;X<W.length;X++){const G=W[X],re=s.convert(G.format,G.colorSpace),ne=s.convert(G.type),ie=P(G.internalFormat,re,ne,G.colorSpace);St(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(m),ie,m.width,m.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(m),ie,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ie,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(M,m,D){const W=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(m.depthTexture);if(X.__renderTarget=m,(!X.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),W){if(X.__webglInit===void 0&&(X.__webglInit=!0,m.depthTexture.addEventListener("dispose",N)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,m.depthTexture);const ve=s.convert(m.depthTexture.format),se=s.convert(m.depthTexture.type);let pe;m.depthTexture.format===qn?pe=i.DEPTH_COMPONENT24:m.depthTexture.format===yi&&(pe=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,m.width,m.height,0,ve,se,null)}}else oe(m.depthTexture,0);const G=X.__webglTexture,re=O(m),ne=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,ie=m.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===qn)St(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ne,G,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ne,G,0);else if(m.depthTexture.format===yi)St(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ne,G,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ne,G,0);else throw new Error("Unknown depthTexture format")}function Qe(M){const m=n.get(M),D=M.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==M.depthTexture){const W=M.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),W){const X=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,W.removeEventListener("dispose",X)};W.addEventListener("dispose",X),m.__depthDisposeCallback=X}m.__boundDepthTexture=W}if(M.depthTexture&&!m.__autoAllocateDepthBuffer)if(D)for(let W=0;W<6;W++)Ue(m.__webglFramebuffer[W],M,W);else{const W=M.texture.mipmaps;W&&W.length>0?Ue(m.__webglFramebuffer[0],M,0):Ue(m.__webglFramebuffer,M,0)}else if(D){m.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[W]),m.__webglDepthbuffer[W]===void 0)m.__webglDepthbuffer[W]=i.createRenderbuffer(),qe(m.__webglDepthbuffer[W],M,!1);else{const X=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=m.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,G)}}else{const W=M.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),qe(m.__webglDepthbuffer,M,!1);else{const X=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(M,m,D){const W=n.get(M);m!==void 0&&De(W.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Qe(M)}function Oe(M){const m=M.texture,D=n.get(M),W=n.get(m);M.addEventListener("dispose",B);const X=M.textures,G=M.isWebGLCubeRenderTarget===!0,re=X.length>1;if(re||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=m.version,l.memory.textures++),G){D.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer[ne]=[];for(let ie=0;ie<m.mipmaps.length;ie++)D.__webglFramebuffer[ne][ie]=i.createFramebuffer()}else D.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer=[];for(let ne=0;ne<m.mipmaps.length;ne++)D.__webglFramebuffer[ne]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(re)for(let ne=0,ie=X.length;ne<ie;ne++){const ve=n.get(X[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),l.memory.textures++)}if(M.samples>0&&St(M)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ne=0;ne<X.length;ne++){const ie=X[ne];D.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[ne]);const ve=s.convert(ie.format,ie.colorSpace),se=s.convert(ie.type),pe=P(ie.internalFormat,ve,se,ie.colorSpace,M.isXRRenderTarget===!0),Me=O(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,pe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,D.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,m);for(let ne=0;ne<6;ne++)if(m.mipmaps&&m.mipmaps.length>0)for(let ie=0;ie<m.mipmaps.length;ie++)De(D.__webglFramebuffer[ne][ie],M,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else De(D.__webglFramebuffer[ne],M,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);x(m)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let ne=0,ie=X.length;ne<ie;ne++){const ve=X[ne],se=n.get(ve);let pe=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,se.__webglTexture),Ke(pe,ve),De(D.__webglFramebuffer,M,ve,i.COLOR_ATTACHMENT0+ne,pe,0),x(ve)&&g(pe)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ne=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),Ke(ne,m),m.mipmaps&&m.mipmaps.length>0)for(let ie=0;ie<m.mipmaps.length;ie++)De(D.__webglFramebuffer[ie],M,m,i.COLOR_ATTACHMENT0,ne,ie);else De(D.__webglFramebuffer,M,m,i.COLOR_ATTACHMENT0,ne,0);x(m)&&g(ne),t.unbindTexture()}M.depthBuffer&&Qe(M)}function Xe(M){const m=M.textures;for(let D=0,W=m.length;D<W;D++){const X=m[D];if(x(X)){const G=I(M),re=n.get(X).__webglTexture;t.bindTexture(G,re),g(G),t.unbindTexture()}}}const lt=[],$e=[];function yt(M){if(M.samples>0){if(St(M)===!1){const m=M.textures,D=M.width,W=M.height;let X=i.COLOR_BUFFER_BIT;const G=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(M),ne=m.length>1;if(ne)for(let ve=0;ve<m.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const ie=M.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ve=0;ve<m.length;ve++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ve]);const se=n.get(m[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,D,W,0,0,D,W,X,i.NEAREST),u===!0&&(lt.length=0,$e.length=0,lt.push(i.COLOR_ATTACHMENT0+ve),M.depthBuffer&&M.resolveDepthBuffer===!1&&(lt.push(G),$e.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<m.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,re.__webglColorRenderbuffer[ve]);const se=n.get(m[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&u){const m=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function O(M){return Math.min(r.maxSamples,M.samples)}function St(M){const m=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function st(M){const m=l.render.frame;d.get(M)!==m&&(d.set(M,m),M.update())}function pt(M,m){const D=M.colorSpace,W=M.format,X=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||D!==Ki&&D!==si&&(ot.getTransfer(D)===xt?(W!==gn||X!==mn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",D)),m}function q(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(f.width=M.naturalWidth||M.width,f.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(f.width=M.displayWidth,f.height=M.displayHeight):(f.width=M.width,f.height=M.height),f}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.setTexture2D=oe,this.setTexture2DArray=ee,this.setTexture3D=te,this.setTextureCube=ue,this.rebindTextures=wt,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ig(i,e){function t(n,r=si){let s;const l=ot.getTransfer(r);if(n===mn)return i.UNSIGNED_BYTE;if(n===to)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nl)return i.BYTE;if(n===Fl)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===eo)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===zl)return i.ALPHA;if(n===Gl)return i.RGB;if(n===gn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===Vl)return i.RED;if(n===io)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===so)return i.RGBA_INTEGER;if(n===rs||n===ss||n===as||n===os)if(l===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===Sa||n===Ma||n===ya)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===Aa||n===ba||n===wa||n===Ra||n===Ca)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ea||n===Ta)return l===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Aa)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ba)return s.COMPRESSED_R11_EAC;if(n===wa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ra)return s.COMPRESSED_RG11_EAC;if(n===Ca)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Ga||n===Va||n===Ha||n===ka)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pa)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return l===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Xa||n===Ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wa)return l===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===ja||n===Ka||n===Za)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ql(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:Ug,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Og extends $i{constructor(e,t){super();const n=this;let r=null,s=1,l=null,o="local-floor",u=1,f=null,d=null,p=null,_=null,v=null,y=null;const A=typeof XRWebGLBinding<"u",x=new Fg,g={},I=t.getContextAttributes();let P=null,w=null;const U=[],N=[],B=new Ye;let j=null;const T=new pn;T.viewport=new Pt;const b=new pn;b.viewport=new Pt;const F=[T,b],$=new qf;let Z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let fe=U[ce];return fe===void 0&&(fe=new Ys,U[ce]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ce){let fe=U[ce];return fe===void 0&&(fe=new Ys,U[ce]=fe),fe.getGripSpace()},this.getHand=function(ce){let fe=U[ce];return fe===void 0&&(fe=new Ys,U[ce]=fe),fe.getHandSpace()};function oe(ce){const fe=N.indexOf(ce.inputSource);if(fe===-1)return;const De=U[fe];De!==void 0&&(De.update(ce.inputSource,ce.frame,f||l),De.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ee(){r.removeEventListener("select",oe),r.removeEventListener("selectstart",oe),r.removeEventListener("selectend",oe),r.removeEventListener("squeeze",oe),r.removeEventListener("squeezestart",oe),r.removeEventListener("squeezeend",oe),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",te);for(let ce=0;ce<U.length;ce++){const fe=N[ce];fe!==null&&(N[ce]=null,U[ce].disconnect(fe))}Z=null,ae=null,x.reset();for(const ce in g)delete g[ce];e.setRenderTarget(P),v=null,_=null,p=null,r=null,w=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(j),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ce){f=ce},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(ce){if(r=ce,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",oe),r.addEventListener("selectstart",oe),r.addEventListener("selectend",oe),r.addEventListener("squeeze",oe),r.addEventListener("squeezestart",oe),r.addEventListener("squeezeend",oe),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",te),I.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,qe=null,Ue=null;I.depth&&(Ue=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=I.stencil?yi:qn,qe=I.stencil?Mr:In);const Qe={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};p=this.getBinding(),_=p.createProjectionLayer(Qe),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new Ln(_.textureWidth,_.textureHeight,{format:gn,type:mn,depthTexture:new Ar(_.textureWidth,_.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const De={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,De),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),w=new Ln(v.framebufferWidth,v.framebufferHeight,{format:gn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(ce){for(let fe=0;fe<ce.removed.length;fe++){const De=ce.removed[fe],qe=N.indexOf(De);qe>=0&&(N[qe]=null,U[qe].disconnect(De))}for(let fe=0;fe<ce.added.length;fe++){const De=ce.added[fe];let qe=N.indexOf(De);if(qe===-1){for(let Qe=0;Qe<U.length;Qe++)if(Qe>=N.length){N.push(De),qe=Qe;break}else if(N[Qe]===null){N[Qe]=De,qe=Qe;break}if(qe===-1)break}const Ue=U[qe];Ue&&Ue.connect(De)}}const ue=new H,be=new H;function xe(ce,fe,De){ue.setFromMatrixPosition(fe.matrixWorld),be.setFromMatrixPosition(De.matrixWorld);const qe=ue.distanceTo(be),Ue=fe.projectionMatrix.elements,Qe=De.projectionMatrix.elements,wt=Ue[14]/(Ue[10]-1),Oe=Ue[14]/(Ue[10]+1),Xe=(Ue[9]+1)/Ue[5],lt=(Ue[9]-1)/Ue[5],$e=(Ue[8]-1)/Ue[0],yt=(Qe[8]+1)/Qe[0],O=wt*$e,St=wt*yt,st=qe/(-$e+yt),pt=st*-$e;if(fe.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(pt),ce.translateZ(st),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Ue[10]===-1)ce.projectionMatrix.copy(fe.projectionMatrix),ce.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const q=wt+st,M=Oe+st,m=O-pt,D=St+(qe-pt),W=Xe*Oe/M*q,X=lt*Oe/M*q;ce.projectionMatrix.makePerspective(m,D,W,X,q,M),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Pe(ce,fe){fe===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(fe.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(r===null)return;let fe=ce.near,De=ce.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(De=x.depthFar)),$.near=b.near=T.near=fe,$.far=b.far=T.far=De,(Z!==$.near||ae!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),Z=$.near,ae=$.far),$.layers.mask=ce.layers.mask|6,T.layers.mask=$.layers.mask&3,b.layers.mask=$.layers.mask&5;const qe=ce.parent,Ue=$.cameras;Pe($,qe);for(let Qe=0;Qe<Ue.length;Qe++)Pe(Ue[Qe],qe);Ue.length===2?xe($,T,b):$.projectionMatrix.copy(T.projectionMatrix),Ke(ce,$,qe)};function Ke(ce,fe,De){De===null?ce.matrix.copy(fe.matrixWorld):(ce.matrix.copy(De.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(fe.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(fe.projectionMatrix),ce.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Tr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&v===null))return u},this.setFoveation=function(ce){u=ce,_!==null&&(_.fixedFoveation=ce),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ce)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(ce){return g[ce]};let Ze=null;function vt(ce,fe){if(d=fe.getViewerPose(f||l),y=fe,d!==null){const De=d.views;v!==null&&(e.setRenderTargetFramebuffer(w,v.framebuffer),e.setRenderTarget(w));let qe=!1;De.length!==$.cameras.length&&($.cameras.length=0,qe=!0);for(let Oe=0;Oe<De.length;Oe++){const Xe=De[Oe];let lt=null;if(v!==null)lt=v.getViewport(Xe);else{const yt=p.getViewSubImage(_,Xe);lt=yt.viewport,Oe===0&&(e.setRenderTargetTextures(w,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(w))}let $e=F[Oe];$e===void 0&&($e=new pn,$e.layers.enable(Oe),$e.viewport=new Pt,F[Oe]=$e),$e.matrix.fromArray(Xe.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Xe.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(lt.x,lt.y,lt.width,lt.height),Oe===0&&($.matrix.copy($e.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),qe===!0&&$.cameras.push($e)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){p=n.getBinding();const Oe=p.getDepthInformation(De[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(Oe,r.renderState)}if(Ue&&Ue.includes("camera-access")&&A){e.state.unbindTexture(),p=n.getBinding();for(let Oe=0;Oe<De.length;Oe++){const Xe=De[Oe].camera;if(Xe){let lt=g[Xe];lt||(lt=new Ql,g[Xe]=lt);const $e=p.getCameraImage(Xe);lt.sourceTexture=$e}}}}for(let De=0;De<U.length;De++){const qe=N[De],Ue=U[De];qe!==null&&Ue!==void 0&&Ue.update(qe,fe,f||l)}Ze&&Ze(ce,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),y=null}const dt=new rc;dt.setAnimationLoop(vt),this.setAnimationLoop=function(ce){Ze=ce},this.dispose=function(){}}}const _i=new jn,Bg=new Ct;function zg(i,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,jl(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function r(x,g,I,P,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(x,g):g.isMeshToonMaterial?(s(x,g),p(x,g)):g.isMeshPhongMaterial?(s(x,g),d(x,g)):g.isMeshStandardMaterial?(s(x,g),_(x,g),g.isMeshPhysicalMaterial&&v(x,g,w)):g.isMeshMatcapMaterial?(s(x,g),y(x,g)):g.isMeshDepthMaterial?s(x,g):g.isMeshDistanceMaterial?(s(x,g),A(x,g)):g.isMeshNormalMaterial?s(x,g):g.isLineBasicMaterial?(l(x,g),g.isLineDashedMaterial&&o(x,g)):g.isPointsMaterial?u(x,g,I,P):g.isSpriteMaterial?f(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===rn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===rn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const I=e.get(g),P=I.envMap,w=I.envMapRotation;P&&(x.envMap.value=P,_i.copy(w),_i.x*=-1,_i.y*=-1,_i.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),x.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(_i)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function l(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function o(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function u(x,g,I,P){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*I,x.scale.value=P*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function f(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function p(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function _(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function v(x,g,I){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,g){g.matcap&&(x.matcap.value=g.matcap)}function A(x,g){const I=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Gg(i,e,t,n){let r={},s={},l=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(I,P){const w=P.program;n.uniformBlockBinding(I,w)}function f(I,P){let w=r[I.id];w===void 0&&(y(I),w=d(I),r[I.id]=w,I.addEventListener("dispose",x));const U=P.program;n.updateUBOMapping(I,U);const N=e.render.frame;s[I.id]!==N&&(_(I),s[I.id]=N)}function d(I){const P=p();I.__bindingPointIndex=P;const w=i.createBuffer(),U=I.__size,N=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,w),w}function p(){for(let I=0;I<o;I++)if(l.indexOf(I)===-1)return l.push(I),I;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const P=r[I.id],w=I.uniforms,U=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let N=0,B=w.length;N<B;N++){const j=Array.isArray(w[N])?w[N]:[w[N]];for(let T=0,b=j.length;T<b;T++){const F=j[T];if(v(F,N,T,U)===!0){const $=F.__offset,Z=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let oe=0;oe<Z.length;oe++){const ee=Z[oe],te=A(ee);typeof ee=="number"||typeof ee=="boolean"?(F.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,$+ae,F.__data)):ee.isMatrix3?(F.__data[0]=ee.elements[0],F.__data[1]=ee.elements[1],F.__data[2]=ee.elements[2],F.__data[3]=0,F.__data[4]=ee.elements[3],F.__data[5]=ee.elements[4],F.__data[6]=ee.elements[5],F.__data[7]=0,F.__data[8]=ee.elements[6],F.__data[9]=ee.elements[7],F.__data[10]=ee.elements[8],F.__data[11]=0):(ee.toArray(F.__data,ae),ae+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(I,P,w,U){const N=I.value,B=P+"_"+w;if(U[B]===void 0)return typeof N=="number"||typeof N=="boolean"?U[B]=N:U[B]=N.clone(),!0;{const j=U[B];if(typeof N=="number"||typeof N=="boolean"){if(j!==N)return U[B]=N,!0}else if(j.equals(N)===!1)return j.copy(N),!0}return!1}function y(I){const P=I.uniforms;let w=0;const U=16;for(let B=0,j=P.length;B<j;B++){const T=Array.isArray(P[B])?P[B]:[P[B]];for(let b=0,F=T.length;b<F;b++){const $=T[b],Z=Array.isArray($.value)?$.value:[$.value];for(let ae=0,oe=Z.length;ae<oe;ae++){const ee=Z[ae],te=A(ee),ue=w%U,be=ue%te.boundary,xe=ue+be;w+=be,xe!==0&&U-xe<te.storage&&(w+=U-xe),$.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=te.storage}}}const N=w%U;return N>0&&(w+=U-N),I.__size=w,I.__cache={},this}function A(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",I),P}function x(I){const P=I.target;P.removeEventListener("dispose",x);const w=l.indexOf(P.__bindingPointIndex);l.splice(w,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function g(){for(const I in r)i.deleteBuffer(r[I]);l=[],r={},s={}}return{bind:u,update:f,dispose:g}}const Vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function Hg(){return bn===null&&(bn=new vf(Vg,16,16,ji,Yn),bn.name="DFG_LUT",bn.minFilter=jt,bn.magFilter=jt,bn.wrapS=kt,bn.wrapT=kt,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class kg{constructor(e={}){const{canvas:t=Ru(),context:n=null,depth:r=!0,stencil:s=!1,alpha:l=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:_=!1,outputBufferType:v=mn}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=l;const A=v,x=new Set([so,ro,io]),g=new Set([mn,In,Sr,Mr,to,no]),I=new Uint32Array(4),P=new Int32Array(4);let w=null,U=null;const N=[],B=[];let j=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let b=!1;this._outputColorSpace=dn;let F=0,$=0,Z=null,ae=-1,oe=null;const ee=new Pt,te=new Pt;let ue=null;const be=new _t(0);let xe=0,Pe=t.width,Ke=t.height,Ze=1,vt=null,dt=null;const ce=new Pt(0,0,Pe,Ke),fe=new Pt(0,0,Pe,Ke);let De=!1;const qe=new Jl;let Ue=!1,Qe=!1;const wt=new Ct,Oe=new H,Xe=new Pt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function yt(){return Z===null?Ze:1}let O=n;function St(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",rt,!1),O===null){const k="webgl2";if(O=St(k,E),O===null)throw St(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ht("WebGLRenderer: "+E.message),E}let st,pt,q,M,m,D,W,X,G,re,ne,ie,ve,se,pe,Me,Re,ge,Be,z,Se,de,Te,he;function le(){st=new Hp(O),st.init(),de=new Ig(O,st),pt=new Ip(O,st,e,de),q=new Lg(O,st),pt.reversedDepthBuffer&&_&&q.buffers.depth.setReversed(!0),M=new Xp(O),m=new gg,D=new Dg(O,st,q,m,pt,de,M),W=new Np(T),X=new Vp(T),G=new Kf(O),Te=new Lp(O,G),re=new kp(O,G,M,Te),ne=new qp(O,re,G,M),Be=new Yp(O,pt,D),Me=new Up(m),ie=new mg(T,W,X,st,pt,Te,Me),ve=new zg(T,m),se=new vg,pe=new Tg(st),ge=new Pp(T,W,X,q,ne,y,u),Re=new Cg(T,ne,pt),he=new Gg(O,M,pt,q),z=new Dp(O,st,M),Se=new Wp(O,st,M),M.programs=ie.programs,T.capabilities=pt,T.extensions=st,T.properties=m,T.renderLists=se,T.shadowMap=Re,T.state=q,T.info=M}le(),A!==mn&&(j=new Kp(A,t.width,t.height,r,s));const _e=new Og(T,O);this.xr=_e,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ze},this.setPixelRatio=function(E){E!==void 0&&(Ze=E,this.setSize(Pe,Ke,!1))},this.getSize=function(E){return E.set(Pe,Ke)},this.setSize=function(E,k,Q=!0){if(_e.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=E,Ke=k,t.width=Math.floor(E*Ze),t.height=Math.floor(k*Ze),Q===!0&&(t.style.width=E+"px",t.style.height=k+"px"),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Pe*Ze,Ke*Ze).floor()},this.setDrawingBufferSize=function(E,k,Q){Pe=E,Ke=k,Ze=Q,t.width=Math.floor(E*Q),t.height=Math.floor(k*Q),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(A===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(ce)},this.setViewport=function(E,k,Q,K){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,k,Q,K),q.viewport(ee.copy(ce).multiplyScalar(Ze).round())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,k,Q,K){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,k,Q,K),q.scissor(te.copy(fe).multiplyScalar(Ze).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(E){q.setScissorTest(De=E)},this.setOpaqueSort=function(E){vt=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,Q=!0){let K=0;if(E){let Y=!1;if(Z!==null){const ye=Z.texture.format;Y=x.has(ye)}if(Y){const ye=Z.texture.type,we=g.has(ye),Ae=ge.getClearColor(),Ne=ge.getClearAlpha(),Fe=Ae.r,He=Ae.g,Ve=Ae.b;we?(I[0]=Fe,I[1]=He,I[2]=Ve,I[3]=Ne,O.clearBufferuiv(O.COLOR,0,I)):(P[0]=Fe,P[1]=He,P[2]=Ve,P[3]=Ne,O.clearBufferiv(O.COLOR,0,P))}else K|=O.COLOR_BUFFER_BIT}k&&(K|=O.DEPTH_BUFFER_BIT),Q&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),ge.dispose(),se.dispose(),pe.dispose(),m.dispose(),W.dispose(),X.dispose(),ne.dispose(),Te.dispose(),he.dispose(),ie.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",er),_e.removeEventListener("sessionend",Rt),Nt.stop()};function Ge(E){E.preventDefault(),No("WebGLRenderer: Context Lost."),b=!0}function ct(){No("WebGLRenderer: Context Restored."),b=!1;const E=M.autoReset,k=Re.enabled,Q=Re.autoUpdate,K=Re.needsUpdate,Y=Re.type;le(),M.autoReset=E,Re.enabled=k,Re.autoUpdate=Q,Re.needsUpdate=K,Re.type=Y}function rt(E){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bt(E){const k=E.target;k.removeEventListener("dispose",Bt),_n(k)}function _n(E){Zn(E),m.remove(E)}function Zn(E){const k=m.get(E).programs;k!==void 0&&(k.forEach(function(Q){ie.releaseProgram(Q)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Q,K,Y,ye){k===null&&(k=lt);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=nr(E,k,Q,K,Y);q.setMaterial(K,we);let Ne=Q.index,Fe=1;if(K.wireframe===!0){if(Ne=re.getWireframeAttribute(Q),Ne===void 0)return;Fe=2}const He=Q.drawRange,Ve=Q.attributes.position;let et=He.start*Fe,mt=(He.start+He.count)*Fe;ye!==null&&(et=Math.max(et,ye.start*Fe),mt=Math.min(mt,(ye.start+ye.count)*Fe)),Ne!==null?(et=Math.max(et,0),mt=Math.min(mt,Ne.count)):Ve!=null&&(et=Math.max(et,0),mt=Math.min(mt,Ve.count));const Tt=mt-et;if(Tt<0||Tt===1/0)return;Te.setup(Y,K,Ae,Q,Ne);let At,gt=z;if(Ne!==null&&(At=G.get(Ne),gt=Se,gt.setIndex(At)),Y.isMesh)K.wireframe===!0?(q.setLineWidth(K.wireframeLinewidth*yt()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(Y.isLine){let Ie=K.linewidth;Ie===void 0&&(Ie=1),q.setLineWidth(Ie*yt()),Y.isLineSegments?gt.setMode(O.LINES):Y.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else Y.isPoints?gt.setMode(O.POINTS):Y.isSprite&&gt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Er("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ie=Y._multiDrawStarts,ut=Y._multiDrawCounts,at=Y._multiDrawCount,Ft=Ne?G.get(Ne).bytesPerElement:1,Fn=m.get(K).currentProgram.getUniforms();for(let Xt=0;Xt<at;Xt++)Fn.setValue(O,"_gl_DrawID",Xt),gt.render(Ie[Xt]/Ft,ut[Xt])}else if(Y.isInstancedMesh)gt.renderInstances(et,Tt,Y.count);else if(Q.isInstancedBufferGeometry){const Ie=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ut=Math.min(Q.instanceCount,Ie);gt.renderInstances(et,Tt,ut)}else gt.render(et,Tt)};function Cr(E,k,Q){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,An(E,k,Q),E.side=Xn,E.needsUpdate=!0,An(E,k,Q),E.side=yn):An(E,k,Q)}this.compile=function(E,k,Q=null){Q===null&&(Q=E),U=pe.get(Q),U.init(k),B.push(U),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(U.pushLight(Y),Y.castShadow&&U.pushShadow(Y))}),E!==Q&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(U.pushLight(Y),Y.castShadow&&U.pushShadow(Y))}),U.setupLights();const K=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let we=0;we<ye.length;we++){const Ae=ye[we];Cr(Ae,Q,Y),K.add(Ae)}else Cr(ye,Q,Y),K.add(ye)}),U=B.pop(),K},this.compileAsync=function(E,k,Q=null){const K=this.compile(E,k,Q);return new Promise(Y=>{function ye(){if(K.forEach(function(we){m.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){Y(E);return}setTimeout(ye,10)}st.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let sn=null;function Nn(E){sn&&sn(E)}function er(){Nt.stop()}function Rt(){Nt.start()}const Nt=new rc;Nt.setAnimationLoop(Nn),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(E){sn=E,_e.setAnimationLoop(E),E===null?Nt.stop():Nt.start()},_e.addEventListener("sessionstart",er),_e.addEventListener("sessionend",Rt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Q=_e.enabled===!0&&_e.isPresenting===!0,K=j!==null&&(Z===null||Q)&&j.begin(T,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(k),k=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,k,Z),U=pe.get(E,B.length),U.init(k),B.push(U),wt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),qe.setFromProjectionMatrix(wt,Cn,k.reversedDepth),Qe=this.localClippingEnabled,Ue=Me.init(this.clippingPlanes,Qe),w=se.get(E,N.length),w.init(),N.push(w),_e.enabled===!0&&_e.isPresenting===!0){const we=T.xr.getDepthSensingMesh();we!==null&&oi(we,k,-1/0,T.sortObjects)}oi(E,k,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(vt,dt),$e=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,$e&&ge.addToRenderList(w,E),this.info.render.frame++,Ue===!0&&Me.beginShadows();const Y=U.state.shadowsArray;if(Re.render(Y,E,k),Ue===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&j.hasRenderPass())===!1){const we=w.opaque,Ae=w.transmissive;if(U.setupLights(),k.isArrayCamera){const Ne=k.cameras;if(Ae.length>0)for(let Fe=0,He=Ne.length;Fe<He;Fe++){const Ve=Ne[Fe];li(we,Ae,E,Ve)}$e&&ge.render(E);for(let Fe=0,He=Ne.length;Fe<He;Fe++){const Ve=Ne[Fe];Pr(w,E,Ve,Ve.viewport)}}else Ae.length>0&&li(we,Ae,E,k),$e&&ge.render(E),Pr(w,E,k)}Z!==null&&$===0&&(D.updateMultisampleRenderTarget(Z),D.updateRenderTargetMipmap(Z)),K&&j.end(T),E.isScene===!0&&E.onAfterRender(T,E,k),Te.resetDefaultState(),ae=-1,oe=null,B.pop(),B.length>0?(U=B[B.length-1],Ue===!0&&Me.setGlobalState(T.clippingPlanes,U.state.camera)):U=null,N.pop(),N.length>0?w=N[N.length-1]:w=null};function oi(E,k,Q,K){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)U.pushLight(E),E.castShadow&&U.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||qe.intersectsSprite(E)){K&&Xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);const we=ne.update(E),Ae=E.material;Ae.visible&&w.push(E,we,Ae,Q,Xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||qe.intersectsObject(E))){const we=ne.update(E),Ae=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xe.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Xe.copy(we.boundingSphere.center)),Xe.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(Ae)){const Ne=we.groups;for(let Fe=0,He=Ne.length;Fe<He;Fe++){const Ve=Ne[Fe],et=Ae[Ve.materialIndex];et&&et.visible&&w.push(E,we,et,Q,Xe.z,Ve)}}else Ae.visible&&w.push(E,we,Ae,Q,Xe.z,null)}}const ye=E.children;for(let we=0,Ae=ye.length;we<Ae;we++)oi(ye[we],k,Q,K)}function Pr(E,k,Q,K){const{opaque:Y,transmissive:ye,transparent:we}=E;U.setupLightsView(Q),Ue===!0&&Me.setGlobalState(T.clippingPlanes,Q),K&&q.viewport(ee.copy(K)),Y.length>0&&$n(Y,k,Q),ye.length>0&&$n(ye,k,Q),we.length>0&&$n(we,k,Q),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function li(E,k,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[K.id]===void 0){const et=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[K.id]=new Ln(1,1,{generateMipmaps:!0,type:et?Yn:mn,minFilter:Mi,samples:pt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const ye=U.state.transmissionRenderTarget[K.id],we=K.viewport||ee;ye.setSize(we.z*T.transmissionResolutionScale,we.w*T.transmissionResolutionScale);const Ae=T.getRenderTarget(),Ne=T.getActiveCubeFace(),Fe=T.getActiveMipmapLevel();T.setRenderTarget(ye),T.getClearColor(be),xe=T.getClearAlpha(),xe<1&&T.setClearColor(16777215,.5),T.clear(),$e&&ge.render(Q);const He=T.toneMapping;T.toneMapping=Pn;const Ve=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),U.setupLightsView(K),Ue===!0&&Me.setGlobalState(T.clippingPlanes,K),$n(E,Q,K),D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye),st.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let mt=0,Tt=k.length;mt<Tt;mt++){const At=k[mt],{object:gt,geometry:Ie,material:ut,group:at}=At;if(ut.side===yn&&gt.layers.test(K.layers)){const Ft=ut.side;ut.side=rn,ut.needsUpdate=!0,ci(gt,Q,K,Ie,ut,at),ut.side=Ft,ut.needsUpdate=!0,et=!0}}et===!0&&(D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye))}T.setRenderTarget(Ae,Ne,Fe),T.setClearColor(be,xe),Ve!==void 0&&(K.viewport=Ve),T.toneMapping=He}function $n(E,k,Q){const K=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,ye=E.length;Y<ye;Y++){const we=E[Y],{object:Ae,geometry:Ne,group:Fe}=we;let He=we.material;He.allowOverride===!0&&K!==null&&(He=K),Ae.layers.test(Q.layers)&&ci(Ae,k,Q,Ne,He,Fe)}}function ci(E,k,Q,K,Y,ye){E.onBeforeRender(T,k,Q,K,Y,ye),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(T,k,Q,K,E,ye),Y.transparent===!0&&Y.side===yn&&Y.forceSinglePass===!1?(Y.side=rn,Y.needsUpdate=!0,T.renderBufferDirect(Q,k,K,Y,E,ye),Y.side=Xn,Y.needsUpdate=!0,T.renderBufferDirect(Q,k,K,Y,E,ye),Y.side=yn):T.renderBufferDirect(Q,k,K,Y,E,ye),E.onAfterRender(T,k,Q,K,Y,ye)}function An(E,k,Q){k.isScene!==!0&&(k=lt);const K=m.get(E),Y=U.state.lights,ye=U.state.shadowsArray,we=Y.state.version,Ae=ie.getParameters(E,Y.state,ye,k,Q),Ne=ie.getProgramCacheKey(Ae);let Fe=K.programs;K.environment=E.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(E.isMeshStandardMaterial?X:W).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Bt),Fe=new Map,K.programs=Fe);let He=Fe.get(Ne);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===we)return bi(E,Ae),He}else Ae.uniforms=ie.getUniforms(E),E.onBeforeCompile(Ae,T),He=ie.acquireProgram(Ae,Ne),Fe.set(Ne,He),K.uniforms=Ae.uniforms;const Ve=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),bi(E,Ae),K.needsLights=an(E),K.lightsStateVersion=we,K.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function tr(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=ls.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function bi(E,k){const Q=m.get(E);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function nr(E,k,Q,K,Y){k.isScene!==!0&&(k=lt),D.resetTextureUnits();const ye=k.fog,we=K.isMeshStandardMaterial?k.environment:null,Ae=Z===null?T.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ki,Ne=(K.isMeshStandardMaterial?X:W).get(K.envMap||we),Fe=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,He=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!Q.morphAttributes.position,et=!!Q.morphAttributes.normal,mt=!!Q.morphAttributes.color;let Tt=Pn;K.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Tt=T.toneMapping);const At=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=At!==void 0?At.length:0,Ie=m.get(K),ut=U.state.lights;if(Ue===!0&&(Qe===!0||E!==oe)){const Lt=E===oe&&K.id===ae;Me.setState(K,E,Lt)}let at=!1;K.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ut.state.version||Ie.outputColorSpace!==Ae||Y.isBatchedMesh&&Ie.batching===!1||!Y.isBatchedMesh&&Ie.batching===!0||Y.isBatchedMesh&&Ie.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ie.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ie.instancing===!1||!Y.isInstancedMesh&&Ie.instancing===!0||Y.isSkinnedMesh&&Ie.skinning===!1||!Y.isSkinnedMesh&&Ie.skinning===!0||Y.isInstancedMesh&&Ie.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ie.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ie.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ie.instancingMorph===!1&&Y.morphTexture!==null||Ie.envMap!==Ne||K.fog===!0&&Ie.fog!==ye||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Me.numPlanes||Ie.numIntersection!==Me.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==He||Ie.morphTargets!==Ve||Ie.morphNormals!==et||Ie.morphColors!==mt||Ie.toneMapping!==Tt||Ie.morphTargetsCount!==gt)&&(at=!0):(at=!0,Ie.__version=K.version);let Ft=Ie.currentProgram;at===!0&&(Ft=An(K,k,Y));let Fn=!1,Xt=!1,fi=!1;const Mt=Ft.getUniforms(),zt=Ie.uniforms;if(q.useProgram(Ft.program)&&(Fn=!0,Xt=!0,fi=!0),K.id!==ae&&(ae=K.id,Xt=!0),Fn||oe!==E){q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Mt.setValue(O,"projectionMatrix",E.projectionMatrix),Mt.setValue(O,"viewMatrix",E.matrixWorldInverse);const Gt=Mt.map.cameraPosition;Gt!==void 0&&Gt.setValue(O,Oe.setFromMatrixPosition(E.matrixWorld)),pt.logarithmicDepthBuffer&&Mt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Mt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),oe!==E&&(oe=E,Xt=!0,fi=!0)}if(Ie.needsLights&&(ut.state.directionalShadowMap.length>0&&Mt.setValue(O,"directionalShadowMap",ut.state.directionalShadowMap,D),ut.state.spotShadowMap.length>0&&Mt.setValue(O,"spotShadowMap",ut.state.spotShadowMap,D),ut.state.pointShadowMap.length>0&&Mt.setValue(O,"pointShadowMap",ut.state.pointShadowMap,D)),Y.isSkinnedMesh){Mt.setOptional(O,Y,"bindMatrix"),Mt.setOptional(O,Y,"bindMatrixInverse");const Lt=Y.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Mt.setValue(O,"boneTexture",Lt.boneTexture,D))}Y.isBatchedMesh&&(Mt.setOptional(O,Y,"batchingTexture"),Mt.setValue(O,"batchingTexture",Y._matricesTexture,D),Mt.setOptional(O,Y,"batchingIdTexture"),Mt.setValue(O,"batchingIdTexture",Y._indirectTexture,D),Mt.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Mt.setValue(O,"batchingColorTexture",Y._colorsTexture,D));const Zt=Q.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Be.update(Y,Q,Ft),(Xt||Ie.receiveShadow!==Y.receiveShadow)&&(Ie.receiveShadow=Y.receiveShadow,Mt.setValue(O,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(zt.envMap.value=Ne,zt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(zt.envMapIntensity.value=k.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=Hg()),Xt&&(Mt.setValue(O,"toneMappingExposure",T.toneMappingExposure),Ie.needsLights&&Lr(zt,fi),ye&&K.fog===!0&&ve.refreshFogUniforms(zt,ye),ve.refreshMaterialUniforms(zt,K,Ze,Ke,U.state.transmissionRenderTarget[E.id]),ls.upload(O,tr(Ie),zt,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ls.upload(O,tr(Ie),zt,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Mt.setValue(O,"center",Y.center),Mt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Mt.setValue(O,"normalMatrix",Y.normalMatrix),Mt.setValue(O,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Lt=K.uniformsGroups;for(let Gt=0,wi=Lt.length;Gt<wi;Gt++){const on=Lt[Gt];he.update(on,Ft),he.bind(on,Ft)}}return Ft}function Lr(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function an(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,k,Q){const K=m.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),m.get(E.texture).__webglTexture=k,m.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const Q=m.get(E);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0};const un=O.createFramebuffer();this.setRenderTarget=function(E,k=0,Q=0){Z=E,F=k,$=Q;let K=null,Y=!1,ye=!1;if(E){const Ae=m.get(E);if(Ae.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(O.FRAMEBUFFER,Ae.__webglFramebuffer),ee.copy(E.viewport),te.copy(E.scissor),ue=E.scissorTest,q.viewport(ee),q.scissor(te),q.setScissorTest(ue),ae=-1;return}else if(Ae.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(Ae.__hasExternalTextures)D.rebindTextures(E,m.get(E.texture).__webglTexture,m.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(Ae.__boundDepthTexture!==He){if(He!==null&&m.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Fe=m.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?K=Fe[k][Q]:K=Fe[k],Y=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?K=m.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?K=Fe[Q]:K=Fe,ee.copy(E.viewport),te.copy(E.scissor),ue=E.scissorTest}else ee.copy(ce).multiplyScalar(Ze).floor(),te.copy(fe).multiplyScalar(Ze).floor(),ue=De;if(Q!==0&&(K=un),q.bindFramebuffer(O.FRAMEBUFFER,K)&&q.drawBuffers(E,K),q.viewport(ee),q.scissor(te),q.setScissorTest(ue),Y){const Ae=m.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,Q)}else if(ye){const Ae=k;for(let Ne=0;Ne<E.textures.length;Ne++){const Fe=m.get(E.textures[Ne]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,Q,Ae)}}else if(E!==null&&Q!==0){const Ae=m.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ae.__webglTexture,Q)}ae=-1},this.readRenderTargetPixels=function(E,k,Q,K,Y,ye,we,Ae=0){if(!(E&&E.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=m.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne){q.bindFramebuffer(O.FRAMEBUFFER,Ne);try{const Fe=E.textures[Ae],He=Fe.format,Ve=Fe.type;if(!pt.textureFormatReadable(He)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Ve)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-K&&Q>=0&&Q<=E.height-Y&&(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ae),O.readPixels(k,Q,K,Y,de.convert(He),de.convert(Ve),ye))}finally{const Fe=Z!==null?m.get(Z).__webglFramebuffer:null;q.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,k,Q,K,Y,ye,we,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=m.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne)if(k>=0&&k<=E.width-K&&Q>=0&&Q<=E.height-Y){q.bindFramebuffer(O.FRAMEBUFFER,Ne);const Fe=E.textures[Ae],He=Fe.format,Ve=Fe.type;if(!pt.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.bufferData(O.PIXEL_PACK_BUFFER,ye.byteLength,O.STREAM_READ),E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ae),O.readPixels(k,Q,K,Y,de.convert(He),de.convert(Ve),0);const mt=Z!==null?m.get(Z).__webglFramebuffer:null;q.bindFramebuffer(O.FRAMEBUFFER,mt);const Tt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Cu(O,Tt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ye),O.deleteBuffer(et),O.deleteSync(Tt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,Q=0){const K=Math.pow(2,-Q),Y=Math.floor(E.image.width*K),ye=Math.floor(E.image.height*K),we=k!==null?k.x:0,Ae=k!==null?k.y:0;D.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,we,Ae,Y,ye),q.unbindTexture()};const ui=O.createFramebuffer(),ir=O.createFramebuffer();this.copyTextureToTexture=function(E,k,Q=null,K=null,Y=0,ye=null){ye===null&&(Y!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=Y,Y=0):ye=0);let we,Ae,Ne,Fe,He,Ve,et,mt,Tt;const At=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(Q!==null)we=Q.max.x-Q.min.x,Ae=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,Fe=Q.min.x,He=Q.min.y,Ve=Q.isBox3?Q.min.z:0;else{const Zt=Math.pow(2,-Y);we=Math.floor(At.width*Zt),Ae=Math.floor(At.height*Zt),E.isDataArrayTexture?Ne=At.depth:E.isData3DTexture?Ne=Math.floor(At.depth*Zt):Ne=1,Fe=0,He=0,Ve=0}K!==null?(et=K.x,mt=K.y,Tt=K.z):(et=0,mt=0,Tt=0);const gt=de.convert(k.format),Ie=de.convert(k.type);let ut;k.isData3DTexture?(D.setTexture3D(k,0),ut=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),ut=O.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),ut=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const at=O.getParameter(O.UNPACK_ROW_LENGTH),Ft=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Fn=O.getParameter(O.UNPACK_SKIP_PIXELS),Xt=O.getParameter(O.UNPACK_SKIP_ROWS),fi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),O.pixelStorei(O.UNPACK_SKIP_ROWS,He),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve);const Mt=E.isDataArrayTexture||E.isData3DTexture,zt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Zt=m.get(E),Lt=m.get(k),Gt=m.get(Zt.__renderTarget),wi=m.get(Lt.__renderTarget);q.bindFramebuffer(O.READ_FRAMEBUFFER,Gt.__webglFramebuffer),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let on=0;on<Ne;on++)Mt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,m.get(E).__webglTexture,Y,Ve+on),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,m.get(k).__webglTexture,ye,Tt+on)),O.blitFramebuffer(Fe,He,we,Ae,et,mt,we,Ae,O.DEPTH_BUFFER_BIT,O.NEAREST);q.bindFramebuffer(O.READ_FRAMEBUFFER,null),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||m.has(E)){const Zt=m.get(E),Lt=m.get(k);q.bindFramebuffer(O.READ_FRAMEBUFFER,ui),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,ir);for(let Gt=0;Gt<Ne;Gt++)Mt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zt.__webglTexture,Y,Ve+Gt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Zt.__webglTexture,Y),zt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,ye,Tt+Gt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Lt.__webglTexture,ye),Y!==0?O.blitFramebuffer(Fe,He,we,Ae,et,mt,we,Ae,O.COLOR_BUFFER_BIT,O.NEAREST):zt?O.copyTexSubImage3D(ut,ye,et,mt,Tt+Gt,Fe,He,we,Ae):O.copyTexSubImage2D(ut,ye,et,mt,Fe,He,we,Ae);q.bindFramebuffer(O.READ_FRAMEBUFFER,null),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else zt?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(ut,ye,et,mt,Tt,we,Ae,Ne,gt,Ie,At.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(ut,ye,et,mt,Tt,we,Ae,Ne,gt,At.data):O.texSubImage3D(ut,ye,et,mt,Tt,we,Ae,Ne,gt,Ie,At):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ye,et,mt,we,Ae,gt,Ie,At.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ye,et,mt,At.width,At.height,gt,At.data):O.texSubImage2D(O.TEXTURE_2D,ye,et,mt,we,Ae,gt,Ie,At);O.pixelStorei(O.UNPACK_ROW_LENGTH,at),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fi),ye===0&&k.generateMipmaps&&O.generateMipmap(ut),q.unbindTexture()},this.initRenderTarget=function(E){m.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),q.unbindTexture()},this.resetState=function(){F=0,$=0,Z=null,q.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}var Tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ra={},Al;function Wg(){return Al||(Al=1,(function(){var i;function e(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tl=="object"&&Tl];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var h=r;a=a.split(".");for(var S=0;S<a.length-1;S++){var R=a[S];if(!(R in h))break e;h=h[R]}a=a[a.length-1],S=h[a],c=c(S),c!=S&&c!=null&&t(h,a,{configurable:!0,writable:!0,value:c})}}s("Symbol",function(a){function c(L){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new h(S+(L||"")+"_"+R++,L)}function h(L,C){this.h=L,t(this,"description",{configurable:!0,writable:!0,value:C})}if(a)return a;h.prototype.toString=function(){return this.h};var S="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",R=0;return c}),s("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),h=0;h<c.length;h++){var S=r[c[h]];typeof S=="function"&&typeof S.prototype[a]!="function"&&t(S.prototype,a,{configurable:!0,writable:!0,value:function(){return l(e(this))}})}return a});function l(a){return a={next:a},a[Symbol.iterator]=function(){return this},a}function o(a){var c=typeof Symbol<"u"&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:e(a)}}function u(a){if(!(a instanceof Array)){a=o(a);for(var c,h=[];!(c=a.next()).done;)h.push(c.value);a=h}return a}var f=typeof Object.assign=="function"?Object.assign:function(a,c){for(var h=1;h<arguments.length;h++){var S=arguments[h];if(S)for(var R in S)Object.prototype.hasOwnProperty.call(S,R)&&(a[R]=S[R])}return a};s("Object.assign",function(a){return a||f});var d=typeof Object.create=="function"?Object.create:function(a){function c(){}return c.prototype=a,new c},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var _;e:{var v={a:!0},y={};try{y.__proto__=v,_=y.a;break e}catch{}_=!1}p=_?function(a,c){if(a.__proto__=c,a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var A=p;function x(a,c){if(a.prototype=d(c.prototype),a.prototype.constructor=a,A)A(a,c);else for(var h in c)if(h!="prototype")if(Object.defineProperties){var S=Object.getOwnPropertyDescriptor(c,h);S&&Object.defineProperty(a,h,S)}else a[h]=c[h];a.za=c.prototype}function g(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function I(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}g.prototype.u=function(a){this.i=a};function P(a,c){a.l={ma:c,na:!0},a.h=a.s||a.v}g.prototype.return=function(a){this.l={return:a},this.h=this.v};function w(a,c,h){return a.h=h,{value:c}}function U(a){this.h=new g,this.i=a}function N(a,c){I(a.h);var h=a.h.j;return h?B(a,"return"in h?h.return:function(S){return{value:S,done:!0}},c,a.h.return):(a.h.return(c),j(a))}function B(a,c,h,S){try{var R=c.call(a.h.j,h);if(!(R instanceof Object))throw new TypeError("Iterator result "+R+" is not an object");if(!R.done)return a.h.m=!1,R;var L=R.value}catch(C){return a.h.j=null,P(a.h,C),j(a)}return a.h.j=null,S.call(a.h,L),j(a)}function j(a){for(;a.h.h;)try{var c=a.i(a.h);if(c)return a.h.m=!1,{value:c.value,done:!1}}catch(h){a.h.i=void 0,P(a.h,h)}if(a.h.m=!1,a.h.l){if(c=a.h.l,a.h.l=null,c.na)throw c.ma;return{value:c.return,done:!0}}return{value:void 0,done:!0}}function T(a){this.next=function(c){return I(a.h),a.h.j?c=B(a,a.h.j.next,c,a.h.u):(a.h.u(c),c=j(a)),c},this.throw=function(c){return I(a.h),a.h.j?c=B(a,a.h.j.throw,c,a.h.u):(P(a.h,c),c=j(a)),c},this.return=function(c){return N(a,c)},this[Symbol.iterator]=function(){return this}}function b(a){function c(S){return a.next(S)}function h(S){return a.throw(S)}return new Promise(function(S,R){function L(C){C.done?S(C.value):Promise.resolve(C.value).then(c,h).then(L,R)}L(a.next())})}function F(a){return b(new T(new U(a)))}s("Promise",function(a){function c(C){this.i=0,this.j=void 0,this.h=[],this.u=!1;var V=this.l();try{C(V.resolve,V.reject)}catch(J){V.reject(J)}}function h(){this.h=null}function S(C){return C instanceof c?C:new c(function(V){V(C)})}if(a)return a;h.prototype.i=function(C){if(this.h==null){this.h=[];var V=this;this.j(function(){V.m()})}this.h.push(C)};var R=r.setTimeout;h.prototype.j=function(C){R(C,0)},h.prototype.m=function(){for(;this.h&&this.h.length;){var C=this.h;this.h=[];for(var V=0;V<C.length;++V){var J=C[V];C[V]=null;try{J()}catch(me){this.l(me)}}}this.h=null},h.prototype.l=function(C){this.j(function(){throw C})},c.prototype.l=function(){function C(me){return function(Ee){J||(J=!0,me.call(V,Ee))}}var V=this,J=!1;return{resolve:C(this.I),reject:C(this.m)}},c.prototype.I=function(C){if(C===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(C instanceof c)this.L(C);else{e:switch(typeof C){case"object":var V=C!=null;break e;case"function":V=!0;break e;default:V=!1}V?this.F(C):this.s(C)}},c.prototype.F=function(C){var V=void 0;try{V=C.then}catch(J){this.m(J);return}typeof V=="function"?this.M(V,C):this.s(C)},c.prototype.m=function(C){this.v(2,C)},c.prototype.s=function(C){this.v(1,C)},c.prototype.v=function(C,V){if(this.i!=0)throw Error("Cannot settle("+C+", "+V+"): Promise already settled in state"+this.i);this.i=C,this.j=V,this.i===2&&this.K(),this.H()},c.prototype.K=function(){var C=this;R(function(){if(C.D()){var V=r.console;typeof V<"u"&&V.error(C.j)}},1)},c.prototype.D=function(){if(this.u)return!1;var C=r.CustomEvent,V=r.Event,J=r.dispatchEvent;return typeof J>"u"?!0:(typeof C=="function"?C=new C("unhandledrejection",{cancelable:!0}):typeof V=="function"?C=new V("unhandledrejection",{cancelable:!0}):(C=r.document.createEvent("CustomEvent"),C.initCustomEvent("unhandledrejection",!1,!0,C)),C.promise=this,C.reason=this.j,J(C))},c.prototype.H=function(){if(this.h!=null){for(var C=0;C<this.h.length;++C)L.i(this.h[C]);this.h=null}};var L=new h;return c.prototype.L=function(C){var V=this.l();C.T(V.resolve,V.reject)},c.prototype.M=function(C,V){var J=this.l();try{C.call(V,J.resolve,J.reject)}catch(me){J.reject(me)}},c.prototype.then=function(C,V){function J(ze,Le){return typeof ze=="function"?function(We){try{me(ze(We))}catch(nt){Ee(nt)}}:Le}var me,Ee,ke=new c(function(ze,Le){me=ze,Ee=Le});return this.T(J(C,me),J(V,Ee)),ke},c.prototype.catch=function(C){return this.then(void 0,C)},c.prototype.T=function(C,V){function J(){switch(me.i){case 1:C(me.j);break;case 2:V(me.j);break;default:throw Error("Unexpected state: "+me.i)}}var me=this;this.h==null?L.i(J):this.h.push(J),this.u=!0},c.resolve=S,c.reject=function(C){return new c(function(V,J){J(C)})},c.race=function(C){return new c(function(V,J){for(var me=o(C),Ee=me.next();!Ee.done;Ee=me.next())S(Ee.value).T(V,J)})},c.all=function(C){var V=o(C),J=V.next();return J.done?S([]):new c(function(me,Ee){function ke(We){return function(nt){ze[We]=nt,Le--,Le==0&&me(ze)}}var ze=[],Le=0;do ze.push(void 0),Le++,S(J.value).T(ke(ze.length-1),Ee),J=V.next();while(!J.done)})},c});function $(a,c){a instanceof String&&(a+="");var h=0,S=!1,R={next:function(){if(!S&&h<a.length){var L=h++;return{value:c(L,a[L]),done:!1}}return S=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.keys",function(a){return a||function(){return $(this,function(c){return c})}}),s("Array.prototype.fill",function(a){return a||function(c,h,S){var R=this.length||0;for(0>h&&(h=Math.max(0,R+h)),(S==null||S>R)&&(S=R),S=Number(S),0>S&&(S=Math.max(0,R+S)),h=Number(h||0);h<S;h++)this[h]=c;return this}});function Z(a){return a||Array.prototype.fill}s("Int8Array.prototype.fill",Z),s("Uint8Array.prototype.fill",Z),s("Uint8ClampedArray.prototype.fill",Z),s("Int16Array.prototype.fill",Z),s("Uint16Array.prototype.fill",Z),s("Int32Array.prototype.fill",Z),s("Uint32Array.prototype.fill",Z),s("Float32Array.prototype.fill",Z),s("Float64Array.prototype.fill",Z),s("Object.is",function(a){return a||function(c,h){return c===h?c!==0||1/c===1/h:c!==c&&h!==h}}),s("Array.prototype.includes",function(a){return a||function(c,h){var S=this;S instanceof String&&(S=String(S));var R=S.length;for(h=h||0,0>h&&(h=Math.max(h+R,0));h<R;h++){var L=S[h];if(L===c||Object.is(L,c))return!0}return!1}}),s("String.prototype.includes",function(a){return a||function(c,h){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(c,h||0)!==-1}});var ae=this||self;function oe(a,c){a=a.split(".");var h=ae;a[0]in h||typeof h.execScript>"u"||h.execScript("var "+a[0]);for(var S;a.length&&(S=a.shift());)a.length||c===void 0?h[S]&&h[S]!==Object.prototype[S]?h=h[S]:h=h[S]={}:h[S]=c}function ee(a){var c;e:{if((c=ae.navigator)&&(c=c.userAgent))break e;c=""}return c.indexOf(a)!=-1}var te=Array.prototype.map?function(a,c){return Array.prototype.map.call(a,c,void 0)}:function(a,c){for(var h=a.length,S=Array(h),R=typeof a=="string"?a.split(""):a,L=0;L<h;L++)L in R&&(S[L]=c.call(void 0,R[L],L,a));return S},ue={},be=null;function xe(a){var c=a.length,h=3*c/4;h%3?h=Math.floor(h):"=.".indexOf(a[c-1])!=-1&&(h="=.".indexOf(a[c-2])!=-1?h-2:h-1);var S=new Uint8Array(h),R=0;return Pe(a,function(L){S[R++]=L}),R!==h?S.subarray(0,R):S}function Pe(a,c){function h(J){for(;S<a.length;){var me=a.charAt(S++),Ee=be[me];if(Ee!=null)return Ee;if(!/^[\s\xa0]*$/.test(me))throw Error("Unknown base64 encoding at char: "+me)}return J}Ke();for(var S=0;;){var R=h(-1),L=h(0),C=h(64),V=h(64);if(V===64&&R===-1)break;c(R<<2|L>>4),C!=64&&(c(L<<4&240|C>>2),V!=64&&c(C<<6&192|V))}}function Ke(){if(!be){be={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),c=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var S=a.concat(c[h].split(""));ue[h]=S;for(var R=0;R<S.length;R++){var L=S[R];be[L]===void 0&&(be[L]=R)}}}}var Ze=typeof Uint8Array<"u",vt=!(ee("Trident")||ee("MSIE"))&&typeof ae.btoa=="function";function dt(a){if(!vt){var c;c===void 0&&(c=0),Ke(),c=ue[c];for(var h=Array(Math.floor(a.length/3)),S=c[64]||"",R=0,L=0;R<a.length-2;R+=3){var C=a[R],V=a[R+1],J=a[R+2],me=c[C>>2];C=c[(C&3)<<4|V>>4],V=c[(V&15)<<2|J>>6],J=c[J&63],h[L++]=me+C+V+J}switch(me=0,J=S,a.length-R){case 2:me=a[R+1],J=c[(me&15)<<2]||S;case 1:a=a[R],h[L]=c[a>>2]+c[(a&3)<<4|me>>4]+J+S}return h.join("")}for(c="";10240<a.length;)c+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);return c+=String.fromCharCode.apply(null,a),btoa(c)}var ce=RegExp("[-_.]","g");function fe(a){switch(a){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function De(a){if(!vt)return xe(a);ce.test(a)&&(a=a.replace(ce,fe)),a=atob(a);for(var c=new Uint8Array(a.length),h=0;h<a.length;h++)c[h]=a.charCodeAt(h);return c}var qe;function Ue(){return qe||(qe=new Uint8Array(0))}var Qe={},wt=typeof Uint8Array.prototype.slice=="function",Oe=0,Xe=0;function lt(a){var c=0>a;a=Math.abs(a);var h=a>>>0;a=Math.floor((a-h)/4294967296),c&&(h=o(yt(h,a)),c=h.next().value,a=h.next().value,h=c),Oe=h>>>0,Xe=a>>>0}var $e=typeof BigInt=="function";function yt(a,c){return c=~c,a?a=~a+1:c+=1,[a,c]}function O(a,c){this.i=a>>>0,this.h=c>>>0}function St(a){if(!a)return st||(st=new O(0,0));if(!/^-?\d+$/.test(a))return null;if(16>a.length)lt(Number(a));else if($e)a=BigInt(a),Oe=Number(a&BigInt(4294967295))>>>0,Xe=Number(a>>BigInt(32)&BigInt(4294967295));else{var c=+(a[0]==="-");Xe=Oe=0;for(var h=a.length,S=c,R=(h-c)%6+c;R<=h;S=R,R+=6)S=Number(a.slice(S,R)),Xe*=1e6,Oe=1e6*Oe+S,4294967296<=Oe&&(Xe+=Oe/4294967296|0,Oe%=4294967296);c&&(c=o(yt(Oe,Xe)),a=c.next().value,c=c.next().value,Oe=a,Xe=c)}return new O(Oe,Xe)}var st;function pt(a,c){return Error("Invalid wire type: "+a+" (at position "+c+")")}function q(){return Error("Failed to read varint, encoding is invalid.")}function M(a,c){return Error("Tried to read past the end of the data "+c+" > "+a)}function m(){throw Error("Invalid UTF8")}function D(a,c){return c=String.fromCharCode.apply(null,c),a==null?c:a+c}var W=void 0,X,G=typeof TextDecoder<"u",re,ne=typeof TextEncoder<"u",ie;function ve(a){if(a!==Qe)throw Error("illegal external caller")}function se(a,c){if(ve(c),this.V=a,a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values")}function pe(){return ie||(ie=new se(null,Qe))}function Me(a){ve(Qe);var c=a.V;return c=c==null||Ze&&c!=null&&c instanceof Uint8Array?c:typeof c=="string"?De(c):null,c==null?c:a.V=c}function Re(a){if(typeof a=="string")return{buffer:De(a),C:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),C:!1};if(a.constructor===Uint8Array)return{buffer:a,C:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),C:!1};if(a.constructor===se)return{buffer:Me(a)||Ue(),C:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function ge(a,c){this.i=null,this.m=!1,this.h=this.j=this.l=0,Be(this,a,c)}function Be(a,c,h){h=h===void 0?{}:h,a.S=h.S===void 0?!1:h.S,c&&(c=Re(c),a.i=c.buffer,a.m=c.C,a.l=0,a.j=a.i.length,a.h=a.l)}ge.prototype.reset=function(){this.h=this.l};function z(a,c){if(a.h=c,c>a.j)throw M(a.j,c)}function Se(a){var c=a.i,h=a.h,S=c[h++],R=S&127;if(S&128&&(S=c[h++],R|=(S&127)<<7,S&128&&(S=c[h++],R|=(S&127)<<14,S&128&&(S=c[h++],R|=(S&127)<<21,S&128&&(S=c[h++],R|=S<<28,S&128&&c[h++]&128&&c[h++]&128&&c[h++]&128&&c[h++]&128&&c[h++]&128)))))throw q();return z(a,h),R}function de(a,c){if(0>c)throw Error("Tried to read a negative byte length: "+c);var h=a.h,S=h+c;if(S>a.j)throw M(c,a.j-h);return a.h=S,h}var Te=[];function he(){this.h=[]}he.prototype.length=function(){return this.h.length},he.prototype.end=function(){var a=this.h;return this.h=[],a};function le(a,c,h){for(;0<h||127<c;)a.h.push(c&127|128),c=(c>>>7|h<<25)>>>0,h>>>=7;a.h.push(c)}function _e(a,c){for(;127<c;)a.h.push(c&127|128),c>>>=7;a.h.push(c)}function Ge(a,c){if(Te.length){var h=Te.pop();Be(h,a,c),a=h}else a=new ge(a,c);this.h=a,this.j=this.h.h,this.i=this.l=-1,this.setOptions(c)}Ge.prototype.setOptions=function(a){a=a===void 0?{}:a,this.ca=a.ca===void 0?!1:a.ca},Ge.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function ct(a){var c=a.h;if(c.h==c.j)return!1;a.j=a.h.h;var h=Se(a.h)>>>0;if(c=h>>>3,h&=7,!(0<=h&&5>=h))throw pt(h,a.j);if(1>c)throw Error("Invalid field number: "+c+" (at position "+a.j+")");return a.l=c,a.i=h,!0}function rt(a){switch(a.i){case 0:if(a.i!=0)rt(a);else e:{a=a.h;for(var c=a.h,h=c+10,S=a.i;c<h;)if((S[c++]&128)===0){z(a,c);break e}throw q()}break;case 1:a=a.h,z(a,a.h+8);break;case 2:a.i!=2?rt(a):(c=Se(a.h)>>>0,a=a.h,z(a,a.h+c));break;case 5:a=a.h,z(a,a.h+4);break;case 3:c=a.l;do{if(!ct(a))throw Error("Unmatched start-group tag: stream EOF");if(a.i==4){if(a.l!=c)throw Error("Unmatched end-group tag");break}rt(a)}while(!0);break;default:throw pt(a.i,a.j)}}var Bt=[];function _n(){this.j=[],this.i=0,this.h=new he}function Zn(a,c){c.length!==0&&(a.j.push(c),a.i+=c.length)}function Cr(a,c){if(c=c.R){Zn(a,a.h.end());for(var h=0;h<c.length;h++)Zn(a,Me(c[h])||Ue())}}var sn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Nn(a,c){return sn?a[sn]|=c:a.A!==void 0?a.A|=c:(Object.defineProperties(a,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}}),c)}function er(a,c){sn?a[sn]&&(a[sn]&=~c):a.A!==void 0&&(a.A&=~c)}function Rt(a){var c;return sn?c=a[sn]:c=a.A,c??0}function Nt(a,c){sn?a[sn]=c:a.A!==void 0?a.A=c:Object.defineProperties(a,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}})}function oi(a){return Nn(a,1),a}function Pr(a,c){Nt(c,(a|0)&-51)}function li(a,c){Nt(c,(a|18)&-41)}var $n={};function ci(a){return a!==null&&typeof a=="object"&&!Array.isArray(a)&&a.constructor===Object}var An,tr=[];Nt(tr,23),An=Object.freeze(tr);function bi(a){if(Rt(a.o)&2)throw Error("Cannot mutate an immutable Message")}function nr(a){var c=a.length;(c=c?a[c-1]:void 0)&&ci(c)?c.g=1:(c={},a.push((c.g=1,c)))}function Lr(a){var c=a.i+a.G;return a.B||(a.B=a.o[c]={})}function an(a,c){return c===-1?null:c>=a.i?a.B?a.B[c]:void 0:a.o[c+a.G]}function un(a,c,h,S){bi(a),ui(a,c,h,S)}function ui(a,c,h,S){a.j&&(a.j=void 0),c>=a.i||S?Lr(a)[c]=h:(a.o[c+a.G]=h,(a=a.B)&&c in a&&delete a[c])}function ir(a,c,h,S){var R=an(a,c);Array.isArray(R)||(R=An);var L=Rt(R);if(L&1||oi(R),S)L&2||Nn(R,2),h&1||Object.freeze(R);else{S=!(h&2);var C=L&2;h&1||!C?S&&L&16&&!C&&er(R,16):(R=oi(Array.prototype.slice.call(R)),ui(a,c,R))}return R}function E(a,c){var h=an(a,c),S=h==null?h:typeof h=="number"||h==="NaN"||h==="Infinity"||h==="-Infinity"?Number(h):void 0;return S!=null&&S!==h&&ui(a,c,S),S}function k(a,c,h,S,R){a.h||(a.h={});var L=a.h[h],C=ir(a,h,3,R);if(!L){var V=C;L=[];var J=!!(Rt(a.o)&16);C=!!(Rt(V)&2);var me=V;!R&&C&&(V=Array.prototype.slice.call(V));for(var Ee=C,ke=0;ke<V.length;ke++){var ze=V[ke],Le=c,We=!1;if(We=We===void 0?!1:We,ze=Array.isArray(ze)?new Le(ze):We?new Le:void 0,ze!==void 0){Le=ze.o;var nt=We=Rt(Le);C&&(nt|=2),J&&(nt|=16),nt!=We&&Nt(Le,nt),Le=nt,Ee=Ee||!!(2&Le),L.push(ze)}}return a.h[h]=L,J=Rt(V),c=J|33,c=Ee?c&-9:c|8,J!=c&&(Ee=V,Object.isFrozen(Ee)&&(Ee=Array.prototype.slice.call(Ee)),Nt(Ee,c),V=Ee),me!==V&&ui(a,h,V),(R||S&&C)&&Nn(L,2),S&&Object.freeze(L),L}return R||(R=Object.isFrozen(L),S&&!R?Object.freeze(L):!S&&R&&(L=Array.prototype.slice.call(L),a.h[h]=L)),L}function Q(a,c,h){var S=!!(Rt(a.o)&2);if(c=k(a,c,h,S,S),a=ir(a,h,3,S),!(S||Rt(a)&8)){for(S=0;S<c.length;S++){if(h=c[S],Rt(h.o)&2){var R=gt(h,!1);R.j=h}else R=h;h!==R&&(c[S]=R,a[S]=R.o)}Nn(a,8)}return c}function K(a,c,h){if(h!=null&&typeof h!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof h+": "+h);un(a,c,h)}function Y(a,c,h,S,R){bi(a);var L=k(a,h,c,!1,!1);return h=S??new h,a=ir(a,c,2,!1),R!=null?(L.splice(R,0,h),a.splice(R,0,h.o)):(L.push(h),a.push(h.o)),h.C()&&er(a,8),h}function ye(a,c){return a??c}function we(a,c,h){return h=h===void 0?0:h,ye(E(a,c),h)}var Ae;function Ne(a){switch(typeof a){case"number":return isFinite(a)?a:String(a);case"object":if(a)if(Array.isArray(a)){if((Rt(a)&128)!==0)return a=Array.prototype.slice.call(a),nr(a),a}else{if(Ze&&a!=null&&a instanceof Uint8Array)return dt(a);if(a instanceof se){var c=a.V;return c==null?"":typeof c=="string"?c:a.V=dt(c)}}}return a}function Fe(a,c,h,S){if(a!=null){if(Array.isArray(a))a=He(a,c,h,S!==void 0);else if(ci(a)){var R={},L;for(L in a)R[L]=Fe(a[L],c,h,S);a=R}else a=c(a,S);return a}}function He(a,c,h,S){var R=Rt(a);S=S?!!(R&16):void 0,a=Array.prototype.slice.call(a);for(var L=0;L<a.length;L++)a[L]=Fe(a[L],c,h,S);return h(R,a),a}function Ve(a){return a.ja===$n?a.toJSON():Ne(a)}function et(a,c){a&128&&nr(c)}function mt(a,c,h){if(h=h===void 0?li:h,a!=null){if(Ze&&a instanceof Uint8Array)return a.length?new se(new Uint8Array(a),Qe):pe();if(Array.isArray(a)){var S=Rt(a);return S&2?a:c&&!(S&32)&&(S&16||S===0)?(Nt(a,S|2),a):(a=He(a,mt,S&4?li:h,!0),c=Rt(a),c&4&&c&2&&Object.freeze(a),a)}return a.ja===$n?At(a):a}}function Tt(a,c,h,S,R,L,C){if(a=a.h&&a.h[h]){if(S=Rt(a),S&2?S=a:(L=te(a,At),li(S,L),Object.freeze(L),S=L),bi(c),C=S==null?An:oi([]),S!=null){for(L=!!S.length,a=0;a<S.length;a++){var V=S[a];L=L&&!(Rt(V.o)&2),C[a]=V.o}L=(L?8:0)|1,a=Rt(C),(a&L)!==L&&(Object.isFrozen(C)&&(C=Array.prototype.slice.call(C)),Nt(C,a|L)),c.h||(c.h={}),c.h[h]=S}else c.h&&(c.h[h]=void 0);ui(c,h,C,R)}else un(c,h,mt(S,L,C),R)}function At(a){return Rt(a.o)&2||(a=gt(a,!0),Nn(a.o,2)),a}function gt(a,c){var h=a.o,S=[];Nn(S,16);var R=a.constructor.h;if(R&&S.push(R),R=a.B,R){S.length=h.length,S.fill(void 0,S.length,h.length);var L={};S[S.length-1]=L}(Rt(h)&128)!==0&&nr(S),c=c||a.C()?li:Pr,L=a.constructor,Ae=S,S=new L(S),Ae=void 0,a.R&&(S.R=a.R.slice()),L=!!(Rt(h)&16);for(var C=R?h.length-1:h.length,V=0;V<C;V++)Tt(a,S,V-a.G,h[V],!1,L,c);if(R)for(var J in R)Tt(a,S,+J,R[J],!0,L,c);return S}function Ie(a,c,h){a==null&&(a=Ae),Ae=void 0;var S=this.constructor.i||0,R=0<S,L=this.constructor.h,C=!1;if(a==null){a=L?[L]:[];var V=48,J=!0;R&&(S=0,V|=128),Nt(a,V)}else{if(!Array.isArray(a)||L&&L!==a[0])throw Error();var me=V=Nn(a,0);if((J=(16&me)!==0)&&((C=(32&me)!==0)||(me|=32)),R){if(128&me)S=0;else if(0<a.length){var Ee=a[a.length-1];if(ci(Ee)&&"g"in Ee){S=0,me|=128,delete Ee.g;var ke=!0,ze;for(ze in Ee){ke=!1;break}ke&&a.pop()}}}else if(128&me)throw Error();V!==me&&Nt(a,me)}this.G=(L?0:-1)-S,this.h=void 0,this.o=a;e:{if(L=this.o.length,S=L-1,L&&(L=this.o[S],ci(L))){this.B=L,this.i=S-this.G;break e}c!==void 0&&-1<c?(this.i=Math.max(c,S+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!R&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(h){c=J&&!C&&!0,R=this.i;var Le;for(J=0;J<h.length;J++)C=h[J],C<R?(C+=this.G,(S=a[C])?ut(S,c):a[C]=An):(Le||(Le=Lr(this)),(S=Le[C])?ut(S,c):Le[C]=An)}}Ie.prototype.toJSON=function(){return He(this.o,Ve,et)},Ie.prototype.C=function(){return!!(Rt(this.o)&2)};function ut(a,c){if(Array.isArray(a)){var h=Rt(a),S=1;!c||h&2||(S|=16),(h&S)!==S&&Nt(a,h|S)}}Ie.prototype.ja=$n,Ie.prototype.toString=function(){return this.o.toString()};function at(a,c,h){if(h){var S={},R;for(R in h){var L=h[R],C=L.ra;C||(S.J=L.xa||L.oa.W,L.ia?(S.aa=Gt(L.ia),C=(function(V){return function(J,me,Ee){return V.J(J,me,Ee,V.aa)}})(S)):L.ka?(S.Z=wi(L.da.P,L.ka),C=(function(V){return function(J,me,Ee){return V.J(J,me,Ee,V.Z)}})(S)):C=S.J,L.ra=C),C(c,a,L.da),S={J:S.J,aa:S.aa,Z:S.Z}}}Cr(c,a)}var Ft=Symbol();function Fn(a,c,h){return a[Ft]||(a[Ft]=function(S,R){return c(S,R,h)})}function Xt(a){var c=a[Ft];if(!c){var h=_s(a);c=function(S,R){return mo(S,R,h)},a[Ft]=c}return c}function fi(a){var c=a.ia;if(c)return Xt(c);if(c=a.wa)return Fn(a.da.P,c,a.ka)}function Mt(a){var c=fi(a),h=a.da,S=a.oa.U;return c?function(R,L){return S(R,L,h,c)}:function(R,L){return S(R,L,h)}}function zt(a,c){var h=a[c];return typeof h=="function"&&h.length===0&&(h=h(),a[c]=h),Array.isArray(h)&&(rr in h||on in h||0<h.length&&typeof h[0]=="function")?h:void 0}function Zt(a,c,h,S,R,L){c.P=a[0];var C=1;if(a.length>C&&typeof a[C]!="number"){var V=a[C++];h(c,V)}for(;C<a.length;){h=a[C++];for(var J=C+1;J<a.length&&typeof a[J]!="number";)J++;switch(V=a[C++],J-=C,J){case 0:S(c,h,V);break;case 1:(J=zt(a,C))?(C++,R(c,h,V,J)):S(c,h,V,a[C++]);break;case 2:J=C++,J=zt(a,J),R(c,h,V,J,a[C++]);break;case 3:L(c,h,V,a[C++],a[C++],a[C++]);break;case 4:L(c,h,V,a[C++],a[C++],a[C++],a[C++]);break;default:throw Error("unexpected number of binary field arguments: "+J)}}return c}var Lt=Symbol();function Gt(a){var c=a[Lt];if(!c){var h=gs(a);c=function(S,R){return go(S,R,h)},a[Lt]=c}return c}function wi(a,c){var h=a[Lt];return h||(h=function(S,R){return at(S,R,c)},a[Lt]=h),h}var on=Symbol();function cc(a,c){a.push(c)}function uc(a,c,h){a.push(c,h.W)}function fc(a,c,h,S){var R=Gt(S),L=gs(S).P,C=h.W;a.push(c,function(V,J,me){return C(V,J,me,L,R)})}function hc(a,c,h,S,R,L){var C=wi(S,L),V=h.W;a.push(c,function(J,me,Ee){return V(J,me,Ee,S,C)})}function gs(a){var c=a[on];return c||(c=Zt(a,a[on]=[],cc,uc,fc,hc),rr in a&&on in a&&(a.length=0),c)}var rr=Symbol();function dc(a,c){a[0]=c}function pc(a,c,h,S){var R=h.U;a[c]=S?function(L,C,V){return R(L,C,V,S)}:R}function mc(a,c,h,S,R){var L=h.U,C=Xt(S),V=_s(S).P;a[c]=function(J,me,Ee){return L(J,me,Ee,V,C,R)}}function gc(a,c,h,S,R,L,C){var V=h.U,J=Fn(S,R,L);a[c]=function(me,Ee,ke){return V(me,Ee,ke,S,J,C)}}function _s(a){var c=a[rr];return c||(c=Zt(a,a[rr]={},dc,pc,mc,gc),rr in a&&on in a&&(a.length=0),c)}function mo(a,c,h){for(;ct(c)&&c.i!=4;){var S=c.l,R=h[S];if(!R){var L=h[0];L&&(L=L[S])&&(R=h[S]=Mt(L))}if(!R||!R(c,a,S)){R=c,S=a,L=R.j,rt(R);var C=R;if(!C.ca){if(R=C.h.h-L,C.h.h=L,C=C.h,R==0)R=pe();else{if(L=de(C,R),C.S&&C.m)R=C.i.subarray(L,L+R);else{C=C.i;var V=L;R=L+R,R=V===R?Ue():wt?C.slice(V,R):new Uint8Array(C.subarray(V,R))}R=R.length==0?pe():new se(R,Qe)}(L=S.R)?L.push(R):S.R=[R]}}}return a}function go(a,c,h){for(var S=h.length,R=S%2==1,L=R?1:0;L<S;L+=2)(0,h[L+1])(c,a,h[L]);at(a,c,R?h[0]:void 0)}function sr(a,c){return{U:a,W:c}}var vn=sr(function(a,c,h){if(a.i!==5)return!1;a=a.h;var S=a.i,R=a.h,L=S[R],C=S[R+1],V=S[R+2];return S=S[R+3],z(a,a.h+4),C=(L<<0|C<<8|V<<16|S<<24)>>>0,a=2*(C>>31)+1,L=C>>>23&255,C&=8388607,un(c,h,L==255?C?NaN:1/0*a:L==0?a*Math.pow(2,-149)*C:a*Math.pow(2,L-150)*(C+Math.pow(2,23))),!0},function(a,c,h){if(c=E(c,h),c!=null){_e(a.h,8*h+5),a=a.h;var S=+c;S===0?0<1/S?Oe=Xe=0:(Xe=0,Oe=2147483648):isNaN(S)?(Xe=0,Oe=2147483647):(S=(h=0>S?-2147483648:0)?-S:S,34028234663852886e22<S?(Xe=0,Oe=(h|2139095040)>>>0):11754943508222875e-54>S?(S=Math.round(S/Math.pow(2,-149)),Xe=0,Oe=(h|S)>>>0):(c=Math.floor(Math.log(S)/Math.LN2),S*=Math.pow(2,-c),S=Math.round(8388608*S),16777216<=S&&++c,Xe=0,Oe=(h|c+127<<23|S&8388607)>>>0)),h=Oe,a.h.push(h>>>0&255),a.h.push(h>>>8&255),a.h.push(h>>>16&255),a.h.push(h>>>24&255)}}),_c=sr(function(a,c,h){if(a.i!==0)return!1;var S=a.h,R=0,L=a=0,C=S.i,V=S.h;do{var J=C[V++];R|=(J&127)<<L,L+=7}while(32>L&&J&128);for(32<L&&(a|=(J&127)>>4),L=3;32>L&&J&128;L+=7)J=C[V++],a|=(J&127)<<L;if(z(S,V),128>J)S=R>>>0,J=a>>>0,(a=J&2147483648)&&(S=~S+1>>>0,J=~J>>>0,S==0&&(J=J+1>>>0)),S=4294967296*J+(S>>>0);else throw q();return un(c,h,a?-S:S),!0},function(a,c,h){c=an(c,h),c!=null&&(typeof c=="string"&&St(c),c!=null&&(_e(a.h,8*h),typeof c=="number"?(a=a.h,lt(c),le(a,Oe,Xe)):(h=St(c),le(a.h,h.i,h.h))))}),vc=sr(function(a,c,h){return a.i!==0?!1:(un(c,h,Se(a.h)),!0)},function(a,c,h){if(c=an(c,h),c!=null&&c!=null)if(_e(a.h,8*h),a=a.h,h=c,0<=h)_e(a,h);else{for(c=0;9>c;c++)a.h.push(h&127|128),h>>=7;a.h.push(1)}}),_o=sr(function(a,c,h){if(a.i!==2)return!1;var S=Se(a.h)>>>0;a=a.h;var R=de(a,S);if(a=a.i,G){var L=a,C;(C=X)||(C=X=new TextDecoder("utf-8",{fatal:!0})),a=R+S,L=R===0&&a===L.length?L:L.subarray(R,a);try{var V=C.decode(L)}catch(ke){if(W===void 0){try{C.decode(new Uint8Array([128]))}catch{}try{C.decode(new Uint8Array([97])),W=!0}catch{W=!1}}throw!W&&(X=void 0),ke}}else{V=R,S=V+S,R=[];for(var J=null,me,Ee;V<S;)me=a[V++],128>me?R.push(me):224>me?V>=S?m():(Ee=a[V++],194>me||(Ee&192)!==128?(V--,m()):R.push((me&31)<<6|Ee&63)):240>me?V>=S-1?m():(Ee=a[V++],(Ee&192)!==128||me===224&&160>Ee||me===237&&160<=Ee||((L=a[V++])&192)!==128?(V--,m()):R.push((me&15)<<12|(Ee&63)<<6|L&63)):244>=me?V>=S-2?m():(Ee=a[V++],(Ee&192)!==128||(me<<28)+(Ee-144)>>30!==0||((L=a[V++])&192)!==128||((C=a[V++])&192)!==128?(V--,m()):(me=(me&7)<<18|(Ee&63)<<12|(L&63)<<6|C&63,me-=65536,R.push((me>>10&1023)+55296,(me&1023)+56320))):m(),8192<=R.length&&(J=D(J,R),R.length=0);V=D(J,R)}return un(c,h,V),!0},function(a,c,h){if(c=an(c,h),c!=null){var S=!1;if(S=S===void 0?!1:S,ne){if(S&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(c))throw Error("Found an unpaired surrogate");c=(re||(re=new TextEncoder)).encode(c)}else{for(var R=0,L=new Uint8Array(3*c.length),C=0;C<c.length;C++){var V=c.charCodeAt(C);if(128>V)L[R++]=V;else{if(2048>V)L[R++]=V>>6|192;else{if(55296<=V&&57343>=V){if(56319>=V&&C<c.length){var J=c.charCodeAt(++C);if(56320<=J&&57343>=J){V=1024*(V-55296)+J-56320+65536,L[R++]=V>>18|240,L[R++]=V>>12&63|128,L[R++]=V>>6&63|128,L[R++]=V&63|128;continue}else C--}if(S)throw Error("Found an unpaired surrogate");V=65533}L[R++]=V>>12|224,L[R++]=V>>6&63|128}L[R++]=V&63|128}}c=R===L.length?L:L.subarray(0,R)}_e(a.h,8*h+2),_e(a.h,c.length),Zn(a,a.h.end()),Zn(a,c)}}),vo=sr(function(a,c,h,S,R){if(a.i!==2)return!1;c=Y(c,h,S),h=a.h.j,S=Se(a.h)>>>0;var L=a.h.h+S,C=L-h;if(0>=C&&(a.h.j=L,R(c,a,void 0,void 0,void 0),C=L-a.h.h),C)throw Error("Message parsing ended unexpectedly. Expected to read "+(S+" bytes, instead read "+(S-C)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return a.h.h=L,a.h.j=h,!0},function(a,c,h,S,R){if(c=Q(c,S,h),c!=null)for(S=0;S<c.length;S++){var L=a;_e(L.h,8*h+2);var C=L.h.end();Zn(L,C),C.push(L.i),L=C,R(c[S],a),C=a;var V=L.pop();for(V=C.i+C.h.length()-V;127<V;)L.push(V&127|128),V>>>=7,C.i++;L.push(V),C.i++}});function vs(a){return function(c,h){e:{if(Bt.length){var S=Bt.pop();S.setOptions(h),Be(S.h,c,h),c=S}else c=new Ge(c,h);try{var R=_s(a),L=mo(new R.P,c,R);break e}finally{R=c.h,R.i=null,R.m=!1,R.l=0,R.j=0,R.h=0,R.S=!1,c.l=-1,c.i=-1,100>Bt.length&&Bt.push(c)}L=void 0}return L}}function xs(a){return function(){var c=new _n;go(this,c,gs(a)),Zn(c,c.h.end());for(var h=new Uint8Array(c.i),S=c.j,R=S.length,L=0,C=0;C<R;C++){var V=S[C];h.set(V,L),L+=V.length}return c.j=[h],h}}function Ri(a){Ie.call(this,a)}x(Ri,Ie);var xo=[Ri,1,vc,2,vn,3,_o,4,_o];Ri.prototype.l=xs(xo);function Ss(a){Ie.call(this,a,-1,xc)}x(Ss,Ie),Ss.prototype.addClassification=function(a,c){return Y(this,1,Ri,a,c),this};var xc=[1],Sc=vs([Ss,1,vo,xo]);function ar(a){Ie.call(this,a)}x(ar,Ie);var So=[ar,1,vn,2,vn,3,vn,4,vn,5,vn];ar.prototype.l=xs(So);function Mo(a){Ie.call(this,a,-1,Mc)}x(Mo,Ie);var Mc=[1],yc=vs([Mo,1,vo,So]);function Dr(a){Ie.call(this,a)}x(Dr,Ie);var yo=[Dr,1,vn,2,vn,3,vn,4,vn,5,vn,6,_c],Ec=vs(yo);Dr.prototype.l=xs(yo);function Eo(a,c,h){if(h=a.createShader(h===0?a.VERTEX_SHADER:a.FRAGMENT_SHADER),a.shaderSource(h,c),a.compileShader(h),!a.getShaderParameter(h,a.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+a.getShaderInfoLog(h));return h}function Tc(a){return Q(a,Ri,1).map(function(c){var h=an(c,1);return{index:h??0,qa:we(c,2),label:an(c,3)!=null?ye(an(c,3),""):void 0,displayName:an(c,4)!=null?ye(an(c,4),""):void 0}})}function Ac(a){return{x:we(a,1),y:we(a,2),z:we(a,3),visibility:E(a,4)!=null?we(a,4):void 0}}function Ms(a){return Q(yc(a),ar,1).map(Ac)}function ys(a,c){this.i=a,this.h=c,this.m=0}function To(a,c,h){return bc(a,c),typeof a.h.canvas.transferToImageBitmap=="function"?Promise.resolve(a.h.canvas.transferToImageBitmap()):h?Promise.resolve(a.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(a.h.canvas):(a.j===void 0&&(a.j=document.createElement("canvas")),new Promise(function(S){a.j.height=a.h.canvas.height,a.j.width=a.h.canvas.width,a.j.getContext("2d",{}).drawImage(a.h.canvas,0,0,a.h.canvas.width,a.h.canvas.height),S(a.j)}))}function bc(a,c){var h=a.h;if(a.s===void 0){var S=Eo(h,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),R=Eo(h,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),L=h.createProgram();if(h.attachShader(L,S),h.attachShader(L,R),h.linkProgram(L),!h.getProgramParameter(L,h.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+h.getProgramInfoLog(L));S=a.s=L,h.useProgram(S),R=h.getUniformLocation(S,"sampler0"),a.l={O:h.getAttribLocation(S,"aVertex"),N:h.getAttribLocation(S,"aTex"),ya:R},a.v=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,a.v),h.enableVertexAttribArray(a.l.O),h.vertexAttribPointer(a.l.O,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),a.u=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,a.u),h.enableVertexAttribArray(a.l.N),h.vertexAttribPointer(a.l.N,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),h.uniform1i(R,0)}S=a.l,h.useProgram(a.s),h.canvas.width=c.width,h.canvas.height=c.height,h.viewport(0,0,c.width,c.height),h.activeTexture(h.TEXTURE0),a.i.bindTexture2d(c.glName),h.enableVertexAttribArray(S.O),h.bindBuffer(h.ARRAY_BUFFER,a.v),h.vertexAttribPointer(S.O,2,h.FLOAT,!1,0,0),h.enableVertexAttribArray(S.N),h.bindBuffer(h.ARRAY_BUFFER,a.u),h.vertexAttribPointer(S.N,2,h.FLOAT,!1,0,0),h.bindFramebuffer(h.DRAW_FRAMEBUFFER?h.DRAW_FRAMEBUFFER:h.FRAMEBUFFER,null),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.colorMask(!0,!0,!0,!0),h.drawArrays(h.TRIANGLE_FAN,0,4),h.disableVertexAttribArray(S.O),h.disableVertexAttribArray(S.N),h.bindBuffer(h.ARRAY_BUFFER,null),a.i.bindTexture2d(0)}function wc(a){this.h=a}var Rc=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Cc(a,c){return c+a}function Ao(a,c){window[a]=c}function Pc(a){var c=document.createElement("script");return c.setAttribute("src",a),c.setAttribute("crossorigin","anonymous"),new Promise(function(h){c.addEventListener("load",function(){h()},!1),c.addEventListener("error",function(){h()},!1),document.body.appendChild(c)})}function Lc(){return F(function(a){switch(a.h){case 1:return a.s=2,w(a,WebAssembly.instantiate(Rc),4);case 4:a.h=3,a.s=0;break;case 2:return a.s=0,a.l=null,a.return(!1);case 3:return a.return(!0)}})}function Es(a){if(this.h=a,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=a&&a.locateFile||Cc,typeof window=="object")var c=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")c=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=c,a.options){c=o(Object.keys(a.options));for(var h=c.next();!h.done;h=c.next()){h=h.value;var S=a.options[h].default;S!==void 0&&(this.l[h]=typeof S=="function"?S():S)}}}i=Es.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Dc(a){var c,h,S,R,L,C,V,J,me,Ee,ke;return F(function(ze){switch(ze.h){case 1:return a.ga?(c=a.h.files===void 0?[]:typeof a.h.files=="function"?a.h.files(a.l):a.h.files,w(ze,Lc(),2)):ze.return();case 2:if(h=ze.i,typeof window=="object")return Ao("createMediapipeSolutionsWasm",{locateFile:a.locateFile}),Ao("createMediapipeSolutionsPackedAssets",{locateFile:a.locateFile}),C=c.filter(function(Le){return Le.data!==void 0}),V=c.filter(function(Le){return Le.data===void 0}),J=Promise.all(C.map(function(Le){var We=Ir(a,Le.url);if(Le.path!==void 0){var nt=Le.path;We=We.then(function(bt){return a.overrideFile(nt,bt),Promise.resolve(bt)})}return We})),me=Promise.all(V.map(function(Le){return Le.simd===void 0||Le.simd&&h||!Le.simd&&!h?Pc(a.locateFile(Le.url,a.ha)):Promise.resolve()})).then(function(){var Le,We,nt;return F(function(bt){if(bt.h==1)return Le=window.createMediapipeSolutionsWasm,We=window.createMediapipeSolutionsPackedAssets,nt=a,w(bt,Le(We),2);nt.i=bt.i,bt.h=0})}),Ee=(function(){return F(function(Le){return a.h.graph&&a.h.graph.url?Le=w(Le,Ir(a,a.h.graph.url),0):(Le.h=0,Le=void 0),Le})})(),w(ze,Promise.all([me,J,Ee]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return S=c.filter(function(Le){return Le.simd===void 0||Le.simd&&h||!Le.simd&&!h}).map(function(Le){return a.locateFile(Le.url,a.ha)}),importScripts.apply(null,u(S)),R=a,w(ze,createMediapipeSolutionsWasm(Module),6);case 6:R.i=ze.i,a.m=new OffscreenCanvas(1,1),a.i.canvas=a.m,L=a.i.GL.createContext(a.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),a.i.GL.makeContextCurrent(L),ze.h=4;break;case 7:if(a.m=document.createElement("canvas"),ke=a.m.getContext("webgl2",{}),!ke&&(ke=a.m.getContext("webgl",{}),!ke))return alert("Failed to create WebGL canvas context when passing video frame."),ze.return();a.K=ke,a.i.canvas=a.m,a.i.createContext(a.m,!0,!0,{});case 4:a.j=new a.i.SolutionWasm,a.ga=!1,ze.h=0}})}function Ic(a){var c,h,S,R,L,C,V,J;return F(function(me){if(me.h==1){if(a.h.graph&&a.h.graph.url&&a.fa===a.h.graph.url)return me.return();if(a.u=!0,!a.h.graph||!a.h.graph.url){me.h=2;return}return a.fa=a.h.graph.url,w(me,Ir(a,a.h.graph.url),3)}for(me.h!=2&&(c=me.i,a.j.loadGraph(c)),h=o(Object.keys(a.D)),S=h.next();!S.done;S=h.next())R=S.value,a.j.overrideFile(R,a.D[R]);if(a.D={},a.h.listeners)for(L=o(a.h.listeners),C=L.next();!C.done;C=L.next())V=C.value,Oc(a,V);J=a.l,a.l={},a.setOptions(J),me.h=0})}i.reset=function(){var a=this;return F(function(c){a.j&&(a.j.reset(),a.s={},a.v={}),c.h=0})},i.setOptions=function(a,c){var h=this;if(c=c||this.h.options){for(var S=[],R=[],L={},C=o(Object.keys(a)),V=C.next();!V.done;L={X:L.X,Y:L.Y},V=C.next())if(V=V.value,!(V in this.l&&this.l[V]===a[V])){this.l[V]=a[V];var J=c[V];J!==void 0&&(J.onChange&&(L.X=J.onChange,L.Y=a[V],S.push((function(me){return function(){var Ee;return F(function(ke){if(ke.h==1)return w(ke,me.X(me.Y),2);Ee=ke.i,Ee===!0&&(h.u=!0),ke.h=0})}})(L))),J.graphOptionXref&&(V=Object.assign({},{calculatorName:"",calculatorIndex:0},J.graphOptionXref,{valueNumber:J.type===1?a[V]:0,valueBoolean:J.type===0?a[V]:!1,valueString:J.type===2?a[V]:""}),R.push(V)))}(S.length!==0||R.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(R),this.F=(this.F===void 0?[]:this.F).concat(S))}};function Uc(a){var c,h,S,R,L,C,V;return F(function(J){switch(J.h){case 1:if(!a.u)return J.return();if(!a.F){J.h=2;break}c=o(a.F),h=c.next();case 3:if(h.done){J.h=5;break}return S=h.value,w(J,S(),4);case 4:h=c.next(),J.h=3;break;case 5:a.F=void 0;case 2:if(a.H){for(R=new a.i.GraphOptionChangeRequestList,L=o(a.H),C=L.next();!C.done;C=L.next())V=C.value,R.push_back(V);a.j.changeOptions(R),R.delete(),a.H=void 0}a.u=!1,J.h=0}})}i.initialize=function(){var a=this;return F(function(c){return c.h==1?w(c,Dc(a),2):c.h!=3?w(c,Ic(a),3):w(c,Uc(a),0)})};function Ir(a,c){var h,S;return F(function(R){return c in a.L?R.return(a.L[c]):(h=a.locateFile(c,""),S=fetch(h).then(function(L){return L.arrayBuffer()}),a.L[c]=S,R.return(S))})}i.overrideFile=function(a,c){this.j?this.j.overrideFile(a,c):this.D[a]=c},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(a,c){var h=this,S,R,L,C,V,J,me,Ee,ke;return F(function(ze){switch(ze.h){case 1:return h.h.inputs?(S=1e3*(c??performance.now()),w(ze,h.I,2)):ze.return();case 2:return w(ze,h.initialize(),3);case 3:for(R=new h.i.PacketDataList,L=o(Object.keys(a)),C=L.next();!C.done;C=L.next())if(V=C.value,J=h.h.inputs[V]){e:{var Le=a[V];switch(J.type){case"video":var We=h.s[J.stream];if(We||(We=new ys(h.i,h.K),h.s[J.stream]=We),We.m===0&&(We.m=We.i.createTexture()),typeof HTMLVideoElement<"u"&&Le instanceof HTMLVideoElement)var nt=Le.videoWidth,bt=Le.videoHeight;else typeof HTMLImageElement<"u"&&Le instanceof HTMLImageElement?(nt=Le.naturalWidth,bt=Le.naturalHeight):(nt=Le.width,bt=Le.height);bt={glName:We.m,width:nt,height:bt},nt=We.h,nt.canvas.width=bt.width,nt.canvas.height=bt.height,nt.activeTexture(nt.TEXTURE0),We.i.bindTexture2d(We.m),nt.texImage2D(nt.TEXTURE_2D,0,nt.RGBA,nt.RGBA,nt.UNSIGNED_BYTE,Le),We.i.bindTexture2d(0),We=bt;break e;case"detections":for(We=h.s[J.stream],We||(We=new wc(h.i),h.s[J.stream]=We),We.data||(We.data=new We.h.DetectionListData),We.data.reset(Le.length),bt=0;bt<Le.length;++bt){nt=Le[bt];var Et=We.data,Vt=Et.setBoundingBox,fn=bt,nn=nt.la,ft=new Dr;if(K(ft,1,nn.sa),K(ft,2,nn.ta),K(ft,3,nn.height),K(ft,4,nn.width),K(ft,5,nn.rotation),un(ft,6,nn.pa),nn=ft.l(),Vt.call(Et,fn,nn),nt.ea)for(Et=0;Et<nt.ea.length;++Et){ft=nt.ea[Et],Vt=We.data,fn=Vt.addNormalizedLandmark,nn=bt,ft=Object.assign({},ft,{visibility:ft.visibility?ft.visibility:0});var Ht=new ar;K(Ht,1,ft.x),K(Ht,2,ft.y),K(Ht,3,ft.z),ft.visibility&&K(Ht,4,ft.visibility),ft=Ht.l(),fn.call(Vt,nn,ft)}if(nt.ba)for(Et=0;Et<nt.ba.length;++Et)Vt=We.data,fn=Vt.addClassification,nn=bt,ft=nt.ba[Et],Ht=new Ri,K(Ht,2,ft.qa),ft.index&&un(Ht,1,ft.index),ft.label&&un(Ht,3,ft.label),ft.displayName&&un(Ht,4,ft.displayName),ft=Ht.l(),fn.call(Vt,nn,ft)}We=We.data;break e;default:We={}}}switch(me=We,Ee=J.stream,J.type){case"video":R.pushTexture2d(Object.assign({},me,{stream:Ee,timestamp:S}));break;case"detections":ke=me,ke.stream=Ee,ke.timestamp=S,R.pushDetectionList(ke);break;default:throw Error("Unknown input config type: '"+J.type+"'")}}return h.j.send(R),w(ze,h.I,4);case 4:R.delete(),ze.h=0}})};function Nc(a,c,h){var S,R,L,C,V,J,me,Ee,ke,ze,Le,We,nt,bt;return F(function(Et){switch(Et.h){case 1:if(!h)return Et.return(c);for(S={},R=0,L=o(Object.keys(h)),C=L.next();!C.done;C=L.next())V=C.value,J=h[V],typeof J!="string"&&J.type==="texture"&&c[J.stream]!==void 0&&++R;1<R&&(a.M=!1),me=o(Object.keys(h)),C=me.next();case 2:if(C.done){Et.h=4;break}if(Ee=C.value,ke=h[Ee],typeof ke=="string")return nt=S,bt=Ee,w(Et,Fc(a,Ee,c[ke]),14);if(ze=c[ke.stream],ke.type==="detection_list"){if(ze){for(var Vt=ze.getRectList(),fn=ze.getLandmarksList(),nn=ze.getClassificationsList(),ft=[],Ht=0;Ht<Vt.size();++Ht){var Jn=Ec(Vt.get(Ht)),Bc=we(Jn,1),zc=we(Jn,2),Gc=we(Jn,3),Vc=we(Jn,4),Hc=we(Jn,5,0),Ur=void 0;Ur=Ur===void 0?0:Ur,Jn={la:{sa:Bc,ta:zc,height:Gc,width:Vc,rotation:Hc,pa:ye(an(Jn,6),Ur)},ea:Ms(fn.get(Ht)),ba:Tc(Sc(nn.get(Ht)))},ft.push(Jn)}Vt=ft}else Vt=[];S[Ee]=Vt,Et.h=7;break}if(ke.type==="proto_list"){if(ze){for(Vt=Array(ze.size()),fn=0;fn<ze.size();fn++)Vt[fn]=ze.get(fn);ze.delete()}else Vt=[];S[Ee]=Vt,Et.h=7;break}if(ze===void 0){Et.h=3;break}if(ke.type==="float_list"){S[Ee]=ze,Et.h=7;break}if(ke.type==="proto"){S[Ee]=ze,Et.h=7;break}if(ke.type!=="texture")throw Error("Unknown output config type: '"+ke.type+"'");return Le=a.v[Ee],Le||(Le=new ys(a.i,a.K),a.v[Ee]=Le),w(Et,To(Le,ze,a.M),13);case 13:We=Et.i,S[Ee]=We;case 7:ke.transform&&S[Ee]&&(S[Ee]=ke.transform(S[Ee])),Et.h=3;break;case 14:nt[bt]=Et.i;case 3:C=me.next(),Et.h=2;break;case 4:return Et.return(S)}})}function Fc(a,c,h){var S;return F(function(R){return typeof h=="number"||h instanceof Uint8Array||h instanceof a.i.Uint8BlobList?R.return(h):h instanceof a.i.Texture2dDataOut?(S=a.v[c],S||(S=new ys(a.i,a.K),a.v[c]=S),R.return(To(S,h,a.M))):R.return(void 0)})}function Oc(a,c){for(var h=c.name||"$",S=[].concat(u(c.wants)),R=new a.i.StringList,L=o(c.wants),C=L.next();!C.done;C=L.next())R.push_back(C.value);L=a.i.PacketListener.implement({onResults:function(V){for(var J={},me=0;me<c.wants.length;++me)J[S[me]]=V.get(me);var Ee=a.listeners[h];Ee&&(a.I=Nc(a,J,c.outs).then(function(ke){ke=Ee(ke);for(var ze=0;ze<c.wants.length;++ze){var Le=J[S[ze]];typeof Le=="object"&&Le.hasOwnProperty&&Le.hasOwnProperty("delete")&&Le.delete()}ke&&(a.I=ke)}))}}),a.j.attachMultiListener(R,L),R.delete()}i.onResults=function(a,c){this.listeners[c||"$"]=a},oe("Solution",Es),oe("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function bo(a){switch(a===void 0&&(a=0),a){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}function wo(a){var c=this;a=a||{},this.h=new Es({locateFile:a.locateFile,files:function(h){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:bo(h.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",transform:Ms},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:Ms},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(h){var S,R,L;return F(function(C){return C.h==1?(S=bo(h),R="third_party/mediapipe/modules/pose_landmark/"+S,w(C,Ir(c.h,S),2)):(L=C.i,c.h.overrideFile(R,L),C.return(!0))})}},smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}i=wo.prototype,i.reset=function(){this.h.reset()},i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(a){this.h.onResults(a)},i.initialize=function(){var a=this;return F(function(c){return w(c,a.h.initialize(),0)})},i.send=function(a,c){var h=this;return F(function(S){return w(S,h.h.send(a,c),0)})},i.setOptions=function(a){this.h.setOptions(a)},oe("Pose",wo),oe("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]),oe("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32}),oe("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31}),oe("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32}),oe("POSE_LANDMARKS_NEUTRAL",{NOSE:0}),oe("VERSION","0.5.1675469404")}).call(ra)),ra}var Xg=Wg();const Yg={class:"ar-wrapper"},qg={id:"container",ref:"containerRef"},jg=.55,Kg=1,Zg=2e3,$g=kc({__name:"ar",setup(i){let e,t,n,r,s=null,l=!1,o,u=1,f=null,d=null,p=.09,_=.09,v=.5,y=.9,A=.06,x=.65,g=.03,I=0,P=!1,w="Normal",U="user",N=null,B=null,j=!1,T=null,b=.18,F,$,Z,ae,oe=null,ee=null,te=null;async function ue(q,M){const m=new Xg.Pose({locateFile:se=>`https://cdn.jsdelivr.net/npm/@mediapipe/pose/${se}`});m.setOptions({modelComplexity:1,smoothLandmarks:!0,enableSegmentation:!1,minDetectionConfidence:.5,minTrackingConfidence:.5});let D=0,W=0;const X=.6,G=.65,re=3;m.onResults(se=>{if(se.poseLandmarks){M(se.poseLandmarks);const pe=se.poseLandmarks,Me=le=>le&&(le.visibility===void 0||le.visibility>=X),Re=pe[12],ge=pe[14],Be=pe[16],z=pe[11],Se=pe[13],de=pe[15],Te=(le,_e,Ge)=>{try{window.dispatchEvent(new CustomEvent("pose:landmark",{detail:{name:le,index:_e,landmark:Ge}}))}catch{window.dispatchEvent(new Event("pose:landmark"))}};Me(Re)&&Te("right_shoulder",12,Re),Me(ge)&&Te("right_elbow",14,ge),Me(Be)&&Te("right_wrist",16,Be),Me(z)&&Te("left_shoulder",11,z),Me(Se)&&Te("left_elbow",13,Se),Me(de)&&Te("left_wrist",15,de);const he=(le,_e,Ge)=>{const ct=le&&typeof le.visibility=="number"?le.visibility:0,rt=_e&&typeof _e.visibility=="number"?_e.visibility:0,Bt=Ge&&typeof Ge.visibility=="number"?Ge.visibility:0;return(ct+rt+Bt)/3};Re&&ge&&Be&&(he(Re,ge,Be)>=G?D++:D=0,D>=re&&(window.dispatchEvent(new CustomEvent("pose:arm",{detail:{side:"right",landmarks:{shoulder:Re,elbow:ge,wrist:Be}}})),D=0)),z&&Se&&de&&(he(z,Se,de)>=G?W++:W=0,W>=re&&(window.dispatchEvent(new CustomEvent("pose:arm",{detail:{side:"left",landmarks:{shoulder:z,elbow:Se,wrist:de}}})),W=0))}});let ne=!0,ie=null;te=()=>{ne=!1,ie!==null&&cancelAnimationFrame(ie);try{m.close?.()}catch{}te=null};async function ve(){if(ne){try{await m.send({image:q})}catch{}ie=requestAnimationFrame(ve)}}ve()}function be(q,M){}function xe(q,M,m){if(!t)return new H;const D=(q.x??0)*2-1,W=-((q.y??0)*2-1),X=new H(D,W,.5);X.unproject(t);const G=X.clone().sub(t.position).normalize();let re=1.6;if(M&&m){const ne=new H((M.x??0)*2-1,-((M.y??0)*2-1),.5),ie=new H((m.x??0)*2-1,-((m.y??0)*2-1),.5);ne.unproject(t),ie.unproject(t);const ve=ne.distanceTo(ie);if(ve>0){const pe=.35/ve;re=As.clamp(re*pe,.6,4)}}return t.position.clone().add(G.multiplyScalar(re))}function Pe(q,M,m){if(!t||!M||!m)return;const D=xe(m,m,M),W=xe(M,m,M),X=D.clone().sub(W).normalize(),G=q.position.clone(),re=t.position.clone().sub(G).normalize(),ne=X.clone().sub(re.clone().multiplyScalar(X.dot(re)));let ie=ne.length()>1e-4?ne.normalize():new H(0,1,0);const ve=new H().crossVectors(ie,re).normalize();ie=new H().crossVectors(re,ve).normalize();const se=new Ct;se.makeBasis(ve,ie,re),q.quaternion.setFromRotationMatrix(se),new H().setFromMatrixColumn(se,1).dot(X)<0&&q.rotateOnAxis(re,Math.PI)}function Ke(){if(f&&f.material instanceof Hn){const q=f.material;q.alphaTest=g,q.wireframe=P,w==="Multiply"?(q.blending=sa,q.opacity=.9):(q.blending=Ei,q.opacity=.85),q.needsUpdate=!0}}function Ze(q){const M=q.getAttribute("uv");if(!M)return;const m=M.count,D=M.array;for(let W=0;W<m;W++){const X=W*2,G=D[X],re=D[X+1];D[X]=re,D[X+1]=G}M.needsUpdate=!0}const vt=q=>{const M=q.detail;if(M&&M.name&&M.landmark){try{M.name,M.landmark}catch{}F&&M&&M.name&&(F.textContent=`Point détecté: ${M.name}`,setTimeout(()=>{F&&(F.textContent="Tapez pour placer un tattoo")},1200))}},dt=q=>{const M=q.detail;oe=performance.now(),ee=M,F&&M&&M.side&&(F.textContent=`Bras détecté (${M.side})`,setTimeout(()=>{F&&(F.textContent="Tapez pour placer un tattoo")},1500))};function ce(){const q=document.createElement("div");q.id="controls-panel",q.style.position="fixed",q.style.right="8px",q.style.top="8px",q.style.background="rgba(0,0,0,0.6)",q.style.color="#fff",q.style.padding="8px",q.style.borderRadius="6px",q.style.zIndex="99999",q.style.fontSize="13px",q.style.maxWidth="280px";const M=(se,pe)=>{const Me=document.createElement("div");Me.style.marginBottom="8px";const Re=document.createElement("div");Re.textContent=se,Re.style.fontSize="12px",Re.style.marginBottom="4px",Me.appendChild(Re),Me.appendChild(pe),q.appendChild(Me)},m=document.createElement("input");m.type="range",m.min="0.02",m.max="0.5",m.step="0.01",m.value=String(_),m.oninput=()=>{const se=parseFloat(m.value);if(f){const pe=se/p;f.scale.x*=pe,f.scale.z*=pe,p=se}_=se},M("Tube radius",m);const D=document.createElement("input");D.type="range",D.min="0.1",D.max="1.2",D.step="0.01",D.value=String(v),D.oninput=()=>{v=parseFloat(D.value)},M("Tube factor",D);const W=document.createElement("input");W.type="range",W.min="0.5",W.max="1.5",W.step="0.01",W.value=String(y),W.oninput=()=>{y=parseFloat(W.value)},M("Height multiplier",W);const X=document.createElement("input");X.type="range",X.min="0",X.max="0.5",X.step="0.01",X.value=String(g),X.oninput=()=>{g=parseFloat(X.value),Ke()},M("Alpha test",X);const G=document.createElement("input");G.type="range",G.min="-0.5",G.max="0.5",G.step="0.01",G.value=String(I),G.oninput=()=>{I=parseFloat(G.value)},M("Seam offset",G);const re=document.createElement("input");re.type="checkbox",re.checked=P,re.onchange=()=>{P=re.checked,Ke()},M("Wireframe",re);const ne=document.createElement("select"),ie=document.createElement("option");ie.value="Normal",ie.text="Normal";const ve=document.createElement("option");ve.value="Multiply",ve.text="Multiply",ne.appendChild(ie),ne.appendChild(ve),ne.value=w,ne.onchange=()=>{w=ne.value,Ke()},M("Blend",ne),document.body.appendChild(q)}function fe(){const q=document.createElement("div");q.id="camera-select-panel",q.style.position="fixed",q.style.bottom="12px",q.style.left="12px",q.style.padding="8px",q.style.background="rgba(0,0,0,0.6)",q.style.color="#fff",q.style.fontSize="13px",q.style.zIndex="9999",q.style.borderRadius="6px",q.style.maxWidth="320px",q.style.backdropFilter="blur(4px)";const M=document.createElement("div");M.textContent="Caméras",M.style.fontWeight="600",M.style.marginBottom="6px",q.appendChild(M);const m=document.createElement("select");m.style.width="100%",m.style.marginBottom="6px",q.appendChild(m);const D=document.createElement("div");D.style.display="flex",D.style.gap="6px";const W=document.createElement("button");W.textContent="Utiliser",W.style.flex="1",W.onclick=()=>{const re=m.value;re&&(T=re,F.textContent="Caméra sélectionnée manuellement",Oe(U).catch(ne=>console.warn(ne)))};const X=document.createElement("button");X.textContent="Rafraîchir",X.style.flex="1",X.onclick=async()=>{await De(m)},D.appendChild(W),D.appendChild(X),q.appendChild(D);const G=document.createElement("div");G.style.fontSize="11px",G.style.opacity="0.85",G.style.marginTop="6px",G.textContent="Si les noms sont vides, autorisez d'abord la caméra puis rafraîchissez.",q.appendChild(G),document.body.appendChild(q),De(m).catch(re=>console.warn("populateCameraList failed",re))}async function De(q){if(!(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices))try{const m=(await navigator.mediaDevices.enumerateDevices()).filter(D=>D.kind==="videoinput");q.innerHTML="",m.forEach((D,W)=>{const X=document.createElement("option");X.value=D.deviceId,X.text=D.label&&D.label.length>0?D.label:`Camera ${W+1}`,q.appendChild(X)}),T&&(q.value=T)}catch(M){console.warn("populateCameraList error",M)}}async function qe(q){if(!(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices))try{let M=await navigator.mediaDevices.enumerateDevices(),m=M.filter(G=>G.kind==="videoinput");if(m.length===0)return;const D=q==="user"?/front|face|selfie|user|avant|frontal/i:/back|rear|environment|wide|arrière/i,W=m.find(G=>G.label&&D.test(G.label));if(W)return W.deviceId;if(!m.some(G=>G.label&&G.label.length>0))try{(await navigator.mediaDevices.getUserMedia({video:{facingMode:q}})).getTracks().forEach(ne=>ne.stop()),M=await navigator.mediaDevices.enumerateDevices(),m=M.filter(ne=>ne.kind==="videoinput");const re=m.find(ne=>ne.label&&D.test(ne.label));if(re)return re.deviceId}catch{}for(const G of m)try{const ne=(await navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:G.deviceId}}})).getVideoTracks()[0],ve=(ne.getSettings?ne.getSettings():{}).facingMode;if(ne.stop(),ve&&ve.toLowerCase().includes(q))return G.deviceId}catch{}return q==="user"?m[0].deviceId:m[m.length-1].deviceId}catch{return}}function Ue(){F=document.getElementById("info"),$=document.getElementById("startAR"),Z=document.getElementById("switchCamera"),ae=document.getElementById("container"),console.log("Elements:",{info:F,startButton:$,switchCameraButton:Z,container:ae}),window.addEventListener("pose:landmark",vt),window.addEventListener("pose:arm",dt),e=new _f,t=new pn(70,window.innerWidth/window.innerHeight,.01,20);const q=new Yf(16777215,12303359,1);q.position.set(.5,1,.25),e.add(q),n=new kg({antialias:!0,alpha:!0}),n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.xr.enabled=!0,n.domElement.style.position="absolute",n.domElement.style.top="0",n.domElement.style.left="0",n.domElement.style.width="100%",n.domElement.style.height="100%",n.domElement.style.zIndex="2",n.domElement.style.pointerEvents="none",ae.appendChild(n.domElement),o=new Wf().load("/tattoo.png",re=>{re.wrapS=kt,re.wrapT=kt,re.repeat.set(1,1),re.offset.set(0,0),re.center.set(.5,.5),re.rotation=0,re.flipY=!1,re.format=gn;try{re.encoding=void 0}catch{}re.needsUpdate=!0;const ne=re.image;ne&&ne.width&&ne.height&&(u=ne.width/ne.height);try{const ie=re.clone();ie.wrapS=kt,ie.wrapT=kt,ie.repeat.set(1,1),ie.offset.set(0,0),ie.center.set(.5,.5),ie.rotation=0,ie.needsUpdate=!0,d=ie}catch{d=null}});const m=new tc([new H(0,0,0),new H(0,-.2,0)]),D=new ho(m,16,_,8,!1);try{Ze(D)}catch{}const W=new Hn({map:d||o,transparent:!0,opacity:.7,side:Xn,depthWrite:!1});f=new Qt(D,W),f.visible=!1,e.add(f);const X=new fs(.15,.2,32).rotateX(-Math.PI/2),G=new Hn({color:16777215});r=new Qt(X,G),r.matrixAutoUpdate=!1,r.visible=!1,e.add(r),window.addEventListener("resize",yt);try{fe()}catch(re){console.warn("Camera UI creation failed",re)}try{ce()}catch(re){console.warn("Controls UI creation failed",re)}Qe()}function Qe(){"xr"in navigator?navigator.xr.isSessionSupported("immersive-ar").then(q=>{q?(F.textContent="AR prêt !",$.style.display="block",$.disabled=!1,$.textContent="Démarrer AR",$.addEventListener("click",Xe)):wt()}).catch(()=>wt()):wt()}function wt(){F.textContent="Mode caméra simple (WebXR non supporté)",$.style.display="block",$.textContent="Démarrer la caméra",$.addEventListener("click",()=>Oe("user"))}async function Oe(q="user"){try{if(F.textContent="Demande d'accès à la caméra...",!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("getUserMedia non supporté");let M=null,m=null,D=!1,W=null,X=null,G=null;N&&N.getTracks().forEach(ie=>ie.stop());let re;try{if(T)re=await navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:T},width:{ideal:1280},height:{ideal:720}}});else{const ie=await qe(q),ve=ie?{deviceId:{exact:ie}}:{facingMode:q};ve.width={ideal:1280},ve.height={ideal:720},re=await navigator.mediaDevices.getUserMedia({video:ve})}}catch(ie){console.warn("Primary getUserMedia failed, retrying with simple facingMode:",ie),re=await navigator.mediaDevices.getUserMedia({video:{facingMode:q,width:{ideal:1280},height:{ideal:720}}})}if(N=re,U=q,F.textContent="Caméra activée !",!B){const ie=document.createElement("video");ie.autoplay=!0,ie.playsInline=!0,ie.muted=!0,ie.style.position="fixed",ie.style.top="0",ie.style.left="0",ie.style.width="100%",ie.style.height="100%",ie.style.objectFit="cover",ie.style.zIndex="0",ie.setAttribute("playsinline","true"),ie.setAttribute("webkit-playsinline","true"),document.body.appendChild(ie),B=ie}B.srcObject=re,await B.play();try{try{te?.()}catch{}j=!1,B&&(ue(B,ie=>{if(D&&W&&M){M.position.set(W.x,W.y,W.z),X&&M.quaternion.copy(X),m&&(m.visible=!1);return}const ve=ie[16]||ie[15],se=ie[14]||ie[13];if(!ve)return;const pe=xe(ve);if(!M){const ge=new Ti(1,1);o&&(o.wrapS=kt,o.wrapT=kt,o.repeat.set(1,1),o.offset.set(0,0),o.center.set(.5,.5),o.rotation=0,o.needsUpdate=!0);const Be=new Hn({map:o,transparent:!0,opacity:jg,side:yn,depthWrite:!1,alphaTest:g,premultipliedAlpha:!1});M=new Qt(ge,Be),e.add(M);const z=new fs(.12,.16,32).rotateX(-Math.PI/2),Se=new Hn({color:16777215,opacity:.95,transparent:!0});m=new Qt(z,Se),m.visible=!0,e.add(m);const de=new Qt(new Ti(1.02,1.02),new Hn({color:0,opacity:.2,transparent:!0}));de.name="poseTattooDebugBg",de.visible=!1,M.add(de)}let Me=pe.clone(),Re=.2;if(se&&ve){const ge=xe(se,se,ve),Be=xe(ve,se,ve);Re=ge.distanceTo(Be),Me=ge.clone().add(Be).multiplyScalar(.5)}if(G?G.lerp(Me,b):G=Me.clone(),M&&G){M.position.copy(G);const ge=u||1,Be=As.clamp(Re*y,A,x),z=Be*ge;M.scale.set(z,Be,1),se&&ve?Pe(M,ve,se):t&&M.lookAt(t.position)}m&&G&&(m.position.copy(G),m.lookAt(t.position),m.visible=!0)}),j=!0)}catch(ie){console.warn("Unable to start/restart pose tracking:",ie)}const ne=()=>{!D&&M&&(W={x:M.position.x,y:M.position.y,z:M.position.z},X=M.quaternion.clone(),D=!0,m&&(m.visible=!1),st(M.material,Kg,300),F.textContent="Tattoo verrouillé !")};n.domElement.style.pointerEvents="auto",n.domElement.addEventListener("click",ne),n.domElement.addEventListener("touchend",ie=>{ie.preventDefault(),ne()},{passive:!1}),$.style.display="none",Z.style.display="block",F.textContent="Tapez pour placer un tattoo",n.domElement.hasAttribute("data-initialized")||(n.setClearColor(0,0),t.position.z=3,n.domElement.setAttribute("data-initialized","true"),n.setAnimationLoop(()=>{n.render(e,t)}))}catch(M){F.textContent="Erreur caméra : "+M.message,$.style.display="block",$.textContent="Réessayer"}}function Xe(){const q={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:document.body}};navigator.xr.requestSession("immersive-ar",q).then(lt)}function lt(q){q.addEventListener("end",$e),n.xr.setSession(q),$.style.display="none",F.textContent="Tapez pour placer un tattoo",q.addEventListener("select",O),n.xr.setReferenceSpaceType("local"),n.setAnimationLoop(pt)}function $e(){l=!1,s=null,$.style.display="block",F.textContent="Session AR terminée"}function yt(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}function O(){if(r.visible){const q=performance.now();if(!oe||q-oe>Zg){F&&(F.textContent="Placement autorisé uniquement quand un bras est détecté",setTimeout(()=>{F&&(F.textContent="Tapez pour placer un tattoo")},1500));return}o&&(o.wrapS=kt,o.wrapT=kt,o.repeat.set(1,1),o.offset.set(0,0),o.center.set(.5,.5),o.rotation=0,o.needsUpdate=!0);const M=u||1;let m=.2;if(ee&&ee.landmarks){const G=ee.landmarks,re=G[14]||G[13],ne=G[16]||G[15];if(re&&ne){const ie=xe(re,re,ne),ve=xe(ne,re,ne),se=ie.distanceTo(ve);m=As.clamp(se*y,A,x)}}const D=new Ti(m*M,m),W=new Hn({map:o,transparent:!0,side:yn,alphaTest:g,premultipliedAlpha:!1}),X=new Qt(D,W);if(ee&&ee.landmarks&&t){const G=ee.landmarks,re=G[14]||G[13],ne=G[16]||G[15];if(re&&ne){const ie=xe(re,re,ne),ve=xe(ne,re,ne),se=ie.clone().add(ve).multiplyScalar(.5);X.position.copy(se),X.scale.set(m*M,m,1),Pe(X,ne,re),St(X,new H(m*M,m,1))}else{const ie=new H;ie.setFromMatrixPosition(r.matrix),X.position.copy(ie),X.lookAt(t.position),St(X,new H(m*M,m,1))}}else X.position.setFromMatrixPosition(r.matrix),t&&X.lookAt(t.position),St(X,new H(m*M,m,1));e.add(X),X.scale.set(.01,.01,.01),St(X)}}function St(q,M){const D=Date.now(),W=q.scale.clone(),X=M?M.clone():new H(1,1,1);function G(){const re=Date.now()-D,ne=Math.min(re/400,1),ie=1-Math.pow(1-ne,2),ve=W.clone().lerp(X,ie);q.scale.set(ve.x,ve.y,ve.z),ne<1&&requestAnimationFrame(G)}G()}function st(q,M,m=300){if(!q)return;(Array.isArray(q)?q:[q]).forEach(W=>{const X=W;if(typeof X.opacity!="number")return;const G=X.opacity!==void 0?X.opacity:1,re=M-G,ne=Date.now();function ie(){const ve=Date.now()-ne,se=Math.min(ve/m,1);X.opacity=G+re*se,X.needsUpdate=!0,se<1&&requestAnimationFrame(ie)}ie()})}function pt(q,M){if(M){const m=n.xr.getReferenceSpace(),D=n.xr.getSession();if(l===!1&&D&&(D.requestReferenceSpace("viewer").then(W=>{const X=D.requestHitTestSource?.({space:W});X&&X.then(G=>{s=G})}).catch(W=>console.error("Hit test error:",W)),l=!0),s&&m){const W=M.getHitTestResults(s);if(W.length>0){const G=W[0].getPose(m);G&&(r.visible=!0,r.matrix.fromArray(G.transform.matrix))}else r.visible=!1}}n.render(e,t)}return Wc(()=>{Z&&Z.addEventListener("click",q=>{q.preventDefault(),q.stopPropagation(),Oe(U==="environment"?"user":"environment")}),Ue()}),Xc(()=>{N&&N.getTracks().forEach(m=>m.stop()),n&&(n.setAnimationLoop(null),n.dispose()),te&&te(),window.removeEventListener("resize",yt),window.removeEventListener("pose:landmark",vt),window.removeEventListener("pose:arm",dt);const q=document.getElementById("controls-panel");q&&q.remove();const M=document.getElementById("camera-select-panel");M&&M.remove(),B&&(B.remove(),B=null)}),(q,M)=>(qc(),Yc("div",Yg,[M[0]||(M[0]=or("div",{id:"info"},"Initialisation...",-1)),or("div",qg,null,512),M[1]||(M[1]=or("div",{class:"actions"},[or("button",{id:"startAR",class:"w-full",style:{display:"none"}},"Démarrer AR"),or("button",{id:"switchCamera",style:{display:"none"}},"Changer Caméra")],-1))]))}}),Qg=jc($g,[["__scopeId","data-v-1a3ff9b8"]]);export{Qg as default};

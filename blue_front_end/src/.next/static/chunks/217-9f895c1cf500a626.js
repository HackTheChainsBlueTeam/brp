(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[217],{55993:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var g=p(17268);function readInt16BE(t,a){return void 0===a&&(a=0),(t[a+0]<<8|t[a+1])<<16>>16}function readUint16BE(t,a){return void 0===a&&(a=0),(t[a+0]<<8|t[a+1])>>>0}function readInt16LE(t,a){return void 0===a&&(a=0),(t[a+1]<<8|t[a])<<16>>16}function readUint16LE(t,a){return void 0===a&&(a=0),(t[a+1]<<8|t[a])>>>0}function writeUint16BE(t,a,p){return void 0===a&&(a=new Uint8Array(2)),void 0===p&&(p=0),a[p+0]=t>>>8,a[p+1]=t>>>0,a}function writeUint16LE(t,a,p){return void 0===a&&(a=new Uint8Array(2)),void 0===p&&(p=0),a[p+0]=t>>>0,a[p+1]=t>>>8,a}function readInt32BE(t,a){return void 0===a&&(a=0),t[a]<<24|t[a+1]<<16|t[a+2]<<8|t[a+3]}function readUint32BE(t,a){return void 0===a&&(a=0),(t[a]<<24|t[a+1]<<16|t[a+2]<<8|t[a+3])>>>0}function readInt32LE(t,a){return void 0===a&&(a=0),t[a+3]<<24|t[a+2]<<16|t[a+1]<<8|t[a]}function readUint32LE(t,a){return void 0===a&&(a=0),(t[a+3]<<24|t[a+2]<<16|t[a+1]<<8|t[a])>>>0}function writeUint32BE(t,a,p){return void 0===a&&(a=new Uint8Array(4)),void 0===p&&(p=0),a[p+0]=t>>>24,a[p+1]=t>>>16,a[p+2]=t>>>8,a[p+3]=t>>>0,a}function writeUint32LE(t,a,p){return void 0===a&&(a=new Uint8Array(4)),void 0===p&&(p=0),a[p+0]=t>>>0,a[p+1]=t>>>8,a[p+2]=t>>>16,a[p+3]=t>>>24,a}function readInt64BE(t,a){void 0===a&&(a=0);var p=readInt32BE(t,a),g=readInt32BE(t,a+4);return 4294967296*p+g-(g>>31)*4294967296}function readUint64BE(t,a){return void 0===a&&(a=0),4294967296*readUint32BE(t,a)+readUint32BE(t,a+4)}function readInt64LE(t,a){void 0===a&&(a=0);var p=readInt32LE(t,a);return 4294967296*readInt32LE(t,a+4)+p-(p>>31)*4294967296}function readUint64LE(t,a){void 0===a&&(a=0);var p=readUint32LE(t,a);return 4294967296*readUint32LE(t,a+4)+p}function writeUint64BE(t,a,p){return void 0===a&&(a=new Uint8Array(8)),void 0===p&&(p=0),writeUint32BE(t/4294967296>>>0,a,p),writeUint32BE(t>>>0,a,p+4),a}function writeUint64LE(t,a,p){return void 0===a&&(a=new Uint8Array(8)),void 0===p&&(p=0),writeUint32LE(t>>>0,a,p),writeUint32LE(t/4294967296>>>0,a,p+4),a}function readUintBE(t,a,p){if(void 0===p&&(p=0),t%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(t/8>a.length-p)throw Error("readUintBE: array is too short for the given bitLength");for(var g=0,m=1,v=t/8+p-1;v>=p;v--)g+=a[v]*m,m*=256;return g}function readUintLE(t,a,p){if(void 0===p&&(p=0),t%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(t/8>a.length-p)throw Error("readUintLE: array is too short for the given bitLength");for(var g=0,m=1,v=p;v<p+t/8;v++)g+=a[v]*m,m*=256;return g}function writeUintBE(t,a,p,m){if(void 0===p&&(p=new Uint8Array(t/8)),void 0===m&&(m=0),t%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!g.isSafeInteger(a))throw Error("writeUintBE value must be an integer");for(var v=1,_=t/8+m-1;_>=m;_--)p[_]=a/v&255,v*=256;return p}function writeUintLE(t,a,p,m){if(void 0===p&&(p=new Uint8Array(t/8)),void 0===m&&(m=0),t%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!g.isSafeInteger(a))throw Error("writeUintLE value must be an integer");for(var v=1,_=m;_<m+t/8;_++)p[_]=a/v&255,v*=256;return p}function readFloat32BE(t,a){return void 0===a&&(a=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat32(a)}function readFloat32LE(t,a){return void 0===a&&(a=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat32(a,!0)}function readFloat64BE(t,a){return void 0===a&&(a=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat64(a)}function readFloat64LE(t,a){return void 0===a&&(a=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat64(a,!0)}function writeFloat32BE(t,a,p){return void 0===a&&(a=new Uint8Array(4)),void 0===p&&(p=0),new DataView(a.buffer,a.byteOffset,a.byteLength).setFloat32(p,t),a}function writeFloat32LE(t,a,p){return void 0===a&&(a=new Uint8Array(4)),void 0===p&&(p=0),new DataView(a.buffer,a.byteOffset,a.byteLength).setFloat32(p,t,!0),a}function writeFloat64BE(t,a,p){return void 0===a&&(a=new Uint8Array(8)),void 0===p&&(p=0),new DataView(a.buffer,a.byteOffset,a.byteLength).setFloat64(p,t),a}function writeFloat64LE(t,a,p){return void 0===a&&(a=new Uint8Array(8)),void 0===p&&(p=0),new DataView(a.buffer,a.byteOffset,a.byteLength).setFloat64(p,t,!0),a}a.readInt16BE=readInt16BE,a.readUint16BE=readUint16BE,a.readInt16LE=readInt16LE,a.readUint16LE=readUint16LE,a.writeUint16BE=writeUint16BE,a.writeInt16BE=writeUint16BE,a.writeUint16LE=writeUint16LE,a.writeInt16LE=writeUint16LE,a.readInt32BE=readInt32BE,a.readUint32BE=readUint32BE,a.readInt32LE=readInt32LE,a.readUint32LE=readUint32LE,a.writeUint32BE=writeUint32BE,a.writeInt32BE=writeUint32BE,a.writeUint32LE=writeUint32LE,a.writeInt32LE=writeUint32LE,a.readInt64BE=readInt64BE,a.readUint64BE=readUint64BE,a.readInt64LE=readInt64LE,a.readUint64LE=readUint64LE,a.writeUint64BE=writeUint64BE,a.writeInt64BE=writeUint64BE,a.writeUint64LE=writeUint64LE,a.writeInt64LE=writeUint64LE,a.readUintBE=readUintBE,a.readUintLE=readUintLE,a.writeUintBE=writeUintBE,a.writeUintLE=writeUintLE,a.readFloat32BE=readFloat32BE,a.readFloat32LE=readFloat32LE,a.readFloat64BE=readFloat64BE,a.readFloat64LE=readFloat64LE,a.writeFloat32BE=writeFloat32BE,a.writeFloat32LE=writeFloat32LE,a.writeFloat64BE=writeFloat64BE,a.writeFloat64LE=writeFloat64LE},10910:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var g=p(55993),m=p(13595);function core(t,a,p){for(var m=p[3]<<24|p[2]<<16|p[1]<<8|p[0],v=p[7]<<24|p[6]<<16|p[5]<<8|p[4],_=p[11]<<24|p[10]<<16|p[9]<<8|p[8],x=p[15]<<24|p[14]<<16|p[13]<<8|p[12],T=p[19]<<24|p[18]<<16|p[17]<<8|p[16],W=p[23]<<24|p[22]<<16|p[21]<<8|p[20],z=p[27]<<24|p[26]<<16|p[25]<<8|p[24],F=p[31]<<24|p[30]<<16|p[29]<<8|p[28],Z=a[3]<<24|a[2]<<16|a[1]<<8|a[0],Y=a[7]<<24|a[6]<<16|a[5]<<8|a[4],X=a[11]<<24|a[10]<<16|a[9]<<8|a[8],Q=a[15]<<24|a[14]<<16|a[13]<<8|a[12],J=1634760805,ei=857760878,eo=2036477234,ea=1797285236,es=m,el=v,ec=_,eu=x,ed=T,eh=W,ef=z,ep=F,eg=Z,ew=Y,em=X,eb=Q,ey=0;ey<20;ey+=2)eg^=J=J+es|0,es^=ed=ed+(eg=eg>>>16|eg<<16)|0,es=es>>>20|es<<12,ew^=ei=ei+el|0,el^=eh=eh+(ew=ew>>>16|ew<<16)|0,el=el>>>20|el<<12,em^=eo=eo+ec|0,ec^=ef=ef+(em=em>>>16|em<<16)|0,ec=ec>>>20|ec<<12,eb^=ea=ea+eu|0,eu^=ep=ep+(eb=eb>>>16|eb<<16)|0,eu=eu>>>20|eu<<12,em^=eo=eo+ec|0,ec^=ef=ef+(em=em>>>24|em<<8)|0,ec=ec>>>25|ec<<7,eb^=ea=ea+eu|0,eu^=ep=ep+(eb=eb>>>24|eb<<8)|0,eu=eu>>>25|eu<<7,ew^=ei=ei+el|0,el^=eh=eh+(ew=ew>>>24|ew<<8)|0,el=el>>>25|el<<7,eg^=J=J+es|0,es^=ed=ed+(eg=eg>>>24|eg<<8)|0,es=es>>>25|es<<7,eb^=J=J+el|0,el^=ef=ef+(eb=eb>>>16|eb<<16)|0,el=el>>>20|el<<12,eg^=ei=ei+ec|0,ec^=ep=ep+(eg=eg>>>16|eg<<16)|0,ec=ec>>>20|ec<<12,ew^=eo=eo+eu|0,eu^=ed=ed+(ew=ew>>>16|ew<<16)|0,eu=eu>>>20|eu<<12,em^=ea=ea+es|0,es^=eh=eh+(em=em>>>16|em<<16)|0,es=es>>>20|es<<12,ew^=eo=eo+eu|0,eu^=ed=ed+(ew=ew>>>24|ew<<8)|0,eu=eu>>>25|eu<<7,em^=ea=ea+es|0,es^=eh=eh+(em=em>>>24|em<<8)|0,es=es>>>25|es<<7,eg^=ei=ei+ec|0,ec^=ep=ep+(eg=eg>>>24|eg<<8)|0,ec=ec>>>25|ec<<7,eb^=J=J+el|0,el^=ef=ef+(eb=eb>>>24|eb<<8)|0,el=el>>>25|el<<7;g.writeUint32LE(J+1634760805|0,t,0),g.writeUint32LE(ei+857760878|0,t,4),g.writeUint32LE(eo+2036477234|0,t,8),g.writeUint32LE(ea+1797285236|0,t,12),g.writeUint32LE(es+m|0,t,16),g.writeUint32LE(el+v|0,t,20),g.writeUint32LE(ec+_|0,t,24),g.writeUint32LE(eu+x|0,t,28),g.writeUint32LE(ed+T|0,t,32),g.writeUint32LE(eh+W|0,t,36),g.writeUint32LE(ef+z|0,t,40),g.writeUint32LE(ep+F|0,t,44),g.writeUint32LE(eg+Z|0,t,48),g.writeUint32LE(ew+Y|0,t,52),g.writeUint32LE(em+X|0,t,56),g.writeUint32LE(eb+Q|0,t,60)}function streamXOR(t,a,p,g,v){if(void 0===v&&(v=0),32!==t.length)throw Error("ChaCha: key size must be 32 bytes");if(g.length<p.length)throw Error("ChaCha: destination is shorter than source");if(0===v){if(8!==a.length&&12!==a.length)throw Error("ChaCha nonce must be 8 or 12 bytes");x=(_=new Uint8Array(16)).length-a.length,_.set(a,x)}else{if(16!==a.length)throw Error("ChaCha nonce with counter must be 16 bytes");_=a,x=v}for(var _,x,T=new Uint8Array(64),W=0;W<p.length;W+=64){core(T,_,t);for(var z=W;z<W+64&&z<p.length;z++)g[z]=p[z]^T[z-W];incrementCounter(_,0,x)}return m.wipe(T),0===v&&m.wipe(_),g}function stream(t,a,p,g){return void 0===g&&(g=0),m.wipe(p),streamXOR(t,a,p,p,g)}function incrementCounter(t,a,p){for(var g=1;p--;)g=g+(255&t[a])|0,t[a]=255&g,g>>>=8,a++;if(g>0)throw Error("ChaCha: counter overflow")}a.streamXOR=streamXOR,a.stream=stream},95354:function(t,a,p){"use strict";var g=p(10910),m=p(91136),v=p(13595),_=p(55993),x=p(14851);a.Cv=32,a.WH=12,a.pg=16;var T=new Uint8Array(16),W=function(){function ChaCha20Poly1305(t){if(this.nonceLength=a.WH,this.tagLength=a.pg,t.length!==a.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(t)}return ChaCha20Poly1305.prototype.seal=function(t,a,p,m){if(t.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var _,x=new Uint8Array(16);x.set(t,x.length-t.length);var T=new Uint8Array(32);g.stream(this._key,x,T,4);var W=a.length+this.tagLength;if(m){if(m.length!==W)throw Error("ChaCha20Poly1305: incorrect destination length");_=m}else _=new Uint8Array(W);return g.streamXOR(this._key,x,a,_,4),this._authenticate(_.subarray(_.length-this.tagLength,_.length),T,_.subarray(0,_.length-this.tagLength),p),v.wipe(x),_},ChaCha20Poly1305.prototype.open=function(t,a,p,m){if(t.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(a.length<this.tagLength)return null;var _,T=new Uint8Array(16);T.set(t,T.length-t.length);var W=new Uint8Array(32);g.stream(this._key,T,W,4);var z=new Uint8Array(this.tagLength);if(this._authenticate(z,W,a.subarray(0,a.length-this.tagLength),p),!x.equal(z,a.subarray(a.length-this.tagLength,a.length)))return null;var F=a.length-this.tagLength;if(m){if(m.length!==F)throw Error("ChaCha20Poly1305: incorrect destination length");_=m}else _=new Uint8Array(F);return g.streamXOR(this._key,T,a.subarray(0,a.length-this.tagLength),_,4),v.wipe(T),_},ChaCha20Poly1305.prototype.clean=function(){return v.wipe(this._key),this},ChaCha20Poly1305.prototype._authenticate=function(t,a,p,g){var x=new m.Poly1305(a);g&&(x.update(g),g.length%16>0&&x.update(T.subarray(g.length%16))),x.update(p),p.length%16>0&&x.update(T.subarray(p.length%16));var W=new Uint8Array(8);g&&_.writeUint64LE(g.length,W),x.update(W),_.writeUint64LE(p.length,W),x.update(W);for(var z=x.digest(),F=0;F<z.length;F++)t[F]=z[F];x.clean(),v.wipe(z),v.wipe(W)},ChaCha20Poly1305}();a.OK=W},14851:function(t,a){"use strict";function select(t,a,p){return~(t-1)&a|t-1&p}function lessOrEqual(t,a){return(0|t)-(0|a)-1>>>31&1}function compare(t,a){if(t.length!==a.length)return 0;for(var p=0,g=0;g<t.length;g++)p|=t[g]^a[g];return 1&p-1>>>8}function equal(t,a){return 0!==t.length&&0!==a.length&&0!==compare(t,a)}Object.defineProperty(a,"__esModule",{value:!0}),a.select=select,a.lessOrEqual=lessOrEqual,a.compare=compare,a.equal=equal},97688:function(t,a){"use strict";function isSerializableHash(t){return void 0!==t.saveState&&void 0!==t.restoreState&&void 0!==t.cleanSavedState}Object.defineProperty(a,"__esModule",{value:!0}),a.isSerializableHash=isSerializableHash},99289:function(t,a,p){"use strict";var g=p(72885),m=p(13595),v=function(){function HKDF(t,a,p,m){void 0===p&&(p=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=t,this._info=m;var v=g.hmac(this._hash,p,a);this._hmac=new g.HMAC(t,v),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return HKDF.prototype._fillBuffer=function(){this._counter[0]++;var t=this._counter[0];if(0===t)throw Error("hkdf: cannot expand more");this._hmac.reset(),t>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},HKDF.prototype.expand=function(t){for(var a=new Uint8Array(t),p=0;p<a.length;p++)this._bufpos===this._buffer.length&&this._fillBuffer(),a[p]=this._buffer[this._bufpos++];return a},HKDF.prototype.clean=function(){this._hmac.clean(),m.wipe(this._buffer),m.wipe(this._counter),this._bufpos=0},HKDF}();a.t=v},72885:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var g=p(97688),m=p(14851),v=p(13595),_=function(){function HMAC(t,a){this._finished=!1,this._inner=new t,this._outer=new t,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var p=new Uint8Array(this.blockSize);a.length>this.blockSize?this._inner.update(a).finish(p).clean():p.set(a);for(var m=0;m<p.length;m++)p[m]^=54;this._inner.update(p);for(var m=0;m<p.length;m++)p[m]^=106;this._outer.update(p),g.isSerializableHash(this._inner)&&g.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),v.wipe(p)}return HMAC.prototype.reset=function(){if(!g.isSerializableHash(this._inner)||!g.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},HMAC.prototype.clean=function(){g.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),g.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},HMAC.prototype.update=function(t){return this._inner.update(t),this},HMAC.prototype.finish=function(t){return this._finished?this._outer.finish(t):(this._inner.finish(t),this._outer.update(t.subarray(0,this.digestLength)).finish(t),this._finished=!0),this},HMAC.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},HMAC.prototype.saveState=function(){if(!g.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},HMAC.prototype.restoreState=function(t){if(!g.isSerializableHash(this._inner)||!g.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(t),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},HMAC.prototype.cleanSavedState=function(t){if(!g.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(t)},HMAC}();function hmac(t,a,p){var g=new _(t,a);g.update(p);var m=g.digest();return g.clean(),m}a.HMAC=_,a.hmac=hmac,a.equal=m.equal},17268:function(t,a){"use strict";function imulShim(t,a){var p=65535&t,g=65535&a;return p*g+((t>>>16&65535)*g+p*(a>>>16&65535)<<16>>>0)|0}function add(t,a){return t+a|0}function sub(t,a){return t-a|0}function rotl(t,a){return t<<a|t>>>32-a}function rotr(t,a){return t<<32-a|t>>>a}function isIntegerShim(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}Object.defineProperty(a,"__esModule",{value:!0}),a.mul=Math.imul||imulShim,a.add=add,a.sub=sub,a.rotl=rotl,a.rotr=rotr,a.isInteger=Number.isInteger||isIntegerShim,a.MAX_SAFE_INTEGER=9007199254740991,a.isSafeInteger=function(t){return a.isInteger(t)&&t>=-a.MAX_SAFE_INTEGER&&t<=a.MAX_SAFE_INTEGER}},91136:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var g=p(14851),m=p(13595);a.DIGEST_LENGTH=16;var v=function(){function Poly1305(t){this.digestLength=a.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var p=t[0]|t[1]<<8;this._r[0]=8191&p;var g=t[2]|t[3]<<8;this._r[1]=(p>>>13|g<<3)&8191;var m=t[4]|t[5]<<8;this._r[2]=(g>>>10|m<<6)&7939;var v=t[6]|t[7]<<8;this._r[3]=(m>>>7|v<<9)&8191;var _=t[8]|t[9]<<8;this._r[4]=(v>>>4|_<<12)&255,this._r[5]=_>>>1&8190;var x=t[10]|t[11]<<8;this._r[6]=(_>>>14|x<<2)&8191;var T=t[12]|t[13]<<8;this._r[7]=(x>>>11|T<<5)&8065;var W=t[14]|t[15]<<8;this._r[8]=(T>>>8|W<<8)&8191,this._r[9]=W>>>5&127,this._pad[0]=t[16]|t[17]<<8,this._pad[1]=t[18]|t[19]<<8,this._pad[2]=t[20]|t[21]<<8,this._pad[3]=t[22]|t[23]<<8,this._pad[4]=t[24]|t[25]<<8,this._pad[5]=t[26]|t[27]<<8,this._pad[6]=t[28]|t[29]<<8,this._pad[7]=t[30]|t[31]<<8}return Poly1305.prototype._blocks=function(t,a,p){for(var g=this._fin?0:2048,m=this._h[0],v=this._h[1],_=this._h[2],x=this._h[3],T=this._h[4],W=this._h[5],z=this._h[6],F=this._h[7],Z=this._h[8],Y=this._h[9],X=this._r[0],Q=this._r[1],J=this._r[2],ei=this._r[3],eo=this._r[4],ea=this._r[5],es=this._r[6],el=this._r[7],ec=this._r[8],eu=this._r[9];p>=16;){var ed,eh=t[a+0]|t[a+1]<<8;m+=8191&eh;var ef=t[a+2]|t[a+3]<<8;v+=(eh>>>13|ef<<3)&8191;var ep=t[a+4]|t[a+5]<<8;_+=(ef>>>10|ep<<6)&8191;var eg=t[a+6]|t[a+7]<<8;x+=(ep>>>7|eg<<9)&8191;var ew=t[a+8]|t[a+9]<<8;T+=(eg>>>4|ew<<12)&8191,W+=ew>>>1&8191;var em=t[a+10]|t[a+11]<<8;z+=(ew>>>14|em<<2)&8191;var eb=t[a+12]|t[a+13]<<8;F+=(em>>>11|eb<<5)&8191;var ey=t[a+14]|t[a+15]<<8;Z+=(eb>>>8|ey<<8)&8191,Y+=ey>>>5|g;var ev=0;ev=(ed=0+m*X+v*(5*eu)+_*(5*ec)+x*(5*el)+T*(5*es))>>>13,ed&=8191,ed+=W*(5*ea)+z*(5*eo)+F*(5*ei)+Z*(5*J)+Y*(5*Q),ev+=ed>>>13,ed&=8191;var e_=ev;e_+=m*Q+v*X+_*(5*eu)+x*(5*ec)+T*(5*el),ev=e_>>>13,e_&=8191,e_+=W*(5*es)+z*(5*ea)+F*(5*eo)+Z*(5*ei)+Y*(5*J),ev+=e_>>>13,e_&=8191;var eC=ev;eC+=m*J+v*Q+_*X+x*(5*eu)+T*(5*ec),ev=eC>>>13,eC&=8191,eC+=W*(5*el)+z*(5*es)+F*(5*ea)+Z*(5*eo)+Y*(5*ei),ev+=eC>>>13,eC&=8191;var ex=ev;ex+=m*ei+v*J+_*Q+x*X+T*(5*eu),ev=ex>>>13,ex&=8191,ex+=W*(5*ec)+z*(5*el)+F*(5*es)+Z*(5*ea)+Y*(5*eo),ev+=ex>>>13,ex&=8191;var eE=ev;eE+=m*eo+v*ei+_*J+x*Q+T*X,ev=eE>>>13,eE&=8191,eE+=W*(5*eu)+z*(5*ec)+F*(5*el)+Z*(5*es)+Y*(5*ea),ev+=eE>>>13,eE&=8191;var ek=ev;ek+=m*ea+v*eo+_*ei+x*J+T*Q,ev=ek>>>13,ek&=8191,ek+=W*X+z*(5*eu)+F*(5*ec)+Z*(5*el)+Y*(5*es),ev+=ek>>>13,ek&=8191;var eD=ev;eD+=m*es+v*ea+_*eo+x*ei+T*J,ev=eD>>>13,eD&=8191,eD+=W*Q+z*X+F*(5*eu)+Z*(5*ec)+Y*(5*el),ev+=eD>>>13,eD&=8191;var eS=ev;eS+=m*el+v*es+_*ea+x*eo+T*ei,ev=eS>>>13,eS&=8191,eS+=W*J+z*Q+F*X+Z*(5*eu)+Y*(5*ec),ev+=eS>>>13,eS&=8191;var eO=ev;eO+=m*ec+v*el+_*es+x*ea+T*eo,ev=eO>>>13,eO&=8191,eO+=W*ei+z*J+F*Q+Z*X+Y*(5*eu),ev+=eO>>>13,eO&=8191;var eA=ev;eA+=m*eu+v*ec+_*el+x*es+T*ea,ev=eA>>>13,eA&=8191,eA+=W*eo+z*ei+F*J+Z*Q+Y*X,ev+=eA>>>13,eA&=8191,ed=8191&(ev=(ev=(ev<<2)+ev|0)+ed|0),ev>>>=13,e_+=ev,m=ed,v=e_,_=eC,x=ex,T=eE,W=ek,z=eD,F=eS,Z=eO,Y=eA,a+=16,p-=16}this._h[0]=m,this._h[1]=v,this._h[2]=_,this._h[3]=x,this._h[4]=T,this._h[5]=W,this._h[6]=z,this._h[7]=F,this._h[8]=Z,this._h[9]=Y},Poly1305.prototype.finish=function(t,a){void 0===a&&(a=0);var p,g,m,v,_=new Uint16Array(10);if(this._leftover){for(v=this._leftover,this._buffer[v++]=1;v<16;v++)this._buffer[v]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(p=this._h[1]>>>13,this._h[1]&=8191,v=2;v<10;v++)this._h[v]+=p,p=this._h[v]>>>13,this._h[v]&=8191;for(this._h[0]+=5*p,p=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=p,p=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=p,_[0]=this._h[0]+5,p=_[0]>>>13,_[0]&=8191,v=1;v<10;v++)_[v]=this._h[v]+p,p=_[v]>>>13,_[v]&=8191;for(_[9]-=8192,g=(1^p)-1,v=0;v<10;v++)_[v]&=g;for(v=0,g=~g;v<10;v++)this._h[v]=this._h[v]&g|_[v];for(v=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,m=this._h[0]+this._pad[0],this._h[0]=65535&m;v<8;v++)m=(this._h[v]+this._pad[v]|0)+(m>>>16)|0,this._h[v]=65535&m;return t[a+0]=this._h[0]>>>0,t[a+1]=this._h[0]>>>8,t[a+2]=this._h[1]>>>0,t[a+3]=this._h[1]>>>8,t[a+4]=this._h[2]>>>0,t[a+5]=this._h[2]>>>8,t[a+6]=this._h[3]>>>0,t[a+7]=this._h[3]>>>8,t[a+8]=this._h[4]>>>0,t[a+9]=this._h[4]>>>8,t[a+10]=this._h[5]>>>0,t[a+11]=this._h[5]>>>8,t[a+12]=this._h[6]>>>0,t[a+13]=this._h[6]>>>8,t[a+14]=this._h[7]>>>0,t[a+15]=this._h[7]>>>8,this._finished=!0,this},Poly1305.prototype.update=function(t){var a,p=0,g=t.length;if(this._leftover){(a=16-this._leftover)>g&&(a=g);for(var m=0;m<a;m++)this._buffer[this._leftover+m]=t[p+m];if(g-=a,p+=a,this._leftover+=a,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(g>=16&&(a=g-g%16,this._blocks(t,p,a),p+=a,g-=a),g){for(var m=0;m<g;m++)this._buffer[this._leftover+m]=t[p+m];this._leftover+=g}return this},Poly1305.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var t=new Uint8Array(16);return this.finish(t),t},Poly1305.prototype.clean=function(){return m.wipe(this._buffer),m.wipe(this._r),m.wipe(this._h),m.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},Poly1305}();function oneTimeAuth(t,a){var p=new v(t);p.update(a);var g=p.digest();return p.clean(),g}function equal(t,p){return t.length===a.DIGEST_LENGTH&&p.length===a.DIGEST_LENGTH&&g.equal(t,p)}a.Poly1305=v,a.oneTimeAuth=oneTimeAuth,a.equal=equal},835:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.randomStringForEntropy=a.randomString=a.randomUint32=a.randomBytes=a.defaultRandomSource=void 0;let g=p(81068),m=p(55993),v=p(13595);function randomBytes(t,p=a.defaultRandomSource){return p.randomBytes(t)}function randomUint32(t=a.defaultRandomSource){let p=randomBytes(4,t),g=(0,m.readUint32LE)(p);return(0,v.wipe)(p),g}a.defaultRandomSource=new g.SystemRandomSource,a.randomBytes=randomBytes,a.randomUint32=randomUint32;let _="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function randomString(t,p=_,g=a.defaultRandomSource){if(p.length<2)throw Error("randomString charset is too short");if(p.length>256)throw Error("randomString charset is too long");let m="",x=p.length,T=256-256%x;for(;t>0;){let a=randomBytes(Math.ceil(256*t/T),g);for(let g=0;g<a.length&&t>0;g++){let v=a[g];v<T&&(m+=p.charAt(v%x),t--)}(0,v.wipe)(a)}return m}function randomStringForEntropy(t,p=_,g=a.defaultRandomSource){let m=Math.ceil(t/(Math.log(p.length)/Math.LN2));return randomString(m,p,g)}a.randomString=randomString,a.randomStringForEntropy=randomStringForEntropy},29949:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.BrowserRandomSource=void 0;let BrowserRandomSource=class BrowserRandomSource{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let t="undefined"!=typeof self?self.crypto||self.msCrypto:null;t&&void 0!==t.getRandomValues&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(t){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let a=new Uint8Array(t);for(let t=0;t<a.length;t+=65536)this._crypto.getRandomValues(a.subarray(t,t+Math.min(a.length-t,65536)));return a}};a.BrowserRandomSource=BrowserRandomSource},82410:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.NodeRandomSource=void 0;let g=p(13595);let NodeRandomSource=class NodeRandomSource{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let t=p(91586);t&&t.randomBytes&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(t){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let a=this._crypto.randomBytes(t);if(a.length!==t)throw Error("NodeRandomSource: got fewer bytes than requested");let p=new Uint8Array(t);for(let t=0;t<p.length;t++)p[t]=a[t];return(0,g.wipe)(a),p}};a.NodeRandomSource=NodeRandomSource},81068:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.SystemRandomSource=void 0;let g=p(29949),m=p(82410);let SystemRandomSource=class SystemRandomSource{constructor(){if(this.isAvailable=!1,this.name="",this._source=new g.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new m.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(t){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(t)}};a.SystemRandomSource=SystemRandomSource},63501:function(t,a,p){"use strict";var g=p(55993),m=p(13595);a.k=32,a.cn=64;var v=function(){function SHA256(){this.digestLength=a.k,this.blockSize=a.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return SHA256.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},SHA256.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},SHA256.prototype.clean=function(){m.wipe(this._buffer),m.wipe(this._temp),this.reset()},SHA256.prototype.update=function(t,a){if(void 0===a&&(a=t.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var p=0;if(this._bytesHashed+=a,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&a>0;)this._buffer[this._bufferLength++]=t[p++],a--;this._bufferLength===this.blockSize&&(hashBlocks(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(a>=this.blockSize&&(p=hashBlocks(this._temp,this._state,t,p,a),a%=this.blockSize);a>0;)this._buffer[this._bufferLength++]=t[p++],a--;return this},SHA256.prototype.finish=function(t){if(!this._finished){var a=this._bytesHashed,p=this._bufferLength,m=a%64<56?64:128;this._buffer[p]=128;for(var v=p+1;v<m-8;v++)this._buffer[v]=0;g.writeUint32BE(a/536870912|0,this._buffer,m-8),g.writeUint32BE(a<<3,this._buffer,m-4),hashBlocks(this._temp,this._state,this._buffer,0,m),this._finished=!0}for(var v=0;v<this.digestLength/4;v++)g.writeUint32BE(this._state[v],t,4*v);return this},SHA256.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},SHA256.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},SHA256.prototype.restoreState=function(t){return this._state.set(t.state),this._bufferLength=t.bufferLength,t.buffer&&this._buffer.set(t.buffer),this._bytesHashed=t.bytesHashed,this._finished=!1,this},SHA256.prototype.cleanSavedState=function(t){m.wipe(t.state),t.buffer&&m.wipe(t.buffer),t.bufferLength=0,t.bytesHashed=0},SHA256}();a.mE=v;var _=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function hashBlocks(t,a,p,m,v){for(;v>=64;){for(var x=a[0],T=a[1],W=a[2],z=a[3],F=a[4],Z=a[5],Y=a[6],X=a[7],Q=0;Q<16;Q++){var J=m+4*Q;t[Q]=g.readUint32BE(p,J)}for(var Q=16;Q<64;Q++){var ei=t[Q-2],eo=(ei>>>17|ei<<15)^(ei>>>19|ei<<13)^ei>>>10,ea=((ei=t[Q-15])>>>7|ei<<25)^(ei>>>18|ei<<14)^ei>>>3;t[Q]=(eo+t[Q-7]|0)+(ea+t[Q-16]|0)}for(var Q=0;Q<64;Q++){var eo=(((F>>>6|F<<26)^(F>>>11|F<<21)^(F>>>25|F<<7))+(F&Z^~F&Y)|0)+(X+(_[Q]+t[Q]|0)|0)|0,ea=((x>>>2|x<<30)^(x>>>13|x<<19)^(x>>>22|x<<10))+(x&T^x&W^T&W)|0;X=Y,Y=Z,Z=F,F=z+eo|0,z=W,W=T,T=x,x=eo+ea|0}a[0]+=x,a[1]+=T,a[2]+=W,a[3]+=z,a[4]+=F,a[5]+=Z,a[6]+=Y,a[7]+=X,m+=64,v-=64}return m}function hash(t){var a=new v;a.update(t);var p=a.digest();return a.clean(),p}a.vp=hash},13595:function(t,a){"use strict";function wipe(t){for(var a=0;a<t.length;a++)t[a]=0;return t}Object.defineProperty(a,"__esModule",{value:!0}),a.wipe=wipe},38137:function(t,a,p){"use strict";a.gi=a.Au=a.KS=a.kz=void 0;let g=p(835),m=p(13595);function gf(t){let a=new Float64Array(16);if(t)for(let p=0;p<t.length;p++)a[p]=t[p];return a}a.kz=32,a.KS=32;let v=new Uint8Array(32);v[0]=9;let _=gf([56129,1]);function car25519(t){let a=1;for(let p=0;p<16;p++){let g=t[p]+a+65535;a=Math.floor(g/65536),t[p]=g-65536*a}t[0]+=a-1+37*(a-1)}function sel25519(t,a,p){let g=~(p-1);for(let p=0;p<16;p++){let m=g&(t[p]^a[p]);t[p]^=m,a[p]^=m}}function pack25519(t,a){let p=gf(),g=gf();for(let t=0;t<16;t++)g[t]=a[t];car25519(g),car25519(g),car25519(g);for(let t=0;t<2;t++){p[0]=g[0]-65517;for(let t=1;t<15;t++)p[t]=g[t]-65535-(p[t-1]>>16&1),p[t-1]&=65535;p[15]=g[15]-32767-(p[14]>>16&1);let t=p[15]>>16&1;p[14]&=65535,sel25519(g,p,1-t)}for(let a=0;a<16;a++)t[2*a]=255&g[a],t[2*a+1]=g[a]>>8}function unpack25519(t,a){for(let p=0;p<16;p++)t[p]=a[2*p]+(a[2*p+1]<<8);t[15]&=32767}function add(t,a,p){for(let g=0;g<16;g++)t[g]=a[g]+p[g]}function sub(t,a,p){for(let g=0;g<16;g++)t[g]=a[g]-p[g]}function mul(t,a,p){let g,m,v=0,_=0,x=0,T=0,W=0,z=0,F=0,Z=0,Y=0,X=0,Q=0,J=0,ei=0,eo=0,ea=0,es=0,el=0,ec=0,eu=0,ed=0,eh=0,ef=0,ep=0,eg=0,ew=0,em=0,eb=0,ey=0,ev=0,e_=0,eC=0,ex=p[0],eE=p[1],ek=p[2],eD=p[3],eS=p[4],eO=p[5],eA=p[6],eP=p[7],eI=p[8],eN=p[9],eT=p[10],e$=p[11],eR=p[12],eB=p[13],eU=p[14],ej=p[15];v+=(g=a[0])*ex,_+=g*eE,x+=g*ek,T+=g*eD,W+=g*eS,z+=g*eO,F+=g*eA,Z+=g*eP,Y+=g*eI,X+=g*eN,Q+=g*eT,J+=g*e$,ei+=g*eR,eo+=g*eB,ea+=g*eU,es+=g*ej,_+=(g=a[1])*ex,x+=g*eE,T+=g*ek,W+=g*eD,z+=g*eS,F+=g*eO,Z+=g*eA,Y+=g*eP,X+=g*eI,Q+=g*eN,J+=g*eT,ei+=g*e$,eo+=g*eR,ea+=g*eB,es+=g*eU,el+=g*ej,x+=(g=a[2])*ex,T+=g*eE,W+=g*ek,z+=g*eD,F+=g*eS,Z+=g*eO,Y+=g*eA,X+=g*eP,Q+=g*eI,J+=g*eN,ei+=g*eT,eo+=g*e$,ea+=g*eR,es+=g*eB,el+=g*eU,ec+=g*ej,T+=(g=a[3])*ex,W+=g*eE,z+=g*ek,F+=g*eD,Z+=g*eS,Y+=g*eO,X+=g*eA,Q+=g*eP,J+=g*eI,ei+=g*eN,eo+=g*eT,ea+=g*e$,es+=g*eR,el+=g*eB,ec+=g*eU,eu+=g*ej,W+=(g=a[4])*ex,z+=g*eE,F+=g*ek,Z+=g*eD,Y+=g*eS,X+=g*eO,Q+=g*eA,J+=g*eP,ei+=g*eI,eo+=g*eN,ea+=g*eT,es+=g*e$,el+=g*eR,ec+=g*eB,eu+=g*eU,ed+=g*ej,z+=(g=a[5])*ex,F+=g*eE,Z+=g*ek,Y+=g*eD,X+=g*eS,Q+=g*eO,J+=g*eA,ei+=g*eP,eo+=g*eI,ea+=g*eN,es+=g*eT,el+=g*e$,ec+=g*eR,eu+=g*eB,ed+=g*eU,eh+=g*ej,F+=(g=a[6])*ex,Z+=g*eE,Y+=g*ek,X+=g*eD,Q+=g*eS,J+=g*eO,ei+=g*eA,eo+=g*eP,ea+=g*eI,es+=g*eN,el+=g*eT,ec+=g*e$,eu+=g*eR,ed+=g*eB,eh+=g*eU,ef+=g*ej,Z+=(g=a[7])*ex,Y+=g*eE,X+=g*ek,Q+=g*eD,J+=g*eS,ei+=g*eO,eo+=g*eA,ea+=g*eP,es+=g*eI,el+=g*eN,ec+=g*eT,eu+=g*e$,ed+=g*eR,eh+=g*eB,ef+=g*eU,ep+=g*ej,Y+=(g=a[8])*ex,X+=g*eE,Q+=g*ek,J+=g*eD,ei+=g*eS,eo+=g*eO,ea+=g*eA,es+=g*eP,el+=g*eI,ec+=g*eN,eu+=g*eT,ed+=g*e$,eh+=g*eR,ef+=g*eB,ep+=g*eU,eg+=g*ej,X+=(g=a[9])*ex,Q+=g*eE,J+=g*ek,ei+=g*eD,eo+=g*eS,ea+=g*eO,es+=g*eA,el+=g*eP,ec+=g*eI,eu+=g*eN,ed+=g*eT,eh+=g*e$,ef+=g*eR,ep+=g*eB,eg+=g*eU,ew+=g*ej,Q+=(g=a[10])*ex,J+=g*eE,ei+=g*ek,eo+=g*eD,ea+=g*eS,es+=g*eO,el+=g*eA,ec+=g*eP,eu+=g*eI,ed+=g*eN,eh+=g*eT,ef+=g*e$,ep+=g*eR,eg+=g*eB,ew+=g*eU,em+=g*ej,J+=(g=a[11])*ex,ei+=g*eE,eo+=g*ek,ea+=g*eD,es+=g*eS,el+=g*eO,ec+=g*eA,eu+=g*eP,ed+=g*eI,eh+=g*eN,ef+=g*eT,ep+=g*e$,eg+=g*eR,ew+=g*eB,em+=g*eU,eb+=g*ej,ei+=(g=a[12])*ex,eo+=g*eE,ea+=g*ek,es+=g*eD,el+=g*eS,ec+=g*eO,eu+=g*eA,ed+=g*eP,eh+=g*eI,ef+=g*eN,ep+=g*eT,eg+=g*e$,ew+=g*eR,em+=g*eB,eb+=g*eU,ey+=g*ej,eo+=(g=a[13])*ex,ea+=g*eE,es+=g*ek,el+=g*eD,ec+=g*eS,eu+=g*eO,ed+=g*eA,eh+=g*eP,ef+=g*eI,ep+=g*eN,eg+=g*eT,ew+=g*e$,em+=g*eR,eb+=g*eB,ey+=g*eU,ev+=g*ej,ea+=(g=a[14])*ex,es+=g*eE,el+=g*ek,ec+=g*eD,eu+=g*eS,ed+=g*eO,eh+=g*eA,ef+=g*eP,ep+=g*eI,eg+=g*eN,ew+=g*eT,em+=g*e$,eb+=g*eR,ey+=g*eB,ev+=g*eU,e_+=g*ej,es+=(g=a[15])*ex,el+=g*eE,ec+=g*ek,eu+=g*eD,ed+=g*eS,eh+=g*eO,ef+=g*eA,ep+=g*eP,eg+=g*eI,ew+=g*eN,em+=g*eT,eb+=g*e$,ey+=g*eR,ev+=g*eB,e_+=g*eU,eC+=g*ej,v+=38*el,_+=38*ec,x+=38*eu,T+=38*ed,W+=38*eh,z+=38*ef,F+=38*ep,Z+=38*eg,Y+=38*ew,X+=38*em,Q+=38*eb,J+=38*ey,ei+=38*ev,eo+=38*e_,ea+=38*eC,m=Math.floor((g=v+(m=1)+65535)/65536),v=g-65536*m,m=Math.floor((g=_+m+65535)/65536),_=g-65536*m,m=Math.floor((g=x+m+65535)/65536),x=g-65536*m,m=Math.floor((g=T+m+65535)/65536),T=g-65536*m,m=Math.floor((g=W+m+65535)/65536),W=g-65536*m,m=Math.floor((g=z+m+65535)/65536),z=g-65536*m,m=Math.floor((g=F+m+65535)/65536),F=g-65536*m,m=Math.floor((g=Z+m+65535)/65536),Z=g-65536*m,m=Math.floor((g=Y+m+65535)/65536),Y=g-65536*m,m=Math.floor((g=X+m+65535)/65536),X=g-65536*m,m=Math.floor((g=Q+m+65535)/65536),Q=g-65536*m,m=Math.floor((g=J+m+65535)/65536),J=g-65536*m,m=Math.floor((g=ei+m+65535)/65536),ei=g-65536*m,m=Math.floor((g=eo+m+65535)/65536),eo=g-65536*m,m=Math.floor((g=ea+m+65535)/65536),ea=g-65536*m,m=Math.floor((g=es+m+65535)/65536),es=g-65536*m,v+=m-1+37*(m-1),m=Math.floor((g=v+(m=1)+65535)/65536),v=g-65536*m,m=Math.floor((g=_+m+65535)/65536),_=g-65536*m,m=Math.floor((g=x+m+65535)/65536),x=g-65536*m,m=Math.floor((g=T+m+65535)/65536),T=g-65536*m,m=Math.floor((g=W+m+65535)/65536),W=g-65536*m,m=Math.floor((g=z+m+65535)/65536),z=g-65536*m,m=Math.floor((g=F+m+65535)/65536),F=g-65536*m,m=Math.floor((g=Z+m+65535)/65536),Z=g-65536*m,m=Math.floor((g=Y+m+65535)/65536),Y=g-65536*m,m=Math.floor((g=X+m+65535)/65536),X=g-65536*m,m=Math.floor((g=Q+m+65535)/65536),Q=g-65536*m,m=Math.floor((g=J+m+65535)/65536),J=g-65536*m,m=Math.floor((g=ei+m+65535)/65536),ei=g-65536*m,m=Math.floor((g=eo+m+65535)/65536),eo=g-65536*m,m=Math.floor((g=ea+m+65535)/65536),ea=g-65536*m,m=Math.floor((g=es+m+65535)/65536),es=g-65536*m,v+=m-1+37*(m-1),t[0]=v,t[1]=_,t[2]=x,t[3]=T,t[4]=W,t[5]=z,t[6]=F,t[7]=Z,t[8]=Y,t[9]=X,t[10]=Q,t[11]=J,t[12]=ei,t[13]=eo,t[14]=ea,t[15]=es}function inv25519(t,a){let p=gf();for(let t=0;t<16;t++)p[t]=a[t];for(let t=253;t>=0;t--)mul(p,p,p),2!==t&&4!==t&&mul(p,p,a);for(let a=0;a<16;a++)t[a]=p[a]}function scalarMult(t,a){let p=new Uint8Array(32),g=new Float64Array(80),m=gf(),v=gf(),x=gf(),T=gf(),W=gf(),z=gf();for(let a=0;a<31;a++)p[a]=t[a];p[31]=127&t[31]|64,p[0]&=248,unpack25519(g,a);for(let t=0;t<16;t++)v[t]=g[t];m[0]=T[0]=1;for(let t=254;t>=0;--t){let a=p[t>>>3]>>>(7&t)&1;sel25519(m,v,a),sel25519(x,T,a),add(W,m,x),sub(m,m,x),add(x,v,T),sub(v,v,T),mul(T,W,W),mul(z,m,m),mul(m,x,m),mul(x,v,W),add(W,m,x),sub(m,m,x),mul(v,m,m),sub(x,T,z),mul(m,x,_),add(m,m,T),mul(x,x,m),mul(m,T,z),mul(T,v,g),mul(v,W,W),sel25519(m,v,a),sel25519(x,T,a)}for(let t=0;t<16;t++)g[t+16]=m[t],g[t+32]=x[t],g[t+48]=v[t],g[t+64]=T[t];let F=g.subarray(32),Z=g.subarray(16);inv25519(F,F),mul(Z,Z,F);let Y=new Uint8Array(32);return pack25519(Y,Z),Y}function scalarMultBase(t){return scalarMult(t,v)}function generateKeyPairFromSeed(t){if(t.length!==a.KS)throw Error(`x25519: seed must be ${a.KS} bytes`);let p=new Uint8Array(t),g=scalarMultBase(p);return{publicKey:g,secretKey:p}}function generateKeyPair(t){let a=(0,g.randomBytes)(32,t),p=generateKeyPairFromSeed(a);return(0,m.wipe)(a),p}function sharedKey(t,p,g=!1){if(t.length!==a.kz)throw Error("X25519: incorrect secret key length");if(p.length!==a.kz)throw Error("X25519: incorrect public key length");let m=scalarMult(t,p);if(g){let t=0;for(let a=0;a<m.length;a++)t|=m[a];if(0===t)throw Error("X25519: invalid shared key")}return m}a.Au=generateKeyPair,a.gi=sharedKey},76697:function(){},69382:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0});let g=p(43582);g.__exportStar(p(76962),a),g.__exportStar(p(66957),a)},76962:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ONE_THOUSAND=a.ONE_HUNDRED=void 0,a.ONE_HUNDRED=100,a.ONE_THOUSAND=1e3},66957:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ONE_YEAR=a.FOUR_WEEKS=a.THREE_WEEKS=a.TWO_WEEKS=a.ONE_WEEK=a.THIRTY_DAYS=a.SEVEN_DAYS=a.FIVE_DAYS=a.THREE_DAYS=a.ONE_DAY=a.TWENTY_FOUR_HOURS=a.TWELVE_HOURS=a.SIX_HOURS=a.THREE_HOURS=a.ONE_HOUR=a.SIXTY_MINUTES=a.THIRTY_MINUTES=a.TEN_MINUTES=a.FIVE_MINUTES=a.ONE_MINUTE=a.SIXTY_SECONDS=a.THIRTY_SECONDS=a.TEN_SECONDS=a.FIVE_SECONDS=a.ONE_SECOND=void 0,a.ONE_SECOND=1,a.FIVE_SECONDS=5,a.TEN_SECONDS=10,a.THIRTY_SECONDS=30,a.SIXTY_SECONDS=60,a.ONE_MINUTE=a.SIXTY_SECONDS,a.FIVE_MINUTES=5*a.ONE_MINUTE,a.TEN_MINUTES=10*a.ONE_MINUTE,a.THIRTY_MINUTES=30*a.ONE_MINUTE,a.SIXTY_MINUTES=60*a.ONE_MINUTE,a.ONE_HOUR=a.SIXTY_MINUTES,a.THREE_HOURS=3*a.ONE_HOUR,a.SIX_HOURS=6*a.ONE_HOUR,a.TWELVE_HOURS=12*a.ONE_HOUR,a.TWENTY_FOUR_HOURS=24*a.ONE_HOUR,a.ONE_DAY=a.TWENTY_FOUR_HOURS,a.THREE_DAYS=3*a.ONE_DAY,a.FIVE_DAYS=5*a.ONE_DAY,a.SEVEN_DAYS=7*a.ONE_DAY,a.THIRTY_DAYS=30*a.ONE_DAY,a.ONE_WEEK=a.SEVEN_DAYS,a.TWO_WEEKS=2*a.ONE_WEEK,a.THREE_WEEKS=3*a.ONE_WEEK,a.FOUR_WEEKS=4*a.ONE_WEEK,a.ONE_YEAR=365*a.ONE_DAY},53743:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0});let g=p(43582);g.__exportStar(p(97382),a),g.__exportStar(p(57475),a),g.__exportStar(p(60080),a),g.__exportStar(p(69382),a)},60080:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0});let g=p(43582);g.__exportStar(p(95072),a)},95072:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.IWatch=void 0;let IWatch=class IWatch{};a.IWatch=IWatch},84845:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.fromMiliseconds=a.toMiliseconds=void 0;let g=p(69382);function toMiliseconds(t){return t*g.ONE_THOUSAND}function fromMiliseconds(t){return Math.floor(t/g.ONE_THOUSAND)}a.toMiliseconds=toMiliseconds,a.fromMiliseconds=fromMiliseconds},47667:function(t,a){"use strict";function delay(t){return new Promise(a=>{setTimeout(()=>{a(!0)},t)})}Object.defineProperty(a,"__esModule",{value:!0}),a.delay=void 0,a.delay=delay},97382:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0});let g=p(43582);g.__exportStar(p(47667),a),g.__exportStar(p(84845),a)},57475:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Watch=void 0;let Watch=class Watch{constructor(){this.timestamps=new Map}start(t){if(this.timestamps.has(t))throw Error(`Watch already started for label: ${t}`);this.timestamps.set(t,{started:Date.now()})}stop(t){let a=this.get(t);if(void 0!==a.elapsed)throw Error(`Watch already stopped for label: ${t}`);let p=Date.now()-a.started;this.timestamps.set(t,{started:a.started,elapsed:p})}get(t){let a=this.timestamps.get(t);if(void 0===a)throw Error(`No timestamp found for label: ${t}`);return a}elapsed(t){let a=this.get(t),p=a.elapsed||Date.now()-a.started;return p}};a.Watch=Watch,a.default=Watch},43582:function(t,a,p){"use strict";p.r(a),p.d(a,{__assign:function(){return __assign},__asyncDelegator:function(){return __asyncDelegator},__asyncGenerator:function(){return __asyncGenerator},__asyncValues:function(){return __asyncValues},__await:function(){return __await},__awaiter:function(){return __awaiter},__classPrivateFieldGet:function(){return __classPrivateFieldGet},__classPrivateFieldSet:function(){return __classPrivateFieldSet},__createBinding:function(){return __createBinding},__decorate:function(){return __decorate},__exportStar:function(){return __exportStar},__extends:function(){return __extends},__generator:function(){return __generator},__importDefault:function(){return __importDefault},__importStar:function(){return __importStar},__makeTemplateObject:function(){return __makeTemplateObject},__metadata:function(){return __metadata},__param:function(){return __param},__read:function(){return __read},__rest:function(){return __rest},__spread:function(){return __spread},__spreadArrays:function(){return __spreadArrays},__values:function(){return __values}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var extendStatics=function(t,a){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var p in a)a.hasOwnProperty(p)&&(t[p]=a[p])})(t,a)};function __extends(t,a){function __(){this.constructor=t}extendStatics(t,a),t.prototype=null===a?Object.create(a):(__.prototype=a.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function(t){for(var a,p=1,g=arguments.length;p<g;p++)for(var m in a=arguments[p])Object.prototype.hasOwnProperty.call(a,m)&&(t[m]=a[m]);return t}).apply(this,arguments)};function __rest(t,a){var p={};for(var g in t)Object.prototype.hasOwnProperty.call(t,g)&&0>a.indexOf(g)&&(p[g]=t[g]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var m=0,g=Object.getOwnPropertySymbols(t);m<g.length;m++)0>a.indexOf(g[m])&&Object.prototype.propertyIsEnumerable.call(t,g[m])&&(p[g[m]]=t[g[m]]);return p}function __decorate(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}function __param(t,a){return function(p,g){a(p,g,t)}}function __metadata(t,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,a)}function __awaiter(t,a,p,g){function adopt(t){return t instanceof p?t:new p(function(a){a(t)})}return new(p||(p=Promise))(function(p,m){function fulfilled(t){try{step(g.next(t))}catch(t){m(t)}}function rejected(t){try{step(g.throw(t))}catch(t){m(t)}}function step(t){t.done?p(t.value):adopt(t.value).then(fulfilled,rejected)}step((g=g.apply(t,a||[])).next())})}function __generator(t,a){var p,g,m,v,_={label:0,sent:function(){if(1&m[0])throw m[1];return m[1]},trys:[],ops:[]};return v={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(v[Symbol.iterator]=function(){return this}),v;function verb(t){return function(a){return step([t,a])}}function step(v){if(p)throw TypeError("Generator is already executing.");for(;_;)try{if(p=1,g&&(m=2&v[0]?g.return:v[0]?g.throw||((m=g.return)&&m.call(g),0):g.next)&&!(m=m.call(g,v[1])).done)return m;switch(g=0,m&&(v=[2&v[0],m.value]),v[0]){case 0:case 1:m=v;break;case 4:return _.label++,{value:v[1],done:!1};case 5:_.label++,g=v[1],v=[0];continue;case 7:v=_.ops.pop(),_.trys.pop();continue;default:if(!(m=(m=_.trys).length>0&&m[m.length-1])&&(6===v[0]||2===v[0])){_=0;continue}if(3===v[0]&&(!m||v[1]>m[0]&&v[1]<m[3])){_.label=v[1];break}if(6===v[0]&&_.label<m[1]){_.label=m[1],m=v;break}if(m&&_.label<m[2]){_.label=m[2],_.ops.push(v);break}m[2]&&_.ops.pop(),_.trys.pop();continue}v=a.call(t,_)}catch(t){v=[6,t],g=0}finally{p=m=0}if(5&v[0])throw v[1];return{value:v[0]?v[1]:void 0,done:!0}}}function __createBinding(t,a,p,g){void 0===g&&(g=p),t[g]=a[p]}function __exportStar(t,a){for(var p in t)"default"===p||a.hasOwnProperty(p)||(a[p]=t[p])}function __values(t){var a="function"==typeof Symbol&&Symbol.iterator,p=a&&t[a],g=0;if(p)return p.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&g>=t.length&&(t=void 0),{value:t&&t[g++],done:!t}}};throw TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(t,a){var p="function"==typeof Symbol&&t[Symbol.iterator];if(!p)return t;var g,m,v=p.call(t),_=[];try{for(;(void 0===a||a-- >0)&&!(g=v.next()).done;)_.push(g.value)}catch(t){m={error:t}}finally{try{g&&!g.done&&(p=v.return)&&p.call(v)}finally{if(m)throw m.error}}return _}function __spread(){for(var t=[],a=0;a<arguments.length;a++)t=t.concat(__read(arguments[a]));return t}function __spreadArrays(){for(var t=0,a=0,p=arguments.length;a<p;a++)t+=arguments[a].length;for(var g=Array(t),m=0,a=0;a<p;a++)for(var v=arguments[a],_=0,x=v.length;_<x;_++,m++)g[m]=v[_];return g}function __await(t){return this instanceof __await?(this.v=t,this):new __await(t)}function __asyncGenerator(t,a,p){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var g,m=p.apply(t,a||[]),v=[];return g={},verb("next"),verb("throw"),verb("return"),g[Symbol.asyncIterator]=function(){return this},g;function verb(t){m[t]&&(g[t]=function(a){return new Promise(function(p,g){v.push([t,a,p,g])>1||resume(t,a)})})}function resume(t,a){try{step(m[t](a))}catch(t){settle(v[0][3],t)}}function step(t){t.value instanceof __await?Promise.resolve(t.value.v).then(fulfill,reject):settle(v[0][2],t)}function fulfill(t){resume("next",t)}function reject(t){resume("throw",t)}function settle(t,a){t(a),v.shift(),v.length&&resume(v[0][0],v[0][1])}}function __asyncDelegator(t){var a,p;return a={},verb("next"),verb("throw",function(t){throw t}),verb("return"),a[Symbol.iterator]=function(){return this},a;function verb(g,m){a[g]=t[g]?function(a){return(p=!p)?{value:__await(t[g](a)),done:"return"===g}:m?m(a):a}:m}}function __asyncValues(t){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var a,p=t[Symbol.asyncIterator];return p?p.call(t):(t=__values(t),a={},verb("next"),verb("throw"),verb("return"),a[Symbol.asyncIterator]=function(){return this},a);function verb(p){a[p]=t[p]&&function(a){return new Promise(function(g,m){settle(g,m,(a=t[p](a)).done,a.value)})}}function settle(t,a,p,g){Promise.resolve(g).then(function(a){t({value:a,done:p})},a)}}function __makeTemplateObject(t,a){return Object.defineProperty?Object.defineProperty(t,"raw",{value:a}):t.raw=a,t}function __importStar(t){if(t&&t.__esModule)return t;var a={};if(null!=t)for(var p in t)Object.hasOwnProperty.call(t,p)&&(a[p]=t[p]);return a.default=t,a}function __importDefault(t){return t&&t.__esModule?t:{default:t}}function __classPrivateFieldGet(t,a){if(!a.has(t))throw TypeError("attempted to get private field on non-instance");return a.get(t)}function __classPrivateFieldSet(t,a,p){if(!a.has(t))throw TypeError("attempted to set private field on non-instance");return a.set(t,p),p}},48453:function(t,a,p){"use strict";p.d(a,{AW:function(){return es},O6:function(){return er},rV:function(){return eu},gn:function(){return lt},H1:function(){return st},hF:function(){return it},WG:function(){return $},pe:function(){return Ln},m$:function(){return kn},vB:function(){return ee},HI:function(){return Kn},E0:function(){return ft},Gq:function(){return at},$0:function(){return Jn},Z4:function(){return ct},Bv:function(){return Nt},Au:function(){return jn},jd:function(){return Dn},gu:function(){return Rn},D:function(){return zn},Z7:function(){return N},cO:function(){return yt},_H:function(){return mt},fc:function(){return At},D6:function(){return U},Hh:function(){return pt},Ym:function(){return Vn},rj:function(){return Mn},jU:function(){return q},gp:function(){return oe},rF:function(){return un},Bw:function(){return dt},UG:function(){return te},Gg:function(){return Zt},xW:function(){return Dt},b$:function(){return j},Ih:function(){return $t},h1:function(){return kt},Q8:function(){return Fn},o8:function(){return w},qt:function(){return D},Dd:function(){return Vt},$t:function(){return Ft},nf:function(){return Bt},Q0:function(){return Lt},in:function(){return cn},p8:function(){return Gt},sI:function(){return zt},al:function(){return Wt},L5:function(){return B},EJ:function(){return xt},Z2:function(){return an},PM:function(){return Kt},hH:function(){return Ht},ON:function(){return Qt},n:function(){return Mt},JT:function(){return qt},M_:function(){return h},jv:function(){return jt},KC:function(){return et},eG:function(){return S},fK:function(){return se},IP:function(){return nt},DQ:function(){return ve},iP:function(){return ut},M:function(){return Xe},he:function(){return bt},uw:function(){return Xt},Ll:function(){return xn},EN:function(){return Re}});var g=p(95354),m=p(99289),v=p(835),_=p(63501),x=p(38137),T=p(66356),W=p(59792),__spreadArray=function(t,a,p){if(p||2==arguments.length)for(var g,m=0,v=a.length;m<v;m++)!g&&m in a||(g||(g=Array.prototype.slice.call(a,0,m)),g[m]=a[m]);return t.concat(g||Array.prototype.slice.call(a))},BrowserInfo=function(t,a,p){this.name=t,this.version=a,this.os=p,this.type="browser"},NodeInfo=function(t){this.version=t,this.type="node",this.name="node",this.os=W.platform},SearchBotDeviceInfo=function(t,a,p,g){this.name=t,this.version=a,this.os=p,this.bot=g,this.type="bot-device"},BotInfo=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},ReactNativeInfo=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},z=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,F=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],Z=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function detect(t){return t?parseUserAgent(t):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new ReactNativeInfo:"undefined"!=typeof navigator?parseUserAgent(navigator.userAgent):getNodeVersion()}function matchUserAgent(t){return""!==t&&F.reduce(function(a,p){var g=p[0],m=p[1];if(a)return a;var v=m.exec(t);return!!v&&[g,v]},!1)}function parseUserAgent(t){var a=matchUserAgent(t);if(!a)return null;var p=a[0],g=a[1];if("searchbot"===p)return new BotInfo;var m=g[1]&&g[1].split(".").join("_").split("_").slice(0,3);m?m.length<3&&(m=__spreadArray(__spreadArray([],m,!0),createVersionParts(3-m.length),!0)):m=[];var v=m.join("."),_=detectOS(t),x=z.exec(t);return x&&x[1]?new SearchBotDeviceInfo(p,v,_,x[1]):new BrowserInfo(p,v,_)}function detectOS(t){for(var a=0,p=Z.length;a<p;a++){var g=Z[a],m=g[0];if(g[1].exec(t))return m}return null}function getNodeVersion(){return void 0!==W&&W.version?new NodeInfo(W.version.slice(1)):null}function createVersionParts(t){for(var a=[],p=0;p<t;p++)a.push("0");return a}var Y=p(53743),X=p(45450),Q=p(50844),J=p(52221);p(76697);let ei={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}};var eo=p(59792);function ve(t){let[a,p]=t.split(":");return{namespace:a,reference:p}}function Rn(t,a=[]){let p=[];return Object.keys(t).forEach(g=>{if(a.length&&!a.includes(g))return;let m=t[g];p.push(...m.accounts)}),p}function K(t,a){return t.includes(":")?[t]:a.chains||[]}let ea="base10",es="base16",el="base64pad",ec="utf8",eu=1;function jn(){let t=x.Au();return{privateKey:(0,T.BB)(t.secretKey,es),publicKey:(0,T.BB)(t.publicKey,es)}}function Dn(){let t=(0,v.randomBytes)(32);return(0,T.BB)(t,es)}function kn(t,a){let p=x.gi((0,T.mL)(t,es),(0,T.mL)(a,es),!0),g=new m.t(_.mE,p).expand(32);return(0,T.BB)(g,es)}function Vn(t){let a=(0,_.vp)((0,T.mL)(t,es));return(0,T.BB)(a,es)}function Mn(t){let a=(0,_.vp)((0,T.mL)(t,ec));return(0,T.BB)(a,es)}function Pe(t){return(0,T.mL)(`${t}`,ea)}function $(t){return Number((0,T.BB)(t,ea))}function Kn(t){let a=Pe("u">typeof t.type?t.type:0);if($(a)===eu&&typeof t.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let p="u">typeof t.senderPublicKey?(0,T.mL)(t.senderPublicKey,es):void 0,m="u">typeof t.iv?(0,T.mL)(t.iv,es):(0,v.randomBytes)(12),_=new g.OK((0,T.mL)(t.symKey,es)).seal(m,(0,T.mL)(t.message,ec));return Te({type:a,sealed:_,iv:m,senderPublicKey:p})}function Ln(t){let a=new g.OK((0,T.mL)(t.symKey,es)),{sealed:p,iv:m}=ee(t.encoded),v=a.open(m,p);if(null===v)throw Error("Failed to decrypt");return(0,T.BB)(v,ec)}function Te(t){if($(t.type)===eu){if(typeof t.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return(0,T.BB)((0,T.zo)([t.type,t.senderPublicKey,t.iv,t.sealed]),el)}return(0,T.BB)((0,T.zo)([t.type,t.iv,t.sealed]),el)}function ee(t){let a=(0,T.mL)(t,el),p=a.slice(0,1);if($(p)===eu){let t=a.slice(1,33),g=a.slice(33,45),m=a.slice(45);return{type:p,sealed:m,iv:g,senderPublicKey:t}}let g=a.slice(1,13),m=a.slice(13);return{type:p,sealed:m,iv:g}}function xn(t,a){let p=ee(t);return Re({type:$(p.type),senderPublicKey:"u">typeof p.senderPublicKey?(0,T.BB)(p.senderPublicKey,es):void 0,receiverPublicKey:a?.receiverPublicKey})}function Re(t){let a=t?.type||0;if(a===eu){if(typeof t?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof t?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:a,senderPublicKey:t?.senderPublicKey,receiverPublicKey:t?.receiverPublicKey}}function Fn(t){return t.type===eu&&"string"==typeof t.senderPublicKey&&"string"==typeof t.receiverPublicKey}var ed=Object.defineProperty,eh=Object.getOwnPropertySymbols,ef=Object.prototype.hasOwnProperty,ep=Object.prototype.propertyIsEnumerable,Ue=(t,a,p)=>a in t?ed(t,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[a]=p,_e=(t,a)=>{for(var p in a||(a={}))ef.call(a,p)&&Ue(t,p,a[p]);if(eh)for(var p of eh(a))ep.call(a,p)&&Ue(t,p,a[p]);return t};let eg={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"};function te(){return"u">typeof eo&&"u">typeof eo.versions&&"u">typeof eo.versions.node}function j(){return!(0,X.getDocument)()&&!!(0,X.getNavigator)()&&"ReactNative"===navigator.product}function q(){return!te()&&!!(0,X.getNavigator)()}function R(){return j()?eg.reactNative:te()?eg.node:q()?eg.browser:eg.unknown}function De(t,a){let p=J.parse(t);return p=_e(_e({},p),a),t=J.stringify(p)}function zn(){return(0,Q.D)()||{name:"",description:"",url:"",icons:[""]}}function ke(){if(R()===eg.reactNative&&"u">typeof p.g&&"u">typeof(null==p.g?void 0:p.g.Platform)){let{OS:t,Version:a}=p.g.Platform;return[t,a].join("-")}let t=detect();if(null===t)return"unknown";let a=t.os?t.os.replace(" ","").toLowerCase():"unknown";return"browser"===t.type?[a,t.name,t.version].join("-"):[a,t.version].join("-")}function Ve(){var t;let a=R();return a===eg.browser?[a,(null==(t=(0,X.getLocation)())?void 0:t.host)||"unknown"].join(":"):a}function Me(t,a,p){let g=ke(),m=Ve();return[[t,a].join("-"),["js",p].join("-"),g,m].join("/")}function Jn({protocol:t,version:a,relayUrl:p,sdkVersion:g,auth:m,projectId:v,useOnCloseEvent:_}){let x=p.split("?"),T=Me(t,a,g),W=De(x[1]||"",{auth:m,ua:T,projectId:v,useOnCloseEvent:_||void 0});return x[0]+"?"+W}function O(t,a){return t.filter(t=>a.includes(t)).length===t.length}function et(t){return Object.fromEntries(t.entries())}function nt(t){return new Map(Object.entries(t))}function st(t=Y.FIVE_MINUTES,a){let p,g,m;let v=(0,Y.toMiliseconds)(t||Y.FIVE_MINUTES);return{resolve:t=>{m&&p&&(clearTimeout(m),p(t))},reject:t=>{m&&g&&(clearTimeout(m),g(t))},done:()=>new Promise((t,_)=>{m=setTimeout(()=>{_(Error(a))},v),p=t,g=_})}}function it(t,a,p){return new Promise(async(g,m)=>{let v=setTimeout(()=>m(Error(p)),a);try{let a=await t;g(a)}catch(t){m(t)}clearTimeout(v)})}function re(t,a){if("string"==typeof a&&a.startsWith(`${t}:`))return a;if("topic"===t.toLowerCase()){if("string"!=typeof a)throw Error('Value must be "string" for expirer target type: topic');return`topic:${a}`}if("id"===t.toLowerCase()){if("number"!=typeof a)throw Error('Value must be "number" for expirer target type: id');return`id:${a}`}throw Error(`Unknown expirer target type: ${t}`)}function ct(t){return re("topic",t)}function at(t){return re("id",t)}function ut(t){let[a,p]=t.split(":"),g={id:void 0,topic:void 0};if("topic"===a&&"string"==typeof p)g.topic=p;else if("id"===a&&Number.isInteger(Number(p)))g.id=Number(p);else throw Error(`Invalid target, expected id:number or topic:string, got ${a}:${p}`);return g}function lt(t,a){return(0,Y.fromMiliseconds)((a||Date.now())+(0,Y.toMiliseconds)(t))}function dt(t){return Date.now()>=(0,Y.toMiliseconds)(t)}function ft(t,a){return`${t}${a?`:${a}`:""}`}function S(t=[],a=[]){return[...new Set([...t,...a])]}async function pt({id:t,topic:a,wcDeepLink:g}){try{if(!g)return;let m="string"==typeof g?JSON.parse(g):g,v=m?.href;if("string"!=typeof v)return;v.endsWith("/")&&(v=v.slice(0,-1));let _=`${v}/wc?requestId=${t}&sessionTopic=${a}`,x=R();x===eg.browser?_.startsWith("https://")?window.open(_,"_blank","noreferrer noopener"):window.open(_,"_self","noreferrer noopener"):x===eg.reactNative&&"u">typeof(null==p.g?void 0:p.g.Linking)&&await p.g.Linking.openURL(_)}catch(t){console.error(t)}}function mt(t){return t?.relay||{protocol:"irn"}}function yt(t){let a=ei[t];if(typeof a>"u")throw Error(`Relay Protocol not supported: ${t}`);return a}var ew=Object.defineProperty,em=Object.getOwnPropertySymbols,eb=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,qe=(t,a,p)=>a in t?ew(t,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[a]=p,Et=(t,a)=>{for(var p in a||(a={}))eb.call(a,p)&&qe(t,p,a[p]);if(em)for(var p of em(a))ey.call(a,p)&&qe(t,p,a[p]);return t};function Be(t,a="-"){let p={},g="relay"+a;return Object.keys(t).forEach(a=>{if(a.startsWith(g)){let m=a.replace(g,""),v=t[a];p[m]=v}}),p}function bt(t){let a=t.indexOf(":"),p=-1!==t.indexOf("?")?t.indexOf("?"):void 0,g=t.substring(0,a),m=t.substring(a+1,p).split("@"),v="u">typeof p?t.substring(p):"",_=J.parse(v);return{protocol:g,topic:Ge(m[0]),version:parseInt(m[1],10),symKey:_.symKey,relay:Be(_)}}function Ge(t){return t.startsWith("//")?t.substring(2):t}function We(t,a="-"){let p={};return Object.keys(t).forEach(g=>{t[g]&&(p["relay"+a+g]=t[g])}),p}function Nt(t){return`${t.protocol}:${t.topic}@${t.version}?`+J.stringify(Et({symKey:t.symKey},We(t.relay)))}var ev=Object.defineProperty,e_=Object.defineProperties,eC=Object.getOwnPropertyDescriptors,ex=Object.getOwnPropertySymbols,eE=Object.prototype.hasOwnProperty,ek=Object.prototype.propertyIsEnumerable,Ye=(t,a,p)=>a in t?ev(t,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[a]=p,Tt=(t,a)=>{for(var p in a||(a={}))eE.call(a,p)&&Ye(t,p,a[p]);if(ex)for(var p of ex(a))ek.call(a,p)&&Ye(t,p,a[p]);return t},Rt=(t,a)=>e_(t,eC(a));function A(t){let a=[];return t.forEach(t=>{let[p,g]=t.split(":");a.push(`${p}:${g}`)}),a}function Je(t){let a=[];return Object.values(t).forEach(t=>{a.push(...A(t.accounts))}),a}function Qe(t,a){let p=[];return Object.values(t).forEach(t=>{A(t.accounts).includes(a)&&p.push(...t.methods)}),p}function Ze(t,a){let p=[];return Object.values(t).forEach(t=>{A(t.accounts).includes(a)&&p.push(...t.events)}),p}function At(t,a){let p=cn(t,a);if(p)throw Error(p.message);let g={};for(let[a,p]of Object.entries(t))g[a]={methods:p.methods,events:p.events,chains:p.accounts.map(t=>`${t.split(":")[0]}:${t.split(":")[1]}`)};return g}function oe(t){return t.includes(":")}function Xe(t){return oe(t)?t.split(":")[0]:t}function se(t){var a,p,g;let m={};if(!B(t))return m;for(let[v,_]of Object.entries(t)){let t=oe(v)?[v]:_.chains,x=_.methods||[],T=_.events||[],W=Xe(v);m[W]=Rt(Tt({},m[W]),{chains:S(t,null==(a=m[W])?void 0:a.chains),methods:S(x,null==(p=m[W])?void 0:p.methods),events:S(T,null==(g=m[W])?void 0:g.events)})}return m}let eD={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},eS={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function N(t,a){let{message:p,code:g}=eS[t];return{message:a?`${p} ${a}`:p,code:g}}function U(t,a){let{message:p,code:g}=eD[t];return{message:a?`${p} ${a}`:p,code:g}}function D(t,a){return!!Array.isArray(t)&&(!("u">typeof a)||!t.length||t.every(a))}function B(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function w(t){return typeof t>"u"}function h(t,a){return!!(a&&w(t))||"string"==typeof t&&!!t.trim().length}function G(t,a){return!!(a&&w(t))||"number"==typeof t&&!isNaN(t)}function $t(t,a){let{requiredNamespaces:p}=a,g=Object.keys(t.namespaces),m=Object.keys(p),v=!0;return!!O(m,g)&&(g.forEach(a=>{let{accounts:g,methods:m,events:_}=t.namespaces[a],x=A(g),T=p[a];O(K(a,T),x)&&O(T.methods,m)&&O(T.events,_)||(v=!1)}),v)}function k(t){return!!(h(t,!1)&&t.includes(":"))&&2===t.split(":").length}function en(t){if(h(t,!1)&&t.includes(":")){let a=t.split(":");if(3===a.length){let t=a[0]+":"+a[1];return!!a[2]&&k(t)}}return!1}function jt(t){if(h(t,!1))try{return"u">typeof new URL(t)}catch{}return!1}function Dt(t){var a;return null==(a=t?.proposer)?void 0:a.publicKey}function kt(t){return t?.topic}function Vt(t,a){let p=null;return h(t?.publicKey,!1)||(p=N("MISSING_OR_INVALID",`${a} controller public key should be a string`)),p}function ie(t){let a=!0;return D(t)?t.length&&(a=t.every(t=>h(t,!1))):a=!1,a}function nn(t,a,p){let g=null;return D(a)&&a.length?a.forEach(t=>{g||k(t)||(g=U("UNSUPPORTED_CHAINS",`${p}, chain ${t} should be a string and conform to "namespace:chainId" format`))}):k(t)||(g=U("UNSUPPORTED_CHAINS",`${p}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),g}function tn(t,a,p){let g=null;return Object.entries(t).forEach(([t,m])=>{if(g)return;let v=nn(t,K(t,m),`${a} ${p}`);v&&(g=v)}),g}function rn(t,a){let p=null;return D(t)?t.forEach(t=>{p||en(t)||(p=U("UNSUPPORTED_ACCOUNTS",`${a}, account ${t} should be a string and conform to "namespace:chainId:address" format`))}):p=U("UNSUPPORTED_ACCOUNTS",`${a}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),p}function on(t,a){let p=null;return Object.values(t).forEach(t=>{if(p)return;let g=rn(t?.accounts,`${a} namespace`);g&&(p=g)}),p}function sn(t,a){let p=null;return ie(t?.methods)?ie(t?.events)||(p=U("UNSUPPORTED_EVENTS",`${a}, events should be an array of strings or empty array for no events`)):p=U("UNSUPPORTED_METHODS",`${a}, methods should be an array of strings or empty array for no methods`),p}function ce(t,a){let p=null;return Object.values(t).forEach(t=>{if(p)return;let g=sn(t,`${a}, namespace`);g&&(p=g)}),p}function Mt(t,a,p){let g=null;if(t&&B(t)){let m=ce(t,a);m&&(g=m);let v=tn(t,a,p);v&&(g=v)}else g=N("MISSING_OR_INVALID",`${a}, ${p} should be an object with data`);return g}function cn(t,a){let p=null;if(t&&B(t)){let g=ce(t,a);g&&(p=g);let m=on(t,a);m&&(p=m)}else p=N("MISSING_OR_INVALID",`${a}, namespaces should be an object with data`);return p}function an(t){return h(t.protocol,!0)}function Kt(t,a){let p=!1;return a&&!t?p=!0:t&&D(t)&&t.length&&t.forEach(t=>{p=an(t)}),p}function Lt(t){return"number"==typeof t}function xt(t){return"u">typeof t}function Ft(t){return!(!t||"object"!=typeof t||!t.code||!G(t.code,!1)||!t.message||!h(t.message,!1))}function Ht(t){return!(w(t)||!h(t.method,!1))}function qt(t){return!(w(t)||w(t.result)&&w(t.error)||!G(t.id,!1)||!h(t.jsonrpc,!1))}function Bt(t){return!(w(t)||!h(t.name,!1))}function Gt(t,a){return!(!k(a)||!Je(t).includes(a))}function Wt(t,a,p){return!!h(p,!1)&&Qe(t,a).includes(p)}function zt(t,a,p){return!!h(p,!1)&&Ze(t,a).includes(p)}function un(t,a,p){let g=null,m=Yt(t),v=Jt(a),_=Object.keys(m),x=Object.keys(v),T=ln(Object.keys(t)),W=ln(Object.keys(a)),z=T.filter(t=>!W.includes(t));return z.length&&(g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces keys don't satisfy requiredNamespaces.
      Required: ${z.toString()}
      Received: ${Object.keys(a).toString()}`)),O(_,x)||(g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces chains don't satisfy required namespaces.
      Required: ${_.toString()}
      Approved: ${x.toString()}`)),Object.keys(a).forEach(t=>{if(!t.includes(":")||g)return;let m=A(a[t].accounts);m.includes(t)||(g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces accounts don't satisfy namespace accounts for ${t}
        Required: ${t}
        Approved: ${m.toString()}`))}),_.forEach(t=>{g||(O(m[t].methods,v[t].methods)?O(m[t].events,v[t].events)||(g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces events don't satisfy namespace events for ${t}`)):g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces methods don't satisfy namespace methods for ${t}`))}),g}function Yt(t){let a={};return Object.keys(t).forEach(p=>{var g;p.includes(":")?a[p]=t[p]:null==(g=t[p].chains)||g.forEach(g=>{a[g]={methods:t[p].methods,events:t[p].events}})}),a}function ln(t){return[...new Set(t.map(t=>t.includes(":")?t.split(":")[0]:t))]}function Jt(t){let a={};return Object.keys(t).forEach(p=>{if(p.includes(":"))a[p]=t[p];else{let g=A(t[p].accounts);g?.forEach(g=>{a[g]={accounts:t[p].accounts.filter(t=>t.includes(`${g}:`)),methods:t[p].methods,events:t[p].events}})}}),a}function Qt(t,a){return G(t,!1)&&t<=a.max&&t>=a.min}function Zt(){let t=R();return new Promise(a=>{switch(t){case eg.browser:a(dn());break;case eg.reactNative:a(fn());break;case eg.node:a(pn());break;default:a(!0)}})}function dn(){return q()&&navigator?.onLine}async function fn(){if(j()&&"u">typeof p.g&&null!=p.g&&p.g.NetInfo){let t=await (null==p.g?void 0:p.g.NetInfo.fetch());return t?.isConnected}return!0}function pn(){return!0}function Xt(t){switch(R()){case eg.browser:mn(t);break;case eg.reactNative:yn(t);case eg.node:}}function mn(t){!j()&&q()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function yn(t){j()&&"u">typeof p.g&&null!=p.g&&p.g.NetInfo&&p.g?.NetInfo.addEventListener(a=>t(a?.isConnected))}let eO={};let er=class er{static get(t){return eO[t]}static set(t,a){eO[t]=a}static delete(t){delete eO[t]}}},45450:function(t,a){"use strict";function getFromWindow(t){let a;return"undefined"!=typeof window&&void 0!==window[t]&&(a=window[t]),a}function getFromWindowOrThrow(t){let a=getFromWindow(t);if(!a)throw Error(`${t} is not defined in Window`);return a}function getDocumentOrThrow(){return getFromWindowOrThrow("document")}function getDocument(){return getFromWindow("document")}function getNavigatorOrThrow(){return getFromWindowOrThrow("navigator")}function getNavigator(){return getFromWindow("navigator")}function getLocationOrThrow(){return getFromWindowOrThrow("location")}function getLocation(){return getFromWindow("location")}function getCryptoOrThrow(){return getFromWindowOrThrow("crypto")}function getCrypto(){return getFromWindow("crypto")}function getLocalStorageOrThrow(){return getFromWindowOrThrow("localStorage")}function getLocalStorage(){return getFromWindow("localStorage")}Object.defineProperty(a,"__esModule",{value:!0}),a.getLocalStorage=a.getLocalStorageOrThrow=a.getCrypto=a.getCryptoOrThrow=a.getLocation=a.getLocationOrThrow=a.getNavigator=a.getNavigatorOrThrow=a.getDocument=a.getDocumentOrThrow=a.getFromWindowOrThrow=a.getFromWindow=void 0,a.getFromWindow=getFromWindow,a.getFromWindowOrThrow=getFromWindowOrThrow,a.getDocumentOrThrow=getDocumentOrThrow,a.getDocument=getDocument,a.getNavigatorOrThrow=getNavigatorOrThrow,a.getNavigator=getNavigator,a.getLocationOrThrow=getLocationOrThrow,a.getLocation=getLocation,a.getCryptoOrThrow=getCryptoOrThrow,a.getCrypto=getCrypto,a.getLocalStorageOrThrow=getLocalStorageOrThrow,a.getLocalStorage=getLocalStorage},50844:function(t,a,p){"use strict";a.D=void 0;let g=p(45450);function getWindowMetadata(){let t,a;try{t=g.getDocumentOrThrow(),a=g.getLocationOrThrow()}catch(t){return null}function getIcons(){let p=t.getElementsByTagName("link"),g=[];for(let t=0;t<p.length;t++){let m=p[t],v=m.getAttribute("rel");if(v&&v.toLowerCase().indexOf("icon")>-1){let t=m.getAttribute("href");if(t){if(-1===t.toLowerCase().indexOf("https:")&&-1===t.toLowerCase().indexOf("http:")&&0!==t.indexOf("//")){let p=a.protocol+"//"+a.host;if(0===t.indexOf("/"))p+=t;else{let g=a.pathname.split("/");g.pop();let m=g.join("/");p+=m+"/"+t}g.push(p)}else if(0===t.indexOf("//")){let p=a.protocol+t;g.push(p)}else g.push(t)}}}return g}function getWindowMetadataOfAny(...a){let p=t.getElementsByTagName("meta");for(let t=0;t<p.length;t++){let g=p[t],m=["itemprop","property","name"].map(t=>g.getAttribute(t)).filter(t=>!!t&&a.includes(t));if(m.length&&m){let t=g.getAttribute("content");if(t)return t}}return""}function getName(){let a=getWindowMetadataOfAny("name","og:site_name","og:title","twitter:title");return a||(a=t.title),a}function getDescription(){let t=getWindowMetadataOfAny("description","og:description","twitter:description","keywords");return t}let p=getName(),m=getDescription(),v=a.origin,_=getIcons();return{description:m,url:v,icons:_,name:p}}a.D=getWindowMetadata},56261:function(t,a){"use strict";a.byteLength=byteLength,a.toByteArray=toByteArray,a.fromByteArray=fromByteArray;for(var p=[],g=[],m="undefined"!=typeof Uint8Array?Uint8Array:Array,v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_=0,x=v.length;_<x;++_)p[_]=v[_],g[v.charCodeAt(_)]=_;function getLens(t){var a=t.length;if(a%4>0)throw Error("Invalid string. Length must be a multiple of 4");var p=t.indexOf("=");-1===p&&(p=a);var g=p===a?0:4-p%4;return[p,g]}function byteLength(t){var a=getLens(t),p=a[0],g=a[1];return(p+g)*3/4-g}function _byteLength(t,a,p){return(a+p)*3/4-p}function toByteArray(t){var a,p,v=getLens(t),_=v[0],x=v[1],T=new m(_byteLength(t,_,x)),W=0,z=x>0?_-4:_;for(p=0;p<z;p+=4)a=g[t.charCodeAt(p)]<<18|g[t.charCodeAt(p+1)]<<12|g[t.charCodeAt(p+2)]<<6|g[t.charCodeAt(p+3)],T[W++]=a>>16&255,T[W++]=a>>8&255,T[W++]=255&a;return 2===x&&(a=g[t.charCodeAt(p)]<<2|g[t.charCodeAt(p+1)]>>4,T[W++]=255&a),1===x&&(a=g[t.charCodeAt(p)]<<10|g[t.charCodeAt(p+1)]<<4|g[t.charCodeAt(p+2)]>>2,T[W++]=a>>8&255,T[W++]=255&a),T}function tripletToBase64(t){return p[t>>18&63]+p[t>>12&63]+p[t>>6&63]+p[63&t]}function encodeChunk(t,a,p){for(var g=[],m=a;m<p;m+=3)g.push(tripletToBase64((t[m]<<16&16711680)+(t[m+1]<<8&65280)+(255&t[m+2])));return g.join("")}function fromByteArray(t){for(var a,g=t.length,m=g%3,v=[],_=0,x=g-m;_<x;_+=16383)v.push(encodeChunk(t,_,_+16383>x?x:_+16383));return 1===m?v.push(p[(a=t[g-1])>>2]+p[a<<4&63]+"=="):2===m&&v.push(p[(a=(t[g-2]<<8)+t[g-1])>>10]+p[a>>4&63]+p[a<<2&63]+"="),v.join("")}g["-".charCodeAt(0)]=62,g["_".charCodeAt(0)]=63},16593:function(t,a,p){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let g=p(56261),m=p(46506),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function typedArraySupport(){try{let t=new Uint8Array(1),a={foo:function(){return 42}};return Object.setPrototypeOf(a,Uint8Array.prototype),Object.setPrototypeOf(t,a),42===t.foo()}catch(t){return!1}}function createBuffer(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');let a=new Uint8Array(t);return Object.setPrototypeOf(a,Buffer.prototype),a}function Buffer(t,a,p){if("number"==typeof t){if("string"==typeof a)throw TypeError('The "string" argument must be of type string. Received type number');return allocUnsafe(t)}return from(t,a,p)}function from(t,a,p){if("string"==typeof t)return fromString(t,a);if(ArrayBuffer.isView(t))return fromArrayView(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(isInstance(t,ArrayBuffer)||t&&isInstance(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(isInstance(t,SharedArrayBuffer)||t&&isInstance(t.buffer,SharedArrayBuffer)))return fromArrayBuffer(t,a,p);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let g=t.valueOf&&t.valueOf();if(null!=g&&g!==t)return Buffer.from(g,a,p);let m=fromObject(t);if(m)return m;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Buffer.from(t[Symbol.toPrimitive]("string"),a,p);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function assertSize(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function alloc(t,a,p){return(assertSize(t),t<=0)?createBuffer(t):void 0!==a?"string"==typeof p?createBuffer(t).fill(a,p):createBuffer(t).fill(a):createBuffer(t)}function allocUnsafe(t){return assertSize(t),createBuffer(t<0?0:0|checked(t))}function fromString(t,a){if(("string"!=typeof a||""===a)&&(a="utf8"),!Buffer.isEncoding(a))throw TypeError("Unknown encoding: "+a);let p=0|byteLength(t,a),g=createBuffer(p),m=g.write(t,a);return m!==p&&(g=g.slice(0,m)),g}function fromArrayLike(t){let a=t.length<0?0:0|checked(t.length),p=createBuffer(a);for(let g=0;g<a;g+=1)p[g]=255&t[g];return p}function fromArrayView(t){if(isInstance(t,Uint8Array)){let a=new Uint8Array(t);return fromArrayBuffer(a.buffer,a.byteOffset,a.byteLength)}return fromArrayLike(t)}function fromArrayBuffer(t,a,p){let g;if(a<0||t.byteLength<a)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<a+(p||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(g=void 0===a&&void 0===p?new Uint8Array(t):void 0===p?new Uint8Array(t,a):new Uint8Array(t,a,p),Buffer.prototype),g}function fromObject(t){if(Buffer.isBuffer(t)){let a=0|checked(t.length),p=createBuffer(a);return 0===p.length||t.copy(p,0,0,a),p}if(void 0!==t.length){var a;return"number"!=typeof t.length||(a=t.length)!=a?createBuffer(0):fromArrayLike(t)}if("Buffer"===t.type&&Array.isArray(t.data))return fromArrayLike(t.data)}function checked(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function SlowBuffer(t){return+t!=t&&(t=0),Buffer.alloc(+t)}function byteLength(t,a){if(Buffer.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||isInstance(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let p=t.length,g=arguments.length>2&&!0===arguments[2];if(!g&&0===p)return 0;let m=!1;for(;;)switch(a){case"ascii":case"latin1":case"binary":return p;case"utf8":case"utf-8":return utf8ToBytes(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*p;case"hex":return p>>>1;case"base64":return base64ToBytes(t).length;default:if(m)return g?-1:utf8ToBytes(t).length;a=(""+a).toLowerCase(),m=!0}}function slowToString(t,a,p){let g=!1;if((void 0===a||a<0)&&(a=0),a>this.length||((void 0===p||p>this.length)&&(p=this.length),p<=0||(p>>>=0)<=(a>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return hexSlice(this,a,p);case"utf8":case"utf-8":return utf8Slice(this,a,p);case"ascii":return asciiSlice(this,a,p);case"latin1":case"binary":return latin1Slice(this,a,p);case"base64":return base64Slice(this,a,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return utf16leSlice(this,a,p);default:if(g)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),g=!0}}function swap(t,a,p){let g=t[a];t[a]=t[p],t[p]=g}function bidirectionalIndexOf(t,a,p,g,m){var v;if(0===t.length)return -1;if("string"==typeof p?(g=p,p=0):p>2147483647?p=2147483647:p<-2147483648&&(p=-2147483648),(v=p=+p)!=v&&(p=m?0:t.length-1),p<0&&(p=t.length+p),p>=t.length){if(m)return -1;p=t.length-1}else if(p<0){if(!m)return -1;p=0}if("string"==typeof a&&(a=Buffer.from(a,g)),Buffer.isBuffer(a))return 0===a.length?-1:arrayIndexOf(t,a,p,g,m);if("number"==typeof a)return(a&=255,"function"==typeof Uint8Array.prototype.indexOf)?m?Uint8Array.prototype.indexOf.call(t,a,p):Uint8Array.prototype.lastIndexOf.call(t,a,p):arrayIndexOf(t,[a],p,g,m);throw TypeError("val must be string, number or Buffer")}function arrayIndexOf(t,a,p,g,m){let v,_=1,x=t.length,T=a.length;if(void 0!==g&&("ucs2"===(g=String(g).toLowerCase())||"ucs-2"===g||"utf16le"===g||"utf-16le"===g)){if(t.length<2||a.length<2)return -1;_=2,x/=2,T/=2,p/=2}function read(t,a){return 1===_?t[a]:t.readUInt16BE(a*_)}if(m){let g=-1;for(v=p;v<x;v++)if(read(t,v)===read(a,-1===g?0:v-g)){if(-1===g&&(g=v),v-g+1===T)return g*_}else -1!==g&&(v-=v-g),g=-1}else for(p+T>x&&(p=x-T),v=p;v>=0;v--){let p=!0;for(let g=0;g<T;g++)if(read(t,v+g)!==read(a,g)){p=!1;break}if(p)return v}return -1}function hexWrite(t,a,p,g){let m;p=Number(p)||0;let v=t.length-p;g?(g=Number(g))>v&&(g=v):g=v;let _=a.length;for(g>_/2&&(g=_/2),m=0;m<g;++m){let g=parseInt(a.substr(2*m,2),16);if(g!=g)break;t[p+m]=g}return m}function utf8Write(t,a,p,g){return blitBuffer(utf8ToBytes(a,t.length-p),t,p,g)}function asciiWrite(t,a,p,g){return blitBuffer(asciiToBytes(a),t,p,g)}function base64Write(t,a,p,g){return blitBuffer(base64ToBytes(a),t,p,g)}function ucs2Write(t,a,p,g){return blitBuffer(utf16leToBytes(a,t.length-p),t,p,g)}function base64Slice(t,a,p){return 0===a&&p===t.length?g.fromByteArray(t):g.fromByteArray(t.slice(a,p))}function utf8Slice(t,a,p){p=Math.min(t.length,p);let g=[],m=a;for(;m<p;){let a=t[m],v=null,_=a>239?4:a>223?3:a>191?2:1;if(m+_<=p){let p,g,x,T;switch(_){case 1:a<128&&(v=a);break;case 2:(192&(p=t[m+1]))==128&&(T=(31&a)<<6|63&p)>127&&(v=T);break;case 3:p=t[m+1],g=t[m+2],(192&p)==128&&(192&g)==128&&(T=(15&a)<<12|(63&p)<<6|63&g)>2047&&(T<55296||T>57343)&&(v=T);break;case 4:p=t[m+1],g=t[m+2],x=t[m+3],(192&p)==128&&(192&g)==128&&(192&x)==128&&(T=(15&a)<<18|(63&p)<<12|(63&g)<<6|63&x)>65535&&T<1114112&&(v=T)}}null===v?(v=65533,_=1):v>65535&&(v-=65536,g.push(v>>>10&1023|55296),v=56320|1023&v),g.push(v),m+=_}return decodeCodePointsArray(g)}function decodeCodePointsArray(t){let a=t.length;if(a<=4096)return String.fromCharCode.apply(String,t);let p="",g=0;for(;g<a;)p+=String.fromCharCode.apply(String,t.slice(g,g+=4096));return p}function asciiSlice(t,a,p){let g="";p=Math.min(t.length,p);for(let m=a;m<p;++m)g+=String.fromCharCode(127&t[m]);return g}function latin1Slice(t,a,p){let g="";p=Math.min(t.length,p);for(let m=a;m<p;++m)g+=String.fromCharCode(t[m]);return g}function hexSlice(t,a,p){let g=t.length;(!a||a<0)&&(a=0),(!p||p<0||p>g)&&(p=g);let m="";for(let g=a;g<p;++g)m+=T[t[g]];return m}function utf16leSlice(t,a,p){let g=t.slice(a,p),m="";for(let t=0;t<g.length-1;t+=2)m+=String.fromCharCode(g[t]+256*g[t+1]);return m}function checkOffset(t,a,p){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+a>p)throw RangeError("Trying to access beyond buffer length")}function checkInt(t,a,p,g,m,v){if(!Buffer.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(a>m||a<v)throw RangeError('"value" argument is out of bounds');if(p+g>t.length)throw RangeError("Index out of range")}function wrtBigUInt64LE(t,a,p,g,m){checkIntBI(a,g,m,t,p,7);let v=Number(a&BigInt(4294967295));t[p++]=v,v>>=8,t[p++]=v,v>>=8,t[p++]=v,v>>=8,t[p++]=v;let _=Number(a>>BigInt(32)&BigInt(4294967295));return t[p++]=_,_>>=8,t[p++]=_,_>>=8,t[p++]=_,_>>=8,t[p++]=_,p}function wrtBigUInt64BE(t,a,p,g,m){checkIntBI(a,g,m,t,p,7);let v=Number(a&BigInt(4294967295));t[p+7]=v,v>>=8,t[p+6]=v,v>>=8,t[p+5]=v,v>>=8,t[p+4]=v;let _=Number(a>>BigInt(32)&BigInt(4294967295));return t[p+3]=_,_>>=8,t[p+2]=_,_>>=8,t[p+1]=_,_>>=8,t[p]=_,p+8}function checkIEEE754(t,a,p,g,m,v){if(p+g>t.length||p<0)throw RangeError("Index out of range")}function writeFloat(t,a,p,g,v){return a=+a,p>>>=0,v||checkIEEE754(t,a,p,4,34028234663852886e22,-34028234663852886e22),m.write(t,a,p,g,23,4),p+4}function writeDouble(t,a,p,g,v){return a=+a,p>>>=0,v||checkIEEE754(t,a,p,8,17976931348623157e292,-17976931348623157e292),m.write(t,a,p,g,52,8),p+8}a.Buffer=Buffer,a.SlowBuffer=SlowBuffer,a.INSPECT_MAX_BYTES=50,a.kMaxLength=2147483647,Buffer.TYPED_ARRAY_SUPPORT=typedArraySupport(),Buffer.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Buffer.prototype,"parent",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.buffer}}),Object.defineProperty(Buffer.prototype,"offset",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.byteOffset}}),Buffer.poolSize=8192,Buffer.from=function(t,a,p){return from(t,a,p)},Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype),Object.setPrototypeOf(Buffer,Uint8Array),Buffer.alloc=function(t,a,p){return alloc(t,a,p)},Buffer.allocUnsafe=function(t){return allocUnsafe(t)},Buffer.allocUnsafeSlow=function(t){return allocUnsafe(t)},Buffer.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Buffer.prototype},Buffer.compare=function(t,a){if(isInstance(t,Uint8Array)&&(t=Buffer.from(t,t.offset,t.byteLength)),isInstance(a,Uint8Array)&&(a=Buffer.from(a,a.offset,a.byteLength)),!Buffer.isBuffer(t)||!Buffer.isBuffer(a))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===a)return 0;let p=t.length,g=a.length;for(let m=0,v=Math.min(p,g);m<v;++m)if(t[m]!==a[m]){p=t[m],g=a[m];break}return p<g?-1:g<p?1:0},Buffer.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(t,a){let p;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Buffer.alloc(0);if(void 0===a)for(p=0,a=0;p<t.length;++p)a+=t[p].length;let g=Buffer.allocUnsafe(a),m=0;for(p=0;p<t.length;++p){let a=t[p];if(isInstance(a,Uint8Array))m+a.length>g.length?(Buffer.isBuffer(a)||(a=Buffer.from(a)),a.copy(g,m)):Uint8Array.prototype.set.call(g,a,m);else if(Buffer.isBuffer(a))a.copy(g,m);else throw TypeError('"list" argument must be an Array of Buffers');m+=a.length}return g},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let a=0;a<t;a+=2)swap(this,a,a+1);return this},Buffer.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let a=0;a<t;a+=4)swap(this,a,a+3),swap(this,a+1,a+2);return this},Buffer.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let a=0;a<t;a+=8)swap(this,a,a+7),swap(this,a+1,a+6),swap(this,a+2,a+5),swap(this,a+3,a+4);return this},Buffer.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?utf8Slice(this,0,t):slowToString.apply(this,arguments)},Buffer.prototype.toLocaleString=Buffer.prototype.toString,Buffer.prototype.equals=function(t){if(!Buffer.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===Buffer.compare(this,t)},Buffer.prototype.inspect=function(){let t="",p=a.INSPECT_MAX_BYTES;return t=this.toString("hex",0,p).replace(/(.{2})/g,"$1 ").trim(),this.length>p&&(t+=" ... "),"<Buffer "+t+">"},v&&(Buffer.prototype[v]=Buffer.prototype.inspect),Buffer.prototype.compare=function(t,a,p,g,m){if(isInstance(t,Uint8Array)&&(t=Buffer.from(t,t.offset,t.byteLength)),!Buffer.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===a&&(a=0),void 0===p&&(p=t?t.length:0),void 0===g&&(g=0),void 0===m&&(m=this.length),a<0||p>t.length||g<0||m>this.length)throw RangeError("out of range index");if(g>=m&&a>=p)return 0;if(g>=m)return -1;if(a>=p)return 1;if(a>>>=0,p>>>=0,g>>>=0,m>>>=0,this===t)return 0;let v=m-g,_=p-a,x=Math.min(v,_),T=this.slice(g,m),W=t.slice(a,p);for(let t=0;t<x;++t)if(T[t]!==W[t]){v=T[t],_=W[t];break}return v<_?-1:_<v?1:0},Buffer.prototype.includes=function(t,a,p){return -1!==this.indexOf(t,a,p)},Buffer.prototype.indexOf=function(t,a,p){return bidirectionalIndexOf(this,t,a,p,!0)},Buffer.prototype.lastIndexOf=function(t,a,p){return bidirectionalIndexOf(this,t,a,p,!1)},Buffer.prototype.write=function(t,a,p,g){if(void 0===a)g="utf8",p=this.length,a=0;else if(void 0===p&&"string"==typeof a)g=a,p=this.length,a=0;else if(isFinite(a))a>>>=0,isFinite(p)?(p>>>=0,void 0===g&&(g="utf8")):(g=p,p=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let m=this.length-a;if((void 0===p||p>m)&&(p=m),t.length>0&&(p<0||a<0)||a>this.length)throw RangeError("Attempt to write outside buffer bounds");g||(g="utf8");let v=!1;for(;;)switch(g){case"hex":return hexWrite(this,t,a,p);case"utf8":case"utf-8":return utf8Write(this,t,a,p);case"ascii":case"latin1":case"binary":return asciiWrite(this,t,a,p);case"base64":return base64Write(this,t,a,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ucs2Write(this,t,a,p);default:if(v)throw TypeError("Unknown encoding: "+g);g=(""+g).toLowerCase(),v=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.slice=function(t,a){let p=this.length;t=~~t,a=void 0===a?p:~~a,t<0?(t+=p)<0&&(t=0):t>p&&(t=p),a<0?(a+=p)<0&&(a=0):a>p&&(a=p),a<t&&(a=t);let g=this.subarray(t,a);return Object.setPrototypeOf(g,Buffer.prototype),g},Buffer.prototype.readUintLE=Buffer.prototype.readUIntLE=function(t,a,p){t>>>=0,a>>>=0,p||checkOffset(t,a,this.length);let g=this[t],m=1,v=0;for(;++v<a&&(m*=256);)g+=this[t+v]*m;return g},Buffer.prototype.readUintBE=Buffer.prototype.readUIntBE=function(t,a,p){t>>>=0,a>>>=0,p||checkOffset(t,a,this.length);let g=this[t+--a],m=1;for(;a>0&&(m*=256);)g+=this[t+--a]*m;return g},Buffer.prototype.readUint8=Buffer.prototype.readUInt8=function(t,a){return t>>>=0,a||checkOffset(t,1,this.length),this[t]},Buffer.prototype.readUint16LE=Buffer.prototype.readUInt16LE=function(t,a){return t>>>=0,a||checkOffset(t,2,this.length),this[t]|this[t+1]<<8},Buffer.prototype.readUint16BE=Buffer.prototype.readUInt16BE=function(t,a){return t>>>=0,a||checkOffset(t,2,this.length),this[t]<<8|this[t+1]},Buffer.prototype.readUint32LE=Buffer.prototype.readUInt32LE=function(t,a){return t>>>=0,a||checkOffset(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Buffer.prototype.readUint32BE=Buffer.prototype.readUInt32BE=function(t,a){return t>>>=0,a||checkOffset(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Buffer.prototype.readBigUInt64LE=defineBigIntMethod(function(t){validateNumber(t>>>=0,"offset");let a=this[t],p=this[t+7];(void 0===a||void 0===p)&&boundsError(t,this.length-8);let g=a+256*this[++t]+65536*this[++t]+16777216*this[++t],m=this[++t]+256*this[++t]+65536*this[++t]+16777216*p;return BigInt(g)+(BigInt(m)<<BigInt(32))}),Buffer.prototype.readBigUInt64BE=defineBigIntMethod(function(t){validateNumber(t>>>=0,"offset");let a=this[t],p=this[t+7];(void 0===a||void 0===p)&&boundsError(t,this.length-8);let g=16777216*a+65536*this[++t]+256*this[++t]+this[++t],m=16777216*this[++t]+65536*this[++t]+256*this[++t]+p;return(BigInt(g)<<BigInt(32))+BigInt(m)}),Buffer.prototype.readIntLE=function(t,a,p){t>>>=0,a>>>=0,p||checkOffset(t,a,this.length);let g=this[t],m=1,v=0;for(;++v<a&&(m*=256);)g+=this[t+v]*m;return g>=(m*=128)&&(g-=Math.pow(2,8*a)),g},Buffer.prototype.readIntBE=function(t,a,p){t>>>=0,a>>>=0,p||checkOffset(t,a,this.length);let g=a,m=1,v=this[t+--g];for(;g>0&&(m*=256);)v+=this[t+--g]*m;return v>=(m*=128)&&(v-=Math.pow(2,8*a)),v},Buffer.prototype.readInt8=function(t,a){return(t>>>=0,a||checkOffset(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},Buffer.prototype.readInt16LE=function(t,a){t>>>=0,a||checkOffset(t,2,this.length);let p=this[t]|this[t+1]<<8;return 32768&p?4294901760|p:p},Buffer.prototype.readInt16BE=function(t,a){t>>>=0,a||checkOffset(t,2,this.length);let p=this[t+1]|this[t]<<8;return 32768&p?4294901760|p:p},Buffer.prototype.readInt32LE=function(t,a){return t>>>=0,a||checkOffset(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Buffer.prototype.readInt32BE=function(t,a){return t>>>=0,a||checkOffset(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Buffer.prototype.readBigInt64LE=defineBigIntMethod(function(t){validateNumber(t>>>=0,"offset");let a=this[t],p=this[t+7];(void 0===a||void 0===p)&&boundsError(t,this.length-8);let g=this[t+4]+256*this[t+5]+65536*this[t+6]+(p<<24);return(BigInt(g)<<BigInt(32))+BigInt(a+256*this[++t]+65536*this[++t]+16777216*this[++t])}),Buffer.prototype.readBigInt64BE=defineBigIntMethod(function(t){validateNumber(t>>>=0,"offset");let a=this[t],p=this[t+7];(void 0===a||void 0===p)&&boundsError(t,this.length-8);let g=(a<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(g)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+p)}),Buffer.prototype.readFloatLE=function(t,a){return t>>>=0,a||checkOffset(t,4,this.length),m.read(this,t,!0,23,4)},Buffer.prototype.readFloatBE=function(t,a){return t>>>=0,a||checkOffset(t,4,this.length),m.read(this,t,!1,23,4)},Buffer.prototype.readDoubleLE=function(t,a){return t>>>=0,a||checkOffset(t,8,this.length),m.read(this,t,!0,52,8)},Buffer.prototype.readDoubleBE=function(t,a){return t>>>=0,a||checkOffset(t,8,this.length),m.read(this,t,!1,52,8)},Buffer.prototype.writeUintLE=Buffer.prototype.writeUIntLE=function(t,a,p,g){if(t=+t,a>>>=0,p>>>=0,!g){let g=Math.pow(2,8*p)-1;checkInt(this,t,a,p,g,0)}let m=1,v=0;for(this[a]=255&t;++v<p&&(m*=256);)this[a+v]=t/m&255;return a+p},Buffer.prototype.writeUintBE=Buffer.prototype.writeUIntBE=function(t,a,p,g){if(t=+t,a>>>=0,p>>>=0,!g){let g=Math.pow(2,8*p)-1;checkInt(this,t,a,p,g,0)}let m=p-1,v=1;for(this[a+m]=255&t;--m>=0&&(v*=256);)this[a+m]=t/v&255;return a+p},Buffer.prototype.writeUint8=Buffer.prototype.writeUInt8=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,1,255,0),this[a]=255&t,a+1},Buffer.prototype.writeUint16LE=Buffer.prototype.writeUInt16LE=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,2,65535,0),this[a]=255&t,this[a+1]=t>>>8,a+2},Buffer.prototype.writeUint16BE=Buffer.prototype.writeUInt16BE=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,2,65535,0),this[a]=t>>>8,this[a+1]=255&t,a+2},Buffer.prototype.writeUint32LE=Buffer.prototype.writeUInt32LE=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,4,4294967295,0),this[a+3]=t>>>24,this[a+2]=t>>>16,this[a+1]=t>>>8,this[a]=255&t,a+4},Buffer.prototype.writeUint32BE=Buffer.prototype.writeUInt32BE=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,4,4294967295,0),this[a]=t>>>24,this[a+1]=t>>>16,this[a+2]=t>>>8,this[a+3]=255&t,a+4},Buffer.prototype.writeBigUInt64LE=defineBigIntMethod(function(t,a=0){return wrtBigUInt64LE(this,t,a,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeBigUInt64BE=defineBigIntMethod(function(t,a=0){return wrtBigUInt64BE(this,t,a,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeIntLE=function(t,a,p,g){if(t=+t,a>>>=0,!g){let g=Math.pow(2,8*p-1);checkInt(this,t,a,p,g-1,-g)}let m=0,v=1,_=0;for(this[a]=255&t;++m<p&&(v*=256);)t<0&&0===_&&0!==this[a+m-1]&&(_=1),this[a+m]=(t/v>>0)-_&255;return a+p},Buffer.prototype.writeIntBE=function(t,a,p,g){if(t=+t,a>>>=0,!g){let g=Math.pow(2,8*p-1);checkInt(this,t,a,p,g-1,-g)}let m=p-1,v=1,_=0;for(this[a+m]=255&t;--m>=0&&(v*=256);)t<0&&0===_&&0!==this[a+m+1]&&(_=1),this[a+m]=(t/v>>0)-_&255;return a+p},Buffer.prototype.writeInt8=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,1,127,-128),t<0&&(t=255+t+1),this[a]=255&t,a+1},Buffer.prototype.writeInt16LE=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,2,32767,-32768),this[a]=255&t,this[a+1]=t>>>8,a+2},Buffer.prototype.writeInt16BE=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,2,32767,-32768),this[a]=t>>>8,this[a+1]=255&t,a+2},Buffer.prototype.writeInt32LE=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,4,2147483647,-2147483648),this[a]=255&t,this[a+1]=t>>>8,this[a+2]=t>>>16,this[a+3]=t>>>24,a+4},Buffer.prototype.writeInt32BE=function(t,a,p){return t=+t,a>>>=0,p||checkInt(this,t,a,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[a]=t>>>24,this[a+1]=t>>>16,this[a+2]=t>>>8,this[a+3]=255&t,a+4},Buffer.prototype.writeBigInt64LE=defineBigIntMethod(function(t,a=0){return wrtBigUInt64LE(this,t,a,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeBigInt64BE=defineBigIntMethod(function(t,a=0){return wrtBigUInt64BE(this,t,a,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeFloatLE=function(t,a,p){return writeFloat(this,t,a,!0,p)},Buffer.prototype.writeFloatBE=function(t,a,p){return writeFloat(this,t,a,!1,p)},Buffer.prototype.writeDoubleLE=function(t,a,p){return writeDouble(this,t,a,!0,p)},Buffer.prototype.writeDoubleBE=function(t,a,p){return writeDouble(this,t,a,!1,p)},Buffer.prototype.copy=function(t,a,p,g){if(!Buffer.isBuffer(t))throw TypeError("argument should be a Buffer");if(p||(p=0),g||0===g||(g=this.length),a>=t.length&&(a=t.length),a||(a=0),g>0&&g<p&&(g=p),g===p||0===t.length||0===this.length)return 0;if(a<0)throw RangeError("targetStart out of bounds");if(p<0||p>=this.length)throw RangeError("Index out of range");if(g<0)throw RangeError("sourceEnd out of bounds");g>this.length&&(g=this.length),t.length-a<g-p&&(g=t.length-a+p);let m=g-p;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(a,p,g):Uint8Array.prototype.set.call(t,this.subarray(p,g),a),m},Buffer.prototype.fill=function(t,a,p,g){let m;if("string"==typeof t){if("string"==typeof a?(g=a,a=0,p=this.length):"string"==typeof p&&(g=p,p=this.length),void 0!==g&&"string"!=typeof g)throw TypeError("encoding must be a string");if("string"==typeof g&&!Buffer.isEncoding(g))throw TypeError("Unknown encoding: "+g);if(1===t.length){let a=t.charCodeAt(0);("utf8"===g&&a<128||"latin1"===g)&&(t=a)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(a<0||this.length<a||this.length<p)throw RangeError("Out of range index");if(p<=a)return this;if(a>>>=0,p=void 0===p?this.length:p>>>0,t||(t=0),"number"==typeof t)for(m=a;m<p;++m)this[m]=t;else{let v=Buffer.isBuffer(t)?t:Buffer.from(t,g),_=v.length;if(0===_)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(m=0;m<p-a;++m)this[m+a]=v[m%_]}return this};let _={};function E(t,a,p){_[t]=class extends p{constructor(){super(),Object.defineProperty(this,"message",{value:a.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function addNumericalSeparator(t){let a="",p=t.length,g="-"===t[0]?1:0;for(;p>=g+4;p-=3)a=`_${t.slice(p-3,p)}${a}`;return`${t.slice(0,p)}${a}`}function checkBounds(t,a,p){validateNumber(a,"offset"),(void 0===t[a]||void 0===t[a+p])&&boundsError(a,t.length-(p+1))}function checkIntBI(t,a,p,g,m,v){if(t>p||t<a){let g;let m="bigint"==typeof a?"n":"";throw g=v>3?0===a||a===BigInt(0)?`>= 0${m} and < 2${m} ** ${(v+1)*8}${m}`:`>= -(2${m} ** ${(v+1)*8-1}${m}) and < 2 ** ${(v+1)*8-1}${m}`:`>= ${a}${m} and <= ${p}${m}`,new _.ERR_OUT_OF_RANGE("value",g,t)}checkBounds(g,m,v)}function validateNumber(t,a){if("number"!=typeof t)throw new _.ERR_INVALID_ARG_TYPE(a,"number",t)}function boundsError(t,a,p){if(Math.floor(t)!==t)throw validateNumber(t,p),new _.ERR_OUT_OF_RANGE(p||"offset","an integer",t);if(a<0)throw new _.ERR_BUFFER_OUT_OF_BOUNDS;throw new _.ERR_OUT_OF_RANGE(p||"offset",`>= ${p?1:0} and <= ${a}`,t)}E("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),E("ERR_INVALID_ARG_TYPE",function(t,a){return`The "${t}" argument must be of type number. Received type ${typeof a}`},TypeError),E("ERR_OUT_OF_RANGE",function(t,a,p){let g=`The value of "${t}" is out of range.`,m=p;return Number.isInteger(p)&&Math.abs(p)>4294967296?m=addNumericalSeparator(String(p)):"bigint"==typeof p&&(m=String(p),(p>BigInt(2)**BigInt(32)||p<-(BigInt(2)**BigInt(32)))&&(m=addNumericalSeparator(m)),m+="n"),g+=` It must be ${a}. Received ${m}`},RangeError);let x=/[^+/0-9A-Za-z-_]/g;function base64clean(t){if((t=(t=t.split("=")[0]).trim().replace(x,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}function utf8ToBytes(t,a){let p;a=a||1/0;let g=t.length,m=null,v=[];for(let _=0;_<g;++_){if((p=t.charCodeAt(_))>55295&&p<57344){if(!m){if(p>56319||_+1===g){(a-=3)>-1&&v.push(239,191,189);continue}m=p;continue}if(p<56320){(a-=3)>-1&&v.push(239,191,189),m=p;continue}p=(m-55296<<10|p-56320)+65536}else m&&(a-=3)>-1&&v.push(239,191,189);if(m=null,p<128){if((a-=1)<0)break;v.push(p)}else if(p<2048){if((a-=2)<0)break;v.push(p>>6|192,63&p|128)}else if(p<65536){if((a-=3)<0)break;v.push(p>>12|224,p>>6&63|128,63&p|128)}else if(p<1114112){if((a-=4)<0)break;v.push(p>>18|240,p>>12&63|128,p>>6&63|128,63&p|128)}else throw Error("Invalid code point")}return v}function asciiToBytes(t){let a=[];for(let p=0;p<t.length;++p)a.push(255&t.charCodeAt(p));return a}function utf16leToBytes(t,a){let p,g;let m=[];for(let v=0;v<t.length&&!((a-=2)<0);++v)g=(p=t.charCodeAt(v))>>8,m.push(p%256),m.push(g);return m}function base64ToBytes(t){return g.toByteArray(base64clean(t))}function blitBuffer(t,a,p,g){let m;for(m=0;m<g&&!(m+p>=a.length)&&!(m>=t.length);++m)a[m+p]=t[m];return m}function isInstance(t,a){return t instanceof a||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===a.name}let T=function(){let t="0123456789abcdef",a=Array(256);for(let p=0;p<16;++p){let g=16*p;for(let m=0;m<16;++m)a[g+m]=t[p]+t[m]}return a}();function defineBigIntMethod(t){return"undefined"==typeof BigInt?BufferBigIntNotDefined:t}function BufferBigIntNotDefined(){throw Error("BigInt not supported")}},3126:function(t){"use strict";var a="%[a-f0-9]{2}",p=RegExp("("+a+")|([^%]+?)","gi"),g=RegExp("("+a+")+","gi");function decodeComponents(t,a){try{return[decodeURIComponent(t.join(""))]}catch(t){}if(1===t.length)return t;a=a||1;var p=t.slice(0,a),g=t.slice(a);return Array.prototype.concat.call([],decodeComponents(p),decodeComponents(g))}function decode(t){try{return decodeURIComponent(t)}catch(m){for(var a=t.match(p)||[],g=1;g<a.length;g++)a=(t=decodeComponents(a,g).join("")).match(p)||[];return t}}function customDecodeURIComponent(t){for(var a={"%FE%FF":"��","%FF%FE":"��"},p=g.exec(t);p;){try{a[p[0]]=decodeURIComponent(p[0])}catch(t){var m=decode(p[0]);m!==p[0]&&(a[p[0]]=m)}p=g.exec(t)}a["%C2"]="�";for(var v=Object.keys(a),_=0;_<v.length;_++){var x=v[_];t=t.replace(RegExp(x,"g"),a[x])}return t}t.exports=function(t){if("string"!=typeof t)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(a){return customDecodeURIComponent(t)}}},88451:function(t){"use strict";var a={single_source_shortest_paths:function(t,p,g){var m,v,_,x,T,W,z,F={},Z={};Z[p]=0;var Y=a.PriorityQueue.make();for(Y.push(p,0);!Y.empty();)for(_ in v=(m=Y.pop()).value,x=m.cost,T=t[v]||{})T.hasOwnProperty(_)&&(W=x+T[_],z=Z[_],(void 0===Z[_]||z>W)&&(Z[_]=W,Y.push(_,W),F[_]=v));if(void 0!==g&&void 0===Z[g])throw Error(["Could not find a path from ",p," to ",g,"."].join(""));return F},extract_shortest_path_from_predecessor_list:function(t,a){for(var p=[],g=a;g;)p.push(g),t[g],g=t[g];return p.reverse(),p},find_path:function(t,p,g){var m=a.single_source_shortest_paths(t,p,g);return a.extract_shortest_path_from_predecessor_list(m,g)},PriorityQueue:{make:function(t){var p,g=a.PriorityQueue,m={};for(p in t=t||{},g)g.hasOwnProperty(p)&&(m[p]=g[p]);return m.queue=[],m.sorter=t.sorter||g.default_sorter,m},default_sorter:function(t,a){return t.cost-a.cost},push:function(t,a){this.queue.push({value:t,cost:a}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=a},8557:function(t){"use strict";t.exports=function(t){for(var a=[],p=t.length,g=0;g<p;g++){var m=t.charCodeAt(g);if(m>=55296&&m<=56319&&p>g+1){var v=t.charCodeAt(g+1);v>=56320&&v<=57343&&(m=(m-55296)*1024+v-56320+65536,g+=1)}if(m<128){a.push(m);continue}if(m<2048){a.push(m>>6|192),a.push(63&m|128);continue}if(m<55296||m>=57344&&m<65536){a.push(m>>12|224),a.push(m>>6&63|128),a.push(63&m|128);continue}if(m>=65536&&m<=1114111){a.push(m>>18|240),a.push(m>>12&63|128),a.push(m>>6&63|128),a.push(63&m|128);continue}a.push(239,191,189)}return new Uint8Array(a).buffer}},85283:function(t){"use strict";t.exports=function(t,a){for(var p={},g=Object.keys(t),m=Array.isArray(a),v=0;v<g.length;v++){var _=g[v],x=t[_];(m?-1!==a.indexOf(_):a(_,x,t))&&(p[_]=x)}return p}},46506:function(t,a){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */a.read=function(t,a,p,g,m){var v,_,x=8*m-g-1,T=(1<<x)-1,W=T>>1,z=-7,F=p?m-1:0,Z=p?-1:1,Y=t[a+F];for(F+=Z,v=Y&(1<<-z)-1,Y>>=-z,z+=x;z>0;v=256*v+t[a+F],F+=Z,z-=8);for(_=v&(1<<-z)-1,v>>=-z,z+=g;z>0;_=256*_+t[a+F],F+=Z,z-=8);if(0===v)v=1-W;else{if(v===T)return _?NaN:(Y?-1:1)*(1/0);_+=Math.pow(2,g),v-=W}return(Y?-1:1)*_*Math.pow(2,v-g)},a.write=function(t,a,p,g,m,v){var _,x,T,W=8*v-m-1,z=(1<<W)-1,F=z>>1,Z=23===m?5960464477539062e-23:0,Y=g?0:v-1,X=g?1:-1,Q=a<0||0===a&&1/a<0?1:0;for(isNaN(a=Math.abs(a))||a===1/0?(x=isNaN(a)?1:0,_=z):(_=Math.floor(Math.log(a)/Math.LN2),a*(T=Math.pow(2,-_))<1&&(_--,T*=2),_+F>=1?a+=Z/T:a+=Z*Math.pow(2,1-F),a*T>=2&&(_++,T/=2),_+F>=z?(x=0,_=z):_+F>=1?(x=(a*T-1)*Math.pow(2,m),_+=F):(x=a*Math.pow(2,F-1)*Math.pow(2,m),_=0));m>=8;t[p+Y]=255&x,Y+=X,x/=256,m-=8);for(_=_<<m|x,W+=m;W>0;t[p+Y]=255&_,Y+=X,_/=256,W-=8);t[p+Y-X]|=128*Q}},82591:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"addLocale",{enumerable:!0,get:function(){return addLocale}}),p(91850);let addLocale=function(t){for(var a=arguments.length,p=Array(a>1?a-1:0),g=1;g<a;g++)p[g-1]=arguments[g];return t};("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},82717:function(t,a,p){"use strict";function getDomainLocale(t,a,p,g){return!1}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),p(91850),("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},92054:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return eo}});let g=p(32582),m=g._(p(58078)),v=p(2282),_=p(51596),x=p(31532),T=p(98999),W=p(82591),z=p(84434),F=p(52192),Z=p(75480),Y=p(82717),X=p(76403),Q=p(29350),J=new Set;function prefetch(t,a,p,g,m,v){if(!v&&!(0,_.isLocalURL)(a))return;if(!g.bypassPrefetchedCheck){let m=void 0!==g.locale?g.locale:"locale"in t?t.locale:void 0,v=a+"%"+p+"%"+m;if(J.has(v))return;J.add(v)}let x=v?t.prefetch(a,m):t.prefetch(a,p,g);Promise.resolve(x).catch(t=>{})}function isModifiedEvent(t){let a=t.currentTarget,p=a.getAttribute("target");return p&&"_self"!==p||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}function linkClicked(t,a,p,g,v,x,T,W,z,F){let{nodeName:Z}=t.currentTarget,Y="A"===Z.toUpperCase();if(Y&&(isModifiedEvent(t)||!z&&!(0,_.isLocalURL)(p)))return;t.preventDefault();let navigate=()=>{let t=null==T||T;"beforePopState"in a?a[v?"replace":"push"](p,g,{shallow:x,locale:W,scroll:t}):a[v?"replace":"push"](g||p,{forceOptimisticNavigation:!F,scroll:t})};z?m.default.startTransition(navigate):navigate()}function formatStringOrUrl(t){return"string"==typeof t?t:(0,x.formatUrl)(t)}let ei=m.default.forwardRef(function(t,a){let p,g;let{href:_,as:x,children:J,prefetch:ei=null,passHref:eo,replace:ea,shallow:es,scroll:el,locale:ec,onClick:eu,onMouseEnter:ed,onTouchStart:eh,legacyBehavior:ef=!1,...ep}=t;p=J,ef&&("string"==typeof p||"number"==typeof p)&&(p=m.default.createElement("a",null,p));let eg=m.default.useContext(z.RouterContext),ew=m.default.useContext(F.AppRouterContext),em=null!=eg?eg:ew,eb=!eg,ey=!1!==ei,ev=null===ei?Q.PrefetchKind.AUTO:Q.PrefetchKind.FULL,{href:e_,as:eC}=m.default.useMemo(()=>{if(!eg){let t=formatStringOrUrl(_);return{href:t,as:x?formatStringOrUrl(x):t}}let[t,a]=(0,v.resolveHref)(eg,_,!0);return{href:t,as:x?(0,v.resolveHref)(eg,x):a||t}},[eg,_,x]),ex=m.default.useRef(e_),eE=m.default.useRef(eC);ef&&(g=m.default.Children.only(p));let ek=ef?g&&"object"==typeof g&&g.ref:a,[eD,eS,eO]=(0,Z.useIntersection)({rootMargin:"200px"}),eA=m.default.useCallback(t=>{(eE.current!==eC||ex.current!==e_)&&(eO(),eE.current=eC,ex.current=e_),eD(t),ek&&("function"==typeof ek?ek(t):"object"==typeof ek&&(ek.current=t))},[eC,ek,e_,eO,eD]);m.default.useEffect(()=>{em&&eS&&ey&&prefetch(em,e_,eC,{locale:ec},{kind:ev},eb)},[eC,e_,eS,ec,ey,null==eg?void 0:eg.locale,em,eb,ev]);let eP={ref:eA,onClick(t){ef||"function"!=typeof eu||eu(t),ef&&g.props&&"function"==typeof g.props.onClick&&g.props.onClick(t),em&&!t.defaultPrevented&&linkClicked(t,em,e_,eC,ea,es,el,ec,eb,ey)},onMouseEnter(t){ef||"function"!=typeof ed||ed(t),ef&&g.props&&"function"==typeof g.props.onMouseEnter&&g.props.onMouseEnter(t),em&&(ey||!eb)&&prefetch(em,e_,eC,{locale:ec,priority:!0,bypassPrefetchedCheck:!0},{kind:ev},eb)},onTouchStart(t){ef||"function"!=typeof eh||eh(t),ef&&g.props&&"function"==typeof g.props.onTouchStart&&g.props.onTouchStart(t),em&&(ey||!eb)&&prefetch(em,e_,eC,{locale:ec,priority:!0,bypassPrefetchedCheck:!0},{kind:ev},eb)}};if((0,T.isAbsoluteUrl)(eC))eP.href=eC;else if(!ef||eo||"a"===g.type&&!("href"in g.props)){let t=void 0!==ec?ec:null==eg?void 0:eg.locale,a=(null==eg?void 0:eg.isLocaleDomain)&&(0,Y.getDomainLocale)(eC,t,null==eg?void 0:eg.locales,null==eg?void 0:eg.domainLocales);eP.href=a||(0,X.addBasePath)((0,W.addLocale)(eC,t,null==eg?void 0:eg.defaultLocale))}return ef?m.default.cloneElement(g,eP):m.default.createElement("a",{...ep,...eP},p)}),eo=ei;("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},5174:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(t,a){for(var p in a)Object.defineProperty(t,p,{enumerable:!0,get:a[p]})}(a,{requestIdleCallback:function(){return p},cancelIdleCallback:function(){return g}});let p="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(t){let a=Date.now();return self.setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-a))}})},1)},g="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(t){return clearTimeout(t)};("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},2282:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"resolveHref",{enumerable:!0,get:function(){return resolveHref}});let g=p(52497),m=p(31532),v=p(76303),_=p(98999),x=p(91850),T=p(51596),W=p(15693),z=p(4294);function resolveHref(t,a,p){let F;let Z="string"==typeof a?a:(0,m.formatWithValidation)(a),Y=Z.match(/^[a-zA-Z]{1,}:\/\//),X=Y?Z.slice(Y[0].length):Z,Q=X.split("?",1);if((Q[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+Z+"' passed to next/router in page: '"+t.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let a=(0,_.normalizeRepeatedSlashes)(X);Z=(Y?Y[0]:"")+a}if(!(0,T.isLocalURL)(Z))return p?[Z]:Z;try{F=new URL(Z.startsWith("#")?t.asPath:t.pathname,"http://n")}catch(t){F=new URL("/","http://n")}try{let t=new URL(Z,F);t.pathname=(0,x.normalizePathTrailingSlash)(t.pathname);let a="";if((0,W.isDynamicRoute)(t.pathname)&&t.searchParams&&p){let p=(0,g.searchParamsToUrlQuery)(t.searchParams),{result:_,params:x}=(0,z.interpolateAs)(t.pathname,t.pathname,p);_&&(a=(0,m.formatWithValidation)({pathname:_,hash:t.hash,query:(0,v.omit)(p,x)}))}let _=t.origin===F.origin?t.href.slice(t.origin.length):t.href;return p?[_,a||_]:_}catch(t){return p?[Z]:Z}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},75480:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let g=p(58078),m=p(5174),v="function"==typeof IntersectionObserver,_=new Map,x=[];function createObserver(t){let a;let p={root:t.root||null,margin:t.rootMargin||""},g=x.find(t=>t.root===p.root&&t.margin===p.margin);if(g&&(a=_.get(g)))return a;let m=new Map,v=new IntersectionObserver(t=>{t.forEach(t=>{let a=m.get(t.target),p=t.isIntersecting||t.intersectionRatio>0;a&&p&&a(p)})},t);return a={id:p,observer:v,elements:m},x.push(p),_.set(p,a),a}function observe(t,a,p){let{id:g,observer:m,elements:v}=createObserver(p);return v.set(t,a),m.observe(t),function(){if(v.delete(t),m.unobserve(t),0===v.size){m.disconnect(),_.delete(g);let t=x.findIndex(t=>t.root===g.root&&t.margin===g.margin);t>-1&&x.splice(t,1)}}}function useIntersection(t){let{rootRef:a,rootMargin:p,disabled:_}=t,x=_||!v,[T,W]=(0,g.useState)(!1),z=(0,g.useRef)(null),F=(0,g.useCallback)(t=>{z.current=t},[]);(0,g.useEffect)(()=>{if(v){if(x||T)return;let t=z.current;if(t&&t.tagName){let g=observe(t,t=>t&&W(t),{root:null==a?void 0:a.current,rootMargin:p});return g}}else if(!T){let t=(0,m.requestIdleCallback)(()=>W(!0));return()=>(0,m.cancelIdleCallback)(t)}},[x,p,a,T,z.current]);let Z=(0,g.useCallback)(()=>{W(!1)},[]);return[F,T,Z]}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},68576:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"escapeStringRegexp",{enumerable:!0,get:function(){return escapeStringRegexp}});let p=/[|\\{}()[\]^$+*?.-]/,g=/[|\\{}()[\]^$+*?.-]/g;function escapeStringRegexp(t){return p.test(t)?t.replace(g,"\\$&"):t}},84434:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"RouterContext",{enumerable:!0,get:function(){return v}});let g=p(32582),m=g._(p(58078)),v=m.default.createContext(null)},31532:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(t,a){for(var p in a)Object.defineProperty(t,p,{enumerable:!0,get:a[p]})}(a,{formatUrl:function(){return formatUrl},urlObjectKeys:function(){return _},formatWithValidation:function(){return formatWithValidation}});let g=p(9603),m=g._(p(52497)),v=/https?|ftp|gopher|file/;function formatUrl(t){let{auth:a,hostname:p}=t,g=t.protocol||"",_=t.pathname||"",x=t.hash||"",T=t.query||"",W=!1;a=a?encodeURIComponent(a).replace(/%3A/i,":")+"@":"",t.host?W=a+t.host:p&&(W=a+(~p.indexOf(":")?"["+p+"]":p),t.port&&(W+=":"+t.port)),T&&"object"==typeof T&&(T=String(m.urlQueryToSearchParams(T)));let z=t.search||T&&"?"+T||"";return g&&!g.endsWith(":")&&(g+=":"),t.slashes||(!g||v.test(g))&&!1!==W?(W="//"+(W||""),_&&"/"!==_[0]&&(_="/"+_)):W||(W=""),x&&"#"!==x[0]&&(x="#"+x),z&&"?"!==z[0]&&(z="?"+z),""+g+W+(_=_.replace(/[?#]/g,encodeURIComponent))+(z=z.replace("#","%23"))+x}let _=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function formatWithValidation(t){return formatUrl(t)}},15693:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(t,a){for(var p in a)Object.defineProperty(t,p,{enumerable:!0,get:a[p]})}(a,{getSortedRoutes:function(){return g.getSortedRoutes},isDynamicRoute:function(){return m.isDynamicRoute}});let g=p(40190),m=p(76067)},4294:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"interpolateAs",{enumerable:!0,get:function(){return interpolateAs}});let g=p(23146),m=p(16505);function interpolateAs(t,a,p){let v="",_=(0,m.getRouteRegex)(t),x=_.groups,T=(a!==t?(0,g.getRouteMatcher)(_)(a):"")||p;v=t;let W=Object.keys(x);return W.every(t=>{let a=T[t]||"",{repeat:p,optional:g}=x[t],m="["+(p?"...":"")+t+"]";return g&&(m=(a?"":"/")+"["+m+"]"),p&&!Array.isArray(a)&&(a=[a]),(g||t in T)&&(v=v.replace(m,p?a.map(t=>encodeURIComponent(t)).join("/"):encodeURIComponent(a))||"/")})||(v=""),{params:W,result:v}}},76067:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isDynamicRoute",{enumerable:!0,get:function(){return isDynamicRoute}});let p=/\/\[[^/]+?\](?=\/|$)/;function isDynamicRoute(t){return p.test(t)}},51596:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return isLocalURL}});let g=p(98999),m=p(29452);function isLocalURL(t){if(!(0,g.isAbsoluteUrl)(t))return!0;try{let a=(0,g.getLocationOrigin)(),p=new URL(t,a);return p.origin===a&&(0,m.hasBasePath)(p.pathname)}catch(t){return!1}}},76303:function(t,a){"use strict";function omit(t,a){let p={};return Object.keys(t).forEach(g=>{a.includes(g)||(p[g]=t[g])}),p}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"omit",{enumerable:!0,get:function(){return omit}})},52497:function(t,a){"use strict";function searchParamsToUrlQuery(t){let a={};return t.forEach((t,p)=>{void 0===a[p]?a[p]=t:Array.isArray(a[p])?a[p].push(t):a[p]=[a[p],t]}),a}function stringifyUrlQueryParam(t){return"string"!=typeof t&&("number"!=typeof t||isNaN(t))&&"boolean"!=typeof t?"":String(t)}function urlQueryToSearchParams(t){let a=new URLSearchParams;return Object.entries(t).forEach(t=>{let[p,g]=t;Array.isArray(g)?g.forEach(t=>a.append(p,stringifyUrlQueryParam(t))):a.set(p,stringifyUrlQueryParam(g))}),a}function assign(t){for(var a=arguments.length,p=Array(a>1?a-1:0),g=1;g<a;g++)p[g-1]=arguments[g];return p.forEach(a=>{Array.from(a.keys()).forEach(a=>t.delete(a)),a.forEach((a,p)=>t.append(p,a))}),t}Object.defineProperty(a,"__esModule",{value:!0}),function(t,a){for(var p in a)Object.defineProperty(t,p,{enumerable:!0,get:a[p]})}(a,{searchParamsToUrlQuery:function(){return searchParamsToUrlQuery},urlQueryToSearchParams:function(){return urlQueryToSearchParams},assign:function(){return assign}})},23146:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"getRouteMatcher",{enumerable:!0,get:function(){return getRouteMatcher}});let g=p(98999);function getRouteMatcher(t){let{re:a,groups:p}=t;return t=>{let m=a.exec(t);if(!m)return!1;let decode=t=>{try{return decodeURIComponent(t)}catch(t){throw new g.DecodeError("failed to decode param")}},v={};return Object.keys(p).forEach(t=>{let a=p[t],g=m[a.pos];void 0!==g&&(v[t]=~g.indexOf("/")?g.split("/").map(t=>decode(t)):a.repeat?[decode(g)]:decode(g))}),v}}},16505:function(t,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(t,a){for(var p in a)Object.defineProperty(t,p,{enumerable:!0,get:a[p]})}(a,{getRouteRegex:function(){return getRouteRegex},getNamedRouteRegex:function(){return getNamedRouteRegex},getNamedMiddlewareRegex:function(){return getNamedMiddlewareRegex}});let g=p(23385),m=p(68576),v=p(73644);function parseParameter(t){let a=t.startsWith("[")&&t.endsWith("]");a&&(t=t.slice(1,-1));let p=t.startsWith("...");return p&&(t=t.slice(3)),{key:t,repeat:p,optional:a}}function getParametrizedRoute(t){let a=(0,v.removeTrailingSlash)(t).slice(1).split("/"),p={},_=1;return{parameterizedRoute:a.map(t=>{let a=g.INTERCEPTION_ROUTE_MARKERS.find(a=>t.startsWith(a)),v=t.match(/\[((?:\[.*\])|.+)\]/);if(a&&v){let{key:t,optional:g,repeat:x}=parseParameter(v[1]);return p[t]={pos:_++,repeat:x,optional:g},"/"+(0,m.escapeStringRegexp)(a)+"([^/]+?)"}if(!v)return"/"+(0,m.escapeStringRegexp)(t);{let{key:t,repeat:a,optional:g}=parseParameter(v[1]);return p[t]={pos:_++,repeat:a,optional:g},a?g?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:p}}function getRouteRegex(t){let{parameterizedRoute:a,groups:p}=getParametrizedRoute(t);return{re:RegExp("^"+a+"(?:/)?$"),groups:p}}function buildGetSafeRouteKey(){let t=0;return()=>{let a="",p=++t;for(;p>0;)a+=String.fromCharCode(97+(p-1)%26),p=Math.floor((p-1)/26);return a}}function getSafeKeyFromSegment(t){let{getSafeRouteKey:a,segment:p,routeKeys:g,keyPrefix:m}=t,{key:v,optional:_,repeat:x}=parseParameter(p),T=v.replace(/\W/g,"");m&&(T=""+m+T);let W=!1;return(0===T.length||T.length>30)&&(W=!0),isNaN(parseInt(T.slice(0,1)))||(W=!0),W&&(T=a()),m?g[T]=""+m+v:g[T]=""+v,x?_?"(?:/(?<"+T+">.+?))?":"/(?<"+T+">.+?)":"/(?<"+T+">[^/]+?)"}function getNamedParametrizedRoute(t,a){let p=(0,v.removeTrailingSlash)(t).slice(1).split("/"),_=buildGetSafeRouteKey(),x={};return{namedParameterizedRoute:p.map(t=>{let p=g.INTERCEPTION_ROUTE_MARKERS.some(a=>t.startsWith(a)),v=t.match(/\[((?:\[.*\])|.+)\]/);return p&&v?getSafeKeyFromSegment({getSafeRouteKey:_,segment:v[1],routeKeys:x,keyPrefix:a?"nxtI":void 0}):v?getSafeKeyFromSegment({getSafeRouteKey:_,segment:v[1],routeKeys:x,keyPrefix:a?"nxtP":void 0}):"/"+(0,m.escapeStringRegexp)(t)}).join(""),routeKeys:x}}function getNamedRouteRegex(t,a){let p=getNamedParametrizedRoute(t,a);return{...getRouteRegex(t),namedRegex:"^"+p.namedParameterizedRoute+"(?:/)?$",routeKeys:p.routeKeys}}function getNamedMiddlewareRegex(t,a){let{parameterizedRoute:p}=getParametrizedRoute(t),{catchAll:g=!0}=a;if("/"===p)return{namedRegex:"^/"+(g?".*":"")+"$"};let{namedParameterizedRoute:m}=getNamedParametrizedRoute(t,!1);return{namedRegex:"^"+m+(g?"(?:(/.*)?)":"")+"$"}}},40190:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"getSortedRoutes",{enumerable:!0,get:function(){return getSortedRoutes}});let UrlNode=class UrlNode{insert(t){this._insert(t.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(t){void 0===t&&(t="/");let a=[...this.children.keys()].sort();null!==this.slugName&&a.splice(a.indexOf("[]"),1),null!==this.restSlugName&&a.splice(a.indexOf("[...]"),1),null!==this.optionalRestSlugName&&a.splice(a.indexOf("[[...]]"),1);let p=a.map(a=>this.children.get(a)._smoosh(""+t+a+"/")).reduce((t,a)=>[...t,...a],[]);if(null!==this.slugName&&p.push(...this.children.get("[]")._smoosh(t+"["+this.slugName+"]/")),!this.placeholder){let a="/"===t?"/":t.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+a+'" and "'+a+"[[..."+this.optionalRestSlugName+']]").');p.unshift(a)}return null!==this.restSlugName&&p.push(...this.children.get("[...]")._smoosh(t+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&p.push(...this.children.get("[[...]]")._smoosh(t+"[[..."+this.optionalRestSlugName+"]]/")),p}_insert(t,a,p){if(0===t.length){this.placeholder=!1;return}if(p)throw Error("Catch-all must be the last part of the URL.");let g=t[0];if(g.startsWith("[")&&g.endsWith("]")){let m=g.slice(1,-1),v=!1;if(m.startsWith("[")&&m.endsWith("]")&&(m=m.slice(1,-1),v=!0),m.startsWith("...")&&(m=m.substring(3),p=!0),m.startsWith("[")||m.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+m+"').");if(m.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+m+"').");function handleSlug(t,p){if(null!==t&&t!==p)throw Error("You cannot use different slug names for the same dynamic path ('"+t+"' !== '"+p+"').");a.forEach(t=>{if(t===p)throw Error('You cannot have the same slug name "'+p+'" repeat within a single dynamic path');if(t.replace(/\W/g,"")===g.replace(/\W/g,""))throw Error('You cannot have the slug names "'+t+'" and "'+p+'" differ only by non-word symbols within a single dynamic path')}),a.push(p)}if(p){if(v){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+t[0]+'" ).');handleSlug(this.optionalRestSlugName,m),this.optionalRestSlugName=m,g="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+t[0]+'").');handleSlug(this.restSlugName,m),this.restSlugName=m,g="[...]"}}else{if(v)throw Error('Optional route parameters are not yet supported ("'+t[0]+'").');handleSlug(this.slugName,m),this.slugName=m,g="[]"}}this.children.has(g)||this.children.set(g,new UrlNode),this.children.get(g)._insert(t.slice(1),a,p)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}};function getSortedRoutes(t){let a=new UrlNode;return t.forEach(t=>a.insert(t)),a.smoosh()}},98999:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(t,a){for(var p in a)Object.defineProperty(t,p,{enumerable:!0,get:a[p]})}(a,{WEB_VITALS:function(){return p},execOnce:function(){return execOnce},isAbsoluteUrl:function(){return isAbsoluteUrl},getLocationOrigin:function(){return getLocationOrigin},getURL:function(){return getURL},getDisplayName:function(){return getDisplayName},isResSent:function(){return isResSent},normalizeRepeatedSlashes:function(){return normalizeRepeatedSlashes},loadGetInitialProps:function(){return loadGetInitialProps},SP:function(){return m},ST:function(){return v},DecodeError:function(){return DecodeError},NormalizeError:function(){return NormalizeError},PageNotFoundError:function(){return PageNotFoundError},MissingStaticPage:function(){return MissingStaticPage},MiddlewareNotFoundError:function(){return MiddlewareNotFoundError},stringifyError:function(){return stringifyError}});let p=["CLS","FCP","FID","INP","LCP","TTFB"];function execOnce(t){let a,p=!1;return function(){for(var g=arguments.length,m=Array(g),v=0;v<g;v++)m[v]=arguments[v];return p||(p=!0,a=t(...m)),a}}let g=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,isAbsoluteUrl=t=>g.test(t);function getLocationOrigin(){let{protocol:t,hostname:a,port:p}=window.location;return t+"//"+a+(p?":"+p:"")}function getURL(){let{href:t}=window.location,a=getLocationOrigin();return t.substring(a.length)}function getDisplayName(t){return"string"==typeof t?t:t.displayName||t.name||"Unknown"}function isResSent(t){return t.finished||t.headersSent}function normalizeRepeatedSlashes(t){let a=t.split("?"),p=a[0];return p.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(a[1]?"?"+a.slice(1).join("?"):"")}async function loadGetInitialProps(t,a){let p=a.res||a.ctx&&a.ctx.res;if(!t.getInitialProps)return a.ctx&&a.Component?{pageProps:await loadGetInitialProps(a.Component,a.ctx)}:{};let g=await t.getInitialProps(a);if(p&&isResSent(p))return g;if(!g){let a='"'+getDisplayName(t)+'.getInitialProps()" should resolve to an object. But found "'+g+'" instead.';throw Error(a)}return g}let m="undefined"!=typeof performance,v=m&&["mark","measure","getEntriesByName"].every(t=>"function"==typeof performance[t]);let DecodeError=class DecodeError extends Error{};let NormalizeError=class NormalizeError extends Error{};let PageNotFoundError=class PageNotFoundError extends Error{constructor(t){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+t}};let MissingStaticPage=class MissingStaticPage extends Error{constructor(t,a){super(),this.message="Failed to load static file for page: "+t+" "+a}};let MiddlewareNotFoundError=class MiddlewareNotFoundError extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}};function stringifyError(t){return JSON.stringify({message:t.message,stack:t.stack})}},96871:function(t,a,p){t.exports=p(92054)},46179:function(t,a,p){t.exports=p(85353)},59792:function(t){var a,p,g,m=t.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(t){if(a===setTimeout)return setTimeout(t,0);if((a===defaultSetTimout||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(p){try{return a.call(null,t,0)}catch(p){return a.call(this,t,0)}}}function runClearTimeout(t){if(p===clearTimeout)return clearTimeout(t);if((p===defaultClearTimeout||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(a){try{return p.call(null,t)}catch(a){return p.call(this,t)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(t){a=defaultSetTimout}try{p="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(t){p=defaultClearTimeout}}();var v=[],_=!1,x=-1;function cleanUpNextTick(){_&&g&&(_=!1,g.length?v=g.concat(v):x=-1,v.length&&drainQueue())}function drainQueue(){if(!_){var t=runTimeout(cleanUpNextTick);_=!0;for(var a=v.length;a;){for(g=v,v=[];++x<a;)g&&g[x].run();x=-1,a=v.length}g=null,_=!1,runClearTimeout(t)}}function Item(t,a){this.fun=t,this.array=a}function noop(){}m.nextTick=function(t){var a=Array(arguments.length-1);if(arguments.length>1)for(var p=1;p<arguments.length;p++)a[p-1]=arguments[p];v.push(new Item(t,a)),1!==v.length||_||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=noop,m.addListener=noop,m.once=noop,m.off=noop,m.removeListener=noop,m.removeAllListeners=noop,m.emit=noop,m.prependListener=noop,m.prependOnceListener=noop,m.listeners=function(t){return[]},m.binding=function(t){throw Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw Error("process.chdir is not supported")},m.umask=function(){return 0}},4646:function(t,a,p){let g=p(82562),m=p(38898),v=p(39704),_=p(97974);function renderCanvas(t,a,p,v,_){let x=[].slice.call(arguments,1),T=x.length,W="function"==typeof x[T-1];if(!W&&!g())throw Error("Callback required as last argument");if(W){if(T<2)throw Error("Too few arguments provided");2===T?(_=p,p=a,a=v=void 0):3===T&&(a.getContext&&void 0===_?(_=v,v=void 0):(_=v,v=p,p=a,a=void 0))}else{if(T<1)throw Error("Too few arguments provided");return 1===T?(p=a,a=v=void 0):2!==T||a.getContext||(v=p,p=a,a=void 0),new Promise(function(g,_){try{let _=m.create(p,v);g(t(_,a,v))}catch(t){_(t)}})}try{let g=m.create(p,v);_(null,t(g,a,v))}catch(t){_(t)}}a.create=m.create,a.toCanvas=renderCanvas.bind(null,v.render),a.toDataURL=renderCanvas.bind(null,v.renderToDataURL),a.toString=renderCanvas.bind(null,function(t,a,p){return _.render(t,p)})},82562:function(t){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},97829:function(t,a,p){let g=p(40878).getSymbolSize;a.getRowColCoords=function(t){if(1===t)return[];let a=Math.floor(t/7)+2,p=g(t),m=145===p?26:2*Math.ceil((p-13)/(2*a-2)),v=[p-7];for(let t=1;t<a-1;t++)v[t]=v[t-1]-m;return v.push(6),v.reverse()},a.getPositions=function(t){let p=[],g=a.getRowColCoords(t),m=g.length;for(let t=0;t<m;t++)for(let a=0;a<m;a++)(0!==t||0!==a)&&(0!==t||a!==m-1)&&(t!==m-1||0!==a)&&p.push([g[t],g[a]]);return p}},72419:function(t,a,p){let g=p(7976),m=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(t){this.mode=g.ALPHANUMERIC,this.data=t}AlphanumericData.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},AlphanumericData.prototype.getLength=function(){return this.data.length},AlphanumericData.prototype.getBitsLength=function(){return AlphanumericData.getBitsLength(this.data.length)},AlphanumericData.prototype.write=function(t){let a;for(a=0;a+2<=this.data.length;a+=2){let p=45*m.indexOf(this.data[a]);p+=m.indexOf(this.data[a+1]),t.put(p,11)}this.data.length%2&&t.put(m.indexOf(this.data[a]),6)},t.exports=AlphanumericData},68397:function(t){function BitBuffer(){this.buffer=[],this.length=0}BitBuffer.prototype={get:function(t){return(this.buffer[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(t,a){for(let p=0;p<a;p++)this.putBit((t>>>a-p-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){let a=Math.floor(this.length/8);this.buffer.length<=a&&this.buffer.push(0),t&&(this.buffer[a]|=128>>>this.length%8),this.length++}},t.exports=BitBuffer},50643:function(t){function BitMatrix(t){if(!t||t<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}BitMatrix.prototype.set=function(t,a,p,g){let m=t*this.size+a;this.data[m]=p,g&&(this.reservedBit[m]=!0)},BitMatrix.prototype.get=function(t,a){return this.data[t*this.size+a]},BitMatrix.prototype.xor=function(t,a,p){this.data[t*this.size+a]^=p},BitMatrix.prototype.isReserved=function(t,a){return this.reservedBit[t*this.size+a]},t.exports=BitMatrix},51347:function(t,a,p){let g=p(8557),m=p(7976);function ByteData(t){this.mode=m.BYTE,"string"==typeof t&&(t=g(t)),this.data=new Uint8Array(t)}ByteData.getBitsLength=function(t){return 8*t},ByteData.prototype.getLength=function(){return this.data.length},ByteData.prototype.getBitsLength=function(){return ByteData.getBitsLength(this.data.length)},ByteData.prototype.write=function(t){for(let a=0,p=this.data.length;a<p;a++)t.put(this.data[a],8)},t.exports=ByteData},87002:function(t,a,p){let g=p(77773),m=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],v=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];a.getBlocksCount=function(t,a){switch(a){case g.L:return m[(t-1)*4+0];case g.M:return m[(t-1)*4+1];case g.Q:return m[(t-1)*4+2];case g.H:return m[(t-1)*4+3];default:return}},a.getTotalCodewordsCount=function(t,a){switch(a){case g.L:return v[(t-1)*4+0];case g.M:return v[(t-1)*4+1];case g.Q:return v[(t-1)*4+2];case g.H:return v[(t-1)*4+3];default:return}}},77773:function(t,a){function fromString(t){if("string"!=typeof t)throw Error("Param is not a string");let p=t.toLowerCase();switch(p){case"l":case"low":return a.L;case"m":case"medium":return a.M;case"q":case"quartile":return a.Q;case"h":case"high":return a.H;default:throw Error("Unknown EC Level: "+t)}}a.L={bit:1},a.M={bit:0},a.Q={bit:3},a.H={bit:2},a.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},a.from=function(t,p){if(a.isValid(t))return t;try{return fromString(t)}catch(t){return p}}},48415:function(t,a,p){let g=p(40878).getSymbolSize;a.getPositions=function(t){let a=g(t);return[[0,0],[a-7,0],[0,a-7]]}},17087:function(t,a,p){let g=p(40878),m=g.getBCHDigit(1335);a.getEncodedBits=function(t,a){let p=t.bit<<3|a,v=p<<10;for(;g.getBCHDigit(v)-m>=0;)v^=1335<<g.getBCHDigit(v)-m;return(p<<10|v)^21522}},92221:function(t,a){let p=new Uint8Array(512),g=new Uint8Array(256);!function(){let t=1;for(let a=0;a<255;a++)p[a]=t,g[t]=a,256&(t<<=1)&&(t^=285);for(let t=255;t<512;t++)p[t]=p[t-255]}(),a.log=function(t){if(t<1)throw Error("log("+t+")");return g[t]},a.exp=function(t){return p[t]},a.mul=function(t,a){return 0===t||0===a?0:p[g[t]+g[a]]}},48933:function(t,a,p){let g=p(7976),m=p(40878);function KanjiData(t){this.mode=g.KANJI,this.data=t}KanjiData.getBitsLength=function(t){return 13*t},KanjiData.prototype.getLength=function(){return this.data.length},KanjiData.prototype.getBitsLength=function(){return KanjiData.getBitsLength(this.data.length)},KanjiData.prototype.write=function(t){let a;for(a=0;a<this.data.length;a++){let p=m.toSJIS(this.data[a]);if(p>=33088&&p<=40956)p-=33088;else if(p>=57408&&p<=60351)p-=49472;else throw Error("Invalid SJIS character: "+this.data[a]+"\nMake sure your charset is UTF-8");p=(p>>>8&255)*192+(255&p),t.put(p,13)}},t.exports=KanjiData},93223:function(t,a){a.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let p={N1:3,N2:3,N3:40,N4:10};function getMaskAt(t,p,g){switch(t){case a.Patterns.PATTERN000:return(p+g)%2==0;case a.Patterns.PATTERN001:return p%2==0;case a.Patterns.PATTERN010:return g%3==0;case a.Patterns.PATTERN011:return(p+g)%3==0;case a.Patterns.PATTERN100:return(Math.floor(p/2)+Math.floor(g/3))%2==0;case a.Patterns.PATTERN101:return p*g%2+p*g%3==0;case a.Patterns.PATTERN110:return(p*g%2+p*g%3)%2==0;case a.Patterns.PATTERN111:return(p*g%3+(p+g)%2)%2==0;default:throw Error("bad maskPattern:"+t)}}a.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},a.from=function(t){return a.isValid(t)?parseInt(t,10):void 0},a.getPenaltyN1=function(t){let a=t.size,g=0,m=0,v=0,_=null,x=null;for(let T=0;T<a;T++){m=v=0,_=x=null;for(let W=0;W<a;W++){let a=t.get(T,W);a===_?m++:(m>=5&&(g+=p.N1+(m-5)),_=a,m=1),(a=t.get(W,T))===x?v++:(v>=5&&(g+=p.N1+(v-5)),x=a,v=1)}m>=5&&(g+=p.N1+(m-5)),v>=5&&(g+=p.N1+(v-5))}return g},a.getPenaltyN2=function(t){let a=t.size,g=0;for(let p=0;p<a-1;p++)for(let m=0;m<a-1;m++){let a=t.get(p,m)+t.get(p,m+1)+t.get(p+1,m)+t.get(p+1,m+1);(4===a||0===a)&&g++}return g*p.N2},a.getPenaltyN3=function(t){let a=t.size,g=0,m=0,v=0;for(let p=0;p<a;p++){m=v=0;for(let _=0;_<a;_++)m=m<<1&2047|t.get(p,_),_>=10&&(1488===m||93===m)&&g++,v=v<<1&2047|t.get(_,p),_>=10&&(1488===v||93===v)&&g++}return g*p.N3},a.getPenaltyN4=function(t){let a=0,g=t.data.length;for(let p=0;p<g;p++)a+=t.data[p];let m=Math.abs(Math.ceil(100*a/g/5)-10);return m*p.N4},a.applyMask=function(t,a){let p=a.size;for(let g=0;g<p;g++)for(let m=0;m<p;m++)a.isReserved(m,g)||a.xor(m,g,getMaskAt(t,m,g))},a.getBestMask=function(t,p){let g=Object.keys(a.Patterns).length,m=0,v=1/0;for(let _=0;_<g;_++){p(_),a.applyMask(_,t);let g=a.getPenaltyN1(t)+a.getPenaltyN2(t)+a.getPenaltyN3(t)+a.getPenaltyN4(t);a.applyMask(_,t),g<v&&(v=g,m=_)}return m}},7976:function(t,a,p){let g=p(63424),m=p(36833);function fromString(t){if("string"!=typeof t)throw Error("Param is not a string");let p=t.toLowerCase();switch(p){case"numeric":return a.NUMERIC;case"alphanumeric":return a.ALPHANUMERIC;case"kanji":return a.KANJI;case"byte":return a.BYTE;default:throw Error("Unknown mode: "+t)}}a.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},a.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},a.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},a.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},a.MIXED={bit:-1},a.getCharCountIndicator=function(t,a){if(!t.ccBits)throw Error("Invalid mode: "+t);if(!g.isValid(a))throw Error("Invalid version: "+a);return a>=1&&a<10?t.ccBits[0]:a<27?t.ccBits[1]:t.ccBits[2]},a.getBestModeForData=function(t){return m.testNumeric(t)?a.NUMERIC:m.testAlphanumeric(t)?a.ALPHANUMERIC:m.testKanji(t)?a.KANJI:a.BYTE},a.toString=function(t){if(t&&t.id)return t.id;throw Error("Invalid mode")},a.isValid=function(t){return t&&t.bit&&t.ccBits},a.from=function(t,p){if(a.isValid(t))return t;try{return fromString(t)}catch(t){return p}}},80016:function(t,a,p){let g=p(7976);function NumericData(t){this.mode=g.NUMERIC,this.data=t.toString()}NumericData.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},NumericData.prototype.getLength=function(){return this.data.length},NumericData.prototype.getBitsLength=function(){return NumericData.getBitsLength(this.data.length)},NumericData.prototype.write=function(t){let a,p;for(a=0;a+3<=this.data.length;a+=3)p=parseInt(this.data.substr(a,3),10),t.put(p,10);let g=this.data.length-a;g>0&&(p=parseInt(this.data.substr(a),10),t.put(p,3*g+1))},t.exports=NumericData},2001:function(t,a,p){let g=p(92221);a.mul=function(t,a){let p=new Uint8Array(t.length+a.length-1);for(let m=0;m<t.length;m++)for(let v=0;v<a.length;v++)p[m+v]^=g.mul(t[m],a[v]);return p},a.mod=function(t,a){let p=new Uint8Array(t);for(;p.length-a.length>=0;){let t=p[0];for(let m=0;m<a.length;m++)p[m]^=g.mul(a[m],t);let m=0;for(;m<p.length&&0===p[m];)m++;p=p.slice(m)}return p},a.generateECPolynomial=function(t){let p=new Uint8Array([1]);for(let m=0;m<t;m++)p=a.mul(p,new Uint8Array([1,g.exp(m)]));return p}},38898:function(t,a,p){let g=p(40878),m=p(77773),v=p(68397),_=p(50643),x=p(97829),T=p(48415),W=p(93223),z=p(87002),F=p(80644),Z=p(78331),Y=p(17087),X=p(7976),Q=p(76582);function setupFinderPattern(t,a){let p=t.size,g=T.getPositions(a);for(let a=0;a<g.length;a++){let m=g[a][0],v=g[a][1];for(let a=-1;a<=7;a++)if(!(m+a<=-1)&&!(p<=m+a))for(let g=-1;g<=7;g++)v+g<=-1||p<=v+g||(a>=0&&a<=6&&(0===g||6===g)||g>=0&&g<=6&&(0===a||6===a)||a>=2&&a<=4&&g>=2&&g<=4?t.set(m+a,v+g,!0,!0):t.set(m+a,v+g,!1,!0))}}function setupTimingPattern(t){let a=t.size;for(let p=8;p<a-8;p++){let a=p%2==0;t.set(p,6,a,!0),t.set(6,p,a,!0)}}function setupAlignmentPattern(t,a){let p=x.getPositions(a);for(let a=0;a<p.length;a++){let g=p[a][0],m=p[a][1];for(let a=-2;a<=2;a++)for(let p=-2;p<=2;p++)-2===a||2===a||-2===p||2===p||0===a&&0===p?t.set(g+a,m+p,!0,!0):t.set(g+a,m+p,!1,!0)}}function setupVersionInfo(t,a){let p,g,m;let v=t.size,_=Z.getEncodedBits(a);for(let a=0;a<18;a++)p=Math.floor(a/3),g=a%3+v-8-3,m=(_>>a&1)==1,t.set(p,g,m,!0),t.set(g,p,m,!0)}function setupFormatInfo(t,a,p){let g,m;let v=t.size,_=Y.getEncodedBits(a,p);for(g=0;g<15;g++)m=(_>>g&1)==1,g<6?t.set(g,8,m,!0):g<8?t.set(g+1,8,m,!0):t.set(v-15+g,8,m,!0),g<8?t.set(8,v-g-1,m,!0):g<9?t.set(8,15-g-1+1,m,!0):t.set(8,15-g-1,m,!0);t.set(v-8,8,1,!0)}function setupData(t,a){let p=t.size,g=-1,m=p-1,v=7,_=0;for(let x=p-1;x>0;x-=2)for(6===x&&x--;;){for(let p=0;p<2;p++)if(!t.isReserved(m,x-p)){let g=!1;_<a.length&&(g=(a[_]>>>v&1)==1),t.set(m,x-p,g),-1==--v&&(_++,v=7)}if((m+=g)<0||p<=m){m-=g,g=-g;break}}}function createData(t,a,p){let m=new v;p.forEach(function(a){m.put(a.mode.bit,4),m.put(a.getLength(),X.getCharCountIndicator(a.mode,t)),a.write(m)});let _=g.getSymbolTotalCodewords(t),x=z.getTotalCodewordsCount(t,a),T=(_-x)*8;for(m.getLengthInBits()+4<=T&&m.put(0,4);m.getLengthInBits()%8!=0;)m.putBit(0);let W=(T-m.getLengthInBits())/8;for(let t=0;t<W;t++)m.put(t%2?17:236,8);return createCodewords(m,t,a)}function createCodewords(t,a,p){let m,v;let _=g.getSymbolTotalCodewords(a),x=z.getTotalCodewordsCount(a,p),T=_-x,W=z.getBlocksCount(a,p),Z=_%W,Y=W-Z,X=Math.floor(_/W),Q=Math.floor(T/W),J=Q+1,ei=X-Q,eo=new F(ei),ea=0,es=Array(W),el=Array(W),ec=0,eu=new Uint8Array(t.buffer);for(let t=0;t<W;t++){let a=t<Y?Q:J;es[t]=eu.slice(ea,ea+a),el[t]=eo.encode(es[t]),ea+=a,ec=Math.max(ec,a)}let ed=new Uint8Array(_),eh=0;for(m=0;m<ec;m++)for(v=0;v<W;v++)m<es[v].length&&(ed[eh++]=es[v][m]);for(m=0;m<ei;m++)for(v=0;v<W;v++)ed[eh++]=el[v][m];return ed}function createSymbol(t,a,p,m){let v;if(Array.isArray(t))v=Q.fromArray(t);else if("string"==typeof t){let g=a;if(!g){let a=Q.rawSplit(t);g=Z.getBestVersionForData(a,p)}v=Q.fromString(t,g||40)}else throw Error("Invalid data");let x=Z.getBestVersionForData(v,p);if(!x)throw Error("The amount of data is too big to be stored in a QR Code");if(a){if(a<x)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+x+".\n")}else a=x;let T=createData(a,p,v),z=g.getSymbolSize(a),F=new _(z);return setupFinderPattern(F,a),setupTimingPattern(F),setupAlignmentPattern(F,a),setupFormatInfo(F,p,0),a>=7&&setupVersionInfo(F,a),setupData(F,T),isNaN(m)&&(m=W.getBestMask(F,setupFormatInfo.bind(null,F,p))),W.applyMask(m,F),setupFormatInfo(F,p,m),{modules:F,version:a,errorCorrectionLevel:p,maskPattern:m,segments:v}}a.create=function(t,a){let p,v;if(void 0===t||""===t)throw Error("No input text");let _=m.M;return void 0!==a&&(_=m.from(a.errorCorrectionLevel,m.M),p=Z.from(a.version),v=W.from(a.maskPattern),a.toSJISFunc&&g.setToSJISFunction(a.toSJISFunc)),createSymbol(t,p,_,v)}},80644:function(t,a,p){let g=p(2001);function ReedSolomonEncoder(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder.prototype.initialize=function(t){this.degree=t,this.genPoly=g.generateECPolynomial(this.degree)},ReedSolomonEncoder.prototype.encode=function(t){if(!this.genPoly)throw Error("Encoder not initialized");let a=new Uint8Array(t.length+this.degree);a.set(t);let p=g.mod(a,this.genPoly),m=this.degree-p.length;if(m>0){let t=new Uint8Array(this.degree);return t.set(p,m),t}return p},t.exports=ReedSolomonEncoder},36833:function(t,a){let p="[0-9]+",g="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";g=g.replace(/u/g,"\\u");let m="(?:(?![A-Z0-9 $%*+\\-./:]|"+g+")(?:.|[\r\n]))+";a.KANJI=RegExp(g,"g"),a.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),a.BYTE=RegExp(m,"g"),a.NUMERIC=RegExp(p,"g"),a.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let v=RegExp("^"+g+"$"),_=RegExp("^"+p+"$"),x=RegExp("^[A-Z0-9 $%*+\\-./:]+$");a.testKanji=function(t){return v.test(t)},a.testNumeric=function(t){return _.test(t)},a.testAlphanumeric=function(t){return x.test(t)}},76582:function(t,a,p){let g=p(7976),m=p(80016),v=p(72419),_=p(51347),x=p(48933),T=p(36833),W=p(40878),z=p(88451);function getStringByteLength(t){return unescape(encodeURIComponent(t)).length}function getSegments(t,a,p){let g;let m=[];for(;null!==(g=t.exec(p));)m.push({data:g[0],index:g.index,mode:a,length:g[0].length});return m}function getSegmentsFromString(t){let a,p;let m=getSegments(T.NUMERIC,g.NUMERIC,t),v=getSegments(T.ALPHANUMERIC,g.ALPHANUMERIC,t);W.isKanjiModeEnabled()?(a=getSegments(T.BYTE,g.BYTE,t),p=getSegments(T.KANJI,g.KANJI,t)):(a=getSegments(T.BYTE_KANJI,g.BYTE,t),p=[]);let _=m.concat(v,a,p);return _.sort(function(t,a){return t.index-a.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function getSegmentBitsLength(t,a){switch(a){case g.NUMERIC:return m.getBitsLength(t);case g.ALPHANUMERIC:return v.getBitsLength(t);case g.KANJI:return x.getBitsLength(t);case g.BYTE:return _.getBitsLength(t)}}function mergeSegments(t){return t.reduce(function(t,a){let p=t.length-1>=0?t[t.length-1]:null;return p&&p.mode===a.mode?t[t.length-1].data+=a.data:t.push(a),t},[])}function buildNodes(t){let a=[];for(let p=0;p<t.length;p++){let m=t[p];switch(m.mode){case g.NUMERIC:a.push([m,{data:m.data,mode:g.ALPHANUMERIC,length:m.length},{data:m.data,mode:g.BYTE,length:m.length}]);break;case g.ALPHANUMERIC:a.push([m,{data:m.data,mode:g.BYTE,length:m.length}]);break;case g.KANJI:a.push([m,{data:m.data,mode:g.BYTE,length:getStringByteLength(m.data)}]);break;case g.BYTE:a.push([{data:m.data,mode:g.BYTE,length:getStringByteLength(m.data)}])}}return a}function buildGraph(t,a){let p={},m={start:{}},v=["start"];for(let _=0;_<t.length;_++){let x=t[_],T=[];for(let t=0;t<x.length;t++){let W=x[t],z=""+_+t;T.push(z),p[z]={node:W,lastCount:0},m[z]={};for(let t=0;t<v.length;t++){let _=v[t];p[_]&&p[_].node.mode===W.mode?(m[_][z]=getSegmentBitsLength(p[_].lastCount+W.length,W.mode)-getSegmentBitsLength(p[_].lastCount,W.mode),p[_].lastCount+=W.length):(p[_]&&(p[_].lastCount=W.length),m[_][z]=getSegmentBitsLength(W.length,W.mode)+4+g.getCharCountIndicator(W.mode,a))}}v=T}for(let t=0;t<v.length;t++)m[v[t]].end=0;return{map:m,table:p}}function buildSingleSegment(t,a){let p;let T=g.getBestModeForData(t);if((p=g.from(a,T))!==g.BYTE&&p.bit<T.bit)throw Error('"'+t+'" cannot be encoded with mode '+g.toString(p)+".\n Suggested mode is: "+g.toString(T));switch(p!==g.KANJI||W.isKanjiModeEnabled()||(p=g.BYTE),p){case g.NUMERIC:return new m(t);case g.ALPHANUMERIC:return new v(t);case g.KANJI:return new x(t);case g.BYTE:return new _(t)}}a.fromArray=function(t){return t.reduce(function(t,a){return"string"==typeof a?t.push(buildSingleSegment(a,null)):a.data&&t.push(buildSingleSegment(a.data,a.mode)),t},[])},a.fromString=function(t,p){let g=getSegmentsFromString(t,W.isKanjiModeEnabled()),m=buildNodes(g),v=buildGraph(m,p),_=z.find_path(v.map,"start","end"),x=[];for(let t=1;t<_.length-1;t++)x.push(v.table[_[t]].node);return a.fromArray(mergeSegments(x))},a.rawSplit=function(t){return a.fromArray(getSegmentsFromString(t,W.isKanjiModeEnabled()))}},40878:function(t,a){let p;let g=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];a.getSymbolSize=function(t){if(!t)throw Error('"version" cannot be null or undefined');if(t<1||t>40)throw Error('"version" should be in range from 1 to 40');return 4*t+17},a.getSymbolTotalCodewords=function(t){return g[t]},a.getBCHDigit=function(t){let a=0;for(;0!==t;)a++,t>>>=1;return a},a.setToSJISFunction=function(t){if("function"!=typeof t)throw Error('"toSJISFunc" is not a valid function.');p=t},a.isKanjiModeEnabled=function(){return void 0!==p},a.toSJIS=function(t){return p(t)}},63424:function(t,a){a.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},78331:function(t,a,p){let g=p(40878),m=p(87002),v=p(77773),_=p(7976),x=p(63424),T=g.getBCHDigit(7973);function getBestVersionForDataLength(t,p,g){for(let m=1;m<=40;m++)if(p<=a.getCapacity(m,g,t))return m}function getReservedBitsCount(t,a){return _.getCharCountIndicator(t,a)+4}function getTotalBitsFromDataArray(t,a){let p=0;return t.forEach(function(t){let g=getReservedBitsCount(t.mode,a);p+=g+t.getBitsLength()}),p}function getBestVersionForMixedData(t,p){for(let g=1;g<=40;g++){let m=getTotalBitsFromDataArray(t,g);if(m<=a.getCapacity(g,p,_.MIXED))return g}}a.from=function(t,a){return x.isValid(t)?parseInt(t,10):a},a.getCapacity=function(t,a,p){if(!x.isValid(t))throw Error("Invalid QR Code version");void 0===p&&(p=_.BYTE);let v=g.getSymbolTotalCodewords(t),T=m.getTotalCodewordsCount(t,a),W=(v-T)*8;if(p===_.MIXED)return W;let z=W-getReservedBitsCount(p,t);switch(p){case _.NUMERIC:return Math.floor(z/10*3);case _.ALPHANUMERIC:return Math.floor(z/11*2);case _.KANJI:return Math.floor(z/13);case _.BYTE:default:return Math.floor(z/8)}},a.getBestVersionForData=function(t,a){let p;let g=v.from(a,v.M);if(Array.isArray(t)){if(t.length>1)return getBestVersionForMixedData(t,g);if(0===t.length)return 1;p=t[0]}else p=t;return getBestVersionForDataLength(p.mode,p.getLength(),g)},a.getEncodedBits=function(t){if(!x.isValid(t)||t<7)throw Error("Invalid QR Code version");let a=t<<12;for(;g.getBCHDigit(a)-T>=0;)a^=7973<<g.getBCHDigit(a)-T;return t<<12|a}},39704:function(t,a,p){let g=p(27708);function clearCanvas(t,a,p){t.clearRect(0,0,a.width,a.height),a.style||(a.style={}),a.height=p,a.width=p,a.style.height=p+"px",a.style.width=p+"px"}function getCanvasElement(){try{return document.createElement("canvas")}catch(t){throw Error("You need to specify a canvas element")}}a.render=function(t,a,p){let m=p,v=a;void 0!==m||a&&a.getContext||(m=a,a=void 0),a||(v=getCanvasElement()),m=g.getOptions(m);let _=g.getImageWidth(t.modules.size,m),x=v.getContext("2d"),T=x.createImageData(_,_);return g.qrToImageData(T.data,t,m),clearCanvas(x,v,_),x.putImageData(T,0,0),v},a.renderToDataURL=function(t,p,g){let m=g;void 0!==m||p&&p.getContext||(m=p,p=void 0),m||(m={});let v=a.render(t,p,m),_=m.type||"image/png",x=m.rendererOpts||{};return v.toDataURL(_,x.quality)}},97974:function(t,a,p){let g=p(27708);function getColorAttrib(t,a){let p=t.a/255,g=a+'="'+t.hex+'"';return p<1?g+" "+a+'-opacity="'+p.toFixed(2).slice(1)+'"':g}function svgCmd(t,a,p){let g=t+a;return void 0!==p&&(g+=" "+p),g}function qrToPath(t,a,p){let g="",m=0,v=!1,_=0;for(let x=0;x<t.length;x++){let T=Math.floor(x%a),W=Math.floor(x/a);T||v||(v=!0),t[x]?(_++,x>0&&T>0&&t[x-1]||(g+=v?svgCmd("M",T+p,.5+W+p):svgCmd("m",m,0),m=0,v=!1),T+1<a&&t[x+1]||(g+=svgCmd("h",_),_=0)):m++}return g}a.render=function(t,a,p){let m=g.getOptions(a),v=t.modules.size,_=t.modules.data,x=v+2*m.margin,T=m.color.light.a?"<path "+getColorAttrib(m.color.light,"fill")+' d="M0 0h'+x+"v"+x+'H0z"/>':"",W="<path "+getColorAttrib(m.color.dark,"stroke")+' d="'+qrToPath(_,v,m.margin)+'"/>',z=m.width?'width="'+m.width+'" height="'+m.width+'" ':"",F='<svg xmlns="http://www.w3.org/2000/svg" '+z+('viewBox="0 0 '+x)+" "+x+'" shape-rendering="crispEdges">'+T+W+"</svg>\n";return"function"==typeof p&&p(null,F),F}},27708:function(t,a){function hex2rgba(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw Error("Color should be defined as hex string");let a=t.slice().replace("#","").split("");if(a.length<3||5===a.length||a.length>8)throw Error("Invalid hex color: "+t);(3===a.length||4===a.length)&&(a=Array.prototype.concat.apply([],a.map(function(t){return[t,t]}))),6===a.length&&a.push("F","F");let p=parseInt(a.join(""),16);return{r:p>>24&255,g:p>>16&255,b:p>>8&255,a:255&p,hex:"#"+a.slice(0,6).join("")}}a.getOptions=function(t){t||(t={}),t.color||(t.color={});let a=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,p=t.width&&t.width>=21?t.width:void 0,g=t.scale||4;return{width:p,scale:p?4:g,margin:a,color:{dark:hex2rgba(t.color.dark||"#000000ff"),light:hex2rgba(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},a.getScale=function(t,a){return a.width&&a.width>=t+2*a.margin?a.width/(t+2*a.margin):a.scale},a.getImageWidth=function(t,p){let g=a.getScale(t,p);return Math.floor((t+2*p.margin)*g)},a.qrToImageData=function(t,p,g){let m=p.modules.size,v=p.modules.data,_=a.getScale(m,g),x=Math.floor((m+2*g.margin)*_),T=g.margin*_,W=[g.color.light,g.color.dark];for(let a=0;a<x;a++)for(let p=0;p<x;p++){let z=(a*x+p)*4,F=g.color.light;if(a>=T&&p>=T&&a<x-T&&p<x-T){let t=Math.floor((a-T)/_),g=Math.floor((p-T)/_);F=W[v[t*m+g]?1:0]}t[z++]=F.r,t[z++]=F.g,t[z++]=F.b,t[z]=F.a}}},52221:function(t,a,p){"use strict";let g=p(12235),m=p(3126),v=p(53297),_=p(85283),isNullOrUndefined=t=>null==t,x=Symbol("encodeFragmentIdentifier");function encoderForArrayFormat(t){switch(t.arrayFormat){case"index":return a=>(p,g)=>{let m=p.length;return void 0===g||t.skipNull&&null===g||t.skipEmptyString&&""===g?p:null===g?[...p,[encode(a,t),"[",m,"]"].join("")]:[...p,[encode(a,t),"[",encode(m,t),"]=",encode(g,t)].join("")]};case"bracket":return a=>(p,g)=>void 0===g||t.skipNull&&null===g||t.skipEmptyString&&""===g?p:null===g?[...p,[encode(a,t),"[]"].join("")]:[...p,[encode(a,t),"[]=",encode(g,t)].join("")];case"colon-list-separator":return a=>(p,g)=>void 0===g||t.skipNull&&null===g||t.skipEmptyString&&""===g?p:null===g?[...p,[encode(a,t),":list="].join("")]:[...p,[encode(a,t),":list=",encode(g,t)].join("")];case"comma":case"separator":case"bracket-separator":{let a="bracket-separator"===t.arrayFormat?"[]=":"=";return p=>(g,m)=>void 0===m||t.skipNull&&null===m||t.skipEmptyString&&""===m?g:(m=null===m?"":m,0===g.length)?[[encode(p,t),a,encode(m,t)].join("")]:[[g,encode(m,t)].join(t.arrayFormatSeparator)]}default:return a=>(p,g)=>void 0===g||t.skipNull&&null===g||t.skipEmptyString&&""===g?p:null===g?[...p,encode(a,t)]:[...p,[encode(a,t),"=",encode(g,t)].join("")]}}function parserForArrayFormat(t){let a;switch(t.arrayFormat){case"index":return(t,p,g)=>{if(a=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!a){g[t]=p;return}void 0===g[t]&&(g[t]={}),g[t][a[1]]=p};case"bracket":return(t,p,g)=>{if(a=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!a){g[t]=p;return}if(void 0===g[t]){g[t]=[p];return}g[t]=[].concat(g[t],p)};case"colon-list-separator":return(t,p,g)=>{if(a=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!a){g[t]=p;return}if(void 0===g[t]){g[t]=[p];return}g[t]=[].concat(g[t],p)};case"comma":case"separator":return(a,p,g)=>{let m="string"==typeof p&&p.includes(t.arrayFormatSeparator),v="string"==typeof p&&!m&&decode(p,t).includes(t.arrayFormatSeparator);p=v?decode(p,t):p;let _=m||v?p.split(t.arrayFormatSeparator).map(a=>decode(a,t)):null===p?p:decode(p,t);g[a]=_};case"bracket-separator":return(a,p,g)=>{let m=/(\[\])$/.test(a);if(a=a.replace(/\[\]$/,""),!m){g[a]=p?decode(p,t):p;return}let v=null===p?[]:p.split(t.arrayFormatSeparator).map(a=>decode(a,t));if(void 0===g[a]){g[a]=v;return}g[a]=[].concat(g[a],v)};default:return(t,a,p)=>{if(void 0===p[t]){p[t]=a;return}p[t]=[].concat(p[t],a)}}}function validateArrayFormatSeparator(t){if("string"!=typeof t||1!==t.length)throw TypeError("arrayFormatSeparator must be single character string")}function encode(t,a){return a.encode?a.strict?g(t):encodeURIComponent(t):t}function decode(t,a){return a.decode?m(t):t}function keysSorter(t){return Array.isArray(t)?t.sort():"object"==typeof t?keysSorter(Object.keys(t)).sort((t,a)=>Number(t)-Number(a)).map(a=>t[a]):t}function removeHash(t){let a=t.indexOf("#");return -1!==a&&(t=t.slice(0,a)),t}function getHash(t){let a="",p=t.indexOf("#");return -1!==p&&(a=t.slice(p)),a}function extract(t){t=removeHash(t);let a=t.indexOf("?");return -1===a?"":t.slice(a+1)}function parseValue(t,a){return a.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):a.parseBooleans&&null!==t&&("true"===t.toLowerCase()||"false"===t.toLowerCase())&&(t="true"===t.toLowerCase()),t}function parse(t,a){validateArrayFormatSeparator((a=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},a)).arrayFormatSeparator);let p=parserForArrayFormat(a),g=Object.create(null);if("string"!=typeof t||!(t=t.trim().replace(/^[?#&]/,"")))return g;for(let m of t.split("&")){if(""===m)continue;let[t,_]=v(a.decode?m.replace(/\+/g," "):m,"=");_=void 0===_?null:["comma","separator","bracket-separator"].includes(a.arrayFormat)?_:decode(_,a),p(decode(t,a),_,g)}for(let t of Object.keys(g)){let p=g[t];if("object"==typeof p&&null!==p)for(let t of Object.keys(p))p[t]=parseValue(p[t],a);else g[t]=parseValue(p,a)}return!1===a.sort?g:(!0===a.sort?Object.keys(g).sort():Object.keys(g).sort(a.sort)).reduce((t,a)=>{let p=g[a];return p&&"object"==typeof p&&!Array.isArray(p)?t[a]=keysSorter(p):t[a]=p,t},Object.create(null))}a.extract=extract,a.parse=parse,a.stringify=(t,a)=>{if(!t)return"";validateArrayFormatSeparator((a=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},a)).arrayFormatSeparator);let shouldFilter=p=>a.skipNull&&isNullOrUndefined(t[p])||a.skipEmptyString&&""===t[p],p=encoderForArrayFormat(a),g={};for(let a of Object.keys(t))shouldFilter(a)||(g[a]=t[a]);let m=Object.keys(g);return!1!==a.sort&&m.sort(a.sort),m.map(g=>{let m=t[g];return void 0===m?"":null===m?encode(g,a):Array.isArray(m)?0===m.length&&"bracket-separator"===a.arrayFormat?encode(g,a)+"[]":m.reduce(p(g),[]).join("&"):encode(g,a)+"="+encode(m,a)}).filter(t=>t.length>0).join("&")},a.parseUrl=(t,a)=>{a=Object.assign({decode:!0},a);let[p,g]=v(t,"#");return Object.assign({url:p.split("?")[0]||"",query:parse(extract(t),a)},a&&a.parseFragmentIdentifier&&g?{fragmentIdentifier:decode(g,a)}:{})},a.stringifyUrl=(t,p)=>{p=Object.assign({encode:!0,strict:!0,[x]:!0},p);let g=removeHash(t.url).split("?")[0]||"",m=a.extract(t.url),v=a.parse(m,{sort:!1}),_=Object.assign(v,t.query),T=a.stringify(_,p);T&&(T=`?${T}`);let W=getHash(t.url);return t.fragmentIdentifier&&(W=`#${p[x]?encode(t.fragmentIdentifier,p):t.fragmentIdentifier}`),`${g}${T}${W}`},a.pick=(t,p,g)=>{g=Object.assign({parseFragmentIdentifier:!0,[x]:!1},g);let{url:m,query:v,fragmentIdentifier:T}=a.parseUrl(t,g);return a.stringifyUrl({url:m,query:_(v,p),fragmentIdentifier:T},g)},a.exclude=(t,p,g)=>{let m=Array.isArray(p)?t=>!p.includes(t):(t,a)=>!p(t,a);return a.pick(t,m,g)}},39770:function(t,a,p){var g;t.exports=(g=p(58078),(()=>{var t={"./node_modules/css-mediaquery/index.js":(t,a)=>{"use strict";a.match=matchQuery,a.parse=parseQuery;var p=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,g=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,m=/^(?:(min|max)-)?(.+)/,v=/(em|rem|px|cm|mm|in|pt|pc)?$/,_=/(dpi|dpcm|dppx)?$/;function matchQuery(t,a){return parseQuery(t).some(function(t){var p=t.inverse,g="all"===t.type||a.type===t.type;if(g&&p||!(g||p))return!1;var m=t.expressions.every(function(t){var p=t.feature,g=t.modifier,m=t.value,v=a[p];if(!v)return!1;switch(p){case"orientation":case"scan":return v.toLowerCase()===m.toLowerCase();case"width":case"height":case"device-width":case"device-height":m=toPx(m),v=toPx(v);break;case"resolution":m=toDpi(m),v=toDpi(v);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":m=toDecimal(m),v=toDecimal(v);break;case"grid":case"color":case"color-index":case"monochrome":m=parseInt(m,10)||1,v=parseInt(v,10)||0}switch(g){case"min":return v>=m;case"max":return v<=m;default:return v===m}});return m&&!p||!m&&p})}function parseQuery(t){return t.split(",").map(function(t){var a=(t=t.trim()).match(p),v=a[1],_=a[2],x=a[3]||"",T={};return T.inverse=!!v&&"not"===v.toLowerCase(),T.type=_?_.toLowerCase():"all",x=x.match(/\([^\)]+\)/g)||[],T.expressions=x.map(function(t){var a=t.match(g),p=a[1].toLowerCase().match(m);return{modifier:p[1],feature:p[2],value:a[2]}}),T})}function toDecimal(t){var a,p=Number(t);return p||(p=(a=t.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/a[2]),p}function toDpi(t){var a=parseFloat(t);switch(String(t).match(_)[1]){case"dpcm":return a/2.54;case"dppx":return 96*a;default:return a}}function toPx(t){var a=parseFloat(t);switch(String(t).match(v)[1]){case"em":case"rem":return 16*a;case"cm":return 96*a/2.54;case"mm":return 96*a/2.54/10;case"in":return 96*a;case"pt":return 72*a;case"pc":return 72*a/12;default:return a}}},"./node_modules/hyphenate-style-name/index.js":(t,a,p)=>{"use strict";p.r(a),p.d(a,{default:()=>_});var g=/[A-Z]/g,m=/^ms-/,v={};function toHyphenLower(t){return"-"+t.toLowerCase()}function hyphenateStyleName(t){if(v.hasOwnProperty(t))return v[t];var a=t.replace(g,toHyphenLower);return v[t]=m.test(a)?"-"+a:a}let _=hyphenateStyleName},"./node_modules/matchmediaquery/index.js":(t,a,p)=>{"use strict";var g=p(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,m="undefined"!=typeof window?window.matchMedia:null;function Mql(t,a,p){var v=this;if(m&&!p){var _=m.call(window,t);this.matches=_.matches,this.media=_.media,_.addListener(update)}else this.matches=g(t,a),this.media=t;function addListener(t){_&&_.addListener(t)}function removeListener(t){_&&_.removeListener(t)}function update(t){v.matches=t.matches,v.media=t.media}function dispose(){_&&_.removeListener(update)}this.addListener=addListener,this.removeListener=removeListener,this.dispose=dispose}function matchMedia(t,a,p){return new Mql(t,a,p)}t.exports=matchMedia},"./node_modules/object-assign/index.js":t=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;function toObject(t){if(null==t)throw TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function shouldUseNative(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var a={},p=0;p<10;p++)a["_"+String.fromCharCode(p)]=p;var g=Object.getOwnPropertyNames(a).map(function(t){return a[t]});if("0123456789"!==g.join(""))return!1;var m={};if("abcdefghijklmnopqrst".split("").forEach(function(t){m[t]=t}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},m)).join(""))return!1;return!0}catch(t){return!1}}t.exports=shouldUseNative()?Object.assign:function(t,m){for(var v,_,x=toObject(t),T=1;T<arguments.length;T++){for(var W in v=Object(arguments[T]))p.call(v,W)&&(x[W]=v[W]);if(a){_=a(v);for(var z=0;z<_.length;z++)g.call(v,_[z])&&(x[_[z]]=v[_[z]])}}return x}},"./node_modules/prop-types/checkPropTypes.js":(t,a,p)=>{"use strict";var printWarning=function(){},g=p(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},v=p(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function checkPropTypes(t,a,p,_,x){for(var T in t)if(v(t,T)){var W;try{if("function"!=typeof t[T]){var z=Error((_||"React class")+": "+p+" type `"+T+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[T]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw z.name="Invariant Violation",z}W=t[T](a,T,_,p,null,g)}catch(t){W=t}if(!W||W instanceof Error||printWarning((_||"React class")+": type specification of "+p+" `"+T+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof W+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),W instanceof Error&&!(W.message in m)){m[W.message]=!0;var F=x?x():"";printWarning("Failed "+p+" type: "+W.message+(null!=F?F:""))}}}printWarning=function(t){var a="Warning: "+t;"undefined"!=typeof console&&console.error(a);try{throw Error(a)}catch(t){}},checkPropTypes.resetWarningCache=function(){m={}},t.exports=checkPropTypes},"./node_modules/prop-types/factoryWithTypeCheckers.js":(t,a,p)=>{"use strict";var g=p(/*! react-is */"./node_modules/react-is/index.js"),m=p(/*! object-assign */"./node_modules/object-assign/index.js"),v=p(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),_=p(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),x=p(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js"),printWarning=function(){};function emptyFunctionThatReturnsNull(){return null}printWarning=function(t){var a="Warning: "+t;"undefined"!=typeof console&&console.error(a);try{throw Error(a)}catch(t){}},t.exports=function(t,a){var p="function"==typeof Symbol&&Symbol.iterator;function getIteratorFn(t){var a=t&&(p&&t[p]||t["@@iterator"]);if("function"==typeof a)return a}var T="<<anonymous>>",W={array:createPrimitiveTypeChecker("array"),bigint:createPrimitiveTypeChecker("bigint"),bool:createPrimitiveTypeChecker("boolean"),func:createPrimitiveTypeChecker("function"),number:createPrimitiveTypeChecker("number"),object:createPrimitiveTypeChecker("object"),string:createPrimitiveTypeChecker("string"),symbol:createPrimitiveTypeChecker("symbol"),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};function is(t,a){return t===a?0!==t||1/t==1/a:t!=t&&a!=a}function PropTypeError(t,a){this.message=t,this.data=a&&"object"==typeof a?a:{},this.stack=""}function createChainableTypeChecker(t){var p={},g=0;function checkType(m,_,x,W,z,F,Z){if(W=W||T,F=F||x,Z!==v){if(a){var Y=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Y.name="Invariant Violation",Y}if("undefined"!=typeof console){var X=W+":"+x;!p[X]&&g<3&&(printWarning("You are manually calling a React.PropTypes validation function for the `"+F+"` prop on `"+W+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),p[X]=!0,g++)}}return null!=_[x]?t(_,x,W,z,F):m?new PropTypeError(null===_[x]?"The "+z+" `"+F+"` is marked as required in `"+W+"`, but its value is `null`.":"The "+z+" `"+F+"` is marked as required in `"+W+"`, but its value is `undefined`."):null}var m=checkType.bind(null,!1);return m.isRequired=checkType.bind(null,!0),m}function createPrimitiveTypeChecker(t){return createChainableTypeChecker(function(a,p,g,m,v,_){var x=a[p];return getPropType(x)!==t?new PropTypeError("Invalid "+m+" `"+v+"` of type `"+getPreciseType(x)+"` supplied to `"+g+"`, expected `"+t+"`.",{expectedType:t}):null})}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull)}function createArrayOfTypeChecker(t){return createChainableTypeChecker(function(a,p,g,m,_){if("function"!=typeof t)return new PropTypeError("Property `"+_+"` of component `"+g+"` has invalid PropType notation inside arrayOf.");var x=a[p];if(!Array.isArray(x))return new PropTypeError("Invalid "+m+" `"+_+"` of type `"+getPropType(x)+"` supplied to `"+g+"`, expected an array.");for(var T=0;T<x.length;T++){var W=t(x,T,g,m,_+"["+T+"]",v);if(W instanceof Error)return W}return null})}function createElementTypeChecker(){return createChainableTypeChecker(function(a,p,g,m,v){var _=a[p];return t(_)?null:new PropTypeError("Invalid "+m+" `"+v+"` of type `"+getPropType(_)+"` supplied to `"+g+"`, expected a single ReactElement.")})}function createElementTypeTypeChecker(){return createChainableTypeChecker(function(t,a,p,m,v){var _=t[a];return g.isValidElementType(_)?null:new PropTypeError("Invalid "+m+" `"+v+"` of type `"+getPropType(_)+"` supplied to `"+p+"`, expected a single ReactElement type.")})}function createInstanceTypeChecker(t){return createChainableTypeChecker(function(a,p,g,m,v){if(!(a[p]instanceof t)){var _=t.name||T;return new PropTypeError("Invalid "+m+" `"+v+"` of type `"+getClassName(a[p])+"` supplied to `"+g+"`, expected instance of `"+_+"`.")}return null})}function createEnumTypeChecker(t){return Array.isArray(t)?createChainableTypeChecker(function(a,p,g,m,v){for(var _=a[p],x=0;x<t.length;x++)if(is(_,t[x]))return null;var T=JSON.stringify(t,function(t,a){return"symbol"===getPreciseType(a)?String(a):a});return new PropTypeError("Invalid "+m+" `"+v+"` of value `"+String(_)+"` supplied to `"+g+"`, expected one of "+T+".")}):(arguments.length>1?printWarning("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):printWarning("Invalid argument supplied to oneOf, expected an array."),emptyFunctionThatReturnsNull)}function createObjectOfTypeChecker(t){return createChainableTypeChecker(function(a,p,g,m,x){if("function"!=typeof t)return new PropTypeError("Property `"+x+"` of component `"+g+"` has invalid PropType notation inside objectOf.");var T=a[p],W=getPropType(T);if("object"!==W)return new PropTypeError("Invalid "+m+" `"+x+"` of type `"+W+"` supplied to `"+g+"`, expected an object.");for(var z in T)if(_(T,z)){var F=t(T,z,g,m,x+"."+z,v);if(F instanceof Error)return F}return null})}function createUnionTypeChecker(t){if(!Array.isArray(t))return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."),emptyFunctionThatReturnsNull;for(var a=0;a<t.length;a++){var p=t[a];if("function"!=typeof p)return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+getPostfixForTypeWarning(p)+" at index "+a+"."),emptyFunctionThatReturnsNull}return createChainableTypeChecker(function(a,p,g,m,x){for(var T=[],W=0;W<t.length;W++){var z=(0,t[W])(a,p,g,m,x,v);if(null==z)return null;z.data&&_(z.data,"expectedType")&&T.push(z.data.expectedType)}return new PropTypeError("Invalid "+m+" `"+x+"` supplied to `"+g+"`"+(T.length>0?", expected one of type ["+T.join(", ")+"]":"")+".")})}function createNodeChecker(){return createChainableTypeChecker(function(t,a,p,g,m){return isNode(t[a])?null:new PropTypeError("Invalid "+g+" `"+m+"` supplied to `"+p+"`, expected a ReactNode.")})}function invalidValidatorError(t,a,p,g,m){return new PropTypeError((t||"React class")+": "+a+" type `"+p+"."+g+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+m+"`.")}function createShapeTypeChecker(t){return createChainableTypeChecker(function(a,p,g,m,_){var x=a[p],T=getPropType(x);if("object"!==T)return new PropTypeError("Invalid "+m+" `"+_+"` of type `"+T+"` supplied to `"+g+"`, expected `object`.");for(var W in t){var z=t[W];if("function"!=typeof z)return invalidValidatorError(g,m,_,W,getPreciseType(z));var F=z(x,W,g,m,_+"."+W,v);if(F)return F}return null})}function createStrictShapeTypeChecker(t){return createChainableTypeChecker(function(a,p,g,x,T){var W=a[p],z=getPropType(W);if("object"!==z)return new PropTypeError("Invalid "+x+" `"+T+"` of type `"+z+"` supplied to `"+g+"`, expected `object`.");var F=m({},a[p],t);for(var Z in F){var Y=t[Z];if(_(t,Z)&&"function"!=typeof Y)return invalidValidatorError(g,x,T,Z,getPreciseType(Y));if(!Y)return new PropTypeError("Invalid "+x+" `"+T+"` key `"+Z+"` supplied to `"+g+"`.\nBad object: "+JSON.stringify(a[p],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(t),null,"  "));var X=Y(W,Z,g,x,T+"."+Z,v);if(X)return X}return null})}function isNode(a){switch(typeof a){case"number":case"string":case"undefined":return!0;case"boolean":return!a;case"object":if(Array.isArray(a))return a.every(isNode);if(null===a||t(a))return!0;var p=getIteratorFn(a);if(!p)return!1;var g,m=p.call(a);if(p!==a.entries){for(;!(g=m.next()).done;)if(!isNode(g.value))return!1}else for(;!(g=m.next()).done;){var v=g.value;if(v&&!isNode(v[1]))return!1}return!0;default:return!1}}function isSymbol(t,a){return"symbol"===t||!!a&&!!("Symbol"===a["@@toStringTag"]||"function"==typeof Symbol&&a instanceof Symbol)}function getPropType(t){var a=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":isSymbol(a,t)?"symbol":a}function getPreciseType(t){if(null==t)return""+t;var a=getPropType(t);if("object"===a){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return a}function getPostfixForTypeWarning(t){var a=getPreciseType(t);switch(a){case"array":case"object":return"an "+a;case"boolean":case"date":case"regexp":return"a "+a;default:return a}}function getClassName(t){return t.constructor&&t.constructor.name?t.constructor.name:T}return PropTypeError.prototype=Error.prototype,W.checkPropTypes=x,W.resetWarningCache=x.resetWarningCache,W.PropTypes=W,W}},"./node_modules/prop-types/index.js":(t,a,p)=>{var g=p(/*! react-is */"./node_modules/react-is/index.js");t.exports=p(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(g.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":t=>{t.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(t,a)=>{"use strict";!function(){var t="function"==typeof Symbol&&Symbol.for,p=t?Symbol.for("react.element"):60103,g=t?Symbol.for("react.portal"):60106,m=t?Symbol.for("react.fragment"):60107,v=t?Symbol.for("react.strict_mode"):60108,_=t?Symbol.for("react.profiler"):60114,x=t?Symbol.for("react.provider"):60109,T=t?Symbol.for("react.context"):60110,W=t?Symbol.for("react.async_mode"):60111,z=t?Symbol.for("react.concurrent_mode"):60111,F=t?Symbol.for("react.forward_ref"):60112,Z=t?Symbol.for("react.suspense"):60113,Y=t?Symbol.for("react.suspense_list"):60120,X=t?Symbol.for("react.memo"):60115,Q=t?Symbol.for("react.lazy"):60116,J=t?Symbol.for("react.block"):60121,ei=t?Symbol.for("react.fundamental"):60117,eo=t?Symbol.for("react.responder"):60118,ea=t?Symbol.for("react.scope"):60119;function isValidElementType(t){return"string"==typeof t||"function"==typeof t||t===m||t===z||t===_||t===v||t===Z||t===Y||"object"==typeof t&&null!==t&&(t.$$typeof===Q||t.$$typeof===X||t.$$typeof===x||t.$$typeof===T||t.$$typeof===F||t.$$typeof===ei||t.$$typeof===eo||t.$$typeof===ea||t.$$typeof===J)}function typeOf(t){if("object"==typeof t&&null!==t){var a=t.$$typeof;switch(a){case p:var Y=t.type;switch(Y){case W:case z:case m:case _:case v:case Z:return Y;default:var J=Y&&Y.$$typeof;switch(J){case T:case F:case Q:case X:case x:return J;default:return a}}case g:return a}}}var es=!1;function isAsyncMode(t){return es||(es=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),isConcurrentMode(t)||typeOf(t)===W}function isConcurrentMode(t){return typeOf(t)===z}function isContextConsumer(t){return typeOf(t)===T}function isContextProvider(t){return typeOf(t)===x}function isElement(t){return"object"==typeof t&&null!==t&&t.$$typeof===p}function isForwardRef(t){return typeOf(t)===F}function isFragment(t){return typeOf(t)===m}function isLazy(t){return typeOf(t)===Q}function isMemo(t){return typeOf(t)===X}function isPortal(t){return typeOf(t)===g}function isProfiler(t){return typeOf(t)===_}function isStrictMode(t){return typeOf(t)===v}function isSuspense(t){return typeOf(t)===Z}a.AsyncMode=W,a.ConcurrentMode=z,a.ContextConsumer=T,a.ContextProvider=x,a.Element=p,a.ForwardRef=F,a.Fragment=m,a.Lazy=Q,a.Memo=X,a.Portal=g,a.Profiler=_,a.StrictMode=v,a.Suspense=Z,a.isAsyncMode=isAsyncMode,a.isConcurrentMode=isConcurrentMode,a.isContextConsumer=isContextConsumer,a.isContextProvider=isContextProvider,a.isElement=isElement,a.isForwardRef=isForwardRef,a.isFragment=isFragment,a.isLazy=isLazy,a.isMemo=isMemo,a.isPortal=isPortal,a.isProfiler=isProfiler,a.isStrictMode=isStrictMode,a.isSuspense=isSuspense,a.isValidElementType=isValidElementType,a.typeOf=typeOf}()},"./node_modules/react-is/index.js":(t,a,p)=>{"use strict";t.exports=p(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(t,a,p)=>{"use strict";function shallowEqualObjects(t,a){if(t===a)return!0;if(!t||!a)return!1;var p=Object.keys(t),g=Object.keys(a),m=p.length;if(g.length!==m)return!1;for(var v=0;v<m;v++){var _=p[v];if(t[_]!==a[_]||!Object.prototype.hasOwnProperty.call(a,_))return!1}return!0}function shallowEqualArrays(t,a){if(t===a)return!0;if(!t||!a)return!1;var p=t.length;if(a.length!==p)return!1;for(var g=0;g<p;g++)if(t[g]!==a[g])return!1;return!0}p.r(a),p.d(a,{shallowEqualArrays:()=>shallowEqualArrays,shallowEqualObjects:()=>shallowEqualObjects})},"./src/Component.ts":function(t,a,p){"use strict";var g=this&&this.__rest||function(t,a){var p={};for(var g in t)Object.prototype.hasOwnProperty.call(t,g)&&0>a.indexOf(g)&&(p[g]=t[g]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var m=0,g=Object.getOwnPropertySymbols(t);m<g.length;m++)0>a.indexOf(g[m])&&Object.prototype.propertyIsEnumerable.call(t,g[m])&&(p[g[m]]=t[g[m]]);return p},m=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0});var v=m(p(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));a.default=function(t){var a=t.children,p=t.device,m=t.onChange,_=g(t,["children","device","onChange"]),x=(0,v.default)(_,p,m);return"function"==typeof a?a(x):x?a:null}},"./src/Context.ts":(t,a,p)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var g=(0,p(/*! react */"react").createContext)(void 0);a.default=g},"./src/index.ts":function(t,a,p){"use strict";var g=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var m=g(p(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));a.useMediaQuery=m.default;var v=g(p(/*! ./Component */"./src/Component.ts"));a.default=v.default;var _=g(p(/*! ./toQuery */"./src/toQuery.ts"));a.toQuery=_.default;var x=g(p(/*! ./Context */"./src/Context.ts"));a.Context=x.default},"./src/mediaQuery.ts":function(t,a,p){"use strict";var g=this&&this.__assign||function(){return(g=Object.assign||function(t){for(var a,p=1,g=arguments.length;p<g;p++)for(var m in a=arguments[p])Object.prototype.hasOwnProperty.call(a,m)&&(t[m]=a[m]);return t}).apply(this,arguments)},m=this&&this.__rest||function(t,a){var p={};for(var g in t)Object.prototype.hasOwnProperty.call(t,g)&&0>a.indexOf(g)&&(p[g]=t[g]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var m=0,g=Object.getOwnPropertySymbols(t);m<g.length;m++)0>a.indexOf(g[m])&&Object.prototype.propertyIsEnumerable.call(t,g[m])&&(p[g[m]]=t[g[m]]);return p},v=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0});var _=v(p(/*! prop-types */"./node_modules/prop-types/index.js")),x=_.default.oneOfType([_.default.string,_.default.number]),T={all:_.default.bool,grid:_.default.bool,aural:_.default.bool,braille:_.default.bool,handheld:_.default.bool,print:_.default.bool,projection:_.default.bool,screen:_.default.bool,tty:_.default.bool,tv:_.default.bool,embossed:_.default.bool},W={orientation:_.default.oneOf(["portrait","landscape"]),scan:_.default.oneOf(["progressive","interlace"]),aspectRatio:_.default.string,deviceAspectRatio:_.default.string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:_.default.bool,colorIndex:_.default.bool,monochrome:_.default.bool,resolution:x,type:Object.keys(T)};W.type;var z=m(W,["type"]),F=g({minAspectRatio:_.default.string,maxAspectRatio:_.default.string,minDeviceAspectRatio:_.default.string,maxDeviceAspectRatio:_.default.string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:_.default.number,maxColor:_.default.number,minColorIndex:_.default.number,maxColorIndex:_.default.number,minMonochrome:_.default.number,maxMonochrome:_.default.number,minResolution:x,maxResolution:x},z),Z=g(g({},T),F);a.default={all:Z,types:T,matchers:W,features:F}},"./src/toQuery.ts":function(t,a,p){"use strict";var g=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0});var m=g(p(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),v=g(p(/*! ./mediaQuery */"./src/mediaQuery.ts")),keyVal=function(t,a){var p=(0,m.default)(t);return("number"==typeof a&&(a="".concat(a,"px")),!0===a)?p:!1===a?"not ".concat(p):"(".concat(p,": ").concat(a,")")};a.default=function(t){var a=[];return Object.keys(v.default.all).forEach(function(p){var g=t[p];null!=g&&a.push(keyVal(p,g))}),a.join(" and ")}},"./src/useMediaQuery.ts":function(t,a,p){"use strict";var g=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0});var m=p(/*! react */"react"),v=g(p(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),_=g(p(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),x=p(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),T=g(p(/*! ./toQuery */"./src/toQuery.ts")),W=g(p(/*! ./Context */"./src/Context.ts")),hyphenateKeys=function(t){if(t)return Object.keys(t).reduce(function(a,p){return a[(0,_.default)(p)]=t[p],a},{})},useIsUpdate=function(){var t=(0,m.useRef)(!1);return(0,m.useEffect)(function(){t.current=!0},[]),t.current},useDevice=function(t){var a=(0,m.useContext)(W.default),getDevice=function(){return hyphenateKeys(t)||hyphenateKeys(a)},p=(0,m.useState)(getDevice),g=p[0],v=p[1];return(0,m.useEffect)(function(){var t=getDevice();(0,x.shallowEqualObjects)(g,t)||v(t)},[t,a]),g},useQuery=function(t){var getQuery=function(){return t.query||(0,T.default)(t)},a=(0,m.useState)(getQuery),p=a[0],g=a[1];return(0,m.useEffect)(function(){var t=getQuery();p!==t&&g(t)},[t]),p},useMatchMedia=function(t,a){var getMatchMedia=function(){return(0,v.default)(t,a||{},!!a)},p=(0,m.useState)(getMatchMedia),g=p[0],_=p[1],x=useIsUpdate();return(0,m.useEffect)(function(){if(x){var t=getMatchMedia();return _(t),function(){t&&t.dispose()}}},[t,a]),g},useMatches=function(t){var a=(0,m.useState)(t.matches),p=a[0],g=a[1];return(0,m.useEffect)(function(){var updateMatches=function(t){g(t.matches)};return t.addListener(updateMatches),g(t.matches),function(){t.removeListener(updateMatches)}},[t]),p};a.default=function(t,a,p){var g=useDevice(a),v=useQuery(t);if(!v)throw Error("Invalid or missing MediaQuery!");var _=useMatchMedia(v,g),x=useMatches(_),T=useIsUpdate();return(0,m.useEffect)(function(){T&&p&&p(x)},[x]),(0,m.useEffect)(function(){return function(){_&&_.dispose()}},[]),x}},react:t=>{"use strict";t.exports=g}},a={};function __nested_webpack_require_62230__(p){var g=a[p];if(void 0!==g)return g.exports;var m=a[p]={exports:{}};return t[p].call(m.exports,m,m.exports,__nested_webpack_require_62230__),m.exports}return __nested_webpack_require_62230__.d=(t,a)=>{for(var p in a)__nested_webpack_require_62230__.o(a,p)&&!__nested_webpack_require_62230__.o(t,p)&&Object.defineProperty(t,p,{enumerable:!0,get:a[p]})},__nested_webpack_require_62230__.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),__nested_webpack_require_62230__.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__nested_webpack_require_62230__("./src/index.ts")})())},53297:function(t){"use strict";t.exports=(t,a)=>{if(!("string"==typeof t&&"string"==typeof a))throw TypeError("Expected the arguments to be of type `string`");if(""===a)return[t];let p=t.indexOf(a);return -1===p?[t]:[t.slice(0,p),t.slice(p+a.length)]}},12235:function(t){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)},62846:function(t,a,p){"use strict";p.d(a,{fl:function(){return b},iv:function(){return i},Ts:function(){return eo},Qu:function(){return f},$m:function(){return r}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=globalThis,m=g.ShadowRoot&&(void 0===g.ShadyCSS||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,v=Symbol(),_=new WeakMap;let n=class n{constructor(t,a,p){if(this._$cssResult$=!0,p!==v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=a}get styleSheet(){let t=this.o,a=this.t;if(m&&void 0===t){let p=void 0!==a&&1===a.length;p&&(t=_.get(a)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),p&&_.set(a,t))}return t}toString(){return this.cssText}};let r=t=>new n("string"==typeof t?t:t+"",void 0,v),i=(t,...a)=>{let p=1===t.length?t[0]:a.reduce((a,p,g)=>a+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(p)+t[g+1],t[0]);return new n(p,t,v)},S=(t,a)=>{if(m)t.adoptedStyleSheets=a.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let p of a){let a=document.createElement("style"),m=g.litNonce;void 0!==m&&a.setAttribute("nonce",m),a.textContent=p.cssText,t.appendChild(a)}},x=m?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let a="";for(let p of t.cssRules)a+=p.cssText;return r(a)})(t):t,{is:T,defineProperty:W,getOwnPropertyDescriptor:z,getOwnPropertyNames:F,getOwnPropertySymbols:Z,getPrototypeOf:Y}=Object,X=globalThis,Q=X.trustedTypes,J=Q?Q.emptyScript:"",ei=X.reactiveElementPolyfillSupport,d=(t,a)=>t,eo={toAttribute(t,a){switch(a){case Boolean:t=t?J:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,a){let p=t;switch(a){case Boolean:p=null!==t;break;case Number:p=null===t?null:Number(t);break;case Object:case Array:try{p=JSON.parse(t)}catch(t){p=null}}return p}},f=(t,a)=>!T(t,a),ea={attribute:!0,type:String,converter:eo,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),X.litPropertyMetadata??=new WeakMap;let b=class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,a=ea){if(a.state&&(a.attribute=!1),this._$Ei(),this.elementProperties.set(t,a),!a.noAccessor){let p=Symbol(),g=this.getPropertyDescriptor(t,p,a);void 0!==g&&W(this.prototype,t,g)}}static getPropertyDescriptor(t,a,p){let{get:g,set:m}=z(this.prototype,t)??{get(){return this[a]},set(t){this[a]=t}};return{get(){return g?.call(this)},set(a){let v=g?.call(this);m.call(this,a),this.requestUpdate(t,v,p)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ea}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;let t=Y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){let t=this.properties,a=[...F(t),...Z(t)];for(let p of a)this.createProperty(p,t[p])}let t=this[Symbol.metadata];if(null!==t){let a=litPropertyMetadata.get(t);if(void 0!==a)for(let[t,p]of a)this.elementProperties.set(t,p)}for(let[t,a]of(this._$Eh=new Map,this.elementProperties)){let p=this._$Eu(t,a);void 0!==p&&this._$Eh.set(p,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let a=[];if(Array.isArray(t)){let p=new Set(t.flat(1/0).reverse());for(let t of p)a.unshift(x(t))}else void 0!==t&&a.push(x(t));return a}static _$Eu(t,a){let p=a.attribute;return!1===p?void 0:"string"==typeof p?p:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,a=this.constructor.elementProperties;for(let p of a.keys())this.hasOwnProperty(p)&&(t.set(p,this[p]),delete this[p]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,a,p){this._$AK(t,p)}_$EO(t,a){let p=this.constructor.elementProperties.get(t),g=this.constructor._$Eu(t,p);if(void 0!==g&&!0===p.reflect){let m=(void 0!==p.converter?.toAttribute?p.converter:eo).toAttribute(a,p.type);this._$Em=t,null==m?this.removeAttribute(g):this.setAttribute(g,m),this._$Em=null}}_$AK(t,a){let p=this.constructor,g=p._$Eh.get(t);if(void 0!==g&&this._$Em!==g){let t=p.getPropertyOptions(g),m="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:eo;this._$Em=g,this[g]=m.fromAttribute(a,t.type),this._$Em=null}}requestUpdate(t,a,p,g=!1,m){if(void 0!==t){if(!((p??=this.constructor.getPropertyOptions(t)).hasChanged??f)(g?m:this[t],a))return;this.C(t,a,p)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,a,p){this._$AL.has(t)||this._$AL.set(t,a),!0===p.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[t,a]of this._$Ep)this[t]=a;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[a,p]of t)!0!==p.wrapped||this._$AL.has(a)||void 0===this[a]||this.C(a,this[a],p)}let t=!1,a=this._$AL;try{(t=this.shouldUpdate(a))?(this.willUpdate(a),this._$ES?.forEach(t=>t.hostUpdate?.()),this.update(a)):this._$ET()}catch(a){throw t=!1,this._$ET(),a}t&&this._$AE(a)}willUpdate(t){}_$AE(t){this._$ES?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,ei?.({ReactiveElement:b}),(X.reactiveElementVersions??=[]).push("2.0.1")},64461:function(t,a,p){"use strict";p.d(a,{AccountController:function(){return x},ApiController:function(){return eh},WM:function(){return Y},fz:function(){return eI},Lr:function(){return eP},ConnectionController:function(){return ex},ConnectorController:function(){return Q},bq:function(){return m},j1:function(){return v},Xs:function(){return em},IN:function(){return e_},NetworkController:function(){return ea},OptionsController:function(){return el},Ie:function(){return ei},RouterController:function(){return ey},SnackController:function(){return ek},MO:function(){return F},ThemeController:function(){return eS}});var g=p(49233);function subscribeKey(t,a,p,m){let v=t[a];return(0,g.Ld)(t,()=>{let g=t[a];Object.is(v,g)||p(v=g)},m)}Symbol();let m={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},v={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let t=navigator.userAgent.toLowerCase();return v.isMobile()&&t.includes("android")},isIos(){let t=navigator.userAgent.toLowerCase();return v.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:t=>!t||t-Date.now()<=m.TEN_SEC_MS,isAllowedRetry:t=>Date.now()-t>=m.ONE_SEC_MS,copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry:()=>Date.now()+m.FOUR_MINUTES_MS,getPlainAddress:t=>t.split(":")[2],wait:async t=>new Promise(a=>{setTimeout(a,t)}),debounce(t,a=500){let p;return(...g)=>{function next(){t(...g)}p&&clearTimeout(p),p=setTimeout(next,a)}},isHttpUrl:t=>t.startsWith("http://")||t.startsWith("https://"),formatNativeUrl(t,a){if(v.isHttpUrl(t))return this.formatUniversalUrl(t,a);let p=t;p.includes("://")||(p=t.replaceAll("/","").replaceAll(":",""),p=`${p}://`),p.endsWith("/")||(p=`${p}/`);let g=encodeURIComponent(a);return{redirect:`${p}wc?uri=${g}`,href:p}},formatUniversalUrl(t,a){if(!v.isHttpUrl(t))return this.formatNativeUrl(t,a);let p=t;p.endsWith("/")||(p=`${p}/`);let g=encodeURIComponent(a);return{redirect:`${p}wc?uri=${g}`,href:p}},openHref(t,a){window.open(t,a,"noreferrer noopener")},async preloadImage(t){let a=new Promise((a,p)=>{let g=new Image;g.onload=a,g.onerror=p,g.crossOrigin="anonymous",g.src=t});return Promise.race([a,v.wait(2e3)])},formatBalance(t,a){let p;if("0"===t)p="0.000";else if("string"==typeof t){let a=Number(t);a&&(p=a.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return p?`${p} ${a}`:"0.000"},isRestrictedRegion(){try{let{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),a=t.toUpperCase();return m.RESTRICTED_TIMEZONES.includes(a)}catch{return!1}},getApiUrl:()=>v.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>v.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>v.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{let a=16*Math.random()|0;return("x"===t?a:3&a|8).toString(16)})},_=(0,g.sj)({isConnected:!1}),x={state:_,subscribe:t=>(0,g.Ld)(_,()=>t(_)),subscribeKey:(t,a)=>subscribeKey(_,t,a),setIsConnected(t){_.isConnected=t},setCaipAddress(t){_.caipAddress=t,_.address=t?v.getPlainAddress(t):void 0},setBalance(t,a){_.balance=t,_.balanceSymbol=a},setProfileName(t){_.profileName=t},setProfileImage(t){_.profileImage=t},setAddressExplorerUrl(t){_.addressExplorerUrl=t},resetAccount(){_.isConnected=!1,_.caipAddress=void 0,_.address=void 0,_.balance=void 0,_.balanceSymbol=void 0,_.profileName=void 0,_.profileImage=void 0,_.addressExplorerUrl=void 0}};let FetchUtil=class FetchUtil{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...a}){let p=this.createUrl(a),g=await fetch(p,{method:"GET",headers:t});return g.json()}async getBlob({headers:t,...a}){let p=this.createUrl(a),g=await fetch(p,{method:"GET",headers:t});return g.blob()}async post({body:t,headers:a,...p}){let g=this.createUrl(p),m=await fetch(g,{method:"POST",headers:a,body:t?JSON.stringify(t):void 0});return m.json()}async put({body:t,headers:a,...p}){let g=this.createUrl(p),m=await fetch(g,{method:"PUT",headers:a,body:t?JSON.stringify(t):void 0});return m.json()}async delete({body:t,headers:a,...p}){let g=this.createUrl(p),m=await fetch(g,{method:"DELETE",headers:a,body:t?JSON.stringify(t):void 0});return m.json()}createUrl({path:t,params:a}){let p=new URL(t,this.baseUrl);return a&&Object.entries(a).forEach(([t,a])=>{a&&p.searchParams.append(t,a)}),p}};let T="WALLETCONNECT_DEEPLINK_CHOICE",W="@w3m/recent",z="@w3m/connected_wallet_image_url",F={setWalletConnectDeepLink({href:t,name:a}){try{localStorage.setItem(T,JSON.stringify({href:t,name:a}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let t=localStorage.getItem(T);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(T)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{let a=F.getRecentWallets(),p=a.find(a=>a.id===t.id);p||(a.unshift(t),a.length>2&&a.pop(),localStorage.setItem(W,JSON.stringify(a)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let t=localStorage.getItem(W);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(z,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(z)}catch{console.info("Unable to set Connected Wallet Image Url")}}},Z=(0,g.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Y={state:Z,subscribeNetworkImages:t=>(0,g.Ld)(Z.networkImages,()=>t(Z.networkImages)),subscribeKey:(t,a)=>subscribeKey(Z,t,a),setWalletImage(t,a){Z.walletImages[t]=a},setNetworkImage(t,a){Z.networkImages[t]=a},setConnectorImage(t,a){Z.connectorImages[t]=a},setTokenImage(t,a){Z.tokenImages[t]=a}},X=(0,g.sj)({connectors:[]}),Q={state:X,subscribeKey:(t,a)=>subscribeKey(X,t,a),setConnectors(t){X.connectors=t.map(t=>(0,g.iH)(t))},addConnector(t){X.connectors.push((0,g.iH)(t))},getConnectors:()=>X.connectors},J=(0,g.sj)({open:!1,selectedNetworkId:void 0}),ei={state:J,subscribe:t=>(0,g.Ld)(J,()=>t(J)),set(t){Object.assign(J,{...J,...t})}},eo=(0,g.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),ea={state:eo,subscribeKey:(t,a)=>subscribeKey(eo,t,a),_getClient(){if(!eo._client)throw Error("NetworkController client not set");return eo._client},setClient(t){eo._client=(0,g.iH)(t)},setCaipNetwork(t){eo.caipNetwork=t,ei.set({selectedNetworkId:t?.id})},setDefaultCaipNetwork(t){eo.caipNetwork=t,ei.set({selectedNetworkId:t?.id}),eo.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){eo.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){let t=await this._getClient().getApprovedCaipNetworksData();eo.supportsAllNetworks=t.supportsAllNetworks,eo.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),eo.caipNetwork=t},resetNetwork(){eo.isDefaultCaipNetwork||(eo.caipNetwork=void 0),eo.approvedCaipNetworkIds=void 0,eo.supportsAllNetworks=!0}},es=(0,g.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),el={state:es,subscribeKey:(t,a)=>subscribeKey(es,t,a),setProjectId(t){es.projectId=t},setIncludeWalletIds(t){es.includeWalletIds=t},setExcludeWalletIds(t){es.excludeWalletIds=t},setFeaturedWalletIds(t){es.featuredWalletIds=t},setTokens(t){es.tokens=t},setTermsConditionsUrl(t){es.termsConditionsUrl=t},setPrivacyPolicyUrl(t){es.privacyPolicyUrl=t},setCustomWallets(t){es.customWallets=t},setEnableAnalytics(t){es.enableAnalytics=t},setSdkVersion(t){es.sdkVersion=t},setMetadata(t){es.metadata=t}},ec=v.getApiUrl(),eu=new FetchUtil({baseUrl:ec}),ed=(0,g.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),eh={state:ed,subscribeKey:(t,a)=>subscribeKey(ed,t,a),_getApiHeaders(){let{projectId:t,sdkType:a,sdkVersion:p}=el.state;return{"x-project-id":t,"x-sdk-type":a,"x-sdk-version":p}},async _fetchWalletImage(t){let a=`${eu.baseUrl}/getWalletImage/${t}`,p=await eu.getBlob({path:a,headers:eh._getApiHeaders()});Y.setWalletImage(t,URL.createObjectURL(p))},async _fetchNetworkImage(t){let a=`${eu.baseUrl}/public/getAssetImage/${t}`,p=await eu.getBlob({path:a,headers:eh._getApiHeaders()});Y.setNetworkImage(t,URL.createObjectURL(p))},async _fetchConnectorImage(t){let a=`${eu.baseUrl}/public/getAssetImage/${t}`,p=await eu.getBlob({path:a,headers:eh._getApiHeaders()});Y.setConnectorImage(t,URL.createObjectURL(p))},async fetchNetworkImages(){let{requestedCaipNetworks:t}=ea.state,a=t?.map(({imageId:t})=>t).filter(Boolean);a&&await Promise.allSettled(a.map(t=>eh._fetchNetworkImage(t)))},async fetchConnectorImages(){let{connectors:t}=Q.state,a=t.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(a.map(t=>eh._fetchConnectorImage(t)))},async fetchFeaturedWallets(){let{featuredWalletIds:t}=el.state;if(t?.length){let{data:a}=await eu.get({path:"/getWallets",headers:eh._getApiHeaders(),params:{page:"1",entries:t?.length?String(t.length):"4",include:t?.join(",")}});a.sort((a,p)=>t.indexOf(a.id)-t.indexOf(p.id));let p=a.map(t=>t.image_id).filter(Boolean);await Promise.allSettled(p.map(t=>eh._fetchWalletImage(t))),ed.featured=a}},async fetchRecommendedWallets(){let{includeWalletIds:t,excludeWalletIds:a,featuredWalletIds:p}=el.state,g=[...a??[],...p??[]].filter(Boolean),{data:m,count:v}=await eu.get({path:"/getWallets",headers:eh._getApiHeaders(),params:{page:"1",entries:"4",include:t?.join(","),exclude:g?.join(",")}}),_=F.getRecentWallets(),x=m.map(t=>t.image_id).filter(Boolean),T=_.map(t=>t.image_id).filter(Boolean);await Promise.allSettled([...x,...T].map(t=>eh._fetchWalletImage(t))),ed.recommended=m,ed.count=v??0},async fetchWallets({page:t}){let{includeWalletIds:a,excludeWalletIds:p,featuredWalletIds:g}=el.state,m=[...ed.recommended.map(({id:t})=>t),...p??[],...g??[]].filter(Boolean),{data:_,count:x}=await eu.get({path:"/getWallets",headers:eh._getApiHeaders(),params:{page:String(t),entries:"40",include:a?.join(","),exclude:m.join(",")}}),T=_.map(t=>t.image_id).filter(Boolean);await Promise.allSettled([...T.map(t=>eh._fetchWalletImage(t)),v.wait(300)]),ed.wallets=[...ed.wallets,..._],ed.count=x>ed.count?x:ed.count,ed.page=t},async searchWallet({search:t}){let{includeWalletIds:a,excludeWalletIds:p}=el.state;ed.search=[];let{data:g}=await eu.get({path:"/getWallets",headers:eh._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:a?.join(","),exclude:p?.join(",")}}),m=g.map(t=>t.image_id).filter(Boolean);await Promise.allSettled([...m.map(t=>eh._fetchWalletImage(t)),v.wait(300)]),ed.search=g},prefetch(){ed.prefetchPromise=Promise.race([Promise.allSettled([eh.fetchFeaturedWallets(),eh.fetchRecommendedWallets(),eh.fetchNetworkImages(),eh.fetchConnectorImages()]),v.wait(3e3)])}},ef=v.getAnalyticsUrl(),ep=new FetchUtil({baseUrl:ef}),eg=["MODAL_CREATED"],ew=(0,g.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),em={state:ew,subscribe:t=>(0,g.Ld)(ew,()=>t(ew)),_getApiHeaders(){let{projectId:t,sdkType:a,sdkVersion:p}=el.state;return{"x-project-id":t,"x-sdk-type":a,"x-sdk-version":p}},async _sendAnalyticsEvent(t){try{if(eg.includes(t.data.event)||"undefined"==typeof window)return;await ep.post({path:"/e",headers:em._getApiHeaders(),body:{eventId:v.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){ew.timestamp=Date.now(),ew.data=t,el.state.enableAnalytics&&em._sendAnalyticsEvent(ew)}},eb=(0,g.sj)({view:"Connect",history:["Connect"]}),ey={state:eb,subscribeKey:(t,a)=>subscribeKey(eb,t,a),push(t,a){t!==eb.view&&(eb.view=t,eb.history.push(t),eb.data=a)},reset(t){eb.view=t,eb.history=[t]},replace(t){eb.history.length>1&&eb.history.at(-1)!==t&&(eb.view=t,eb.history[eb.history.length-1]=t)},goBack(){if(eb.history.length>1){eb.history.pop();let[t]=eb.history.slice(-1);t&&(eb.view=t)}}},ev=(0,g.sj)({open:!1}),e_={state:ev,subscribeKey:(t,a)=>subscribeKey(ev,t,a),async open(t){await eh.state.prefetchPromise,t?.view?ey.reset(t.view):x.state.isConnected?ey.reset("Account"):ey.reset("Connect"),ev.open=!0,ei.set({open:!0}),em.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){ev.open=!1,ei.set({open:!1}),em.sendEvent({type:"track",event:"MODAL_CLOSE"})}},eC=(0,g.sj)({wcError:!1,buffering:!1}),ex={state:eC,subscribeKey:(t,a)=>subscribeKey(eC,t,a),_getClient(){if(!eC._client)throw Error("ConnectionController client not set");return eC._client},setClient(t){eC._client=(0,g.iH)(t)},connectWalletConnect(){eC.wcPromise=this._getClient().connectWalletConnect(t=>{eC.wcUri=t,eC.wcPairingExpiry=v.getPairingExpiry()})},async connectExternal(t){await this._getClient().connectExternal?.(t)},checkInstalled(t){return this._getClient().checkInstalled?.(t)},resetWcConnection(){eC.wcUri=void 0,eC.wcPairingExpiry=void 0,eC.wcPromise=void 0,eC.wcLinking=void 0,eC.recentWallet=void 0,F.deleteWalletConnectDeepLink()},setWcLinking(t){eC.wcLinking=t},setWcError(t){eC.wcError=t,eC.buffering=!1},setRecentWallet(t){eC.recentWallet=t},setBuffering(t){eC.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},eE=(0,g.sj)({message:"",variant:"success",open:!1}),ek={state:eE,subscribeKey:(t,a)=>subscribeKey(eE,t,a),showSuccess(t){eE.message=t,eE.variant="success",eE.open=!0},showError(t){eE.message=t,eE.variant="error",eE.open=!0},hide(){eE.open=!1}},eD=(0,g.sj)({themeMode:"dark",themeVariables:{}}),eS={state:eD,subscribe:t=>(0,g.Ld)(eD,()=>t(eD)),setThemeMode(t){eD.themeMode=t},setThemeVariables(t){eD.themeVariables={...eD.themeVariables,...t}}},eO=v.getBlockchainApiUrl(),eA=new FetchUtil({baseUrl:eO}),eP={fetchIdentity:({caipChainId:t,address:a})=>eA.get({path:`/v1/identity/${a}`,params:{chainId:t,projectId:el.state.projectId}})},eI={getWalletImage:t=>t?.image_url?t?.image_url:t?.image_id?Y.state.walletImages[t.image_id]:void 0,getNetworkImage:t=>t?.imageUrl?t?.imageUrl:t?.imageId?Y.state.networkImages[t.imageId]:void 0,getConnectorImage:t=>t?.imageUrl?t.imageUrl:t?.imageId?Y.state.connectorImages[t.imageId]:void 0}},72585:function(t,a,p){"use strict";p.r(a),p.d(a,{W3mModal:function(){return W}});var g=p(64461),m=p(42421),v=p(28401),_=p(87859),x=v.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,__decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let T="scroll-lock",W=class extends v.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=g.IN.state.open,this.initializeTheming(),g.ApiController.prefetch(),this.unsubscribe.push(g.IN.subscribeKey("open",t=>t?this.onOpen():this.onClose())),g.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?v.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&g.IN.close()}initializeTheming(){let{themeVariables:t,themeMode:a}=g.ThemeController.state,p=m.UiHelperUtil.getColorTheme(a);(0,m.initializeTheming)(t,p)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,g.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let t=document.createElement("style");t.dataset.w3m=T,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){let t=document.head.querySelector(`style[data-w3m="${T}"]`);t&&t.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let t=this.shadowRoot?.querySelector("wui-card");t?.focus(),window.addEventListener("keydown",a=>{if("Escape"===a.key)g.IN.close();else if("Tab"===a.key){let{tagName:p}=a.target;!p||p.includes("W3M-")||p.includes("WUI-")||t?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};W.styles=x,__decorate([(0,_.SB)()],W.prototype,"open",void 0),W=__decorate([(0,m.customElement)("w3m-modal")],W)},42421:function(t,a,p){"use strict";let g,m,v;p.r(a),p.d(a,{UiHelperUtil:function(){return tx},WuiAccountButton:function(){return tI},WuiAllWalletsImage:function(){return tR},WuiAvatar:function(){return tS},WuiButton:function(){return tU},WuiCard:function(){return F},WuiCardSelect:function(){return tV},WuiCardSelectLoader:function(){return tL},WuiChip:function(){return tK},WuiConnectButton:function(){return tY},WuiCtaButton:function(){return tX},WuiEmailInput:function(){return t5},WuiFlex:function(){return tk},WuiGrid:function(){return rz},WuiIcon:function(){return eJ},WuiIconBox:function(){return tA},WuiIconLink:function(){return t6},WuiImage:function(){return e1},WuiInputElement:function(){return t7},WuiInputNumeric:function(){return rt},WuiInputText:function(){return t2},WuiLink:function(){return ri},WuiListItem:function(){return ra},WuiListTransaction:function(){return rp},WuiListWallet:function(){return rb},WuiLoadingHexagon:function(){return e3},WuiLoadingSpinner:function(){return e4},WuiLoadingThumbnail:function(){return e8},WuiLogo:function(){return rv},WuiLogoSelect:function(){return rC},WuiNetworkButton:function(){return rE},WuiNetworkImage:function(){return tF},WuiOtp:function(){return rD},WuiQrCode:function(){return rP},WuiSearchBar:function(){return rN},WuiSeparator:function(){return rH},WuiShimmer:function(){return e9},WuiSnackbar:function(){return r$},WuiTabs:function(){return rB},WuiTag:function(){return rw},WuiText:function(){return to},WuiTooltip:function(){return rj},WuiTransactionVisual:function(){return rh},WuiVisual:function(){return t_},WuiVisualThumbnail:function(){return rL},WuiWalletImage:function(){return tT},customElement:function(){return customElement},initializeTheming:function(){return initializeTheming},setColorTheme:function(){return setColorTheme},setThemeVariables:function(){return setThemeVariables}});var _=p(28401);function initializeTheming(t,a){g=document.createElement("style"),m=document.createElement("style"),v=document.createElement("style"),g.textContent=createRootStyles(t).core.cssText,m.textContent=createRootStyles(t).dark.cssText,v.textContent=createRootStyles(t).light.cssText,document.head.appendChild(g),document.head.appendChild(m),document.head.appendChild(v),setColorTheme(a)}function setColorTheme(t){m&&v&&("light"===t?(m.removeAttribute("media"),v.media="enabled"):(v.removeAttribute("media"),m.media="enabled"))}function setThemeVariables(t){g&&m&&v&&(g.textContent=createRootStyles(t).core.cssText,m.textContent=createRootStyles(t).dark.cssText,v.textContent=createRootStyles(t).light.cssText)}function createRootStyles(t){return{core:_.iv`
      :root {
        --w3m-color-mix-strength: ${(0,_.$m)(t?.["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,_.$m)(t?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${(0,_.$m)(t?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,_.$m)(t?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,_.$m)(t?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:_.iv`
      :root {
        --w3m-color-mix: ${(0,_.$m)(t?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,_.$m)(t?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:_.iv`
      :root {
        --w3m-color-mix: ${(0,_.$m)(t?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,_.$m)(t?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}let x=_.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,T=_.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,W=_.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function standardCustomElement(t,a){let{kind:p,elements:g}=a;return{kind:p,elements:g,finisher(a){customElements.get(t)||customElements.define(t,a)}}}function legacyCustomElement(t,a){return customElements.get(t)||customElements.define(t,a),a}function customElement(t){return function(a){return"function"==typeof a?legacyCustomElement(t,a):standardCustomElement(t,a)}}var z=_.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let F=class extends _.oi{render(){return _.dy`<slot></slot>`}};F.styles=[x,z],F=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([customElement("wui-card")],F);var Z=p(87859),Y=_.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let X=_.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Q=_.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,J=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ei=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eo=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,ea=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,es=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,el=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,ec=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,eu=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ed=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eh=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,ef=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ep=_.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,eg=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ew=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,em=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,eb=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,ey=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,ev=_.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,e_=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,eC=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ex=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,eE=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,ek=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,eD=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eS=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eO=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eA=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eP=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eI=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,eN=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,eT=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,e$=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,eR=_.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,eB=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,eU=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ej=_.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,eM=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,eL=_.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,eW=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,ez=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eF=_.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eH=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,eV=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eZ=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,eK=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,eq=_.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,eY=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,eG=_.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,eX=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var wui_icon_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eQ={allWallets:X,appStore:Q,chromeStore:ep,apple:J,arrowBottom:ei,arrowLeft:eo,arrowRight:ea,arrowTop:es,browser:el,checkmark:ec,chevronBottom:eu,chevronLeft:ed,chevronRight:eh,chevronTop:ef,clock:eg,close:ew,compass:eb,coinPlaceholder:em,copy:ey,cursor:ev,desktop:e_,disconnect:eC,discord:ex,etherscan:eE,extension:ek,externalLink:eD,facebook:eS,filters:eO,github:eA,google:eP,helpCircle:eI,infoCircle:eN,mail:eT,mobile:e$,networkPlaceholder:eR,nftPlaceholder:eB,off:eU,playStore:ej,qrCode:eM,refresh:eL,search:eW,swapHorizontal:ez,swapVertical:eF,telegram:eH,twitch:eV,twitter:eZ,twitterIcon:eK,wallet:eY,walletConnect:eG,walletPlaceholder:eq,warningCircle:eX},eJ=class extends _.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,_.dy`${eQ[this.name]}`}};eJ.styles=[x,W,Y],wui_icon_decorate([(0,Z.Cb)()],eJ.prototype,"size",void 0),wui_icon_decorate([(0,Z.Cb)()],eJ.prototype,"name",void 0),wui_icon_decorate([(0,Z.Cb)()],eJ.prototype,"color",void 0),eJ=wui_icon_decorate([customElement("wui-icon")],eJ);var e0=_.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,wui_image_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let e1=class extends _.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return _.dy`<img src=${this.src} alt=${this.alt} />`}};e1.styles=[x,W,e0],wui_image_decorate([(0,Z.Cb)()],e1.prototype,"src",void 0),wui_image_decorate([(0,Z.Cb)()],e1.prototype,"alt",void 0),e1=wui_image_decorate([customElement("wui-image")],e1);var e2=_.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let e3=class extends _.oi{render(){return _.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};e3.styles=[x,e2],e3=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([customElement("wui-loading-hexagon")],e3);var e5=_.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,wui_loading_spinner_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let e4=class extends _.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,_.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};e4.styles=[x,e5],wui_loading_spinner_decorate([(0,Z.Cb)()],e4.prototype,"color",void 0),wui_loading_spinner_decorate([(0,Z.Cb)()],e4.prototype,"size",void 0),e4=wui_loading_spinner_decorate([customElement("wui-loading-spinner")],e4);var e6=_.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,wui_loading_thumbnail_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let e8=class extends _.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let t=this.radius>50?50:this.radius,a=36-t;return _.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${116+a} ${245+a}"
          stroke-dashoffset=${360+1.75*a}
        />
      </svg>
    `}};e8.styles=[x,e6],wui_loading_thumbnail_decorate([(0,Z.Cb)({type:Number})],e8.prototype,"radius",void 0),e8=wui_loading_thumbnail_decorate([customElement("wui-loading-thumbnail")],e8);var e7=_.iv`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,wui_shimmer_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let e9=class extends _.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,_.dy`<slot></slot>`}};e9.styles=[e7],wui_shimmer_decorate([(0,Z.Cb)()],e9.prototype,"width",void 0),wui_shimmer_decorate([(0,Z.Cb)()],e9.prototype,"height",void 0),wui_shimmer_decorate([(0,Z.Cb)()],e9.prototype,"borderRadius",void 0),e9=wui_shimmer_decorate([customElement("wui-shimmer")],e9);var tt=p(24981);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e=t=>(...a)=>({_$litDirective$:t,values:a});let i=class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,p){this._$Ct=t,this._$AM=a,this._$Ci=p}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tr=e(class extends i{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(a=>t[a]).join(" ")+" "}update(t,[a]){if(void 0===this.it){for(let p in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),a)a[p]&&!this.st?.has(p)&&this.it.add(p);return this.render(a)}let p=t.element.classList;for(let t of this.it)t in a||(p.remove(t),this.it.delete(t));for(let t in a){let g=!!a[t];g===this.it.has(t)||this.st?.has(t)||(g?(p.add(t),this.it.add(t)):(p.remove(t),this.it.delete(t)))}return tt.Jb}});var ti=_.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,wui_text_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let to=class extends _.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,_.dy`<slot class=${tr(t)}></slot>`}};to.styles=[x,ti],wui_text_decorate([(0,Z.Cb)()],to.prototype,"variant",void 0),wui_text_decorate([(0,Z.Cb)()],to.prototype,"color",void 0),wui_text_decorate([(0,Z.Cb)()],to.prototype,"align",void 0),to=wui_text_decorate([customElement("wui-text")],to);let ta=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,ts=_.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,tl=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,tc=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tu=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,td=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,th=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tf=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,tp=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,tg=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,tw=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tm=_.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,tb=_.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var ty=_.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,wui_visual_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tv={browser:ta,dao:ts,defi:tl,defiAlt:tc,eth:tu,layers:td,lock:th,login:tf,network:tp,nft:tg,noun:tw,profile:tm,system:tb},t_=class extends _.oi{constructor(){super(...arguments),this.name="browser"}render(){return _.dy`${tv[this.name]}`}};t_.styles=[x,ty],wui_visual_decorate([(0,Z.Cb)()],t_.prototype,"name",void 0),t_=wui_visual_decorate([customElement("wui-visual")],t_);var tC=p(46402);let tx={getSpacingStyles:(t,a)=>Array.isArray(t)?t[a]?`var(--wui-spacing-${t[a]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName(t){let a=new URL(t);return a.hostname},getTruncateString:({string:t,charsStart:a,charsEnd:p,truncate:g})=>t.length<=a+p?t:"end"===g?`${t.substring(0,a)}...`:"start"===g?`...${t.substring(t.length-p)}`:`${t.substring(0,Math.floor(a))}...${t.substring(t.length-Math.floor(p))}`,generateAvatarColors(t){let a=t.toLowerCase().replace(/^0x/iu,""),p=a.substring(0,6),g=this.hexToRgb(p),m=[];for(let t=0;t<5;t+=1){let a=this.tintColor(g,.15*t);m.push(`rgb(${a[0]}, ${a[1]}, ${a[2]})`)}return`
    --local-color-1: ${m[0]};
    --local-color-2: ${m[1]};
    --local-color-3: ${m[2]};
    --local-color-4: ${m[3]};
    --local-color-5: ${m[4]};
   `},hexToRgb(t){let a=parseInt(t,16);return[a>>16&255,a>>8&255,255&a]},tintColor(t,a){let[p,g,m]=t;return[Math.round(p+(255-p)*a),Math.round(g+(255-g)*a),Math.round(m+(255-m)*a)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme:t=>t||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var tE=_.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,wui_flex_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tk=class extends _.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tx.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tx.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tx.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tx.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tx.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tx.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tx.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tx.getSpacingStyles(this.margin,3)};
    `,_.dy`<slot></slot>`}};tk.styles=[x,tE],wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"flexDirection",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"flexWrap",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"flexBasis",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"flexGrow",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"flexShrink",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"alignItems",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"justifyContent",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"columnGap",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"rowGap",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"gap",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"padding",void 0),wui_flex_decorate([(0,Z.Cb)()],tk.prototype,"margin",void 0),tk=wui_flex_decorate([customElement("wui-flex")],tk);var tD=_.iv`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,wui_avatar_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tS=class extends _.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return _.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",_.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let t=tx.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};tS.styles=[x,tD],wui_avatar_decorate([(0,Z.Cb)()],tS.prototype,"imageSrc",void 0),wui_avatar_decorate([(0,Z.Cb)()],tS.prototype,"alt",void 0),wui_avatar_decorate([(0,Z.Cb)()],tS.prototype,"address",void 0),tS=wui_avatar_decorate([customElement("wui-avatar")],tS);var tO=_.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,wui_icon_box_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tA=class extends _.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let t="xxs";switch(this.size){case"lg":t="lg";break;case"md":t="md";break;case"mdl":t="mdl";break;case"sm":t="xs";break;default:t="xxs"}let a="lg"===this.size,p="opaque"===this.background,g="accent-100"===this.backgroundColor&&p||"success-100"===this.backgroundColor&&p||"error-100"===this.backgroundColor&&p||"inverse-100"===this.backgroundColor&&p;return this.style.cssText=`
       --local-bg-value: ${g?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${g?"100%":a?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${a?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,_.dy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};tA.styles=[x,T,tO],wui_icon_box_decorate([(0,Z.Cb)()],tA.prototype,"size",void 0),wui_icon_box_decorate([(0,Z.Cb)()],tA.prototype,"backgroundColor",void 0),wui_icon_box_decorate([(0,Z.Cb)()],tA.prototype,"iconColor",void 0),wui_icon_box_decorate([(0,Z.Cb)()],tA.prototype,"background",void 0),wui_icon_box_decorate([(0,Z.Cb)({type:Boolean})],tA.prototype,"border",void 0),wui_icon_box_decorate([(0,Z.Cb)()],tA.prototype,"borderColor",void 0),wui_icon_box_decorate([(0,Z.Cb)()],tA.prototype,"icon",void 0),tA=wui_icon_box_decorate([customElement("wui-icon-box")],tA);var tP=_.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,wui_account_button_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tI=class extends _.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return _.dy`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${(0,tC.o)(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${tx.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let t=this.networkSrc?_.dy`<wui-image src=${this.networkSrc}></wui-image>`:_.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return _.dy`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};tI.styles=[x,T,tP],wui_account_button_decorate([(0,Z.Cb)()],tI.prototype,"networkSrc",void 0),wui_account_button_decorate([(0,Z.Cb)()],tI.prototype,"avatarSrc",void 0),wui_account_button_decorate([(0,Z.Cb)()],tI.prototype,"balance",void 0),wui_account_button_decorate([(0,Z.Cb)({type:Boolean})],tI.prototype,"disabled",void 0),wui_account_button_decorate([(0,Z.Cb)({type:Boolean})],tI.prototype,"isProfileName",void 0),wui_account_button_decorate([(0,Z.Cb)()],tI.prototype,"address",void 0),tI=wui_account_button_decorate([customElement("wui-account-button")],tI);var tN=_.iv`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,wui_wallet_image_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tT=class extends _.oi{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),_.dy` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?_.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:_.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tT.styles=[x,tN],wui_wallet_image_decorate([(0,Z.Cb)()],tT.prototype,"size",void 0),wui_wallet_image_decorate([(0,Z.Cb)()],tT.prototype,"name",void 0),wui_wallet_image_decorate([(0,Z.Cb)()],tT.prototype,"imageSrc",void 0),wui_wallet_image_decorate([(0,Z.Cb)()],tT.prototype,"walletIcon",void 0),tT=wui_wallet_image_decorate([customElement("wui-wallet-image")],tT);var t$=_.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,wui_all_wallets_image_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tR=class extends _.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let t=this.walletImages.length<4;return _.dy`${this.walletImages.slice(0,4).map(({src:t,walletName:a})=>_.dy`
          <wui-wallet-image
            size="inherit"
            imageSrc=${t}
            name=${(0,tC.o)(a)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(4-this.walletImages.length)].map(()=>_.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};tR.styles=[x,t$],wui_all_wallets_image_decorate([(0,Z.Cb)({type:Array})],tR.prototype,"walletImages",void 0),tR=wui_all_wallets_image_decorate([customElement("wui-all-wallets-image")],tR);var tB=_.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,wui_button_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tU=class extends _.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let t="md"===this.size?"paragraph-600":"small-600";return _.dy`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?_.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:_.dy``}};tU.styles=[x,T,tB],wui_button_decorate([(0,Z.Cb)()],tU.prototype,"size",void 0),wui_button_decorate([(0,Z.Cb)({type:Boolean})],tU.prototype,"disabled",void 0),wui_button_decorate([(0,Z.Cb)({type:Boolean})],tU.prototype,"fullWidth",void 0),wui_button_decorate([(0,Z.Cb)({type:Boolean})],tU.prototype,"loading",void 0),wui_button_decorate([(0,Z.Cb)()],tU.prototype,"variant",void 0),tU=wui_button_decorate([customElement("wui-button")],tU);let tj=_.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tM=_.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,wui_card_select_loader_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tL=class extends _.oi{constructor(){super(...arguments),this.type="wallet"}render(){return _.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?_.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tj}`:_.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tL.styles=[x,T,tM],wui_card_select_loader_decorate([(0,Z.Cb)()],tL.prototype,"type",void 0),tL=wui_card_select_loader_decorate([customElement("wui-card-select-loader")],tL);let tW=_.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var tz=_.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,wui_network_image_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tF=class extends _.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let t="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,_.dy`${this.templateVisual()} ${t?tW:tj}`}templateVisual(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:_.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tF.styles=[x,tz],wui_network_image_decorate([(0,Z.Cb)()],tF.prototype,"size",void 0),wui_network_image_decorate([(0,Z.Cb)()],tF.prototype,"name",void 0),wui_network_image_decorate([(0,Z.Cb)()],tF.prototype,"imageSrc",void 0),wui_network_image_decorate([(0,Z.Cb)({type:Boolean})],tF.prototype,"selected",void 0),tF=wui_network_image_decorate([customElement("wui-network-image")],tF);var tH=_.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,wui_card_select_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tV=class extends _.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return _.dy`
      <button data-selected=${(0,tC.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?_.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,tC.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:_.dy`
      <wui-wallet-image size="md" imageSrc=${(0,tC.o)(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};tV.styles=[x,T,tH],wui_card_select_decorate([(0,Z.Cb)()],tV.prototype,"name",void 0),wui_card_select_decorate([(0,Z.Cb)()],tV.prototype,"type",void 0),wui_card_select_decorate([(0,Z.Cb)()],tV.prototype,"imageSrc",void 0),wui_card_select_decorate([(0,Z.Cb)({type:Boolean})],tV.prototype,"disabled",void 0),wui_card_select_decorate([(0,Z.Cb)({type:Boolean})],tV.prototype,"selected",void 0),tV=wui_card_select_decorate([customElement("wui-card-select")],tV);var tZ=_.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,wui_chip_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tK=class extends _.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let t="transparent"===this.variant?"small-600":"paragraph-600";return _.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${tx.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};tK.styles=[x,T,tZ],wui_chip_decorate([(0,Z.Cb)()],tK.prototype,"variant",void 0),wui_chip_decorate([(0,Z.Cb)()],tK.prototype,"imageSrc",void 0),wui_chip_decorate([(0,Z.Cb)({type:Boolean})],tK.prototype,"disabled",void 0),wui_chip_decorate([(0,Z.Cb)()],tK.prototype,"icon",void 0),wui_chip_decorate([(0,Z.Cb)()],tK.prototype,"href",void 0),tK=wui_chip_decorate([customElement("wui-chip")],tK);var tq=_.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,wui_connect_button_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tY=class extends _.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let t="md"===this.size?"paragraph-600":"small-600";return _.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?_.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};tY.styles=[x,T,tq],wui_connect_button_decorate([(0,Z.Cb)()],tY.prototype,"size",void 0),wui_connect_button_decorate([(0,Z.Cb)({type:Boolean})],tY.prototype,"loading",void 0),tY=wui_connect_button_decorate([customElement("wui-connect-button")],tY);var tG=_.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,wui_cta_button_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tX=class extends _.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return _.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tX.styles=[x,T,tG],wui_cta_button_decorate([(0,Z.Cb)({type:Boolean})],tX.prototype,"disabled",void 0),wui_cta_button_decorate([(0,Z.Cb)()],tX.prototype,"label",void 0),wui_cta_button_decorate([(0,Z.Cb)()],tX.prototype,"buttonLabel",void 0),tX=wui_cta_button_decorate([customElement("wui-cta-button")],tX);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:tQ}=tt._$LH,directive_helpers_f=t=>void 0===t.strings,async_directive_s=(t,a)=>{let p=t._$AN;if(void 0===p)return!1;for(let t of p)t._$AO?.(a,!1),async_directive_s(t,a);return!0},o=t=>{let a,p;do{if(void 0===(a=t._$AM))break;(p=a._$AN).delete(t),t=a}while(0===p?.size)},async_directive_r=t=>{for(let a;a=t._$AM;t=a){let p=a._$AN;if(void 0===p)a._$AN=p=new Set;else if(p.has(t))break;p.add(t),async_directive_c(a)}};function async_directive_h(t){void 0!==this._$AN?(o(this),this._$AM=t,async_directive_r(this)):this._$AM=t}function async_directive_n(t,a=!1,p=0){let g=this._$AH,m=this._$AN;if(void 0!==m&&0!==m.size){if(a){if(Array.isArray(g))for(let t=p;t<g.length;t++)async_directive_s(g[t],!1),o(g[t]);else null!=g&&(async_directive_s(g,!1),o(g))}else async_directive_s(this,t)}}let async_directive_c=t=>{2==t.type&&(t._$AP??=async_directive_n,t._$AQ??=async_directive_h)};let f=class f extends i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,p){super._$AT(t,a,p),async_directive_r(this),this.isConnected=t._$AU}_$AO(t,a=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),a&&(async_directive_s(this,t),o(this))}setValue(t){if(directive_helpers_f(this._$Ct))this._$Ct._$AI(t,this);else{let a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ref_e=()=>new ref_h;let ref_h=class ref_h{};let tJ=new WeakMap,t0=e(class extends f{render(t){return tt.Ld}update(t,[a]){let p=a!==this.G;return p&&void 0!==this.G&&this.ot(void 0),(p||this.rt!==this.lt)&&(this.G=a,this.ct=t.options?.host,this.ot(this.lt=t.element)),tt.Ld}ot(t){if("function"==typeof this.G){let a=this.ct??globalThis,p=tJ.get(a);void 0===p&&(p=new WeakMap,tJ.set(a,p)),void 0!==p.get(this.G)&&this.G.call(this.ct,void 0),p.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?tJ.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var t1=_.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,wui_input_text_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let t2=class extends _.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=ref_e()}render(){let t=`wui-size-${this.size}`;return _.dy` ${this.templateIcon()}
      <input
        ${t0(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${(0,tC.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?_.dy`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};t2.styles=[x,T,t1],wui_input_text_decorate([(0,Z.Cb)()],t2.prototype,"size",void 0),wui_input_text_decorate([(0,Z.Cb)()],t2.prototype,"icon",void 0),wui_input_text_decorate([(0,Z.Cb)({type:Boolean})],t2.prototype,"disabled",void 0),wui_input_text_decorate([(0,Z.Cb)()],t2.prototype,"placeholder",void 0),wui_input_text_decorate([(0,Z.Cb)()],t2.prototype,"type",void 0),wui_input_text_decorate([(0,Z.Cb)()],t2.prototype,"keyHint",void 0),t2=wui_input_text_decorate([customElement("wui-input-text")],t2);var t3=_.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,wui_email_input_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let t5=class extends _.oi{render(){return _.dy`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?_.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};t5.styles=[x,t3],wui_email_input_decorate([(0,Z.Cb)()],t5.prototype,"errorMessage",void 0),t5=wui_email_input_decorate([customElement("wui-email-input")],t5);var t4=_.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,wui_icon_link_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let t6=class extends _.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};t6.styles=[x,T,W,t4],wui_icon_link_decorate([(0,Z.Cb)()],t6.prototype,"size",void 0),wui_icon_link_decorate([(0,Z.Cb)({type:Boolean})],t6.prototype,"disabled",void 0),wui_icon_link_decorate([(0,Z.Cb)()],t6.prototype,"icon",void 0),wui_icon_link_decorate([(0,Z.Cb)()],t6.prototype,"iconColor",void 0),t6=wui_icon_link_decorate([customElement("wui-icon-link")],t6);var t8=_.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,wui_input_element_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let t7=class extends _.oi{constructor(){super(...arguments),this.icon="copy"}render(){return _.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};t7.styles=[x,T,t8],wui_input_element_decorate([(0,Z.Cb)()],t7.prototype,"icon",void 0),t7=wui_input_element_decorate([customElement("wui-input-element")],t7);var t9=_.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,wui_input_numeric_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rt=class extends _.oi{constructor(){super(...arguments),this.disabled=!1}render(){return _.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};rt.styles=[x,T,t9],wui_input_numeric_decorate([(0,Z.Cb)({type:Boolean})],rt.prototype,"disabled",void 0),rt=wui_input_numeric_decorate([customElement("wui-input-numeric")],rt);var rr=_.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,wui_link_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let ri=class extends _.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ri.styles=[x,T,rr],wui_link_decorate([(0,Z.Cb)({type:Boolean})],ri.prototype,"disabled",void 0),wui_link_decorate([(0,Z.Cb)()],ri.prototype,"color",void 0),ri=wui_link_decorate([customElement("wui-link")],ri);var ro=_.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,wui_list_item_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let ra=class extends _.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return _.dy`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,tC.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return _.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return _.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",a="square-blue"===this.iconVariant?"mdl":"md";return _.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${a}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?_.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:_.dy``}chevronTemplate(){return this.chevron?_.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};ra.styles=[x,T,ro],wui_list_item_decorate([(0,Z.Cb)()],ra.prototype,"icon",void 0),wui_list_item_decorate([(0,Z.Cb)()],ra.prototype,"variant",void 0),wui_list_item_decorate([(0,Z.Cb)()],ra.prototype,"iconVariant",void 0),wui_list_item_decorate([(0,Z.Cb)({type:Boolean})],ra.prototype,"disabled",void 0),wui_list_item_decorate([(0,Z.Cb)()],ra.prototype,"imageSrc",void 0),wui_list_item_decorate([(0,Z.Cb)()],ra.prototype,"alt",void 0),wui_list_item_decorate([(0,Z.Cb)({type:Boolean})],ra.prototype,"chevron",void 0),wui_list_item_decorate([(0,Z.Cb)({type:Boolean})],ra.prototype,"loading",void 0),ra=wui_list_item_decorate([customElement("wui-list-item")],ra);var rs=_.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,wui_transaction_visual_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rl=["withdrawed","buy","cryptoSent","nftSent"],rc=["deposited","received","bought","minted"],ru=["minted","bought","nftSent"],rd=["deposited","withdrawed","cryptoSent","buy","received"],rh=class extends _.oi{constructor(){super(...arguments),this.type="buy"}render(){let t="accent-100",a="arrowTop";return rl.includes(this.type)?(t="accent-100",a="arrowTop"):rc.includes(this.type)&&ru.includes(this.type)?(t="success-100",a="arrowBottom"):rc.includes(this.type)&&rd.includes(this.type)?(t="success-100",a="arrowBottom"):(t="accent-100",a="swapVertical"),this.dataset.type=this.type,_.dy`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        .icon=${a}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:ru.includes(this.type)?_.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:_.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};rh.styles=[x,rs],wui_transaction_visual_decorate([(0,Z.Cb)()],rh.prototype,"type",void 0),wui_transaction_visual_decorate([(0,Z.Cb)()],rh.prototype,"imageSrc",void 0),rh=wui_transaction_visual_decorate([customElement("wui-transaction-visual")],rh);var rf=_.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`,wui_list_transaction_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rp=class extends _.oi{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){let t="nftSent"===this.type||"cryptoSent"===this.type,a=t?"Sent":this.type,p=tx.getFormattedDate(this.date);return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${a}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${p}</wui-text>
      </button>
    `}};rp.styles=[x,T,rf],wui_list_transaction_decorate([(0,Z.Cb)()],rp.prototype,"type",void 0),wui_list_transaction_decorate([(0,Z.Cb)({type:Boolean})],rp.prototype,"disabled",void 0),wui_list_transaction_decorate([(0,Z.Cb)()],rp.prototype,"imageSrc",void 0),wui_list_transaction_decorate([(0,Z.Cb)({attribute:!1})],rp.prototype,"date",void 0),wui_list_transaction_decorate([(0,Z.Cb)()],rp.prototype,"transactionDetail",void 0),rp=wui_list_transaction_decorate([customElement("wui-list-transaction")],rp);var rg=_.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,wui_tag_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rw=class extends _.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,_.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};rw.styles=[x,rg],wui_tag_decorate([(0,Z.Cb)()],rw.prototype,"variant",void 0),rw=wui_tag_decorate([customElement("wui-tag")],rw);var rm=_.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,wui_list_wallet_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rb=class extends _.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?_.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?_.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?_.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:_.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?_.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?_.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rb.styles=[x,T,rm],wui_list_wallet_decorate([(0,Z.Cb)({type:Array})],rb.prototype,"walletImages",void 0),wui_list_wallet_decorate([(0,Z.Cb)()],rb.prototype,"imageSrc",void 0),wui_list_wallet_decorate([(0,Z.Cb)()],rb.prototype,"name",void 0),wui_list_wallet_decorate([(0,Z.Cb)()],rb.prototype,"tagLabel",void 0),wui_list_wallet_decorate([(0,Z.Cb)()],rb.prototype,"tagVariant",void 0),wui_list_wallet_decorate([(0,Z.Cb)()],rb.prototype,"icon",void 0),wui_list_wallet_decorate([(0,Z.Cb)()],rb.prototype,"walletIcon",void 0),wui_list_wallet_decorate([(0,Z.Cb)({type:Boolean})],rb.prototype,"disabled",void 0),wui_list_wallet_decorate([(0,Z.Cb)({type:Boolean})],rb.prototype,"showAllWallets",void 0),rb=wui_list_wallet_decorate([customElement("wui-list-wallet")],rb);var ry=_.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,wui_logo_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rv=class extends _.oi{constructor(){super(...arguments),this.logo="google"}render(){return _.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rv.styles=[x,ry],wui_logo_decorate([(0,Z.Cb)()],rv.prototype,"logo",void 0),rv=wui_logo_decorate([customElement("wui-logo")],rv);var r_=_.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,wui_logo_select_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rC=class extends _.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rC.styles=[x,T,r_],wui_logo_select_decorate([(0,Z.Cb)()],rC.prototype,"logo",void 0),wui_logo_select_decorate([(0,Z.Cb)({type:Boolean})],rC.prototype,"disabled",void 0),rC=wui_logo_select_decorate([customElement("wui-logo-select")],rC);var rx=_.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`,wui_network_button_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rE=class extends _.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return _.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc}></wui-image>`:_.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rE.styles=[x,T,rx],wui_network_button_decorate([(0,Z.Cb)()],rE.prototype,"imageSrc",void 0),wui_network_button_decorate([(0,Z.Cb)({type:Boolean})],rE.prototype,"disabled",void 0),rE=wui_network_button_decorate([customElement("wui-network-button")],rE);var rk=_.iv`
  :host {
    position: relative;
    display: block;
  }
`,wui_otp_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rD=class extends _.oi{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,a)=>{let p=t.target,g=this.getInputElement(p);if(!g)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();let m=g.selectionStart;switch(t.key){case"ArrowLeft":m&&g.setSelectionRange(m+1,m+1),this.focusInputField("prev",a);break;case"ArrowRight":case"Shift":this.focusInputField("next",a);break;case"Delete":case"Backspace":""===g.value?this.focusInputField("prev",a):g.value=""}},this.focusInputField=(t,a)=>{if("next"===t){let t=a+1,p=this.numerics[t<this.length?t:a],g=p?this.getInputElement(p):void 0;g&&g.focus()}if("prev"===t){let t=a-1,p=this.numerics[t>-1?t:a],g=p?this.getInputElement(p):void 0;g&&g.focus()}}}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return _.dy`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,a)=>_.dy`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,a)}
              @keydown=${t=>this.handleKeyDown(t,a)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,a){let p=t.target,g=this.getInputElement(p);if(g){let p=g.value;if("insertFromPaste"===t.inputType)this.handlePaste(g,p,a);else{let m=tx.isNumber(p);m&&t.data?(g.value=t.data,this.focusInputField("next",a)):g.value=""}}}handlePaste(t,a,p){let g=a[0],m=g&&tx.isNumber(g);if(m){t.value=g;let m=a.substring(1);if(p+1<this.length&&m.length){let t=this.numerics[p+1],a=t?this.getInputElement(t):void 0;a&&this.handlePaste(a,m,p+1)}else this.focusInputField("next",p)}else t.value=""}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}};rD.styles=[x,rk],wui_otp_decorate([(0,Z.Cb)({type:Number})],rD.prototype,"length",void 0),rD=wui_otp_decorate([customElement("wui-otp")],rD);var rS=p(4646);function isAdjecentDots(t,a,p){return t!==a&&(t-a<0?a-t:t-a)<=p+.1}function getMatrix(t,a){let p=Array.prototype.slice.call(rS.create(t,{errorCorrectionLevel:a}).modules.data,0),g=Math.sqrt(p.length);return p.reduce((t,a,p)=>(p%g==0?t.push([a]):t[t.length-1].push(a))&&t,[])}let rO={generate(t,a,p){let g="#141414",m=[],v=getMatrix(t,"Q"),x=a/v.length,T=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];T.forEach(({x:t,y:a})=>{let p=(v.length-7)*x*t,W=(v.length-7)*x*a;for(let t=0;t<T.length;t+=1){let a=x*(7-2*t);m.push(_.YP`
            <rect
              fill=${2===t?g:"transparent"}
              width=${0===t?a-5:a}
              rx= ${0===t?(a-5)*.45:.45*a}
              ry= ${0===t?(a-5)*.45:.45*a}
              stroke=${g}
              stroke-width=${0===t?5:0}
              height=${0===t?a-5:a}
              x= ${0===t?W+x*t+2.5:W+x*t}
              y= ${0===t?p+x*t+2.5:p+x*t}
            />
          `)}});let W=Math.floor((p+25)/x),z=v.length/2-W/2,F=v.length/2+W/2-1,Z=[];v.forEach((t,a)=>{t.forEach((t,p)=>{if(v[a][p]&&!(a<7&&p<7||a>v.length-8&&p<7||a<7&&p>v.length-8)&&!(a>z&&a<F&&p>z&&p<F)){let t=a*x+x/2,g=p*x+x/2;Z.push([t,g])}})});let Y={};return Z.forEach(([t,a])=>{Y[t]?Y[t]?.push(a):Y[t]=[a]}),Object.entries(Y).map(([t,a])=>{let p=a.filter(t=>a.every(a=>!isAdjecentDots(t,a,x)));return[Number(t),p]}).forEach(([t,a])=>{a.forEach(a=>{m.push(_.YP`<circle cx=${t} cy=${a} fill=${g} r=${x/2.5} />`)})}),Object.entries(Y).filter(([t,a])=>a.length>1).map(([t,a])=>{let p=a.filter(t=>a.some(a=>isAdjecentDots(t,a,x)));return[Number(t),p]}).map(([t,a])=>{a.sort((t,a)=>t<a?-1:1);let p=[];for(let t of a){let a=p.find(a=>a.some(a=>isAdjecentDots(t,a,x)));a?a.push(t):p.push([t])}return[t,p.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,a])=>{a.forEach(([a,p])=>{m.push(_.YP`
              <line
                x1=${t}
                x2=${t}
                y1=${a}
                y2=${p}
                stroke=${g}
                stroke-width=${x/1.25}
                stroke-linecap="round"
              />
            `)})}),m}};var rA=_.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,wui_qr_code_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rP=class extends _.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,_.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let t="light"===this.theme?this.size:this.size-32;return _.YP`
      <svg height=${t} width=${t}>
        ${rO.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:_.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rP.styles=[x,rA],wui_qr_code_decorate([(0,Z.Cb)()],rP.prototype,"uri",void 0),wui_qr_code_decorate([(0,Z.Cb)({type:Number})],rP.prototype,"size",void 0),wui_qr_code_decorate([(0,Z.Cb)()],rP.prototype,"theme",void 0),wui_qr_code_decorate([(0,Z.Cb)()],rP.prototype,"imageSrc",void 0),wui_qr_code_decorate([(0,Z.Cb)()],rP.prototype,"alt",void 0),rP=wui_qr_code_decorate([customElement("wui-qr-code")],rP);var rI=_.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let rN=class extends _.oi{constructor(){super(...arguments),this.inputComponentRef=ref_e()}render(){return _.dy`
      <wui-input-text
        ${t0(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let t=this.inputComponentRef.value,a=t?.inputElementRef.value;a&&(a.value="",a.focus(),a.dispatchEvent(new Event("input")))}};rN.styles=[x,rI],rN=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([customElement("wui-search-bar")],rN);var rT=_.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,wui_snackbar_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let r$=class extends _.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return _.dy`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};r$.styles=[x,rT],wui_snackbar_decorate([(0,Z.Cb)()],r$.prototype,"backgroundColor",void 0),wui_snackbar_decorate([(0,Z.Cb)()],r$.prototype,"iconColor",void 0),wui_snackbar_decorate([(0,Z.Cb)()],r$.prototype,"icon",void 0),wui_snackbar_decorate([(0,Z.Cb)()],r$.prototype,"message",void 0),r$=wui_snackbar_decorate([customElement("wui-snackbar")],r$);var rR=_.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`,wui_tabs_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rB=class extends _.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,a)=>{let p=a===this.activeTab;return _.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(a)}
          data-active=${p}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,a){let p=this.buttons[this.activeTab],g=this.buttons[t],m=p?.querySelector("wui-text"),v=g?.querySelector("wui-text"),_=g?.getBoundingClientRect(),x=v?.getBoundingClientRect();p&&m&&!a&&t!==this.activeTab&&(m.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),p.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),g&&_&&x&&v&&(t!==this.activeTab||a)&&(this.localTabWidth=`${Math.round(_.width+x.width)+6}px`,g.animate([{width:`${_.width+x.width}px`}],{duration:a?0:500,fill:"forwards",easing:"ease"}),v.animate([{opacity:1}],{duration:a?0:125,delay:a?0:200,fill:"forwards",easing:"ease"}))}};rB.styles=[x,T,rR],wui_tabs_decorate([(0,Z.Cb)({type:Array})],rB.prototype,"tabs",void 0),wui_tabs_decorate([(0,Z.Cb)()],rB.prototype,"onTabChange",void 0),wui_tabs_decorate([(0,Z.Cb)({type:Array})],rB.prototype,"buttons",void 0),wui_tabs_decorate([(0,Z.Cb)({type:Boolean})],rB.prototype,"disabled",void 0),wui_tabs_decorate([(0,Z.SB)()],rB.prototype,"activeTab",void 0),wui_tabs_decorate([(0,Z.SB)()],rB.prototype,"localTabWidth",void 0),wui_tabs_decorate([(0,Z.SB)()],rB.prototype,"isDense",void 0),rB=wui_tabs_decorate([customElement("wui-tabs")],rB);var rU=_.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,wui_tooltip_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rj=class extends _.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return _.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};rj.styles=[x,T,rU],wui_tooltip_decorate([(0,Z.Cb)()],rj.prototype,"placement",void 0),wui_tooltip_decorate([(0,Z.Cb)()],rj.prototype,"message",void 0),rj=wui_tooltip_decorate([customElement("wui-tooltip")],rj);var rM=_.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,wui_visual_thumbnail_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rL=class extends _.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,_.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:_.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rL.styles=[x,rM],wui_visual_thumbnail_decorate([(0,Z.Cb)()],rL.prototype,"imageSrc",void 0),wui_visual_thumbnail_decorate([(0,Z.Cb)()],rL.prototype,"alt",void 0),wui_visual_thumbnail_decorate([(0,Z.Cb)({type:Boolean})],rL.prototype,"borderRadiusFull",void 0),rL=wui_visual_thumbnail_decorate([customElement("wui-visual-thumbnail")],rL);var rW=_.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,wui_grid_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rz=class extends _.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tx.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tx.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tx.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tx.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tx.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tx.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tx.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tx.getSpacingStyles(this.margin,3)};
    `,_.dy`<slot></slot>`}};rz.styles=[x,rW],wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"gridTemplateRows",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"gridTemplateColumns",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"justifyItems",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"alignItems",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"justifyContent",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"alignContent",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"columnGap",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"rowGap",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"gap",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"padding",void 0),wui_grid_decorate([(0,Z.Cb)()],rz.prototype,"margin",void 0),rz=wui_grid_decorate([customElement("wui-grid")],rz);var rF=_.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,wui_separator_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let rH=class extends _.oi{constructor(){super(...arguments),this.text=""}render(){return _.dy`${this.template()}`}template(){return this.text?_.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};rH.styles=[x,rF],wui_separator_decorate([(0,Z.Cb)()],rH.prototype,"text",void 0),rH=wui_separator_decorate([customElement("wui-separator")],rH)},55432:function(t,a,p){"use strict";let g,m;p.d(a,{OY:function(){return createWeb3Modal},o1:function(){return defaultWagmiConfig},k_:function(){return useWeb3Modal},xG:function(){return useWeb3ModalState}});var v,_,x,T,W,z,F,Z,Y,X,Q,J,ei,eo,ea,es,el,ec,eu,ed,eh,ef,ep,eg,ew=p(58078);function getWeb3Modal(t){t&&(g=t)}function useWeb3Modal(){if(!g)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(t){await g?.open(t)},close:async function(){await g?.close()}}}function useWeb3ModalState(){if(!g)throw Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');let[t,a]=(0,ew.useState)(g.getState());return(0,ew.useEffect)(()=>{let t=g?.subscribeState(t=>{a({...t})});return()=>{t?.()}},[]),t}var em=p(90515),eb=p(92531),ey=p(64461),ev=p(42421),e_=p(28401),eC=p(87859),ex=p(46402),__decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eE=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=ey.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=ey.AccountController.state.address,this.balanceVal=ey.AccountController.state.balance,this.balanceSymbol=ey.AccountController.state.balanceSymbol,this.profileName=ey.AccountController.state.profileName,this.profileImage=ey.AccountController.state.profileImage,this.network=ey.NetworkController.state.caipNetwork,this.unsubscribe.push(...[ey.AccountController.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),ey.NetworkController.subscribeKey("caipNetwork",t=>this.network=t)])}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.networkImages[this.network?.imageId??""],a="show"===this.balance;return e_.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${(0,ex.o)(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,ex.o)(t)}
        avatarSrc=${(0,ex.o)(this.profileImage)}
        balance=${a?ey.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){ey.IN.open()}};__decorate([(0,eC.Cb)({type:Boolean})],eE.prototype,"disabled",void 0),__decorate([(0,eC.Cb)()],eE.prototype,"balance",void 0),__decorate([(0,eC.SB)()],eE.prototype,"address",void 0),__decorate([(0,eC.SB)()],eE.prototype,"balanceVal",void 0),__decorate([(0,eC.SB)()],eE.prototype,"balanceSymbol",void 0),__decorate([(0,eC.SB)()],eE.prototype,"profileName",void 0),__decorate([(0,eC.SB)()],eE.prototype,"profileImage",void 0),__decorate([(0,eC.SB)()],eE.prototype,"network",void 0),eE=__decorate([(0,ev.customElement)("w3m-account-button")],eE);var w3m_button_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let ek=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=ey.AccountController.state.isConnected,this.unsubscribe.push(ey.AccountController.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?e_.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,ex.o)(this.balance)}
          >
          </w3m-account-button>
        `:e_.dy`
          <w3m-connect-button
            size=${(0,ex.o)(this.size)}
            label=${(0,ex.o)(this.label)}
            loadingLabel=${(0,ex.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};w3m_button_decorate([(0,eC.Cb)({type:Boolean})],ek.prototype,"disabled",void 0),w3m_button_decorate([(0,eC.Cb)()],ek.prototype,"balance",void 0),w3m_button_decorate([(0,eC.Cb)()],ek.prototype,"size",void 0),w3m_button_decorate([(0,eC.Cb)()],ek.prototype,"label",void 0),w3m_button_decorate([(0,eC.Cb)()],ek.prototype,"loadingLabel",void 0),w3m_button_decorate([(0,eC.SB)()],ek.prototype,"isAccount",void 0),ek=w3m_button_decorate([(0,ev.customElement)("w3m-button")],ek);var w3m_connect_button_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eD=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=ey.IN.state.open,this.unsubscribe.push(ey.IN.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return e_.dy`
      <wui-connect-button
        size=${(0,ex.o)(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?ey.IN.close():ey.IN.open()}};w3m_connect_button_decorate([(0,eC.Cb)()],eD.prototype,"size",void 0),w3m_connect_button_decorate([(0,eC.Cb)()],eD.prototype,"label",void 0),w3m_connect_button_decorate([(0,eC.Cb)()],eD.prototype,"loadingLabel",void 0),w3m_connect_button_decorate([(0,eC.SB)()],eD.prototype,"open",void 0),eD=w3m_connect_button_decorate([(0,ev.customElement)("w3m-connect-button")],eD),p(72585);var w3m_network_button_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eS=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=ey.NetworkController.state.caipNetwork,this.connected=ey.AccountController.state.isConnected,this.unsubscribe.push(...[ey.NetworkController.subscribeKey("caipNetwork",t=>this.network=t),ey.AccountController.subscribeKey("isConnected",t=>this.connected=t)])}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return e_.dy`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${(0,ex.o)(ey.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){ey.IN.open({view:"Networks"})}};w3m_network_button_decorate([(0,eC.Cb)({type:Boolean})],eS.prototype,"disabled",void 0),w3m_network_button_decorate([(0,eC.SB)()],eS.prototype,"network",void 0),w3m_network_button_decorate([(0,eC.SB)()],eS.prototype,"connected",void 0),eS=w3m_network_button_decorate([(0,ev.customElement)("w3m-network-button")],eS);var eO=e_.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,w3m_router_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eA=class extends e_.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=ey.RouterController.state.view,this.unsubscribe.push(ey.RouterController.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{let a=`${t?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:a}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=a}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return e_.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return e_.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return e_.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return e_.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return e_.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return e_.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return e_.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return e_.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return e_.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return e_.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return e_.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return e_.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return e_.dy`<w3m-downloads-view></w3m-downloads-view>`}}async onViewChange(t){let{history:a}=ey.RouterController.state,p=-10,g=10;a.length<this.prevHistoryLength&&(p=10,g=-10),this.prevHistoryLength=a.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${p}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${g}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};eA.styles=eO,w3m_router_decorate([(0,eC.SB)()],eA.prototype,"view",void 0),eA=w3m_router_decorate([(0,ev.customElement)("w3m-router")],eA);var eP=e_.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,w3m_account_view_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eI=class extends e_.oi{constructor(){super(),this.usubscribe=[],this.networkImages=ey.WM.state.networkImages,this.address=ey.AccountController.state.address,this.profileImage=ey.AccountController.state.profileImage,this.profileName=ey.AccountController.state.profileName,this.balance=ey.AccountController.state.balance,this.balanceSymbol=ey.AccountController.state.balanceSymbol,this.network=ey.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[ey.AccountController.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):ey.IN.close()})],ey.NetworkController.subscribeKey("caipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let t=this.networkImages[this.network?.imageId??""];return e_.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,ex.o)(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?ev.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ev.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${ey.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,ex.o)(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){let{addressExplorerUrl:t}=ey.AccountController.state;return t?e_.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:t}=ey.NetworkController.state,a=!!t&&t.length>1,p=t?.find(({id:t})=>t===this.network?.id);return a||!p}onCopyAddress(){try{this.address&&(ey.j1.copyToClopboard(this.address),ey.SnackController.showSuccess("Address copied"))}catch{ey.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&ey.RouterController.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await ey.ConnectionController.disconnect(),ey.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),ey.IN.close()}catch{ey.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),ey.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:t}=ey.AccountController.state;t&&ey.j1.openHref(t,"_blank")}};eI.styles=eP,w3m_account_view_decorate([(0,eC.SB)()],eI.prototype,"address",void 0),w3m_account_view_decorate([(0,eC.SB)()],eI.prototype,"profileImage",void 0),w3m_account_view_decorate([(0,eC.SB)()],eI.prototype,"profileName",void 0),w3m_account_view_decorate([(0,eC.SB)()],eI.prototype,"balance",void 0),w3m_account_view_decorate([(0,eC.SB)()],eI.prototype,"balanceSymbol",void 0),w3m_account_view_decorate([(0,eC.SB)()],eI.prototype,"network",void 0),w3m_account_view_decorate([(0,eC.SB)()],eI.prototype,"disconecting",void 0),eI=w3m_account_view_decorate([(0,ev.customElement)("w3m-account-view")],eI);var w3m_all_wallets_view_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eN=class extends e_.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=ey.j1.debounce(t=>{this.search=t})}render(){let t=this.search.length>=2;return e_.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?e_.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:e_.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return ey.j1.isMobile()?e_.dy`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){ey.RouterController.push("ConnectingWalletConnect")}};w3m_all_wallets_view_decorate([(0,eC.SB)()],eN.prototype,"search",void 0),eN=w3m_all_wallets_view_decorate([(0,ev.customElement)("w3m-all-wallets-view")],eN);var eT=e_.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,w3m_connect_view_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let e$=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.connectors=ey.ConnectorController.state.connectors,this.unsubscribe.push(ey.ConnectorController.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return e_.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(ey.j1.isMobile())return null;let t=this.connectors.find(t=>"WALLET_CONNECT"===t.type);return t?e_.dy`
      <wui-list-wallet
        imageSrc=${(0,ex.o)(ey.fz.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:t}=ey.OptionsController.state;if(!t?.length)return null;let a=this.filterOutDuplicateWallets(t);return a.map(t=>e_.dy`
        <wui-list-wallet
          imageSrc=${(0,ex.o)(ey.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let{featured:t}=ey.ApiController.state;if(!t.length)return null;let a=this.filterOutDuplicateWallets(t);return a.map(t=>e_.dy`
        <wui-list-wallet
          imageSrc=${(0,ex.o)(ey.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let t=ey.MO.getRecentWallets();return t.map(t=>e_.dy`
        <wui-list-wallet
          imageSrc=${(0,ex.o)(ey.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(t=>"ANNOUNCED"!==t.type?null:e_.dy`
        <wui-list-wallet
          imageSrc=${(0,ex.o)(ey.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let t=this.connectors.find(t=>"ANNOUNCED"===t.type);return this.connectors.map(a=>"INJECTED"===a.type&&ey.ConnectionController.checkInstalled()?e_.dy`
        <wui-list-wallet
          imageSrc=${(0,ex.o)(ey.fz.getConnectorImage(a))}
          name=${a.name??"Unknown"}
          @click=${()=>this.onConnector(a)}
          tagLabel=${(0,ex.o)(t?void 0:"installed")}
          tagVariant=${(0,ex.o)(t?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:e_.dy`
        <wui-list-wallet
          imageSrc=${(0,ex.o)(ey.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let t=10*Math.floor(ey.ApiController.state.count/10);return e_.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:t}=ey.ApiController.state,{customWallets:a,featuredWalletIds:p}=ey.OptionsController.state,{connectors:g}=ey.ConnectorController.state,m=ey.MO.getRecentWallets(),v=g.filter(t=>"ANNOUNCED"===t.type);if(p||a||!t.length)return null;let _=v.length+m.length,x=this.filterOutDuplicateWallets(t).slice(0,Math.max(0,2-_));return x.map(t=>e_.dy`
        <wui-list-wallet
          imageSrc=${(0,ex.o)(ey.fz.getWalletImage(t))}
          name=${t?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `)}onConnector(t){"WALLET_CONNECT"===t.type?ey.j1.isMobile()?ey.RouterController.push("AllWallets"):ey.RouterController.push("ConnectingWalletConnect"):ey.RouterController.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){let{connectors:a}=ey.ConnectorController.state,p=ey.MO.getRecentWallets(),g=p.map(t=>t.id),m=a.map(t=>t.info?.rdns).filter(Boolean),v=t.filter(t=>!g.includes(t.id)&&!m.includes(t.rdns??void 0));return v}onAllWallets(){ey.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),ey.RouterController.push("AllWallets")}onConnectWallet(t){ey.RouterController.push("ConnectingWalletConnect",{wallet:t})}};e$.styles=eT,w3m_connect_view_decorate([(0,eC.SB)()],e$.prototype,"connectors",void 0),e$=w3m_connect_view_decorate([(0,ev.customElement)("w3m-connect-view")],e$);var eR=e_.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,w3m_connecting_widget_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let W3mConnectingWidget=class W3mConnectingWidget extends e_.oi{constructor(){super(),this.wallet=ey.RouterController.state.data?.wallet,this.connector=ey.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ey.fz.getWalletImage(this.wallet)??ey.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=ey.ConnectionController.state.wcUri,this.error=ey.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[ey.ConnectionController.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),ey.ConnectionController.subscribeKey("wcError",t=>this.error=t),ey.ConnectionController.subscribeKey("buffering",t=>this.buffering=t)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,a=`Continue in ${this.name}`;return this.buffering&&(a="Connecting..."),this.error&&(a="Connection declined"),e_.dy`
      <wui-flex
        data-error=${(0,ex.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,ex.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${a}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?e_.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let t=this.shadowRoot?.querySelector("wui-button");t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(ey.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let t=ey.ThemeController.state.themeVariables["--w3m-border-radius-master"],a=t?parseInt(t.replace("px",""),10):4;return e_.dy`<wui-loading-thumbnail radius=${9*a}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(ey.j1.copyToClopboard(this.uri),ey.SnackController.showSuccess("Link copied"))}catch{ey.SnackController.showError("Failed to copy")}}};W3mConnectingWidget.styles=eR,w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"uri",void 0),w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"error",void 0),w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"ready",void 0),w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"showRetry",void 0),w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"buffering",void 0),w3m_connecting_widget_decorate([(0,eC.Cb)({type:Boolean})],W3mConnectingWidget.prototype,"isMobile",void 0),w3m_connecting_widget_decorate([(0,eC.Cb)()],W3mConnectingWidget.prototype,"onRetry",void 0);let eB={INJECTED:"browser",ANNOUNCED:"browser"},eU=class extends W3mConnectingWidget{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");ey.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:eB[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&ey.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await ey.ConnectionController.connectExternal(this.connector),ey.IN.close(),ey.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){ey.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};eU=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-connecting-external-view")],eU);let ej=class extends e_.oi{constructor(){super(...arguments),this.dappUrl=ey.OptionsController.state.metadata?.url,this.dappName=ey.OptionsController.state.metadata?.name}render(){return e_.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?e_.dy`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&ey.j1.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){ey.RouterController.goBack()}};ej=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-connecting-siwe-view")],ej);var w3m_connecting_wc_view_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eM=class extends e_.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=ey.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),ey.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),e_.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):e_.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{let{wcPairingExpiry:a}=ey.ConnectionController.state;if(t||ey.j1.isPairingExpired(a)){if(ey.ConnectionController.connectWalletConnect(),this.wallet){let t=ey.fz.getWalletImage(this.wallet);t&&ey.MO.setConnectedWalletImageUrl(t)}else{let t=ey.ConnectorController.state.connectors,a=t.find(t=>"WALLET_CONNECT"===t.type),p=ey.fz.getConnectorImage(a);p&&ey.MO.setConnectedWalletImageUrl(p)}await ey.ConnectionController.state.wcPromise,this.finalizeConnection(),ey.IN.close()}}catch(t){ey.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),ey.ConnectionController.setWcError(!0),ey.j1.isAllowedRetry(this.lastRetry)&&(ey.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:t,recentWallet:a}=ey.ConnectionController.state;t&&ey.MO.setWalletConnectDeepLink(t),a&&ey.MO.setWeb3ModalRecent(a),ey.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:t,desktop_link:a,webapp_link:p,injected:g,rdns:m}=this.wallet,v=g?.map(({injected_id:t})=>t).filter(Boolean),_=m?[m]:v??[],x=_.length,T=ey.ConnectionController.checkInstalled(_),W=x&&T,z=a&&!ey.j1.isMobile();W&&this.platforms.push("browser"),t&&this.platforms.push(ey.j1.isMobile()?"mobile":"qrcode"),p&&this.platforms.push("web"),z&&this.platforms.push("desktop"),!W&&x&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return e_.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return e_.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return e_.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return e_.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return e_.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return e_.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let t=this.platforms.length>1;return t?e_.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){let a=this.shadowRoot?.querySelector("div");a&&(await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};w3m_connecting_wc_view_decorate([(0,eC.SB)()],eM.prototype,"platform",void 0),w3m_connecting_wc_view_decorate([(0,eC.SB)()],eM.prototype,"platforms",void 0),eM=w3m_connecting_wc_view_decorate([(0,ev.customElement)("w3m-connecting-wc-view")],eM);let eL=class extends e_.oi{constructor(){super(...arguments),this.wallet=ey.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return e_.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?e_.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?e_.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?e_.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?e_.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&ey.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&ey.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&ey.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&ey.j1.openHref(this.wallet.homepage,"_blank")}};eL=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-downloads-view")],eL);let eW=class extends e_.oi{render(){return e_.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{ey.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:t,featured:a}=ey.ApiController.state,{customWallets:p}=ey.OptionsController.state,g=[...a,...p??[],...t].slice(0,4);return g.map(t=>e_.dy`
        <wui-list-wallet
          name=${t.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,ex.o)(ey.fz.getWalletImage(t))}
          @click=${()=>{ey.j1.openHref(t.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eW=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-get-wallet-view")],eW);var ez=e_.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,w3m_network_switch_view_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eF=class extends e_.oi{constructor(){super(),this.network=ey.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=ey.NetworkController.state.caipNetwork,this.unsubscribe.push(ey.NetworkController.subscribeKey("caipNetwork",t=>{t?.id!==this.currentNetwork?.id&&ey.RouterController.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let t=this.error?"Switch declined":"Approve in wallet",a=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return e_.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,ex.o)(ey.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:e_.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${a}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let t=this.shadowRoot?.querySelector("wui-button");t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await ey.NetworkController.switchActiveNetwork(this.network),ey.RouterController.goBack())}catch{this.error=!0}}};eF.styles=ez,w3m_network_switch_view_decorate([(0,eC.SB)()],eF.prototype,"showRetry",void 0),w3m_network_switch_view_decorate([(0,eC.SB)()],eF.prototype,"error",void 0),w3m_network_switch_view_decorate([(0,eC.SB)()],eF.prototype,"currentNetwork",void 0),eF=w3m_network_switch_view_decorate([(0,ev.customElement)("w3m-network-switch-view")],eF);var w3m_networks_view_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eH=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=ey.NetworkController.state.caipNetwork,this.unsubscribe.push(ey.NetworkController.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return e_.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){ey.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),ey.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:t,requestedCaipNetworks:a,supportsAllNetworks:p}=ey.NetworkController.state;return t?.length&&a?.sort((a,p)=>t.indexOf(p.id)-t.indexOf(a.id)),a?.map(a=>e_.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===a.id}
          imageSrc=${ex.o(ey.fz.getNetworkImage(a))}
          type="network"
          name=${a.name??a.id}
          @click=${()=>this.onSwitchNetwork(a)}
          .disabled=${!p&&!t?.includes(a.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(t){let{isConnected:a}=ey.AccountController.state,{approvedCaipNetworkIds:p,supportsAllNetworks:g,caipNetwork:m}=ey.NetworkController.state;a&&m?.id!==t.id?p?.includes(t.id)?await ey.NetworkController.switchActiveNetwork(t):g&&ey.RouterController.push("SwitchNetwork",{network:t}):a||(ey.NetworkController.setCaipNetwork(t),ey.RouterController.push("Connect"))}};w3m_networks_view_decorate([(0,eC.SB)()],eH.prototype,"caipNetwork",void 0),eH=w3m_networks_view_decorate([(0,ev.customElement)("w3m-networks-view")],eH);let eV=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eZ=class extends e_.oi{render(){return e_.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eV}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{ey.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eZ=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-what-is-a-network-view")],eZ);let eK=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eq=class extends e_.oi{render(){return e_.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eK}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){ey.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),ey.RouterController.push("GetWallet")}};eq=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-what-is-a-wallet-view")],eq);var eY=e_.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,w3m_all_wallets_list_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eG="local-paginator",eX=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!ey.ApiController.state.wallets.length,this.wallets=ey.ApiController.state.wallets,this.recommended=ey.ApiController.state.recommended,this.featured=ey.ApiController.state.featured,this.unsubscribe.push(...[ey.ApiController.subscribeKey("wallets",t=>this.wallets=t),ey.ApiController.subscribeKey("recommended",t=>this.recommended=t),ey.ApiController.subscribeKey("featured",t=>this.featured=t)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return e_.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let t=this.shadowRoot?.querySelector("wui-grid");this.initial&&t&&(await ey.ApiController.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,a){return[...Array(t)].map(()=>e_.dy`
        <wui-card-select-loader type="wallet" id=${(0,ex.o)(a)}></wui-card-select-loader>
      `)}walletsTemplate(){let t=[...this.featured,...this.recommended,...this.wallets];return t.map(t=>e_.dy`
        <wui-card-select
          imageSrc=${(0,ex.o)(ey.fz.getWalletImage(t))}
          type="wallet"
          name=${t.name}
          @click=${()=>this.onConnectWallet(t)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:t,recommended:a,featured:p,count:g}=ey.ApiController.state,m=window.innerWidth<352?3:4,v=t.length+a.length,_=Math.ceil(v/m)*m-v+m;return(_-=t.length?p.length%m:0,0===g||[...p,...t,...a].length<g)?this.shimmerTemplate(_,eG):null}createPaginationObserver(){let t=this.shadowRoot?.querySelector(`#${eG}`);t&&(this.paginationObserver=new IntersectionObserver(([t])=>{if(t?.isIntersecting&&!this.initial){let{page:t,count:a,wallets:p}=ey.ApiController.state;p.length<a&&ey.ApiController.fetchWallets({page:t+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){let{connectors:a}=ey.ConnectorController.state,p=a.find(({explorerId:a})=>a===t.id);p?ey.RouterController.push("ConnectingExternal",{connector:p}):ey.RouterController.push("ConnectingWalletConnect",{wallet:t})}};eX.styles=eY,w3m_all_wallets_list_decorate([(0,eC.SB)()],eX.prototype,"initial",void 0),w3m_all_wallets_list_decorate([(0,eC.SB)()],eX.prototype,"wallets",void 0),w3m_all_wallets_list_decorate([(0,eC.SB)()],eX.prototype,"recommended",void 0),w3m_all_wallets_list_decorate([(0,eC.SB)()],eX.prototype,"featured",void 0),eX=w3m_all_wallets_list_decorate([(0,ev.customElement)("w3m-all-wallets-list")],eX);var eQ=e_.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,w3m_all_wallets_search_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let eJ=class extends e_.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?e_.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await ey.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:t}=ey.ApiController.state;return t.length?e_.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(t=>e_.dy`
            <wui-card-select
              imageSrc=${(0,ex.o)(ey.fz.getWalletImage(t))}
              type="wallet"
              name=${t.name}
              @click=${()=>this.onConnectWallet(t)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:e_.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){let{connectors:a}=ey.ConnectorController.state,p=a.find(({explorerId:a})=>a===t.id);p?ey.RouterController.push("ConnectingExternal",{connector:p}):ey.RouterController.push("ConnectingWalletConnect",{wallet:t})}};eJ.styles=eQ,w3m_all_wallets_search_decorate([(0,eC.SB)()],eJ.prototype,"loading",void 0),w3m_all_wallets_search_decorate([(0,eC.Cb)()],eJ.prototype,"query",void 0),eJ=w3m_all_wallets_search_decorate([(0,ev.customElement)("w3m-all-wallets-search")],eJ);var w3m_connecting_header_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let e0=class extends e_.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(ey.ConnectionController.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.generateTabs();return e_.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let t=this.platforms.map(t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:t})=>t),t}onTabChange(t){let a=this.platformTabs[t];a&&this.onSelectPlatfrom?.(a)}};w3m_connecting_header_decorate([(0,eC.Cb)({type:Array})],e0.prototype,"platforms",void 0),w3m_connecting_header_decorate([(0,eC.Cb)()],e0.prototype,"onSelectPlatfrom",void 0),w3m_connecting_header_decorate([(0,eC.SB)()],e0.prototype,"buffering",void 0),e0=w3m_connecting_header_decorate([(0,ev.customElement)("w3m-connecting-header")],e0);let e1=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),ey.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:t}=ey.ConnectorController.state,a=t.find(t=>"ANNOUNCED"===t.type&&t.info?.rdns===this.wallet?.rdns),p=t.find(t=>"INJECTED"===t.type);a?await ey.ConnectionController.connectExternal(a):p&&await ey.ConnectionController.connectExternal(p),ey.IN.close(),ey.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){ey.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};e1=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-connecting-wc-browser")],e1);let e2=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),ey.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:t,name:a}=this.wallet,{redirect:p,href:g}=ey.j1.formatNativeUrl(t,this.uri);ey.ConnectionController.setWcLinking({name:a,href:g}),ey.ConnectionController.setRecentWallet(this.wallet),ey.j1.openHref(p,"_self")}catch{this.error=!0}}};e2=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-connecting-wc-desktop")],e2);let e3=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),ey.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:t,name:a}=this.wallet,{redirect:p,href:g}=ey.j1.formatNativeUrl(t,this.uri);ey.ConnectionController.setWcLinking({name:a,href:g}),ey.ConnectionController.setRecentWallet(this.wallet),ey.j1.openHref(p,"_self")}catch{this.error=!0}}onBuffering(){let t=ey.j1.isIos();document?.visibilityState==="visible"&&!this.error&&t&&(ey.ConnectionController.setBuffering(!0),setTimeout(()=>{ey.ConnectionController.setBuffering(!1)},5e3))}};e3=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-connecting-wc-mobile")],e3);var e5=e_.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let e4=class extends W3mConnectingWidget{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),ey.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),e_.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let t=this.getBoundingClientRect().width-40,a=this.wallet?this.wallet.name:void 0;return ey.ConnectionController.setWcLinking(void 0),ey.ConnectionController.setRecentWallet(this.wallet),e_.dy`<wui-qr-code
      size=${t}
      theme=${ey.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,ex.o)(ey.fz.getWalletImage(this.wallet))}
      alt=${(0,ex.o)(a)}
    ></wui-qr-code>`}};e4.styles=e5,e4=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-connecting-wc-qrcode")],e4);var e6=e_.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let e8=class extends e_.oi{constructor(){super(...arguments),this.dappImageUrl=ey.OptionsController.state.metadata?.icons,this.walletImageUrl=ey.MO.getConnectedWalletImageUrl()}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return e_.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,a){t.animate([{transform:"translateX(0px)"},{transform:a}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};e8.styles=e6,e8=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-connecting-siwe")],e8);let e7=class extends e_.oi{constructor(){if(super(),this.wallet=ey.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");ey.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return e_.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,ex.o)(ey.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};e7=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-connecting-wc-unsupported")],e7);let e9=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",ey.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:t,name:a}=this.wallet,{redirect:p,href:g}=ey.j1.formatUniversalUrl(t,this.uri);ey.ConnectionController.setWcLinking({name:a,href:g}),ey.ConnectionController.setRecentWallet(this.wallet),ey.j1.openHref(p,"_blank")}catch{this.error=!0}}};e9=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-connecting-wc-web")],e9);var tt=e_.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,w3m_header_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};function headings(){let t=ey.RouterController.state.data?.connector?.name,a=ey.RouterController.state.data?.wallet?.name,p=ey.RouterController.state.data?.network?.name,g=a??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:g??"Connect Wallet",ConnectingWalletConnect:g??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:p??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:g?`Get ${g}`:"Downloads"}}let tr=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.heading=headings()[ey.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(ey.RouterController.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),ey.ConnectionController.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return e_.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${ey.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){ey.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),ey.RouterController.push("WhatIsAWallet")}titleTemplate(){return e_.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:t}=ey.RouterController.state;return this.showBack?e_.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${ey.RouterController.goBack}
      ></wui-icon-link>`:e_.dy`<wui-icon-link
      data-hidden=${"Connect"!==t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?e_.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){let a=this.shadowRoot?.querySelector("wui-text");if(a){let p=headings()[t];await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=p,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:t}=ey.RouterController.state,a=this.shadowRoot?.querySelector("#dynamic");t.length>1&&!this.showBack&&a?(await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&a&&(await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};tr.styles=[tt],w3m_header_decorate([(0,eC.SB)()],tr.prototype,"heading",void 0),w3m_header_decorate([(0,eC.SB)()],tr.prototype,"buffering",void 0),w3m_header_decorate([(0,eC.SB)()],tr.prototype,"showBack",void 0),tr=w3m_header_decorate([(0,ev.customElement)("w3m-header")],tr);var w3m_help_widget_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let ti=class extends e_.oi{constructor(){super(...arguments),this.data=[]}render(){return e_.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>e_.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(t=>e_.dy`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};w3m_help_widget_decorate([(0,eC.Cb)({type:Array})],ti.prototype,"data",void 0),ti=w3m_help_widget_decorate([(0,ev.customElement)("w3m-help-widget")],ti);var to=e_.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let ta=class extends e_.oi{render(){let{termsConditionsUrl:t,privacyPolicyUrl:a}=ey.OptionsController.state;return t||a?e_.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:t,privacyPolicyUrl:a}=ey.OptionsController.state;return t&&a?"and":""}termsTemplate(){let{termsConditionsUrl:t}=ey.OptionsController.state;return t?e_.dy`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:t}=ey.OptionsController.state;return t?e_.dy`<a href=${t}>Privacy Policy</a>`:null}};ta.styles=[to],ta=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_}([(0,ev.customElement)("w3m-legal-footer")],ta);var ts=e_.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,w3m_mobile_download_links_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tl=class extends e_.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:t,app_store:a,play_store:p,chrome_store:g,homepage:m}=this.wallet,v=ey.j1.isMobile(),_=ey.j1.isIos(),x=ey.j1.isAndroid(),T=[a,p,m,g].filter(Boolean).length>1,W=ev.UiHelperUtil.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return T&&!v?e_.dy`
        <wui-cta-button
          label=${`Don't have ${W}?`}
          buttonLabel="Get"
          @click=${()=>ey.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!T&&m?e_.dy`
        <wui-cta-button
          label=${`Don't have ${W}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:a&&_?e_.dy`
        <wui-cta-button
          label=${`Don't have ${W}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:p&&x?e_.dy`
        <wui-cta-button
          label=${`Don't have ${W}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&ey.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&ey.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&ey.j1.openHref(this.wallet.homepage,"_blank")}};tl.styles=[ts],w3m_mobile_download_links_decorate([(0,eC.Cb)({type:Object})],tl.prototype,"wallet",void 0),tl=w3m_mobile_download_links_decorate([(0,ev.customElement)("w3m-mobile-download-links")],tl);var tc=e_.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,w3m_snackbar_decorate=function(t,a,p,g){var m,v=arguments.length,_=v<3?a:null===g?g=Object.getOwnPropertyDescriptor(a,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,a,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(a,p,_):m(a,p))||_);return v>3&&_&&Object.defineProperty(a,p,_),_};let tu={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},td=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=ey.SnackController.state.open,this.unsubscribe.push(ey.SnackController.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){let{message:t,variant:a}=ey.SnackController.state,p=tu[a];return e_.dy`
      <wui-snackbar
        message=${t}
        backgroundColor=${p.backgroundColor}
        iconColor=${p.iconColor}
        icon=${p.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>ey.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};td.styles=tc,w3m_snackbar_decorate([(0,eC.SB)()],td.prototype,"open",void 0),td=w3m_snackbar_decorate([(0,ev.customElement)("w3m-snackbar")],td);let th=!1;let Web3ModalScaffold=class Web3ModalScaffold{constructor(t){this.initPromise=void 0,this.setIsConnected=t=>{ey.AccountController.setIsConnected(t)},this.setCaipAddress=t=>{ey.AccountController.setCaipAddress(t)},this.setBalance=(t,a)=>{ey.AccountController.setBalance(t,a)},this.setProfileName=t=>{ey.AccountController.setProfileName(t)},this.setProfileImage=t=>{ey.AccountController.setProfileImage(t)},this.resetAccount=()=>{ey.AccountController.resetAccount()},this.setCaipNetwork=t=>{ey.NetworkController.setCaipNetwork(t)},this.getCaipNetwork=()=>ey.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=t=>{ey.NetworkController.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>ey.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{ey.NetworkController.resetNetwork()},this.setConnectors=t=>{ey.ConnectorController.setConnectors(t)},this.addConnector=t=>{ey.ConnectorController.addConnector(t)},this.getConnectors=()=>ey.ConnectorController.getConnectors(),this.resetWcConnection=()=>{ey.ConnectionController.resetWcConnection()},this.fetchIdentity=t=>ey.Lr.fetchIdentity(t),this.setAddressExplorerUrl=t=>{ey.AccountController.setAddressExplorerUrl(t)},this.initControllers(t),this.initOrContinue()}async open(t){await this.initOrContinue(),ey.IN.open(t)}async close(){await this.initOrContinue(),ey.IN.close()}getThemeMode(){return ey.ThemeController.state.themeMode}getThemeVariables(){return ey.ThemeController.state.themeVariables}setThemeMode(t){ey.ThemeController.setThemeMode(t),(0,ev.setColorTheme)(ey.ThemeController.state.themeMode)}setThemeVariables(t){ey.ThemeController.setThemeVariables(t),(0,ev.setThemeVariables)(ey.ThemeController.state.themeVariables)}subscribeTheme(t){return ey.ThemeController.subscribe(t)}getState(){return{...ey.Ie.state}}subscribeState(t){return ey.Ie.subscribe(t)}getEvent(){return{...ey.Xs.state}}subscribeEvents(t){return ey.Xs.subscribe(t)}initControllers(t){ey.NetworkController.setClient(t.networkControllerClient),ey.NetworkController.setDefaultCaipNetwork(t.defaultChain),ey.OptionsController.setProjectId(t.projectId),ey.OptionsController.setIncludeWalletIds(t.includeWalletIds),ey.OptionsController.setExcludeWalletIds(t.excludeWalletIds),ey.OptionsController.setFeaturedWalletIds(t.featuredWalletIds),ey.OptionsController.setTokens(t.tokens),ey.OptionsController.setTermsConditionsUrl(t.termsConditionsUrl),ey.OptionsController.setPrivacyPolicyUrl(t.privacyPolicyUrl),ey.OptionsController.setCustomWallets(t.customWallets),ey.OptionsController.setEnableAnalytics(t.enableAnalytics),ey.OptionsController.setSdkVersion(t._sdkVersion),ey.ConnectionController.setClient(t.connectionControllerClient),t.metadata&&ey.OptionsController.setMetadata(t.metadata),t.themeMode&&ey.ThemeController.setThemeMode(t.themeMode),t.themeVariables&&ey.ThemeController.setThemeVariables(t.themeVariables)}async initOrContinue(){return!this.initPromise&&!th&&ey.j1.isClient()&&(th=!0,this.initPromise=new Promise(async t=>{await Promise.all([Promise.resolve().then(p.bind(p,42421)),Promise.resolve().then(p.bind(p,72585))]);let a=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",a),t()})),this.initPromise}};let tf={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.2.0-alpha.1"},tp={ConnectorExplorerIds:{[tf.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[tf.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[tf.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[tf.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[tf.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[tf.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[tf.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[tf.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[tf.INJECTED_CONNECTOR_ID]:"Browser Wallet",[tf.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[tf.COINBASE_CONNECTOR_ID]:"Coinbase",[tf.LEDGER_CONNECTOR_ID]:"Ledger",[tf.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[tf.INJECTED_CONNECTOR_ID]:"INJECTED",[tf.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[tf.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},tg={caipNetworkIdToNumber:t=>t?Number(t.split(":")[1]):void 0,getCaipTokens(t){if(!t)return;let a={};return Object.entries(t).forEach(([t,p])=>{a[`${tf.EIP155}:${t}`]=p}),a}};function getCaipDefaultChain(t){if(t)return{id:`${tf.EIP155}:${t.id}`,name:t.name,imageId:tp.EIP155NetworkImageIds[t.id]}}let Web3Modal=class Web3Modal extends Web3ModalScaffold{constructor(t){let{wagmiConfig:a,chains:p,defaultChain:g,tokens:m,_sdkVersion:v,..._}=t;if(!a)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!_.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!a.connectors.find(t=>t.id===tf.WALLET_CONNECT_CONNECTOR_ID))throw Error("web3modal:constructor - WalletConnectConnector is required");let x={connectWalletConnect:async t=>{let p=a.connectors.find(t=>t.id===tf.WALLET_CONNECT_CONNECTOR_ID);if(!p)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");p.on("message",a=>{"display_uri"===a.type&&(t(a.data),p.removeAllListeners())});let g=tg.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,em.$j)({connector:p,chainId:g})},connectExternal:async({id:t,provider:p,info:g})=>{let m=a.connectors.find(a=>a.id===t);if(!m)throw Error("connectionControllerClient:connectExternal - connector is undefined");p&&g&&m.id===tf.EIP6963_CONNECTOR_ID&&m.setEip6963Wallet?.({provider:p,info:g});let v=tg.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,em.$j)({connector:m,chainId:v})},checkInstalled:t=>{let a=this.getConnectors().filter(t=>"ANNOUNCED"===t.type),p=this.getConnectors().find(t=>"INJECTED"===t.type);if(!t)return!!window.ethereum;if(a.length){let p=t.some(t=>a.some(a=>a.info?.rdns===t));if(p)return!0}return!!p&&!!window?.ethereum&&t.some(t=>!!window.ethereum?.[String(t)])},disconnect:em.zP};super({networkControllerClient:{switchCaipNetwork:async t=>{let a=tg.caipNetworkIdToNumber(t?.id);a&&await (0,em.If)({chainId:a})},async getApprovedCaipNetworksData(){let t=localStorage.getItem("wagmi.wallet");if(t?.includes(tf.WALLET_CONNECT_CONNECTOR_ID)){let t=a.connectors.find(t=>t.id===tf.WALLET_CONNECT_CONNECTOR_ID);if(!t)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let p=await t.getProvider(),g=p.signer?.session?.namespaces,m=g?.[tf.EIP155]?.methods,v=g?.[tf.EIP155]?.chains;return{supportsAllNetworks:m?.includes(tf.ADD_CHAIN_METHOD),approvedCaipNetworkIds:v}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:x,defaultChain:getCaipDefaultChain(g),tokens:tg.getCaipTokens(m),_sdkVersion:v??`html-wagmi-${tf.VERSION}`,..._}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=t,this.syncRequestedNetworks(p),this.syncConnectors(a),this.listenConnectors(a),(0,em.uH)(()=>this.syncAccount()),(0,em.QC)(()=>this.syncNetwork())}getState(){let t=super.getState();return{...t,selectedNetworkId:tg.caipNetworkIdToNumber(t.selectedNetworkId)}}subscribeState(t){return super.subscribeState(a=>t({...a,selectedNetworkId:tg.caipNetworkIdToNumber(a.selectedNetworkId)}))}syncRequestedNetworks(t){let a=t?.map(t=>({id:`${tf.EIP155}:${t.id}`,name:t.name,imageId:tp.EIP155NetworkImageIds[t.id],imageUrl:this.options?.chainImages?.[t.id]}));this.setRequestedCaipNetworks(a??[])}async syncAccount(){let{address:t,isConnected:a}=(0,em.D0)(),{chain:p}=(0,em.Hy)();if(this.resetAccount(),a&&t&&p){let g=`${tf.EIP155}:${p.id}:${t}`;this.setIsConnected(a),this.setCaipAddress(g),await Promise.all([this.syncProfile(t),this.syncBalance(t,p),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!a&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:t,isConnected:a}=(0,em.D0)(),{chain:p}=(0,em.Hy)();if(p){let g=String(p.id),m=`${tf.EIP155}:${g}`;if(this.setCaipNetwork({id:m,name:p.name,imageId:tp.EIP155NetworkImageIds[p.id],imageUrl:this.options?.chainImages?.[p.id]}),a&&t){let a=`${tf.EIP155}:${p.id}:${t}`;if(this.setCaipAddress(a),p.blockExplorers?.default?.url){let a=`${p.blockExplorers.default.url}/address/${t}`;this.setAddressExplorerUrl(a)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(t,p)}}}async syncProfile(t){try{let{name:a,avatar:p}=await this.fetchIdentity({caipChainId:`${tf.EIP155}:${eb.R.id}`,address:t});this.setProfileName(a),this.setProfileImage(p)}catch{let a=await (0,em.Lk)({address:t,chainId:eb.R.id});if(a){this.setProfileName(a);let t=await (0,em.w6)({name:a,chainId:eb.R.id});t&&this.setProfileImage(t)}}}async syncBalance(t,a){let p=await (0,em.EG)({address:t,chainId:a.id,token:this.options?.tokens?.[a.id]?.address});this.setBalance(p.formatted,p.symbol)}syncConnectors(t){let a=[];t.connectors.forEach(({id:t,name:p})=>{t!==tf.EIP6963_CONNECTOR_ID&&a.push({id:t,explorerId:tp.ConnectorExplorerIds[t],imageId:tp.ConnectorImageIds[t],imageUrl:this.options?.connectorImages?.[t],name:tp.ConnectorNamesMap[t]??p,type:tp.ConnectorTypesMap[t]??"EXTERNAL"})}),this.setConnectors(a)}eip6963EventHandler(t,a){if(a.detail){let{info:p,provider:g}=a.detail,m=this.getConnectors(),v=m.find(t=>t.name===p.name);v||(this.addConnector({id:tf.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:p.icon??this.options?.connectorImages?.[tf.EIP6963_CONNECTOR_ID],name:p.name,provider:g,info:p}),t.isAuthorized({info:p,provider:g}))}}listenConnectors(t){let a=t.connectors.find(t=>t.id===tf.EIP6963_CONNECTOR_ID);if("undefined"!=typeof window&&a){let t=this.eip6963EventHandler.bind(this,a);window.addEventListener(tf.EIP6963_ANNOUNCE_EVENT,t),window.dispatchEvent(new Event(tf.EIP6963_REQUEST_EVENT))}}};var tw=p(52208),__classPrivateFieldSet=function(t,a,p,g,m){if("m"===g)throw TypeError("Private method is not writable");if("a"===g&&!m)throw TypeError("Private accessor was defined without a setter");if("function"==typeof a?t!==a||!m:!a.has(t))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===g?m.call(t,p):m?m.value=p:a.set(t,p),p},__classPrivateFieldGet=function(t,a,p,g){if("a"===p&&!g)throw TypeError("Private accessor was defined without a getter");if("function"==typeof a?t!==a||!g:!a.has(t))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===p?g:"a"===p?g.call(t):g?g.value:a.get(t)};let tm="connectedRdns";let EIP6963Connector=class EIP6963Connector extends tw._{constructor(t){super({chains:t.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",v.set(this,void 0),_.set(this,void 0),__classPrivateFieldSet(this,v,this.options.getProvider(),"f")}async connect(t){let a=await super.connect(t);return __classPrivateFieldGet(this,_,"f")&&this.storage?.setItem(tm,__classPrivateFieldGet(this,_,"f").info.rdns),a}async disconnect(){await super.disconnect(),this.storage?.removeItem(tm),__classPrivateFieldSet(this,_,void 0,"f")}async isAuthorized(t){let a=this.storage?.getItem(tm);if(a){if(!t||a!==t.info.rdns)return!0;__classPrivateFieldSet(this,_,t,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(__classPrivateFieldGet(this,_,"f")?.provider??__classPrivateFieldGet(this,v,"f"))}setEip6963Wallet(t){__classPrivateFieldSet(this,_,t,"f")}};v=new WeakMap,_=new WeakMap;var tb=p(16593);"undefined"==typeof window||(window.Buffer||(window.Buffer=tb.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var ty=p(27244),tv=p(98384),t_=p(8385),tC=p(12862),tx=p(65867),tE=p(94143),tk=p(34337),tD=p(25410),tS=p(36305),tO=class extends tC.wR{constructor({chains:t,options:a}){super({chains:t,options:{reloadOnDisconnect:!1,...a}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,tC.Ko)(this,x,void 0),(0,tC.Ko)(this,T,void 0),this.onAccountsChanged=t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,tx.K)(t[0])})},this.onChainChanged=t=>{let a=(0,t_.J)(t),p=this.isChainUnsupported(a);this.emit("change",{chain:{id:a,unsupported:p}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{let a=await this.getProvider();a.on("accountsChanged",this.onAccountsChanged),a.on("chainChanged",this.onChainChanged),a.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let p=await a.enable(),g=(0,tx.K)(p[0]),m=await this.getChainId(),v=this.isChainUnsupported(m);if(t&&m!==t){let a=await this.switchChain(t);m=a.id,v=this.isChainUnsupported(m)}return{account:g,chain:{id:m,unsupported:v}}}catch(t){if(/(user closed modal|accounts received is empty)/i.test(t.message))throw new tE.ab(t);throw t}}async disconnect(){if(!(0,tC.ac)(this,T))return;let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){let t=await this.getProvider(),a=await t.request({method:"eth_accounts"});return(0,tx.K)(a[0])}async getChainId(){let t=await this.getProvider(),a=(0,t_.J)(t.chainId);return a}async getProvider(){if(!(0,tC.ac)(this,T)){let t=(await Promise.all([p.e(542),p.e(181)]).then(p.t.bind(p,542,19))).default;"function"!=typeof t&&"function"==typeof t.default&&(t=t.default),(0,tC.qx)(this,x,new t(this.options));let a=tC.ac(this,x).walletExtension?.getChainId(),g=this.chains.find(t=>this.options.chainId?t.id===this.options.chainId:t.id===a)||this.chains[0],m=this.options.chainId||g?.id,v=this.options.jsonRpcUrl||g?.rpcUrls.default.http[0];(0,tC.qx)(this,T,(0,tC.ac)(this,x).makeWeb3Provider(v,m))}return(0,tC.ac)(this,T)}async getWalletClient({chainId:t}={}){let[a,p]=await Promise.all([this.getProvider(),this.getAccount()]),g=this.chains.find(a=>a.id===t);if(!a)throw Error("provider is required.");return(0,tk.K)({account:p,chain:g,transport:(0,tD.P)(a)})}async isAuthorized(){try{let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(t){let a=await this.getProvider(),p=(0,tS.eC)(t);try{return await a.request({method:"wallet_switchEthereumChain",params:[{chainId:p}]}),this.chains.find(a=>a.id===t)??{id:t,name:`Chain ${p}`,network:`${p}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(m){let g=this.chains.find(a=>a.id===t);if(!g)throw new tv.B({chainId:t,connectorId:this.id});if(4902===m.code)try{return await a.request({method:"wallet_addEthereumChain",params:[{chainId:p,chainName:g.name,nativeCurrency:g.nativeCurrency,rpcUrls:[g.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(g)}]}),g}catch(t){throw new tE.ab(t)}throw new tE.x3(m)}}async watchAsset({address:t,decimals:a=18,image:p,symbol:g}){let m=await this.getProvider();return m.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:a,image:p,symbol:g}}})}};x=new WeakMap,T=new WeakMap;var tA=p(48453),tP="eip155",tI="requestedChains",tN="wallet_addEthereumChain",tT=class extends tC.wR{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),(0,tC.Ko)(this,F),(0,tC.Ko)(this,Y),(0,tC.Ko)(this,Q),(0,tC.Ko)(this,ei),(0,tC.Ko)(this,ea),(0,tC.Ko)(this,el),(0,tC.Ko)(this,eu),(0,tC.Ko)(this,eh),(0,tC.Ko)(this,ep),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,tC.Ko)(this,W,void 0),(0,tC.Ko)(this,z,void 0),this.onAccountsChanged=t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,tx.K)(t[0])})},this.onChainChanged=t=>{let a=Number(t),p=this.isChainUnsupported(a);this.emit("change",{chain:{id:a,unsupported:p}})},this.onDisconnect=()=>{(0,tC.U9)(this,el,ec).call(this,[]),this.emit("disconnect")},this.onDisplayUri=t=>{this.emit("message",{type:"display_uri",data:t})},this.onConnect=()=>{this.emit("connect",{})},(0,tC.U9)(this,F,Z).call(this)}async connect({chainId:t,pairingTopic:a}={}){try{let p=t;if(!p){let t=this.storage?.getItem("store"),a=t?.state?.data?.chain?.id;p=a&&!this.isChainUnsupported(a)?a:this.chains[0]?.id}if(!p)throw Error("No chains found on connector.");let g=await this.getProvider();(0,tC.U9)(this,ei,eo).call(this);let m=(0,tC.U9)(this,Q,J).call(this);if(g.session&&m&&await g.disconnect(),!g.session||m){let t=this.chains.filter(t=>t.id!==p).map(t=>t.id);this.emit("message",{type:"connecting"}),await g.connect({pairingTopic:a,chains:[p],optionalChains:t.length?t:void 0}),(0,tC.U9)(this,el,ec).call(this,this.chains.map(({id:t})=>t))}let v=await g.enable(),_=(0,tx.K)(v[0]),x=await this.getChainId(),T=this.isChainUnsupported(x);return{account:_,chain:{id:x,unsupported:T}}}catch(t){if(/user rejected/i.test(t?.message))throw new tE.ab(t);throw t}}async disconnect(){let t=await this.getProvider();try{await t.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{(0,tC.U9)(this,ea,es).call(this),(0,tC.U9)(this,el,ec).call(this,[])}}async getAccount(){let{accounts:t}=await this.getProvider();return(0,tx.K)(t[0])}async getChainId(){let{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return(0,tC.ac)(this,W)||await (0,tC.U9)(this,F,Z).call(this),t&&await this.switchChain(t),(0,tC.ac)(this,W)}async getWalletClient({chainId:t}={}){let[a,p]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),g=this.chains.find(a=>a.id===t);if(!a)throw Error("provider is required.");return(0,tk.K)({account:p,chain:g,transport:(0,tD.P)(a)})}async isAuthorized(){try{let[t,a]=await Promise.all([this.getAccount(),this.getProvider()]),p=(0,tC.U9)(this,Q,J).call(this);if(!t)return!1;if(p&&a.session){try{await a.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){let a=this.chains.find(a=>a.id===t);if(!a)throw new tE.x3(Error("chain not found on connector."));try{let p=await this.getProvider(),g=(0,tC.U9)(this,eh,ef).call(this),m=(0,tC.U9)(this,ep,eg).call(this),v=g.includes(t);if(!v&&m.includes(tN)){await p.request({method:tN,params:[{chainId:(0,tS.eC)(a.id),blockExplorerUrls:[a.blockExplorers?.default?.url],chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[...a.rpcUrls.default.http]}]});let g=(0,tC.U9)(this,eu,ed).call(this);g.push(t),(0,tC.U9)(this,el,ec).call(this,g)}return await p.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,tS.eC)(t)}]}),a}catch(a){let t="string"==typeof a?a:a?.message;if(/user rejected request/i.test(t))throw new tE.ab(a);throw new tE.x3(a)}}};function publicProvider(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}W=new WeakMap,z=new WeakMap,F=new WeakSet,Z=async function(){return(0,tC.ac)(this,z)||"undefined"==typeof window||(0,tC.qx)(this,z,(0,tC.U9)(this,Y,X).call(this)),(0,tC.ac)(this,z)},Y=new WeakSet,X=async function(){let{EthereumProvider:t,OPTIONAL_EVENTS:a,OPTIONAL_METHODS:g}=await p.e(438).then(p.bind(p,94438)),[m,...v]=this.chains.map(({id:t})=>t);if(m){let{projectId:p,showQrModal:_=!0,qrModalOptions:x,metadata:T,relayUrl:z}=this.options;(0,tC.qx)(this,W,await t.init({showQrModal:_,qrModalOptions:x,projectId:p,optionalMethods:g,optionalEvents:a,chains:[m],optionalChains:v.length?v:void 0,rpcMap:Object.fromEntries(this.chains.map(t=>[t.id,t.rpcUrls.default.http[0]])),metadata:T,relayUrl:z}))}},Q=new WeakSet,J=function(){let t=(0,tC.U9)(this,ep,eg).call(this);if(t.includes(tN)||!this.options.isNewChainsStale)return!1;let a=(0,tC.U9)(this,eu,ed).call(this),p=this.chains.map(({id:t})=>t),g=(0,tC.U9)(this,eh,ef).call(this);return(!g.length||!!g.some(t=>p.includes(t)))&&!p.every(t=>a.includes(t))},ei=new WeakSet,eo=function(){(0,tC.ac)(this,W)&&((0,tC.U9)(this,ea,es).call(this),(0,tC.ac)(this,W).on("accountsChanged",this.onAccountsChanged),(0,tC.ac)(this,W).on("chainChanged",this.onChainChanged),(0,tC.ac)(this,W).on("disconnect",this.onDisconnect),(0,tC.ac)(this,W).on("session_delete",this.onDisconnect),(0,tC.ac)(this,W).on("display_uri",this.onDisplayUri),(0,tC.ac)(this,W).on("connect",this.onConnect))},ea=new WeakSet,es=function(){(0,tC.ac)(this,W)&&((0,tC.ac)(this,W).removeListener("accountsChanged",this.onAccountsChanged),(0,tC.ac)(this,W).removeListener("chainChanged",this.onChainChanged),(0,tC.ac)(this,W).removeListener("disconnect",this.onDisconnect),(0,tC.ac)(this,W).removeListener("session_delete",this.onDisconnect),(0,tC.ac)(this,W).removeListener("display_uri",this.onDisplayUri),(0,tC.ac)(this,W).removeListener("connect",this.onConnect))},el=new WeakSet,ec=function(t){this.storage?.setItem(tI,t)},eu=new WeakSet,ed=function(){return this.storage?.getItem(tI)??[]},eh=new WeakSet,ef=function(){if(!(0,tC.ac)(this,W))return[];let t=tC.ac(this,W).session?.namespaces;if(!t)return[];let a=(0,tA.fK)(t),p=a[tP]?.chains?.map(t=>parseInt(t.split(":")[1]||""));return p??[]},ep=new WeakSet,eg=function(){if(!(0,tC.ac)(this,W))return[];let t=tC.ac(this,W).session?.namespaces;if(!t)return[];let a=(0,tA.fK)(t),p=a[tP]?.methods;return p??[]};let t$=ey.j1.getBlockchainApiUrl();function walletConnectProvider({projectId:t}){return function(a){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(a.id))return null;let p=`${t$}/v1/?chainId=${tf.EIP155}:${a.id}&projectId=${t}`;return{chain:{...a,rpcUrls:{...a.rpcUrls,default:{http:[p]}}},rpcUrls:{http:[p]}}}}function defaultWagmiConfig({projectId:t,chains:a,metadata:p}){let{publicClient:g}=(0,em.QB)(a,[walletConnectProvider({projectId:t}),publicProvider()]);return(0,ty._g)({autoConnect:!0,connectors:[new tT({chains:a,options:{projectId:t,showQrModal:!1,metadata:p}}),new EIP6963Connector({chains:a}),new tw._({chains:a,options:{shimDisconnect:!0}}),new tO({chains:a,options:{appName:p?.name??"Unknown"}})],publicClient:g})}function createWeb3Modal(t){return m||getWeb3Modal(m=new Web3Modal({...t,_sdkVersion:`react-wagmi-${tf.VERSION}`})),m}},24981:function(t,a,p){"use strict";p.d(a,{Jb:function(){return ec},Ld:function(){return eu},YP:function(){return el},_$LH:function(){return ef},dy:function(){return es},sY:function(){return j}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=globalThis,m=g.trustedTypes,v=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,T="?"+x,W=`<${T}>`,z=document,l=()=>z.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,F=Array.isArray,u=t=>F(t)||"function"==typeof t?.[Symbol.iterator],Z="[ 	\n\f\r]",Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Q=/>/g,J=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ei=/'/g,eo=/"/g,ea=/^(?:script|style|textarea|title)$/i,y=t=>(a,...p)=>({_$litType$:t,strings:a,values:p}),es=y(1),el=y(2),ec=Symbol.for("lit-noChange"),eu=Symbol.for("lit-nothing"),ed=new WeakMap,eh=z.createTreeWalker(z,129);function C(t,a){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==v?v.createHTML(a):a}let P=(t,a)=>{let p=t.length-1,g=[],m,v=2===a?"<svg>":"",T=Y;for(let a=0;a<p;a++){let p=t[a],z,F,Z=-1,es=0;for(;es<p.length&&(T.lastIndex=es,null!==(F=T.exec(p)));)es=T.lastIndex,T===Y?"!--"===F[1]?T=X:void 0!==F[1]?T=Q:void 0!==F[2]?(ea.test(F[2])&&(m=RegExp("</"+F[2],"g")),T=J):void 0!==F[3]&&(T=J):T===J?">"===F[0]?(T=m??Y,Z=-1):void 0===F[1]?Z=-2:(Z=T.lastIndex-F[2].length,z=F[1],T=void 0===F[3]?J:'"'===F[3]?eo:ei):T===eo||T===ei?T=J:T===X||T===Q?T=Y:(T=J,m=void 0);let el=T===J&&t[a+1].startsWith("/>")?" ":"";v+=T===Y?p+W:Z>=0?(g.push(z),p.slice(0,Z)+_+p.slice(Z)+x+el):p+x+(-2===Z?a:el)}return[C(t,v+(t[p]||"<?>")+(2===a?"</svg>":"")),g]};let V=class V{constructor({strings:t,_$litType$:a},p){let g;this.parts=[];let v=0,W=0,z=t.length-1,F=this.parts,[Z,Y]=P(t,a);if(this.el=V.createElement(Z,p),eh.currentNode=this.el.content,2===a){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(g=eh.nextNode())&&F.length<z;){if(1===g.nodeType){if(g.hasAttributes())for(let t of g.getAttributeNames())if(t.endsWith(_)){let a=Y[W++],p=g.getAttribute(t).split(x),m=/([.?@])?(.*)/.exec(a);F.push({type:1,index:v,name:m[2],strings:p,ctor:"."===m[1]?k:"?"===m[1]?H:"@"===m[1]?I:R}),g.removeAttribute(t)}else t.startsWith(x)&&(F.push({type:6,index:v}),g.removeAttribute(t));if(ea.test(g.tagName)){let t=g.textContent.split(x),a=t.length-1;if(a>0){g.textContent=m?m.emptyScript:"";for(let p=0;p<a;p++)g.append(t[p],l()),eh.nextNode(),F.push({type:2,index:++v});g.append(t[a],l())}}}else if(8===g.nodeType){if(g.data===T)F.push({type:2,index:v});else{let t=-1;for(;-1!==(t=g.data.indexOf(x,t+1));)F.push({type:7,index:v}),t+=x.length-1}}v++}}static createElement(t,a){let p=z.createElement("template");return p.innerHTML=t,p}};function N(t,a,p=t,g){if(a===ec)return a;let m=void 0!==g?p._$Co?.[g]:p._$Cl,v=c(a)?void 0:a._$litDirective$;return m?.constructor!==v&&(m?._$AO?.(!1),void 0===v?m=void 0:(m=new v(t))._$AT(t,p,g),void 0!==g?(p._$Co??=[])[g]=m:p._$Cl=m),void 0!==m&&(a=N(t,m._$AS(t,a.values),m,g)),a}let S=class S{constructor(t,a){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:a},parts:p}=this._$AD,g=(t?.creationScope??z).importNode(a,!0);eh.currentNode=g;let m=eh.nextNode(),v=0,_=0,x=p[0];for(;void 0!==x;){if(v===x.index){let a;2===x.type?a=new M(m,m.nextSibling,this,t):1===x.type?a=new x.ctor(m,x.name,x.strings,this,t):6===x.type&&(a=new L(m,this,t)),this._$AV.push(a),x=p[++_]}v!==x?.index&&(m=eh.nextNode(),v++)}return eh.currentNode=z,g}p(t){let a=0;for(let p of this._$AV)void 0!==p&&(void 0!==p.strings?(p._$AI(t,p,a),a+=p.strings.length-2):p._$AI(t[a])),a++}};let M=class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,a,p,g){this.type=2,this._$AH=eu,this._$AN=void 0,this._$AA=t,this._$AB=a,this._$AM=p,this.options=g,this._$Cv=g?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,a=this._$AM;return void 0!==a&&11===t?.nodeType&&(t=a.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,a=this){c(t=N(this,t,a))?t===eu||null==t||""===t?(this._$AH!==eu&&this._$AR(),this._$AH=eu):t!==this._$AH&&t!==ec&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==eu&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(z.createTextNode(t)),this._$AH=t}g(t){let{values:a,_$litType$:p}=t,g="number"==typeof p?this._$AC(t):(void 0===p.el&&(p.el=V.createElement(C(p.h,p.h[0]),this.options)),p);if(this._$AH?._$AD===g)this._$AH.p(a);else{let t=new S(g,this),p=t.u(this.options);t.p(a),this.$(p),this._$AH=t}}_$AC(t){let a=ed.get(t.strings);return void 0===a&&ed.set(t.strings,a=new V(t)),a}T(t){F(this._$AH)||(this._$AH=[],this._$AR());let a=this._$AH,p,g=0;for(let m of t)g===a.length?a.push(p=new M(this.k(l()),this.k(l()),this,this.options)):p=a[g],p._$AI(m),g++;g<a.length&&(this._$AR(p&&p._$AB.nextSibling,g),a.length=g)}_$AR(t=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);t&&t!==this._$AB;){let a=t.nextSibling;t.remove(),t=a}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}};let R=class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,a,p,g,m){this.type=1,this._$AH=eu,this._$AN=void 0,this.element=t,this.name=a,this._$AM=g,this.options=m,p.length>2||""!==p[0]||""!==p[1]?(this._$AH=Array(p.length-1).fill(new String),this.strings=p):this._$AH=eu}_$AI(t,a=this,p,g){let m=this.strings,v=!1;if(void 0===m)(v=!c(t=N(this,t,a,0))||t!==this._$AH&&t!==ec)&&(this._$AH=t);else{let g,_;let x=t;for(t=m[0],g=0;g<m.length-1;g++)(_=N(this,x[p+g],a,g))===ec&&(_=this._$AH[g]),v||=!c(_)||_!==this._$AH[g],_===eu?t=eu:t!==eu&&(t+=(_??"")+m[g+1]),this._$AH[g]=_}v&&!g&&this.j(t)}j(t){t===eu?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};let k=class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===eu?void 0:t}};let H=class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==eu)}};let I=class I extends R{constructor(t,a,p,g,m){super(t,a,p,g,m),this.type=5}_$AI(t,a=this){if((t=N(this,t,a,0)??eu)===ec)return;let p=this._$AH,g=t===eu&&p!==eu||t.capture!==p.capture||t.once!==p.once||t.passive!==p.passive,m=t!==eu&&(p===eu||g);g&&this.element.removeEventListener(this.name,this,p),m&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};let L=class L{constructor(t,a,p){this.element=t,this.type=6,this._$AN=void 0,this._$AM=a,this.options=p}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};let ef={S:_,A:x,P:T,C:1,M:P,L:S,R:u,V:N,D:M,I:R,H,N:I,U:k,B:L},ep=g.litHtmlPolyfillSupport;ep?.(V,M),(g.litHtmlVersions??=[]).push("3.0.1");let j=(t,a,p)=>{let g=p?.renderBefore??a,m=g._$litPart$;if(void 0===m){let t=p?.renderBefore??null;g._$litPart$=m=new M(a.insertBefore(l(),t),t,void 0,p??{})}return m._$AI(t),m}},87859:function(t,a,p){"use strict";p.d(a,{Cb:function(){return n},SB:function(){return state_r}});var g=p(62846);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m={attribute:!0,type:String,converter:g.Ts,reflect:!1,hasChanged:g.Qu},r=(t=m,a,p)=>{let{kind:g,metadata:v}=p,_=globalThis.litPropertyMetadata.get(v);if(void 0===_&&globalThis.litPropertyMetadata.set(v,_=new Map),_.set(p.name,t),"accessor"===g){let{name:g}=p;return{set(p){let m=a.get.call(this);a.set.call(this,p),this.requestUpdate(g,m,t)},init(a){return void 0!==a&&this.C(g,void 0,t),a}}}if("setter"===g){let{name:g}=p;return function(p){let m=this[g];a.call(this,p),this.requestUpdate(g,m,t)}}throw Error("Unsupported decorator location: "+g)};function n(t){return(a,p)=>"object"==typeof p?r(t,a,p):((t,a,p)=>{let g=a.hasOwnProperty(p);return a.constructor.createProperty(p,g?{...t,wrapped:!0}:t),g?Object.getOwnPropertyDescriptor(a,p):void 0})(t,a,p)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(t){return n({...t,state:!0,attribute:!1})}},46402:function(t,a,p){"use strict";p.d(a,{o:function(){return o}});var g=p(24981);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=t=>t??g.Ld},28401:function(t,a,p){"use strict";p.d(a,{oi:function(){return s},iv:function(){return g.iv},dy:function(){return m.dy},YP:function(){return m.YP},$m:function(){return g.$m}});var g=p(62846),m=p(24981);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=class s extends g.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,m.sY)(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return m.Jb}};s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s});let v=globalThis.litElementPolyfillSupport;v?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.0.1")},14859:function(t,a,p){"use strict";p.d(a,{E:function(){return allocUnsafe}});var g=p(62182);function allocUnsafe(t=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,g.P)(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}},78208:function(t,a,p){"use strict";p.d(a,{z:function(){return concat}});var g=p(14859),m=p(62182);function concat(t,a){a||(a=t.reduce((t,a)=>t+a.length,0));let p=(0,g.E)(a),v=0;for(let a of t)p.set(a,v),v+=a.length;return(0,m.P)(p)}},34658:function(t,a,p){"use strict";p.d(a,{m:function(){return fromString}});var g=p(95203),m=p(62182);function fromString(t,a="utf8"){let p=g.Z[a];if(!p)throw Error(`Unsupported encoding "${a}"`);return("utf8"===a||"utf-8"===a)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,m.P)(globalThis.Buffer.from(t,"utf-8")):p.decoder.decode(`${p.prefix}${t}`)}},66356:function(t,a,p){"use strict";p.d(a,{BB:function(){return v.B},mL:function(){return m.m},zo:function(){return g.z}});var g=p(78208),m=p(34658),v=p(92257)},92257:function(t,a,p){"use strict";p.d(a,{B:function(){return toString}});var g=p(95203);function toString(t,a="utf8"){let p=g.Z[a];if(!p)throw Error(`Unsupported encoding "${a}"`);return("utf8"===a||"utf-8"===a)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):p.encoder.encode(t).substring(1)}},62182:function(t,a,p){"use strict";function asUint8Array(t){return null!=globalThis.Buffer?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}p.d(a,{P:function(){return asUint8Array}})},95203:function(t,a,p){"use strict";p.d(a,{Z:function(){return eQ}});var g={};p.r(g),p.d(g,{identity:function(){return ei}});var m={};p.r(m),p.d(m,{base2:function(){return eo}});var v={};p.r(v),p.d(v,{base8:function(){return ea}});var _={};p.r(_),p.d(_,{base10:function(){return es}});var x={};p.r(x),p.d(x,{base16:function(){return el},base16upper:function(){return ec}});var T={};p.r(T),p.d(T,{base32:function(){return eu},base32hex:function(){return ep},base32hexpad:function(){return ew},base32hexpadupper:function(){return em},base32hexupper:function(){return eg},base32pad:function(){return eh},base32padupper:function(){return ef},base32upper:function(){return ed},base32z:function(){return eb}});var W={};p.r(W),p.d(W,{base36:function(){return ey},base36upper:function(){return ev}});var z={};p.r(z),p.d(z,{base58btc:function(){return e_},base58flickr:function(){return eC}});var F={};p.r(F),p.d(F,{base64:function(){return ex},base64pad:function(){return eE},base64url:function(){return ek},base64urlpad:function(){return eD}});var Z={};p.r(Z),p.d(Z,{base256emoji:function(){return eP}});var Y={};p.r(Y),p.d(Y,{sha256:function(){return eN},sha512:function(){return eT}});var X={};p.r(X),p.d(X,{identity:function(){return e$}});var Q={};p.r(Q),p.d(Q,{code:function(){return eB},decode:function(){return raw_decode},encode:function(){return raw_encode},name:function(){return eR}});var J={};p.r(J),p.d(J,{code:function(){return eL},decode:function(){return json_decode},encode:function(){return json_encode},name:function(){return eM}});var src=function(t,a){if(t.length>=255)throw TypeError("Alphabet too long");for(var p=new Uint8Array(256),g=0;g<p.length;g++)p[g]=255;for(var m=0;m<t.length;m++){var v=t.charAt(m),_=v.charCodeAt(0);if(255!==p[_])throw TypeError(v+" is ambiguous");p[_]=m}var x=t.length,T=t.charAt(0),W=Math.log(x)/Math.log(256),z=Math.log(256)/Math.log(x);function decodeUnsafe(t){if("string"!=typeof t)throw TypeError("Expected String");if(0===t.length)return new Uint8Array;var a=0;if(" "!==t[0]){for(var g=0,m=0;t[a]===T;)g++,a++;for(var v=(t.length-a)*W+1>>>0,_=new Uint8Array(v);t[a];){var z=p[t.charCodeAt(a)];if(255===z)return;for(var F=0,Z=v-1;(0!==z||F<m)&&-1!==Z;Z--,F++)z+=x*_[Z]>>>0,_[Z]=z%256>>>0,z=z/256>>>0;if(0!==z)throw Error("Non-zero carry");m=F,a++}if(" "!==t[a]){for(var Y=v-m;Y!==v&&0===_[Y];)Y++;for(var X=new Uint8Array(g+(v-Y)),Q=g;Y!==v;)X[Q++]=_[Y++];return X}}}function decode(t){var p=decodeUnsafe(t);if(p)return p;throw Error(`Non-${a} character`)}return{encode:function(a){if(a instanceof Uint8Array||(ArrayBuffer.isView(a)?a=new Uint8Array(a.buffer,a.byteOffset,a.byteLength):Array.isArray(a)&&(a=Uint8Array.from(a))),!(a instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===a.length)return"";for(var p=0,g=0,m=0,v=a.length;m!==v&&0===a[m];)m++,p++;for(var _=(v-m)*z+1>>>0,W=new Uint8Array(_);m!==v;){for(var F=a[m],Z=0,Y=_-1;(0!==F||Z<g)&&-1!==Y;Y--,Z++)F+=256*W[Y]>>>0,W[Y]=F%x>>>0,F=F/x>>>0;if(0!==F)throw Error("Non-zero carry");g=Z,m++}for(var X=_-g;X!==_&&0===W[X];)X++;for(var Q=T.repeat(p);X<_;++X)Q+=t.charAt(W[X]);return Q},decodeUnsafe:decodeUnsafe,decode:decode}};new Uint8Array(0);let equals=(t,a)=>{if(t===a)return!0;if(t.byteLength!==a.byteLength)return!1;for(let p=0;p<t.byteLength;p++)if(t[p]!==a[p])return!1;return!0},coerce=t=>{if(t instanceof Uint8Array&&"Uint8Array"===t.constructor.name)return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw Error("Unknown type, must be binary type")},fromString=t=>new TextEncoder().encode(t),bytes_toString=t=>new TextDecoder().decode(t);let Encoder=class Encoder{constructor(t,a,p){this.name=t,this.prefix=a,this.baseEncode=p}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}};let Decoder=class Decoder{constructor(t,a,p){if(this.name=t,this.prefix=a,void 0===a.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=a.codePointAt(0),this.baseDecode=p}decode(t){if("string"==typeof t){if(t.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(t.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(t){return or(this,t)}};let ComposedDecoder=class ComposedDecoder{constructor(t){this.decoders=t}or(t){return or(this,t)}decode(t){let a=t[0],p=this.decoders[a];if(p)return p.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}};let or=(t,a)=>new ComposedDecoder({...t.decoders||{[t.prefix]:t},...a.decoders||{[a.prefix]:a}});let Codec=class Codec{constructor(t,a,p,g){this.name=t,this.prefix=a,this.baseEncode=p,this.baseDecode=g,this.encoder=new Encoder(t,a,p),this.decoder=new Decoder(t,a,g)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}};let from=({name:t,prefix:a,encode:p,decode:g})=>new Codec(t,a,p,g),baseX=({prefix:t,name:a,alphabet:p})=>{let{encode:g,decode:m}=src(p,a);return from({prefix:t,name:a,encode:g,decode:t=>coerce(m(t))})},decode=(t,a,p,g)=>{let m={};for(let t=0;t<a.length;++t)m[a[t]]=t;let v=t.length;for(;"="===t[v-1];)--v;let _=new Uint8Array(v*p/8|0),x=0,T=0,W=0;for(let a=0;a<v;++a){let v=m[t[a]];if(void 0===v)throw SyntaxError(`Non-${g} character`);T=T<<p|v,(x+=p)>=8&&(x-=8,_[W++]=255&T>>x)}if(x>=p||255&T<<8-x)throw SyntaxError("Unexpected end of data");return _},encode=(t,a,p)=>{let g="="===a[a.length-1],m=(1<<p)-1,v="",_=0,x=0;for(let g=0;g<t.length;++g)for(x=x<<8|t[g],_+=8;_>p;)_-=p,v+=a[m&x>>_];if(_&&(v+=a[m&x<<p-_]),g)for(;v.length*p&7;)v+="=";return v},rfc4648=({name:t,prefix:a,bitsPerChar:p,alphabet:g})=>from({prefix:a,name:t,encode:t=>encode(t,g,p),decode:a=>decode(a,g,p,t)}),ei=from({prefix:"\x00",name:"identity",encode:t=>bytes_toString(t),decode:t=>fromString(t)}),eo=rfc4648({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),ea=rfc4648({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),es=baseX({prefix:"9",name:"base10",alphabet:"0123456789"}),el=rfc4648({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),ec=rfc4648({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),eu=rfc4648({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),ed=rfc4648({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),eh=rfc4648({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),ef=rfc4648({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),ep=rfc4648({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),eg=rfc4648({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),ew=rfc4648({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),em=rfc4648({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),eb=rfc4648({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),ey=baseX({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),ev=baseX({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),e_=baseX({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),eC=baseX({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),ex=rfc4648({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),eE=rfc4648({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),ek=rfc4648({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),eD=rfc4648({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),eS=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),eO=eS.reduce((t,a,p)=>(t[p]=a,t),[]),eA=eS.reduce((t,a,p)=>(t[a.codePointAt(0)]=p,t),[]);function base256emoji_encode(t){return t.reduce((t,a)=>t+=eO[a],"")}function base256emoji_decode(t){let a=[];for(let p of t){let t=eA[p.codePointAt(0)];if(void 0===t)throw Error(`Non-base256emoji character: ${p}`);a.push(t)}return new Uint8Array(a)}let eP=from({prefix:"\uD83D\uDE80",name:"base256emoji",encode:base256emoji_encode,decode:base256emoji_decode});function varint_encode(t,a,p){a=a||[];for(var g=p=p||0;t>=2147483648;)a[p++]=255&t|128,t/=128;for(;-128&t;)a[p++]=255&t|128,t>>>=7;return a[p]=0|t,varint_encode.bytes=p-g+1,a}function read(t,a){var p,g=0,a=a||0,m=0,v=a,_=t.length;do{if(v>=_)throw read.bytes=0,RangeError("Could not decode varint");p=t[v++],g+=m<28?(127&p)<<m:(127&p)*Math.pow(2,m),m+=7}while(p>=128);return read.bytes=v-a,g}var eI={encode:varint_encode,decode:read,encodingLength:function(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:t<34359738368?5:t<4398046511104?6:t<562949953421312?7:t<72057594037927940?8:t<0x7fffffffffffffff?9:10}};let src_varint_decode=(t,a=0)=>{let p=eI.decode(t,a);return[p,eI.decode.bytes]},encodeTo=(t,a,p=0)=>(eI.encode(t,a,p),a),encodingLength=t=>eI.encodingLength(t),create=(t,a)=>{let p=a.byteLength,g=encodingLength(t),m=g+encodingLength(p),v=new Uint8Array(m+p);return encodeTo(t,v,0),encodeTo(p,v,g),v.set(a,m),new Digest(t,p,a,v)},digest_decode=t=>{let a=coerce(t),[p,g]=src_varint_decode(a),[m,v]=src_varint_decode(a.subarray(g)),_=a.subarray(g+v);if(_.byteLength!==m)throw Error("Incorrect length");return new Digest(p,m,_,a)},digest_equals=(t,a)=>t===a||t.code===a.code&&t.size===a.size&&equals(t.bytes,a.bytes);let Digest=class Digest{constructor(t,a,p,g){this.code=t,this.size=a,this.digest=p,this.bytes=g}};let hasher_from=({name:t,code:a,encode:p})=>new Hasher(t,a,p);let Hasher=class Hasher{constructor(t,a,p){this.name=t,this.code=a,this.encode=p}digest(t){if(t instanceof Uint8Array){let a=this.encode(t);return a instanceof Uint8Array?create(this.code,a):a.then(t=>create(this.code,t))}throw Error("Unknown type, must be binary type")}};let sha=t=>async a=>new Uint8Array(await crypto.subtle.digest(t,a)),eN=hasher_from({name:"sha2-256",code:18,encode:sha("SHA-256")}),eT=hasher_from({name:"sha2-512",code:19,encode:sha("SHA-512")}),e$={code:0,name:"identity",encode:coerce,digest:t=>create(0,coerce(t))},eR="raw",eB=85,raw_encode=t=>coerce(t),raw_decode=t=>coerce(t),eU=new TextEncoder,ej=new TextDecoder,eM="json",eL=512,json_encode=t=>eU.encode(JSON.stringify(t)),json_decode=t=>JSON.parse(ej.decode(t));let CID=class CID{constructor(t,a,p,g){this.code=a,this.version=t,this.multihash=p,this.bytes=g,this.byteOffset=g.byteOffset,this.byteLength=g.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:eV,byteLength:eV,code:eH,version:eH,multihash:eH,bytes:eH,_baseCache:eV,asCID:eV})}toV0(){if(0===this.version)return this;{let{code:t,multihash:a}=this;if(t!==eW)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(a.code!==ez)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return CID.createV0(a)}}toV1(){switch(this.version){case 0:{let{code:t,digest:a}=this.multihash,p=create(t,a);return CID.createV1(this.code,p)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(t){return t&&this.code===t.code&&this.version===t.version&&digest_equals(this.multihash,t.multihash)}toString(t){let{bytes:a,version:p,_baseCache:g}=this;return 0===p?toStringV0(a,g,t||e_.encoder):toStringV1(a,g,t||eu.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(t){return deprecate(/^0\.0/,eZ),!!(t&&(t[eF]||t.asCID===t))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(t){if(t instanceof CID)return t;if(null!=t&&t.asCID===t){let{version:a,code:p,multihash:g,bytes:m}=t;return new CID(a,p,g,m||encodeCID(a,p,g.bytes))}if(null==t||!0!==t[eF])return null;{let{version:a,multihash:p,code:g}=t,m=digest_decode(p);return CID.create(a,g,m)}}static create(t,a,p){if("number"!=typeof a)throw Error("String codecs are no longer supported");switch(t){case 0:if(a===eW)return new CID(t,a,p,p.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eW}) block encoding`);case 1:{let g=encodeCID(t,a,p.bytes);return new CID(t,a,p,g)}default:throw Error("Invalid version")}}static createV0(t){return CID.create(0,eW,t)}static createV1(t,a){return CID.create(1,t,a)}static decode(t){let[a,p]=CID.decodeFirst(t);if(p.length)throw Error("Incorrect length");return a}static decodeFirst(t){let a=CID.inspectBytes(t),p=a.size-a.multihashSize,g=coerce(t.subarray(p,p+a.multihashSize));if(g.byteLength!==a.multihashSize)throw Error("Incorrect length");let m=g.subarray(a.multihashSize-a.digestSize),v=new Digest(a.multihashCode,a.digestSize,m,g),_=0===a.version?CID.createV0(v):CID.createV1(a.codec,v);return[_,t.subarray(a.size)]}static inspectBytes(t){let a=0,next=()=>{let[p,g]=src_varint_decode(t.subarray(a));return a+=g,p},p=next(),g=eW;if(18===p?(p=0,a=0):1===p&&(g=next()),0!==p&&1!==p)throw RangeError(`Invalid CID version ${p}`);let m=a,v=next(),_=next(),x=a+_;return{version:p,codec:g,multihashCode:v,digestSize:_,multihashSize:x-m,size:x}}static parse(t,a){let[p,g]=parseCIDtoBytes(t,a),m=CID.decode(g);return m._baseCache.set(p,t),m}};let parseCIDtoBytes=(t,a)=>{switch(t[0]){case"Q":return[e_.prefix,(a||e_).decode(`${e_.prefix}${t}`)];case e_.prefix:return[e_.prefix,(a||e_).decode(t)];case eu.prefix:return[eu.prefix,(a||eu).decode(t)];default:if(null==a)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[t[0],a.decode(t)]}},toStringV0=(t,a,p)=>{let{prefix:g}=p;if(g!==e_.prefix)throw Error(`Cannot string encode V0 in ${p.name} encoding`);let m=a.get(g);if(null!=m)return m;{let m=p.encode(t).slice(1);return a.set(g,m),m}},toStringV1=(t,a,p)=>{let{prefix:g}=p,m=a.get(g);if(null!=m)return m;{let m=p.encode(t);return a.set(g,m),m}},eW=112,ez=18,encodeCID=(t,a,p)=>{let g=encodingLength(t),m=g+encodingLength(a),v=new Uint8Array(m+p.byteLength);return encodeTo(t,v,0),encodeTo(a,v,g),v.set(p,m),v},eF=Symbol.for("@ipld/js-cid/CID"),eH={writable:!1,configurable:!1,enumerable:!0},eV={writable:!1,enumerable:!1,configurable:!1},deprecate=(t,a)=>{if(t.test("0.0.0-dev"))console.warn(a);else throw Error(a)},eZ=`CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,eK={...g,...m,...v,..._,...x,...T,...W,...z,...F,...Z};({...Y,...X});var eq=p(14859);function createCodec(t,a,p,g){return{name:t,prefix:a,encoder:{name:t,prefix:a,encode:p},decoder:{decode:g}}}let eY=createCodec("utf8","u",t=>{let a=new TextDecoder("utf8");return"u"+a.decode(t)},t=>{let a=new TextEncoder;return a.encode(t.substring(1))}),eG=createCodec("ascii","a",t=>{let a="a";for(let p=0;p<t.length;p++)a+=String.fromCharCode(t[p]);return a},t=>{t=t.substring(1);let a=(0,eq.E)(t.length);for(let p=0;p<t.length;p++)a[p]=t.charCodeAt(p);return a}),eX={utf8:eY,"utf-8":eY,hex:eK.base16,latin1:eG,ascii:eG,binary:eG,...eK};var eQ=eX},49233:function(t,a,p){"use strict";p.d(a,{sj:function(){return proxy},iH:function(){return ref},CO:function(){return snapshot},Ld:function(){return subscribe}}),Symbol();let g=Symbol(),m=Object.getPrototypeOf,v=new WeakMap,l=t=>t&&(v.has(t)?v.get(t):m(t)===Object.prototype||m(t)===Array.prototype),y=t=>l(t)&&t[g]||null,h=(t,a=!0)=>{v.set(t,a)},isObject=t=>"object"==typeof t&&null!==t,_=new WeakMap,x=new WeakSet,buildProxyFunction=(t=Object.is,a=(t,a)=>new Proxy(t,a),p=t=>isObject(t)&&!x.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer),g=t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}},m=new WeakMap,v=(t,a,p=g)=>{let T=m.get(t);if((null==T?void 0:T[0])===a)return T[1];let W=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return h(W,!0),m.set(t,[a,W]),Reflect.ownKeys(t).forEach(a=>{if(Object.getOwnPropertyDescriptor(W,a))return;let g=Reflect.get(t,a),m={value:g,enumerable:!0,configurable:!0};if(x.has(g))h(g,!1);else if(g instanceof Promise)delete m.value,m.get=()=>p(g);else if(_.has(g)){let[t,a]=_.get(g);m.value=v(t,a(),p)}Object.defineProperty(W,a,m)}),Object.preventExtensions(W)},T=new WeakMap,W=[1,1],z=g=>{if(!isObject(g))throw Error("object required");let m=T.get(g);if(m)return m;let F=W[0],Z=new Set,notifyUpdate=(t,a=++W[0])=>{F!==a&&(F=a,Z.forEach(p=>p(t,a)))},Y=W[1],ensureVersion=(t=++W[1])=>(Y===t||Z.size||(Y=t,X.forEach(([a])=>{let p=a[1](t);p>F&&(F=p)})),F),createPropListener=t=>(a,p)=>{let g=[...a];g[1]=[t,...g[1]],notifyUpdate(g,p)},X=new Map,addPropListener=(t,a)=>{if(X.has(t))throw Error("prop listener already exists");if(Z.size){let p=a[3](createPropListener(t));X.set(t,[a,p])}else X.set(t,[a])},removePropListener=t=>{var a;let p=X.get(t);p&&(X.delete(t),null==(a=p[1])||a.call(p))},addListener=t=>{Z.add(t),1===Z.size&&X.forEach(([t,a],p)=>{if(a)throw Error("remove already exists");let g=t[3](createPropListener(p));X.set(p,[t,g])});let removeListener=()=>{Z.delete(t),0===Z.size&&X.forEach(([t,a],p)=>{a&&(a(),X.set(p,[t]))})};return removeListener},Q=Array.isArray(g)?[]:Object.create(Object.getPrototypeOf(g)),J={deleteProperty(t,a){let p=Reflect.get(t,a);removePropListener(a);let g=Reflect.deleteProperty(t,a);return g&&notifyUpdate(["delete",[a],p]),g},set(a,g,m,v){let W=Reflect.has(a,g),F=Reflect.get(a,g,v);if(W&&(t(F,m)||T.has(m)&&t(F,T.get(m))))return!0;removePropListener(g),isObject(m)&&(m=y(m)||m);let Z=m;if(m instanceof Promise)m.then(t=>{m.status="fulfilled",m.value=t,notifyUpdate(["resolve",[g],t])}).catch(t=>{m.status="rejected",m.reason=t,notifyUpdate(["reject",[g],t])});else{!_.has(m)&&p(m)&&(Z=z(m));let t=!x.has(Z)&&_.get(Z);t&&addPropListener(g,t)}return Reflect.set(a,g,Z,v),notifyUpdate(["set",[g],m,F]),!0}},ei=a(Q,J);T.set(g,ei);let eo=[Q,ensureVersion,v,addListener];return _.set(ei,eo),Reflect.ownKeys(g).forEach(t=>{let a=Object.getOwnPropertyDescriptor(g,t);"value"in a&&(ei[t]=g[t],delete a.value,delete a.writable),Object.defineProperty(Q,t,a)}),ei})=>[z,_,x,t,a,p,g,m,v,T,W],[T]=buildProxyFunction();function proxy(t={}){return T(t)}function subscribe(t,a,p){let g;let m=_.get(t);m||console.warn("Please use proxy object");let v=[],x=m[3],T=!1,W=x(t=>{if(v.push(t),p){a(v.splice(0));return}g||(g=Promise.resolve().then(()=>{g=void 0,T&&a(v.splice(0))}))});return T=!0,()=>{T=!1,W()}}function snapshot(t,a){let p=_.get(t);p||console.warn("Please use proxy object");let[g,m,v]=p;return v(g,m(),a)}function ref(t){return x.add(t),t}}}]);
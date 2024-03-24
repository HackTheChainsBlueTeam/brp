exports.id=899,exports.ids=[899],exports.modules={32837:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(46206);function readInt16BE(d,m){return void 0===m&&(m=0),(d[m+0]<<8|d[m+1])<<16>>16}function readUint16BE(d,m){return void 0===m&&(m=0),(d[m+0]<<8|d[m+1])>>>0}function readInt16LE(d,m){return void 0===m&&(m=0),(d[m+1]<<8|d[m])<<16>>16}function readUint16LE(d,m){return void 0===m&&(m=0),(d[m+1]<<8|d[m])>>>0}function writeUint16BE(d,m,v){return void 0===m&&(m=new Uint8Array(2)),void 0===v&&(v=0),m[v+0]=d>>>8,m[v+1]=d>>>0,m}function writeUint16LE(d,m,v){return void 0===m&&(m=new Uint8Array(2)),void 0===v&&(v=0),m[v+0]=d>>>0,m[v+1]=d>>>8,m}function readInt32BE(d,m){return void 0===m&&(m=0),d[m]<<24|d[m+1]<<16|d[m+2]<<8|d[m+3]}function readUint32BE(d,m){return void 0===m&&(m=0),(d[m]<<24|d[m+1]<<16|d[m+2]<<8|d[m+3])>>>0}function readInt32LE(d,m){return void 0===m&&(m=0),d[m+3]<<24|d[m+2]<<16|d[m+1]<<8|d[m]}function readUint32LE(d,m){return void 0===m&&(m=0),(d[m+3]<<24|d[m+2]<<16|d[m+1]<<8|d[m])>>>0}function writeUint32BE(d,m,v){return void 0===m&&(m=new Uint8Array(4)),void 0===v&&(v=0),m[v+0]=d>>>24,m[v+1]=d>>>16,m[v+2]=d>>>8,m[v+3]=d>>>0,m}function writeUint32LE(d,m,v){return void 0===m&&(m=new Uint8Array(4)),void 0===v&&(v=0),m[v+0]=d>>>0,m[v+1]=d>>>8,m[v+2]=d>>>16,m[v+3]=d>>>24,m}function readInt64BE(d,m){void 0===m&&(m=0);var v=readInt32BE(d,m),_=readInt32BE(d,m+4);return 4294967296*v+_-(_>>31)*4294967296}function readUint64BE(d,m){return void 0===m&&(m=0),4294967296*readUint32BE(d,m)+readUint32BE(d,m+4)}function readInt64LE(d,m){void 0===m&&(m=0);var v=readInt32LE(d,m);return 4294967296*readInt32LE(d,m+4)+v-(v>>31)*4294967296}function readUint64LE(d,m){void 0===m&&(m=0);var v=readUint32LE(d,m);return 4294967296*readUint32LE(d,m+4)+v}function writeUint64BE(d,m,v){return void 0===m&&(m=new Uint8Array(8)),void 0===v&&(v=0),writeUint32BE(d/4294967296>>>0,m,v),writeUint32BE(d>>>0,m,v+4),m}function writeUint64LE(d,m,v){return void 0===m&&(m=new Uint8Array(8)),void 0===v&&(v=0),writeUint32LE(d>>>0,m,v),writeUint32LE(d/4294967296>>>0,m,v+4),m}function readUintBE(d,m,v){if(void 0===v&&(v=0),d%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(d/8>m.length-v)throw Error("readUintBE: array is too short for the given bitLength");for(var _=0,E=1,x=d/8+v-1;x>=v;x--)_+=m[x]*E,E*=256;return _}function readUintLE(d,m,v){if(void 0===v&&(v=0),d%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(d/8>m.length-v)throw Error("readUintLE: array is too short for the given bitLength");for(var _=0,E=1,x=v;x<v+d/8;x++)_+=m[x]*E,E*=256;return _}function writeUintBE(d,m,v,E){if(void 0===v&&(v=new Uint8Array(d/8)),void 0===E&&(E=0),d%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!_.isSafeInteger(m))throw Error("writeUintBE value must be an integer");for(var x=1,T=d/8+E-1;T>=E;T--)v[T]=m/x&255,x*=256;return v}function writeUintLE(d,m,v,E){if(void 0===v&&(v=new Uint8Array(d/8)),void 0===E&&(E=0),d%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!_.isSafeInteger(m))throw Error("writeUintLE value must be an integer");for(var x=1,T=E;T<E+d/8;T++)v[T]=m/x&255,x*=256;return v}function readFloat32BE(d,m){return void 0===m&&(m=0),new DataView(d.buffer,d.byteOffset,d.byteLength).getFloat32(m)}function readFloat32LE(d,m){return void 0===m&&(m=0),new DataView(d.buffer,d.byteOffset,d.byteLength).getFloat32(m,!0)}function readFloat64BE(d,m){return void 0===m&&(m=0),new DataView(d.buffer,d.byteOffset,d.byteLength).getFloat64(m)}function readFloat64LE(d,m){return void 0===m&&(m=0),new DataView(d.buffer,d.byteOffset,d.byteLength).getFloat64(m,!0)}function writeFloat32BE(d,m,v){return void 0===m&&(m=new Uint8Array(4)),void 0===v&&(v=0),new DataView(m.buffer,m.byteOffset,m.byteLength).setFloat32(v,d),m}function writeFloat32LE(d,m,v){return void 0===m&&(m=new Uint8Array(4)),void 0===v&&(v=0),new DataView(m.buffer,m.byteOffset,m.byteLength).setFloat32(v,d,!0),m}function writeFloat64BE(d,m,v){return void 0===m&&(m=new Uint8Array(8)),void 0===v&&(v=0),new DataView(m.buffer,m.byteOffset,m.byteLength).setFloat64(v,d),m}function writeFloat64LE(d,m,v){return void 0===m&&(m=new Uint8Array(8)),void 0===v&&(v=0),new DataView(m.buffer,m.byteOffset,m.byteLength).setFloat64(v,d,!0),m}m.readInt16BE=readInt16BE,m.readUint16BE=readUint16BE,m.readInt16LE=readInt16LE,m.readUint16LE=readUint16LE,m.writeUint16BE=writeUint16BE,m.writeInt16BE=writeUint16BE,m.writeUint16LE=writeUint16LE,m.writeInt16LE=writeUint16LE,m.readInt32BE=readInt32BE,m.readUint32BE=readUint32BE,m.readInt32LE=readInt32LE,m.readUint32LE=readUint32LE,m.writeUint32BE=writeUint32BE,m.writeInt32BE=writeUint32BE,m.writeUint32LE=writeUint32LE,m.writeInt32LE=writeUint32LE,m.readInt64BE=readInt64BE,m.readUint64BE=readUint64BE,m.readInt64LE=readInt64LE,m.readUint64LE=readUint64LE,m.writeUint64BE=writeUint64BE,m.writeInt64BE=writeUint64BE,m.writeUint64LE=writeUint64LE,m.writeInt64LE=writeUint64LE,m.readUintBE=readUintBE,m.readUintLE=readUintLE,m.writeUintBE=writeUintBE,m.writeUintLE=writeUintLE,m.readFloat32BE=readFloat32BE,m.readFloat32LE=readFloat32LE,m.readFloat64BE=readFloat64BE,m.readFloat64LE=readFloat64LE,m.writeFloat32BE=writeFloat32BE,m.writeFloat32LE=writeFloat32LE,m.writeFloat64BE=writeFloat64BE,m.writeFloat64LE=writeFloat64LE},46216:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(32837),E=v(89615);function core(d,m,v){for(var E=v[3]<<24|v[2]<<16|v[1]<<8|v[0],x=v[7]<<24|v[6]<<16|v[5]<<8|v[4],T=v[11]<<24|v[10]<<16|v[9]<<8|v[8],A=v[15]<<24|v[14]<<16|v[13]<<8|v[12],j=v[19]<<24|v[18]<<16|v[17]<<8|v[16],U=v[23]<<24|v[22]<<16|v[21]<<8|v[20],F=v[27]<<24|v[26]<<16|v[25]<<8|v[24],W=v[31]<<24|v[30]<<16|v[29]<<8|v[28],K=m[3]<<24|m[2]<<16|m[1]<<8|m[0],Q=m[7]<<24|m[6]<<16|m[5]<<8|m[4],X=m[11]<<24|m[10]<<16|m[9]<<8|m[8],ee=m[15]<<24|m[14]<<16|m[13]<<8|m[12],er=1634760805,ei=857760878,eo=2036477234,ea=1797285236,es=E,el=x,ec=T,eu=A,ed=j,eh=U,ef=F,ep=W,eg=K,em=Q,eb=X,ey=ee,ew=0;ew<20;ew+=2)eg^=er=er+es|0,es^=ed=ed+(eg=eg>>>16|eg<<16)|0,es=es>>>20|es<<12,em^=ei=ei+el|0,el^=eh=eh+(em=em>>>16|em<<16)|0,el=el>>>20|el<<12,eb^=eo=eo+ec|0,ec^=ef=ef+(eb=eb>>>16|eb<<16)|0,ec=ec>>>20|ec<<12,ey^=ea=ea+eu|0,eu^=ep=ep+(ey=ey>>>16|ey<<16)|0,eu=eu>>>20|eu<<12,eb^=eo=eo+ec|0,ec^=ef=ef+(eb=eb>>>24|eb<<8)|0,ec=ec>>>25|ec<<7,ey^=ea=ea+eu|0,eu^=ep=ep+(ey=ey>>>24|ey<<8)|0,eu=eu>>>25|eu<<7,em^=ei=ei+el|0,el^=eh=eh+(em=em>>>24|em<<8)|0,el=el>>>25|el<<7,eg^=er=er+es|0,es^=ed=ed+(eg=eg>>>24|eg<<8)|0,es=es>>>25|es<<7,ey^=er=er+el|0,el^=ef=ef+(ey=ey>>>16|ey<<16)|0,el=el>>>20|el<<12,eg^=ei=ei+ec|0,ec^=ep=ep+(eg=eg>>>16|eg<<16)|0,ec=ec>>>20|ec<<12,em^=eo=eo+eu|0,eu^=ed=ed+(em=em>>>16|em<<16)|0,eu=eu>>>20|eu<<12,eb^=ea=ea+es|0,es^=eh=eh+(eb=eb>>>16|eb<<16)|0,es=es>>>20|es<<12,em^=eo=eo+eu|0,eu^=ed=ed+(em=em>>>24|em<<8)|0,eu=eu>>>25|eu<<7,eb^=ea=ea+es|0,es^=eh=eh+(eb=eb>>>24|eb<<8)|0,es=es>>>25|es<<7,eg^=ei=ei+ec|0,ec^=ep=ep+(eg=eg>>>24|eg<<8)|0,ec=ec>>>25|ec<<7,ey^=er=er+el|0,el^=ef=ef+(ey=ey>>>24|ey<<8)|0,el=el>>>25|el<<7;_.writeUint32LE(er+1634760805|0,d,0),_.writeUint32LE(ei+857760878|0,d,4),_.writeUint32LE(eo+2036477234|0,d,8),_.writeUint32LE(ea+1797285236|0,d,12),_.writeUint32LE(es+E|0,d,16),_.writeUint32LE(el+x|0,d,20),_.writeUint32LE(ec+T|0,d,24),_.writeUint32LE(eu+A|0,d,28),_.writeUint32LE(ed+j|0,d,32),_.writeUint32LE(eh+U|0,d,36),_.writeUint32LE(ef+F|0,d,40),_.writeUint32LE(ep+W|0,d,44),_.writeUint32LE(eg+K|0,d,48),_.writeUint32LE(em+Q|0,d,52),_.writeUint32LE(eb+X|0,d,56),_.writeUint32LE(ey+ee|0,d,60)}function streamXOR(d,m,v,_,x){if(void 0===x&&(x=0),32!==d.length)throw Error("ChaCha: key size must be 32 bytes");if(_.length<v.length)throw Error("ChaCha: destination is shorter than source");if(0===x){if(8!==m.length&&12!==m.length)throw Error("ChaCha nonce must be 8 or 12 bytes");A=(T=new Uint8Array(16)).length-m.length,T.set(m,A)}else{if(16!==m.length)throw Error("ChaCha nonce with counter must be 16 bytes");T=m,A=x}for(var T,A,j=new Uint8Array(64),U=0;U<v.length;U+=64){core(j,T,d);for(var F=U;F<U+64&&F<v.length;F++)_[F]=v[F]^j[F-U];incrementCounter(T,0,A)}return E.wipe(j),0===x&&E.wipe(T),_}function stream(d,m,v,_){return void 0===_&&(_=0),E.wipe(v),streamXOR(d,m,v,v,_)}function incrementCounter(d,m,v){for(var _=1;v--;)_=_+(255&d[m])|0,d[m]=255&_,_>>>=8,m++;if(_>0)throw Error("ChaCha: counter overflow")}m.streamXOR=streamXOR,m.stream=stream},44636:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(46216),E=v(49002),x=v(89615),T=v(32837),A=v(48918);m.KEY_LENGTH=32,m.NONCE_LENGTH=12,m.TAG_LENGTH=16;var j=new Uint8Array(16),U=function(){function ChaCha20Poly1305(d){if(this.nonceLength=m.NONCE_LENGTH,this.tagLength=m.TAG_LENGTH,d.length!==m.KEY_LENGTH)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(d)}return ChaCha20Poly1305.prototype.seal=function(d,m,v,E){if(d.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var T,A=new Uint8Array(16);A.set(d,A.length-d.length);var j=new Uint8Array(32);_.stream(this._key,A,j,4);var U=m.length+this.tagLength;if(E){if(E.length!==U)throw Error("ChaCha20Poly1305: incorrect destination length");T=E}else T=new Uint8Array(U);return _.streamXOR(this._key,A,m,T,4),this._authenticate(T.subarray(T.length-this.tagLength,T.length),j,T.subarray(0,T.length-this.tagLength),v),x.wipe(A),T},ChaCha20Poly1305.prototype.open=function(d,m,v,E){if(d.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(m.length<this.tagLength)return null;var T,j=new Uint8Array(16);j.set(d,j.length-d.length);var U=new Uint8Array(32);_.stream(this._key,j,U,4);var F=new Uint8Array(this.tagLength);if(this._authenticate(F,U,m.subarray(0,m.length-this.tagLength),v),!A.equal(F,m.subarray(m.length-this.tagLength,m.length)))return null;var W=m.length-this.tagLength;if(E){if(E.length!==W)throw Error("ChaCha20Poly1305: incorrect destination length");T=E}else T=new Uint8Array(W);return _.streamXOR(this._key,j,m.subarray(0,m.length-this.tagLength),T,4),x.wipe(j),T},ChaCha20Poly1305.prototype.clean=function(){return x.wipe(this._key),this},ChaCha20Poly1305.prototype._authenticate=function(d,m,v,_){var A=new E.Poly1305(m);_&&(A.update(_),_.length%16>0&&A.update(j.subarray(_.length%16))),A.update(v),v.length%16>0&&A.update(j.subarray(v.length%16));var U=new Uint8Array(8);_&&T.writeUint64LE(_.length,U),A.update(U),T.writeUint64LE(v.length,U),A.update(U);for(var F=A.digest(),W=0;W<F.length;W++)d[W]=F[W];A.clean(),x.wipe(F),x.wipe(U)},ChaCha20Poly1305}();m.ChaCha20Poly1305=U},48918:(d,m)=>{"use strict";function select(d,m,v){return~(d-1)&m|d-1&v}function lessOrEqual(d,m){return(0|d)-(0|m)-1>>>31&1}function compare(d,m){if(d.length!==m.length)return 0;for(var v=0,_=0;_<d.length;_++)v|=d[_]^m[_];return 1&v-1>>>8}function equal(d,m){return 0!==d.length&&0!==m.length&&0!==compare(d,m)}Object.defineProperty(m,"__esModule",{value:!0}),m.select=select,m.lessOrEqual=lessOrEqual,m.compare=compare,m.equal=equal},89951:(d,m)=>{"use strict";function isSerializableHash(d){return void 0!==d.saveState&&void 0!==d.restoreState&&void 0!==d.cleanSavedState}Object.defineProperty(m,"__esModule",{value:!0}),m.isSerializableHash=isSerializableHash},44985:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(97176),E=v(89615),x=function(){function HKDF(d,m,v,E){void 0===v&&(v=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=d,this._info=E;var x=_.hmac(this._hash,v,m);this._hmac=new _.HMAC(d,x),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return HKDF.prototype._fillBuffer=function(){this._counter[0]++;var d=this._counter[0];if(0===d)throw Error("hkdf: cannot expand more");this._hmac.reset(),d>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},HKDF.prototype.expand=function(d){for(var m=new Uint8Array(d),v=0;v<m.length;v++)this._bufpos===this._buffer.length&&this._fillBuffer(),m[v]=this._buffer[this._bufpos++];return m},HKDF.prototype.clean=function(){this._hmac.clean(),E.wipe(this._buffer),E.wipe(this._counter),this._bufpos=0},HKDF}();m.HKDF=x},97176:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(89951),E=v(48918),x=v(89615),T=function(){function HMAC(d,m){this._finished=!1,this._inner=new d,this._outer=new d,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var v=new Uint8Array(this.blockSize);m.length>this.blockSize?this._inner.update(m).finish(v).clean():v.set(m);for(var E=0;E<v.length;E++)v[E]^=54;this._inner.update(v);for(var E=0;E<v.length;E++)v[E]^=106;this._outer.update(v),_.isSerializableHash(this._inner)&&_.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),x.wipe(v)}return HMAC.prototype.reset=function(){if(!_.isSerializableHash(this._inner)||!_.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},HMAC.prototype.clean=function(){_.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),_.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},HMAC.prototype.update=function(d){return this._inner.update(d),this},HMAC.prototype.finish=function(d){return this._finished?this._outer.finish(d):(this._inner.finish(d),this._outer.update(d.subarray(0,this.digestLength)).finish(d),this._finished=!0),this},HMAC.prototype.digest=function(){var d=new Uint8Array(this.digestLength);return this.finish(d),d},HMAC.prototype.saveState=function(){if(!_.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},HMAC.prototype.restoreState=function(d){if(!_.isSerializableHash(this._inner)||!_.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(d),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},HMAC.prototype.cleanSavedState=function(d){if(!_.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(d)},HMAC}();function hmac(d,m,v){var _=new T(d,m);_.update(v);var E=_.digest();return _.clean(),E}m.HMAC=T,m.hmac=hmac,m.equal=E.equal},46206:(d,m)=>{"use strict";function imulShim(d,m){var v=65535&d,_=65535&m;return v*_+((d>>>16&65535)*_+v*(m>>>16&65535)<<16>>>0)|0}function add(d,m){return d+m|0}function sub(d,m){return d-m|0}function rotl(d,m){return d<<m|d>>>32-m}function rotr(d,m){return d<<32-m|d>>>m}function isIntegerShim(d){return"number"==typeof d&&isFinite(d)&&Math.floor(d)===d}Object.defineProperty(m,"__esModule",{value:!0}),m.mul=Math.imul||imulShim,m.add=add,m.sub=sub,m.rotl=rotl,m.rotr=rotr,m.isInteger=Number.isInteger||isIntegerShim,m.MAX_SAFE_INTEGER=9007199254740991,m.isSafeInteger=function(d){return m.isInteger(d)&&d>=-m.MAX_SAFE_INTEGER&&d<=m.MAX_SAFE_INTEGER}},49002:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(48918),E=v(89615);m.DIGEST_LENGTH=16;var x=function(){function Poly1305(d){this.digestLength=m.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var v=d[0]|d[1]<<8;this._r[0]=8191&v;var _=d[2]|d[3]<<8;this._r[1]=(v>>>13|_<<3)&8191;var E=d[4]|d[5]<<8;this._r[2]=(_>>>10|E<<6)&7939;var x=d[6]|d[7]<<8;this._r[3]=(E>>>7|x<<9)&8191;var T=d[8]|d[9]<<8;this._r[4]=(x>>>4|T<<12)&255,this._r[5]=T>>>1&8190;var A=d[10]|d[11]<<8;this._r[6]=(T>>>14|A<<2)&8191;var j=d[12]|d[13]<<8;this._r[7]=(A>>>11|j<<5)&8065;var U=d[14]|d[15]<<8;this._r[8]=(j>>>8|U<<8)&8191,this._r[9]=U>>>5&127,this._pad[0]=d[16]|d[17]<<8,this._pad[1]=d[18]|d[19]<<8,this._pad[2]=d[20]|d[21]<<8,this._pad[3]=d[22]|d[23]<<8,this._pad[4]=d[24]|d[25]<<8,this._pad[5]=d[26]|d[27]<<8,this._pad[6]=d[28]|d[29]<<8,this._pad[7]=d[30]|d[31]<<8}return Poly1305.prototype._blocks=function(d,m,v){for(var _=this._fin?0:2048,E=this._h[0],x=this._h[1],T=this._h[2],A=this._h[3],j=this._h[4],U=this._h[5],F=this._h[6],W=this._h[7],K=this._h[8],Q=this._h[9],X=this._r[0],ee=this._r[1],er=this._r[2],ei=this._r[3],eo=this._r[4],ea=this._r[5],es=this._r[6],el=this._r[7],ec=this._r[8],eu=this._r[9];v>=16;){var ed,eh=d[m+0]|d[m+1]<<8;E+=8191&eh;var ef=d[m+2]|d[m+3]<<8;x+=(eh>>>13|ef<<3)&8191;var ep=d[m+4]|d[m+5]<<8;T+=(ef>>>10|ep<<6)&8191;var eg=d[m+6]|d[m+7]<<8;A+=(ep>>>7|eg<<9)&8191;var em=d[m+8]|d[m+9]<<8;j+=(eg>>>4|em<<12)&8191,U+=em>>>1&8191;var eb=d[m+10]|d[m+11]<<8;F+=(em>>>14|eb<<2)&8191;var ey=d[m+12]|d[m+13]<<8;W+=(eb>>>11|ey<<5)&8191;var ew=d[m+14]|d[m+15]<<8;K+=(ey>>>8|ew<<8)&8191,Q+=ew>>>5|_;var ev=0;ev=(ed=0+E*X+x*(5*eu)+T*(5*ec)+A*(5*el)+j*(5*es))>>>13,ed&=8191,ed+=U*(5*ea)+F*(5*eo)+W*(5*ei)+K*(5*er)+Q*(5*ee),ev+=ed>>>13,ed&=8191;var e_=ev;e_+=E*ee+x*X+T*(5*eu)+A*(5*ec)+j*(5*el),ev=e_>>>13,e_&=8191,e_+=U*(5*es)+F*(5*ea)+W*(5*eo)+K*(5*ei)+Q*(5*er),ev+=e_>>>13,e_&=8191;var eC=ev;eC+=E*er+x*ee+T*X+A*(5*eu)+j*(5*ec),ev=eC>>>13,eC&=8191,eC+=U*(5*el)+F*(5*es)+W*(5*ea)+K*(5*eo)+Q*(5*ei),ev+=eC>>>13,eC&=8191;var eE=ev;eE+=E*ei+x*er+T*ee+A*X+j*(5*eu),ev=eE>>>13,eE&=8191,eE+=U*(5*ec)+F*(5*el)+W*(5*es)+K*(5*ea)+Q*(5*eo),ev+=eE>>>13,eE&=8191;var ex=ev;ex+=E*eo+x*ei+T*er+A*ee+j*X,ev=ex>>>13,ex&=8191,ex+=U*(5*eu)+F*(5*ec)+W*(5*el)+K*(5*es)+Q*(5*ea),ev+=ex>>>13,ex&=8191;var eS=ev;eS+=E*ea+x*eo+T*ei+A*er+j*ee,ev=eS>>>13,eS&=8191,eS+=U*X+F*(5*eu)+W*(5*ec)+K*(5*el)+Q*(5*es),ev+=eS>>>13,eS&=8191;var eP=ev;eP+=E*es+x*ea+T*eo+A*ei+j*er,ev=eP>>>13,eP&=8191,eP+=U*ee+F*X+W*(5*eu)+K*(5*ec)+Q*(5*el),ev+=eP>>>13,eP&=8191;var eO=ev;eO+=E*el+x*es+T*ea+A*eo+j*ei,ev=eO>>>13,eO&=8191,eO+=U*er+F*ee+W*X+K*(5*eu)+Q*(5*ec),ev+=eO>>>13,eO&=8191;var ek=ev;ek+=E*ec+x*el+T*es+A*ea+j*eo,ev=ek>>>13,ek&=8191,ek+=U*ei+F*er+W*ee+K*X+Q*(5*eu),ev+=ek>>>13,ek&=8191;var eR=ev;eR+=E*eu+x*ec+T*el+A*es+j*ea,ev=eR>>>13,eR&=8191,eR+=U*eo+F*ei+W*er+K*ee+Q*X,ev+=eR>>>13,eR&=8191,ed=8191&(ev=(ev=(ev<<2)+ev|0)+ed|0),ev>>>=13,e_+=ev,E=ed,x=e_,T=eC,A=eE,j=ex,U=eS,F=eP,W=eO,K=ek,Q=eR,m+=16,v-=16}this._h[0]=E,this._h[1]=x,this._h[2]=T,this._h[3]=A,this._h[4]=j,this._h[5]=U,this._h[6]=F,this._h[7]=W,this._h[8]=K,this._h[9]=Q},Poly1305.prototype.finish=function(d,m){void 0===m&&(m=0);var v,_,E,x,T=new Uint16Array(10);if(this._leftover){for(x=this._leftover,this._buffer[x++]=1;x<16;x++)this._buffer[x]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(v=this._h[1]>>>13,this._h[1]&=8191,x=2;x<10;x++)this._h[x]+=v,v=this._h[x]>>>13,this._h[x]&=8191;for(this._h[0]+=5*v,v=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=v,v=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=v,T[0]=this._h[0]+5,v=T[0]>>>13,T[0]&=8191,x=1;x<10;x++)T[x]=this._h[x]+v,v=T[x]>>>13,T[x]&=8191;for(T[9]-=8192,_=(1^v)-1,x=0;x<10;x++)T[x]&=_;for(x=0,_=~_;x<10;x++)this._h[x]=this._h[x]&_|T[x];for(x=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,E=this._h[0]+this._pad[0],this._h[0]=65535&E;x<8;x++)E=(this._h[x]+this._pad[x]|0)+(E>>>16)|0,this._h[x]=65535&E;return d[m+0]=this._h[0]>>>0,d[m+1]=this._h[0]>>>8,d[m+2]=this._h[1]>>>0,d[m+3]=this._h[1]>>>8,d[m+4]=this._h[2]>>>0,d[m+5]=this._h[2]>>>8,d[m+6]=this._h[3]>>>0,d[m+7]=this._h[3]>>>8,d[m+8]=this._h[4]>>>0,d[m+9]=this._h[4]>>>8,d[m+10]=this._h[5]>>>0,d[m+11]=this._h[5]>>>8,d[m+12]=this._h[6]>>>0,d[m+13]=this._h[6]>>>8,d[m+14]=this._h[7]>>>0,d[m+15]=this._h[7]>>>8,this._finished=!0,this},Poly1305.prototype.update=function(d){var m,v=0,_=d.length;if(this._leftover){(m=16-this._leftover)>_&&(m=_);for(var E=0;E<m;E++)this._buffer[this._leftover+E]=d[v+E];if(_-=m,v+=m,this._leftover+=m,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(_>=16&&(m=_-_%16,this._blocks(d,v,m),v+=m,_-=m),_){for(var E=0;E<_;E++)this._buffer[this._leftover+E]=d[v+E];this._leftover+=_}return this},Poly1305.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var d=new Uint8Array(16);return this.finish(d),d},Poly1305.prototype.clean=function(){return E.wipe(this._buffer),E.wipe(this._r),E.wipe(this._h),E.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},Poly1305}();function oneTimeAuth(d,m){var v=new x(d);v.update(m);var _=v.digest();return v.clean(),_}function equal(d,v){return d.length===m.DIGEST_LENGTH&&v.length===m.DIGEST_LENGTH&&_.equal(d,v)}m.Poly1305=x,m.oneTimeAuth=oneTimeAuth,m.equal=equal},53034:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.randomStringForEntropy=m.randomString=m.randomUint32=m.randomBytes=m.defaultRandomSource=void 0;let _=v(3567),E=v(32837),x=v(89615);function randomBytes(d,v=m.defaultRandomSource){return v.randomBytes(d)}function randomUint32(d=m.defaultRandomSource){let v=randomBytes(4,d),_=(0,E.readUint32LE)(v);return(0,x.wipe)(v),_}m.defaultRandomSource=new _.SystemRandomSource,m.randomBytes=randomBytes,m.randomUint32=randomUint32;let T="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function randomString(d,v=T,_=m.defaultRandomSource){if(v.length<2)throw Error("randomString charset is too short");if(v.length>256)throw Error("randomString charset is too long");let E="",A=v.length,j=256-256%A;for(;d>0;){let m=randomBytes(Math.ceil(256*d/j),_);for(let _=0;_<m.length&&d>0;_++){let x=m[_];x<j&&(E+=v.charAt(x%A),d--)}(0,x.wipe)(m)}return E}function randomStringForEntropy(d,v=T,_=m.defaultRandomSource){let E=Math.ceil(d/(Math.log(v.length)/Math.LN2));return randomString(E,v,_)}m.randomString=randomString,m.randomStringForEntropy=randomStringForEntropy},92110:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.BrowserRandomSource=void 0;let BrowserRandomSource=class BrowserRandomSource{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let d="undefined"!=typeof self?self.crypto||self.msCrypto:null;d&&void 0!==d.getRandomValues&&(this._crypto=d,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(d){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let m=new Uint8Array(d);for(let d=0;d<m.length;d+=65536)this._crypto.getRandomValues(m.subarray(d,d+Math.min(m.length-d,65536)));return m}};m.BrowserRandomSource=BrowserRandomSource},89434:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.NodeRandomSource=void 0;let _=v(89615);let NodeRandomSource=class NodeRandomSource{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let d=v(6113);d&&d.randomBytes&&(this._crypto=d,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(d){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let m=this._crypto.randomBytes(d);if(m.length!==d)throw Error("NodeRandomSource: got fewer bytes than requested");let v=new Uint8Array(d);for(let d=0;d<v.length;d++)v[d]=m[d];return(0,_.wipe)(m),v}};m.NodeRandomSource=NodeRandomSource},3567:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.SystemRandomSource=void 0;let _=v(92110),E=v(89434);let SystemRandomSource=class SystemRandomSource{constructor(){if(this.isAvailable=!1,this.name="",this._source=new _.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new E.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(d){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(d)}};m.SystemRandomSource=SystemRandomSource},70852:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(32837),E=v(89615);m.DIGEST_LENGTH=32,m.BLOCK_SIZE=64;var x=function(){function SHA256(){this.digestLength=m.DIGEST_LENGTH,this.blockSize=m.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return SHA256.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},SHA256.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},SHA256.prototype.clean=function(){E.wipe(this._buffer),E.wipe(this._temp),this.reset()},SHA256.prototype.update=function(d,m){if(void 0===m&&(m=d.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var v=0;if(this._bytesHashed+=m,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&m>0;)this._buffer[this._bufferLength++]=d[v++],m--;this._bufferLength===this.blockSize&&(hashBlocks(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(m>=this.blockSize&&(v=hashBlocks(this._temp,this._state,d,v,m),m%=this.blockSize);m>0;)this._buffer[this._bufferLength++]=d[v++],m--;return this},SHA256.prototype.finish=function(d){if(!this._finished){var m=this._bytesHashed,v=this._bufferLength,E=m%64<56?64:128;this._buffer[v]=128;for(var x=v+1;x<E-8;x++)this._buffer[x]=0;_.writeUint32BE(m/536870912|0,this._buffer,E-8),_.writeUint32BE(m<<3,this._buffer,E-4),hashBlocks(this._temp,this._state,this._buffer,0,E),this._finished=!0}for(var x=0;x<this.digestLength/4;x++)_.writeUint32BE(this._state[x],d,4*x);return this},SHA256.prototype.digest=function(){var d=new Uint8Array(this.digestLength);return this.finish(d),d},SHA256.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},SHA256.prototype.restoreState=function(d){return this._state.set(d.state),this._bufferLength=d.bufferLength,d.buffer&&this._buffer.set(d.buffer),this._bytesHashed=d.bytesHashed,this._finished=!1,this},SHA256.prototype.cleanSavedState=function(d){E.wipe(d.state),d.buffer&&E.wipe(d.buffer),d.bufferLength=0,d.bytesHashed=0},SHA256}();m.SHA256=x;var T=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function hashBlocks(d,m,v,E,x){for(;x>=64;){for(var A=m[0],j=m[1],U=m[2],F=m[3],W=m[4],K=m[5],Q=m[6],X=m[7],ee=0;ee<16;ee++){var er=E+4*ee;d[ee]=_.readUint32BE(v,er)}for(var ee=16;ee<64;ee++){var ei=d[ee-2],eo=(ei>>>17|ei<<15)^(ei>>>19|ei<<13)^ei>>>10,ea=((ei=d[ee-15])>>>7|ei<<25)^(ei>>>18|ei<<14)^ei>>>3;d[ee]=(eo+d[ee-7]|0)+(ea+d[ee-16]|0)}for(var ee=0;ee<64;ee++){var eo=(((W>>>6|W<<26)^(W>>>11|W<<21)^(W>>>25|W<<7))+(W&K^~W&Q)|0)+(X+(T[ee]+d[ee]|0)|0)|0,ea=((A>>>2|A<<30)^(A>>>13|A<<19)^(A>>>22|A<<10))+(A&j^A&U^j&U)|0;X=Q,Q=K,K=W,W=F+eo|0,F=U,U=j,j=A,A=eo+ea|0}m[0]+=A,m[1]+=j,m[2]+=U,m[3]+=F,m[4]+=W,m[5]+=K,m[6]+=Q,m[7]+=X,E+=64,x-=64}return E}function hash(d){var m=new x;m.update(d);var v=m.digest();return m.clean(),v}m.hash=hash},89615:(d,m)=>{"use strict";function wipe(d){for(var m=0;m<d.length;m++)d[m]=0;return d}Object.defineProperty(m,"__esModule",{value:!0}),m.wipe=wipe},22688:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.sharedKey=m.generateKeyPair=m.generateKeyPairFromSeed=m.scalarMultBase=m.scalarMult=m.SHARED_KEY_LENGTH=m.SECRET_KEY_LENGTH=m.PUBLIC_KEY_LENGTH=void 0;let _=v(53034),E=v(89615);function gf(d){let m=new Float64Array(16);if(d)for(let v=0;v<d.length;v++)m[v]=d[v];return m}m.PUBLIC_KEY_LENGTH=32,m.SECRET_KEY_LENGTH=32,m.SHARED_KEY_LENGTH=32;let x=new Uint8Array(32);x[0]=9;let T=gf([56129,1]);function car25519(d){let m=1;for(let v=0;v<16;v++){let _=d[v]+m+65535;m=Math.floor(_/65536),d[v]=_-65536*m}d[0]+=m-1+37*(m-1)}function sel25519(d,m,v){let _=~(v-1);for(let v=0;v<16;v++){let E=_&(d[v]^m[v]);d[v]^=E,m[v]^=E}}function pack25519(d,m){let v=gf(),_=gf();for(let d=0;d<16;d++)_[d]=m[d];car25519(_),car25519(_),car25519(_);for(let d=0;d<2;d++){v[0]=_[0]-65517;for(let d=1;d<15;d++)v[d]=_[d]-65535-(v[d-1]>>16&1),v[d-1]&=65535;v[15]=_[15]-32767-(v[14]>>16&1);let d=v[15]>>16&1;v[14]&=65535,sel25519(_,v,1-d)}for(let m=0;m<16;m++)d[2*m]=255&_[m],d[2*m+1]=_[m]>>8}function unpack25519(d,m){for(let v=0;v<16;v++)d[v]=m[2*v]+(m[2*v+1]<<8);d[15]&=32767}function add(d,m,v){for(let _=0;_<16;_++)d[_]=m[_]+v[_]}function sub(d,m,v){for(let _=0;_<16;_++)d[_]=m[_]-v[_]}function mul(d,m,v){let _,E,x=0,T=0,A=0,j=0,U=0,F=0,W=0,K=0,Q=0,X=0,ee=0,er=0,ei=0,eo=0,ea=0,es=0,el=0,ec=0,eu=0,ed=0,eh=0,ef=0,ep=0,eg=0,em=0,eb=0,ey=0,ew=0,ev=0,e_=0,eC=0,eE=v[0],ex=v[1],eS=v[2],eP=v[3],eO=v[4],ek=v[5],eR=v[6],eT=v[7],eA=v[8],eD=v[9],eI=v[10],eN=v[11],eM=v[12],ej=v[13],eL=v[14],eU=v[15];x+=(_=m[0])*eE,T+=_*ex,A+=_*eS,j+=_*eP,U+=_*eO,F+=_*ek,W+=_*eR,K+=_*eT,Q+=_*eA,X+=_*eD,ee+=_*eI,er+=_*eN,ei+=_*eM,eo+=_*ej,ea+=_*eL,es+=_*eU,T+=(_=m[1])*eE,A+=_*ex,j+=_*eS,U+=_*eP,F+=_*eO,W+=_*ek,K+=_*eR,Q+=_*eT,X+=_*eA,ee+=_*eD,er+=_*eI,ei+=_*eN,eo+=_*eM,ea+=_*ej,es+=_*eL,el+=_*eU,A+=(_=m[2])*eE,j+=_*ex,U+=_*eS,F+=_*eP,W+=_*eO,K+=_*ek,Q+=_*eR,X+=_*eT,ee+=_*eA,er+=_*eD,ei+=_*eI,eo+=_*eN,ea+=_*eM,es+=_*ej,el+=_*eL,ec+=_*eU,j+=(_=m[3])*eE,U+=_*ex,F+=_*eS,W+=_*eP,K+=_*eO,Q+=_*ek,X+=_*eR,ee+=_*eT,er+=_*eA,ei+=_*eD,eo+=_*eI,ea+=_*eN,es+=_*eM,el+=_*ej,ec+=_*eL,eu+=_*eU,U+=(_=m[4])*eE,F+=_*ex,W+=_*eS,K+=_*eP,Q+=_*eO,X+=_*ek,ee+=_*eR,er+=_*eT,ei+=_*eA,eo+=_*eD,ea+=_*eI,es+=_*eN,el+=_*eM,ec+=_*ej,eu+=_*eL,ed+=_*eU,F+=(_=m[5])*eE,W+=_*ex,K+=_*eS,Q+=_*eP,X+=_*eO,ee+=_*ek,er+=_*eR,ei+=_*eT,eo+=_*eA,ea+=_*eD,es+=_*eI,el+=_*eN,ec+=_*eM,eu+=_*ej,ed+=_*eL,eh+=_*eU,W+=(_=m[6])*eE,K+=_*ex,Q+=_*eS,X+=_*eP,ee+=_*eO,er+=_*ek,ei+=_*eR,eo+=_*eT,ea+=_*eA,es+=_*eD,el+=_*eI,ec+=_*eN,eu+=_*eM,ed+=_*ej,eh+=_*eL,ef+=_*eU,K+=(_=m[7])*eE,Q+=_*ex,X+=_*eS,ee+=_*eP,er+=_*eO,ei+=_*ek,eo+=_*eR,ea+=_*eT,es+=_*eA,el+=_*eD,ec+=_*eI,eu+=_*eN,ed+=_*eM,eh+=_*ej,ef+=_*eL,ep+=_*eU,Q+=(_=m[8])*eE,X+=_*ex,ee+=_*eS,er+=_*eP,ei+=_*eO,eo+=_*ek,ea+=_*eR,es+=_*eT,el+=_*eA,ec+=_*eD,eu+=_*eI,ed+=_*eN,eh+=_*eM,ef+=_*ej,ep+=_*eL,eg+=_*eU,X+=(_=m[9])*eE,ee+=_*ex,er+=_*eS,ei+=_*eP,eo+=_*eO,ea+=_*ek,es+=_*eR,el+=_*eT,ec+=_*eA,eu+=_*eD,ed+=_*eI,eh+=_*eN,ef+=_*eM,ep+=_*ej,eg+=_*eL,em+=_*eU,ee+=(_=m[10])*eE,er+=_*ex,ei+=_*eS,eo+=_*eP,ea+=_*eO,es+=_*ek,el+=_*eR,ec+=_*eT,eu+=_*eA,ed+=_*eD,eh+=_*eI,ef+=_*eN,ep+=_*eM,eg+=_*ej,em+=_*eL,eb+=_*eU,er+=(_=m[11])*eE,ei+=_*ex,eo+=_*eS,ea+=_*eP,es+=_*eO,el+=_*ek,ec+=_*eR,eu+=_*eT,ed+=_*eA,eh+=_*eD,ef+=_*eI,ep+=_*eN,eg+=_*eM,em+=_*ej,eb+=_*eL,ey+=_*eU,ei+=(_=m[12])*eE,eo+=_*ex,ea+=_*eS,es+=_*eP,el+=_*eO,ec+=_*ek,eu+=_*eR,ed+=_*eT,eh+=_*eA,ef+=_*eD,ep+=_*eI,eg+=_*eN,em+=_*eM,eb+=_*ej,ey+=_*eL,ew+=_*eU,eo+=(_=m[13])*eE,ea+=_*ex,es+=_*eS,el+=_*eP,ec+=_*eO,eu+=_*ek,ed+=_*eR,eh+=_*eT,ef+=_*eA,ep+=_*eD,eg+=_*eI,em+=_*eN,eb+=_*eM,ey+=_*ej,ew+=_*eL,ev+=_*eU,ea+=(_=m[14])*eE,es+=_*ex,el+=_*eS,ec+=_*eP,eu+=_*eO,ed+=_*ek,eh+=_*eR,ef+=_*eT,ep+=_*eA,eg+=_*eD,em+=_*eI,eb+=_*eN,ey+=_*eM,ew+=_*ej,ev+=_*eL,e_+=_*eU,es+=(_=m[15])*eE,el+=_*ex,ec+=_*eS,eu+=_*eP,ed+=_*eO,eh+=_*ek,ef+=_*eR,ep+=_*eT,eg+=_*eA,em+=_*eD,eb+=_*eI,ey+=_*eN,ew+=_*eM,ev+=_*ej,e_+=_*eL,eC+=_*eU,x+=38*el,T+=38*ec,A+=38*eu,j+=38*ed,U+=38*eh,F+=38*ef,W+=38*ep,K+=38*eg,Q+=38*em,X+=38*eb,ee+=38*ey,er+=38*ew,ei+=38*ev,eo+=38*e_,ea+=38*eC,E=Math.floor((_=x+(E=1)+65535)/65536),x=_-65536*E,E=Math.floor((_=T+E+65535)/65536),T=_-65536*E,E=Math.floor((_=A+E+65535)/65536),A=_-65536*E,E=Math.floor((_=j+E+65535)/65536),j=_-65536*E,E=Math.floor((_=U+E+65535)/65536),U=_-65536*E,E=Math.floor((_=F+E+65535)/65536),F=_-65536*E,E=Math.floor((_=W+E+65535)/65536),W=_-65536*E,E=Math.floor((_=K+E+65535)/65536),K=_-65536*E,E=Math.floor((_=Q+E+65535)/65536),Q=_-65536*E,E=Math.floor((_=X+E+65535)/65536),X=_-65536*E,E=Math.floor((_=ee+E+65535)/65536),ee=_-65536*E,E=Math.floor((_=er+E+65535)/65536),er=_-65536*E,E=Math.floor((_=ei+E+65535)/65536),ei=_-65536*E,E=Math.floor((_=eo+E+65535)/65536),eo=_-65536*E,E=Math.floor((_=ea+E+65535)/65536),ea=_-65536*E,E=Math.floor((_=es+E+65535)/65536),es=_-65536*E,x+=E-1+37*(E-1),E=Math.floor((_=x+(E=1)+65535)/65536),x=_-65536*E,E=Math.floor((_=T+E+65535)/65536),T=_-65536*E,E=Math.floor((_=A+E+65535)/65536),A=_-65536*E,E=Math.floor((_=j+E+65535)/65536),j=_-65536*E,E=Math.floor((_=U+E+65535)/65536),U=_-65536*E,E=Math.floor((_=F+E+65535)/65536),F=_-65536*E,E=Math.floor((_=W+E+65535)/65536),W=_-65536*E,E=Math.floor((_=K+E+65535)/65536),K=_-65536*E,E=Math.floor((_=Q+E+65535)/65536),Q=_-65536*E,E=Math.floor((_=X+E+65535)/65536),X=_-65536*E,E=Math.floor((_=ee+E+65535)/65536),ee=_-65536*E,E=Math.floor((_=er+E+65535)/65536),er=_-65536*E,E=Math.floor((_=ei+E+65535)/65536),ei=_-65536*E,E=Math.floor((_=eo+E+65535)/65536),eo=_-65536*E,E=Math.floor((_=ea+E+65535)/65536),ea=_-65536*E,E=Math.floor((_=es+E+65535)/65536),es=_-65536*E,x+=E-1+37*(E-1),d[0]=x,d[1]=T,d[2]=A,d[3]=j,d[4]=U,d[5]=F,d[6]=W,d[7]=K,d[8]=Q,d[9]=X,d[10]=ee,d[11]=er,d[12]=ei,d[13]=eo,d[14]=ea,d[15]=es}function inv25519(d,m){let v=gf();for(let d=0;d<16;d++)v[d]=m[d];for(let d=253;d>=0;d--)mul(v,v,v),2!==d&&4!==d&&mul(v,v,m);for(let m=0;m<16;m++)d[m]=v[m]}function scalarMult(d,m){let v=new Uint8Array(32),_=new Float64Array(80),E=gf(),x=gf(),A=gf(),j=gf(),U=gf(),F=gf();for(let m=0;m<31;m++)v[m]=d[m];v[31]=127&d[31]|64,v[0]&=248,unpack25519(_,m);for(let d=0;d<16;d++)x[d]=_[d];E[0]=j[0]=1;for(let d=254;d>=0;--d){let m=v[d>>>3]>>>(7&d)&1;sel25519(E,x,m),sel25519(A,j,m),add(U,E,A),sub(E,E,A),add(A,x,j),sub(x,x,j),mul(j,U,U),mul(F,E,E),mul(E,A,E),mul(A,x,U),add(U,E,A),sub(E,E,A),mul(x,E,E),sub(A,j,F),mul(E,A,T),add(E,E,j),mul(A,A,E),mul(E,j,F),mul(j,x,_),mul(x,U,U),sel25519(E,x,m),sel25519(A,j,m)}for(let d=0;d<16;d++)_[d+16]=E[d],_[d+32]=A[d],_[d+48]=x[d],_[d+64]=j[d];let W=_.subarray(32),K=_.subarray(16);inv25519(W,W),mul(K,K,W);let Q=new Uint8Array(32);return pack25519(Q,K),Q}function scalarMultBase(d){return scalarMult(d,x)}function generateKeyPairFromSeed(d){if(d.length!==m.SECRET_KEY_LENGTH)throw Error(`x25519: seed must be ${m.SECRET_KEY_LENGTH} bytes`);let v=new Uint8Array(d),_=scalarMultBase(v);return{publicKey:_,secretKey:v}}function generateKeyPair(d){let m=(0,_.randomBytes)(32,d),v=generateKeyPairFromSeed(m);return(0,E.wipe)(m),v}function sharedKey(d,v,_=!1){if(d.length!==m.PUBLIC_KEY_LENGTH)throw Error("X25519: incorrect secret key length");if(v.length!==m.PUBLIC_KEY_LENGTH)throw Error("X25519: incorrect public key length");let E=scalarMult(d,v);if(_){let d=0;for(let m=0;m<E.length;m++)d|=E[m];if(0===d)throw Error("X25519: invalid shared key")}return E}m.scalarMult=scalarMult,m.scalarMultBase=scalarMultBase,m.generateKeyPairFromSeed=generateKeyPairFromSeed,m.generateKeyPair=generateKeyPair,m.sharedKey=sharedKey},56969:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});let _=v(76866);_.__exportStar(v(80429),m),_.__exportStar(v(68521),m),_.__exportStar(v(9873),m),_.__exportStar(v(96811),m)},9873:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.RELAY_JSONRPC=void 0,m.RELAY_JSONRPC={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}}},45854:(d,m)=>{"use strict";function assertType(d,m,v="string"){if(!d[m]||typeof d[m]!==v)throw Error(`Missing or invalid "${m}" param`)}function hasRequiredParams(d,m){let v=!0;return m.forEach(m=>{m in d||(v=!1)}),v}function hasExactParamsLength(d,m){return Array.isArray(d)?d.length===m:Object.keys(d).length===m}function hasRequiredParamsLength(d,m){return Array.isArray(d)?d.length>=m:Object.keys(d).length>=m}function checkParams(d,m,v){let _=!v.length,E=_?hasExactParamsLength(d,m.length):hasRequiredParamsLength(d,m.length);return!!E&&hasRequiredParams(d,m)}function methodEndsWith(d,m,v="_"){let _=d.split(v);return _[_.length-1].trim().toLowerCase()===m.trim().toLowerCase()}Object.defineProperty(m,"__esModule",{value:!0}),m.methodEndsWith=m.checkParams=m.hasRequiredParamsLength=m.hasExactParamsLength=m.hasRequiredParams=m.assertType=void 0,m.assertType=assertType,m.hasRequiredParams=hasRequiredParams,m.hasExactParamsLength=hasExactParamsLength,m.hasRequiredParamsLength=hasRequiredParamsLength,m.checkParams=checkParams,m.methodEndsWith=methodEndsWith},68521:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.parseSubscriptionRequest=m.parseUnsubscribeRequest=m.parsePublishRequest=m.parseSubscribeRequest=void 0;let _=v(45854),E=v(96811);function parseSubscribeRequest(d){if(!E.isSubscribeMethod(d.method))throw Error("JSON-RPC Request has invalid subscribe method");if(!E.isSubscribeParams(d.params))throw Error("JSON-RPC Request has invalid subscribe params");let m=d.params;return _.assertType(m,"topic"),m}function parsePublishRequest(d){if(!E.isPublishMethod(d.method))throw Error("JSON-RPC Request has invalid publish method");if(!E.isPublishParams(d.params))throw Error("JSON-RPC Request has invalid publish params");let m=d.params;return _.assertType(m,"topic"),_.assertType(m,"message"),_.assertType(m,"ttl","number"),m}function parseUnsubscribeRequest(d){if(!E.isUnsubscribeMethod(d.method))throw Error("JSON-RPC Request has invalid unsubscribe method");if(!E.isUnsubscribeParams(d.params))throw Error("JSON-RPC Request has invalid unsubscribe params");let m=d.params;return _.assertType(m,"id"),m}function parseSubscriptionRequest(d){if(!E.isSubscriptionMethod(d.method))throw Error("JSON-RPC Request has invalid subscription method");if(!E.isSubscriptionParams(d.params))throw Error("JSON-RPC Request has invalid subscription params");let m=d.params;return _.assertType(m,"id"),_.assertType(m,"data"),m}m.parseSubscribeRequest=parseSubscribeRequest,m.parsePublishRequest=parsePublishRequest,m.parseUnsubscribeRequest=parseUnsubscribeRequest,m.parseSubscriptionRequest=parseSubscriptionRequest},80429:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0})},96811:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.isSubscriptionParams=m.isSubscriptionMethod=m.isSubscriptionRequest=m.isUnsubscribeParams=m.isUnsubscribeMethod=m.isUnsubscribeRequest=m.isPublishParams=m.isPublishMethod=m.isPublishRequest=m.isSubscribeParams=m.isSubscribeMethod=m.isSubscribeRequest=void 0;let _=v(45854);function isSubscribeRequest(d){return isSubscribeMethod(d.method)&&isSubscribeParams(d.params)}function isSubscribeMethod(d){return _.methodEndsWith(d,"subscribe")}function isSubscribeParams(d){return _.checkParams(d,["topic"],[])}function isPublishRequest(d){return isPublishMethod(d.method)&&isPublishParams(d.params)}function isPublishMethod(d){return _.methodEndsWith(d,"publish")}function isPublishParams(d){return _.checkParams(d,["message","topic","ttl"],["prompt","tag"])}function isUnsubscribeRequest(d){return isUnsubscribeMethod(d.method)&&isUnsubscribeParams(d.params)}function isUnsubscribeMethod(d){return _.methodEndsWith(d,"unsubscribe")}function isUnsubscribeParams(d){return _.checkParams(d,["id","topic"],[])}function isSubscriptionRequest(d){return isSubscriptionMethod(d.method)&&isSubscriptionParams(d.params)}function isSubscriptionMethod(d){return _.methodEndsWith(d,"subscription")}function isSubscriptionParams(d){return _.checkParams(d,["id","data"],[])}m.isSubscribeRequest=isSubscribeRequest,m.isSubscribeMethod=isSubscribeMethod,m.isSubscribeParams=isSubscribeParams,m.isPublishRequest=isPublishRequest,m.isPublishMethod=isPublishMethod,m.isPublishParams=isPublishParams,m.isUnsubscribeRequest=isUnsubscribeRequest,m.isUnsubscribeMethod=isUnsubscribeMethod,m.isUnsubscribeParams=isUnsubscribeParams,m.isSubscriptionRequest=isSubscriptionRequest,m.isSubscriptionMethod=isSubscriptionMethod,m.isSubscriptionParams=isSubscriptionParams},76866:(d,m,v)=>{"use strict";v.r(m),v.d(m,{__assign:()=>__assign,__asyncDelegator:()=>__asyncDelegator,__asyncGenerator:()=>__asyncGenerator,__asyncValues:()=>__asyncValues,__await:()=>__await,__awaiter:()=>__awaiter,__classPrivateFieldGet:()=>__classPrivateFieldGet,__classPrivateFieldSet:()=>__classPrivateFieldSet,__createBinding:()=>__createBinding,__decorate:()=>__decorate,__exportStar:()=>__exportStar,__extends:()=>__extends,__generator:()=>__generator,__importDefault:()=>__importDefault,__importStar:()=>__importStar,__makeTemplateObject:()=>__makeTemplateObject,__metadata:()=>__metadata,__param:()=>__param,__read:()=>__read,__rest:()=>__rest,__spread:()=>__spread,__spreadArrays:()=>__spreadArrays,__values:()=>__values});/*! *****************************************************************************
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
***************************************************************************** */var extendStatics=function(d,m){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(d,m){d.__proto__=m}||function(d,m){for(var v in m)m.hasOwnProperty(v)&&(d[v]=m[v])})(d,m)};function __extends(d,m){function __(){this.constructor=d}extendStatics(d,m),d.prototype=null===m?Object.create(m):(__.prototype=m.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function(d){for(var m,v=1,_=arguments.length;v<_;v++)for(var E in m=arguments[v])Object.prototype.hasOwnProperty.call(m,E)&&(d[E]=m[E]);return d}).apply(this,arguments)};function __rest(d,m){var v={};for(var _ in d)Object.prototype.hasOwnProperty.call(d,_)&&0>m.indexOf(_)&&(v[_]=d[_]);if(null!=d&&"function"==typeof Object.getOwnPropertySymbols)for(var E=0,_=Object.getOwnPropertySymbols(d);E<_.length;E++)0>m.indexOf(_[E])&&Object.prototype.propertyIsEnumerable.call(d,_[E])&&(v[_[E]]=d[_[E]]);return v}function __decorate(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}function __param(d,m){return function(v,_){m(v,_,d)}}function __metadata(d,m){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,m)}function __awaiter(d,m,v,_){function adopt(d){return d instanceof v?d:new v(function(m){m(d)})}return new(v||(v=Promise))(function(v,E){function fulfilled(d){try{step(_.next(d))}catch(d){E(d)}}function rejected(d){try{step(_.throw(d))}catch(d){E(d)}}function step(d){d.done?v(d.value):adopt(d.value).then(fulfilled,rejected)}step((_=_.apply(d,m||[])).next())})}function __generator(d,m){var v,_,E,x,T={label:0,sent:function(){if(1&E[0])throw E[1];return E[1]},trys:[],ops:[]};return x={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(x[Symbol.iterator]=function(){return this}),x;function verb(d){return function(m){return step([d,m])}}function step(x){if(v)throw TypeError("Generator is already executing.");for(;T;)try{if(v=1,_&&(E=2&x[0]?_.return:x[0]?_.throw||((E=_.return)&&E.call(_),0):_.next)&&!(E=E.call(_,x[1])).done)return E;switch(_=0,E&&(x=[2&x[0],E.value]),x[0]){case 0:case 1:E=x;break;case 4:return T.label++,{value:x[1],done:!1};case 5:T.label++,_=x[1],x=[0];continue;case 7:x=T.ops.pop(),T.trys.pop();continue;default:if(!(E=(E=T.trys).length>0&&E[E.length-1])&&(6===x[0]||2===x[0])){T=0;continue}if(3===x[0]&&(!E||x[1]>E[0]&&x[1]<E[3])){T.label=x[1];break}if(6===x[0]&&T.label<E[1]){T.label=E[1],E=x;break}if(E&&T.label<E[2]){T.label=E[2],T.ops.push(x);break}E[2]&&T.ops.pop(),T.trys.pop();continue}x=m.call(d,T)}catch(d){x=[6,d],_=0}finally{v=E=0}if(5&x[0])throw x[1];return{value:x[0]?x[1]:void 0,done:!0}}}function __createBinding(d,m,v,_){void 0===_&&(_=v),d[_]=m[v]}function __exportStar(d,m){for(var v in d)"default"===v||m.hasOwnProperty(v)||(m[v]=d[v])}function __values(d){var m="function"==typeof Symbol&&Symbol.iterator,v=m&&d[m],_=0;if(v)return v.call(d);if(d&&"number"==typeof d.length)return{next:function(){return d&&_>=d.length&&(d=void 0),{value:d&&d[_++],done:!d}}};throw TypeError(m?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(d,m){var v="function"==typeof Symbol&&d[Symbol.iterator];if(!v)return d;var _,E,x=v.call(d),T=[];try{for(;(void 0===m||m-- >0)&&!(_=x.next()).done;)T.push(_.value)}catch(d){E={error:d}}finally{try{_&&!_.done&&(v=x.return)&&v.call(x)}finally{if(E)throw E.error}}return T}function __spread(){for(var d=[],m=0;m<arguments.length;m++)d=d.concat(__read(arguments[m]));return d}function __spreadArrays(){for(var d=0,m=0,v=arguments.length;m<v;m++)d+=arguments[m].length;for(var _=Array(d),E=0,m=0;m<v;m++)for(var x=arguments[m],T=0,A=x.length;T<A;T++,E++)_[E]=x[T];return _}function __await(d){return this instanceof __await?(this.v=d,this):new __await(d)}function __asyncGenerator(d,m,v){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var _,E=v.apply(d,m||[]),x=[];return _={},verb("next"),verb("throw"),verb("return"),_[Symbol.asyncIterator]=function(){return this},_;function verb(d){E[d]&&(_[d]=function(m){return new Promise(function(v,_){x.push([d,m,v,_])>1||resume(d,m)})})}function resume(d,m){try{step(E[d](m))}catch(d){settle(x[0][3],d)}}function step(d){d.value instanceof __await?Promise.resolve(d.value.v).then(fulfill,reject):settle(x[0][2],d)}function fulfill(d){resume("next",d)}function reject(d){resume("throw",d)}function settle(d,m){d(m),x.shift(),x.length&&resume(x[0][0],x[0][1])}}function __asyncDelegator(d){var m,v;return m={},verb("next"),verb("throw",function(d){throw d}),verb("return"),m[Symbol.iterator]=function(){return this},m;function verb(_,E){m[_]=d[_]?function(m){return(v=!v)?{value:__await(d[_](m)),done:"return"===_}:E?E(m):m}:E}}function __asyncValues(d){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var m,v=d[Symbol.asyncIterator];return v?v.call(d):(d=__values(d),m={},verb("next"),verb("throw"),verb("return"),m[Symbol.asyncIterator]=function(){return this},m);function verb(v){m[v]=d[v]&&function(m){return new Promise(function(_,E){settle(_,E,(m=d[v](m)).done,m.value)})}}function settle(d,m,v,_){Promise.resolve(_).then(function(m){d({value:m,done:v})},m)}}function __makeTemplateObject(d,m){return Object.defineProperty?Object.defineProperty(d,"raw",{value:m}):d.raw=m,d}function __importStar(d){if(d&&d.__esModule)return d;var m={};if(null!=d)for(var v in d)Object.hasOwnProperty.call(d,v)&&(m[v]=d[v]);return m.default=d,m}function __importDefault(d){return d&&d.__esModule?d:{default:d}}function __classPrivateFieldGet(d,m){if(!m.has(d))throw TypeError("attempted to get private field on non-instance");return m.get(d)}function __classPrivateFieldSet(d,m,v){if(!m.has(d))throw TypeError("attempted to set private field on non-instance");return m.set(d,v),v}},6725:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});let _=v(25621);_.__exportStar(v(96416),m),_.__exportStar(v(19933),m)},96416:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.ONE_THOUSAND=m.ONE_HUNDRED=void 0,m.ONE_HUNDRED=100,m.ONE_THOUSAND=1e3},19933:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.ONE_YEAR=m.FOUR_WEEKS=m.THREE_WEEKS=m.TWO_WEEKS=m.ONE_WEEK=m.THIRTY_DAYS=m.SEVEN_DAYS=m.FIVE_DAYS=m.THREE_DAYS=m.ONE_DAY=m.TWENTY_FOUR_HOURS=m.TWELVE_HOURS=m.SIX_HOURS=m.THREE_HOURS=m.ONE_HOUR=m.SIXTY_MINUTES=m.THIRTY_MINUTES=m.TEN_MINUTES=m.FIVE_MINUTES=m.ONE_MINUTE=m.SIXTY_SECONDS=m.THIRTY_SECONDS=m.TEN_SECONDS=m.FIVE_SECONDS=m.ONE_SECOND=void 0,m.ONE_SECOND=1,m.FIVE_SECONDS=5,m.TEN_SECONDS=10,m.THIRTY_SECONDS=30,m.SIXTY_SECONDS=60,m.ONE_MINUTE=m.SIXTY_SECONDS,m.FIVE_MINUTES=5*m.ONE_MINUTE,m.TEN_MINUTES=10*m.ONE_MINUTE,m.THIRTY_MINUTES=30*m.ONE_MINUTE,m.SIXTY_MINUTES=60*m.ONE_MINUTE,m.ONE_HOUR=m.SIXTY_MINUTES,m.THREE_HOURS=3*m.ONE_HOUR,m.SIX_HOURS=6*m.ONE_HOUR,m.TWELVE_HOURS=12*m.ONE_HOUR,m.TWENTY_FOUR_HOURS=24*m.ONE_HOUR,m.ONE_DAY=m.TWENTY_FOUR_HOURS,m.THREE_DAYS=3*m.ONE_DAY,m.FIVE_DAYS=5*m.ONE_DAY,m.SEVEN_DAYS=7*m.ONE_DAY,m.THIRTY_DAYS=30*m.ONE_DAY,m.ONE_WEEK=m.SEVEN_DAYS,m.TWO_WEEKS=2*m.ONE_WEEK,m.THREE_WEEKS=3*m.ONE_WEEK,m.FOUR_WEEKS=4*m.ONE_WEEK,m.ONE_YEAR=365*m.ONE_DAY},57277:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});let _=v(25621);_.__exportStar(v(30266),m),_.__exportStar(v(47648),m),_.__exportStar(v(43890),m),_.__exportStar(v(6725),m)},43890:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});let _=v(25621);_.__exportStar(v(2724),m)},2724:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.IWatch=void 0;let IWatch=class IWatch{};m.IWatch=IWatch},98748:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.fromMiliseconds=m.toMiliseconds=void 0;let _=v(6725);function toMiliseconds(d){return d*_.ONE_THOUSAND}function fromMiliseconds(d){return Math.floor(d/_.ONE_THOUSAND)}m.toMiliseconds=toMiliseconds,m.fromMiliseconds=fromMiliseconds},25183:(d,m)=>{"use strict";function delay(d){return new Promise(m=>{setTimeout(()=>{m(!0)},d)})}Object.defineProperty(m,"__esModule",{value:!0}),m.delay=void 0,m.delay=delay},30266:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});let _=v(25621);_.__exportStar(v(25183),m),_.__exportStar(v(98748),m)},47648:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.Watch=void 0;let Watch=class Watch{constructor(){this.timestamps=new Map}start(d){if(this.timestamps.has(d))throw Error(`Watch already started for label: ${d}`);this.timestamps.set(d,{started:Date.now()})}stop(d){let m=this.get(d);if(void 0!==m.elapsed)throw Error(`Watch already stopped for label: ${d}`);let v=Date.now()-m.started;this.timestamps.set(d,{started:m.started,elapsed:v})}get(d){let m=this.timestamps.get(d);if(void 0===m)throw Error(`No timestamp found for label: ${d}`);return m}elapsed(d){let m=this.get(d),v=m.elapsed||Date.now()-m.started;return v}};m.Watch=Watch,m.default=Watch},25621:(d,m,v)=>{"use strict";v.r(m),v.d(m,{__assign:()=>__assign,__asyncDelegator:()=>__asyncDelegator,__asyncGenerator:()=>__asyncGenerator,__asyncValues:()=>__asyncValues,__await:()=>__await,__awaiter:()=>__awaiter,__classPrivateFieldGet:()=>__classPrivateFieldGet,__classPrivateFieldSet:()=>__classPrivateFieldSet,__createBinding:()=>__createBinding,__decorate:()=>__decorate,__exportStar:()=>__exportStar,__extends:()=>__extends,__generator:()=>__generator,__importDefault:()=>__importDefault,__importStar:()=>__importStar,__makeTemplateObject:()=>__makeTemplateObject,__metadata:()=>__metadata,__param:()=>__param,__read:()=>__read,__rest:()=>__rest,__spread:()=>__spread,__spreadArrays:()=>__spreadArrays,__values:()=>__values});/*! *****************************************************************************
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
***************************************************************************** */var extendStatics=function(d,m){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(d,m){d.__proto__=m}||function(d,m){for(var v in m)m.hasOwnProperty(v)&&(d[v]=m[v])})(d,m)};function __extends(d,m){function __(){this.constructor=d}extendStatics(d,m),d.prototype=null===m?Object.create(m):(__.prototype=m.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function(d){for(var m,v=1,_=arguments.length;v<_;v++)for(var E in m=arguments[v])Object.prototype.hasOwnProperty.call(m,E)&&(d[E]=m[E]);return d}).apply(this,arguments)};function __rest(d,m){var v={};for(var _ in d)Object.prototype.hasOwnProperty.call(d,_)&&0>m.indexOf(_)&&(v[_]=d[_]);if(null!=d&&"function"==typeof Object.getOwnPropertySymbols)for(var E=0,_=Object.getOwnPropertySymbols(d);E<_.length;E++)0>m.indexOf(_[E])&&Object.prototype.propertyIsEnumerable.call(d,_[E])&&(v[_[E]]=d[_[E]]);return v}function __decorate(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}function __param(d,m){return function(v,_){m(v,_,d)}}function __metadata(d,m){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(d,m)}function __awaiter(d,m,v,_){function adopt(d){return d instanceof v?d:new v(function(m){m(d)})}return new(v||(v=Promise))(function(v,E){function fulfilled(d){try{step(_.next(d))}catch(d){E(d)}}function rejected(d){try{step(_.throw(d))}catch(d){E(d)}}function step(d){d.done?v(d.value):adopt(d.value).then(fulfilled,rejected)}step((_=_.apply(d,m||[])).next())})}function __generator(d,m){var v,_,E,x,T={label:0,sent:function(){if(1&E[0])throw E[1];return E[1]},trys:[],ops:[]};return x={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(x[Symbol.iterator]=function(){return this}),x;function verb(d){return function(m){return step([d,m])}}function step(x){if(v)throw TypeError("Generator is already executing.");for(;T;)try{if(v=1,_&&(E=2&x[0]?_.return:x[0]?_.throw||((E=_.return)&&E.call(_),0):_.next)&&!(E=E.call(_,x[1])).done)return E;switch(_=0,E&&(x=[2&x[0],E.value]),x[0]){case 0:case 1:E=x;break;case 4:return T.label++,{value:x[1],done:!1};case 5:T.label++,_=x[1],x=[0];continue;case 7:x=T.ops.pop(),T.trys.pop();continue;default:if(!(E=(E=T.trys).length>0&&E[E.length-1])&&(6===x[0]||2===x[0])){T=0;continue}if(3===x[0]&&(!E||x[1]>E[0]&&x[1]<E[3])){T.label=x[1];break}if(6===x[0]&&T.label<E[1]){T.label=E[1],E=x;break}if(E&&T.label<E[2]){T.label=E[2],T.ops.push(x);break}E[2]&&T.ops.pop(),T.trys.pop();continue}x=m.call(d,T)}catch(d){x=[6,d],_=0}finally{v=E=0}if(5&x[0])throw x[1];return{value:x[0]?x[1]:void 0,done:!0}}}function __createBinding(d,m,v,_){void 0===_&&(_=v),d[_]=m[v]}function __exportStar(d,m){for(var v in d)"default"===v||m.hasOwnProperty(v)||(m[v]=d[v])}function __values(d){var m="function"==typeof Symbol&&Symbol.iterator,v=m&&d[m],_=0;if(v)return v.call(d);if(d&&"number"==typeof d.length)return{next:function(){return d&&_>=d.length&&(d=void 0),{value:d&&d[_++],done:!d}}};throw TypeError(m?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(d,m){var v="function"==typeof Symbol&&d[Symbol.iterator];if(!v)return d;var _,E,x=v.call(d),T=[];try{for(;(void 0===m||m-- >0)&&!(_=x.next()).done;)T.push(_.value)}catch(d){E={error:d}}finally{try{_&&!_.done&&(v=x.return)&&v.call(x)}finally{if(E)throw E.error}}return T}function __spread(){for(var d=[],m=0;m<arguments.length;m++)d=d.concat(__read(arguments[m]));return d}function __spreadArrays(){for(var d=0,m=0,v=arguments.length;m<v;m++)d+=arguments[m].length;for(var _=Array(d),E=0,m=0;m<v;m++)for(var x=arguments[m],T=0,A=x.length;T<A;T++,E++)_[E]=x[T];return _}function __await(d){return this instanceof __await?(this.v=d,this):new __await(d)}function __asyncGenerator(d,m,v){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var _,E=v.apply(d,m||[]),x=[];return _={},verb("next"),verb("throw"),verb("return"),_[Symbol.asyncIterator]=function(){return this},_;function verb(d){E[d]&&(_[d]=function(m){return new Promise(function(v,_){x.push([d,m,v,_])>1||resume(d,m)})})}function resume(d,m){try{step(E[d](m))}catch(d){settle(x[0][3],d)}}function step(d){d.value instanceof __await?Promise.resolve(d.value.v).then(fulfill,reject):settle(x[0][2],d)}function fulfill(d){resume("next",d)}function reject(d){resume("throw",d)}function settle(d,m){d(m),x.shift(),x.length&&resume(x[0][0],x[0][1])}}function __asyncDelegator(d){var m,v;return m={},verb("next"),verb("throw",function(d){throw d}),verb("return"),m[Symbol.iterator]=function(){return this},m;function verb(_,E){m[_]=d[_]?function(m){return(v=!v)?{value:__await(d[_](m)),done:"return"===_}:E?E(m):m}:E}}function __asyncValues(d){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var m,v=d[Symbol.asyncIterator];return v?v.call(d):(d=__values(d),m={},verb("next"),verb("throw"),verb("return"),m[Symbol.asyncIterator]=function(){return this},m);function verb(v){m[v]=d[v]&&function(m){return new Promise(function(_,E){settle(_,E,(m=d[v](m)).done,m.value)})}}function settle(d,m,v,_){Promise.resolve(_).then(function(m){d({value:m,done:v})},m)}}function __makeTemplateObject(d,m){return Object.defineProperty?Object.defineProperty(d,"raw",{value:m}):d.raw=m,d}function __importStar(d){if(d&&d.__esModule)return d;var m={};if(null!=d)for(var v in d)Object.hasOwnProperty.call(d,v)&&(m[v]=d[v]);return m.default=d,m}function __importDefault(d){return d&&d.__esModule?d:{default:d}}function __classPrivateFieldGet(d,m){if(!m.has(d))throw TypeError("attempted to get private field on non-instance");return m.get(d)}function __classPrivateFieldSet(d,m,v){if(!m.has(d))throw TypeError("attempted to set private field on non-instance");return m.set(d,v),v}},25799:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(44636),E=v(44985),x=v(53034),T=v(70852),A=v(22688),j=v(98202),U=v(35259),F=v(57277),W=v(32480),K=v(66042),Q=v(20616),X=v(56969);function pe(d){if(d&&d.__esModule)return d;var m=Object.create(null);return d&&Object.keys(d).forEach(function(v){if("default"!==v){var _=Object.getOwnPropertyDescriptor(d,v);Object.defineProperty(m,v,_.get?_:{enumerable:!0,get:function(){return d[v]}})}}),m.default=d,Object.freeze(m)}var ee=pe(A),er=pe(Q);function me(d){let[m,v]=d.split(":");return{namespace:m,reference:v}}function ge(d){let{namespace:m,reference:v}=d;return[m,v].join(":")}function G(d){let[m,v,_]=d.split(":");return{namespace:m,reference:v,address:_}}function ye(d){let{namespace:m,reference:v,address:_}=d;return[m,v,_].join(":")}function J(d,m){let v=[];return d.forEach(d=>{let _=m(d);v.includes(_)||v.push(_)}),v}function he(d){let{address:m}=G(d);return m}function ve(d){let{namespace:m,reference:v}=G(d);return ge({namespace:m,reference:v})}function On(d,m){let{namespace:v,reference:_}=me(m);return ye({namespace:v,reference:_,address:d})}function Sn(d){return J(d,he)}function Ee(d){return J(d,ve)}function Tn(d,m=[]){let v=[];return Object.keys(d).forEach(_=>{if(m.length&&!m.includes(_))return;let E=d[_];v.push(...E.accounts)}),v}function An(d,m=[]){let v=[];return Object.keys(d).forEach(_=>{if(m.length&&!m.includes(_))return;let E=d[_];v.push(...Ee(E.accounts))}),v}function In(d,m=[]){let v=[];return Object.keys(d).forEach(_=>{if(m.length&&!m.includes(_))return;let E=d[_];v.push(...L(_,E))}),v}function L(d,m){return d.includes(":")?[d]:m.chains||[]}let q=d=>d?.split(":"),Ne=d=>{let m=d&&q(d);if(m)return m[3]},be=d=>{let m=d&&q(d);if(m)return m.pop()},ei="base10",eo="base16",ea="base64pad",es="utf8";function Cn(){let d=ee.generateKeyPair();return{privateKey:j.toString(d.secretKey,eo),publicKey:j.toString(d.publicKey,eo)}}function _n(){let d=x.randomBytes(32);return j.toString(d,eo)}function Un(d,m){let v=ee.sharedKey(j.fromString(d,eo),j.fromString(m,eo),!0),_=new E.HKDF(T.SHA256,v).expand(32);return j.toString(_,eo)}function jn(d){let m=T.hash(j.fromString(d,eo));return j.toString(m,eo)}function Vn(d){let m=T.hash(j.fromString(d,es));return j.toString(m,eo)}function Se(d){return j.fromString(`${d}`,ei)}function V(d){return Number(j.toString(d,ei))}function Dn(d){let m=Se("u">typeof d.type?d.type:0);if(1===V(m)&&typeof d.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let v="u">typeof d.senderPublicKey?j.fromString(d.senderPublicKey,eo):void 0,E="u">typeof d.iv?j.fromString(d.iv,eo):x.randomBytes(12),T=new _.ChaCha20Poly1305(j.fromString(d.symKey,eo)).seal(E,j.fromString(d.message,es));return Te({type:m,sealed:T,iv:E,senderPublicKey:v})}function $n(d){let m=new _.ChaCha20Poly1305(j.fromString(d.symKey,eo)),{sealed:v,iv:E}=ne(d.encoded),x=m.open(E,v);if(null===x)throw Error("Failed to decrypt");return j.toString(x,es)}function Te(d){if(1===V(d.type)){if(typeof d.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return j.toString(j.concat([d.type,d.senderPublicKey,d.iv,d.sealed]),ea)}return j.toString(j.concat([d.type,d.iv,d.sealed]),ea)}function ne(d){let m=j.fromString(d,ea),v=m.slice(0,1);if(1===V(v)){let d=m.slice(1,33),_=m.slice(33,45),E=m.slice(45);return{type:v,sealed:E,iv:_,senderPublicKey:d}}let _=m.slice(1,13),E=m.slice(13);return{type:v,sealed:E,iv:_}}function Mn(d,m){let v=ne(d);return Ae({type:V(v.type),senderPublicKey:"u">typeof v.senderPublicKey?j.toString(v.senderPublicKey,eo):void 0,receiverPublicKey:m?.receiverPublicKey})}function Ae(d){let m=d?.type||0;if(1===m){if(typeof d?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof d?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:m,senderPublicKey:d?.senderPublicKey,receiverPublicKey:d?.receiverPublicKey}}function kn(d){return 1===d.type&&"string"==typeof d.senderPublicKey&&"string"==typeof d.receiverPublicKey}var el=Object.defineProperty,ec=Object.getOwnPropertySymbols,eu=Object.prototype.hasOwnProperty,ed=Object.prototype.propertyIsEnumerable,Pe=(d,m,v)=>m in d?el(d,m,{enumerable:!0,configurable:!0,writable:!0,value:v}):d[m]=v,Re=(d,m)=>{for(var v in m||(m={}))eu.call(m,v)&&Pe(d,v,m[v]);if(ec)for(var v of ec(m))ed.call(m,v)&&Pe(d,v,m[v]);return d};let eh="ReactNative",ef={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"};function re(){return"u">typeof process&&"u">typeof process.versions&&"u">typeof process.versions.node}function D(){return!W.getDocument()&&!!W.getNavigator()&&navigator.product===eh}function B(){return!re()&&!!W.getNavigator()}function P(){return D()?ef.reactNative:re()?ef.node:B()?ef.browser:ef.unknown}function Ue(d,m){let v=er.parse(d);return v=Re(Re({},v),m),d=er.stringify(v)}function Hn(){return K.getWindowMetadata()||{name:"",description:"",url:"",icons:[""]}}function Bn(d,m){var v;let _=P(),E={protocol:d,version:m,env:_};return"browser"===_&&(E.host=(null==(v=W.getLocation())?void 0:v.host)||"unknown"),E}function je(){if(P()===ef.reactNative&&"u">typeof global&&"u">typeof(null==global?void 0:global.Platform)){let{OS:d,Version:m}=global.Platform;return[d,m].join("-")}let d=U.detect();if(null===d)return"unknown";let m=d.os?d.os.replace(" ","").toLowerCase():"unknown";return"browser"===d.type?[m,d.name,d.version].join("-"):[m,d.version].join("-")}function Ve(){var d;let m=P();return m===ef.browser?[m,(null==(d=W.getLocation())?void 0:d.host)||"unknown"].join(":"):m}function De(d,m,v){let _=je(),E=Ve();return[[d,m].join("-"),["js",v].join("-"),_,E].join("/")}function zn({protocol:d,version:m,relayUrl:v,sdkVersion:_,auth:E,projectId:x,useOnCloseEvent:T}){let A=v.split("?"),j=De(d,m,_),U=Ue(A[1]||"",{auth:E,ua:j,projectId:x,useOnCloseEvent:T||void 0});return A[0]+"?"+U}function Yn(d){let m=(d.match(/^[^:]+(?=:\/\/)/gi)||[])[0],v="u">typeof m?d.split("://")[1]:d;return[m="wss"===m?"https":"http",v].join("://")}function Wn(d,m,v){if(!d[m]||typeof d[m]!==v)throw Error(`Missing or invalid "${m}" param`)}function $e(d,m=2){return Me(d.split("/"),m)}function Gn(d){return $e(d).join(" ")}function b(d,m){return d.filter(d=>m.includes(d)).length===d.length}function Me(d,m=2){return d.slice(Math.max(d.length-m,0))}function Jn(d){return Object.fromEntries(d.entries())}function Qn(d){return new Map(Object.entries(d))}function Zn(d,m){let v={};return Object.keys(d).forEach(_=>{v[_]=m(d[_])}),v}function ke(d){return d.trim().replace(/^\w/,d=>d.toUpperCase())}function et(d){return d.split(" ").map(d=>ke(d)).join(" ")}function nt(d=F.FIVE_MINUTES,m){let v,_,E;let x=F.toMiliseconds(d||F.FIVE_MINUTES);return{resolve:d=>{E&&v&&(clearTimeout(E),v(d))},reject:d=>{E&&_&&(clearTimeout(E),_(d))},done:()=>new Promise((d,T)=>{E=setTimeout(()=>{T(Error(m))},x),v=d,_=T})}}function tt(d,m,v){return new Promise(async(_,E)=>{let x=setTimeout(()=>E(Error(v)),m);try{let m=await d;_(m)}catch(d){E(d)}clearTimeout(x)})}function se(d,m){if("string"==typeof m&&m.startsWith(`${d}:`))return m;if("topic"===d.toLowerCase()){if("string"!=typeof m)throw Error('Value must be "string" for expirer target type: topic');return`topic:${m}`}if("id"===d.toLowerCase()){if("number"!=typeof m)throw Error('Value must be "number" for expirer target type: id');return`id:${m}`}throw Error(`Unknown expirer target type: ${d}`)}function rt(d){return se("topic",d)}function st(d){return se("id",d)}function ot(d){let[m,v]=d.split(":"),_={id:void 0,topic:void 0};if("topic"===m&&"string"==typeof v)_.topic=v;else if("id"===m&&Number.isInteger(Number(v)))_.id=Number(v);else throw Error(`Invalid target, expected id:number or topic:string, got ${m}:${v}`);return _}function it(d,m){return F.fromMiliseconds((m||Date.now())+F.toMiliseconds(d))}function at(d){return Date.now()>=F.toMiliseconds(d)}function ct(d,m){return`${d}${m?`:${m}`:""}`}function O(d=[],m=[]){return[...new Set([...d,...m])]}async function ut({id:d,topic:m,wcDeepLink:v}){try{if(!v)return;let _="string"==typeof v?JSON.parse(v):v,E=_?.href;if("string"!=typeof E)return;E.endsWith("/")&&(E=E.slice(0,-1));let x=`${E}/wc?requestId=${d}&sessionTopic=${m}`,T=P();T===ef.browser?x.startsWith("https://")?window.open(x,"_blank","noreferrer noopener"):window.open(x,"_self","noreferrer noopener"):T===ef.reactNative&&"u">typeof(null==global?void 0:global.Linking)&&await global.Linking.openURL(x)}catch(d){console.error(d)}}function dt(d){return d?.relay||{protocol:"irn"}}function lt(d){let m=X.RELAY_JSONRPC[d];if(typeof m>"u")throw Error(`Relay Protocol not supported: ${d}`);return m}var ep=Object.defineProperty,eg=Object.getOwnPropertySymbols,em=Object.prototype.hasOwnProperty,eb=Object.prototype.propertyIsEnumerable,qe=(d,m,v)=>m in d?ep(d,m,{enumerable:!0,configurable:!0,writable:!0,value:v}):d[m]=v,gt=(d,m)=>{for(var v in m||(m={}))em.call(m,v)&&qe(d,v,m[v]);if(eg)for(var v of eg(m))eb.call(m,v)&&qe(d,v,m[v]);return d};function Fe(d,m="-"){let v={},_="relay"+m;return Object.keys(d).forEach(m=>{if(m.startsWith(_)){let E=m.replace(_,""),x=d[m];v[E]=x}}),v}function yt(d){let m=d.indexOf(":"),v=-1!==d.indexOf("?")?d.indexOf("?"):void 0,_=d.substring(0,m),E=d.substring(m+1,v).split("@"),x="u">typeof v?d.substring(v):"",T=er.parse(x);return{protocol:_,topic:xe(E[0]),version:parseInt(E[1],10),symKey:T.symKey,relay:Fe(T)}}function xe(d){return d.startsWith("//")?d.substring(2):d}function He(d,m="-"){let v={};return Object.keys(d).forEach(_=>{d[_]&&(v["relay"+m+_]=d[_])}),v}function ht(d){return`${d.protocol}:${d.topic}@${d.version}?`+er.stringify(gt({symKey:d.symKey},He(d.relay)))}var ey=Object.defineProperty,ew=Object.defineProperties,ev=Object.getOwnPropertyDescriptors,e_=Object.getOwnPropertySymbols,eC=Object.prototype.hasOwnProperty,eE=Object.prototype.propertyIsEnumerable,ze=(d,m,v)=>m in d?ey(d,m,{enumerable:!0,configurable:!0,writable:!0,value:v}):d[m]=v,St=(d,m)=>{for(var v in m||(m={}))eC.call(m,v)&&ze(d,v,m[v]);if(e_)for(var v of e_(m))eE.call(m,v)&&ze(d,v,m[v]);return d},Tt=(d,m)=>ew(d,ev(m));function R(d){let m=[];return d.forEach(d=>{let[v,_]=d.split(":");m.push(`${v}:${_}`)}),m}function Ye(d){let m=[];return Object.values(d).forEach(d=>{m.push(...R(d.accounts))}),m}function We(d,m){let v=[];return Object.values(d).forEach(d=>{R(d.accounts).includes(m)&&v.push(...d.methods)}),v}function Ge(d,m){let v=[];return Object.values(d).forEach(d=>{R(d.accounts).includes(m)&&v.push(...d.events)}),v}function At(d,m){let v=rn(d,m);if(v)throw Error(v.message);let _={};for(let[m,v]of Object.entries(d))_[m]={methods:v.methods,events:v.events,chains:v.accounts.map(d=>`${d.split(":")[0]}:${d.split(":")[1]}`)};return _}function It(d){let{proposal:{requiredNamespaces:m,optionalNamespaces:v={}},supportedNamespaces:_}=d,E=ie(m),x=ie(v),T={};Object.keys(_).forEach(d=>{let m=_[d].chains,v=_[d].methods,E=_[d].events,x=_[d].accounts;m.forEach(m=>{if(!x.some(d=>d.includes(m)))throw Error(`No accounts provided for chain ${m} in namespace ${d}`)}),T[d]={chains:m,methods:v,events:E,accounts:x}});let A=on(m,T,"approve()");if(A)throw Error(A.message);let j={};return Object.keys(m).length||Object.keys(v).length?(Object.keys(E).forEach(d=>{let m=_[d].chains.filter(m=>{var v,_;return null==(_=null==(v=E[d])?void 0:v.chains)?void 0:_.includes(m)}),v=_[d].methods.filter(m=>{var v,_;return null==(_=null==(v=E[d])?void 0:v.methods)?void 0:_.includes(m)}),x=_[d].events.filter(m=>{var v,_;return null==(_=null==(v=E[d])?void 0:v.events)?void 0:_.includes(m)}),T=m.map(m=>_[d].accounts.filter(d=>d.includes(`${m}:`))).flat();j[d]={chains:m,methods:v,events:x,accounts:T}}),Object.keys(x).forEach(d=>{var m,v,E,T,A,U;if(!_[d])return;let F=null==(v=null==(m=x[d])?void 0:m.chains)?void 0:v.filter(m=>_[d].chains.includes(m)),W=_[d].methods.filter(m=>{var v,_;return null==(_=null==(v=x[d])?void 0:v.methods)?void 0:_.includes(m)}),K=_[d].events.filter(m=>{var v,_;return null==(_=null==(v=x[d])?void 0:v.events)?void 0:_.includes(m)}),Q=F?.map(m=>_[d].accounts.filter(d=>d.includes(`${m}:`))).flat();j[d]={chains:O(null==(E=j[d])?void 0:E.chains,F),methods:O(null==(T=j[d])?void 0:T.methods,W),events:O(null==(A=j[d])?void 0:A.events,K),accounts:O(null==(U=j[d])?void 0:U.accounts,Q)}}),j):T}function oe(d){return d.includes(":")}function Je(d){return oe(d)?d.split(":")[0]:d}function ie(d){var m,v,_;let E={};if(!z(d))return E;for(let[x,T]of Object.entries(d)){let d=oe(x)?[x]:T.chains,A=T.methods||[],j=T.events||[],U=Je(x);E[U]=Tt(St({},E[U]),{chains:O(d,null==(m=E[U])?void 0:m.chains),methods:O(A,null==(v=E[U])?void 0:v.methods),events:O(j,null==(_=E[U])?void 0:_.events)})}return E}let ex={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},eS={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function N(d,m){let{message:v,code:_}=eS[d];return{message:m?`${v} ${m}`:v,code:_}}function w(d,m){let{message:v,code:_}=ex[d];return{message:m?`${v} ${m}`:v,code:_}}function $(d,m){return!!Array.isArray(d)&&(!("u">typeof m)||!d.length||d.every(m))}function z(d){return Object.getPrototypeOf(d)===Object.prototype&&Object.keys(d).length}function S(d){return typeof d>"u"}function h(d,m){return!!(m&&S(d))||"string"==typeof d&&!!d.trim().length}function Y(d,m){return!!(m&&S(d))||"number"==typeof d&&!isNaN(d)}function wt(d,m){let{requiredNamespaces:v}=m,_=Object.keys(d.namespaces),E=Object.keys(v),x=!0;return!!b(E,_)&&(_.forEach(m=>{let{accounts:_,methods:E,events:T}=d.namespaces[m],A=R(_),j=v[m];b(L(m,j),A)&&b(j.methods,E)&&b(j.events,T)||(x=!1)}),x)}function M(d){return!!(h(d,!1)&&d.includes(":"))&&2===d.split(":").length}function Qe(d){if(h(d,!1)&&d.includes(":")){let m=d.split(":");if(3===m.length){let d=m[0]+":"+m[1];return!!m[2]&&M(d)}}return!1}function Ct(d){if(h(d,!1))try{return"u">typeof new URL(d)}catch{}return!1}function _t(d){var m;return null==(m=d?.proposer)?void 0:m.publicKey}function Ut(d){return d?.topic}function jt(d,m){let v=null;return h(d?.publicKey,!1)||(v=N("MISSING_OR_INVALID",`${m} controller public key should be a string`)),v}function ae(d){let m=!0;return $(d)?d.length&&(m=d.every(d=>h(d,!1))):m=!1,m}function Ze(d,m,v){let _=null;return $(m)&&m.length?m.forEach(d=>{_||M(d)||(_=w("UNSUPPORTED_CHAINS",`${v}, chain ${d} should be a string and conform to "namespace:chainId" format`))}):M(d)||(_=w("UNSUPPORTED_CHAINS",`${v}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),_}function Xe(d,m,v){let _=null;return Object.entries(d).forEach(([d,E])=>{if(_)return;let x=Ze(d,L(d,E),`${m} ${v}`);x&&(_=x)}),_}function en(d,m){let v=null;return $(d)?d.forEach(d=>{v||Qe(d)||(v=w("UNSUPPORTED_ACCOUNTS",`${m}, account ${d} should be a string and conform to "namespace:chainId:address" format`))}):v=w("UNSUPPORTED_ACCOUNTS",`${m}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),v}function nn(d,m){let v=null;return Object.values(d).forEach(d=>{if(v)return;let _=en(d?.accounts,`${m} namespace`);_&&(v=_)}),v}function tn(d,m){let v=null;return ae(d?.methods)?ae(d?.events)||(v=w("UNSUPPORTED_EVENTS",`${m}, events should be an array of strings or empty array for no events`)):v=w("UNSUPPORTED_METHODS",`${m}, methods should be an array of strings or empty array for no methods`),v}function ce(d,m){let v=null;return Object.values(d).forEach(d=>{if(v)return;let _=tn(d,`${m}, namespace`);_&&(v=_)}),v}function Vt(d,m,v){let _=null;if(d&&z(d)){let E=ce(d,m);E&&(_=E);let x=Xe(d,m,v);x&&(_=x)}else _=N("MISSING_OR_INVALID",`${m}, ${v} should be an object with data`);return _}function rn(d,m){let v=null;if(d&&z(d)){let _=ce(d,m);_&&(v=_);let E=nn(d,m);E&&(v=E)}else v=N("MISSING_OR_INVALID",`${m}, namespaces should be an object with data`);return v}function sn(d){return h(d.protocol,!0)}function Dt(d,m){let v=!1;return m&&!d?v=!0:d&&$(d)&&d.length&&d.forEach(d=>{v=sn(d)}),v}function $t(d){return"number"==typeof d}function Mt(d){return"u">typeof d}function kt(d){return!(!d||"object"!=typeof d||!d.code||!Y(d.code,!1)||!d.message||!h(d.message,!1))}function Kt(d){return!(S(d)||!h(d.method,!1))}function Lt(d){return!(S(d)||S(d.result)&&S(d.error)||!Y(d.id,!1)||!h(d.jsonrpc,!1))}function qt(d){return!(S(d)||!h(d.name,!1))}function Ft(d,m){return!(!M(m)||!Ye(d).includes(m))}function xt(d,m,v){return!!h(v,!1)&&We(d,m).includes(v)}function Ht(d,m,v){return!!h(v,!1)&&Ge(d,m).includes(v)}function on(d,m,v){let _=null,E=Bt(d),x=zt(m),T=Object.keys(E),A=Object.keys(x),j=an(Object.keys(d)),U=an(Object.keys(m)),F=j.filter(d=>!U.includes(d));return F.length&&(_=N("NON_CONFORMING_NAMESPACES",`${v} namespaces keys don't satisfy requiredNamespaces.
      Required: ${F.toString()}
      Received: ${Object.keys(m).toString()}`)),b(T,A)||(_=N("NON_CONFORMING_NAMESPACES",`${v} namespaces chains don't satisfy required namespaces.
      Required: ${T.toString()}
      Approved: ${A.toString()}`)),Object.keys(m).forEach(d=>{if(!d.includes(":")||_)return;let E=R(m[d].accounts);E.includes(d)||(_=N("NON_CONFORMING_NAMESPACES",`${v} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${E.toString()}`))}),T.forEach(d=>{_||(b(E[d].methods,x[d].methods)?b(E[d].events,x[d].events)||(_=N("NON_CONFORMING_NAMESPACES",`${v} namespaces events don't satisfy namespace events for ${d}`)):_=N("NON_CONFORMING_NAMESPACES",`${v} namespaces methods don't satisfy namespace methods for ${d}`))}),_}function Bt(d){let m={};return Object.keys(d).forEach(v=>{var _;v.includes(":")?m[v]=d[v]:null==(_=d[v].chains)||_.forEach(_=>{m[_]={methods:d[v].methods,events:d[v].events}})}),m}function an(d){return[...new Set(d.map(d=>d.includes(":")?d.split(":")[0]:d))]}function zt(d){let m={};return Object.keys(d).forEach(v=>{if(v.includes(":"))m[v]=d[v];else{let _=R(d[v].accounts);_?.forEach(_=>{m[_]={accounts:d[v].accounts.filter(d=>d.includes(`${_}:`)),methods:d[v].methods,events:d[v].events}})}}),m}function Yt(d,m){return Y(d,!1)&&d<=m.max&&d>=m.min}function Wt(){let d=P();return new Promise(m=>{switch(d){case ef.browser:m(cn());break;case ef.reactNative:m(un());break;case ef.node:default:m(!0)}})}function cn(){return B()&&navigator?.onLine}async function un(){if(D()&&"u">typeof global&&null!=global&&global.NetInfo){let d=await (null==global?void 0:global.NetInfo.fetch());return d?.isConnected}return!0}function dn(){return!0}function Gt(d){switch(P()){case ef.browser:ln(d);break;case ef.reactNative:pn(d);case ef.node:}}function ln(d){!D()&&B()&&(window.addEventListener("online",()=>d(!0)),window.addEventListener("offline",()=>d(!1)))}function pn(d){D()&&"u">typeof global&&null!=global&&global.NetInfo&&global?.NetInfo.addEventListener(m=>d(m?.isConnected))}let eP={};let Jt=class Jt{static get(d){return eP[d]}static set(d,m){eP[d]=m}static delete(d){delete eP[d]}};m.BASE10=ei,m.BASE16=eo,m.BASE64=ea,m.COLON=":",m.DEFAULT_DEPTH=2,m.EMPTY_SPACE=" ",m.ENV_MAP=ef,m.MemoryStore=Jt,m.ONE_THOUSAND=1e3,m.REACT_NATIVE_PRODUCT=eh,m.RELAYER_DEFAULT_PROTOCOL="irn",m.SDK_TYPE="js",m.SLASH="/",m.TYPE_0=0,m.TYPE_1=1,m.UTF8=es,m.appendToQueryString=Ue,m.assertType=Wn,m.buildApprovedNamespaces=It,m.calcExpiry=it,m.capitalize=et,m.capitalizeWord=ke,m.createDelayedPromise=nt,m.createExpiringPromise=tt,m.decodeTypeByte=V,m.decrypt=$n,m.deriveSymKey=Un,m.deserialize=ne,m.encodeTypeByte=Se,m.encrypt=Dn,m.engineEvent=ct,m.enumify=d=>d,m.formatAccountId=ye,m.formatAccountWithChain=On,m.formatChainId=ge,m.formatExpirerTarget=se,m.formatIdTarget=st,m.formatMessage=(d,m)=>{let v=`${d.domain} wants you to sign in with your Ethereum account:`,_=be(m),E=d.statement,x=`URI: ${d.aud}`,T=`Version: ${d.version}`,A=`Chain ID: ${Ne(m)}`,j=`Nonce: ${d.nonce}`,U=`Issued At: ${d.iat}`,F=d.resources&&d.resources.length>0?`Resources:
${d.resources.map(d=>`- ${d}`).join(`
`)}`:void 0;return[v,_,"",E,"",x,T,A,j,U,F].filter(d=>null!=d).join(`
`)},m.formatMessageContext=Gn,m.formatRelayParams=He,m.formatRelayRpcUrl=zn,m.formatTopicTarget=rt,m.formatUA=De,m.formatUri=ht,m.generateKeyPair=Cn,m.generateRandomBytes32=_n,m.getAccountsChains=R,m.getAccountsFromNamespaces=Tn,m.getAddressFromAccount=he,m.getAddressesFromAccounts=Sn,m.getAppMetadata=Hn,m.getBrowserOnlineStatus=cn,m.getChainFromAccount=ve,m.getChainsFromAccounts=Ee,m.getChainsFromNamespace=L,m.getChainsFromNamespaces=An,m.getChainsFromRequiredNamespaces=In,m.getDidAddress=be,m.getDidAddressSegments=q,m.getDidChainId=Ne,m.getEnvironment=P,m.getHttpUrl=Yn,m.getInternalError=N,m.getJavascriptID=Ve,m.getJavascriptOS=je,m.getLastItems=Me,m.getNamespacedDidChainId=d=>{let m=d&&q(d);if(m)return m[2]+":"+m[3]},m.getNamespacesChains=Ye,m.getNamespacesEventsForChainId=Ge,m.getNamespacesMethodsForChainId=We,m.getNodeOnlineStatus=dn,m.getReactNativeOnlineStatus=un,m.getRelayClientMetadata=Bn,m.getRelayProtocolApi=lt,m.getRelayProtocolName=dt,m.getRequiredNamespacesFromNamespaces=At,m.getSdkError=w,m.getUniqueValues=J,m.handleDeeplinkRedirect=ut,m.hasOverlap=b,m.hashKey=jn,m.hashMessage=Vn,m.isBrowser=B,m.isCaipNamespace=oe,m.isConformingNamespaces=on,m.isExpired=at,m.isNode=re,m.isOnline=Wt,m.isProposalStruct=_t,m.isReactNative=D,m.isSessionCompatible=wt,m.isSessionStruct=Ut,m.isTypeOneEnvelope=kn,m.isUndefined=S,m.isValidAccountId=Qe,m.isValidAccounts=en,m.isValidActions=tn,m.isValidArray=$,m.isValidChainId=M,m.isValidChains=Ze,m.isValidController=jt,m.isValidErrorReason=kt,m.isValidEvent=qt,m.isValidId=$t,m.isValidNamespaceAccounts=nn,m.isValidNamespaceActions=ce,m.isValidNamespaceChains=Xe,m.isValidNamespaceMethodsOrEvents=ae,m.isValidNamespaces=rn,m.isValidNamespacesChainId=Ft,m.isValidNamespacesEvent=Ht,m.isValidNamespacesRequest=xt,m.isValidNumber=Y,m.isValidObject=z,m.isValidParams=Mt,m.isValidRelay=sn,m.isValidRelays=Dt,m.isValidRequest=Kt,m.isValidRequestExpiry=Yt,m.isValidRequiredNamespaces=Vt,m.isValidResponse=Lt,m.isValidString=h,m.isValidUrl=Ct,m.mapEntries=Zn,m.mapToObj=Jn,m.mergeArrays=O,m.normalizeNamespaces=ie,m.objToMap=Qn,m.parseAccountId=G,m.parseChainId=me,m.parseContextNames=$e,m.parseExpirerTarget=ot,m.parseNamespaceKey=Je,m.parseRelayParams=Fe,m.parseTopic=xe,m.parseUri=yt,m.serialize=Te,m.subscribeToBrowserNetworkChange=ln,m.subscribeToNetworkChange=Gt,m.subscribeToReactNativeNetworkChange=pn,m.validateDecoding=Mn,m.validateEncoding=Ae},32480:(d,m)=>{"use strict";function getFromWindow(d){let m;return"undefined"!=typeof window&&void 0!==window[d]&&(m=window[d]),m}function getFromWindowOrThrow(d){let m=getFromWindow(d);if(!m)throw Error(`${d} is not defined in Window`);return m}function getDocumentOrThrow(){return getFromWindowOrThrow("document")}function getDocument(){return getFromWindow("document")}function getNavigatorOrThrow(){return getFromWindowOrThrow("navigator")}function getNavigator(){return getFromWindow("navigator")}function getLocationOrThrow(){return getFromWindowOrThrow("location")}function getLocation(){return getFromWindow("location")}function getCryptoOrThrow(){return getFromWindowOrThrow("crypto")}function getCrypto(){return getFromWindow("crypto")}function getLocalStorageOrThrow(){return getFromWindowOrThrow("localStorage")}function getLocalStorage(){return getFromWindow("localStorage")}Object.defineProperty(m,"__esModule",{value:!0}),m.getLocalStorage=m.getLocalStorageOrThrow=m.getCrypto=m.getCryptoOrThrow=m.getLocation=m.getLocationOrThrow=m.getNavigator=m.getNavigatorOrThrow=m.getDocument=m.getDocumentOrThrow=m.getFromWindowOrThrow=m.getFromWindow=void 0,m.getFromWindow=getFromWindow,m.getFromWindowOrThrow=getFromWindowOrThrow,m.getDocumentOrThrow=getDocumentOrThrow,m.getDocument=getDocument,m.getNavigatorOrThrow=getNavigatorOrThrow,m.getNavigator=getNavigator,m.getLocationOrThrow=getLocationOrThrow,m.getLocation=getLocation,m.getCryptoOrThrow=getCryptoOrThrow,m.getCrypto=getCrypto,m.getLocalStorageOrThrow=getLocalStorageOrThrow,m.getLocalStorage=getLocalStorage},66042:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.getWindowMetadata=void 0;let _=v(32480);function getWindowMetadata(){let d,m;try{d=_.getDocumentOrThrow(),m=_.getLocationOrThrow()}catch(d){return null}function getIcons(){let v=d.getElementsByTagName("link"),_=[];for(let d=0;d<v.length;d++){let E=v[d],x=E.getAttribute("rel");if(x&&x.toLowerCase().indexOf("icon")>-1){let d=E.getAttribute("href");if(d){if(-1===d.toLowerCase().indexOf("https:")&&-1===d.toLowerCase().indexOf("http:")&&0!==d.indexOf("//")){let v=m.protocol+"//"+m.host;if(0===d.indexOf("/"))v+=d;else{let _=m.pathname.split("/");_.pop();let E=_.join("/");v+=E+"/"+d}_.push(v)}else if(0===d.indexOf("//")){let v=m.protocol+d;_.push(v)}else _.push(d)}}}return _}function getWindowMetadataOfAny(...m){let v=d.getElementsByTagName("meta");for(let d=0;d<v.length;d++){let _=v[d],E=["itemprop","property","name"].map(d=>_.getAttribute(d)).filter(d=>!!d&&m.includes(d));if(E.length&&E){let d=_.getAttribute("content");if(d)return d}}return""}function getName(){let m=getWindowMetadataOfAny("name","og:site_name","og:title","twitter:title");return m||(m=d.title),m}function getDescription(){let d=getWindowMetadataOfAny("description","og:description","twitter:description","keywords");return d}let v=getName(),E=getDescription(),x=m.origin,T=getIcons();return{description:E,url:x,icons:T,name:v}}m.getWindowMetadata=getWindowMetadata},55421:d=>{"use strict";d.exports={mask:(d,m,v,_,E)=>{for(var x=0;x<E;x++)v[_+x]=d[x]^m[3&x]},unmask:(d,m)=>{let v=d.length;for(var _=0;_<v;_++)d[_]^=m[3&_]}}},2984:(d,m,v)=>{"use strict";try{d.exports=v(51429)(__dirname)}catch(m){d.exports=v(55421)}},15544:d=>{"use strict";var m="%[a-f0-9]{2}",v=RegExp("("+m+")|([^%]+?)","gi"),_=RegExp("("+m+")+","gi");function decodeComponents(d,m){try{return[decodeURIComponent(d.join(""))]}catch(d){}if(1===d.length)return d;m=m||1;var v=d.slice(0,m),_=d.slice(m);return Array.prototype.concat.call([],decodeComponents(v),decodeComponents(_))}function decode(d){try{return decodeURIComponent(d)}catch(E){for(var m=d.match(v)||[],_=1;_<m.length;_++)m=(d=decodeComponents(m,_).join("")).match(v)||[];return d}}function customDecodeURIComponent(d){for(var m={"%FE%FF":"��","%FF%FE":"��"},v=_.exec(d);v;){try{m[v[0]]=decodeURIComponent(v[0])}catch(d){var E=decode(v[0]);E!==v[0]&&(m[v[0]]=E)}v=_.exec(d)}m["%C2"]="�";for(var x=Object.keys(m),T=0;T<x.length;T++){var A=x[T];d=d.replace(RegExp(A,"g"),m[A])}return d}d.exports=function(d){if("string"!=typeof d)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof d+"`");try{return d=d.replace(/\+/g," "),decodeURIComponent(d)}catch(m){return customDecodeURIComponent(d)}}},35259:function(d,m){"use strict";var v=this&&this.__spreadArray||function(d,m,v){if(v||2==arguments.length)for(var _,E=0,x=m.length;E<x;E++)!_&&E in m||(_||(_=Array.prototype.slice.call(m,0,E)),_[E]=m[E]);return d.concat(_||Array.prototype.slice.call(m))};Object.defineProperty(m,"__esModule",{value:!0}),m.getNodeVersion=m.detectOS=m.parseUserAgent=m.browserName=m.detect=m.ReactNativeInfo=m.BotInfo=m.SearchBotDeviceInfo=m.NodeInfo=m.BrowserInfo=void 0;var BrowserInfo=function(d,m,v){this.name=d,this.version=m,this.os=v,this.type="browser"};m.BrowserInfo=BrowserInfo;var NodeInfo=function(d){this.version=d,this.type="node",this.name="node",this.os=process.platform};m.NodeInfo=NodeInfo;var SearchBotDeviceInfo=function(d,m,v,_){this.name=d,this.version=m,this.os=v,this.bot=_,this.type="bot-device"};m.SearchBotDeviceInfo=SearchBotDeviceInfo;var BotInfo=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null};m.BotInfo=BotInfo;var ReactNativeInfo=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null};m.ReactNativeInfo=ReactNativeInfo;var _=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,E=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],x=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function detect(d){return d?parseUserAgent(d):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new ReactNativeInfo:"undefined"!=typeof navigator?parseUserAgent(navigator.userAgent):getNodeVersion()}function matchUserAgent(d){return""!==d&&E.reduce(function(m,v){var _=v[0],E=v[1];if(m)return m;var x=E.exec(d);return!!x&&[_,x]},!1)}function browserName(d){var m=matchUserAgent(d);return m?m[0]:null}function parseUserAgent(d){var m=matchUserAgent(d);if(!m)return null;var E=m[0],x=m[1];if("searchbot"===E)return new BotInfo;var T=x[1]&&x[1].split(".").join("_").split("_").slice(0,3);T?T.length<3&&(T=v(v([],T,!0),createVersionParts(3-T.length),!0)):T=[];var A=T.join("."),j=detectOS(d),U=_.exec(d);return U&&U[1]?new SearchBotDeviceInfo(E,A,j,U[1]):new BrowserInfo(E,A,j)}function detectOS(d){for(var m=0,v=x.length;m<v;m++){var _=x[m],E=_[0];if(_[1].exec(d))return E}return null}function getNodeVersion(){return"undefined"!=typeof process&&process.version?new NodeInfo(process.version.slice(1)):null}function createVersionParts(d){for(var m=[],v=0;v<d;v++)m.push("0");return m}m.detect=detect,m.browserName=browserName,m.parseUserAgent=parseUserAgent,m.detectOS=detectOS,m.getNodeVersion=getNodeVersion},84335:d=>{"use strict";var m={single_source_shortest_paths:function(d,v,_){var E,x,T,A,j,U,F,W={},K={};K[v]=0;var Q=m.PriorityQueue.make();for(Q.push(v,0);!Q.empty();)for(T in x=(E=Q.pop()).value,A=E.cost,j=d[x]||{})j.hasOwnProperty(T)&&(U=A+j[T],F=K[T],(void 0===K[T]||F>U)&&(K[T]=U,Q.push(T,U),W[T]=x));if(void 0!==_&&void 0===K[_])throw Error(["Could not find a path from ",v," to ",_,"."].join(""));return W},extract_shortest_path_from_predecessor_list:function(d,m){for(var v=[],_=m;_;)v.push(_),d[_],_=d[_];return v.reverse(),v},find_path:function(d,v,_){var E=m.single_source_shortest_paths(d,v,_);return m.extract_shortest_path_from_predecessor_list(E,_)},PriorityQueue:{make:function(d){var v,_=m.PriorityQueue,E={};for(v in d=d||{},_)_.hasOwnProperty(v)&&(E[v]=_[v]);return E.queue=[],E.sorter=d.sorter||_.default_sorter,E},default_sorter:function(d,m){return d.cost-m.cost},push:function(d,m){this.queue.push({value:d,cost:m}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};d.exports=m},96135:d=>{"use strict";d.exports=function(d){for(var m=[],v=d.length,_=0;_<v;_++){var E=d.charCodeAt(_);if(E>=55296&&E<=56319&&v>_+1){var x=d.charCodeAt(_+1);x>=56320&&x<=57343&&(E=(E-55296)*1024+x-56320+65536,_+=1)}if(E<128){m.push(E);continue}if(E<2048){m.push(E>>6|192),m.push(63&E|128);continue}if(E<55296||E>=57344&&E<65536){m.push(E>>12|224),m.push(E>>6&63|128),m.push(63&E|128);continue}if(E>=65536&&E<=1114111){m.push(E>>18|240),m.push(E>>12&63|128),m.push(E>>6&63|128),m.push(63&E|128);continue}m.push(239,191,189)}return new Uint8Array(m).buffer}},25239:d=>{"use strict";var m=Object.prototype.hasOwnProperty,v="~";function Events(){}function EE(d,m,v){this.fn=d,this.context=m,this.once=v||!1}function addListener(d,m,_,E,x){if("function"!=typeof _)throw TypeError("The listener must be a function");var T=new EE(_,E||d,x),A=v?v+m:m;return d._events[A]?d._events[A].fn?d._events[A]=[d._events[A],T]:d._events[A].push(T):(d._events[A]=T,d._eventsCount++),d}function clearEvent(d,m){0==--d._eventsCount?d._events=new Events:delete d._events[m]}function EventEmitter(){this._events=new Events,this._eventsCount=0}Object.create&&(Events.prototype=Object.create(null),new Events().__proto__||(v=!1)),EventEmitter.prototype.eventNames=function(){var d,_,E=[];if(0===this._eventsCount)return E;for(_ in d=this._events)m.call(d,_)&&E.push(v?_.slice(1):_);return Object.getOwnPropertySymbols?E.concat(Object.getOwnPropertySymbols(d)):E},EventEmitter.prototype.listeners=function(d){var m=v?v+d:d,_=this._events[m];if(!_)return[];if(_.fn)return[_.fn];for(var E=0,x=_.length,T=Array(x);E<x;E++)T[E]=_[E].fn;return T},EventEmitter.prototype.listenerCount=function(d){var m=v?v+d:d,_=this._events[m];return _?_.fn?1:_.length:0},EventEmitter.prototype.emit=function(d,m,_,E,x,T){var A=v?v+d:d;if(!this._events[A])return!1;var j,U,F=this._events[A],W=arguments.length;if(F.fn){switch(F.once&&this.removeListener(d,F.fn,void 0,!0),W){case 1:return F.fn.call(F.context),!0;case 2:return F.fn.call(F.context,m),!0;case 3:return F.fn.call(F.context,m,_),!0;case 4:return F.fn.call(F.context,m,_,E),!0;case 5:return F.fn.call(F.context,m,_,E,x),!0;case 6:return F.fn.call(F.context,m,_,E,x,T),!0}for(U=1,j=Array(W-1);U<W;U++)j[U-1]=arguments[U];F.fn.apply(F.context,j)}else{var K,Q=F.length;for(U=0;U<Q;U++)switch(F[U].once&&this.removeListener(d,F[U].fn,void 0,!0),W){case 1:F[U].fn.call(F[U].context);break;case 2:F[U].fn.call(F[U].context,m);break;case 3:F[U].fn.call(F[U].context,m,_);break;case 4:F[U].fn.call(F[U].context,m,_,E);break;default:if(!j)for(K=1,j=Array(W-1);K<W;K++)j[K-1]=arguments[K];F[U].fn.apply(F[U].context,j)}}return!0},EventEmitter.prototype.on=function(d,m,v){return addListener(this,d,m,v,!1)},EventEmitter.prototype.once=function(d,m,v){return addListener(this,d,m,v,!0)},EventEmitter.prototype.removeListener=function(d,m,_,E){var x=v?v+d:d;if(!this._events[x])return this;if(!m)return clearEvent(this,x),this;var T=this._events[x];if(T.fn)T.fn!==m||E&&!T.once||_&&T.context!==_||clearEvent(this,x);else{for(var A=0,j=[],U=T.length;A<U;A++)(T[A].fn!==m||E&&!T[A].once||_&&T[A].context!==_)&&j.push(T[A]);j.length?this._events[x]=1===j.length?j[0]:j:clearEvent(this,x)}return this},EventEmitter.prototype.removeAllListeners=function(d){var m;return d?(m=v?v+d:d,this._events[m]&&clearEvent(this,m)):(this._events=new Events,this._eventsCount=0),this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.addListener=EventEmitter.prototype.on,EventEmitter.prefixed=v,EventEmitter.EventEmitter=EventEmitter,d.exports=EventEmitter},41215:d=>{"use strict";d.exports=function(d,m){for(var v={},_=Object.keys(d),E=Array.isArray(m),x=0;x<_.length;x++){var T=_[x],A=d[T];(E?-1!==m.indexOf(T):m(T,A,d))&&(v[T]=A)}return v}},50404:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(44889),E=v(77874);let Encoder=class Encoder{constructor(d,m,v){this.name=d,this.prefix=m,this.baseEncode=v}encode(d){if(d instanceof Uint8Array)return`${this.prefix}${this.baseEncode(d)}`;throw Error("Unknown type, must be binary type")}};let Decoder=class Decoder{constructor(d,m,v){if(this.name=d,this.prefix=m,void 0===m.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=m.codePointAt(0),this.baseDecode=v}decode(d){if("string"==typeof d){if(d.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(d)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(d.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(d){return or(this,d)}};let ComposedDecoder=class ComposedDecoder{constructor(d){this.decoders=d}or(d){return or(this,d)}decode(d){let m=d[0],v=this.decoders[m];if(v)return v.decode(d);throw RangeError(`Unable to decode multibase string ${JSON.stringify(d)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}};let or=(d,m)=>new ComposedDecoder({...d.decoders||{[d.prefix]:d},...m.decoders||{[m.prefix]:m}});let Codec=class Codec{constructor(d,m,v,_){this.name=d,this.prefix=m,this.baseEncode=v,this.baseDecode=_,this.encoder=new Encoder(d,m,v),this.decoder=new Decoder(d,m,_)}encode(d){return this.encoder.encode(d)}decode(d){return this.decoder.decode(d)}};let from=({name:d,prefix:m,encode:v,decode:_})=>new Codec(d,m,v,_),decode=(d,m,v,_)=>{let E={};for(let d=0;d<m.length;++d)E[m[d]]=d;let x=d.length;for(;"="===d[x-1];)--x;let T=new Uint8Array(x*v/8|0),A=0,j=0,U=0;for(let m=0;m<x;++m){let x=E[d[m]];if(void 0===x)throw SyntaxError(`Non-${_} character`);j=j<<v|x,(A+=v)>=8&&(A-=8,T[U++]=255&j>>A)}if(A>=v||255&j<<8-A)throw SyntaxError("Unexpected end of data");return T},encode=(d,m,v)=>{let _="="===m[m.length-1],E=(1<<v)-1,x="",T=0,A=0;for(let _=0;_<d.length;++_)for(A=A<<8|d[_],T+=8;T>v;)T-=v,x+=m[E&A>>T];if(T&&(x+=m[E&A<<v-T]),_)for(;x.length*v&7;)x+="=";return x};m.Codec=Codec,m.baseX=({prefix:d,name:m,alphabet:v})=>{let{encode:x,decode:T}=_(v,m);return from({prefix:d,name:m,encode:x,decode:d=>E.coerce(T(d))})},m.from=from,m.or=or,m.rfc4648=({name:d,prefix:m,bitsPerChar:v,alphabet:_})=>from({prefix:m,name:d,encode:d=>encode(d,_,v),decode:m=>decode(m,_,v,d)})},1947:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404);let E=_.baseX({prefix:"9",name:"base10",alphabet:"0123456789"});m.base10=E},66110:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404);let E=_.rfc4648({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),x=_.rfc4648({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});m.base16=E,m.base16upper=x},50068:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404);let E=_.rfc4648({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});m.base2=E},75562:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404);let E=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),x=E.reduce((d,m,v)=>(d[v]=m,d),[]),T=E.reduce((d,m,v)=>(d[m.codePointAt(0)]=v,d),[]);function encode(d){return d.reduce((d,m)=>d+=x[m],"")}function decode(d){let m=[];for(let v of d){let d=T[v.codePointAt(0)];if(void 0===d)throw Error(`Non-base256emoji character: ${v}`);m.push(d)}return new Uint8Array(m)}let A=_.from({prefix:"\uD83D\uDE80",name:"base256emoji",encode,decode});m.base256emoji=A},65663:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404);let E=_.rfc4648({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),x=_.rfc4648({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),T=_.rfc4648({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),A=_.rfc4648({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),j=_.rfc4648({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),U=_.rfc4648({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),F=_.rfc4648({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),W=_.rfc4648({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),K=_.rfc4648({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});m.base32=E,m.base32hex=j,m.base32hexpad=F,m.base32hexpadupper=W,m.base32hexupper=U,m.base32pad=T,m.base32padupper=A,m.base32upper=x,m.base32z=K},6914:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404);let E=_.baseX({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),x=_.baseX({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});m.base36=E,m.base36upper=x},1801:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404);let E=_.baseX({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),x=_.baseX({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});m.base58btc=E,m.base58flickr=x},7136:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404);let E=_.rfc4648({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),x=_.rfc4648({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),T=_.rfc4648({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),A=_.rfc4648({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});m.base64=E,m.base64pad=x,m.base64url=T,m.base64urlpad=A},73100:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404);let E=_.rfc4648({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});m.base8=E},90993:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(50404),E=v(77874);let x=_.from({prefix:"\x00",name:"identity",encode:d=>E.toString(d),decode:d=>E.fromString(d)});m.identity=x},80570:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(90993),E=v(50068),x=v(73100),T=v(1947),A=v(66110),j=v(65663),U=v(6914),F=v(1801),W=v(7136),K=v(75562),Q=v(99972),X=v(65834),ee=v(38479),er=v(74853);v(39050);var ei=v(23665),eo=v(58076),ea=v(85294),es=v(84602),el=v(77874);let ec={..._,...E,...x,...T,...A,...j,...U,...F,...W,...K},eu={...Q,...X};m.CID=ei.CID,m.hasher=eo,m.digest=ea,m.varint=es,m.bytes=el,m.bases=ec,m.codecs={raw:ee,json:er},m.hashes=eu},77874:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});let v=new Uint8Array(0);m.coerce=d=>{if(d instanceof Uint8Array&&"Uint8Array"===d.constructor.name)return d;if(d instanceof ArrayBuffer)return new Uint8Array(d);if(ArrayBuffer.isView(d))return new Uint8Array(d.buffer,d.byteOffset,d.byteLength);throw Error("Unknown type, must be binary type")},m.empty=v,m.equals=(d,m)=>{if(d===m)return!0;if(d.byteLength!==m.byteLength)return!1;for(let v=0;v<d.byteLength;v++)if(d[v]!==m[v])return!1;return!0},m.fromHex=d=>{let m=d.match(/../g);return m?new Uint8Array(m.map(d=>parseInt(d,16))):v},m.fromString=d=>new TextEncoder().encode(d),m.isBinary=d=>d instanceof ArrayBuffer||ArrayBuffer.isView(d),m.toHex=d=>d.reduce((d,m)=>d+m.toString(16).padStart(2,"0"),""),m.toString=d=>new TextDecoder().decode(d)},23665:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(84602),E=v(85294),x=v(1801),T=v(65663),A=v(77874);let CID=class CID{constructor(d,m,v,_){this.code=m,this.version=d,this.multihash=v,this.bytes=_,this.byteOffset=_.byteOffset,this.byteLength=_.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:K,byteLength:K,code:W,version:W,multihash:W,bytes:W,_baseCache:K,asCID:K})}toV0(){if(0===this.version)return this;{let{code:d,multihash:m}=this;if(d!==j)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(m.code!==U)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return CID.createV0(m)}}toV1(){switch(this.version){case 0:{let{code:d,digest:m}=this.multihash,v=E.create(d,m);return CID.createV1(this.code,v)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(d){return d&&this.code===d.code&&this.version===d.version&&E.equals(this.multihash,d.multihash)}toString(d){let{bytes:m,version:v,_baseCache:_}=this;return 0===v?toStringV0(m,_,d||x.base58btc.encoder):toStringV1(m,_,d||T.base32.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(d){return deprecate(/^0\.0/,Q),!!(d&&(d[F]||d.asCID===d))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(d){if(d instanceof CID)return d;if(null!=d&&d.asCID===d){let{version:m,code:v,multihash:_,bytes:E}=d;return new CID(m,v,_,E||encodeCID(m,v,_.bytes))}if(null==d||!0!==d[F])return null;{let{version:m,multihash:v,code:_}=d,x=E.decode(v);return CID.create(m,_,x)}}static create(d,m,v){if("number"!=typeof m)throw Error("String codecs are no longer supported");switch(d){case 0:if(m===j)return new CID(d,m,v,v.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${j}) block encoding`);case 1:{let _=encodeCID(d,m,v.bytes);return new CID(d,m,v,_)}default:throw Error("Invalid version")}}static createV0(d){return CID.create(0,j,d)}static createV1(d,m){return CID.create(1,d,m)}static decode(d){let[m,v]=CID.decodeFirst(d);if(v.length)throw Error("Incorrect length");return m}static decodeFirst(d){let m=CID.inspectBytes(d),v=m.size-m.multihashSize,_=A.coerce(d.subarray(v,v+m.multihashSize));if(_.byteLength!==m.multihashSize)throw Error("Incorrect length");let x=_.subarray(m.multihashSize-m.digestSize),T=new E.Digest(m.multihashCode,m.digestSize,x,_),j=0===m.version?CID.createV0(T):CID.createV1(m.codec,T);return[j,d.subarray(m.size)]}static inspectBytes(d){let m=0,next=()=>{let[v,E]=_.decode(d.subarray(m));return m+=E,v},v=next(),E=j;if(18===v?(v=0,m=0):1===v&&(E=next()),0!==v&&1!==v)throw RangeError(`Invalid CID version ${v}`);let x=m,T=next(),A=next(),U=m+A;return{version:v,codec:E,multihashCode:T,digestSize:A,multihashSize:U-x,size:U}}static parse(d,m){let[v,_]=parseCIDtoBytes(d,m),E=CID.decode(_);return E._baseCache.set(v,d),E}};let parseCIDtoBytes=(d,m)=>{switch(d[0]){case"Q":{let v=m||x.base58btc;return[x.base58btc.prefix,v.decode(`${x.base58btc.prefix}${d}`)]}case x.base58btc.prefix:{let v=m||x.base58btc;return[x.base58btc.prefix,v.decode(d)]}case T.base32.prefix:{let v=m||T.base32;return[T.base32.prefix,v.decode(d)]}default:if(null==m)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[d[0],m.decode(d)]}},toStringV0=(d,m,v)=>{let{prefix:_}=v;if(_!==x.base58btc.prefix)throw Error(`Cannot string encode V0 in ${v.name} encoding`);let E=m.get(_);if(null!=E)return E;{let E=v.encode(d).slice(1);return m.set(_,E),E}},toStringV1=(d,m,v)=>{let{prefix:_}=v,E=m.get(_);if(null!=E)return E;{let E=v.encode(d);return m.set(_,E),E}},j=112,U=18,encodeCID=(d,m,v)=>{let E=_.encodingLength(d),x=E+_.encodingLength(m),T=new Uint8Array(x+v.byteLength);return _.encodeTo(d,T,0),_.encodeTo(m,T,E),T.set(v,x),T},F=Symbol.for("@ipld/js-cid/CID"),W={writable:!1,configurable:!1,enumerable:!0},K={writable:!1,enumerable:!1,configurable:!1},deprecate=(d,m)=>{if(d.test("0.0.0-dev"))console.warn(m);else throw Error(m)},Q=`CID.isCID(v) is deprecated and will be removed in the next major release.
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
`;m.CID=CID},74853:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});let v=new TextEncoder,_=new TextDecoder;m.code=512,m.decode=d=>JSON.parse(_.decode(d)),m.encode=d=>v.encode(JSON.stringify(d)),m.name="json"},38479:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(77874);m.code=85,m.decode=d=>_.coerce(d),m.encode=d=>_.coerce(d),m.name="raw"},85294:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(77874),E=v(84602);let Digest=class Digest{constructor(d,m,v,_){this.code=d,this.size=m,this.digest=v,this.bytes=_}};m.Digest=Digest,m.create=(d,m)=>{let v=m.byteLength,_=E.encodingLength(d),x=_+E.encodingLength(v),T=new Uint8Array(x+v);return E.encodeTo(d,T,0),E.encodeTo(v,T,_),T.set(m,x),new Digest(d,v,m,T)},m.decode=d=>{let m=_.coerce(d),[v,x]=E.decode(m),[T,A]=E.decode(m.subarray(x)),j=m.subarray(x+A);if(j.byteLength!==T)throw Error("Incorrect length");return new Digest(v,T,j,m)},m.equals=(d,m)=>d===m||d.code===m.code&&d.size===m.size&&_.equals(d.bytes,m.bytes)},58076:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(85294);let Hasher=class Hasher{constructor(d,m,v){this.name=d,this.code=m,this.encode=v}digest(d){if(d instanceof Uint8Array){let m=this.encode(d);return m instanceof Uint8Array?_.create(this.code,m):m.then(d=>_.create(this.code,d))}throw Error("Unknown type, must be binary type")}};m.Hasher=Hasher,m.from=({name:d,code:m,encode:v})=>new Hasher(d,m,v)},65834:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(77874),E=v(85294);let x=_.coerce;m.identity={code:0,name:"identity",encode:x,digest:d=>E.create(0,x(d))}},99972:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(6113),E=v(58076),x=v(77874),T=function(d){return d&&"object"==typeof d&&"default"in d?d:{default:d}}(_);let A=E.from({name:"sha2-256",code:18,encode:d=>x.coerce(T.default.createHash("sha256").update(d).digest())}),j=E.from({name:"sha2-512",code:19,encode:d=>x.coerce(T.default.createHash("sha512").update(d).digest())});m.sha256=A,m.sha512=j},39050:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(23665),E=v(84602),x=v(77874),T=v(58076),A=v(85294);m.CID=_.CID,m.varint=E,m.bytes=x,m.hasher=T,m.digest=A},84602:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(87641);m.decode=(d,m=0)=>{let v=_.decode(d,m);return[v,_.decode.bytes]},m.encodeTo=(d,m,v=0)=>(_.encode(d,m,v),m),m.encodingLength=d=>_.encodingLength(d)},44889:d=>{"use strict";d.exports=function(d,m){if(d.length>=255)throw TypeError("Alphabet too long");for(var v=new Uint8Array(256),_=0;_<v.length;_++)v[_]=255;for(var E=0;E<d.length;E++){var x=d.charAt(E),T=x.charCodeAt(0);if(255!==v[T])throw TypeError(x+" is ambiguous");v[T]=E}var A=d.length,j=d.charAt(0),U=Math.log(A)/Math.log(256),F=Math.log(256)/Math.log(A);function decodeUnsafe(d){if("string"!=typeof d)throw TypeError("Expected String");if(0===d.length)return new Uint8Array;var m=0;if(" "!==d[0]){for(var _=0,E=0;d[m]===j;)_++,m++;for(var x=(d.length-m)*U+1>>>0,T=new Uint8Array(x);d[m];){var F=v[d.charCodeAt(m)];if(255===F)return;for(var W=0,K=x-1;(0!==F||W<E)&&-1!==K;K--,W++)F+=A*T[K]>>>0,T[K]=F%256>>>0,F=F/256>>>0;if(0!==F)throw Error("Non-zero carry");E=W,m++}if(" "!==d[m]){for(var Q=x-E;Q!==x&&0===T[Q];)Q++;for(var X=new Uint8Array(_+(x-Q)),ee=_;Q!==x;)X[ee++]=T[Q++];return X}}}function decode(d){var v=decodeUnsafe(d);if(v)return v;throw Error(`Non-${m} character`)}return{encode:function(m){if(m instanceof Uint8Array||(ArrayBuffer.isView(m)?m=new Uint8Array(m.buffer,m.byteOffset,m.byteLength):Array.isArray(m)&&(m=Uint8Array.from(m))),!(m instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===m.length)return"";for(var v=0,_=0,E=0,x=m.length;E!==x&&0===m[E];)E++,v++;for(var T=(x-E)*F+1>>>0,U=new Uint8Array(T);E!==x;){for(var W=m[E],K=0,Q=T-1;(0!==W||K<_)&&-1!==Q;Q--,K++)W+=256*U[Q]>>>0,U[Q]=W%A>>>0,W=W/A>>>0;if(0!==W)throw Error("Non-zero carry");_=K,E++}for(var X=T-_;X!==T&&0===U[X];)X++;for(var ee=j.repeat(v);X<T;++X)ee+=d.charAt(U[X]);return ee},decodeUnsafe:decodeUnsafe,decode:decode}}},87641:d=>{"use strict";var m=encode;function encode(d,m,v){m=m||[];for(var _=v=v||0;d>=2147483648;)m[v++]=255&d|128,d/=128;for(;-128&d;)m[v++]=255&d|128,d>>>=7;return m[v]=0|d,encode.bytes=v-_+1,m}var v=read;function read(d,m){var v,_=0,m=m||0,E=0,x=m,T=d.length;do{if(x>=T)throw read.bytes=0,RangeError("Could not decode varint");v=d[x++],_+=E<28?(127&v)<<E:(127&v)*Math.pow(2,E),E+=7}while(v>=128);return read.bytes=x-m,_}d.exports={encode:m,decode:v,encodingLength:function(d){return d<128?1:d<16384?2:d<2097152?3:d<268435456?4:d<34359738368?5:d<4398046511104?6:d<562949953421312?7:d<72057594037927940?8:d<0x7fffffffffffffff?9:10}}},66028:d=>{d.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},38101:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"addBasePath",{enumerable:!0,get:function(){return addBasePath}});let _=v(35890),E=v(78795);function addBasePath(d,m){return(0,E.normalizePathTrailingSlash)((0,_.addPathPrefix)(d,""))}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},31335:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"addLocale",{enumerable:!0,get:function(){return addLocale}}),v(78795);let addLocale=function(d){for(var m=arguments.length,v=Array(m>1?m-1:0),_=1;_<m;_++)v[_-1]=arguments[_];return d};("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},41736:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"callServer",{enumerable:!0,get:function(){return callServer}});let _=v(42927);async function callServer(d,m){let v=(0,_.getServerActionDispatcher)();if(!v)throw Error("Invariant: missing action dispatcher.");return new Promise((_,E)=>{v({actionId:d,actionArgs:m,resolve:_,reject:E})})}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},84540:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"AppRouterAnnouncer",{enumerable:!0,get:function(){return AppRouterAnnouncer}});let _=v(80404),E=v(76281),x="next-route-announcer";function getAnnouncerNode(){var d;let m=document.getElementsByName(x)[0];if(null==m?void 0:null==(d=m.shadowRoot)?void 0:d.childNodes[0])return m.shadowRoot.childNodes[0];{let d=document.createElement(x);d.style.cssText="position:absolute";let m=document.createElement("div");m.ariaLive="assertive",m.id="__next-route-announcer__",m.role="alert",m.style.cssText="position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";let v=d.attachShadow({mode:"open"});return v.appendChild(m),document.body.appendChild(d),m}}function AppRouterAnnouncer(d){let{tree:m}=d,[v,T]=(0,_.useState)(null);(0,_.useEffect)(()=>{let d=getAnnouncerNode();return T(d),()=>{let d=document.getElementsByTagName(x)[0];(null==d?void 0:d.isConnected)&&document.body.removeChild(d)}},[]);let[A,j]=(0,_.useState)(""),U=(0,_.useRef)();return(0,_.useEffect)(()=>{let d="";if(document.title)d=document.title;else{let m=document.querySelector("h1");m&&(d=m.innerText||m.textContent||"")}void 0!==U.current&&U.current!==d&&j(d),U.current=d},[m]),v?(0,E.createPortal)(A,v):null}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},23846:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{RSC:function(){return v},ACTION:function(){return _},NEXT_ROUTER_STATE_TREE:function(){return E},NEXT_ROUTER_PREFETCH:function(){return x},NEXT_URL:function(){return T},RSC_CONTENT_TYPE_HEADER:function(){return A},RSC_VARY_HEADER:function(){return j},FLIGHT_PARAMETERS:function(){return U},NEXT_RSC_UNION_QUERY:function(){return F}});let v="RSC",_="Next-Action",E="Next-Router-State-Tree",x="Next-Router-Prefetch",T="Next-Url",A="text/x-component",j=v+", "+E+", "+x+", "+T,U=[[v],[E],[x]],F="_rsc";("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},42927:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{getServerActionDispatcher:function(){return getServerActionDispatcher},urlToUrlWithoutFlightMarker:function(){return urlToUrlWithoutFlightMarker},default:function(){return AppRouter}});let _=v(19153),E=_._(v(80404)),x=v(12919),T=v(66172),A=v(1770),j=v(23210),U=v(30335),F=v(46454),W=v(14169),K=v(26280),Q=v(3896),X=v(38101),ee=v(84540),er=v(68437),ei=v(12814),eo=v(12946),ea=v(23846),es=v(96060),el=v(19378),ec=null,eu=null;function getServerActionDispatcher(){return eu}let ed={refresh:()=>{}};function urlToUrlWithoutFlightMarker(d){let m=new URL(d,location.origin);return m.searchParams.delete(ea.NEXT_RSC_UNION_QUERY),m}function isExternalURL(d){return d.origin!==window.location.origin}function HistoryUpdater(d){let{tree:m,pushRef:v,canonicalUrl:_,sync:x}=d;return(0,E.useInsertionEffect)(()=>{let d={__NA:!0,tree:m};v.pendingPush&&(0,j.createHrefFromUrl)(new URL(window.location.href))!==_?(v.pendingPush=!1,window.history.pushState(d,"",_)):window.history.replaceState(d,"",_),x()},[m,v,_,x]),null}let createEmptyCacheNode=()=>({status:x.CacheStates.LAZY_INITIALIZED,data:null,subTreeData:null,parallelRoutes:new Map});function useServerActionDispatcher(d){let m=(0,E.useCallback)(m=>{(0,E.startTransition)(()=>{d({...m,type:A.ACTION_SERVER_ACTION,mutable:{globalMutable:ed},cache:createEmptyCacheNode()})})},[d]);eu=m}function useChangeByServerResponse(d){return(0,E.useCallback)((m,v,_)=>{(0,E.startTransition)(()=>{d({type:A.ACTION_SERVER_PATCH,flightData:v,previousTree:m,overrideCanonicalUrl:_,cache:createEmptyCacheNode(),mutable:{globalMutable:ed}})})},[d])}function useNavigate(d){return(0,E.useCallback)((m,v,_,E)=>{let x=new URL((0,X.addBasePath)(m),location.href);return ed.pendingNavigatePath=(0,j.createHrefFromUrl)(x),d({type:A.ACTION_NAVIGATE,url:x,isExternalUrl:isExternalURL(x),locationSearch:location.search,forceOptimisticNavigation:_,shouldScroll:null==E||E,navigateType:v,cache:createEmptyCacheNode(),mutable:{globalMutable:ed}})},[d])}function Router(d){let{buildId:m,initialHead:v,initialTree:_,initialCanonicalUrl:j,children:W,assetPrefix:ea}=d,eu=(0,E.useMemo)(()=>(0,K.createInitialRouterState)({buildId:m,children:W,initialCanonicalUrl:j,initialTree:_,initialParallelRoutes:ec,isServer:!0,location:null,initialHead:v}),[m,W,j,_,v]),[{tree:eh,cache:ef,prefetchCache:ep,pushRef:eg,focusAndScrollRef:em,canonicalUrl:eb,nextUrl:ey},ew,ev]=(0,F.useReducerWithReduxDevtools)(T.reducer,eu);(0,E.useEffect)(()=>{ec=null},[]);let{searchParams:e_,pathname:eC}=(0,E.useMemo)(()=>{let d=new URL(eb,"http://n");return{searchParams:d.searchParams,pathname:(0,el.hasBasePath)(d.pathname)?(0,es.removeBasePath)(d.pathname):d.pathname}},[eb]),eE=useChangeByServerResponse(ew),ex=useNavigate(ew);useServerActionDispatcher(ew);let eS=(0,E.useMemo)(()=>{let d={back:()=>window.history.back(),forward:()=>window.history.forward(),prefetch:(d,m)=>{if((0,Q.isBot)(window.navigator.userAgent))return;let v=new URL((0,X.addBasePath)(d),location.href);isExternalURL(v)||(0,E.startTransition)(()=>{var d;ew({type:A.ACTION_PREFETCH,url:v,kind:null!=(d=null==m?void 0:m.kind)?d:A.PrefetchKind.FULL})})},replace:(d,m)=>{void 0===m&&(m={}),(0,E.startTransition)(()=>{var v;ex(d,"replace",!!m.forceOptimisticNavigation,null==(v=m.scroll)||v)})},push:(d,m)=>{void 0===m&&(m={}),(0,E.startTransition)(()=>{var v;ex(d,"push",!!m.forceOptimisticNavigation,null==(v=m.scroll)||v)})},refresh:()=>{(0,E.startTransition)(()=>{ew({type:A.ACTION_REFRESH,cache:createEmptyCacheNode(),mutable:{globalMutable:ed},origin:window.location.origin})})},fastRefresh:()=>{throw Error("fastRefresh can only be used in development mode. Please use refresh instead.")}};return d},[ew,ex]);if((0,E.useEffect)(()=>{window.next&&(window.next.router=eS)},[eS]),(0,E.useEffect)(()=>{ed.refresh=eS.refresh},[eS.refresh]),(0,E.useEffect)(()=>{function handlePageShow(d){var m;d.persisted&&(null==(m=window.history.state)?void 0:m.tree)&&ew({type:A.ACTION_RESTORE,url:new URL(window.location.href),tree:window.history.state.tree})}return window.addEventListener("pageshow",handlePageShow),()=>{window.removeEventListener("pageshow",handlePageShow)}},[ew]),eg.mpaNavigation){if(ed.pendingMpaPath!==eb){let d=window.location;eg.pendingPush?d.assign(eb):d.replace(eb),ed.pendingMpaPath=eb}(0,E.use)((0,eo.createInfinitePromise)())}let eP=(0,E.useCallback)(d=>{let{state:m}=d;if(m){if(!m.__NA){window.location.reload();return}(0,E.startTransition)(()=>{ew({type:A.ACTION_RESTORE,url:new URL(window.location.href),tree:m.tree})})}},[ew]);(0,E.useEffect)(()=>(window.addEventListener("popstate",eP),()=>{window.removeEventListener("popstate",eP)}),[eP]);let eO=(0,E.useMemo)(()=>(0,ei.findHeadInCache)(ef,eh[1]),[ef,eh]),ek=E.default.createElement(er.RedirectBoundary,null,eO,ef.subTreeData,E.default.createElement(ee.AppRouterAnnouncer,{tree:eh}));return E.default.createElement(E.default.Fragment,null,E.default.createElement(HistoryUpdater,{tree:eh,pushRef:eg,canonicalUrl:eb,sync:ev}),E.default.createElement(U.PathnameContext.Provider,{value:eC},E.default.createElement(U.SearchParamsContext.Provider,{value:e_},E.default.createElement(x.GlobalLayoutRouterContext.Provider,{value:{buildId:m,changeByServerResponse:eE,tree:eh,focusAndScrollRef:em,nextUrl:ey}},E.default.createElement(x.AppRouterContext.Provider,{value:eS},E.default.createElement(x.LayoutRouterContext.Provider,{value:{childNodes:ef.parallelRoutes,tree:eh,url:eb}},ek))))))}function AppRouter(d){let{globalErrorComponent:m,...v}=d;return E.default.createElement(W.ErrorBoundary,{errorComponent:m},E.default.createElement(Router,v))}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},49775:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"bailoutToClientRendering",{enumerable:!0,get:function(){return bailoutToClientRendering}});let _=v(3374),E=v(94749);function bailoutToClientRendering(){let d=E.staticGenerationAsyncStorage.getStore();return null!=d&&!!d.forceStatic||((null==d?void 0:d.isStaticGeneration)&&(0,_.throwWithNoSSR)(),!1)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},40912:(d,m,v)=>{"use strict";function clientHookInServerComponentError(d){}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"clientHookInServerComponentError",{enumerable:!0,get:function(){return clientHookInServerComponentError}}),v(94616),v(80404),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},14169:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{ErrorBoundaryHandler:function(){return ErrorBoundaryHandler},GlobalError:function(){return GlobalError},default:function(){return A},ErrorBoundary:function(){return ErrorBoundary}});let _=v(94616),E=_._(v(80404)),x=v(16009),T={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{fontSize:"14px",fontWeight:400,lineHeight:"28px",margin:"0 8px"}};function HandleISRError(d){let{error:m}=d;if("function"==typeof fetch.__nextGetStaticStore){var v;let d=null==(v=fetch.__nextGetStaticStore())?void 0:v.getStore();if((null==d?void 0:d.isRevalidate)||(null==d?void 0:d.isStaticGeneration))throw console.error(m),m}return null}let ErrorBoundaryHandler=class ErrorBoundaryHandler extends E.default.Component{static getDerivedStateFromError(d){return{error:d}}static getDerivedStateFromProps(d,m){return d.pathname!==m.previousPathname&&m.error?{error:null,previousPathname:d.pathname}:{error:m.error,previousPathname:d.pathname}}render(){return this.state.error?E.default.createElement(E.default.Fragment,null,E.default.createElement(HandleISRError,{error:this.state.error}),this.props.errorStyles,this.props.errorScripts,E.default.createElement(this.props.errorComponent,{error:this.state.error,reset:this.reset})):this.props.children}constructor(d){super(d),this.reset=()=>{this.setState({error:null})},this.state={error:null,previousPathname:this.props.pathname}}};function GlobalError(d){let{error:m}=d,v=null==m?void 0:m.digest;return E.default.createElement("html",{id:"__next_error__"},E.default.createElement("head",null),E.default.createElement("body",null,E.default.createElement(HandleISRError,{error:m}),E.default.createElement("div",{style:T.error},E.default.createElement("div",null,E.default.createElement("h2",{style:T.text},"Application error: a "+(v?"server":"client")+"-side exception has occurred (see the "+(v?"server logs":"browser console")+" for more information)."),v?E.default.createElement("p",{style:T.text},"Digest: "+v):null))))}let A=GlobalError;function ErrorBoundary(d){let{errorComponent:m,errorStyles:v,errorScripts:_,children:T}=d,A=(0,x.usePathname)();return m?E.default.createElement(ErrorBoundaryHandler,{pathname:A,errorComponent:m,errorStyles:v,errorScripts:_},T):E.default.createElement(E.default.Fragment,null,T)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},26938:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{DYNAMIC_ERROR_CODE:function(){return v},DynamicServerError:function(){return DynamicServerError}});let v="DYNAMIC_SERVER_USAGE";let DynamicServerError=class DynamicServerError extends Error{constructor(d){super("Dynamic server usage: "+d),this.digest=v}};("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},12946:(d,m)=>{"use strict";let v;function createInfinitePromise(){return v||(v=new Promise(()=>{})),v}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"createInfinitePromise",{enumerable:!0,get:function(){return createInfinitePromise}}),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},70295:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"default",{enumerable:!0,get:function(){return OuterLayoutRouter}}),v(94616);let _=v(19153),E=_._(v(80404));v(76281);let x=v(12919),T=v(79242),A=v(12946),j=v(14169),U=v(9494),F=v(41729),W=v(68437),K=v(27294),Q=v(36905),X=v(32408),ee=v(38069);function walkAddRefetch(d,m){if(d){let[v,_]=d,E=2===d.length;if((0,U.matchSegment)(m[0],v)&&m[1].hasOwnProperty(_)){if(E){let d=walkAddRefetch(void 0,m[1][_]);return[m[0],{...m[1],[_]:[d[0],d[1],d[2],"refetch"]}]}return[m[0],{...m[1],[_]:walkAddRefetch(d.slice(2),m[1][_])}]}}return m}function findDOMNode(d){return null}let er=["bottom","height","left","right","top","width","x","y"];function shouldSkipElement(d){if(["sticky","fixed"].includes(getComputedStyle(d).position))return!0;let m=d.getBoundingClientRect();return er.every(d=>0===m[d])}function topOfElementInViewport(d,m){let v=d.getBoundingClientRect();return v.top>=0&&v.top<=m}function getHashFragmentDomNode(d){var m;return"top"===d?document.body:null!=(m=document.getElementById(d))?m:document.getElementsByName(d)[0]}let InnerScrollAndFocusHandler=class InnerScrollAndFocusHandler extends E.default.Component{componentDidMount(){this.handlePotentialScroll()}componentDidUpdate(){this.props.focusAndScrollRef.apply&&this.handlePotentialScroll()}render(){return this.props.children}constructor(...d){super(...d),this.handlePotentialScroll=()=>{let{focusAndScrollRef:d,segmentPath:m}=this.props;if(d.apply){if(0!==d.segmentPaths.length&&!d.segmentPaths.some(d=>m.every((m,v)=>(0,U.matchSegment)(m,d[v]))))return;let v=null,_=d.hashFragment;if(_&&(v=getHashFragmentDomNode(_)),v||(v=findDOMNode(this)),!(v instanceof Element))return;for(;!(v instanceof HTMLElement)||shouldSkipElement(v);){if(null===v.nextElementSibling)return;v=v.nextElementSibling}d.apply=!1,d.hashFragment=null,d.segmentPaths=[],(0,F.handleSmoothScroll)(()=>{if(_){v.scrollIntoView();return}let d=document.documentElement,m=d.clientHeight;!topOfElementInViewport(v,m)&&(d.scrollTop=0,topOfElementInViewport(v,m)||v.scrollIntoView())},{dontForceLayout:!0,onlyHashChange:d.onlyHashChange}),d.onlyHashChange=!1,v.focus()}}}};function ScrollAndFocusHandler(d){let{segmentPath:m,children:v}=d,_=(0,E.useContext)(x.GlobalLayoutRouterContext);if(!_)throw Error("invariant global layout router not mounted");return E.default.createElement(InnerScrollAndFocusHandler,{segmentPath:m,focusAndScrollRef:_.focusAndScrollRef},v)}function InnerLayoutRouter(d){let{parallelRouterKey:m,url:v,childNodes:_,childProp:j,segmentPath:U,tree:F,cacheKey:W}=d,K=(0,E.useContext)(x.GlobalLayoutRouterContext);if(!K)throw Error("invariant global layout router not mounted");let{buildId:Q,changeByServerResponse:X,tree:er}=K,ei=_.get(W);if(j&&null!==j.current&&(ei?ei.status===x.CacheStates.LAZY_INITIALIZED&&(ei.status=x.CacheStates.READY,ei.subTreeData=j.current):(ei={status:x.CacheStates.READY,data:null,subTreeData:j.current,parallelRoutes:new Map},_.set(W,ei))),!ei||ei.status===x.CacheStates.LAZY_INITIALIZED){let d=walkAddRefetch(["",...U],er);ei={status:x.CacheStates.DATA_FETCH,data:(0,ee.createRecordFromThenable)((0,T.fetchServerResponse)(new URL(v,location.origin),d,K.nextUrl,Q)),subTreeData:null,head:ei&&ei.status===x.CacheStates.LAZY_INITIALIZED?ei.head:void 0,parallelRoutes:ei&&ei.status===x.CacheStates.LAZY_INITIALIZED?ei.parallelRoutes:new Map},_.set(W,ei)}if(!ei)throw Error("Child node should always exist");if(ei.subTreeData&&ei.data)throw Error("Child node should not have both subTreeData and data");if(ei.data){let[d,m]=(0,E.use)(ei.data);ei.data=null,setTimeout(()=>{(0,E.startTransition)(()=>{X(er,d,m)})}),(0,E.use)((0,A.createInfinitePromise)())}ei.subTreeData||(0,E.use)((0,A.createInfinitePromise)());let eo=E.default.createElement(x.LayoutRouterContext.Provider,{value:{tree:F[1][m],childNodes:ei.parallelRoutes,url:v}},ei.subTreeData);return eo}function LoadingBoundary(d){let{children:m,loading:v,loadingStyles:_,loadingScripts:x,hasLoading:T}=d;return T?E.default.createElement(E.Suspense,{fallback:E.default.createElement(E.default.Fragment,null,_,x,v)},m):E.default.createElement(E.default.Fragment,null,m)}function OuterLayoutRouter(d){let{parallelRouterKey:m,segmentPath:v,childProp:_,error:T,errorStyles:A,errorScripts:F,templateStyles:ee,templateScripts:er,loading:ei,loadingStyles:eo,loadingScripts:ea,hasLoading:es,template:el,notFound:ec,notFoundStyles:eu,styles:ed}=d,eh=(0,E.useContext)(x.LayoutRouterContext);if(!eh)throw Error("invariant expected layout router to be mounted");let{childNodes:ef,tree:ep,url:eg}=eh,em=ef.get(m);em||(em=new Map,ef.set(m,em));let eb=ep[1][m][0],ey=_.segment,ew=(0,Q.getSegmentValue)(eb),ev=[eb];return E.default.createElement(E.default.Fragment,null,ed,ev.map(d=>{let ed=(0,U.matchSegment)(d,ey),eh=(0,Q.getSegmentValue)(d),ef=(0,X.createRouterCacheKey)(d);return E.default.createElement(x.TemplateContext.Provider,{key:(0,X.createRouterCacheKey)(d,!0),value:E.default.createElement(ScrollAndFocusHandler,{segmentPath:v},E.default.createElement(j.ErrorBoundary,{errorComponent:T,errorStyles:A,errorScripts:F},E.default.createElement(LoadingBoundary,{hasLoading:es,loading:ei,loadingStyles:eo,loadingScripts:ea},E.default.createElement(K.NotFoundBoundary,{notFound:ec,notFoundStyles:eu},E.default.createElement(W.RedirectBoundary,null,E.default.createElement(InnerLayoutRouter,{parallelRouterKey:m,url:eg,tree:ep,childNodes:em,childProp:ed?_:null,segmentPath:v,cacheKey:ef,isActive:ew===eh}))))))},ee,er,el)}))}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},9494:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{matchSegment:function(){return matchSegment},canSegmentBeOverridden:function(){return canSegmentBeOverridden}});let _=v(4811),matchSegment=(d,m)=>"string"==typeof d?"string"==typeof m&&d===m:"string"!=typeof m&&d[0]===m[0]&&d[1]===m[1],canSegmentBeOverridden=(d,m)=>{var v;return!Array.isArray(d)&&!!Array.isArray(m)&&(null==(v=(0,_.getSegmentParam)(d))?void 0:v.param)===m[0]};("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},96166:(d,m,v)=>{"use strict";function maybePostpone(d,m){if(!d.isStaticGeneration||!d.experimental.ppr)return;let _=v(80404);"function"==typeof _.unstable_postpone&&_.unstable_postpone(m)}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"maybePostpone",{enumerable:!0,get:function(){return maybePostpone}}),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},16009:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{ReadonlyURLSearchParams:function(){return ReadonlyURLSearchParams},useSearchParams:function(){return useSearchParams},usePathname:function(){return usePathname},ServerInsertedHTMLContext:function(){return j.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return j.useServerInsertedHTML},useRouter:function(){return useRouter},useParams:function(){return useParams},useSelectedLayoutSegments:function(){return useSelectedLayoutSegments},useSelectedLayoutSegment:function(){return useSelectedLayoutSegment},redirect:function(){return U.redirect},permanentRedirect:function(){return U.permanentRedirect},RedirectType:function(){return U.RedirectType},notFound:function(){return F.notFound}});let _=v(80404),E=v(12919),x=v(30335),T=v(40912),A=v(36905),j=v(37271),U=v(25830),F=v(5059),W=Symbol("internal for urlsearchparams readonly");function readonlyURLSearchParamsError(){return Error("ReadonlyURLSearchParams cannot be modified")}let ReadonlyURLSearchParams=class ReadonlyURLSearchParams{[Symbol.iterator](){return this[W][Symbol.iterator]()}append(){throw readonlyURLSearchParamsError()}delete(){throw readonlyURLSearchParamsError()}set(){throw readonlyURLSearchParamsError()}sort(){throw readonlyURLSearchParamsError()}constructor(d){this[W]=d,this.entries=d.entries.bind(d),this.forEach=d.forEach.bind(d),this.get=d.get.bind(d),this.getAll=d.getAll.bind(d),this.has=d.has.bind(d),this.keys=d.keys.bind(d),this.values=d.values.bind(d),this.toString=d.toString.bind(d),this.size=d.size}};function useSearchParams(){(0,T.clientHookInServerComponentError)("useSearchParams");let d=(0,_.useContext)(x.SearchParamsContext),m=(0,_.useMemo)(()=>d?new ReadonlyURLSearchParams(d):null,[d]);{let{bailoutToClientRendering:d}=v(49775);d()}return m}function usePathname(){return(0,T.clientHookInServerComponentError)("usePathname"),(0,_.useContext)(x.PathnameContext)}function useRouter(){(0,T.clientHookInServerComponentError)("useRouter");let d=(0,_.useContext)(E.AppRouterContext);if(null===d)throw Error("invariant expected app router to be mounted");return d}function getSelectedParams(d,m){void 0===m&&(m={});let v=d[1];for(let d of Object.values(v)){let v=d[0],_=Array.isArray(v),E=_?v[1]:v;if(!E||E.startsWith("__PAGE__"))continue;let x=_&&("c"===v[2]||"oc"===v[2]);x?m[v[0]]=v[1].split("/"):_&&(m[v[0]]=v[1]),m=getSelectedParams(d,m)}return m}function useParams(){(0,T.clientHookInServerComponentError)("useParams");let d=(0,_.useContext)(E.GlobalLayoutRouterContext),m=(0,_.useContext)(x.PathParamsContext);return(0,_.useMemo)(()=>(null==d?void 0:d.tree)?getSelectedParams(d.tree):m,[null==d?void 0:d.tree,m])}function getSelectedLayoutSegmentPath(d,m,v,_){let E;if(void 0===v&&(v=!0),void 0===_&&(_=[]),v)E=d[1][m];else{var x;let m=d[1];E=null!=(x=m.children)?x:Object.values(m)[0]}if(!E)return _;let T=E[0],j=(0,A.getSegmentValue)(T);return!j||j.startsWith("__PAGE__")?_:(_.push(j),getSelectedLayoutSegmentPath(E,m,!1,_))}function useSelectedLayoutSegments(d){void 0===d&&(d="children"),(0,T.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:m}=(0,_.useContext)(E.LayoutRouterContext);return getSelectedLayoutSegmentPath(m,d)}function useSelectedLayoutSegment(d){void 0===d&&(d="children"),(0,T.clientHookInServerComponentError)("useSelectedLayoutSegment");let m=useSelectedLayoutSegments(d);return 0===m.length?null:m[0]}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},27294:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"NotFoundBoundary",{enumerable:!0,get:function(){return NotFoundBoundary}});let _=v(94616),E=_._(v(80404)),x=v(16009);let NotFoundErrorBoundary=class NotFoundErrorBoundary extends E.default.Component{static getDerivedStateFromError(d){if((null==d?void 0:d.digest)==="NEXT_NOT_FOUND")return{notFoundTriggered:!0};throw d}static getDerivedStateFromProps(d,m){return d.pathname!==m.previousPathname&&m.notFoundTriggered?{notFoundTriggered:!1,previousPathname:d.pathname}:{notFoundTriggered:m.notFoundTriggered,previousPathname:d.pathname}}render(){return this.state.notFoundTriggered?E.default.createElement(E.default.Fragment,null,E.default.createElement("meta",{name:"robots",content:"noindex"}),!1,this.props.notFoundStyles,this.props.notFound):this.props.children}constructor(d){super(d),this.state={notFoundTriggered:!!d.asNotFound,previousPathname:d.pathname}}};function NotFoundBoundary(d){let{notFound:m,notFoundStyles:v,asNotFound:_,children:T}=d,A=(0,x.usePathname)();return m?E.default.createElement(NotFoundErrorBoundary,{pathname:A,notFound:m,notFoundStyles:v,asNotFound:_},T):E.default.createElement(E.default.Fragment,null,T)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},5059:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{notFound:function(){return notFound},isNotFoundError:function(){return isNotFoundError}});let v="NEXT_NOT_FOUND";function notFound(){let d=Error(v);throw d.digest=v,d}function isNotFoundError(d){return(null==d?void 0:d.digest)===v}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},41311:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"PromiseQueue",{enumerable:!0,get:function(){return PromiseQueue}});let _=v(14247),E=v(62791);var x=E._("_maxConcurrency"),T=E._("_runningCount"),A=E._("_queue"),j=E._("_processNext");let PromiseQueue=class PromiseQueue{enqueue(d){let m,v;let E=new Promise((d,_)=>{m=d,v=_}),task=async()=>{try{_._(this,T)[T]++;let v=await d();m(v)}catch(d){v(d)}finally{_._(this,T)[T]--,_._(this,j)[j]()}};return _._(this,A)[A].push({promiseFn:E,task}),_._(this,j)[j](),E}bump(d){let m=_._(this,A)[A].findIndex(m=>m.promiseFn===d);if(m>-1){let d=_._(this,A)[A].splice(m,1)[0];_._(this,A)[A].unshift(d),_._(this,j)[j](!0)}}constructor(d=5){Object.defineProperty(this,j,{value:processNext}),Object.defineProperty(this,x,{writable:!0,value:void 0}),Object.defineProperty(this,T,{writable:!0,value:void 0}),Object.defineProperty(this,A,{writable:!0,value:void 0}),_._(this,x)[x]=d,_._(this,T)[T]=0,_._(this,A)[A]=[]}};function processNext(d){if(void 0===d&&(d=!1),(_._(this,T)[T]<_._(this,x)[x]||d)&&_._(this,A)[A].length>0){var m;null==(m=_._(this,A)[A].shift())||m.task()}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},68437:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{RedirectErrorBoundary:function(){return RedirectErrorBoundary},RedirectBoundary:function(){return RedirectBoundary}});let _=v(19153),E=_._(v(80404)),x=v(16009),T=v(25830);function HandleRedirect(d){let{redirect:m,reset:v,redirectType:_}=d,A=(0,x.useRouter)();return(0,E.useEffect)(()=>{E.default.startTransition(()=>{_===T.RedirectType.push?A.push(m,{}):A.replace(m,{}),v()})},[m,_,v,A]),null}let RedirectErrorBoundary=class RedirectErrorBoundary extends E.default.Component{static getDerivedStateFromError(d){if((0,T.isRedirectError)(d)){let m=(0,T.getURLFromRedirectError)(d),v=(0,T.getRedirectTypeFromError)(d);return{redirect:m,redirectType:v}}throw d}render(){let{redirect:d,redirectType:m}=this.state;return null!==d&&null!==m?E.default.createElement(HandleRedirect,{redirect:d,redirectType:m,reset:()=>this.setState({redirect:null})}):this.props.children}constructor(d){super(d),this.state={redirect:null,redirectType:null}}};function RedirectBoundary(d){let{children:m}=d,v=(0,x.useRouter)();return E.default.createElement(RedirectErrorBoundary,{router:v},m)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},25830:(d,m,v)=>{"use strict";var _;Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{RedirectType:function(){return _},getRedirectError:function(){return getRedirectError},redirect:function(){return redirect},permanentRedirect:function(){return permanentRedirect},isRedirectError:function(){return isRedirectError},getURLFromRedirectError:function(){return getURLFromRedirectError},getRedirectTypeFromError:function(){return getRedirectTypeFromError}});let E=v(55403),x="NEXT_REDIRECT";function getRedirectError(d,m,v){void 0===v&&(v=!1);let _=Error(x);_.digest=x+";"+m+";"+d+";"+v;let T=E.requestAsyncStorage.getStore();return T&&(_.mutableCookies=T.mutableCookies),_}function redirect(d,m){throw void 0===m&&(m="replace"),getRedirectError(d,m,!1)}function permanentRedirect(d,m){throw void 0===m&&(m="replace"),getRedirectError(d,m,!0)}function isRedirectError(d){if("string"!=typeof(null==d?void 0:d.digest))return!1;let[m,v,_,E]=d.digest.split(";",4);return m===x&&("replace"===v||"push"===v)&&"string"==typeof _&&("true"===E||"false"===E)}function getURLFromRedirectError(d){return isRedirectError(d)?d.digest.split(";",3)[2]:null}function getRedirectTypeFromError(d){if(!isRedirectError(d))throw Error("Not a redirect error");return d.digest.split(";",2)[1]}(function(d){d.push="push",d.replace="replace"})(_||(_={})),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},32746:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"default",{enumerable:!0,get:function(){return RenderFromTemplateContext}});let _=v(19153),E=_._(v(80404)),x=v(12919);function RenderFromTemplateContext(){let d=(0,E.useContext)(x.TemplateContext);return E.default.createElement(E.default.Fragment,null,d)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},87509:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"applyFlightData",{enumerable:!0,get:function(){return applyFlightData}});let _=v(12919),E=v(655),x=v(25414);function applyFlightData(d,m,v,T){void 0===T&&(T=!1);let[A,j,U]=v.slice(-3);return null!==j&&(3===v.length?(m.status=_.CacheStates.READY,m.subTreeData=j,(0,E.fillLazyItemsTillLeafWithHead)(m,d,A,U,T)):(m.status=_.CacheStates.READY,m.subTreeData=d.subTreeData,m.parallelRoutes=new Map(d.parallelRoutes),(0,x.fillCacheWithNewSubTreeData)(m,d,v,T)),!0)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},29918:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"applyRouterStatePatchToTree",{enumerable:!0,get:function(){return applyRouterStatePatchToTree}});let _=v(9494);function applyPatch(d,m){let[v,E]=d,[x,T]=m;if("__DEFAULT__"===x&&"__DEFAULT__"!==v)return d;if((0,_.matchSegment)(v,x)){let m={};for(let d in E){let v=void 0!==T[d];v?m[d]=applyPatch(E[d],T[d]):m[d]=E[d]}for(let d in T)m[d]||(m[d]=T[d]);let _=[v,m];return d[2]&&(_[2]=d[2]),d[3]&&(_[3]=d[3]),d[4]&&(_[4]=d[4]),_}return m}function applyRouterStatePatchToTree(d,m,v){let E;let[x,T,,,A]=m;if(1===d.length){let d=applyPatch(m,v);return d}let[j,U]=d;if(!(0,_.matchSegment)(j,x))return null;let F=2===d.length;if(F)E=applyPatch(T[U],v);else if(null===(E=applyRouterStatePatchToTree(d.slice(2),T[U],v)))return null;let W=[d[0],{...T,[U]:E}];return A&&(W[4]=!0),W}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},73250:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{extractPathFromFlightRouterState:function(){return extractPathFromFlightRouterState},computeChangedPath:function(){return computeChangedPath}});let _=v(9011),E=v(5486),x=v(9494),removeLeadingSlash=d=>"/"===d[0]?d.slice(1):d,segmentToPathname=d=>"string"==typeof d?d:d[1];function normalizeSegments(d){return d.reduce((d,m)=>""===(m=removeLeadingSlash(m))||(0,E.isGroupSegment)(m)?d:d+"/"+m,"")||"/"}function extractPathFromFlightRouterState(d){var m;let v=Array.isArray(d[0])?d[0][1]:d[0];if("__DEFAULT__"===v||_.INTERCEPTION_ROUTE_MARKERS.some(d=>v.startsWith(d)))return;if(v.startsWith("__PAGE__"))return"";let E=[v],x=null!=(m=d[1])?m:{},T=x.children?extractPathFromFlightRouterState(x.children):void 0;if(void 0!==T)E.push(T);else for(let[d,m]of Object.entries(x)){if("children"===d)continue;let v=extractPathFromFlightRouterState(m);void 0!==v&&E.push(v)}return normalizeSegments(E)}function computeChangedPathImpl(d,m){let[v,E]=d,[T,A]=m,j=segmentToPathname(v),U=segmentToPathname(T);if(_.INTERCEPTION_ROUTE_MARKERS.some(d=>j.startsWith(d)||U.startsWith(d)))return"";if(!(0,x.matchSegment)(v,T)){var F;return null!=(F=extractPathFromFlightRouterState(m))?F:""}for(let d in E)if(A[d]){let m=computeChangedPathImpl(E[d],A[d]);if(null!==m)return segmentToPathname(T)+"/"+m}return null}function computeChangedPath(d,m){let v=computeChangedPathImpl(d,m);return null==v||"/"===v?v:normalizeSegments(v.split("/"))}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},23210:(d,m)=>{"use strict";function createHrefFromUrl(d,m){return void 0===m&&(m=!0),d.pathname+d.search+(m?d.hash:"")}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"createHrefFromUrl",{enumerable:!0,get:function(){return createHrefFromUrl}}),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},26280:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"createInitialRouterState",{enumerable:!0,get:function(){return createInitialRouterState}});let _=v(12919),E=v(23210),x=v(655),T=v(73250);function createInitialRouterState(d){var m;let{buildId:v,initialTree:A,children:j,initialCanonicalUrl:U,initialParallelRoutes:F,isServer:W,location:K,initialHead:Q}=d,X={status:_.CacheStates.READY,data:null,subTreeData:j,parallelRoutes:W?new Map:F};return(null===F||0===F.size)&&(0,x.fillLazyItemsTillLeafWithHead)(X,void 0,A,Q),{buildId:v,tree:A,cache:X,prefetchCache:new Map,pushRef:{pendingPush:!1,mpaNavigation:!1},focusAndScrollRef:{apply:!1,onlyHashChange:!1,hashFragment:null,segmentPaths:[]},canonicalUrl:K?(0,E.createHrefFromUrl)(K):U,nextUrl:null!=(m=(0,T.extractPathFromFlightRouterState)(A)||(null==K?void 0:K.pathname))?m:null}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},39998:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"createOptimisticTree",{enumerable:!0,get:function(){return createOptimisticTree}});let _=v(9494);function createOptimisticTree(d,m,v){let E;let[x,T,A,j,U]=m||[null,{}],F=d[0],W=1===d.length,K=null!==x&&(0,_.matchSegment)(x,F),Q=Object.keys(T).length>1,X=!m||!K||Q,ee={};if(null!==x&&K&&(ee=T),!W&&!Q){let m=createOptimisticTree(d.slice(1),ee?ee.children:null,v||X);E=m}let er=[F,{...ee,...E?{children:E}:{}}];return A&&(er[2]=A),!v&&X?er[3]="refetch":K&&j&&(er[3]=j),K&&U&&(er[4]=U),er}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},38069:(d,m)=>{"use strict";function createRecordFromThenable(d){return d.status="pending",d.then(m=>{"pending"===d.status&&(d.status="fulfilled",d.value=m)},m=>{"pending"===d.status&&(d.status="rejected",d.reason=m)}),d}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"createRecordFromThenable",{enumerable:!0,get:function(){return createRecordFromThenable}}),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},32408:(d,m)=>{"use strict";function createRouterCacheKey(d,m){return void 0===m&&(m=!1),Array.isArray(d)?(d[0]+"|"+d[1]+"|"+d[2]).toLowerCase():m&&d.startsWith("__PAGE__")?"__PAGE__":d}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"createRouterCacheKey",{enumerable:!0,get:function(){return createRouterCacheKey}}),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},79242:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"fetchServerResponse",{enumerable:!0,get:function(){return fetchServerResponse}});let _=v(23846),E=v(42927),x=v(41736),T=v(1770),A=v(76051),j=v(8027),{createFromFetch:U}=v(13908);function doMpaNavigation(d){return[(0,E.urlToUrlWithoutFlightMarker)(d).toString(),void 0]}async function fetchServerResponse(d,m,v,F,W){let K={[_.RSC]:"1",[_.NEXT_ROUTER_STATE_TREE]:encodeURIComponent(JSON.stringify(m))};W===T.PrefetchKind.AUTO&&(K[_.NEXT_ROUTER_PREFETCH]="1"),v&&(K[_.NEXT_URL]=v);let Q=(0,A.hexHash)([K[_.NEXT_ROUTER_PREFETCH]||"0",K[_.NEXT_ROUTER_STATE_TREE],K[_.NEXT_URL]].join(","));try{let m=new URL(d);m.searchParams.set(_.NEXT_RSC_UNION_QUERY,Q);let v=await fetch(m,{credentials:"same-origin",headers:K}),T=(0,E.urlToUrlWithoutFlightMarker)(v.url),A=v.redirected?T:void 0,W=v.headers.get("content-type")||"",X=!!v.headers.get(j.NEXT_DID_POSTPONE_HEADER);if(W!==_.RSC_CONTENT_TYPE_HEADER||!v.ok)return d.hash&&(T.hash=d.hash),doMpaNavigation(T.toString());let[ee,er]=await U(Promise.resolve(v),{callServer:x.callServer});if(F!==ee)return doMpaNavigation(v.url);return[er,A,X]}catch(m){return console.error("Failed to fetch RSC payload for "+d+". Falling back to browser navigation.",m),[d.toString(),void 0]}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},34957:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"fillCacheWithDataProperty",{enumerable:!0,get:function(){return fillCacheWithDataProperty}});let _=v(12919),E=v(32408);function fillCacheWithDataProperty(d,m,v,x,T){void 0===T&&(T=!1);let A=v.length<=2,[j,U]=v,F=(0,E.createRouterCacheKey)(U),W=m.parallelRoutes.get(j);if(!W||T&&m.parallelRoutes.size>1)return{bailOptimistic:!0};let K=d.parallelRoutes.get(j);K&&K!==W||(K=new Map(W),d.parallelRoutes.set(j,K));let Q=W.get(F),X=K.get(F);if(A){X&&X.data&&X!==Q||K.set(F,{status:_.CacheStates.DATA_FETCH,data:x(),subTreeData:null,parallelRoutes:new Map});return}if(!X||!Q){X||K.set(F,{status:_.CacheStates.DATA_FETCH,data:x(),subTreeData:null,parallelRoutes:new Map});return}return X===Q&&(X={status:X.status,data:X.data,subTreeData:X.subTreeData,parallelRoutes:new Map(X.parallelRoutes)},K.set(F,X)),fillCacheWithDataProperty(X,Q,v.slice(2),x)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},25414:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"fillCacheWithNewSubTreeData",{enumerable:!0,get:function(){return fillCacheWithNewSubTreeData}});let _=v(12919),E=v(14271),x=v(655),T=v(32408);function fillCacheWithNewSubTreeData(d,m,v,A){let j=v.length<=5,[U,F]=v,W=(0,T.createRouterCacheKey)(F),K=m.parallelRoutes.get(U);if(!K)return;let Q=d.parallelRoutes.get(U);Q&&Q!==K||(Q=new Map(K),d.parallelRoutes.set(U,Q));let X=K.get(W),ee=Q.get(W);if(j){ee&&ee.data&&ee!==X||(ee={status:_.CacheStates.READY,data:null,subTreeData:v[3],parallelRoutes:X?new Map(X.parallelRoutes):new Map},X&&(0,E.invalidateCacheByRouterState)(ee,X,v[2]),(0,x.fillLazyItemsTillLeafWithHead)(ee,X,v[2],v[4],A),Q.set(W,ee));return}ee&&X&&(ee===X&&(ee={status:ee.status,data:ee.data,subTreeData:ee.subTreeData,parallelRoutes:new Map(ee.parallelRoutes)},Q.set(W,ee)),fillCacheWithNewSubTreeData(ee,X,v.slice(2),A))}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},655:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"fillLazyItemsTillLeafWithHead",{enumerable:!0,get:function(){return fillLazyItemsTillLeafWithHead}});let _=v(12919),E=v(32408);function fillLazyItemsTillLeafWithHead(d,m,v,x,T){let A=0===Object.keys(v[1]).length;if(A){d.head=x;return}for(let A in v[1]){let j=v[1][A],U=j[0],F=(0,E.createRouterCacheKey)(U);if(m){let v=m.parallelRoutes.get(A);if(v){let m=new Map(v),E=m.get(F),U=T&&E?{status:E.status,data:E.data,subTreeData:E.subTreeData,parallelRoutes:new Map(E.parallelRoutes)}:{status:_.CacheStates.LAZY_INITIALIZED,data:null,subTreeData:null,parallelRoutes:new Map(null==E?void 0:E.parallelRoutes)};m.set(F,U),fillLazyItemsTillLeafWithHead(U,E,j,x,T),d.parallelRoutes.set(A,m);continue}}let W={status:_.CacheStates.LAZY_INITIALIZED,data:null,subTreeData:null,parallelRoutes:new Map},K=d.parallelRoutes.get(A);K?K.set(F,W):d.parallelRoutes.set(A,new Map([[F,W]])),fillLazyItemsTillLeafWithHead(W,void 0,j,x,T)}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},91069:(d,m)=>{"use strict";var v;function getPrefetchEntryCacheStatus(d){let{kind:m,prefetchTime:v,lastUsedTime:_}=d;return Date.now()<(null!=_?_:v)+3e4?_?"reusable":"fresh":"auto"===m&&Date.now()<v+3e5?"stale":"full"===m&&Date.now()<v+3e5?"reusable":"expired"}Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{PrefetchCacheEntryStatus:function(){return v},getPrefetchEntryCacheStatus:function(){return getPrefetchEntryCacheStatus}}),function(d){d.fresh="fresh",d.reusable="reusable",d.expired="expired",d.stale="stale"}(v||(v={})),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},14399:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"handleMutable",{enumerable:!0,get:function(){return handleMutable}});let _=v(73250);function handleMutable(d,m){var v,E,x,T;let A=null==(E=m.shouldScroll)||E;return{buildId:d.buildId,canonicalUrl:null!=m.canonicalUrl?m.canonicalUrl===d.canonicalUrl?d.canonicalUrl:m.canonicalUrl:d.canonicalUrl,pushRef:{pendingPush:null!=m.pendingPush?m.pendingPush:d.pushRef.pendingPush,mpaNavigation:null!=m.mpaNavigation?m.mpaNavigation:d.pushRef.mpaNavigation},focusAndScrollRef:{apply:!!A&&((null==m?void 0:m.scrollableSegments)!==void 0||d.focusAndScrollRef.apply),onlyHashChange:!!m.hashFragment&&d.canonicalUrl.split("#",1)[0]===(null==(v=m.canonicalUrl)?void 0:v.split("#",1)[0]),hashFragment:A?m.hashFragment&&""!==m.hashFragment?decodeURIComponent(m.hashFragment.slice(1)):d.focusAndScrollRef.hashFragment:null,segmentPaths:A?null!=(x=null==m?void 0:m.scrollableSegments)?x:d.focusAndScrollRef.segmentPaths:[]},cache:m.cache?m.cache:d.cache,prefetchCache:m.prefetchCache?m.prefetchCache:d.prefetchCache,tree:void 0!==m.patchedTree?m.patchedTree:d.tree,nextUrl:void 0!==m.patchedTree?null!=(T=(0,_.computeChangedPath)(d.tree,m.patchedTree))?T:d.canonicalUrl:d.nextUrl}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},45779:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"invalidateCacheBelowFlightSegmentPath",{enumerable:!0,get:function(){return invalidateCacheBelowFlightSegmentPath}});let _=v(32408);function invalidateCacheBelowFlightSegmentPath(d,m,v){let E=v.length<=2,[x,T]=v,A=(0,_.createRouterCacheKey)(T),j=m.parallelRoutes.get(x);if(!j)return;let U=d.parallelRoutes.get(x);if(U&&U!==j||(U=new Map(j),d.parallelRoutes.set(x,U)),E){U.delete(A);return}let F=j.get(A),W=U.get(A);W&&F&&(W===F&&(W={status:W.status,data:W.data,subTreeData:W.subTreeData,parallelRoutes:new Map(W.parallelRoutes)},U.set(A,W)),invalidateCacheBelowFlightSegmentPath(W,F,v.slice(2)))}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},14271:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"invalidateCacheByRouterState",{enumerable:!0,get:function(){return invalidateCacheByRouterState}});let _=v(32408);function invalidateCacheByRouterState(d,m,v){for(let E in v[1]){let x=v[1][E][0],T=(0,_.createRouterCacheKey)(x),A=m.parallelRoutes.get(E);if(A){let m=new Map(A);m.delete(T),d.parallelRoutes.set(E,m)}}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},11706:(d,m)=>{"use strict";function isNavigatingToNewRootLayout(d,m){let v=d[0],_=m[0];if(Array.isArray(v)&&Array.isArray(_)){if(v[0]!==_[0]||v[2]!==_[2])return!0}else if(v!==_)return!0;if(d[4])return!m[4];if(m[4])return!0;let E=Object.values(d[1])[0],x=Object.values(m[1])[0];return!E||!x||isNavigatingToNewRootLayout(E,x)}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"isNavigatingToNewRootLayout",{enumerable:!0,get:function(){return isNavigatingToNewRootLayout}}),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},42203:(d,m)=>{"use strict";function readRecordValue(d){if("fulfilled"===d.status)return d.value;throw d}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"readRecordValue",{enumerable:!0,get:function(){return readRecordValue}}),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},5185:(d,m,v)=>{"use strict";function fastRefreshReducerNoop(d,m){return d}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"fastRefreshReducer",{enumerable:!0,get:function(){return _}}),v(79242),v(38069),v(42203),v(23210),v(29918),v(11706),v(72750),v(14399),v(87509);let _=fastRefreshReducerNoop;("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},12814:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"findHeadInCache",{enumerable:!0,get:function(){return findHeadInCache}});let _=v(32408);function findHeadInCache(d,m){let v=0===Object.keys(m).length;if(v)return d.head;for(let v in m){let[E,x]=m[v],T=d.parallelRoutes.get(v);if(!T)continue;let A=(0,_.createRouterCacheKey)(E),j=T.get(A);if(!j)continue;let U=findHeadInCache(j,x);if(U)return U}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},36905:(d,m)=>{"use strict";function getSegmentValue(d){return Array.isArray(d)?d[1]:d}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"getSegmentValue",{enumerable:!0,get:function(){return getSegmentValue}}),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},72750:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{handleExternalUrl:function(){return handleExternalUrl},navigateReducer:function(){return navigateReducer}});let _=v(12919),E=v(79242),x=v(38069),T=v(42203),A=v(23210),j=v(45779),U=v(34957),F=v(39998),W=v(29918),K=v(60949),Q=v(11706),X=v(1770),ee=v(14399),er=v(87509),ei=v(91069),eo=v(14398),ea=v(3524);function handleExternalUrl(d,m,v,_){return m.previousTree=d.tree,m.mpaNavigation=!0,m.canonicalUrl=v,m.pendingPush=_,m.scrollableSegments=void 0,(0,ee.handleMutable)(d,m)}function generateSegmentsFromPatch(d){let m=[],[v,_]=d;if(0===Object.keys(_).length)return[[v]];for(let[d,E]of Object.entries(_))for(let _ of generateSegmentsFromPatch(E))""===v?m.push([d,..._]):m.push([v,d,..._]);return m}function addRefetchToLeafSegments(d,m,v,E,x){let T=!1;d.status=_.CacheStates.READY,d.subTreeData=m.subTreeData,d.parallelRoutes=new Map(m.parallelRoutes);let A=generateSegmentsFromPatch(E).map(d=>[...v,...d]);for(let v of A){let _=(0,U.fillCacheWithDataProperty)(d,m,v,x);(null==_?void 0:_.bailOptimistic)||(T=!0)}return T}function navigateReducer(d,m){let{url:v,isExternalUrl:es,navigateType:el,cache:ec,mutable:eu,forceOptimisticNavigation:ed,shouldScroll:eh}=m,{pathname:ef,hash:ep}=v,eg=(0,A.createHrefFromUrl)(v),em="push"===el;(0,eo.prunePrefetchCache)(d.prefetchCache);let eb=JSON.stringify(eu.previousTree)===JSON.stringify(d.tree);if(eb)return(0,ee.handleMutable)(d,eu);if(es)return handleExternalUrl(d,eu,v.toString(),em);let ey=d.prefetchCache.get((0,A.createHrefFromUrl)(v,!1));if(ed&&(null==ey?void 0:ey.kind)!==X.PrefetchKind.TEMPORARY){let m=ef.split("/");m.push("__PAGE__");let T=(0,F.createOptimisticTree)(m,d.tree,!1),j={...ec};j.status=_.CacheStates.READY,j.subTreeData=d.cache.subTreeData,j.parallelRoutes=new Map(d.cache.parallelRoutes);let W=null,K=m.slice(1).map(d=>["children",d]).flat(),Q=(0,U.fillCacheWithDataProperty)(j,d.cache,K,()=>(W||(W=(0,x.createRecordFromThenable)((0,E.fetchServerResponse)(v,T,d.nextUrl,d.buildId))),W),!0);if(!(null==Q?void 0:Q.bailOptimistic))return eu.previousTree=d.tree,eu.patchedTree=T,eu.pendingPush=em,eu.hashFragment=ep,eu.shouldScroll=eh,eu.scrollableSegments=[],eu.cache=j,eu.canonicalUrl=eg,d.prefetchCache.set((0,A.createHrefFromUrl)(v,!1),{data:W?(0,x.createRecordFromThenable)(Promise.resolve(W)):null,kind:X.PrefetchKind.TEMPORARY,prefetchTime:Date.now(),treeAtTimeOfPrefetch:d.tree,lastUsedTime:Date.now()}),(0,ee.handleMutable)(d,eu)}if(!ey){let m=(0,x.createRecordFromThenable)((0,E.fetchServerResponse)(v,d.tree,d.nextUrl,d.buildId,void 0)),_={data:(0,x.createRecordFromThenable)(Promise.resolve(m)),kind:X.PrefetchKind.TEMPORARY,prefetchTime:Date.now(),treeAtTimeOfPrefetch:d.tree,lastUsedTime:null};d.prefetchCache.set((0,A.createHrefFromUrl)(v,!1),_),ey=_}let ew=(0,ei.getPrefetchEntryCacheStatus)(ey),{treeAtTimeOfPrefetch:ev,data:e_}=ey;ea.prefetchQueue.bump(e_);let[eC,eE,ex]=(0,T.readRecordValue)(e_);if(ey.lastUsedTime||(ey.lastUsedTime=Date.now()),"string"==typeof eC)return handleExternalUrl(d,eu,eC,em);let eS=d.tree,eP=d.cache,eO=[];for(let m of eC){let T=m.slice(0,-4),A=m.slice(-3)[0],U=["",...T],F=(0,W.applyRouterStatePatchToTree)(U,eS,A);if(null===F&&(F=(0,W.applyRouterStatePatchToTree)(U,ev,A)),null!==F){if((0,Q.isNavigatingToNewRootLayout)(eS,F))return handleExternalUrl(d,eu,eg,em);let W=!ex&&(0,er.applyFlightData)(eP,ec,m,"auto"===ey.kind&&ew===ei.PrefetchCacheEntryStatus.reusable);W||ew!==ei.PrefetchCacheEntryStatus.stale||(W=addRefetchToLeafSegments(ec,eP,T,A,()=>(0,x.createRecordFromThenable)((0,E.fetchServerResponse)(v,eS,d.nextUrl,d.buildId))));let X=(0,K.shouldHardNavigate)(U,eS);for(let d of(X?(ec.status=_.CacheStates.READY,ec.subTreeData=eP.subTreeData,(0,j.invalidateCacheBelowFlightSegmentPath)(ec,eP,T),eu.cache=ec):W&&(eu.cache=ec),eP=ec,eS=F,generateSegmentsFromPatch(A))){let m=[...T,...d];"__DEFAULT__"!==m[m.length-1]&&eO.push(m)}}}return eu.previousTree=d.tree,eu.patchedTree=eS,eu.canonicalUrl=eE?(0,A.createHrefFromUrl)(eE):eg,eu.pendingPush=em,eu.scrollableSegments=eO,eu.hashFragment=ep,eu.shouldScroll=eh,(0,ee.handleMutable)(d,eu)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},3524:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{prefetchQueue:function(){return F},prefetchReducer:function(){return prefetchReducer}});let _=v(23210),E=v(79242),x=v(1770),T=v(38069),A=v(14398),j=v(23846),U=v(41311),F=new U.PromiseQueue(5);function prefetchReducer(d,m){(0,A.prunePrefetchCache)(d.prefetchCache);let{url:v}=m;v.searchParams.delete(j.NEXT_RSC_UNION_QUERY);let U=(0,_.createHrefFromUrl)(v,!1),W=d.prefetchCache.get(U);if(W&&(W.kind===x.PrefetchKind.TEMPORARY&&d.prefetchCache.set(U,{...W,kind:m.kind}),!(W.kind===x.PrefetchKind.AUTO&&m.kind===x.PrefetchKind.FULL)))return d;let K=(0,T.createRecordFromThenable)(F.enqueue(()=>(0,E.fetchServerResponse)(v,d.tree,d.nextUrl,d.buildId,m.kind)));return d.prefetchCache.set(U,{treeAtTimeOfPrefetch:d.tree,data:K,kind:m.kind,prefetchTime:Date.now(),lastUsedTime:null}),d}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},14398:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"prunePrefetchCache",{enumerable:!0,get:function(){return prunePrefetchCache}});let _=v(91069);function prunePrefetchCache(d){for(let[m,v]of d)(0,_.getPrefetchEntryCacheStatus)(v)===_.PrefetchCacheEntryStatus.expired&&d.delete(m)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},51147:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"refreshReducer",{enumerable:!0,get:function(){return refreshReducer}});let _=v(79242),E=v(38069),x=v(42203),T=v(23210),A=v(29918),j=v(11706),U=v(72750),F=v(14399),W=v(12919),K=v(655);function refreshReducer(d,m){let{cache:v,mutable:Q,origin:X}=m,ee=d.canonicalUrl,er=d.tree,ei=JSON.stringify(Q.previousTree)===JSON.stringify(er);if(ei)return(0,F.handleMutable)(d,Q);v.data||(v.data=(0,E.createRecordFromThenable)((0,_.fetchServerResponse)(new URL(ee,X),[er[0],er[1],er[2],"refetch"],d.nextUrl,d.buildId)));let[eo,ea]=(0,x.readRecordValue)(v.data);if("string"==typeof eo)return(0,U.handleExternalUrl)(d,Q,eo,d.pushRef.pendingPush);for(let m of(v.data=null,eo)){if(3!==m.length)return console.log("REFRESH FAILED"),d;let[_]=m,E=(0,A.applyRouterStatePatchToTree)([""],er,_);if(null===E)throw Error("SEGMENT MISMATCH");if((0,j.isNavigatingToNewRootLayout)(er,E))return(0,U.handleExternalUrl)(d,Q,ee,d.pushRef.pendingPush);let x=ea?(0,T.createHrefFromUrl)(ea):void 0;ea&&(Q.canonicalUrl=x);let[F,X]=m.slice(-2);null!==F&&(v.status=W.CacheStates.READY,v.subTreeData=F,(0,K.fillLazyItemsTillLeafWithHead)(v,void 0,_,X),Q.cache=v,Q.prefetchCache=new Map),Q.previousTree=er,Q.patchedTree=E,Q.canonicalUrl=ee,er=E}return(0,F.handleMutable)(d,Q)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},36142:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"restoreReducer",{enumerable:!0,get:function(){return restoreReducer}});let _=v(23210);function restoreReducer(d,m){let{url:v,tree:E}=m,x=(0,_.createHrefFromUrl)(v);return{buildId:d.buildId,canonicalUrl:x,pushRef:d.pushRef,focusAndScrollRef:d.focusAndScrollRef,cache:d.cache,prefetchCache:d.prefetchCache,tree:E,nextUrl:v.pathname}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},65399:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"serverActionReducer",{enumerable:!0,get:function(){return serverActionReducer}});let _=v(41736),E=v(23846),x=v(38069),T=v(42203),A=v(38101),j=v(23210),U=v(72750),F=v(29918),W=v(11706),K=v(12919),Q=v(14399),X=v(655),{createFromFetch:ee,encodeReply:er}=v(13908);async function fetchServerAction(d,m){let v,{actionId:x,actionArgs:T}=m,j=await er(T),U=await fetch("",{method:"POST",headers:{Accept:E.RSC_CONTENT_TYPE_HEADER,[E.ACTION]:x,[E.NEXT_ROUTER_STATE_TREE]:encodeURIComponent(JSON.stringify(d.tree)),...d.nextUrl?{[E.NEXT_URL]:d.nextUrl}:{}},body:j}),F=U.headers.get("x-action-redirect");try{let d=JSON.parse(U.headers.get("x-action-revalidated")||"[[],0,0]");v={paths:d[0]||[],tag:!!d[1],cookie:d[2]}}catch(d){v={paths:[],tag:!1,cookie:!1}}let W=F?new URL((0,A.addBasePath)(F),new URL(d.canonicalUrl,window.location.href)):void 0;if(U.headers.get("content-type")===E.RSC_CONTENT_TYPE_HEADER){let d=await ee(Promise.resolve(U),{callServer:_.callServer});if(F){let[,m]=null!=d?d:[];return{actionFlightData:m,redirectLocation:W,revalidatedParts:v}}let[m,[,E]]=null!=d?d:[];return{actionResult:m,actionFlightData:E,redirectLocation:W,revalidatedParts:v}}return{redirectLocation:W,revalidatedParts:v}}function serverActionReducer(d,m){let{mutable:v,cache:_,resolve:E,reject:A}=m,ee=d.canonicalUrl,er=d.tree,ei=JSON.stringify(v.previousTree)===JSON.stringify(er);if(ei)return(0,Q.handleMutable)(d,v);if(v.inFlightServerAction){if("fulfilled"!==v.inFlightServerAction.status&&v.globalMutable.pendingNavigatePath&&v.globalMutable.pendingNavigatePath!==ee)return v.inFlightServerAction.then(()=>{v.actionResultResolved||(v.inFlightServerAction=null,v.globalMutable.pendingNavigatePath=void 0,v.globalMutable.refresh(),v.actionResultResolved=!0)},()=>{}),d}else v.inFlightServerAction=(0,x.createRecordFromThenable)(fetchServerAction(d,m));try{let{actionResult:m,actionFlightData:x,redirectLocation:A}=(0,T.readRecordValue)(v.inFlightServerAction);if(A&&(d.pushRef.pendingPush=!0,v.pendingPush=!0),v.previousTree=d.tree,!x){if(v.actionResultResolved||(E(m),v.actionResultResolved=!0),A)return(0,U.handleExternalUrl)(d,v,A.href,d.pushRef.pendingPush);return d}if("string"==typeof x)return(0,U.handleExternalUrl)(d,v,x,d.pushRef.pendingPush);for(let m of(v.inFlightServerAction=null,x)){if(3!==m.length)return console.log("SERVER ACTION APPLY FAILED"),d;let[E]=m,x=(0,F.applyRouterStatePatchToTree)([""],er,E);if(null===x)throw Error("SEGMENT MISMATCH");if((0,W.isNavigatingToNewRootLayout)(er,x))return(0,U.handleExternalUrl)(d,v,ee,d.pushRef.pendingPush);let[T,A]=m.slice(-2);null!==T&&(_.status=K.CacheStates.READY,_.subTreeData=T,(0,X.fillLazyItemsTillLeafWithHead)(_,void 0,E,A),v.cache=_,v.prefetchCache=new Map),v.previousTree=er,v.patchedTree=x,v.canonicalUrl=ee,er=x}if(A){let d=(0,j.createHrefFromUrl)(A,!1);v.canonicalUrl=d}return v.actionResultResolved||(E(m),v.actionResultResolved=!0),(0,Q.handleMutable)(d,v)}catch(m){if("rejected"===m.status)return v.actionResultResolved||(A(m.reason),v.actionResultResolved=!0),d;throw m}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},71058:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"serverPatchReducer",{enumerable:!0,get:function(){return serverPatchReducer}});let _=v(23210),E=v(29918),x=v(11706),T=v(72750),A=v(87509),j=v(14399);function serverPatchReducer(d,m){let{flightData:v,previousTree:U,overrideCanonicalUrl:F,cache:W,mutable:K}=m,Q=JSON.stringify(U)===JSON.stringify(d.tree);if(!Q)return console.log("TREE MISMATCH"),d;if(K.previousTree)return(0,j.handleMutable)(d,K);if("string"==typeof v)return(0,T.handleExternalUrl)(d,K,v,d.pushRef.pendingPush);let X=d.tree,ee=d.cache;for(let m of v){let v=m.slice(0,-4),[j]=m.slice(-3,-2),U=(0,E.applyRouterStatePatchToTree)(["",...v],X,j);if(null===U)throw Error("SEGMENT MISMATCH");if((0,x.isNavigatingToNewRootLayout)(X,U))return(0,T.handleExternalUrl)(d,K,d.canonicalUrl,d.pushRef.pendingPush);let Q=F?(0,_.createHrefFromUrl)(F):void 0;Q&&(K.canonicalUrl=Q),(0,A.applyFlightData)(ee,W,m),K.previousTree=X,K.patchedTree=U,K.cache=W,ee=W,X=U}return(0,j.handleMutable)(d,K)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},1770:(d,m)=>{"use strict";var v;Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{PrefetchKind:function(){return v},ACTION_REFRESH:function(){return _},ACTION_NAVIGATE:function(){return E},ACTION_RESTORE:function(){return x},ACTION_SERVER_PATCH:function(){return T},ACTION_PREFETCH:function(){return A},ACTION_FAST_REFRESH:function(){return j},ACTION_SERVER_ACTION:function(){return U}});let _="refresh",E="navigate",x="restore",T="server-patch",A="prefetch",j="fast-refresh",U="server-action";(function(d){d.AUTO="auto",d.FULL="full",d.TEMPORARY="temporary"})(v||(v={})),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},66172:(d,m,v)=>{"use strict";function serverReducer(d,m){return d}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"reducer",{enumerable:!0,get:function(){return _}}),v(1770),v(72750),v(71058),v(36142),v(51147),v(3524),v(5185),v(65399);let _=serverReducer;("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},60949:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"shouldHardNavigate",{enumerable:!0,get:function(){return shouldHardNavigate}});let _=v(9494);function shouldHardNavigate(d,m){let[v,E]=m,[x,T]=d;if(!(0,_.matchSegment)(x,v))return!!Array.isArray(x);let A=d.length<=2;return!A&&shouldHardNavigate(d.slice(2),E[T])}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},4272:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"createSearchParamsBailoutProxy",{enumerable:!0,get:function(){return createSearchParamsBailoutProxy}});let _=v(8477);function createSearchParamsBailoutProxy(){return new Proxy({},{get(d,m){"string"==typeof m&&(0,_.staticGenerationBailout)("searchParams."+m)}})}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},8477:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"staticGenerationBailout",{enumerable:!0,get:function(){return staticGenerationBailout}});let _=v(26938),E=v(96166),x=v(94749);let StaticGenBailoutError=class StaticGenBailoutError extends Error{constructor(...d){super(...d),this.code="NEXT_STATIC_GEN_BAILOUT"}};function formatErrorMessage(d,m){let{dynamic:v,link:_}=m||{};return"Page"+(v?' with `dynamic = "'+v+'"`':"")+" couldn't be rendered statically because it used `"+d+"`."+(_?" See more info here: "+_:"")}let staticGenerationBailout=(d,m)=>{let v=x.staticGenerationAsyncStorage.getStore();if(!v)return!1;if(v.forceStatic)return!0;if(v.dynamicShouldError){var T;throw new StaticGenBailoutError(formatErrorMessage(d,{...m,dynamic:null!=(T=null==m?void 0:m.dynamic)?T:"error"}))}let A=formatErrorMessage(d,{...m,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if((0,E.maybePostpone)(v,A),v.revalidate=0,(null==m?void 0:m.dynamic)||(v.staticPrefetchBailout=!0),v.isStaticGeneration){let m=new _.DynamicServerError(A);throw v.dynamicUsageDescription=d,v.dynamicUsageStack=m.stack,m}return!1};("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},57872:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"default",{enumerable:!0,get:function(){return StaticGenerationSearchParamsBailoutProvider}});let _=v(94616),E=_._(v(80404)),x=v(4272);function StaticGenerationSearchParamsBailoutProvider(d){let{Component:m,propsForComponent:v,isStaticGeneration:_}=d;if(_){let d=(0,x.createSearchParamsBailoutProxy)();return E.default.createElement(m,{searchParams:d,...v})}return E.default.createElement(m,v)}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},46454:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"useReducerWithReduxDevtools",{enumerable:!0,get:function(){return E}});let _=v(80404);function useReducerWithReduxDevtoolsNoop(d,m){let[v,E]=(0,_.useReducer)(d,m);return[v,E,()=>{}]}let E=useReducerWithReduxDevtoolsNoop;("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},8971:(d,m,v)=>{"use strict";function getDomainLocale(d,m,v,_){return!1}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),v(78795),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},19378:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"hasBasePath",{enumerable:!0,get:function(){return hasBasePath}});let _=v(94087);function hasBasePath(d){return(0,_.pathHasPrefix)(d,"")}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},97223:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"default",{enumerable:!0,get:function(){return ei}});let _=v(94616),E=_._(v(80404)),x=v(96799),T=v(57392),A=v(66250),j=v(41430),U=v(31335),F=v(11293),W=v(12919),K=v(47498),Q=v(8971),X=v(38101),ee=v(1770);function isModifiedEvent(d){let m=d.currentTarget,v=m.getAttribute("target");return v&&"_self"!==v||d.metaKey||d.ctrlKey||d.shiftKey||d.altKey||d.nativeEvent&&2===d.nativeEvent.which}function linkClicked(d,m,v,_,x,A,j,U,F,W){let{nodeName:K}=d.currentTarget,Q="A"===K.toUpperCase();if(Q&&(isModifiedEvent(d)||!F&&!(0,T.isLocalURL)(v)))return;d.preventDefault();let navigate=()=>{let d=null==j||j;"beforePopState"in m?m[x?"replace":"push"](v,_,{shallow:A,locale:U,scroll:d}):m[x?"replace":"push"](_||v,{forceOptimisticNavigation:!W,scroll:d})};F?E.default.startTransition(navigate):navigate()}function formatStringOrUrl(d){return"string"==typeof d?d:(0,A.formatUrl)(d)}let er=E.default.forwardRef(function(d,m){let v,_;let{href:T,as:A,children:er,prefetch:ei=null,passHref:eo,replace:ea,shallow:es,scroll:el,locale:ec,onClick:eu,onMouseEnter:ed,onTouchStart:eh,legacyBehavior:ef=!1,...ep}=d;v=er,ef&&("string"==typeof v||"number"==typeof v)&&(v=E.default.createElement("a",null,v));let eg=E.default.useContext(F.RouterContext),em=E.default.useContext(W.AppRouterContext),eb=null!=eg?eg:em,ey=!eg,ew=!1!==ei,ev=null===ei?ee.PrefetchKind.AUTO:ee.PrefetchKind.FULL,{href:e_,as:eC}=E.default.useMemo(()=>{if(!eg){let d=formatStringOrUrl(T);return{href:d,as:A?formatStringOrUrl(A):d}}let[d,m]=(0,x.resolveHref)(eg,T,!0);return{href:d,as:A?(0,x.resolveHref)(eg,A):m||d}},[eg,T,A]),eE=E.default.useRef(e_),ex=E.default.useRef(eC);ef&&(_=E.default.Children.only(v));let eS=ef?_&&"object"==typeof _&&_.ref:m,[eP,eO,ek]=(0,K.useIntersection)({rootMargin:"200px"}),eR=E.default.useCallback(d=>{(ex.current!==eC||eE.current!==e_)&&(ek(),ex.current=eC,eE.current=e_),eP(d),eS&&("function"==typeof eS?eS(d):"object"==typeof eS&&(eS.current=d))},[eC,eS,e_,ek,eP]);E.default.useEffect(()=>{},[eC,e_,eO,ec,ew,null==eg?void 0:eg.locale,eb,ey,ev]);let eT={ref:eR,onClick(d){ef||"function"!=typeof eu||eu(d),ef&&_.props&&"function"==typeof _.props.onClick&&_.props.onClick(d),eb&&!d.defaultPrevented&&linkClicked(d,eb,e_,eC,ea,es,el,ec,ey,ew)},onMouseEnter(d){ef||"function"!=typeof ed||ed(d),ef&&_.props&&"function"==typeof _.props.onMouseEnter&&_.props.onMouseEnter(d)},onTouchStart(d){ef||"function"!=typeof eh||eh(d),ef&&_.props&&"function"==typeof _.props.onTouchStart&&_.props.onTouchStart(d)}};if((0,j.isAbsoluteUrl)(eC))eT.href=eC;else if(!ef||eo||"a"===_.type&&!("href"in _.props)){let d=void 0!==ec?ec:null==eg?void 0:eg.locale,m=(null==eg?void 0:eg.isLocaleDomain)&&(0,Q.getDomainLocale)(eC,d,null==eg?void 0:eg.locales,null==eg?void 0:eg.domainLocales);eT.href=m||(0,X.addBasePath)((0,U.addLocale)(eC,d,null==eg?void 0:eg.defaultLocale))}return ef?E.default.cloneElement(_,eT):E.default.createElement("a",{...ep,...eT},v)}),ei=er;("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},78795:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return normalizePathTrailingSlash}});let _=v(74362),E=v(64963),normalizePathTrailingSlash=d=>{if(!d.startsWith("/"))return d;let{pathname:m,query:v,hash:x}=(0,E.parsePath)(d);return""+(0,_.removeTrailingSlash)(m)+v+x};("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},96060:(d,m,v)=>{"use strict";function removeBasePath(d){return d}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"removeBasePath",{enumerable:!0,get:function(){return removeBasePath}}),v(19378),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},31903:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{requestIdleCallback:function(){return v},cancelIdleCallback:function(){return _}});let v="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(d){let m=Date.now();return self.setTimeout(function(){d({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-m))}})},1)},_="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(d){return clearTimeout(d)};("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},96799:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"resolveHref",{enumerable:!0,get:function(){return resolveHref}});let _=v(71664),E=v(66250),x=v(25094),T=v(41430),A=v(78795),j=v(57392),U=v(53449),F=v(8072);function resolveHref(d,m,v){let W;let K="string"==typeof m?m:(0,E.formatWithValidation)(m),Q=K.match(/^[a-zA-Z]{1,}:\/\//),X=Q?K.slice(Q[0].length):K,ee=X.split("?",1);if((ee[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+K+"' passed to next/router in page: '"+d.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let m=(0,T.normalizeRepeatedSlashes)(X);K=(Q?Q[0]:"")+m}if(!(0,j.isLocalURL)(K))return v?[K]:K;try{W=new URL(K.startsWith("#")?d.asPath:d.pathname,"http://n")}catch(d){W=new URL("/","http://n")}try{let d=new URL(K,W);d.pathname=(0,A.normalizePathTrailingSlash)(d.pathname);let m="";if((0,U.isDynamicRoute)(d.pathname)&&d.searchParams&&v){let v=(0,_.searchParamsToUrlQuery)(d.searchParams),{result:T,params:A}=(0,F.interpolateAs)(d.pathname,d.pathname,v);T&&(m=(0,E.formatWithValidation)({pathname:T,hash:d.hash,query:(0,x.omit)(v,A)}))}let T=d.origin===W.origin?d.href.slice(d.origin.length):d.href;return v?[T,m||T]:T}catch(d){return v?[K]:K}}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},47498:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let _=v(80404),E=v(31903),x="function"==typeof IntersectionObserver,T=new Map,A=[];function createObserver(d){let m;let v={root:d.root||null,margin:d.rootMargin||""},_=A.find(d=>d.root===v.root&&d.margin===v.margin);if(_&&(m=T.get(_)))return m;let E=new Map,x=new IntersectionObserver(d=>{d.forEach(d=>{let m=E.get(d.target),v=d.isIntersecting||d.intersectionRatio>0;m&&v&&m(v)})},d);return m={id:v,observer:x,elements:E},A.push(v),T.set(v,m),m}function observe(d,m,v){let{id:_,observer:E,elements:x}=createObserver(v);return x.set(d,m),E.observe(d),function(){if(x.delete(d),E.unobserve(d),0===x.size){E.disconnect(),T.delete(_);let d=A.findIndex(d=>d.root===_.root&&d.margin===_.margin);d>-1&&A.splice(d,1)}}}function useIntersection(d){let{rootRef:m,rootMargin:v,disabled:T}=d,A=T||!x,[j,U]=(0,_.useState)(!1),F=(0,_.useRef)(null),W=(0,_.useCallback)(d=>{F.current=d},[]);(0,_.useEffect)(()=>{if(x){if(A||j)return;let d=F.current;if(d&&d.tagName){let _=observe(d,d=>d&&U(d),{root:null==m?void 0:m.current,rootMargin:v});return _}}else if(!j){let d=(0,E.requestIdleCallback)(()=>U(!0));return()=>(0,E.cancelIdleCallback)(d)}},[A,v,m,j,F.current]);let K=(0,_.useCallback)(()=>{U(!1)},[]);return[W,j,K]}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},36861:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"escapeStringRegexp",{enumerable:!0,get:function(){return escapeStringRegexp}});let v=/[|\\{}()[\]^$+*?.-]/,_=/[|\\{}()[\]^$+*?.-]/g;function escapeStringRegexp(d){return v.test(d)?d.replace(_,"\\$&"):d}},76051:(d,m)=>{"use strict";function djb2Hash(d){let m=5381;for(let v=0;v<d.length;v++){let _=d.charCodeAt(v);m=(m<<5)+m+_}return Math.abs(m)}function hexHash(d){return djb2Hash(d).toString(36).slice(0,5)}Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{djb2Hash:function(){return djb2Hash},hexHash:function(){return hexHash}})},3374:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{NEXT_DYNAMIC_NO_SSR_CODE:function(){return v},throwWithNoSSR:function(){return throwWithNoSSR}});let v="NEXT_DYNAMIC_NO_SSR_CODE";function throwWithNoSSR(){let d=Error(v);throw d.digest=v,d}},37812:(d,m)=>{"use strict";function ensureLeadingSlash(d){return d.startsWith("/")?d:"/"+d}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"ensureLeadingSlash",{enumerable:!0,get:function(){return ensureLeadingSlash}})},35890:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"addPathPrefix",{enumerable:!0,get:function(){return addPathPrefix}});let _=v(64963);function addPathPrefix(d,m){if(!d.startsWith("/")||!m)return d;let{pathname:v,query:E,hash:x}=(0,_.parsePath)(d);return""+m+v+E+x}},72803:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{normalizeAppPath:function(){return normalizeAppPath},normalizeRscURL:function(){return normalizeRscURL},normalizePostponedURL:function(){return normalizePostponedURL}});let _=v(37812),E=v(5486),x=v(57310);function normalizeAppPath(d){return(0,_.ensureLeadingSlash)(d.split("/").reduce((d,m,v,_)=>!m||(0,E.isGroupSegment)(m)||"@"===m[0]||("page"===m||"route"===m)&&v===_.length-1?d:d+"/"+m,""))}function normalizeRscURL(d){return d.replace(/\.rsc($|\?)/,"$1")}function normalizePostponedURL(d){let m=(0,x.parse)(d),{pathname:v}=m;return v&&v.startsWith("/_next/postponed")?(v=v.substring(16)||"/",(0,x.format)({...m,pathname:v})):d}},66250:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{formatUrl:function(){return formatUrl},urlObjectKeys:function(){return T},formatWithValidation:function(){return formatWithValidation}});let _=v(19153),E=_._(v(71664)),x=/https?|ftp|gopher|file/;function formatUrl(d){let{auth:m,hostname:v}=d,_=d.protocol||"",T=d.pathname||"",A=d.hash||"",j=d.query||"",U=!1;m=m?encodeURIComponent(m).replace(/%3A/i,":")+"@":"",d.host?U=m+d.host:v&&(U=m+(~v.indexOf(":")?"["+v+"]":v),d.port&&(U+=":"+d.port)),j&&"object"==typeof j&&(j=String(E.urlQueryToSearchParams(j)));let F=d.search||j&&"?"+j||"";return _&&!_.endsWith(":")&&(_+=":"),d.slashes||(!_||x.test(_))&&!1!==U?(U="//"+(U||""),T&&"/"!==T[0]&&(T="/"+T)):U||(U=""),A&&"#"!==A[0]&&(A="#"+A),F&&"?"!==F[0]&&(F="?"+F),""+_+U+(T=T.replace(/[?#]/g,encodeURIComponent))+(F=F.replace("#","%23"))+A}let T=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function formatWithValidation(d){return formatUrl(d)}},41729:(d,m)=>{"use strict";function handleSmoothScroll(d,m){if(void 0===m&&(m={}),m.onlyHashChange){d();return}let v=document.documentElement,_=v.style.scrollBehavior;v.style.scrollBehavior="auto",m.dontForceLayout||v.getClientRects(),d(),v.style.scrollBehavior=_}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"handleSmoothScroll",{enumerable:!0,get:function(){return handleSmoothScroll}})},53449:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{getSortedRoutes:function(){return _.getSortedRoutes},isDynamicRoute:function(){return E.isDynamicRoute}});let _=v(45548),E=v(84349)},8072:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"interpolateAs",{enumerable:!0,get:function(){return interpolateAs}});let _=v(43229),E=v(86058);function interpolateAs(d,m,v){let x="",T=(0,E.getRouteRegex)(d),A=T.groups,j=(m!==d?(0,_.getRouteMatcher)(T)(m):"")||v;x=d;let U=Object.keys(A);return U.every(d=>{let m=j[d]||"",{repeat:v,optional:_}=A[d],E="["+(v?"...":"")+d+"]";return _&&(E=(m?"":"/")+"["+E+"]"),v&&!Array.isArray(m)&&(m=[m]),(_||d in j)&&(x=x.replace(E,v?m.map(d=>encodeURIComponent(d)).join("/"):encodeURIComponent(m))||"/")})||(x=""),{params:U,result:x}}},3896:(d,m)=>{"use strict";function isBot(d){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(d)}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"isBot",{enumerable:!0,get:function(){return isBot}})},84349:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"isDynamicRoute",{enumerable:!0,get:function(){return isDynamicRoute}});let v=/\/\[[^/]+?\](?=\/|$)/;function isDynamicRoute(d){return v.test(d)}},57392:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"isLocalURL",{enumerable:!0,get:function(){return isLocalURL}});let _=v(41430),E=v(19378);function isLocalURL(d){if(!(0,_.isAbsoluteUrl)(d))return!0;try{let m=(0,_.getLocationOrigin)(),v=new URL(d,m);return v.origin===m&&(0,E.hasBasePath)(v.pathname)}catch(d){return!1}}},25094:(d,m)=>{"use strict";function omit(d,m){let v={};return Object.keys(d).forEach(_=>{m.includes(_)||(v[_]=d[_])}),v}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"omit",{enumerable:!0,get:function(){return omit}})},64963:(d,m)=>{"use strict";function parsePath(d){let m=d.indexOf("#"),v=d.indexOf("?"),_=v>-1&&(m<0||v<m);return _||m>-1?{pathname:d.substring(0,_?v:m),query:_?d.substring(v,m>-1?m:void 0):"",hash:m>-1?d.slice(m):""}:{pathname:d,query:"",hash:""}}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"parsePath",{enumerable:!0,get:function(){return parsePath}})},94087:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"pathHasPrefix",{enumerable:!0,get:function(){return pathHasPrefix}});let _=v(64963);function pathHasPrefix(d,m){if("string"!=typeof d)return!1;let{pathname:v}=(0,_.parsePath)(d);return v===m||v.startsWith(m+"/")}},71664:(d,m)=>{"use strict";function searchParamsToUrlQuery(d){let m={};return d.forEach((d,v)=>{void 0===m[v]?m[v]=d:Array.isArray(m[v])?m[v].push(d):m[v]=[m[v],d]}),m}function stringifyUrlQueryParam(d){return"string"!=typeof d&&("number"!=typeof d||isNaN(d))&&"boolean"!=typeof d?"":String(d)}function urlQueryToSearchParams(d){let m=new URLSearchParams;return Object.entries(d).forEach(d=>{let[v,_]=d;Array.isArray(_)?_.forEach(d=>m.append(v,stringifyUrlQueryParam(d))):m.set(v,stringifyUrlQueryParam(_))}),m}function assign(d){for(var m=arguments.length,v=Array(m>1?m-1:0),_=1;_<m;_++)v[_-1]=arguments[_];return v.forEach(m=>{Array.from(m.keys()).forEach(m=>d.delete(m)),m.forEach((m,v)=>d.append(v,m))}),d}Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{searchParamsToUrlQuery:function(){return searchParamsToUrlQuery},urlQueryToSearchParams:function(){return urlQueryToSearchParams},assign:function(){return assign}})},74362:(d,m)=>{"use strict";function removeTrailingSlash(d){return d.replace(/\/$/,"")||"/"}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"removeTrailingSlash",{enumerable:!0,get:function(){return removeTrailingSlash}})},43229:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"getRouteMatcher",{enumerable:!0,get:function(){return getRouteMatcher}});let _=v(41430);function getRouteMatcher(d){let{re:m,groups:v}=d;return d=>{let E=m.exec(d);if(!E)return!1;let decode=d=>{try{return decodeURIComponent(d)}catch(d){throw new _.DecodeError("failed to decode param")}},x={};return Object.keys(v).forEach(d=>{let m=v[d],_=E[m.pos];void 0!==_&&(x[d]=~_.indexOf("/")?_.split("/").map(d=>decode(d)):m.repeat?[decode(_)]:decode(_))}),x}}},86058:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{getRouteRegex:function(){return getRouteRegex},getNamedRouteRegex:function(){return getNamedRouteRegex},getNamedMiddlewareRegex:function(){return getNamedMiddlewareRegex}});let _=v(9011),E=v(36861),x=v(74362);function parseParameter(d){let m=d.startsWith("[")&&d.endsWith("]");m&&(d=d.slice(1,-1));let v=d.startsWith("...");return v&&(d=d.slice(3)),{key:d,repeat:v,optional:m}}function getParametrizedRoute(d){let m=(0,x.removeTrailingSlash)(d).slice(1).split("/"),v={},T=1;return{parameterizedRoute:m.map(d=>{let m=_.INTERCEPTION_ROUTE_MARKERS.find(m=>d.startsWith(m)),x=d.match(/\[((?:\[.*\])|.+)\]/);if(m&&x){let{key:d,optional:_,repeat:A}=parseParameter(x[1]);return v[d]={pos:T++,repeat:A,optional:_},"/"+(0,E.escapeStringRegexp)(m)+"([^/]+?)"}if(!x)return"/"+(0,E.escapeStringRegexp)(d);{let{key:d,repeat:m,optional:_}=parseParameter(x[1]);return v[d]={pos:T++,repeat:m,optional:_},m?_?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:v}}function getRouteRegex(d){let{parameterizedRoute:m,groups:v}=getParametrizedRoute(d);return{re:RegExp("^"+m+"(?:/)?$"),groups:v}}function buildGetSafeRouteKey(){let d=0;return()=>{let m="",v=++d;for(;v>0;)m+=String.fromCharCode(97+(v-1)%26),v=Math.floor((v-1)/26);return m}}function getSafeKeyFromSegment(d){let{getSafeRouteKey:m,segment:v,routeKeys:_,keyPrefix:E}=d,{key:x,optional:T,repeat:A}=parseParameter(v),j=x.replace(/\W/g,"");E&&(j=""+E+j);let U=!1;return(0===j.length||j.length>30)&&(U=!0),isNaN(parseInt(j.slice(0,1)))||(U=!0),U&&(j=m()),E?_[j]=""+E+x:_[j]=""+x,A?T?"(?:/(?<"+j+">.+?))?":"/(?<"+j+">.+?)":"/(?<"+j+">[^/]+?)"}function getNamedParametrizedRoute(d,m){let v=(0,x.removeTrailingSlash)(d).slice(1).split("/"),T=buildGetSafeRouteKey(),A={};return{namedParameterizedRoute:v.map(d=>{let v=_.INTERCEPTION_ROUTE_MARKERS.some(m=>d.startsWith(m)),x=d.match(/\[((?:\[.*\])|.+)\]/);return v&&x?getSafeKeyFromSegment({getSafeRouteKey:T,segment:x[1],routeKeys:A,keyPrefix:m?"nxtI":void 0}):x?getSafeKeyFromSegment({getSafeRouteKey:T,segment:x[1],routeKeys:A,keyPrefix:m?"nxtP":void 0}):"/"+(0,E.escapeStringRegexp)(d)}).join(""),routeKeys:A}}function getNamedRouteRegex(d,m){let v=getNamedParametrizedRoute(d,m);return{...getRouteRegex(d),namedRegex:"^"+v.namedParameterizedRoute+"(?:/)?$",routeKeys:v.routeKeys}}function getNamedMiddlewareRegex(d,m){let{parameterizedRoute:v}=getParametrizedRoute(d),{catchAll:_=!0}=m;if("/"===v)return{namedRegex:"^/"+(_?".*":"")+"$"};let{namedParameterizedRoute:E}=getNamedParametrizedRoute(d,!1);return{namedRegex:"^"+E+(_?"(?:(/.*)?)":"")+"$"}}},45548:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"getSortedRoutes",{enumerable:!0,get:function(){return getSortedRoutes}});let UrlNode=class UrlNode{insert(d){this._insert(d.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(d){void 0===d&&(d="/");let m=[...this.children.keys()].sort();null!==this.slugName&&m.splice(m.indexOf("[]"),1),null!==this.restSlugName&&m.splice(m.indexOf("[...]"),1),null!==this.optionalRestSlugName&&m.splice(m.indexOf("[[...]]"),1);let v=m.map(m=>this.children.get(m)._smoosh(""+d+m+"/")).reduce((d,m)=>[...d,...m],[]);if(null!==this.slugName&&v.push(...this.children.get("[]")._smoosh(d+"["+this.slugName+"]/")),!this.placeholder){let m="/"===d?"/":d.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+m+'" and "'+m+"[[..."+this.optionalRestSlugName+']]").');v.unshift(m)}return null!==this.restSlugName&&v.push(...this.children.get("[...]")._smoosh(d+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&v.push(...this.children.get("[[...]]")._smoosh(d+"[[..."+this.optionalRestSlugName+"]]/")),v}_insert(d,m,v){if(0===d.length){this.placeholder=!1;return}if(v)throw Error("Catch-all must be the last part of the URL.");let _=d[0];if(_.startsWith("[")&&_.endsWith("]")){let E=_.slice(1,-1),x=!1;if(E.startsWith("[")&&E.endsWith("]")&&(E=E.slice(1,-1),x=!0),E.startsWith("...")&&(E=E.substring(3),v=!0),E.startsWith("[")||E.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+E+"').");if(E.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+E+"').");function handleSlug(d,v){if(null!==d&&d!==v)throw Error("You cannot use different slug names for the same dynamic path ('"+d+"' !== '"+v+"').");m.forEach(d=>{if(d===v)throw Error('You cannot have the same slug name "'+v+'" repeat within a single dynamic path');if(d.replace(/\W/g,"")===_.replace(/\W/g,""))throw Error('You cannot have the slug names "'+d+'" and "'+v+'" differ only by non-word symbols within a single dynamic path')}),m.push(v)}if(v){if(x){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+d[0]+'" ).');handleSlug(this.optionalRestSlugName,E),this.optionalRestSlugName=E,_="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+d[0]+'").');handleSlug(this.restSlugName,E),this.restSlugName=E,_="[...]"}}else{if(x)throw Error('Optional route parameters are not yet supported ("'+d[0]+'").');handleSlug(this.slugName,E),this.slugName=E,_="[]"}}this.children.has(_)||this.children.set(_,new UrlNode),this.children.get(_)._insert(d.slice(1),m,v)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}};function getSortedRoutes(d){let m=new UrlNode;return d.forEach(d=>m.insert(d)),m.smoosh()}},5486:(d,m)=>{"use strict";function isGroupSegment(d){return"("===d[0]&&d.endsWith(")")}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"isGroupSegment",{enumerable:!0,get:function(){return isGroupSegment}})},41430:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{WEB_VITALS:function(){return v},execOnce:function(){return execOnce},isAbsoluteUrl:function(){return isAbsoluteUrl},getLocationOrigin:function(){return getLocationOrigin},getURL:function(){return getURL},getDisplayName:function(){return getDisplayName},isResSent:function(){return isResSent},normalizeRepeatedSlashes:function(){return normalizeRepeatedSlashes},loadGetInitialProps:function(){return loadGetInitialProps},SP:function(){return E},ST:function(){return x},DecodeError:function(){return DecodeError},NormalizeError:function(){return NormalizeError},PageNotFoundError:function(){return PageNotFoundError},MissingStaticPage:function(){return MissingStaticPage},MiddlewareNotFoundError:function(){return MiddlewareNotFoundError},stringifyError:function(){return stringifyError}});let v=["CLS","FCP","FID","INP","LCP","TTFB"];function execOnce(d){let m,v=!1;return function(){for(var _=arguments.length,E=Array(_),x=0;x<_;x++)E[x]=arguments[x];return v||(v=!0,m=d(...E)),m}}let _=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,isAbsoluteUrl=d=>_.test(d);function getLocationOrigin(){let{protocol:d,hostname:m,port:v}=window.location;return d+"//"+m+(v?":"+v:"")}function getURL(){let{href:d}=window.location,m=getLocationOrigin();return d.substring(m.length)}function getDisplayName(d){return"string"==typeof d?d:d.displayName||d.name||"Unknown"}function isResSent(d){return d.finished||d.headersSent}function normalizeRepeatedSlashes(d){let m=d.split("?"),v=m[0];return v.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(m[1]?"?"+m.slice(1).join("?"):"")}async function loadGetInitialProps(d,m){let v=m.res||m.ctx&&m.ctx.res;if(!d.getInitialProps)return m.ctx&&m.Component?{pageProps:await loadGetInitialProps(m.Component,m.ctx)}:{};let _=await d.getInitialProps(m);if(v&&isResSent(v))return _;if(!_){let m='"'+getDisplayName(d)+'.getInitialProps()" should resolve to an object. But found "'+_+'" instead.';throw Error(m)}return _}let E="undefined"!=typeof performance,x=E&&["mark","measure","getEntriesByName"].every(d=>"function"==typeof performance[d]);let DecodeError=class DecodeError extends Error{};let NormalizeError=class NormalizeError extends Error{};let PageNotFoundError=class PageNotFoundError extends Error{constructor(d){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+d}};let MissingStaticPage=class MissingStaticPage extends Error{constructor(d,m){super(),this.message="Failed to load static file for page: "+d+" "+m}};let MiddlewareNotFoundError=class MiddlewareNotFoundError extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}};function stringifyError(d){return JSON.stringify({message:d.message,stack:d.stack})}},19894:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"createProxy",{enumerable:!0,get:function(){return E}});let _=v(51959),E=_.createClientModuleProxy},57909:(d,m,v)=>{"use strict";let{createProxy:_}=v(19894);d.exports=_("/home/scientific_peach/fake/work/nuked_defi/nuked_defi/node_modules/next/dist/client/components/app-router.js")},40443:(d,m,v)=>{"use strict";let{createProxy:_}=v(19894);d.exports=_("/home/scientific_peach/fake/work/nuked_defi/nuked_defi/node_modules/next/dist/client/components/error-boundary.js")},28141:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{DYNAMIC_ERROR_CODE:function(){return v},DynamicServerError:function(){return DynamicServerError}});let v="DYNAMIC_SERVER_USAGE";let DynamicServerError=class DynamicServerError extends Error{constructor(d){super("Dynamic server usage: "+d),this.digest=v}};("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},12214:(d,m,v)=>{"use strict";let{createProxy:_}=v(19894);d.exports=_("/home/scientific_peach/fake/work/nuked_defi/nuked_defi/node_modules/next/dist/client/components/layout-router.js")},43132:(d,m,v)=>{"use strict";function maybePostpone(d,m){if(!d.isStaticGeneration||!d.experimental.ppr)return;let _=v(43196);"function"==typeof _.unstable_postpone&&_.unstable_postpone(m)}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"maybePostpone",{enumerable:!0,get:function(){return maybePostpone}}),("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},30488:(d,m,v)=>{"use strict";let{createProxy:_}=v(19894);d.exports=_("/home/scientific_peach/fake/work/nuked_defi/nuked_defi/node_modules/next/dist/client/components/not-found-boundary.js")},31459:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"default",{enumerable:!0,get:function(){return NotFound}});let _=v(36596),E=_._(v(43196)),x={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block"},h1:{display:"inline-block",margin:"0 20px 0 0",padding:"0 23px 0 0",fontSize:24,fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:14,fontWeight:400,lineHeight:"49px",margin:0}};function NotFound(){return E.default.createElement(E.default.Fragment,null,E.default.createElement("title",null,"404: This page could not be found."),E.default.createElement("div",{style:x.error},E.default.createElement("div",null,E.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}),E.default.createElement("h1",{className:"next-error-h1",style:x.h1},"404"),E.default.createElement("div",{style:x.desc},E.default.createElement("h2",{style:x.h2},"This page could not be found.")))))}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},50235:(d,m,v)=>{"use strict";let{createProxy:_}=v(19894);d.exports=_("/home/scientific_peach/fake/work/nuked_defi/nuked_defi/node_modules/next/dist/client/components/render-from-template-context.js")},18781:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"createSearchParamsBailoutProxy",{enumerable:!0,get:function(){return createSearchParamsBailoutProxy}});let _=v(19056);function createSearchParamsBailoutProxy(){return new Proxy({},{get(d,m){"string"==typeof m&&(0,_.staticGenerationBailout)("searchParams."+m)}})}("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},19056:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"staticGenerationBailout",{enumerable:!0,get:function(){return staticGenerationBailout}});let _=v(28141),E=v(43132),x=v(45869);let StaticGenBailoutError=class StaticGenBailoutError extends Error{constructor(...d){super(...d),this.code="NEXT_STATIC_GEN_BAILOUT"}};function formatErrorMessage(d,m){let{dynamic:v,link:_}=m||{};return"Page"+(v?' with `dynamic = "'+v+'"`':"")+" couldn't be rendered statically because it used `"+d+"`."+(_?" See more info here: "+_:"")}let staticGenerationBailout=(d,m)=>{let v=x.staticGenerationAsyncStorage.getStore();if(!v)return!1;if(v.forceStatic)return!0;if(v.dynamicShouldError){var T;throw new StaticGenBailoutError(formatErrorMessage(d,{...m,dynamic:null!=(T=null==m?void 0:m.dynamic)?T:"error"}))}let A=formatErrorMessage(d,{...m,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if((0,E.maybePostpone)(v,A),v.revalidate=0,(null==m?void 0:m.dynamic)||(v.staticPrefetchBailout=!0),v.isStaticGeneration){let m=new _.DynamicServerError(A);throw v.dynamicUsageDescription=d,v.dynamicUsageStack=m.stack,m}return!1};("function"==typeof m.default||"object"==typeof m.default&&null!==m.default)&&void 0===m.default.__esModule&&(Object.defineProperty(m.default,"__esModule",{value:!0}),Object.assign(m.default,m),d.exports=m.default)},84956:(d,m,v)=>{"use strict";let{createProxy:_}=v(19894);d.exports=_("/home/scientific_peach/fake/work/nuked_defi/nuked_defi/node_modules/next/dist/client/components/static-generation-searchparams-bailout-provider.js")},53320:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{renderToReadableStream:function(){return _.renderToReadableStream},decodeReply:function(){return _.decodeReply},decodeAction:function(){return _.decodeAction},decodeFormState:function(){return _.decodeFormState},AppRouter:function(){return E.default},LayoutRouter:function(){return x.default},RenderFromTemplateContext:function(){return T.default},staticGenerationAsyncStorage:function(){return A.staticGenerationAsyncStorage},requestAsyncStorage:function(){return j.requestAsyncStorage},actionAsyncStorage:function(){return U.actionAsyncStorage},staticGenerationBailout:function(){return F.staticGenerationBailout},createSearchParamsBailoutProxy:function(){return K.createSearchParamsBailoutProxy},serverHooks:function(){return Q},preloadStyle:function(){return X.preloadStyle},preloadFont:function(){return X.preloadFont},preconnect:function(){return X.preconnect},taintObjectReference:function(){return ee.taintObjectReference},StaticGenerationSearchParamsBailoutProvider:function(){return W.default},NotFoundBoundary:function(){return er}});let _=v(51959),E=_interop_require_default(v(57909)),x=_interop_require_default(v(12214)),T=_interop_require_default(v(50235)),A=v(45869),j=v(54580),U=v(72934),F=v(19056),W=_interop_require_default(v(84956)),K=v(18781),Q=_interop_require_wildcard(v(28141)),X=v(92385),ee=v(14788);function _interop_require_default(d){return d&&d.__esModule?d:{default:d}}function _getRequireWildcardCache(d){if("function"!=typeof WeakMap)return null;var m=new WeakMap,v=new WeakMap;return(_getRequireWildcardCache=function(d){return d?v:m})(d)}function _interop_require_wildcard(d,m){if(!m&&d&&d.__esModule)return d;if(null===d||"object"!=typeof d&&"function"!=typeof d)return{default:d};var v=_getRequireWildcardCache(m);if(v&&v.has(d))return v.get(d);var _={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if("default"!==x&&Object.prototype.hasOwnProperty.call(d,x)){var T=E?Object.getOwnPropertyDescriptor(d,x):null;T&&(T.get||T.set)?Object.defineProperty(_,x,T):_[x]=d[x]}return _.default=d,v&&v.set(d,_),_}let{NotFoundBoundary:er}=v(30488)},92385:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{preloadStyle:function(){return preloadStyle},preloadFont:function(){return preloadFont},preconnect:function(){return preconnect}});let _=_interop_require_default(v(25161));function _interop_require_default(d){return d&&d.__esModule?d:{default:d}}function preloadStyle(d,m){let v={as:"style"};"string"==typeof m&&(v.crossOrigin=m),_.default.preload(d,v)}function preloadFont(d,m,v){let E={as:"font",type:m};"string"==typeof v&&(E.crossOrigin=v),_.default.preload(d,E)}function preconnect(d,m){_.default.preconnect(d,"string"==typeof m?{crossOrigin:m}:void 0)}},14788:(d,m,v)=>{"use strict";function notImplemented(){throw Error("Taint can only be used with the taint flag.")}Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{taintObjectReference:function(){return _},taintUniqueValue:function(){return E}}),v(43196);let _=notImplemented,E=notImplemented},55533:(d,m)=>{"use strict";var v;Object.defineProperty(m,"x",{enumerable:!0,get:function(){return v}}),function(d){d.PAGES="PAGES",d.PAGES_API="PAGES_API",d.APP_PAGE="APP_PAGE",d.APP_ROUTE="APP_ROUTE"}(v||(v={}))},36577:(d,m,v)=>{"use strict";d.exports=v(20399)},25161:(d,m,v)=>{"use strict";d.exports=v(36577).vendored["react-rsc"].ReactDOM},31487:(d,m,v)=>{"use strict";d.exports=v(36577).vendored["react-rsc"].ReactJsxRuntime},51959:(d,m,v)=>{"use strict";d.exports=v(36577).vendored["react-rsc"].ReactServerDOMWebpackServerEdge},43196:(d,m,v)=>{"use strict";d.exports=v(36577).vendored["react-rsc"].React},8027:(d,m)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{NEXT_QUERY_PARAM_PREFIX:function(){return v},PRERENDER_REVALIDATE_HEADER:function(){return _},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return E},NEXT_DID_POSTPONE_HEADER:function(){return x},NEXT_CACHE_TAGS_HEADER:function(){return T},NEXT_CACHE_SOFT_TAGS_HEADER:function(){return A},NEXT_CACHE_REVALIDATED_TAGS_HEADER:function(){return j},NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER:function(){return U},NEXT_CACHE_TAG_MAX_LENGTH:function(){return F},NEXT_CACHE_SOFT_TAG_MAX_LENGTH:function(){return W},NEXT_CACHE_IMPLICIT_TAG_ID:function(){return K},CACHE_ONE_YEAR:function(){return Q},MIDDLEWARE_FILENAME:function(){return X},MIDDLEWARE_LOCATION_REGEXP:function(){return ee},INSTRUMENTATION_HOOK_FILENAME:function(){return er},PAGES_DIR_ALIAS:function(){return ei},DOT_NEXT_ALIAS:function(){return eo},ROOT_DIR_ALIAS:function(){return ea},APP_DIR_ALIAS:function(){return es},RSC_MOD_REF_PROXY_ALIAS:function(){return el},RSC_ACTION_VALIDATE_ALIAS:function(){return ec},RSC_ACTION_PROXY_ALIAS:function(){return eu},RSC_ACTION_ENCRYPTION_ALIAS:function(){return ed},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return eh},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return ef},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return ep},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return eg},SERVER_PROPS_SSG_CONFLICT:function(){return em},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return eb},SERVER_PROPS_EXPORT_ERROR:function(){return ey},GSP_NO_RETURNED_VALUE:function(){return ew},GSSP_NO_RETURNED_VALUE:function(){return ev},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return e_},GSSP_COMPONENT_MEMBER_ERROR:function(){return eC},NON_STANDARD_NODE_ENV:function(){return eE},SSG_FALLBACK_EXPORT_ERROR:function(){return ex},ESLINT_DEFAULT_DIRS:function(){return eS},ESLINT_PROMPT_VALUES:function(){return eP},SERVER_RUNTIME:function(){return eO},WEBPACK_LAYERS:function(){return eR},WEBPACK_RESOURCE_QUERIES:function(){return eT}});let v="nxtP",_="x-prerender-revalidate",E="x-prerender-revalidate-if-generated",x="x-nextjs-postponed",T="x-next-cache-tags",A="x-next-cache-soft-tags",j="x-next-revalidated-tags",U="x-next-revalidate-tag-token",F=256,W=1024,K="_N_T_",Q=31536e3,X="middleware",ee=`(?:src/)?${X}`,er="instrumentation",ei="private-next-pages",eo="private-dot-next",ea="private-next-root-dir",es="private-next-app-dir",el="private-next-rsc-mod-ref-proxy",ec="private-next-rsc-action-validate",eu="private-next-rsc-action-proxy",ed="private-next-rsc-action-encryption",eh="private-next-rsc-action-client-wrapper",ef="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",ep="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",eg="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",em="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",eb="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",ey="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",ew="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",ev="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",e_="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",eC="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",eE='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',ex="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",eS=["app","pages","components","lib","src"],eP=[{title:"Strict",recommended:!0,config:{extends:"next/core-web-vitals"}},{title:"Base",config:{extends:"next"}},{title:"Cancel",config:null}],eO={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},ek={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",api:"api",middleware:"middleware",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",appMetadataRoute:"app-metadata-route",appRouteHandler:"app-route-handler"},eR={...ek,GROUP:{server:[ek.reactServerComponents,ek.actionBrowser,ek.appMetadataRoute,ek.appRouteHandler],nonClientServerTarget:[ek.middleware,ek.api],app:[ek.reactServerComponents,ek.actionBrowser,ek.appMetadataRoute,ek.appRouteHandler,ek.serverSideRendering,ek.appPagesBrowser]}},eT={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}},4811:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"getSegmentParam",{enumerable:!0,get:function(){return getSegmentParam}});let _=v(9011);function getSegmentParam(d){let m=_.INTERCEPTION_ROUTE_MARKERS.find(m=>d.startsWith(m));return(m&&(d=d.slice(m.length)),d.startsWith("[[...")&&d.endsWith("]]"))?{type:"optional-catchall",param:d.slice(5,-2)}:d.startsWith("[...")&&d.endsWith("]")?{type:"catchall",param:d.slice(4,-1)}:d.startsWith("[")&&d.endsWith("]")?{type:"dynamic",param:d.slice(1,-1)}:null}},9011:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0}),function(d,m){for(var v in m)Object.defineProperty(d,v,{enumerable:!0,get:m[v]})}(m,{INTERCEPTION_ROUTE_MARKERS:function(){return E},isInterceptionRouteAppPath:function(){return isInterceptionRouteAppPath},extractInterceptionRouteInformation:function(){return extractInterceptionRouteInformation}});let _=v(72803),E=["(..)(..)","(.)","(..)","(...)"];function isInterceptionRouteAppPath(d){return void 0!==d.split("/").find(d=>E.find(m=>d.startsWith(m)))}function extractInterceptionRouteInformation(d){let m,v,x;for(let _ of d.split("/"))if(v=E.find(d=>_.startsWith(d))){[m,x]=d.split(v,2);break}if(!m||!v||!x)throw Error(`Invalid interception route: ${d}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(m=(0,_.normalizeAppPath)(m),v){case"(.)":x="/"===m?`/${x}`:m+"/"+x;break;case"(..)":if("/"===m)throw Error(`Invalid interception route: ${d}. Cannot use (..) marker at the root level, use (.) instead.`);x=m.split("/").slice(0,-1).concat(x).join("/");break;case"(...)":x="/"+x;break;case"(..)(..)":let T=m.split("/");if(T.length<=2)throw Error(`Invalid interception route: ${d}. Cannot use (..)(..) marker at the root level or one level up.`);x=T.slice(0,-2).concat(x).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:m,interceptedRoute:x}}},27834:(d,m,v)=>{"use strict";d.exports=v(20399)},12919:(d,m,v)=>{"use strict";d.exports=v(27834).vendored.contexts.AppRouterContext},30335:(d,m,v)=>{"use strict";d.exports=v(27834).vendored.contexts.HooksClientContext},11293:(d,m,v)=>{"use strict";d.exports=v(27834).vendored.contexts.RouterContext},37271:(d,m,v)=>{"use strict";d.exports=v(27834).vendored.contexts.ServerInsertedHtml},76281:(d,m,v)=>{"use strict";d.exports=v(27834).vendored["react-ssr"].ReactDOM},22406:(d,m,v)=>{"use strict";d.exports=v(27834).vendored["react-ssr"].ReactJsxRuntime},13908:(d,m,v)=>{"use strict";d.exports=v(27834).vendored["react-ssr"].ReactServerDOMWebpackClientEdge},80404:(d,m,v)=>{"use strict";d.exports=v(27834).vendored["react-ssr"].React},55731:(d,m,v)=>{d.exports=v(97223)},36460:(d,m,v)=>{d.exports=v(16009)},51429:(d,m,v)=>{"function"==typeof process.addon?d.exports=process.addon.bind(process):d.exports=v(69028)},69028:(d,m,v)=>{var _=v(57147),E=v(71017),x=v(22037),T=require,A=process.config&&process.config.variables||{},j=!!process.env.PREBUILDS_ONLY,U=process.versions.modules,F=isElectron()?"electron":isNwjs()?"node-webkit":"node",W=process.env.npm_config_arch||x.arch(),K=process.env.npm_config_platform||x.platform(),Q=process.env.LIBC||(isAlpine(K)?"musl":"glibc"),X=process.env.ARM_VERSION||("arm64"===W?"8":A.arm_version)||"",ee=(process.versions.uv||"").split(".")[0];function load(d){return T(load.resolve(d))}function readdirSync(d){try{return _.readdirSync(d)}catch(d){return[]}}function getFirst(d,m){var v=readdirSync(d).filter(m);return v[0]&&E.join(d,v[0])}function matchBuild(d){return/\.node$/.test(d)}function parseTuple(d){var m=d.split("-");if(2===m.length){var v=m[0],_=m[1].split("+");if(v&&_.length&&_.every(Boolean))return{name:d,platform:v,architectures:_}}}function matchTuple(d,m){return function(v){return null!=v&&v.platform===d&&v.architectures.includes(m)}}function compareTuples(d,m){return d.architectures.length-m.architectures.length}function parseTags(d){var m=d.split("."),v=m.pop(),_={file:d,specificity:0};if("node"===v){for(var E=0;E<m.length;E++){var x=m[E];if("node"===x||"electron"===x||"node-webkit"===x)_.runtime=x;else if("napi"===x)_.napi=!0;else if("abi"===x.slice(0,3))_.abi=x.slice(3);else if("uv"===x.slice(0,2))_.uv=x.slice(2);else if("armv"===x.slice(0,4))_.armv=x.slice(4);else{if("glibc"!==x&&"musl"!==x)continue;_.libc=x}_.specificity++}return _}}function matchTags(d,m){return function(v){return null!=v&&(v.runtime===d||!!runtimeAgnostic(v))&&(v.abi===m||!!v.napi)&&(!v.uv||v.uv===ee)&&(!v.armv||v.armv===X)&&(!v.libc||v.libc===Q)}}function runtimeAgnostic(d){return"node"===d.runtime&&d.napi}function compareTags(d){return function(m,v){return m.runtime!==v.runtime?m.runtime===d?-1:1:m.abi!==v.abi?m.abi?-1:1:m.specificity!==v.specificity?m.specificity>v.specificity?-1:1:0}}function isNwjs(){return!!(process.versions&&process.versions.nw)}function isElectron(){return!!process.versions&&!!process.versions.electron||!!process.env.ELECTRON_RUN_AS_NODE||"undefined"!=typeof window&&window.process&&"renderer"===window.process.type}function isAlpine(d){return"linux"===d&&_.existsSync("/etc/alpine-release")}d.exports=load,load.resolve=load.path=function(d){d=E.resolve(d||".");try{var m=T(E.join(d,"package.json")).name.toUpperCase().replace(/-/g,"_");process.env[m+"_PREBUILD"]&&(d=process.env[m+"_PREBUILD"])}catch(d){}if(!j){var v=getFirst(E.join(d,"build/Release"),matchBuild);if(v)return v;var _=getFirst(E.join(d,"build/Debug"),matchBuild);if(_)return _}var x=resolve(d);if(x)return x;var A=resolve(E.dirname(process.execPath));if(A)return A;throw Error("No native build was found for "+["platform="+K,"arch="+W,"runtime="+F,"abi="+U,"uv="+ee,X?"armv="+X:"","libc="+Q,"node="+process.versions.node,process.versions.electron?"electron="+process.versions.electron:"","webpack=true"].filter(Boolean).join(" ")+"\n    loaded from: "+d+"\n");function resolve(d){var m=readdirSync(E.join(d,"prebuilds")).map(parseTuple).filter(matchTuple(K,W)).sort(compareTuples)[0];if(m){var v=E.join(d,"prebuilds",m.name),_=readdirSync(v).map(parseTags).filter(matchTags(F,U)).sort(compareTags(F))[0];if(_)return E.join(v,_.file)}}},load.parseTags=parseTags,load.matchTags=matchTags,load.compareTags=compareTags,load.parseTuple=parseTuple,load.matchTuple=matchTuple,load.compareTuples=compareTuples},62184:(d,m,v)=>{"use strict";let _=v(15536),E=[function(){},function(d,m,v,_){if(_===m.length)throw Error("Ran out of data");let E=m[_];d[v]=E,d[v+1]=E,d[v+2]=E,d[v+3]=255},function(d,m,v,_){if(_+1>=m.length)throw Error("Ran out of data");let E=m[_];d[v]=E,d[v+1]=E,d[v+2]=E,d[v+3]=m[_+1]},function(d,m,v,_){if(_+2>=m.length)throw Error("Ran out of data");d[v]=m[_],d[v+1]=m[_+1],d[v+2]=m[_+2],d[v+3]=255},function(d,m,v,_){if(_+3>=m.length)throw Error("Ran out of data");d[v]=m[_],d[v+1]=m[_+1],d[v+2]=m[_+2],d[v+3]=m[_+3]}],x=[function(){},function(d,m,v,_){let E=m[0];d[v]=E,d[v+1]=E,d[v+2]=E,d[v+3]=_},function(d,m,v){let _=m[0];d[v]=_,d[v+1]=_,d[v+2]=_,d[v+3]=m[1]},function(d,m,v,_){d[v]=m[0],d[v+1]=m[1],d[v+2]=m[2],d[v+3]=_},function(d,m,v){d[v]=m[0],d[v+1]=m[1],d[v+2]=m[2],d[v+3]=m[3]}];function bitRetriever(d,m){let v=[],_=0;function split(){let E,x,T,A,j,U,F,W;if(_===d.length)throw Error("Ran out of data");let K=d[_];switch(_++,m){default:throw Error("unrecognised depth");case 16:F=d[_],_++,v.push((K<<8)+F);break;case 4:F=15&K,W=K>>4,v.push(W,F);break;case 2:j=3&K,U=K>>2&3,F=K>>4&3,W=K>>6&3,v.push(W,F,U,j);break;case 1:E=1&K,x=K>>1&1,T=K>>2&1,A=K>>3&1,j=K>>4&1,U=K>>5&1,F=K>>6&1,W=K>>7&1,v.push(W,F,U,j,A,T,x,E)}}return{get:function(d){for(;v.length<d;)split();let m=v.slice(0,d);return v=v.slice(d),m},resetAfterLine:function(){v.length=0},end:function(){if(_!==d.length)throw Error("extra data found")}}}function mapImage8Bit(d,m,v,_,x,T){let A=d.width,j=d.height,U=d.index;for(let d=0;d<j;d++)for(let j=0;j<A;j++){let A=v(j,d,U);E[_](m,x,A,T),T+=_}return T}function mapImageCustomBit(d,m,v,_,E,T){let A=d.width,j=d.height,U=d.index;for(let d=0;d<j;d++){for(let j=0;j<A;j++){let A=E.get(_),F=v(j,d,U);x[_](m,A,F,T)}E.resetAfterLine()}}m.dataToBitMap=function(d,m){let v,E,x,T,A=m.width,j=m.height,U=m.depth,F=m.bpp,W=m.interlace;8!==U&&(v=bitRetriever(d,U)),E=U<=8?Buffer.alloc(A*j*4):new Uint16Array(A*j*4);let K=Math.pow(2,U)-1,Q=0;if(W)x=_.getImagePasses(A,j),T=_.getInterlaceIterator(A,j);else{let d=0;T=function(){let m=d;return d+=4,m},x=[{width:A,height:j}]}for(let m=0;m<x.length;m++)8===U?Q=mapImage8Bit(x[m],E,T,F,d,Q):mapImageCustomBit(x[m],E,T,F,v,K);if(8===U){if(Q!==d.length)throw Error("extra data found")}else v.end();return E}},27817:(d,m,v)=>{"use strict";let _=v(11394);d.exports=function(d,m,v,E){let x=-1!==[_.COLORTYPE_COLOR_ALPHA,_.COLORTYPE_ALPHA].indexOf(E.colorType);if(E.colorType===E.inputColorType){let m;let v=(m=new ArrayBuffer(2),new DataView(m).setInt16(0,256,!0),256!==new Int16Array(m)[0]);if(8===E.bitDepth||16===E.bitDepth&&v)return d}let T=16!==E.bitDepth?d:new Uint16Array(d.buffer),A=255,j=_.COLORTYPE_TO_BPP_MAP[E.inputColorType];4!==j||E.inputHasAlpha||(j=3);let U=_.COLORTYPE_TO_BPP_MAP[E.colorType];16===E.bitDepth&&(A=65535,U*=2);let F=Buffer.alloc(m*v*U),W=0,K=0,Q=E.bgColor||{};function getRGBA(){let d,m,v;let j=A;switch(E.inputColorType){case _.COLORTYPE_COLOR_ALPHA:j=T[W+3],d=T[W],m=T[W+1],v=T[W+2];break;case _.COLORTYPE_COLOR:d=T[W],m=T[W+1],v=T[W+2];break;case _.COLORTYPE_ALPHA:j=T[W+1],m=d=T[W],v=d;break;case _.COLORTYPE_GRAYSCALE:m=d=T[W],v=d;break;default:throw Error("input color type:"+E.inputColorType+" is not supported at present")}return E.inputHasAlpha&&!x&&(j/=A,d=Math.min(Math.max(Math.round((1-j)*Q.red+j*d),0),A),m=Math.min(Math.max(Math.round((1-j)*Q.green+j*m),0),A),v=Math.min(Math.max(Math.round((1-j)*Q.blue+j*v),0),A)),{red:d,green:m,blue:v,alpha:j}}void 0===Q.red&&(Q.red=A),void 0===Q.green&&(Q.green=A),void 0===Q.blue&&(Q.blue=A);for(let d=0;d<v;d++)for(let d=0;d<m;d++){let d=getRGBA(T,W);switch(E.colorType){case _.COLORTYPE_COLOR_ALPHA:case _.COLORTYPE_COLOR:8===E.bitDepth?(F[K]=d.red,F[K+1]=d.green,F[K+2]=d.blue,x&&(F[K+3]=d.alpha)):(F.writeUInt16BE(d.red,K),F.writeUInt16BE(d.green,K+2),F.writeUInt16BE(d.blue,K+4),x&&F.writeUInt16BE(d.alpha,K+6));break;case _.COLORTYPE_ALPHA:case _.COLORTYPE_GRAYSCALE:{let m=(d.red+d.green+d.blue)/3;8===E.bitDepth?(F[K]=m,x&&(F[K+1]=d.alpha)):(F.writeUInt16BE(m,K),x&&F.writeUInt16BE(d.alpha,K+2));break}default:throw Error("unrecognised color Type "+E.colorType)}W+=j,K+=U}return F}},86243:(d,m,v)=>{"use strict";let _=v(73837),E=v(12781),x=d.exports=function(){E.call(this),this._buffers=[],this._buffered=0,this._reads=[],this._paused=!1,this._encoding="utf8",this.writable=!0};_.inherits(x,E),x.prototype.read=function(d,m){this._reads.push({length:Math.abs(d),allowLess:d<0,func:m}),process.nextTick((function(){this._process(),this._paused&&this._reads&&this._reads.length>0&&(this._paused=!1,this.emit("drain"))}).bind(this))},x.prototype.write=function(d,m){let v;return this.writable?(v=Buffer.isBuffer(d)?d:Buffer.from(d,m||this._encoding),this._buffers.push(v),this._buffered+=v.length,this._process(),this._reads&&0===this._reads.length&&(this._paused=!0),this.writable&&!this._paused):(this.emit("error",Error("Stream not writable")),!1)},x.prototype.end=function(d,m){d&&this.write(d,m),this.writable=!1,this._buffers&&(0===this._buffers.length?this._end():(this._buffers.push(null),this._process()))},x.prototype.destroySoon=x.prototype.end,x.prototype._end=function(){this._reads.length>0&&this.emit("error",Error("Unexpected end of input")),this.destroy()},x.prototype.destroy=function(){this._buffers&&(this.writable=!1,this._reads=null,this._buffers=null,this.emit("close"))},x.prototype._processReadAllowingLess=function(d){this._reads.shift();let m=this._buffers[0];m.length>d.length?(this._buffered-=d.length,this._buffers[0]=m.slice(d.length),d.func.call(this,m.slice(0,d.length))):(this._buffered-=m.length,this._buffers.shift(),d.func.call(this,m))},x.prototype._processRead=function(d){this._reads.shift();let m=0,v=0,_=Buffer.alloc(d.length);for(;m<d.length;){let E=this._buffers[v++],x=Math.min(E.length,d.length-m);E.copy(_,m,0,x),m+=x,x!==E.length&&(this._buffers[--v]=E.slice(x))}v>0&&this._buffers.splice(0,v),this._buffered-=d.length,d.func.call(this,_)},x.prototype._process=function(){try{for(;this._buffered>0&&this._reads&&this._reads.length>0;){let d=this._reads[0];if(d.allowLess)this._processReadAllowingLess(d);else if(this._buffered>=d.length)this._processRead(d);else break}this._buffers&&!this.writable&&this._end()}catch(d){this.emit("error",d)}}},11394:d=>{"use strict";d.exports={PNG_SIGNATURE:[137,80,78,71,13,10,26,10],TYPE_IHDR:1229472850,TYPE_IEND:1229278788,TYPE_IDAT:1229209940,TYPE_PLTE:1347179589,TYPE_tRNS:1951551059,TYPE_gAMA:1732332865,COLORTYPE_GRAYSCALE:0,COLORTYPE_PALETTE:1,COLORTYPE_COLOR:2,COLORTYPE_ALPHA:4,COLORTYPE_PALETTE_COLOR:3,COLORTYPE_COLOR_ALPHA:6,COLORTYPE_TO_BPP_MAP:{0:1,2:3,3:1,4:2,6:4},GAMMA_DIVISION:1e5}},53030:d=>{"use strict";let m=[];!function(){for(let d=0;d<256;d++){let v=d;for(let d=0;d<8;d++)1&v?v=3988292384^v>>>1:v>>>=1;m[d]=v}}();let v=d.exports=function(){this._crc=-1};v.prototype.write=function(d){for(let v=0;v<d.length;v++)this._crc=m[(this._crc^d[v])&255]^this._crc>>>8;return!0},v.prototype.crc32=function(){return -1^this._crc},v.crc32=function(d){let v=-1;for(let _=0;_<d.length;_++)v=m[(v^d[_])&255]^v>>>8;return -1^v}},68846:(d,m,v)=>{"use strict";let _=v(83876),E={0:function(d,m,v,_,E){for(let x=0;x<v;x++)_[E+x]=d[m+x]},1:function(d,m,v,_,E,x){for(let T=0;T<v;T++){let v=T>=x?d[m+T-x]:0,A=d[m+T]-v;_[E+T]=A}},2:function(d,m,v,_,E){for(let x=0;x<v;x++){let T=m>0?d[m+x-v]:0,A=d[m+x]-T;_[E+x]=A}},3:function(d,m,v,_,E,x){for(let T=0;T<v;T++){let A=T>=x?d[m+T-x]:0,j=m>0?d[m+T-v]:0,U=d[m+T]-(A+j>>1);_[E+T]=U}},4:function(d,m,v,E,x,T){for(let A=0;A<v;A++){let j=A>=T?d[m+A-T]:0,U=m>0?d[m+A-v]:0,F=m>0&&A>=T?d[m+A-(v+T)]:0,W=d[m+A]-_(j,U,F);E[x+A]=W}}},x={0:function(d,m,v){let _=0,E=m+v;for(let v=m;v<E;v++)_+=Math.abs(d[v]);return _},1:function(d,m,v,_){let E=0;for(let x=0;x<v;x++){let v=x>=_?d[m+x-_]:0;E+=Math.abs(d[m+x]-v)}return E},2:function(d,m,v){let _=0,E=m+v;for(let x=m;x<E;x++){let E=m>0?d[x-v]:0;_+=Math.abs(d[x]-E)}return _},3:function(d,m,v,_){let E=0;for(let x=0;x<v;x++){let T=x>=_?d[m+x-_]:0,A=m>0?d[m+x-v]:0;E+=Math.abs(d[m+x]-(T+A>>1))}return E},4:function(d,m,v,E){let x=0;for(let T=0;T<v;T++){let A=T>=E?d[m+T-E]:0,j=m>0?d[m+T-v]:0,U=m>0&&T>=E?d[m+T-(v+E)]:0;x+=Math.abs(d[m+T]-_(A,j,U))}return x}};d.exports=function(d,m,v,_,T){let A;if("filterType"in _&&-1!==_.filterType){if("number"==typeof _.filterType)A=[_.filterType];else throw Error("unrecognised filter types")}else A=[0,1,2,3,4];16===_.bitDepth&&(T*=2);let j=m*T,U=0,F=0,W=Buffer.alloc((j+1)*v),K=A[0];for(let m=0;m<v;m++){if(A.length>1){let m=1/0;for(let v=0;v<A.length;v++){let _=x[A[v]](d,F,j,T);_<m&&(K=A[v],m=_)}}W[U]=K,U++,E[K](d,F,j,W,U,T),U+=j,F+=j}return W}},83542:(d,m,v)=>{"use strict";let _=v(73837),E=v(86243),x=v(30303),T=d.exports=function(d){E.call(this);let m=[],v=this;this._filter=new x(d,{read:this.read.bind(this),write:function(d){m.push(d)},complete:function(){v.emit("complete",Buffer.concat(m))}}),this._filter.start()};_.inherits(T,E)},32536:(d,m,v)=>{"use strict";let _=v(25179),E=v(30303);m.process=function(d,m){let v=[],x=new _(d);return new E(m,{read:x.read.bind(x),write:function(d){v.push(d)},complete:function(){}}).start(),x.process(),Buffer.concat(v)}},30303:(d,m,v)=>{"use strict";let _=v(15536),E=v(83876);function getByteWidth(d,m,v){let _=d*m;return 8!==v&&(_=Math.ceil(_/(8/v))),_}let x=d.exports=function(d,m){let v=d.width,E=d.height,x=d.interlace,T=d.bpp,A=d.depth;if(this.read=m.read,this.write=m.write,this.complete=m.complete,this._imageIndex=0,this._images=[],x){let d=_.getImagePasses(v,E);for(let m=0;m<d.length;m++)this._images.push({byteWidth:getByteWidth(d[m].width,T,A),height:d[m].height,lineIndex:0})}else this._images.push({byteWidth:getByteWidth(v,T,A),height:E,lineIndex:0});8===A?this._xComparison=T:16===A?this._xComparison=2*T:this._xComparison=1};x.prototype.start=function(){this.read(this._images[this._imageIndex].byteWidth+1,this._reverseFilterLine.bind(this))},x.prototype._unFilterType1=function(d,m,v){let _=this._xComparison,E=_-1;for(let x=0;x<v;x++){let v=d[1+x],T=x>E?m[x-_]:0;m[x]=v+T}},x.prototype._unFilterType2=function(d,m,v){let _=this._lastLine;for(let E=0;E<v;E++){let v=d[1+E],x=_?_[E]:0;m[E]=v+x}},x.prototype._unFilterType3=function(d,m,v){let _=this._xComparison,E=_-1,x=this._lastLine;for(let T=0;T<v;T++){let v=d[1+T],A=x?x[T]:0,j=Math.floor(((T>E?m[T-_]:0)+A)/2);m[T]=v+j}},x.prototype._unFilterType4=function(d,m,v){let _=this._xComparison,x=_-1,T=this._lastLine;for(let A=0;A<v;A++){let v=d[1+A],j=T?T[A]:0,U=E(A>x?m[A-_]:0,j,A>x&&T?T[A-_]:0);m[A]=v+U}},x.prototype._reverseFilterLine=function(d){let m,v=d[0],_=this._images[this._imageIndex],E=_.byteWidth;if(0===v)m=d.slice(1,E+1);else switch(m=Buffer.alloc(E),v){case 1:this._unFilterType1(d,m,E);break;case 2:this._unFilterType2(d,m,E);break;case 3:this._unFilterType3(d,m,E);break;case 4:this._unFilterType4(d,m,E);break;default:throw Error("Unrecognised filter type - "+v)}this.write(m),_.lineIndex++,_.lineIndex>=_.height?(this._lastLine=null,this._imageIndex++,_=this._images[this._imageIndex]):this._lastLine=m,_?this.read(_.byteWidth+1,this._reverseFilterLine.bind(this)):(this._lastLine=null,this.complete())}},49961:d=>{"use strict";function dePalette(d,m,v,_,E){let x=0;for(let T=0;T<_;T++)for(let _=0;_<v;_++){let v=E[d[x]];if(!v)throw Error("index "+d[x]+" not in palette");for(let d=0;d<4;d++)m[x+d]=v[d];x+=4}}function replaceTransparentColor(d,m,v,_,E){let x=0;for(let T=0;T<_;T++)for(let _=0;_<v;_++){let v=!1;if(1===E.length?E[0]===d[x]&&(v=!0):E[0]===d[x]&&E[1]===d[x+1]&&E[2]===d[x+2]&&(v=!0),v)for(let d=0;d<4;d++)m[x+d]=0;x+=4}}function scaleDepth(d,m,v,_,E){let x=Math.pow(2,E)-1,T=0;for(let E=0;E<_;E++)for(let _=0;_<v;_++){for(let v=0;v<4;v++)m[T+v]=Math.floor(255*d[T+v]/x+.5);T+=4}}d.exports=function(d,m){let v=m.depth,_=m.width,E=m.height,x=m.colorType,T=m.transColor,A=m.palette,j=d;return 3===x?dePalette(d,j,_,E,A):(T&&replaceTransparentColor(d,j,_,E,T),8!==v&&(16===v&&(j=Buffer.alloc(_*E*4)),scaleDepth(d,j,_,E,v))),j}},15536:(d,m)=>{"use strict";let v=[{x:[0],y:[0]},{x:[4],y:[0]},{x:[0,4],y:[4]},{x:[2,6],y:[0,4]},{x:[0,2,4,6],y:[2,6]},{x:[1,3,5,7],y:[0,2,4,6]},{x:[0,1,2,3,4,5,6,7],y:[1,3,5,7]}];m.getImagePasses=function(d,m){let _=[],E=d%8,x=m%8,T=(d-E)/8,A=(m-x)/8;for(let d=0;d<v.length;d++){let m=v[d],j=T*m.x.length,U=A*m.y.length;for(let d=0;d<m.x.length;d++)if(m.x[d]<E)j++;else break;for(let d=0;d<m.y.length;d++)if(m.y[d]<x)U++;else break;j>0&&U>0&&_.push({width:j,height:U,index:d})}return _},m.getInterlaceIterator=function(d){return function(m,_,E){let x=m%v[E].x.length,T=(m-x)/v[E].x.length*8+v[E].x[x],A=_%v[E].y.length;return 4*T+((_-A)/v[E].y.length*8+v[E].y[A])*d*4}}},10505:(d,m,v)=>{"use strict";let _=v(73837),E=v(12781),x=v(11394),T=v(30554),A=d.exports=function(d){E.call(this);let m=d||{};this._packer=new T(m),this._deflate=this._packer.createDeflate(),this.readable=!0};_.inherits(A,E),A.prototype.pack=function(d,m,v,_){this.emit("data",Buffer.from(x.PNG_SIGNATURE)),this.emit("data",this._packer.packIHDR(m,v)),_&&this.emit("data",this._packer.packGAMA(_));let E=this._packer.filterData(d,m,v);this._deflate.on("error",this.emit.bind(this,"error")),this._deflate.on("data",(function(d){this.emit("data",this._packer.packIDAT(d))}).bind(this)),this._deflate.on("end",(function(){this.emit("data",this._packer.packIEND()),this.emit("end")}).bind(this)),this._deflate.end(E)}},3693:(d,m,v)=>{"use strict";let _=!0,E=v(59796);E.deflateSync||(_=!1);let x=v(11394),T=v(30554);d.exports=function(d,m){if(!_)throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");let v=new T(m||{}),A=[];A.push(Buffer.from(x.PNG_SIGNATURE)),A.push(v.packIHDR(d.width,d.height)),d.gamma&&A.push(v.packGAMA(d.gamma));let j=v.filterData(d.data,d.width,d.height),U=E.deflateSync(j,v.getDeflateOptions());if(j=null,!U||!U.length)throw Error("bad png - invalid compressed data response");return A.push(v.packIDAT(U)),A.push(v.packIEND()),Buffer.concat(A)}},30554:(d,m,v)=>{"use strict";let _=v(11394),E=v(53030),x=v(27817),T=v(68846),A=v(59796),j=d.exports=function(d){if(this._options=d,d.deflateChunkSize=d.deflateChunkSize||32768,d.deflateLevel=null!=d.deflateLevel?d.deflateLevel:9,d.deflateStrategy=null!=d.deflateStrategy?d.deflateStrategy:3,d.inputHasAlpha=null==d.inputHasAlpha||d.inputHasAlpha,d.deflateFactory=d.deflateFactory||A.createDeflate,d.bitDepth=d.bitDepth||8,d.colorType="number"==typeof d.colorType?d.colorType:_.COLORTYPE_COLOR_ALPHA,d.inputColorType="number"==typeof d.inputColorType?d.inputColorType:_.COLORTYPE_COLOR_ALPHA,-1===[_.COLORTYPE_GRAYSCALE,_.COLORTYPE_COLOR,_.COLORTYPE_COLOR_ALPHA,_.COLORTYPE_ALPHA].indexOf(d.colorType))throw Error("option color type:"+d.colorType+" is not supported at present");if(-1===[_.COLORTYPE_GRAYSCALE,_.COLORTYPE_COLOR,_.COLORTYPE_COLOR_ALPHA,_.COLORTYPE_ALPHA].indexOf(d.inputColorType))throw Error("option input color type:"+d.inputColorType+" is not supported at present");if(8!==d.bitDepth&&16!==d.bitDepth)throw Error("option bit depth:"+d.bitDepth+" is not supported at present")};j.prototype.getDeflateOptions=function(){return{chunkSize:this._options.deflateChunkSize,level:this._options.deflateLevel,strategy:this._options.deflateStrategy}},j.prototype.createDeflate=function(){return this._options.deflateFactory(this.getDeflateOptions())},j.prototype.filterData=function(d,m,v){let E=x(d,m,v,this._options),A=_.COLORTYPE_TO_BPP_MAP[this._options.colorType];return T(E,m,v,this._options,A)},j.prototype._packChunk=function(d,m){let v=m?m.length:0,_=Buffer.alloc(v+12);return _.writeUInt32BE(v,0),_.writeUInt32BE(d,4),m&&m.copy(_,8),_.writeInt32BE(E.crc32(_.slice(4,_.length-4)),_.length-4),_},j.prototype.packGAMA=function(d){let m=Buffer.alloc(4);return m.writeUInt32BE(Math.floor(d*_.GAMMA_DIVISION),0),this._packChunk(_.TYPE_gAMA,m)},j.prototype.packIHDR=function(d,m){let v=Buffer.alloc(13);return v.writeUInt32BE(d,0),v.writeUInt32BE(m,4),v[8]=this._options.bitDepth,v[9]=this._options.colorType,v[10]=0,v[11]=0,v[12]=0,this._packChunk(_.TYPE_IHDR,v)},j.prototype.packIDAT=function(d){return this._packChunk(_.TYPE_IDAT,d)},j.prototype.packIEND=function(){return this._packChunk(_.TYPE_IEND,null)}},83876:d=>{"use strict";d.exports=function(d,m,v){let _=d+m-v,E=Math.abs(_-d),x=Math.abs(_-m),T=Math.abs(_-v);return E<=x&&E<=T?d:x<=T?m:v}},45927:(d,m,v)=>{"use strict";let _=v(73837),E=v(59796),x=v(86243),T=v(83542),A=v(99869),j=v(62184),U=v(49961),F=d.exports=function(d){x.call(this),this._parser=new A(d,{read:this.read.bind(this),error:this._handleError.bind(this),metadata:this._handleMetaData.bind(this),gamma:this.emit.bind(this,"gamma"),palette:this._handlePalette.bind(this),transColor:this._handleTransColor.bind(this),finished:this._finished.bind(this),inflateData:this._inflateData.bind(this),simpleTransparency:this._simpleTransparency.bind(this),headersFinished:this._headersFinished.bind(this)}),this._options=d,this.writable=!0,this._parser.start()};_.inherits(F,x),F.prototype._handleError=function(d){this.emit("error",d),this.writable=!1,this.destroy(),this._inflate&&this._inflate.destroy&&this._inflate.destroy(),this._filter&&(this._filter.destroy(),this._filter.on("error",function(){})),this.errord=!0},F.prototype._inflateData=function(d){if(!this._inflate){if(this._bitmapInfo.interlace)this._inflate=E.createInflate(),this._inflate.on("error",this.emit.bind(this,"error")),this._filter.on("complete",this._complete.bind(this)),this._inflate.pipe(this._filter);else{let d=((this._bitmapInfo.width*this._bitmapInfo.bpp*this._bitmapInfo.depth+7>>3)+1)*this._bitmapInfo.height,m=Math.max(d,E.Z_MIN_CHUNK);this._inflate=E.createInflate({chunkSize:m});let v=d,_=this.emit.bind(this,"error");this._inflate.on("error",function(d){v&&_(d)}),this._filter.on("complete",this._complete.bind(this));let x=this._filter.write.bind(this._filter);this._inflate.on("data",function(d){v&&(d.length>v&&(d=d.slice(0,v)),v-=d.length,x(d))}),this._inflate.on("end",this._filter.end.bind(this._filter))}}this._inflate.write(d)},F.prototype._handleMetaData=function(d){this._metaData=d,this._bitmapInfo=Object.create(d),this._filter=new T(this._bitmapInfo)},F.prototype._handleTransColor=function(d){this._bitmapInfo.transColor=d},F.prototype._handlePalette=function(d){this._bitmapInfo.palette=d},F.prototype._simpleTransparency=function(){this._metaData.alpha=!0},F.prototype._headersFinished=function(){this.emit("metadata",this._metaData)},F.prototype._finished=function(){this.errord||(this._inflate?this._inflate.end():this.emit("error","No Inflate block"))},F.prototype._complete=function(d){let m;if(!this.errord){try{let v=j.dataToBitMap(d,this._bitmapInfo);m=U(v,this._bitmapInfo),v=null}catch(d){this._handleError(d);return}this.emit("parsed",m)}}},61652:(d,m,v)=>{"use strict";let _=!0,E=v(59796),x=v(14964);E.deflateSync||(_=!1);let T=v(25179),A=v(32536),j=v(99869),U=v(62184),F=v(49961);d.exports=function(d,m){let v,W,K,Q;if(!_)throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");function handleError(d){v=d}function handleMetaData(d){W=d}function handleTransColor(d){W.transColor=d}function handlePalette(d){W.palette=d}function handleSimpleTransparency(){W.alpha=!0}function handleGamma(d){K=d}let X=[];function handleInflateData(d){X.push(d)}let ee=new T(d);if(new j(m,{read:ee.read.bind(ee),error:handleError,metadata:handleMetaData,gamma:handleGamma,palette:handlePalette,transColor:handleTransColor,inflateData:handleInflateData,simpleTransparency:handleSimpleTransparency}).start(),ee.process(),v)throw v;let er=Buffer.concat(X);if(X.length=0,W.interlace)Q=E.inflateSync(er);else{let d=((W.width*W.bpp*W.depth+7>>3)+1)*W.height;Q=x(er,{chunkSize:d,maxLength:d})}if(er=null,!Q||!Q.length)throw Error("bad png - invalid inflate data response");let ei=A.process(Q,W);er=null;let eo=U.dataToBitMap(ei,W);ei=null;let ea=F(eo,W);return W.data=ea,W.gamma=K||0,W}},99869:(d,m,v)=>{"use strict";let _=v(11394),E=v(53030),x=d.exports=function(d,m){this._options=d,d.checkCRC=!1!==d.checkCRC,this._hasIHDR=!1,this._hasIEND=!1,this._emittedHeadersFinished=!1,this._palette=[],this._colorType=0,this._chunks={},this._chunks[_.TYPE_IHDR]=this._handleIHDR.bind(this),this._chunks[_.TYPE_IEND]=this._handleIEND.bind(this),this._chunks[_.TYPE_IDAT]=this._handleIDAT.bind(this),this._chunks[_.TYPE_PLTE]=this._handlePLTE.bind(this),this._chunks[_.TYPE_tRNS]=this._handleTRNS.bind(this),this._chunks[_.TYPE_gAMA]=this._handleGAMA.bind(this),this.read=m.read,this.error=m.error,this.metadata=m.metadata,this.gamma=m.gamma,this.transColor=m.transColor,this.palette=m.palette,this.parsed=m.parsed,this.inflateData=m.inflateData,this.finished=m.finished,this.simpleTransparency=m.simpleTransparency,this.headersFinished=m.headersFinished||function(){}};x.prototype.start=function(){this.read(_.PNG_SIGNATURE.length,this._parseSignature.bind(this))},x.prototype._parseSignature=function(d){let m=_.PNG_SIGNATURE;for(let v=0;v<m.length;v++)if(d[v]!==m[v]){this.error(Error("Invalid file signature"));return}this.read(8,this._parseChunkBegin.bind(this))},x.prototype._parseChunkBegin=function(d){let m=d.readUInt32BE(0),v=d.readUInt32BE(4),x="";for(let m=4;m<8;m++)x+=String.fromCharCode(d[m]);let T=!!(32&d[4]);if(!this._hasIHDR&&v!==_.TYPE_IHDR){this.error(Error("Expected IHDR on beggining"));return}if(this._crc=new E,this._crc.write(Buffer.from(x)),this._chunks[v])return this._chunks[v](m);if(!T){this.error(Error("Unsupported critical chunk type "+x));return}this.read(m+4,this._skipChunk.bind(this))},x.prototype._skipChunk=function(){this.read(8,this._parseChunkBegin.bind(this))},x.prototype._handleChunkEnd=function(){this.read(4,this._parseChunkEnd.bind(this))},x.prototype._parseChunkEnd=function(d){let m=d.readInt32BE(0),v=this._crc.crc32();if(this._options.checkCRC&&v!==m){this.error(Error("Crc error - "+m+" - "+v));return}this._hasIEND||this.read(8,this._parseChunkBegin.bind(this))},x.prototype._handleIHDR=function(d){this.read(d,this._parseIHDR.bind(this))},x.prototype._parseIHDR=function(d){this._crc.write(d);let m=d.readUInt32BE(0),v=d.readUInt32BE(4),E=d[8],x=d[9],T=d[10],A=d[11],j=d[12];if(8!==E&&4!==E&&2!==E&&1!==E&&16!==E){this.error(Error("Unsupported bit depth "+E));return}if(!(x in _.COLORTYPE_TO_BPP_MAP)){this.error(Error("Unsupported color type"));return}if(0!==T){this.error(Error("Unsupported compression method"));return}if(0!==A){this.error(Error("Unsupported filter method"));return}if(0!==j&&1!==j){this.error(Error("Unsupported interlace method"));return}this._colorType=x;let U=_.COLORTYPE_TO_BPP_MAP[this._colorType];this._hasIHDR=!0,this.metadata({width:m,height:v,depth:E,interlace:!!j,palette:!!(x&_.COLORTYPE_PALETTE),color:!!(x&_.COLORTYPE_COLOR),alpha:!!(x&_.COLORTYPE_ALPHA),bpp:U,colorType:x}),this._handleChunkEnd()},x.prototype._handlePLTE=function(d){this.read(d,this._parsePLTE.bind(this))},x.prototype._parsePLTE=function(d){this._crc.write(d);let m=Math.floor(d.length/3);for(let v=0;v<m;v++)this._palette.push([d[3*v],d[3*v+1],d[3*v+2],255]);this.palette(this._palette),this._handleChunkEnd()},x.prototype._handleTRNS=function(d){this.simpleTransparency(),this.read(d,this._parseTRNS.bind(this))},x.prototype._parseTRNS=function(d){if(this._crc.write(d),this._colorType===_.COLORTYPE_PALETTE_COLOR){if(0===this._palette.length){this.error(Error("Transparency chunk must be after palette"));return}if(d.length>this._palette.length){this.error(Error("More transparent colors than palette size"));return}for(let m=0;m<d.length;m++)this._palette[m][3]=d[m];this.palette(this._palette)}this._colorType===_.COLORTYPE_GRAYSCALE&&this.transColor([d.readUInt16BE(0)]),this._colorType===_.COLORTYPE_COLOR&&this.transColor([d.readUInt16BE(0),d.readUInt16BE(2),d.readUInt16BE(4)]),this._handleChunkEnd()},x.prototype._handleGAMA=function(d){this.read(d,this._parseGAMA.bind(this))},x.prototype._parseGAMA=function(d){this._crc.write(d),this.gamma(d.readUInt32BE(0)/_.GAMMA_DIVISION),this._handleChunkEnd()},x.prototype._handleIDAT=function(d){this._emittedHeadersFinished||(this._emittedHeadersFinished=!0,this.headersFinished()),this.read(-d,this._parseIDAT.bind(this,d))},x.prototype._parseIDAT=function(d,m){if(this._crc.write(m),this._colorType===_.COLORTYPE_PALETTE_COLOR&&0===this._palette.length)throw Error("Expected palette not found");this.inflateData(m);let v=d-m.length;v>0?this._handleIDAT(v):this._handleChunkEnd()},x.prototype._handleIEND=function(d){this.read(d,this._parseIEND.bind(this))},x.prototype._parseIEND=function(d){this._crc.write(d),this._hasIEND=!0,this._handleChunkEnd(),this.finished&&this.finished()}},50452:(d,m,v)=>{"use strict";let _=v(61652),E=v(3693);m.read=function(d,m){return _(d,m||{})},m.write=function(d,m){return E(d,m)}},22904:(d,m,v)=>{"use strict";let _=v(73837),E=v(12781),x=v(45927),T=v(10505),A=v(50452),j=m.y=function(d){E.call(this),d=d||{},this.width=0|d.width,this.height=0|d.height,this.data=this.width>0&&this.height>0?Buffer.alloc(4*this.width*this.height):null,d.fill&&this.data&&this.data.fill(0),this.gamma=0,this.readable=this.writable=!0,this._parser=new x(d),this._parser.on("error",this.emit.bind(this,"error")),this._parser.on("close",this._handleClose.bind(this)),this._parser.on("metadata",this._metadata.bind(this)),this._parser.on("gamma",this._gamma.bind(this)),this._parser.on("parsed",(function(d){this.data=d,this.emit("parsed",d)}).bind(this)),this._packer=new T(d),this._packer.on("data",this.emit.bind(this,"data")),this._packer.on("end",this.emit.bind(this,"end")),this._parser.on("close",this._handleClose.bind(this)),this._packer.on("error",this.emit.bind(this,"error"))};_.inherits(j,E),j.sync=A,j.prototype.pack=function(){return this.data&&this.data.length?process.nextTick((function(){this._packer.pack(this.data,this.width,this.height,this.gamma)}).bind(this)):this.emit("error","No data provided"),this},j.prototype.parse=function(d,m){if(m){let d,v;d=(function(d){this.removeListener("error",v),this.data=d,m(null,this)}).bind(this),v=(function(v){this.removeListener("parsed",d),m(v,null)}).bind(this),this.once("parsed",d),this.once("error",v)}return this.end(d),this},j.prototype.write=function(d){return this._parser.write(d),!0},j.prototype.end=function(d){this._parser.end(d)},j.prototype._metadata=function(d){this.width=d.width,this.height=d.height,this.emit("metadata",d)},j.prototype._gamma=function(d){this.gamma=d},j.prototype._handleClose=function(){this._parser.writable||this._packer.readable||this.emit("close")},j.bitblt=function(d,m,v,_,E,x,T,A){if(_|=0,E|=0,x|=0,T|=0,A|=0,(v|=0)>d.width||_>d.height||v+E>d.width||_+x>d.height)throw Error("bitblt reading outside image");if(T>m.width||A>m.height||T+E>m.width||A+x>m.height)throw Error("bitblt writing outside image");for(let j=0;j<x;j++)d.data.copy(m.data,(A+j)*m.width+T<<2,(_+j)*d.width+v<<2,(_+j)*d.width+v+E<<2)},j.prototype.bitblt=function(d,m,v,_,E,x,T){return j.bitblt(this,d,m,v,_,E,x,T),this},j.adjustGamma=function(d){if(d.gamma){for(let m=0;m<d.height;m++)for(let v=0;v<d.width;v++){let _=d.width*m+v<<2;for(let m=0;m<3;m++){let v=d.data[_+m]/255;v=Math.pow(v,1/2.2/d.gamma),d.data[_+m]=Math.round(255*v)}}d.gamma=0}},j.prototype.adjustGamma=function(){j.adjustGamma(this)}},14964:(d,m,v)=>{"use strict";let _=v(39491).ok,E=v(59796),x=v(73837),T=v(14300).kMaxLength;function Inflate(d){if(!(this instanceof Inflate))return new Inflate(d);d&&d.chunkSize<E.Z_MIN_CHUNK&&(d.chunkSize=E.Z_MIN_CHUNK),E.Inflate.call(this,d),this._offset=void 0===this._offset?this._outOffset:this._offset,this._buffer=this._buffer||this._outBuffer,d&&null!=d.maxLength&&(this._maxLength=d.maxLength)}function createInflate(d){return new Inflate(d)}function _close(d,m){m&&process.nextTick(m),d._handle&&(d._handle.close(),d._handle=null)}function zlibBufferSync(d,m){if("string"==typeof m&&(m=Buffer.from(m)),!(m instanceof Buffer))throw TypeError("Not a string or buffer");let v=d._finishFlushFlag;return null==v&&(v=E.Z_FINISH),d._processChunk(m,v)}function inflateSync(d,m){return zlibBufferSync(new Inflate(m),d)}Inflate.prototype._processChunk=function(d,m,v){let x,A;if("function"==typeof v)return E.Inflate._processChunk.call(this,d,m,v);let j=this,U=d&&d.length,F=this._chunkSize-this._offset,W=this._maxLength,K=0,Q=[],X=0;function handleChunk(d,m){if(j._hadError)return;let v=F-m;if(_(v>=0,"have should not go down"),v>0){let d=j._buffer.slice(j._offset,j._offset+v);if(j._offset+=v,d.length>W&&(d=d.slice(0,W)),Q.push(d),X+=d.length,0==(W-=d.length))return!1}return(0===m||j._offset>=j._chunkSize)&&(F=j._chunkSize,j._offset=0,j._buffer=Buffer.allocUnsafe(j._chunkSize)),0===m&&(K+=U-d,U=d,!0)}this.on("error",function(d){x=d}),_(this._handle,"zlib binding closed");do A=(A=this._handle.writeSync(m,d,K,U,this._buffer,this._offset,F))||this._writeState;while(!this._hadError&&handleChunk(A[0],A[1]));if(this._hadError)throw x;if(X>=T)throw _close(this),RangeError("Cannot create final Buffer. It would be larger than 0x"+T.toString(16)+" bytes");let ee=Buffer.concat(Q,X);return _close(this),ee},x.inherits(Inflate,E.Inflate),d.exports=m=inflateSync,m.Inflate=Inflate,m.createInflate=createInflate,m.inflateSync=inflateSync},25179:d=>{"use strict";let m=d.exports=function(d){this._buffer=d,this._reads=[]};m.prototype.read=function(d,m){this._reads.push({length:Math.abs(d),allowLess:d<0,func:m})},m.prototype.process=function(){for(;this._reads.length>0&&this._buffer.length;){let d=this._reads[0];if(this._buffer.length&&(this._buffer.length>=d.length||d.allowLess)){this._reads.shift();let m=this._buffer;this._buffer=m.slice(d.length),d.func.call(this,m.slice(0,d.length))}else break}return this._reads.length>0?Error("There are some read requests waitng on finished stream"):this._buffer.length>0?Error("unrecognised content at end of stream"):void 0}},35267:(d,m,v)=>{let _=v(33818),E=v(35302),x=v(29836),T=v(8607);function renderCanvas(d,m,v,x,T){let A=[].slice.call(arguments,1),j=A.length,U="function"==typeof A[j-1];if(!U&&!_())throw Error("Callback required as last argument");if(U){if(j<2)throw Error("Too few arguments provided");2===j?(T=v,v=m,m=x=void 0):3===j&&(m.getContext&&void 0===T?(T=x,x=void 0):(T=x,x=v,v=m,m=void 0))}else{if(j<1)throw Error("Too few arguments provided");return 1===j?(v=m,m=x=void 0):2!==j||m.getContext||(x=v,v=m,m=void 0),new Promise(function(_,T){try{let T=E.create(v,x);_(d(T,m,x))}catch(d){T(d)}})}try{let _=E.create(v,x);T(null,d(_,m,x))}catch(d){T(d)}}E.create,m.toCanvas=renderCanvas.bind(null,x.render),renderCanvas.bind(null,x.renderToDataURL),renderCanvas.bind(null,function(d,m,v){return T.render(d,v)})},33818:d=>{d.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},67868:(d,m,v)=>{let _=v(99261).getSymbolSize;m.getRowColCoords=function(d){if(1===d)return[];let m=Math.floor(d/7)+2,v=_(d),E=145===v?26:2*Math.ceil((v-13)/(2*m-2)),x=[v-7];for(let d=1;d<m-1;d++)x[d]=x[d-1]-E;return x.push(6),x.reverse()},m.getPositions=function(d){let v=[],_=m.getRowColCoords(d),E=_.length;for(let d=0;d<E;d++)for(let m=0;m<E;m++)(0!==d||0!==m)&&(0!==d||m!==E-1)&&(d!==E-1||0!==m)&&v.push([_[d],_[m]]);return v}},20688:(d,m,v)=>{let _=v(9198),E=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(d){this.mode=_.ALPHANUMERIC,this.data=d}AlphanumericData.getBitsLength=function(d){return 11*Math.floor(d/2)+6*(d%2)},AlphanumericData.prototype.getLength=function(){return this.data.length},AlphanumericData.prototype.getBitsLength=function(){return AlphanumericData.getBitsLength(this.data.length)},AlphanumericData.prototype.write=function(d){let m;for(m=0;m+2<=this.data.length;m+=2){let v=45*E.indexOf(this.data[m]);v+=E.indexOf(this.data[m+1]),d.put(v,11)}this.data.length%2&&d.put(E.indexOf(this.data[m]),6)},d.exports=AlphanumericData},65661:d=>{function BitBuffer(){this.buffer=[],this.length=0}BitBuffer.prototype={get:function(d){return(this.buffer[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,m){for(let v=0;v<m;v++)this.putBit((d>>>m-v-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(d){let m=Math.floor(this.length/8);this.buffer.length<=m&&this.buffer.push(0),d&&(this.buffer[m]|=128>>>this.length%8),this.length++}},d.exports=BitBuffer},53701:d=>{function BitMatrix(d){if(!d||d<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=d,this.data=new Uint8Array(d*d),this.reservedBit=new Uint8Array(d*d)}BitMatrix.prototype.set=function(d,m,v,_){let E=d*this.size+m;this.data[E]=v,_&&(this.reservedBit[E]=!0)},BitMatrix.prototype.get=function(d,m){return this.data[d*this.size+m]},BitMatrix.prototype.xor=function(d,m,v){this.data[d*this.size+m]^=v},BitMatrix.prototype.isReserved=function(d,m){return this.reservedBit[d*this.size+m]},d.exports=BitMatrix},29132:(d,m,v)=>{let _=v(96135),E=v(9198);function ByteData(d){this.mode=E.BYTE,"string"==typeof d&&(d=_(d)),this.data=new Uint8Array(d)}ByteData.getBitsLength=function(d){return 8*d},ByteData.prototype.getLength=function(){return this.data.length},ByteData.prototype.getBitsLength=function(){return ByteData.getBitsLength(this.data.length)},ByteData.prototype.write=function(d){for(let m=0,v=this.data.length;m<v;m++)d.put(this.data[m],8)},d.exports=ByteData},61978:(d,m,v)=>{let _=v(75459),E=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],x=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];m.getBlocksCount=function(d,m){switch(m){case _.L:return E[(d-1)*4+0];case _.M:return E[(d-1)*4+1];case _.Q:return E[(d-1)*4+2];case _.H:return E[(d-1)*4+3];default:return}},m.getTotalCodewordsCount=function(d,m){switch(m){case _.L:return x[(d-1)*4+0];case _.M:return x[(d-1)*4+1];case _.Q:return x[(d-1)*4+2];case _.H:return x[(d-1)*4+3];default:return}}},75459:(d,m)=>{function fromString(d){if("string"!=typeof d)throw Error("Param is not a string");let v=d.toLowerCase();switch(v){case"l":case"low":return m.L;case"m":case"medium":return m.M;case"q":case"quartile":return m.Q;case"h":case"high":return m.H;default:throw Error("Unknown EC Level: "+d)}}m.L={bit:1},m.M={bit:0},m.Q={bit:3},m.H={bit:2},m.isValid=function(d){return d&&void 0!==d.bit&&d.bit>=0&&d.bit<4},m.from=function(d,v){if(m.isValid(d))return d;try{return fromString(d)}catch(d){return v}}},10743:(d,m,v)=>{let _=v(99261).getSymbolSize;m.getPositions=function(d){let m=_(d);return[[0,0],[m-7,0],[0,m-7]]}},81392:(d,m,v)=>{let _=v(99261),E=_.getBCHDigit(1335);m.getEncodedBits=function(d,m){let v=d.bit<<3|m,x=v<<10;for(;_.getBCHDigit(x)-E>=0;)x^=1335<<_.getBCHDigit(x)-E;return(v<<10|x)^21522}},85463:(d,m)=>{let v=new Uint8Array(512),_=new Uint8Array(256);(function(){let d=1;for(let m=0;m<255;m++)v[m]=d,_[d]=m,256&(d<<=1)&&(d^=285);for(let d=255;d<512;d++)v[d]=v[d-255]})(),m.log=function(d){if(d<1)throw Error("log("+d+")");return _[d]},m.exp=function(d){return v[d]},m.mul=function(d,m){return 0===d||0===m?0:v[_[d]+_[m]]}},24871:(d,m,v)=>{let _=v(9198),E=v(99261);function KanjiData(d){this.mode=_.KANJI,this.data=d}KanjiData.getBitsLength=function(d){return 13*d},KanjiData.prototype.getLength=function(){return this.data.length},KanjiData.prototype.getBitsLength=function(){return KanjiData.getBitsLength(this.data.length)},KanjiData.prototype.write=function(d){let m;for(m=0;m<this.data.length;m++){let v=E.toSJIS(this.data[m]);if(v>=33088&&v<=40956)v-=33088;else if(v>=57408&&v<=60351)v-=49472;else throw Error("Invalid SJIS character: "+this.data[m]+"\nMake sure your charset is UTF-8");v=(v>>>8&255)*192+(255&v),d.put(v,13)}},d.exports=KanjiData},76646:(d,m)=>{m.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let v={N1:3,N2:3,N3:40,N4:10};function getMaskAt(d,v,_){switch(d){case m.Patterns.PATTERN000:return(v+_)%2==0;case m.Patterns.PATTERN001:return v%2==0;case m.Patterns.PATTERN010:return _%3==0;case m.Patterns.PATTERN011:return(v+_)%3==0;case m.Patterns.PATTERN100:return(Math.floor(v/2)+Math.floor(_/3))%2==0;case m.Patterns.PATTERN101:return v*_%2+v*_%3==0;case m.Patterns.PATTERN110:return(v*_%2+v*_%3)%2==0;case m.Patterns.PATTERN111:return(v*_%3+(v+_)%2)%2==0;default:throw Error("bad maskPattern:"+d)}}m.isValid=function(d){return null!=d&&""!==d&&!isNaN(d)&&d>=0&&d<=7},m.from=function(d){return m.isValid(d)?parseInt(d,10):void 0},m.getPenaltyN1=function(d){let m=d.size,_=0,E=0,x=0,T=null,A=null;for(let j=0;j<m;j++){E=x=0,T=A=null;for(let U=0;U<m;U++){let m=d.get(j,U);m===T?E++:(E>=5&&(_+=v.N1+(E-5)),T=m,E=1),(m=d.get(U,j))===A?x++:(x>=5&&(_+=v.N1+(x-5)),A=m,x=1)}E>=5&&(_+=v.N1+(E-5)),x>=5&&(_+=v.N1+(x-5))}return _},m.getPenaltyN2=function(d){let m=d.size,_=0;for(let v=0;v<m-1;v++)for(let E=0;E<m-1;E++){let m=d.get(v,E)+d.get(v,E+1)+d.get(v+1,E)+d.get(v+1,E+1);(4===m||0===m)&&_++}return _*v.N2},m.getPenaltyN3=function(d){let m=d.size,_=0,E=0,x=0;for(let v=0;v<m;v++){E=x=0;for(let T=0;T<m;T++)E=E<<1&2047|d.get(v,T),T>=10&&(1488===E||93===E)&&_++,x=x<<1&2047|d.get(T,v),T>=10&&(1488===x||93===x)&&_++}return _*v.N3},m.getPenaltyN4=function(d){let m=0,_=d.data.length;for(let v=0;v<_;v++)m+=d.data[v];let E=Math.abs(Math.ceil(100*m/_/5)-10);return E*v.N4},m.applyMask=function(d,m){let v=m.size;for(let _=0;_<v;_++)for(let E=0;E<v;E++)m.isReserved(E,_)||m.xor(E,_,getMaskAt(d,E,_))},m.getBestMask=function(d,v){let _=Object.keys(m.Patterns).length,E=0,x=1/0;for(let T=0;T<_;T++){v(T),m.applyMask(T,d);let _=m.getPenaltyN1(d)+m.getPenaltyN2(d)+m.getPenaltyN3(d)+m.getPenaltyN4(d);m.applyMask(T,d),_<x&&(x=_,E=T)}return E}},9198:(d,m,v)=>{let _=v(13704),E=v(27743);function fromString(d){if("string"!=typeof d)throw Error("Param is not a string");let v=d.toLowerCase();switch(v){case"numeric":return m.NUMERIC;case"alphanumeric":return m.ALPHANUMERIC;case"kanji":return m.KANJI;case"byte":return m.BYTE;default:throw Error("Unknown mode: "+d)}}m.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},m.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},m.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},m.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},m.MIXED={bit:-1},m.getCharCountIndicator=function(d,m){if(!d.ccBits)throw Error("Invalid mode: "+d);if(!_.isValid(m))throw Error("Invalid version: "+m);return m>=1&&m<10?d.ccBits[0]:m<27?d.ccBits[1]:d.ccBits[2]},m.getBestModeForData=function(d){return E.testNumeric(d)?m.NUMERIC:E.testAlphanumeric(d)?m.ALPHANUMERIC:E.testKanji(d)?m.KANJI:m.BYTE},m.toString=function(d){if(d&&d.id)return d.id;throw Error("Invalid mode")},m.isValid=function(d){return d&&d.bit&&d.ccBits},m.from=function(d,v){if(m.isValid(d))return d;try{return fromString(d)}catch(d){return v}}},51183:(d,m,v)=>{let _=v(9198);function NumericData(d){this.mode=_.NUMERIC,this.data=d.toString()}NumericData.getBitsLength=function(d){return 10*Math.floor(d/3)+(d%3?d%3*3+1:0)},NumericData.prototype.getLength=function(){return this.data.length},NumericData.prototype.getBitsLength=function(){return NumericData.getBitsLength(this.data.length)},NumericData.prototype.write=function(d){let m,v;for(m=0;m+3<=this.data.length;m+=3)v=parseInt(this.data.substr(m,3),10),d.put(v,10);let _=this.data.length-m;_>0&&(v=parseInt(this.data.substr(m),10),d.put(v,3*_+1))},d.exports=NumericData},29820:(d,m,v)=>{let _=v(85463);m.mul=function(d,m){let v=new Uint8Array(d.length+m.length-1);for(let E=0;E<d.length;E++)for(let x=0;x<m.length;x++)v[E+x]^=_.mul(d[E],m[x]);return v},m.mod=function(d,m){let v=new Uint8Array(d);for(;v.length-m.length>=0;){let d=v[0];for(let E=0;E<m.length;E++)v[E]^=_.mul(m[E],d);let E=0;for(;E<v.length&&0===v[E];)E++;v=v.slice(E)}return v},m.generateECPolynomial=function(d){let v=new Uint8Array([1]);for(let E=0;E<d;E++)v=m.mul(v,new Uint8Array([1,_.exp(E)]));return v}},35302:(d,m,v)=>{let _=v(99261),E=v(75459),x=v(65661),T=v(53701),A=v(67868),j=v(10743),U=v(76646),F=v(61978),W=v(12230),K=v(59158),Q=v(81392),X=v(9198),ee=v(72424);function setupFinderPattern(d,m){let v=d.size,_=j.getPositions(m);for(let m=0;m<_.length;m++){let E=_[m][0],x=_[m][1];for(let m=-1;m<=7;m++)if(!(E+m<=-1)&&!(v<=E+m))for(let _=-1;_<=7;_++)x+_<=-1||v<=x+_||(m>=0&&m<=6&&(0===_||6===_)||_>=0&&_<=6&&(0===m||6===m)||m>=2&&m<=4&&_>=2&&_<=4?d.set(E+m,x+_,!0,!0):d.set(E+m,x+_,!1,!0))}}function setupTimingPattern(d){let m=d.size;for(let v=8;v<m-8;v++){let m=v%2==0;d.set(v,6,m,!0),d.set(6,v,m,!0)}}function setupAlignmentPattern(d,m){let v=A.getPositions(m);for(let m=0;m<v.length;m++){let _=v[m][0],E=v[m][1];for(let m=-2;m<=2;m++)for(let v=-2;v<=2;v++)-2===m||2===m||-2===v||2===v||0===m&&0===v?d.set(_+m,E+v,!0,!0):d.set(_+m,E+v,!1,!0)}}function setupVersionInfo(d,m){let v,_,E;let x=d.size,T=K.getEncodedBits(m);for(let m=0;m<18;m++)v=Math.floor(m/3),_=m%3+x-8-3,E=(T>>m&1)==1,d.set(v,_,E,!0),d.set(_,v,E,!0)}function setupFormatInfo(d,m,v){let _,E;let x=d.size,T=Q.getEncodedBits(m,v);for(_=0;_<15;_++)E=(T>>_&1)==1,_<6?d.set(_,8,E,!0):_<8?d.set(_+1,8,E,!0):d.set(x-15+_,8,E,!0),_<8?d.set(8,x-_-1,E,!0):_<9?d.set(8,15-_-1+1,E,!0):d.set(8,15-_-1,E,!0);d.set(x-8,8,1,!0)}function setupData(d,m){let v=d.size,_=-1,E=v-1,x=7,T=0;for(let A=v-1;A>0;A-=2)for(6===A&&A--;;){for(let v=0;v<2;v++)if(!d.isReserved(E,A-v)){let _=!1;T<m.length&&(_=(m[T]>>>x&1)==1),d.set(E,A-v,_),-1==--x&&(T++,x=7)}if((E+=_)<0||v<=E){E-=_,_=-_;break}}}function createData(d,m,v){let E=new x;v.forEach(function(m){E.put(m.mode.bit,4),E.put(m.getLength(),X.getCharCountIndicator(m.mode,d)),m.write(E)});let T=_.getSymbolTotalCodewords(d),A=F.getTotalCodewordsCount(d,m),j=(T-A)*8;for(E.getLengthInBits()+4<=j&&E.put(0,4);E.getLengthInBits()%8!=0;)E.putBit(0);let U=(j-E.getLengthInBits())/8;for(let d=0;d<U;d++)E.put(d%2?17:236,8);return createCodewords(E,d,m)}function createCodewords(d,m,v){let E,x;let T=_.getSymbolTotalCodewords(m),A=F.getTotalCodewordsCount(m,v),j=T-A,U=F.getBlocksCount(m,v),K=T%U,Q=U-K,X=Math.floor(T/U),ee=Math.floor(j/U),er=ee+1,ei=X-ee,eo=new W(ei),ea=0,es=Array(U),el=Array(U),ec=0,eu=new Uint8Array(d.buffer);for(let d=0;d<U;d++){let m=d<Q?ee:er;es[d]=eu.slice(ea,ea+m),el[d]=eo.encode(es[d]),ea+=m,ec=Math.max(ec,m)}let ed=new Uint8Array(T),eh=0;for(E=0;E<ec;E++)for(x=0;x<U;x++)E<es[x].length&&(ed[eh++]=es[x][E]);for(E=0;E<ei;E++)for(x=0;x<U;x++)ed[eh++]=el[x][E];return ed}function createSymbol(d,m,v,E){let x;if(Array.isArray(d))x=ee.fromArray(d);else if("string"==typeof d){let _=m;if(!_){let m=ee.rawSplit(d);_=K.getBestVersionForData(m,v)}x=ee.fromString(d,_||40)}else throw Error("Invalid data");let A=K.getBestVersionForData(x,v);if(!A)throw Error("The amount of data is too big to be stored in a QR Code");if(m){if(m<A)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+A+".\n")}else m=A;let j=createData(m,v,x),F=_.getSymbolSize(m),W=new T(F);return setupFinderPattern(W,m),setupTimingPattern(W),setupAlignmentPattern(W,m),setupFormatInfo(W,v,0),m>=7&&setupVersionInfo(W,m),setupData(W,j),isNaN(E)&&(E=U.getBestMask(W,setupFormatInfo.bind(null,W,v))),U.applyMask(E,W),setupFormatInfo(W,v,E),{modules:W,version:m,errorCorrectionLevel:v,maskPattern:E,segments:x}}m.create=function(d,m){let v,x;if(void 0===d||""===d)throw Error("No input text");let T=E.M;return void 0!==m&&(T=E.from(m.errorCorrectionLevel,E.M),v=K.from(m.version),x=U.from(m.maskPattern),m.toSJISFunc&&_.setToSJISFunction(m.toSJISFunc)),createSymbol(d,v,T,x)}},12230:(d,m,v)=>{let _=v(29820);function ReedSolomonEncoder(d){this.genPoly=void 0,this.degree=d,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder.prototype.initialize=function(d){this.degree=d,this.genPoly=_.generateECPolynomial(this.degree)},ReedSolomonEncoder.prototype.encode=function(d){if(!this.genPoly)throw Error("Encoder not initialized");let m=new Uint8Array(d.length+this.degree);m.set(d);let v=_.mod(m,this.genPoly),E=this.degree-v.length;if(E>0){let d=new Uint8Array(this.degree);return d.set(v,E),d}return v},d.exports=ReedSolomonEncoder},27743:(d,m)=>{let v="[0-9]+",_="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";_=_.replace(/u/g,"\\u");let E="(?:(?![A-Z0-9 $%*+\\-./:]|"+_+")(?:.|[\r\n]))+";m.KANJI=RegExp(_,"g"),m.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),m.BYTE=RegExp(E,"g"),m.NUMERIC=RegExp(v,"g"),m.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let x=RegExp("^"+_+"$"),T=RegExp("^"+v+"$"),A=RegExp("^[A-Z0-9 $%*+\\-./:]+$");m.testKanji=function(d){return x.test(d)},m.testNumeric=function(d){return T.test(d)},m.testAlphanumeric=function(d){return A.test(d)}},72424:(d,m,v)=>{let _=v(9198),E=v(51183),x=v(20688),T=v(29132),A=v(24871),j=v(27743),U=v(99261),F=v(84335);function getStringByteLength(d){return unescape(encodeURIComponent(d)).length}function getSegments(d,m,v){let _;let E=[];for(;null!==(_=d.exec(v));)E.push({data:_[0],index:_.index,mode:m,length:_[0].length});return E}function getSegmentsFromString(d){let m,v;let E=getSegments(j.NUMERIC,_.NUMERIC,d),x=getSegments(j.ALPHANUMERIC,_.ALPHANUMERIC,d);U.isKanjiModeEnabled()?(m=getSegments(j.BYTE,_.BYTE,d),v=getSegments(j.KANJI,_.KANJI,d)):(m=getSegments(j.BYTE_KANJI,_.BYTE,d),v=[]);let T=E.concat(x,m,v);return T.sort(function(d,m){return d.index-m.index}).map(function(d){return{data:d.data,mode:d.mode,length:d.length}})}function getSegmentBitsLength(d,m){switch(m){case _.NUMERIC:return E.getBitsLength(d);case _.ALPHANUMERIC:return x.getBitsLength(d);case _.KANJI:return A.getBitsLength(d);case _.BYTE:return T.getBitsLength(d)}}function mergeSegments(d){return d.reduce(function(d,m){let v=d.length-1>=0?d[d.length-1]:null;return v&&v.mode===m.mode?d[d.length-1].data+=m.data:d.push(m),d},[])}function buildNodes(d){let m=[];for(let v=0;v<d.length;v++){let E=d[v];switch(E.mode){case _.NUMERIC:m.push([E,{data:E.data,mode:_.ALPHANUMERIC,length:E.length},{data:E.data,mode:_.BYTE,length:E.length}]);break;case _.ALPHANUMERIC:m.push([E,{data:E.data,mode:_.BYTE,length:E.length}]);break;case _.KANJI:m.push([E,{data:E.data,mode:_.BYTE,length:getStringByteLength(E.data)}]);break;case _.BYTE:m.push([{data:E.data,mode:_.BYTE,length:getStringByteLength(E.data)}])}}return m}function buildGraph(d,m){let v={},E={start:{}},x=["start"];for(let T=0;T<d.length;T++){let A=d[T],j=[];for(let d=0;d<A.length;d++){let U=A[d],F=""+T+d;j.push(F),v[F]={node:U,lastCount:0},E[F]={};for(let d=0;d<x.length;d++){let T=x[d];v[T]&&v[T].node.mode===U.mode?(E[T][F]=getSegmentBitsLength(v[T].lastCount+U.length,U.mode)-getSegmentBitsLength(v[T].lastCount,U.mode),v[T].lastCount+=U.length):(v[T]&&(v[T].lastCount=U.length),E[T][F]=getSegmentBitsLength(U.length,U.mode)+4+_.getCharCountIndicator(U.mode,m))}}x=j}for(let d=0;d<x.length;d++)E[x[d]].end=0;return{map:E,table:v}}function buildSingleSegment(d,m){let v;let j=_.getBestModeForData(d);if((v=_.from(m,j))!==_.BYTE&&v.bit<j.bit)throw Error('"'+d+'" cannot be encoded with mode '+_.toString(v)+".\n Suggested mode is: "+_.toString(j));switch(v!==_.KANJI||U.isKanjiModeEnabled()||(v=_.BYTE),v){case _.NUMERIC:return new E(d);case _.ALPHANUMERIC:return new x(d);case _.KANJI:return new A(d);case _.BYTE:return new T(d)}}m.fromArray=function(d){return d.reduce(function(d,m){return"string"==typeof m?d.push(buildSingleSegment(m,null)):m.data&&d.push(buildSingleSegment(m.data,m.mode)),d},[])},m.fromString=function(d,v){let _=getSegmentsFromString(d,U.isKanjiModeEnabled()),E=buildNodes(_),x=buildGraph(E,v),T=F.find_path(x.map,"start","end"),A=[];for(let d=1;d<T.length-1;d++)A.push(x.table[T[d]].node);return m.fromArray(mergeSegments(A))},m.rawSplit=function(d){return m.fromArray(getSegmentsFromString(d,U.isKanjiModeEnabled()))}},99261:(d,m)=>{let v;let _=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];m.getSymbolSize=function(d){if(!d)throw Error('"version" cannot be null or undefined');if(d<1||d>40)throw Error('"version" should be in range from 1 to 40');return 4*d+17},m.getSymbolTotalCodewords=function(d){return _[d]},m.getBCHDigit=function(d){let m=0;for(;0!==d;)m++,d>>>=1;return m},m.setToSJISFunction=function(d){if("function"!=typeof d)throw Error('"toSJISFunc" is not a valid function.');v=d},m.isKanjiModeEnabled=function(){return void 0!==v},m.toSJIS=function(d){return v(d)}},13704:(d,m)=>{m.isValid=function(d){return!isNaN(d)&&d>=1&&d<=40}},59158:(d,m,v)=>{let _=v(99261),E=v(61978),x=v(75459),T=v(9198),A=v(13704),j=_.getBCHDigit(7973);function getBestVersionForDataLength(d,v,_){for(let E=1;E<=40;E++)if(v<=m.getCapacity(E,_,d))return E}function getReservedBitsCount(d,m){return T.getCharCountIndicator(d,m)+4}function getTotalBitsFromDataArray(d,m){let v=0;return d.forEach(function(d){let _=getReservedBitsCount(d.mode,m);v+=_+d.getBitsLength()}),v}function getBestVersionForMixedData(d,v){for(let _=1;_<=40;_++){let E=getTotalBitsFromDataArray(d,_);if(E<=m.getCapacity(_,v,T.MIXED))return _}}m.from=function(d,m){return A.isValid(d)?parseInt(d,10):m},m.getCapacity=function(d,m,v){if(!A.isValid(d))throw Error("Invalid QR Code version");void 0===v&&(v=T.BYTE);let x=_.getSymbolTotalCodewords(d),j=E.getTotalCodewordsCount(d,m),U=(x-j)*8;if(v===T.MIXED)return U;let F=U-getReservedBitsCount(v,d);switch(v){case T.NUMERIC:return Math.floor(F/10*3);case T.ALPHANUMERIC:return Math.floor(F/11*2);case T.KANJI:return Math.floor(F/13);case T.BYTE:default:return Math.floor(F/8)}},m.getBestVersionForData=function(d,m){let v;let _=x.from(m,x.M);if(Array.isArray(d)){if(d.length>1)return getBestVersionForMixedData(d,_);if(0===d.length)return 1;v=d[0]}else v=d;return getBestVersionForDataLength(v.mode,v.getLength(),_)},m.getEncodedBits=function(d){if(!A.isValid(d)||d<7)throw Error("Invalid QR Code version");let m=d<<12;for(;_.getBCHDigit(m)-j>=0;)m^=7973<<_.getBCHDigit(m)-j;return d<<12|m}},31076:(d,m,v)=>{d.exports=v(81872)},29836:(d,m,v)=>{let _=v(11957);function clearCanvas(d,m,v){d.clearRect(0,0,m.width,m.height),m.style||(m.style={}),m.height=v,m.width=v,m.style.height=v+"px",m.style.width=v+"px"}function getCanvasElement(){try{return document.createElement("canvas")}catch(d){throw Error("You need to specify a canvas element")}}m.render=function(d,m,v){let E=v,x=m;void 0!==E||m&&m.getContext||(E=m,m=void 0),m||(x=getCanvasElement()),E=_.getOptions(E);let T=_.getImageWidth(d.modules.size,E),A=x.getContext("2d"),j=A.createImageData(T,T);return _.qrToImageData(j.data,d,E),clearCanvas(A,x,T),A.putImageData(j,0,0),x},m.renderToDataURL=function(d,v,_){let E=_;void 0!==E||v&&v.getContext||(E=v,v=void 0),E||(E={});let x=m.render(d,v,E),T=E.type||"image/png",A=E.rendererOpts||{};return x.toDataURL(T,A.quality)}},86632:(d,m,v)=>{let _=v(57147),E=v(22904).y,x=v(11957);m.render=function(d,m){let v=x.getOptions(m),_=v.rendererOpts,T=x.getImageWidth(d.modules.size,v);_.width=T,_.height=T;let A=new E(_);return x.qrToImageData(A.data,d,v),A},m.renderToDataURL=function(d,v,_){void 0===_&&(_=v,v=void 0),m.renderToBuffer(d,v,function(d,m){d&&_(d);let v="data:image/png;base64,";v+=m.toString("base64"),_(null,v)})},m.renderToBuffer=function(d,v,_){void 0===_&&(_=v,v=void 0);let E=m.render(d,v),x=[];E.on("error",_),E.on("data",function(d){x.push(d)}),E.on("end",function(){_(null,Buffer.concat(x))}),E.pack()},m.renderToFile=function(d,v,E,x){void 0===x&&(x=E,E=void 0);let T=!1,done=(...d)=>{T||(T=!0,x.apply(null,d))},A=_.createWriteStream(d);A.on("error",done),A.on("close",done),m.renderToFileStream(A,v,E)},m.renderToFileStream=function(d,v,_){let E=m.render(v,_);E.pack().pipe(d)}},8607:(d,m,v)=>{let _=v(11957);function getColorAttrib(d,m){let v=d.a/255,_=m+'="'+d.hex+'"';return v<1?_+" "+m+'-opacity="'+v.toFixed(2).slice(1)+'"':_}function svgCmd(d,m,v){let _=d+m;return void 0!==v&&(_+=" "+v),_}function qrToPath(d,m,v){let _="",E=0,x=!1,T=0;for(let A=0;A<d.length;A++){let j=Math.floor(A%m),U=Math.floor(A/m);j||x||(x=!0),d[A]?(T++,A>0&&j>0&&d[A-1]||(_+=x?svgCmd("M",j+v,.5+U+v):svgCmd("m",E,0),E=0,x=!1),j+1<m&&d[A+1]||(_+=svgCmd("h",T),T=0)):E++}return _}m.render=function(d,m,v){let E=_.getOptions(m),x=d.modules.size,T=d.modules.data,A=x+2*E.margin,j=E.color.light.a?"<path "+getColorAttrib(E.color.light,"fill")+' d="M0 0h'+A+"v"+A+'H0z"/>':"",U="<path "+getColorAttrib(E.color.dark,"stroke")+' d="'+qrToPath(T,x,E.margin)+'"/>',F=E.width?'width="'+E.width+'" height="'+E.width+'" ':"",W='<svg xmlns="http://www.w3.org/2000/svg" '+F+('viewBox="0 0 '+A)+" "+A+'" shape-rendering="crispEdges">'+j+U+"</svg>\n";return"function"==typeof v&&v(null,W),W}},33667:(d,m,v)=>{let _=v(8607);m.render=_.render,m.renderToFile=function(d,_,E,x){void 0===x&&(x=E,E=void 0);let T=v(57147),A=m.render(_,E);T.writeFile(d,'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'+A,x)}},78643:(d,m,v)=>{let _=v(49896),E=v(87412);m.render=function(d,m,v){return m&&m.small?E.render(d,m,v):_.render(d,m,v)}},87412:(d,m)=>{let v="\x1b[37m",_="\x1b[30m",E="\x1b[0m",x="\x1b[47m"+_,T="\x1b[40m"+v,mkCodePixel=function(d,m,v,_){let E=m+1;return v>=E||_>=E||_<-1||v<-1?"0":v>=m||_>=m||_<0||v<0?"1":d[_*m+v]?"2":"1"},mkCode=function(d,m,v,_){return mkCodePixel(d,m,v,_)+mkCodePixel(d,m,v,_+1)};m.render=function(d,m,A){var j,U;let F=d.modules.size,W=d.modules.data,K=!!(m&&m.inverse),Q=m&&m.inverse?T:x,X={"00":E+" "+Q,"01":E+(j=K?_:v)+"▄"+Q,"02":E+(U=K?v:_)+"▄"+Q,10:E+j+"▀"+Q,11:" ",12:"▄",20:E+U+"▀"+Q,21:"▀",22:"█"},ee=E+"\n"+Q,er=Q;for(let d=-1;d<F+1;d+=2){for(let m=-1;m<F;m++)er+=X[mkCode(W,F,m,d)];er+=X[mkCode(W,F,F,d)]+ee}return er+=E,"function"==typeof A&&A(null,er),er}},49896:(d,m)=>{m.render=function(d,m,v){let _=d.modules.size,E=d.modules.data,x="\x1b[47m  \x1b[0m",T="",A=Array(_+3).join(x),j=[,,].join(x);T+=A+"\n";for(let d=0;d<_;++d){T+=x;for(let m=0;m<_;m++)T+=E[d*_+m]?"\x1b[40m  \x1b[0m":x;T+=j+"\n"}return T+=A+"\n","function"==typeof v&&v(null,T),T}},19319:(d,m,v)=>{let _=v(11957),E={WW:" ",WB:"▄",BB:"█",BW:"▀"},x={BB:" ",BW:"▄",WW:"█",WB:"▀"};function getBlockChar(d,m,v){return d&&m?v.BB:d&&!m?v.BW:!d&&m?v.WB:v.WW}m.render=function(d,m,v){let T=_.getOptions(m),A=E;("#ffffff"===T.color.dark.hex||"#000000"===T.color.light.hex)&&(A=x);let j=d.modules.size,U=d.modules.data,F="",W=Array(j+2*T.margin+1).join(A.WW);W=Array(T.margin/2+1).join(W+"\n");let K=Array(T.margin+1).join(A.WW);F+=W;for(let d=0;d<j;d+=2){F+=K;for(let m=0;m<j;m++){let v=U[d*j+m],_=U[(d+1)*j+m];F+=getBlockChar(v,_,A)}F+=K+"\n"}return F+=W.slice(0,-1),"function"==typeof v&&v(null,F),F},m.renderToFile=function(d,_,E,x){void 0===x&&(x=E,E=void 0);let T=v(57147),A=m.render(_,E);T.writeFile(d,A,x)}},11957:(d,m)=>{function hex2rgba(d){if("number"==typeof d&&(d=d.toString()),"string"!=typeof d)throw Error("Color should be defined as hex string");let m=d.slice().replace("#","").split("");if(m.length<3||5===m.length||m.length>8)throw Error("Invalid hex color: "+d);(3===m.length||4===m.length)&&(m=Array.prototype.concat.apply([],m.map(function(d){return[d,d]}))),6===m.length&&m.push("F","F");let v=parseInt(m.join(""),16);return{r:v>>24&255,g:v>>16&255,b:v>>8&255,a:255&v,hex:"#"+m.slice(0,6).join("")}}m.getOptions=function(d){d||(d={}),d.color||(d.color={});let m=void 0===d.margin||null===d.margin||d.margin<0?4:d.margin,v=d.width&&d.width>=21?d.width:void 0,_=d.scale||4;return{width:v,scale:v?4:_,margin:m,color:{dark:hex2rgba(d.color.dark||"#000000ff"),light:hex2rgba(d.color.light||"#ffffffff")},type:d.type,rendererOpts:d.rendererOpts||{}}},m.getScale=function(d,m){return m.width&&m.width>=d+2*m.margin?m.width/(d+2*m.margin):m.scale},m.getImageWidth=function(d,v){let _=m.getScale(d,v);return Math.floor((d+2*v.margin)*_)},m.qrToImageData=function(d,v,_){let E=v.modules.size,x=v.modules.data,T=m.getScale(E,_),A=Math.floor((E+2*_.margin)*T),j=_.margin*T,U=[_.color.light,_.color.dark];for(let m=0;m<A;m++)for(let v=0;v<A;v++){let F=(m*A+v)*4,W=_.color.light;if(m>=j&&v>=j&&m<A-j&&v<A-j){let d=Math.floor((m-j)/T),_=Math.floor((v-j)/T);W=U[x[d*E+_]?1:0]}d[F++]=W.r,d[F++]=W.g,d[F++]=W.b,d[F]=W.a}}},81872:(d,m,v)=>{let _=v(33818),E=v(35302),x=v(86632),T=v(19319),A=v(78643),j=v(33667);function checkParams(d,m,v){if(void 0===d)throw Error("String required as first argument");if(void 0===v&&(v=m,m={}),"function"!=typeof v){if(_())m=v||{},v=null;else throw Error("Callback required as last argument")}return{opts:m,cb:v}}function getTypeFromFilename(d){return d.slice((d.lastIndexOf(".")-1>>>0)+2).toLowerCase()}function getRendererFromType(d){switch(d){case"svg":return j;case"txt":case"utf8":return T;default:return x}}function getStringRendererFromType(d){switch(d){case"svg":return j;case"terminal":return A;default:return T}}function render(d,m,v){if(!v.cb)return new Promise(function(_,x){try{let T=E.create(m,v.opts);return d(T,v.opts,function(d,m){return d?x(d):_(m)})}catch(d){x(d)}});try{let _=E.create(m,v.opts);return d(_,v.opts,v.cb)}catch(d){v.cb(d)}}m.create=E.create,m.toCanvas=v(35267).toCanvas,m.toString=function(d,m,v){let _=checkParams(d,m,v),E=_.opts?_.opts.type:void 0,x=getStringRendererFromType(E);return render(x.render,d,_)},m.toDataURL=function(d,m,v){let _=checkParams(d,m,v),E=getRendererFromType(_.opts.type);return render(E.renderToDataURL,d,_)},m.toBuffer=function(d,m,v){let _=checkParams(d,m,v),E=getRendererFromType(_.opts.type);return render(E.renderToBuffer,d,_)},m.toFile=function(d,m,v,E){if("string"!=typeof d||!("string"==typeof m||"object"==typeof m))throw Error("Invalid argument");if(arguments.length<3&&!_())throw Error("Too few arguments provided");let x=checkParams(m,v,E),T=x.opts.type||getTypeFromFilename(d),A=getRendererFromType(T),j=A.renderToFile.bind(null,d);return render(j,m,x)},m.toFileStream=function(d,m,v){if(arguments.length<2)throw Error("Too few arguments provided");let _=checkParams(m,v,d.emit.bind(d,"error")),E=getRendererFromType("png"),x=E.renderToFileStream.bind(null,d);render(x,m,_)}},20616:(d,m,v)=>{"use strict";let _=v(68503),E=v(15544),x=v(18458),T=v(41215),isNullOrUndefined=d=>null==d,A=Symbol("encodeFragmentIdentifier");function encoderForArrayFormat(d){switch(d.arrayFormat){case"index":return m=>(v,_)=>{let E=v.length;return void 0===_||d.skipNull&&null===_||d.skipEmptyString&&""===_?v:null===_?[...v,[encode(m,d),"[",E,"]"].join("")]:[...v,[encode(m,d),"[",encode(E,d),"]=",encode(_,d)].join("")]};case"bracket":return m=>(v,_)=>void 0===_||d.skipNull&&null===_||d.skipEmptyString&&""===_?v:null===_?[...v,[encode(m,d),"[]"].join("")]:[...v,[encode(m,d),"[]=",encode(_,d)].join("")];case"colon-list-separator":return m=>(v,_)=>void 0===_||d.skipNull&&null===_||d.skipEmptyString&&""===_?v:null===_?[...v,[encode(m,d),":list="].join("")]:[...v,[encode(m,d),":list=",encode(_,d)].join("")];case"comma":case"separator":case"bracket-separator":{let m="bracket-separator"===d.arrayFormat?"[]=":"=";return v=>(_,E)=>void 0===E||d.skipNull&&null===E||d.skipEmptyString&&""===E?_:(E=null===E?"":E,0===_.length)?[[encode(v,d),m,encode(E,d)].join("")]:[[_,encode(E,d)].join(d.arrayFormatSeparator)]}default:return m=>(v,_)=>void 0===_||d.skipNull&&null===_||d.skipEmptyString&&""===_?v:null===_?[...v,encode(m,d)]:[...v,[encode(m,d),"=",encode(_,d)].join("")]}}function parserForArrayFormat(d){let m;switch(d.arrayFormat){case"index":return(d,v,_)=>{if(m=/\[(\d*)\]$/.exec(d),d=d.replace(/\[\d*\]$/,""),!m){_[d]=v;return}void 0===_[d]&&(_[d]={}),_[d][m[1]]=v};case"bracket":return(d,v,_)=>{if(m=/(\[\])$/.exec(d),d=d.replace(/\[\]$/,""),!m){_[d]=v;return}if(void 0===_[d]){_[d]=[v];return}_[d]=[].concat(_[d],v)};case"colon-list-separator":return(d,v,_)=>{if(m=/(:list)$/.exec(d),d=d.replace(/:list$/,""),!m){_[d]=v;return}if(void 0===_[d]){_[d]=[v];return}_[d]=[].concat(_[d],v)};case"comma":case"separator":return(m,v,_)=>{let E="string"==typeof v&&v.includes(d.arrayFormatSeparator),x="string"==typeof v&&!E&&decode(v,d).includes(d.arrayFormatSeparator);v=x?decode(v,d):v;let T=E||x?v.split(d.arrayFormatSeparator).map(m=>decode(m,d)):null===v?v:decode(v,d);_[m]=T};case"bracket-separator":return(m,v,_)=>{let E=/(\[\])$/.test(m);if(m=m.replace(/\[\]$/,""),!E){_[m]=v?decode(v,d):v;return}let x=null===v?[]:v.split(d.arrayFormatSeparator).map(m=>decode(m,d));if(void 0===_[m]){_[m]=x;return}_[m]=[].concat(_[m],x)};default:return(d,m,v)=>{if(void 0===v[d]){v[d]=m;return}v[d]=[].concat(v[d],m)}}}function validateArrayFormatSeparator(d){if("string"!=typeof d||1!==d.length)throw TypeError("arrayFormatSeparator must be single character string")}function encode(d,m){return m.encode?m.strict?_(d):encodeURIComponent(d):d}function decode(d,m){return m.decode?E(d):d}function keysSorter(d){return Array.isArray(d)?d.sort():"object"==typeof d?keysSorter(Object.keys(d)).sort((d,m)=>Number(d)-Number(m)).map(m=>d[m]):d}function removeHash(d){let m=d.indexOf("#");return -1!==m&&(d=d.slice(0,m)),d}function getHash(d){let m="",v=d.indexOf("#");return -1!==v&&(m=d.slice(v)),m}function extract(d){d=removeHash(d);let m=d.indexOf("?");return -1===m?"":d.slice(m+1)}function parseValue(d,m){return m.parseNumbers&&!Number.isNaN(Number(d))&&"string"==typeof d&&""!==d.trim()?d=Number(d):m.parseBooleans&&null!==d&&("true"===d.toLowerCase()||"false"===d.toLowerCase())&&(d="true"===d.toLowerCase()),d}function parse(d,m){validateArrayFormatSeparator((m=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},m)).arrayFormatSeparator);let v=parserForArrayFormat(m),_=Object.create(null);if("string"!=typeof d||!(d=d.trim().replace(/^[?#&]/,"")))return _;for(let E of d.split("&")){if(""===E)continue;let[d,T]=x(m.decode?E.replace(/\+/g," "):E,"=");T=void 0===T?null:["comma","separator","bracket-separator"].includes(m.arrayFormat)?T:decode(T,m),v(decode(d,m),T,_)}for(let d of Object.keys(_)){let v=_[d];if("object"==typeof v&&null!==v)for(let d of Object.keys(v))v[d]=parseValue(v[d],m);else _[d]=parseValue(v,m)}return!1===m.sort?_:(!0===m.sort?Object.keys(_).sort():Object.keys(_).sort(m.sort)).reduce((d,m)=>{let v=_[m];return v&&"object"==typeof v&&!Array.isArray(v)?d[m]=keysSorter(v):d[m]=v,d},Object.create(null))}m.extract=extract,m.parse=parse,m.stringify=(d,m)=>{if(!d)return"";validateArrayFormatSeparator((m=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},m)).arrayFormatSeparator);let shouldFilter=v=>m.skipNull&&isNullOrUndefined(d[v])||m.skipEmptyString&&""===d[v],v=encoderForArrayFormat(m),_={};for(let m of Object.keys(d))shouldFilter(m)||(_[m]=d[m]);let E=Object.keys(_);return!1!==m.sort&&E.sort(m.sort),E.map(_=>{let E=d[_];return void 0===E?"":null===E?encode(_,m):Array.isArray(E)?0===E.length&&"bracket-separator"===m.arrayFormat?encode(_,m)+"[]":E.reduce(v(_),[]).join("&"):encode(_,m)+"="+encode(E,m)}).filter(d=>d.length>0).join("&")},m.parseUrl=(d,m)=>{m=Object.assign({decode:!0},m);let[v,_]=x(d,"#");return Object.assign({url:v.split("?")[0]||"",query:parse(extract(d),m)},m&&m.parseFragmentIdentifier&&_?{fragmentIdentifier:decode(_,m)}:{})},m.stringifyUrl=(d,v)=>{v=Object.assign({encode:!0,strict:!0,[A]:!0},v);let _=removeHash(d.url).split("?")[0]||"",E=m.extract(d.url),x=m.parse(E,{sort:!1}),T=Object.assign(x,d.query),j=m.stringify(T,v);j&&(j=`?${j}`);let U=getHash(d.url);return d.fragmentIdentifier&&(U=`#${v[A]?encode(d.fragmentIdentifier,v):d.fragmentIdentifier}`),`${_}${j}${U}`},m.pick=(d,v,_)=>{_=Object.assign({parseFragmentIdentifier:!0,[A]:!1},_);let{url:E,query:x,fragmentIdentifier:j}=m.parseUrl(d,_);return m.stringifyUrl({url:E,query:T(x,v),fragmentIdentifier:j},_)},m.exclude=(d,v,_)=>{let E=Array.isArray(v)?d=>!v.includes(d):(d,m)=>!v(d,m);return m.pick(d,E,_)}},16336:function(d,m,v){var _;d.exports=(_=v(80404),(()=>{var d={"./node_modules/css-mediaquery/index.js":(d,m)=>{"use strict";m.match=matchQuery,m.parse=parseQuery;var v=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,_=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,E=/^(?:(min|max)-)?(.+)/,x=/(em|rem|px|cm|mm|in|pt|pc)?$/,T=/(dpi|dpcm|dppx)?$/;function matchQuery(d,m){return parseQuery(d).some(function(d){var v=d.inverse,_="all"===d.type||m.type===d.type;if(_&&v||!(_||v))return!1;var E=d.expressions.every(function(d){var v=d.feature,_=d.modifier,E=d.value,x=m[v];if(!x)return!1;switch(v){case"orientation":case"scan":return x.toLowerCase()===E.toLowerCase();case"width":case"height":case"device-width":case"device-height":E=toPx(E),x=toPx(x);break;case"resolution":E=toDpi(E),x=toDpi(x);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":E=toDecimal(E),x=toDecimal(x);break;case"grid":case"color":case"color-index":case"monochrome":E=parseInt(E,10)||1,x=parseInt(x,10)||0}switch(_){case"min":return x>=E;case"max":return x<=E;default:return x===E}});return E&&!v||!E&&v})}function parseQuery(d){return d.split(",").map(function(d){var m=(d=d.trim()).match(v),x=m[1],T=m[2],A=m[3]||"",j={};return j.inverse=!!x&&"not"===x.toLowerCase(),j.type=T?T.toLowerCase():"all",A=A.match(/\([^\)]+\)/g)||[],j.expressions=A.map(function(d){var m=d.match(_),v=m[1].toLowerCase().match(E);return{modifier:v[1],feature:v[2],value:m[2]}}),j})}function toDecimal(d){var m,v=Number(d);return v||(v=(m=d.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/m[2]),v}function toDpi(d){var m=parseFloat(d);switch(String(d).match(T)[1]){case"dpcm":return m/2.54;case"dppx":return 96*m;default:return m}}function toPx(d){var m=parseFloat(d);switch(String(d).match(x)[1]){case"em":case"rem":return 16*m;case"cm":return 96*m/2.54;case"mm":return 96*m/2.54/10;case"in":return 96*m;case"pt":return 72*m;case"pc":return 72*m/12;default:return m}}},"./node_modules/hyphenate-style-name/index.js":(d,m,v)=>{"use strict";v.r(m),v.d(m,{default:()=>T});var _=/[A-Z]/g,E=/^ms-/,x={};function toHyphenLower(d){return"-"+d.toLowerCase()}function hyphenateStyleName(d){if(x.hasOwnProperty(d))return x[d];var m=d.replace(_,toHyphenLower);return x[d]=E.test(m)?"-"+m:m}let T=hyphenateStyleName},"./node_modules/matchmediaquery/index.js":(d,m,v)=>{"use strict";var _=v(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,E="undefined"!=typeof window?window.matchMedia:null;function Mql(d,m,v){var x=this;if(E&&!v){var T=E.call(window,d);this.matches=T.matches,this.media=T.media,T.addListener(update)}else this.matches=_(d,m),this.media=d;function addListener(d){T&&T.addListener(d)}function removeListener(d){T&&T.removeListener(d)}function update(d){x.matches=d.matches,x.media=d.media}function dispose(){T&&T.removeListener(update)}this.addListener=addListener,this.removeListener=removeListener,this.dispose=dispose}function matchMedia(d,m,v){return new Mql(d,m,v)}d.exports=matchMedia},"./node_modules/object-assign/index.js":d=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;function toObject(d){if(null==d)throw TypeError("Object.assign cannot be called with null or undefined");return Object(d)}function shouldUseNative(){try{if(!Object.assign)return!1;var d=new String("abc");if(d[5]="de","5"===Object.getOwnPropertyNames(d)[0])return!1;for(var m={},v=0;v<10;v++)m["_"+String.fromCharCode(v)]=v;var _=Object.getOwnPropertyNames(m).map(function(d){return m[d]});if("0123456789"!==_.join(""))return!1;var E={};if("abcdefghijklmnopqrst".split("").forEach(function(d){E[d]=d}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},E)).join(""))return!1;return!0}catch(d){return!1}}d.exports=shouldUseNative()?Object.assign:function(d,E){for(var x,T,A=toObject(d),j=1;j<arguments.length;j++){for(var U in x=Object(arguments[j]))v.call(x,U)&&(A[U]=x[U]);if(m){T=m(x);for(var F=0;F<T.length;F++)_.call(x,T[F])&&(A[T[F]]=x[T[F]])}}return A}},"./node_modules/prop-types/checkPropTypes.js":(d,m,v)=>{"use strict";var printWarning=function(){},_=v(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),E={},x=v(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function checkPropTypes(d,m,v,T,A){for(var j in d)if(x(d,j)){var U;try{if("function"!=typeof d[j]){var F=Error((T||"React class")+": "+v+" type `"+j+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof d[j]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw F.name="Invariant Violation",F}U=d[j](m,j,T,v,null,_)}catch(d){U=d}if(!U||U instanceof Error||printWarning((T||"React class")+": type specification of "+v+" `"+j+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof U+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),U instanceof Error&&!(U.message in E)){E[U.message]=!0;var W=A?A():"";printWarning("Failed "+v+" type: "+U.message+(null!=W?W:""))}}}printWarning=function(d){var m="Warning: "+d;"undefined"!=typeof console&&console.error(m);try{throw Error(m)}catch(d){}},checkPropTypes.resetWarningCache=function(){E={}},d.exports=checkPropTypes},"./node_modules/prop-types/factoryWithTypeCheckers.js":(d,m,v)=>{"use strict";var _=v(/*! react-is */"./node_modules/react-is/index.js"),E=v(/*! object-assign */"./node_modules/object-assign/index.js"),x=v(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),T=v(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),A=v(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js"),printWarning=function(){};function emptyFunctionThatReturnsNull(){return null}printWarning=function(d){var m="Warning: "+d;"undefined"!=typeof console&&console.error(m);try{throw Error(m)}catch(d){}},d.exports=function(d,m){var v="function"==typeof Symbol&&Symbol.iterator;function getIteratorFn(d){var m=d&&(v&&d[v]||d["@@iterator"]);if("function"==typeof m)return m}var j="<<anonymous>>",U={array:createPrimitiveTypeChecker("array"),bigint:createPrimitiveTypeChecker("bigint"),bool:createPrimitiveTypeChecker("boolean"),func:createPrimitiveTypeChecker("function"),number:createPrimitiveTypeChecker("number"),object:createPrimitiveTypeChecker("object"),string:createPrimitiveTypeChecker("string"),symbol:createPrimitiveTypeChecker("symbol"),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};function is(d,m){return d===m?0!==d||1/d==1/m:d!=d&&m!=m}function PropTypeError(d,m){this.message=d,this.data=m&&"object"==typeof m?m:{},this.stack=""}function createChainableTypeChecker(d){var v={},_=0;function checkType(E,T,A,U,F,W,K){if(U=U||j,W=W||A,K!==x){if(m){var Q=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Q.name="Invariant Violation",Q}if("undefined"!=typeof console){var X=U+":"+A;!v[X]&&_<3&&(printWarning("You are manually calling a React.PropTypes validation function for the `"+W+"` prop on `"+U+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),v[X]=!0,_++)}}return null!=T[A]?d(T,A,U,F,W):E?new PropTypeError(null===T[A]?"The "+F+" `"+W+"` is marked as required in `"+U+"`, but its value is `null`.":"The "+F+" `"+W+"` is marked as required in `"+U+"`, but its value is `undefined`."):null}var E=checkType.bind(null,!1);return E.isRequired=checkType.bind(null,!0),E}function createPrimitiveTypeChecker(d){return createChainableTypeChecker(function(m,v,_,E,x,T){var A=m[v];return getPropType(A)!==d?new PropTypeError("Invalid "+E+" `"+x+"` of type `"+getPreciseType(A)+"` supplied to `"+_+"`, expected `"+d+"`.",{expectedType:d}):null})}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull)}function createArrayOfTypeChecker(d){return createChainableTypeChecker(function(m,v,_,E,T){if("function"!=typeof d)return new PropTypeError("Property `"+T+"` of component `"+_+"` has invalid PropType notation inside arrayOf.");var A=m[v];if(!Array.isArray(A))return new PropTypeError("Invalid "+E+" `"+T+"` of type `"+getPropType(A)+"` supplied to `"+_+"`, expected an array.");for(var j=0;j<A.length;j++){var U=d(A,j,_,E,T+"["+j+"]",x);if(U instanceof Error)return U}return null})}function createElementTypeChecker(){return createChainableTypeChecker(function(m,v,_,E,x){var T=m[v];return d(T)?null:new PropTypeError("Invalid "+E+" `"+x+"` of type `"+getPropType(T)+"` supplied to `"+_+"`, expected a single ReactElement.")})}function createElementTypeTypeChecker(){return createChainableTypeChecker(function(d,m,v,E,x){var T=d[m];return _.isValidElementType(T)?null:new PropTypeError("Invalid "+E+" `"+x+"` of type `"+getPropType(T)+"` supplied to `"+v+"`, expected a single ReactElement type.")})}function createInstanceTypeChecker(d){return createChainableTypeChecker(function(m,v,_,E,x){if(!(m[v]instanceof d)){var T=d.name||j;return new PropTypeError("Invalid "+E+" `"+x+"` of type `"+getClassName(m[v])+"` supplied to `"+_+"`, expected instance of `"+T+"`.")}return null})}function createEnumTypeChecker(d){return Array.isArray(d)?createChainableTypeChecker(function(m,v,_,E,x){for(var T=m[v],A=0;A<d.length;A++)if(is(T,d[A]))return null;var j=JSON.stringify(d,function(d,m){return"symbol"===getPreciseType(m)?String(m):m});return new PropTypeError("Invalid "+E+" `"+x+"` of value `"+String(T)+"` supplied to `"+_+"`, expected one of "+j+".")}):(arguments.length>1?printWarning("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):printWarning("Invalid argument supplied to oneOf, expected an array."),emptyFunctionThatReturnsNull)}function createObjectOfTypeChecker(d){return createChainableTypeChecker(function(m,v,_,E,A){if("function"!=typeof d)return new PropTypeError("Property `"+A+"` of component `"+_+"` has invalid PropType notation inside objectOf.");var j=m[v],U=getPropType(j);if("object"!==U)return new PropTypeError("Invalid "+E+" `"+A+"` of type `"+U+"` supplied to `"+_+"`, expected an object.");for(var F in j)if(T(j,F)){var W=d(j,F,_,E,A+"."+F,x);if(W instanceof Error)return W}return null})}function createUnionTypeChecker(d){if(!Array.isArray(d))return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."),emptyFunctionThatReturnsNull;for(var m=0;m<d.length;m++){var v=d[m];if("function"!=typeof v)return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+getPostfixForTypeWarning(v)+" at index "+m+"."),emptyFunctionThatReturnsNull}return createChainableTypeChecker(function(m,v,_,E,A){for(var j=[],U=0;U<d.length;U++){var F=(0,d[U])(m,v,_,E,A,x);if(null==F)return null;F.data&&T(F.data,"expectedType")&&j.push(F.data.expectedType)}return new PropTypeError("Invalid "+E+" `"+A+"` supplied to `"+_+"`"+(j.length>0?", expected one of type ["+j.join(", ")+"]":"")+".")})}function createNodeChecker(){return createChainableTypeChecker(function(d,m,v,_,E){return isNode(d[m])?null:new PropTypeError("Invalid "+_+" `"+E+"` supplied to `"+v+"`, expected a ReactNode.")})}function invalidValidatorError(d,m,v,_,E){return new PropTypeError((d||"React class")+": "+m+" type `"+v+"."+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+E+"`.")}function createShapeTypeChecker(d){return createChainableTypeChecker(function(m,v,_,E,T){var A=m[v],j=getPropType(A);if("object"!==j)return new PropTypeError("Invalid "+E+" `"+T+"` of type `"+j+"` supplied to `"+_+"`, expected `object`.");for(var U in d){var F=d[U];if("function"!=typeof F)return invalidValidatorError(_,E,T,U,getPreciseType(F));var W=F(A,U,_,E,T+"."+U,x);if(W)return W}return null})}function createStrictShapeTypeChecker(d){return createChainableTypeChecker(function(m,v,_,A,j){var U=m[v],F=getPropType(U);if("object"!==F)return new PropTypeError("Invalid "+A+" `"+j+"` of type `"+F+"` supplied to `"+_+"`, expected `object`.");var W=E({},m[v],d);for(var K in W){var Q=d[K];if(T(d,K)&&"function"!=typeof Q)return invalidValidatorError(_,A,j,K,getPreciseType(Q));if(!Q)return new PropTypeError("Invalid "+A+" `"+j+"` key `"+K+"` supplied to `"+_+"`.\nBad object: "+JSON.stringify(m[v],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(d),null,"  "));var X=Q(U,K,_,A,j+"."+K,x);if(X)return X}return null})}function isNode(m){switch(typeof m){case"number":case"string":case"undefined":return!0;case"boolean":return!m;case"object":if(Array.isArray(m))return m.every(isNode);if(null===m||d(m))return!0;var v=getIteratorFn(m);if(!v)return!1;var _,E=v.call(m);if(v!==m.entries){for(;!(_=E.next()).done;)if(!isNode(_.value))return!1}else for(;!(_=E.next()).done;){var x=_.value;if(x&&!isNode(x[1]))return!1}return!0;default:return!1}}function isSymbol(d,m){return"symbol"===d||!!m&&!!("Symbol"===m["@@toStringTag"]||"function"==typeof Symbol&&m instanceof Symbol)}function getPropType(d){var m=typeof d;return Array.isArray(d)?"array":d instanceof RegExp?"object":isSymbol(m,d)?"symbol":m}function getPreciseType(d){if(null==d)return""+d;var m=getPropType(d);if("object"===m){if(d instanceof Date)return"date";if(d instanceof RegExp)return"regexp"}return m}function getPostfixForTypeWarning(d){var m=getPreciseType(d);switch(m){case"array":case"object":return"an "+m;case"boolean":case"date":case"regexp":return"a "+m;default:return m}}function getClassName(d){return d.constructor&&d.constructor.name?d.constructor.name:j}return PropTypeError.prototype=Error.prototype,U.checkPropTypes=A,U.resetWarningCache=A.resetWarningCache,U.PropTypes=U,U}},"./node_modules/prop-types/index.js":(d,m,v)=>{var _=v(/*! react-is */"./node_modules/react-is/index.js");d.exports=v(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(_.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":d=>{"use strict";d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":d=>{d.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(d,m)=>{"use strict";!function(){var d="function"==typeof Symbol&&Symbol.for,v=d?Symbol.for("react.element"):60103,_=d?Symbol.for("react.portal"):60106,E=d?Symbol.for("react.fragment"):60107,x=d?Symbol.for("react.strict_mode"):60108,T=d?Symbol.for("react.profiler"):60114,A=d?Symbol.for("react.provider"):60109,j=d?Symbol.for("react.context"):60110,U=d?Symbol.for("react.async_mode"):60111,F=d?Symbol.for("react.concurrent_mode"):60111,W=d?Symbol.for("react.forward_ref"):60112,K=d?Symbol.for("react.suspense"):60113,Q=d?Symbol.for("react.suspense_list"):60120,X=d?Symbol.for("react.memo"):60115,ee=d?Symbol.for("react.lazy"):60116,er=d?Symbol.for("react.block"):60121,ei=d?Symbol.for("react.fundamental"):60117,eo=d?Symbol.for("react.responder"):60118,ea=d?Symbol.for("react.scope"):60119;function isValidElementType(d){return"string"==typeof d||"function"==typeof d||d===E||d===F||d===T||d===x||d===K||d===Q||"object"==typeof d&&null!==d&&(d.$$typeof===ee||d.$$typeof===X||d.$$typeof===A||d.$$typeof===j||d.$$typeof===W||d.$$typeof===ei||d.$$typeof===eo||d.$$typeof===ea||d.$$typeof===er)}function typeOf(d){if("object"==typeof d&&null!==d){var m=d.$$typeof;switch(m){case v:var Q=d.type;switch(Q){case U:case F:case E:case T:case x:case K:return Q;default:var er=Q&&Q.$$typeof;switch(er){case j:case W:case ee:case X:case A:return er;default:return m}}case _:return m}}}var es=!1;function isAsyncMode(d){return es||(es=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),isConcurrentMode(d)||typeOf(d)===U}function isConcurrentMode(d){return typeOf(d)===F}function isContextConsumer(d){return typeOf(d)===j}function isContextProvider(d){return typeOf(d)===A}function isElement(d){return"object"==typeof d&&null!==d&&d.$$typeof===v}function isForwardRef(d){return typeOf(d)===W}function isFragment(d){return typeOf(d)===E}function isLazy(d){return typeOf(d)===ee}function isMemo(d){return typeOf(d)===X}function isPortal(d){return typeOf(d)===_}function isProfiler(d){return typeOf(d)===T}function isStrictMode(d){return typeOf(d)===x}function isSuspense(d){return typeOf(d)===K}m.AsyncMode=U,m.ConcurrentMode=F,m.ContextConsumer=j,m.ContextProvider=A,m.Element=v,m.ForwardRef=W,m.Fragment=E,m.Lazy=ee,m.Memo=X,m.Portal=_,m.Profiler=T,m.StrictMode=x,m.Suspense=K,m.isAsyncMode=isAsyncMode,m.isConcurrentMode=isConcurrentMode,m.isContextConsumer=isContextConsumer,m.isContextProvider=isContextProvider,m.isElement=isElement,m.isForwardRef=isForwardRef,m.isFragment=isFragment,m.isLazy=isLazy,m.isMemo=isMemo,m.isPortal=isPortal,m.isProfiler=isProfiler,m.isStrictMode=isStrictMode,m.isSuspense=isSuspense,m.isValidElementType=isValidElementType,m.typeOf=typeOf}()},"./node_modules/react-is/index.js":(d,m,v)=>{"use strict";d.exports=v(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(d,m,v)=>{"use strict";function shallowEqualObjects(d,m){if(d===m)return!0;if(!d||!m)return!1;var v=Object.keys(d),_=Object.keys(m),E=v.length;if(_.length!==E)return!1;for(var x=0;x<E;x++){var T=v[x];if(d[T]!==m[T]||!Object.prototype.hasOwnProperty.call(m,T))return!1}return!0}function shallowEqualArrays(d,m){if(d===m)return!0;if(!d||!m)return!1;var v=d.length;if(m.length!==v)return!1;for(var _=0;_<v;_++)if(d[_]!==m[_])return!1;return!0}v.r(m),v.d(m,{shallowEqualArrays:()=>shallowEqualArrays,shallowEqualObjects:()=>shallowEqualObjects})},"./src/Component.ts":function(d,m,v){"use strict";var _=this&&this.__rest||function(d,m){var v={};for(var _ in d)Object.prototype.hasOwnProperty.call(d,_)&&0>m.indexOf(_)&&(v[_]=d[_]);if(null!=d&&"function"==typeof Object.getOwnPropertySymbols)for(var E=0,_=Object.getOwnPropertySymbols(d);E<_.length;E++)0>m.indexOf(_[E])&&Object.prototype.propertyIsEnumerable.call(d,_[E])&&(v[_[E]]=d[_[E]]);return v},E=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(m,"__esModule",{value:!0});var x=E(v(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));m.default=function(d){var m=d.children,v=d.device,E=d.onChange,T=_(d,["children","device","onChange"]),A=(0,x.default)(T,v,E);return"function"==typeof m?m(A):A?m:null}},"./src/Context.ts":(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=(0,v(/*! react */"react").createContext)(void 0);m.default=_},"./src/index.ts":function(d,m,v){"use strict";var _=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(m,"__esModule",{value:!0}),m.Context=m.toQuery=m.useMediaQuery=m.default=void 0;var E=_(v(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));m.useMediaQuery=E.default;var x=_(v(/*! ./Component */"./src/Component.ts"));m.default=x.default;var T=_(v(/*! ./toQuery */"./src/toQuery.ts"));m.toQuery=T.default;var A=_(v(/*! ./Context */"./src/Context.ts"));m.Context=A.default},"./src/mediaQuery.ts":function(d,m,v){"use strict";var _=this&&this.__assign||function(){return(_=Object.assign||function(d){for(var m,v=1,_=arguments.length;v<_;v++)for(var E in m=arguments[v])Object.prototype.hasOwnProperty.call(m,E)&&(d[E]=m[E]);return d}).apply(this,arguments)},E=this&&this.__rest||function(d,m){var v={};for(var _ in d)Object.prototype.hasOwnProperty.call(d,_)&&0>m.indexOf(_)&&(v[_]=d[_]);if(null!=d&&"function"==typeof Object.getOwnPropertySymbols)for(var E=0,_=Object.getOwnPropertySymbols(d);E<_.length;E++)0>m.indexOf(_[E])&&Object.prototype.propertyIsEnumerable.call(d,_[E])&&(v[_[E]]=d[_[E]]);return v},x=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(m,"__esModule",{value:!0});var T=x(v(/*! prop-types */"./node_modules/prop-types/index.js")),A=T.default.oneOfType([T.default.string,T.default.number]),j={all:T.default.bool,grid:T.default.bool,aural:T.default.bool,braille:T.default.bool,handheld:T.default.bool,print:T.default.bool,projection:T.default.bool,screen:T.default.bool,tty:T.default.bool,tv:T.default.bool,embossed:T.default.bool},U={orientation:T.default.oneOf(["portrait","landscape"]),scan:T.default.oneOf(["progressive","interlace"]),aspectRatio:T.default.string,deviceAspectRatio:T.default.string,height:A,deviceHeight:A,width:A,deviceWidth:A,color:T.default.bool,colorIndex:T.default.bool,monochrome:T.default.bool,resolution:A,type:Object.keys(j)};U.type;var F=E(U,["type"]),W=_({minAspectRatio:T.default.string,maxAspectRatio:T.default.string,minDeviceAspectRatio:T.default.string,maxDeviceAspectRatio:T.default.string,minHeight:A,maxHeight:A,minDeviceHeight:A,maxDeviceHeight:A,minWidth:A,maxWidth:A,minDeviceWidth:A,maxDeviceWidth:A,minColor:T.default.number,maxColor:T.default.number,minColorIndex:T.default.number,maxColorIndex:T.default.number,minMonochrome:T.default.number,maxMonochrome:T.default.number,minResolution:A,maxResolution:A},F),K=_(_({},j),W);m.default={all:K,types:j,matchers:U,features:W}},"./src/toQuery.ts":function(d,m,v){"use strict";var _=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(m,"__esModule",{value:!0});var E=_(v(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),x=_(v(/*! ./mediaQuery */"./src/mediaQuery.ts")),keyVal=function(d,m){var v=(0,E.default)(d);return("number"==typeof m&&(m="".concat(m,"px")),!0===m)?v:!1===m?"not ".concat(v):"(".concat(v,": ").concat(m,")")};m.default=function(d){var m=[];return Object.keys(x.default.all).forEach(function(v){var _=d[v];null!=_&&m.push(keyVal(v,_))}),m.join(" and ")}},"./src/useMediaQuery.ts":function(d,m,v){"use strict";var _=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(m,"__esModule",{value:!0});var E=v(/*! react */"react"),x=_(v(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),T=_(v(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),A=v(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),j=_(v(/*! ./toQuery */"./src/toQuery.ts")),U=_(v(/*! ./Context */"./src/Context.ts")),hyphenateKeys=function(d){if(d)return Object.keys(d).reduce(function(m,v){return m[(0,T.default)(v)]=d[v],m},{})},useIsUpdate=function(){var d=(0,E.useRef)(!1);return(0,E.useEffect)(function(){d.current=!0},[]),d.current},useDevice=function(d){var m=(0,E.useContext)(U.default),getDevice=function(){return hyphenateKeys(d)||hyphenateKeys(m)},v=(0,E.useState)(getDevice),_=v[0],x=v[1];return(0,E.useEffect)(function(){var d=getDevice();(0,A.shallowEqualObjects)(_,d)||x(d)},[d,m]),_},useQuery=function(d){var getQuery=function(){return d.query||(0,j.default)(d)},m=(0,E.useState)(getQuery),v=m[0],_=m[1];return(0,E.useEffect)(function(){var d=getQuery();v!==d&&_(d)},[d]),v},useMatchMedia=function(d,m){var getMatchMedia=function(){return(0,x.default)(d,m||{},!!m)},v=(0,E.useState)(getMatchMedia),_=v[0],T=v[1],A=useIsUpdate();return(0,E.useEffect)(function(){if(A){var d=getMatchMedia();return T(d),function(){d&&d.dispose()}}},[d,m]),_},useMatches=function(d){var m=(0,E.useState)(d.matches),v=m[0],_=m[1];return(0,E.useEffect)(function(){var updateMatches=function(d){_(d.matches)};return d.addListener(updateMatches),_(d.matches),function(){d.removeListener(updateMatches)}},[d]),v};m.default=function(d,m,v){var _=useDevice(m),x=useQuery(d);if(!x)throw Error("Invalid or missing MediaQuery!");var T=useMatchMedia(x,_),A=useMatches(T),j=useIsUpdate();return(0,E.useEffect)(function(){j&&v&&v(A)},[A]),(0,E.useEffect)(function(){return function(){T&&T.dispose()}},[]),A}},react:d=>{"use strict";d.exports=_}},m={};function __nested_webpack_require_62230__(v){var _=m[v];if(void 0!==_)return _.exports;var E=m[v]={exports:{}};return d[v].call(E.exports,E,E.exports,__nested_webpack_require_62230__),E.exports}return __nested_webpack_require_62230__.d=(d,m)=>{for(var v in m)__nested_webpack_require_62230__.o(m,v)&&!__nested_webpack_require_62230__.o(d,v)&&Object.defineProperty(d,v,{enumerable:!0,get:m[v]})},__nested_webpack_require_62230__.o=(d,m)=>Object.prototype.hasOwnProperty.call(d,m),__nested_webpack_require_62230__.r=d=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},__nested_webpack_require_62230__("./src/index.ts")})())},18458:d=>{"use strict";d.exports=(d,m)=>{if(!("string"==typeof d&&"string"==typeof m))throw TypeError("Expected the arguments to be of type `string`");if(""===m)return[d];let v=d.indexOf(m);return -1===v?[d]:[d.slice(0,v),d.slice(v+m.length)]}},68503:d=>{"use strict";d.exports=d=>encodeURIComponent(d).replace(/[!'()*]/g,d=>`%${d.charCodeAt(0).toString(16).toUpperCase()}`)},88610:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(85150);function alloc(d=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.alloc?_.asUint8Array(globalThis.Buffer.alloc(d)):new Uint8Array(d)}function allocUnsafe(d=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?_.asUint8Array(globalThis.Buffer.allocUnsafe(d)):new Uint8Array(d)}m.alloc=alloc,m.allocUnsafe=allocUnsafe},65455:(d,m)=>{"use strict";function compare(d,m){for(let v=0;v<d.byteLength;v++){if(d[v]<m[v])return -1;if(d[v]>m[v])return 1}return d.byteLength>m.byteLength?1:d.byteLength<m.byteLength?-1:0}Object.defineProperty(m,"__esModule",{value:!0}),m.compare=compare},19621:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(88610),E=v(85150);function concat(d,m){m||(m=d.reduce((d,m)=>d+m.length,0));let v=_.allocUnsafe(m),x=0;for(let m of d)v.set(m,x),x+=m.length;return E.asUint8Array(v)}m.concat=concat},4360:(d,m)=>{"use strict";function equals(d,m){if(d===m)return!0;if(d.byteLength!==m.byteLength)return!1;for(let v=0;v<d.byteLength;v++)if(d[v]!==m[v])return!1;return!0}Object.defineProperty(m,"__esModule",{value:!0}),m.equals=equals},76707:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(84386),E=v(85150);function fromString(d,m="utf8"){let v=_[m];if(!v)throw Error(`Unsupported encoding "${m}"`);return("utf8"===m||"utf-8"===m)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?E.asUint8Array(globalThis.Buffer.from(d,"utf-8")):v.decoder.decode(`${v.prefix}${d}`)}m.fromString=fromString},98202:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(65455),E=v(19621),x=v(4360),T=v(76707),A=v(29309),j=v(45224);m.compare=_.compare,m.concat=E.concat,m.equals=x.equals,m.fromString=T.fromString,m.toString=A.toString,m.xor=j.xor},29309:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(84386);function toString(d,m="utf8"){let v=_[m];if(!v)throw Error(`Unsupported encoding "${m}"`);return("utf8"===m||"utf-8"===m)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(d.buffer,d.byteOffset,d.byteLength).toString("utf8"):v.encoder.encode(d).substring(1)}m.toString=toString},85150:(d,m)=>{"use strict";function asUint8Array(d){return null!=globalThis.Buffer?new Uint8Array(d.buffer,d.byteOffset,d.byteLength):d}Object.defineProperty(m,"__esModule",{value:!0}),m.asUint8Array=asUint8Array},84386:(d,m,v)=>{"use strict";var _=v(80570),E=v(88610);function createCodec(d,m,v,_){return{name:d,prefix:m,encoder:{name:d,prefix:m,encode:v},decoder:{decode:_}}}let x=createCodec("utf8","u",d=>{let m=new TextDecoder("utf8");return"u"+m.decode(d)},d=>{let m=new TextEncoder;return m.encode(d.substring(1))}),T=createCodec("ascii","a",d=>{let m="a";for(let v=0;v<d.length;v++)m+=String.fromCharCode(d[v]);return m},d=>{d=d.substring(1);let m=E.allocUnsafe(d.length);for(let v=0;v<d.length;v++)m[v]=d.charCodeAt(v);return m}),A={utf8:x,"utf-8":x,hex:_.bases.base16,latin1:T,ascii:T,binary:T,..._.bases};d.exports=A},45224:(d,m,v)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var _=v(88610),E=v(85150);function xor(d,m){if(d.length!==m.length)throw Error("Inputs should have the same length");let v=_.allocUnsafe(d.length);for(let _=0;_<d.length;_++)v[_]=d[_]^m[_];return E.asUint8Array(v)}m.xor=xor},24158:(d,m,v)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=v(80404);function h(d,m){return d===m&&(0!==d||1/d==1/m)||d!=d&&m!=m}var E="function"==typeof Object.is?Object.is:h,x=_.useState,T=_.useEffect,A=_.useLayoutEffect,j=_.useDebugValue;function q(d,m){var v=m(),_=x({inst:{value:v,getSnapshot:m}}),E=_[0].inst,U=_[1];return A(function(){E.value=v,E.getSnapshot=m,r(E)&&U({inst:E})},[d,v,m]),T(function(){return r(E)&&U({inst:E}),d(function(){r(E)&&U({inst:E})})},[d]),j(v),v}function r(d){var m=d.getSnapshot;d=d.value;try{var v=m();return!E(d,v)}catch(d){return!0}}function t(d,m){return m()}var U="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?t:q;m.useSyncExternalStore=void 0!==_.useSyncExternalStore?_.useSyncExternalStore:U},38530:(d,m,v)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=v(80404),E=v(79555);function p(d,m){return d===m&&(0!==d||1/d==1/m)||d!=d&&m!=m}var x="function"==typeof Object.is?Object.is:p,T=E.useSyncExternalStore,A=_.useRef,j=_.useEffect,U=_.useMemo,F=_.useDebugValue;m.useSyncExternalStoreWithSelector=function(d,m,v,_,E){var W=A(null);if(null===W.current){var K={hasValue:!1,value:null};W.current=K}else K=W.current;var Q=T(d,(W=U(function(){function a(m){if(!A){if(A=!0,d=m,m=_(m),void 0!==E&&K.hasValue){var v=K.value;if(E(v,m))return T=v}return T=m}if(v=T,x(d,m))return v;var j=_(m);return void 0!==E&&E(v,j)?v:(d=m,T=j)}var d,T,A=!1,j=void 0===v?null:v;return[function(){return a(m())},null===j?void 0:function(){return a(j())}]},[m,v,_,E]))[0],W[1]);return j(function(){K.hasValue=!0,K.value=Q},[Q]),F(Q),Q}},79555:(d,m,v)=>{"use strict";d.exports=v(24158)},76801:(d,m,v)=>{"use strict";d.exports=v(38530)},6522:d=>{"use strict";function isValidUTF8(d){let m=d.length,v=0;for(;v<m;)if((128&d[v])==0)v++;else if((224&d[v])==192){if(v+1===m||(192&d[v+1])!=128||(254&d[v])==192)return!1;v+=2}else if((240&d[v])==224){if(v+2>=m||(192&d[v+1])!=128||(192&d[v+2])!=128||224===d[v]&&(224&d[v+1])==128||237===d[v]&&(224&d[v+1])==160)return!1;v+=3}else{if((248&d[v])!=240||v+3>=m||(192&d[v+1])!=128||(192&d[v+2])!=128||(192&d[v+3])!=128||240===d[v]&&(240&d[v+1])==128||244===d[v]&&d[v+1]>143||d[v]>244)return!1;v+=4}return!0}d.exports=isValidUTF8},40590:(d,m,v)=>{"use strict";try{d.exports=v(51429)(__dirname)}catch(m){d.exports=v(6522)}},52186:(d,m,v)=>{"use strict";let{EMPTY_BUFFER:_}=v(15464),E=Buffer[Symbol.species];function concat(d,m){if(0===d.length)return _;if(1===d.length)return d[0];let v=Buffer.allocUnsafe(m),x=0;for(let m=0;m<d.length;m++){let _=d[m];v.set(_,x),x+=_.length}return x<m?new E(v.buffer,v.byteOffset,x):v}function _mask(d,m,v,_,E){for(let x=0;x<E;x++)v[_+x]=d[x]^m[3&x]}function _unmask(d,m){for(let v=0;v<d.length;v++)d[v]^=m[3&v]}function toArrayBuffer(d){return d.length===d.buffer.byteLength?d.buffer:d.buffer.slice(d.byteOffset,d.byteOffset+d.length)}function toBuffer(d){let m;return(toBuffer.readOnly=!0,Buffer.isBuffer(d))?d:(d instanceof ArrayBuffer?m=new E(d):ArrayBuffer.isView(d)?m=new E(d.buffer,d.byteOffset,d.byteLength):(m=Buffer.from(d),toBuffer.readOnly=!1),m)}if(d.exports={concat,mask:_mask,toArrayBuffer,toBuffer,unmask:_unmask},!process.env.WS_NO_BUFFER_UTIL)try{let m=v(2984);d.exports.mask=function(d,v,_,E,x){x<48?_mask(d,v,_,E,x):m.mask(d,v,_,E,x)},d.exports.unmask=function(d,v){d.length<32?_unmask(d,v):m.unmask(d,v)}}catch(d){}},15464:d=>{"use strict";d.exports={BINARY_TYPES:["nodebuffer","arraybuffer","fragments"],EMPTY_BUFFER:Buffer.alloc(0),GUID:"258EAFA5-E914-47DA-95CA-C5AB0DC85B11",kForOnEventAttribute:Symbol("kIsForOnEventAttribute"),kListener:Symbol("kListener"),kStatusCode:Symbol("status-code"),kWebSocket:Symbol("websocket"),NOOP:()=>{}}},69458:(d,m,v)=>{"use strict";let{kForOnEventAttribute:_,kListener:E}=v(15464),x=Symbol("kCode"),T=Symbol("kData"),A=Symbol("kError"),j=Symbol("kMessage"),U=Symbol("kReason"),F=Symbol("kTarget"),W=Symbol("kType"),K=Symbol("kWasClean");let Event=class Event{constructor(d){this[F]=null,this[W]=d}get target(){return this[F]}get type(){return this[W]}};Object.defineProperty(Event.prototype,"target",{enumerable:!0}),Object.defineProperty(Event.prototype,"type",{enumerable:!0});let CloseEvent=class CloseEvent extends Event{constructor(d,m={}){super(d),this[x]=void 0===m.code?0:m.code,this[U]=void 0===m.reason?"":m.reason,this[K]=void 0!==m.wasClean&&m.wasClean}get code(){return this[x]}get reason(){return this[U]}get wasClean(){return this[K]}};Object.defineProperty(CloseEvent.prototype,"code",{enumerable:!0}),Object.defineProperty(CloseEvent.prototype,"reason",{enumerable:!0}),Object.defineProperty(CloseEvent.prototype,"wasClean",{enumerable:!0});let ErrorEvent=class ErrorEvent extends Event{constructor(d,m={}){super(d),this[A]=void 0===m.error?null:m.error,this[j]=void 0===m.message?"":m.message}get error(){return this[A]}get message(){return this[j]}};Object.defineProperty(ErrorEvent.prototype,"error",{enumerable:!0}),Object.defineProperty(ErrorEvent.prototype,"message",{enumerable:!0});let MessageEvent=class MessageEvent extends Event{constructor(d,m={}){super(d),this[T]=void 0===m.data?null:m.data}get data(){return this[T]}};function callListener(d,m,v){"object"==typeof d&&d.handleEvent?d.handleEvent.call(d,v):d.call(m,v)}Object.defineProperty(MessageEvent.prototype,"data",{enumerable:!0}),d.exports={CloseEvent,ErrorEvent,Event,EventTarget:{addEventListener(d,m,v={}){let x;for(let x of this.listeners(d))if(!v[_]&&x[E]===m&&!x[_])return;if("message"===d)x=function(d,v){let _=new MessageEvent("message",{data:v?d:d.toString()});_[F]=this,callListener(m,this,_)};else if("close"===d)x=function(d,v){let _=new CloseEvent("close",{code:d,reason:v.toString(),wasClean:this._closeFrameReceived&&this._closeFrameSent});_[F]=this,callListener(m,this,_)};else if("error"===d)x=function(d){let v=new ErrorEvent("error",{error:d,message:d.message});v[F]=this,callListener(m,this,v)};else{if("open"!==d)return;x=function(){let d=new Event("open");d[F]=this,callListener(m,this,d)}}x[_]=!!v[_],x[E]=m,v.once?this.once(d,x):this.on(d,x)},removeEventListener(d,m){for(let v of this.listeners(d))if(v[E]===m&&!v[_]){this.removeListener(d,v);break}}},MessageEvent}},10016:(d,m,v)=>{"use strict";let{tokenChars:_}=v(58661);function push(d,m,v){void 0===d[m]?d[m]=[v]:d[m].push(v)}function parse(d){let m,v;let E=Object.create(null),x=Object.create(null),T=!1,A=!1,j=!1,U=-1,F=-1,W=-1,K=0;for(;K<d.length;K++)if(F=d.charCodeAt(K),void 0===m){if(-1===W&&1===_[F])-1===U&&(U=K);else if(0!==K&&(32===F||9===F))-1===W&&-1!==U&&(W=K);else if(59===F||44===F){if(-1===U)throw SyntaxError(`Unexpected character at index ${K}`);-1===W&&(W=K);let v=d.slice(U,W);44===F?(push(E,v,x),x=Object.create(null)):m=v,U=W=-1}else throw SyntaxError(`Unexpected character at index ${K}`)}else if(void 0===v){if(-1===W&&1===_[F])-1===U&&(U=K);else if(32===F||9===F)-1===W&&-1!==U&&(W=K);else if(59===F||44===F){if(-1===U)throw SyntaxError(`Unexpected character at index ${K}`);-1===W&&(W=K),push(x,d.slice(U,W),!0),44===F&&(push(E,m,x),x=Object.create(null),m=void 0),U=W=-1}else if(61===F&&-1!==U&&-1===W)v=d.slice(U,K),U=W=-1;else throw SyntaxError(`Unexpected character at index ${K}`)}else if(A){if(1!==_[F])throw SyntaxError(`Unexpected character at index ${K}`);-1===U?U=K:T||(T=!0),A=!1}else if(j){if(1===_[F])-1===U&&(U=K);else if(34===F&&-1!==U)j=!1,W=K;else if(92===F)A=!0;else throw SyntaxError(`Unexpected character at index ${K}`)}else if(34===F&&61===d.charCodeAt(K-1))j=!0;else if(-1===W&&1===_[F])-1===U&&(U=K);else if(-1!==U&&(32===F||9===F))-1===W&&(W=K);else if(59===F||44===F){if(-1===U)throw SyntaxError(`Unexpected character at index ${K}`);-1===W&&(W=K);let _=d.slice(U,W);T&&(_=_.replace(/\\/g,""),T=!1),push(x,v,_),44===F&&(push(E,m,x),x=Object.create(null),m=void 0),v=void 0,U=W=-1}else throw SyntaxError(`Unexpected character at index ${K}`);if(-1===U||j||32===F||9===F)throw SyntaxError("Unexpected end of input");-1===W&&(W=K);let Q=d.slice(U,W);return void 0===m?push(E,Q,x):(void 0===v?push(x,Q,!0):T?push(x,v,Q.replace(/\\/g,"")):push(x,v,Q),push(E,m,x)),E}function format(d){return Object.keys(d).map(m=>{let v=d[m];return Array.isArray(v)||(v=[v]),v.map(d=>[m].concat(Object.keys(d).map(m=>{let v=d[m];return Array.isArray(v)||(v=[v]),v.map(d=>!0===d?m:`${m}=${d}`).join("; ")})).join("; ")).join(", ")}).join(", ")}d.exports={format,parse}},2461:d=>{"use strict";let m=Symbol("kDone"),v=Symbol("kRun");let Limiter=class Limiter{constructor(d){this[m]=()=>{this.pending--,this[v]()},this.concurrency=d||1/0,this.jobs=[],this.pending=0}add(d){this.jobs.push(d),this[v]()}[v](){if(this.pending!==this.concurrency&&this.jobs.length){let d=this.jobs.shift();this.pending++,d(this[m])}}};d.exports=Limiter},865:(d,m,v)=>{"use strict";let _;let E=v(59796),x=v(52186),T=v(2461),{kStatusCode:A}=v(15464),j=Buffer[Symbol.species],U=Buffer.from([0,0,255,255]),F=Symbol("permessage-deflate"),W=Symbol("total-length"),K=Symbol("callback"),Q=Symbol("buffers"),X=Symbol("error");let PerMessageDeflate=class PerMessageDeflate{constructor(d,m,v){if(this._maxPayload=0|v,this._options=d||{},this._threshold=void 0!==this._options.threshold?this._options.threshold:1024,this._isServer=!!m,this._deflate=null,this._inflate=null,this.params=null,!_){let d=void 0!==this._options.concurrencyLimit?this._options.concurrencyLimit:10;_=new T(d)}}static get extensionName(){return"permessage-deflate"}offer(){let d={};return this._options.serverNoContextTakeover&&(d.server_no_context_takeover=!0),this._options.clientNoContextTakeover&&(d.client_no_context_takeover=!0),this._options.serverMaxWindowBits&&(d.server_max_window_bits=this._options.serverMaxWindowBits),this._options.clientMaxWindowBits?d.client_max_window_bits=this._options.clientMaxWindowBits:null==this._options.clientMaxWindowBits&&(d.client_max_window_bits=!0),d}accept(d){return d=this.normalizeParams(d),this.params=this._isServer?this.acceptAsServer(d):this.acceptAsClient(d),this.params}cleanup(){if(this._inflate&&(this._inflate.close(),this._inflate=null),this._deflate){let d=this._deflate[K];this._deflate.close(),this._deflate=null,d&&d(Error("The deflate stream was closed while data was being processed"))}}acceptAsServer(d){let m=this._options,v=d.find(d=>(!1!==m.serverNoContextTakeover||!d.server_no_context_takeover)&&(!d.server_max_window_bits||!1!==m.serverMaxWindowBits&&("number"!=typeof m.serverMaxWindowBits||!(m.serverMaxWindowBits>d.server_max_window_bits)))&&("number"!=typeof m.clientMaxWindowBits||!!d.client_max_window_bits));if(!v)throw Error("None of the extension offers can be accepted");return m.serverNoContextTakeover&&(v.server_no_context_takeover=!0),m.clientNoContextTakeover&&(v.client_no_context_takeover=!0),"number"==typeof m.serverMaxWindowBits&&(v.server_max_window_bits=m.serverMaxWindowBits),"number"==typeof m.clientMaxWindowBits?v.client_max_window_bits=m.clientMaxWindowBits:(!0===v.client_max_window_bits||!1===m.clientMaxWindowBits)&&delete v.client_max_window_bits,v}acceptAsClient(d){let m=d[0];if(!1===this._options.clientNoContextTakeover&&m.client_no_context_takeover)throw Error('Unexpected parameter "client_no_context_takeover"');if(m.client_max_window_bits){if(!1===this._options.clientMaxWindowBits||"number"==typeof this._options.clientMaxWindowBits&&m.client_max_window_bits>this._options.clientMaxWindowBits)throw Error('Unexpected or invalid parameter "client_max_window_bits"')}else"number"==typeof this._options.clientMaxWindowBits&&(m.client_max_window_bits=this._options.clientMaxWindowBits);return m}normalizeParams(d){return d.forEach(d=>{Object.keys(d).forEach(m=>{let v=d[m];if(v.length>1)throw Error(`Parameter "${m}" must have only a single value`);if(v=v[0],"client_max_window_bits"===m){if(!0!==v){let d=+v;if(!Number.isInteger(d)||d<8||d>15)throw TypeError(`Invalid value for parameter "${m}": ${v}`);v=d}else if(!this._isServer)throw TypeError(`Invalid value for parameter "${m}": ${v}`)}else if("server_max_window_bits"===m){let d=+v;if(!Number.isInteger(d)||d<8||d>15)throw TypeError(`Invalid value for parameter "${m}": ${v}`);v=d}else if("client_no_context_takeover"===m||"server_no_context_takeover"===m){if(!0!==v)throw TypeError(`Invalid value for parameter "${m}": ${v}`)}else throw Error(`Unknown parameter "${m}"`);d[m]=v})}),d}decompress(d,m,v){_.add(_=>{this._decompress(d,m,(d,m)=>{_(),v(d,m)})})}compress(d,m,v){_.add(_=>{this._compress(d,m,(d,m)=>{_(),v(d,m)})})}_decompress(d,m,v){let _=this._isServer?"client":"server";if(!this._inflate){let d=`${_}_max_window_bits`,m="number"!=typeof this.params[d]?E.Z_DEFAULT_WINDOWBITS:this.params[d];this._inflate=E.createInflateRaw({...this._options.zlibInflateOptions,windowBits:m}),this._inflate[F]=this,this._inflate[W]=0,this._inflate[Q]=[],this._inflate.on("error",inflateOnError),this._inflate.on("data",inflateOnData)}this._inflate[K]=v,this._inflate.write(d),m&&this._inflate.write(U),this._inflate.flush(()=>{let d=this._inflate[X];if(d){this._inflate.close(),this._inflate=null,v(d);return}let E=x.concat(this._inflate[Q],this._inflate[W]);this._inflate._readableState.endEmitted?(this._inflate.close(),this._inflate=null):(this._inflate[W]=0,this._inflate[Q]=[],m&&this.params[`${_}_no_context_takeover`]&&this._inflate.reset()),v(null,E)})}_compress(d,m,v){let _=this._isServer?"server":"client";if(!this._deflate){let d=`${_}_max_window_bits`,m="number"!=typeof this.params[d]?E.Z_DEFAULT_WINDOWBITS:this.params[d];this._deflate=E.createDeflateRaw({...this._options.zlibDeflateOptions,windowBits:m}),this._deflate[W]=0,this._deflate[Q]=[],this._deflate.on("data",deflateOnData)}this._deflate[K]=v,this._deflate.write(d),this._deflate.flush(E.Z_SYNC_FLUSH,()=>{if(!this._deflate)return;let d=x.concat(this._deflate[Q],this._deflate[W]);m&&(d=new j(d.buffer,d.byteOffset,d.length-4)),this._deflate[K]=null,this._deflate[W]=0,this._deflate[Q]=[],m&&this.params[`${_}_no_context_takeover`]&&this._deflate.reset(),v(null,d)})}};function deflateOnData(d){this[Q].push(d),this[W]+=d.length}function inflateOnData(d){if(this[W]+=d.length,this[F]._maxPayload<1||this[W]<=this[F]._maxPayload){this[Q].push(d);return}this[X]=RangeError("Max payload size exceeded"),this[X].code="WS_ERR_UNSUPPORTED_MESSAGE_LENGTH",this[X][A]=1009,this.removeListener("data",inflateOnData),this.reset()}function inflateOnError(d){this[F]._inflate=null,d[A]=1007,this[K](d)}d.exports=PerMessageDeflate},69563:(d,m,v)=>{"use strict";let{Writable:_}=v(12781),E=v(865),{BINARY_TYPES:x,EMPTY_BUFFER:T,kStatusCode:A,kWebSocket:j}=v(15464),{concat:U,toArrayBuffer:F,unmask:W}=v(52186),{isValidStatusCode:K,isValidUTF8:Q}=v(58661),X=Buffer[Symbol.species];let Receiver=class Receiver extends _{constructor(d={}){super(),this._binaryType=d.binaryType||x[0],this._extensions=d.extensions||{},this._isServer=!!d.isServer,this._maxPayload=0|d.maxPayload,this._skipUTF8Validation=!!d.skipUTF8Validation,this[j]=void 0,this._bufferedBytes=0,this._buffers=[],this._compressed=!1,this._payloadLength=0,this._mask=void 0,this._fragmented=0,this._masked=!1,this._fin=!1,this._opcode=0,this._totalPayloadLength=0,this._messageLength=0,this._fragments=[],this._state=0,this._loop=!1}_write(d,m,v){if(8===this._opcode&&0==this._state)return v();this._bufferedBytes+=d.length,this._buffers.push(d),this.startLoop(v)}consume(d){if(this._bufferedBytes-=d,d===this._buffers[0].length)return this._buffers.shift();if(d<this._buffers[0].length){let m=this._buffers[0];return this._buffers[0]=new X(m.buffer,m.byteOffset+d,m.length-d),new X(m.buffer,m.byteOffset,d)}let m=Buffer.allocUnsafe(d);do{let v=this._buffers[0],_=m.length-d;d>=v.length?m.set(this._buffers.shift(),_):(m.set(new Uint8Array(v.buffer,v.byteOffset,d),_),this._buffers[0]=new X(v.buffer,v.byteOffset+d,v.length-d)),d-=v.length}while(d>0);return m}startLoop(d){let m;this._loop=!0;do switch(this._state){case 0:m=this.getInfo();break;case 1:m=this.getPayloadLength16();break;case 2:m=this.getPayloadLength64();break;case 3:this.getMask();break;case 4:m=this.getData(d);break;default:this._loop=!1;return}while(this._loop);d(m)}getInfo(){if(this._bufferedBytes<2){this._loop=!1;return}let d=this.consume(2);if((48&d[0])!=0)return this._loop=!1,error(RangeError,"RSV2 and RSV3 must be clear",!0,1002,"WS_ERR_UNEXPECTED_RSV_2_3");let m=(64&d[0])==64;if(m&&!this._extensions[E.extensionName])return this._loop=!1,error(RangeError,"RSV1 must be clear",!0,1002,"WS_ERR_UNEXPECTED_RSV_1");if(this._fin=(128&d[0])==128,this._opcode=15&d[0],this._payloadLength=127&d[1],0===this._opcode){if(m)return this._loop=!1,error(RangeError,"RSV1 must be clear",!0,1002,"WS_ERR_UNEXPECTED_RSV_1");if(!this._fragmented)return this._loop=!1,error(RangeError,"invalid opcode 0",!0,1002,"WS_ERR_INVALID_OPCODE");this._opcode=this._fragmented}else if(1===this._opcode||2===this._opcode){if(this._fragmented)return this._loop=!1,error(RangeError,`invalid opcode ${this._opcode}`,!0,1002,"WS_ERR_INVALID_OPCODE");this._compressed=m}else{if(!(this._opcode>7)||!(this._opcode<11))return this._loop=!1,error(RangeError,`invalid opcode ${this._opcode}`,!0,1002,"WS_ERR_INVALID_OPCODE");if(!this._fin)return this._loop=!1,error(RangeError,"FIN must be set",!0,1002,"WS_ERR_EXPECTED_FIN");if(m)return this._loop=!1,error(RangeError,"RSV1 must be clear",!0,1002,"WS_ERR_UNEXPECTED_RSV_1");if(this._payloadLength>125||8===this._opcode&&1===this._payloadLength)return this._loop=!1,error(RangeError,`invalid payload length ${this._payloadLength}`,!0,1002,"WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH")}if(this._fin||this._fragmented||(this._fragmented=this._opcode),this._masked=(128&d[1])==128,this._isServer){if(!this._masked)return this._loop=!1,error(RangeError,"MASK must be set",!0,1002,"WS_ERR_EXPECTED_MASK")}else if(this._masked)return this._loop=!1,error(RangeError,"MASK must be clear",!0,1002,"WS_ERR_UNEXPECTED_MASK");if(126===this._payloadLength)this._state=1;else{if(127!==this._payloadLength)return this.haveLength();this._state=2}}getPayloadLength16(){if(this._bufferedBytes<2){this._loop=!1;return}return this._payloadLength=this.consume(2).readUInt16BE(0),this.haveLength()}getPayloadLength64(){if(this._bufferedBytes<8){this._loop=!1;return}let d=this.consume(8),m=d.readUInt32BE(0);return m>2097151?(this._loop=!1,error(RangeError,"Unsupported WebSocket frame: payload length > 2^53 - 1",!1,1009,"WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH")):(this._payloadLength=4294967296*m+d.readUInt32BE(4),this.haveLength())}haveLength(){if(this._payloadLength&&this._opcode<8&&(this._totalPayloadLength+=this._payloadLength,this._totalPayloadLength>this._maxPayload&&this._maxPayload>0))return this._loop=!1,error(RangeError,"Max payload size exceeded",!1,1009,"WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");this._masked?this._state=3:this._state=4}getMask(){if(this._bufferedBytes<4){this._loop=!1;return}this._mask=this.consume(4),this._state=4}getData(d){let m=T;if(this._payloadLength){if(this._bufferedBytes<this._payloadLength){this._loop=!1;return}m=this.consume(this._payloadLength),this._masked&&(this._mask[0]|this._mask[1]|this._mask[2]|this._mask[3])!=0&&W(m,this._mask)}if(this._opcode>7)return this.controlMessage(m);if(this._compressed){this._state=5,this.decompress(m,d);return}return m.length&&(this._messageLength=this._totalPayloadLength,this._fragments.push(m)),this.dataMessage()}decompress(d,m){let v=this._extensions[E.extensionName];v.decompress(d,this._fin,(d,v)=>{if(d)return m(d);if(v.length){if(this._messageLength+=v.length,this._messageLength>this._maxPayload&&this._maxPayload>0)return m(error(RangeError,"Max payload size exceeded",!1,1009,"WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));this._fragments.push(v)}let _=this.dataMessage();if(_)return m(_);this.startLoop(m)})}dataMessage(){if(this._fin){let d=this._messageLength,m=this._fragments;if(this._totalPayloadLength=0,this._messageLength=0,this._fragmented=0,this._fragments=[],2===this._opcode){let v;v="nodebuffer"===this._binaryType?U(m,d):"arraybuffer"===this._binaryType?F(U(m,d)):m,this.emit("message",v,!0)}else{let v=U(m,d);if(!this._skipUTF8Validation&&!Q(v))return this._loop=!1,error(Error,"invalid UTF-8 sequence",!0,1007,"WS_ERR_INVALID_UTF8");this.emit("message",v,!1)}}this._state=0}controlMessage(d){if(8===this._opcode){if(this._loop=!1,0===d.length)this.emit("conclude",1005,T),this.end();else{let m=d.readUInt16BE(0);if(!K(m))return error(RangeError,`invalid status code ${m}`,!0,1002,"WS_ERR_INVALID_CLOSE_CODE");let v=new X(d.buffer,d.byteOffset+2,d.length-2);if(!this._skipUTF8Validation&&!Q(v))return error(Error,"invalid UTF-8 sequence",!0,1007,"WS_ERR_INVALID_UTF8");this.emit("conclude",m,v),this.end()}}else 9===this._opcode?this.emit("ping",d):this.emit("pong",d);this._state=0}};function error(d,m,v,_,E){let x=new d(v?`Invalid WebSocket frame: ${m}`:m);return Error.captureStackTrace(x,error),x.code=E,x[A]=_,x}d.exports=Receiver},269:(d,m,v)=>{"use strict";v(41808),v(24404);let{randomFillSync:_}=v(6113),E=v(865),{EMPTY_BUFFER:x}=v(15464),{isValidStatusCode:T}=v(58661),{mask:A,toBuffer:j}=v(52186),U=Symbol("kByteLength"),F=Buffer.alloc(4);let Sender=class Sender{constructor(d,m,v){this._extensions=m||{},v&&(this._generateMask=v,this._maskBuffer=Buffer.alloc(4)),this._socket=d,this._firstFragment=!0,this._compress=!1,this._bufferedBytes=0,this._deflating=!1,this._queue=[]}static frame(d,m){let v,E;let x=!1,T=2,j=!1;m.mask&&(v=m.maskBuffer||F,m.generateMask?m.generateMask(v):_(v,0,4),j=(v[0]|v[1]|v[2]|v[3])==0,T=6),"string"==typeof d?E=(!m.mask||j)&&void 0!==m[U]?m[U]:(d=Buffer.from(d)).length:(E=d.length,x=m.mask&&m.readOnly&&!j);let W=E;E>=65536?(T+=8,W=127):E>125&&(T+=2,W=126);let K=Buffer.allocUnsafe(x?E+T:T);return(K[0]=m.fin?128|m.opcode:m.opcode,m.rsv1&&(K[0]|=64),K[1]=W,126===W?K.writeUInt16BE(E,2):127===W&&(K[2]=K[3]=0,K.writeUIntBE(E,4,6)),m.mask)?(K[1]|=128,K[T-4]=v[0],K[T-3]=v[1],K[T-2]=v[2],K[T-1]=v[3],j)?[K,d]:x?(A(d,v,K,T,E),[K]):(A(d,v,d,0,E),[K,d]):[K,d]}close(d,m,v,_){let E;if(void 0===d)E=x;else if("number"==typeof d&&T(d)){if(void 0!==m&&m.length){let v=Buffer.byteLength(m);if(v>123)throw RangeError("The message must not be greater than 123 bytes");(E=Buffer.allocUnsafe(2+v)).writeUInt16BE(d,0),"string"==typeof m?E.write(m,2):E.set(m,2)}else(E=Buffer.allocUnsafe(2)).writeUInt16BE(d,0)}else throw TypeError("First argument must be a valid error code number");let A={[U]:E.length,fin:!0,generateMask:this._generateMask,mask:v,maskBuffer:this._maskBuffer,opcode:8,readOnly:!1,rsv1:!1};this._deflating?this.enqueue([this.dispatch,E,!1,A,_]):this.sendFrame(Sender.frame(E,A),_)}ping(d,m,v){let _,E;if("string"==typeof d?(_=Buffer.byteLength(d),E=!1):(_=(d=j(d)).length,E=j.readOnly),_>125)throw RangeError("The data size must not be greater than 125 bytes");let x={[U]:_,fin:!0,generateMask:this._generateMask,mask:m,maskBuffer:this._maskBuffer,opcode:9,readOnly:E,rsv1:!1};this._deflating?this.enqueue([this.dispatch,d,!1,x,v]):this.sendFrame(Sender.frame(d,x),v)}pong(d,m,v){let _,E;if("string"==typeof d?(_=Buffer.byteLength(d),E=!1):(_=(d=j(d)).length,E=j.readOnly),_>125)throw RangeError("The data size must not be greater than 125 bytes");let x={[U]:_,fin:!0,generateMask:this._generateMask,mask:m,maskBuffer:this._maskBuffer,opcode:10,readOnly:E,rsv1:!1};this._deflating?this.enqueue([this.dispatch,d,!1,x,v]):this.sendFrame(Sender.frame(d,x),v)}send(d,m,v){let _,x;let T=this._extensions[E.extensionName],A=m.binary?2:1,F=m.compress;if("string"==typeof d?(_=Buffer.byteLength(d),x=!1):(_=(d=j(d)).length,x=j.readOnly),this._firstFragment?(this._firstFragment=!1,F&&T&&T.params[T._isServer?"server_no_context_takeover":"client_no_context_takeover"]&&(F=_>=T._threshold),this._compress=F):(F=!1,A=0),m.fin&&(this._firstFragment=!0),T){let E={[U]:_,fin:m.fin,generateMask:this._generateMask,mask:m.mask,maskBuffer:this._maskBuffer,opcode:A,readOnly:x,rsv1:F};this._deflating?this.enqueue([this.dispatch,d,this._compress,E,v]):this.dispatch(d,this._compress,E,v)}else this.sendFrame(Sender.frame(d,{[U]:_,fin:m.fin,generateMask:this._generateMask,mask:m.mask,maskBuffer:this._maskBuffer,opcode:A,readOnly:x,rsv1:!1}),v)}dispatch(d,m,v,_){if(!m){this.sendFrame(Sender.frame(d,v),_);return}let x=this._extensions[E.extensionName];this._bufferedBytes+=v[U],this._deflating=!0,x.compress(d,v.fin,(d,m)=>{if(this._socket.destroyed){let d=Error("The socket was closed while data was being compressed");"function"==typeof _&&_(d);for(let m=0;m<this._queue.length;m++){let v=this._queue[m],_=v[v.length-1];"function"==typeof _&&_(d)}return}this._bufferedBytes-=v[U],this._deflating=!1,v.readOnly=!1,this.sendFrame(Sender.frame(m,v),_),this.dequeue()})}dequeue(){for(;!this._deflating&&this._queue.length;){let d=this._queue.shift();this._bufferedBytes-=d[3][U],Reflect.apply(d[0],this,d.slice(1))}}enqueue(d){this._bufferedBytes+=d[3][U],this._queue.push(d)}sendFrame(d,m){2===d.length?(this._socket.cork(),this._socket.write(d[0]),this._socket.write(d[1],m),this._socket.uncork()):this._socket.write(d[0],m)}};d.exports=Sender},76261:(d,m,v)=>{"use strict";let{Duplex:_}=v(12781);function emitClose(d){d.emit("close")}function duplexOnEnd(){!this.destroyed&&this._writableState.finished&&this.destroy()}function duplexOnError(d){this.removeListener("error",duplexOnError),this.destroy(),0===this.listenerCount("error")&&this.emit("error",d)}function createWebSocketStream(d,m){let v=!0,E=new _({...m,autoDestroy:!1,emitClose:!1,objectMode:!1,writableObjectMode:!1});return d.on("message",function(m,v){let _=!v&&E._readableState.objectMode?m.toString():m;E.push(_)||d.pause()}),d.once("error",function(d){E.destroyed||(v=!1,E.destroy(d))}),d.once("close",function(){E.destroyed||E.push(null)}),E._destroy=function(m,_){if(d.readyState===d.CLOSED){_(m),process.nextTick(emitClose,E);return}let x=!1;d.once("error",function(d){x=!0,_(d)}),d.once("close",function(){x||_(m),process.nextTick(emitClose,E)}),v&&d.terminate()},E._final=function(m){if(d.readyState===d.CONNECTING){d.once("open",function(){E._final(m)});return}null!==d._socket&&(d._socket._writableState.finished?(m(),E._readableState.endEmitted&&E.destroy()):(d._socket.once("finish",function(){m()}),d.close()))},E._read=function(){d.isPaused&&d.resume()},E._write=function(m,v,_){if(d.readyState===d.CONNECTING){d.once("open",function(){E._write(m,v,_)});return}d.send(m,_)},E.on("end",duplexOnEnd),E.on("error",duplexOnError),E}d.exports=createWebSocketStream},43285:(d,m,v)=>{"use strict";let{tokenChars:_}=v(58661);function parse(d){let m=new Set,v=-1,E=-1,x=0;for(;x<d.length;x++){let T=d.charCodeAt(x);if(-1===E&&1===_[T])-1===v&&(v=x);else if(0!==x&&(32===T||9===T))-1===E&&-1!==v&&(E=x);else if(44===T){if(-1===v)throw SyntaxError(`Unexpected character at index ${x}`);-1===E&&(E=x);let _=d.slice(v,E);if(m.has(_))throw SyntaxError(`The "${_}" subprotocol is duplicated`);m.add(_),v=E=-1}else throw SyntaxError(`Unexpected character at index ${x}`)}if(-1===v||-1!==E)throw SyntaxError("Unexpected end of input");let T=d.slice(v,x);if(m.has(T))throw SyntaxError(`The "${T}" subprotocol is duplicated`);return m.add(T),m}d.exports={parse}},58661:(d,m,v)=>{"use strict";let{isUtf8:_}=v(14300);function isValidStatusCode(d){return d>=1e3&&d<=1014&&1004!==d&&1005!==d&&1006!==d||d>=3e3&&d<=4999}function _isValidUTF8(d){let m=d.length,v=0;for(;v<m;)if((128&d[v])==0)v++;else if((224&d[v])==192){if(v+1===m||(192&d[v+1])!=128||(254&d[v])==192)return!1;v+=2}else if((240&d[v])==224){if(v+2>=m||(192&d[v+1])!=128||(192&d[v+2])!=128||224===d[v]&&(224&d[v+1])==128||237===d[v]&&(224&d[v+1])==160)return!1;v+=3}else{if((248&d[v])!=240||v+3>=m||(192&d[v+1])!=128||(192&d[v+2])!=128||(192&d[v+3])!=128||240===d[v]&&(240&d[v+1])==128||244===d[v]&&d[v+1]>143||d[v]>244)return!1;v+=4}return!0}if(d.exports={isValidStatusCode,isValidUTF8:_isValidUTF8,tokenChars:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0]},_)d.exports.isValidUTF8=function(d){return d.length<24?_isValidUTF8(d):_(d)};else if(!process.env.WS_NO_UTF_8_VALIDATE)try{let m=v(40590);d.exports.isValidUTF8=function(d){return d.length<32?_isValidUTF8(d):m(d)}}catch(d){}},76786:(d,m,v)=>{"use strict";let _=v(82361),E=v(13685);v(95687),v(41808),v(24404);let{createHash:x}=v(6113),T=v(10016),A=v(865),j=v(43285),U=v(60406),{GUID:F,kWebSocket:W}=v(15464),K=/^[+/0-9A-Za-z]{22}==$/;let WebSocketServer=class WebSocketServer extends _{constructor(d,m){if(super(),null==(d={maxPayload:104857600,skipUTF8Validation:!1,perMessageDeflate:!1,handleProtocols:null,clientTracking:!0,verifyClient:null,noServer:!1,backlog:null,server:null,host:null,path:null,port:null,WebSocket:U,...d}).port&&!d.server&&!d.noServer||null!=d.port&&(d.server||d.noServer)||d.server&&d.noServer)throw TypeError('One and only one of the "port", "server", or "noServer" options must be specified');if(null!=d.port?(this._server=E.createServer((d,m)=>{let v=E.STATUS_CODES[426];m.writeHead(426,{"Content-Length":v.length,"Content-Type":"text/plain"}),m.end(v)}),this._server.listen(d.port,d.host,d.backlog,m)):d.server&&(this._server=d.server),this._server){let d=this.emit.bind(this,"connection");this._removeListeners=addListeners(this._server,{listening:this.emit.bind(this,"listening"),error:this.emit.bind(this,"error"),upgrade:(m,v,_)=>{this.handleUpgrade(m,v,_,d)}})}!0===d.perMessageDeflate&&(d.perMessageDeflate={}),d.clientTracking&&(this.clients=new Set,this._shouldEmitClose=!1),this.options=d,this._state=0}address(){if(this.options.noServer)throw Error('The server is operating in "noServer" mode');return this._server?this._server.address():null}close(d){if(2===this._state){d&&this.once("close",()=>{d(Error("The server is not running"))}),process.nextTick(emitClose,this);return}if(d&&this.once("close",d),1!==this._state){if(this._state=1,this.options.noServer||this.options.server)this._server&&(this._removeListeners(),this._removeListeners=this._server=null),this.clients&&this.clients.size?this._shouldEmitClose=!0:process.nextTick(emitClose,this);else{let d=this._server;this._removeListeners(),this._removeListeners=this._server=null,d.close(()=>{emitClose(this)})}}}shouldHandle(d){if(this.options.path){let m=d.url.indexOf("?"),v=-1!==m?d.url.slice(0,m):d.url;if(v!==this.options.path)return!1}return!0}handleUpgrade(d,m,v,_){m.on("error",socketOnError);let E=d.headers["sec-websocket-key"],x=+d.headers["sec-websocket-version"];if("GET"!==d.method){abortHandshakeOrEmitwsClientError(this,d,m,405,"Invalid HTTP method");return}if("websocket"!==d.headers.upgrade.toLowerCase()){abortHandshakeOrEmitwsClientError(this,d,m,400,"Invalid Upgrade header");return}if(!E||!K.test(E)){abortHandshakeOrEmitwsClientError(this,d,m,400,"Missing or invalid Sec-WebSocket-Key header");return}if(8!==x&&13!==x){abortHandshakeOrEmitwsClientError(this,d,m,400,"Missing or invalid Sec-WebSocket-Version header");return}if(!this.shouldHandle(d)){abortHandshake(m,400);return}let U=d.headers["sec-websocket-protocol"],F=new Set;if(void 0!==U)try{F=j.parse(U)}catch(v){abortHandshakeOrEmitwsClientError(this,d,m,400,"Invalid Sec-WebSocket-Protocol header");return}let W=d.headers["sec-websocket-extensions"],Q={};if(this.options.perMessageDeflate&&void 0!==W){let v=new A(this.options.perMessageDeflate,!0,this.options.maxPayload);try{let d=T.parse(W);d[A.extensionName]&&(v.accept(d[A.extensionName]),Q[A.extensionName]=v)}catch(v){abortHandshakeOrEmitwsClientError(this,d,m,400,"Invalid or unacceptable Sec-WebSocket-Extensions header");return}}if(this.options.verifyClient){let T={origin:d.headers[`${8===x?"sec-websocket-origin":"origin"}`],secure:!!(d.socket.authorized||d.socket.encrypted),req:d};if(2===this.options.verifyClient.length){this.options.verifyClient(T,(x,T,A,j)=>{if(!x)return abortHandshake(m,T||401,A,j);this.completeUpgrade(Q,E,F,d,m,v,_)});return}if(!this.options.verifyClient(T))return abortHandshake(m,401)}this.completeUpgrade(Q,E,F,d,m,v,_)}completeUpgrade(d,m,v,_,E,j,U){if(!E.readable||!E.writable)return E.destroy();if(E[W])throw Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");if(this._state>0)return abortHandshake(E,503);let K=x("sha1").update(m+F).digest("base64"),Q=["HTTP/1.1 101 Switching Protocols","Upgrade: websocket","Connection: Upgrade",`Sec-WebSocket-Accept: ${K}`],X=new this.options.WebSocket(null);if(v.size){let d=this.options.handleProtocols?this.options.handleProtocols(v,_):v.values().next().value;d&&(Q.push(`Sec-WebSocket-Protocol: ${d}`),X._protocol=d)}if(d[A.extensionName]){let m=d[A.extensionName].params,v=T.format({[A.extensionName]:[m]});Q.push(`Sec-WebSocket-Extensions: ${v}`),X._extensions=d}this.emit("headers",Q,_),E.write(Q.concat("\r\n").join("\r\n")),E.removeListener("error",socketOnError),X.setSocket(E,j,{maxPayload:this.options.maxPayload,skipUTF8Validation:this.options.skipUTF8Validation}),this.clients&&(this.clients.add(X),X.on("close",()=>{this.clients.delete(X),this._shouldEmitClose&&!this.clients.size&&process.nextTick(emitClose,this)})),U(X,_)}};function addListeners(d,m){for(let v of Object.keys(m))d.on(v,m[v]);return function(){for(let v of Object.keys(m))d.removeListener(v,m[v])}}function emitClose(d){d._state=2,d.emit("close")}function socketOnError(){this.destroy()}function abortHandshake(d,m,v,_){v=v||E.STATUS_CODES[m],_={Connection:"close","Content-Type":"text/html","Content-Length":Buffer.byteLength(v),..._},d.once("finish",d.destroy),d.end(`HTTP/1.1 ${m} ${E.STATUS_CODES[m]}\r
`+Object.keys(_).map(d=>`${d}: ${_[d]}`).join("\r\n")+"\r\n\r\n"+v)}function abortHandshakeOrEmitwsClientError(d,m,v,_,E){if(d.listenerCount("wsClientError")){let _=Error(E);Error.captureStackTrace(_,abortHandshakeOrEmitwsClientError),d.emit("wsClientError",_,v,m)}else abortHandshake(v,_,E)}d.exports=WebSocketServer},60406:(d,m,v)=>{"use strict";let _=v(82361),E=v(95687),x=v(13685),T=v(41808),A=v(24404),{randomBytes:j,createHash:U}=v(6113),{Readable:F}=v(12781),{URL:W}=v(57310),K=v(865),Q=v(69563),X=v(269),{BINARY_TYPES:ee,EMPTY_BUFFER:er,GUID:ei,kForOnEventAttribute:eo,kListener:ea,kStatusCode:es,kWebSocket:el,NOOP:ec}=v(15464),{EventTarget:{addEventListener:eu,removeEventListener:ed}}=v(69458),{format:eh,parse:ef}=v(10016),{toBuffer:ep}=v(52186),eg=Symbol("kAborted"),em=[8,13],eb=["CONNECTING","OPEN","CLOSING","CLOSED"],ey=/^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;let WebSocket=class WebSocket extends _{constructor(d,m,v){super(),this._binaryType=ee[0],this._closeCode=1006,this._closeFrameReceived=!1,this._closeFrameSent=!1,this._closeMessage=er,this._closeTimer=null,this._extensions={},this._paused=!1,this._protocol="",this._readyState=WebSocket.CONNECTING,this._receiver=null,this._sender=null,this._socket=null,null!==d?(this._bufferedAmount=0,this._isServer=!1,this._redirects=0,void 0===m?m=[]:Array.isArray(m)||("object"==typeof m&&null!==m?(v=m,m=[]):m=[m]),initAsClient(this,d,m,v)):this._isServer=!0}get binaryType(){return this._binaryType}set binaryType(d){ee.includes(d)&&(this._binaryType=d,this._receiver&&(this._receiver._binaryType=d))}get bufferedAmount(){return this._socket?this._socket._writableState.length+this._sender._bufferedBytes:this._bufferedAmount}get extensions(){return Object.keys(this._extensions).join()}get isPaused(){return this._paused}get onclose(){return null}get onerror(){return null}get onopen(){return null}get onmessage(){return null}get protocol(){return this._protocol}get readyState(){return this._readyState}get url(){return this._url}setSocket(d,m,v){let _=new Q({binaryType:this.binaryType,extensions:this._extensions,isServer:this._isServer,maxPayload:v.maxPayload,skipUTF8Validation:v.skipUTF8Validation});this._sender=new X(d,this._extensions,v.generateMask),this._receiver=_,this._socket=d,_[el]=this,d[el]=this,_.on("conclude",receiverOnConclude),_.on("drain",receiverOnDrain),_.on("error",receiverOnError),_.on("message",receiverOnMessage),_.on("ping",receiverOnPing),_.on("pong",receiverOnPong),d.setTimeout(0),d.setNoDelay(),m.length>0&&d.unshift(m),d.on("close",socketOnClose),d.on("data",socketOnData),d.on("end",socketOnEnd),d.on("error",socketOnError),this._readyState=WebSocket.OPEN,this.emit("open")}emitClose(){if(!this._socket){this._readyState=WebSocket.CLOSED,this.emit("close",this._closeCode,this._closeMessage);return}this._extensions[K.extensionName]&&this._extensions[K.extensionName].cleanup(),this._receiver.removeAllListeners(),this._readyState=WebSocket.CLOSED,this.emit("close",this._closeCode,this._closeMessage)}close(d,m){if(this.readyState!==WebSocket.CLOSED){if(this.readyState===WebSocket.CONNECTING){abortHandshake(this,this._req,"WebSocket was closed before the connection was established");return}if(this.readyState===WebSocket.CLOSING){this._closeFrameSent&&(this._closeFrameReceived||this._receiver._writableState.errorEmitted)&&this._socket.end();return}this._readyState=WebSocket.CLOSING,this._sender.close(d,m,!this._isServer,d=>{!d&&(this._closeFrameSent=!0,(this._closeFrameReceived||this._receiver._writableState.errorEmitted)&&this._socket.end())}),this._closeTimer=setTimeout(this._socket.destroy.bind(this._socket),3e4)}}pause(){this.readyState!==WebSocket.CONNECTING&&this.readyState!==WebSocket.CLOSED&&(this._paused=!0,this._socket.pause())}ping(d,m,v){if(this.readyState===WebSocket.CONNECTING)throw Error("WebSocket is not open: readyState 0 (CONNECTING)");if("function"==typeof d?(v=d,d=m=void 0):"function"==typeof m&&(v=m,m=void 0),"number"==typeof d&&(d=d.toString()),this.readyState!==WebSocket.OPEN){sendAfterClose(this,d,v);return}void 0===m&&(m=!this._isServer),this._sender.ping(d||er,m,v)}pong(d,m,v){if(this.readyState===WebSocket.CONNECTING)throw Error("WebSocket is not open: readyState 0 (CONNECTING)");if("function"==typeof d?(v=d,d=m=void 0):"function"==typeof m&&(v=m,m=void 0),"number"==typeof d&&(d=d.toString()),this.readyState!==WebSocket.OPEN){sendAfterClose(this,d,v);return}void 0===m&&(m=!this._isServer),this._sender.pong(d||er,m,v)}resume(){this.readyState!==WebSocket.CONNECTING&&this.readyState!==WebSocket.CLOSED&&(this._paused=!1,this._receiver._writableState.needDrain||this._socket.resume())}send(d,m,v){if(this.readyState===WebSocket.CONNECTING)throw Error("WebSocket is not open: readyState 0 (CONNECTING)");if("function"==typeof m&&(v=m,m={}),"number"==typeof d&&(d=d.toString()),this.readyState!==WebSocket.OPEN){sendAfterClose(this,d,v);return}let _={binary:"string"!=typeof d,mask:!this._isServer,compress:!0,fin:!0,...m};this._extensions[K.extensionName]||(_.compress=!1),this._sender.send(d||er,_,v)}terminate(){if(this.readyState!==WebSocket.CLOSED){if(this.readyState===WebSocket.CONNECTING){abortHandshake(this,this._req,"WebSocket was closed before the connection was established");return}this._socket&&(this._readyState=WebSocket.CLOSING,this._socket.destroy())}}};function initAsClient(d,m,v,_){let T,A,F,Q;let X={protocolVersion:em[1],maxPayload:104857600,skipUTF8Validation:!1,perMessageDeflate:!0,followRedirects:!1,maxRedirects:10,..._,createConnection:void 0,socketPath:void 0,hostname:void 0,protocol:void 0,timeout:void 0,method:"GET",host:void 0,path:void 0,port:void 0};if(!em.includes(X.protocolVersion))throw RangeError(`Unsupported protocol version: ${X.protocolVersion} (supported versions: ${em.join(", ")})`);if(m instanceof W)T=m,d._url=m.href;else{try{T=new W(m)}catch(d){throw SyntaxError(`Invalid URL: ${m}`)}d._url=m}let ee="wss:"===T.protocol,er="ws+unix:"===T.protocol;if("ws:"===T.protocol||ee||er?er&&!T.pathname?A="The URL's pathname is empty":T.hash&&(A="The URL contains a fragment identifier"):A='The URL\'s protocol must be one of "ws:", "wss:", or "ws+unix:"',A){let m=SyntaxError(A);if(0===d._redirects)throw m;emitErrorAndClose(d,m);return}let eo=ee?443:80,ea=j(16).toString("base64"),es=ee?E.request:x.request,el=new Set;if(X.createConnection=ee?tlsConnect:netConnect,X.defaultPort=X.defaultPort||eo,X.port=T.port||eo,X.host=T.hostname.startsWith("[")?T.hostname.slice(1,-1):T.hostname,X.headers={...X.headers,"Sec-WebSocket-Version":X.protocolVersion,"Sec-WebSocket-Key":ea,Connection:"Upgrade",Upgrade:"websocket"},X.path=T.pathname+T.search,X.timeout=X.handshakeTimeout,X.perMessageDeflate&&(F=new K(!0!==X.perMessageDeflate?X.perMessageDeflate:{},!1,X.maxPayload),X.headers["Sec-WebSocket-Extensions"]=eh({[K.extensionName]:F.offer()})),v.length){for(let d of v){if("string"!=typeof d||!ey.test(d)||el.has(d))throw SyntaxError("An invalid or duplicated subprotocol was specified");el.add(d)}X.headers["Sec-WebSocket-Protocol"]=v.join(",")}if(X.origin&&(X.protocolVersion<13?X.headers["Sec-WebSocket-Origin"]=X.origin:X.headers.Origin=X.origin),(T.username||T.password)&&(X.auth=`${T.username}:${T.password}`),er){let d=X.path.split(":");X.socketPath=d[0],X.path=d[1]}if(X.followRedirects){if(0===d._redirects){d._originalIpc=er,d._originalSecure=ee,d._originalHostOrSocketPath=er?X.socketPath:T.host;let m=_&&_.headers;if(_={..._,headers:{}},m)for(let[d,v]of Object.entries(m))_.headers[d.toLowerCase()]=v}else if(0===d.listenerCount("redirect")){let m=er?!!d._originalIpc&&X.socketPath===d._originalHostOrSocketPath:!d._originalIpc&&T.host===d._originalHostOrSocketPath;m&&(!d._originalSecure||ee)||(delete X.headers.authorization,delete X.headers.cookie,m||delete X.headers.host,X.auth=void 0)}X.auth&&!_.headers.authorization&&(_.headers.authorization="Basic "+Buffer.from(X.auth).toString("base64")),Q=d._req=es(X),d._redirects&&d.emit("redirect",d.url,Q)}else Q=d._req=es(X);X.timeout&&Q.on("timeout",()=>{abortHandshake(d,Q,"Opening handshake has timed out")}),Q.on("error",m=>{null===Q||Q[eg]||(Q=d._req=null,emitErrorAndClose(d,m))}),Q.on("response",E=>{let x=E.headers.location,T=E.statusCode;if(x&&X.followRedirects&&T>=300&&T<400){let E;if(++d._redirects>X.maxRedirects){abortHandshake(d,Q,"Maximum redirects exceeded");return}Q.abort();try{E=new W(x,m)}catch(v){let m=SyntaxError(`Invalid URL: ${x}`);emitErrorAndClose(d,m);return}initAsClient(d,E,v,_)}else d.emit("unexpected-response",Q,E)||abortHandshake(d,Q,`Unexpected server response: ${E.statusCode}`)}),Q.on("upgrade",(m,v,_)=>{let E;if(d.emit("upgrade",m),d.readyState!==WebSocket.CONNECTING)return;if(Q=d._req=null,"websocket"!==m.headers.upgrade.toLowerCase()){abortHandshake(d,v,"Invalid Upgrade header");return}let x=U("sha1").update(ea+ei).digest("base64");if(m.headers["sec-websocket-accept"]!==x){abortHandshake(d,v,"Invalid Sec-WebSocket-Accept header");return}let T=m.headers["sec-websocket-protocol"];if(void 0!==T?el.size?el.has(T)||(E="Server sent an invalid subprotocol"):E="Server sent a subprotocol but none was requested":el.size&&(E="Server sent no subprotocol"),E){abortHandshake(d,v,E);return}T&&(d._protocol=T);let A=m.headers["sec-websocket-extensions"];if(void 0!==A){let m;if(!F){abortHandshake(d,v,"Server sent a Sec-WebSocket-Extensions header but no extension was requested");return}try{m=ef(A)}catch(m){abortHandshake(d,v,"Invalid Sec-WebSocket-Extensions header");return}let _=Object.keys(m);if(1!==_.length||_[0]!==K.extensionName){abortHandshake(d,v,"Server indicated an extension that was not requested");return}try{F.accept(m[K.extensionName])}catch(m){abortHandshake(d,v,"Invalid Sec-WebSocket-Extensions header");return}d._extensions[K.extensionName]=F}d.setSocket(v,_,{generateMask:X.generateMask,maxPayload:X.maxPayload,skipUTF8Validation:X.skipUTF8Validation})}),X.finishRequest?X.finishRequest(Q,d):Q.end()}function emitErrorAndClose(d,m){d._readyState=WebSocket.CLOSING,d.emit("error",m),d.emitClose()}function netConnect(d){return d.path=d.socketPath,T.connect(d)}function tlsConnect(d){return d.path=void 0,d.servername||""===d.servername||(d.servername=T.isIP(d.host)?"":d.host),A.connect(d)}function abortHandshake(d,m,v){d._readyState=WebSocket.CLOSING;let _=Error(v);Error.captureStackTrace(_,abortHandshake),m.setHeader?(m[eg]=!0,m.abort(),m.socket&&!m.socket.destroyed&&m.socket.destroy(),process.nextTick(emitErrorAndClose,d,_)):(m.destroy(_),m.once("error",d.emit.bind(d,"error")),m.once("close",d.emitClose.bind(d)))}function sendAfterClose(d,m,v){if(m){let v=ep(m).length;d._socket?d._sender._bufferedBytes+=v:d._bufferedAmount+=v}if(v){let m=Error(`WebSocket is not open: readyState ${d.readyState} (${eb[d.readyState]})`);process.nextTick(v,m)}}function receiverOnConclude(d,m){let v=this[el];v._closeFrameReceived=!0,v._closeMessage=m,v._closeCode=d,void 0!==v._socket[el]&&(v._socket.removeListener("data",socketOnData),process.nextTick(resume,v._socket),1005===d?v.close():v.close(d,m))}function receiverOnDrain(){let d=this[el];d.isPaused||d._socket.resume()}function receiverOnError(d){let m=this[el];void 0!==m._socket[el]&&(m._socket.removeListener("data",socketOnData),process.nextTick(resume,m._socket),m.close(d[es])),m.emit("error",d)}function receiverOnFinish(){this[el].emitClose()}function receiverOnMessage(d,m){this[el].emit("message",d,m)}function receiverOnPing(d){let m=this[el];m.pong(d,!m._isServer,ec),m.emit("ping",d)}function receiverOnPong(d){this[el].emit("pong",d)}function resume(d){d.resume()}function socketOnClose(){let d;let m=this[el];this.removeListener("close",socketOnClose),this.removeListener("data",socketOnData),this.removeListener("end",socketOnEnd),m._readyState=WebSocket.CLOSING,this._readableState.endEmitted||m._closeFrameReceived||m._receiver._writableState.errorEmitted||null===(d=m._socket.read())||m._receiver.write(d),m._receiver.end(),this[el]=void 0,clearTimeout(m._closeTimer),m._receiver._writableState.finished||m._receiver._writableState.errorEmitted?m.emitClose():(m._receiver.on("error",receiverOnFinish),m._receiver.on("finish",receiverOnFinish))}function socketOnData(d){this[el]._receiver.write(d)||this.pause()}function socketOnEnd(){let d=this[el];d._readyState=WebSocket.CLOSING,d._receiver.end(),this.end()}function socketOnError(){let d=this[el];this.removeListener("error",socketOnError),this.on("error",ec),d&&(d._readyState=WebSocket.CLOSING,this.destroy())}Object.defineProperty(WebSocket,"CONNECTING",{enumerable:!0,value:eb.indexOf("CONNECTING")}),Object.defineProperty(WebSocket.prototype,"CONNECTING",{enumerable:!0,value:eb.indexOf("CONNECTING")}),Object.defineProperty(WebSocket,"OPEN",{enumerable:!0,value:eb.indexOf("OPEN")}),Object.defineProperty(WebSocket.prototype,"OPEN",{enumerable:!0,value:eb.indexOf("OPEN")}),Object.defineProperty(WebSocket,"CLOSING",{enumerable:!0,value:eb.indexOf("CLOSING")}),Object.defineProperty(WebSocket.prototype,"CLOSING",{enumerable:!0,value:eb.indexOf("CLOSING")}),Object.defineProperty(WebSocket,"CLOSED",{enumerable:!0,value:eb.indexOf("CLOSED")}),Object.defineProperty(WebSocket.prototype,"CLOSED",{enumerable:!0,value:eb.indexOf("CLOSED")}),["binaryType","bufferedAmount","extensions","isPaused","protocol","readyState","url"].forEach(d=>{Object.defineProperty(WebSocket.prototype,d,{enumerable:!0})}),["open","error","close","message"].forEach(d=>{Object.defineProperty(WebSocket.prototype,`on${d}`,{enumerable:!0,get(){for(let m of this.listeners(d))if(m[eo])return m[ea];return null},set(m){for(let m of this.listeners(d))if(m[eo]){this.removeListener(d,m);break}"function"==typeof m&&this.addEventListener(d,m,{[eo]:!0})}})}),WebSocket.prototype.addEventListener=eu,WebSocket.prototype.removeEventListener=ed,d.exports=WebSocket},4206:(d,m,v)=>{"use strict";v.d(m,{mv:()=>T,iN:()=>j});let _=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(d){this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBraileLabel="",this.ariaBraileRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColSpan="",this.ariaCurrent="",this.ariaDescription="",this.ariaDisabled="",this.ariaExpanded="",this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=d}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}},E=new WeakMap,attributesForElement=d=>{let m=E.get(d);return void 0===m&&E.set(d,m=new Map),m},x=class{constructor(){this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(attributesForElement(this)).map(([d,m])=>({name:d,value:m}))}get shadowRoot(){return"closed"===this.__shadowRootMode?null:this.__shadowRoot}setAttribute(d,m){attributesForElement(this).set(d,String(m))}removeAttribute(d){attributesForElement(this).delete(d)}hasAttribute(d){return attributesForElement(this).has(d)}attachShadow(d){let m={host:this};return this.__shadowRootMode=d.mode,d&&"open"===d.mode&&(this.__shadowRoot=m),m}attachInternals(){if(null!==this.__internals)throw Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");let d=new _(this);return this.__internals=d,d}getAttribute(d){let m=attributesForElement(this).get(d);return m??null}},T=class extends x{},A=class{constructor(){this.__definitions=new Map}define(d,m){if(this.__definitions.has(d))throw Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${d}" has already been used with this registry`);this.__definitions.set(d,{ctor:m,observedAttributes:m.observedAttributes??[]})}get(d){let m=this.__definitions.get(d);return m?.ctor}},j=new A},98329:(d,m,v)=>{"use strict";v.d(m,{fl:()=>g,iv:()=>i,Ts:()=>ea,Qu:()=>y,$m:()=>r});var _=v(4206);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let E=globalThis,x=E.ShadowRoot&&(void 0===E.ShadyCSS||E.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol(),A=new WeakMap;let n=class n{constructor(d,m,v){if(this._$cssResult$=!0,v!==T)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=d,this.t=m}get styleSheet(){let d=this.o,m=this.t;if(x&&void 0===d){let v=void 0!==m&&1===m.length;v&&(d=A.get(m)),void 0===d&&((this.o=d=new CSSStyleSheet).replaceSync(this.cssText),v&&A.set(m,d))}return d}toString(){return this.cssText}};let r=d=>new n("string"==typeof d?d:d+"",void 0,T),i=(d,...m)=>{let v=1===d.length?d[0]:m.reduce((m,v,_)=>m+(d=>{if(!0===d._$cssResult$)return d.cssText;if("number"==typeof d)return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(v)+d[_+1],d[0]);return new n(v,d,T)},S=(d,m)=>{if(x)d.adoptedStyleSheets=m.map(d=>d instanceof CSSStyleSheet?d:d.styleSheet);else for(let v of m){let m=document.createElement("style"),_=E.litNonce;void 0!==_&&m.setAttribute("nonce",_),m.textContent=v.cssText,d.appendChild(m)}},j=x||void 0===E.CSSStyleSheet?d=>d:d=>d instanceof CSSStyleSheet?(d=>{let m="";for(let v of d.cssRules)m+=v.cssText;return r(m)})(d):d,{is:U,defineProperty:F,getOwnPropertyDescriptor:W,getOwnPropertyNames:K,getOwnPropertySymbols:Q,getPrototypeOf:X}=Object,ee=globalThis;ee.customElements??=_.iN;let er=ee.trustedTypes,ei=er?er.emptyScript:"",eo=ee.reactiveElementPolyfillSupport,f=(d,m)=>d,ea={toAttribute(d,m){switch(m){case Boolean:d=d?ei:null;break;case Object:case Array:d=null==d?d:JSON.stringify(d)}return d},fromAttribute(d,m){let v=d;switch(m){case Boolean:v=null!==d;break;case Number:v=null===d?null:Number(d);break;case Object:case Array:try{v=JSON.parse(d)}catch(d){v=null}}return v}},y=(d,m)=>!U(d,m),es={attribute:!0,type:String,converter:ea,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),ee.litPropertyMetadata??=new WeakMap;let g=class g extends(globalThis.HTMLElement??_.mv){static addInitializer(d){this._$Ei(),(this.l??=[]).push(d)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(d,m=es){if(m.state&&(m.attribute=!1),this._$Ei(),this.elementProperties.set(d,m),!m.noAccessor){let v=Symbol(),_=this.getPropertyDescriptor(d,v,m);void 0!==_&&F(this.prototype,d,_)}}static getPropertyDescriptor(d,m,v){let{get:_,set:E}=W(this.prototype,d)??{get(){return this[m]},set(d){this[m]=d}};return{get(){return _?.call(this)},set(m){let x=_?.call(this);E.call(this,m),this.requestUpdate(d,x,v)},configurable:!0,enumerable:!0}}static getPropertyOptions(d){return this.elementProperties.get(d)??es}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;let d=X(this);d.finalize(),void 0!==d.l&&(this.l=[...d.l]),this.elementProperties=new Map(d.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){let d=this.properties,m=[...K(d),...Q(d)];for(let v of m)this.createProperty(v,d[v])}let d=this[Symbol.metadata];if(null!==d){let m=litPropertyMetadata.get(d);if(void 0!==m)for(let[d,v]of m)this.elementProperties.set(d,v)}for(let[d,m]of(this._$Eh=new Map,this.elementProperties)){let v=this._$Eu(d,m);void 0!==v&&this._$Eh.set(v,d)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(d){let m=[];if(Array.isArray(d)){let v=new Set(d.flat(1/0).reverse());for(let d of v)m.unshift(j(d))}else void 0!==d&&m.push(j(d));return m}static _$Eu(d,m){let v=m.attribute;return!1===v?void 0:"string"==typeof v?v:"string"==typeof d?d.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(d=>this.enableUpdating=d),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(d=>d(this))}addController(d){(this._$ES??=[]).push(d),void 0!==this.renderRoot&&this.isConnected&&d.hostConnected?.()}removeController(d){this._$ES?.splice(this._$ES.indexOf(d)>>>0,1)}_$E_(){let d=new Map,m=this.constructor.elementProperties;for(let v of m.keys())this.hasOwnProperty(v)&&(d.set(v,this[v]),delete this[v]);d.size>0&&(this._$Ep=d)}createRenderRoot(){let d=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(d,this.constructor.elementStyles),d}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(d=>d.hostConnected?.())}enableUpdating(d){}disconnectedCallback(){this._$ES?.forEach(d=>d.hostDisconnected?.())}attributeChangedCallback(d,m,v){this._$AK(d,v)}_$EO(d,m){let v=this.constructor.elementProperties.get(d),_=this.constructor._$Eu(d,v);if(void 0!==_&&!0===v.reflect){let E=(void 0!==v.converter?.toAttribute?v.converter:ea).toAttribute(m,v.type);this._$Em=d,null==E?this.removeAttribute(_):this.setAttribute(_,E),this._$Em=null}}_$AK(d,m){let v=this.constructor,_=v._$Eh.get(d);if(void 0!==_&&this._$Em!==_){let d=v.getPropertyOptions(_),E="function"==typeof d.converter?{fromAttribute:d.converter}:void 0!==d.converter?.fromAttribute?d.converter:ea;this._$Em=_,this[_]=E.fromAttribute(m,d.type),this._$Em=null}}requestUpdate(d,m,v,_=!1,E){if(void 0!==d){if(!((v??=this.constructor.getPropertyOptions(d)).hasChanged??y)(_?E:this[d],m))return;this.C(d,m,v)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(d,m,v){this._$AL.has(d)||this._$AL.set(d,m),!0===v.reflect&&this._$Em!==d&&(this._$Ej??=new Set).add(d)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(d){Promise.reject(d)}let d=this.scheduleUpdate();return null!=d&&await d,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[d,m]of this._$Ep)this[d]=m;this._$Ep=void 0}let d=this.constructor.elementProperties;if(d.size>0)for(let[m,v]of d)!0!==v.wrapped||this._$AL.has(m)||void 0===this[m]||this.C(m,this[m],v)}let d=!1,m=this._$AL;try{(d=this.shouldUpdate(m))?(this.willUpdate(m),this._$ES?.forEach(d=>d.hostUpdate?.()),this.update(m)):this._$ET()}catch(m){throw d=!1,this._$ET(),m}d&&this._$AE(m)}willUpdate(d){}_$AE(d){this._$ES?.forEach(d=>d.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(d)),this.updated(d)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(d){return!0}update(d){this._$Ej&&=this._$Ej.forEach(d=>this._$EO(d,this[d])),this._$ET()}updated(d){}firstUpdated(d){}};g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[f("elementProperties")]=new Map,g[f("finalized")]=new Map,eo?.({ReactiveElement:g}),(ee.reactiveElementVersions??=[]).push("2.0.1")},14247:(d,m,v)=>{"use strict";function _class_private_field_loose_base(d,m){if(!Object.prototype.hasOwnProperty.call(d,m))throw TypeError("attempted to use private field on non-instance");return d}v.r(m),v.d(m,{_:()=>_class_private_field_loose_base,_class_private_field_loose_base:()=>_class_private_field_loose_base})},62791:(d,m,v)=>{"use strict";v.r(m),v.d(m,{_:()=>_class_private_field_loose_key,_class_private_field_loose_key:()=>_class_private_field_loose_key});var _=0;function _class_private_field_loose_key(d){return"__private_"+_+++"_"+d}},94616:(d,m,v)=>{"use strict";function _interop_require_default(d){return d&&d.__esModule?d:{default:d}}v.r(m),v.d(m,{_:()=>_interop_require_default,_interop_require_default:()=>_interop_require_default})},19153:(d,m,v)=>{"use strict";function _getRequireWildcardCache(d){if("function"!=typeof WeakMap)return null;var m=new WeakMap,v=new WeakMap;return(_getRequireWildcardCache=function(d){return d?v:m})(d)}function _interop_require_wildcard(d,m){if(!m&&d&&d.__esModule)return d;if(null===d||"object"!=typeof d&&"function"!=typeof d)return{default:d};var v=_getRequireWildcardCache(m);if(v&&v.has(d))return v.get(d);var _={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if("default"!==x&&Object.prototype.hasOwnProperty.call(d,x)){var T=E?Object.getOwnPropertyDescriptor(d,x):null;T&&(T.get||T.set)?Object.defineProperty(_,x,T):_[x]=d[x]}return _.default=d,v&&v.set(d,_),_}v.r(m),v.d(m,{_:()=>_interop_require_wildcard,_interop_require_wildcard:()=>_interop_require_wildcard})},20350:(d,m,v)=>{"use strict";v.d(m,{_:()=>K});var _,E=v(55185),x=v(40809),T=v(63582),A=v(53526),j=v(26544),U=v(59969),F=v(42899),W=v(60208);function getInjectedName(d){if(!d)return"Injected";let getName=d=>d.isApexWallet?"Apex Wallet":d.isAvalanche?"Core Wallet":d.isBackpack?"Backpack":d.isBifrost?"Bifrost Wallet":d.isBitKeep?"BitKeep":d.isBitski?"Bitski":d.isBlockWallet?"BlockWallet":d.isBraveWallet?"Brave Wallet":d.isCoin98?"Coin98 Wallet":d.isCoinbaseWallet?"Coinbase Wallet":d.isDawn?"Dawn Wallet":d.isDefiant?"Defiant":d.isDesig?"Desig Wallet":d.isEnkrypt?"Enkrypt":d.isExodus?"Exodus":d.isFordefi?"Fordefi":d.isFrame?"Frame":d.isFrontier?"Frontier Wallet":d.isGamestop?"GameStop Wallet":d.isHaqqWallet?"HAQQ Wallet":d.isHyperPay?"HyperPay Wallet":d.isImToken?"ImToken":d.isHaloWallet?"Halo Wallet":d.isKuCoinWallet?"KuCoin Wallet":d.isMathWallet?"MathWallet":d.isNovaWallet?"Nova Wallet":d.isOkxWallet||d.isOKExWallet?"OKX Wallet":d.isOneInchIOSWallet||d.isOneInchAndroidWallet?"1inch Wallet":d.isOpera?"Opera":d.isPhantom?"Phantom":d.isPortal?"Ripio Portal":d.isRabby?"Rabby Wallet":d.isRainbow?"Rainbow":d.isStatus?"Status":d.isSubWallet?"SubWallet":d.isTalisman?"Talisman":d.isTally?"Taho":d.isTokenPocket?"TokenPocket":d.isTokenary?"Tokenary":d.isTrust||d.isTrustWallet?"Trust Wallet":d.isTTWallet?"TTWallet":d.isXDEFI?"XDEFI Wallet":d.isZeal?"Zeal":d.isZerion?"Zerion":d.isMetaMask?"MetaMask":void 0;if(d.providers?.length){let m=new Set,v=1;for(let _ of d.providers){let d=getName(_);d||(d=`Unknown Wallet #${v}`,v+=1),m.add(d)}let _=[...m];return _.length?_:_[0]??"Injected"}return getName(d)??"Injected"}var K=class extends T.wR{constructor({chains:d,options:m}={}){let v={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;let d=window.ethereum;return d?.providers?d.providers[0]:d},...m};super({chains:d,options:v}),this.id="injected",(0,T.Ko)(this,_,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=d=>{0===d.length?this.emit("disconnect"):this.emit("change",{account:(0,A.K)(d[0])})},this.onChainChanged=d=>{let m=(0,x.J)(d),v=this.isChainUnsupported(m);this.emit("change",{chain:{id:m,unsupported:v}})},this.onDisconnect=async d=>{if(1013===d.code){let d=await this.getProvider();if(d){let d=await this.getAccount();if(d)return}}this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey)};let E=v.getProvider();if("string"==typeof v.name)this.name=v.name;else if(E){let d=getInjectedName(E);v.name?this.name=v.name(d):"string"==typeof d?this.name=d:this.name=d[0]}else this.name="Injected";this.ready=!!E}async connect({chainId:d}={}){try{let m=await this.getProvider();if(!m)throw new E.N;m.on&&(m.on("accountsChanged",this.onAccountsChanged),m.on("chainChanged",this.onChainChanged),m.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let v=await m.request({method:"eth_requestAccounts"}),_=(0,A.K)(v[0]),x=await this.getChainId(),T=this.isChainUnsupported(x);if(d&&x!==d){let m=await this.switchChain(d);x=m.id,T=this.isChainUnsupported(x)}return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:_,chain:{id:x,unsupported:T}}}catch(d){if(this.isUserRejectedRequestError(d))throw new j.ab(d);if(-32002===d.code)throw new j.pT(d);throw d}}async disconnect(){let d=await this.getProvider();d?.removeListener&&(d.removeListener("accountsChanged",this.onAccountsChanged),d.removeListener("chainChanged",this.onChainChanged),d.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let d=await this.getProvider();if(!d)throw new E.N;let m=await d.request({method:"eth_accounts"});return(0,A.K)(m[0])}async getChainId(){let d=await this.getProvider();if(!d)throw new E.N;return d.request({method:"eth_chainId"}).then(x.J)}async getProvider(){let d=this.options.getProvider();return d&&(0,T.qx)(this,_,d),(0,T.ac)(this,_)}async getWalletClient({chainId:d}={}){let[m,v]=await Promise.all([this.getProvider(),this.getAccount()]),_=this.chains.find(m=>m.id===d);if(!m)throw Error("provider is required.");return(0,U.K)({account:v,chain:_,transport:(0,F.P)(m)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;let d=await this.getProvider();if(!d)throw new E.N;let m=await this.getAccount();return!!m}catch{return!1}}async switchChain(d){let m=await this.getProvider();if(!m)throw new E.N;let v=(0,W.eC)(d);try{return await Promise.all([m.request({method:"wallet_switchEthereumChain",params:[{chainId:v}]}),new Promise(m=>this.on("change",({chain:v})=>{v?.id===d&&m()}))]),this.chains.find(m=>m.id===d)??{id:d,name:`Chain ${v}`,network:`${v}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(x){let _=this.chains.find(m=>m.id===d);if(!_)throw new E.B({chainId:d,connectorId:this.id});if(4902===x.code||x?.data?.originalError?.code===4902)try{await m.request({method:"wallet_addEthereumChain",params:[{chainId:v,chainName:_.name,nativeCurrency:_.nativeCurrency,rpcUrls:[_.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(_)}]});let E=await this.getChainId();if(E!==d)throw new j.ab(Error("User rejected switch after adding network."));return _}catch(d){throw new j.ab(d)}if(this.isUserRejectedRequestError(x))throw new j.ab(x);throw new j.x3(x)}}async watchAsset({address:d,decimals:m=18,image:v,symbol:_}){let x=await this.getProvider();if(!x)throw new E.N;return x.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:d,decimals:m,image:v,symbol:_}}})}isUserRejectedRequestError(d){return 4001===d.code}};_=new WeakMap},40809:(d,m,v)=>{"use strict";function normalizeChainId(d){return"string"==typeof d?Number.parseInt(d,"0x"===d.trim().substring(0,2)?16:10):"bigint"==typeof d?Number(d):d}v.d(m,{J:()=>normalizeChainId})},55185:(d,m,v)=>{"use strict";v.d(m,{B:()=>_,N:()=>E});var _=class extends Error{constructor({chainId:d,connectorId:m}){super(`Chain "${d}" not configured for connector "${m}".`),this.name="ChainNotConfiguredForConnectorError"}},E=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},63582:(d,m,v)=>{"use strict";v.d(m,{Ko:()=>__privateAdd,U9:()=>__privateMethod,ac:()=>__privateGet,qx:()=>__privateSet,wR:()=>T});var _=v(25239),E=v(15922),x=v(58676),__accessCheck=(d,m,v)=>{if(!m.has(d))throw TypeError("Cannot "+v)},__privateGet=(d,m,v)=>(__accessCheck(d,m,"read from private field"),v?v.call(d):m.get(d)),__privateAdd=(d,m,v)=>{if(m.has(d))throw TypeError("Cannot add the same private member more than once");m instanceof WeakSet?m.add(d):m.set(d,v)},__privateSet=(d,m,v,_)=>(__accessCheck(d,m,"write to private field"),_?_.call(d,v):m.set(d,v),v),__privateMethod=(d,m,v)=>(__accessCheck(d,m,"access private method"),v),T=class extends _{constructor({chains:d=[E.R,x.w],options:m}){super(),this.chains=d,this.options=m}getBlockExplorerUrls(d){let{default:m,...v}=d.blockExplorers??{};if(m)return[m.url,...Object.values(v).map(d=>d.url)]}isChainUnsupported(d){return!this.chains.some(m=>m.id===d)}setStorage(d){this.storage=d}}},45686:(d,m,v)=>{"use strict";v.d(m,{QB:()=>configureChains,$j:()=>connect,_g:()=>createConfig,o6:()=>createStorage,vZ:()=>deepEqual,zP:()=>disconnect,EG:()=>fetchBalance,w6:()=>fetchEnsAvatar,Lk:()=>fetchEnsName,D0:()=>getAccount,Hy:()=>getNetwork,uV:()=>getPublicClient,xz:()=>getWalletClient,wp:()=>tf,uw:()=>prepareSendTransaction,T7:()=>sendTransaction,If:()=>switchNetwork,uH:()=>watchAccount,QC:()=>watchNetwork,pC:()=>watchPublicClient,Tb:()=>watchWalletClient});var _,E,x,T,A,j={};v.r(j),v.d(j,{Receiver:()=>e2,Sender:()=>e3,WebSocket:()=>e5,WebSocketServer:()=>e6,createWebSocketStream:()=>e1,default:()=>e4});var U=v(20350),__accessCheck=(d,m,v)=>{if(!m.has(d))throw TypeError("Cannot "+v)},__privateGet=(d,m,v)=>(__accessCheck(d,m,"read from private field"),v?v.call(d):m.get(d)),__privateAdd=(d,m,v)=>{if(m.has(d))throw TypeError("Cannot add the same private member more than once");m instanceof WeakSet?m.add(d):m.set(d,v)},__privateSet=(d,m,v,_)=>(__accessCheck(d,m,"write to private field"),_?_.call(d,v):m.set(d,v),v),__privateMethod=(d,m,v)=>(__accessCheck(d,m,"access private method"),v),F=v(17514),W=v(39165),K=v(63252),Q=v(57575),X=v(10773),ee=v(97133),er=v(60208),ei=v(48617),eo=v(96405),ea=v(10145);function isNullUniversalResolverError(d,m){if(!(d instanceof eo.G))return!1;let v=d.walk(d=>d instanceof ea.Lu);return v instanceof ea.Lu&&(!!(v.data?.errorName==="ResolverNotFound"||v.data?.errorName==="ResolverWildcardNotSupported"||v.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===m&&v.reason===ei.$[50])}var es=v(52726),el=v(31878),ec=v(54940),eu=v(36681);function encodedLabelToLabelhash(d){if(66!==d.length||0!==d.indexOf("[")||65!==d.indexOf("]"))return null;let m=`0x${d.slice(1,65)}`;return(0,eu.v)(m)?m:null}function namehash(d){let m=new Uint8Array(32).fill(0);if(!d)return(0,er.ci)(m);let v=d.split(".");for(let d=v.length-1;d>=0;d-=1){let _=encodedLabelToLabelhash(v[d]),E=_?(0,el.O0)(_):(0,ec.w)((0,el.qX)(v[d]),"bytes");m=(0,ec.w)((0,es.zo)([m,E]),"bytes")}return(0,er.ci)(m)}function encodeLabelhash(d){return`[${d.slice(2)}]`}function labelhash(d){let m=new Uint8Array(32).fill(0);return d?encodedLabelToLabelhash(d)||(0,ec.w)((0,el.qX)(d)):(0,er.ci)(m)}function packetToBytes(d){let m=d.replace(/^\.|\.$/gm,"");if(0===m.length)return new Uint8Array(1);let v=new Uint8Array((0,el.qX)(m).byteLength+2),_=0,E=m.split(".");for(let d=0;d<E.length;d++){let m=(0,el.qX)(E[d]);m.byteLength>255&&(m=(0,el.qX)(encodeLabelhash(labelhash(E[d])))),v[_]=m.length,v.set(m,_+1),_+=m.length+1}return v.byteLength!==_+1?v.slice(0,_+1):v}var ed=v(96630),eh=v(90749),ef=v(26544);function getContractError(d,{abi:m,address:v,args:_,docsPath:E,functionName:x,sender:T}){let{code:A,data:j,message:U,shortMessage:F}=d instanceof ea.VQ?d:d instanceof eo.G?d.walk(d=>"data"in d)||d.walk():{},W=d instanceof eh.wb?new ea.Dk({functionName:x}):[3,ef.XS.code].includes(A)&&(j||U||F)?new ea.Lu({abi:m,data:"object"==typeof j?j.data:j,functionName:x,message:F??U}):d;return new ea.uq(W,{abi:m,args:_,contractAddress:v,docsPath:E,functionName:x,sender:T})}var ep=v(90715);async function readContract(d,{abi:m,address:v,args:_,functionName:E,...x}){let T=(0,Q.R)({abi:m,args:_,functionName:E});try{let{data:A}=await (0,ed.s)(d,ep.R)({data:T,to:v,...x});return(0,K.k)({abi:m,args:_,functionName:E,data:A||"0x"})}catch(d){throw getContractError(d,{abi:m,address:v,args:_,docsPath:"/docs/contract/readContract",functionName:E})}}async function getEnsAddress(d,{blockNumber:m,blockTag:v,coinType:_,name:E,universalResolverAddress:x}){let T=x;if(!T){if(!d.chain)throw Error("client chain not configured. universalResolverAddress is required.");T=(0,X.L)({blockNumber:m,chain:d.chain,contract:"ensUniversalResolver"})}try{let x=(0,Q.R)({abi:W.X$,functionName:"addr",...null!=_?{args:[namehash(E),BigInt(_)]}:{args:[namehash(E)]}}),A=await (0,ed.s)(d,readContract)({address:T,abi:W.k3,functionName:"resolve",args:[(0,er.NC)(packetToBytes(E)),x],blockNumber:m,blockTag:v});if("0x"===A[0])return null;let j=(0,K.k)({abi:W.X$,args:null!=_?[namehash(E),BigInt(_)]:void 0,functionName:"addr",data:A[0]});if("0x"===j||"0x00"===(0,ee.f)(j))return null;return j}catch(d){if(isNullUniversalResolverError(d,"resolve"))return null;throw d}}let EnsAvatarInvalidMetadataError=class EnsAvatarInvalidMetadataError extends eo.G{constructor({data:d}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(d)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}};let EnsAvatarInvalidNftUriError=class EnsAvatarInvalidNftUriError extends eo.G{constructor({reason:d}){super(`ENS NFT avatar URI is invalid. ${d}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}};let EnsAvatarUriResolutionError=class EnsAvatarUriResolutionError extends eo.G{constructor({uri:d}){super(`Unable to resolve ENS avatar URI "${d}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}};let EnsAvatarUnsupportedNamespaceError=class EnsAvatarUnsupportedNamespaceError extends eo.G{constructor({namespace:d}){super(`ENS NFT avatar namespace "${d}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};let eg=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,em=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,eb=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,ey=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function isImageUri(d){try{let m=await fetch(d,{method:"HEAD"});if(200===m.status){let d=m.headers.get("content-type");return d?.startsWith("image/")}return!1}catch(m){if("object"==typeof m&&void 0!==m.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(m=>{let v=new Image;v.onload=()=>{m(!0)},v.onerror=()=>{m(!1)},v.src=d})}}function getGateway(d,m){return d?d.endsWith("/")?d.slice(0,-1):d:m}function resolveAvatarUri({uri:d,gatewayUrls:m}){let v=eb.test(d);if(v)return{uri:d,isOnChain:!0,isEncoded:v};let _=getGateway(m?.ipfs,"https://ipfs.io"),E=getGateway(m?.arweave,"https://arweave.net"),x=d.match(eg),{protocol:T,subpath:A,target:j,subtarget:U=""}=x?.groups||{},F="ipns:/"===T||"ipns/"===A,W="ipfs:/"===T||"ipfs/"===A||em.test(d);if(d.startsWith("http")&&!F&&!W){let v=d;return m?.arweave&&(v=d.replace(/https:\/\/arweave.net/g,m?.arweave)),{uri:v,isOnChain:!1,isEncoded:!1}}if((F||W)&&j)return{uri:`${_}/${F?"ipns":"ipfs"}/${j}${U}`,isOnChain:!1,isEncoded:!1};if("ar:/"===T&&j)return{uri:`${E}/${j}${U||""}`,isOnChain:!1,isEncoded:!1};let K=d.replace(ey,"");if(K.startsWith("<svg")&&(K=`data:image/svg+xml;base64,${btoa(K)}`),K.startsWith("data:")||K.startsWith("{"))return{uri:K,isOnChain:!0,isEncoded:!1};throw new EnsAvatarUriResolutionError({uri:d})}function getJsonImage(d){if("object"!=typeof d||!("image"in d)&&!("image_url"in d)&&!("image_data"in d))throw new EnsAvatarInvalidMetadataError({data:d});return d.image||d.image_url||d.image_data}async function getMetadataAvatarUri({gatewayUrls:d,uri:m}){try{let v=await fetch(m).then(d=>d.json()),_=await parseAvatarUri({gatewayUrls:d,uri:getJsonImage(v)});return _}catch{throw new EnsAvatarUriResolutionError({uri:m})}}async function parseAvatarUri({gatewayUrls:d,uri:m}){let{uri:v,isOnChain:_}=resolveAvatarUri({uri:m,gatewayUrls:d});if(_)return v;let E=await isImageUri(v);if(E)return v;throw new EnsAvatarUriResolutionError({uri:m})}function parseNftUri(d){let m=d;m.startsWith("did:nft:")&&(m=m.replace("did:nft:","").replace(/_/g,"/"));let[v,_,E]=m.split("/"),[x,T]=v.split(":"),[A,j]=_.split(":");if(!x||"eip155"!==x.toLowerCase())throw new EnsAvatarInvalidNftUriError({reason:"Only EIP-155 supported"});if(!T)throw new EnsAvatarInvalidNftUriError({reason:"Chain ID not found"});if(!j)throw new EnsAvatarInvalidNftUriError({reason:"Contract address not found"});if(!E)throw new EnsAvatarInvalidNftUriError({reason:"Token ID not found"});if(!A)throw new EnsAvatarInvalidNftUriError({reason:"ERC namespace not found"});return{chainID:parseInt(T),namespace:A.toLowerCase(),contractAddress:j,tokenID:E}}async function getNftTokenUri(d,{nft:m}){if("erc721"===m.namespace)return readContract(d,{address:m.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(m.tokenID)]});if("erc1155"===m.namespace)return readContract(d,{address:m.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(m.tokenID)]});throw new EnsAvatarUnsupportedNamespaceError({namespace:m.namespace})}async function parseAvatarRecord(d,{gatewayUrls:m,record:v}){return/eip155:/i.test(v)?parseNftAvatarUri(d,{gatewayUrls:m,record:v}):parseAvatarUri({uri:v,gatewayUrls:m})}async function parseNftAvatarUri(d,{gatewayUrls:m,record:v}){let _=parseNftUri(v),E=await getNftTokenUri(d,{nft:_}),{uri:x,isOnChain:T,isEncoded:A}=resolveAvatarUri({uri:E,gatewayUrls:m});if(T&&(x.includes("data:application/json;base64,")||x.startsWith("{"))){let d=A?atob(x.replace("data:application/json;base64,","")):x,v=JSON.parse(d);return parseAvatarUri({uri:getJsonImage(v),gatewayUrls:m})}let j=_.tokenID;return"erc1155"===_.namespace&&(j=j.replace("0x","").padStart(64,"0")),getMetadataAvatarUri({gatewayUrls:m,uri:x.replace(/(?:0x)?{id}/,j)})}async function getEnsText(d,{blockNumber:m,blockTag:v,name:_,key:E,universalResolverAddress:x}){let T=x;if(!T){if(!d.chain)throw Error("client chain not configured. universalResolverAddress is required.");T=(0,X.L)({blockNumber:m,chain:d.chain,contract:"ensUniversalResolver"})}try{let x=await (0,ed.s)(d,readContract)({address:T,abi:W.k3,functionName:"resolve",args:[(0,er.NC)(packetToBytes(_)),(0,Q.R)({abi:W.nZ,functionName:"text",args:[namehash(_),E]})],blockNumber:m,blockTag:v});if("0x"===x[0])return null;let A=(0,K.k)({abi:W.nZ,functionName:"text",data:x[0]});return""===A?null:A}catch(d){if(isNullUniversalResolverError(d,"resolve"))return null;throw d}}async function getEnsAvatar(d,{blockNumber:m,blockTag:v,gatewayUrls:_,name:E,universalResolverAddress:x}){let T=await (0,ed.s)(d,getEnsText)({blockNumber:m,blockTag:v,key:"avatar",name:E,universalResolverAddress:x});if(!T)return null;try{return await parseAvatarRecord(d,{record:T,gatewayUrls:_})}catch{return null}}async function getEnsName(d,{address:m,blockNumber:v,blockTag:_,universalResolverAddress:E}){let x=E;if(!x){if(!d.chain)throw Error("client chain not configured. universalResolverAddress is required.");x=(0,X.L)({blockNumber:v,chain:d.chain,contract:"ensUniversalResolver"})}let T=`${m.toLowerCase().substring(2)}.addr.reverse`;try{let m=await (0,ed.s)(d,readContract)({address:x,abi:W.du,functionName:"reverse",args:[(0,er.NC)(packetToBytes(T))],blockNumber:v,blockTag:_});return m[0]}catch(d){if(isNullUniversalResolverError(d,"reverse"))return null;throw d}}async function getEnsResolver(d,{blockNumber:m,blockTag:v,name:_,universalResolverAddress:E}){let x=E;if(!x){if(!d.chain)throw Error("client chain not configured. universalResolverAddress is required.");x=(0,X.L)({blockNumber:m,chain:d.chain,contract:"ensUniversalResolver"})}let[T]=await (0,ed.s)(d,readContract)({address:x,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,er.NC)(packetToBytes(_))],blockNumber:m,blockTag:v});return T}function createFilterRequestScope(d,{method:m}){let v={};return"fallback"===d.transport.type&&d.transport.onResponse?.(({method:d,response:_,status:E,transport:x})=>{"success"===E&&m===d&&(v[_]=x.request)}),m=>v[m]||d.request}async function createBlockFilter(d){let m=createFilterRequestScope(d,{method:"eth_newBlockFilter"}),v=await d.request({method:"eth_newBlockFilter"});return{id:v,request:m(v),type:"block"}}let FilterTypeNotSupportedError=class FilterTypeNotSupportedError extends eo.G{constructor(d){super(`Filter type "${d}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};var ew=v(49720),ev=v(67777),e_=v(44503),eC=v(24651);function encodeEventTopics({abi:d,eventName:m,args:v}){let _=d[0];if(m&&!(_=(0,eC.m)({abi:d,args:v,name:m})))throw new eh.mv(m,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==_.type)throw new eh.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let E=(0,e_.t)(_),x=(0,ew.e)(E),T=[];if(v&&"inputs"in _){let d=_.inputs?.filter(d=>"indexed"in d&&d.indexed),m=Array.isArray(v)?v:Object.values(v).length>0?d?.map(d=>v[d.name])??[]:[];m.length>0&&(T=d?.map((d,v)=>Array.isArray(m[v])?m[v].map((_,E)=>encodeArg({param:d,value:m[v][E]})):m[v]?encodeArg({param:d,value:m[v]}):null)??[])}return[x,...T]}function encodeArg({param:d,value:m}){if("string"===d.type||"bytes"===d.type)return(0,ec.w)((0,el.O0)(m));if("tuple"===d.type||d.type.match(/^(.*)\[(\d+)?\]$/))throw new FilterTypeNotSupportedError(d.type);return(0,ev.E)([d],[m])}async function createContractEventFilter(d,{address:m,abi:v,args:_,eventName:E,fromBlock:x,strict:T,toBlock:A}){let j=createFilterRequestScope(d,{method:"eth_newFilter"}),U=E?encodeEventTopics({abi:v,args:_,eventName:E}):void 0,F=await d.request({method:"eth_newFilter",params:[{address:m,fromBlock:"bigint"==typeof x?(0,er.eC)(x):x,toBlock:"bigint"==typeof A?(0,er.eC)(A):A,topics:U}]});return{abi:v,args:_,eventName:E,id:F,request:j(F),strict:T,type:"event"}}async function createEventFilter(d,{address:m,args:v,event:_,events:E,fromBlock:x,strict:T,toBlock:A}={}){let j=E??(_?[_]:void 0),U=createFilterRequestScope(d,{method:"eth_newFilter"}),F=[];j&&(F=[j.flatMap(d=>encodeEventTopics({abi:[d],eventName:d.name,args:v}))],_&&(F=F[0]));let W=await d.request({method:"eth_newFilter",params:[{address:m,fromBlock:"bigint"==typeof x?(0,er.eC)(x):x,toBlock:"bigint"==typeof A?(0,er.eC)(A):A,...F.length?{topics:F}:{}}]});return{abi:j,args:v,eventName:_?_.name:void 0,fromBlock:x,id:W,request:U(W),strict:T,toBlock:A,type:"event"}}async function createPendingTransactionFilter(d){let m=createFilterRequestScope(d,{method:"eth_newPendingTransactionFilter"}),v=await d.request({method:"eth_newPendingTransactionFilter"});return{id:v,request:m(v),type:"transaction"}}var eE=v(65545),ex=v(86680);async function estimateContractGas(d,{abi:m,address:v,args:_,functionName:E,...x}){let T=(0,Q.R)({abi:m,args:_,functionName:E});try{let m=await (0,ed.s)(d,ex.Q)({data:T,to:v,...x});return m}catch(T){let d=x.account?(0,eE.T)(x.account):void 0;throw getContractError(T,{abi:m,address:v,args:_,docsPath:"/docs/contract/estimateContractGas",functionName:E,sender:d?.address})}}var eS=v(53851),eP=v(86127);async function getBalance(d,{address:m,blockNumber:v,blockTag:_="latest"}){let E=v?(0,er.eC)(v):void 0,x=await d.request({method:"eth_getBalance",params:[m,E||_]});return BigInt(x)}var eO=v(29862);let ek=new Map,eR=new Map;function withCache_getCache(d){let buildCache=(d,m)=>({clear:()=>m.delete(d),get:()=>m.get(d),set:v=>m.set(d,v)}),m=buildCache(d,ek),v=buildCache(d,eR);return{clear:()=>{m.clear(),v.clear()},promise:m,response:v}}async function withCache(d,{cacheKey:m,cacheTime:v=1/0}){let _=withCache_getCache(m),E=_.response.get();if(E&&v>0){let d=new Date().getTime()-E.created.getTime();if(d<v)return E.data}let x=_.promise.get();x||(x=d(),_.promise.set(x));try{let d=await x;return _.response.set({created:new Date,data:d}),d}finally{_.promise.clear()}}let cacheKey=d=>`blockNumber.${d}`;async function getBlockNumber(d,{cacheTime:m=d.cacheTime,maxAge:v}={}){let _=await withCache(()=>d.request({method:"eth_blockNumber"}),{cacheKey:cacheKey(d.uid),cacheTime:v??m});return BigInt(_)}var eT=v(90953);async function getBlockTransactionCount(d,{blockHash:m,blockNumber:v,blockTag:_="latest"}={}){let E;let x=void 0!==v?(0,er.eC)(v):void 0;return E=m?await d.request({method:"eth_getBlockTransactionCountByHash",params:[m]}):await d.request({method:"eth_getBlockTransactionCountByNumber",params:[x||_]}),(0,eT.ly)(E)}async function getBytecode(d,{address:m,blockNumber:v,blockTag:_="latest"}){let E=void 0!==v?(0,er.eC)(v):void 0,x=await d.request({method:"eth_getCode",params:[m,E||_]});if("0x"!==x)return x}var eA=v(40817),eD=v(17061);let eI="/docs/contract/decodeEventLog";function decodeEventLog({abi:d,data:m,strict:v,topics:_}){let E=v??!0,[x,...T]=_;if(!x)throw new eh.FM({docsPath:eI});let A=d.find(d=>"event"===d.type&&x===(0,ew.e)((0,e_.t)(d)));if(!(A&&"name"in A)||"event"!==A.type)throw new eh.lC(x,{docsPath:eI});let{name:j,inputs:U}=A,F=U?.some(d=>!("name"in d&&d.name)),W=F?[]:{},K=U.filter(d=>"indexed"in d&&d.indexed);for(let d=0;d<K.length;d++){let m=K[d],v=T[d];if(!v)throw new eh.Gy({abiItem:A,param:m});W[m.name||d]=decodeTopic({param:m,value:v})}let Q=U.filter(d=>!("indexed"in d&&d.indexed));if(Q.length>0){if(m&&"0x"!==m)try{let d=(0,eD.r)(Q,m);if(d){if(F)W=[...W,...d];else for(let m=0;m<Q.length;m++)W[Q[m].name]=d[m]}}catch(d){if(E){if(d instanceof eh.xB)throw new eh.SM({abiItem:A,data:d.data,params:d.params,size:d.size});throw d}}else if(E)throw new eh.SM({abiItem:A,data:"0x",params:Q,size:0})}return{eventName:j,args:Object.values(W).length>0?W:void 0}}function decodeTopic({param:d,value:m}){if("string"===d.type||"bytes"===d.type||"tuple"===d.type||d.type.match(/^(.*)\[(\d+)?\]$/))return m;let v=(0,eD.r)([d],m)||[];return v[0]}var eN=v(22892);async function getLogs(d,{address:m,blockHash:v,fromBlock:_,toBlock:E,event:x,events:T,args:A,strict:j}={}){let U=j??!1,F=T??(x?[x]:void 0),W=[];return F&&(W=[F.flatMap(d=>encodeEventTopics({abi:[d],eventName:d.name,args:A}))],x&&(W=W[0])),(v?await d.request({method:"eth_getLogs",params:[{address:m,topics:W,blockHash:v}]}):await d.request({method:"eth_getLogs",params:[{address:m,topics:W,fromBlock:"bigint"==typeof _?(0,er.eC)(_):_,toBlock:"bigint"==typeof E?(0,er.eC)(E):E}]})).map(d=>{try{let{eventName:m,args:v}=F?decodeEventLog({abi:F,data:d.data,topics:d.topics,strict:U}):{eventName:void 0,args:void 0};return(0,eN.U)(d,{args:v,eventName:m})}catch(_){let m,v;if(_ instanceof eh.SM||_ instanceof eh.Gy){if(U)return;m=_.abiItem.name,v=_.abiItem.inputs?.some(d=>!("name"in d&&d.name))}return(0,eN.U)(d,{args:v?[]:{},eventName:m})}}).filter(Boolean)}async function getContractEvents(d,{abi:m,address:v,args:_,blockHash:E,eventName:x,fromBlock:T,toBlock:A,strict:j}){let U=x?(0,eC.m)({abi:m,name:x}):void 0,F=U?void 0:m.filter(d=>"event"===d.type);return(0,ed.s)(d,getLogs)({address:v,args:_,blockHash:E,event:U,events:F,fromBlock:T,toBlock:A,strict:j})}function formatFeeHistory(d){return{baseFeePerGas:d.baseFeePerGas.map(d=>BigInt(d)),gasUsedRatio:d.gasUsedRatio,oldestBlock:BigInt(d.oldestBlock),reward:d.reward?.map(d=>d.map(d=>BigInt(d)))}}async function getFeeHistory(d,{blockCount:m,blockNumber:v,blockTag:_="latest",rewardPercentiles:E}){let x=v?(0,er.eC)(v):void 0,T=await d.request({method:"eth_feeHistory",params:[(0,er.eC)(m),x||_,E]});return formatFeeHistory(T)}async function getFilterChanges(d,{filter:m}){let v="strict"in m&&m.strict,_=await m.request({method:"eth_getFilterChanges",params:[m.id]});return _.map(d=>{if("string"==typeof d)return d;try{let{eventName:_,args:E}="abi"in m&&m.abi?decodeEventLog({abi:m.abi,data:d.data,topics:d.topics,strict:v}):{eventName:void 0,args:void 0};return(0,eN.U)(d,{args:E,eventName:_})}catch(E){let v,_;if(E instanceof eh.SM||E instanceof eh.Gy){if("strict"in m&&m.strict)return;v=E.abiItem.name,_=E.abiItem.inputs?.some(d=>!("name"in d&&d.name))}return(0,eN.U)(d,{args:_?[]:{},eventName:v})}}).filter(Boolean)}async function getFilterLogs(d,{filter:m}){let v=m.strict??!1,_=await m.request({method:"eth_getFilterLogs",params:[m.id]});return _.map(d=>{try{let{eventName:_,args:E}="abi"in m&&m.abi?decodeEventLog({abi:m.abi,data:d.data,topics:d.topics,strict:v}):{eventName:void 0,args:void 0};return(0,eN.U)(d,{args:E,eventName:_})}catch(E){let v,_;if(E instanceof eh.SM||E instanceof eh.Gy){if("strict"in m&&m.strict)return;v=E.abiItem.name,_=E.abiItem.inputs?.some(d=>!("name"in d&&d.name))}return(0,eN.U)(d,{args:_?[]:{},eventName:v})}}).filter(Boolean)}var eM=v(35208);function formatStorageProof(d){return d.map(d=>({...d,value:BigInt(d.value)}))}function formatProof(d){return{...d,balance:d.balance?BigInt(d.balance):void 0,nonce:d.nonce?(0,eT.ly)(d.nonce):void 0,storageProof:d.storageProof?formatStorageProof(d.storageProof):void 0}}async function getProof(d,{address:m,blockNumber:v,blockTag:_,storageKeys:E}){let x=void 0!==v?(0,er.eC)(v):void 0,T=await d.request({method:"eth_getProof",params:[m,E,x||(_??"latest")]});return formatProof(T)}async function getStorageAt(d,{address:m,blockNumber:v,blockTag:_="latest",slot:E}){let x=void 0!==v?(0,er.eC)(v):void 0,T=await d.request({method:"eth_getStorageAt",params:[m,E,x||_]});return T}var ej=v(96321),eL=v(95824);async function getTransaction(d,{blockHash:m,blockNumber:v,blockTag:_,hash:E,index:x}){let T=_||"latest",A=void 0!==v?(0,er.eC)(v):void 0,j=null;if(E?j=await d.request({method:"eth_getTransactionByHash",params:[E]}):m?j=await d.request({method:"eth_getTransactionByBlockHashAndIndex",params:[m,(0,er.eC)(x)]}):(A||T)&&(j=await d.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[A||T,(0,er.eC)(x)]})),!j)throw new ej.Bh({blockHash:m,blockNumber:v,blockTag:T,hash:E,index:x});let U=d.chain?.formatters?.transaction?.format||eL.Tr;return U(j)}async function getTransactionConfirmations(d,{hash:m,transactionReceipt:v}){let[_,E]=await Promise.all([(0,ed.s)(d,getBlockNumber)({}),m?(0,ed.s)(d,getTransaction)({hash:m}):void 0]),x=v?.blockNumber||E?.blockNumber;return x?_-x+1n:0n}var eU=v(37569),e$=v(47675);async function getTransactionReceipt(d,{hash:m}){let v=await d.request({method:"eth_getTransactionReceipt",params:[m]});if(!v)throw new ej.Yb({hash:m});let _=d.chain?.formatters?.transactionReceipt?.format||e$.f;return _(v)}async function multicall(d,m){let{allowFailure:v=!0,batchSize:_,blockNumber:E,blockTag:x,contracts:T,multicallAddress:A}=m,j=_??("object"==typeof d.batch?.multicall&&d.batch.multicall.batchSize||1024),U=A;if(!U){if(!d.chain)throw Error("client chain not configured. multicallAddress is required.");U=(0,X.L)({blockNumber:E,chain:d.chain,contract:"multicall3"})}let F=[[]],ee=0,er=0;for(let d=0;d<T.length;d++){let{abi:m,address:_,args:E,functionName:x}=T[d];try{let d=(0,Q.R)({abi:m,args:E,functionName:x});er+=(d.length-2)/2,j>0&&er>j&&F[ee].length>0&&(ee++,er=(d.length-2)/2,F[ee]=[]),F[ee]=[...F[ee],{allowFailure:!0,callData:d,target:_}]}catch(T){let d=getContractError(T,{abi:m,address:_,args:E,docsPath:"/docs/contract/multicall",functionName:x});if(!v)throw d;F[ee]=[...F[ee],{allowFailure:!0,callData:"0x",target:_}]}}let ei=await Promise.allSettled(F.map(m=>(0,ed.s)(d,readContract)({abi:W.F8,address:U,args:[m],blockNumber:E,blockTag:x,functionName:"aggregate3"}))),es=[];for(let d=0;d<ei.length;d++){let m=ei[d];if("rejected"===m.status){if(!v)throw m.reason;for(let v=0;v<F[d].length;v++)es.push({status:"failure",error:m.reason,result:void 0});continue}let _=m.value;for(let m=0;m<_.length;m++){let{returnData:E,success:x}=_[m],{callData:A}=F[d][m],{abi:j,address:U,functionName:W,args:Q}=T[es.length];try{if("0x"===A)throw new eh.wb;if(!x)throw new ea.VQ({data:E});let d=(0,K.k)({abi:j,args:Q,data:E,functionName:W});es.push(v?{result:d,status:"success"}:d)}catch(m){let d=getContractError(m,{abi:j,address:U,args:Q,docsPath:"/docs/contract/multicall",functionName:W});if(!v)throw d;es.push({error:d,result:void 0,status:"failure"})}}}if(es.length!==T.length)throw new eo.G("multicall results mismatch");return es}async function simulateContract(d,{abi:m,address:v,args:_,dataSuffix:E,functionName:x,...T}){let A=T.account?(0,eE.T)(T.account):void 0,j=(0,Q.R)({abi:m,args:_,functionName:x});try{let{data:A}=await (0,ed.s)(d,ep.R)({batch:!1,data:`${j}${E?E.replace("0x",""):""}`,to:v,...T}),U=(0,K.k)({abi:m,args:_,functionName:x,data:A||"0x"});return{result:U,request:{abi:m,address:v,args:_,dataSuffix:E,functionName:x,...T}}}catch(d){throw getContractError(d,{abi:m,address:v,args:_,docsPath:"/docs/contract/simulateContract",functionName:x,sender:A?.address})}}async function uninstallFilter(d,{filter:m}){return m.request({method:"eth_uninstallFilter",params:[m.id]})}function hashMessage(d,m){let v="string"==typeof d?(0,el.qX)(d):d.raw instanceof Uint8Array?d.raw:(0,el.O0)(d.raw),_=(0,el.qX)(`\x19Ethereum Signed Message:
${v.length}`);return(0,ec.w)((0,es.zo)([_,v]),m)}BigInt(0),BigInt(1),BigInt(2),(d,m)=>m.toString(16).padStart(2,"0");function equalBytes(d,m){if(d.length!==m.length)return!1;for(let v=0;v<d.length;v++)if(d[v]!==m[v])return!1;return!0}function isBytesEqual(d,m){let v=(0,eu.v)(d)?(0,el.O0)(d):d,_=(0,eu.v)(m)?(0,el.O0)(m):m;return equalBytes(v,_)}var eB=v(27979);async function verifyHash(d,{address:m,hash:v,signature:_,...E}){let x=(0,eu.v)(_)?_:(0,er.NC)(_);try{let{data:_}=await (0,ed.s)(d,ep.R)({data:(0,eB.w)({abi:W.$o,args:[m,v,x],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...E});return isBytesEqual(_??"0x0","0x1")}catch(d){if(d instanceof ea.cg)return!1;throw d}}async function verifyMessage(d,{address:m,message:v,signature:_,...E}){let x=hashMessage(v);return verifyHash(d,{address:m,hash:x,signature:_,...E})}var eF=v(66553);function hashTypedData({domain:d,message:m,primaryType:v,types:_}){let E=void 0===d?{}:d,x={EIP712Domain:(0,eF.cj)({domain:E}),..._};(0,eF.iC)({domain:E,message:m,primaryType:v,types:x});let T=["0x1901"];return E&&T.push(hashDomain({domain:E,types:x})),"EIP712Domain"!==v&&T.push(hashStruct({data:m,primaryType:v,types:x})),(0,ec.w)((0,es.zo)(T))}function hashDomain({domain:d,types:m}){return hashStruct({data:d,primaryType:"EIP712Domain",types:m})}function hashStruct({data:d,primaryType:m,types:v}){let _=encodeData({data:d,primaryType:m,types:v});return(0,ec.w)(_)}function encodeData({data:d,primaryType:m,types:v}){let _=[{type:"bytes32"}],E=[hashType({primaryType:m,types:v})];for(let x of v[m]){let[m,T]=encodeField({types:v,name:x.name,type:x.type,value:d[x.name]});_.push(m),E.push(T)}return(0,ev.E)(_,E)}function hashType({primaryType:d,types:m}){let v=(0,er.NC)(encodeType({primaryType:d,types:m}));return(0,ec.w)(v)}function encodeType({primaryType:d,types:m}){let v="",_=findTypeDependencies({primaryType:d,types:m});_.delete(d);let E=[d,...Array.from(_).sort()];for(let d of E)v+=`${d}(${m[d].map(({name:d,type:m})=>`${m} ${d}`).join(",")})`;return v}function findTypeDependencies({primaryType:d,types:m},v=new Set){let _=d.match(/^\w*/u),E=_?.[0];if(v.has(E)||void 0===m[E])return v;for(let d of(v.add(E),m[E]))findTypeDependencies({primaryType:d.type,types:m},v);return v}function encodeField({types:d,name:m,type:v,value:_}){if(void 0!==d[v])return[{type:"bytes32"},(0,ec.w)(encodeData({data:_,primaryType:v,types:d}))];if("bytes"===v){let d=_.length%2?"0":"";return _=`0x${d+_.slice(2)}`,[{type:"bytes32"},(0,ec.w)(_)]}if("string"===v)return[{type:"bytes32"},(0,ec.w)((0,er.NC)(_))];if(v.lastIndexOf("]")===v.length-1){let E=v.slice(0,v.lastIndexOf("[")),x=_.map(v=>encodeField({name:m,type:E,types:d,value:v}));return[{type:"bytes32"},(0,ec.w)((0,ev.E)(x.map(([d])=>d),x.map(([,d])=>d)))]}return[{type:v},_]}async function verifyTypedData(d,{address:m,signature:v,message:_,primaryType:E,types:x,domain:T,...A}){let j=hashTypedData({message:_,primaryType:E,types:x,domain:T});return verifyHash(d,{address:m,hash:j,signature:v,...A})}let eW=new Map,eH=new Map,ez=0;function observe(d,m,v){let _=++ez,getListeners=()=>eW.get(d)||[],unsubscribe=()=>{let m=getListeners();eW.set(d,m.filter(d=>d.id!==_))},unwatch=()=>{let m=eH.get(d);1===getListeners().length&&m&&m(),unsubscribe()},E=getListeners();if(eW.set(d,[...E,{id:_,fns:m}]),E&&E.length>0)return unwatch;let x={};for(let d in m)x[d]=(...m)=>{let v=getListeners();0!==v.length&&v.forEach(v=>v.fns[d]?.(...m))};let T=v(x);return"function"==typeof T&&eH.set(d,T),unwatch}var eq=v(80413),eG=v(62854),eV=v(82820);function poll(d,{emitOnBegin:m,initialWaitTime:v,interval:_}){let E=!0,unwatch=()=>E=!1,watch=async()=>{let x;m&&(x=await d({unpoll:unwatch}));let T=await v?.(x)??_;await (0,eV.D)(T);let poll=async()=>{E&&(await d({unpoll:unwatch}),await (0,eV.D)(_),poll())};poll()};return watch(),unwatch}function watchBlockNumber(d,{emitOnBegin:m=!1,emitMissed:v=!1,onBlockNumber:_,onError:E,poll:x,pollingInterval:T=d.pollingInterval}){let A,j,U;let F=void 0!==x?x:"webSocket"!==d.transport.type;return F?(()=>{let x=(0,eG.P)(["watchBlockNumber",d.uid,m,v,T]);return observe(x,{onBlockNumber:_,onError:E},_=>poll(async()=>{try{let m=await (0,ed.s)(d,getBlockNumber)({cacheTime:0});if(A){if(m===A)return;if(m-A>1&&v)for(let d=A+1n;d<m;d++)_.onBlockNumber(d,A),A=d}(!A||m>A)&&(_.onBlockNumber(m,A),A=m)}catch(d){_.onError?.(d)}},{emitOnBegin:m,interval:T}))})():(j=!0,U=()=>j=!1,(async()=>{try{let{unsubscribe:m}=await d.transport.subscribe({params:["newHeads"],onData(d){if(!j)return;let m=(0,eT.y_)(d.result?.number);_(m,A),A=m},onError(d){E?.(d)}});U=m,j||U()}catch(d){E?.(d)}})(),U)}async function waitForTransactionReceipt(d,{confirmations:m=1,hash:v,onReplaced:_,pollingInterval:E=d.pollingInterval,timeout:x}){let T,A,j;let U=(0,eG.P)(["waitForTransactionReceipt",d.uid,v]),F=!1;return new Promise((W,K)=>{x&&setTimeout(()=>K(new ej.mc({hash:v})),x);let Q=observe(U,{onReplaced:_,resolve:W,reject:K},_=>{let x=(0,ed.s)(d,watchBlockNumber)({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:E,async onBlockNumber(E){if(F)return;let U=E,done=d=>{x(),d(),Q()};try{if(j){if(m>1&&(!j.blockNumber||U-j.blockNumber+1n<m))return;done(()=>_.resolve(j));return}if(T||(F=!0,await (0,eq.J)(async()=>{(T=await (0,ed.s)(d,getTransaction)({hash:v})).blockNumber&&(U=T.blockNumber)},{delay:({count:d})=>200*~~(1<<d),retryCount:6}),F=!1),j=await (0,ed.s)(d,getTransactionReceipt)({hash:v}),m>1&&(!j.blockNumber||U-j.blockNumber+1n<m))return;done(()=>_.resolve(j))}catch(v){if(T&&(v instanceof ej.Bh||v instanceof ej.Yb))try{A=T;let v=await (0,ed.s)(d,eO.Q)({blockNumber:U,includeTransactions:!0}),E=v.transactions.find(({from:d,nonce:m})=>d===A.from&&m===A.nonce);if(!E||(j=await (0,ed.s)(d,getTransactionReceipt)({hash:E.hash}),m>1&&(!j.blockNumber||U-j.blockNumber+1n<m)))return;let x="replaced";E.to===A.to&&E.value===A.value?x="repriced":E.from===E.to&&0n===E.value&&(x="cancelled"),done(()=>{_.onReplaced?.({reason:x,replacedTransaction:A,transaction:E,transactionReceipt:j}),_.resolve(j)})}catch(d){done(()=>_.reject(d))}else done(()=>_.reject(v))}}})})})}var eK=v(64533);function watchBlocks(d,{blockTag:m="latest",emitMissed:v=!1,emitOnBegin:_=!1,onBlock:E,onError:x,includeTransactions:T,poll:A,pollingInterval:j=d.pollingInterval}){let U,F,W;let K=void 0!==A?A:"webSocket"!==d.transport.type,Q=T??!1;return K?(()=>{let T=(0,eG.P)(["watchBlocks",d.uid,v,_,Q,j]);return observe(T,{onBlock:E,onError:x},E=>poll(async()=>{try{let _=await (0,ed.s)(d,eO.Q)({blockTag:m,includeTransactions:Q});if(_.number&&U?.number){if(_.number===U.number)return;if(_.number-U.number>1&&v)for(let m=U?.number+1n;m<_.number;m++){let v=await (0,ed.s)(d,eO.Q)({blockNumber:m,includeTransactions:Q});E.onBlock(v,U),U=v}}(!U?.number||"pending"===m&&!_?.number||_.number&&_.number>U.number)&&(E.onBlock(_,U),U=_)}catch(d){E.onError?.(d)}},{emitOnBegin:_,interval:j}))})():(F=!0,W=()=>F=!1,(async()=>{try{let{unsubscribe:m}=await d.transport.subscribe({params:["newHeads"],onData(m){if(!F)return;let v=d.chain?.formatters?.block?.format||eK.Z,_=v(m.result);E(_,U),U=_},onError(d){x?.(d)}});W=m,F||W()}catch(d){x?.(d)}})(),W)}function watchContractEvent(d,{abi:m,address:v,args:_,batch:E=!0,eventName:x,onError:T,onLogs:A,poll:j,pollingInterval:U=d.pollingInterval,strict:F}){let W,K;let Q=void 0!==j?j:"webSocket"!==d.transport.type;return Q?(()=>{let j=(0,eG.P)(["watchContractEvent",v,_,E,d.uid,x,U]),W=F??!1;return observe(j,{onLogs:A,onError:T},T=>{let A,j;let F=!1,K=poll(async()=>{if(!F){try{j=await (0,ed.s)(d,createContractEventFilter)({abi:m,address:v,args:_,eventName:x,strict:W})}catch{}F=!0;return}try{let x;if(j)x=await (0,ed.s)(d,getFilterChanges)({filter:j});else{let E=await (0,ed.s)(d,getBlockNumber)({});x=A&&A!==E?await (0,ed.s)(d,getContractEvents)({abi:m,address:v,args:_,fromBlock:A+1n,toBlock:E,strict:W}):[],A=E}if(0===x.length)return;E?T.onLogs(x):x.forEach(d=>T.onLogs([d]))}catch(d){j&&d instanceof ef.yR&&(F=!1),T.onError?.(d)}},{emitOnBegin:!0,interval:U});return async()=>{j&&await (0,ed.s)(d,uninstallFilter)({filter:j}),K()}})})():(W=!0,K=()=>W=!1,(async()=>{try{let E=x?encodeEventTopics({abi:m,eventName:x,args:_}):[],{unsubscribe:j}=await d.transport.subscribe({params:["logs",{address:v,topics:E}],onData(d){if(!W)return;let v=d.result;try{let{eventName:d,args:_}=decodeEventLog({abi:m,data:v.data,topics:v.topics,strict:F}),E=(0,eN.U)(v,{args:_,eventName:d});A([E])}catch(E){let d,m;if(E instanceof eh.SM||E instanceof eh.Gy){if(F)return;d=E.abiItem.name,m=E.abiItem.inputs?.some(d=>!("name"in d&&d.name))}let _=(0,eN.U)(v,{args:m?[]:{},eventName:d});A([_])}},onError(d){T?.(d)}});K=j,W||K()}catch(d){T?.(d)}})(),K)}function watchEvent(d,{address:m,args:v,batch:_=!0,event:E,events:x,onError:T,onLogs:A,poll:j,pollingInterval:U=d.pollingInterval,strict:F}){let W,K;let Q=void 0!==j?j:"webSocket"!==d.transport.type,X=F??!1;return Q?(()=>{let j=(0,eG.P)(["watchEvent",m,v,_,d.uid,E,U]);return observe(j,{onLogs:A,onError:T},T=>{let A,j;let F=!1,W=poll(async()=>{if(!F){try{j=await (0,ed.s)(d,createEventFilter)({address:m,args:v,event:E,events:x,strict:X})}catch{}F=!0;return}try{let U;if(j)U=await (0,ed.s)(d,getFilterChanges)({filter:j});else{let _=await (0,ed.s)(d,getBlockNumber)({});U=A&&A!==_?await (0,ed.s)(d,getLogs)({address:m,args:v,event:E,events:x,fromBlock:A+1n,toBlock:_}):[],A=_}if(0===U.length)return;_?T.onLogs(U):U.forEach(d=>T.onLogs([d]))}catch(d){j&&d instanceof ef.yR&&(F=!1),T.onError?.(d)}},{emitOnBegin:!0,interval:U});return async()=>{j&&await (0,ed.s)(d,uninstallFilter)({filter:j}),W()}})})():(W=!0,K=()=>W=!1,(async()=>{try{let _=x??(E?[E]:void 0),j=[];_&&(j=[_.flatMap(d=>encodeEventTopics({abi:[d],eventName:d.name,args:v}))],E&&(j=j[0]));let{unsubscribe:U}=await d.transport.subscribe({params:["logs",{address:m,topics:j}],onData(d){if(!W)return;let m=d.result;try{let{eventName:d,args:v}=decodeEventLog({abi:_,data:m.data,topics:m.topics,strict:X}),E=(0,eN.U)(m,{args:v,eventName:d});A([E])}catch(E){let d,v;if(E instanceof eh.SM||E instanceof eh.Gy){if(F)return;d=E.abiItem.name,v=E.abiItem.inputs?.some(d=>!("name"in d&&d.name))}let _=(0,eN.U)(m,{args:v?[]:{},eventName:d});A([_])}},onError(d){T?.(d)}});K=U,W||K()}catch(d){T?.(d)}})(),K)}function watchPendingTransactions(d,{batch:m=!0,onError:v,onTransactions:_,poll:E,pollingInterval:x=d.pollingInterval}){let T,A;let j=void 0!==E?E:"webSocket"!==d.transport.type;return j?(()=>{let E=(0,eG.P)(["watchPendingTransactions",d.uid,m,x]);return observe(E,{onTransactions:_,onError:v},v=>{let _;let E=poll(async()=>{try{if(!_)try{_=await (0,ed.s)(d,createPendingTransactionFilter)({});return}catch(d){throw E(),d}let x=await (0,ed.s)(d,getFilterChanges)({filter:_});if(0===x.length)return;m?v.onTransactions(x):x.forEach(d=>v.onTransactions([d]))}catch(d){v.onError?.(d)}},{emitOnBegin:!0,interval:x});return async()=>{_&&await (0,ed.s)(d,uninstallFilter)({filter:_}),E()}})})():(T=!0,A=()=>T=!1,(async()=>{try{let{unsubscribe:m}=await d.transport.subscribe({params:["newPendingTransactions"],onData(d){if(!T)return;let m=d.result;_([m])},onError(d){v?.(d)}});A=m,T||A()}catch(d){v?.(d)}})(),A)}var eY=v(56e3),eZ=v(53908);function publicActions(d){return{call:m=>(0,ep.R)(d,m),createBlockFilter:()=>createBlockFilter(d),createContractEventFilter:m=>createContractEventFilter(d,m),createEventFilter:m=>createEventFilter(d,m),createPendingTransactionFilter:()=>createPendingTransactionFilter(d),estimateContractGas:m=>estimateContractGas(d,m),estimateGas:m=>(0,ex.Q)(d,m),getBalance:m=>getBalance(d,m),getBlock:m=>(0,eO.Q)(d,m),getBlockNumber:m=>getBlockNumber(d,m),getBlockTransactionCount:m=>getBlockTransactionCount(d,m),getBytecode:m=>getBytecode(d,m),getChainId:()=>(0,eA.L)(d),getContractEvents:m=>getContractEvents(d,m),getEnsAddress:m=>getEnsAddress(d,m),getEnsAvatar:m=>getEnsAvatar(d,m),getEnsName:m=>getEnsName(d,m),getEnsResolver:m=>getEnsResolver(d,m),getEnsText:m=>getEnsText(d,m),getFeeHistory:m=>getFeeHistory(d,m),estimateFeesPerGas:m=>(0,eS.X)(d,m),getFilterChanges:m=>getFilterChanges(d,m),getFilterLogs:m=>getFilterLogs(d,m),getGasPrice:()=>(0,eM.o)(d),getLogs:m=>getLogs(d,m),getProof:m=>getProof(d,m),estimateMaxPriorityFeePerGas:m=>(0,eP._)(d,m),getStorageAt:m=>getStorageAt(d,m),getTransaction:m=>getTransaction(d,m),getTransactionConfirmations:m=>getTransactionConfirmations(d,m),getTransactionCount:m=>(0,eU.K)(d,m),getTransactionReceipt:m=>getTransactionReceipt(d,m),multicall:m=>multicall(d,m),prepareTransactionRequest:m=>(0,eY.Z)(d,m),readContract:m=>readContract(d,m),sendRawTransaction:m=>(0,eZ.p)(d,m),simulateContract:m=>simulateContract(d,m),verifyMessage:m=>verifyMessage(d,m),verifyTypedData:m=>verifyTypedData(d,m),uninstallFilter:m=>uninstallFilter(d,m),waitForTransactionReceipt:m=>waitForTransactionReceipt(d,m),watchBlocks:m=>watchBlocks(d,m),watchBlockNumber:m=>watchBlockNumber(d,m),watchContractEvent:m=>watchContractEvent(d,m),watchEvent:m=>watchEvent(d,m),watchPendingTransactions:m=>watchPendingTransactions(d,m)}}function createPublicClient(d){let{key:m="public",name:v="Public Client"}=d,_=(0,F.e)({...d,key:m,name:v,type:"publicClient"});return _.extend(publicActions)}var eQ=v(54999),eX=v(82974);function fallback(d,m={}){let{key:v="fallback",name:_="Fallback",rank:E=!1,retryCount:x,retryDelay:T}=m;return({chain:m,pollingInterval:A=4e3,timeout:j})=>{let U=d,onResponse=()=>{},F=(0,eX.q)({key:v,name:_,async request({method:d,params:v}){let fetch=async(_=0)=>{let E=U[_]({chain:m,retryCount:0,timeout:j});try{let m=await E.request({method:d,params:v});return onResponse({method:d,params:v,response:m,transport:E,status:"success"}),m}catch(m){if(onResponse({error:m,method:d,params:v,transport:E,status:"error"}),(0,eQ.y)(m)||_===U.length-1)throw m;return fetch(_+1)}};return fetch()},retryCount:x,retryDelay:T,type:"fallback"},{onResponse:d=>onResponse=d,transports:U.map(d=>d({chain:m,retryCount:0}))});if(E){let d="object"==typeof E?E:{};rankTransports({chain:m,interval:d.interval??A,onTransports:d=>U=d,sampleCount:d.sampleCount,timeout:d.timeout,transports:U,weights:d.weights})}return F}}function rankTransports({chain:d,interval:m=4e3,onTransports:v,sampleCount:_=10,timeout:E=1e3,transports:x,weights:T={}}){let{stability:A=.7,latency:j=.3}=T,U=[],rankTransports_=async()=>{let T=await Promise.all(x.map(async m=>{let v,_;let x=m({chain:d,retryCount:0,timeout:E}),T=Date.now();try{await x.request({method:"net_listening"}),_=1}catch{_=0}finally{v=Date.now()}let A=v-T;return{latency:A,success:_}}));U.push(T),U.length>_&&U.shift();let F=Math.max(...U.map(d=>Math.max(...d.map(({latency:d})=>d)))),W=x.map((d,m)=>{let v=U.map(d=>d[m].latency),_=v.reduce((d,m)=>d+m,0)/v.length,E=U.map(d=>d[m].success),x=E.reduce((d,m)=>d+m,0)/E.length;return 0===x?[0,m]:[j*(1-_/F)+A*x,m]}).sort((d,m)=>m[0]-d[0]);v(W.map(([,d])=>x[d])),await (0,eV.D)(m),rankTransports_()};rankTransports_()}var eJ=v(28559);let UrlRequiredError=class UrlRequiredError extends eo.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};var e0=v(62205),e1=v(76261),e2=v(69563),e3=v(269),e5=v(60406),e6=v(76786);let e4=e5;function getNativeWebSocket(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}let e8=(()=>{try{return getNativeWebSocket()}catch{if(e5)return e5;return j}})();function withTimeout(d,{errorInstance:m=Error("timed out"),timeout:v,signal:_}){return new Promise((E,x)=>{(async()=>{let T;try{let A=new AbortController;v>0&&(T=setTimeout(()=>{_?A.abort():x(m)},v)),E(await d({signal:A?.signal}))}catch(d){"AbortError"===d.name&&x(m),x(d)}finally{clearTimeout(T)}})()})}let e9=0;async function http(d,{body:m,fetchOptions:v={},timeout:_=1e4}){let{headers:E,method:x,signal:T}=v;try{let A;let j=await withTimeout(async({signal:A})=>{let j=await fetch(d,{...v,body:Array.isArray(m)?(0,eG.P)(m.map(d=>({jsonrpc:"2.0",id:d.id??e9++,...d}))):(0,eG.P)({jsonrpc:"2.0",id:m.id??e9++,...m}),headers:{...E,"Content-Type":"application/json"},method:x||"POST",signal:T||(_>0?A:void 0)});return j},{errorInstance:new eJ.W5({body:m,url:d}),timeout:_,signal:!0});if(A=j.headers.get("Content-Type")?.startsWith("application/json")?await j.json():await j.text(),!j.ok)throw new eJ.Gg({body:m,details:(0,eG.P)(A.error)||j.statusText,headers:j.headers,status:j.status,url:d});return A}catch(v){if(v instanceof eJ.Gg||v instanceof eJ.W5)throw v;throw new eJ.Gg({body:m,details:v.message,url:d})}}let e7=new Map;async function getSocket(d){let m=e7.get(d);if(m)return m;let{schedule:v}=(0,e0.S)({id:d,fn:async()=>{let v=new e8(d),_=new Map,E=new Map,onMessage=({data:d})=>{let m=JSON.parse(d),v="eth_subscription"===m.method,x=v?m.params.subscription:m.id,T=v?E:_,A=T.get(x);A&&A({data:d}),v||T.delete(x)},onClose=()=>{e7.delete(d),v.removeEventListener("close",onClose),v.removeEventListener("message",onMessage)};return v.addEventListener("close",onClose),v.addEventListener("message",onMessage),v.readyState===e8.CONNECTING&&await new Promise((d,m)=>{v&&(v.onopen=d,v.onerror=m)}),m=Object.assign(v,{requests:_,subscriptions:E}),e7.set(d,m),[m]}}),[_,[E]]=await v();return E}function webSocket(d,{body:m,onResponse:v}){if(d.readyState===d.CLOSED||d.readyState===d.CLOSING)throw new eJ.c9({body:m,url:d.url,details:"Socket is closed."});let _=e9++,callback=({data:E})=>{let x=JSON.parse(E);("number"!=typeof x.id||_===x.id)&&(v?.(x),"eth_subscribe"===m.method&&"string"==typeof x.result&&d.subscriptions.set(x.result,callback),"eth_unsubscribe"===m.method&&d.subscriptions.delete(m.params?.[0]))};return d.requests.set(_,callback),d.send(JSON.stringify({jsonrpc:"2.0",...m,id:_})),d}async function webSocketAsync(d,{body:m,timeout:v=1e4}){return withTimeout(()=>new Promise(v=>te.webSocket(d,{body:m,onResponse:v})),{errorInstance:new eJ.W5({body:m,url:d.url}),timeout:v})}let te={http,webSocket,webSocketAsync};function http_http(d,m={}){let{batch:v,fetchOptions:_,key:E="http",name:x="HTTP JSON-RPC",retryDelay:T}=m;return({chain:A,retryCount:j,timeout:U})=>{let{batchSize:F=1e3,wait:W=0}="object"==typeof v?v:{},K=m.retryCount??j,Q=U??m.timeout??1e4,X=d||A?.rpcUrls.default.http[0];if(!X)throw new UrlRequiredError;return(0,eX.q)({key:E,name:x,async request({method:m,params:E}){let x={method:m,params:E},{schedule:T}=(0,e0.S)({id:`${d}`,wait:W,shouldSplitBatch:d=>d.length>F,fn:d=>te.http(X,{body:d,fetchOptions:_,timeout:Q})}),fn=async d=>v?T(d):[await te.http(X,{body:d,fetchOptions:_,timeout:Q})],[{error:A,result:j}]=await fn(x);if(A)throw new eJ.bs({body:x,error:A,url:X});return j},retryCount:K,retryDelay:T,timeout:Q,type:"http"},{fetchOptions:_,url:d})}}function webSocket_webSocket(d,m={}){let{key:v="webSocket",name:_="WebSocket JSON-RPC",retryDelay:E}=m;return({chain:x,retryCount:T,timeout:A})=>{let j=m.retryCount??T,U=A??m.timeout??1e4,F=d||x?.rpcUrls.default.webSocket?.[0];if(!F)throw new UrlRequiredError;return(0,eX.q)({key:v,name:_,async request({method:d,params:m}){let v={method:d,params:m},_=await getSocket(F),{error:E,result:x}=await te.webSocketAsync(_,{body:v,timeout:U});if(E)throw new eJ.bs({body:v,error:E,url:F});return x},retryCount:j,retryDelay:E,timeout:U,type:"webSocket"},{getSocket:()=>getSocket(F),async subscribe({params:d,onData:m,onError:v}){let _=await getSocket(F),{result:E}=await new Promise((E,x)=>te.webSocket(_,{body:{method:"eth_subscribe",params:d},onResponse(d){if(d.error){x(d.error),v?.(d.error);return}if("number"==typeof d.id){E(d);return}"eth_subscription"===d.method&&m(d.params)}}));return{subscriptionId:E,unsubscribe:async()=>new Promise(d=>te.webSocket(_,{body:{method:"eth_unsubscribe",params:[E]},onResponse:d}))}}})}}var tr=v(55185),ti=v(73214);let subscribeWithSelector=d=>(m,v,_)=>{let E=_.subscribe;_.subscribe=(d,m,v)=>{let x=d;if(m){let E=(null==v?void 0:v.equalityFn)||Object.is,T=d(_.getState());x=v=>{let _=d(v);if(!E(T,_)){let d=T;m(T=_,d)}},(null==v?void 0:v.fireImmediately)&&m(T,T)}return E(x)};let x=d(m,v,_);return x};function createJSONStorage(d,m){let v;try{v=d()}catch(d){return}return{getItem:d=>{var _;let parse=d=>null===d?null:JSON.parse(d,null==m?void 0:m.reviver),E=null!=(_=v.getItem(d))?_:null;return E instanceof Promise?E.then(parse):parse(E)},setItem:(d,_)=>v.setItem(d,JSON.stringify(_,null==m?void 0:m.replacer)),removeItem:d=>v.removeItem(d)}}let toThenable=d=>m=>{try{let v=d(m);if(v instanceof Promise)return v;return{then:d=>toThenable(d)(v),catch(d){return this}}}catch(d){return{then(d){return this},catch:m=>toThenable(m)(d)}}},oldImpl=(d,m)=>(v,_,E)=>{let x,T,A={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:d=>d,version:0,merge:(d,m)=>({...m,...d}),...m},j=!1,U=new Set,F=new Set;try{x=A.getStorage()}catch(d){}if(!x)return d((...d)=>{console.warn(`[zustand persist middleware] Unable to update item '${A.name}', the given storage is currently unavailable.`),v(...d)},_,E);let W=toThenable(A.serialize),setItem=()=>{let d;let m=A.partialize({..._()}),v=W({state:m,version:A.version}).then(d=>x.setItem(A.name,d)).catch(m=>{d=m});if(d)throw d;return v},K=E.setState;E.setState=(d,m)=>{K(d,m),setItem()};let Q=d((...d)=>{v(...d),setItem()},_,E),hydrate=()=>{var d;if(!x)return;j=!1,U.forEach(d=>d(_()));let m=(null==(d=A.onRehydrateStorage)?void 0:d.call(A,_()))||void 0;return toThenable(x.getItem.bind(x))(A.name).then(d=>{if(d)return A.deserialize(d)}).then(d=>{if(d){if("number"!=typeof d.version||d.version===A.version)return d.state;if(A.migrate)return A.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(d=>{var m;return v(T=A.merge(d,null!=(m=_())?m:Q),!0),setItem()}).then(()=>{null==m||m(T,void 0),j=!0,F.forEach(d=>d(T))}).catch(d=>{null==m||m(void 0,d)})};return E.persist={setOptions:d=>{A={...A,...d},d.getStorage&&(x=d.getStorage())},clearStorage:()=>{null==x||x.removeItem(A.name)},getOptions:()=>A,rehydrate:()=>hydrate(),hasHydrated:()=>j,onHydrate:d=>(U.add(d),()=>{U.delete(d)}),onFinishHydration:d=>(F.add(d),()=>{F.delete(d)})},hydrate(),T||Q},newImpl=(d,m)=>(v,_,E)=>{let x,T={storage:createJSONStorage(()=>localStorage),partialize:d=>d,version:0,merge:(d,m)=>({...m,...d}),...m},A=!1,j=new Set,U=new Set,F=T.storage;if(!F)return d((...d)=>{console.warn(`[zustand persist middleware] Unable to update item '${T.name}', the given storage is currently unavailable.`),v(...d)},_,E);let setItem=()=>{let d=T.partialize({..._()});return F.setItem(T.name,{state:d,version:T.version})},W=E.setState;E.setState=(d,m)=>{W(d,m),setItem()};let K=d((...d)=>{v(...d),setItem()},_,E),hydrate=()=>{var d,m;if(!F)return;A=!1,j.forEach(d=>{var m;return d(null!=(m=_())?m:K)});let E=(null==(m=T.onRehydrateStorage)?void 0:m.call(T,null!=(d=_())?d:K))||void 0;return toThenable(F.getItem.bind(F))(T.name).then(d=>{if(d){if("number"!=typeof d.version||d.version===T.version)return d.state;if(T.migrate)return T.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(d=>{var m;return v(x=T.merge(d,null!=(m=_())?m:K),!0),setItem()}).then(()=>{null==E||E(x,void 0),x=_(),A=!0,U.forEach(d=>d(x))}).catch(d=>{null==E||E(void 0,d)})};return E.persist={setOptions:d=>{T={...T,...d},d.storage&&(F=d.storage)},clearStorage:()=>{null==F||F.removeItem(T.name)},getOptions:()=>T,rehydrate:()=>hydrate(),hasHydrated:()=>A,onHydrate:d=>(j.add(d),()=>{j.delete(d)}),onFinishHydration:d=>(U.add(d),()=>{U.delete(d)})},T.skipHydration||hydrate(),x||K},persist=(d,m)=>"getStorage"in m||"serialize"in m||"deserialize"in m?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),oldImpl(d,m)):newImpl(d,m),createStoreImpl=d=>{let m;let v=new Set,setState=(d,_)=>{let E="function"==typeof d?d(m):d;if(!Object.is(E,m)){let d=m;m=(null!=_?_:"object"!=typeof E)?E:Object.assign({},m,E),v.forEach(v=>v(m,d))}},getState=()=>m,_={setState,getState,subscribe:d=>(v.add(d),()=>v.delete(d)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),v.clear()}};return m=d(setState,getState,_),_},createStore=d=>d?createStoreImpl(d):createStoreImpl;var to=v(81531);function shallow$1(d,m){if(Object.is(d,m))return!0;if("object"!=typeof d||null===d||"object"!=typeof m||null===m)return!1;if(d instanceof Map&&m instanceof Map){if(d.size!==m.size)return!1;for(let[v,_]of d)if(!Object.is(_,m.get(v)))return!1;return!0}if(d instanceof Set&&m instanceof Set){if(d.size!==m.size)return!1;for(let v of d)if(!m.has(v))return!1;return!0}let v=Object.keys(d);if(v.length!==Object.keys(m).length)return!1;for(let _=0;_<v.length;_++)if(!Object.prototype.hasOwnProperty.call(m,v[_])||!Object.is(d[v[_]],m[v[_]]))return!1;return!0}var ta=v(53526),ts=v(75929);function configureChains(d,m,{batch:v={multicall:{wait:32}},pollingInterval:_=4e3,rank:E,retryCount:x,retryDelay:T,stallTimeout:A}={}){if(!d.length)throw Error("must have at least one chain");let j=[],U={},F={};for(let v of d){let d=!1;for(let _ of m){let m=_(v);m&&(d=!0,j.some(({id:d})=>d===v.id)||(j=[...j,m.chain]),U[v.id]=[...U[v.id]||[],...m.rpcUrls.http],m.rpcUrls.webSocket&&(F[v.id]=[...F[v.id]||[],...m.rpcUrls.webSocket]))}if(!d)throw Error(`Could not find valid provider configuration for chain "${v.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:j,publicClient:({chainId:m})=>{let F=j.find(d=>d.id===m)??d[0],W=U[F.id];if(!W||!W[0])throw Error(`No providers configured for chain "${F.id}"`);let K=createPublicClient({batch:v,chain:F,transport:fallback(W.map(d=>http_http(d,{timeout:A})),{rank:E,retryCount:x,retryDelay:T}),pollingInterval:_});return Object.assign(K,{chains:j})},webSocketPublicClient:({chainId:m})=>{let U=j.find(d=>d.id===m)??d[0],W=F[U.id];if(!W||!W[0])return;let K=createPublicClient({batch:v,chain:U,transport:fallback(W.map(d=>webSocket_webSocket(d,{timeout:A})),{rank:E,retryCount:x,retryDelay:T}),pollingInterval:_});return Object.assign(K,{chains:j})}}}var tl=class extends Error{constructor({activeChain:d,targetChain:m}){super(`Chain mismatch: Expected "${m}", received "${d}".`),this.name="ChainMismatchError"}},tc=class extends Error{constructor({chainId:d,connectorId:m}){super(`Chain "${d}" not configured${m?` for connector "${m}"`:""}.`),this.name="ChainNotConfigured"}},tu=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},td=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},th=class extends Error{constructor({connector:d}){super(`"${d.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}};function deepEqual(d,m){if(d===m)return!0;if(d&&m&&"object"==typeof d&&"object"==typeof m){let v,_;if(d.constructor!==m.constructor)return!1;if(Array.isArray(d)&&Array.isArray(m)){if((v=d.length)!=m.length)return!1;for(_=v;0!=_--;)if(!deepEqual(d[_],m[_]))return!1;return!0}if(d.valueOf!==Object.prototype.valueOf)return d.valueOf()===m.valueOf();if(d.toString!==Object.prototype.toString)return d.toString()===m.toString();let E=Object.keys(d);if((v=E.length)!==Object.keys(m).length)return!1;for(_=v;0!=_--;)if(!Object.prototype.hasOwnProperty.call(m,E[_]))return!1;for(_=v;0!=_--;){let v=E[_];if(v&&!deepEqual(d[v],m[v]))return!1}return!0}return d!=d&&m!=m}var findAndReplace=(d,{find:m,replace:v})=>d&&m(d)?v(d):"object"!=typeof d?d:Array.isArray(d)?d.map(d=>findAndReplace(d,{find:m,replace:v})):d instanceof Object?Object.entries(d).reduce((d,[_,E])=>({...d,[_]:findAndReplace(E,{find:m,replace:v})}),{}):d;function deserialize(d){let m=JSON.parse(d),v=findAndReplace(m,{find:d=>"string"==typeof d&&d.startsWith("#bigint."),replace:d=>BigInt(d.replace("#bigint.",""))});return v}function getUnit(d){return"number"==typeof d?d:"wei"===d?0:Math.abs(ti.Bd[d])}function getReferenceKey(d,m){return d.slice(0,m).join(".")||"."}function getCutoff(d,m){let{length:v}=d;for(let _=0;_<v;++_)if(d[_]===m)return _+1;return 0}function createReplacer(d,m){let v="function"==typeof d,_="function"==typeof m,E=[],x=[];return function(T,A){if("object"==typeof A){if(E.length){let d=getCutoff(E,this);0===d?E[E.length]=this:(E.splice(d),x.splice(d)),x[x.length]=T;let v=getCutoff(E,A);if(0!==v)return _?m.call(this,T,A,getReferenceKey(x,v)):`[ref=${getReferenceKey(x,v)}]`}else E[0]=A,x[0]=T}return v?d.call(this,T,A):A}}function serialize(d,m,v,_){return JSON.stringify(d,createReplacer((d,v)=>{let _="bigint"==typeof v?`#bigint.${v.toString()}`:v;return m?.(d,_)||_},_),v??void 0)}var tf={getItem:d=>"",setItem:(d,m)=>null,removeItem:d=>null};function createStorage({deserialize:d=deserialize,key:m="wagmi",serialize:v=serialize,storage:_}){return{..._,getItem:(v,E=null)=>{let x=_.getItem(`${m}.${v}`);try{return x?d(x):E}catch(d){return console.warn(d),E}},setItem:(d,E)=>{if(null===E)_.removeItem(`${m}.${d}`);else try{_.setItem(`${m}.${d}`,v(E))}catch(d){console.error(d)}},removeItem:d=>_.removeItem(`${m}.${d}`)}}var tp="store",tg=class{constructor({autoConnect:d=!1,connectors:m=[new U._],publicClient:v,storage:A=createStorage({storage:"undefined"!=typeof window?window.localStorage:tf}),logger:j={warn:console.warn},webSocketPublicClient:F}){let W;__privateAdd(this,x),this.publicClients=new Map,this.webSocketPublicClients=new Map,__privateAdd(this,_,void 0),__privateAdd(this,E,void 0),this.args={autoConnect:d,connectors:m,logger:j,publicClient:v,storage:A,webSocketPublicClient:F};let K="disconnected";if(d)try{let d=A.getItem(tp),m=d?.state?.data;K=m?.account?"reconnecting":"connecting",W=m?.chain?.id}catch(d){}let Q="function"==typeof m?m():m;Q.forEach(d=>d.setStorage(A)),this.store=createStore(subscribeWithSelector(persist(()=>({connectors:Q,publicClient:this.getPublicClient({chainId:W}),status:K,webSocketPublicClient:this.getWebSocketPublicClient({chainId:W})}),{name:tp,storage:A,partialize:m=>({...d&&{data:{account:m?.data?.account,chain:m?.data?.chain}},chains:m?.chains}),version:2}))),this.storage=A,__privateSet(this,E,A?.getItem("wallet")),__privateMethod(this,x,T).call(this),d&&"undefined"!=typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(d){let m="function"==typeof d?d(this.store.getState()):d;this.store.setState(m,!0)}clearState(){this.setState(d=>({...d,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),__privateSet(this,_,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(__privateGet(this,_))return;__privateSet(this,_,!0),this.setState(d=>({...d,status:d.data?.account?"reconnecting":"connecting"}));let d=__privateGet(this,E)?[...this.connectors].sort(d=>d.id===__privateGet(this,E)?-1:1):this.connectors,m=!1;for(let v of d){if(!v.ready||!v.isAuthorized)continue;let d=await v.isAuthorized();if(!d)continue;let _=await v.connect();this.setState(d=>({...d,connector:v,chains:v?.chains,data:_,status:"connected"})),m=!0;break}return m||this.setState(d=>({...d,data:void 0,status:"disconnected"})),__privateSet(this,_,!1),this.data}setConnectors(d){this.args={...this.args,connectors:d};let m="function"==typeof d?d():d;m.forEach(d=>d.setStorage(this.args.storage)),this.setState(d=>({...d,connectors:m}))}getPublicClient({chainId:d}={}){let m=this.publicClients.get(-1);if(m&&m?.chain.id===d||(m=this.publicClients.get(d??-1)))return m;let{publicClient:v}=this.args;return m="function"==typeof v?v({chainId:d}):v,this.publicClients.set(d??-1,m),m}setPublicClient(d){let m=this.data?.chain?.id;this.args={...this.args,publicClient:d},this.publicClients.clear(),this.setState(d=>({...d,publicClient:this.getPublicClient({chainId:m})}))}getWebSocketPublicClient({chainId:d}={}){let m=this.webSocketPublicClients.get(-1);if(m&&m?.chain.id===d||(m=this.webSocketPublicClients.get(d??-1)))return m;let{webSocketPublicClient:v}=this.args;return(m="function"==typeof v?v({chainId:d}):v)&&this.webSocketPublicClients.set(d??-1,m),m}setWebSocketPublicClient(d){let m=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:d},this.webSocketPublicClients.clear(),this.setState(d=>({...d,webSocketPublicClient:this.getWebSocketPublicClient({chainId:m})}))}setLastUsedConnector(d=null){this.storage?.setItem("wallet",d)}};function createConfig(d){let m=new tg(d);return A=m,m}function getConfig(){if(!A)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return A}async function connect({chainId:d,connector:m}){let v=getConfig(),_=v.connector;if(_&&m.id===_.id)throw new tu;try{v.setState(d=>({...d,status:"connecting"}));let _=await m.connect({chainId:d});return v.setLastUsedConnector(m.id),v.setState(d=>({...d,connector:m,chains:m?.chains,data:_,status:"connected"})),v.storage.setItem("connected",!0),{..._,connector:m}}catch(d){throw v.setState(d=>({...d,status:d.connector?"connected":"disconnected"})),d}}async function disconnect(){let d=getConfig();d.connector&&await d.connector.disconnect(),d.clearState(),d.storage.removeItem("connected")}_=new WeakMap,E=new WeakMap,x=new WeakSet,T=function(){let onChange=d=>{this.setState(m=>({...m,data:{...m.data,...d}}))},onDisconnect=()=>{this.clearState()},onError=d=>{this.setState(m=>({...m,error:d}))};this.store.subscribe(({connector:d})=>d,(d,m)=>{m?.off?.("change",onChange),m?.off?.("disconnect",onDisconnect),m?.off?.("error",onError),d&&(d.on?.("change",onChange),d.on?.("disconnect",onDisconnect),d.on?.("error",onError))});let{publicClient:d,webSocketPublicClient:m}=this.args;("function"==typeof d||"function"==typeof m)&&this.store.subscribe(({data:d})=>d?.chain?.id,d=>{this.setState(m=>({...m,publicClient:this.getPublicClient({chainId:d}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:d})}))})};var tm=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],tb=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function getPublicClient({chainId:d}={}){let m=getConfig();return d&&m.getPublicClient({chainId:d})||m.publicClient}async function getWalletClient({chainId:d}={}){let m=getConfig(),v=await m.connector?.getWalletClient?.({chainId:d})||null;return v}function watchPublicClient(d,m){let v=getConfig(),handleChange=async()=>m(getPublicClient(d)),_=v.subscribe(({publicClient:d})=>d,handleChange);return _}function watchWalletClient({chainId:d},m){let v=getConfig(),handleChange=async({chainId:v})=>{if(d&&v&&d!==v)return;let _=await getWalletClient({chainId:d});return getConfig().connector?m(_):m(null)},_=v.subscribe(({data:d,connector:m})=>({account:d?.account,chainId:d?.chain?.id,connector:m}),handleChange,{equalityFn:shallow$1});return _}async function chunk_TSH6VVF4_multicall({chainId:d,contracts:m,blockNumber:v,blockTag:_,...E}){let x=getPublicClient({chainId:d});if(!x.chains)throw new td;if(d&&x.chain.id!==d)throw new tc({chainId:d});return x.multicall({allowFailure:E.allowFailure??!0,blockNumber:v,blockTag:_,contracts:m})}async function chunk_TSH6VVF4_readContract({address:d,account:m,chainId:v,abi:_,args:E,functionName:x,blockNumber:T,blockTag:A}){let j=getPublicClient({chainId:v});return j.readContract({abi:_,address:d,account:m,functionName:x,args:E,blockNumber:T,blockTag:A})}async function readContracts({contracts:d,blockNumber:m,blockTag:v,..._}){let{allowFailure:E=!0}=_;try{let _=getPublicClient(),x=d.reduce((d,m,v)=>{let E=m.chainId??_.chain.id;return{...d,[E]:[...d[E]||[],{contract:m,index:v}]}},{}),T=(await Promise.all(Object.entries(x).map(([d,_])=>chunk_TSH6VVF4_multicall({allowFailure:E,chainId:parseInt(d),contracts:_.map(({contract:d})=>d),blockNumber:m,blockTag:v})))).flat(),A=Object.values(x).flatMap(d=>d.map(({index:d})=>d));return T.reduce((d,m,v)=>(d&&(d[A[v]]=m),d),[])}catch(_){if(_ instanceof ea.uq)throw _;let promises=()=>d.map(d=>chunk_TSH6VVF4_readContract({...d,blockNumber:m,blockTag:v}));if(E)return(await Promise.allSettled(promises())).map(d=>"fulfilled"===d.status?{result:d.value,status:"success"}:{error:d.reason,result:void 0,status:"failure"});return await Promise.all(promises())}}async function fetchBalance({address:d,chainId:m,formatUnits:v,token:_}){let E=getConfig(),x=getPublicClient({chainId:m});if(_){let fetchContractBalance=async({abi:E})=>{let x={abi:E,address:_,chainId:m},[T,A,j]=await readContracts({allowFailure:!1,contracts:[{...x,functionName:"balanceOf",args:[d]},{...x,functionName:"decimals"},{...x,functionName:"symbol"}]});return{decimals:A,formatted:(0,to.b)(T??"0",getUnit(v??A)),symbol:j,value:T}};try{return await fetchContractBalance({abi:tm})}catch(d){if(d instanceof ea.uq){let{symbol:d,...m}=await fetchContractBalance({abi:tb});return{symbol:(0,eT.rR)((0,ee.f)(d,{dir:"right"})),...m}}throw d}}let T=[...E.publicClient.chains||[],...E.chains??[]],A=await x.getBalance({address:d}),j=T.find(d=>d.id===x.chain.id);return{decimals:j?.nativeCurrency.decimals??18,formatted:(0,to.b)(A??"0",getUnit(v??18)),symbol:j?.nativeCurrency.symbol??"ETH",value:A}}function getAccount(){let{data:d,connector:m,status:v}=getConfig();switch(v){case"connected":return{address:d?.account,connector:m,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:v};case"reconnecting":return{address:d?.account,connector:m,isConnected:!!d?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:v};case"connecting":return{address:d?.account,connector:m,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:v};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:v}}}function getNetwork(){let d=getConfig(),m=d.data?.chain?.id,v=d.chains??[],_=[...d.publicClient?.chains||[],...v].find(d=>d.id===m)??{id:m,name:`Chain ${m}`,network:`${m}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:m?{..._,...d.data?.chain,id:m}:void 0,chains:v}}async function switchNetwork({chainId:d}){let{connector:m}=getConfig();if(!m)throw new tr.N;if(!m.switchChain)throw new th({connector:m});return m.switchChain(d)}function watchAccount(d,{selector:m=d=>d}={}){let v=getConfig(),_=v.subscribe(({data:d,connector:v,status:_})=>m({address:d?.account,connector:v,status:_}),()=>d(getAccount()),{equalityFn:shallow$1});return _}function watchNetwork(d,{selector:m=d=>d}={}){let v=getConfig(),_=v.subscribe(({data:d,chains:v})=>m({chainId:d?.chain?.id,chains:v}),()=>d(getNetwork()),{equalityFn:shallow$1});return _}async function fetchEnsAddress({chainId:d,name:m}){let{normalize:_}=await v.e(321).then(v.bind(v,82321)),E=getPublicClient({chainId:d}),x=await E.getEnsAddress({name:_(m)});try{if("0x0000000000000000000000000000000000000000"===x)return null;return x?(0,ta.K)(x):null}catch(d){return null}}async function fetchEnsAvatar({name:d,chainId:m}){let{normalize:_}=await v.e(321).then(v.bind(v,82321)),E=getPublicClient({chainId:m}),x=await E.getEnsAvatar({name:_(d)});return x}async function fetchEnsName({address:d,chainId:m}){let v=getPublicClient({chainId:m});return v.getEnsName({address:(0,ta.K)(d)})}async function prepareSendTransaction({accessList:d,account:m,chainId:v,data:_,gas:E,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,nonce:j,to:U,value:F,walletClient:W}){let K=getPublicClient({chainId:v}),Q=W??await getWalletClient({chainId:v});if(!Q)throw new tr.N;v&&assertActiveChain({chainId:v});let X=(U&&!(0,ts.U)(U)?await fetchEnsAddress({name:U}):U)||void 0;if(X&&!(0,ts.U)(X))throw Error("Invalid address");let ee=void 0===E?await K.estimateGas({accessList:d,account:Q.account,data:_,gas:E??void 0,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,nonce:j,to:X,value:F}):E||void 0;return{accessList:d,account:m,data:_,gas:ee,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,mode:"prepared",nonce:j,to:X,value:F,...v?{chainId:v}:{}}}async function sendTransaction({accessList:d,account:m,chainId:v,data:_,gas:E,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,mode:j,nonce:U,to:F,value:W}){let K;let Q=await getWalletClient({chainId:v});if(!Q)throw new tr.N;v&&assertActiveChain({chainId:v}),K="prepared"===j?{account:m,accessList:d,chain:null,data:_,gas:E,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,nonce:U,to:F,value:W}:await prepareSendTransaction({accessList:d,account:m,chainId:v,data:_,gas:E||null,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,nonce:U,to:F,value:W});let X=await Q.sendTransaction({...K,chain:v?{id:v}:null});return{hash:X}}function assertActiveChain({chainId:d}){let{chain:m,chains:v}=getNetwork(),_=m?.id;if(_&&d!==_)throw new tl({activeChain:v.find(d=>d.id===_)?.name??`Chain ${_}`,targetChain:v.find(m=>m.id===d)?.name??`Chain ${d}`})}},19201:(d,m,v)=>{"use strict";v.d(m,{AccountController:()=>U,ApiController:()=>ep,WM:()=>ee,fz:()=>eI,Lr:()=>eD,ConnectionController:()=>eS,ConnectorController:()=>ei,bq:()=>T,j1:()=>A,Xs:()=>ew,IN:()=>eE,NetworkController:()=>el,OptionsController:()=>eu,Ie:()=>ea,RouterController:()=>e_,SnackController:()=>eO,MO:()=>Q,ThemeController:()=>eR});var _=v(42939);function subscribeKey(d,m,v,E){let x=d[m];return(0,_.Ld)(d,()=>{let _=d[m];Object.is(x,_)||v(x=_)},E)}Symbol();let E=new WeakMap,x=new WeakMap,markPending=(d,m)=>{let v=E.get(d);v&&(v[0].forEach(m=>{let{d:v}=m;d!==v&&markPending(v)}),++v[2],m&&v[3].add(m))},unmarkPending=d=>{let m=E.get(d);m&&(--m[2],m[2]||(m[3].forEach(d=>d()),m[3].clear()),m[0].forEach(m=>{let{d:v}=m;d!==v&&unmarkPending(v)}))},T={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},A={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let d=navigator.userAgent.toLowerCase();return A.isMobile()&&d.includes("android")},isIos(){let d=navigator.userAgent.toLowerCase();return A.isMobile()&&(d.includes("iphone")||d.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:d=>!d||d-Date.now()<=T.TEN_SEC_MS,isAllowedRetry:d=>Date.now()-d>=T.ONE_SEC_MS,copyToClopboard(d){navigator.clipboard.writeText(d)},getPairingExpiry:()=>Date.now()+T.FOUR_MINUTES_MS,getPlainAddress:d=>d.split(":")[2],wait:async d=>new Promise(m=>{setTimeout(m,d)}),debounce(d,m=500){let v;return(..._)=>{function next(){d(..._)}v&&clearTimeout(v),v=setTimeout(next,m)}},isHttpUrl:d=>d.startsWith("http://")||d.startsWith("https://"),formatNativeUrl(d,m){if(A.isHttpUrl(d))return this.formatUniversalUrl(d,m);let v=d;v.includes("://")||(v=d.replaceAll("/","").replaceAll(":",""),v=`${v}://`),v.endsWith("/")||(v=`${v}/`);let _=encodeURIComponent(m);return{redirect:`${v}wc?uri=${_}`,href:v}},formatUniversalUrl(d,m){if(!A.isHttpUrl(d))return this.formatNativeUrl(d,m);let v=d;v.endsWith("/")||(v=`${v}/`);let _=encodeURIComponent(m);return{redirect:`${v}wc?uri=${_}`,href:v}},openHref(d,m){window.open(d,m,"noreferrer noopener")},async preloadImage(d){let m=new Promise((m,v)=>{let _=new Image;_.onload=m,_.onerror=v,_.crossOrigin="anonymous",_.src=d});return Promise.race([m,A.wait(2e3)])},formatBalance(d,m){let v;if("0"===d)v="0.000";else if("string"==typeof d){let m=Number(d);m&&(v=m.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return v?`${v} ${m}`:"0.000"},isRestrictedRegion(){try{let{timeZone:d}=new Intl.DateTimeFormat().resolvedOptions(),m=d.toUpperCase();return T.RESTRICTED_TIMEZONES.includes(m)}catch{return!1}},getApiUrl:()=>A.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>A.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>A.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,d=>{let m=16*Math.random()|0;return("x"===d?m:3&m|8).toString(16)})},j=(0,_.sj)({isConnected:!1}),U={state:j,subscribe:d=>(0,_.Ld)(j,()=>d(j)),subscribeKey:(d,m)=>subscribeKey(j,d,m),setIsConnected(d){j.isConnected=d},setCaipAddress(d){j.caipAddress=d,j.address=d?A.getPlainAddress(d):void 0},setBalance(d,m){j.balance=d,j.balanceSymbol=m},setProfileName(d){j.profileName=d},setProfileImage(d){j.profileImage=d},setAddressExplorerUrl(d){j.addressExplorerUrl=d},resetAccount(){j.isConnected=!1,j.caipAddress=void 0,j.address=void 0,j.balance=void 0,j.balanceSymbol=void 0,j.profileName=void 0,j.profileImage=void 0,j.addressExplorerUrl=void 0}};let FetchUtil=class FetchUtil{constructor({baseUrl:d}){this.baseUrl=d}async get({headers:d,...m}){let v=this.createUrl(m),_=await fetch(v,{method:"GET",headers:d});return _.json()}async getBlob({headers:d,...m}){let v=this.createUrl(m),_=await fetch(v,{method:"GET",headers:d});return _.blob()}async post({body:d,headers:m,...v}){let _=this.createUrl(v),E=await fetch(_,{method:"POST",headers:m,body:d?JSON.stringify(d):void 0});return E.json()}async put({body:d,headers:m,...v}){let _=this.createUrl(v),E=await fetch(_,{method:"PUT",headers:m,body:d?JSON.stringify(d):void 0});return E.json()}async delete({body:d,headers:m,...v}){let _=this.createUrl(v),E=await fetch(_,{method:"DELETE",headers:m,body:d?JSON.stringify(d):void 0});return E.json()}createUrl({path:d,params:m}){let v=new URL(d,this.baseUrl);return m&&Object.entries(m).forEach(([d,m])=>{m&&v.searchParams.append(d,m)}),v}};let F="WALLETCONNECT_DEEPLINK_CHOICE",W="@w3m/recent",K="@w3m/connected_wallet_image_url",Q={setWalletConnectDeepLink({href:d,name:m}){try{localStorage.setItem(F,JSON.stringify({href:d,name:m}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let d=localStorage.getItem(F);if(d)return JSON.parse(d)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(F)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(d){try{let m=Q.getRecentWallets(),v=m.find(m=>m.id===d.id);v||(m.unshift(d),m.length>2&&m.pop(),localStorage.setItem(W,JSON.stringify(m)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let d=localStorage.getItem(W);return d?JSON.parse(d):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(d){try{localStorage.setItem(K,d)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(K)}catch{console.info("Unable to set Connected Wallet Image Url")}}},X=(0,_.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),ee={state:X,subscribeNetworkImages:d=>(0,_.Ld)(X.networkImages,()=>d(X.networkImages)),subscribeKey:(d,m)=>subscribeKey(X,d,m),setWalletImage(d,m){X.walletImages[d]=m},setNetworkImage(d,m){X.networkImages[d]=m},setConnectorImage(d,m){X.connectorImages[d]=m},setTokenImage(d,m){X.tokenImages[d]=m}},er=(0,_.sj)({connectors:[]}),ei={state:er,subscribeKey:(d,m)=>subscribeKey(er,d,m),setConnectors(d){er.connectors=d.map(d=>(0,_.iH)(d))},addConnector(d){er.connectors.push((0,_.iH)(d))},getConnectors:()=>er.connectors},eo=(0,_.sj)({open:!1,selectedNetworkId:void 0}),ea={state:eo,subscribe:d=>(0,_.Ld)(eo,()=>d(eo)),set(d){Object.assign(eo,{...eo,...d})}},es=(0,_.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),el={state:es,subscribeKey:(d,m)=>subscribeKey(es,d,m),_getClient(){if(!es._client)throw Error("NetworkController client not set");return es._client},setClient(d){es._client=(0,_.iH)(d)},setCaipNetwork(d){es.caipNetwork=d,ea.set({selectedNetworkId:d?.id})},setDefaultCaipNetwork(d){es.caipNetwork=d,ea.set({selectedNetworkId:d?.id}),es.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(d){es.requestedCaipNetworks=d},async getApprovedCaipNetworksData(){let d=await this._getClient().getApprovedCaipNetworksData();es.supportsAllNetworks=d.supportsAllNetworks,es.approvedCaipNetworkIds=d.approvedCaipNetworkIds},async switchActiveNetwork(d){await this._getClient().switchCaipNetwork(d),es.caipNetwork=d},resetNetwork(){es.isDefaultCaipNetwork||(es.caipNetwork=void 0),es.approvedCaipNetworkIds=void 0,es.supportsAllNetworks=!0}},ec=(0,_.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),eu={state:ec,subscribeKey:(d,m)=>subscribeKey(ec,d,m),setProjectId(d){ec.projectId=d},setIncludeWalletIds(d){ec.includeWalletIds=d},setExcludeWalletIds(d){ec.excludeWalletIds=d},setFeaturedWalletIds(d){ec.featuredWalletIds=d},setTokens(d){ec.tokens=d},setTermsConditionsUrl(d){ec.termsConditionsUrl=d},setPrivacyPolicyUrl(d){ec.privacyPolicyUrl=d},setCustomWallets(d){ec.customWallets=d},setEnableAnalytics(d){ec.enableAnalytics=d},setSdkVersion(d){ec.sdkVersion=d},setMetadata(d){ec.metadata=d}},ed=A.getApiUrl(),eh=new FetchUtil({baseUrl:ed}),ef=(0,_.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),ep={state:ef,subscribeKey:(d,m)=>subscribeKey(ef,d,m),_getApiHeaders(){let{projectId:d,sdkType:m,sdkVersion:v}=eu.state;return{"x-project-id":d,"x-sdk-type":m,"x-sdk-version":v}},async _fetchWalletImage(d){let m=`${eh.baseUrl}/getWalletImage/${d}`,v=await eh.getBlob({path:m,headers:ep._getApiHeaders()});ee.setWalletImage(d,URL.createObjectURL(v))},async _fetchNetworkImage(d){let m=`${eh.baseUrl}/public/getAssetImage/${d}`,v=await eh.getBlob({path:m,headers:ep._getApiHeaders()});ee.setNetworkImage(d,URL.createObjectURL(v))},async _fetchConnectorImage(d){let m=`${eh.baseUrl}/public/getAssetImage/${d}`,v=await eh.getBlob({path:m,headers:ep._getApiHeaders()});ee.setConnectorImage(d,URL.createObjectURL(v))},async fetchNetworkImages(){let{requestedCaipNetworks:d}=el.state,m=d?.map(({imageId:d})=>d).filter(Boolean);m&&await Promise.allSettled(m.map(d=>ep._fetchNetworkImage(d)))},async fetchConnectorImages(){let{connectors:d}=ei.state,m=d.map(({imageId:d})=>d).filter(Boolean);await Promise.allSettled(m.map(d=>ep._fetchConnectorImage(d)))},async fetchFeaturedWallets(){let{featuredWalletIds:d}=eu.state;if(d?.length){let{data:m}=await eh.get({path:"/getWallets",headers:ep._getApiHeaders(),params:{page:"1",entries:d?.length?String(d.length):"4",include:d?.join(",")}});m.sort((m,v)=>d.indexOf(m.id)-d.indexOf(v.id));let v=m.map(d=>d.image_id).filter(Boolean);await Promise.allSettled(v.map(d=>ep._fetchWalletImage(d))),ef.featured=m}},async fetchRecommendedWallets(){let{includeWalletIds:d,excludeWalletIds:m,featuredWalletIds:v}=eu.state,_=[...m??[],...v??[]].filter(Boolean),{data:E,count:x}=await eh.get({path:"/getWallets",headers:ep._getApiHeaders(),params:{page:"1",entries:"4",include:d?.join(","),exclude:_?.join(",")}}),T=Q.getRecentWallets(),A=E.map(d=>d.image_id).filter(Boolean),j=T.map(d=>d.image_id).filter(Boolean);await Promise.allSettled([...A,...j].map(d=>ep._fetchWalletImage(d))),ef.recommended=E,ef.count=x??0},async fetchWallets({page:d}){let{includeWalletIds:m,excludeWalletIds:v,featuredWalletIds:_}=eu.state,E=[...ef.recommended.map(({id:d})=>d),...v??[],..._??[]].filter(Boolean),{data:x,count:T}=await eh.get({path:"/getWallets",headers:ep._getApiHeaders(),params:{page:String(d),entries:"40",include:m?.join(","),exclude:E.join(",")}}),j=x.map(d=>d.image_id).filter(Boolean);await Promise.allSettled([...j.map(d=>ep._fetchWalletImage(d)),A.wait(300)]),ef.wallets=[...ef.wallets,...x],ef.count=T>ef.count?T:ef.count,ef.page=d},async searchWallet({search:d}){let{includeWalletIds:m,excludeWalletIds:v}=eu.state;ef.search=[];let{data:_}=await eh.get({path:"/getWallets",headers:ep._getApiHeaders(),params:{page:"1",entries:"100",search:d,include:m?.join(","),exclude:v?.join(",")}}),E=_.map(d=>d.image_id).filter(Boolean);await Promise.allSettled([...E.map(d=>ep._fetchWalletImage(d)),A.wait(300)]),ef.search=_},prefetch(){ef.prefetchPromise=Promise.race([Promise.allSettled([ep.fetchFeaturedWallets(),ep.fetchRecommendedWallets(),ep.fetchNetworkImages(),ep.fetchConnectorImages()]),A.wait(3e3)])}},eg=A.getAnalyticsUrl(),em=new FetchUtil({baseUrl:eg}),eb=["MODAL_CREATED"],ey=(0,_.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),ew={state:ey,subscribe:d=>(0,_.Ld)(ey,()=>d(ey)),_getApiHeaders(){let{projectId:d,sdkType:m,sdkVersion:v}=eu.state;return{"x-project-id":d,"x-sdk-type":m,"x-sdk-version":v}},async _sendAnalyticsEvent(d){try{if(eb.includes(d.data.event)||"undefined"==typeof window)return;await em.post({path:"/e",headers:ew._getApiHeaders(),body:{eventId:A.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:d.timestamp,props:d.data}})}catch{}},sendEvent(d){ey.timestamp=Date.now(),ey.data=d,eu.state.enableAnalytics&&ew._sendAnalyticsEvent(ey)}},ev=(0,_.sj)({view:"Connect",history:["Connect"]}),e_={state:ev,subscribeKey:(d,m)=>subscribeKey(ev,d,m),push(d,m){d!==ev.view&&(ev.view=d,ev.history.push(d),ev.data=m)},reset(d){ev.view=d,ev.history=[d]},replace(d){ev.history.length>1&&ev.history.at(-1)!==d&&(ev.view=d,ev.history[ev.history.length-1]=d)},goBack(){if(ev.history.length>1){ev.history.pop();let[d]=ev.history.slice(-1);d&&(ev.view=d)}}},eC=(0,_.sj)({open:!1}),eE={state:eC,subscribeKey:(d,m)=>subscribeKey(eC,d,m),async open(d){await ep.state.prefetchPromise,d?.view?e_.reset(d.view):U.state.isConnected?e_.reset("Account"):e_.reset("Connect"),eC.open=!0,ea.set({open:!0}),ew.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){eC.open=!1,ea.set({open:!1}),ew.sendEvent({type:"track",event:"MODAL_CLOSE"})}},ex=(0,_.sj)({wcError:!1,buffering:!1}),eS={state:ex,subscribeKey:(d,m)=>subscribeKey(ex,d,m),_getClient(){if(!ex._client)throw Error("ConnectionController client not set");return ex._client},setClient(d){ex._client=(0,_.iH)(d)},connectWalletConnect(){ex.wcPromise=this._getClient().connectWalletConnect(d=>{ex.wcUri=d,ex.wcPairingExpiry=A.getPairingExpiry()})},async connectExternal(d){await this._getClient().connectExternal?.(d)},checkInstalled(d){return this._getClient().checkInstalled?.(d)},resetWcConnection(){ex.wcUri=void 0,ex.wcPairingExpiry=void 0,ex.wcPromise=void 0,ex.wcLinking=void 0,ex.recentWallet=void 0,Q.deleteWalletConnectDeepLink()},setWcLinking(d){ex.wcLinking=d},setWcError(d){ex.wcError=d,ex.buffering=!1},setRecentWallet(d){ex.recentWallet=d},setBuffering(d){ex.buffering=d},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},eP=(0,_.sj)({message:"",variant:"success",open:!1}),eO={state:eP,subscribeKey:(d,m)=>subscribeKey(eP,d,m),showSuccess(d){eP.message=d,eP.variant="success",eP.open=!0},showError(d){eP.message=d,eP.variant="error",eP.open=!0},hide(){eP.open=!1}},ek=(0,_.sj)({themeMode:"dark",themeVariables:{}}),eR={state:ek,subscribe:d=>(0,_.Ld)(ek,()=>d(ek)),setThemeMode(d){ek.themeMode=d},setThemeVariables(d){ek.themeVariables={...ek.themeVariables,...d}}},eT=A.getBlockchainApiUrl(),eA=new FetchUtil({baseUrl:eT}),eD={fetchIdentity:({caipChainId:d,address:m})=>eA.get({path:`/v1/identity/${m}`,params:{chainId:d,projectId:eu.state.projectId}})},eI={getWalletImage:d=>d?.image_url?d?.image_url:d?.image_id?ee.state.walletImages[d.image_id]:void 0,getNetworkImage:d=>d?.imageUrl?d?.imageUrl:d?.imageId?ee.state.networkImages[d.imageId]:void 0,getConnectorImage:d=>d?.imageUrl?d.imageUrl:d?.imageId?ee.state.connectorImages[d.imageId]:void 0}},72161:(d,m,v)=>{"use strict";v.r(m),v.d(m,{W3mModal:()=>U});var _=v(19201),E=v(92967),x=v(7712),T=v(86968);let A=x.iv`
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
`;var __decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let j="scroll-lock",U=class extends x.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=_.IN.state.open,this.initializeTheming(),_.ApiController.prefetch(),this.unsubscribe.push(_.IN.subscribeKey("open",d=>d?this.onOpen():this.onClose())),_.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(d=>d()),this.onRemoveKeyboardListener()}render(){return this.open?x.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(d){d.target===d.currentTarget&&_.IN.close()}initializeTheming(){let{themeVariables:d,themeMode:m}=_.ThemeController.state,v=E.UiHelperUtil.getColorTheme(m);(0,E.initializeTheming)(d,v)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,_.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let d=document.createElement("style");d.dataset.w3m=j,d.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(d)}onScrollUnlock(){let d=document.head.querySelector(`style[data-w3m="${j}"]`);d&&d.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let d=this.shadowRoot?.querySelector("wui-card");d?.focus(),window.addEventListener("keydown",m=>{if("Escape"===m.key)_.IN.close();else if("Tab"===m.key){let{tagName:v}=m.target;!v||v.includes("W3M-")||v.includes("WUI-")||d?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};U.styles=A,__decorate([(0,T.SB)()],U.prototype,"open",void 0),U=__decorate([(0,E.customElement)("w3m-modal")],U)},92967:(d,m,v)=>{"use strict";let _,E,x;v.r(m),v.d(m,{UiHelperUtil:()=>tE,WuiAccountButton:()=>tA,WuiAllWalletsImage:()=>tM,WuiAvatar:()=>tO,WuiButton:()=>tL,WuiCard:()=>W,WuiCardSelect:()=>tq,WuiCardSelectLoader:()=>tB,WuiChip:()=>tV,WuiConnectButton:()=>tY,WuiCtaButton:()=>tQ,WuiEmailInput:()=>t5,WuiFlex:()=>tS,WuiGrid:()=>rH,WuiIcon:()=>eJ,WuiIconBox:()=>tR,WuiIconLink:()=>t4,WuiImage:()=>e1,WuiInputElement:()=>t9,WuiInputNumeric:()=>rr,WuiInputText:()=>t2,WuiLink:()=>ro,WuiListItem:()=>rs,WuiListTransaction:()=>rg,WuiListWallet:()=>rw,WuiLoadingHexagon:()=>e3,WuiLoadingSpinner:()=>e6,WuiLoadingThumbnail:()=>e8,WuiLogo:()=>r_,WuiLogoSelect:()=>rE,WuiNetworkButton:()=>rS,WuiNetworkImage:()=>tH,WuiOtp:()=>rO,WuiQrCode:()=>rA,WuiSearchBar:()=>rI,WuiSeparator:()=>rq,WuiShimmer:()=>e7,WuiSnackbar:()=>rM,WuiTabs:()=>rL,WuiTag:()=>rb,WuiText:()=>to,WuiTooltip:()=>r$,WuiTransactionVisual:()=>rf,WuiVisual:()=>t_,WuiVisualThumbnail:()=>rF,WuiWalletImage:()=>tI,customElement:()=>customElement,initializeTheming:()=>initializeTheming,setColorTheme:()=>setColorTheme,setThemeVariables:()=>setThemeVariables});var T=v(7712);function initializeTheming(d,m){_=document.createElement("style"),E=document.createElement("style"),x=document.createElement("style"),_.textContent=createRootStyles(d).core.cssText,E.textContent=createRootStyles(d).dark.cssText,x.textContent=createRootStyles(d).light.cssText,document.head.appendChild(_),document.head.appendChild(E),document.head.appendChild(x),setColorTheme(m)}function setColorTheme(d){E&&x&&("light"===d?(E.removeAttribute("media"),x.media="enabled"):(x.removeAttribute("media"),E.media="enabled"))}function setThemeVariables(d){_&&E&&x&&(_.textContent=createRootStyles(d).core.cssText,E.textContent=createRootStyles(d).dark.cssText,x.textContent=createRootStyles(d).light.cssText)}function createRootStyles(d){return{core:T.iv`
      :root {
        --w3m-color-mix-strength: ${(0,T.$m)(d?.["--w3m-color-mix-strength"]?`${d["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,T.$m)(d?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${(0,T.$m)(d?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,T.$m)(d?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,T.$m)(d?.["--w3m-z-index"]||100)};

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
    `,light:T.iv`
      :root {
        --w3m-color-mix: ${(0,T.$m)(d?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,T.$m)(d?.["--w3m-accent"]||"#47a1ff")};
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
    `,dark:T.iv`
      :root {
        --w3m-color-mix: ${(0,T.$m)(d?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,T.$m)(d?.["--w3m-accent"]||"#3396ff")};
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
    `}}let A=T.iv`
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
`,j=T.iv`
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
`,U=T.iv`
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
`;function standardCustomElement(d,m){let{kind:v,elements:_}=m;return{kind:v,elements:_,finisher(m){customElements.get(d)||customElements.define(d,m)}}}function legacyCustomElement(d,m){return customElements.get(d)||customElements.define(d,m),m}function customElement(d){return function(m){return"function"==typeof m?legacyCustomElement(d,m):standardCustomElement(d,m)}}let F=T.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`,W=class extends T.oi{render(){return T.dy`<slot></slot>`}};W.styles=[A,F],W=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([customElement("wui-card")],W);var K=v(86968);let Q=T.iv`
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
`,X=T.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,ee=T.YP`
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
</svg>`,er=T.YP`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,ei=T.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eo=T.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,ea=T.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,es=T.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,el=T.YP`<svg fill="none" viewBox="0 0 20 20">
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
</svg>`,ec=T.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,eu=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ed=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eh=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,ef=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ep=T.YP`<svg width="36" height="36" fill="none">
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
</svg>`,eg=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,em=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eb=T.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,ey=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,ew=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,ev=T.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,e_=T.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,eC=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eE=T.YP`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,ex=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,eS=T.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,eP=T.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eO=T.YP`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,ek=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eR=T.YP`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,eT=T.YP`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,eA=T.YP`<svg fill="none" viewBox="0 0 16 16">
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
</svg>`,eD=T.YP`<svg fill="none" viewBox="0 0 14 15">
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
</svg>`,eI=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,eN=T.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,eM=T.YP`<svg fill="none" viewBox="0 0 22 20">
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
</svg>`,ej=T.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,eL=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,eU=T.YP` <svg
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
</svg>`,e$=T.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,eB=T.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,eF=T.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,eW=T.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eH=T.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ez=T.YP`<svg fill="none" viewBox="0 0 40 40">
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
</svg> `,eq=T.YP`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,eG=T.YP`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,eV=T.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,eK=T.YP`
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
`,eY=T.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,eZ=T.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,eQ=T.YP`<svg fill="none" viewBox="0 0 20 20">
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
</svg>`;var wui_icon_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eX={allWallets:X,appStore:ee,chromeStore:ep,apple:er,arrowBottom:ei,arrowLeft:eo,arrowRight:ea,arrowTop:es,browser:el,checkmark:ec,chevronBottom:eu,chevronLeft:ed,chevronRight:eh,chevronTop:ef,clock:eg,close:em,compass:ey,coinPlaceholder:eb,copy:ew,cursor:ev,desktop:e_,disconnect:eC,discord:eE,etherscan:ex,extension:eS,externalLink:eP,facebook:eO,filters:ek,github:eR,google:eT,helpCircle:eA,infoCircle:eD,mail:eI,mobile:eN,networkPlaceholder:eM,nftPlaceholder:ej,off:eL,playStore:eU,qrCode:e$,refresh:eB,search:eF,swapHorizontal:eW,swapVertical:eH,telegram:ez,twitch:eq,twitter:eG,twitterIcon:eV,wallet:eY,walletConnect:eZ,walletPlaceholder:eK,warningCircle:eQ},eJ=class extends T.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,T.dy`${eX[this.name]}`}};eJ.styles=[A,U,Q],wui_icon_decorate([(0,K.Cb)()],eJ.prototype,"size",void 0),wui_icon_decorate([(0,K.Cb)()],eJ.prototype,"name",void 0),wui_icon_decorate([(0,K.Cb)()],eJ.prototype,"color",void 0),eJ=wui_icon_decorate([customElement("wui-icon")],eJ);let e0=T.iv`
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
`;var wui_image_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let e1=class extends T.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return T.dy`<img src=${this.src} alt=${this.alt} />`}};e1.styles=[A,U,e0],wui_image_decorate([(0,K.Cb)()],e1.prototype,"src",void 0),wui_image_decorate([(0,K.Cb)()],e1.prototype,"alt",void 0),e1=wui_image_decorate([customElement("wui-image")],e1);let e2=T.iv`
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
`,e3=class extends T.oi{render(){return T.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};e3.styles=[A,e2],e3=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([customElement("wui-loading-hexagon")],e3);let e5=T.iv`
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
`;var wui_loading_spinner_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let e6=class extends T.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,T.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};e6.styles=[A,e5],wui_loading_spinner_decorate([(0,K.Cb)()],e6.prototype,"color",void 0),wui_loading_spinner_decorate([(0,K.Cb)()],e6.prototype,"size",void 0),e6=wui_loading_spinner_decorate([customElement("wui-loading-spinner")],e6);let e4=T.iv`
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
`;var wui_loading_thumbnail_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let e8=class extends T.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let d=this.radius>50?50:this.radius,m=36-d;return T.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${d}
          stroke-dasharray="${116+m} ${245+m}"
          stroke-dashoffset=${360+1.75*m}
        />
      </svg>
    `}};e8.styles=[A,e4],wui_loading_thumbnail_decorate([(0,K.Cb)({type:Number})],e8.prototype,"radius",void 0),e8=wui_loading_thumbnail_decorate([customElement("wui-loading-thumbnail")],e8);let e9=T.iv`
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
`;var wui_shimmer_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let e7=class extends T.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,T.dy`<slot></slot>`}};e7.styles=[e9],wui_shimmer_decorate([(0,K.Cb)()],e7.prototype,"width",void 0),wui_shimmer_decorate([(0,K.Cb)()],e7.prototype,"height",void 0),wui_shimmer_decorate([(0,K.Cb)()],e7.prototype,"borderRadius",void 0),e7=wui_shimmer_decorate([customElement("wui-shimmer")],e7);var te=v(81162);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e=d=>(...m)=>({_$litDirective$:d,values:m});let i=class i{constructor(d){}get _$AU(){return this._$AM._$AU}_$AT(d,m,v){this._$Ct=d,this._$AM=m,this._$Ci=v}_$AS(d,m){return this.update(d,m)}update(d,m){return this.render(...m)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tr=e(class extends i{constructor(d){if(super(d),1!==d.type||"class"!==d.name||d.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(d){return" "+Object.keys(d).filter(m=>d[m]).join(" ")+" "}update(d,[m]){if(void 0===this.it){for(let v in this.it=new Set,void 0!==d.strings&&(this.st=new Set(d.strings.join(" ").split(/\s/).filter(d=>""!==d))),m)m[v]&&!this.st?.has(v)&&this.it.add(v);return this.render(m)}let v=d.element.classList;for(let d of this.it)d in m||(v.remove(d),this.it.delete(d));for(let d in m){let _=!!m[d];_===this.it.has(d)||this.st?.has(d)||(_?(v.add(d),this.it.add(d)):(v.remove(d),this.it.delete(d)))}return te.Jb}}),ti=T.iv`
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
`;var wui_text_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let to=class extends T.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let d={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,T.dy`<slot class=${tr(d)}></slot>`}};to.styles=[A,ti],wui_text_decorate([(0,K.Cb)()],to.prototype,"variant",void 0),wui_text_decorate([(0,K.Cb)()],to.prototype,"color",void 0),wui_text_decorate([(0,K.Cb)()],to.prototype,"align",void 0),to=wui_text_decorate([customElement("wui-text")],to);let ta=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,ts=T.YP`<svg viewBox="0 0 60 60" fill="none">
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
</svg> `,tl=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,tc=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,tu=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,td=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,th=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,tf=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,tp=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,tg=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg> `,tm=T.YP`<svg fill="none" viewBox="0 0 60 60">
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
</svg>`,tb=T.YP`<svg
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
</svg> `,ty=T.YP`<svg viewBox="0 0 60 60" fill="none">
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
</svg> `,tw=T.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var wui_visual_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tv={browser:ta,dao:ts,defi:tl,defiAlt:tc,eth:tu,layers:td,lock:th,login:tf,network:tp,nft:tg,noun:tm,profile:tb,system:ty},t_=class extends T.oi{constructor(){super(...arguments),this.name="browser"}render(){return T.dy`${tv[this.name]}`}};t_.styles=[A,tw],wui_visual_decorate([(0,K.Cb)()],t_.prototype,"name",void 0),t_=wui_visual_decorate([customElement("wui-visual")],t_);var tC=v(97521);let tE={getSpacingStyles:(d,m)=>Array.isArray(d)?d[m]?`var(--wui-spacing-${d[m]})`:void 0:"string"==typeof d?`var(--wui-spacing-${d})`:void 0,getFormattedDate:d=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(d),getHostName(d){let m=new URL(d);return m.hostname},getTruncateString:({string:d,charsStart:m,charsEnd:v,truncate:_})=>d.length<=m+v?d:"end"===_?`${d.substring(0,m)}...`:"start"===_?`...${d.substring(d.length-v)}`:`${d.substring(0,Math.floor(m))}...${d.substring(d.length-Math.floor(v))}`,generateAvatarColors(d){let m=d.toLowerCase().replace(/^0x/iu,""),v=m.substring(0,6),_=this.hexToRgb(v),E=[];for(let d=0;d<5;d+=1){let m=this.tintColor(_,.15*d);E.push(`rgb(${m[0]}, ${m[1]}, ${m[2]})`)}return`
    --local-color-1: ${E[0]};
    --local-color-2: ${E[1]};
    --local-color-3: ${E[2]};
    --local-color-4: ${E[3]};
    --local-color-5: ${E[4]};
   `},hexToRgb(d){let m=parseInt(d,16);return[m>>16&255,m>>8&255,255&m]},tintColor(d,m){let[v,_,E]=d;return[Math.round(v+(255-v)*m),Math.round(_+(255-_)*m),Math.round(E+(255-E)*m)]},isNumber:d=>/^[0-9]+$/u.test(d),getColorTheme:d=>d||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},tx=T.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var wui_flex_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tS=class extends T.oi{render(){return this.style.cssText=`
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
      padding-top: ${this.padding&&tE.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tE.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tE.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tE.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tE.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tE.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tE.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tE.getSpacingStyles(this.margin,3)};
    `,T.dy`<slot></slot>`}};tS.styles=[A,tx],wui_flex_decorate([(0,K.Cb)()],tS.prototype,"flexDirection",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"flexWrap",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"flexBasis",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"flexGrow",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"flexShrink",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"alignItems",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"justifyContent",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"columnGap",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"rowGap",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"gap",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"padding",void 0),wui_flex_decorate([(0,K.Cb)()],tS.prototype,"margin",void 0),tS=wui_flex_decorate([customElement("wui-flex")],tS);let tP=T.iv`
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
`;var wui_avatar_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tO=class extends T.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return T.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",T.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let d=tE.generateAvatarColors(this.address);return this.style.cssText=d,null}return this.dataset.variant="default",null}};tO.styles=[A,tP],wui_avatar_decorate([(0,K.Cb)()],tO.prototype,"imageSrc",void 0),wui_avatar_decorate([(0,K.Cb)()],tO.prototype,"alt",void 0),wui_avatar_decorate([(0,K.Cb)()],tO.prototype,"address",void 0),tO=wui_avatar_decorate([customElement("wui-avatar")],tO);let tk=T.iv`
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
`;var wui_icon_box_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tR=class extends T.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let d="xxs";switch(this.size){case"lg":d="lg";break;case"md":d="md";break;case"mdl":d="mdl";break;case"sm":d="xs";break;default:d="xxs"}let m="lg"===this.size,v="opaque"===this.background,_="accent-100"===this.backgroundColor&&v||"success-100"===this.backgroundColor&&v||"error-100"===this.backgroundColor&&v||"inverse-100"===this.backgroundColor&&v;return this.style.cssText=`
       --local-bg-value: ${_?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${_?"100%":m?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${m?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,T.dy` <wui-icon color=${this.iconColor} size=${d} name=${this.icon}></wui-icon> `}};tR.styles=[A,j,tk],wui_icon_box_decorate([(0,K.Cb)()],tR.prototype,"size",void 0),wui_icon_box_decorate([(0,K.Cb)()],tR.prototype,"backgroundColor",void 0),wui_icon_box_decorate([(0,K.Cb)()],tR.prototype,"iconColor",void 0),wui_icon_box_decorate([(0,K.Cb)()],tR.prototype,"background",void 0),wui_icon_box_decorate([(0,K.Cb)({type:Boolean})],tR.prototype,"border",void 0),wui_icon_box_decorate([(0,K.Cb)()],tR.prototype,"borderColor",void 0),wui_icon_box_decorate([(0,K.Cb)()],tR.prototype,"icon",void 0),tR=wui_icon_box_decorate([customElement("wui-icon-box")],tR);let tT=T.iv`
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
`;var wui_account_button_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tA=class extends T.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return T.dy`
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
            ${tE.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let d=this.networkSrc?T.dy`<wui-image src=${this.networkSrc}></wui-image>`:T.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return T.dy`
        ${d}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};tA.styles=[A,j,tT],wui_account_button_decorate([(0,K.Cb)()],tA.prototype,"networkSrc",void 0),wui_account_button_decorate([(0,K.Cb)()],tA.prototype,"avatarSrc",void 0),wui_account_button_decorate([(0,K.Cb)()],tA.prototype,"balance",void 0),wui_account_button_decorate([(0,K.Cb)({type:Boolean})],tA.prototype,"disabled",void 0),wui_account_button_decorate([(0,K.Cb)({type:Boolean})],tA.prototype,"isProfileName",void 0),wui_account_button_decorate([(0,K.Cb)()],tA.prototype,"address",void 0),tA=wui_account_button_decorate([customElement("wui-account-button")],tA);let tD=T.iv`
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
`;var wui_wallet_image_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tI=class extends T.oi{constructor(){super(...arguments),this.size="md",this.name=""}render(){let d="xxs";return d="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${d});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),T.dy` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?T.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?T.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:T.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tI.styles=[A,tD],wui_wallet_image_decorate([(0,K.Cb)()],tI.prototype,"size",void 0),wui_wallet_image_decorate([(0,K.Cb)()],tI.prototype,"name",void 0),wui_wallet_image_decorate([(0,K.Cb)()],tI.prototype,"imageSrc",void 0),wui_wallet_image_decorate([(0,K.Cb)()],tI.prototype,"walletIcon",void 0),tI=wui_wallet_image_decorate([customElement("wui-wallet-image")],tI);let tN=T.iv`
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
`;var wui_all_wallets_image_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tM=class extends T.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let d=this.walletImages.length<4;return T.dy`${this.walletImages.slice(0,4).map(({src:d,walletName:m})=>T.dy`
          <wui-wallet-image
            size="inherit"
            imageSrc=${d}
            name=${(0,tC.o)(m)}
          ></wui-wallet-image>
        `)}
    ${d?[...Array(4-this.walletImages.length)].map(()=>T.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};tM.styles=[A,tN],wui_all_wallets_image_decorate([(0,K.Cb)({type:Array})],tM.prototype,"walletImages",void 0),tM=wui_all_wallets_image_decorate([customElement("wui-all-wallets-image")],tM);let tj=T.iv`
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
`;var wui_button_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tL=class extends T.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let d="md"===this.size?"paragraph-600":"small-600";return T.dy`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${d} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?T.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:T.dy``}};tL.styles=[A,j,tj],wui_button_decorate([(0,K.Cb)()],tL.prototype,"size",void 0),wui_button_decorate([(0,K.Cb)({type:Boolean})],tL.prototype,"disabled",void 0),wui_button_decorate([(0,K.Cb)({type:Boolean})],tL.prototype,"fullWidth",void 0),wui_button_decorate([(0,K.Cb)({type:Boolean})],tL.prototype,"loading",void 0),wui_button_decorate([(0,K.Cb)()],tL.prototype,"variant",void 0),tL=wui_button_decorate([customElement("wui-button")],tL);let tU=T.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,t$=T.iv`
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
`;var wui_card_select_loader_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tB=class extends T.oi{constructor(){super(...arguments),this.type="wallet"}render(){return T.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?T.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tU}`:T.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tB.styles=[A,j,t$],wui_card_select_loader_decorate([(0,K.Cb)()],tB.prototype,"type",void 0),tB=wui_card_select_loader_decorate([customElement("wui-card-select-loader")],tB);let tF=T.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,tW=T.iv`
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
`;var wui_network_image_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tH=class extends T.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let d="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${d?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${d?"86px":"48px"};
      --local-height: ${d?"96px":"54px"};
      --local-icon-size: ${d?"42px":"24px"};
    `,T.dy`${this.templateVisual()} ${d?tF:tU}`}templateVisual(){return this.imageSrc?T.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:T.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tH.styles=[A,tW],wui_network_image_decorate([(0,K.Cb)()],tH.prototype,"size",void 0),wui_network_image_decorate([(0,K.Cb)()],tH.prototype,"name",void 0),wui_network_image_decorate([(0,K.Cb)()],tH.prototype,"imageSrc",void 0),wui_network_image_decorate([(0,K.Cb)({type:Boolean})],tH.prototype,"selected",void 0),tH=wui_network_image_decorate([customElement("wui-network-image")],tH);let tz=T.iv`
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
`;var wui_card_select_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tq=class extends T.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return T.dy`
      <button data-selected=${(0,tC.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?T.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,tC.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:T.dy`
      <wui-wallet-image size="md" imageSrc=${(0,tC.o)(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};tq.styles=[A,j,tz],wui_card_select_decorate([(0,K.Cb)()],tq.prototype,"name",void 0),wui_card_select_decorate([(0,K.Cb)()],tq.prototype,"type",void 0),wui_card_select_decorate([(0,K.Cb)()],tq.prototype,"imageSrc",void 0),wui_card_select_decorate([(0,K.Cb)({type:Boolean})],tq.prototype,"disabled",void 0),wui_card_select_decorate([(0,K.Cb)({type:Boolean})],tq.prototype,"selected",void 0),tq=wui_card_select_decorate([customElement("wui-card-select")],tq);let tG=T.iv`
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
`;var wui_chip_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tV=class extends T.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let d="transparent"===this.variant?"small-600":"paragraph-600";return T.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${d} color="inherit">
          ${tE.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?T.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};tV.styles=[A,j,tG],wui_chip_decorate([(0,K.Cb)()],tV.prototype,"variant",void 0),wui_chip_decorate([(0,K.Cb)()],tV.prototype,"imageSrc",void 0),wui_chip_decorate([(0,K.Cb)({type:Boolean})],tV.prototype,"disabled",void 0),wui_chip_decorate([(0,K.Cb)()],tV.prototype,"icon",void 0),wui_chip_decorate([(0,K.Cb)()],tV.prototype,"href",void 0),tV=wui_chip_decorate([customElement("wui-chip")],tV);let tK=T.iv`
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
`;var wui_connect_button_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tY=class extends T.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let d="md"===this.size?"paragraph-600":"small-600";return T.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${d} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?T.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};tY.styles=[A,j,tK],wui_connect_button_decorate([(0,K.Cb)()],tY.prototype,"size",void 0),wui_connect_button_decorate([(0,K.Cb)({type:Boolean})],tY.prototype,"loading",void 0),tY=wui_connect_button_decorate([customElement("wui-connect-button")],tY);let tZ=T.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var wui_cta_button_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tQ=class extends T.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return T.dy`
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
    `}};tQ.styles=[A,j,tZ],wui_cta_button_decorate([(0,K.Cb)({type:Boolean})],tQ.prototype,"disabled",void 0),wui_cta_button_decorate([(0,K.Cb)()],tQ.prototype,"label",void 0),wui_cta_button_decorate([(0,K.Cb)()],tQ.prototype,"buttonLabel",void 0),tQ=wui_cta_button_decorate([customElement("wui-cta-button")],tQ);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:tX}=te._$LH,directive_helpers_f=d=>void 0===d.strings,async_directive_s=(d,m)=>{let v=d._$AN;if(void 0===v)return!1;for(let d of v)d._$AO?.(m,!1),async_directive_s(d,m);return!0},o=d=>{let m,v;do{if(void 0===(m=d._$AM))break;(v=m._$AN).delete(d),d=m}while(0===v?.size)},async_directive_r=d=>{for(let m;m=d._$AM;d=m){let v=m._$AN;if(void 0===v)m._$AN=v=new Set;else if(v.has(d))break;v.add(d),async_directive_c(m)}};function async_directive_h(d){void 0!==this._$AN?(o(this),this._$AM=d,async_directive_r(this)):this._$AM=d}function async_directive_n(d,m=!1,v=0){let _=this._$AH,E=this._$AN;if(void 0!==E&&0!==E.size){if(m){if(Array.isArray(_))for(let d=v;d<_.length;d++)async_directive_s(_[d],!1),o(_[d]);else null!=_&&(async_directive_s(_,!1),o(_))}else async_directive_s(this,d)}}let async_directive_c=d=>{2==d.type&&(d._$AP??=async_directive_n,d._$AQ??=async_directive_h)};let f=class f extends i{constructor(){super(...arguments),this._$AN=void 0}_$AT(d,m,v){super._$AT(d,m,v),async_directive_r(this),this.isConnected=d._$AU}_$AO(d,m=!0){d!==this.isConnected&&(this.isConnected=d,d?this.reconnected?.():this.disconnected?.()),m&&(async_directive_s(this,d),o(this))}setValue(d){if(directive_helpers_f(this._$Ct))this._$Ct._$AI(d,this);else{let m=[...this._$Ct._$AH];m[this._$Ci]=d,this._$Ct._$AI(m,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ref_e=()=>new ref_h;let ref_h=class ref_h{};let tJ=new WeakMap,t0=e(class extends f{render(d){return te.Ld}update(d,[m]){let v=m!==this.G;return v&&void 0!==this.G&&this.ot(void 0),(v||this.rt!==this.lt)&&(this.G=m,this.ct=d.options?.host,this.ot(this.lt=d.element)),te.Ld}ot(d){if("function"==typeof this.G){let m=this.ct??globalThis,v=tJ.get(m);void 0===v&&(v=new WeakMap,tJ.set(m,v)),void 0!==v.get(this.G)&&this.G.call(this.ct,void 0),v.set(this.G,d),void 0!==d&&this.G.call(this.ct,d)}else this.G.value=d}get rt(){return"function"==typeof this.G?tJ.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),t1=T.iv`
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
`;var wui_input_text_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let t2=class extends T.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=ref_e()}render(){let d=`wui-size-${this.size}`;return T.dy` ${this.templateIcon()}
      <input
        ${t0(this.inputElementRef)}
        class=${d}
        type=${this.type}
        enterkeyhint=${(0,tC.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?T.dy`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};t2.styles=[A,j,t1],wui_input_text_decorate([(0,K.Cb)()],t2.prototype,"size",void 0),wui_input_text_decorate([(0,K.Cb)()],t2.prototype,"icon",void 0),wui_input_text_decorate([(0,K.Cb)({type:Boolean})],t2.prototype,"disabled",void 0),wui_input_text_decorate([(0,K.Cb)()],t2.prototype,"placeholder",void 0),wui_input_text_decorate([(0,K.Cb)()],t2.prototype,"type",void 0),wui_input_text_decorate([(0,K.Cb)()],t2.prototype,"keyHint",void 0),t2=wui_input_text_decorate([customElement("wui-input-text")],t2);let t3=T.iv`
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
`;var wui_email_input_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let t5=class extends T.oi{render(){return T.dy`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?T.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};t5.styles=[A,t3],wui_email_input_decorate([(0,K.Cb)()],t5.prototype,"errorMessage",void 0),t5=wui_email_input_decorate([customElement("wui-email-input")],t5);let t6=T.iv`
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
`;var wui_icon_link_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let t4=class extends T.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return T.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};t4.styles=[A,j,U,t6],wui_icon_link_decorate([(0,K.Cb)()],t4.prototype,"size",void 0),wui_icon_link_decorate([(0,K.Cb)({type:Boolean})],t4.prototype,"disabled",void 0),wui_icon_link_decorate([(0,K.Cb)()],t4.prototype,"icon",void 0),wui_icon_link_decorate([(0,K.Cb)()],t4.prototype,"iconColor",void 0),t4=wui_icon_link_decorate([customElement("wui-icon-link")],t4);let t8=T.iv`
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
`;var wui_input_element_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let t9=class extends T.oi{constructor(){super(...arguments),this.icon="copy"}render(){return T.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};t9.styles=[A,j,t8],wui_input_element_decorate([(0,K.Cb)()],t9.prototype,"icon",void 0),t9=wui_input_element_decorate([customElement("wui-input-element")],t9);let t7=T.iv`
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
`;var wui_input_numeric_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rr=class extends T.oi{constructor(){super(...arguments),this.disabled=!1}render(){return T.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};rr.styles=[A,j,t7],wui_input_numeric_decorate([(0,K.Cb)({type:Boolean})],rr.prototype,"disabled",void 0),rr=wui_input_numeric_decorate([customElement("wui-input-numeric")],rr);let ri=T.iv`
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
`;var wui_link_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let ro=class extends T.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return T.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};ro.styles=[A,j,ri],wui_link_decorate([(0,K.Cb)({type:Boolean})],ro.prototype,"disabled",void 0),wui_link_decorate([(0,K.Cb)()],ro.prototype,"color",void 0),ro=wui_link_decorate([customElement("wui-link")],ro);let ra=T.iv`
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
`;var wui_list_item_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rs=class extends T.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return T.dy`
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
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return T.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return T.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let d=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",m="square-blue"===this.iconVariant?"mdl":"md";return T.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${d}
          backgroundColor=${d}
          size=${m}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?T.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:T.dy``}chevronTemplate(){return this.chevron?T.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};rs.styles=[A,j,ra],wui_list_item_decorate([(0,K.Cb)()],rs.prototype,"icon",void 0),wui_list_item_decorate([(0,K.Cb)()],rs.prototype,"variant",void 0),wui_list_item_decorate([(0,K.Cb)()],rs.prototype,"iconVariant",void 0),wui_list_item_decorate([(0,K.Cb)({type:Boolean})],rs.prototype,"disabled",void 0),wui_list_item_decorate([(0,K.Cb)()],rs.prototype,"imageSrc",void 0),wui_list_item_decorate([(0,K.Cb)()],rs.prototype,"alt",void 0),wui_list_item_decorate([(0,K.Cb)({type:Boolean})],rs.prototype,"chevron",void 0),wui_list_item_decorate([(0,K.Cb)({type:Boolean})],rs.prototype,"loading",void 0),rs=wui_list_item_decorate([customElement("wui-list-item")],rs);let rl=T.iv`
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
`;var wui_transaction_visual_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rc=["withdrawed","buy","cryptoSent","nftSent"],ru=["deposited","received","bought","minted"],rd=["minted","bought","nftSent"],rh=["deposited","withdrawed","cryptoSent","buy","received"],rf=class extends T.oi{constructor(){super(...arguments),this.type="buy"}render(){let d="accent-100",m="arrowTop";return rc.includes(this.type)?(d="accent-100",m="arrowTop"):ru.includes(this.type)&&rd.includes(this.type)?(d="success-100",m="arrowBottom"):ru.includes(this.type)&&rh.includes(this.type)?(d="success-100",m="arrowBottom"):(d="accent-100",m="swapVertical"),this.dataset.type=this.type,T.dy`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${d}
        backgroundColor=${d}
        background="opaque"
        .icon=${m}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?T.dy`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:rd.includes(this.type)?T.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:T.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};rf.styles=[A,rl],wui_transaction_visual_decorate([(0,K.Cb)()],rf.prototype,"type",void 0),wui_transaction_visual_decorate([(0,K.Cb)()],rf.prototype,"imageSrc",void 0),rf=wui_transaction_visual_decorate([customElement("wui-transaction-visual")],rf);let rp=T.iv`
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
`;var wui_list_transaction_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rg=class extends T.oi{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){let d="nftSent"===this.type||"cryptoSent"===this.type,m=d?"Sent":this.type,v=tE.getFormattedDate(this.date);return T.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${m}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${v}</wui-text>
      </button>
    `}};rg.styles=[A,j,rp],wui_list_transaction_decorate([(0,K.Cb)()],rg.prototype,"type",void 0),wui_list_transaction_decorate([(0,K.Cb)({type:Boolean})],rg.prototype,"disabled",void 0),wui_list_transaction_decorate([(0,K.Cb)()],rg.prototype,"imageSrc",void 0),wui_list_transaction_decorate([(0,K.Cb)({attribute:!1})],rg.prototype,"date",void 0),wui_list_transaction_decorate([(0,K.Cb)()],rg.prototype,"transactionDetail",void 0),rg=wui_list_transaction_decorate([customElement("wui-list-transaction")],rg);let rm=T.iv`
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
`;var wui_tag_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rb=class extends T.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,T.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};rb.styles=[A,rm],wui_tag_decorate([(0,K.Cb)()],rb.prototype,"variant",void 0),rb=wui_tag_decorate([customElement("wui-tag")],rb);let ry=T.iv`
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
`;var wui_list_wallet_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rw=class extends T.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return T.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?T.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?T.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?T.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:T.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?T.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?T.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rw.styles=[A,j,ry],wui_list_wallet_decorate([(0,K.Cb)({type:Array})],rw.prototype,"walletImages",void 0),wui_list_wallet_decorate([(0,K.Cb)()],rw.prototype,"imageSrc",void 0),wui_list_wallet_decorate([(0,K.Cb)()],rw.prototype,"name",void 0),wui_list_wallet_decorate([(0,K.Cb)()],rw.prototype,"tagLabel",void 0),wui_list_wallet_decorate([(0,K.Cb)()],rw.prototype,"tagVariant",void 0),wui_list_wallet_decorate([(0,K.Cb)()],rw.prototype,"icon",void 0),wui_list_wallet_decorate([(0,K.Cb)()],rw.prototype,"walletIcon",void 0),wui_list_wallet_decorate([(0,K.Cb)({type:Boolean})],rw.prototype,"disabled",void 0),wui_list_wallet_decorate([(0,K.Cb)({type:Boolean})],rw.prototype,"showAllWallets",void 0),rw=wui_list_wallet_decorate([customElement("wui-list-wallet")],rw);let rv=T.iv`
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
`;var wui_logo_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let r_=class extends T.oi{constructor(){super(...arguments),this.logo="google"}render(){return T.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};r_.styles=[A,rv],wui_logo_decorate([(0,K.Cb)()],r_.prototype,"logo",void 0),r_=wui_logo_decorate([customElement("wui-logo")],r_);let rC=T.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var wui_logo_select_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rE=class extends T.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return T.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rE.styles=[A,j,rC],wui_logo_select_decorate([(0,K.Cb)()],rE.prototype,"logo",void 0),wui_logo_select_decorate([(0,K.Cb)({type:Boolean})],rE.prototype,"disabled",void 0),rE=wui_logo_select_decorate([customElement("wui-logo-select")],rE);let rx=T.iv`
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
`;var wui_network_button_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rS=class extends T.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return T.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?T.dy`<wui-image src=${this.imageSrc}></wui-image>`:T.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rS.styles=[A,j,rx],wui_network_button_decorate([(0,K.Cb)()],rS.prototype,"imageSrc",void 0),wui_network_button_decorate([(0,K.Cb)({type:Boolean})],rS.prototype,"disabled",void 0),rS=wui_network_button_decorate([customElement("wui-network-button")],rS);let rP=T.iv`
  :host {
    position: relative;
    display: block;
  }
`;var wui_otp_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rO=class extends T.oi{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(d,m)=>{let v=d.target,_=this.getInputElement(v);if(!_)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(d.key)&&d.preventDefault();let E=_.selectionStart;switch(d.key){case"ArrowLeft":E&&_.setSelectionRange(E+1,E+1),this.focusInputField("prev",m);break;case"ArrowRight":case"Shift":this.focusInputField("next",m);break;case"Delete":case"Backspace":""===_.value?this.focusInputField("prev",m):_.value=""}},this.focusInputField=(d,m)=>{if("next"===d){let d=m+1,v=this.numerics[d<this.length?d:m],_=v?this.getInputElement(v):void 0;_&&_.focus()}if("prev"===d){let d=m-1,v=this.numerics[d>-1?d:m],_=v?this.getInputElement(v):void 0;_&&_.focus()}}}firstUpdated(){let d=this.shadowRoot?.querySelectorAll("wui-input-numeric");d&&(this.numerics=Array.from(d))}render(){return T.dy`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((d,m)=>T.dy`
            <wui-input-numeric
              @input=${d=>this.handleInput(d,m)}
              @keydown=${d=>this.handleKeyDown(d,m)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(d,m){let v=d.target,_=this.getInputElement(v);if(_){let v=_.value;if("insertFromPaste"===d.inputType)this.handlePaste(_,v,m);else{let E=tE.isNumber(v);E&&d.data?(_.value=d.data,this.focusInputField("next",m)):_.value=""}}}handlePaste(d,m,v){let _=m[0],E=_&&tE.isNumber(_);if(E){d.value=_;let E=m.substring(1);if(v+1<this.length&&E.length){let d=this.numerics[v+1],m=d?this.getInputElement(d):void 0;m&&this.handlePaste(m,E,v+1)}else this.focusInputField("next",v)}else d.value=""}getInputElement(d){return d.shadowRoot?.querySelector("input")?d.shadowRoot.querySelector("input"):null}};rO.styles=[A,rP],wui_otp_decorate([(0,K.Cb)({type:Number})],rO.prototype,"length",void 0),rO=wui_otp_decorate([customElement("wui-otp")],rO);var rk=v(31076);function isAdjecentDots(d,m,v){return d!==m&&(d-m<0?m-d:d-m)<=v+.1}function getMatrix(d,m){let v=Array.prototype.slice.call(rk.create(d,{errorCorrectionLevel:m}).modules.data,0),_=Math.sqrt(v.length);return v.reduce((d,m,v)=>(v%_==0?d.push([m]):d[d.length-1].push(m))&&d,[])}let rR={generate(d,m,v){let _="#141414",E=[],x=getMatrix(d,"Q"),A=m/x.length,j=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];j.forEach(({x:d,y:m})=>{let v=(x.length-7)*A*d,U=(x.length-7)*A*m;for(let d=0;d<j.length;d+=1){let m=A*(7-2*d);E.push(T.YP`
            <rect
              fill=${2===d?_:"transparent"}
              width=${0===d?m-5:m}
              rx= ${0===d?(m-5)*.45:.45*m}
              ry= ${0===d?(m-5)*.45:.45*m}
              stroke=${_}
              stroke-width=${0===d?5:0}
              height=${0===d?m-5:m}
              x= ${0===d?U+A*d+2.5:U+A*d}
              y= ${0===d?v+A*d+2.5:v+A*d}
            />
          `)}});let U=Math.floor((v+25)/A),F=x.length/2-U/2,W=x.length/2+U/2-1,K=[];x.forEach((d,m)=>{d.forEach((d,v)=>{if(x[m][v]&&!(m<7&&v<7||m>x.length-8&&v<7||m<7&&v>x.length-8)&&!(m>F&&m<W&&v>F&&v<W)){let d=m*A+A/2,_=v*A+A/2;K.push([d,_])}})});let Q={};return K.forEach(([d,m])=>{Q[d]?Q[d]?.push(m):Q[d]=[m]}),Object.entries(Q).map(([d,m])=>{let v=m.filter(d=>m.every(m=>!isAdjecentDots(d,m,A)));return[Number(d),v]}).forEach(([d,m])=>{m.forEach(m=>{E.push(T.YP`<circle cx=${d} cy=${m} fill=${_} r=${A/2.5} />`)})}),Object.entries(Q).filter(([d,m])=>m.length>1).map(([d,m])=>{let v=m.filter(d=>m.some(m=>isAdjecentDots(d,m,A)));return[Number(d),v]}).map(([d,m])=>{m.sort((d,m)=>d<m?-1:1);let v=[];for(let d of m){let m=v.find(m=>m.some(m=>isAdjecentDots(d,m,A)));m?m.push(d):v.push([d])}return[d,v.map(d=>[d[0],d[d.length-1]])]}).forEach(([d,m])=>{m.forEach(([m,v])=>{E.push(T.YP`
              <line
                x1=${d}
                x2=${d}
                y1=${m}
                y2=${v}
                stroke=${_}
                stroke-width=${A/1.25}
                stroke-linecap="round"
              />
            `)})}),E}},rT=T.iv`
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
`;var wui_qr_code_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rA=class extends T.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,T.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let d="light"===this.theme?this.size:this.size-32;return T.YP`
      <svg height=${d} width=${d}>
        ${rR.generate(this.uri,d,d/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?T.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:T.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rA.styles=[A,rT],wui_qr_code_decorate([(0,K.Cb)()],rA.prototype,"uri",void 0),wui_qr_code_decorate([(0,K.Cb)({type:Number})],rA.prototype,"size",void 0),wui_qr_code_decorate([(0,K.Cb)()],rA.prototype,"theme",void 0),wui_qr_code_decorate([(0,K.Cb)()],rA.prototype,"imageSrc",void 0),wui_qr_code_decorate([(0,K.Cb)()],rA.prototype,"alt",void 0),rA=wui_qr_code_decorate([customElement("wui-qr-code")],rA);let rD=T.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,rI=class extends T.oi{constructor(){super(...arguments),this.inputComponentRef=ref_e()}render(){return T.dy`
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
    `}clearValue(){let d=this.inputComponentRef.value,m=d?.inputElementRef.value;m&&(m.value="",m.focus(),m.dispatchEvent(new Event("input")))}};rI.styles=[A,rD],rI=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([customElement("wui-search-bar")],rI);let rN=T.iv`
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
`;var wui_snackbar_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rM=class extends T.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return T.dy`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};rM.styles=[A,rN],wui_snackbar_decorate([(0,K.Cb)()],rM.prototype,"backgroundColor",void 0),wui_snackbar_decorate([(0,K.Cb)()],rM.prototype,"iconColor",void 0),wui_snackbar_decorate([(0,K.Cb)()],rM.prototype,"icon",void 0),wui_snackbar_decorate([(0,K.Cb)()],rM.prototype,"message",void 0),rM=wui_snackbar_decorate([customElement("wui-snackbar")],rM);let rj=T.iv`
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
`;var wui_tabs_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rL=class extends T.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((d,m)=>{let v=m===this.activeTab;return T.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(m)}
          data-active=${v}
        >
          <wui-icon size="sm" color="inherit" name=${d.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${d.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(d){this.buttons&&this.animateTabs(d,!1),this.activeTab=d,this.onTabChange(d)}animateTabs(d,m){let v=this.buttons[this.activeTab],_=this.buttons[d],E=v?.querySelector("wui-text"),x=_?.querySelector("wui-text"),T=_?.getBoundingClientRect(),A=x?.getBoundingClientRect();v&&E&&!m&&d!==this.activeTab&&(E.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),v.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),_&&T&&A&&x&&(d!==this.activeTab||m)&&(this.localTabWidth=`${Math.round(T.width+A.width)+6}px`,_.animate([{width:`${T.width+A.width}px`}],{duration:m?0:500,fill:"forwards",easing:"ease"}),x.animate([{opacity:1}],{duration:m?0:125,delay:m?0:200,fill:"forwards",easing:"ease"}))}};rL.styles=[A,j,rj],wui_tabs_decorate([(0,K.Cb)({type:Array})],rL.prototype,"tabs",void 0),wui_tabs_decorate([(0,K.Cb)()],rL.prototype,"onTabChange",void 0),wui_tabs_decorate([(0,K.Cb)({type:Array})],rL.prototype,"buttons",void 0),wui_tabs_decorate([(0,K.Cb)({type:Boolean})],rL.prototype,"disabled",void 0),wui_tabs_decorate([(0,K.SB)()],rL.prototype,"activeTab",void 0),wui_tabs_decorate([(0,K.SB)()],rL.prototype,"localTabWidth",void 0),wui_tabs_decorate([(0,K.SB)()],rL.prototype,"isDense",void 0),rL=wui_tabs_decorate([customElement("wui-tabs")],rL);let rU=T.iv`
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
`;var wui_tooltip_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let r$=class extends T.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return T.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};r$.styles=[A,j,rU],wui_tooltip_decorate([(0,K.Cb)()],r$.prototype,"placement",void 0),wui_tooltip_decorate([(0,K.Cb)()],r$.prototype,"message",void 0),r$=wui_tooltip_decorate([customElement("wui-tooltip")],r$);let rB=T.iv`
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
`;var wui_visual_thumbnail_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rF=class extends T.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,T.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?T.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:T.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rF.styles=[A,rB],wui_visual_thumbnail_decorate([(0,K.Cb)()],rF.prototype,"imageSrc",void 0),wui_visual_thumbnail_decorate([(0,K.Cb)()],rF.prototype,"alt",void 0),wui_visual_thumbnail_decorate([(0,K.Cb)({type:Boolean})],rF.prototype,"borderRadiusFull",void 0),rF=wui_visual_thumbnail_decorate([customElement("wui-visual-thumbnail")],rF);let rW=T.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var wui_grid_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rH=class extends T.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tE.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tE.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tE.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tE.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tE.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tE.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tE.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tE.getSpacingStyles(this.margin,3)};
    `,T.dy`<slot></slot>`}};rH.styles=[A,rW],wui_grid_decorate([(0,K.Cb)()],rH.prototype,"gridTemplateRows",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"gridTemplateColumns",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"justifyItems",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"alignItems",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"justifyContent",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"alignContent",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"columnGap",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"rowGap",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"gap",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"padding",void 0),wui_grid_decorate([(0,K.Cb)()],rH.prototype,"margin",void 0),rH=wui_grid_decorate([customElement("wui-grid")],rH);let rz=T.iv`
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
`;var wui_separator_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let rq=class extends T.oi{constructor(){super(...arguments),this.text=""}render(){return T.dy`${this.template()}`}template(){return this.text?T.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};rq.styles=[A,rz],wui_separator_decorate([(0,K.Cb)()],rq.prototype,"text",void 0),rq=wui_separator_decorate([customElement("wui-separator")],rq)},19208:(d,m,v)=>{"use strict";let _,E;v.d(m,{OY:()=>createWeb3Modal,o1:()=>defaultWagmiConfig,k_:()=>useWeb3Modal,xG:()=>useWeb3ModalState});var x,T,A,j,U,F,W,K,Q,X,ee,er,ei,eo,ea,es,el,ec,eu,ed,eh,ef,ep,eg,em=v(80404);function getWeb3Modal(d){d&&(_=d)}function useWeb3Modal(){if(!_)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(d){await _?.open(d)},close:async function(){await _?.close()}}}function useWeb3ModalState(){if(!_)throw Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');let[d,m]=(0,em.useState)(_.getState());return(0,em.useEffect)(()=>{let d=_?.subscribeState(d=>{m({...d})});return()=>{d?.()}},[]),d}var eb=v(45686),ey=v(15922),ew=v(19201),ev=v(92967),e_=v(7712),eC=v(86968),eE=v(97521),__decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let ex=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=ew.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=ew.AccountController.state.address,this.balanceVal=ew.AccountController.state.balance,this.balanceSymbol=ew.AccountController.state.balanceSymbol,this.profileName=ew.AccountController.state.profileName,this.profileImage=ew.AccountController.state.profileImage,this.network=ew.NetworkController.state.caipNetwork,this.unsubscribe.push(...[ew.AccountController.subscribe(d=>{d.isConnected?(this.address=d.address,this.balanceVal=d.balance,this.profileName=d.profileName,this.profileImage=d.profileImage,this.balanceSymbol=d.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),ew.NetworkController.subscribeKey("caipNetwork",d=>this.network=d)])}disconnectedCallback(){this.unsubscribe.forEach(d=>d())}render(){let d=this.networkImages[this.network?.imageId??""],m="show"===this.balance;return e_.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${(0,eE.o)(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,eE.o)(d)}
        avatarSrc=${(0,eE.o)(this.profileImage)}
        balance=${m?ew.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){ew.IN.open()}};__decorate([(0,eC.Cb)({type:Boolean})],ex.prototype,"disabled",void 0),__decorate([(0,eC.Cb)()],ex.prototype,"balance",void 0),__decorate([(0,eC.SB)()],ex.prototype,"address",void 0),__decorate([(0,eC.SB)()],ex.prototype,"balanceVal",void 0),__decorate([(0,eC.SB)()],ex.prototype,"balanceSymbol",void 0),__decorate([(0,eC.SB)()],ex.prototype,"profileName",void 0),__decorate([(0,eC.SB)()],ex.prototype,"profileImage",void 0),__decorate([(0,eC.SB)()],ex.prototype,"network",void 0),ex=__decorate([(0,ev.customElement)("w3m-account-button")],ex);var w3m_button_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eS=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=ew.AccountController.state.isConnected,this.unsubscribe.push(ew.AccountController.subscribeKey("isConnected",d=>{this.isAccount=d}))}disconnectedCallback(){this.unsubscribe.forEach(d=>d())}render(){return this.isAccount?e_.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,eE.o)(this.balance)}
          >
          </w3m-account-button>
        `:e_.dy`
          <w3m-connect-button
            size=${(0,eE.o)(this.size)}
            label=${(0,eE.o)(this.label)}
            loadingLabel=${(0,eE.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};w3m_button_decorate([(0,eC.Cb)({type:Boolean})],eS.prototype,"disabled",void 0),w3m_button_decorate([(0,eC.Cb)()],eS.prototype,"balance",void 0),w3m_button_decorate([(0,eC.Cb)()],eS.prototype,"size",void 0),w3m_button_decorate([(0,eC.Cb)()],eS.prototype,"label",void 0),w3m_button_decorate([(0,eC.Cb)()],eS.prototype,"loadingLabel",void 0),w3m_button_decorate([(0,eC.SB)()],eS.prototype,"isAccount",void 0),eS=w3m_button_decorate([(0,ev.customElement)("w3m-button")],eS);var w3m_connect_button_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eP=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=ew.IN.state.open,this.unsubscribe.push(ew.IN.subscribeKey("open",d=>this.open=d))}disconnectedCallback(){this.unsubscribe.forEach(d=>d())}render(){return e_.dy`
      <wui-connect-button
        size=${(0,eE.o)(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?ew.IN.close():ew.IN.open()}};w3m_connect_button_decorate([(0,eC.Cb)()],eP.prototype,"size",void 0),w3m_connect_button_decorate([(0,eC.Cb)()],eP.prototype,"label",void 0),w3m_connect_button_decorate([(0,eC.Cb)()],eP.prototype,"loadingLabel",void 0),w3m_connect_button_decorate([(0,eC.SB)()],eP.prototype,"open",void 0),eP=w3m_connect_button_decorate([(0,ev.customElement)("w3m-connect-button")],eP),v(72161);var w3m_network_button_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eO=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=ew.NetworkController.state.caipNetwork,this.connected=ew.AccountController.state.isConnected,this.unsubscribe.push(...[ew.NetworkController.subscribeKey("caipNetwork",d=>this.network=d),ew.AccountController.subscribeKey("isConnected",d=>this.connected=d)])}disconnectedCallback(){this.unsubscribe.forEach(d=>d())}render(){return e_.dy`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${(0,eE.o)(ew.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){ew.IN.open({view:"Networks"})}};w3m_network_button_decorate([(0,eC.Cb)({type:Boolean})],eO.prototype,"disabled",void 0),w3m_network_button_decorate([(0,eC.SB)()],eO.prototype,"network",void 0),w3m_network_button_decorate([(0,eC.SB)()],eO.prototype,"connected",void 0),eO=w3m_network_button_decorate([(0,ev.customElement)("w3m-network-button")],eO);let ek=e_.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var w3m_router_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eR=class extends e_.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=ew.RouterController.state.view,this.unsubscribe.push(ew.RouterController.subscribeKey("view",d=>this.onViewChange(d)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([d])=>{let m=`${d?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:m}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=m}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(d=>d())}render(){return e_.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return e_.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return e_.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return e_.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return e_.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return e_.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return e_.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return e_.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return e_.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return e_.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return e_.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return e_.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return e_.dy`<w3m-downloads-view></w3m-downloads-view>`}}async onViewChange(d){let{history:m}=ew.RouterController.state,v=-10,_=10;m.length<this.prevHistoryLength&&(v=10,_=-10),this.prevHistoryLength=m.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${v}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=d,await this.animate([{opacity:0,transform:`translateX(${_}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};eR.styles=ek,w3m_router_decorate([(0,eC.SB)()],eR.prototype,"view",void 0),eR=w3m_router_decorate([(0,ev.customElement)("w3m-router")],eR);let eT=e_.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var w3m_account_view_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eA=class extends e_.oi{constructor(){super(),this.usubscribe=[],this.networkImages=ew.WM.state.networkImages,this.address=ew.AccountController.state.address,this.profileImage=ew.AccountController.state.profileImage,this.profileName=ew.AccountController.state.profileName,this.balance=ew.AccountController.state.balance,this.balanceSymbol=ew.AccountController.state.balanceSymbol,this.network=ew.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[ew.AccountController.subscribe(d=>{d.address?(this.address=d.address,this.profileImage=d.profileImage,this.profileName=d.profileName,this.balance=d.balance,this.balanceSymbol=d.balanceSymbol):ew.IN.close()})],ew.NetworkController.subscribeKey("caipNetwork",d=>{d?.id&&(this.network=d)}))}disconnectedCallback(){this.usubscribe.forEach(d=>d())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let d=this.networkImages[this.network?.imageId??""];return e_.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,eE.o)(this.profileImage)}
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
              ${ew.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${d?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,eE.o)(d)}
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
    `}explorerBtnTemplate(){let{addressExplorerUrl:d}=ew.AccountController.state;return d?e_.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:d}=ew.NetworkController.state,m=!!d&&d.length>1,v=d?.find(({id:d})=>d===this.network?.id);return m||!v}onCopyAddress(){try{this.address&&(ew.j1.copyToClopboard(this.address),ew.SnackController.showSuccess("Address copied"))}catch{ew.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&ew.RouterController.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await ew.ConnectionController.disconnect(),ew.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),ew.IN.close()}catch{ew.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),ew.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:d}=ew.AccountController.state;d&&ew.j1.openHref(d,"_blank")}};eA.styles=eT,w3m_account_view_decorate([(0,eC.SB)()],eA.prototype,"address",void 0),w3m_account_view_decorate([(0,eC.SB)()],eA.prototype,"profileImage",void 0),w3m_account_view_decorate([(0,eC.SB)()],eA.prototype,"profileName",void 0),w3m_account_view_decorate([(0,eC.SB)()],eA.prototype,"balance",void 0),w3m_account_view_decorate([(0,eC.SB)()],eA.prototype,"balanceSymbol",void 0),w3m_account_view_decorate([(0,eC.SB)()],eA.prototype,"network",void 0),w3m_account_view_decorate([(0,eC.SB)()],eA.prototype,"disconecting",void 0),eA=w3m_account_view_decorate([(0,ev.customElement)("w3m-account-view")],eA);var w3m_all_wallets_view_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eD=class extends e_.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=ew.j1.debounce(d=>{this.search=d})}render(){let d=this.search.length>=2;return e_.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${d?e_.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:e_.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(d){this.onDebouncedSearch(d.detail)}qrButtonTemplate(){return ew.j1.isMobile()?e_.dy`
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
      `:null}onWalletConnectQr(){ew.RouterController.push("ConnectingWalletConnect")}};w3m_all_wallets_view_decorate([(0,eC.SB)()],eD.prototype,"search",void 0),eD=w3m_all_wallets_view_decorate([(0,ev.customElement)("w3m-all-wallets-view")],eD);let eI=e_.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var w3m_connect_view_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eN=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.connectors=ew.ConnectorController.state.connectors,this.unsubscribe.push(ew.ConnectorController.subscribeKey("connectors",d=>this.connectors=d))}disconnectedCallback(){this.unsubscribe.forEach(d=>d())}render(){return e_.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(ew.j1.isMobile())return null;let d=this.connectors.find(d=>"WALLET_CONNECT"===d.type);return d?e_.dy`
      <wui-list-wallet
        imageSrc=${(0,eE.o)(ew.fz.getConnectorImage(d))}
        name=${d.name??"Unknown"}
        @click=${()=>this.onConnector(d)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:d}=ew.OptionsController.state;if(!d?.length)return null;let m=this.filterOutDuplicateWallets(d);return m.map(d=>e_.dy`
        <wui-list-wallet
          imageSrc=${(0,eE.o)(ew.fz.getWalletImage(d))}
          name=${d.name??"Unknown"}
          @click=${()=>this.onConnectWallet(d)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let{featured:d}=ew.ApiController.state;if(!d.length)return null;let m=this.filterOutDuplicateWallets(d);return m.map(d=>e_.dy`
        <wui-list-wallet
          imageSrc=${(0,eE.o)(ew.fz.getWalletImage(d))}
          name=${d.name??"Unknown"}
          @click=${()=>this.onConnectWallet(d)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let d=ew.MO.getRecentWallets();return d.map(d=>e_.dy`
        <wui-list-wallet
          imageSrc=${(0,eE.o)(ew.fz.getWalletImage(d))}
          name=${d.name??"Unknown"}
          @click=${()=>this.onConnectWallet(d)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(d=>"ANNOUNCED"!==d.type?null:e_.dy`
        <wui-list-wallet
          imageSrc=${(0,eE.o)(ew.fz.getConnectorImage(d))}
          name=${d.name??"Unknown"}
          @click=${()=>this.onConnector(d)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let d=this.connectors.find(d=>"ANNOUNCED"===d.type);return this.connectors.map(m=>"INJECTED"===m.type&&ew.ConnectionController.checkInstalled()?e_.dy`
        <wui-list-wallet
          imageSrc=${(0,eE.o)(ew.fz.getConnectorImage(m))}
          name=${m.name??"Unknown"}
          @click=${()=>this.onConnector(m)}
          tagLabel=${(0,eE.o)(d?void 0:"installed")}
          tagVariant=${(0,eE.o)(d?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(d=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(d.type)?null:e_.dy`
        <wui-list-wallet
          imageSrc=${(0,eE.o)(ew.fz.getConnectorImage(d))}
          name=${d.name??"Unknown"}
          @click=${()=>this.onConnector(d)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let d=10*Math.floor(ew.ApiController.state.count/10);return e_.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${d}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:d}=ew.ApiController.state,{customWallets:m,featuredWalletIds:v}=ew.OptionsController.state,{connectors:_}=ew.ConnectorController.state,E=ew.MO.getRecentWallets(),x=_.filter(d=>"ANNOUNCED"===d.type);if(v||m||!d.length)return null;let T=x.length+E.length,A=this.filterOutDuplicateWallets(d).slice(0,Math.max(0,2-T));return A.map(d=>e_.dy`
        <wui-list-wallet
          imageSrc=${(0,eE.o)(ew.fz.getWalletImage(d))}
          name=${d?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(d)}
        >
        </wui-list-wallet>
      `)}onConnector(d){"WALLET_CONNECT"===d.type?ew.j1.isMobile()?ew.RouterController.push("AllWallets"):ew.RouterController.push("ConnectingWalletConnect"):ew.RouterController.push("ConnectingExternal",{connector:d})}filterOutDuplicateWallets(d){let{connectors:m}=ew.ConnectorController.state,v=ew.MO.getRecentWallets(),_=v.map(d=>d.id),E=m.map(d=>d.info?.rdns).filter(Boolean),x=d.filter(d=>!_.includes(d.id)&&!E.includes(d.rdns??void 0));return x}onAllWallets(){ew.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),ew.RouterController.push("AllWallets")}onConnectWallet(d){ew.RouterController.push("ConnectingWalletConnect",{wallet:d})}};eN.styles=eI,w3m_connect_view_decorate([(0,eC.SB)()],eN.prototype,"connectors",void 0),eN=w3m_connect_view_decorate([(0,ev.customElement)("w3m-connect-view")],eN);let eM=e_.iv`
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
`;var w3m_connecting_widget_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let W3mConnectingWidget=class W3mConnectingWidget extends e_.oi{constructor(){super(),this.wallet=ew.RouterController.state.data?.wallet,this.connector=ew.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ew.fz.getWalletImage(this.wallet)??ew.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=ew.ConnectionController.state.wcUri,this.error=ew.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[ew.ConnectionController.subscribeKey("wcUri",d=>{this.uri=d,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),ew.ConnectionController.subscribeKey("wcError",d=>this.error=d),ew.ConnectionController.subscribeKey("buffering",d=>this.buffering=d)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(d=>d()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let d=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,m=`Continue in ${this.name}`;return this.buffering&&(m="Connecting..."),this.error&&(m="Connection declined"),e_.dy`
      <wui-flex
        data-error=${(0,eE.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,eE.o)(this.imageSrc)}></wui-wallet-image>

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
            ${m}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${d}</wui-text>
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
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let d=this.shadowRoot?.querySelector("wui-button");d.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(ew.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let d=ew.ThemeController.state.themeVariables["--w3m-border-radius-master"],m=d?parseInt(d.replace("px",""),10):4;return e_.dy`<wui-loading-thumbnail radius=${9*m}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(ew.j1.copyToClopboard(this.uri),ew.SnackController.showSuccess("Link copied"))}catch{ew.SnackController.showError("Failed to copy")}}};W3mConnectingWidget.styles=eM,w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"uri",void 0),w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"error",void 0),w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"ready",void 0),w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"showRetry",void 0),w3m_connecting_widget_decorate([(0,eC.SB)()],W3mConnectingWidget.prototype,"buffering",void 0),w3m_connecting_widget_decorate([(0,eC.Cb)({type:Boolean})],W3mConnectingWidget.prototype,"isMobile",void 0),w3m_connecting_widget_decorate([(0,eC.Cb)()],W3mConnectingWidget.prototype,"onRetry",void 0);let ej={INJECTED:"browser",ANNOUNCED:"browser"},eL=class extends W3mConnectingWidget{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");ew.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:ej[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&ew.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await ew.ConnectionController.connectExternal(this.connector),ew.IN.close(),ew.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(d){ew.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:d?.message??"Unknown"}}),this.error=!0}}};eL=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-connecting-external-view")],eL);let eU=class extends e_.oi{constructor(){super(...arguments),this.dappUrl=ew.OptionsController.state.metadata?.url,this.dappName=ew.OptionsController.state.metadata?.name}render(){return e_.dy`
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
      </wui-flex>`:null}onDappLink(){this.dappUrl&&ew.j1.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){ew.RouterController.goBack()}};eU=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-connecting-siwe-view")],eU);var w3m_connecting_wc_view_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let e$=class extends e_.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=ew.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),ew.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),e_.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):e_.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(d=!1){try{let{wcPairingExpiry:m}=ew.ConnectionController.state;if(d||ew.j1.isPairingExpired(m)){if(ew.ConnectionController.connectWalletConnect(),this.wallet){let d=ew.fz.getWalletImage(this.wallet);d&&ew.MO.setConnectedWalletImageUrl(d)}else{let d=ew.ConnectorController.state.connectors,m=d.find(d=>"WALLET_CONNECT"===d.type),v=ew.fz.getConnectorImage(m);v&&ew.MO.setConnectedWalletImageUrl(v)}await ew.ConnectionController.state.wcPromise,this.finalizeConnection(),ew.IN.close()}}catch(d){ew.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:d?.message??"Unknown"}}),ew.ConnectionController.setWcError(!0),ew.j1.isAllowedRetry(this.lastRetry)&&(ew.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:d,recentWallet:m}=ew.ConnectionController.state;d&&ew.MO.setWalletConnectDeepLink(d),m&&ew.MO.setWeb3ModalRecent(m),ew.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:d?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:d,desktop_link:m,webapp_link:v,injected:_,rdns:E}=this.wallet,x=_?.map(({injected_id:d})=>d).filter(Boolean),T=E?[E]:x??[],A=T.length,j=ew.ConnectionController.checkInstalled(T),U=A&&j,F=m&&!ew.j1.isMobile();U&&this.platforms.push("browser"),d&&this.platforms.push(ew.j1.isMobile()?"mobile":"qrcode"),v&&this.platforms.push("web"),F&&this.platforms.push("desktop"),!U&&A&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return e_.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return e_.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return e_.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return e_.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return e_.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return e_.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let d=this.platforms.length>1;return d?e_.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(d){let m=this.shadowRoot?.querySelector("div");m&&(await m.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=d,m.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};w3m_connecting_wc_view_decorate([(0,eC.SB)()],e$.prototype,"platform",void 0),w3m_connecting_wc_view_decorate([(0,eC.SB)()],e$.prototype,"platforms",void 0),e$=w3m_connecting_wc_view_decorate([(0,ev.customElement)("w3m-connecting-wc-view")],e$);let eB=class extends e_.oi{constructor(){super(...arguments),this.wallet=ew.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return e_.dy`
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
    `:null}onChromeStore(){this.wallet?.chrome_store&&ew.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&ew.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&ew.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&ew.j1.openHref(this.wallet.homepage,"_blank")}};eB=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-downloads-view")],eB);let eF=class extends e_.oi{render(){return e_.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{ew.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:d,featured:m}=ew.ApiController.state,{customWallets:v}=ew.OptionsController.state,_=[...m,...v??[],...d].slice(0,4);return _.map(d=>e_.dy`
        <wui-list-wallet
          name=${d.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,eE.o)(ew.fz.getWalletImage(d))}
          @click=${()=>{ew.j1.openHref(d.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eF=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-get-wallet-view")],eF);let eW=e_.iv`
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
`;var w3m_network_switch_view_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eH=class extends e_.oi{constructor(){super(),this.network=ew.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=ew.NetworkController.state.caipNetwork,this.unsubscribe.push(ew.NetworkController.subscribeKey("caipNetwork",d=>{d?.id!==this.currentNetwork?.id&&ew.RouterController.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(d=>d())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let d=this.error?"Switch declined":"Approve in wallet",m=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return e_.dy`
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
            imageSrc=${(0,eE.o)(ew.fz.getNetworkImage(this.network))}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">${d}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${m}</wui-text>
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
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let d=this.shadowRoot?.querySelector("wui-button");d.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await ew.NetworkController.switchActiveNetwork(this.network),ew.RouterController.goBack())}catch{this.error=!0}}};eH.styles=eW,w3m_network_switch_view_decorate([(0,eC.SB)()],eH.prototype,"showRetry",void 0),w3m_network_switch_view_decorate([(0,eC.SB)()],eH.prototype,"error",void 0),w3m_network_switch_view_decorate([(0,eC.SB)()],eH.prototype,"currentNetwork",void 0),eH=w3m_network_switch_view_decorate([(0,ev.customElement)("w3m-network-switch-view")],eH);var w3m_networks_view_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let ez=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=ew.NetworkController.state.caipNetwork,this.unsubscribe.push(ew.NetworkController.subscribeKey("caipNetwork",d=>this.caipNetwork=d))}disconnectedCallback(){this.unsubscribe.forEach(d=>d())}render(){return e_.dy`
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
    `}onNetworkHelp(){ew.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),ew.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:d,requestedCaipNetworks:m,supportsAllNetworks:v}=ew.NetworkController.state;return d?.length&&m?.sort((m,v)=>d.indexOf(v.id)-d.indexOf(m.id)),m?.map(m=>e_.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===m.id}
          imageSrc=${eE.o(ew.fz.getNetworkImage(m))}
          type="network"
          name=${m.name??m.id}
          @click=${()=>this.onSwitchNetwork(m)}
          .disabled=${!v&&!d?.includes(m.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(d){let{isConnected:m}=ew.AccountController.state,{approvedCaipNetworkIds:v,supportsAllNetworks:_,caipNetwork:E}=ew.NetworkController.state;m&&E?.id!==d.id?v?.includes(d.id)?await ew.NetworkController.switchActiveNetwork(d):_&&ew.RouterController.push("SwitchNetwork",{network:d}):m||(ew.NetworkController.setCaipNetwork(d),ew.RouterController.push("Connect"))}};w3m_networks_view_decorate([(0,eC.SB)()],ez.prototype,"caipNetwork",void 0),ez=w3m_networks_view_decorate([(0,ev.customElement)("w3m-networks-view")],ez);let eq=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eG=class extends e_.oi{render(){return e_.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eq}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{ew.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eG=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-what-is-a-network-view")],eG);let eV=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eK=class extends e_.oi{render(){return e_.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eV}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){ew.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),ew.RouterController.push("GetWallet")}};eK=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-what-is-a-wallet-view")],eK);let eY=e_.iv`
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
`;var w3m_all_wallets_list_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eZ="local-paginator",eQ=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!ew.ApiController.state.wallets.length,this.wallets=ew.ApiController.state.wallets,this.recommended=ew.ApiController.state.recommended,this.featured=ew.ApiController.state.featured,this.unsubscribe.push(...[ew.ApiController.subscribeKey("wallets",d=>this.wallets=d),ew.ApiController.subscribeKey("recommended",d=>this.recommended=d),ew.ApiController.subscribeKey("featured",d=>this.featured=d)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(d=>d()),this.paginationObserver?.disconnect()}render(){return e_.dy`
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
    `}async initialFetch(){let d=this.shadowRoot?.querySelector("wui-grid");this.initial&&d&&(await ew.ApiController.fetchWallets({page:1}),await d.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,d.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(d,m){return[...Array(d)].map(()=>e_.dy`
        <wui-card-select-loader type="wallet" id=${(0,eE.o)(m)}></wui-card-select-loader>
      `)}walletsTemplate(){let d=[...this.featured,...this.recommended,...this.wallets];return d.map(d=>e_.dy`
        <wui-card-select
          imageSrc=${(0,eE.o)(ew.fz.getWalletImage(d))}
          type="wallet"
          name=${d.name}
          @click=${()=>this.onConnectWallet(d)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:d,recommended:m,featured:v,count:_}=ew.ApiController.state,E=window.innerWidth<352?3:4,x=d.length+m.length,T=Math.ceil(x/E)*E-x+E;return(T-=d.length?v.length%E:0,0===_||[...v,...d,...m].length<_)?this.shimmerTemplate(T,eZ):null}createPaginationObserver(){let d=this.shadowRoot?.querySelector(`#${eZ}`);d&&(this.paginationObserver=new IntersectionObserver(([d])=>{if(d?.isIntersecting&&!this.initial){let{page:d,count:m,wallets:v}=ew.ApiController.state;v.length<m&&ew.ApiController.fetchWallets({page:d+1})}}),this.paginationObserver.observe(d))}onConnectWallet(d){let{connectors:m}=ew.ConnectorController.state,v=m.find(({explorerId:m})=>m===d.id);v?ew.RouterController.push("ConnectingExternal",{connector:v}):ew.RouterController.push("ConnectingWalletConnect",{wallet:d})}};eQ.styles=eY,w3m_all_wallets_list_decorate([(0,eC.SB)()],eQ.prototype,"initial",void 0),w3m_all_wallets_list_decorate([(0,eC.SB)()],eQ.prototype,"wallets",void 0),w3m_all_wallets_list_decorate([(0,eC.SB)()],eQ.prototype,"recommended",void 0),w3m_all_wallets_list_decorate([(0,eC.SB)()],eQ.prototype,"featured",void 0),eQ=w3m_all_wallets_list_decorate([(0,ev.customElement)("w3m-all-wallets-list")],eQ);let eX=e_.iv`
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
`;var w3m_all_wallets_search_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let eJ=class extends e_.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?e_.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await ew.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:d}=ew.ApiController.state;return d.length?e_.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${d.map(d=>e_.dy`
            <wui-card-select
              imageSrc=${(0,eE.o)(ew.fz.getWalletImage(d))}
              type="wallet"
              name=${d.name}
              @click=${()=>this.onConnectWallet(d)}
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
      `}onConnectWallet(d){let{connectors:m}=ew.ConnectorController.state,v=m.find(({explorerId:m})=>m===d.id);v?ew.RouterController.push("ConnectingExternal",{connector:v}):ew.RouterController.push("ConnectingWalletConnect",{wallet:d})}};eJ.styles=eX,w3m_all_wallets_search_decorate([(0,eC.SB)()],eJ.prototype,"loading",void 0),w3m_all_wallets_search_decorate([(0,eC.Cb)()],eJ.prototype,"query",void 0),eJ=w3m_all_wallets_search_decorate([(0,ev.customElement)("w3m-all-wallets-search")],eJ);var w3m_connecting_header_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let e0=class extends e_.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(ew.ConnectionController.subscribeKey("buffering",d=>this.buffering=d))}disconnectCallback(){this.unsubscribe.forEach(d=>d())}render(){let d=this.generateTabs();return e_.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${d}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let d=this.platforms.map(d=>"browser"===d?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===d?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===d?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===d?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===d?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=d.map(({platform:d})=>d),d}onTabChange(d){let m=this.platformTabs[d];m&&this.onSelectPlatfrom?.(m)}};w3m_connecting_header_decorate([(0,eC.Cb)({type:Array})],e0.prototype,"platforms",void 0),w3m_connecting_header_decorate([(0,eC.Cb)()],e0.prototype,"onSelectPlatfrom",void 0),w3m_connecting_header_decorate([(0,eC.SB)()],e0.prototype,"buffering",void 0),e0=w3m_connecting_header_decorate([(0,ev.customElement)("w3m-connecting-header")],e0);let e1=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),ew.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:d}=ew.ConnectorController.state,m=d.find(d=>"ANNOUNCED"===d.type&&d.info?.rdns===this.wallet?.rdns),v=d.find(d=>"INJECTED"===d.type);m?await ew.ConnectionController.connectExternal(m):v&&await ew.ConnectionController.connectExternal(v),ew.IN.close(),ew.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(d){ew.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:d?.message??"Unknown"}}),this.error=!0}}};e1=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-connecting-wc-browser")],e1);let e2=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),ew.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:d,name:m}=this.wallet,{redirect:v,href:_}=ew.j1.formatNativeUrl(d,this.uri);ew.ConnectionController.setWcLinking({name:m,href:_}),ew.ConnectionController.setRecentWallet(this.wallet),ew.j1.openHref(v,"_self")}catch{this.error=!0}}};e2=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-connecting-wc-desktop")],e2);let e3=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),ew.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:d,name:m}=this.wallet,{redirect:v,href:_}=ew.j1.formatNativeUrl(d,this.uri);ew.ConnectionController.setWcLinking({name:m,href:_}),ew.ConnectionController.setRecentWallet(this.wallet),ew.j1.openHref(v,"_self")}catch{this.error=!0}}onBuffering(){let d=ew.j1.isIos();document?.visibilityState==="visible"&&!this.error&&d&&(ew.ConnectionController.setBuffering(!0),setTimeout(()=>{ew.ConnectionController.setBuffering(!1)},5e3))}};e3=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-connecting-wc-mobile")],e3);let e5=e_.iv`
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
`,e6=class extends W3mConnectingWidget{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),ew.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),e_.dy`
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
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let d=this.getBoundingClientRect().width-40,m=this.wallet?this.wallet.name:void 0;return ew.ConnectionController.setWcLinking(void 0),ew.ConnectionController.setRecentWallet(this.wallet),e_.dy`<wui-qr-code
      size=${d}
      theme=${ew.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,eE.o)(ew.fz.getWalletImage(this.wallet))}
      alt=${(0,eE.o)(m)}
    ></wui-qr-code>`}};e6.styles=e5,e6=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-connecting-wc-qrcode")],e6);let e4=e_.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,e8=class extends e_.oi{constructor(){super(...arguments),this.dappImageUrl=ew.OptionsController.state.metadata?.icons,this.walletImageUrl=ew.MO.getConnectedWalletImageUrl()}firstUpdated(){let d=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");d?.[0]&&this.createAnimation(d[0],"translate(18px)"),d?.[1]&&this.createAnimation(d[1],"translate(-18px)")}render(){return e_.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(d,m){d.animate([{transform:"translateX(0px)"},{transform:m}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};e8.styles=e4,e8=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-connecting-siwe")],e8);let e9=class extends e_.oi{constructor(){if(super(),this.wallet=ew.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");ew.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return e_.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,eE.o)(ew.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};e9=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-connecting-wc-unsupported")],e9);let e7=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",ew.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:d,name:m}=this.wallet,{redirect:v,href:_}=ew.j1.formatUniversalUrl(d,this.uri);ew.ConnectionController.setWcLinking({name:m,href:_}),ew.ConnectionController.setRecentWallet(this.wallet),ew.j1.openHref(v,"_blank")}catch{this.error=!0}}};e7=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-connecting-wc-web")],e7);let te=e_.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var w3m_header_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};function headings(){let d=ew.RouterController.state.data?.connector?.name,m=ew.RouterController.state.data?.wallet?.name,v=ew.RouterController.state.data?.network?.name,_=m??d;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:_??"Connect Wallet",ConnectingWalletConnect:_??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:v??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:_?`Get ${_}`:"Downloads"}}let tr=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.heading=headings()[ew.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(ew.RouterController.subscribeKey("view",d=>{this.onViewChange(d),this.onHistoryChange()}),ew.ConnectionController.subscribeKey("buffering",d=>this.buffering=d))}disconnectCallback(){this.unsubscribe.forEach(d=>d())}render(){return e_.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${ew.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){ew.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),ew.RouterController.push("WhatIsAWallet")}titleTemplate(){return e_.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:d}=ew.RouterController.state;return this.showBack?e_.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${ew.RouterController.goBack}
      ></wui-icon-link>`:e_.dy`<wui-icon-link
      data-hidden=${"Connect"!==d}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?e_.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(d){let m=this.shadowRoot?.querySelector("wui-text");if(m){let v=headings()[d];await m.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=v,m.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:d}=ew.RouterController.state,m=this.shadowRoot?.querySelector("#dynamic");d.length>1&&!this.showBack&&m?(await m.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,m.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):d.length<=1&&this.showBack&&m&&(await m.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,m.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};tr.styles=[te],w3m_header_decorate([(0,eC.SB)()],tr.prototype,"heading",void 0),w3m_header_decorate([(0,eC.SB)()],tr.prototype,"buffering",void 0),w3m_header_decorate([(0,eC.SB)()],tr.prototype,"showBack",void 0),tr=w3m_header_decorate([(0,ev.customElement)("w3m-header")],tr);var w3m_help_widget_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let ti=class extends e_.oi{constructor(){super(...arguments),this.data=[]}render(){return e_.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(d=>e_.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${d.images.map(d=>e_.dy`<wui-visual name=${d}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${d.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${d.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};w3m_help_widget_decorate([(0,eC.Cb)({type:Array})],ti.prototype,"data",void 0),ti=w3m_help_widget_decorate([(0,ev.customElement)("w3m-help-widget")],ti);let to=e_.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`,ta=class extends e_.oi{render(){let{termsConditionsUrl:d,privacyPolicyUrl:m}=ew.OptionsController.state;return d||m?e_.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:d,privacyPolicyUrl:m}=ew.OptionsController.state;return d&&m?"and":""}termsTemplate(){let{termsConditionsUrl:d}=ew.OptionsController.state;return d?e_.dy`<a href=${d}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:d}=ew.OptionsController.state;return d?e_.dy`<a href=${d}>Privacy Policy</a>`:null}};ta.styles=[to],ta=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T}([(0,ev.customElement)("w3m-legal-footer")],ta);let ts=e_.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var w3m_mobile_download_links_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tl=class extends e_.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:d,app_store:m,play_store:v,chrome_store:_,homepage:E}=this.wallet,x=ew.j1.isMobile(),T=ew.j1.isIos(),A=ew.j1.isAndroid(),j=[m,v,E,_].filter(Boolean).length>1,U=ev.UiHelperUtil.getTruncateString({string:d,charsStart:12,charsEnd:0,truncate:"end"});return j&&!x?e_.dy`
        <wui-cta-button
          label=${`Don't have ${U}?`}
          buttonLabel="Get"
          @click=${()=>ew.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!j&&E?e_.dy`
        <wui-cta-button
          label=${`Don't have ${U}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:m&&T?e_.dy`
        <wui-cta-button
          label=${`Don't have ${U}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:v&&A?e_.dy`
        <wui-cta-button
          label=${`Don't have ${U}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&ew.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&ew.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&ew.j1.openHref(this.wallet.homepage,"_blank")}};tl.styles=[ts],w3m_mobile_download_links_decorate([(0,eC.Cb)({type:Object})],tl.prototype,"wallet",void 0),tl=w3m_mobile_download_links_decorate([(0,ev.customElement)("w3m-mobile-download-links")],tl);let tc=e_.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var w3m_snackbar_decorate=function(d,m,v,_){var E,x=arguments.length,T=x<3?m:null===_?_=Object.getOwnPropertyDescriptor(m,v):_;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)T=Reflect.decorate(d,m,v,_);else for(var A=d.length-1;A>=0;A--)(E=d[A])&&(T=(x<3?E(T):x>3?E(m,v,T):E(m,v))||T);return x>3&&T&&Object.defineProperty(m,v,T),T};let tu={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},td=class extends e_.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=ew.SnackController.state.open,this.unsubscribe.push(ew.SnackController.subscribeKey("open",d=>{this.open=d,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(d=>d())}render(){let{message:d,variant:m}=ew.SnackController.state,v=tu[m];return e_.dy`
      <wui-snackbar
        message=${d}
        backgroundColor=${v.backgroundColor}
        iconColor=${v.iconColor}
        icon=${v.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>ew.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};td.styles=tc,w3m_snackbar_decorate([(0,eC.SB)()],td.prototype,"open",void 0),td=w3m_snackbar_decorate([(0,ev.customElement)("w3m-snackbar")],td);let th=!1;let Web3ModalScaffold=class Web3ModalScaffold{constructor(d){this.initPromise=void 0,this.setIsConnected=d=>{ew.AccountController.setIsConnected(d)},this.setCaipAddress=d=>{ew.AccountController.setCaipAddress(d)},this.setBalance=(d,m)=>{ew.AccountController.setBalance(d,m)},this.setProfileName=d=>{ew.AccountController.setProfileName(d)},this.setProfileImage=d=>{ew.AccountController.setProfileImage(d)},this.resetAccount=()=>{ew.AccountController.resetAccount()},this.setCaipNetwork=d=>{ew.NetworkController.setCaipNetwork(d)},this.getCaipNetwork=()=>ew.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=d=>{ew.NetworkController.setRequestedCaipNetworks(d)},this.getApprovedCaipNetworksData=()=>ew.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{ew.NetworkController.resetNetwork()},this.setConnectors=d=>{ew.ConnectorController.setConnectors(d)},this.addConnector=d=>{ew.ConnectorController.addConnector(d)},this.getConnectors=()=>ew.ConnectorController.getConnectors(),this.resetWcConnection=()=>{ew.ConnectionController.resetWcConnection()},this.fetchIdentity=d=>ew.Lr.fetchIdentity(d),this.setAddressExplorerUrl=d=>{ew.AccountController.setAddressExplorerUrl(d)},this.initControllers(d),this.initOrContinue()}async open(d){await this.initOrContinue(),ew.IN.open(d)}async close(){await this.initOrContinue(),ew.IN.close()}getThemeMode(){return ew.ThemeController.state.themeMode}getThemeVariables(){return ew.ThemeController.state.themeVariables}setThemeMode(d){ew.ThemeController.setThemeMode(d),(0,ev.setColorTheme)(ew.ThemeController.state.themeMode)}setThemeVariables(d){ew.ThemeController.setThemeVariables(d),(0,ev.setThemeVariables)(ew.ThemeController.state.themeVariables)}subscribeTheme(d){return ew.ThemeController.subscribe(d)}getState(){return{...ew.Ie.state}}subscribeState(d){return ew.Ie.subscribe(d)}getEvent(){return{...ew.Xs.state}}subscribeEvents(d){return ew.Xs.subscribe(d)}initControllers(d){ew.NetworkController.setClient(d.networkControllerClient),ew.NetworkController.setDefaultCaipNetwork(d.defaultChain),ew.OptionsController.setProjectId(d.projectId),ew.OptionsController.setIncludeWalletIds(d.includeWalletIds),ew.OptionsController.setExcludeWalletIds(d.excludeWalletIds),ew.OptionsController.setFeaturedWalletIds(d.featuredWalletIds),ew.OptionsController.setTokens(d.tokens),ew.OptionsController.setTermsConditionsUrl(d.termsConditionsUrl),ew.OptionsController.setPrivacyPolicyUrl(d.privacyPolicyUrl),ew.OptionsController.setCustomWallets(d.customWallets),ew.OptionsController.setEnableAnalytics(d.enableAnalytics),ew.OptionsController.setSdkVersion(d._sdkVersion),ew.ConnectionController.setClient(d.connectionControllerClient),d.metadata&&ew.OptionsController.setMetadata(d.metadata),d.themeMode&&ew.ThemeController.setThemeMode(d.themeMode),d.themeVariables&&ew.ThemeController.setThemeVariables(d.themeVariables)}async initOrContinue(){return!this.initPromise&&!th&&ew.j1.isClient()&&(th=!0,this.initPromise=new Promise(async d=>{await Promise.all([Promise.resolve().then(v.bind(v,92967)),Promise.resolve().then(v.bind(v,72161))]);let m=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",m),d()})),this.initPromise}};let tf={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.2.0-alpha.1"},tp={ConnectorExplorerIds:{[tf.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[tf.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[tf.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[tf.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[tf.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[tf.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[tf.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[tf.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[tf.INJECTED_CONNECTOR_ID]:"Browser Wallet",[tf.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[tf.COINBASE_CONNECTOR_ID]:"Coinbase",[tf.LEDGER_CONNECTOR_ID]:"Ledger",[tf.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[tf.INJECTED_CONNECTOR_ID]:"INJECTED",[tf.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[tf.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},tg={caipNetworkIdToNumber:d=>d?Number(d.split(":")[1]):void 0,getCaipTokens(d){if(!d)return;let m={};return Object.entries(d).forEach(([d,v])=>{m[`${tf.EIP155}:${d}`]=v}),m}};function getCaipDefaultChain(d){if(d)return{id:`${tf.EIP155}:${d.id}`,name:d.name,imageId:tp.EIP155NetworkImageIds[d.id]}}let Web3Modal=class Web3Modal extends Web3ModalScaffold{constructor(d){let{wagmiConfig:m,chains:v,defaultChain:_,tokens:E,_sdkVersion:x,...T}=d;if(!m)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!T.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!m.connectors.find(d=>d.id===tf.WALLET_CONNECT_CONNECTOR_ID))throw Error("web3modal:constructor - WalletConnectConnector is required");let A={connectWalletConnect:async d=>{let v=m.connectors.find(d=>d.id===tf.WALLET_CONNECT_CONNECTOR_ID);if(!v)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");v.on("message",m=>{"display_uri"===m.type&&(d(m.data),v.removeAllListeners())});let _=tg.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,eb.$j)({connector:v,chainId:_})},connectExternal:async({id:d,provider:v,info:_})=>{let E=m.connectors.find(m=>m.id===d);if(!E)throw Error("connectionControllerClient:connectExternal - connector is undefined");v&&_&&E.id===tf.EIP6963_CONNECTOR_ID&&E.setEip6963Wallet?.({provider:v,info:_});let x=tg.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,eb.$j)({connector:E,chainId:x})},checkInstalled:d=>{let m=this.getConnectors().filter(d=>"ANNOUNCED"===d.type),v=this.getConnectors().find(d=>"INJECTED"===d.type);if(!d)return!!window.ethereum;if(m.length){let v=d.some(d=>m.some(m=>m.info?.rdns===d));if(v)return!0}return!!v&&!!window?.ethereum&&d.some(d=>!!window.ethereum?.[String(d)])},disconnect:eb.zP};super({networkControllerClient:{switchCaipNetwork:async d=>{let m=tg.caipNetworkIdToNumber(d?.id);m&&await (0,eb.If)({chainId:m})},async getApprovedCaipNetworksData(){let d=localStorage.getItem("wagmi.wallet");if(d?.includes(tf.WALLET_CONNECT_CONNECTOR_ID)){let d=m.connectors.find(d=>d.id===tf.WALLET_CONNECT_CONNECTOR_ID);if(!d)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let v=await d.getProvider(),_=v.signer?.session?.namespaces,E=_?.[tf.EIP155]?.methods,x=_?.[tf.EIP155]?.chains;return{supportsAllNetworks:E?.includes(tf.ADD_CHAIN_METHOD),approvedCaipNetworkIds:x}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:A,defaultChain:getCaipDefaultChain(_),tokens:tg.getCaipTokens(E),_sdkVersion:x??`html-wagmi-${tf.VERSION}`,...T}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=d,this.syncRequestedNetworks(v),this.syncConnectors(m),this.listenConnectors(m),(0,eb.uH)(()=>this.syncAccount()),(0,eb.QC)(()=>this.syncNetwork())}getState(){let d=super.getState();return{...d,selectedNetworkId:tg.caipNetworkIdToNumber(d.selectedNetworkId)}}subscribeState(d){return super.subscribeState(m=>d({...m,selectedNetworkId:tg.caipNetworkIdToNumber(m.selectedNetworkId)}))}syncRequestedNetworks(d){let m=d?.map(d=>({id:`${tf.EIP155}:${d.id}`,name:d.name,imageId:tp.EIP155NetworkImageIds[d.id],imageUrl:this.options?.chainImages?.[d.id]}));this.setRequestedCaipNetworks(m??[])}async syncAccount(){let{address:d,isConnected:m}=(0,eb.D0)(),{chain:v}=(0,eb.Hy)();if(this.resetAccount(),m&&d&&v){let _=`${tf.EIP155}:${v.id}:${d}`;this.setIsConnected(m),this.setCaipAddress(_),await Promise.all([this.syncProfile(d),this.syncBalance(d,v),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!m&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:d,isConnected:m}=(0,eb.D0)(),{chain:v}=(0,eb.Hy)();if(v){let _=String(v.id),E=`${tf.EIP155}:${_}`;if(this.setCaipNetwork({id:E,name:v.name,imageId:tp.EIP155NetworkImageIds[v.id],imageUrl:this.options?.chainImages?.[v.id]}),m&&d){let m=`${tf.EIP155}:${v.id}:${d}`;if(this.setCaipAddress(m),v.blockExplorers?.default?.url){let m=`${v.blockExplorers.default.url}/address/${d}`;this.setAddressExplorerUrl(m)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(d,v)}}}async syncProfile(d){try{let{name:m,avatar:v}=await this.fetchIdentity({caipChainId:`${tf.EIP155}:${ey.R.id}`,address:d});this.setProfileName(m),this.setProfileImage(v)}catch{let m=await (0,eb.Lk)({address:d,chainId:ey.R.id});if(m){this.setProfileName(m);let d=await (0,eb.w6)({name:m,chainId:ey.R.id});d&&this.setProfileImage(d)}}}async syncBalance(d,m){let v=await (0,eb.EG)({address:d,chainId:m.id,token:this.options?.tokens?.[m.id]?.address});this.setBalance(v.formatted,v.symbol)}syncConnectors(d){let m=[];d.connectors.forEach(({id:d,name:v})=>{d!==tf.EIP6963_CONNECTOR_ID&&m.push({id:d,explorerId:tp.ConnectorExplorerIds[d],imageId:tp.ConnectorImageIds[d],imageUrl:this.options?.connectorImages?.[d],name:tp.ConnectorNamesMap[d]??v,type:tp.ConnectorTypesMap[d]??"EXTERNAL"})}),this.setConnectors(m)}eip6963EventHandler(d,m){if(m.detail){let{info:v,provider:_}=m.detail,E=this.getConnectors(),x=E.find(d=>d.name===v.name);x||(this.addConnector({id:tf.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:v.icon??this.options?.connectorImages?.[tf.EIP6963_CONNECTOR_ID],name:v.name,provider:_,info:v}),d.isAuthorized({info:v,provider:_}))}}listenConnectors(d){let m=d.connectors.find(d=>d.id===tf.EIP6963_CONNECTOR_ID);if("undefined"!=typeof window&&m){let d=this.eip6963EventHandler.bind(this,m);window.addEventListener(tf.EIP6963_ANNOUNCE_EVENT,d),window.dispatchEvent(new Event(tf.EIP6963_REQUEST_EVENT))}}};var tm=v(20350),__classPrivateFieldSet=function(d,m,v,_,E){if("m"===_)throw TypeError("Private method is not writable");if("a"===_&&!E)throw TypeError("Private accessor was defined without a setter");if("function"==typeof m?d!==m||!E:!m.has(d))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===_?E.call(d,v):E?E.value=v:m.set(d,v),v},__classPrivateFieldGet=function(d,m,v,_){if("a"===v&&!_)throw TypeError("Private accessor was defined without a getter");if("function"==typeof m?d!==m||!_:!m.has(d))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===v?_:"a"===v?_.call(d):_?_.value:m.get(d)};let tb="connectedRdns";let EIP6963Connector=class EIP6963Connector extends tm._{constructor(d){super({chains:d.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",x.set(this,void 0),T.set(this,void 0),__classPrivateFieldSet(this,x,this.options.getProvider(),"f")}async connect(d){let m=await super.connect(d);return __classPrivateFieldGet(this,T,"f")&&this.storage?.setItem(tb,__classPrivateFieldGet(this,T,"f").info.rdns),m}async disconnect(){await super.disconnect(),this.storage?.removeItem(tb),__classPrivateFieldSet(this,T,void 0,"f")}async isAuthorized(d){let m=this.storage?.getItem(tb);if(m){if(!d||m!==d.info.rdns)return!0;__classPrivateFieldSet(this,T,d,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(__classPrivateFieldGet(this,T,"f")?.provider??__classPrivateFieldGet(this,x,"f"))}setEip6963Wallet(d){__classPrivateFieldSet(this,T,d,"f")}};x=new WeakMap,T=new WeakMap;var ty=v(14300);"undefined"==typeof window||(window.Buffer||(window.Buffer=ty.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var tw=v(38239),tv=v(55185),t_=v(40809),tC=v(63582),tE=v(53526),tx=v(26544),tS=v(59969),tP=v(42899),tO=v(60208),tk=class extends tC.wR{constructor({chains:d,options:m}){super({chains:d,options:{reloadOnDisconnect:!1,...m}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,tC.Ko)(this,A,void 0),(0,tC.Ko)(this,j,void 0),this.onAccountsChanged=d=>{0===d.length?this.emit("disconnect"):this.emit("change",{account:(0,tE.K)(d[0])})},this.onChainChanged=d=>{let m=(0,t_.J)(d),v=this.isChainUnsupported(m);this.emit("change",{chain:{id:m,unsupported:v}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:d}={}){try{let m=await this.getProvider();m.on("accountsChanged",this.onAccountsChanged),m.on("chainChanged",this.onChainChanged),m.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let v=await m.enable(),_=(0,tE.K)(v[0]),E=await this.getChainId(),x=this.isChainUnsupported(E);if(d&&E!==d){let m=await this.switchChain(d);E=m.id,x=this.isChainUnsupported(E)}return{account:_,chain:{id:E,unsupported:x}}}catch(d){if(/(user closed modal|accounts received is empty)/i.test(d.message))throw new tx.ab(d);throw d}}async disconnect(){if(!(0,tC.ac)(this,j))return;let d=await this.getProvider();d.removeListener("accountsChanged",this.onAccountsChanged),d.removeListener("chainChanged",this.onChainChanged),d.removeListener("disconnect",this.onDisconnect),d.disconnect(),d.close()}async getAccount(){let d=await this.getProvider(),m=await d.request({method:"eth_accounts"});return(0,tE.K)(m[0])}async getChainId(){let d=await this.getProvider(),m=(0,t_.J)(d.chainId);return m}async getProvider(){if(!(0,tC.ac)(this,j)){let d=(await Promise.all([v.e(979),v.e(360),v.e(427)]).then(v.t.bind(v,65427,19))).default;"function"!=typeof d&&"function"==typeof d.default&&(d=d.default),(0,tC.qx)(this,A,new d(this.options));let m=tC.ac(this,A).walletExtension?.getChainId(),_=this.chains.find(d=>this.options.chainId?d.id===this.options.chainId:d.id===m)||this.chains[0],E=this.options.chainId||_?.id,x=this.options.jsonRpcUrl||_?.rpcUrls.default.http[0];(0,tC.qx)(this,j,(0,tC.ac)(this,A).makeWeb3Provider(x,E))}return(0,tC.ac)(this,j)}async getWalletClient({chainId:d}={}){let[m,v]=await Promise.all([this.getProvider(),this.getAccount()]),_=this.chains.find(m=>m.id===d);if(!m)throw Error("provider is required.");return(0,tS.K)({account:v,chain:_,transport:(0,tP.P)(m)})}async isAuthorized(){try{let d=await this.getAccount();return!!d}catch{return!1}}async switchChain(d){let m=await this.getProvider(),v=(0,tO.eC)(d);try{return await m.request({method:"wallet_switchEthereumChain",params:[{chainId:v}]}),this.chains.find(m=>m.id===d)??{id:d,name:`Chain ${v}`,network:`${v}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(E){let _=this.chains.find(m=>m.id===d);if(!_)throw new tv.B({chainId:d,connectorId:this.id});if(4902===E.code)try{return await m.request({method:"wallet_addEthereumChain",params:[{chainId:v,chainName:_.name,nativeCurrency:_.nativeCurrency,rpcUrls:[_.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(_)}]}),_}catch(d){throw new tx.ab(d)}throw new tx.x3(E)}}async watchAsset({address:d,decimals:m=18,image:v,symbol:_}){let E=await this.getProvider();return E.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:d,decimals:m,image:v,symbol:_}}})}};A=new WeakMap,j=new WeakMap;var tR=v(25799),tT="eip155",tA="requestedChains",tD="wallet_addEthereumChain",tI=class extends tC.wR{constructor(d){super({...d,options:{isNewChainsStale:!0,...d.options}}),(0,tC.Ko)(this,W),(0,tC.Ko)(this,Q),(0,tC.Ko)(this,ee),(0,tC.Ko)(this,ei),(0,tC.Ko)(this,ea),(0,tC.Ko)(this,el),(0,tC.Ko)(this,eu),(0,tC.Ko)(this,eh),(0,tC.Ko)(this,ep),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,tC.Ko)(this,U,void 0),(0,tC.Ko)(this,F,void 0),this.onAccountsChanged=d=>{0===d.length?this.emit("disconnect"):this.emit("change",{account:(0,tE.K)(d[0])})},this.onChainChanged=d=>{let m=Number(d),v=this.isChainUnsupported(m);this.emit("change",{chain:{id:m,unsupported:v}})},this.onDisconnect=()=>{(0,tC.U9)(this,el,ec).call(this,[]),this.emit("disconnect")},this.onDisplayUri=d=>{this.emit("message",{type:"display_uri",data:d})},this.onConnect=()=>{this.emit("connect",{})},(0,tC.U9)(this,W,K).call(this)}async connect({chainId:d,pairingTopic:m}={}){try{let v=d;if(!v){let d=this.storage?.getItem("store"),m=d?.state?.data?.chain?.id;v=m&&!this.isChainUnsupported(m)?m:this.chains[0]?.id}if(!v)throw Error("No chains found on connector.");let _=await this.getProvider();(0,tC.U9)(this,ei,eo).call(this);let E=(0,tC.U9)(this,ee,er).call(this);if(_.session&&E&&await _.disconnect(),!_.session||E){let d=this.chains.filter(d=>d.id!==v).map(d=>d.id);this.emit("message",{type:"connecting"}),await _.connect({pairingTopic:m,chains:[v],optionalChains:d.length?d:void 0}),(0,tC.U9)(this,el,ec).call(this,this.chains.map(({id:d})=>d))}let x=await _.enable(),T=(0,tE.K)(x[0]),A=await this.getChainId(),j=this.isChainUnsupported(A);return{account:T,chain:{id:A,unsupported:j}}}catch(d){if(/user rejected/i.test(d?.message))throw new tx.ab(d);throw d}}async disconnect(){let d=await this.getProvider();try{await d.disconnect()}catch(d){if(!/No matching key/i.test(d.message))throw d}finally{(0,tC.U9)(this,ea,es).call(this),(0,tC.U9)(this,el,ec).call(this,[])}}async getAccount(){let{accounts:d}=await this.getProvider();return(0,tE.K)(d[0])}async getChainId(){let{chainId:d}=await this.getProvider();return d}async getProvider({chainId:d}={}){return(0,tC.ac)(this,U)||await (0,tC.U9)(this,W,K).call(this),d&&await this.switchChain(d),(0,tC.ac)(this,U)}async getWalletClient({chainId:d}={}){let[m,v]=await Promise.all([this.getProvider({chainId:d}),this.getAccount()]),_=this.chains.find(m=>m.id===d);if(!m)throw Error("provider is required.");return(0,tS.K)({account:v,chain:_,transport:(0,tP.P)(m)})}async isAuthorized(){try{let[d,m]=await Promise.all([this.getAccount(),this.getProvider()]),v=(0,tC.U9)(this,ee,er).call(this);if(!d)return!1;if(v&&m.session){try{await m.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(d){let m=this.chains.find(m=>m.id===d);if(!m)throw new tx.x3(Error("chain not found on connector."));try{let v=await this.getProvider(),_=(0,tC.U9)(this,eh,ef).call(this),E=(0,tC.U9)(this,ep,eg).call(this),x=_.includes(d);if(!x&&E.includes(tD)){await v.request({method:tD,params:[{chainId:(0,tO.eC)(m.id),blockExplorerUrls:[m.blockExplorers?.default?.url],chainName:m.name,nativeCurrency:m.nativeCurrency,rpcUrls:[...m.rpcUrls.default.http]}]});let _=(0,tC.U9)(this,eu,ed).call(this);_.push(d),(0,tC.U9)(this,el,ec).call(this,_)}return await v.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,tO.eC)(d)}]}),m}catch(m){let d="string"==typeof m?m:m?.message;if(/user rejected request/i.test(d))throw new tx.ab(m);throw new tx.x3(m)}}};function publicProvider(){return function(d){return d.rpcUrls.public.http[0]?{chain:d,rpcUrls:d.rpcUrls.public}:null}}U=new WeakMap,F=new WeakMap,W=new WeakSet,K=async function(){return(0,tC.ac)(this,F)||"undefined"==typeof window||(0,tC.qx)(this,F,(0,tC.U9)(this,Q,X).call(this)),(0,tC.ac)(this,F)},Q=new WeakSet,X=async function(){let{EthereumProvider:d,OPTIONAL_EVENTS:m,OPTIONAL_METHODS:_}=await Promise.all([v.e(360),v.e(970)]).then(v.bind(v,23970)),[E,...x]=this.chains.map(({id:d})=>d);if(E){let{projectId:v,showQrModal:T=!0,qrModalOptions:A,metadata:j,relayUrl:F}=this.options;(0,tC.qx)(this,U,await d.init({showQrModal:T,qrModalOptions:A,projectId:v,optionalMethods:_,optionalEvents:m,chains:[E],optionalChains:x.length?x:void 0,rpcMap:Object.fromEntries(this.chains.map(d=>[d.id,d.rpcUrls.default.http[0]])),metadata:j,relayUrl:F}))}},ee=new WeakSet,er=function(){let d=(0,tC.U9)(this,ep,eg).call(this);if(d.includes(tD)||!this.options.isNewChainsStale)return!1;let m=(0,tC.U9)(this,eu,ed).call(this),v=this.chains.map(({id:d})=>d),_=(0,tC.U9)(this,eh,ef).call(this);return(!_.length||!!_.some(d=>v.includes(d)))&&!v.every(d=>m.includes(d))},ei=new WeakSet,eo=function(){(0,tC.ac)(this,U)&&((0,tC.U9)(this,ea,es).call(this),(0,tC.ac)(this,U).on("accountsChanged",this.onAccountsChanged),(0,tC.ac)(this,U).on("chainChanged",this.onChainChanged),(0,tC.ac)(this,U).on("disconnect",this.onDisconnect),(0,tC.ac)(this,U).on("session_delete",this.onDisconnect),(0,tC.ac)(this,U).on("display_uri",this.onDisplayUri),(0,tC.ac)(this,U).on("connect",this.onConnect))},ea=new WeakSet,es=function(){(0,tC.ac)(this,U)&&((0,tC.ac)(this,U).removeListener("accountsChanged",this.onAccountsChanged),(0,tC.ac)(this,U).removeListener("chainChanged",this.onChainChanged),(0,tC.ac)(this,U).removeListener("disconnect",this.onDisconnect),(0,tC.ac)(this,U).removeListener("session_delete",this.onDisconnect),(0,tC.ac)(this,U).removeListener("display_uri",this.onDisplayUri),(0,tC.ac)(this,U).removeListener("connect",this.onConnect))},el=new WeakSet,ec=function(d){this.storage?.setItem(tA,d)},eu=new WeakSet,ed=function(){return this.storage?.getItem(tA)??[]},eh=new WeakSet,ef=function(){if(!(0,tC.ac)(this,U))return[];let d=tC.ac(this,U).session?.namespaces;if(!d)return[];let m=(0,tR.normalizeNamespaces)(d),v=m[tT]?.chains?.map(d=>parseInt(d.split(":")[1]||""));return v??[]},ep=new WeakSet,eg=function(){if(!(0,tC.ac)(this,U))return[];let d=tC.ac(this,U).session?.namespaces;if(!d)return[];let m=(0,tR.normalizeNamespaces)(d),v=m[tT]?.methods;return v??[]};let tN=ew.j1.getBlockchainApiUrl();function walletConnectProvider({projectId:d}){return function(m){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(m.id))return null;let v=`${tN}/v1/?chainId=${tf.EIP155}:${m.id}&projectId=${d}`;return{chain:{...m,rpcUrls:{...m.rpcUrls,default:{http:[v]}}},rpcUrls:{http:[v]}}}}function defaultWagmiConfig({projectId:d,chains:m,metadata:v}){let{publicClient:_}=(0,eb.QB)(m,[walletConnectProvider({projectId:d}),publicProvider()]);return(0,tw._g)({autoConnect:!0,connectors:[new tI({chains:m,options:{projectId:d,showQrModal:!1,metadata:v}}),new EIP6963Connector({chains:m}),new tm._({chains:m,options:{shimDisconnect:!0}}),new tk({chains:m,options:{appName:v?.name??"Unknown"}})],publicClient:_})}function createWeb3Modal(d){return E||getWeb3Modal(E=new Web3Modal({...d,_sdkVersion:`react-wagmi-${tf.VERSION}`})),E}},81162:(d,m,v)=>{"use strict";v.d(m,{Jb:()=>ec,Ld:()=>eu,YP:()=>el,_$LH:()=>ef,dy:()=>es,sY:()=>Z});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _=globalThis,E=_.trustedTypes,x=E?E.createPolicy("lit-html",{createHTML:d=>d}):void 0,T="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,j="?"+A,U=`<${j}>`,F=void 0===_.document?{createTreeWalker:()=>({})}:document,l=()=>F.createComment(""),c=d=>null===d||"object"!=typeof d&&"function"!=typeof d,W=Array.isArray,u=d=>W(d)||"function"==typeof d?.[Symbol.iterator],K="[ 	\n\f\r]",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,ee=/>/g,er=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ei=/'/g,eo=/"/g,ea=/^(?:script|style|textarea|title)$/i,y=d=>(m,...v)=>({_$litType$:d,strings:m,values:v}),es=y(1),el=y(2),ec=Symbol.for("lit-noChange"),eu=Symbol.for("lit-nothing"),ed=new WeakMap,eh=F.createTreeWalker(F,129);function C(d,m){if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(m):m}let P=(d,m)=>{let v=d.length-1,_=[],E,x=2===m?"<svg>":"",j=Q;for(let m=0;m<v;m++){let v=d[m],F,W,K=-1,es=0;for(;es<v.length&&(j.lastIndex=es,null!==(W=j.exec(v)));)es=j.lastIndex,j===Q?"!--"===W[1]?j=X:void 0!==W[1]?j=ee:void 0!==W[2]?(ea.test(W[2])&&(E=RegExp("</"+W[2],"g")),j=er):void 0!==W[3]&&(j=er):j===er?">"===W[0]?(j=E??Q,K=-1):void 0===W[1]?K=-2:(K=j.lastIndex-W[2].length,F=W[1],j=void 0===W[3]?er:'"'===W[3]?eo:ei):j===eo||j===ei?j=er:j===X||j===ee?j=Q:(j=er,E=void 0);let el=j===er&&d[m+1].startsWith("/>")?" ":"";x+=j===Q?v+U:K>=0?(_.push(F),v.slice(0,K)+T+v.slice(K)+A+el):v+A+(-2===K?m:el)}return[C(d,x+(d[v]||"<?>")+(2===m?"</svg>":"")),_]};let V=class V{constructor({strings:d,_$litType$:m},v){let _;this.parts=[];let x=0,U=0,F=d.length-1,W=this.parts,[K,Q]=P(d,m);if(this.el=V.createElement(K,v),eh.currentNode=this.el.content,2===m){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;null!==(_=eh.nextNode())&&W.length<F;){if(1===_.nodeType){if(_.hasAttributes())for(let d of _.getAttributeNames())if(d.endsWith(T)){let m=Q[U++],v=_.getAttribute(d).split(A),E=/([.?@])?(.*)/.exec(m);W.push({type:1,index:x,name:E[2],strings:v,ctor:"."===E[1]?R:"?"===E[1]?H:"@"===E[1]?I:k}),_.removeAttribute(d)}else d.startsWith(A)&&(W.push({type:6,index:x}),_.removeAttribute(d));if(ea.test(_.tagName)){let d=_.textContent.split(A),m=d.length-1;if(m>0){_.textContent=E?E.emptyScript:"";for(let v=0;v<m;v++)_.append(d[v],l()),eh.nextNode(),W.push({type:2,index:++x});_.append(d[m],l())}}}else if(8===_.nodeType){if(_.data===j)W.push({type:2,index:x});else{let d=-1;for(;-1!==(d=_.data.indexOf(A,d+1));)W.push({type:7,index:x}),d+=A.length-1}}x++}}static createElement(d,m){let v=F.createElement("template");return v.innerHTML=d,v}};function N(d,m,v=d,_){if(m===ec)return m;let E=void 0!==_?v._$Co?.[_]:v._$Cl,x=c(m)?void 0:m._$litDirective$;return E?.constructor!==x&&(E?._$AO?.(!1),void 0===x?E=void 0:(E=new x(d))._$AT(d,v,_),void 0!==_?(v._$Co??=[])[_]=E:v._$Cl=E),void 0!==E&&(m=N(d,E._$AS(d,m.values),E,_)),m}let S=class S{constructor(d,m){this._$AV=[],this._$AN=void 0,this._$AD=d,this._$AM=m}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(d){let{el:{content:m},parts:v}=this._$AD,_=(d?.creationScope??F).importNode(m,!0);eh.currentNode=_;let E=eh.nextNode(),x=0,T=0,A=v[0];for(;void 0!==A;){if(x===A.index){let m;2===A.type?m=new M(E,E.nextSibling,this,d):1===A.type?m=new A.ctor(E,A.name,A.strings,this,d):6===A.type&&(m=new L(E,this,d)),this._$AV.push(m),A=v[++T]}x!==A?.index&&(E=eh.nextNode(),x++)}return eh.currentNode=F,_}p(d){let m=0;for(let v of this._$AV)void 0!==v&&(void 0!==v.strings?(v._$AI(d,v,m),m+=v.strings.length-2):v._$AI(d[m])),m++}};let M=class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(d,m,v,_){this.type=2,this._$AH=eu,this._$AN=void 0,this._$AA=d,this._$AB=m,this._$AM=v,this.options=_,this._$Cv=_?.isConnected??!0}get parentNode(){let d=this._$AA.parentNode,m=this._$AM;return void 0!==m&&11===d?.nodeType&&(d=m.parentNode),d}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(d,m=this){c(d=N(this,d,m))?d===eu||null==d||""===d?(this._$AH!==eu&&this._$AR(),this._$AH=eu):d!==this._$AH&&d!==ec&&this._(d):void 0!==d._$litType$?this.g(d):void 0!==d.nodeType?this.$(d):u(d)?this.T(d):this._(d)}k(d){return this._$AA.parentNode.insertBefore(d,this._$AB)}$(d){this._$AH!==d&&(this._$AR(),this._$AH=this.k(d))}_(d){this._$AH!==eu&&c(this._$AH)?this._$AA.nextSibling.data=d:this.$(F.createTextNode(d)),this._$AH=d}g(d){let{values:m,_$litType$:v}=d,_="number"==typeof v?this._$AC(d):(void 0===v.el&&(v.el=V.createElement(C(v.h,v.h[0]),this.options)),v);if(this._$AH?._$AD===_)this._$AH.p(m);else{let d=new S(_,this),v=d.u(this.options);d.p(m),this.$(v),this._$AH=d}}_$AC(d){let m=ed.get(d.strings);return void 0===m&&ed.set(d.strings,m=new V(d)),m}T(d){W(this._$AH)||(this._$AH=[],this._$AR());let m=this._$AH,v,_=0;for(let E of d)_===m.length?m.push(v=new M(this.k(l()),this.k(l()),this,this.options)):v=m[_],v._$AI(E),_++;_<m.length&&(this._$AR(v&&v._$AB.nextSibling,_),m.length=_)}_$AR(d=this._$AA.nextSibling,m){for(this._$AP?.(!1,!0,m);d&&d!==this._$AB;){let m=d.nextSibling;d.remove(),d=m}}setConnected(d){void 0===this._$AM&&(this._$Cv=d,this._$AP?.(d))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(d,m,v,_,E){this.type=1,this._$AH=eu,this._$AN=void 0,this.element=d,this.name=m,this._$AM=_,this.options=E,v.length>2||""!==v[0]||""!==v[1]?(this._$AH=Array(v.length-1).fill(new String),this.strings=v):this._$AH=eu}_$AI(d,m=this,v,_){let E=this.strings,x=!1;if(void 0===E)(x=!c(d=N(this,d,m,0))||d!==this._$AH&&d!==ec)&&(this._$AH=d);else{let _,T;let A=d;for(d=E[0],_=0;_<E.length-1;_++)(T=N(this,A[v+_],m,_))===ec&&(T=this._$AH[_]),x||=!c(T)||T!==this._$AH[_],T===eu?d=eu:d!==eu&&(d+=(T??"")+E[_+1]),this._$AH[_]=T}x&&!_&&this.j(d)}j(d){d===eu?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,d??"")}};let R=class R extends k{constructor(){super(...arguments),this.type=3}j(d){this.element[this.name]=d===eu?void 0:d}};let H=class H extends k{constructor(){super(...arguments),this.type=4}j(d){this.element.toggleAttribute(this.name,!!d&&d!==eu)}};let I=class I extends k{constructor(d,m,v,_,E){super(d,m,v,_,E),this.type=5}_$AI(d,m=this){if((d=N(this,d,m,0)??eu)===ec)return;let v=this._$AH,_=d===eu&&v!==eu||d.capture!==v.capture||d.once!==v.once||d.passive!==v.passive,E=d!==eu&&(v===eu||_);_&&this.element.removeEventListener(this.name,this,v),E&&this.element.addEventListener(this.name,this,d),this._$AH=d}handleEvent(d){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,d):this._$AH.handleEvent(d)}};let L=class L{constructor(d,m,v){this.element=d,this.type=6,this._$AN=void 0,this._$AM=m,this.options=v}get _$AU(){return this._$AM._$AU}_$AI(d){N(this,d)}};let ef={S:T,A:A,P:j,C:1,M:P,L:S,R:u,V:N,D:M,I:k,H,N:I,U:R,B:L},ep=_.litHtmlPolyfillSupport;ep?.(V,M),(_.litHtmlVersions??=[]).push("3.0.1");let Z=(d,m,v)=>{let _=v?.renderBefore??m,E=_._$litPart$;if(void 0===E){let d=v?.renderBefore??null;_._$litPart$=E=new M(m.insertBefore(l(),d),d,void 0,v??{})}return E._$AI(d),E}},86968:(d,m,v)=>{"use strict";v.d(m,{Cb:()=>n,SB:()=>state_r});var _=v(98329);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let E={attribute:!0,type:String,converter:_.Ts,reflect:!1,hasChanged:_.Qu},r=(d=E,m,v)=>{let{kind:_,metadata:x}=v,T=globalThis.litPropertyMetadata.get(x);if(void 0===T&&globalThis.litPropertyMetadata.set(x,T=new Map),T.set(v.name,d),"accessor"===_){let{name:_}=v;return{set(v){let E=m.get.call(this);m.set.call(this,v),this.requestUpdate(_,E,d)},init(m){return void 0!==m&&this.C(_,void 0,d),m}}}if("setter"===_){let{name:_}=v;return function(v){let E=this[_];m.call(this,v),this.requestUpdate(_,E,d)}}throw Error("Unsupported decorator location: "+_)};function n(d){return(m,v)=>"object"==typeof v?r(d,m,v):((d,m,v)=>{let _=m.hasOwnProperty(v);return m.constructor.createProperty(v,_?{...d,wrapped:!0}:d),_?Object.getOwnPropertyDescriptor(m,v):void 0})(d,m,v)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(d){return n({...d,state:!0,attribute:!1})}},97521:(d,m,v)=>{"use strict";v.d(m,{o:()=>o});var _=v(81162);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=d=>d??_.Ld},7712:(d,m,v)=>{"use strict";v.d(m,{oi:()=>s,iv:()=>_.iv,dy:()=>E.dy,YP:()=>E.YP,$m:()=>_.$m});var _=v(98329),E=v(81162);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=class s extends _.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let d=super.createRenderRoot();return this.renderOptions.renderBefore??=d.firstChild,d}update(d){let m=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(d),this._$Do=(0,E.sY)(m,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E.Jb}};s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s});let x=globalThis.litElementPolyfillSupport;x?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.0.1")},36596:(d,m,v)=>{"use strict";function _interop_require_default(d){return d&&d.__esModule?d:{default:d}}v.r(m),v.d(m,{_:()=>_interop_require_default,_interop_require_default:()=>_interop_require_default})},42939:(d,m,v)=>{"use strict";v.d(m,{sj:()=>proxy,iH:()=>ref,CO:()=>snapshot,Ld:()=>subscribe}),Symbol();let _=Symbol(),E=Object.getPrototypeOf,x=new WeakMap,l=d=>d&&(x.has(d)?x.get(d):E(d)===Object.prototype||E(d)===Array.prototype),y=d=>l(d)&&d[_]||null,h=(d,m=!0)=>{x.set(d,m)},isObject=d=>"object"==typeof d&&null!==d,T=new WeakMap,A=new WeakSet,buildProxyFunction=(d=Object.is,m=(d,m)=>new Proxy(d,m),v=d=>isObject(d)&&!A.has(d)&&(Array.isArray(d)||!(Symbol.iterator in d))&&!(d instanceof WeakMap)&&!(d instanceof WeakSet)&&!(d instanceof Error)&&!(d instanceof Number)&&!(d instanceof Date)&&!(d instanceof String)&&!(d instanceof RegExp)&&!(d instanceof ArrayBuffer),_=d=>{switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:throw d}},E=new WeakMap,x=(d,m,v=_)=>{let j=E.get(d);if((null==j?void 0:j[0])===m)return j[1];let U=Array.isArray(d)?[]:Object.create(Object.getPrototypeOf(d));return h(U,!0),E.set(d,[m,U]),Reflect.ownKeys(d).forEach(m=>{if(Object.getOwnPropertyDescriptor(U,m))return;let _=Reflect.get(d,m),E={value:_,enumerable:!0,configurable:!0};if(A.has(_))h(_,!1);else if(_ instanceof Promise)delete E.value,E.get=()=>v(_);else if(T.has(_)){let[d,m]=T.get(_);E.value=x(d,m(),v)}Object.defineProperty(U,m,E)}),Object.preventExtensions(U)},j=new WeakMap,U=[1,1],F=_=>{if(!isObject(_))throw Error("object required");let E=j.get(_);if(E)return E;let W=U[0],K=new Set,notifyUpdate=(d,m=++U[0])=>{W!==m&&(W=m,K.forEach(v=>v(d,m)))},Q=U[1],ensureVersion=(d=++U[1])=>(Q===d||K.size||(Q=d,X.forEach(([m])=>{let v=m[1](d);v>W&&(W=v)})),W),createPropListener=d=>(m,v)=>{let _=[...m];_[1]=[d,..._[1]],notifyUpdate(_,v)},X=new Map,addPropListener=(d,m)=>{if(X.has(d))throw Error("prop listener already exists");if(K.size){let v=m[3](createPropListener(d));X.set(d,[m,v])}else X.set(d,[m])},removePropListener=d=>{var m;let v=X.get(d);v&&(X.delete(d),null==(m=v[1])||m.call(v))},addListener=d=>{K.add(d),1===K.size&&X.forEach(([d,m],v)=>{if(m)throw Error("remove already exists");let _=d[3](createPropListener(v));X.set(v,[d,_])});let removeListener=()=>{K.delete(d),0===K.size&&X.forEach(([d,m],v)=>{m&&(m(),X.set(v,[d]))})};return removeListener},ee=Array.isArray(_)?[]:Object.create(Object.getPrototypeOf(_)),er={deleteProperty(d,m){let v=Reflect.get(d,m);removePropListener(m);let _=Reflect.deleteProperty(d,m);return _&&notifyUpdate(["delete",[m],v]),_},set(m,_,E,x){let U=Reflect.has(m,_),W=Reflect.get(m,_,x);if(U&&(d(W,E)||j.has(E)&&d(W,j.get(E))))return!0;removePropListener(_),isObject(E)&&(E=y(E)||E);let K=E;if(E instanceof Promise)E.then(d=>{E.status="fulfilled",E.value=d,notifyUpdate(["resolve",[_],d])}).catch(d=>{E.status="rejected",E.reason=d,notifyUpdate(["reject",[_],d])});else{!T.has(E)&&v(E)&&(K=F(E));let d=!A.has(K)&&T.get(K);d&&addPropListener(_,d)}return Reflect.set(m,_,K,x),notifyUpdate(["set",[_],E,W]),!0}},ei=m(ee,er);j.set(_,ei);let eo=[ee,ensureVersion,x,addListener];return T.set(ei,eo),Reflect.ownKeys(_).forEach(d=>{let m=Object.getOwnPropertyDescriptor(_,d);"value"in m&&(ei[d]=_[d],delete m.value,delete m.writable),Object.defineProperty(ee,d,m)}),ei})=>[F,T,A,d,m,v,_,E,x,j,U],[j]=buildProxyFunction();function proxy(d={}){return j(d)}function subscribe(d,m,v){let _;let E=T.get(d);E||console.warn("Please use proxy object");let x=[],A=E[3],j=!1,U=A(d=>{if(x.push(d),v){m(x.splice(0));return}_||(_=Promise.resolve().then(()=>{_=void 0,j&&m(x.splice(0))}))});return j=!0,()=>{j=!1,U()}}function snapshot(d,m){let v=T.get(d);v||console.warn("Please use proxy object");let[_,E,x]=v;return x(_,E(),m)}function ref(d){return A.add(d),d}},65545:(d,m,v)=>{"use strict";function parseAccount(d){return"string"==typeof d?{address:d,type:"json-rpc"}:d}v.d(m,{T:()=>parseAccount})},90715:(d,m,v)=>{"use strict";v.d(m,{R:()=>call});var _=v(65545),E=v(39165),x=v(96405),T=v(10930),A=v(10145),j=v(63252),U=v(57575),F=v(10773),W=v(60208),K=v(73177),Q=v(91996);function getCallError(d,{docsPath:m,...v}){let _=(()=>{let m=(0,Q.k)(d,v);return m instanceof K.cj?d:m})();return new A.cg(_,{docsPath:m,...v})}var X=v(85088),ee=v(6569),er=v(62205),ei=v(5604);async function call(d,m){let{account:E=d.account,batch:x=!!d.batch?.multicall,blockNumber:A,blockTag:j="latest",accessList:U,data:F,gas:K,gasPrice:Q,maxFeePerGas:er,maxPriorityFeePerGas:eo,nonce:ea,to:es,value:el,...ec}=m,eu=E?(0,_.T)(E):void 0;try{(0,ei.F)(m);let v=A?(0,W.eC)(A):void 0,_=v||j,E=d.chain?.formatters?.transactionRequest?.format,ed=E||ee.tG,eh=ed({...(0,X.K)(ec,{format:E}),from:eu?.address,accessList:U,data:F,gas:K,gasPrice:Q,maxFeePerGas:er,maxPriorityFeePerGas:eo,nonce:ea,to:es,value:el});if(x&&shouldPerformMulticall({request:eh}))try{return await scheduleMulticall(d,{...eh,blockNumber:A,blockTag:j})}catch(d){if(!(d instanceof T.pZ)&&!(d instanceof T.mm))throw d}let ef=await d.request({method:"eth_call",params:_?[eh,_]:[eh]});if("0x"===ef)return{data:void 0};return{data:ef}}catch(T){let _=getRevertErrorData(T),{offchainLookup:E,offchainLookupSignature:x}=await v.e(794).then(v.bind(v,78230));if(_?.slice(0,10)===x&&es)return{data:await E(d,{data:_,to:es})};throw getCallError(T,{...m,account:eu,chain:d.chain})}}function shouldPerformMulticall({request:d}){let{data:m,to:v,..._}=d;return!(!m||m.startsWith("0x82ad56cb"))&&!!v&&!(Object.values(_).filter(d=>void 0!==d).length>0)}async function scheduleMulticall(d,m){let{batchSize:v=1024,wait:_=0}="object"==typeof d.batch?.multicall?d.batch.multicall:{},{blockNumber:x,blockTag:K="latest",data:Q,multicallAddress:X,to:ee}=m,ei=X;if(!ei){if(!d.chain)throw new T.pZ;ei=(0,F.L)({blockNumber:x,chain:d.chain,contract:"multicall3"})}let eo=x?(0,W.eC)(x):void 0,ea=eo||K,{schedule:es}=(0,er.S)({id:`${d.uid}.${ea}`,wait:_,shouldSplitBatch(d){let m=d.reduce((d,{data:m})=>d+(m.length-2),0);return m>2*v},fn:async m=>{let v=m.map(d=>({allowFailure:!0,callData:d.data,target:d.to})),_=(0,U.R)({abi:E.F8,args:[v],functionName:"aggregate3"}),x=await d.request({method:"eth_call",params:[{data:_,to:ei},ea]});return(0,j.k)({abi:E.F8,args:[v],functionName:"aggregate3",data:x||"0x"})}}),[{returnData:el,success:ec}]=await es({data:Q,to:ee});if(!ec)throw new A.VQ({data:el});return"0x"===el?{data:void 0}:{data:el}}function getRevertErrorData(d){if(!(d instanceof x.G))return;let m=d.walk();return"object"==typeof m.data?m.data.data:m.data}},53851:(d,m,v)=>{"use strict";v.d(m,{C:()=>internal_estimateFeesPerGas,X:()=>estimateFeesPerGas});var _=v(27846),E=v(96630),x=v(86127),T=v(29862),A=v(35208);async function estimateFeesPerGas(d,m){return internal_estimateFeesPerGas(d,m)}async function internal_estimateFeesPerGas(d,m){let{block:v,chain:j=d.chain,request:U,type:F="eip1559"}=m||{},W=await (async()=>"function"==typeof j?.fees?.baseFeeMultiplier?j.fees.baseFeeMultiplier({block:v,client:d,request:U}):j?.fees?.baseFeeMultiplier??1.2)();if(W<1)throw new _.Fz;let K=W.toString().split(".")[1]?.length??0,Q=10**K,multiply=d=>d*BigInt(Math.ceil(W*Q))/BigInt(Q),X=v||await (0,E.s)(d,T.Q)({});if("function"==typeof j?.fees?.estimateFeesPerGas)return j.fees.estimateFeesPerGas({block:v,client:d,multiply,request:U,type:F});if("eip1559"===F){if("bigint"!=typeof X.baseFeePerGas)throw new _.e5;let m=U?.maxPriorityFeePerGas?U.maxPriorityFeePerGas:await (0,x.h)(d,{block:X,chain:j,request:U}),v=multiply(X.baseFeePerGas),E=U?.maxFeePerGas??v+m;return{maxFeePerGas:E,maxPriorityFeePerGas:m}}let ee=U?.gasPrice??multiply(await (0,E.s)(d,A.o)({}));return{gasPrice:ee}}},86680:(d,m,v)=>{"use strict";v.d(m,{Q:()=>estimateGas});var _=v(65545),E=v(76472),x=v(60208),T=v(9690),A=v(36117),j=v(96405),U=v(96321);let EstimateGasExecutionError=class EstimateGasExecutionError extends j.G{constructor(d,{account:m,docsPath:v,chain:_,data:E,gas:x,gasPrice:j,maxFeePerGas:F,maxPriorityFeePerGas:W,nonce:K,to:Q,value:X}){let ee=(0,U.xr)({from:m?.address,to:Q,value:void 0!==X&&`${(0,T.d)(X)} ${_?.nativeCurrency.symbol||"ETH"}`,data:E,gas:x,gasPrice:void 0!==j&&`${(0,A.o)(j)} gwei`,maxFeePerGas:void 0!==F&&`${(0,A.o)(F)} gwei`,maxPriorityFeePerGas:void 0!==W&&`${(0,A.o)(W)} gwei`,nonce:K});super(d.shortMessage,{cause:d,docsPath:v,metaMessages:[...d.metaMessages?[...d.metaMessages," "]:[],"Estimate Gas Arguments:",ee].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=d}};var F=v(73177),W=v(91996);function getEstimateGasError(d,{docsPath:m,...v}){let _=(()=>{let m=(0,W.k)(d,v);return m instanceof F.cj?d:m})();return new EstimateGasExecutionError(_,{docsPath:m,...v})}var K=v(85088),Q=v(6569),X=v(5604),ee=v(56e3);async function estimateGas(d,m){let v=m.account??d.account;if(!v)throw new E.o({docsPath:"/docs/actions/public/estimateGas"});let T=(0,_.T)(v);try{let{accessList:v,blockNumber:_,blockTag:E,data:A,gas:j,gasPrice:U,maxFeePerGas:F,maxPriorityFeePerGas:W,nonce:er,to:ei,value:eo,...ea}="local"===T.type?await (0,ee.Z)(d,m):m,es=_?(0,x.eC)(_):void 0,el=es||E;(0,X.F)(m);let ec=d.chain?.formatters?.transactionRequest?.format,eu=ec||Q.tG,ed=eu({...(0,K.K)(ea,{format:ec}),from:T.address,accessList:v,data:A,gas:j,gasPrice:U,maxFeePerGas:F,maxPriorityFeePerGas:W,nonce:er,to:ei,value:eo}),eh=await d.request({method:"eth_estimateGas",params:el?[ed,el]:[ed]});return BigInt(eh)}catch(v){throw getEstimateGasError(v,{...m,account:T,chain:d.chain})}}},86127:(d,m,v)=>{"use strict";v.d(m,{_:()=>estimateMaxPriorityFeePerGas,h:()=>internal_estimateMaxPriorityFeePerGas});var _=v(27846),E=v(90953),x=v(96630),T=v(29862),A=v(35208);async function estimateMaxPriorityFeePerGas(d,m){return internal_estimateMaxPriorityFeePerGas(d,m)}async function internal_estimateMaxPriorityFeePerGas(d,m){let{block:v,chain:j=d.chain,request:U}=m||{};if("function"==typeof j?.fees?.defaultPriorityFee){let m=v||await (0,x.s)(d,T.Q)({});return j.fees.defaultPriorityFee({block:m,client:d,request:U})}if(void 0!==j?.fees?.defaultPriorityFee)return j?.fees?.defaultPriorityFee;try{let m=await d.request({method:"eth_maxPriorityFeePerGas"});return(0,E.y_)(m)}catch{let[m,E]=await Promise.all([v?Promise.resolve(v):(0,x.s)(d,T.Q)({}),(0,x.s)(d,A.o)({})]);if("bigint"!=typeof m.baseFeePerGas)throw new _.e5;let j=E-m.baseFeePerGas;if(j<0n)return 0n;return j}}},29862:(d,m,v)=>{"use strict";v.d(m,{Q:()=>getBlock});var _=v(96405);let BlockNotFoundError=class BlockNotFoundError extends _.G{constructor({blockHash:d,blockNumber:m}){let v="Block";d&&(v=`Block at hash "${d}"`),m&&(v=`Block at number "${m}"`),super(`${v} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};var E=v(60208),x=v(64533);async function getBlock(d,{blockHash:m,blockNumber:v,blockTag:_,includeTransactions:T}={}){let A=T??!1,j=void 0!==v?(0,E.eC)(v):void 0,U=null;if(!(U=m?await d.request({method:"eth_getBlockByHash",params:[m,A]}):await d.request({method:"eth_getBlockByNumber",params:[j||(_??"latest"),A]})))throw new BlockNotFoundError({blockHash:m,blockNumber:v});let F=d.chain?.formatters?.block?.format||x.Z;return F(U)}},40817:(d,m,v)=>{"use strict";v.d(m,{L:()=>getChainId});var _=v(90953);async function getChainId(d){let m=await d.request({method:"eth_chainId"});return(0,_.ly)(m)}},35208:(d,m,v)=>{"use strict";async function getGasPrice(d){let m=await d.request({method:"eth_gasPrice"});return BigInt(m)}v.d(m,{o:()=>getGasPrice})},37569:(d,m,v)=>{"use strict";v.d(m,{K:()=>getTransactionCount});var _=v(90953),E=v(60208);async function getTransactionCount(d,{address:m,blockTag:v="latest",blockNumber:x}){let T=await d.request({method:"eth_getTransactionCount",params:[m,x?(0,E.eC)(x):v]});return(0,_.ly)(T)}},56e3:(d,m,v)=>{"use strict";v.d(m,{Z:()=>prepareTransactionRequest});var _=v(65545),E=v(53851),x=v(86680),T=v(29862),A=v(37569),j=v(76472),U=v(27846),F=v(96630),W=v(5604),K=v(96321);function getTransactionType(d){if(d.type)return d.type;if(void 0!==d.maxFeePerGas||void 0!==d.maxPriorityFeePerGas)return"eip1559";if(void 0!==d.gasPrice)return void 0!==d.accessList?"eip2930":"legacy";throw new K.j3({transaction:d})}async function prepareTransactionRequest(d,m){let{account:v=d.account,chain:K,gas:Q,nonce:X,type:ee}=m;if(!v)throw new j.o;let er=(0,_.T)(v),ei=await (0,F.s)(d,T.Q)({blockTag:"latest"}),eo={...m,from:er.address};if(void 0===X&&(eo.nonce=await (0,F.s)(d,A.K)({address:er.address,blockTag:"pending"})),void 0===ee)try{eo.type=getTransactionType(eo)}catch{eo.type="bigint"==typeof ei.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===eo.type){let{maxFeePerGas:v,maxPriorityFeePerGas:_}=await (0,E.C)(d,{block:ei,chain:K,request:eo});if(void 0===m.maxPriorityFeePerGas&&m.maxFeePerGas&&m.maxFeePerGas<_)throw new U.ld({maxPriorityFeePerGas:_});eo.maxPriorityFeePerGas=_,eo.maxFeePerGas=v}else{if(void 0!==m.maxFeePerGas||void 0!==m.maxPriorityFeePerGas)throw new U.e5;let{gasPrice:v}=await (0,E.C)(d,{block:ei,chain:K,request:eo,type:"legacy"});eo.gasPrice=v}return void 0===Q&&(eo.gas=await (0,F.s)(d,x.Q)({...eo,account:{address:er.address,type:"json-rpc"}})),(0,W.F)(eo),eo}},53908:(d,m,v)=>{"use strict";async function sendRawTransaction(d,{serializedTransaction:m}){return d.request({method:"eth_sendRawTransaction",params:[m]})}v.d(m,{p:()=>sendRawTransaction})},54282:(d,m,v)=>{"use strict";v.d(m,{y:()=>E});var _=v(26831);let E=(0,_.a)({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}})},58676:(d,m,v)=>{"use strict";v.d(m,{w:()=>E});var _=v(26831);let E=(0,_.a)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0})},15922:(d,m,v)=>{"use strict";v.d(m,{R:()=>E});var _=v(26831);let E=(0,_.a)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},3035:(d,m,v)=>{"use strict";v.d(m,{v:()=>U});var _=v(26831),E=v(90953),x=v(64533),T=v(95824),A=v(47675);let j={block:(0,x.G)({format(d){let m=d.transactions?.map(d=>{if("string"==typeof d)return d;let m=T.Tr(d);return"0x7e"===m.typeHex&&(m.isSystemTx=d.isSystemTx,m.mint=d.mint?E.y_(d.mint):void 0,m.sourceHash=d.sourceHash,m.type="deposit"),m});return{transactions:m,stateRoot:d.stateRoot}}}),transaction:(0,T.y_)({format(d){let m={};return"0x7e"===d.type&&(m.isSystemTx=d.isSystemTx,m.mint=d.mint?(0,E.y_)(d.mint):void 0,m.sourceHash=d.sourceHash,m.type="deposit"),m}}),transactionReceipt:(0,A.d)({format:d=>({l1GasPrice:d.l1GasPrice?(0,E.y_)(d.l1GasPrice):null,l1GasUsed:d.l1GasUsed?(0,E.y_)(d.l1GasUsed):null,l1Fee:d.l1Fee?(0,E.y_)(d.l1Fee):null,l1FeeScalar:d.l1FeeScalar?Number(d.l1FeeScalar):null})})},U=(0,_.a)({id:10,name:"OP Mainnet",network:"optimism",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://opt-mainnet.g.alchemy.com/v2"],webSocket:["wss://opt-mainnet.g.alchemy.com/v2"]},infura:{http:["https://optimism-mainnet.infura.io/v3"],webSocket:["wss://optimism-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.optimism.io"]},public:{http:["https://mainnet.optimism.io"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://optimistic.etherscan.io"},default:{name:"Optimism Explorer",url:"https://explorer.optimism.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263}}},{formatters:j})},17514:(d,m,v)=>{"use strict";let _;v.d(m,{e:()=>createClient});var E=v(65545);let x=256;function uid(d=11){if(!_||x+d>512){_="",x=0;for(let d=0;d<256;d++)_+=(256+256*Math.random()|0).toString(16).substring(1)}return _.substring(x,x+++d)}function createClient(d){let{batch:m,cacheTime:v=d.pollingInterval??4e3,key:_="base",name:x="Base Client",pollingInterval:T=4e3,type:A="base"}=d,j=d.chain,U=d.account?(0,E.T)(d.account):void 0,{config:F,request:W,value:K}=d.transport({chain:j,pollingInterval:T}),Q={...F,...K},X={account:U,batch:m,cacheTime:v,chain:j,key:_,name:x,pollingInterval:T,request:W,transport:Q,type:A,uid:uid()};function extend(d){return m=>{let v=m(d);for(let d in X)delete v[d];let _={...d,...v};return Object.assign(_,{extend:extend(_)})}}return Object.assign(X,{extend:extend(X)})}},59969:(d,m,v)=>{"use strict";v.d(m,{K:()=>createWalletClient});var _=v(17514),E=v(40817),x=v(60208);async function addChain(d,{chain:m}){let{id:v,name:_,nativeCurrency:E,rpcUrls:T,blockExplorers:A}=m;await d.request({method:"wallet_addEthereumChain",params:[{chainId:(0,x.eC)(v),chainName:_,nativeCurrency:E,rpcUrls:T.default.http,blockExplorerUrls:A?Object.values(A).map(({url:d})=>d):void 0}]})}var T=v(27979),A=v(65545),j=v(76472),U=v(10930);function assertCurrentChain({chain:d,currentChainId:m}){if(!d)throw new U.Bk;if(m!==d.id)throw new U.Yl({chain:d,currentChainId:m})}var F=v(73177),W=v(96321),K=v(91996);function getTransactionError(d,{docsPath:m,...v}){let _=(()=>{let m=(0,K.k)(d,v);return m instanceof F.cj?d:m})();return new W.mk(_,{docsPath:m,...v})}var Q=v(85088),X=v(6569),ee=v(96630),er=v(5604),ei=v(56e3),eo=v(53908);async function sendTransaction(d,m){let{account:v=d.account,chain:_=d.chain,accessList:x,data:T,gas:U,gasPrice:F,maxFeePerGas:W,maxPriorityFeePerGas:K,nonce:ea,to:es,value:el,...ec}=m;if(!v)throw new j.o({docsPath:"/docs/actions/wallet/sendTransaction"});let eu=(0,A.T)(v);try{let v;if((0,er.F)(m),null!==_&&(v=await (0,ee.s)(d,E.L)({}),assertCurrentChain({currentChainId:v,chain:_})),"local"===eu.type){let m=await (0,ee.s)(d,ei.Z)({account:eu,accessList:x,chain:_,data:T,gas:U,gasPrice:F,maxFeePerGas:W,maxPriorityFeePerGas:K,nonce:ea,to:es,value:el,...ec});v||(v=await (0,ee.s)(d,E.L)({}));let A=_?.serializers?.transaction,j=await eu.signTransaction({...m,chainId:v},{serializer:A});return await (0,ee.s)(d,eo.p)({serializedTransaction:j})}let A=d.chain?.formatters?.transactionRequest?.format,j=A||X.tG,ed=j({...(0,Q.K)(ec,{format:A}),accessList:x,data:T,from:eu.address,gas:U,gasPrice:F,maxFeePerGas:W,maxPriorityFeePerGas:K,nonce:ea,to:es,value:el});return await d.request({method:"eth_sendTransaction",params:[ed]})}catch(d){throw getTransactionError(d,{...m,account:eu,chain:m.chain||void 0})}}function deployContract(d,{abi:m,args:v,bytecode:_,...E}){let x=(0,T.w)({abi:m,args:v,bytecode:_});return sendTransaction(d,{...E,data:x})}var ea=v(53526);async function getAddresses(d){if(d.account?.type==="local")return[d.account.address];let m=await d.request({method:"eth_accounts"});return m.map(d=>(0,ea.x)(d))}async function getPermissions(d){let m=await d.request({method:"wallet_getPermissions"});return m}async function requestAddresses(d){let m=await d.request({method:"eth_requestAccounts"});return m.map(d=>(0,ea.K)(d))}async function requestPermissions(d,m){return d.request({method:"wallet_requestPermissions",params:[m]})}async function signMessage(d,{account:m=d.account,message:v}){if(!m)throw new j.o({docsPath:"/docs/actions/wallet/signMessage"});let _=(0,A.T)(m);if("local"===_.type)return _.signMessage({message:v});let E="string"==typeof v?(0,x.$G)(v):v.raw instanceof Uint8Array?(0,x.NC)(v.raw):v.raw;return d.request({method:"personal_sign",params:[E,_.address]})}async function signTransaction(d,m){let{account:v=d.account,chain:_=d.chain,...T}=m;if(!v)throw new j.o({docsPath:"/docs/actions/wallet/signTransaction"});let U=(0,A.T)(v);(0,er.F)({account:U,...m});let F=await (0,ee.s)(d,E.L)({});null!==_&&assertCurrentChain({currentChainId:F,chain:_});let W=_?.formatters||d.chain?.formatters,K=W?.transactionRequest?.format||X.tG;return"local"===U.type?U.signTransaction({...T,chainId:F},{serializer:d.chain?.serializers?.transaction}):await d.request({method:"eth_signTransaction",params:[{...K(T),chainId:(0,x.eC)(F),from:U.address}]})}var es=v(36681),el=v(62854),ec=v(66553);async function signTypedData(d,{account:m=d.account,domain:v,message:_,primaryType:E,types:x}){if(!m)throw new j.o({docsPath:"/docs/actions/wallet/signTypedData"});let T=(0,A.T)(m),U={EIP712Domain:(0,ec.cj)({domain:v}),...x};if((0,ec.iC)({domain:v,message:_,primaryType:E,types:U}),"local"===T.type)return T.signTypedData({domain:v,primaryType:E,types:U,message:_});let F=(0,el.P)({domain:v??{},primaryType:E,types:U,message:_},(d,m)=>(0,es.v)(m)?m.toLowerCase():m);return d.request({method:"eth_signTypedData_v4",params:[T.address,F]})}async function switchChain(d,{id:m}){await d.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,x.eC)(m)}]})}async function watchAsset(d,m){let v=await d.request({method:"wallet_watchAsset",params:m});return v}var eu=v(57575);async function writeContract(d,{abi:m,address:v,args:_,dataSuffix:E,functionName:x,...T}){let A=(0,eu.R)({abi:m,args:_,functionName:x}),j=await (0,ee.s)(d,sendTransaction)({data:`${A}${E?E.replace("0x",""):""}`,to:v,...T});return j}function walletActions(d){return{addChain:m=>addChain(d,m),deployContract:m=>deployContract(d,m),getAddresses:()=>getAddresses(d),getChainId:()=>(0,E.L)(d),getPermissions:()=>getPermissions(d),prepareTransactionRequest:m=>(0,ei.Z)(d,m),requestAddresses:()=>requestAddresses(d),requestPermissions:m=>requestPermissions(d,m),sendRawTransaction:m=>(0,eo.p)(d,m),sendTransaction:m=>sendTransaction(d,m),signMessage:m=>signMessage(d,m),signTransaction:m=>signTransaction(d,m),signTypedData:m=>signTypedData(d,m),switchChain:m=>switchChain(d,m),watchAsset:m=>watchAsset(d,m),writeContract:m=>writeContract(d,m)}}function createWalletClient(d){let{key:m="wallet",name:v="Wallet Client",transport:E}=d,x=(0,_.e)({...d,key:m,name:v,transport:d=>E({...d,retryCount:0}),type:"walletClient"});return x.extend(walletActions)}},82974:(d,m,v)=>{"use strict";v.d(m,{q:()=>createTransport});var _=v(54999);function createTransport({key:d,name:m,request:v,retryCount:E=3,retryDelay:x=150,timeout:T,type:A},j){return{config:{key:d,name:m,request:v,retryCount:E,retryDelay:x,timeout:T,type:A},request:(0,_.n)(v,{retryCount:E,retryDelay:x}),value:j}}},42899:(d,m,v)=>{"use strict";v.d(m,{P:()=>custom});var _=v(82974);function custom(d,m={}){let{key:v="custom",name:E="Custom Provider",retryDelay:x}=m;return({retryCount:T})=>(0,_.q)({key:v,name:E,request:d.request.bind(d),retryCount:m.retryCount??T,retryDelay:x,type:"custom"})}},39165:(d,m,v)=>{"use strict";v.d(m,{$o:()=>U,F8:()=>_,X$:()=>j,du:()=>T,k3:()=>x,nZ:()=>A});let _=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],E=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],x=[...E,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],T=[...E,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],A=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],j=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],U=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},48617:(d,m,v)=>{"use strict";v.d(m,{$:()=>_,Up:()=>E,hZ:()=>x});let _={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},E={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},x={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},73214:(d,m,v)=>{"use strict";v.d(m,{Bd:()=>x,Zn:()=>E,ez:()=>_});let _={gwei:9,wei:18},E={ether:-9,wei:9},x={ether:-18,gwei:-9}},90749:(d,m,v)=>{"use strict";v.d(m,{CI:()=>InvalidAbiDecodingTypeError,FM:()=>AbiEventSignatureEmptyTopicsError,Gy:()=>DecodeLogTopicsMismatch,KY:()=>BytesSizeMismatchError,M4:()=>AbiEncodingBytesSizeMismatchError,MX:()=>AbiFunctionOutputsNotFoundError,SM:()=>DecodeLogDataMismatch,cO:()=>AbiConstructorParamsNotFoundError,dh:()=>InvalidAbiEncodingTypeError,fM:()=>AbiConstructorNotFoundError,fs:()=>AbiEncodingLengthMismatchError,gr:()=>AbiEncodingArrayLengthMismatchError,hn:()=>InvalidArrayError,lC:()=>AbiEventSignatureNotFoundError,mv:()=>AbiEventNotFoundError,wM:()=>InvalidDefinitionTypeError,wb:()=>AbiDecodingZeroDataError,xB:()=>AbiDecodingDataSizeTooSmallError,xL:()=>AbiFunctionNotFoundError,yP:()=>AbiErrorSignatureNotFoundError});var _=v(44503),E=v(6582),x=v(96405);let AbiConstructorNotFoundError=class AbiConstructorNotFoundError extends x.G{constructor({docsPath:d}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}};let AbiConstructorParamsNotFoundError=class AbiConstructorParamsNotFoundError extends x.G{constructor({docsPath:d}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}};let AbiDecodingDataSizeTooSmallError=class AbiDecodingDataSizeTooSmallError extends x.G{constructor({data:d,params:m,size:v}){super(`Data size of ${v} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,_.h)(m,{includeName:!0})})`,`Data:   ${d} (${v} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=d,this.params=m,this.size=v}};let AbiDecodingZeroDataError=class AbiDecodingZeroDataError extends x.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}};let AbiEncodingArrayLengthMismatchError=class AbiEncodingArrayLengthMismatchError extends x.G{constructor({expectedLength:d,givenLength:m,type:v}){super(`ABI encoding array length mismatch for type ${v}.
Expected length: ${d}
Given length: ${m}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}};let AbiEncodingBytesSizeMismatchError=class AbiEncodingBytesSizeMismatchError extends x.G{constructor({expectedSize:d,value:m}){super(`Size of bytes "${m}" (bytes${(0,E.d)(m)}) does not match expected size (bytes${d}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}};let AbiEncodingLengthMismatchError=class AbiEncodingLengthMismatchError extends x.G{constructor({expectedLength:d,givenLength:m}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${d}
Given length (values): ${m}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}};let AbiErrorSignatureNotFoundError=class AbiErrorSignatureNotFoundError extends x.G{constructor(d,{docsPath:m}){super(`Encoded error signature "${d}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,{docsPath:m}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=d}};let AbiEventSignatureEmptyTopicsError=class AbiEventSignatureEmptyTopicsError extends x.G{constructor({docsPath:d}){super("Cannot extract event signature from empty topics.",{docsPath:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}};let AbiEventSignatureNotFoundError=class AbiEventSignatureNotFoundError extends x.G{constructor(d,{docsPath:m}){super(`Encoded event signature "${d}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${d}.`,{docsPath:m}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}};let AbiEventNotFoundError=class AbiEventNotFoundError extends x.G{constructor(d,{docsPath:m}={}){super(`Event ${d?`"${d}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:m}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}};let AbiFunctionNotFoundError=class AbiFunctionNotFoundError extends x.G{constructor(d,{docsPath:m}={}){super(`Function ${d?`"${d}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:m}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}};let AbiFunctionOutputsNotFoundError=class AbiFunctionOutputsNotFoundError extends x.G{constructor(d,{docsPath:m}){super(`Function "${d}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:m}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}};let BytesSizeMismatchError=class BytesSizeMismatchError extends x.G{constructor({expectedSize:d,givenSize:m}){super(`Expected bytes${d}, got bytes${m}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}};let DecodeLogDataMismatch=class DecodeLogDataMismatch extends x.G{constructor({abiItem:d,data:m,params:v,size:E}){super(`Data size of ${E} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,_.h)(v,{includeName:!0})})`,`Data:   ${m} (${E} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=d,this.data=m,this.params=v,this.size=E}};let DecodeLogTopicsMismatch=class DecodeLogTopicsMismatch extends x.G{constructor({abiItem:d,param:m}){super(`Expected a topic for indexed event parameter${m.name?` "${m.name}"`:""} on event "${(0,_.t)(d,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=d}};let InvalidAbiEncodingTypeError=class InvalidAbiEncodingTypeError extends x.G{constructor(d,{docsPath:m}){super(`Type "${d}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:m}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}};let InvalidAbiDecodingTypeError=class InvalidAbiDecodingTypeError extends x.G{constructor(d,{docsPath:m}){super(`Type "${d}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:m}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}};let InvalidArrayError=class InvalidArrayError extends x.G{constructor(d){super(`Value "${d}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}};let InvalidDefinitionTypeError=class InvalidDefinitionTypeError extends x.G{constructor(d){super(`"${d}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},76472:(d,m,v)=>{"use strict";v.d(m,{o:()=>AccountNotFoundError});var _=v(96405);let AccountNotFoundError=class AccountNotFoundError extends _.G{constructor({docsPath:d}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:d,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},42164:(d,m,v)=>{"use strict";v.d(m,{b:()=>InvalidAddressError});var _=v(96405);let InvalidAddressError=class InvalidAddressError extends _.G{constructor({address:d}){super(`Address "${d}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},96405:(d,m,v)=>{"use strict";v.d(m,{G:()=>BaseError});var _=v(72973);let BaseError=class BaseError extends Error{constructor(d,m={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,_.bo)()});let v=m.cause instanceof BaseError?m.cause.details:m.cause?.message?m.cause.message:m.details,E=m.cause instanceof BaseError&&m.cause.docsPath||m.docsPath;this.message=[d||"An error occurred.","",...m.metaMessages?[...m.metaMessages,""]:[],...E?[`Docs: https://viem.sh${E}.html${m.docsSlug?`#${m.docsSlug}`:""}`]:[],...v?[`Details: ${v}`]:[],`Version: ${this.version}`].join("\n"),m.cause&&(this.cause=m.cause),this.details=v,this.docsPath=E,this.metaMessages=m.metaMessages,this.shortMessage=d}walk(d){return walk(this,d)}};function walk(d,m){return m?.(d)?d:d&&"object"==typeof d&&"cause"in d?walk(d.cause,m):m?null:d}},10930:(d,m,v)=>{"use strict";v.d(m,{Bk:()=>ChainNotFoundError,Yl:()=>ChainMismatchError,mm:()=>ChainDoesNotSupportContract,pZ:()=>ClientChainNotConfiguredError});var _=v(96405);let ChainDoesNotSupportContract=class ChainDoesNotSupportContract extends _.G{constructor({blockNumber:d,chain:m,contract:v}){super(`Chain "${m.name}" does not support contract "${v.name}".`,{metaMessages:["This could be due to any of the following:",...d&&v.blockCreated&&v.blockCreated>d?[`- The contract "${v.name}" was not deployed until block ${v.blockCreated} (current block ${d}).`]:[`- The chain does not have the contract "${v.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}};let ChainMismatchError=class ChainMismatchError extends _.G{constructor({chain:d,currentChainId:m}){super(`The current chain of the wallet (id: ${m}) does not match the target chain for the transaction (id: ${d.id} – ${d.name}).`,{metaMessages:[`Current Chain ID:  ${m}`,`Expected Chain ID: ${d.id} – ${d.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};let ChainNotFoundError=class ChainNotFoundError extends _.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}};let ClientChainNotConfiguredError=class ClientChainNotConfiguredError extends _.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},10145:(d,m,v)=>{"use strict";v.d(m,{cg:()=>CallExecutionError,uq:()=>ContractFunctionExecutionError,Lu:()=>ContractFunctionRevertedError,Dk:()=>ContractFunctionZeroDataError,VQ:()=>RawContractError});var _=v(65545),E=v(48617),x=v(58874),T=v(44503),A=v(62854);function formatAbiItemWithArgs({abiItem:d,args:m,includeFunctionName:v=!0,includeName:_=!1}){if("name"in d&&"inputs"in d&&d.inputs)return`${v?d.name:""}(${d.inputs.map((d,v)=>`${_&&d.name?`${d.name}: `:""}${"object"==typeof m[v]?(0,A.P)(m[v]):m[v]}`).join(", ")})`}var j=v(24651),U=v(9690),F=v(36117),W=v(90749),K=v(96405),Q=v(96321),X=v(72973);let CallExecutionError=class CallExecutionError extends K.G{constructor(d,{account:m,docsPath:v,chain:E,data:x,gas:T,gasPrice:A,maxFeePerGas:j,maxPriorityFeePerGas:W,nonce:K,to:X,value:ee}){let er=m?(0,_.T)(m):void 0,ei=(0,Q.xr)({from:er?.address,to:X,value:void 0!==ee&&`${(0,U.d)(ee)} ${E?.nativeCurrency.symbol||"ETH"}`,data:x,gas:T,gasPrice:void 0!==A&&`${(0,F.o)(A)} gwei`,maxFeePerGas:void 0!==j&&`${(0,F.o)(j)} gwei`,maxPriorityFeePerGas:void 0!==W&&`${(0,F.o)(W)} gwei`,nonce:K});super(d.shortMessage,{cause:d,docsPath:v,metaMessages:[...d.metaMessages?[...d.metaMessages," "]:[],"Raw Call Arguments:",ei].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=d}};let ContractFunctionExecutionError=class ContractFunctionExecutionError extends K.G{constructor(d,{abi:m,args:v,contractAddress:_,docsPath:E,functionName:x,sender:A}){let U=(0,j.m)({abi:m,args:v,name:x}),F=U?formatAbiItemWithArgs({abiItem:U,args:v,includeFunctionName:!1,includeName:!1}):void 0,W=U?(0,T.t)(U,{includeName:!0}):void 0,K=(0,Q.xr)({address:_&&(0,X.CR)(_),function:W,args:F&&"()"!==F&&`${[...Array(x?.length??0).keys()].map(()=>" ").join("")}${F}`,sender:A});super(d.shortMessage||`An unknown error occurred while executing the contract function "${x}".`,{cause:d,docsPath:E,metaMessages:[...d.metaMessages?[...d.metaMessages," "]:[],"Contract Call:",K].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=m,this.args=v,this.cause=d,this.contractAddress=_,this.functionName=x,this.sender=A}};let ContractFunctionRevertedError=class ContractFunctionRevertedError extends K.G{constructor({abi:d,data:m,functionName:v,message:_}){let A,j,U,F,K;if(m&&"0x"!==m)try{K=(0,x.p)({abi:d,data:m});let{abiItem:v,errorName:_,args:A}=K;if("Error"===_)U=A[0];else if("Panic"===_){let[d]=A;U=E.$[d]}else{let d=v?(0,T.t)(v,{includeName:!0}):void 0,m=v&&A?formatAbiItemWithArgs({abiItem:v,args:A,includeFunctionName:!1,includeName:!1}):void 0;j=[d?`Error: ${d}`:"",m&&"()"!==m?`       ${[...Array(_?.length??0).keys()].map(()=>" ").join("")}${m}`:""]}}catch(d){A=d}else _&&(U=_);A instanceof W.yP&&(F=A.signature,j=[`Unable to decode signature "${F}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${F}.`]),super(U&&"execution reverted"!==U||F?[`The contract function "${v}" reverted with the following ${F?"signature":"reason"}:`,U||F].join("\n"):`The contract function "${v}" reverted.`,{cause:A,metaMessages:j}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=K,this.reason=U,this.signature=F}};let ContractFunctionZeroDataError=class ContractFunctionZeroDataError extends K.G{constructor({functionName:d}){super(`The contract function "${d}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${d}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}};let RawContractError=class RawContractError extends K.G{constructor({data:d,message:m}){super(m||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=d}}},5386:(d,m,v)=>{"use strict";v.d(m,{$:()=>SizeExceedsPaddingSizeError,m:()=>SliceOffsetOutOfBoundsError});var _=v(96405);let SliceOffsetOutOfBoundsError=class SliceOffsetOutOfBoundsError extends _.G{constructor({offset:d,position:m,size:v}){super(`Slice ${"start"===m?"starting":"ending"} at offset "${d}" is out-of-bounds (size: ${v}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}};let SizeExceedsPaddingSizeError=class SizeExceedsPaddingSizeError extends _.G{constructor({size:d,targetSize:m,type:v}){super(`${v.charAt(0).toUpperCase()}${v.slice(1).toLowerCase()} size (${d}) exceeds padding size (${m}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},43723:(d,m,v)=>{"use strict";v.d(m,{Cd:()=>InvalidHexBooleanError,J5:()=>IntegerOutOfRangeError,M6:()=>SizeOverflowError});var _=v(96405);let IntegerOutOfRangeError=class IntegerOutOfRangeError extends _.G{constructor({max:d,min:m,signed:v,size:_,value:E}){super(`Number "${E}" is not in safe ${_?`${8*_}-bit ${v?"signed":"unsigned"} `:""}integer range ${d?`(${m} to ${d})`:`(above ${m})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}};let InvalidHexBooleanError=class InvalidHexBooleanError extends _.G{constructor(d){super(`Hex value "${d}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}};let SizeOverflowError=class SizeOverflowError extends _.G{constructor({givenSize:d,maxSize:m}){super(`Size cannot exceed ${m} bytes. Given size: ${d} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},27846:(d,m,v)=>{"use strict";v.d(m,{Fz:()=>BaseFeeScalarError,e5:()=>Eip1559FeesNotSupportedError,ld:()=>MaxFeePerGasTooLowError});var _=v(36117),E=v(96405);let BaseFeeScalarError=class BaseFeeScalarError extends E.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}};let Eip1559FeesNotSupportedError=class Eip1559FeesNotSupportedError extends E.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}};let MaxFeePerGasTooLowError=class MaxFeePerGasTooLowError extends E.G{constructor({maxPriorityFeePerGas:d}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,_.o)(d)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},73177:(d,m,v)=>{"use strict";v.d(m,{C_:()=>InsufficientFundsError,G$:()=>FeeCapTooLowError,Hh:()=>FeeCapTooHighError,M_:()=>ExecutionRevertedError,WF:()=>IntrinsicGasTooHighError,ZI:()=>NonceTooHighError,cj:()=>UnknownNodeError,cs:()=>TipAboveFeeCapError,dR:()=>IntrinsicGasTooLowError,pZ:()=>TransactionTypeNotSupportedError,se:()=>NonceMaxValueError,vU:()=>NonceTooLowError});var _=v(36117),E=v(96405);let ExecutionRevertedError=class ExecutionRevertedError extends E.G{constructor({cause:d,message:m}={}){let v=m?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${v?`with reason: ${v}`:"for an unknown reason"}.`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(ExecutionRevertedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(ExecutionRevertedError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});let FeeCapTooHighError=class FeeCapTooHighError extends E.G{constructor({cause:d,maxFeePerGas:m}={}){super(`The fee cap (\`maxFeePerGas\`${m?` = ${(0,_.o)(m)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(FeeCapTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});let FeeCapTooLowError=class FeeCapTooLowError extends E.G{constructor({cause:d,maxFeePerGas:m}={}){super(`The fee cap (\`maxFeePerGas\`${m?` = ${(0,_.o)(m)}`:""} gwei) cannot be lower than the block base fee.`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(FeeCapTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});let NonceTooHighError=class NonceTooHighError extends E.G{constructor({cause:d,nonce:m}={}){super(`Nonce provided for the transaction ${m?`(${m}) `:""}is higher than the next one expected.`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(NonceTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});let NonceTooLowError=class NonceTooLowError extends E.G{constructor({cause:d,nonce:m}={}){super(`Nonce provided for the transaction ${m?`(${m}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(NonceTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});let NonceMaxValueError=class NonceMaxValueError extends E.G{constructor({cause:d,nonce:m}={}){super(`Nonce provided for the transaction ${m?`(${m}) `:""}exceeds the maximum allowed nonce.`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(NonceMaxValueError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});let InsufficientFundsError=class InsufficientFundsError extends E.G{constructor({cause:d}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:d,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(InsufficientFundsError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});let IntrinsicGasTooHighError=class IntrinsicGasTooHighError extends E.G{constructor({cause:d,gas:m}={}){super(`The amount of gas ${m?`(${m}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(IntrinsicGasTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});let IntrinsicGasTooLowError=class IntrinsicGasTooLowError extends E.G{constructor({cause:d,gas:m}={}){super(`The amount of gas ${m?`(${m}) `:""}provided for the transaction is too low.`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(IntrinsicGasTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});let TransactionTypeNotSupportedError=class TransactionTypeNotSupportedError extends E.G{constructor({cause:d}){super("The transaction type is not supported for this chain.",{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(TransactionTypeNotSupportedError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});let TipAboveFeeCapError=class TipAboveFeeCapError extends E.G{constructor({cause:d,maxPriorityFeePerGas:m,maxFeePerGas:v}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${m?` = ${(0,_.o)(m)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${v?` = ${(0,_.o)(v)} gwei`:""}).`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(TipAboveFeeCapError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});let UnknownNodeError=class UnknownNodeError extends E.G{constructor({cause:d}){super(`An error occurred while executing: ${d?.shortMessage}`,{cause:d}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},28559:(d,m,v)=>{"use strict";v.d(m,{Gg:()=>HttpRequestError,W5:()=>TimeoutError,bs:()=>RpcRequestError,c9:()=>WebSocketRequestError});var _=v(62854),E=v(96405),x=v(72973);let HttpRequestError=class HttpRequestError extends E.G{constructor({body:d,details:m,headers:v,status:E,url:T}){super("HTTP request failed.",{details:m,metaMessages:[E&&`Status: ${E}`,`URL: ${(0,x.Gr)(T)}`,d&&`Request body: ${(0,_.P)(d)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=d,this.headers=v,this.status=E,this.url=T}};let WebSocketRequestError=class WebSocketRequestError extends E.G{constructor({body:d,details:m,url:v}){super("WebSocket request failed.",{details:m,metaMessages:[`URL: ${(0,x.Gr)(v)}`,`Request body: ${(0,_.P)(d)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}};let RpcRequestError=class RpcRequestError extends E.G{constructor({body:d,error:m,url:v}){super("RPC Request failed.",{cause:m,details:m.message,metaMessages:[`URL: ${(0,x.Gr)(v)}`,`Request body: ${(0,_.P)(d)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=m.code}};let TimeoutError=class TimeoutError extends E.G{constructor({body:d,url:m}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,x.Gr)(m)}`,`Request body: ${(0,_.P)(d)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},26544:(d,m,v)=>{"use strict";v.d(m,{B:()=>InvalidRequestRpcError,GD:()=>JsonRpcVersionUnsupportedError,I0:()=>ChainDisconnectedError,KB:()=>TransactionRejectedRpcError,LX:()=>MethodNotFoundRpcError,Og:()=>ResourceNotFoundRpcError,PE:()=>UnauthorizedProviderError,Pv:()=>LimitExceededRpcError,Ts:()=>UnsupportedProviderMethodError,XS:()=>InternalRpcError,ab:()=>UserRejectedRequestError,gS:()=>MethodNotSupportedRpcError,ir:()=>UnknownRpcError,nY:()=>InvalidParamsRpcError,pT:()=>ResourceUnavailableRpcError,s7:()=>ParseRpcError,u5:()=>ProviderDisconnectedError,x3:()=>SwitchChainError,yR:()=>InvalidInputRpcError});var _=v(96405),E=v(28559);let RpcError=class RpcError extends _.G{constructor(d,{code:m,docsPath:v,metaMessages:_,shortMessage:x}){super(x,{cause:d,docsPath:v,metaMessages:_||d?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=d.name,this.code=d instanceof E.bs?d.code:m??-1}};let ProviderRpcError=class ProviderRpcError extends RpcError{constructor(d,m){super(d,m),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=m.data}};let ParseRpcError=class ParseRpcError extends RpcError{constructor(d){super(d,{code:ParseRpcError.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(ParseRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});let InvalidRequestRpcError=class InvalidRequestRpcError extends RpcError{constructor(d){super(d,{code:InvalidRequestRpcError.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(InvalidRequestRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});let MethodNotFoundRpcError=class MethodNotFoundRpcError extends RpcError{constructor(d){super(d,{code:MethodNotFoundRpcError.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(MethodNotFoundRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});let InvalidParamsRpcError=class InvalidParamsRpcError extends RpcError{constructor(d){super(d,{code:InvalidParamsRpcError.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(InvalidParamsRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});let InternalRpcError=class InternalRpcError extends RpcError{constructor(d){super(d,{code:InternalRpcError.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(InternalRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});let InvalidInputRpcError=class InvalidInputRpcError extends RpcError{constructor(d){super(d,{code:InvalidInputRpcError.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(InvalidInputRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});let ResourceNotFoundRpcError=class ResourceNotFoundRpcError extends RpcError{constructor(d){super(d,{code:ResourceNotFoundRpcError.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(ResourceNotFoundRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});let ResourceUnavailableRpcError=class ResourceUnavailableRpcError extends RpcError{constructor(d){super(d,{code:ResourceUnavailableRpcError.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(ResourceUnavailableRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});let TransactionRejectedRpcError=class TransactionRejectedRpcError extends RpcError{constructor(d){super(d,{code:TransactionRejectedRpcError.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(TransactionRejectedRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});let MethodNotSupportedRpcError=class MethodNotSupportedRpcError extends RpcError{constructor(d){super(d,{code:MethodNotSupportedRpcError.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(MethodNotSupportedRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});let LimitExceededRpcError=class LimitExceededRpcError extends RpcError{constructor(d){super(d,{code:LimitExceededRpcError.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(LimitExceededRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});let JsonRpcVersionUnsupportedError=class JsonRpcVersionUnsupportedError extends RpcError{constructor(d){super(d,{code:JsonRpcVersionUnsupportedError.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(JsonRpcVersionUnsupportedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});let UserRejectedRequestError=class UserRejectedRequestError extends ProviderRpcError{constructor(d){super(d,{code:UserRejectedRequestError.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(UserRejectedRequestError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});let UnauthorizedProviderError=class UnauthorizedProviderError extends ProviderRpcError{constructor(d){super(d,{code:UnauthorizedProviderError.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(UnauthorizedProviderError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});let UnsupportedProviderMethodError=class UnsupportedProviderMethodError extends ProviderRpcError{constructor(d){super(d,{code:UnsupportedProviderMethodError.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(UnsupportedProviderMethodError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});let ProviderDisconnectedError=class ProviderDisconnectedError extends ProviderRpcError{constructor(d){super(d,{code:ProviderDisconnectedError.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(ProviderDisconnectedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});let ChainDisconnectedError=class ChainDisconnectedError extends ProviderRpcError{constructor(d){super(d,{code:ChainDisconnectedError.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(ChainDisconnectedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});let SwitchChainError=class SwitchChainError extends ProviderRpcError{constructor(d){super(d,{code:SwitchChainError.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(SwitchChainError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});let UnknownRpcError=class UnknownRpcError extends RpcError{constructor(d){super(d,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},96321:(d,m,v)=>{"use strict";v.d(m,{Bh:()=>TransactionNotFoundError,Yb:()=>TransactionReceiptNotFoundError,j3:()=>InvalidSerializableTransactionError,mc:()=>WaitForTransactionReceiptTimeoutError,mk:()=>TransactionExecutionError,xY:()=>FeeConflictError,xr:()=>prettyPrint});var _=v(9690),E=v(36117),x=v(96405);function prettyPrint(d){let m=Object.entries(d).map(([d,m])=>void 0===m||!1===m?null:[d,m]).filter(Boolean),v=m.reduce((d,[m])=>Math.max(d,m.length),0);return m.map(([d,m])=>`  ${`${d}:`.padEnd(v+1)}  ${m}`).join("\n")}let FeeConflictError=class FeeConflictError extends x.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}};let InvalidSerializableTransactionError=class InvalidSerializableTransactionError extends x.G{constructor({transaction:d}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",prettyPrint(d),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}};let TransactionExecutionError=class TransactionExecutionError extends x.G{constructor(d,{account:m,docsPath:v,chain:x,data:T,gas:A,gasPrice:j,maxFeePerGas:U,maxPriorityFeePerGas:F,nonce:W,to:K,value:Q}){let X=prettyPrint({chain:x&&`${x?.name} (id: ${x?.id})`,from:m?.address,to:K,value:void 0!==Q&&`${(0,_.d)(Q)} ${x?.nativeCurrency.symbol||"ETH"}`,data:T,gas:A,gasPrice:void 0!==j&&`${(0,E.o)(j)} gwei`,maxFeePerGas:void 0!==U&&`${(0,E.o)(U)} gwei`,maxPriorityFeePerGas:void 0!==F&&`${(0,E.o)(F)} gwei`,nonce:W});super(d.shortMessage,{cause:d,docsPath:v,metaMessages:[...d.metaMessages?[...d.metaMessages," "]:[],"Request Arguments:",X].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=d}};let TransactionNotFoundError=class TransactionNotFoundError extends x.G{constructor({blockHash:d,blockNumber:m,blockTag:v,hash:_,index:E}){let x="Transaction";v&&void 0!==E&&(x=`Transaction at block time "${v}" at index "${E}"`),d&&void 0!==E&&(x=`Transaction at block hash "${d}" at index "${E}"`),m&&void 0!==E&&(x=`Transaction at block number "${m}" at index "${E}"`),_&&(x=`Transaction with hash "${_}"`),super(`${x} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}};let TransactionReceiptNotFoundError=class TransactionReceiptNotFoundError extends x.G{constructor({hash:d}){super(`Transaction receipt with hash "${d}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}};let WaitForTransactionReceiptTimeoutError=class WaitForTransactionReceiptTimeoutError extends x.G{constructor({hash:d}){super(`Timed out while waiting for transaction with hash "${d}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},72973:(d,m,v)=>{"use strict";v.d(m,{CR:()=>getContractAddress,Gr:()=>getUrl,bo:()=>getVersion});let getContractAddress=d=>d,getUrl=d=>d,getVersion=()=>"viem@1.17.1"},17061:(d,m,v)=>{"use strict";v.d(m,{r:()=>decodeAbiParameters});var _=v(90749),E=v(53526),x=v(6582),T=v(91714),A=v(97133),j=v(90953),U=v(67777);function decodeAbiParameters(d,m){if("0x"===m&&d.length>0)throw new _.wb;if((0,x.d)(m)&&32>(0,x.d)(m))throw new _.xB({data:m,params:d,size:(0,x.d)(m)});return decodeParams({data:m,params:d})}function decodeParams({data:d,params:m}){let v=[],E=0;for(let T=0;T<m.length;T++){if(E>=(0,x.d)(d))throw new _.xB({data:d,params:m,size:(0,x.d)(d)});let A=m[T],{consumed:j,value:U}=decodeParam({data:d,param:A,position:E});v.push(U),E+=j}return v}function decodeParam({data:d,param:m,position:v}){let E=(0,U.S)(m.type);if(E){let[_,x]=E;return decodeArray(d,{length:_,param:{...m,type:x},position:v})}if("tuple"===m.type)return decodeTuple(d,{param:m,position:v});if("string"===m.type)return decodeString(d,{position:v});if(m.type.startsWith("bytes"))return decodeBytes(d,{param:m,position:v});let x=(0,T.tP)(d,v,v+32,{strict:!0});if(m.type.startsWith("uint")||m.type.startsWith("int"))return decodeNumber(x,{param:m});if("address"===m.type)return decodeAddress(x);if("bool"===m.type)return decodeBool(x);throw new _.CI(m.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function decodeAddress(d){return{consumed:32,value:(0,E.x)((0,T.tP)(d,-20))}}function decodeArray(d,{param:m,length:v,position:_}){if(!v){let v=(0,j.ly)((0,T.tP)(d,_,_+32,{strict:!0})),E=(0,j.ly)((0,T.tP)(d,v,v+32,{strict:!0})),x=0,A=[];for(let _=0;_<E;++_){let _=decodeParam({data:(0,T.tP)(d,v+32),param:m,position:x});x+=_.consumed,A.push(_.value)}return{value:A,consumed:32}}if(hasDynamicChild(m)){let E=(0,U.S)(m.type),x=!E?.[0],A=0,F=[];for(let E=0;E<v;++E){let v=(0,j.ly)((0,T.tP)(d,_,_+32,{strict:!0})),U=decodeParam({data:(0,T.tP)(d,v),param:m,position:x?A:32*E});A+=U.consumed,F.push(U.value)}return{value:F,consumed:32}}let E=0,x=[];for(let T=0;T<v;++T){let v=decodeParam({data:d,param:m,position:_+E});E+=v.consumed,x.push(v.value)}return{value:x,consumed:E}}function decodeBool(d){return{consumed:32,value:(0,j.XA)(d)}}function decodeBytes(d,{param:m,position:v}){let[_,E]=m.type.split("bytes");if(!E){let m=(0,j.ly)((0,T.tP)(d,v,v+32,{strict:!0})),_=(0,j.ly)((0,T.tP)(d,m,m+32,{strict:!0}));if(0===_)return{consumed:32,value:"0x"};let E=(0,T.tP)(d,m+32,m+32+_,{strict:!0});return{consumed:32,value:E}}let x=(0,T.tP)(d,v,v+parseInt(E),{strict:!0});return{consumed:32,value:x}}function decodeNumber(d,{param:m}){let v=m.type.startsWith("int"),_=parseInt(m.type.split("int")[1]||"256");return{consumed:32,value:_>48?(0,j.y_)(d,{signed:v}):(0,j.ly)(d,{signed:v})}}function decodeString(d,{position:m}){let v=(0,j.ly)((0,T.tP)(d,m,m+32,{strict:!0})),_=(0,j.ly)((0,T.tP)(d,v,v+32,{strict:!0}));if(0===_)return{consumed:32,value:""};let E=(0,j.rR)((0,A.f)((0,T.tP)(d,v+32,v+32+_,{strict:!0})));return{consumed:32,value:E}}function decodeTuple(d,{param:m,position:v}){let _=0===m.components.length||m.components.some(({name:d})=>!d),E=_?[]:{},x=0;if(hasDynamicChild(m)){let A=(0,j.ly)((0,T.tP)(d,v,v+32,{strict:!0}));for(let v=0;v<m.components.length;++v){let j=m.components[v],U=decodeParam({data:(0,T.tP)(d,A),param:j,position:x});x+=U.consumed,E[_?v:j?.name]=U.value}return{consumed:32,value:E}}for(let T=0;T<m.components.length;++T){let A=m.components[T],j=decodeParam({data:d,param:A,position:v+x});x+=j.consumed,E[_?T:A?.name]=j.value}return{consumed:x,value:E}}function hasDynamicChild(d){let{type:m}=d;if("string"===m||"bytes"===m||m.endsWith("[]"))return!0;if("tuple"===m)return d.components?.some(hasDynamicChild);let v=(0,U.S)(d.type);return!!(v&&hasDynamicChild({...d,type:v[1]}))}},58874:(d,m,v)=>{"use strict";v.d(m,{p:()=>decodeErrorResult});var _=v(48617),E=v(90749),x=v(91714),T=v(5280),A=v(17061),j=v(44503);function decodeErrorResult({abi:d,data:m}){let v=(0,x.tP)(m,0,4);if("0x"===v)throw new E.wb;let U=[...d||[],_.Up,_.hZ],F=U.find(d=>"error"===d.type&&v===(0,T.o)((0,j.t)(d)));if(!F)throw new E.yP(v,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:F,args:"inputs"in F&&F.inputs&&F.inputs.length>0?(0,A.r)(F.inputs,(0,x.tP)(m,4)):void 0,errorName:F.name}}},63252:(d,m,v)=>{"use strict";v.d(m,{k:()=>decodeFunctionResult});var _=v(90749),E=v(17061),x=v(24651);let T="/docs/contract/decodeFunctionResult";function decodeFunctionResult({abi:d,args:m,functionName:v,data:A}){let j=d[0];if(v&&!(j=(0,x.m)({abi:d,args:m,name:v})))throw new _.xL(v,{docsPath:T});if("function"!==j.type)throw new _.xL(void 0,{docsPath:T});if(!j.outputs)throw new _.MX(j.name,{docsPath:T});let U=(0,E.r)(j.outputs,A);return U&&U.length>1?U:U&&1===U.length?U[0]:void 0}},67777:(d,m,v)=>{"use strict";v.d(m,{E:()=>encodeAbiParameters,S:()=>getArrayComponents});var _=v(90749),E=v(42164),x=v(75929),T=v(52726),A=v(86908),j=v(6582),U=v(91714),F=v(60208);function encodeAbiParameters(d,m){if(d.length!==m.length)throw new _.fs({expectedLength:d.length,givenLength:m.length});let v=prepareParams({params:d,values:m}),E=encodeParams(v);return 0===E.length?"0x":E}function prepareParams({params:d,values:m}){let v=[];for(let _=0;_<d.length;_++)v.push(prepareParam({param:d[_],value:m[_]}));return v}function prepareParam({param:d,value:m}){let v=getArrayComponents(d.type);if(v){let[_,E]=v;return encodeArray(m,{length:_,param:{...d,type:E}})}if("tuple"===d.type)return encodeTuple(m,{param:d});if("address"===d.type)return encodeAddress(m);if("bool"===d.type)return encodeBool(m);if(d.type.startsWith("uint")||d.type.startsWith("int")){let v=d.type.startsWith("int");return encodeNumber(m,{signed:v})}if(d.type.startsWith("bytes"))return encodeBytes(m,{param:d});if("string"===d.type)return encodeString(m);throw new _.dh(d.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function encodeParams(d){let m=0;for(let v=0;v<d.length;v++){let{dynamic:_,encoded:E}=d[v];_?m+=32:m+=(0,j.d)(E)}let v=[],_=[],E=0;for(let x=0;x<d.length;x++){let{dynamic:T,encoded:A}=d[x];T?(v.push((0,F.eC)(m+E,{size:32})),_.push(A),E+=(0,j.d)(A)):v.push(A)}return(0,T.zo)([...v,..._])}function encodeAddress(d){if(!(0,x.U)(d))throw new E.b({address:d});return{dynamic:!1,encoded:(0,A.gc)(d.toLowerCase())}}function encodeArray(d,{length:m,param:v}){let E=null===m;if(!Array.isArray(d))throw new _.hn(d);if(!E&&d.length!==m)throw new _.gr({expectedLength:m,givenLength:d.length,type:`${v.type}[${m}]`});let x=!1,A=[];for(let m=0;m<d.length;m++){let _=prepareParam({param:v,value:d[m]});_.dynamic&&(x=!0),A.push(_)}if(E||x){let d=encodeParams(A);if(E){let m=(0,F.eC)(A.length,{size:32});return{dynamic:!0,encoded:A.length>0?(0,T.zo)([m,d]):m}}if(x)return{dynamic:!0,encoded:d}}return{dynamic:!1,encoded:(0,T.zo)(A.map(({encoded:d})=>d))}}function encodeBytes(d,{param:m}){let[,v]=m.type.split("bytes"),E=(0,j.d)(d);if(!v){let m=d;return E%32!=0&&(m=(0,A.gc)(m,{dir:"right",size:32*Math.ceil((d.length-2)/2/32)})),{dynamic:!0,encoded:(0,T.zo)([(0,A.gc)((0,F.eC)(E,{size:32})),m])}}if(E!==parseInt(v))throw new _.M4({expectedSize:parseInt(v),value:d});return{dynamic:!1,encoded:(0,A.gc)(d,{dir:"right"})}}function encodeBool(d){return{dynamic:!1,encoded:(0,A.gc)((0,F.C4)(d))}}function encodeNumber(d,{signed:m}){return{dynamic:!1,encoded:(0,F.eC)(d,{size:32,signed:m})}}function encodeString(d){let m=(0,F.$G)(d),v=Math.ceil((0,j.d)(m)/32),_=[];for(let d=0;d<v;d++)_.push((0,A.gc)((0,U.tP)(m,32*d,(d+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,T.zo)([(0,A.gc)((0,F.eC)((0,j.d)(m),{size:32})),..._])}}function encodeTuple(d,{param:m}){let v=!1,_=[];for(let E=0;E<m.components.length;E++){let x=m.components[E],T=Array.isArray(d)?E:x.name,A=prepareParam({param:x,value:d[T]});_.push(A),A.dynamic&&(v=!0)}return{dynamic:v,encoded:v?encodeParams(_):(0,T.zo)(_.map(({encoded:d})=>d))}}function getArrayComponents(d){let m=d.match(/^(.*)\[(\d+)?\]$/);return m?[m[2]?Number(m[2]):null,m[1]]:void 0}},27979:(d,m,v)=>{"use strict";v.d(m,{w:()=>encodeDeployData});var _=v(90749),E=v(52726),x=v(67777);let T="/docs/contract/encodeDeployData";function encodeDeployData({abi:d,args:m,bytecode:v}){if(!m||0===m.length)return v;let A=d.find(d=>"type"in d&&"constructor"===d.type);if(!A)throw new _.fM({docsPath:T});if(!("inputs"in A)||!A.inputs||0===A.inputs.length)throw new _.cO({docsPath:T});let j=(0,x.E)(A.inputs,m);return(0,E.SM)([v,j])}},57575:(d,m,v)=>{"use strict";v.d(m,{R:()=>encodeFunctionData});var _=v(90749),E=v(52726),x=v(5280),T=v(67777),A=v(44503),j=v(24651);function encodeFunctionData({abi:d,args:m,functionName:v}){let U=d[0];if(v&&!(U=(0,j.m)({abi:d,args:m,name:v})))throw new _.xL(v,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==U.type)throw new _.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let F=(0,A.t)(U),W=(0,x.o)(F),K="inputs"in U&&U.inputs?(0,T.E)(U.inputs,m??[]):void 0;return(0,E.SM)([W,K??"0x"])}},44503:(d,m,v)=>{"use strict";v.d(m,{h:()=>formatAbiParams,t:()=>formatAbiItem});var _=v(90749);function formatAbiItem(d,{includeName:m=!1}={}){if("function"!==d.type&&"event"!==d.type&&"error"!==d.type)throw new _.wM(d.type);return`${d.name}(${formatAbiParams(d.inputs,{includeName:m})})`}function formatAbiParams(d,{includeName:m=!1}={}){return d?d.map(d=>formatAbiParam(d,{includeName:m})).join(m?", ":","):""}function formatAbiParam(d,{includeName:m}){return d.type.startsWith("tuple")?`(${formatAbiParams(d.components,{includeName:m})})${d.type.slice(5)}`:d.type+(m&&d.name?` ${d.name}`:"")}},24651:(d,m,v)=>{"use strict";v.d(m,{m:()=>getAbiItem});var _=v(36681),E=v(49720),x=v(5280),T=v(75929);function getAbiItem({abi:d,args:m=[],name:v}){let T=(0,_.v)(v,{strict:!1}),A=d.filter(d=>T?"function"===d.type?(0,x.o)(d)===v:"event"===d.type&&(0,E.e)(d)===v:"name"in d&&d.name===v);if(0!==A.length){if(1===A.length)return A[0];for(let d of A){if(!("inputs"in d))continue;if(!m||0===m.length){if(!d.inputs||0===d.inputs.length)return d;continue}if(!d.inputs||0===d.inputs.length||d.inputs.length!==m.length)continue;let v=m.every((m,v)=>{let _="inputs"in d&&d.inputs[v];return!!_&&isArgOfType(m,_)});if(v)return d}return A[0]}}function isArgOfType(d,m){let v=typeof d,_=m.type;switch(_){case"address":return(0,T.U)(d);case"bool":return"boolean"===v;case"function":case"string":return"string"===v;default:if("tuple"===_&&"components"in m)return Object.values(m.components).every((m,v)=>isArgOfType(Object.values(d)[v],m));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(_))return"number"===v||"bigint"===v;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(_))return"string"===v||d instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(_))return Array.isArray(d)&&d.every(d=>isArgOfType(d,{...m,type:_.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}},53526:(d,m,v)=>{"use strict";v.d(m,{K:()=>getAddress,x:()=>checksumAddress});var _=v(42164),E=v(31878),x=v(54940),T=v(75929);function checksumAddress(d,m){let v=m?`${m}${d.toLowerCase()}`:d.substring(2).toLowerCase(),_=(0,x.w)((0,E.qX)(v),"bytes"),T=(m?v.substring(`${m}0x`.length):v).split("");for(let d=0;d<40;d+=2)_[d>>1]>>4>=8&&T[d]&&(T[d]=T[d].toUpperCase()),(15&_[d>>1])>=8&&T[d+1]&&(T[d+1]=T[d+1].toUpperCase());return`0x${T.join("")}`}function getAddress(d,m){if(!(0,T.U)(d))throw new _.b({address:d});return checksumAddress(d,m)}},75929:(d,m,v)=>{"use strict";v.d(m,{U:()=>isAddress});let _=/^0x[a-fA-F0-9]{40}$/;function isAddress(d){return _.test(d)}},54999:(d,m,v)=>{"use strict";v.d(m,{n:()=>buildRequest,y:()=>isDeterministicError});var _=v(96405),E=v(28559),x=v(26544),T=v(80413);let isDeterministicError=d=>"code"in d?-1!==d.code&&-32004!==d.code&&-32005!==d.code&&-32042!==d.code&&-32603!==d.code:d instanceof E.Gg&&!!d.status&&403!==d.status&&408!==d.status&&413!==d.status&&429!==d.status&&500!==d.status&&502!==d.status&&503!==d.status&&504!==d.status;function buildRequest(d,{retryDelay:m=150,retryCount:v=3}={}){return async A=>(0,T.J)(async()=>{try{return await d(A)}catch(d){switch(d.code){case x.s7.code:throw new x.s7(d);case x.B.code:throw new x.B(d);case x.LX.code:throw new x.LX(d);case x.nY.code:throw new x.nY(d);case x.XS.code:throw new x.XS(d);case x.yR.code:throw new x.yR(d);case x.Og.code:throw new x.Og(d);case x.pT.code:throw new x.pT(d);case x.KB.code:throw new x.KB(d);case x.gS.code:throw new x.gS(d);case x.Pv.code:throw new x.Pv(d);case x.GD.code:throw new x.GD(d);case x.ab.code:throw new x.ab(d);case x.PE.code:throw new x.PE(d);case x.Ts.code:throw new x.Ts(d);case x.u5.code:throw new x.u5(d);case x.I0.code:throw new x.I0(d);case x.x3.code:throw new x.x3(d);case 5e3:throw new x.ab(d);default:if(d instanceof _.G)throw d;throw new x.ir(d)}}},{delay:({count:d,error:v})=>{if(v&&v instanceof E.Gg){let d=v?.headers?.get("Retry-After");if(d?.match(/\d/))return 1e3*parseInt(d)}return~~(1<<d)*m},retryCount:v,shouldRetry:({error:d})=>!isDeterministicError(d)})}},26831:(d,m,v)=>{"use strict";function defineChain(d,m={}){let{fees:v=d.fees,formatters:_=d.formatters,serializers:E=d.serializers}=m;return{...d,fees:v,formatters:_,serializers:E}}v.d(m,{a:()=>defineChain})},10773:(d,m,v)=>{"use strict";v.d(m,{L:()=>getChainContractAddress});var _=v(10930);function getChainContractAddress({blockNumber:d,chain:m,contract:v}){let E=m?.contracts?.[v];if(!E)throw new _.mm({chain:m,contract:{name:v}});if(d&&E.blockCreated&&E.blockCreated>d)throw new _.mm({blockNumber:d,chain:m,contract:{name:v,blockCreated:E.blockCreated}});return E.address}},52726:(d,m,v)=>{"use strict";function concat(d){return"string"==typeof d[0]?concatHex(d):concatBytes(d)}function concatBytes(d){let m=0;for(let v of d)m+=v.length;let v=new Uint8Array(m),_=0;for(let m of d)v.set(m,_),_+=m.length;return v}function concatHex(d){return`0x${d.reduce((d,m)=>d+m.replace("0x",""),"")}`}v.d(m,{SM:()=>concatHex,zo:()=>concat})},36681:(d,m,v)=>{"use strict";function isHex(d,{strict:m=!0}={}){return!!d&&"string"==typeof d&&(m?/^0x[0-9a-fA-F]*$/.test(d):d.startsWith("0x"))}v.d(m,{v:()=>isHex})},86908:(d,m,v)=>{"use strict";v.d(m,{gc:()=>padHex,vk:()=>pad});var _=v(5386);function pad(d,{dir:m,size:v=32}={}){return"string"==typeof d?padHex(d,{dir:m,size:v}):padBytes(d,{dir:m,size:v})}function padHex(d,{dir:m,size:v=32}={}){if(null===v)return d;let E=d.replace("0x","");if(E.length>2*v)throw new _.$({size:Math.ceil(E.length/2),targetSize:v,type:"hex"});return`0x${E["right"===m?"padEnd":"padStart"](2*v,"0")}`}function padBytes(d,{dir:m,size:v=32}={}){if(null===v)return d;if(d.length>v)throw new _.$({size:d.length,targetSize:v,type:"bytes"});let E=new Uint8Array(v);for(let _=0;_<v;_++){let x="right"===m;E[x?_:v-_-1]=d[x?_:d.length-_-1]}return E}},6582:(d,m,v)=>{"use strict";v.d(m,{d:()=>size});var _=v(36681);function size(d){return(0,_.v)(d,{strict:!1})?Math.ceil((d.length-2)/2):d.length}},91714:(d,m,v)=>{"use strict";v.d(m,{tP:()=>slice});var _=v(5386),E=v(36681),x=v(6582);function slice(d,m,v,{strict:_}={}){return(0,E.v)(d,{strict:!1})?sliceHex(d,m,v,{strict:_}):sliceBytes(d,m,v,{strict:_})}function assertStartOffset(d,m){if("number"==typeof m&&m>0&&m>(0,x.d)(d)-1)throw new _.m({offset:m,position:"start",size:(0,x.d)(d)})}function assertEndOffset(d,m,v){if("number"==typeof m&&"number"==typeof v&&(0,x.d)(d)!==v-m)throw new _.m({offset:v,position:"end",size:(0,x.d)(d)})}function sliceBytes(d,m,v,{strict:_}={}){assertStartOffset(d,m);let E=d.slice(m,v);return _&&assertEndOffset(E,m,v),E}function sliceHex(d,m,v,{strict:_}={}){assertStartOffset(d,m);let E=`0x${d.replace("0x","").slice((m??0)*2,(v??d.length)*2)}`;return _&&assertEndOffset(E,m,v),E}},97133:(d,m,v)=>{"use strict";function trim(d,{dir:m="left"}={}){let v="string"==typeof d?d.replace("0x",""):d,_=0;for(let d=0;d<v.length-1&&"0"===v["left"===m?d:v.length-d-1].toString();d++)_++;return(v="left"===m?v.slice(_):v.slice(0,v.length-_),"string"==typeof d)?(1===v.length&&"right"===m&&(v=`${v}0`),`0x${v.length%2==1?`0${v}`:v}`):v}v.d(m,{f:()=>trim})},90953:(d,m,v)=>{"use strict";v.d(m,{XA:()=>hexToBool,Yf:()=>assertSize,ly:()=>hexToNumber,rR:()=>hexToString,y_:()=>hexToBigInt});var _=v(43723),E=v(6582),x=v(97133),T=v(31878);function assertSize(d,{size:m}){if((0,E.d)(d)>m)throw new _.M6({givenSize:(0,E.d)(d),maxSize:m})}function hexToBigInt(d,m={}){let{signed:v}=m;m.size&&assertSize(d,{size:m.size});let _=BigInt(d);if(!v)return _;let E=(d.length-2)/2,x=(1n<<8n*BigInt(E)-1n)-1n;return _<=x?_:_-BigInt(`0x${"f".padStart(2*E,"f")}`)-1n}function hexToBool(d,m={}){let v=d;if(m.size&&(assertSize(v,{size:m.size}),v=(0,x.f)(v)),"0x00"===(0,x.f)(v))return!1;if("0x01"===(0,x.f)(v))return!0;throw new _.Cd(v)}function hexToNumber(d,m={}){return Number(hexToBigInt(d,m))}function hexToString(d,m={}){let v=(0,T.nr)(d);return m.size&&(assertSize(v,{size:m.size}),v=(0,x.f)(v,{dir:"right"})),new TextDecoder().decode(v)}},31878:(d,m,v)=>{"use strict";v.d(m,{O0:()=>toBytes,nr:()=>hexToBytes,qX:()=>stringToBytes});var _=v(96405),E=v(36681),x=v(86908),T=v(90953),A=v(60208);let j=new TextEncoder;function toBytes(d,m={}){return"number"==typeof d||"bigint"==typeof d?numberToBytes(d,m):"boolean"==typeof d?boolToBytes(d,m):(0,E.v)(d)?hexToBytes(d,m):stringToBytes(d,m)}function boolToBytes(d,m={}){let v=new Uint8Array(1);return(v[0]=Number(d),"number"==typeof m.size)?((0,T.Yf)(v,{size:m.size}),(0,x.vk)(v,{size:m.size})):v}let U={zero:48,nine:57,A:65,F:70,a:97,f:102};function charCodeToBase16(d){return d>=U.zero&&d<=U.nine?d-U.zero:d>=U.A&&d<=U.F?d-(U.A-10):d>=U.a&&d<=U.f?d-(U.a-10):void 0}function hexToBytes(d,m={}){let v=d;m.size&&((0,T.Yf)(v,{size:m.size}),v=(0,x.vk)(v,{dir:"right",size:m.size}));let E=v.slice(2);E.length%2&&(E=`0${E}`);let A=E.length/2,j=new Uint8Array(A);for(let d=0,m=0;d<A;d++){let v=charCodeToBase16(E.charCodeAt(m++)),x=charCodeToBase16(E.charCodeAt(m++));if(void 0===v||void 0===x)throw new _.G(`Invalid byte sequence ("${E[m-2]}${E[m-1]}" in "${E}").`);j[d]=16*v+x}return j}function numberToBytes(d,m){let v=(0,A.eC)(d,m);return hexToBytes(v)}function stringToBytes(d,m={}){let v=j.encode(d);return"number"==typeof m.size?((0,T.Yf)(v,{size:m.size}),(0,x.vk)(v,{dir:"right",size:m.size})):v}},60208:(d,m,v)=>{"use strict";v.d(m,{$G:()=>stringToHex,C4:()=>boolToHex,NC:()=>toHex,ci:()=>bytesToHex,eC:()=>numberToHex});var _=v(43723),E=v(86908),x=v(90953);let T=Array.from({length:256},(d,m)=>m.toString(16).padStart(2,"0"));function toHex(d,m={}){return"number"==typeof d||"bigint"==typeof d?numberToHex(d,m):"string"==typeof d?stringToHex(d,m):"boolean"==typeof d?boolToHex(d,m):bytesToHex(d,m)}function boolToHex(d,m={}){let v=`0x${Number(d)}`;return"number"==typeof m.size?((0,x.Yf)(v,{size:m.size}),(0,E.vk)(v,{size:m.size})):v}function bytesToHex(d,m={}){let v="";for(let m=0;m<d.length;m++)v+=T[d[m]];let _=`0x${v}`;return"number"==typeof m.size?((0,x.Yf)(_,{size:m.size}),(0,E.vk)(_,{dir:"right",size:m.size})):_}function numberToHex(d,m={}){let v;let{signed:x,size:T}=m,A=BigInt(d);T?v=x?(1n<<8n*BigInt(T)-1n)-1n:2n**(8n*BigInt(T))-1n:"number"==typeof d&&(v=BigInt(Number.MAX_SAFE_INTEGER));let j="bigint"==typeof v&&x?-v-1n:0;if(v&&A>v||A<j){let m="bigint"==typeof d?"n":"";throw new _.J5({max:v?`${v}${m}`:void 0,min:`${j}${m}`,signed:x,size:T,value:`${d}${m}`})}let U=`0x${(x&&A<0?(1n<<BigInt(8*T))+BigInt(A):A).toString(16)}`;return T?(0,E.vk)(U,{size:T}):U}let A=new TextEncoder;function stringToHex(d,m={}){let v=A.encode(d);return bytesToHex(v,m)}},91996:(d,m,v)=>{"use strict";v.d(m,{k:()=>getNodeError});var _=v(96405),E=v(73177);function getNodeError(d,m){let v=(d.details||"").toLowerCase(),x=d.walk(d=>d.code===E.M_.code);if(x instanceof _.G)return new E.M_({cause:d,message:x.details});if(E.M_.nodeMessage.test(v))return new E.M_({cause:d,message:d.details});if(E.Hh.nodeMessage.test(v))return new E.Hh({cause:d,maxFeePerGas:m?.maxFeePerGas});if(E.G$.nodeMessage.test(v))return new E.G$({cause:d,maxFeePerGas:m?.maxFeePerGas});if(E.ZI.nodeMessage.test(v))return new E.ZI({cause:d,nonce:m?.nonce});if(E.vU.nodeMessage.test(v))return new E.vU({cause:d,nonce:m?.nonce});if(E.se.nodeMessage.test(v))return new E.se({cause:d,nonce:m?.nonce});else if(E.C_.nodeMessage.test(v))return new E.C_({cause:d});else if(E.WF.nodeMessage.test(v))return new E.WF({cause:d,gas:m?.gas});else if(E.dR.nodeMessage.test(v))return new E.dR({cause:d,gas:m?.gas});else if(E.pZ.nodeMessage.test(v))return new E.pZ({cause:d});else if(E.cs.nodeMessage.test(v))return new E.cs({cause:d,maxFeePerGas:m?.maxFeePerGas,maxPriorityFeePerGas:m?.maxPriorityFeePerGas});return new E.cj({cause:d})}},64533:(d,m,v)=>{"use strict";v.d(m,{G:()=>x,Z:()=>formatBlock});var _=v(85082),E=v(95824);function formatBlock(d){let m=d.transactions?.map(d=>"string"==typeof d?d:E.Tr(d));return{...d,baseFeePerGas:d.baseFeePerGas?BigInt(d.baseFeePerGas):null,difficulty:d.difficulty?BigInt(d.difficulty):void 0,gasLimit:d.gasLimit?BigInt(d.gasLimit):void 0,gasUsed:d.gasUsed?BigInt(d.gasUsed):void 0,hash:d.hash?d.hash:null,logsBloom:d.logsBloom?d.logsBloom:null,nonce:d.nonce?d.nonce:null,number:d.number?BigInt(d.number):null,size:d.size?BigInt(d.size):void 0,timestamp:d.timestamp?BigInt(d.timestamp):void 0,transactions:m,totalDifficulty:d.totalDifficulty?BigInt(d.totalDifficulty):null}}let x=(0,_.$)("block",formatBlock)},85088:(d,m,v)=>{"use strict";function extract(d,{format:m}){if(!m)return{};let v={};function extract_(m){let _=Object.keys(m);for(let E of _)E in d&&(v[E]=d[E]),m[E]&&"object"==typeof m[E]&&!Array.isArray(m[E])&&extract_(m[E])}let _=m(d||{});return extract_(_),v}v.d(m,{K:()=>extract})},85082:(d,m,v)=>{"use strict";function defineFormatter(d,m){return({exclude:v,format:_})=>({exclude:v,format:d=>{let E=m(d);if(v)for(let d of v)delete E[d];return{...E,..._(d)}},type:d})}v.d(m,{$:()=>defineFormatter})},22892:(d,m,v)=>{"use strict";function formatLog(d,{args:m,eventName:v}={}){return{...d,blockHash:d.blockHash?d.blockHash:null,blockNumber:d.blockNumber?BigInt(d.blockNumber):null,logIndex:d.logIndex?Number(d.logIndex):null,transactionHash:d.transactionHash?d.transactionHash:null,transactionIndex:d.transactionIndex?Number(d.transactionIndex):null,...v?{args:m,eventName:v}:{}}}v.d(m,{U:()=>formatLog})},95824:(d,m,v)=>{"use strict";v.d(m,{Tr:()=>formatTransaction,c8:()=>x,y_:()=>T});var _=v(90953),E=v(85082);let x={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function formatTransaction(d){let m={...d,blockHash:d.blockHash?d.blockHash:null,blockNumber:d.blockNumber?BigInt(d.blockNumber):null,chainId:d.chainId?(0,_.ly)(d.chainId):void 0,gas:d.gas?BigInt(d.gas):void 0,gasPrice:d.gasPrice?BigInt(d.gasPrice):void 0,maxFeePerGas:d.maxFeePerGas?BigInt(d.maxFeePerGas):void 0,maxPriorityFeePerGas:d.maxPriorityFeePerGas?BigInt(d.maxPriorityFeePerGas):void 0,nonce:d.nonce?(0,_.ly)(d.nonce):void 0,to:d.to?d.to:null,transactionIndex:d.transactionIndex?Number(d.transactionIndex):null,type:d.type?x[d.type]:void 0,typeHex:d.type?d.type:void 0,value:d.value?BigInt(d.value):void 0,v:d.v?BigInt(d.v):void 0};return"legacy"===m.type&&(delete m.accessList,delete m.maxFeePerGas,delete m.maxPriorityFeePerGas),"eip2930"===m.type&&(delete m.maxFeePerGas,delete m.maxPriorityFeePerGas),m}let T=(0,E.$)("transaction",formatTransaction)},47675:(d,m,v)=>{"use strict";v.d(m,{d:()=>j,f:()=>formatTransactionReceipt});var _=v(90953),E=v(85082),x=v(22892),T=v(95824);let A={"0x0":"reverted","0x1":"success"};function formatTransactionReceipt(d){return{...d,blockNumber:d.blockNumber?BigInt(d.blockNumber):null,contractAddress:d.contractAddress?d.contractAddress:null,cumulativeGasUsed:d.cumulativeGasUsed?BigInt(d.cumulativeGasUsed):null,effectiveGasPrice:d.effectiveGasPrice?BigInt(d.effectiveGasPrice):null,gasUsed:d.gasUsed?BigInt(d.gasUsed):null,logs:d.logs?d.logs.map(d=>(0,x.U)(d)):null,to:d.to?d.to:null,transactionIndex:d.transactionIndex?(0,_.ly)(d.transactionIndex):null,status:d.status?A[d.status]:null,type:d.type?T.c8[d.type]||d.type:null}}let j=(0,E.$)("transactionReceipt",formatTransactionReceipt)},6569:(d,m,v)=>{"use strict";v.d(m,{tG:()=>formatTransactionRequest});var _=v(60208);let E={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function formatTransactionRequest(d){return{...d,gas:void 0!==d.gas?(0,_.eC)(d.gas):void 0,gasPrice:void 0!==d.gasPrice?(0,_.eC)(d.gasPrice):void 0,maxFeePerGas:void 0!==d.maxFeePerGas?(0,_.eC)(d.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==d.maxPriorityFeePerGas?(0,_.eC)(d.maxPriorityFeePerGas):void 0,nonce:void 0!==d.nonce?(0,_.eC)(d.nonce):void 0,type:void 0!==d.type?E[d.type]:void 0,value:void 0!==d.value?(0,_.eC)(d.value):void 0}}},96630:(d,m,v)=>{"use strict";function getAction(d,m){return v=>d[m.name]?.(v)??m(d,v)}v.d(m,{s:()=>getAction})},49720:(d,m,v)=>{"use strict";v.d(m,{e:()=>getEventSelector});var _=v(31878),E=v(5917);let getEventSignature=d=>(0,E.r)(d);var x=v(54940);let hash=d=>(0,x.w)((0,_.O0)(d)),getEventSelector=d=>hash(getEventSignature(d))},5280:(d,m,v)=>{"use strict";v.d(m,{o:()=>getFunctionSelector});var _=v(91714),E=v(31878),x=v(5917),T=v(54940);let hash=d=>(0,T.w)((0,E.O0)(d)),getFunctionSelector=d=>(0,_.tP)(hash((0,x.r)(d)),0,4)},5917:(d,m,v)=>{"use strict";v.d(m,{r:()=>getFunctionSignature});var _=v(44503);let E=/((function|event)\s)?(.*)(\((.*)\))/;function extractFunctionParts(d){let m=d.match(E),v=m?.[2]||void 0,_=m?.[3],x=m?.[5]||void 0;return{type:v,name:_,params:x}}function extractFunctionName(d){return extractFunctionParts(d).name}function extractFunctionParams(d){let m=extractFunctionParts(d).params,v=m?.split(",").map(d=>d.trim().split(" "));return v?.map(d=>({type:d[0],name:"indexed"===d[1]?d[2]:d[1],..."indexed"===d[1]?{indexed:!0}:{}}))}let getFunctionSignature=d=>{if("string"==typeof d){let m=extractFunctionName(d),v=extractFunctionParams(d)||[];return`${m}(${v.map(({type:d})=>d).join(",")})`}return(0,_.t)(d)}},54940:(d,m,v)=>{"use strict";function number(d){if(!Number.isSafeInteger(d)||d<0)throw Error(`Wrong positive integer: ${d}`)}function bytes(d,...m){if(!(d instanceof Uint8Array))throw Error("Expected Uint8Array");if(m.length>0&&!m.includes(d.length))throw Error(`Expected Uint8Array of length ${m}, not of length=${d.length}`)}function exists(d,m=!0){if(d.destroyed)throw Error("Hash instance has been destroyed");if(m&&d.finished)throw Error("Hash#digest() has already been called")}function output(d,m){bytes(d);let v=m.outputLen;if(d.length<v)throw Error(`digestInto() expects output buffer of length at least ${v}`)}v.d(m,{w:()=>keccak256});let _=BigInt(4294967296-1),E=BigInt(32);function fromBig(d,m=!1){return m?{h:Number(d&_),l:Number(d>>E&_)}:{h:0|Number(d>>E&_),l:0|Number(d&_)}}function split(d,m=!1){let v=new Uint32Array(d.length),_=new Uint32Array(d.length);for(let E=0;E<d.length;E++){let{h:x,l:T}=fromBig(d[E],m);[v[E],_[E]]=[x,T]}return[v,_]}let rotlSH=(d,m,v)=>d<<v|m>>>32-v,rotlSL=(d,m,v)=>m<<v|d>>>32-v,rotlBH=(d,m,v)=>m<<v-32|d>>>64-v,rotlBL=(d,m,v)=>d<<v-32|m>>>64-v,u8a=d=>d instanceof Uint8Array,u32=d=>new Uint32Array(d.buffer,d.byteOffset,Math.floor(d.byteLength/4)),x=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!x)throw Error("Non little-endian hardware is not supported");function utf8ToBytes(d){if("string"!=typeof d)throw Error(`utf8ToBytes expected string, got ${typeof d}`);return new Uint8Array(new TextEncoder().encode(d))}function toBytes(d){if("string"==typeof d&&(d=utf8ToBytes(d)),!u8a(d))throw Error(`expected Uint8Array, got ${typeof d}`);return d}let Hash=class Hash{clone(){return this._cloneInto()}};function wrapConstructor(d){let hashC=m=>d().update(toBytes(m)).digest(),m=d();return hashC.outputLen=m.outputLen,hashC.blockLen=m.blockLen,hashC.create=()=>d(),hashC}let[T,A,j]=[[],[],[]],U=BigInt(0),F=BigInt(1),W=BigInt(2),K=BigInt(7),Q=BigInt(256),X=BigInt(113);for(let d=0,m=F,v=1,_=0;d<24;d++){[v,_]=[_,(2*v+3*_)%5],T.push(2*(5*_+v)),A.push((d+1)*(d+2)/2%64);let E=U;for(let d=0;d<7;d++)(m=(m<<F^(m>>K)*X)%Q)&W&&(E^=F<<(F<<BigInt(d))-F);j.push(E)}let[ee,er]=split(j,!0),rotlH=(d,m,v)=>v>32?rotlBH(d,m,v):rotlSH(d,m,v),rotlL=(d,m,v)=>v>32?rotlBL(d,m,v):rotlSL(d,m,v);function keccakP(d,m=24){let v=new Uint32Array(10);for(let _=24-m;_<24;_++){for(let m=0;m<10;m++)v[m]=d[m]^d[m+10]^d[m+20]^d[m+30]^d[m+40];for(let m=0;m<10;m+=2){let _=(m+8)%10,E=(m+2)%10,x=v[E],T=v[E+1],A=rotlH(x,T,1)^v[_],j=rotlL(x,T,1)^v[_+1];for(let v=0;v<50;v+=10)d[m+v]^=A,d[m+v+1]^=j}let m=d[2],E=d[3];for(let v=0;v<24;v++){let _=A[v],x=rotlH(m,E,_),j=rotlL(m,E,_),U=T[v];m=d[U],E=d[U+1],d[U]=x,d[U+1]=j}for(let m=0;m<50;m+=10){for(let _=0;_<10;_++)v[_]=d[m+_];for(let _=0;_<10;_++)d[m+_]^=~v[(_+2)%10]&v[(_+4)%10]}d[0]^=ee[_],d[1]^=er[_]}v.fill(0)}let Keccak=class Keccak extends Hash{constructor(d,m,v,_=!1,E=24){if(super(),this.blockLen=d,this.suffix=m,this.outputLen=v,this.enableXOF=_,this.rounds=E,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,number(v),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=u32(this.state)}keccak(){keccakP(this.state32,this.rounds),this.posOut=0,this.pos=0}update(d){exists(this);let{blockLen:m,state:v}=this;d=toBytes(d);let _=d.length;for(let E=0;E<_;){let x=Math.min(m-this.pos,_-E);for(let m=0;m<x;m++)v[this.pos++]^=d[E++];this.pos===m&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:d,suffix:m,pos:v,blockLen:_}=this;d[v]^=m,(128&m)!=0&&v===_-1&&this.keccak(),d[_-1]^=128,this.keccak()}writeInto(d){exists(this,!1),bytes(d),this.finish();let m=this.state,{blockLen:v}=this;for(let _=0,E=d.length;_<E;){this.posOut>=v&&this.keccak();let x=Math.min(v-this.posOut,E-_);d.set(m.subarray(this.posOut,this.posOut+x),_),this.posOut+=x,_+=x}return d}xofInto(d){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(d)}xof(d){return number(d),this.xofInto(new Uint8Array(d))}digestInto(d){if(output(d,this),this.finished)throw Error("digest() was already called");return this.writeInto(d),this.destroy(),d}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(d){let{blockLen:m,suffix:v,outputLen:_,rounds:E,enableXOF:x}=this;return d||(d=new Keccak(m,v,_,x,E)),d.state32.set(this.state32),d.pos=this.pos,d.posOut=this.posOut,d.finished=this.finished,d.rounds=E,d.suffix=v,d.outputLen=_,d.enableXOF=x,d.destroyed=this.destroyed,d}};let ei=wrapConstructor(()=>new Keccak(136,1,32));var eo=v(36681),ea=v(31878),es=v(60208);function keccak256(d,m){let v=ei((0,eo.v)(d,{strict:!1})?(0,ea.O0)(d):d);return"bytes"===(m||"hex")?v:(0,es.NC)(v)}},62205:(d,m,v)=>{"use strict";v.d(m,{S:()=>createBatchScheduler});let _=new Map;function createBatchScheduler({fn:d,id:m,shouldSplitBatch:v,wait:E=0}){let exec=async()=>{let m=getScheduler();flush();let v=m.map(({args:d})=>d);0!==v.length&&d(v).then(d=>{m.forEach(({pendingPromise:m},v)=>m.resolve?.([d[v],d]))}).catch(d=>{m.forEach(({pendingPromise:m})=>m.reject?.(d))})},flush=()=>_.delete(m),getBatchedArgs=()=>getScheduler().map(({args:d})=>d),getScheduler=()=>_.get(m)||[],setScheduler=d=>_.set(m,[...getScheduler(),d]);return{flush,async schedule(d){let m={},_=new Promise((d,v)=>{m.resolve=d,m.reject=v}),x=v?.([...getBatchedArgs(),d]);x&&exec();let T=getScheduler().length>0;return T?setScheduler({args:d,pendingPromise:m}):(setScheduler({args:d,pendingPromise:m}),setTimeout(exec,E)),_}}}},80413:(d,m,v)=>{"use strict";v.d(m,{J:()=>withRetry});var _=v(82820);function withRetry(d,{delay:m=100,retryCount:v=2,shouldRetry:E=()=>!0}={}){return new Promise((x,T)=>{let attemptRetry=async({count:A=0}={})=>{let retry=async({error:d})=>{let v="function"==typeof m?m({count:A,error:d}):m;v&&await (0,_.D)(v),attemptRetry({count:A+1})};try{let m=await d();x(m)}catch(d){if(A<v&&await E({count:A,error:d}))return retry({error:d});T(d)}};attemptRetry()})}},62854:(d,m,v)=>{"use strict";v.d(m,{P:()=>stringify});let stringify=(d,m,v)=>JSON.stringify(d,(d,v)=>{let _="bigint"==typeof v?v.toString():v;return"function"==typeof m?m(d,_):_},v)},5604:(d,m,v)=>{"use strict";v.d(m,{F:()=>assertRequest});var _=v(65545),E=v(42164),x=v(73177),T=v(96321),A=v(75929);function assertRequest(d){let{account:m,gasPrice:v,maxFeePerGas:j,maxPriorityFeePerGas:U,to:F}=d,W=m?(0,_.T)(m):void 0;if(W&&!(0,A.U)(W.address))throw new E.b({address:W.address});if(F&&!(0,A.U)(F))throw new E.b({address:F});if(void 0!==v&&(void 0!==j||void 0!==U))throw new T.xY;if(j&&j>2n**256n-1n)throw new x.Hh({maxFeePerGas:j});if(U&&j&&U>j)throw new x.cs({maxFeePerGas:j,maxPriorityFeePerGas:U})}},66553:(d,m,v)=>{"use strict";v.d(m,{cj:()=>getTypesForEIP712Domain,iC:()=>validateTypedData});var _=v(90749),E=v(42164),x=v(75929),T=v(6582),A=v(60208);let j=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,U=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function validateTypedData({domain:d,message:m,primaryType:v,types:F}){let validateData=(d,m)=>{for(let v of d){let{name:d,type:W}=v,K=m[d],Q=W.match(U);if(Q&&("number"==typeof K||"bigint"==typeof K)){let[d,m,v]=Q;(0,A.eC)(K,{signed:"int"===m,size:parseInt(v)/8})}if("address"===W&&"string"==typeof K&&!(0,x.U)(K))throw new E.b({address:K});let X=W.match(j);if(X){let[d,m]=X;if(m&&(0,T.d)(K)!==parseInt(m))throw new _.KY({expectedSize:parseInt(m),givenSize:(0,T.d)(K)})}let ee=F[W];ee&&validateData(ee,K)}};if(F.EIP712Domain&&d&&validateData(F.EIP712Domain,d),"EIP712Domain"!==v){let d=F[v];validateData(d,m)}}function getTypesForEIP712Domain({domain:d}){return["string"==typeof d?.name&&{name:"name",type:"string"},d?.version&&{name:"version",type:"string"},"number"==typeof d?.chainId&&{name:"chainId",type:"uint256"},d?.verifyingContract&&{name:"verifyingContract",type:"address"},d?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},9690:(d,m,v)=>{"use strict";v.d(m,{d:()=>formatEther});var _=v(73214),E=v(81531);function formatEther(d,m="wei"){return(0,E.b)(d,_.ez[m])}},36117:(d,m,v)=>{"use strict";v.d(m,{o:()=>formatGwei});var _=v(73214),E=v(81531);function formatGwei(d,m="wei"){return(0,E.b)(d,_.Zn[m])}},81531:(d,m,v)=>{"use strict";function formatUnits(d,m){let v=d.toString(),_=v.startsWith("-");_&&(v=v.slice(1));let[E,x]=[(v=v.padStart(m,"0")).slice(0,v.length-m),v.slice(v.length-m)];return x=x.replace(/(0+)$/,""),`${_?"-":""}${E||"0"}${x?`.${x}`:""}`}v.d(m,{b:()=>formatUnits})},82820:(d,m,v)=>{"use strict";async function wait(d){return new Promise(m=>setTimeout(m,d))}v.d(m,{D:()=>wait})},38239:(d,m,v)=>{"use strict";function createSyncStoragePersister({storage:d,key:m="REACT_QUERY_OFFLINE_CACHE",throttleTime:v=1e3,serialize:_=JSON.stringify,deserialize:E=JSON.parse,retry:x}){if(d){let trySave=v=>{try{d.setItem(m,_(v));return}catch(d){return d}};return{persistClient:throttle(d=>{let m=d,v=trySave(m),_=0;for(;v&&m;)_++,(m=null==x?void 0:x({persistedClient:m,error:v,errorCount:_}))&&(v=trySave(m))},v),restoreClient:()=>{let v=d.getItem(m);if(v)return E(v)},removeClient:()=>{d.removeItem(m)}}}return{persistClient:noop,restoreClient:()=>void 0,removeClient:noop}}function throttle(d,m=100){let v,_=null;return function(...E){v=E,null===_&&(_=setTimeout(()=>{d(...v),_=null},m))}}function noop(){}v.d(m,{eM:()=>WagmiConfig,_g:()=>createConfig,M5:()=>usePrepareSendTransaction,pQ:()=>useSendTransaction});let _="undefined"==typeof window||"Deno"in window;function utils_noop(){}function functionalUpdate(d,m){return"function"==typeof d?d(m):d}function isValidTimeout(d){return"number"==typeof d&&d>=0&&d!==1/0}function timeUntilStale(d,m){return Math.max(d+(m||0)-Date.now(),0)}function parseQueryArgs(d,m,v){return isQueryKey(d)?"function"==typeof m?{...v,queryKey:d,queryFn:m}:{...m,queryKey:d}:d}function parseMutationArgs(d,m,v){return isQueryKey(d)?"function"==typeof m?{...v,mutationKey:d,mutationFn:m}:{...m,mutationKey:d}:"function"==typeof d?{...m,mutationFn:d}:{...d}}function parseFilterArgs(d,m,v){return isQueryKey(d)?[{...m,queryKey:d},v]:[d||{},m]}function matchQuery(d,m){let{type:v="all",exact:_,fetchStatus:E,predicate:x,queryKey:T,stale:A}=d;if(isQueryKey(T)){if(_){if(m.queryHash!==hashQueryKeyByOptions(T,m.options))return!1}else{if(!partialDeepEqual(m.queryKey,T))return!1}}if("all"!==v){let d=m.isActive();if("active"===v&&!d||"inactive"===v&&d)return!1}return("boolean"!=typeof A||m.isStale()===A)&&(void 0===E||E===m.state.fetchStatus)&&(!x||!!x(m))}function matchMutation(d,m){let{exact:v,fetching:_,predicate:E,mutationKey:x}=d;if(isQueryKey(x)){if(!m.options.mutationKey)return!1;if(v){if(hashQueryKey(m.options.mutationKey)!==hashQueryKey(x))return!1}else{if(!partialDeepEqual(m.options.mutationKey,x))return!1}}return("boolean"!=typeof _||"loading"===m.state.status===_)&&(!E||!!E(m))}function hashQueryKeyByOptions(d,m){let v=(null==m?void 0:m.queryKeyHashFn)||hashQueryKey;return v(d)}function hashQueryKey(d){return JSON.stringify(d,(d,m)=>isPlainObject(m)?Object.keys(m).sort().reduce((d,v)=>(d[v]=m[v],d),{}):m)}function partialDeepEqual(d,m){return d===m||typeof d==typeof m&&!!d&&!!m&&"object"==typeof d&&"object"==typeof m&&!Object.keys(m).some(v=>!partialDeepEqual(d[v],m[v]))}function utils_replaceEqualDeep(d,m){if(d===m)return d;let v=isPlainArray(d)&&isPlainArray(m);if(v||isPlainObject(d)&&isPlainObject(m)){let _=v?d.length:Object.keys(d).length,E=v?m:Object.keys(m),x=E.length,T=v?[]:{},A=0;for(let _=0;_<x;_++){let x=v?_:E[_];T[x]=utils_replaceEqualDeep(d[x],m[x]),T[x]===d[x]&&A++}return _===x&&A===_?d:T}return m}function shallowEqualObjects(d,m){if(d&&!m||m&&!d)return!1;for(let v in d)if(d[v]!==m[v])return!1;return!0}function isPlainArray(d){return Array.isArray(d)&&d.length===Object.keys(d).length}function isPlainObject(d){if(!hasObjectPrototype(d))return!1;let m=d.constructor;if(void 0===m)return!0;let v=m.prototype;return!!(hasObjectPrototype(v)&&v.hasOwnProperty("isPrototypeOf"))}function hasObjectPrototype(d){return"[object Object]"===Object.prototype.toString.call(d)}function isQueryKey(d){return Array.isArray(d)}function sleep(d){return new Promise(m=>{setTimeout(m,d)})}function scheduleMicrotask(d){sleep(0).then(d)}function getAbortController(){if("function"==typeof AbortController)return new AbortController}function replaceData(d,m,v){return null!=v.isDataEqual&&v.isDataEqual(d,m)?d:"function"==typeof v.structuralSharing?v.structuralSharing(d,m):!1!==v.structuralSharing?utils_replaceEqualDeep(d,m):m}let E=console;function createNotifyManager(){let d=[],m=0,notifyFn=d=>{d()},batchNotifyFn=d=>{d()},schedule=v=>{m?d.push(v):scheduleMicrotask(()=>{notifyFn(v)})},flush=()=>{let m=d;d=[],m.length&&scheduleMicrotask(()=>{batchNotifyFn(()=>{m.forEach(d=>{notifyFn(d)})})})};return{batch:d=>{let v;m++;try{v=d()}finally{--m||flush()}return v},batchCalls:d=>(...m)=>{schedule(()=>{d(...m)})},schedule,setNotifyFunction:d=>{notifyFn=d},setBatchNotifyFunction:d=>{batchNotifyFn=d}}}let x=createNotifyManager();let Subscribable=class Subscribable{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(d){let m={listener:d};return this.listeners.add(m),this.onSubscribe(),()=>{this.listeners.delete(m),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};let FocusManager=class FocusManager extends Subscribable{constructor(){super(),this.setup=d=>{if(!_&&window.addEventListener){let listener=()=>d();return window.addEventListener("visibilitychange",listener,!1),window.addEventListener("focus",listener,!1),()=>{window.removeEventListener("visibilitychange",listener),window.removeEventListener("focus",listener)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var d;null==(d=this.cleanup)||d.call(this),this.cleanup=void 0}}setEventListener(d){var m;this.setup=d,null==(m=this.cleanup)||m.call(this),this.cleanup=d(d=>{"boolean"==typeof d?this.setFocused(d):this.onFocus()})}setFocused(d){let m=this.focused!==d;m&&(this.focused=d,this.onFocus())}onFocus(){this.listeners.forEach(({listener:d})=>{d()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}};let T=new FocusManager,A=["online","offline"];let OnlineManager=class OnlineManager extends Subscribable{constructor(){super(),this.setup=d=>{if(!_&&window.addEventListener){let listener=()=>d();return A.forEach(d=>{window.addEventListener(d,listener,!1)}),()=>{A.forEach(d=>{window.removeEventListener(d,listener)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var d;null==(d=this.cleanup)||d.call(this),this.cleanup=void 0}}setEventListener(d){var m;this.setup=d,null==(m=this.cleanup)||m.call(this),this.cleanup=d(d=>{"boolean"==typeof d?this.setOnline(d):this.onOnline()})}setOnline(d){let m=this.online!==d;m&&(this.online=d,this.onOnline())}onOnline(){this.listeners.forEach(({listener:d})=>{d()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};let j=new OnlineManager;function defaultRetryDelay(d){return Math.min(1e3*2**d,3e4)}function canFetch(d){return(null!=d?d:"online")!=="online"||j.isOnline()}let CancelledError=class CancelledError{constructor(d){this.revert=null==d?void 0:d.revert,this.silent=null==d?void 0:d.silent}};function isCancelledError(d){return d instanceof CancelledError}function createRetryer(d){let m,v,_,E=!1,x=0,A=!1,U=new Promise((d,m)=>{v=d,_=m}),shouldPause=()=>!T.isFocused()||"always"!==d.networkMode&&!j.isOnline(),resolve=_=>{A||(A=!0,null==d.onSuccess||d.onSuccess(_),null==m||m(),v(_))},reject=v=>{A||(A=!0,null==d.onError||d.onError(v),null==m||m(),_(v))},pause=()=>new Promise(v=>{m=d=>{let m=A||!shouldPause();return m&&v(d),m},null==d.onPause||d.onPause()}).then(()=>{m=void 0,A||null==d.onContinue||d.onContinue()}),run=()=>{let m;if(!A){try{m=d.fn()}catch(d){m=Promise.reject(d)}Promise.resolve(m).then(resolve).catch(m=>{var v,_;if(A)return;let T=null!=(v=d.retry)?v:3,j=null!=(_=d.retryDelay)?_:defaultRetryDelay,U="function"==typeof j?j(x,m):j,F=!0===T||"number"==typeof T&&x<T||"function"==typeof T&&T(x,m);if(E||!F){reject(m);return}x++,null==d.onFail||d.onFail(x,m),sleep(U).then(()=>{if(shouldPause())return pause()}).then(()=>{E?reject(m):run()})})}};return canFetch(d.networkMode)?run():pause().then(run),{promise:U,cancel:m=>{A||(reject(new CancelledError(m)),null==d.abort||d.abort())},continue:()=>{let d=null==m?void 0:m();return d?U:Promise.resolve()},cancelRetry:()=>{E=!0},continueRetry:()=>{E=!1}}}let Removable=class Removable{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),isValidTimeout(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(d){this.cacheTime=Math.max(this.cacheTime||0,null!=d?d:_?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}};let Query=class Query extends Removable{constructor(d){super(),this.abortSignalConsumed=!1,this.defaultOptions=d.defaultOptions,this.setOptions(d.options),this.observers=[],this.cache=d.cache,this.logger=d.logger||E,this.queryKey=d.queryKey,this.queryHash=d.queryHash,this.initialState=d.state||getDefaultState(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(d){this.options={...this.defaultOptions,...d},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(d,m){let v=replaceData(this.state.data,d,this.options);return this.dispatch({data:v,type:"success",dataUpdatedAt:null==m?void 0:m.updatedAt,manual:null==m?void 0:m.manual}),v}setState(d,m){this.dispatch({type:"setState",state:d,setStateOptions:m})}cancel(d){var m;let v=this.promise;return null==(m=this.retryer)||m.cancel(d),v?v.then(utils_noop).catch(utils_noop):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(d=>!1!==d.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(d=>d.getCurrentResult().isStale)}isStaleByTime(d=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!timeUntilStale(this.state.dataUpdatedAt,d)}onFocus(){var d;let m=this.observers.find(d=>d.shouldFetchOnWindowFocus());m&&m.refetch({cancelRefetch:!1}),null==(d=this.retryer)||d.continue()}onOnline(){var d;let m=this.observers.find(d=>d.shouldFetchOnReconnect());m&&m.refetch({cancelRefetch:!1}),null==(d=this.retryer)||d.continue()}addObserver(d){this.observers.includes(d)||(this.observers.push(d),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:d}))}removeObserver(d){this.observers.includes(d)&&(this.observers=this.observers.filter(m=>m!==d),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:d}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(d,m){var v,_,E,x;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=m&&m.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(E=this.retryer)||E.continueRetry(),this.promise}if(d&&this.setOptions(d),!this.options.queryFn){let d=this.observers.find(d=>d.options.queryFn);d&&this.setOptions(d.options)}let T=getAbortController(),A={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},addSignalProperty=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>{if(T)return this.abortSignalConsumed=!0,T.signal}})};addSignalProperty(A);let j={fetchOptions:m,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(A)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};addSignalProperty(j),null==(v=this.options.behavior)||v.onFetch(j),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(_=j.fetchOptions)?void 0:_.meta))&&this.dispatch({type:"fetch",meta:null==(x=j.fetchOptions)?void 0:x.meta});let onError=d=>{if(isCancelledError(d)&&d.silent||this.dispatch({type:"error",error:d}),!isCancelledError(d)){var m,v,_,E;null==(m=(v=this.cache.config).onError)||m.call(v,d,this),null==(_=(E=this.cache.config).onSettled)||_.call(E,this.state.data,d,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=createRetryer({fn:j.fetchFn,abort:null==T?void 0:T.abort.bind(T),onSuccess:d=>{var m,v,_,E;if(void 0===d){onError(Error(this.queryHash+" data is undefined"));return}this.setData(d),null==(m=(v=this.cache.config).onSuccess)||m.call(v,d,this),null==(_=(E=this.cache.config).onSettled)||_.call(E,d,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError,onFail:(d,m)=>{this.dispatch({type:"failed",failureCount:d,error:m})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:j.options.retry,retryDelay:j.options.retryDelay,networkMode:j.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(d){this.state=(m=>{var v,_;switch(d.type){case"failed":return{...m,fetchFailureCount:d.failureCount,fetchFailureReason:d.error};case"pause":return{...m,fetchStatus:"paused"};case"continue":return{...m,fetchStatus:"fetching"};case"fetch":return{...m,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(v=d.meta)?v:null,fetchStatus:canFetch(this.options.networkMode)?"fetching":"paused",...!m.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...m,data:d.data,dataUpdateCount:m.dataUpdateCount+1,dataUpdatedAt:null!=(_=d.dataUpdatedAt)?_:Date.now(),error:null,isInvalidated:!1,status:"success",...!d.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let E=d.error;if(isCancelledError(E)&&E.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...m,error:E,errorUpdateCount:m.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:m.fetchFailureCount+1,fetchFailureReason:E,fetchStatus:"idle",status:"error"};case"invalidate":return{...m,isInvalidated:!0};case"setState":return{...m,...d.state}}})(this.state),x.batch(()=>{this.observers.forEach(m=>{m.onQueryUpdate(d)}),this.cache.notify({query:this,type:"updated",action:d})})}};function getDefaultState(d){let m="function"==typeof d.initialData?d.initialData():d.initialData,v=void 0!==m,_=v?"function"==typeof d.initialDataUpdatedAt?d.initialDataUpdatedAt():d.initialDataUpdatedAt:0;return{data:m,dataUpdateCount:0,dataUpdatedAt:v?null!=_?_:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:v?"success":"loading",fetchStatus:"idle"}}let QueryCache=class QueryCache extends Subscribable{constructor(d){super(),this.config=d||{},this.queries=[],this.queriesMap={}}build(d,m,v){var _;let E=m.queryKey,x=null!=(_=m.queryHash)?_:hashQueryKeyByOptions(E,m),T=this.get(x);return T||(T=new Query({cache:this,logger:d.getLogger(),queryKey:E,queryHash:x,options:d.defaultQueryOptions(m),state:v,defaultOptions:d.getQueryDefaults(E)}),this.add(T)),T}add(d){this.queriesMap[d.queryHash]||(this.queriesMap[d.queryHash]=d,this.queries.push(d),this.notify({type:"added",query:d}))}remove(d){let m=this.queriesMap[d.queryHash];m&&(d.destroy(),this.queries=this.queries.filter(m=>m!==d),m===d&&delete this.queriesMap[d.queryHash],this.notify({type:"removed",query:d}))}clear(){x.batch(()=>{this.queries.forEach(d=>{this.remove(d)})})}get(d){return this.queriesMap[d]}getAll(){return this.queries}find(d,m){let[v]=parseFilterArgs(d,m);return void 0===v.exact&&(v.exact=!0),this.queries.find(d=>matchQuery(v,d))}findAll(d,m){let[v]=parseFilterArgs(d,m);return Object.keys(v).length>0?this.queries.filter(d=>matchQuery(v,d)):this.queries}notify(d){x.batch(()=>{this.listeners.forEach(({listener:m})=>{m(d)})})}onFocus(){x.batch(()=>{this.queries.forEach(d=>{d.onFocus()})})}onOnline(){x.batch(()=>{this.queries.forEach(d=>{d.onOnline()})})}};let Mutation=class Mutation extends Removable{constructor(d){super(),this.defaultOptions=d.defaultOptions,this.mutationId=d.mutationId,this.mutationCache=d.mutationCache,this.logger=d.logger||E,this.observers=[],this.state=d.state||mutation_getDefaultState(),this.setOptions(d.options),this.scheduleGc()}setOptions(d){this.options={...this.defaultOptions,...d},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(d){this.dispatch({type:"setState",state:d})}addObserver(d){this.observers.includes(d)||(this.observers.push(d),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:d}))}removeObserver(d){this.observers=this.observers.filter(m=>m!==d),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:d})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var d,m;return null!=(d=null==(m=this.retryer)?void 0:m.continue())?d:this.execute()}async execute(){var d,m,v,_,E,x,T,A,j,U,F,W,K,Q,X,ee,er,ei,eo,ea;let es="loading"===this.state.status;try{if(!es){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(j=(U=this.mutationCache.config).onMutate)?void 0:j.call(U,this.state.variables,this));let d=await (null==(F=(W=this.options).onMutate)?void 0:F.call(W,this.state.variables));d!==this.state.context&&this.dispatch({type:"loading",context:d,variables:this.state.variables})}let K=await (()=>{var d;return this.retryer=createRetryer({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(d,m)=>{this.dispatch({type:"failed",failureCount:d,error:m})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(d=this.options.retry)?d:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(d=(m=this.mutationCache.config).onSuccess)?void 0:d.call(m,K,this.state.variables,this.state.context,this)),await (null==(v=(_=this.options).onSuccess)?void 0:v.call(_,K,this.state.variables,this.state.context)),await (null==(E=(x=this.mutationCache.config).onSettled)?void 0:E.call(x,K,null,this.state.variables,this.state.context,this)),await (null==(T=(A=this.options).onSettled)?void 0:T.call(A,K,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:K}),K}catch(d){try{throw await (null==(K=(Q=this.mutationCache.config).onError)?void 0:K.call(Q,d,this.state.variables,this.state.context,this)),await (null==(X=(ee=this.options).onError)?void 0:X.call(ee,d,this.state.variables,this.state.context)),await (null==(er=(ei=this.mutationCache.config).onSettled)?void 0:er.call(ei,void 0,d,this.state.variables,this.state.context,this)),await (null==(eo=(ea=this.options).onSettled)?void 0:eo.call(ea,void 0,d,this.state.variables,this.state.context)),d}finally{this.dispatch({type:"error",error:d})}}}dispatch(d){this.state=(m=>{switch(d.type){case"failed":return{...m,failureCount:d.failureCount,failureReason:d.error};case"pause":return{...m,isPaused:!0};case"continue":return{...m,isPaused:!1};case"loading":return{...m,context:d.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!canFetch(this.options.networkMode),status:"loading",variables:d.variables};case"success":return{...m,data:d.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...m,data:void 0,error:d.error,failureCount:m.failureCount+1,failureReason:d.error,isPaused:!1,status:"error"};case"setState":return{...m,...d.state}}})(this.state),x.batch(()=>{this.observers.forEach(m=>{m.onMutationUpdate(d)}),this.mutationCache.notify({mutation:this,type:"updated",action:d})})}};function mutation_getDefaultState(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}let MutationCache=class MutationCache extends Subscribable{constructor(d){super(),this.config=d||{},this.mutations=[],this.mutationId=0}build(d,m,v){let _=new Mutation({mutationCache:this,logger:d.getLogger(),mutationId:++this.mutationId,options:d.defaultMutationOptions(m),state:v,defaultOptions:m.mutationKey?d.getMutationDefaults(m.mutationKey):void 0});return this.add(_),_}add(d){this.mutations.push(d),this.notify({type:"added",mutation:d})}remove(d){this.mutations=this.mutations.filter(m=>m!==d),this.notify({type:"removed",mutation:d})}clear(){x.batch(()=>{this.mutations.forEach(d=>{this.remove(d)})})}getAll(){return this.mutations}find(d){return void 0===d.exact&&(d.exact=!0),this.mutations.find(m=>matchMutation(d,m))}findAll(d){return this.mutations.filter(m=>matchMutation(d,m))}notify(d){x.batch(()=>{this.listeners.forEach(({listener:m})=>{m(d)})})}resumePausedMutations(){var d;return this.resuming=(null!=(d=this.resuming)?d:Promise.resolve()).then(()=>{let d=this.mutations.filter(d=>d.state.isPaused);return x.batch(()=>d.reduce((d,m)=>d.then(()=>m.continue().catch(utils_noop)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}};function infiniteQueryBehavior(){return{onFetch:d=>{d.fetchFn=()=>{var m,v,_,E,x,T;let A;let j=null==(m=d.fetchOptions)?void 0:null==(v=m.meta)?void 0:v.refetchPage,U=null==(_=d.fetchOptions)?void 0:null==(E=_.meta)?void 0:E.fetchMore,F=null==U?void 0:U.pageParam,W=(null==U?void 0:U.direction)==="forward",K=(null==U?void 0:U.direction)==="backward",Q=(null==(x=d.state.data)?void 0:x.pages)||[],X=(null==(T=d.state.data)?void 0:T.pageParams)||[],ee=X,er=!1,addSignalProperty=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>{var m,v;return null!=(m=d.signal)&&m.aborted?er=!0:null==(v=d.signal)||v.addEventListener("abort",()=>{er=!0}),d.signal}})},ei=d.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+d.options.queryHash+"'")),buildNewPages=(d,m,v,_)=>(ee=_?[m,...ee]:[...ee,m],_?[v,...d]:[...d,v]),fetchPage=(m,v,_,E)=>{if(er)return Promise.reject("Cancelled");if(void 0===_&&!v&&m.length)return Promise.resolve(m);let x={queryKey:d.queryKey,pageParam:_,meta:d.options.meta};addSignalProperty(x);let T=ei(x),A=Promise.resolve(T).then(d=>buildNewPages(m,_,d,E));return A};if(Q.length){if(W){let m=void 0!==F,v=m?F:getNextPageParam(d.options,Q);A=fetchPage(Q,m,v)}else if(K){let m=void 0!==F,v=m?F:getPreviousPageParam(d.options,Q);A=fetchPage(Q,m,v,!0)}else{ee=[];let m=void 0===d.options.getNextPageParam,v=!j||!Q[0]||j(Q[0],0,Q);A=v?fetchPage([],m,X[0]):Promise.resolve(buildNewPages([],X[0],Q[0]));for(let v=1;v<Q.length;v++)A=A.then(_=>{let E=!j||!Q[v]||j(Q[v],v,Q);if(E){let E=m?X[v]:getNextPageParam(d.options,_);return fetchPage(_,m,E)}return Promise.resolve(buildNewPages(_,X[v],Q[v]))})}}else A=fetchPage([]);let eo=A.then(d=>({pages:d,pageParams:ee}));return eo}}}}function getNextPageParam(d,m){return null==d.getNextPageParam?void 0:d.getNextPageParam(m[m.length-1],m)}function getPreviousPageParam(d,m){return null==d.getPreviousPageParam?void 0:d.getPreviousPageParam(m[0],m)}let QueryClient=class QueryClient{constructor(d={}){this.queryCache=d.queryCache||new QueryCache,this.mutationCache=d.mutationCache||new MutationCache,this.logger=d.logger||E,this.defaultOptions=d.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=T.subscribe(()=>{T.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=j.subscribe(()=>{j.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var d,m;this.mountCount--,0===this.mountCount&&(null==(d=this.unsubscribeFocus)||d.call(this),this.unsubscribeFocus=void 0,null==(m=this.unsubscribeOnline)||m.call(this),this.unsubscribeOnline=void 0)}isFetching(d,m){let[v]=parseFilterArgs(d,m);return v.fetchStatus="fetching",this.queryCache.findAll(v).length}isMutating(d){return this.mutationCache.findAll({...d,fetching:!0}).length}getQueryData(d,m){var v;return null==(v=this.queryCache.find(d,m))?void 0:v.state.data}ensureQueryData(d,m,v){let _=parseQueryArgs(d,m,v),E=this.getQueryData(_.queryKey);return E?Promise.resolve(E):this.fetchQuery(_)}getQueriesData(d){return this.getQueryCache().findAll(d).map(({queryKey:d,state:m})=>{let v=m.data;return[d,v]})}setQueryData(d,m,v){let _=this.queryCache.find(d),E=null==_?void 0:_.state.data,x=functionalUpdate(m,E);if(void 0===x)return;let T=parseQueryArgs(d),A=this.defaultQueryOptions(T);return this.queryCache.build(this,A).setData(x,{...v,manual:!0})}setQueriesData(d,m,v){return x.batch(()=>this.getQueryCache().findAll(d).map(({queryKey:d})=>[d,this.setQueryData(d,m,v)]))}getQueryState(d,m){var v;return null==(v=this.queryCache.find(d,m))?void 0:v.state}removeQueries(d,m){let[v]=parseFilterArgs(d,m),_=this.queryCache;x.batch(()=>{_.findAll(v).forEach(d=>{_.remove(d)})})}resetQueries(d,m,v){let[_,E]=parseFilterArgs(d,m,v),T=this.queryCache,A={type:"active",..._};return x.batch(()=>(T.findAll(_).forEach(d=>{d.reset()}),this.refetchQueries(A,E)))}cancelQueries(d,m,v){let[_,E={}]=parseFilterArgs(d,m,v);void 0===E.revert&&(E.revert=!0);let T=x.batch(()=>this.queryCache.findAll(_).map(d=>d.cancel(E)));return Promise.all(T).then(utils_noop).catch(utils_noop)}invalidateQueries(d,m,v){let[_,E]=parseFilterArgs(d,m,v);return x.batch(()=>{var d,m;if(this.queryCache.findAll(_).forEach(d=>{d.invalidate()}),"none"===_.refetchType)return Promise.resolve();let v={..._,type:null!=(d=null!=(m=_.refetchType)?m:_.type)?d:"active"};return this.refetchQueries(v,E)})}refetchQueries(d,m,v){let[_,E]=parseFilterArgs(d,m,v),T=x.batch(()=>this.queryCache.findAll(_).filter(d=>!d.isDisabled()).map(d=>{var m;return d.fetch(void 0,{...E,cancelRefetch:null==(m=null==E?void 0:E.cancelRefetch)||m,meta:{refetchPage:_.refetchPage}})})),A=Promise.all(T).then(utils_noop);return null!=E&&E.throwOnError||(A=A.catch(utils_noop)),A}fetchQuery(d,m,v){let _=parseQueryArgs(d,m,v),E=this.defaultQueryOptions(_);void 0===E.retry&&(E.retry=!1);let x=this.queryCache.build(this,E);return x.isStaleByTime(E.staleTime)?x.fetch(E):Promise.resolve(x.state.data)}prefetchQuery(d,m,v){return this.fetchQuery(d,m,v).then(utils_noop).catch(utils_noop)}fetchInfiniteQuery(d,m,v){let _=parseQueryArgs(d,m,v);return _.behavior=infiniteQueryBehavior(),this.fetchQuery(_)}prefetchInfiniteQuery(d,m,v){return this.fetchInfiniteQuery(d,m,v).then(utils_noop).catch(utils_noop)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(d){this.defaultOptions=d}setQueryDefaults(d,m){let v=this.queryDefaults.find(m=>hashQueryKey(d)===hashQueryKey(m.queryKey));v?v.defaultOptions=m:this.queryDefaults.push({queryKey:d,defaultOptions:m})}getQueryDefaults(d){if(!d)return;let m=this.queryDefaults.find(m=>partialDeepEqual(d,m.queryKey));return null==m?void 0:m.defaultOptions}setMutationDefaults(d,m){let v=this.mutationDefaults.find(m=>hashQueryKey(d)===hashQueryKey(m.mutationKey));v?v.defaultOptions=m:this.mutationDefaults.push({mutationKey:d,defaultOptions:m})}getMutationDefaults(d){if(!d)return;let m=this.mutationDefaults.find(m=>partialDeepEqual(d,m.mutationKey));return null==m?void 0:m.defaultOptions}defaultQueryOptions(d){if(null!=d&&d._defaulted)return d;let m={...this.defaultOptions.queries,...this.getQueryDefaults(null==d?void 0:d.queryKey),...d,_defaulted:!0};return!m.queryHash&&m.queryKey&&(m.queryHash=hashQueryKeyByOptions(m.queryKey,m)),void 0===m.refetchOnReconnect&&(m.refetchOnReconnect="always"!==m.networkMode),void 0===m.useErrorBoundary&&(m.useErrorBoundary=!!m.suspense),m}defaultMutationOptions(d){return null!=d&&d._defaulted?d:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==d?void 0:d.mutationKey),...d,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}};function dehydrateMutation(d){return{mutationKey:d.options.mutationKey,state:d.state}}function dehydrateQuery(d){return{state:d.state,queryKey:d.queryKey,queryHash:d.queryHash}}function defaultShouldDehydrateMutation(d){return d.state.isPaused}function defaultShouldDehydrateQuery(d){return"success"===d.state.status}function dehydrate(d,m={}){let v=[],_=[];if(!1!==m.dehydrateMutations){let _=m.shouldDehydrateMutation||defaultShouldDehydrateMutation;d.getMutationCache().getAll().forEach(d=>{_(d)&&v.push(dehydrateMutation(d))})}if(!1!==m.dehydrateQueries){let v=m.shouldDehydrateQuery||defaultShouldDehydrateQuery;d.getQueryCache().getAll().forEach(d=>{v(d)&&_.push(dehydrateQuery(d))})}return{mutations:v,queries:_}}function hydrate(d,m,v){if("object"!=typeof m||null===m)return;let _=d.getMutationCache(),E=d.getQueryCache(),x=m.mutations||[],T=m.queries||[];x.forEach(m=>{var E;_.build(d,{...null==v?void 0:null==(E=v.defaultOptions)?void 0:E.mutations,mutationKey:m.mutationKey},m.state)}),T.forEach(({queryKey:m,state:_,queryHash:x})=>{var T;let A=E.get(x);if(A){if(A.state.dataUpdatedAt<_.dataUpdatedAt){let{fetchStatus:d,...m}=_;A.setState(m)}return}E.build(d,{...null==v?void 0:null==(T=v.defaultOptions)?void 0:T.queries,queryKey:m,queryHash:x},{..._,fetchStatus:"idle"})})}let U=["added","removed","updated"];function isCacheableEventType(d){return U.includes(d)}async function persistQueryClientRestore({queryClient:d,persister:m,maxAge:v=864e5,buster:_="",hydrateOptions:E}){try{let x=await m.restoreClient();if(x){if(x.timestamp){let T=Date.now()-x.timestamp>v,A=x.buster!==_;T||A?m.removeClient():hydrate(d,x.clientState,E)}else m.removeClient()}}catch(d){m.removeClient()}}async function persistQueryClientSave({queryClient:d,persister:m,buster:v="",dehydrateOptions:_}){let E={buster:v,timestamp:Date.now(),clientState:dehydrate(d,_)};await m.persistClient(E)}function persistQueryClientSubscribe(d){let m=d.queryClient.getQueryCache().subscribe(m=>{isCacheableEventType(m.type)&&persistQueryClientSave(d)}),v=d.queryClient.getMutationCache().subscribe(m=>{isCacheableEventType(m.type)&&persistQueryClientSave(d)});return()=>{m(),v()}}function persistQueryClient(d){let m,v=!1,_=persistQueryClientRestore(d).then(()=>{v||(m=persistQueryClientSubscribe(d))});return[()=>{v=!0,null==m||m()},_]}var F=v(45686),W=v(80404);let K=W.createContext(void 0),Q=W.createContext(!1);function getQueryClientContext(d,m){return d||(m&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=K),window.ReactQueryClientContext):K)}let useQueryClient=({context:d}={})=>{let m=W.useContext(getQueryClientContext(d,W.useContext(Q)));if(!m)throw Error("No QueryClient set, use QueryClientProvider to set one");return m},QueryClientProvider=({client:d,children:m,context:v,contextSharing:_=!1})=>{W.useEffect(()=>(d.mount(),()=>{d.unmount()}),[d]);let E=getQueryClientContext(v,_);return W.createElement(Q.Provider,{value:!v&&_},W.createElement(E.Provider,{value:d},m))},X=W.createContext(!1),useIsRestoring=()=>W.useContext(X);function createValue(){let d=!1;return{clearReset:()=>{d=!1},reset:()=>{d=!0},isReset:()=>d}}X.Provider;let ee=W.createContext(createValue()),useQueryErrorResetBoundary=()=>W.useContext(ee);var er=v(79555);let MutationObserver=class MutationObserver extends Subscribable{constructor(d,m){super(),this.client=d,this.setOptions(m),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(d){var m;let v=this.options;this.options=this.client.defaultMutationOptions(d),shallowEqualObjects(v,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(m=this.currentMutation)||m.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var d;null==(d=this.currentMutation)||d.removeObserver(this)}}onMutationUpdate(d){this.updateResult();let m={listeners:!0};"success"===d.type?m.onSuccess=!0:"error"===d.type&&(m.onError=!0),this.notify(m)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(d,m){return this.mutateOptions=m,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==d?d:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let d=this.currentMutation?this.currentMutation.state:mutation_getDefaultState(),m={...d,isLoading:"loading"===d.status,isSuccess:"success"===d.status,isError:"error"===d.status,isIdle:"idle"===d.status,mutate:this.mutate,reset:this.reset};this.currentResult=m}notify(d){x.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var m,v,_,E,x,T,A,j;d.onSuccess?(null==(m=(v=this.mutateOptions).onSuccess)||m.call(v,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(_=(E=this.mutateOptions).onSettled)||_.call(E,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):d.onError&&(null==(x=(T=this.mutateOptions).onError)||x.call(T,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(A=(j=this.mutateOptions).onSettled)||A.call(j,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}d.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)})})}};let ei=er.useSyncExternalStore;function shouldThrowError(d,m){return"function"==typeof d?d(...m):!!d}function useMutation(d,m,v){let _=parseMutationArgs(d,m,v),E=useQueryClient({context:_.context}),[T]=W.useState(()=>new MutationObserver(E,_));W.useEffect(()=>{T.setOptions(_)},[T,_]);let A=ei(W.useCallback(d=>T.subscribe(x.batchCalls(d)),[T]),()=>T.getCurrentResult(),()=>T.getCurrentResult()),j=W.useCallback((d,m)=>{T.mutate(d,m).catch(useMutation_noop)},[T]);if(A.error&&shouldThrowError(T.options.useErrorBoundary,[A.error]))throw A.error;return{...A,mutate:j,mutateAsync:A.mutate}}function useMutation_noop(){}let QueryObserver=class QueryObserver extends Subscribable{constructor(d,m){super(),this.client=d,this.options=m,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(m)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),shouldFetchOnMount(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(d,m){let v=this.options,_=this.currentQuery;if(this.options=this.client.defaultQueryOptions(d),shallowEqualObjects(v,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=v.queryKey),this.updateQuery();let E=this.hasListeners();E&&shouldFetchOptionally(this.currentQuery,_,this.options,v)&&this.executeFetch(),this.updateResult(m),E&&(this.currentQuery!==_||this.options.enabled!==v.enabled||this.options.staleTime!==v.staleTime)&&this.updateStaleTimeout();let x=this.computeRefetchInterval();E&&(this.currentQuery!==_||this.options.enabled!==v.enabled||x!==this.currentRefetchInterval)&&this.updateRefetchInterval(x)}getOptimisticResult(d){let m=this.client.getQueryCache().build(this.client,d),v=this.createResult(m,d);return shouldAssignObserverCurrentProperties(this,v,d)&&(this.currentResult=v,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),v}getCurrentResult(){return this.currentResult}trackResult(d){let m={};return Object.keys(d).forEach(v=>{Object.defineProperty(m,v,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(v),d[v])})}),m}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:d,...m}={}){return this.fetch({...m,meta:{refetchPage:d}})}fetchOptimistic(d){let m=this.client.defaultQueryOptions(d),v=this.client.getQueryCache().build(this.client,m);return v.isFetchingOptimistic=!0,v.fetch().then(()=>this.createResult(v,m))}fetch(d){var m;return this.executeFetch({...d,cancelRefetch:null==(m=d.cancelRefetch)||m}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(d){this.updateQuery();let m=this.currentQuery.fetch(this.options,d);return null!=d&&d.throwOnError||(m=m.catch(utils_noop)),m}updateStaleTimeout(){if(this.clearStaleTimeout(),_||this.currentResult.isStale||!isValidTimeout(this.options.staleTime))return;let d=timeUntilStale(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},d+1)}computeRefetchInterval(){var d;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(d=this.options.refetchInterval)&&d}updateRefetchInterval(d){this.clearRefetchInterval(),this.currentRefetchInterval=d,!_&&!1!==this.options.enabled&&isValidTimeout(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||T.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(d,m){let v;let _=this.currentQuery,E=this.options,x=this.currentResult,T=this.currentResultState,A=this.currentResultOptions,j=d!==_,U=j?d.state:this.currentQueryInitialState,F=j?this.currentResult:this.previousQueryResult,{state:W}=d,{dataUpdatedAt:K,error:Q,errorUpdatedAt:X,fetchStatus:ee,status:er}=W,ei=!1,eo=!1;if(m._optimisticResults){let v=this.hasListeners(),x=!v&&shouldFetchOnMount(d,m),T=v&&shouldFetchOptionally(d,_,m,E);(x||T)&&(ee=canFetch(d.options.networkMode)?"fetching":"paused",K||(er="loading")),"isRestoring"===m._optimisticResults&&(ee="idle")}if(m.keepPreviousData&&!W.dataUpdatedAt&&null!=F&&F.isSuccess&&"error"!==er)v=F.data,K=F.dataUpdatedAt,er=F.status,ei=!0;else if(m.select&&void 0!==W.data){if(x&&W.data===(null==T?void 0:T.data)&&m.select===this.selectFn)v=this.selectResult;else try{this.selectFn=m.select,v=m.select(W.data),v=replaceData(null==x?void 0:x.data,v,m),this.selectResult=v,this.selectError=null}catch(d){this.selectError=d}}else v=W.data;if(void 0!==m.placeholderData&&void 0===v&&"loading"===er){let d;if(null!=x&&x.isPlaceholderData&&m.placeholderData===(null==A?void 0:A.placeholderData))d=x.data;else if(d="function"==typeof m.placeholderData?m.placeholderData():m.placeholderData,m.select&&void 0!==d)try{d=m.select(d),this.selectError=null}catch(d){this.selectError=d}void 0!==d&&(er="success",v=replaceData(null==x?void 0:x.data,d,m),eo=!0)}this.selectError&&(Q=this.selectError,v=this.selectResult,X=Date.now(),er="error");let ea="fetching"===ee,es="loading"===er,el="error"===er,ec={status:er,fetchStatus:ee,isLoading:es,isSuccess:"success"===er,isError:el,isInitialLoading:es&&ea,data:v,dataUpdatedAt:K,error:Q,errorUpdatedAt:X,failureCount:W.fetchFailureCount,failureReason:W.fetchFailureReason,errorUpdateCount:W.errorUpdateCount,isFetched:W.dataUpdateCount>0||W.errorUpdateCount>0,isFetchedAfterMount:W.dataUpdateCount>U.dataUpdateCount||W.errorUpdateCount>U.errorUpdateCount,isFetching:ea,isRefetching:ea&&!es,isLoadingError:el&&0===W.dataUpdatedAt,isPaused:"paused"===ee,isPlaceholderData:eo,isPreviousData:ei,isRefetchError:el&&0!==W.dataUpdatedAt,isStale:isStale(d,m),refetch:this.refetch,remove:this.remove};return ec}updateResult(d){let m=this.currentResult,v=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,shallowEqualObjects(v,m))return;this.currentResult=v;let _={cache:!0};(null==d?void 0:d.listeners)!==!1&&(()=>{if(!m)return!0;let{notifyOnChangeProps:d}=this.options,v="function"==typeof d?d():d;if("all"===v||!v&&!this.trackedProps.size)return!0;let _=new Set(null!=v?v:this.trackedProps);return this.options.useErrorBoundary&&_.add("error"),Object.keys(this.currentResult).some(d=>{let v=this.currentResult[d]!==m[d];return v&&_.has(d)})})()&&(_.listeners=!0),this.notify({..._,...d})}updateQuery(){let d=this.client.getQueryCache().build(this.client,this.options);if(d===this.currentQuery)return;let m=this.currentQuery;this.currentQuery=d,this.currentQueryInitialState=d.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==m||m.removeObserver(this),d.addObserver(this))}onQueryUpdate(d){let m={};"success"===d.type?m.onSuccess=!d.manual:"error"!==d.type||isCancelledError(d.error)||(m.onError=!0),this.updateResult(m),this.hasListeners()&&this.updateTimers()}notify(d){x.batch(()=>{var m,v,_,E,x,T,A,j;d.onSuccess?(null==(m=(v=this.options).onSuccess)||m.call(v,this.currentResult.data),null==(_=(E=this.options).onSettled)||_.call(E,this.currentResult.data,null)):d.onError&&(null==(x=(T=this.options).onError)||x.call(T,this.currentResult.error),null==(A=(j=this.options).onSettled)||A.call(j,void 0,this.currentResult.error)),d.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)}),d.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}};function shouldLoadOnMount(d,m){return!1!==m.enabled&&!d.state.dataUpdatedAt&&!("error"===d.state.status&&!1===m.retryOnMount)}function shouldFetchOnMount(d,m){return shouldLoadOnMount(d,m)||d.state.dataUpdatedAt>0&&shouldFetchOn(d,m,m.refetchOnMount)}function shouldFetchOn(d,m,v){if(!1!==m.enabled){let _="function"==typeof v?v(d):v;return"always"===_||!1!==_&&isStale(d,m)}return!1}function shouldFetchOptionally(d,m,v,_){return!1!==v.enabled&&(d!==m||!1===_.enabled)&&(!v.suspense||"error"!==d.state.status)&&isStale(d,v)}function isStale(d,m){return d.isStaleByTime(m.staleTime)}function shouldAssignObserverCurrentProperties(d,m,v){return!v.keepPreviousData&&(void 0!==v.placeholderData?m.isPlaceholderData:!shallowEqualObjects(d.getCurrentResult(),m))}var eo=v(76801);function createConfig({queryClient:d=new QueryClient({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:m=(0,F.o6)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:F.wp}),persister:v="undefined"!=typeof window?createSyncStoragePersister({key:"cache",storage:m,serialize:d=>d,deserialize:d=>d}):void 0,..._}){let E=(0,F._g)({..._,storage:m});return v&&persistQueryClient({queryClient:d,persister:v,dehydrateOptions:{shouldDehydrateQuery:d=>0!==d.cacheTime&&!1!==d.queryKey[0].persist}}),Object.assign(E,{queryClient:d})}var ea=W.createContext(void 0),es=W.createContext(void 0);function WagmiConfig({children:d,config:m}){return W.createElement(ea.Provider,{children:W.createElement(QueryClientProvider,{children:d,client:m.queryClient,context:es}),value:m})}function useConfig(){let d=W.useContext(ea);if(!d)throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");return d}var el=er.useSyncExternalStore;function dist_isQueryKey(d){return Array.isArray(d)}function dist_isPlainObject(d){if(!dist_hasObjectPrototype(d))return!1;let m=d.constructor;if(void 0===m)return!0;let v=m.prototype;return!!(dist_hasObjectPrototype(v)&&v.hasOwnProperty("isPrototypeOf"))}function dist_hasObjectPrototype(d){return"[object Object]"===Object.prototype.toString.call(d)}function dist_parseQueryArgs(d,m,v){return dist_isQueryKey(d)?"function"==typeof m?{...v,queryKey:d,queryFn:m}:{...m,queryKey:d}:d}function queryKeyHashFn(d){return JSON.stringify(d,(d,m)=>dist_isPlainObject(m)?Object.keys(m).sort().reduce((d,v)=>(d[v]=m[v],d),{}):"bigint"==typeof m?m.toString():m)}function dist_shouldThrowError(d,m){return"function"==typeof d?d(...m):!!d}function trackResult(d,m){let v={};return Object.keys(d).forEach(_=>{Object.defineProperty(v,_,{configurable:!1,enumerable:!0,get:()=>(m.trackedProps.add(_),d[_])})}),v}function useBaseQuery(d,m){let v=useQueryClient({context:d.context}),_=useIsRestoring(),E=useQueryErrorResetBoundary(),T=v.defaultQueryOptions({...d,queryKeyHashFn});T._optimisticResults=_?"isRestoring":"optimistic",T.onError&&(T.onError=x.batchCalls(T.onError)),T.onSuccess&&(T.onSuccess=x.batchCalls(T.onSuccess)),T.onSettled&&(T.onSettled=x.batchCalls(T.onSettled)),T.suspense&&"number"!=typeof T.staleTime&&(T.staleTime=1e3),(T.suspense||T.useErrorBoundary)&&!E.isReset()&&(T.retryOnMount=!1);let[A]=W.useState(()=>new m(v,T)),j=A.getOptimisticResult(T);if(el(W.useCallback(d=>_?()=>void 0:A.subscribe(x.batchCalls(d)),[A,_]),()=>A.getCurrentResult(),()=>A.getCurrentResult()),W.useEffect(()=>{E.clearReset()},[E]),W.useEffect(()=>{A.setOptions(T,{listeners:!1})},[T,A]),T.suspense&&j.isLoading&&j.isFetching&&!_)throw A.fetchOptimistic(T).then(({data:d})=>{T.onSuccess?.(d),T.onSettled?.(d,null)}).catch(d=>{E.clearReset(),T.onError?.(d),T.onSettled?.(void 0,d)});if(j.isError&&!E.isReset()&&!j.isFetching&&dist_shouldThrowError(T.useErrorBoundary,[j.error,A.getCurrentQuery()]))throw j.error;let U="loading"===j.status&&"idle"===j.fetchStatus?"idle":j.status,F="loading"===U&&"fetching"===j.fetchStatus;return{...j,defaultedOptions:T,isIdle:"idle"===U,isLoading:F,observer:A,status:U}}function dist_useMutation(d,m,v){let _=parseMutationArgs(d,m,v);return useMutation({context:es,..._})}function useQuery(d,m,v){let _=dist_parseQueryArgs(d,m,v),E=useBaseQuery({context:es,..._},QueryObserver),x={data:E.data,error:E.error,fetchStatus:E.fetchStatus,isError:E.isError,isFetched:E.isFetched,isFetchedAfterMount:E.isFetchedAfterMount,isFetching:E.isFetching,isIdle:E.isIdle,isLoading:E.isLoading,isRefetching:E.isRefetching,isSuccess:E.isSuccess,refetch:E.refetch,status:E.status,internal:{dataUpdatedAt:E.dataUpdatedAt,errorUpdatedAt:E.errorUpdatedAt,failureCount:E.failureCount,isFetchedAfterMount:E.isFetchedAfterMount,isLoadingError:E.isLoadingError,isPaused:E.isPaused,isPlaceholderData:E.isPlaceholderData,isPreviousData:E.isPreviousData,isRefetchError:E.isRefetchError,isStale:E.isStale,remove:E.remove}};return E.defaultedOptions.notifyOnChangeProps?x:trackResult(x,E.observer)}var useQueryClient2=()=>useQueryClient({context:es});function usePublicClient({chainId:d}={}){return(0,eo.useSyncExternalStoreWithSelector)(m=>(0,F.pC)({chainId:d},m),()=>(0,F.uV)({chainId:d}),()=>(0,F.uV)({chainId:d}),d=>d,(d,m)=>d.uid===m.uid)}function queryKey({chainId:d}){return[{entity:"walletClient",chainId:d,persist:!1}]}function queryFn({queryKey:[{chainId:d}]}){return(0,F.xz)({chainId:d})}function useWalletClient({chainId:d,suspense:m,onError:v,onSettled:_,onSuccess:E}={}){let{connector:x}=useAccount(),T=useChainId({chainId:d}),A=useQuery(queryKey({chainId:T}),queryFn,{cacheTime:0,enabled:!!x,staleTime:1/0,suspense:m,onError:v,onSettled:_,onSuccess:E}),j=useQueryClient2();return W.useEffect(()=>{let d=(0,F.Tb)({chainId:T},d=>{d?j.invalidateQueries(queryKey({chainId:T})):j.removeQueries(queryKey({chainId:T}))});return d},[j,T]),A}function useWebSocketPublicClient({chainId:d}={}){return useSyncExternalStoreWithSelector2(m=>watchWebSocketPublicClient({chainId:d},m),()=>getWebSocketPublicClient({chainId:d}),()=>getWebSocketPublicClient({chainId:d}),d=>d,(d,m)=>d?.uid===m?.uid)}function useChainId({chainId:d}={}){let m=usePublicClient({chainId:d});return m.chain.id}function queryKey2({chainId:d,scopeKey:m}){return[{entity:"blockNumber",chainId:d,scopeKey:m}]}function queryFn2({queryKey:[{chainId:d}]}){return fetchBlockNumber({chainId:d})}var isPlainObject2=d=>"object"==typeof d&&!Array.isArray(d);function useSyncExternalStoreWithTracked(d,m,v=m,_=F.vZ){let E=W.useRef([]),x=(0,eo.useSyncExternalStoreWithSelector)(d,m,v,d=>d,(d,m)=>{if(isPlainObject2(d)&&isPlainObject2(m)&&E.current.length){for(let v of E.current){let E=_(d[v],m[v]);if(!E)return!1}return!0}return _(d,m)});if(isPlainObject2(x)){let d={...x};return Object.defineProperties(d,Object.entries(d).reduce((d,[m,v])=>({...d,[m]:{configurable:!1,enumerable:!0,get:()=>(E.current.includes(m)||E.current.push(m),v)}}),{})),d}return x}function useAccount({onConnect:d,onDisconnect:m}={}){let v=useConfig(),_=W.useCallback(d=>(0,F.uH)(d),[v]),E=useSyncExternalStoreWithTracked(_,F.D0),x=W.useRef(),T=x.current;return W.useEffect(()=>{T?.status!=="connected"&&"connected"===E.status&&d?.({address:E.address,connector:E.connector,isReconnected:T?.status==="reconnecting"||T?.status===void 0}),T?.status==="connected"&&"disconnected"===E.status&&m?.(),x.current=E},[d,m,T,E]),E}function useNetwork(){let d=useConfig(),m=(0,W.useCallback)(d=>(0,F.QC)(d),[d]);return useSyncExternalStoreWithTracked(m,F.Hy)}function queryKey14({accessList:d,account:m,activeChainId:v,chainId:_,data:E,gas:x,gasPrice:T,maxFeePerGas:A,maxPriorityFeePerGas:j,nonce:U,to:F,value:W,scopeKey:K,walletClientAddress:Q}){return[{entity:"prepareSendTransaction",activeChainId:v,accessList:d,account:m,chainId:_,data:E,gas:x,gasPrice:T,maxFeePerGas:A,maxPriorityFeePerGas:j,nonce:U,to:F,value:W,scopeKey:K,walletClientAddress:Q}]}function queryFn14({walletClient:d}){return({queryKey:[{accessList:m,account:v,chainId:_,data:E,gas:x,gasPrice:T,maxFeePerGas:A,maxPriorityFeePerGas:j,nonce:U,to:W,value:K}]})=>{if(!W)throw Error("to is required");return(0,F.uw)({accessList:m,account:v,chainId:_,data:E,gas:x,gasPrice:T,maxFeePerGas:A,maxPriorityFeePerGas:j,nonce:U,to:W,value:K,walletClient:d})}}function usePrepareSendTransaction({accessList:d,account:m,chainId:v,cacheTime:_,data:E,enabled:x=!0,gas:T,gasPrice:A,maxFeePerGas:j,maxPriorityFeePerGas:U,nonce:F,scopeKey:W,staleTime:K,suspense:Q,to:X,value:ee,onError:er,onSettled:ei,onSuccess:eo}={}){let{chain:ea}=useNetwork(),{data:es}=useWalletClient({chainId:v}),el=useQuery(queryKey14({accessList:d,activeChainId:ea?.id,account:m,chainId:v,data:E,gas:T,gasPrice:A,maxFeePerGas:j,maxPriorityFeePerGas:U,nonce:F,scopeKey:W,to:X,value:ee,walletClientAddress:es?.account.address}),queryFn14({walletClient:es}),{cacheTime:_,enabled:!!(x&&es&&X),staleTime:K,suspense:Q,onError:er,onSettled:ei,onSuccess:eo});return Object.assign(el,{config:{mode:"prepared",...el.isSuccess?el.data:void 0}})}var mutationKey7=d=>[{entity:"sendTransaction",...d}],mutationFn7=({accessList:d,account:m,chainId:v,data:_,gas:E,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,mode:j,nonce:U,to:W,value:K})=>{if(!W)throw Error("to is required.");return(0,F.T7)({accessList:d,account:m,chainId:v,data:_,gas:E,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,mode:j,nonce:U,to:W,value:K})};function useSendTransaction({accessList:d,account:m,chainId:v,data:_,gas:E,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,mode:j,nonce:U,to:F,value:K,onError:Q,onMutate:X,onSettled:ee,onSuccess:er}={}){let{data:ei,error:eo,isError:ea,isIdle:es,isLoading:el,isSuccess:ec,mutate:eu,mutateAsync:ed,reset:eh,status:ef,variables:ep}=dist_useMutation(mutationKey7({accessList:d,account:m,chainId:v,data:_,gas:E,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,mode:j,nonce:U,to:F,value:K}),mutationFn7,{onError:Q,onMutate:X,onSettled:ee,onSuccess:er}),eg=W.useCallback(W=>eu({chainId:v,mode:j,...W||{accessList:d,account:m,chainId:v,data:_,gas:E,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,mode:j,nonce:U,value:K,to:F}}),[d,m,v,_,E,x,T,A,j,eu,U,F,K]),em=W.useCallback(W=>ed({chainId:v,mode:j,...W||{accessList:d,account:m,chainId:v,data:_,gas:E,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:A,mode:j,nonce:U,value:K,to:F}}),[d,m,v,_,E,x,T,A,j,ed,U,F,K]);return{data:ei,error:eo,isError:ea,isIdle:es,isLoading:el,isSuccess:ec,reset:eh,sendTransaction:"prepared"!==j||F?eg:void 0,sendTransactionAsync:"prepared"!==j||F?em:void 0,status:ef,variables:ep}}}};
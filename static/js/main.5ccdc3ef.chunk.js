(this["webpackJsonpvirtual-background"]=this["webpackJsonpvirtual-background"]||[]).push([[0],{333:function(e,t){},334:function(e,t){},342:function(e,t){},345:function(e,t){},346:function(e,t){},347:function(e,t,n){"use strict";n.r(t);var r=n(23),a=n(398),o=n(8),c=n.n(o),i=n(50),u=n.n(i),s=n(55),l=n(5),d=n(391),b=n(401),f=n(393),g=n(394),p=n(350),m=n(286),j=n.n(m),h=n(287),O=n.n(h),v=["architecture-5082700_1280","porch-691330_1280","saxon-switzerland-539418_1280","shibuyasky-4768679_1280"].map((function(e){return"".concat("/virtual-background","/backgrounds/").concat(e,".jpg")})),x=n(4),E=n.n(x),C=n(12);function R(e,t,n){var r=Math.min(t,n),a=(t-r)/2,o=(n-r)/2,c=document.createElement("canvas");return c.width=63,c.height=63,c.getContext("2d").drawImage(e,a,o,r,r,0,0,c.width,c.height),new Promise((function(e){return c.toBlob((function(t){return e(t)}))}))}var T=function(e){var t=Object(o.useState)(),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){var t=new Image;t.src=e,t.onload=Object(C.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,t.naturalWidth,t.naturalHeight);case 2:n=e.sent,a(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[r,function(){return URL.revokeObjectURL(r)}]},_=n(392),y=n(28),k=n(387);var A=Object(d.a)((function(e){return Object(b.a)({root:{padding:0,minWidth:e.spacing(7)+2,height:e.spacing(7)+2,width:e.spacing(7)+2,marginRight:e.spacing(1),marginBottom:e.spacing(1),border:"2px solid transparent",alignItems:"stretch",transitionProperty:"transform, border-color",transitionDuration:"".concat(e.transitions.duration.shorter,"ms"),transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{transform:"scale(1.125)"}},active:{borderColor:e.palette.primary.main,transform:"scale(1.125)"}})})),w=function(e){var t=A();return Object(r.jsx)(k.a,{className:Object(y.a)(t.root,e.active&&t.active),disabled:e.disabled,onClick:e.onClick,children:e.children})};var P=Object(d.a)((function(e){return Object(b.a)({scalableContent:{width:"calc(100% + 2px)",height:"calc(100% + 2px)",margin:-1,borderRadius:e.shape.borderRadius},image:{objectFit:"cover"}})})),F=function(e){var t=P();return Object(r.jsxs)(w,{active:!!e.thumbnailUrl&&e.active,disabled:!e.thumbnailUrl,onClick:e.onClick,children:[e.thumbnailUrl?Object(r.jsx)("img",{className:Object(y.a)(t.scalableContent,t.image),src:e.thumbnailUrl,alt:"",onLoad:e.onLoad}):Object(r.jsx)(_.a,{className:t.scalableContent,variant:"rect"}),e.children]})};var U=function(e){var t=T(e.imageUrl),n=Object(l.a)(t,2),a=n[0],o=n[1];return Object(r.jsx)(F,{thumbnailUrl:a,active:e.active,onClick:e.onClick,onLoad:o})};var S=Object(d.a)((function(e){return Object(b.a)({root:{width:"100%",height:"100%",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.23)",borderRadius:e.shape.borderRadius,margin:-1,boxSizing:"content-box",display:"flex",justifyContent:"center",alignItems:"center"}})})),I=function(e){var t=S();return Object(r.jsx)(w,{active:e.active,onClick:e.onClick,children:Object(r.jsx)("div",{className:t.root,children:e.children})})};var L=Object(d.a)((function(e){return Object(b.a)({root:{flex:1}})})),D=function(e){var t=L();return Object(r.jsx)(f.a,{className:t.root,children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Background"}),Object(r.jsx)(I,{active:"none"===e.background.type,onClick:function(){return e.onChange({type:"none"})},children:Object(r.jsx)(j.a,{})}),Object(r.jsx)(I,{active:"blur"===e.background.type,onClick:function(){return e.onChange({type:"blur"})},children:Object(r.jsx)(O.a,{})}),v.map((function(t){return Object(r.jsx)(U,{imageUrl:t,active:t===e.background.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)}))]})})},M=n(395),B=n(400);var N=function(e){return Object(r.jsx)(f.a,{children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Post-processing"}),Object(r.jsx)(M.a,{label:"Smooth segmentation mask",control:Object(r.jsx)(B.a,{color:"primary",checked:e.config.smoothSegmentationMask,onChange:function(t){e.onChange({smoothSegmentationMask:t.target.checked})}})})]})})},X=n(139),H=n(396),G=n(402),W=n(403),V=n(399);var z=Object(d.a)((function(e){return Object(b.a)({root:Object(s.a)({},e.breakpoints.only("md"),{gridColumnStart:2,gridRowStart:2}),formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginRight:e.spacing(2),minWidth:120}})})),Y=function(e){var t=z();return Object(r.jsx)(f.a,{className:t.root,children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Segmentation"}),Object(r.jsxs)(H.a,{className:t.formControl,variant:"outlined",children:[Object(r.jsx)(G.a,{children:"Model"}),Object(r.jsxs)(V.a,{label:"Model",value:e.config.model,onChange:function(t){var n=t.target.value,r=e.config.inputResolution;"meet"===n&&"360p"===r&&(r="144p");var a=e.config.pipeline;"bodyPix"===n&&"webgl2"===a&&(a="canvas2dCpu"),e.onChange(Object(X.a)(Object(X.a)({},e.config),{},{model:n,inputResolution:r,pipeline:a}))},children:[Object(r.jsx)(W.a,{value:"meet",children:"Meet"}),Object(r.jsx)(W.a,{value:"bodyPix",children:"BodyPix"})]})]}),Object(r.jsxs)(H.a,{className:t.formControl,variant:"outlined",children:[Object(r.jsx)(G.a,{children:"Input resolution"}),Object(r.jsxs)(V.a,{label:"Input resolution",value:e.config.inputResolution,onChange:function(t){e.onChange(Object(X.a)(Object(X.a)({},e.config),{},{inputResolution:t.target.value}))},children:[Object(r.jsx)(W.a,{value:"360p",disabled:"meet"===e.config.model,children:"360p"}),Object(r.jsx)(W.a,{value:"144p",children:"144p"}),Object(r.jsx)(W.a,{value:"96p",children:"96p"})]})]}),Object(r.jsxs)(H.a,{className:t.formControl,variant:"outlined",children:[Object(r.jsx)(G.a,{children:"Pipeline"}),Object(r.jsxs)(V.a,{label:"Pipeline",value:e.config.pipeline,onChange:function(t){e.onChange(Object(X.a)(Object(X.a)({},e.config),{},{pipeline:t.target.value}))},children:[Object(r.jsx)(W.a,{value:"webgl2",disabled:"bodyPix"===e.config.model,children:"WebGL 2 (WIP)"}),Object(r.jsx)(W.a,{value:"canvas2dCpu",children:"Canvas 2D + CPU"})]})]})]})})},J=n(289),q=n.n(J),K=["girl-919048_1280","doctor-5871743_640","woman-5883428_1280"].map((function(e){return"".concat("/virtual-background","/images/").concat(e,".jpg")})),Q=["Dance - 32938","Doctor - 26732","Thoughtful - 35590"].map((function(e){return"".concat("/virtual-background","/videos/").concat(e,".mp4")})),Z=n(288),$=n.n(Z);var ee=function(e){var t=Object(o.useState)(),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){var t=document.createElement("video");t.src=e,t.onloadedmetadata=function(){t.currentTime=t.duration/2},t.onseeked=Object(C.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,t.videoWidth,t.videoHeight);case 2:n=e.sent,a(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[r,function(){return URL.revokeObjectURL(r)}]};var te=Object(d.a)((function(e){return Object(b.a)({icon:{position:"absolute",bottom:0,right:0,color:e.palette.common.white}})})),ne=function(e){var t=te(),n=ee(e.videoUrl),a=Object(l.a)(n,2),o=a[0],c=a[1];return Object(r.jsx)(F,{thumbnailUrl:o,active:e.active,onClick:e.onClick,onLoad:c,children:Object(r.jsx)($.a,{className:t.icon})})};var re=Object(d.a)((function(e){return Object(b.a)({root:{flex:1}})})),ae=function(e){var t=re();return Object(r.jsx)(f.a,{className:t.root,children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Source"}),Object(r.jsx)(I,{active:"camera"===e.source.type,onClick:function(){return e.onChange({type:"camera"})},children:Object(r.jsx)(q.a,{})}),K.map((function(t){return Object(r.jsx)(U,{imageUrl:t,active:t===e.source.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)})),Q.map((function(t){return Object(r.jsx)(ne,{videoUrl:t,active:t===e.source.url,onClick:function(){return e.onChange({type:"video",url:t})}},t)}))]})})},oe=n(404),ce=n(349),ie={"360p":[640,360],"144p":[256,144],"96p":[160,96]};function ue(e,t,n,r,a,o,c,i){var u=n.getContext("2d"),s=Object(l.a)(ie[o.inputResolution],2),d=s[0],b=s[1],f=d*b,g=new ImageData(d,b),p=document.createElement("canvas");p.width=d,p.height=b;var m=p.getContext("2d"),j=a._getInputMemoryOffset()/4,h=a._getOutputMemoryOffset()/4;function O(){return(O=Object(C.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==t.type&&v(),i(),"none"===t.type){e.next=9;break}if("bodyPix"!==o.model){e.next=8;break}return e.next=6,x();case 6:e.next=9;break;case 8:T();case 9:i(),_();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){if(m.drawImage(e.htmlElement,0,0,e.width,e.height,0,0,d,b),"meet"===o.model)for(var t=m.getImageData(0,0,d,b),n=0;n<f;n++)a.HEAPF32[j+3*n]=t.data[4*n]/255,a.HEAPF32[j+3*n+1]=t.data[4*n+1]/255,a.HEAPF32[j+3*n+2]=t.data[4*n+2]/255}function x(){return R.apply(this,arguments)}function R(){return(R=Object(C.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.segmentPerson(p);case 2:for(t=e.sent,n=0;n<f;n++)g.data[4*n+3]=t.data[n]?255:0;m.putImageData(g,0,0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){a._runInference();for(var e=0;e<f;e++){var t=a.HEAPF32[h+2*e],n=a.HEAPF32[h+2*e+1],r=Math.max(t,n),o=Math.exp(t-r),c=Math.exp(n-r);g.data[4*e+3]=255*c/(o+c)}m.putImageData(g,0,0)}function _(){u.globalCompositeOperation="copy",u.filter="none",c.smoothSegmentationMask&&("blur"===t.type?u.filter="blur(8px)":"image"===t.type&&(u.filter="blur(4px)")),"none"!==t.type&&(u.drawImage(p,0,0,d,b,0,0,e.width,e.height),u.globalCompositeOperation="source-in",u.filter="none"),u.drawImage(e.htmlElement,0,0),"blur"===t.type&&(u.globalCompositeOperation="destination-over",u.filter="blur(8px)",u.drawImage(e.htmlElement,0,0))}return{run:function(){return O.apply(this,arguments)},cleanUp:function(){}}}var se=n(236),le=String.raw;function de(){var e=Object(se.a)(["#version 300 es\n\n  precision highp float;\n\n  uniform sampler2D u_image;\n\n  in vec2 v_texCoord;\n\n  out vec4 outColor;\n\n  float segmentPerson() {\n    vec2 segmentation = texture(u_image, vec2(v_texCoord.x, 1.0 - v_texCoord.y)).rg;\n    float shift = max(segmentation.r, segmentation.g);\n    float backgroundExp = exp(segmentation.r - shift);\n    float personExp = exp(segmentation.g - shift);\n    return personExp / (backgroundExp + personExp); // softmax\n  }\n\n  void main() {\n    float person = segmentPerson();\n    outColor = vec4(vec3(person), 1.0);\n  }\n"]);return de=function(){return e},e}function be(){var e=Object(se.a)(["#version 300 es\n\n  precision highp float;\n\n  uniform sampler2D u_image;\n\n  in vec2 v_texCoord;\n\n  out vec4 outColor;\n\n  void main() {\n    outColor = texture(u_image, v_texCoord);\n  }\n"]);return be=function(){return e},e}function fe(){var e=Object(se.a)(["#version 300 es\n\n  in vec4 a_position;\n  in vec2 a_texCoord;\n\n  out vec2 v_texCoord;\n\n  void main() {\n    gl_Position = a_position;\n    v_texCoord = a_texCoord;\n  }\n"]);return fe=function(){return e},e}var ge=le(fe()),pe=le(be()),me=le(de());function je(e,t,n){var r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw new Error("Could not compile shader: ".concat(e.getShaderInfoLog(r)));return r}function he(e,t,n){var r=e.createProgram();if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw new Error("Could not link WebGL program: ".concat(e.getProgramInfoLog(r)));return r}var Oe=function(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)([]),c=Object(l.a)(a,2),i=c[0],u=c[1],s=Object(o.useRef)(0),d=Object(o.useRef)(0),b=Object(o.useRef)([]),f=Object(o.useRef)(0),g=Object(o.useRef)(0);return{fps:n,durations:i,beginFrame:Object(o.useCallback)((function(){d.current=Date.now()}),[]),addFrameEvent:Object(o.useCallback)((function(){var e=Date.now();b.current[f.current]=e-d.current,d.current=e,f.current++}),[]),endFrame:Object(o.useCallback)((function(){var e=Date.now();b.current[f.current]=e-d.current,g.current++,e>=s.current+1e3&&(r(1e3*g.current/(e-s.current)),u(b.current),s.current=e,g.current=0),f.current=0}),[])}};var ve=function(e,t,n,r,a,c){var i=Object(o.useRef)(null),u=Oe(),s=u.fps,d=u.durations,b=u.beginFrame,f=u.addFrameEvent,g=u.endFrame;return Object(o.useEffect)((function(){var o,u=!0,s="webgl2"===a.pipeline?function(e,t,n,r,a,o,c){var i=Object(l.a)(ie[a.inputResolution],2),u=i[0],s=i[1],d=u*s,b=r._getInputMemoryOffset()/4,f=r._getOutputMemoryOffset()/4,g=n.getContext("webgl2");g.getExtension("EXT_color_buffer_float");var p=je(g,g.VERTEX_SHADER,ge),m=je(g,g.FRAGMENT_SHADER,pe),j=je(g,g.FRAGMENT_SHADER,me),h=he(g,p,m),O=he(g,p,j),v=g.getAttribLocation(h,"a_position"),x=g.getAttribLocation(h,"a_texCoord"),R=g.getUniformLocation(h,"u_image"),T=g.createVertexArray();g.bindVertexArray(T);var _=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,_),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),g.STATIC_DRAW),g.enableVertexAttribArray(v),g.vertexAttribPointer(v,2,g.FLOAT,!1,0,0);var y=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,y),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),g.STATIC_DRAW),g.enableVertexAttribArray(x),g.vertexAttribPointer(x,2,g.FLOAT,!1,0,0);var k=g.createTexture();g.bindTexture(g.TEXTURE_2D,k),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.NEAREST),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.NEAREST);var A=g.createTexture();g.bindTexture(g.TEXTURE_2D,A),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.NEAREST),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.NEAREST),g.texImage2D(g.TEXTURE_2D,0,g.RGBA32F,u,s,0,g.RGBA,g.FLOAT,null);var w=g.createFramebuffer();g.bindFramebuffer(g.FRAMEBUFFER,w),g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,A,0);var P=new Float32Array(u*s*4);function F(){return(F=Object(C.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(g.viewport(0,0,u,s),g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.useProgram(h),g.bindVertexArray(T),g.activeTexture(g.TEXTURE0+0),g.bindTexture(g.TEXTURE_2D,k),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,e.htmlElement),g.uniform1i(R,0),g.bindFramebuffer(g.FRAMEBUFFER,w),g.drawArrays(g.TRIANGLE_STRIP,0,4),g.readPixels(0,0,u,s,g.RGBA,g.FLOAT,P),a=0;a<d;a++)r.HEAPF32[b+3*a]=P[4*a],r.HEAPF32[b+3*a+1]=P[4*a+1],r.HEAPF32[b+3*a+2]=P[4*a+2];c(),r._runInference(),c(),g.viewport(0,0,n.width,n.height),g.useProgram(O),g.texImage2D(g.TEXTURE_2D,0,g.RG32F,u,s,0,g.RG,g.FLOAT,r.HEAPF32,f),g.bindFramebuffer(g.FRAMEBUFFER,null),g.drawArrays(g.TRIANGLE_STRIP,0,4);case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{run:function(){return F.apply(this,arguments)},cleanUp:function(){g.deleteFramebuffer(w),g.deleteTexture(A),g.deleteTexture(k),g.deleteBuffer(y),g.deleteBuffer(_),g.deleteVertexArray(T),g.deleteProgram(O),g.deleteProgram(h),g.deleteShader(j),g.deleteShader(m),g.deleteShader(p)}}}(e,0,i.current,r,a,0,f):ue(e,t,i.current,n,r,a,c,f);function d(){return p.apply(this,arguments)}function p(){return(p=Object(C.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:return b(),e.next=5,s.run();case 5:g(),o=requestAnimationFrame(d);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return d(),console.log("Animation started:",e,t,a,c),function(){u=!1,cancelAnimationFrame(o),s.cleanUp(),console.log("Animation stopped:",e,t,a,c)}}),[e,t,n,r,a,c,b,f,g]),{canvasRef:i,fps:s,durations:d}};var xe=Object(d.a)((function(e){return Object(b.a)({root:{flex:1,position:"relative"},render:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"},stats:{position:"absolute",top:0,right:0,left:0,textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.48)",color:e.palette.common.white}})})),Ee=function(e){var t=xe(),n=ve(e.sourcePlayback,e.background,e.bodyPix,e.tflite,e.segmentationConfig,e.postProcessingConfig),a=n.canvasRef,o=n.fps,c=Object(l.a)(n.durations,3),i=c[0],u=c[1],s=c[2],d=["resizing ".concat(i,"ms"),"inference ".concat(u,"ms"),"post-processing ".concat(s,"ms")],b="".concat(Math.round(o)," fps (").concat(d.join(", "),")");return Object(r.jsxs)("div",{className:t.root,children:["canvas2dCpu"===e.segmentationConfig.pipeline&&"image"===e.background.type&&Object(r.jsx)("img",{className:t.render,src:e.background.url,alt:""}),Object(r.jsx)("canvas",{ref:a,className:t.render,width:e.sourcePlayback.width,height:e.sourcePlayback.height},e.segmentationConfig.pipeline),Object(r.jsx)(p.a,{className:t.stats,variant:"caption",children:b})]})},Ce=n(397),Re=n(290),Te=n.n(Re);var _e=Object(d.a)((function(e){var t;return Object(b.a)({root:(t={position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},Object(s.a)(t,e.breakpoints.down("xs"),{width:0,overflow:"hidden"}),Object(s.a)(t,e.breakpoints.up("sm"),{flex:1,borderRightWidth:1,borderRightStyle:"solid",borderRightColor:e.palette.divider}),t),sourcePlayback:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"}})})),ye=function(e){var t=_e(),n=Object(o.useState)(),a=Object(l.a)(n,2),c=a[0],i=a[1],u=Object(o.useState)(!1),s=Object(l.a)(u,2),d=s[0],b=s[1],f=Object(o.useState)(!1),g=Object(l.a)(f,2),p=g[0],m=g[1],j=Object(o.useRef)(null);return Object(o.useEffect)((function(){i(void 0),b(!0),m(!1),setTimeout((function(){return i(e.source.url)}))}),[e.source]),Object(o.useEffect)((function(){function t(){return(t=Object(C.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={video:!0},e.next=4,navigator.mediaDevices.getUserMedia(t);case 4:if(n=e.sent,!j.current){e.next=8;break}return j.current.srcObject=n,e.abrupt("return");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error opening video camera.",e.t0);case 13:b(!1),m(!0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}"camera"===e.source.type?function(){t.apply(this,arguments)}():j.current&&(j.current.srcObject=null)}),[e.source]),Object(r.jsxs)("div",{className:t.root,children:[d&&Object(r.jsx)(Ce.a,{}),"image"===e.source.type?Object(r.jsx)("img",{className:t.sourcePlayback,src:c,hidden:d,alt:"",onLoad:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.naturalWidth,height:n.naturalHeight}),b(!1)}}):p?Object(r.jsx)(Te.a,{fontSize:"large"}):Object(r.jsx)("video",{ref:j,className:t.sourcePlayback,src:c,hidden:d,autoPlay:!0,playsInline:!0,controls:!1,muted:!0,loop:!0,onLoadedData:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.videoWidth,height:n.videoHeight}),b(!1)}})]})};var ke=Object(d.a)((function(e){var t,n=["".concat(e.spacing(52),"px"),"100vh - ".concat(e.spacing(2),"px")];return Object(b.a)({root:(t={minHeight:"calc(min(".concat(n.join(", "),"))"),display:"flex",overflow:"hidden"},Object(s.a)(t,e.breakpoints.up("md"),{gridColumnStart:1,gridColumnEnd:3}),Object(s.a)(t,e.breakpoints.up("lg"),{gridRowStart:1,gridRowEnd:3}),t),noOutput:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:e.spacing(20),height:e.spacing(20)}})})),Ae=function(e){var t=ke(),n=Object(o.useState)(),a=Object(l.a)(n,2),c=a[0],i=a[1];return Object(o.useEffect)((function(){i(void 0)}),[e.source]),Object(r.jsxs)(ce.a,{className:t.root,children:[Object(r.jsx)(ye,{source:e.source,onLoad:i}),c&&e.bodyPix&&e.tflite?Object(r.jsx)(Ee,{sourcePlayback:c,background:e.background,bodyPix:e.bodyPix,tflite:e.tflite,segmentationConfig:e.segmentationConfig,postProcessingConfig:e.postProcessingConfig}):Object(r.jsx)("div",{className:t.noOutput,children:Object(r.jsx)(oe.a,{className:t.avatar})})]})},we=n(291),Pe=n(311);var Fe=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(C.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading TensorFlow.js and BodyPix segmentation model"),e.next=3,Pe.a();case 3:return e.t0=r,e.next=6,we.a();case 6:e.t1=e.sent,(0,e.t0)(e.t1),console.log("TensorFlow.js and BodyPix loaded");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var Ue=function(e,t){var n=Object(o.useState)(!1),r=Object(l.a)(n,2),a=r[0],c=r[1];return Object(o.useEffect)((function(){function n(){return(n=Object(C.a)(E.a.mark((function n(){var r,a,o,i;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&"meet"===t.model){n.next=2;break}return n.abrupt("return");case 2:return c(!1),r="144p"===t.inputResolution?"segm_full_v679":"segm_lite_v681",console.log("Loading meet model:",r),n.next=7,fetch("".concat("/virtual-background","/models/").concat(r,".tflite"));case 7:return a=n.sent,n.next=10,a.arrayBuffer();case 10:o=n.sent,console.log("Model buffer size:",o.byteLength),i=e._getModelBufferMemoryOffset(),console.log("Model buffer memory offset:",i),console.log("Loading model buffer..."),e.HEAPU8.set(new Uint8Array(o),i),console.log("_loadModel result:",e._loadModel(o.byteLength)),console.log("Input memory offset:",e._getInputMemoryOffset()),console.log("Input height:",e._getInputHeight()),console.log("Input width:",e._getInputWidth()),console.log("Input channels:",e._getInputChannelCount()),console.log("Output memory offset:",e._getOutputMemoryOffset()),console.log("Output height:",e._getOutputHeight()),console.log("Output width:",e._getOutputWidth()),console.log("Output channels:",e._getOutputChannelCount()),c(!0);case 26:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e,t]),a};var Se=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(C.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,createTFLiteModule();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var Ie=Object(d.a)((function(e){var t;return Object(b.a)({root:(t={display:"grid"},Object(s.a)(t,e.breakpoints.up("xs"),{margin:e.spacing(1),gap:e.spacing(1),gridTemplateColumns:"1fr"}),Object(s.a)(t,e.breakpoints.up("md"),{margin:e.spacing(2),gap:e.spacing(2),gridTemplateColumns:"repeat(2, 1fr)"}),Object(s.a)(t,e.breakpoints.up("lg"),{gridTemplateColumns:"repeat(3, 1fr)"}),t),resourceSelectionCards:{display:"flex",flexDirection:"column"}})})),Le=function(){var e=Fe(),t=Se(),n=Ie(),a=Object(o.useState)({type:"image",url:K[0]}),c=Object(l.a)(a,2),i=c[0],u=c[1],s=Object(o.useState)({type:"image",url:v[0]}),d=Object(l.a)(s,2),b=d[0],f=d[1],g=Object(o.useState)({model:"meet",inputResolution:"96p",pipeline:"canvas2dCpu"}),p=Object(l.a)(g,2),m=p[0],j=p[1],h=Object(o.useState)({smoothSegmentationMask:!0}),O=Object(l.a)(h,2),x=O[0],E=O[1],C=Ue(t,m);return Object(r.jsxs)("div",{className:n.root,children:[Object(r.jsx)(Ae,{source:i,background:b,bodyPix:e,tflite:C||"bodyPix"===m.model?t:void 0,segmentationConfig:m,postProcessingConfig:x}),Object(r.jsx)(ae,{source:i,onChange:u}),Object(r.jsx)(D,{background:b,onChange:f}),Object(r.jsx)(Y,{config:m,onChange:j}),Object(r.jsx)(N,{config:x,onChange:E})]})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,406)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};u.a.render(Object(r.jsxs)(c.a.StrictMode,{children:[Object(r.jsx)(a.a,{}),Object(r.jsx)(Le,{})]}),document.getElementById("root")),De()}},[[347,1,2]]]);
//# sourceMappingURL=main.5ccdc3ef.chunk.js.map
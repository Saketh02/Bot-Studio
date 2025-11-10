"use strict";(()=>{var b="bot-studio-widget-styles",l={launcherLabel:"Chat with us",theme:"light",title:"Assistant",welcomeMessage:"Hi there! I\u2019m here to help. Ask me anything about our services.",subtitle:"Powered by Bot Studio",accentColor:"#2563eb",position:"bottom-right",panelHeight:640},f=`
.bot-widget-root {
  all: initial;
  font-family: "Inter", system-ui, sans-serif;
}
.bot-widget-root *,
.bot-widget-root *::before,
.bot-widget-root *::after {
  box-sizing: border-box;
}
.bot-widget-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
  z-index: 2147480000;
  animation: bot-enter 280ms ease-out;
}
.bot-widget-container[data-theme="dark"] { color-scheme: dark; }

.bot-widget-container[data-position="bottom-left"] {
  right: auto;
  left: 24px;
}

.bot-widget-launcher {
  border: none;
  border-radius: 9999px;
  padding: 12px 18px;
  background: var(--bot-primary);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.24);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  letter-spacing: 0.01em;
  transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
}
.bot-widget-launcher:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.3);
}
.bot-widget-launcher:active {
  transform: translateY(0);
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.22);
}

.bot-widget-panel {
  width: min(380px, calc(100vw - 40px));
  height: min(var(--bot-panel-height), calc(100vh - 96px));
  display: none;
  flex-direction: column;
  background: var(--bot-surface);
  color: var(--bot-text);
  border-radius: 18px;
  border: 1px solid var(--bot-border);
  box-shadow: 0 32px 70px rgba(15, 23, 42, 0.28);
  overflow: hidden;
  transform-origin: bottom right;
  animation: bot-scale-in 200ms ease-out;
  backdrop-filter: blur(18px);
}
.bot-widget-panel[data-open="true"] {
  display: flex;
}

.bot-widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 22px;
  background: linear-gradient(135deg, var(--bot-primary), var(--bot-primary-soft));
  color: #fff;
}

.bot-widget-body {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow-y: auto;
  background: var(--bot-surface-alt);
  scrollbar-width: thin;
}
.bot-widget-body::-webkit-scrollbar {
  width: 6px;
}
.bot-widget-body::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.25);
  border-radius: 999px;
}

.bot-widget-message {
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 18px;
  line-height: 1.5;
  font-size: 0.95rem;
  transition: transform 120ms ease;
}
.bot-widget-message[data-role="user"] {
  align-self: flex-end;
  background: var(--bot-primary);
  color: #fff;
  border-bottom-right-radius: 8px;
}
.bot-widget-message[data-role="assistant"] {
  align-self: flex-start;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, 0.32);
  color: var(--bot-text);
  border-bottom-left-radius: 8px;
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.12);
}
.bot-widget-message[data-error="true"] {
  border-color: #ef4444;
  background: #fee2e2;
  color: #991b1b;
}

.bot-widget-footer {
  padding: 18px 20px;
  border-top: 1px solid var(--bot-border);
  background: var(--bot-surface);
  display: flex;
  gap: 10px;
}
.bot-widget-input {
  flex: 1;
  min-height: 48px;
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  padding: 12px 14px;
  background: var(--bot-surface-alt);
  color: var(--bot-text);
  resize: none;
  font-size: 0.94rem;
  line-height: 1.45;
  transition: border 140ms ease, box-shadow 140ms ease;
}
.bot-widget-input:focus {
  outline: none;
  border-color: rgba(37, 99, 235, 0.55);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.18);
}
.bot-widget-send {
  width: 50px;
  border-radius: 14px;
  border: none;
  background: var(--bot-primary);
  color: #fff;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 1.05rem;
  transition: transform 140ms ease, box-shadow 140ms ease, opacity 140ms ease;
}
.bot-widget-send:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 20px rgba(37, 99, 235, 0.25);
}
.bot-widget-send:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.bot-widget-loading {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  color: var(--bot-primary);
}
.bot-widget-loading span {
  width: 6px;
  height: 6px;
  background: currentColor;
  border-radius: 50%;
  animation: bot-dot 1s infinite ease-in-out;
}
.bot-widget-loading span:nth-child(2) { animation-delay: .2s; }
.bot-widget-loading span:nth-child(3) { animation-delay: .4s; }
@keyframes bot-dot {
  0%, 80%, 100% { transform: scale(.6); }
  40% { transform: scale(1); }
}

@keyframes bot-enter {
  from { transform: translateY(12px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes bot-scale-in {
  from { transform: scale(0.96); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
`,u=class{constructor(e){this.root=null;this.container=null;this.panel=null;this.launcher=null;this.messagesBody=null;this.input=null;this.sendButton=null;this.messages=[];this.sending=!1;var t,o,n,a,r,i,d;if(!e.chatbotId)throw new Error("Chatbot ID is required");if(!e.apiBaseUrl)throw new Error("API base URL is required");this.options={...l,...e},(t=this.options).launcherLabel||(t.launcherLabel=l.launcherLabel),(o=this.options).title||(o.title=l.title),(n=this.options).subtitle||(n.subtitle=l.subtitle),(a=this.options).welcomeMessage||(a.welcomeMessage=l.welcomeMessage),(r=this.options).accentColor||(r.accentColor=l.accentColor),(i=this.options).position||(i.position=l.position),(d=this.options).panelHeight||(d.panelHeight=l.panelHeight)}mount(){typeof document!="undefined"&&(this.injectStyles(),this.createDom(),this.options.welcomeMessage&&this.pushMessage({id:this.id(),role:"assistant",content:this.options.welcomeMessage}))}destroy(){var e;(e=this.root)==null||e.remove(),this.root=null,this.container=null,this.panel=null,this.launcher=null,this.messagesBody=null,this.input=null,this.sendButton=null,this.messages=[]}injectStyles(){if(document.getElementById(b))return;let e=document.createElement("style");e.id=b,e.textContent=f,document.head.appendChild(e)}createDom(){var d,c;this.root=document.createElement("div"),this.root.className="bot-widget-root",this.container=document.createElement("div"),this.container.className="bot-widget-container",this.container.dataset.theme=this.options.theme,this.container.dataset.position=(d=this.options.position)!=null?d:"bottom-right";let e=(c=this.options.accentColor)!=null?c:l.accentColor;this.container.style.setProperty("--bot-primary",e),this.container.style.setProperty("--bot-primary-soft",this.options.theme==="dark"?"rgba(99, 102, 241, 0.82)":"rgba(59, 130, 246, 0.82)"),this.container.style.setProperty("--bot-panel-height",`${this.options.panelHeight}px`),this.options.theme==="dark"?(this.container.style.setProperty("--bot-surface","#0f172a"),this.container.style.setProperty("--bot-surface-alt","rgba(15, 23, 42, 0.78)"),this.container.style.setProperty("--bot-text","#e2e8f0"),this.container.style.setProperty("--bot-border","rgba(148, 163, 184, 0.28)")):(this.container.style.setProperty("--bot-surface","#f8fafc"),this.container.style.setProperty("--bot-surface-alt","#ffffff"),this.container.style.setProperty("--bot-text","#0f172a"),this.container.style.setProperty("--bot-border","rgba(15, 23, 42, 0.1)")),this.panel=document.createElement("div"),this.panel.className="bot-widget-panel",this.panel.dataset.open="false";let t=document.createElement("div");t.className="bot-widget-header";let o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.gap="4px";let n=document.createElement("strong");if(n.textContent=this.options.title,n.style.fontSize="1.06rem",this.options.subtitle){let s=document.createElement("span");s.textContent=this.options.subtitle,s.style.fontSize="0.75rem",s.style.opacity="0.75",o.appendChild(n),o.appendChild(s)}else o.appendChild(n);let a=document.createElement("button");a.type="button",a.textContent="\xD7",a.style.cssText="background:rgba(255,255,255,0.18);border:none;color:#fff;width:32px;height:32px;border-radius:999px;font-size:20px;cursor:pointer;",a.addEventListener("click",()=>this.togglePanel(!1)),t.appendChild(o),t.appendChild(a),this.messagesBody=document.createElement("div"),this.messagesBody.className="bot-widget-body";let r=document.createElement("div");r.className="bot-widget-footer",this.input=document.createElement("textarea"),this.input.className="bot-widget-input",this.input.placeholder="Type your message\u2026",this.input.addEventListener("keydown",s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),this.handleSend())}),this.sendButton=document.createElement("button"),this.sendButton.className="bot-widget-send",this.sendButton.type="button",this.sendButton.innerHTML="\u27A4",this.sendButton.addEventListener("click",()=>this.handleSend()),r.appendChild(this.input),r.appendChild(this.sendButton),this.panel.appendChild(t),this.panel.appendChild(this.messagesBody),this.panel.appendChild(r),this.launcher=document.createElement("button"),this.launcher.className="bot-widget-launcher",this.launcher.type="button",this.launcher.textContent=this.options.launcherLabel;let i=document.createElement("span");i.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',i.style.display="inline-flex",this.launcher.prepend(i),this.launcher.addEventListener("click",()=>this.togglePanel()),this.container.appendChild(this.panel),this.container.appendChild(this.launcher),this.root.appendChild(this.container),document.body.appendChild(this.root)}togglePanel(e){if(!this.panel)return;let t=e!=null?e:this.panel.dataset.open!=="true";this.panel.dataset.open=t?"true":"false",t&&setTimeout(()=>{var o;return(o=this.input)==null?void 0:o.focus()},20)}async handleSend(){var n;let e=(n=this.input)==null?void 0:n.value.trim();if(!e||this.sending)return;this.input&&(this.input.value="");let t={id:this.id(),role:"user",content:e};this.pushMessage(t);let o={id:this.id(),role:"assistant",content:"",pending:!0};this.pushMessage(o),this.sending=!0,this.refreshMessages();try{let a=await this.sendToApiStream(e,d=>{this.appendToMessage(o.id,d)}),r=this.getMessageById(o.id),i=a.response||(r==null?void 0:r.content)||"";this.updateMessage(o.id,{pending:!1,content:i,sources:a.sources})}catch(a){let r=a instanceof Error?a.message:"Unknown error";this.updateMessage(o.id,{pending:!1,error:!0,content:`Failed to fetch reply. ${r}`})}finally{this.sending=!1,this.refreshMessages()}}async sendToApiStream(e,t){let o=`${this.options.apiBaseUrl.replace(/\/$/,"")}/api/chat/${encodeURIComponent(this.options.chatbotId)}/stream`,n=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e})});if(!n.ok){let s=await n.text().catch(()=>"");throw new Error(s||`HTTP ${n.status}`)}if(!n.body)throw new Error("Streaming body is not supported in this browser.");let a=n.body.getReader(),r=new TextDecoder("utf-8"),i="",d=null,c=()=>{let s=i.indexOf(`
`);for(;s>=0;){let g=i.slice(0,s).trim();if(i=i.slice(s+1),g){let p;try{p=JSON.parse(g)}catch(m){console.error("Failed to parse stream event:",m),s=i.indexOf(`
`);continue}if(p.type==="delta")t(p.data||"");else if(p.type==="final")d=p.data;else if(p.type==="error")throw new Error(p.message||"Streaming error")}s=i.indexOf(`
`)}};for(;;){let{value:s,done:g}=await a.read();if(g)break;i+=r.decode(s,{stream:!0}),c()}if(i+=r.decode(),c(),!d)throw new Error("Streaming ended without a final message.");return d}pushMessage(e){this.messages.push(e),this.refreshMessages()}updateMessage(e,t){this.messages=this.messages.map(o=>o.id===e?{...o,...t}:o)}appendToMessage(e,t){this.messages=this.messages.map(o=>o.id===e?{...o,pending:!1,content:`${o.content||""}${t}`}:o),this.refreshMessages()}getMessageById(e){return this.messages.find(t=>t.id===e)}refreshMessages(){if(this.messagesBody){this.messagesBody.innerHTML="";for(let e of this.messages){let t=document.createElement("div");t.className="bot-widget-message",t.dataset.role=e.role,e.error&&(t.dataset.error="true"),e.pending?t.innerHTML=`
          <div class="bot-widget-loading">
            <span></span><span></span><span></span>
          </div>
        `:t.textContent=e.content,this.messagesBody.appendChild(t)}this.messagesBody.scrollTop=this.messagesBody.scrollHeight}}id(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}};function y(h){let e=new u(h);return e.mount(),e}if(typeof window!="undefined"){let h=window;if(!h.BotStudioWidget){let e=[];h.BotStudioWidget={init(t){let o=y(t);return e.push(o),o},destroyAll(){for(;e.length;){let t=e.pop();t==null||t.destroy()}},instances:e}}}})();
//# sourceMappingURL=index.global.js.map
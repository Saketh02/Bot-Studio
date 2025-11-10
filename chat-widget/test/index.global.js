"use strict";(()=>{var g="bot-studio-widget-styles",a={launcherLabel:"Chat with us",theme:"light",title:"Assistant",welcomeMessage:"Hi there! I\u2019m here to help. Ask me anything about our services.",subtitle:"Powered by Bot Studio",accentColor:"#2563eb",position:"bottom-right",panelHeight:640},u=`
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
`,h=class{constructor(t){this.root=null;this.container=null;this.panel=null;this.launcher=null;this.messagesBody=null;this.input=null;this.sendButton=null;this.messages=[];this.sending=!1;var e,o,i,s,n,d,p;if(!t.chatbotId)throw new Error("Chatbot ID is required");if(!t.apiBaseUrl)throw new Error("API base URL is required");this.options={...a,...t},(e=this.options).launcherLabel||(e.launcherLabel=a.launcherLabel),(o=this.options).title||(o.title=a.title),(i=this.options).subtitle||(i.subtitle=a.subtitle),(s=this.options).welcomeMessage||(s.welcomeMessage=a.welcomeMessage),(n=this.options).accentColor||(n.accentColor=a.accentColor),(d=this.options).position||(d.position=a.position),(p=this.options).panelHeight||(p.panelHeight=a.panelHeight)}mount(){typeof document!="undefined"&&(this.injectStyles(),this.createDom(),this.options.welcomeMessage&&this.pushMessage({id:this.id(),role:"assistant",content:this.options.welcomeMessage}))}destroy(){var t;(t=this.root)==null||t.remove(),this.root=null,this.container=null,this.panel=null,this.launcher=null,this.messagesBody=null,this.input=null,this.sendButton=null,this.messages=[]}injectStyles(){if(document.getElementById(g))return;let t=document.createElement("style");t.id=g,t.textContent=u,document.head.appendChild(t)}createDom(){var p,c;this.root=document.createElement("div"),this.root.className="bot-widget-root",this.container=document.createElement("div"),this.container.className="bot-widget-container",this.container.dataset.theme=this.options.theme,this.container.dataset.position=(p=this.options.position)!=null?p:"bottom-right";let t=(c=this.options.accentColor)!=null?c:a.accentColor;this.container.style.setProperty("--bot-primary",t),this.container.style.setProperty("--bot-primary-soft",this.options.theme==="dark"?"rgba(99, 102, 241, 0.82)":"rgba(59, 130, 246, 0.82)"),this.container.style.setProperty("--bot-panel-height",`${this.options.panelHeight}px`),this.options.theme==="dark"?(this.container.style.setProperty("--bot-surface","#0f172a"),this.container.style.setProperty("--bot-surface-alt","rgba(15, 23, 42, 0.78)"),this.container.style.setProperty("--bot-text","#e2e8f0"),this.container.style.setProperty("--bot-border","rgba(148, 163, 184, 0.28)")):(this.container.style.setProperty("--bot-surface","#f8fafc"),this.container.style.setProperty("--bot-surface-alt","#ffffff"),this.container.style.setProperty("--bot-text","#0f172a"),this.container.style.setProperty("--bot-border","rgba(15, 23, 42, 0.1)")),this.panel=document.createElement("div"),this.panel.className="bot-widget-panel",this.panel.dataset.open="false";let e=document.createElement("div");e.className="bot-widget-header";let o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.gap="4px";let i=document.createElement("strong");if(i.textContent=this.options.title,i.style.fontSize="1.06rem",this.options.subtitle){let r=document.createElement("span");r.textContent=this.options.subtitle,r.style.fontSize="0.75rem",r.style.opacity="0.75",o.appendChild(i),o.appendChild(r)}else o.appendChild(i);let s=document.createElement("button");s.type="button",s.textContent="\xD7",s.style.cssText="background:rgba(255,255,255,0.18);border:none;color:#fff;width:32px;height:32px;border-radius:999px;font-size:20px;cursor:pointer;",s.addEventListener("click",()=>this.togglePanel(!1)),e.appendChild(o),e.appendChild(s),this.messagesBody=document.createElement("div"),this.messagesBody.className="bot-widget-body";let n=document.createElement("div");n.className="bot-widget-footer",this.input=document.createElement("textarea"),this.input.className="bot-widget-input",this.input.placeholder="Type your message\u2026",this.input.addEventListener("keydown",r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),this.handleSend())}),this.sendButton=document.createElement("button"),this.sendButton.className="bot-widget-send",this.sendButton.type="button",this.sendButton.innerHTML="\u27A4",this.sendButton.addEventListener("click",()=>this.handleSend()),n.appendChild(this.input),n.appendChild(this.sendButton),this.panel.appendChild(e),this.panel.appendChild(this.messagesBody),this.panel.appendChild(n),this.launcher=document.createElement("button"),this.launcher.className="bot-widget-launcher",this.launcher.type="button",this.launcher.textContent=this.options.launcherLabel;let d=document.createElement("span");d.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',d.style.display="inline-flex",this.launcher.prepend(d),this.launcher.addEventListener("click",()=>this.togglePanel()),this.container.appendChild(this.panel),this.container.appendChild(this.launcher),this.root.appendChild(this.container),document.body.appendChild(this.root)}togglePanel(t){if(!this.panel)return;let e=t!=null?t:this.panel.dataset.open!=="true";this.panel.dataset.open=e?"true":"false",e&&setTimeout(()=>{var o;return(o=this.input)==null?void 0:o.focus()},20)}async handleSend(){var i;let t=(i=this.input)==null?void 0:i.value.trim();if(!t||this.sending)return;this.input&&(this.input.value="");let e={id:this.id(),role:"user",content:t};this.pushMessage(e);let o={id:this.id(),role:"assistant",content:"",pending:!0};this.pushMessage(o),this.sending=!0,this.refreshMessages();try{let s=await this.sendToApi(t);this.updateMessage(o.id,{pending:!1,content:s.response})}catch(s){let n=s instanceof Error?s.message:"Unknown error";this.updateMessage(o.id,{pending:!1,error:!0,content:`Failed to fetch reply. ${n}`})}finally{this.sending=!1,this.refreshMessages()}}async sendToApi(t){let e=`${this.options.apiBaseUrl.replace(/\/$/,"")}/api/chat/${encodeURIComponent(this.options.chatbotId)}`,o=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t})});if(!o.ok){let i=await o.text().catch(()=>"");throw new Error(i||`HTTP ${o.status}`)}return await o.json()}pushMessage(t){this.messages.push(t),this.refreshMessages()}updateMessage(t,e){this.messages=this.messages.map(o=>o.id===t?{...o,...e}:o)}refreshMessages(){if(this.messagesBody){this.messagesBody.innerHTML="";for(let t of this.messages){let e=document.createElement("div");e.className="bot-widget-message",e.dataset.role=t.role,t.error&&(e.dataset.error="true"),t.pending?e.innerHTML=`
          <div class="bot-widget-loading">
            <span></span><span></span><span></span>
          </div>
        `:e.textContent=t.content,this.messagesBody.appendChild(e)}this.messagesBody.scrollTop=this.messagesBody.scrollHeight}}id(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}};function b(l){let t=new h(l);return t.mount(),t}if(typeof window!="undefined"){let l=window;if(!l.BotStudioWidget){let t=[];l.BotStudioWidget={init(e){let o=b(e);return t.push(o),o},destroyAll(){for(;t.length;){let e=t.pop();e==null||e.destroy()}},instances:t}}}})();
//# sourceMappingURL=index.global.js.map
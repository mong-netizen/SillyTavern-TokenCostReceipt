function createTokenCostReceiptPresetDefinitions(){
  // Standard text-token rates per 1M tokens, verified 2026-10-06.
  // Sources and unsupported charges: PRICING-SOURCES.md.
  const PRESET_GROUPS = [
    { label:'OpenAI', items:[
      {id:'gpt-6-astra',modelId:'gpt-6-astra',label:'GPT-6 Astra',input:10,read:1,write:12.5,output:50,adjustment:'subtract-both',currency:'USD'},
      {id:'gpt-6.1-sol',label:'GPT-6.1 Sol',input:2,read:.1,write:2.5,output:10,adjustment:'subtract-both',currency:'USD'},
      {id:'gpt-6-sol',modelId:'gpt-6-sol',label:'GPT-6 Sol',input:2,read:.2,write:2.5,output:10,adjustment:'subtract-both',currency:'USD'},
      {id:'gpt-6-luna',label:'GPT-6 Luna',input:.1,read:.01,write:.125,output:.5,adjustment:'subtract-both',currency:'USD'},
      {id:'gpt-5.6-terra',label:'GPT-5.6 Terra',input:2,read:.2,write:2.5,output:12,adjustment:'subtract-both',currency:'USD'},
      // Official promotion is guaranteed at least through this date, not a fixed end date.
      {id:'gpt-5.6-sol',label:'GPT-5.6 Sol (프로모션: 최소 2026-11-21까지)',input:4,read:.4,write:5,output:20,adjustment:'subtract-both',promotionGuaranteedThrough:'2026-11-21',currency:'USD'},
      {id:'gpt-5.6-luna',label:'GPT-5.6 Luna',input:.2,read:.02,write:.25,output:1.2,adjustment:'subtract-both',currency:'USD'},
      {id:'gpt-5.5',label:'GPT-5.5',input:5,read:.5,write:0,output:30,adjustment:'subtract-read',currency:'USD'},
      {id:'gpt-5.4',label:'GPT-5.4',input:2.5,read:.25,write:0,output:15,adjustment:'subtract-read',currency:'USD'},
      {id:'gpt-5.4-mini',label:'GPT-5.4 mini',input:.75,read:.075,write:0,output:4.5,adjustment:'subtract-read',currency:'USD'},
      {id:'gpt-5.4-nano',label:'GPT-5.4 nano',input:.2,read:.02,write:0,output:1.25,adjustment:'subtract-read',currency:'USD'},
    ]},
    { label:'Anthropic', items:[
      {id:'claude-fable-5-1',modelIds:['claude-fable-5-1','claude-mythos-5-1'],label:'Claude Fable / Mythos 5.1',input:10,read:.25,write:12.5,write1h:20,output:50,adjustment:'none',currency:'USD'},
      {id:'claude-fable-5',modelIds:['claude-fable-5','claude-mythos-5'],label:'Claude Fable / Mythos 5',input:10,read:1,write:12.5,write1h:20,output:50,adjustment:'none',currency:'USD'},
      {id:'claude-opus-5-5',modelId:'claude-opus-5-5',label:'Claude Opus 5.5',input:4,read:.2,write:5,write1h:8,output:20,adjustment:'none',currency:'USD'},
      {id:'claude-opus-5',modelIds:['claude-opus-5','claude-opus-4-8','claude-opus-4-7','claude-opus-4-6','claude-opus-4-5'],label:'Claude Opus 5 / 4.5–4.8',input:5,read:.5,write:6.25,write1h:10,output:25,adjustment:'none',currency:'USD'},
      {id:'claude-sonnet-5',modelIds:['claude-sonnet-5','claude-sonnet-5-5'],label:'Claude Sonnet 5 / 5.5',input:2,read:.2,write:2.5,write1h:4,output:10,adjustment:'none',currency:'USD'},
      {id:'claude-sonnet-4-6',modelIds:['claude-sonnet-4-6','claude-sonnet-4-5'],label:'Claude Sonnet 4.5 / 4.6',input:3,read:.3,write:3.75,write1h:6,output:15,adjustment:'none',currency:'USD'},
      {id:'claude-haiku-4-5',label:'Claude Haiku 4.5',input:1,read:.1,write:1.25,write1h:2,output:5,adjustment:'none',currency:'USD'},
    ]},
    // Official calendar dates; date-only values use JavaScript's existing UTC parsing.
    { label:'Google Gemini', items:[
      // Introductory rate through 2026-11-30, then list price from 2026-12-01 (Google GA post, 2026-10-13).
      {id:'gemini-4-argon',modelIds:['gemini-4-argon','gemini-4-argon-preview'],label:'Gemini 4 Argon (2026-11-30까지 출시 할인)',input:2,read:.1,write:0,output:10,adjustment:'subtract-read',activeUntil:'2026-12-01',currency:'USD'},
      {id:'gemini-4-argon-standard',modelIds:['gemini-4-argon','gemini-4-argon-preview'],label:'Gemini 4 Argon (2026-12-01부터)',input:4,read:.2,write:0,output:20,adjustment:'subtract-read',activeFrom:'2026-12-01',currency:'USD'},
      {id:'gemini-3.8-flash',modelIds:['gemini-3.8-flash','gemini-3.7-flash','gemini-3.6-flash'],label:'Gemini 3.6 / 3.7 / 3.8 Flash (2026-12-31까지)',input:.75,read:.075,write:0,output:3.75,adjustment:'subtract-read',activeUntil:'2027-01-01',currency:'USD'},
      {id:'gemini-3.8-flash-standard',modelIds:['gemini-3.8-flash','gemini-3.7-flash','gemini-3.6-flash'],label:'Gemini 3.6 / 3.7 / 3.8 Flash (2027-01-01부터)',input:1.5,read:.15,write:0,output:7.5,adjustment:'subtract-read',activeFrom:'2027-01-01',currency:'USD'},
      {id:'gemini-3.5-flash',label:'Gemini 3.5 Flash',input:1.5,read:.15,write:0,output:9,adjustment:'subtract-read',currency:'USD'},
      {id:'gemini-3.1-pro-preview',label:'Gemini 3.1 Pro Preview',input:2,read:.2,write:0,output:12,adjustment:'subtract-read',currency:'USD'},
      {id:'gemini-3.5-flash-lite',label:'Gemini 3.5 Flash-Lite',input:.3,read:.03,write:0,output:2.5,adjustment:'subtract-read',currency:'USD'},
      {id:'gemini-3.1-flash-lite',label:'Gemini 3.1 Flash-Lite',input:.25,read:.025,write:0,output:1.5,adjustment:'subtract-read',currency:'USD'},
    ]},
    { label:'DeepSeek', items:[
      {id:'deepseek-v4.1-flash',modelIds:['deepseek-v4.1-flash','deepseek-v4-1-flash','deepseek-flash','deepseek-v4-flash','deepseek-v4-flash-vision-exp'],label:'DeepSeek 4.1 Flash',input:.15,read:.003,write:0,output:.6,adjustment:'subtract-read',dynamicPricing:'deepseek-v4.1',currency:'USD'},
      {id:'deepseek-v4-pro',label:'DeepSeek V4 Pro',input:.66,read:.022,write:0,output:1.98,adjustment:'subtract-read',dynamicPricing:'deepseek-v4',currency:'USD'},
    ]},
    { label:'GLM', items:[
      {id:'glm-5.3',modelIds:['glm-5.3','glm-5.2','glm-5.1'],label:'GLM-5.1 / 5.2 / 5.3',input:1.4,read:.26,write:0,output:4.4,adjustment:'subtract-read',currency:'USD'},
      {id:'glm-5.3-flash',label:'GLM-5.3 Flash',input:.15,read:.03,write:0,output:.5,adjustment:'subtract-read',currency:'USD'},
      {id:'glm-5.3-flashx',label:'GLM-5.3 FlashX',input:.37,read:.075,write:0,output:1.25,adjustment:'subtract-read',currency:'USD'},
      {id:'glm-5',label:'GLM-5',input:1,read:.2,write:0,output:3.2,adjustment:'subtract-read',currency:'USD'},
    ]},
    { label:'Kimi', items:[
      {id:'kimi-k3',label:'Kimi K3',input:3,read:.3,write:3,write1h:6,output:15,adjustment:'subtract-both',currency:'USD'},
      {id:'kimi-k2.6',label:'Kimi K2.6',input:.95,read:.16,write:0,output:4,adjustment:'subtract-read',currency:'USD'},
    ]},
  ];
  const PRESETS = PRESET_GROUPS.flatMap(group=>group.items);
  const DEEPSEEK_V4_RATES = {
    'deepseek-v4.1-flash': {offPeak:{input:.15,read:.003,write:0,output:.6},peak:{input:.30,read:.006,write:0,output:1.2}},
    'deepseek-v4-flash': {offPeak:{input:.22,read:.007,write:0,output:.66},peak:{input:.44,read:.014,write:0,output:1.32}},
    'deepseek-v4-pro': {offPeak:{input:.66,read:.022,write:0,output:1.98},peak:{input:1.32,read:.044,write:0,output:3.96}},
  };
  const DEEPSEEK_V4_LEGACY_RATES = {
    'deepseek-v4-flash': {input:.14,read:.0028,write:0,output:.28},
    'deepseek-v4-pro': {input:.435,read:.003625,write:0,output:.87},
  };
  // New V4 peak/off-peak pricing began at 2026-08-17 00:00 Beijing time.
  const DEEPSEEK_V4_TIER_START = Date.parse('2026-08-16T16:00:00Z');
  // Weekend-wide off-peak billing began at 2026-08-23 00:00 Beijing time.
  const DEEPSEEK_WEEKEND_RULE_START = Date.parse('2026-08-22T16:00:00Z');
  // Retired V4 Flash aliases switched to V4.1 Flash rates at this official instant.
  const DEEPSEEK_V41_FLASH_START = Date.parse('2026-09-10T04:00:00Z');
  return { PRESET_GROUPS, PRESETS, DEEPSEEK_V4_RATES, DEEPSEEK_V4_LEGACY_RATES, DEEPSEEK_V4_TIER_START, DEEPSEEK_WEEKEND_RULE_START, DEEPSEEK_V41_FLASH_START };
}

// ---------------------------------------------------------------------------
// SillyTavern port of "Token Cost Receipt" (originally a Marinara Engine
// personal extension). Pricing presets above are carried over unchanged.
// ---------------------------------------------------------------------------
(() => {
  'use strict';

  const MODULE = 'tokenCostReceipt';
  const EXTRA_KEY = 'token_receipt';
  const GEN_PATH = '/api/backends/chat-completions/generate';
  const ROOT = 'mari-token-receipt';
  const MESSAGE_BUTTON = `${ROOT}-message-button`;
  const ctx = () => SillyTavern.getContext();

  if (window.__tokenCostReceiptLoaded) return;
  window.__tokenCostReceiptLoaded = true;

  // Marinara's storage API → SillyTavern extension_settings.
  const storage = {
    async get() { return { config: structuredClone(ctx().extensionSettings[MODULE]?.config || {}) }; },
    async patch(obj) {
      const settings = ctx().extensionSettings;
      settings[MODULE] = { ...(settings[MODULE] || {}), ...structuredClone(obj) };
      ctx().saveSettingsDebounced();
    },
  };
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  // -------------------------------------------------------------------------
  // 1) Usage capture. SillyTavern does not store API-reported usage, so we
  //    read it from the chat-completion response (stream or JSON) ourselves.
  // -------------------------------------------------------------------------
  const SOURCE_PROVIDER = {
    openai:'openai', azure_openai:'openai', claude:'anthropic', makersuite:'google', vertexai:'google',
    deepseek:'deepseek', moonshot:'moonshot', zai:'zhipu', openrouter:'openrouter',
  };
  function inferProvider(model){
    const value=String(model||'').toLowerCase();
    if(value.startsWith('claude-')||value.startsWith('anthropic/')) return 'anthropic';
    if(value.startsWith('gemini-')||value.startsWith('google/')) return 'google';
    if(value.startsWith('deepseek-')||value.startsWith('deepseek/')) return 'deepseek';
    if(value.startsWith('glm-')||value.startsWith('zhipu/')||value.startsWith('z-ai/')) return 'zhipu';
    if(value.startsWith('kimi-')||value.startsWith('moonshot/')||value.startsWith('moonshotai/')) return 'moonshot';
    if(/^(?:gpt-|o\d|chatgpt-)/.test(value)||value.startsWith('openai/')) return 'openai';
    return 'unknown';
  }
  function providerFor(source, model){
    const known=SOURCE_PROVIDER[String(source||'').toLowerCase()];
    if(known) return known;
    const inferred=inferProvider(model);
    return inferred!=='unknown'?inferred:(source||'unknown');
  }

  const numOrNull = v => (typeof v==='number'&&Number.isFinite(v))?v:null;
  function parseUsage(text){
    const objects=[];
    const trimmed=String(text||'').trim();
    if(trimmed.startsWith('{')){ try{ objects.push(JSON.parse(trimmed)); }catch{} }
    if(!objects.length){
      for(const line of trimmed.split(/\r?\n/)){
        const m=line.match(/^data:\s?(.*)$/);
        if(!m) continue;
        const data=m[1].trim();
        if(!data||data==='[DONE]') continue;
        try{ objects.push(JSON.parse(data)); }catch{}
      }
    }
    let claude=null, gemini=null, openai=null;
    for(const obj of objects){
      if(!obj||typeof obj!=='object') continue;
      // Anthropic Messages SSE
      const claudeUsage=obj.type==='message_start'?obj.message?.usage:obj.type==='message_delta'?obj.usage:null;
      if(claudeUsage){
        claude=claude||{};
        for(const key of ['input_tokens','output_tokens','cache_read_input_tokens','cache_creation_input_tokens']){
          if(numOrNull(claudeUsage[key])!=null) claude[key]=claudeUsage[key];
        }
        if(claudeUsage.cache_creation&&typeof claudeUsage.cache_creation==='object') claude.cache_creation=claudeUsage.cache_creation;
        continue;
      }
      // Google Gemini / Vertex SSE
      if(obj.usageMetadata&&typeof obj.usageMetadata==='object'){ gemini=obj.usageMetadata; continue; }
      // OpenAI-compatible (OpenAI, OpenRouter, DeepSeek, GLM, Kimi, custom …)
      if(obj.usage&&typeof obj.usage==='object') openai=obj.usage;
    }
    if(claude&&(claude.input_tokens!=null||claude.output_tokens!=null)){
      const cc=claude.cache_creation||{};
      return {
        format:'anthropic',
        tokensPrompt:claude.input_tokens||0,
        tokensCachedPrompt:claude.cache_read_input_tokens||0,
        tokensCacheWritePrompt:claude.cache_creation_input_tokens||0,
        tokensCompletion:claude.output_tokens||0,
        cacheWrite5m:numOrNull(cc.ephemeral_5m_input_tokens),
        cacheWrite1h:numOrNull(cc.ephemeral_1h_input_tokens),
      };
    }
    if(gemini&&(gemini.promptTokenCount!=null||gemini.candidatesTokenCount!=null)){
      return {
        format:'gemini', geminiDirectApi:true,
        tokensPrompt:gemini.promptTokenCount||0,
        tokensCachedPrompt:gemini.cachedContentTokenCount||0,
        tokensCacheWritePrompt:0,
        tokensCompletion:gemini.candidatesTokenCount||0,
        tokensReasoning:numOrNull(gemini.thoughtsTokenCount)??0,
      };
    }
    if(openai){
      const prompt=numOrNull(openai.prompt_tokens)??numOrNull(openai.input_tokens);
      const completion=numOrNull(openai.completion_tokens)??numOrNull(openai.output_tokens);
      if(prompt==null&&completion==null) return null;
      const pd=openai.prompt_tokens_details||openai.input_tokens_details||{};
      return {
        format:'openai',
        tokensPrompt:prompt||0,
        tokensCachedPrompt:numOrNull(pd.cached_tokens)??numOrNull(openai.prompt_cache_hit_tokens)??numOrNull(openai.cached_tokens)??0,
        tokensCacheWritePrompt:numOrNull(pd.cache_write_tokens)??numOrNull(openai.cache_creation_input_tokens)??0,
        tokensCompletion:completion||0,
        tokensReasoning:numOrNull(openai.completion_tokens_details?.reasoning_tokens)??numOrNull(openai.output_tokens_details?.reasoning_tokens),
        reportedCost:numOrNull(openai.cost),
      };
    }
    return null;
  }

  let armedAt=0;
  const captures=[];
  const originalFetch=window.fetch;
  window.fetch=function(input, init){
    const responsePromise=originalFetch.apply(this, arguments);
    try{
      const url=typeof input==='string'?input:input instanceof URL?input.href:input?.url;
      if(!armedAt||!url||new URL(url, location.href).pathname!==GEN_PATH) return responsePromise;
      let body=null;
      try{ body=typeof init?.body==='string'?JSON.parse(init.body):null; }catch{}
      const capture={startedAt:Date.now(), source:body?.chat_completion_source||'', model:body?.model||'', stream:Boolean(body?.stream), usage:null, done:false};
      captures.push(capture);
      while(captures.length>12) captures.shift();
      capture.promise=responsePromise.then(async response=>{
        if(!response.ok||!response.body) return null;
        const reader=response.clone().body.getReader();
        const decoder=new TextDecoder();
        let text='';
        try{
          for(;;){ const {done,value}=await reader.read(); if(done) break; text+=decoder.decode(value,{stream:true}); }
        }catch{ /* aborted: keep whatever arrived */ }
        return parseUsage(text);
      }).catch(()=>null).then(usage=>{ capture.usage=usage; capture.done=true; return usage; });
    }catch{ /* never break SillyTavern's own request */ }
    return responsePromise;
  };

  function writeRecord(mesId, type, capture, usage){
    const message=ctx().chat[mesId];
    if(!message||message.is_user) return;
    message.extra=message.extra&&typeof message.extra==='object'?message.extra:{};
    const base={source:capture.source, provider:providerFor(capture.source,capture.model), model:capture.model, stream:capture.stream, at:capture.startedAt};
    let record=usage?{...base,...usage,requests:1}:{...base,missing:true};
    const previous=message.extra[EXTRA_KEY];
    if(type==='continue'&&usage&&previous&&!previous.missing){
      record={...record,requests:(previous.requests||1)+1};
      for(const key of ['tokensPrompt','tokensCachedPrompt','tokensCacheWritePrompt','tokensCompletion','tokensReasoning','reportedCost','cacheWrite5m','cacheWrite1h']){
        if(previous[key]!=null||usage[key]!=null) record[key]=(Number(previous[key])||0)+(Number(usage[key])||0);
      }
    }else if(type==='continue'&&!usage&&previous&&!previous.missing){
      record={...previous,incompleteContinue:true};
    }
    message.extra[EXTRA_KEY]=record;
    const swipeInfo=Array.isArray(message.swipe_info)?message.swipe_info[message.swipe_id??0]:null;
    if(swipeInfo&&typeof swipeInfo==='object'){
      swipeInfo.extra=swipeInfo.extra&&typeof swipeInfo.extra==='object'?swipeInfo.extra:{};
      swipeInfo.extra[EXTRA_KEY]=structuredClone(record);
    }
  }

  async function onGenerationStarted(type, _options, dryRun){
    if(dryRun) return;
    armedAt=type==='quiet'?0:Date.now();
  }
  async function onMessageReceived(mesId, type){
    if(!armedAt) return;
    const since=armedAt;
    armedAt=0;
    const capture=captures.filter(c=>c.startedAt>=since).at(-1);
    const message=ctx().chat[mesId];
    if(!capture){
      // Non-chat-completion API (no usage to read). Drop a stale receipt carried over from another swipe.
      if(type!=='continue'&&message?.extra) delete message.extra[EXTRA_KEY];
      return;
    }
    const usage=capture.done?capture.usage:await Promise.race([capture.promise, sleep(2500).then(()=>undefined)]);
    if(usage===undefined){
      capture.promise.then(late=>{ if(ctx().chat[mesId]===message){ writeRecord(mesId,type,capture,late); ctx().saveChat(); } });
      return;
    }
    writeRecord(mesId,type,capture,usage);
  }

  // -------------------------------------------------------------------------
  // 2) Receipt panel (ported from the Marinara version).
  // -------------------------------------------------------------------------
  const root=document.createElement('section');
  root.id=ROOT; root.hidden=true; root.setAttribute('role','dialog'); root.setAttribute('aria-label','메시지 토큰 영수증');
  root.innerHTML=`<div class="tr-head"><span>메시지 영수증</span><button type="button" class="tr-icon-btn" data-act="help" title="사용법" aria-label="사용법" aria-pressed="false">?</button><button type="button" class="tr-icon-btn" data-act="settings" title="설정" aria-label="설정" aria-pressed="false">⚙</button><button type="button" class="tr-icon-btn" data-act="close" title="닫기" aria-label="닫기">×</button></div><div class="tr-body"><div class="tr-muted">메시지의 영수증 아이콘을 눌러 주세요.</div></div>`;
  document.body.append(root);
  const body=root.querySelector('.tr-body');

  const defaults={ currency:'USD', input:0, read:0, write:0, output:0, adjustment:'none', cacheTtl:'5m', profiles:{}, fx:null, rpDateTime:true };
  const FX_TTL=6*60*60*1000;
  const { PRESET_GROUPS, PRESETS, DEEPSEEK_V4_RATES, DEEPSEEK_V4_LEGACY_RATES, DEEPSEEK_V4_TIER_START, DEEPSEEK_WEEKEND_RULE_START, DEEPSEEK_V41_FLASH_START } = createTokenCostReceiptPresetDefinitions();
  let cfg={...defaults}, lastReceipt=null, anchorButton=null, panelView='receipt', receiptContext=null;
  const num=v=>Number.isFinite(Number(v))?Number(v):0;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const profileCurrency=p=>String(p?.currency||cfg.currency||'USD').toUpperCase();
  const money=(v,currency=cfg.currency)=>`${String(currency||'USD').toUpperCase()} ${v<.01?v.toFixed(6):v.toFixed(4)}`;
  const supportsFx=currency=>['USD','CNY'].includes(String(currency||'').toUpperCase());
  const fxFor=currency=>{ const c=String(currency||'USD').toUpperCase(); return cfg.fxRates?.[c]||(cfg.fx?.base===c?cfg.fx:null); };
  const won=(v,currency)=>{ const rate=num(fxFor(currency)?.rate), krw=v*rate; if(!rate) return '환율 없음'; return `약 ₩${krw.toLocaleString('ko-KR',{minimumFractionDigits:krw<1?4:krw<100?2:0,maximumFractionDigits:krw<1?4:krw<100?2:0})}`; };
  const fxTime=currency=>{ const fx=fxFor(currency); return fx?.updatedAt?new Date(fx.updatedAt).toLocaleString('ko-KR'):'아직 갱신 안 됨'; };

  async function updateFx(currency,force=false){
    currency=String(currency||cfg.currency||'USD').toUpperCase();
    if(!supportsFx(currency)) return;
    const current=fxFor(currency);
    if(current?.rate&&Date.now()-num(current.updatedAt)<FX_TTL&&!force) return;
    try{
      const res=await originalFetch(`https://api.frankfurter.dev/v1/latest?from=${encodeURIComponent(currency)}&to=KRW`,{cache:'no-store'});
      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      const data=await res.json(), rate=num(data?.rates?.KRW);
      if(!rate) throw new Error('KRW 환율 누락');
      const next={base:currency,rate,updatedAt:Date.now(),marketDate:data.date||null,source:'Frankfurter',error:null};
      cfg.fxRates={...(cfg.fxRates||{}),[currency]:next}; cfg.fx=next;
    }catch(e){
      const previous=fxFor(currency);
      const next={...(previous||{}),base:currency,rate:num(previous?.rate),source:'Frankfurter',error:String(e?.message||e),lastAttemptAt:Date.now()};
      cfg.fxRates={...(cfg.fxRates||{}),[currency]:next}; cfg.fx=next;
    }
    await storage.patch({config:cfg});
    if(root.hidden) return;
    if(panelView==='settings') renderSettings();
    else if(lastReceipt) render(lastReceipt.message,lastReceipt.usage);
  }
  async function updateAllFx(force=false){ for(const currency of ['USD','CNY']) await updateFx(currency,force); }

  // --- pricing logic (unchanged from the Marinara version) ---
  const hasReasoningCount=g=>typeof g?.tokensReasoning==='number'&&Number.isFinite(g.tokensReasoning)&&g.tokensReasoning>=0;
  function profileFor(g){
    const key=`${g.provider||''}::${g.model||''}`;
    const byModel=Object.entries(cfg.profiles||{}).find(([savedKey])=>savedKey.endsWith(`::${g.model||''}`))?.[1];
    return { key, ...cfg, ...(cfg.profiles?.[key]||byModel||{}) };
  }
  function deepSeekModelId(value){
    const model=String(value||'').toLowerCase().replace(/^deepseek\//,'');
    if(/^deepseek-flash(?:-|$)/.test(model)) return 'deepseek-v4.1-flash';
    if(/^deepseek-v4[.-]1-flash(?:-|$)/.test(model)||/^deepseek-v4\.1-flash(?:-|$)/.test(model)) return 'deepseek-v4.1-flash';
    if(/^deepseek-v4-flash(?:-|$)/.test(model)) return 'deepseek-v4-flash';
    if(/^deepseek-v4-pro(?:-|$)/.test(model)) return 'deepseek-v4-pro';
    return null;
  }
  function isDeepSeekWeekendBeijing(timestamp){
    const day=new Date(Number(timestamp)+8*60*60*1000).getUTCDay();
    return day===0||day===6;
  }
  function deepSeekPricingAt(modelOrId,now=Date.now()){
    let id=DEEPSEEK_V4_RATES[modelOrId]?modelOrId:deepSeekModelId(modelOrId);
    if(!id) return null;
    const timestamp=Number(now);
    if(!Number.isFinite(timestamp)) return null;
    if(id==='deepseek-v4-flash'&&timestamp>=DEEPSEEK_V41_FLASH_START) id='deepseek-v4.1-flash';
    if(id!=='deepseek-v4.1-flash'&&timestamp<DEEPSEEK_V4_TIER_START) return {id,period:'legacy',historical:true,weekend:false,...DEEPSEEK_V4_LEGACY_RATES[id]};
    if(timestamp>=DEEPSEEK_WEEKEND_RULE_START&&isDeepSeekWeekendBeijing(timestamp)) return {id,period:'off-peak',historical:false,weekend:true,...DEEPSEEK_V4_RATES[id].offPeak};
    const hour=new Date(timestamp).getUTCHours();
    const peak=(hour>=1&&hour<4)||(hour>=6&&hour<10);
    return {id,period:peak?'peak':'off-peak',historical:false,weekend:false,...DEEPSEEK_V4_RATES[id][peak?'peak':'offPeak']};
  }
  function deepSeekPricingForUsage(g){
    const id=deepSeekModelId(g.model);
    if(!id) return null;
    return Number.isFinite(Number(g.messageTimestamp))?deepSeekPricingAt(id,Number(g.messageTimestamp)):null;
  }
  function effectivePreset(p,now=Date.now()){
    if(!p?.dynamicPricing) return p;
    const dynamic=deepSeekPricingAt(p.id,now);
    return dynamic?{...p,...dynamic}:p;
  }
  function presetIsActive(p,now=Date.now()){
    return (!p.activeFrom||now>=Date.parse(p.activeFrom))&&(!p.activeUntil||now<Date.parse(p.activeUntil));
  }
  function currentPreset(g){
    const model=String(g.model||'').toLowerCase().replace(/^(?:openai|anthropic|google|deepseek|z-ai|moonshotai)\//,'');
    const candidates=PRESETS.flatMap(p=>(p.modelIds||[p.modelId||p.id]).map(modelId=>({p,modelId})));
    const exact=candidates.find(({p,modelId})=>model===modelId&&presetIsActive(p));
    if(exact) return exact.p;
    if(/^gpt-6-luna(?:-|$)/.test(model)) return PRESETS.find(p=>p.id==='gpt-6-luna')||null;
    if(/^gpt-6(?:\.0)?(?:-astra)?(?:-|$)/.test(model)) return PRESETS.find(p=>p.id==='gpt-6-astra')||null;
    if(/^gpt-5\.6(?:-\d|$)/.test(model)) return PRESETS.find(p=>p.id==='gpt-5.6-sol')||null;
    if(/^gemini-3\.1-pro(?:-|$)/.test(model)) return PRESETS.find(p=>p.id==='gemini-3.1-pro-preview')||null;
    return candidates.sort((a,b)=>b.modelId.length-a.modelId.length).find(({p,modelId})=>{
      if(!presetIsActive(p)||!model.startsWith(`${modelId}-`)) return false;
      if(p.id==='gpt-5.4'&&/^gpt-5\.4-(?:mini|nano|pro)(?:-|$)/.test(model)) return false;
      if(p.id==='gpt-5.5'&&/^gpt-5\.5-pro(?:-|$)/.test(model)) return false;
      return true;
    })?.p||null;
  }
  function tierFor(g,raw){
    const provider=String(g.provider||'').toLowerCase(), model=String(g.model||'').toLowerCase().replace(/^openai\//,'');
    if(provider==='google'&&/^gemini-3\.1-pro(?:-preview)?(?:-|$)/.test(model)&&raw>200000) return {threshold:200000,input:2,read:2,write:1,output:1.5};
    const gpt6=/^(?:gpt-6(?:\.0)?(?:-astra)?|gpt-6\.1-sol)(?:-|$)/.test(model);
    if(provider==='openai'&&gpt6&&raw>272000) return {threshold:272000,input:2,read:2,write:2,output:1.5};
    const gpt54=/^gpt-5\.4(?:-\d|$)/.test(model), gpt55=/^gpt-5\.5(?:-\d|$)/.test(model);
    const gpt56=/^gpt-5\.6(?:$|-(?:sol(?:-pro)?|terra|luna)(?:-|$))/.test(model);
    if(provider==='openai'&&(gpt54||gpt55||gpt56)&&raw>272000) return {threshold:272000,input:2,read:2,write:gpt56?2:1,output:1.5};
    return null;
  }
  function compute(g,p){
    const raw=num(g.tokensPrompt), read=num(g.tokensCachedPrompt), write=num(g.tokensCacheWritePrompt);
    const out=num(g.tokensCompletion)+(g.geminiDirectApi===true&&hasReasoningCount(g)?g.tokensReasoning:0);
    const deepSeekPricing=deepSeekPricingForUsage(g);
    const effective=deepSeekPricing?{...p,...deepSeekPricing,adjustment:'subtract-read'}:p;
    let ordinary=raw;
    if(effective.adjustment==='subtract-read') ordinary=Math.max(0,raw-read);
    if(effective.adjustment==='subtract-both') ordinary=Math.max(0,raw-read-write);
    const tier=tierFor(g,raw), factor=tier||{input:1,read:1,write:1,output:1};
    const rates={input:num(effective.input)*factor.input,read:num(effective.read)*factor.read,write:num(effective.write)*factor.write,output:num(effective.output)*factor.output};
    const parts={input:ordinary*rates.input/1e6,read:read*rates.read/1e6,write:write*rates.write/1e6,output:out*rates.output/1e6};
    return {raw,ordinary,read,write,out,rates,tier,deepSeekPricing,parts,total:Object.values(parts).reduce((a,b)=>a+b,0)};
  }

  async function saveProfile(g){
    const key=`${g.provider||''}::${g.model||''}`, q=n=>num(root.querySelector(`[name=${n}]`).value);
    const currency=root.querySelector('[name=currency]').value.trim().toUpperCase()||'USD';
    cfg.profiles={...(cfg.profiles||{}),[key]:{input:q('input'),read:q('read'),write:q('write'),output:q('output'),currency,adjustment:root.querySelector('[name=adjustment]').value,cacheTtl:root.querySelector('[name=cacheTtl]').value}};
    await storage.patch({config:cfg});
    await updateFx(currency,false);
    if(lastReceipt) render(lastReceipt.message,lastReceipt.usage);
  }
  function setPanelView(view){
    panelView=view;
    root.querySelector('[data-act=help]').setAttribute('aria-pressed',String(view==='help'));
    root.querySelector('[data-act=settings]').setAttribute('aria-pressed',String(view==='settings'));
  }
  function renderReceiptOrIdle(){
    if(lastReceipt) render(lastReceipt.message,lastReceipt.usage);
    else{ setPanelView('receipt'); body.innerHTML='<div class="tr-muted">메시지의 영수증 아이콘을 눌러 주세요.</div>'; requestAnimationFrame(placePanel); }
  }
  function render(m,g){
    setPanelView('receipt');
    const p=profileFor(g), currency=profileCurrency(p), fx=fxFor(currency), c=compute(g,p), configured=[p.input,p.read,p.write,p.output].some(x=>num(x)>0);
    const suggested=currentPreset(g);
    const isClaude=String(g.provider||'').toLowerCase()==='anthropic'||String(g.model||'').toLowerCase().includes('claude-');
    const detectedTtl=num(g.cacheWrite1h)>0&&!num(g.cacheWrite5m)?'1h':num(g.cacheWrite5m)>0&&!num(g.cacheWrite1h)?'5m':null;
    const ttlLabel=detectedTtl||(p.cacheTtl==='1h'?'1h':'5m');
    const presetOptions=PRESET_GROUPS.map(group=>`<optgroup label="${esc(group.label)}">${group.items.filter(item=>presetIsActive(item)).map(item=>`<option value="${esc(item.id)}" ${suggested?.id===item.id?'selected':''}>${esc(item.label)}${suggested?.id===item.id?' (현재 모델)':''}</option>`).join('')}</optgroup>`).join('');
    body.innerHTML=`<div class="tr-title">${esc(g.provider||'unknown')} · ${esc(g.model||'unknown model')}</div>
      <div class="tr-row tr-usage"><span>일반 입력</span><span class="tr-tokens">${c.ordinary.toLocaleString()} tok</span><b>${money(c.parts.input,currency)}</b></div>
      <div class="tr-row tr-usage"><span>캐시 읽기(hit)</span><span class="tr-tokens">${c.read.toLocaleString()} tok</span><b>${money(c.parts.read,currency)}</b></div>
      <div class="tr-row tr-usage"><span>캐시 쓰기(created)${isClaude?` · ${ttlLabel}`:''}</span><span class="tr-tokens">${c.write.toLocaleString()} tok</span><b>${money(c.parts.write,currency)}</b></div>
      <div class="tr-row tr-usage"><span>출력 (추론 포함)</span><span class="tr-tokens">${c.out.toLocaleString()} tok</span><b>${money(c.parts.output,currency)}</b></div>
      <div class="tr-row tr-total"><span>턴 합계</span><span>${money(c.total,currency)}</span></div>
      ${g.reportedCost!=null?`<div class="tr-tier">OpenRouter가 보고한 실제 청구액: USD ${num(g.reportedCost).toFixed(6)}${supportsFx('USD')?` (${won(num(g.reportedCost),'USD')})`:''}</div>`:''}
      ${detectedTtl&&isClaude&&detectedTtl!==(p.cacheTtl==='1h'?'1h':'5m')?`<div class="tr-warn">응답에서 감지된 캐시 TTL은 ${detectedTtl}인데 단가 설정은 ${p.cacheTtl==='1h'?'1h':'5m'} 기준입니다.</div>`:''}
      ${c.tier?`<div class="tr-tier">장문 요금 적용: 입력 ${c.raw.toLocaleString()} &gt; ${c.tier.threshold.toLocaleString()}토큰</div>`:''}
      ${g.requests>1?`<div class="tr-muted">계속(Continue) 포함 요청 ${g.requests}건 합산</div>`:''}
      ${g.incompleteContinue?'<div class="tr-warn">마지막 계속(Continue) 요청의 사용량은 받지 못해 빠져 있습니다.</div>':''}
      ${g.messageTimestampSource==='current-time-estimate'?'<div class="tr-warn">메시지 생성 시각 확인 실패 · 조회 시점의 현재 요금 기준 추정값입니다.</div>':''}
      ${c.deepSeekPricing?`<div class="tr-tier">${c.deepSeekPricing.period==='legacy'?'DeepSeek 인상 전 요금 적용 · 2026-08-17 00:00 BJT 이전':c.deepSeekPricing.weekend?'DeepSeek 오프피크 요금 적용 · 베이징 주말':`DeepSeek ${c.deepSeekPricing.period==='peak'?'피크':'오프피크'} 요금 적용 · KST ${c.deepSeekPricing.period==='peak'?'10:00–13:00 / 15:00–19:00':'그 외 시간'}`}</div>`:''}
      ${supportsFx(currency)?`<div class="tr-row"><span>현재 환율 원화 예상액</span><b>${won(c.total,currency)}</b></div><div class="tr-muted">${esc(currency)} 1 = ₩${num(fx?.rate).toLocaleString('ko-KR')} · 기준 ${esc(fx?.marketDate||'')} · 갱신 ${esc(fxTime(currency))}</div>${fx?.error?`<div class="tr-warn">환율 갱신 실패: ${esc(fx.error)}</div>`:''}`:''}
      ${configured?'':'<div class="tr-warn">단가가 0입니다. 아래에서 공급자 가격표를 입력하세요.</div>'}
      <div class="tr-muted">기록된 input: ${c.raw.toLocaleString()} · 메시지 #${esc(m.id)}</div>
      <details><summary>이 모델 단가 설정 (1M 토큰당)</summary><div class="tr-preset"><label>모델 단가 프리셋<select name="preset">${presetOptions}</select></label><button type="button" data-act="load-preset">값 불러오기</button></div><label data-field="cache-ttl">Claude 캐시 쓰기 TTL<select name="cacheTtl"><option value="5m" ${p.cacheTtl!=='1h'?'selected':''}>5분</option><option value="1h" ${p.cacheTtl==='1h'?'selected':''}>1시간</option></select></label><div class="tr-muted" data-field="cache-ttl-note">실제 TTL은 실리태번 config.yaml의 claude.extendedTTL 설정으로 정해집니다.</div><div class="tr-grid">
      <label>일반 입력<input name="input" type="number" step="any" value="${num(p.input)}"></label><label>캐시 읽기<input name="read" type="number" step="any" value="${num(p.read)}"></label>
      <label>캐시 쓰기<input name="write" type="number" step="any" value="${num(p.write)}"></label><label>출력 (추론 포함)<input name="output" type="number" step="any" value="${num(p.output)}"></label></div>
      <label>통화<select name="currency"><option value="USD" ${currency==='USD'?'selected':''}>USD (미국 달러)</option><option value="CNY" ${currency==='CNY'?'selected':''}>CNY (중국 위안화)</option></select></label><label>API input 포함 관계<select name="adjustment"><option value="none" ${p.adjustment==='none'?'selected':''}>그대로 과금 (차감 없음)</option><option value="subtract-read" ${p.adjustment==='subtract-read'?'selected':''}>cache read를 input에서 차감</option><option value="subtract-both" ${p.adjustment==='subtract-both'?'selected':''}>cache read + write를 input에서 차감</option></select></label>
      <button type="button" data-act="save">저장·재계산</button> ${supportsFx(currency)?'<button type="button" data-act="fx">현재 환율 갱신</button>':''}</details>`;
    const selectedPreset=()=>PRESETS.find(item=>item.id===body.querySelector('[name=preset]').value);
    const syncCacheTtlVisibility=()=>{
      const preset=selectedPreset(), visible=String(g.provider||'').toLowerCase()==='anthropic'||preset?.write1h!=null;
      for(const element of body.querySelectorAll('[data-field^=cache-ttl]')) element.hidden=!visible;
    };
    const syncPresetWrite=()=>{
      const preset=effectivePreset(selectedPreset());
      if(!preset) return;
      body.querySelector('[name=write]').value=String(body.querySelector('[name=cacheTtl]').value==='1h'&&preset.write1h!=null?preset.write1h:preset.write);
    };
    body.querySelector('[name=preset]').addEventListener('change',syncCacheTtlVisibility);
    body.querySelector('[name=cacheTtl]').addEventListener('change',()=>{ if(selectedPreset()?.write1h!=null) syncPresetWrite(); });
    syncCacheTtlVisibility();
    body.querySelector('[data-act=load-preset]').addEventListener('click',()=>{
      const preset=effectivePreset(selectedPreset());
      if(!preset) return;
      for(const field of ['input','read','output']) body.querySelector(`[name=${field}]`).value=String(preset[field]);
      syncPresetWrite();
      body.querySelector('[name=currency]').value=String(preset.currency||'USD').toUpperCase();
      body.querySelector('[name=adjustment]').value=preset.adjustment;
    });
    body.querySelector('[data-act=save]').addEventListener('click',()=>saveProfile(g));
    body.querySelector('[data-act=fx]')?.addEventListener('click',async()=>{ body.querySelector('[data-act=fx]').textContent='갱신 중…'; await updateFx(currency,true); });
    body.querySelector('details')?.addEventListener('toggle',()=>requestAnimationFrame(placePanel));
  }
  function renderHelp(){
    setPanelView('help');
    body.innerHTML=`<div class="tr-help"><h3>간단 설정</h3><ol><li>모델 가격표에서 <b>100만 토큰당 가격 (1M)</b>을 입력합니다.</li><li>가격표에 없는 항목은 <b>0</b>으로 둡니다.</li><li>아래에서 차감 방식을 고르고 저장합니다.</li></ol>
      <h4>메시지별 영수증</h4><ul><li>AI 메시지 위 버튼 줄의 영수증 아이콘을 누르면 해당 메시지 한 건의 예상 비용을 확인합니다.</li><li>토큰 수는 <b>이 확장을 켠 뒤 생성된 메시지</b>부터 API 응답에서 기록됩니다. 그 전 메시지는 영수증이 없습니다.</li><li>Claude·Gemini는 <b>스트리밍을 켜야</b> 사용량이 기록됩니다.</li><li>OpenAI 공식 API는 <b>스트리밍을 꺼야</b> 기록됩니다.</li><li>Custom(OpenAI 호환) 연결은 Additional Parameters의 Include Body에 <code>stream_options: {include_usage: true}</code>를 넣으면 스트리밍에서도 기록됩니다.</li></ul>
      <h4>뭘 고르나요?</h4><ul><li><b>캐시 읽기가 0:</b> 그대로 과금</li><li><b>Claude 공식 API:</b> 그대로 과금</li><li><b>OpenAI·DeepSeek 공식 API:</b> cache read 차감</li><li><b>Gemini·GLM 공식 API:</b> cache read 차감</li><li><b>OpenRouter:</b> cache read 차감 (Claude 모델이면 read + write 차감)</li></ul>
      <div class="tr-help-note">OpenRouter는 응답에 실제 청구액을 같이 보내 줘서, 영수증에 <b>OpenRouter가 보고한 실제 청구액</b>이 따로 표시됩니다.</div><div class="tr-muted" style="margin-top:10px">표시 금액은 입력한 토큰 단가를 기준으로 계산한 예상액입니다.</div></div>`;
    requestAnimationFrame(placePanel);
  }
  function renderSettings(){
    setPanelView('settings');
    body.innerHTML=`<h3 class="tr-settings-title">설정</h3>
      <label class="tr-toggle"><input type="checkbox" name="rpDateTime" ${cfg.rpDateTime!==false?'checked':''}><span><b>메시지 시각 MM.DD 형식</b><small>메시지 이름 옆 시각을 "10.31 오후 07:15"처럼 표시</small></span></label>
      <div class="tr-settings-actions"><button type="button" data-act="save-settings">저장</button><button type="button" data-act="fx">USD·CNY 환율 갱신</button></div>
      <div class="tr-muted" style="margin-top:8px">USD 환율: ${num(fxFor('USD')?.rate)?`USD 1 = ₩${num(fxFor('USD')?.rate).toLocaleString('ko-KR')} · ${esc(fxTime('USD'))}`:'저장된 환율 없음'}<br>CNY 환율: ${num(fxFor('CNY')?.rate)?`CNY 1 = ₩${num(fxFor('CNY')?.rate).toLocaleString('ko-KR')} · ${esc(fxTime('CNY'))}`:'저장된 환율 없음'}</div>`;
    body.querySelector('[data-act=save-settings]').addEventListener('click',async()=>{
      cfg.rpDateTime=body.querySelector('[name=rpDateTime]').checked;
      await storage.patch({config:cfg});
      refreshAllTimestamps(true);
      body.querySelector('[data-act=save-settings]').textContent='저장됨';
    });
    body.querySelector('[data-act=fx]').addEventListener('click',async()=>{ body.querySelector('[data-act=fx]').textContent='갱신 중…'; await updateAllFx(true); });
    requestAnimationFrame(placePanel);
  }
  function placePanel(){
    if(root.hidden||!anchorButton?.isConnected||innerWidth<=520) return;
    const rect=anchorButton.getBoundingClientRect(), panelWidth=Math.min(360,innerWidth-24);
    root.style.right='auto'; root.style.bottom='auto';
    root.style.left=`${Math.min(Math.max(12,rect.left-panelWidth/2+rect.width/2),Math.max(12,innerWidth-panelWidth-12))}px`;
    const below=rect.bottom+8;
    if(below+root.offsetHeight<=innerHeight-12) root.style.top=`${below}px`;
    else root.style.top=`${Math.max(12,rect.top-root.offsetHeight-8)}px`;
  }
  function closePanel(){
    receiptContext=null;
    root.hidden=true; setPanelView('receipt'); lastReceipt=null; anchorButton=null;
    for(const button of document.querySelectorAll(`.${MESSAGE_BUTTON}[aria-expanded="true"]`)) button.setAttribute('aria-expanded','false');
  }
  function showError(message,detail=''){
    setPanelView('receipt');
    body.innerHTML=`<div class="tr-error"><b>${esc(message)}</b></div>${detail?`<div class="tr-muted" style="margin-top:7px">${detail}</div>`:''}`;
    requestAnimationFrame(placePanel);
  }
  function missingUsageHint(record){
    const source=String(record?.source||'');
    if(!record) return '이 메시지는 확장을 켜기 전에 생성되었거나, Chat Completion이 아닌 API로 생성되었습니다. 확장을 켠 뒤 새로 생성한 메시지부터 영수증이 기록됩니다.';
    if((source==='claude'||source==='makersuite'||source==='vertexai')&&!record.stream) return '실리태번은 Claude·Gemini의 비스트리밍 응답에서 사용량을 빼고 전달합니다. <b>Streaming</b>을 켜고 다시 생성해 주세요.';
    if((source==='openai'||source==='azure_openai')&&record.stream) return 'OpenAI 공식 API는 실리태번 스트리밍 응답에 사용량을 넣지 않습니다. <b>Streaming</b>을 끄고 다시 생성해 주세요.';
    if(source==='custom'&&record.stream) return 'Custom 연결이면 Additional Parameters → Include Body에 <code>stream_options: {include_usage: true}</code>를 넣거나 스트리밍을 꺼 보세요.';
    return `API(${esc(source||'알 수 없음')})가 응답에 사용량을 보내지 않았습니다. 스트리밍을 끄고 다시 생성해 보세요.`;
  }
  function receiptContextIsCurrent(context){
    return receiptContext===context&&!root.hidden&&anchorButton===context.button&&context.button.isConnected&&ctx().getCurrentChatId()===context.chatId;
  }
  function messageTimestamp(message){
    for(const value of [message?.gen_started, message?.send_date]){
      if(value==null||value==='') continue;
      const parsed=typeof value==='number'?value:Date.parse(String(value));
      if(Number.isFinite(parsed)) return parsed;
    }
    return null;
  }
  function openReceipt(messageElement,button){
    for(const other of document.querySelectorAll(`.${MESSAGE_BUTTON}[aria-expanded="true"]`)) other.setAttribute('aria-expanded','false');
    anchorButton=button; button.setAttribute('aria-expanded','true');
    root.hidden=false; setPanelView('receipt'); lastReceipt=null;
    const mesId=Number(messageElement.getAttribute('mesid'));
    const context={chatId:ctx().getCurrentChatId(),mesId,button};
    receiptContext=context;
    const message=ctx().chat[mesId];
    const record=message?.extra?.[EXTRA_KEY];
    if(!record||record.missing){
      showError(record?'이 메시지의 토큰 사용량을 받지 못했습니다.':'이 메시지에는 토큰 영수증 기록이 없습니다.',missingUsageHint(record));
      return;
    }
    const usage={...record};
    if(deepSeekModelId(usage.model)){
      const at=Number.isFinite(Number(record.at))?Number(record.at):messageTimestamp(message);
      if(at!=null){ usage.messageTimestamp=at; usage.messageTimestampSource='message-createdAt'; }
      else{ usage.messageTimestamp=Date.now(); usage.messageTimestampSource='current-time-estimate'; }
    }
    if(!receiptContextIsCurrent(context)) return;
    lastReceipt={message:{id:mesId},usage};
    render(lastReceipt.message,usage);
    requestAnimationFrame(placePanel);
  }

  // -------------------------------------------------------------------------
  // 3) Message decoration: receipt button + MM.DD timestamps.
  // -------------------------------------------------------------------------
  const RECEIPT_LABEL='이 메시지의 토큰 영수증';
  function formatRpDateTime(timestamp){
    const date=new Date(Number(timestamp));
    if(!Number.isFinite(date.getTime())) return '';
    const month=String(date.getMonth()+1).padStart(2,'0'), day=String(date.getDate()).padStart(2,'0');
    return `${month}.${day} ${date.toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit',hour12:true})}`;
  }
  function applyTimestamp(messageElement,restore=false){
    const timeElement=messageElement.querySelector('.timestamp');
    if(!(timeElement instanceof HTMLElement)) return;
    if(cfg.rpDateTime===false){
      if(restore&&timeElement.dataset.tcrOriginal!=null){ timeElement.textContent=timeElement.dataset.tcrOriginal; delete timeElement.dataset.tcrOriginal; delete timeElement.dataset.tcrFormatted; }
      return;
    }
    const message=ctx().chat[Number(messageElement.getAttribute('mesid'))];
    const ts=message?Date.parse(String(message.send_date||'')):NaN;
    if(!Number.isFinite(ts)) return;
    const formatted=formatRpDateTime(ts);
    if(!formatted||timeElement.textContent===formatted) return;
    timeElement.dataset.tcrOriginal=timeElement.textContent;
    timeElement.dataset.tcrFormatted=formatted;
    timeElement.textContent=formatted;
  }
  function refreshAllTimestamps(restore=false){
    for(const element of document.querySelectorAll('#chat .mes[mesid]')) applyTimestamp(element,restore);
  }
  function decorateMessage(messageElement){
    if(!(messageElement instanceof Element)||!messageElement.matches('.mes[mesid]')) return;
    applyTimestamp(messageElement);
    if(messageElement.getAttribute('is_user')==='true'||messageElement.getAttribute('is_system')==='true') return;
    const buttons=messageElement.querySelector('.mes_buttons');
    if(!buttons||buttons.querySelector(`.${MESSAGE_BUTTON}`)) return;
    const button=document.createElement('div');
    button.className=`mes_button ${MESSAGE_BUTTON} fa-solid fa-receipt`;
    button.title=RECEIPT_LABEL; button.setAttribute('role','button'); button.tabIndex=0;
    button.setAttribute('aria-label',RECEIPT_LABEL); button.setAttribute('aria-expanded','false'); button.setAttribute('aria-controls',ROOT);
    const hint=buttons.querySelector('.extraMesButtonsHint');
    buttons.insertBefore(button,hint||buttons.firstChild);
  }
  function decorateWithin(node){
    if(!(node instanceof Element)) return;
    const mes=node.closest?.('.mes[mesid]');
    if(mes) decorateMessage(mes);
    for(const message of node.querySelectorAll('.mes[mesid]')) decorateMessage(message);
  }

  document.addEventListener('click',event=>{
    const button=event.target instanceof Element?event.target.closest(`.${MESSAGE_BUTTON}`):null;
    if(!button) return;
    event.preventDefault(); event.stopPropagation();
    if(!root.hidden&&anchorButton===button){ closePanel(); return; }
    const mes=button.closest('.mes[mesid]');
    if(mes) openReceipt(mes,button);
  },true);
  document.addEventListener('keydown',event=>{
    if(!root.hidden&&event.key==='Escape'){ closePanel(); return; }
    if((event.key==='Enter'||event.key===' ')&&event.target instanceof Element&&event.target.matches(`.${MESSAGE_BUTTON}`)){ event.preventDefault(); event.target.click(); }
  });
  document.addEventListener('pointerdown',event=>{ if(!root.hidden&&event.target instanceof Node&&!root.contains(event.target)&&!event.target.closest?.(`.${MESSAGE_BUTTON}`)) closePanel(); },true);
  window.addEventListener('resize',placePanel);
  root.querySelector('[data-act=close]').addEventListener('click',closePanel);
  root.querySelector('[data-act=help]').addEventListener('click',()=>{ panelView==='help'?renderReceiptOrIdle():renderHelp(); });
  root.querySelector('[data-act=settings]').addEventListener('click',()=>{ panelView==='settings'?renderReceiptOrIdle():renderSettings(); });

  function startObserver(){
    const chat=document.getElementById('chat');
    if(!chat){ setTimeout(startObserver,500); return; }
    new MutationObserver(records=>{
      for(const record of records){
        if(record.type==='childList'){
          for(const node of record.addedNodes) decorateWithin(node.nodeType===Node.TEXT_NODE?node.parentElement:node);
        }
      }
    }).observe(chat,{childList:true,subtree:true});
    decorateWithin(chat);
  }

  // -------------------------------------------------------------------------
  // 4) Boot.
  // -------------------------------------------------------------------------
  function addSettingsDrawer(){
    const host=document.getElementById('extensions_settings2')||document.getElementById('extensions_settings');
    if(!host||document.getElementById('tcr_settings')) return;
    const wrapper=document.createElement('div');
    wrapper.id='tcr_settings';
    wrapper.innerHTML=`<div class="inline-drawer"><div class="inline-drawer-toggle inline-drawer-header"><b>Token Cost Receipt</b><div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div></div><div class="inline-drawer-content">
      <label class="checkbox_label"><input type="checkbox" id="tcr_rpdatetime"><span>메시지 시각을 MM.DD 오전/오후 hh:mm 형식으로 표시</span></label>
      <small>AI 메시지 버튼 줄의 <i class="fa-solid fa-receipt"></i> 아이콘을 누르면 영수증이 열립니다. 모델별 단가·환율은 영수증 창에서 설정합니다.</small>
    </div></div>`;
    host.append(wrapper);
    const checkbox=wrapper.querySelector('#tcr_rpdatetime');
    checkbox.checked=cfg.rpDateTime!==false;
    checkbox.addEventListener('change',async()=>{ cfg.rpDateTime=checkbox.checked; await storage.patch({config:cfg}); refreshAllTimestamps(true); });
  }

  async function init(){
    const saved=await storage.get().catch(()=>null);
    const savedConfig=saved?.config||{};
    cfg={...defaults,...savedConfig};
    const { eventSource, eventTypes }=ctx();
    eventSource.on(eventTypes.GENERATION_STARTED,onGenerationStarted);
    eventSource.on(eventTypes.MESSAGE_RECEIVED,onMessageReceived);
    eventSource.on(eventTypes.CHAT_CHANGED,()=>closePanel());
    addSettingsDrawer();
    startObserver();
    updateAllFx(false).catch(()=>{});
  }
  if(typeof jQuery==='function') jQuery(()=>{ init(); });
  else init();
})();

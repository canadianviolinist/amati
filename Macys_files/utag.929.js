//tealium universal tag - utag.929 ut4.0.202203291430, Copyright 2022 Tealium.com Inc. All Rights Reserved.
window.bouncex=window.bouncex||[];try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.clearEmptyKeys=function(object){for(var key in object){if(object[key]===""||object[key]===undefined){delete object[key];}}
return object;};u.getConversionItems=function(){var items=[];var item={};for(var i=0;i<u.data.product_sku.length;i++){item={};item.sku=u.data.product_sku[i]||"";item.product_id=u.data.product_id[i]||"";item.quantity=u.data.product_quantity[i]||"";item.price=u.data.product_unit_price[i]||"";items.push(item);}
return items;}
u.map={};u.extend=[function(a,b){try{if(1){if(typeof b.web_collage_available!="undefined"&&b.tealium_event=="link"){return false;}
if(typeof b.preferences_toggle_status!="undefined"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="product select sku"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="product sku select"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="product sdd flag"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="save_for_later_shown"&&b.tealium_event=="link"){return false;}
if(typeof b.release!="undefined"&&b.release.toString().indexOf('SITE')>-1&&b.tealium_event=="link"){return false;}
if(typeof b.release!="undefined"&&b.release.toString().indexOf('master')>-1&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="reactive chat"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="proactive chat"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="experiment"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="loyalty status"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="loyalty call"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="notification_msg"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="true fit"&&b.tealium_event=="link"){return false;}
if(typeof b.customer_loyalty_tier!="undefined"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="atb int load"&&b.tealium_event=="link"){return false;}
if(typeof b.preferences_toggle_status!="undefined"&&b.tealium_event=="link"){return false;}
if(typeof b.chat_prompt_status!="undefined"&&b.tealium_event=="link"){return false;}
if(typeof b.save_for_later_shown!="undefined"&&b.tealium_event=="link"){return false;}
if(typeof b.event_name!="undefined"&&b.event_name=="content view"&&b.tealium_event=="link"){return false;}
if(typeof b.site_action!="undefined"&&b.site_action=="atb int start"&&b.tealium_event=="link"){return false;}
if(typeof b.site_action!="undefined"&&b.site_action=="atb int complete"&&b.tealium_event=="link"){return false;}
if(b.page_type!='order confirmation'&&b.order_id){b._corder='';}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(typeof b.order_id!="undefined"&&typeof b.page_type!="undefined"&&b.page_type!="order confirmation")
{b.order_id="";}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:929");var c,d,e,f;u.data={"base_url":"//tag.bounceexchange.com/##utag_website_id##/i.js","website_id":"4994","product_sku":[],"product_id":[],"product_quantity":[],"product_unit_price":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:929:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
utag.DB("send:929:MAPPINGS");utag.DB(u.data);u.data.website_id=u.data.website_id||u.data.client_id||"";u.data.order_id=u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.order_subtotal||u.data.amount||b._csubtotal||"";u.data.customer_id=u.data.customer_id||u.data.email||b._ccustid||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.order_tax=u.data.order_tax||b._ctax||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.order_coupon_code=u.data.order_coupon_code||b._cpromo||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_sku.length===0&&b._csku!==undefined){u.data.product_sku=b._csku.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
var required_params=["order_id","customer_id","goal","order_currency","order_tax","order_shipping","order_subtotal","product_sku"];var missing_params=[];for(var i=0;i<required_params.length;i++){if(!u.data[required_params[i]]||u.data[required_params[i]].length===0){missing_params.push(required_params[i]);}}
if(u.data.order_id&&u.data.customer_id&&u.data.goal&&u.data.order_currency&&u.data.order_tax&&u.data.order_shipping&&u.data.order_subtotal&&u.data.product_sku){var items=u.getConversionItems();var conversion_data={"order_id":u.data.order_id,"email":u.data.customer_id,"phone":u.data.phone,"goal":u.data.goal,"transaction_origin":u.data.transaction_origin,"currency":u.data.order_currency,"coupon":u.data.order_coupon_code,"total_discount":u.data.total_discount,"tax":u.data.order_tax,"shipping":u.data.order_shipping,"amount":u.data.order_subtotal,"pay_method":u.data.pay_method,"item":items}
conversion_data=u.clearEmptyKeys(conversion_data);window.bouncex.push(["conversion",conversion_data]);}else{utag.DB("Conversion tracking not fired. The following required parameters are missing: "+missing_params.join(", "));}
u.data.base_url=u.data.base_url.replace("##utag_website_id##",u.data.website_id);u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_929"});utag.DB("send:929:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("929","macys.main"));}catch(error){utag.DB(error);}

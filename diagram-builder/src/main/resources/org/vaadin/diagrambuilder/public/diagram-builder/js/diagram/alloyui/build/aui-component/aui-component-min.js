YUI.add("aui-component",function(e,t){var n=e.Lang,r=e.Array,i=function(e,t){return(e||[]).concat(t||[])},s={},o=e.config.win.Object.prototype.constructor,u=e.ClassNameManager,a=u.getClassName,f=e.Widget.getClassName,l=e.getClassName,c=l("hide"),h=e.Base.create("component",e.Widget,[e.WidgetCssClass,e.WidgetToggle],{initializer:function(e){var t=this;t._originalConfig=e,t._setRender(e),s[t.get("id")]=t},clone:function(t){var n=this;return t=t||{},t.id=t.id||e.guid(),e.mix(t,n._originalConfig),new n.constructor(t)},_uiSetVisible:function(e){var t=this,n=h.superclass._uiSetVisible;n&&n.apply(t,arguments);var r=t.get("hideClass");if(r!==!1){var i=t.get("boundingBox");i.toggleClass(r||c,!e)}},_renderBoxClassNames:function(){var e=this,t=e.get("boundingBox")._node,n=e.get("contentBox")._node,i=t.className,s=n.className,o=i?i.split(" "):[],u=s?s.split(" "):[],c=e._getClasses(),h=c.length,p=h-4,d,v;o.push(f());for(var m=h-3;m>=0;m--)d=c[m],v=String(d.NAME).toLowerCase(),o.push(d.CSS_PREFIX||a(v)),m<=p&&(v=v,u.push(l(v,"content")));u.push(e.getClassName("content")),t===n?s=r.dedupe(u.concat(o)).join(" "):(t.className=r.dedupe(o).join(" "),s=r.dedupe(u).join(" ")),n.className=s},_renderInteraction:function(e,t){var n=this;n.render(t);var r=n._renderHandles;for(var i=r.length-1;i>=0;i--){var s=r.pop();s.detach()}},_setRender:function(t){var r=this,i=t&&t.render;if(i&&i.constructor===o){var s=i.eventType||"mousemove",u=i.parentNode,a=i.selector||u;if(a){r._renderHandles=[];var f=r._renderHandles;n.isArray(s)||(s=[s]);var l=e.rbind(r._renderInteraction,r,u),c=e.one(a);for(var h=s.length-1;h>=0;h--)f[h]=c.once(s[h],l);delete t.render}}}},{ATTRS:{useARIA:{writeOnce:!0,value:!1,validator:n.isBoolean},hideClass:{value:c},render:{value:!1,writeOnce:!0}}});h._INSTANCES=s,h.getById=function(e){return s[e]};var p=e.Widget.prototype._UI_ATTRS;h._applyCssPrefix=function(t){return t&&t.NAME&&!("CSS_PREFIX"in t)&&(t.CSS_PREFIX=e.getClassName(String(t.NAME).toLowerCase())),t},h.create=function(t){t=t||{};var r=t.EXTENDS||e.Component,s=t.constructor;e.Object.owns(t,"constructor")||(s=function(){s.superclass.constructor.apply(this,arguments)});var o=t.prototype;if(o)if(t.UI_ATTRS||t.BIND_UI_ATTRS||t.SYNC_UI_ATTRS){var u=i(t.BIND_UI_ATTRS,t.UI_ATTRS),a=i(t.SYNC_UI_ATTRS,t.UI_ATTRS),f=r.prototype,l=f&&f._UI_ATTRS||p;u=i(l.BIND,u),a=i(l.SYNC,a);var c=o._UI_ATTRS;c||(c=o._UI_ATTRS={}),u.length&&(c.BIND=u),a.length&&(c.SYNC=a)}var d=t.AUGMENTS;return d&&!n.isArray(d)&&(d=[d]),e.mix(s,t),delete s.prototype,e.extend(s,r,o),d&&(s=e.Base.build(t.NAME,s,d,{dynamic:!1})),h._applyCssPrefix(s),s},h.CSS_PREFIX=l("component");var d=e.Base;h.build=function(){var e=d.build.apply(d,arguments);return h._applyCssPrefix(e),e},e.Component=h},"4.1.1",{requires:["aui-classnamemanager","aui-widget-cssclass","aui-widget-toggle","base-build","widget-base"]});
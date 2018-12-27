YUI.add("aui-form-builder-settings-modal",function(e,t){var n=e.getClassName("btn","primary"),r=e.getClassName("form","builder","field","settings"),i=e.getClassName("form","builder","field","settings","cancel"),s=e.getClassName("form","builder","field","settings","save"),o=e.getClassName("modal","title");e.FormBuilderSettingsModal=e.Base.create("form-builder-settings-modal",e.Base,[],{TPL_FIELD_SETTINGS_HEAD_CONTENT:'<h4 class="'+o+'"></h4>',destructor:function(){this._modal&&this._modal.destroy()},hide:function(){this._modal&&this._modal.hide(),this._eventToggleAdvancedContent&&this._eventToggleAdvancedContent.detach()},show:function(t,n){var r,i;this._modal||this._create(),r=this._modal.getStdModNode(e.WidgetStdMod.BODY),r.empty(),t.renderSettingsPanel(r),this._modal.get("boundingBox").one("."+o).set("text",n),this._modal.show(),this._modal.align(),i=r.one('input[type="text"]'),i&&i.focus(),this._eventToggleAdvancedContent=t.on("contentToggle",e.bind(this._updateModalOnContentToggle,this)),this._fieldBeingEdited=t},_afterModalVisibleChange:function(e){e.newVal||this.fire("hide")},_create:function(){this._modal=(new e.Modal({centered:!0,cssClass:r,draggable:!1,modal:!0,headerContent:this.TPL_FIELD_SETTINGS_HEAD_CONTENT,resizable:!1,zIndex:4})).render(),this._modal.addToolbar([{cssClass:[n,s].join(" "),label:"Save",on:{click:e.bind(this._save,this)},render:!0},{cssClass:i,label:"Cancel",on:{click:e.bind(this.hide,this)},render:!0}],e.WidgetStdMod.FOOTER),this._modal.after("visibleChange",e.bind(this._afterModalVisibleChange,this))},_save:function(){this._fieldBeingEdited.validateSettings()&&(this._fieldBeingEdited.saveSettings(),this.fire("save",{field:this._fieldBeingEdited}),this.hide())},_updateModalOnContentToggle:function(){this._modal.align()}})},"4.1.1",{requires:["aui-classnamemanager","aui-modal","base","node-base"],skinnable:!0});

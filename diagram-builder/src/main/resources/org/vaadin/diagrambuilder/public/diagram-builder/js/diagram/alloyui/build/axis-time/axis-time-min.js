YUI.add("axis-time",function(e,t){e.TimeAxis=e.Base.create("timeAxis",e.Axis,[e.TimeImpl],{_getLabelByIndex:function(e,t){var i=this.get("minimum");return i+(this.get("maximum")-i)/(t-=1)*e},_getLabelData:function(e,t,i,a,s,u,m,r,n){var o,x,g,h=[],l=[],_=u;for(n=n||this._getDataValuesByCount(r,a,s),x=0;x<r;x+=1)(o=this._getNumber(n[x]))<=s&&o>=a&&((g={})[t]=e,g[i]=this._getCoordFromValue(a,s,m,o,_),h.push(g),l.push(o));return{points:h,values:l}}})},"patched-v3.18.1",{requires:["axis","axis-time-base"]});
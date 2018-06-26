YUI.add("aui-diagram-builder", function (A, NAME) {
    var Lang = A.Lang, isBoolean = Lang.isBoolean, isObject = Lang.isObject, isString = Lang.isString, AArray = A.Array,
        aGetClassName = A.getClassName, CSS_PROPERTY_BUILDER_FIELD = aGetClassName("property", "builder", "field"),
        CSS_DIAGRAM_NODE = aGetClassName("diagram", "node"),
        CSS_DIAGRAM_NODE_CONTENT = aGetClassName("diagram", "node", "content"),
        CSS_DIAGRAM_NODE_EDITING = aGetClassName("diagram", "node", "editing"),
        CSS_DIAGRAM_SUGGEST_CONNECTOR = aGetClassName("diagram", "node", "suggest", "connector"),
        isConnector = function (e) {
            return A.instanceOf(e, A.Connector)
        }, isDiagramNode = function (e) {
            return A.instanceOf(e, A.DiagramNode)
        }, DiagramBuilder = A.Component.create({
                                                   NAME: "diagram-builder",
                                                   ATTRS: {
                                                       connector: {setter: "_setConnector", value: null},
                                                       fieldsDragConfig: {
                                                           value: null,
                                                           setter: "_setFieldsDragConfig",
                                                           validator: isObject
                                                       },
                                                       graphic: {
                                                           valueFn: function () {
                                                               return new A.Graphic
                                                           }, validator: isObject
                                                       },
                                                       highlightDropZones: {validator: isBoolean, value: !0},
                                                       strings: {
                                                           value: {
                                                               addNode: "Add node",
                                                               cancel: "Cancel",
                                                               close: "Close",
                                                               deleteConnectorsMessage: "Are you sure you want to delete the selected connector(s)?",
                                                               deleteNodesMessage: "Are you sure you want to delete the selected node(s)?",
                                                               propertyName: "Property Name",
                                                               save: "Save",
                                                               settings: "Settings",
                                                               value: "Value"
                                                           }
                                                       },
                                                       showSuggestConnector: {validator: isBoolean, value: !0},
                                                       suggestConnectorOverlay: {
                                                           value: null,
                                                           setter: "_setSuggestConnectorOverlay"
                                                       },
                                                       useARIA: {validator: isBoolean, value: !0, writeOnce: "initOnly"},
                                                       showDeleteNodeIcon: {
                                                           validator: isBoolean,
                                                           value: !0,
                                                           writeOnce: "initOnly"
                                                       },
                                                       enableDeleteByKeyStroke: {
                                                           validator: isBoolean,
                                                           value: !0,
                                                           writeOnce: "initOnly"
                                                       }
                                                   },
                                                   AUGMENTS: [A.PropertyBuilderSettings],
                                                   EXTENDS: A.PropertyBuilder,
                                                   FIELDS_TAB: 0,
                                                   SETTINGS_TAB: 1,
                                                   prototype: {
                                                       editingConnector: null,
                                                       editingNode: null,
                                                       publishedSource: null,
                                                       publishedTarget: null,
                                                       selectedConnector: null,
                                                       selectedNode: null,
                                                       initializer: function () {
                                                           var e = this, t = e.get("canvas");
                                                           e.on({
                                                                    cancel: e._onCancel,
                                                                    "drag:drag": e._onDrag,
                                                                    "drag:end": e._onDragEnd,
                                                                    "drop:hit": e._onDropHit,
                                                                    save: e._onSave
                                                                }), A.DiagramNodeManager.on({
                                                                                                publishedSource: function (t) {
                                                                                                    e.publishedTarget =
                                                                                                        null, e.publishedSource =
                                                                                                        t.publishedSource
                                                                                                }
                                                                                            }), t.on("mousedown", A.bind(
                                                               e._onCanvasMouseDown, e)), t.on("mouseenter",
                                                                                               A.bind(e._onCanvasMouseEnter,
                                                                                                      e)), e.handlerKeyDown =
                                                               A.getDoc().on("keydown", A.bind(e._afterKeyEvent,
                                                                                               e)), e.dropContainer.delegate(
                                                               "click", A.bind(e._onNodeClick, e), "."
                                                                                                   + CSS_DIAGRAM_NODE), e.dropContainer.delegate(
                                                               "contextmenu", A.bind(e._onRightClick, e), "."
                                                                                                          + CSS_DIAGRAM_NODE), e.dropContainer.delegate(
                                                               "mousedown", A.bind(e._onCloseButtonMouseDown, e),
                                                               ".diagram-builder-controls button"), e.dropContainer.delegate(
                                                               "mouseenter", A.bind(e._onNodeMouseEnter, e), "."
                                                                                                             + CSS_DIAGRAM_NODE), e.dropContainer.delegate(
                                                               "mouseleave", A.bind(e._onNodeMouseLeave, e), "."
                                                                                                             + CSS_DIAGRAM_NODE)
                                                       },
                                                       renderUI: function () {
                                                           var e = this;
                                                           A.DiagramBuilder.superclass.renderUI.apply(this,
                                                                                                      arguments), e._setupFieldsDrag(), e._renderGraphic()
                                                       },
                                                       syncUI: function () {
                                                           var e = this;
                                                           A.DiagramBuilder.superclass.syncUI.apply(this,
                                                                                                    arguments), e.syncConnectionsUI(), e.connector =
                                                               e.get("connector"), e.get("useARIA") && e.plug(A.Plugin.Aria)
                                                       },
                                                       syncConnectionsUI: function () {
                                                           var e = this;
                                                           e.get("fields").each(function (e) {
                                                               e.syncConnectionsUI()
                                                           })
                                                       },
                                                       clearFields: function () {
                                                           var e = this, t = [];
                                                           e.get("fields").each(function (e) {
                                                               t.push(e)
                                                           }), AArray.each(t, function (e) {
                                                               e.destroy()
                                                           }), t =
                                                               e.editingConnector = e.editingNode = e.selectedNode = null
                                                       },
                                                       closeEditProperties: function () {
                                                           var e = this, t = e.editingNode, n = e.tabView;
                                                           n.selectChild(A.DiagramBuilder.FIELDS_TAB), n.disableTab(
                                                               A.DiagramBuilder.SETTINGS_TAB), t && t.get("boundingBox")
                                                               .removeClass(CSS_DIAGRAM_NODE_EDITING), e.editingConnector =
                                                               e.editingNode = null
                                                       },
                                                       connect: function (e, t, n) {
                                                           var r = this;
                                                           return isString(e) && (e =
                                                               A.DiagramNode.getNodeByName(e)), isString(t) && (t =
                                                               A.DiagramNode.getNodeByName(t)), e && t && e.connect(
                                                               t.get("name"), n), r
                                                       },
                                                       connectAll: function (e) {
                                                           var t = this;
                                                           return AArray.each(e, function (e) {
                                                               e.hasOwnProperty("source") && e.hasOwnProperty("target")
                                                               && t.connect(e.source, e.target, e.connector)
                                                           }), t
                                                       },
                                                       createField: function (e) {
                                                           var t = this;
                                                           return isDiagramNode(e) || (e.builder = t, e.bubbleTargets =
                                                               t, e = new (t.getFieldClass(e.type || "node"))(e)), e
                                                       },
                                                       deleteSelectedConnectors: function () {
                                                           var e = this, t = e.getStrings(), n = e.getSelectedConnectors();
                                                           n.length && window.confirm(t.deleteConnectorsMessage)
                                                           && (AArray.each(n, function (e) {
                                                               var t = e.get("transition");
                                                               A.DiagramNode.getNodeByName(t.source).disconnect(t)
                                                           }), e.stopEditing())
                                                       },
                                                       deleteSelectedNode: function () {
                                                           var e = this, t = e.getStrings(), n = e.selectedNode;
                                                           n && !n.get("required") && window.confirm(t.deleteNodesMessage)
                                                           && (n.close(), e.editingNode =
                                                               e.selectedNode = null, e.stopEditing())
                                                       },
                                                       destructor: function () {
                                                           var e = this;
                                                           e.get("suggestConnectorOverlay").destroy()
                                                       },
                                                       eachConnector: function (e) {
                                                           var t = this;
                                                           t.get("fields").each(function (n) {
                                                               var r = n.get("transitions");
                                                               AArray.each(r.values(), function (r) {
                                                                   e.call(t, n.getConnector(r), r, n)
                                                               })
                                                           })
                                                       },
                                                       editConnector: function (e) {
                                                           var t = this;
                                                           if (e) {
                                                               var n = t.tabView;
                                                               t.closeEditProperties(), n.enableTab(
                                                                   A.DiagramBuilder.SETTINGS_TAB), n.selectChild(
                                                                   A.DiagramBuilder.SETTINGS_TAB), t.propertyList.set(
                                                                   "data", e.getProperties()), t.editingConnector =
                                                                   t.selectedConnector = e
                                                           }
                                                       },
                                                       editNode: function (e) {
                                                           var t = this;
                                                           if (e) {
                                                               var n = t.tabView;
                                                               t.closeEditProperties(), n.enableTab(
                                                                   A.DiagramBuilder.SETTINGS_TAB), n.selectChild(
                                                                   A.DiagramBuilder.SETTINGS_TAB), t.propertyList.set(
                                                                   "data", e.getProperties()), e.get("boundingBox")
                                                                   .addClass(CSS_DIAGRAM_NODE_EDITING), t.editingNode =
                                                                   t.selectedNode = e
                                                           }
                                                       },
                                                       getFieldClass: function (e) {
                                                           var t = A.DiagramBuilder.types[e];
                                                           return t ? t : (A.log("The field type: [" + e
                                                                                 + "] couldn't be found."), null)
                                                       },
                                                       getNodesByTransitionProperty: function (e, t) {
                                                           var n = this, r = [], i;
                                                           return n.get("fields").each(function (n) {
                                                               i = n.get("transitions"), AArray.each(i.values(),
                                                                                                     function (i) {
                                                                                                         if (i[e]
                                                                                                             === t) {
                                                                                                             return r.push(
                                                                                                                 n), !1
                                                                                                         }
                                                                                                     })
                                                           }), r
                                                       },
                                                       getSelectedConnectors: function () {
                                                           var e = this, t = [];
                                                           return e.eachConnector(function (e) {
                                                               e.get("selected") && t.push(e)
                                                           }), t
                                                       },
                                                       getSourceNodes: function (e) {
                                                           var t = this;
                                                           return t.getNodesByTransitionProperty("target", e.get("name"))
                                                       },
                                                       hideSuggestConnectorOverlay: function () {
                                                           var e = this;
                                                           e.connector.hide(), e.get("suggestConnectorOverlay").hide();
                                                           try {
                                                               e.fieldsDrag.dd.set("lock"
                                                                   , !1)
                                                           } catch (t) {
                                                           }
                                                       },
                                                       isAbleToConnect: function () {
                                                           var e = this;
                                                           return !!e.publishedSource && !!e.publishedTarget
                                                       },
                                                       isFieldsDrag: function (e) {
                                                           var t = this;
                                                           return e === t.fieldsDrag.dd
                                                       },
                                                       plotField: function (e) {
                                                           var t = this;
                                                           e.get("rendered") || e.render(t.dropContainer)
                                                       },
                                                       select: function (e) {
                                                           var t = this;
                                                           t.unselectNodes(), t.selectedNode = e.set("selected", !0).focus()
                                                       },
                                                       showSuggestConnectorOverlay: function (e) {
                                                           var t = this, n = t.get("suggestConnectorOverlay");
                                                           n.get("boundingBox")
                                                               .addClass(CSS_DIAGRAM_SUGGEST_CONNECTOR), n.set("xy", e
                                                                                                                     || t.connector.get(
                                                                   "p2")).show();
                                                           try {
                                                               t.fieldsDrag.dd.set("lock", !0)
                                                           } catch (r) {
                                                           }
                                                       },
                                                       stopEditing: function () {
                                                           var e = this;
                                                           e.unselectConnectors(), e.unselectNodes(), e.closeEditProperties()
                                                       },
                                                       toJSON: function () {
                                                           var e = this, t = {nodes: []};
                                                           return e.get("fields").each(function (e) {
                                                               var n = {transitions: []}, r = e.get("transitions");
                                                               AArray.each(e.SERIALIZABLE_ATTRS, function (t) {
                                                                   n[t] = e.get(t)
                                                               }), AArray.each(r.values(), function (t) {
                                                                   var r = e.getConnector(t);
                                                                   t.connector = r.toJSON(), n.transitions.push(t)
                                                               }), t.nodes.push(n)
                                                           }), t
                                                       },
                                                       unselectConnectors: function () {
                                                           var e = this;
                                                           AArray.each(e.getSelectedConnectors(), function (e) {
                                                               e.set("selected", !1)
                                                           })
                                                       },
                                                       unselectNodes: function () {
                                                           var e = this, t = e.selectedNode;
                                                           t && t.set("selected", !1), e.selectedNode = null
                                                       },
                                                       _afterKeyEvent: function (e) {
                                                           var t = this;
                                                           if (e.hasModifier() || A.getDoc().get("activeElement")
                                                               .test(":input,td")) {
                                                               return;
                                                           }
                                                           var n = t._getAttr("enableDeleteByKeyStroke") === !0;
                                                           e.isKey("esc") ? t._onEscKey(e) : n && (e.isKey("backspace")
                                                                                                   || e.isKey("delete"))
                                                                                             && t._onDeleteKey(e)
                                                       },
                                                       _deleteSelectedNode: function (e) {
                                                           var t = this;
                                                           t.deleteSelectedConnectors(), t.deleteSelectedNode(), e.halt()
                                                       },
                                                       _onCancel: function () {
                                                           var e = this;
                                                           e.closeEditProperties()
                                                       },
                                                       _onCanvasMouseEnter: function () {
                                                           var e = this;
                                                           e.syncUI()
                                                       },
                                                       _onCloseButtonMouseDown: function (e) {
                                                           var t = this, n = e.currentTarget.ancestor(".diagram-node");
                                                           isDiagramNode(A.Widget.getByNode(n)) && t._deleteSelectedNode(e)
                                                       },
                                                       _onDeleteKey: function (e) {
                                                           var t = this, n = t.getSelectedConnectors();
                                                           isDiagramNode(A.Widget.getByNode(e.target))
                                                           ? t._deleteSelectedNode(e) : n.length > 0
                                                                                        && (t.deleteSelectedConnectors(), e.halt())
                                                       },
                                                       _onDrag: function (e) {
                                                           var t = this, n = e.target;
                                                           if (t.isFieldsDrag(n)) {
                                                               var r = A.Widget.getByNode(n.get("dragNode"));
                                                               r && (r.get("type") === "group"
                                                                     ? this._moveChildrenGroupNodes(r, t) : r.get("type")
                                                               === "task" && this._updateTaskNodeBoundary(r,
                                                                                                          t), r.alignTransitions(), AArray.each(
                                                                   t.getSourceNodes(r), function (e) {
                                                                       e.alignTransitions()
                                                                   }), t.get("useARIA") && t.aria.setAttributes([{
                                                                   name: "grabbed",
                                                                   node: r.get("boundingBox"),
                                                                   value: "true"
                                                               }, {
                                                                   name: "dropeffect",
                                                                   node: t.get("canvas"),
                                                                   value: "move"
                                                               }]), r.set("xy", r.getNodeCoordinates()))
                                                           }
                                                       },
                                                       _onDragEnd: function (e) {
                                                           var t = this, n = e.target,
                                                               r = A.Widget.getByNode(n.get("dragNode"));
                                                           r && t.isFieldsDrag(n) && (this._moveChildrenGroupNodes(r,
                                                                                                                   t), r.set(
                                                               "xy", r.getNodeCoordinates()), t.get("useARIA")
                                                           && t.aria.setAttributes([{
                                                               name: "grabbed",
                                                               node: r.get("boundingBox"),
                                                               value: "false"
                                                           }, {name: "dropeffect", node: t.get("canvas"), value: "none"}]))
                                                       },
                                                       _onDropHit: function (e) {
                                                           var t = this, n = e.drag;
                                                           if (t.isAvailableFieldsDrag(n)) {
                                                               var r = n.get("node").getData("availableField"),
                                                                   i = t.addField({
                                                                                      xy: A.DiagramNode.getNodeCoordinates(
                                                                                          n.lastXY, t.dropContainer),
                                                                                      type: r.get("type")
                                                                                  });
                                                               t.select(i)
                                                           }
                                                       },
                                                       _onEscKey: function (e) {
                                                           var t = this;
                                                           t.hideSuggestConnectorOverlay(), t.stopEditing(), e.halt()
                                                       },
                                                       _onCanvasMouseDown: function () {
                                                           var e = this;
                                                           e.stopEditing(), e.hideSuggestConnectorOverlay()
                                                       },
                                                       _onNodeClick: function (e) {
                                                           var t = this, n = A.Widget.getByNode(e.currentTarget);
                                                           t.select(n), t._onNodeEdit(e), e.stopPropagation()
                                                       },
                                                       _onRightClick: function (event) {
                                                           event.preventDefault();
                                                           var diagramNode = A.Widget.getByNode(event.currentTarget),
                                                               attrs = this.correctPosition({
                                                                                                id: diagramNode.getAttrs().id,
                                                                                                name: diagramNode.getAttrs().name,
                                                                                                clientX: event.clientX,
                                                                                                clientY: event.clientY,
                                                                                                type: diagramNode.getAttrs().type
                                                                                            });
                                                           eval(diagramNode.get("onRightClick"))(
                                                               attrs), event.stopPropagation()
                                                       },
                                                       correctPosition: function (e) {
                                                           var t = this.dropContainer._node.getBoundingClientRect();
                                                           return e.clientX -= t.left, e.clientY -= t.top, e
                                                       },
                                                       _onNodeEdit: function (e) {
                                                           var t = this;
                                                           if (!e.target.ancestor("." + CSS_DIAGRAM_NODE_CONTENT,
                                                               !0)) {
                                                               return;
                                                           }
                                                           var n = A.Widget.getByNode(e.currentTarget);
                                                           n && t.editNode(n)
                                                       },
                                                       _onNodeMouseEnter: function (e) {
                                                           var t = A.Widget.getByNode(e.currentTarget);
                                                           t.set("highlighted", !0)
                                                       },
                                                       _onNodeMouseLeave: function (e) {
                                                           var t = this, n = t.publishedSource,
                                                               r = A.Widget.getByNode(e.currentTarget);
                                                           (!n || !n.boundaryDragDelegate.dd.get("dragging")) && r.set(
                                                               "highlighted", !1)
                                                       },
                                                       _onSave: function () {
                                                           var e = this, t = e.editingNode, n = e.editingConnector,
                                                               r = e.propertyList.get("data");
                                                           t ? r.each(function (e) {
                                                               t.set(e.get("attributeName"), e.get("value"))
                                                           }) : n && r.each(function (e) {
                                                               n.set(e.get("attributeName"), e.get("value"))
                                                           })
                                                       },
                                                       _onSuggestConnectorNodeClick: function (e) {
                                                           var t = this, n = e.currentTarget.getData("availableField"),
                                                               r = t.connector, i = t.addField(
                                                               {type: n.get("type"), xy: r.toCoordinate(r.get("p2"))});
                                                           t.hideSuggestConnectorOverlay(), t.publishedSource.connectNode(i)
                                                       },
                                                       _renderGraphic: function () {
                                                           var e = this;
                                                           e.get("graphic").render(e.dropContainer)
                                                       },
                                                       _setConnector: function (e) {
                                                           var t = this;
                                                           if (!isConnector(e)) {
                                                               var n = t.get("canvas").getXY();
                                                               e =
                                                                   new A.Connector(A.merge({
                                                                                               builder: t,
                                                                                               graphic: t.get("graphic"),
                                                                                               lazyDraw: !0,
                                                                                               p1: n,
                                                                                               p2: n,
                                                                                               shapeHover: null,
                                                                                               showName: !1
                                                                                           }, e))
                                                           }
                                                           return e
                                                       },
                                                       _setFieldsDragConfig: function (e) {
                                                           var t = this, n = t.dropContainer;
                                                           return A.merge({
                                                                              bubbleTargets: t,
                                                                              container: n,
                                                                              dragConfig: {
                                                                                  plugins: [{
                                                                                      cfg: {constrain: n},
                                                                                      fn: A.Plugin.DDConstrained
                                                                                  }, {
                                                                                      cfg: {scrollDelay: 150, node: n},
                                                                                      fn: A.Plugin.DDNodeScroll
                                                                                  }]
                                                                              },
                                                                              nodes: "." + CSS_DIAGRAM_NODE
                                                                          }, e || {})
                                                       },
                                                       _setSuggestConnectorOverlay: function (e) {
                                                           var t = this;
                                                           if (!e) {
                                                               var n = A.getDoc().invoke("createDocumentFragment"), r, i;
                                                               AArray.each(t.get("availableFields"), function (e) {
                                                                   var t = e.get("node");
                                                                   n.appendChild(t.clone().setData("availableField",
                                                                                                   t.getData(
                                                                                                       "availableField")))
                                                               }), e =
                                                                   new A.Overlay({
                                                                                     bodyContent: n,
                                                                                     render: !0,
                                                                                     visible: !1,
                                                                                     width: 280,
                                                                                     zIndex: 1e4
                                                                                 }), r = e.get("boundingBox"), i =
                                                                   e.get("contentBox"), i.addClass(
                                                                   "popover-content"), r.addClass("popover"), r.delegate(
                                                                   "click", A.bind(t._onSuggestConnectorNodeClick, t), "."
                                                                                                                       + CSS_PROPERTY_BUILDER_FIELD)
                                                           }
                                                           return e
                                                       },
                                                       _setupFieldsDrag: function () {
                                                           var e = this, t = e.get("fields"), n = e.get("fieldsDragConfig"),
                                                               r = e.get("useARIA");
                                                           e.fieldsDrag = new A.DD.Delegate
                                                           (n), r && t.each(function (e) {
                                                               var t = e.get("boundingBox");
                                                               t.attr("draggable", !0)
                                                           })
                                                       },
                                                       _moveChildrenGroupNodes: function (e, t) {
                                                           if (e._getAttr("children")) {
                                                               var n = e._getAttr("children").map(function (e) {
                                                                   return t._getAttr("fields").filter(function (t) {
                                                                       return t._getAttr("name") === e
                                                                   }).item(0)
                                                               });
                                                               AArray.each(n, function (n) {
                                                                   n._setAttr("x", n._getAttr("x")
                                                                                   + (e.getNodeCoordinates()[0] - e.get(
                                                                           "x"))), n._setAttr("y", n._getAttr("y")
                                                                                                   + (e.getNodeCoordinates()[1]
                                                                                                      - e.get(
                                                                               "y"))), n.alignTransitions(), AArray.each(
                                                                       t.getSourceNodes(n), function (e) {
                                                                           e.alignTransitions()
                                                                       })
                                                               })
                                                           }
                                                       },
                                                       _updateTaskNodeBoundary: function (e, t) {
                                                           e.get("type") === "task" && t.get("fields").each(function (n) {
                                                               if (n.get("type") === "group" && n.get("children") && n.get(
                                                                   "children").includes(e.get("name"))) {
                                                                   var r = n.get("x"), i = n.get("y"),
                                                                       s = n.get("x") + n.get("width"),
                                                                       o = n.get("y") + n.get("height"), u = e.get("x"),
                                                                       a = e.get("y"), f = e.get("x") + e.get("width"),
                                                                       l = e.get("y") + e.get("height"),
                                                                       c = t.fieldsDrag.dd, h = c.con._regionCache[0],
                                                                       p = c.con._regionCache[1];
                                                                   u < r ? c.con._regionCache.left = h + r : a < i
                                                                                                             ? c.con._regionCache.top =
                                                                                                                 p + i : f
                                                                                                                         > s
                                                                                                                         ? c.con._regionCache.right =
                                                                                                                             h
                                                                                                                             + s
                                                                                                                         : l
                                                                                                                           > o
                                                                                                                           && (c.con._regionCache.bottom =
                                                                               p + o)
                                                               }
                                                           })
                                                       }
                                                   }
                                               });
    A.DiagramBuilder = DiagramBuilder, A.namespace("DiagramBuilder.types").node = A.DiagramNode, A.namespace(
        "DiagramBuilder.types").state = A.DiagramNodeState, A.namespace("DiagramBuilder.types").condition =
        A.DiagramNodeCondition, A.namespace("DiagramBuilder.types").start = A.DiagramNodeStart, A.namespace(
        "DiagramBuilder.types").end = A.DiagramNodeEnd, A.namespace("DiagramBuilder.types").join =
        A.DiagramNodeJoin, A.namespace("DiagramBuilder.types").fork = A.DiagramNodeFork, A.namespace(
        "DiagramBuilder.types").task = A.DiagramNodeTask, A.namespace("DiagramBuilder.types").group = A.DiagramNodeGroup
}, "3.4.0", {
            requires: ["aui-aria", "aui-map", "aui-property-builder", "aui-diagram-builder-connector",
                       "aui-property-builder-settings", "aui-diagram-node-condition", "aui-diagram-node-end",
                       "aui-diagram-node-fork", "aui-diagram-node-join", "aui-diagram-node-start",
                       "aui-diagram-node-state", "aui-diagram-node-task", "aui-diagram-node-group", "overlay"],
            skinnable: !0
        });

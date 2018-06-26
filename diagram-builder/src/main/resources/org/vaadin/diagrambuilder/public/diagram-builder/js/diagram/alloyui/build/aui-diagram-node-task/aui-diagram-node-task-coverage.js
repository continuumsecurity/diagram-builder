if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/aui-diagram-node-task/aui-diagram-node-task.js']) {
    __coverage__['build/aui-diagram-node-task/aui-diagram-node-task.js'] =
        {
            "path": "build/aui-diagram-node-task/aui-diagram-node-task.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0},
            "b": {"1": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 33}, "end": {"line": 1, "column": 52}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 84,
                    "loc": {"start": {"line": 84, "column": 29}, "end": {"line": 84, "column": 40}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 101,
                    "loc": {"start": {"line": 101, "column": 29}, "end": {"line": 101, "column": 40}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 123, "column": 54}},
                "2": {"start": {"line": 12, "column": 0}, "end": {"line": 118, "column": 3}},
                "3": {"start": {"line": 85, "column": 12}, "end": {"line": 85, "column": 32}},
                "4": {"start": {"line": 87, "column": 12}, "end": {"line": 89, "column": 14}},
                "5": {"start": {"line": 91, "column": 12}, "end": {"line": 91, "column": 37}},
                "6": {"start": {"line": 102, "column": 12}, "end": {"line": 102, "column": 49}},
                "7": {"start": {"line": 103, "column": 12}, "end": {"line": 103, "column": 47}},
                "8": {"start": {"line": 105, "column": 12}, "end": {"line": 105, "column": 78}},
                "9": {"start": {"line": 107, "column": 12}, "end": {"line": 115, "column": 14}},
                "10": {"start": {"line": 120, "column": 0}, "end": {"line": 120, "column": 36}}
            },
            "branchMap": {
                "1": {
                    "line": 111,
                    "type": "cond-expr",
                    "locations": [{"start": {"line": 111, "column": 75}, "end": {"line": 111, "column": 81}},
                        {"start": {"line": 111, "column": 84}, "end": {"line": 111, "column": 100}}]
                }
            },
            "code": ["(function () { YUI.add('aui-diagram-node-task', function (A, NAME) {", "", "/**",
                     " * A base class for `A.DiagramNodeTask`.", " *", " * @class A.DiagramNodeTask",
                     " * @extends A.DiagramNodeState",
                     " * @param {Object} config Object literal specifying widget configuration", " *     properties.",
                     " * @constructor", " */", "var DiagramNodeTask = A.Component.create({", "", "    /**",
                     "     * Static property provides a string to identify the class.", "     *",
                     "     * @property NAME", "     * @type String", "     * @static", "     */",
                     "    NAME: 'diagram-node',", "", "    /**",
                     "     * Static property used to define the default attribute",
                     "     * configuration for the `A.DiagramNodeTask`.", "     *", "     * @property ATTRS",
                     "     * @type Object", "     * @static", "     */", "    ATTRS: {", "", "        /**",
                     "         * The height of the node.", "         *", "         * @attribute height",
                     "         * @default 70", "         * @type Number", "         */", "        height: {",
                     "            value: 70", "        },", "", "        /**", "         * The type of the node.",
                     "         *", "         * @attribute type", "         * @default 'task'",
                     "         * @type String", "         */", "        type: {", "            value: 'task'",
                     "        },", "", "        /**", "         * The width of the node.", "         *",
                     "         * @attribute width", "         * @default 70", "         * @type Number", "         */",
                     "        width: {", "            value: 70", "        }", "    },", "", "    /**",
                     "     * Static property used to define which component it extends.", "     *",
                     "     * @property EXTENDS", "     * @type String", "     * @static", "     */",
                     "    EXTENDS: A.DiagramNodeState,", "", "    prototype: {",
                     "        hotPoints: A.DiagramNode.SQUARE_POINTS,", "", "        /**",
                     "         * Renders the shape boundary.", "         *", "         * @method renderShapeBoundary",
                     "         */", "        renderShapeBoundary: function() {", "            var instance = this;", "",
                     "            instance.boundary = instance.get('graphic').addShape(",
                     "                instance.get('shapeBoundary')", "            );", "",
                     "            return instance.boundary;", "        },", "", "        /**",
                     "         * Gets the shape boundary definitions.", "         *",
                     "         * @method _valueShapeBoundary", "         * @protected", "         * @return {Object}",
                     "         */", "        _valueShapeBoundary: function() {",
                     "            var height = this._getAttr('height');",
                     "            var width = this._getAttr('width');", "",
                     "            this.hotPoints = this._calculateRectangleHotPoints(width, height);", "",
                     "            return {", "                height: height,", "                width: width,",
                     "                type: 'rect',",
                     "                pointerEvents: (this._getAttr('allowsLinking') === false)? 'none' : 'visiblePainted',",
                     "                stroke: {", "                    opacity: 0", "                }",
                     "            };", "        }", "    }", "});", "", "A.DiagramNodeTask = DiagramNodeTask;", "", "",
                     "}, '3.4.0', {\"requires\": [\"aui-diagram-node-state\"]});", "", "}());"]
        };
}
var __cov_8iYwB$cHMX52MHVx49i6gA = __coverage__['build/aui-diagram-node-task/aui-diagram-node-task.js'];
__cov_8iYwB$cHMX52MHVx49i6gA.s['1']++;
YUI.add('aui-diagram-node-task', function (A, NAME) {
    __cov_8iYwB$cHMX52MHVx49i6gA.f['1']++;
    __cov_8iYwB$cHMX52MHVx49i6gA.s['2']++;
    var DiagramNodeTask = A.Component.create({
                                                 NAME: 'diagram-node',
                                                 ATTRS: {
                                                     height: {value: 70},
                                                     type: {value: 'task'},
                                                     width: {value: 70}
                                                 },
                                                 EXTENDS: A.DiagramNodeState,
                                                 prototype: {
                                                     hotPoints: A.DiagramNode.SQUARE_POINTS,
                                                     renderShapeBoundary: function () {
                                                         __cov_8iYwB$cHMX52MHVx49i6gA.f['2']++;
                                                         __cov_8iYwB$cHMX52MHVx49i6gA.s['3']++;
                                                         var instance = this;
                                                         __cov_8iYwB$cHMX52MHVx49i6gA.s['4']++;
                                                         instance.boundary =
                                                             instance.get('graphic')
                                                                 .addShape(instance.get('shapeBoundary'));
                                                         __cov_8iYwB$cHMX52MHVx49i6gA.s['5']++;
                                                         return instance.boundary;
                                                     },
                                                     _valueShapeBoundary: function () {
                                                         __cov_8iYwB$cHMX52MHVx49i6gA.f['3']++;
                                                         __cov_8iYwB$cHMX52MHVx49i6gA.s['6']++;
                                                         var height = this._getAttr('height');
                                                         __cov_8iYwB$cHMX52MHVx49i6gA.s['7']++;
                                                         var width = this._getAttr('width');
                                                         __cov_8iYwB$cHMX52MHVx49i6gA.s['8']++;
                                                         this.hotPoints =
                                                             this._calculateRectangleHotPoints(width, height);
                                                         __cov_8iYwB$cHMX52MHVx49i6gA.s['9']++;
                                                         return {
                                                             height: height,
                                                             width: width,
                                                             type: 'rect',
                                                             pointerEvents: this._getAttr('allowsLinking') === false
                                                                            ? (__cov_8iYwB$cHMX52MHVx49i6gA.b['1'][0]++, 'none')
                                                                            : (__cov_8iYwB$cHMX52MHVx49i6gA.b['1'][1]++, 'visiblePainted'),
                                                             stroke: {opacity: 0}
                                                         };
                                                     }
                                                 }
                                             });
    __cov_8iYwB$cHMX52MHVx49i6gA.s['10']++;
    A.DiagramNodeTask = DiagramNodeTask;
}, '3.4.0', {'requires': ['aui-diagram-node-state']});

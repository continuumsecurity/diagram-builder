if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/aui-diagram-node-group/aui-diagram-node-group.js']) {
    __coverage__['build/aui-diagram-node-group/aui-diagram-node-group.js'] =
        {
            "path": "build/aui-diagram-node-group/aui-diagram-node-group.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0},
            "b": {"1": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 34}, "end": {"line": 1, "column": 53}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 87,
                    "loc": {"start": {"line": 87, "column": 29}, "end": {"line": 87, "column": 40}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 104,
                    "loc": {"start": {"line": 104, "column": 29}, "end": {"line": 104, "column": 40}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 133, "column": 54}},
                "2": {"start": {"line": 12, "column": 0}, "end": {"line": 128, "column": 3}},
                "3": {"start": {"line": 88, "column": 12}, "end": {"line": 88, "column": 32}},
                "4": {"start": {"line": 90, "column": 12}, "end": {"line": 92, "column": 14}},
                "5": {"start": {"line": 94, "column": 12}, "end": {"line": 94, "column": 37}},
                "6": {"start": {"line": 105, "column": 12}, "end": {"line": 105, "column": 49}},
                "7": {"start": {"line": 106, "column": 12}, "end": {"line": 106, "column": 47}},
                "8": {"start": {"line": 108, "column": 12}, "end": {"line": 108, "column": 78}},
                "9": {"start": {"line": 110, "column": 12}, "end": {"line": 125, "column": 14}},
                "10": {"start": {"line": 130, "column": 0}, "end": {"line": 130, "column": 38}}
            },
            "branchMap": {
                "1": {
                    "line": 114,
                    "type": "cond-expr",
                    "locations": [{"start": {"line": 114, "column": 75}, "end": {"line": 114, "column": 81}},
                        {"start": {"line": 114, "column": 84}, "end": {"line": 114, "column": 100}}]
                }
            },
            "code": ["(function () { YUI.add('aui-diagram-node-group', function (A, NAME) {", "", "/**",
                     " * A base class for `A.DiagramNodeGroup`.", " *", " * @class A.DiagramNodeGroup",
                     " * @extends A.DiagramNodeState",
                     " * @param {Object} config Object literal specifying widget configuration", " *     properties.",
                     " * @constructor", " */", "var DiagramNodeGroup = A.Component.create({", "", "    /**",
                     "     * Static property provides a string to identify the class.", "     *",
                     "     * @property NAME", "     * @type String", "     * @static", "     */",
                     "    NAME: 'diagram-node',", "", "    /**",
                     "     * Static property used to define the default attribute",
                     "     * configuration for the `A.DiagramNodeGroup`.", "     *", "     * @property ATTRS",
                     "     * @type Object", "     * @static", "     */", "    ATTRS: {", "", "        /**",
                     "         * The height of the node.", "         *", "         * @attribute height",
                     "         * @default 70", "         * @type Number", "         */", "        height: {",
                     "            value: 300", "        },", "", "        /**", "         * The type of the node.",
                     "         *", "         * @attribute type", "         * @default 'group'",
                     "         * @type String", "         */", "        type: {", "            value: 'group'",
                     "        },", "", "        /**", "         * The width of the node.", "         *",
                     "         * @attribute width", "         * @default 70", "         * @type Number", "         */",
                     "        width: {", "            value: 300", "        },", "", "        children:{",
                     "            value: []", "        }", "    },", "", "    /**",
                     "     * Static property used to define which component it extends.", "     *",
                     "     * @property EXTENDS", "     * @type String", "     * @static", "     */",
                     "    EXTENDS: A.DiagramNodeState,", "", "    prototype: {",
                     "        hotPoints: A.DiagramNode.SQUARE_POINTS,", "        /**",
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
                     "                stroke: {", "                    weight: 3,", "                    opacity: 0.5,",
                     "                    color: 'black',", "                    dashstyle: \"5,10,5\"",
                     "                },", "                fill: {", "                    color: '#DBEAF7',",
                     "                    opacity: 0.35", "                }", "            };", "        }", "    }",
                     "});", "", "A.DiagramNodeGroup = DiagramNodeGroup;", "", "",
                     "}, '3.4.0', {\"requires\": [\"aui-diagram-node-state\"]});", "", "}());"]
        };
}
var __cov_lQJq4Dq1I4eQvERIAoTeXQ = __coverage__['build/aui-diagram-node-group/aui-diagram-node-group.js'];
__cov_lQJq4Dq1I4eQvERIAoTeXQ.s['1']++;
YUI.add('aui-diagram-node-group', function (A, NAME) {
    __cov_lQJq4Dq1I4eQvERIAoTeXQ.f['1']++;
    __cov_lQJq4Dq1I4eQvERIAoTeXQ.s['2']++;
    var DiagramNodeGroup = A.Component.create({
                                                  NAME: 'diagram-node',
                                                  ATTRS: {
                                                      height: {value: 300},
                                                      type: {value: 'group'},
                                                      width: {value: 300},
                                                      children: {value: []}
                                                  },
                                                  EXTENDS: A.DiagramNodeState,
                                                  prototype: {
                                                      hotPoints: A.DiagramNode.SQUARE_POINTS,
                                                      renderShapeBoundary: function () {
                                                          __cov_lQJq4Dq1I4eQvERIAoTeXQ.f['2']++;
                                                          __cov_lQJq4Dq1I4eQvERIAoTeXQ.s['3']++;
                                                          var instance = this;
                                                          __cov_lQJq4Dq1I4eQvERIAoTeXQ.s['4']++;
                                                          instance.boundary =
                                                              instance.get('graphic')
                                                                  .addShape(instance.get('shapeBoundary'));
                                                          __cov_lQJq4Dq1I4eQvERIAoTeXQ.s['5']++;
                                                          return instance.boundary;
                                                      },
                                                      _valueShapeBoundary: function () {
                                                          __cov_lQJq4Dq1I4eQvERIAoTeXQ.f['3']++;
                                                          __cov_lQJq4Dq1I4eQvERIAoTeXQ.s['6']++;
                                                          var height = this._getAttr('height');
                                                          __cov_lQJq4Dq1I4eQvERIAoTeXQ.s['7']++;
                                                          var width = this._getAttr('width');
                                                          __cov_lQJq4Dq1I4eQvERIAoTeXQ.s['8']++;
                                                          this.hotPoints =
                                                              this._calculateRectangleHotPoints(width, height);
                                                          __cov_lQJq4Dq1I4eQvERIAoTeXQ.s['9']++;
                                                          return {
                                                              height: height,
                                                              width: width,
                                                              type: 'rect',
                                                              pointerEvents: this._getAttr('allowsLinking') === false
                                                                             ? (__cov_lQJq4Dq1I4eQvERIAoTeXQ.b['1'][0]++, 'none')
                                                                             : (__cov_lQJq4Dq1I4eQvERIAoTeXQ.b['1'][1]++, 'visiblePainted'),
                                                              stroke: {
                                                                  weight: 3,
                                                                  opacity: 0.5,
                                                                  color: 'black',
                                                                  dashstyle: '5,10,5'
                                                              },
                                                              fill: {color: '#DBEAF7', opacity: 0.35}
                                                          };
                                                      }
                                                  }
                                              });
    __cov_lQJq4Dq1I4eQvERIAoTeXQ.s['10']++;
    A.DiagramNodeGroup = DiagramNodeGroup;
}, '3.4.0', {'requires': ['aui-diagram-node-state']});

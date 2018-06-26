if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/aui-diagram-node-start/aui-diagram-node-start.js']) {
    __coverage__['build/aui-diagram-node-start/aui-diagram-node-start.js'] =
        {
            "path": "build/aui-diagram-node-start/aui-diagram-node-start.js",
            "s": {"1": 0, "2": 0, "3": 0},
            "b": {},
            "f": {"1": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 34}, "end": {"line": 1, "column": 53}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 58, "column": 54}},
                "2": {"start": {"line": 12, "column": 0}, "end": {"line": 53, "column": 3}},
                "3": {"start": {"line": 55, "column": 0}, "end": {"line": 55, "column": 38}}
            },
            "branchMap": {},
            "code": ["(function () { YUI.add('aui-diagram-node-start', function (A, NAME) {", "", "/**",
                     " * A base class for DiagramNodeStart.", " *", " * @class A.DiagramNodeStart",
                     " * @extends A.DiagramNodeState",
                     " * @param {Object} config Object literal specifying widget configuration", " *     properties.",
                     " * @constructor", " */", "var DiagramNodeStart = A.Component.create({", "", "    /**",
                     "     * Static property provides a string to identify the class.", "     *",
                     "     * @property NAME", "     * @type String", "     * @static", "     */",
                     "    NAME: 'diagram-node',", "", "    /**",
                     "     * Static property used to define the default attribute",
                     "     * configuration for the `A.DiagramNodeStart`.", "     *", "     * @property ATTRS",
                     "     * @type Object", "     * @static", "     */", "    ATTRS: {", "", "        /**",
                     "         * The type of the node.", "         *", "         * @attribute type",
                     "         * @default 'start'", "         * @type String", "         */", "        type: {",
                     "            value: 'start'", "        }", "    },", "", "    /**",
                     "     * Static property used to define which component it extends.", "     *",
                     "     * @property EXTENDS", "     * @type String", "     * @static", "     */",
                     "    EXTENDS: A.DiagramNodeState", "});", "", "A.DiagramNodeStart = DiagramNodeStart;", "", "",
                     "}, '3.4.0', {\"requires\": [\"aui-diagram-node-state\"]});", "", "}());"]
        };
}
var __cov_Ad2eZ_4bg7rtXN$hKSx_HA = __coverage__['build/aui-diagram-node-start/aui-diagram-node-start.js'];
__cov_Ad2eZ_4bg7rtXN$hKSx_HA.s['1']++;
YUI.add('aui-diagram-node-start', function (A, NAME) {
    __cov_Ad2eZ_4bg7rtXN$hKSx_HA.f['1']++;
    __cov_Ad2eZ_4bg7rtXN$hKSx_HA.s['2']++;
    var DiagramNodeStart = A.Component.create(
        {NAME: 'diagram-node', ATTRS: {type: {value: 'start'}}, EXTENDS: A.DiagramNodeState});
    __cov_Ad2eZ_4bg7rtXN$hKSx_HA.s['3']++;
    A.DiagramNodeStart = DiagramNodeStart;
}, '3.4.0', {'requires': ['aui-diagram-node-state']});

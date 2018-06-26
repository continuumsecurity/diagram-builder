if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/series-combospline/series-combospline.js']) {
    __coverage__['build/series-combospline/series-combospline.js'] =
        {
            "path": "build/series-combospline/series-combospline.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0},
            "b": {"1": [0, 0], "2": [0, 0], "3": [0, 0]},
            "f": {"1": 0, "2": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 30}, "end": {"line": 1, "column": 49}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 29,
                    "loc": {"start": {"line": 29, "column": 16}, "end": {"line": 30, "column": 4}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 60, "column": 69}},
                "2": {"start": {"line": 21, "column": 0}, "end": {"line": 57, "column": 3}},
                "3": {"start": {"line": 31, "column": 8}, "end": {"line": 34, "column": 9}},
                "4": {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 34}},
                "5": {"start": {"line": 35, "column": 8}, "end": {"line": 38, "column": 9}},
                "6": {"start": {"line": 37, "column": 12}, "end": {"line": 37, "column": 30}},
                "7": {"start": {"line": 39, "column": 8}, "end": {"line": 42, "column": 9}},
                "8": {"start": {"line": 41, "column": 12}, "end": {"line": 41, "column": 29}}
            },
            "branchMap": {
                "1": {
                    "line": 31,
                    "type": "if",
                    "locations": [{"start": {"line": 31, "column": 8}, "end": {"line": 31, "column": 8}},
                        {"start": {"line": 31, "column": 8}, "end": {"line": 31, "column": 8}}]
                },
                "2": {
                    "line": 35,
                    "type": "if",
                    "locations": [{"start": {"line": 35, "column": 8}, "end": {"line": 35, "column": 8}},
                        {"start": {"line": 35, "column": 8}, "end": {"line": 35, "column": 8}}]
                },
                "3": {
                    "line": 39,
                    "type": "if",
                    "locations": [{"start": {"line": 39, "column": 8}, "end": {"line": 39, "column": 8}},
                        {"start": {"line": 39, "column": 8}, "end": {"line": 39, "column": 8}}]
                }
            },
            "code": ["(function () { YUI.add('series-combospline', function (Y, NAME) {", "", "/**",
                     " * Provides functionality for creating a combospline series.", " *", " * @module charts",
                     " * @submodule series-combospline", " */", "/**",
                     " * The ComboSplineSeries class renders a combination of splines, plots and areaspline fills in a single series. Each",
                     " * series type has a corresponding boolean attribute indicating if it is rendered. By default, splines and plots",
                     " * are rendered and areaspline is not.", " *", " * @class ComboSplineSeries",
                     " * @extends ComboSeries", " * @uses CurveUtil", " * @constructor",
                     " * @param {Object} config (optional) Configuration parameters.",
                     " * @submodule series-combospline", " */",
                     "Y.ComboSplineSeries = Y.Base.create(\"comboSplineSeries\", Y.ComboSeries, [Y.CurveUtil], {",
                     "    /**", "     * @protected", "     *", "     * Draws the series.", "     *",
                     "     * @method drawSeries", "     */", "    drawSeries: function()", "    {",
                     "        if(this.get(\"showAreaFill\"))", "        {", "            this.drawAreaSpline();",
                     "        }", "        if(this.get(\"showLines\"))", "        {", "            this.drawSpline();",
                     "        }", "        if(this.get(\"showMarkers\"))", "        {", "            this.drawPlots();",
                     "        }", "    }", "}, {", "    ATTRS: {", "        /**",
                     "         * Read-only attribute indicating the type of series.", "         *",
                     "         * @attribute type", "         * @type String", "         * @default comboSpline",
                     "         */", "        type: {", "            value : \"comboSpline\"", "        }", "    }",
                     "});", "", "", "}, 'patched-v3.18.1', {\"requires\": [\"series-combo\", \"series-curve-util\"]});",
                     "", "}());"]
        };
}
var __cov_8imVvCaZtL2_fN8azFAdMQ = __coverage__['build/series-combospline/series-combospline.js'];
__cov_8imVvCaZtL2_fN8azFAdMQ.s['1']++;
YUI.add('series-combospline', function (Y, NAME) {
    __cov_8imVvCaZtL2_fN8azFAdMQ.f['1']++;
    __cov_8imVvCaZtL2_fN8azFAdMQ.s['2']++;
    Y.ComboSplineSeries = Y.Base.create('comboSplineSeries', Y.ComboSeries, [Y.CurveUtil], {
        drawSeries: function () {
            __cov_8imVvCaZtL2_fN8azFAdMQ.f['2']++;
            __cov_8imVvCaZtL2_fN8azFAdMQ.s['3']++;
            if (this.get('showAreaFill')) {
                __cov_8imVvCaZtL2_fN8azFAdMQ.b['1'][0]++;
                __cov_8imVvCaZtL2_fN8azFAdMQ.s['4']++;
                this.drawAreaSpline();
            } else {
                __cov_8imVvCaZtL2_fN8azFAdMQ.b['1'][1]++;
            }
            __cov_8imVvCaZtL2_fN8azFAdMQ.s['5']++;
            if (this.get('showLines')) {
                __cov_8imVvCaZtL2_fN8azFAdMQ.b['2'][0]++;
                __cov_8imVvCaZtL2_fN8azFAdMQ.s['6']++;
                this.drawSpline();
            } else {
                __cov_8imVvCaZtL2_fN8azFAdMQ.b['2'][1]++;
            }
            __cov_8imVvCaZtL2_fN8azFAdMQ.s['7']++;
            if (this.get('showMarkers')) {
                __cov_8imVvCaZtL2_fN8azFAdMQ.b['3'][0]++;
                __cov_8imVvCaZtL2_fN8azFAdMQ.s['8']++;
                this.drawPlots();
            } else {
                __cov_8imVvCaZtL2_fN8azFAdMQ.b['3'][1]++;
            }
        }
    }, {ATTRS: {type: {value: 'comboSpline'}}});
}, 'patched-v3.18.1', {'requires': ['series-combo', 'series-curve-util']});

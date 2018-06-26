if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/series-combo-stacked/series-combo-stacked.js']) {
    __coverage__['build/series-combo-stacked/series-combo-stacked.js'] =
        {
            "path": "build/series-combo-stacked/series-combo-stacked.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0},
            "b": {"1": [0, 0], "2": [0, 0], "3": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 32}, "end": {"line": 1, "column": 51}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 30,
                    "loc": {"start": {"line": 30, "column": 17}, "end": {"line": 31, "column": 4}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 43,
                    "loc": {"start": {"line": 43, "column": 16}, "end": {"line": 44, "column": 4}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 86, "column": 66}},
                "2": {"start": {"line": 22, "column": 0}, "end": {"line": 83, "column": 3}},
                "3": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 64}},
                "4": {"start": {"line": 33, "column": 8}, "end": {"line": 33, "column": 43}},
                "5": {"start": {"line": 45, "column": 8}, "end": {"line": 48, "column": 9}},
                "6": {"start": {"line": 47, "column": 12}, "end": {"line": 47, "column": 71}},
                "7": {"start": {"line": 49, "column": 8}, "end": {"line": 52, "column": 9}},
                "8": {"start": {"line": 51, "column": 12}, "end": {"line": 51, "column": 29}},
                "9": {"start": {"line": 53, "column": 8}, "end": {"line": 56, "column": 9}},
                "10": {"start": {"line": 55, "column": 12}, "end": {"line": 55, "column": 29}}
            },
            "branchMap": {
                "1": {
                    "line": 45,
                    "type": "if",
                    "locations": [{"start": {"line": 45, "column": 8}, "end": {"line": 45, "column": 8}},
                        {"start": {"line": 45, "column": 8}, "end": {"line": 45, "column": 8}}]
                },
                "2": {
                    "line": 49,
                    "type": "if",
                    "locations": [{"start": {"line": 49, "column": 8}, "end": {"line": 49, "column": 8}},
                        {"start": {"line": 49, "column": 8}, "end": {"line": 49, "column": 8}}]
                },
                "3": {
                    "line": 53,
                    "type": "if",
                    "locations": [{"start": {"line": 53, "column": 8}, "end": {"line": 53, "column": 8}},
                        {"start": {"line": 53, "column": 8}, "end": {"line": 53, "column": 8}}]
                }
            },
            "code": ["(function () { YUI.add('series-combo-stacked', function (Y, NAME) {", "", "/**",
                     " * Provides functionality for creating a stacked combo series.", " *", " * @module charts",
                     " * @submodule series-combo-stacked", " */", "/**",
                     " * The StackedComboSeries class renders a combination of lines, plots and area fills in a single series. Series",
                     " * are stacked along the value axis to indicate each series contribution to a cumulative total. Each",
                     " * series type has a corresponding boolean attribute indicating if it is rendered. By default, all three types are",
                     " * rendered.", " *", " * @class StackedComboSeries", " * @extends ComboSeries",
                     " * @uses StackingUtil", " * @constructor",
                     " * @param {Object} config (optional) Configuration parameters.",
                     " * @submodule series-combo-stacked", " */",
                     "Y.StackedComboSeries = Y.Base.create(\"stackedComboSeries\", Y.ComboSeries, [Y.StackingUtil], {",
                     "    /**", "     * @protected", "     *",
                     "     * Calculates the coordinates for the series. Overrides base implementation.", "     *",
                     "     * @method setAreaData", "     */", "    setAreaData: function()", "    {",
                     "        Y.StackedComboSeries.superclass.setAreaData.apply(this);",
                     "        this._stackCoordinates.apply(this);", "    },", "", "    /**", "     * @protected",
                     "     *", "     * Draws the series.", "     *", "     * @method drawSeries", "     */",
                     "    drawSeries: function()", "    {", "        if(this.get(\"showAreaFill\"))", "        {",
                     "            this.drawFill.apply(this, this._getStackedClosingPoints());", "        }",
                     "        if(this.get(\"showLines\"))", "        {", "            this.drawLines();", "        }",
                     "        if(this.get(\"showMarkers\"))", "        {", "            this.drawPlots();", "        }",
                     "    }", "", "}, {", "    ATTRS : {", "        /**",
                     "         * Read-only attribute indicating the type of series.", "         *",
                     "         * @attribute type", "         * @type String", "         * @default stackedCombo",
                     "         */", "        type: {", "            value: \"stackedCombo\"", "        },", "",
                     "        /**", "         * Indicates whether a fill is displayed.", "         *",
                     "         * @attribute showAreaFill", "         * @type Boolean", "         * @default true",
                     "         */", "        showAreaFill: {", "            value: true", "        }", "    }", "});",
                     "", "", "}, 'patched-v3.18.1', {\"requires\": [\"series-stacked\", \"series-combo\"]});", "",
                     "}());"]
        };
}
var __cov_eIKfYYEIcE2NometN1or$A = __coverage__['build/series-combo-stacked/series-combo-stacked.js'];
__cov_eIKfYYEIcE2NometN1or$A.s['1']++;
YUI.add('series-combo-stacked', function (Y, NAME) {
    __cov_eIKfYYEIcE2NometN1or$A.f['1']++;
    __cov_eIKfYYEIcE2NometN1or$A.s['2']++;
    Y.StackedComboSeries =
        Y.Base.create('stackedComboSeries', Y.ComboSeries, [Y.StackingUtil], {
            setAreaData: function () {
                __cov_eIKfYYEIcE2NometN1or$A.f['2']++;
                __cov_eIKfYYEIcE2NometN1or$A.s['3']++;
                Y.StackedComboSeries.superclass.setAreaData.apply(this);
                __cov_eIKfYYEIcE2NometN1or$A.s['4']++;
                this._stackCoordinates.apply(this);
            }, drawSeries: function () {
                __cov_eIKfYYEIcE2NometN1or$A.f['3']++;
                __cov_eIKfYYEIcE2NometN1or$A.s['5']++;
                if (this.get('showAreaFill')) {
                    __cov_eIKfYYEIcE2NometN1or$A.b['1'][0]++;
                    __cov_eIKfYYEIcE2NometN1or$A.s['6']++;
                    this.drawFill.apply(this, this._getStackedClosingPoints());
                } else {
                    __cov_eIKfYYEIcE2NometN1or$A.b['1'][1]++;
                }
                __cov_eIKfYYEIcE2NometN1or$A.s['7']++;
                if (this.get('showLines')) {
                    __cov_eIKfYYEIcE2NometN1or$A.b['2'][0]++;
                    __cov_eIKfYYEIcE2NometN1or$A.s['8']++;
                    this.drawLines();
                } else {
                    __cov_eIKfYYEIcE2NometN1or$A.b['2'][1]++;
                }
                __cov_eIKfYYEIcE2NometN1or$A.s['9']++;
                if (this.get('showMarkers')) {
                    __cov_eIKfYYEIcE2NometN1or$A.b['3'][0]++;
                    __cov_eIKfYYEIcE2NometN1or$A.s['10']++;
                    this.drawPlots();
                } else {
                    __cov_eIKfYYEIcE2NometN1or$A.b['3'][1]++;
                }
            }
        }, {ATTRS: {type: {value: 'stackedCombo'}, showAreaFill: {value: true}}});
}, 'patched-v3.18.1', {'requires': ['series-stacked', 'series-combo']});

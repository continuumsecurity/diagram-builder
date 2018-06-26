if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/autocomplete-highlighters-accentfold/autocomplete-highlighters-accentfold.js']) {
    __coverage__['build/autocomplete-highlighters-accentfold/autocomplete-highlighters-accentfold.js'] =
        {
            "path": "build/autocomplete-highlighters-accentfold/autocomplete-highlighters-accentfold.js",
            "s": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0,
                "7": 0,
                "8": 0,
                "9": 0,
                "10": 0,
                "11": 0,
                "12": 0,
                "13": 0,
                "14": 0,
                "15": 0
            },
            "b": {},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 48}, "end": {"line": 1, "column": 67}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 33,
                    "loc": {"start": {"line": 33, "column": 19}, "end": {"line": 33, "column": 45}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 36,
                    "loc": {"start": {"line": 36, "column": 35}, "end": {"line": 36, "column": 53}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 50,
                    "loc": {"start": {"line": 50, "column": 21}, "end": {"line": 50, "column": 47}}
                },
                "5": {
                    "name": "(anonymous_5)",
                    "line": 51,
                    "loc": {"start": {"line": 51, "column": 35}, "end": {"line": 51, "column": 53}}
                },
                "6": {
                    "name": "(anonymous_6)",
                    "line": 65,
                    "loc": {"start": {"line": 65, "column": 20}, "end": {"line": 65, "column": 46}}
                },
                "7": {
                    "name": "(anonymous_7)",
                    "line": 66,
                    "loc": {"start": {"line": 66, "column": 35}, "end": {"line": 66, "column": 53}}
                },
                "8": {
                    "name": "(anonymous_8)",
                    "line": 82,
                    "loc": {"start": {"line": 82, "column": 22}, "end": {"line": 82, "column": 48}}
                },
                "9": {
                    "name": "(anonymous_9)",
                    "line": 85,
                    "loc": {"start": {"line": 85, "column": 35}, "end": {"line": 85, "column": 53}}
                },
                "10": {
                    "name": "(anonymous_10)",
                    "line": 99,
                    "loc": {"start": {"line": 99, "column": 19}, "end": {"line": 99, "column": 45}}
                },
                "11": {
                    "name": "(anonymous_11)",
                    "line": 100,
                    "loc": {"start": {"line": 100, "column": 35}, "end": {"line": 100, "column": 53}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 107, "column": 72}},
                "2": {"start": {"line": 20, "column": 0}, "end": {"line": 21, "column": 24}},
                "3": {"start": {"line": 23, "column": 0}, "end": {"line": 104, "column": 3}},
                "4": {"start": {"line": 34, "column": 8}, "end": {"line": 34, "column": 56}},
                "5": {"start": {"line": 36, "column": 8}, "end": {"line": 38, "column": 11}},
                "6": {"start": {"line": 37, "column": 12}, "end": {"line": 37, "column": 62}},
                "7": {"start": {"line": 51, "column": 8}, "end": {"line": 53, "column": 11}},
                "8": {"start": {"line": 52, "column": 12}, "end": {"line": 52, "column": 59}},
                "9": {"start": {"line": 66, "column": 8}, "end": {"line": 70, "column": 11}},
                "10": {"start": {"line": 67, "column": 12}, "end": {"line": 69, "column": 15}},
                "11": {"start": {"line": 83, "column": 8}, "end": {"line": 83, "column": 64}},
                "12": {"start": {"line": 85, "column": 8}, "end": {"line": 87, "column": 11}},
                "13": {"start": {"line": 86, "column": 12}, "end": {"line": 86, "column": 62}},
                "14": {"start": {"line": 100, "column": 8}, "end": {"line": 102, "column": 11}},
                "15": {"start": {"line": 101, "column": 12}, "end": {"line": 101, "column": 59}}
            },
            "branchMap": {},
            "code": ["(function () { YUI.add('autocomplete-highlighters-accentfold', function (Y, NAME) {", "", "/**",
                     "Provides pre-built accent-folding result highlighters for AutoComplete.", "",
                     "These highlighters are similar to the ones provided by the `autocomplete-",
                     "highlighters` module, but use accent-aware comparisons. For example, \"resume\"",
                     "and \"résumé\" will be considered equal when using the accent-folding", "highlighters.", "",
                     "@module autocomplete", "@submodule autocomplete-highlighters-accentfold", "**/", "", "/**",
                     "@class AutoCompleteHighlighters", "@static", "**/", "", "var Highlight = Y.Highlight,",
                     "    YArray    = Y.Array;", "", "Y.mix(Y.namespace('AutoCompleteHighlighters'), {", "    /**",
                     "    Accent-folding version of `charMatch()`.", "", "    @method charMatchFold",
                     "    @param {String} query Query to match", "    @param {Array} results Results to highlight",
                     "    @return {Array} Highlighted results", "    @static", "    **/",
                     "    charMatchFold: function (query, results) {",
                     "        var queryChars = YArray.unique(query.split(''));", "",
                     "        return YArray.map(results, function (result) {",
                     "            return Highlight.allFold(result.text, queryChars);", "        });", "    },", "",
                     "    /**", "    Accent-folding version of `phraseMatch()`.", "", "    @method phraseMatchFold",
                     "    @param {String} query Query to match", "    @param {Array} results Results to highlight",
                     "    @return {Array} Highlighted results", "    @static", "    **/",
                     "    phraseMatchFold: function (query, results) {",
                     "        return YArray.map(results, function (result) {",
                     "            return Highlight.allFold(result.text, [query]);", "        });", "    },", "",
                     "    /**", "    Accent-folding version of `startsWith()`.", "", "    @method startsWithFold",
                     "    @param {String} query Query to match", "    @param {Array} results Results to highlight",
                     "    @return {Array} Highlighted results", "    @static", "    **/",
                     "    startsWithFold: function (query, results) {",
                     "        return YArray.map(results, function (result) {",
                     "            return Highlight.allFold(result.text, [query], {", "                startsWith: true",
                     "            });", "        });", "    },", "", "    /**",
                     "    Accent-folding version of `subWordMatch()`.", "", "    @method subWordMatchFold",
                     "    @param {String} query Query to match", "    @param {Array} results Results to highlight",
                     "    @return {Array} Highlighted results", "    @static", "    **/",
                     "    subWordMatchFold: function (query, results) {",
                     "        var queryWords = Y.Text.WordBreak.getUniqueWords(query);", "",
                     "        return YArray.map(results, function (result) {",
                     "            return Highlight.allFold(result.text, queryWords);", "        });", "    },", "",
                     "    /**", "    Accent-folding version of `wordMatch()`.", "", "    @method wordMatchFold",
                     "    @param {String} query Query to match", "    @param {Array} results Results to highlight",
                     "    @return {Array} Highlighted results", "    @static", "    **/",
                     "    wordMatchFold: function (query, results) {",
                     "        return YArray.map(results, function (result) {",
                     "            return Highlight.wordsFold(result.text, query);", "        });", "    }", "});", "",
                     "", "}, 'patched-v3.18.1', {\"requires\": [\"array-extras\", \"highlight-accentfold\"]});", "",
                     "}());"]
        };
}
var __cov_7RUh8qT5TrkXtEGrnYRI_w = __coverage__['build/autocomplete-highlighters-accentfold/autocomplete-highlighters-accentfold.js'];
__cov_7RUh8qT5TrkXtEGrnYRI_w.s['1']++;
YUI.add('autocomplete-highlighters-accentfold', function (Y, NAME) {
    __cov_7RUh8qT5TrkXtEGrnYRI_w.f['1']++;
    __cov_7RUh8qT5TrkXtEGrnYRI_w.s['2']++;
    var Highlight = Y.Highlight, YArray = Y.Array;
    __cov_7RUh8qT5TrkXtEGrnYRI_w.s['3']++;
    Y.mix(Y.namespace('AutoCompleteHighlighters'), {
        charMatchFold: function (query, results) {
            __cov_7RUh8qT5TrkXtEGrnYRI_w.f['2']++;
            __cov_7RUh8qT5TrkXtEGrnYRI_w.s['4']++;
            var queryChars = YArray.unique(query.split(''));
            __cov_7RUh8qT5TrkXtEGrnYRI_w.s['5']++;
            return YArray.map(results, function (result) {
                __cov_7RUh8qT5TrkXtEGrnYRI_w.f['3']++;
                __cov_7RUh8qT5TrkXtEGrnYRI_w.s['6']++;
                return Highlight.allFold(result.text, queryChars);
            });
        }, phraseMatchFold: function (query, results) {
            __cov_7RUh8qT5TrkXtEGrnYRI_w.f['4']++;
            __cov_7RUh8qT5TrkXtEGrnYRI_w.s['7']++;
            return YArray.map(results, function (result) {
                __cov_7RUh8qT5TrkXtEGrnYRI_w.f['5']++;
                __cov_7RUh8qT5TrkXtEGrnYRI_w.s['8']++;
                return Highlight.allFold(result.text, [query]);
            });
        }, startsWithFold: function (query, results) {
            __cov_7RUh8qT5TrkXtEGrnYRI_w.f['6']++;
            __cov_7RUh8qT5TrkXtEGrnYRI_w.s['9']++;
            return YArray.map(results, function (result) {
                __cov_7RUh8qT5TrkXtEGrnYRI_w.f['7']++;
                __cov_7RUh8qT5TrkXtEGrnYRI_w.s['10']++;
                return Highlight.allFold(result.text, [query], {startsWith: true});
            });
        }, subWordMatchFold: function (query, results) {
            __cov_7RUh8qT5TrkXtEGrnYRI_w.f['8']++;
            __cov_7RUh8qT5TrkXtEGrnYRI_w.s['11']++;
            var queryWords = Y.Text.WordBreak.getUniqueWords(query);
            __cov_7RUh8qT5TrkXtEGrnYRI_w.s['12']++;
            return YArray.map(results, function (result) {
                __cov_7RUh8qT5TrkXtEGrnYRI_w.f['9']++;
                __cov_7RUh8qT5TrkXtEGrnYRI_w.s['13']++;
                return Highlight.allFold(result.text, queryWords);
            });
        }, wordMatchFold: function (query, results) {
            __cov_7RUh8qT5TrkXtEGrnYRI_w.f['10']++;
            __cov_7RUh8qT5TrkXtEGrnYRI_w.s['14']++;
            return YArray.map(results, function (result) {
                __cov_7RUh8qT5TrkXtEGrnYRI_w.f['11']++;
                __cov_7RUh8qT5TrkXtEGrnYRI_w.s['15']++;
                return Highlight.wordsFold(result.text, query);
            });
        }
    });
}, 'patched-v3.18.1', {'requires': ['array-extras', 'highlight-accentfold']});

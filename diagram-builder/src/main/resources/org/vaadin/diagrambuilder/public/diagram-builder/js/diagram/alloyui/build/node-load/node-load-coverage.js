if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/node-load/node-load.js']) {
    __coverage__['build/node-load/node-load.js'] =
        {
            "path": "build/node-load/node-load.js",
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
                "15": 0,
                "16": 0,
                "17": 0,
                "18": 0
            },
            "b": {"1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0], "5": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 21}, "end": {"line": 1, "column": 40}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 19,
                    "loc": {"start": {"line": 19, "column": 31}, "end": {"line": 19, "column": 62}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 47,
                    "loc": {"start": {"line": 47, "column": 24}, "end": {"line": 47, "column": 58}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 65, "column": 56}},
                "2": {"start": {"line": 19, "column": 0}, "end": {"line": 36, "column": 2}},
                "3": {"start": {"line": 20, "column": 4}, "end": {"line": 23, "column": 16}},
                "4": {"start": {"line": 25, "column": 4}, "end": {"line": 32, "column": 5}},
                "5": {"start": {"line": 26, "column": 8}, "end": {"line": 26, "column": 40}},
                "6": {"start": {"line": 27, "column": 8}, "end": {"line": 30, "column": 9}},
                "7": {"start": {"line": 28, "column": 12}, "end": {"line": 28, "column": 40}},
                "8": {"start": {"line": 29, "column": 12}, "end": {"line": 29, "column": 54}},
                "9": {"start": {"line": 31, "column": 8}, "end": {"line": 31, "column": 33}},
                "10": {"start": {"line": 33, "column": 4}, "end": {"line": 35, "column": 5}},
                "11": {"start": {"line": 34, "column": 8}, "end": {"line": 34, "column": 44}},
                "12": {"start": {"line": 47, "column": 0}, "end": {"line": 62, "column": 2}},
                "13": {"start": {"line": 48, "column": 4}, "end": {"line": 51, "column": 5}},
                "14": {"start": {"line": 49, "column": 8}, "end": {"line": 49, "column": 28}},
                "15": {"start": {"line": 50, "column": 8}, "end": {"line": 50, "column": 24}},
                "16": {"start": {"line": 52, "column": 4}, "end": {"line": 58, "column": 6}},
                "17": {"start": {"line": 60, "column": 4}, "end": {"line": 60, "column": 22}},
                "18": {"start": {"line": 61, "column": 4}, "end": {"line": 61, "column": 16}}
            },
            "branchMap": {
                "1": {
                    "line": 25,
                    "type": "if",
                    "locations": [{"start": {"line": 25, "column": 4}, "end": {"line": 25, "column": 4}},
                        {"start": {"line": 25, "column": 4}, "end": {"line": 25, "column": 4}}]
                },
                "2": {
                    "line": 25,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 25, "column": 8}, "end": {"line": 25, "column": 16}},
                        {"start": {"line": 25, "column": 20}, "end": {"line": 25, "column": 41}}]
                },
                "3": {
                    "line": 27,
                    "type": "if",
                    "locations": [{"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 8}},
                        {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 8}}]
                },
                "4": {
                    "line": 33,
                    "type": "if",
                    "locations": [{"start": {"line": 33, "column": 4}, "end": {"line": 33, "column": 4}},
                        {"start": {"line": 33, "column": 4}, "end": {"line": 33, "column": 4}}]
                },
                "5": {
                    "line": 48,
                    "type": "if",
                    "locations": [{"start": {"line": 48, "column": 4}, "end": {"line": 48, "column": 4}},
                        {"start": {"line": 48, "column": 4}, "end": {"line": 48, "column": 4}}]
                }
            },
            "code": ["(function () { YUI.add('node-load', function (Y, NAME) {", "", "/**",
                     " * Extended Node interface with a basic IO API.", " * @module node", " * @submodule node-load",
                     " */", "", "/**", " * The default IO complete handler.", " * @method _ioComplete", " * @protected",
                     " * @for Node", " * @param {String} code The response code.",
                     " * @param {Object} response The response object.",
                     " * @param {Array} args An array containing the callback and selector", " */", "",
                     "Y.Node.prototype._ioComplete = function(code, response, args) {", "    var selector = args[0],",
                     "        callback = args[1],", "        tmp,", "        content;", "",
                     "    if (response && response.responseText) {", "        content = response.responseText;",
                     "        if (selector) {", "            tmp = Y.DOM.create(content);",
                     "            content = Y.Selector.query(selector, tmp);", "        }",
                     "        this.setContent(content);", "    }", "    if (callback) {",
                     "        callback.call(this, code, response);", "    }", "};", "", "/**",
                     " * Loads content from the given url and replaces the Node's",
                     " * existing content with the remote content.", " * @method load",
                     " * @param {String} url The URL to load via XMLHttpRequest.",
                     " * @param {String} selector An optional selector representing a subset of an HTML document to load.",
                     " * @param {Function} callback An optional function to run after the content has been loaded.",
                     " * @chainable", " */", "Y.Node.prototype.load = function(url, selector, callback) {",
                     "    if (typeof selector == 'function') {", "        callback = selector;",
                     "        selector = null;", "    }", "    var config = {", "        context: this,",
                     "        on: {", "            complete: this._ioComplete", "        },",
                     "        arguments: [selector, callback]", "    };", "", "    Y.io(url, config);",
                     "    return this;", "};", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"node-base\", \"io-base\"]});", "", "}());"]
        };
}
var __cov_QH8b2Q7VbjsEWAEYzi89Ng = __coverage__['build/node-load/node-load.js'];
__cov_QH8b2Q7VbjsEWAEYzi89Ng.s['1']++;
YUI.add('node-load', function (Y, NAME) {
    __cov_QH8b2Q7VbjsEWAEYzi89Ng.f['1']++;
    __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['2']++;
    Y.Node.prototype._ioComplete = function (code, response, args) {
        __cov_QH8b2Q7VbjsEWAEYzi89Ng.f['2']++;
        __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['3']++;
        var selector = args[0], callback = args[1], tmp, content;
        __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['4']++;
        if ((__cov_QH8b2Q7VbjsEWAEYzi89Ng.b['2'][0]++, response)
            && (__cov_QH8b2Q7VbjsEWAEYzi89Ng.b['2'][1]++, response.responseText)) {
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.b['1'][0]++;
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['5']++;
            content = response.responseText;
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['6']++;
            if (selector) {
                __cov_QH8b2Q7VbjsEWAEYzi89Ng.b['3'][0]++;
                __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['7']++;
                tmp = Y.DOM.create(content);
                __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['8']++;
                content = Y.Selector.query(selector, tmp);
            } else {
                __cov_QH8b2Q7VbjsEWAEYzi89Ng.b['3'][1]++;
            }
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['9']++;
            this.setContent(content);
        } else {
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.b['1'][1]++;
        }
        __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['10']++;
        if (callback) {
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.b['4'][0]++;
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['11']++;
            callback.call(this, code, response);
        } else {
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.b['4'][1]++;
        }
    };
    __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['12']++;
    Y.Node.prototype.load = function (url, selector, callback) {
        __cov_QH8b2Q7VbjsEWAEYzi89Ng.f['3']++;
        __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['13']++;
        if (typeof selector == 'function') {
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.b['5'][0]++;
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['14']++;
            callback = selector;
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['15']++;
            selector = null;
        } else {
            __cov_QH8b2Q7VbjsEWAEYzi89Ng.b['5'][1]++;
        }
        __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['16']++;
        var config = {context: this, on: {complete: this._ioComplete}, arguments: [selector, callback]};
        __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['17']++;
        Y.io(url, config);
        __cov_QH8b2Q7VbjsEWAEYzi89Ng.s['18']++;
        return this;
    };
}, 'patched-v3.18.1', {'requires': ['node-base', 'io-base']});

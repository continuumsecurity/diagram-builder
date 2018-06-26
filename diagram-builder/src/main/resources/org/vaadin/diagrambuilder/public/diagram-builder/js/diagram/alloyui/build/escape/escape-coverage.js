if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/escape/escape.js']) {
    __coverage__['build/escape/escape.js'] =
        {
            "path": "build/escape/escape.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0},
            "b": {},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 18}, "end": {"line": 1, "column": 37}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 46,
                    "loc": {"start": {"line": 46, "column": 10}, "end": {"line": 46, "column": 28}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 64,
                    "loc": {"start": {"line": 64, "column": 11}, "end": {"line": 64, "column": 29}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 82,
                    "loc": {"start": {"line": 82, "column": 19}, "end": {"line": 82, "column": 36}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 92, "column": 44}},
                "2": {"start": {"line": 12, "column": 0}, "end": {"line": 85, "column": 2}},
                "3": {"start": {"line": 47, "column": 8}, "end": {"line": 47, "column": 74}},
                "4": {"start": {"line": 68, "column": 8}, "end": {"line": 68, "column": 75}},
                "5": {"start": {"line": 83, "column": 8}, "end": {"line": 83, "column": 33}},
                "6": {"start": {"line": 87, "column": 0}, "end": {"line": 87, "column": 29}},
                "7": {"start": {"line": 89, "column": 0}, "end": {"line": 89, "column": 18}}
            },
            "branchMap": {},
            "code": ["(function () { YUI.add('escape', function (Y, NAME) {", "", "/**",
                     "Provides utility methods for escaping strings.", "", "@module escape", "@class Escape", "@static",
                     "@since 3.3.0", "**/", "", "var HTML_CHARS = {", "        '&': '&amp;',", "        '<': '&lt;',",
                     "        '>': '&gt;',", "        '\"': '&quot;',", "        \"'\": '&#x27;',",
                     "        '/': '&#x2F;',", "        '`': '&#x60;'", "    },", "", "Escape = {",
                     "    // -- Public Static Methods ------------------------------------------------", "", "    /**",
                     "    Returns a copy of the specified string with special HTML characters",
                     "    escaped. The following characters will be converted to their",
                     "    corresponding character entities:", "", "        & < > \" ' / `", "",
                     "    This implementation is based on the [OWASP HTML escaping",
                     "    recommendations][1]. In addition to the characters in the OWASP",
                     "    recommendations, we also escape the <code>&#x60;</code> character, since IE",
                     "    interprets it as an attribute delimiter.", "",
                     "    If _string_ is not already a string, it will be coerced to a string.", "",
                     "    [1]: http://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet", "",
                     "    @method html", "    @param {String} string String to escape.",
                     "    @return {String} Escaped string.", "    @static", "    **/", "    html: function (string) {",
                     "        return (string + '').replace(/[&<>\"'\\/`]/g, Escape._htmlReplacer);", "    },", "",
                     "    /**", "    Returns a copy of the specified string with special regular expression",
                     "    characters escaped, allowing the string to be used safely inside a regex.",
                     "    The following characters, and all whitespace characters, are escaped:", "",
                     "        - $ ^ * ( ) + [ ] { } | \\ , . ?", "",
                     "    If _string_ is not already a string, it will be coerced to a string.", "",
                     "    @method regex", "    @param {String} string String to escape.",
                     "    @return {String} Escaped string.", "    @static", "    **/", "    regex: function (string) {",
                     "        // There's no need to escape !, =, and : since they only have meaning",
                     "        // when they follow a parenthesized ?, as in (?:...), and we already",
                     "        // escape parens and question marks.",
                     "        return (string + '').replace(/[\\-$\\^*()+\\[\\]{}|\\\\,.?\\s]/g, '\\\\$&');", "    },",
                     "", "    // -- Protected Static Methods ---------------------------------------------", "",
                     "    /**", "     * Regex replacer for HTML escaping.", "     *", "     * @method _htmlReplacer",
                     "     * @param {String} match Matched character (must exist in HTML_CHARS).",
                     "     * @return {String} HTML entity.", "     * @static", "     * @protected", "     */",
                     "    _htmlReplacer: function (match) {", "        return HTML_CHARS[match];", "    }", "};", "",
                     "Escape.regexp = Escape.regex;", "", "Y.Escape = Escape;", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"yui-base\"]});", "", "}());"]
        };
}
var __cov_5oBw$P7Z0Aj_h4TloOHzgg = __coverage__['build/escape/escape.js'];
__cov_5oBw$P7Z0Aj_h4TloOHzgg.s['1']++;
YUI.add('escape', function (Y, NAME) {
    __cov_5oBw$P7Z0Aj_h4TloOHzgg.f['1']++;
    __cov_5oBw$P7Z0Aj_h4TloOHzgg.s['2']++;
    var HTML_CHARS = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#x27;',
        '/': '&#x2F;',
        '`': '&#x60;'
    }, Escape = {
        html: function (string) {
            __cov_5oBw$P7Z0Aj_h4TloOHzgg.f['2']++;
            __cov_5oBw$P7Z0Aj_h4TloOHzgg.s['3']++;
            return (string + '').replace(/[&<>"'\/`]/g, Escape._htmlReplacer);
        }, regex: function (string) {
            __cov_5oBw$P7Z0Aj_h4TloOHzgg.f['3']++;
            __cov_5oBw$P7Z0Aj_h4TloOHzgg.s['4']++;
            return (string + '').replace(/[\-$\^*()+\[\]{}|\\,.?\s]/g, '\\$&');
        }, _htmlReplacer: function (match) {
            __cov_5oBw$P7Z0Aj_h4TloOHzgg.f['4']++;
            __cov_5oBw$P7Z0Aj_h4TloOHzgg.s['5']++;
            return HTML_CHARS[match];
        }
    };
    __cov_5oBw$P7Z0Aj_h4TloOHzgg.s['6']++;
    Escape.regexp = Escape.regex;
    __cov_5oBw$P7Z0Aj_h4TloOHzgg.s['7']++;
    Y.Escape = Escape;
}, 'patched-v3.18.1', {'requires': ['yui-base']});

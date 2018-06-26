if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/cache-plugin/cache-plugin.js']) {
    __coverage__['build/cache-plugin/cache-plugin.js'] =
        {
            "path": "build/cache-plugin/cache-plugin.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0},
            "b": {"1": [0, 0], "2": [0, 0]},
            "f": {"1": 0, "2": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 24}, "end": {"line": 1, "column": 43}}
                },
                "2": {
                    "name": "CachePlugin",
                    "line": 16,
                    "loc": {"start": {"line": 16, "column": 0}, "end": {"line": 16, "column": 29}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 53, "column": 56}},
                "2": {"start": {"line": 16, "column": 0}, "end": {"line": 22, "column": 1}},
                "3": {"start": {"line": 17, "column": 4}, "end": {"line": 19, "column": 43}},
                "4": {"start": {"line": 20, "column": 4}, "end": {"line": 20, "column": 29}},
                "5": {"start": {"line": 21, "column": 4}, "end": {"line": 21, "column": 23}},
                "6": {"start": {"line": 24, "column": 0}, "end": {"line": 47, "column": 3}},
                "7": {"start": {"line": 50, "column": 0}, "end": {"line": 50, "column": 42}}
            },
            "branchMap": {
                "1": {
                    "line": 17,
                    "type": "cond-expr",
                    "locations": [{"start": {"line": 17, "column": 41}, "end": {"line": 17, "column": 53}},
                        {"start": {"line": 17, "column": 56}, "end": {"line": 17, "column": 63}}]
                },
                "2": {
                    "line": 17,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 17, "column": 16}, "end": {"line": 17, "column": 22}},
                        {"start": {"line": 17, "column": 26}, "end": {"line": 17, "column": 38}}]
                }
            },
            "code": ["(function () { YUI.add('cache-plugin', function (Y, NAME) {", "", "/**",
                     " * Provides support to use Cache as a Plugin to a Base-based class.", " *", " * @module cache",
                     " * @submodule cache-plugin", " */", "", "/**", " * Plugin.Cache adds pluginizability to Cache.",
                     " * @class Plugin.Cache", " * @extends Cache", " * @uses Plugin.Base", " */",
                     "function CachePlugin(config) {",
                     "    var cache = config && config.cache ? config.cache : Y.Cache,",
                     "        tmpclass = Y.Base.create(\"dataSourceCache\", cache, [Y.Plugin.Base]),",
                     "        tmpinstance = new tmpclass(config);", "    tmpclass.NS = \"tmpClass\";",
                     "    return tmpinstance;", "}", "", "Y.mix(CachePlugin, {", "    /**",
                     "     * The namespace for the plugin. This will be the property on the host which",
                     "     * references the plugin instance.", "     *", "     * @property NS", "     * @type String",
                     "     * @static", "     * @final", "     * @value \"cache\"", "     */", "    NS: \"cache\",", "",
                     "    /**", "     * Class name.", "     *", "     * @property NAME", "     * @type String",
                     "     * @static", "     * @final", "     * @value \"dataSourceCache\"", "     */",
                     "    NAME: \"cachePlugin\"", "});", "", "", "Y.namespace(\"Plugin\").Cache = CachePlugin;", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"plugin\", \"cache-base\"]});", "", "}());"]
        };
}
var __cov_TihKPXHB0B47uj4ihDCChQ = __coverage__['build/cache-plugin/cache-plugin.js'];
__cov_TihKPXHB0B47uj4ihDCChQ.s['1']++;
YUI.add('cache-plugin', function (Y, NAME) {
    __cov_TihKPXHB0B47uj4ihDCChQ.f['1']++;
    __cov_TihKPXHB0B47uj4ihDCChQ.s['2']++;

    function CachePlugin(config) {
        __cov_TihKPXHB0B47uj4ihDCChQ.f['2']++;
        __cov_TihKPXHB0B47uj4ihDCChQ.s['3']++;
        var cache = (__cov_TihKPXHB0B47uj4ihDCChQ.b['2'][0]++, config)
                    && (__cov_TihKPXHB0B47uj4ihDCChQ.b['2'][1]++, config.cache)
                    ? (__cov_TihKPXHB0B47uj4ihDCChQ.b['1'][0]++, config.cache)
                    : (__cov_TihKPXHB0B47uj4ihDCChQ.b['1'][1]++, Y.Cache),
            tmpclass = Y.Base.create('dataSourceCache', cache, [Y.Plugin.Base]), tmpinstance = new tmpclass(config);
        __cov_TihKPXHB0B47uj4ihDCChQ.s['4']++;
        tmpclass.NS = 'tmpClass';
        __cov_TihKPXHB0B47uj4ihDCChQ.s['5']++;
        return tmpinstance;
    }

    __cov_TihKPXHB0B47uj4ihDCChQ.s['6']++;
    Y.mix(CachePlugin, {NS: 'cache', NAME: 'cachePlugin'});
    __cov_TihKPXHB0B47uj4ihDCChQ.s['7']++;
    Y.namespace('Plugin').Cache = CachePlugin;
}, 'patched-v3.18.1', {'requires': ['plugin', 'cache-base']});

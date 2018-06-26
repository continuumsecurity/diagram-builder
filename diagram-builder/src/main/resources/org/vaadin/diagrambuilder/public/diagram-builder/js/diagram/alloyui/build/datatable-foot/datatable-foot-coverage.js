if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/datatable-foot/datatable-foot.js']) {
    __coverage__['build/datatable-foot/datatable-foot.js'] =
        {
            "path": "build/datatable-foot/datatable-foot.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0},
            "b": {"1": [0, 0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0], "5": [0, 0], "6": [0, 0], "7": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 26}, "end": {"line": 1, "column": 45}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 44,
                    "loc": {"start": {"line": 44, "column": 18}, "end": {"line": 44, "column": 30}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 68,
                    "loc": {"start": {"line": 68, "column": 12}, "end": {"line": 68, "column": 24}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 87,
                    "loc": {"start": {"line": 87, "column": 22}, "end": {"line": 87, "column": 34}}
                },
                "5": {
                    "name": "(anonymous_5)",
                    "line": 103,
                    "loc": {"start": {"line": 103, "column": 17}, "end": {"line": 103, "column": 35}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 112, "column": 58}},
                "2": {"start": {"line": 14, "column": 0}, "end": {"line": 109, "column": 3}},
                "3": {"start": {"line": 47, "column": 8}, "end": {"line": 49, "column": 42}},
                "4": {"start": {"line": 51, "column": 8}, "end": {"line": 57, "column": 9}},
                "5": {"start": {"line": 52, "column": 12}, "end": {"line": 52, "column": 60}},
                "6": {"start": {"line": 54, "column": 12}, "end": {"line": 56, "column": 67}},
                "7": {"start": {"line": 69, "column": 8}, "end": {"line": 70, "column": 67}},
                "8": {"start": {"line": 72, "column": 8}, "end": {"line": 74, "column": 9}},
                "9": {"start": {"line": 73, "column": 12}, "end": {"line": 73, "column": 56}},
                "10": {"start": {"line": 76, "column": 8}, "end": {"line": 76, "column": 20}},
                "11": {"start": {"line": 88, "column": 8}, "end": {"line": 90, "column": 12}},
                "12": {"start": {"line": 104, "column": 8}, "end": {"line": 104, "column": 45}}
            },
            "branchMap": {
                "1": {
                    "line": 48,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 48, "column": 20}, "end": {"line": 48, "column": 24}},
                        {"start": {"line": 48, "column": 28}, "end": {"line": 48, "column": 49}},
                        {"start": {"line": 49, "column": 20}, "end": {"line": 49, "column": 41}}]
                },
                "2": {
                    "line": 51,
                    "type": "if",
                    "locations": [{"start": {"line": 51, "column": 8}, "end": {"line": 51, "column": 8}},
                        {"start": {"line": 51, "column": 8}, "end": {"line": 51, "column": 8}}]
                },
                "3": {
                    "line": 51,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 51, "column": 12}, "end": {"line": 51, "column": 16}},
                        {"start": {"line": 51, "column": 20}, "end": {"line": 51, "column": 37}}]
                },
                "4": {
                    "line": 69,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 69, "column": 23}, "end": {"line": 69, "column": 37}},
                        {"start": {"line": 70, "column": 25}, "end": {"line": 70, "column": 65}}]
                },
                "5": {
                    "line": 72,
                    "type": "if",
                    "locations": [{"start": {"line": 72, "column": 8}, "end": {"line": 72, "column": 8}},
                        {"start": {"line": 72, "column": 8}, "end": {"line": 72, "column": 8}}]
                },
                "6": {
                    "line": 72,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 72, "column": 12}, "end": {"line": 72, "column": 21}},
                        {"start": {"line": 72, "column": 25}, "end": {"line": 72, "column": 45}}]
                },
                "7": {
                    "line": 104,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 104, "column": 22}, "end": {"line": 104, "column": 28}},
                        {"start": {"line": 104, "column": 32}, "end": {"line": 104, "column": 43}}]
                }
            },
            "code": ["(function () { YUI.add('datatable-foot', function (Y, NAME) {", "", "/**",
                     "View class responsible for rendering the `<tfoot>` section of a table. Can be",
                     "used as the default `footerView` for `Y.DataTable.Base` and `Y.DataTable`", "classes.", "",
                     "@module datatable", "@submodule datatable-foot", "@since 3.11.0", "**/", "", "",
                     "Y.namespace('DataTable').FooterView = Y.Base.create('tableFooter', Y.View, [], {",
                     "    // -- Instance properties -------------------------------------------------", "", "    /**",
                     "    HTML templates used to create the `<tfoot>` containing the table footers.", "",
                     "    @property TFOOT_TEMPLATE", "    @type {String}",
                     "    @default '<tfoot class=\"{className}\"/>'", "    @since 3.11.0", "    **/",
                     "    TFOOT_TEMPLATE: '<tfoot class=\"{className}\"/>',", "",
                     "    // -- Public methods ------------------------------------------------------", "", "    /**",
                     "    Returns the generated CSS classname based on the input.  If the `host`",
                     "    attribute is configured, it will attempt to relay to its `getClassName`",
                     "    or use its static `NAME` property as a string base.", "",
                     "    If `host` is absent or has neither method nor `NAME`, a CSS classname",
                     "    will be generated using this class's `NAME`.", "", "    @method getClassName",
                     "    @param {String} token* Any number of token strings to assemble the",
                     "        classname from.", "    @return {String}", "    @protected", "    @since 3.11.0",
                     "    **/", "    getClassName: function () {",
                     "        // TODO: add attribute with setter? to host to use property this.host",
                     "        // for performance", "        var host = this.host,",
                     "            NAME = (host && host.constructor.NAME) ||",
                     "                    this.constructor.NAME;", "", "        if (host && host.getClassName) {",
                     "            return host.getClassName.apply(host, arguments);", "        } else {",
                     "            return Y.ClassNameManager.getClassName", "                .apply(Y.ClassNameManager,",
                     "                       [NAME].concat(Y.Array(arguments, 0, true)));", "        }", "    },", "",
                     "    /**", "    Creates the `<tfoot>` Node and inserts it after the `<thead>` Node.", "",
                     "    @method render", "    @return {FooterView} The instance", "    @chainable",
                     "    @since 3.11.0", "    **/", "    render: function () {",
                     "        var tfoot    = this.tfootNode ||",
                     "                        (this.tfootNode = this._createTFootNode());", "",
                     "        if (this.host && this.host._theadNode) {",
                     "            this.host._theadNode.insert(tfoot, 'after');", "        }", "",
                     "        return this;", "    },", "", "    /**",
                     "    Creates the `<tfoot>` node that will store the footer rows and cells.", "",
                     "    @method _createTFootNode", "    @return {Node}", "    @protected", "    @since 3.11.0",
                     "    **/", "    _createTFootNode: function () {",
                     "        return Y.Node.create(Y.Lang.sub(this.TFOOT_TEMPLATE, {",
                     "            className: this.getClassName('foot')", "        }));", "    },", "", "    /**",
                     "    Initializes the instance. Reads the following configuration properties:", "",
                     "      * `host`    - The object to serve as source of truth for column info", "",
                     "    @method initializer", "    @param {Object} config Configuration data", "    @protected",
                     "    @since 3.11.0", "    **/", "    initializer: function (config) {",
                     "        this.host  = (config && config.host);", "    }", "", "", "", "});", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"datatable-core\", \"view\"]});", "", "}());"]
        };
}
var __cov_te8sm58xd9h0CrHYFO5GLA = __coverage__['build/datatable-foot/datatable-foot.js'];
__cov_te8sm58xd9h0CrHYFO5GLA.s['1']++;
YUI.add('datatable-foot', function (Y, NAME) {
    __cov_te8sm58xd9h0CrHYFO5GLA.f['1']++;
    __cov_te8sm58xd9h0CrHYFO5GLA.s['2']++;
    Y.namespace('DataTable').FooterView =
        Y.Base.create('tableFooter', Y.View, [], {
            TFOOT_TEMPLATE: '<tfoot class="{className}"/>', getClassName: function () {
                __cov_te8sm58xd9h0CrHYFO5GLA.f['2']++;
                __cov_te8sm58xd9h0CrHYFO5GLA.s['3']++;
                var host = this.host, NAME = (__cov_te8sm58xd9h0CrHYFO5GLA.b['1'][0]++, host)
                                             && (__cov_te8sm58xd9h0CrHYFO5GLA.b['1'][1]++, host.constructor.NAME)
                                             || (__cov_te8sm58xd9h0CrHYFO5GLA.b['1'][2]++, this.constructor.NAME);
                __cov_te8sm58xd9h0CrHYFO5GLA.s['4']++;
                if ((__cov_te8sm58xd9h0CrHYFO5GLA.b['3'][0]++, host)
                    && (__cov_te8sm58xd9h0CrHYFO5GLA.b['3'][1]++, host.getClassName)) {
                    __cov_te8sm58xd9h0CrHYFO5GLA.b['2'][0]++;
                    __cov_te8sm58xd9h0CrHYFO5GLA.s['5']++;
                    return host.getClassName.apply(host, arguments);
                } else {
                    __cov_te8sm58xd9h0CrHYFO5GLA.b['2'][1]++;
                    __cov_te8sm58xd9h0CrHYFO5GLA.s['6']++;
                    return Y.ClassNameManager.getClassName.apply(Y.ClassNameManager, [NAME].concat(
                        Y.Array(arguments, 0, true)));
                }
            }, render: function () {
                __cov_te8sm58xd9h0CrHYFO5GLA.f['3']++;
                __cov_te8sm58xd9h0CrHYFO5GLA.s['7']++;
                var tfoot = (__cov_te8sm58xd9h0CrHYFO5GLA.b['4'][0]++, this.tfootNode)
                            || (__cov_te8sm58xd9h0CrHYFO5GLA.b['4'][1]++, this.tfootNode =
                        this._createTFootNode());
                __cov_te8sm58xd9h0CrHYFO5GLA.s['8']++;
                if ((__cov_te8sm58xd9h0CrHYFO5GLA.b['6'][0]++, this.host)
                    && (__cov_te8sm58xd9h0CrHYFO5GLA.b['6'][1]++, this.host._theadNode)) {
                    __cov_te8sm58xd9h0CrHYFO5GLA.b['5'][0]++;
                    __cov_te8sm58xd9h0CrHYFO5GLA.s['9']++;
                    this.host._theadNode.insert(tfoot, 'after');
                } else {
                    __cov_te8sm58xd9h0CrHYFO5GLA.b['5'][1]++;
                }
                __cov_te8sm58xd9h0CrHYFO5GLA.s['10']++;
                return this;
            }, _createTFootNode: function () {
                __cov_te8sm58xd9h0CrHYFO5GLA.f['4']++;
                __cov_te8sm58xd9h0CrHYFO5GLA.s['11']++;
                return Y.Node.create(Y.Lang.sub(this.TFOOT_TEMPLATE, {className: this.getClassName('foot')}));
            }, initializer: function (config) {
                __cov_te8sm58xd9h0CrHYFO5GLA.f['5']++;
                __cov_te8sm58xd9h0CrHYFO5GLA.s['12']++;
                this.host =
                    (__cov_te8sm58xd9h0CrHYFO5GLA.b['7'][0]++, config)
                    && (__cov_te8sm58xd9h0CrHYFO5GLA.b['7'][1]++, config.host);
            }
        });
}, 'patched-v3.18.1', {'requires': ['datatable-core', 'view']});

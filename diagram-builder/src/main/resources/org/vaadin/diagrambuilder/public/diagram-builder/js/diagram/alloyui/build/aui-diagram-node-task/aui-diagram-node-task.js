YUI.add('aui-diagram-node-task', function (A, NAME) {

/**
 * A base class for `A.DiagramNodeTask`.
 *
 * @class A.DiagramNodeTask
 * @extends A.DiagramNodeState
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
var DiagramNodeTask = A.Component.create({

    /**
     * Static property provides a string to identify the class.
     *
     * @property NAME
     * @type String
     * @static
     */
    NAME: 'diagram-node',

    /**
     * Static property used to define the default attribute
     * configuration for the `A.DiagramNodeTask`.
     *
     * @property ATTRS
     * @type Object
     * @static
     */
    ATTRS: {

        /**
         * The height of the node.
         *
         * @attribute height
         * @default 70
         * @type Number
         */
        height: {
            value: 70
        },

        /**
         * The type of the node.
         *
         * @attribute type
         * @default 'task'
         * @type String
         */
        type: {
            value: 'task'
        },

        /**
         * The width of the node.
         *
         * @attribute width
         * @default 70
         * @type Number
         */
        width: {
            value: 70
        }
    },

    /**
     * Static property used to define which component it extends.
     *
     * @property EXTENDS
     * @type String
     * @static
     */
    EXTENDS: A.DiagramNodeState,

    prototype: {
        hotPoints: A.DiagramNode.SQUARE_POINTS,

        /**
         * Renders the shape boundary.
         *
         * @method renderShapeBoundary
         */
        renderShapeBoundary: function() {
            var instance = this;

            instance.boundary = instance.get('graphic').addShape(
                instance.get('shapeBoundary')
            );

            return instance.boundary;
        },

        /**
         * Gets the shape boundary definitions.
         *
         * @method _valueShapeBoundary
         * @protected
         * @return {Object}
         */
        _valueShapeBoundary: function() {
            var height = this._getAttr('height');
            var width = this._getAttr('width');

            this.hotPoints = this._calculateRectangleHotPoints(width, height);

            return {
                height: height,
                width: width,
                type: 'rect',
                pointerEvents: (this._getAttr('allowsLinking') === false)? 'none' : 'visiblePainted',
                stroke: {
                    opacity: 0
                }
            };
        }
    }
});

A.DiagramNodeTask = DiagramNodeTask;


}, '3.4.0', {"requires": ["aui-diagram-node-state"]});
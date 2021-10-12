const assert = require('assert');
const { isFunction } = require('util');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');

describe('Decorator', function(){
    let decorator;

    this.beforeEach(function(){
        decorator = new Decorator();
    });
    it('should have an empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });
    it('be able to add a tin of paint to the paint stock', function(){
        const paint = new Paint(7);
        decorator.addPaintToStock('Paint')
        const actual = decorator.paintStock.length;
        assert.deepStrictEqual(actual, []);
    });


});
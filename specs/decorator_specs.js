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
        assert.deepStrictEqual(actual, 1);
    });
    it('be able to calculate total litres paint it has in stock', function(){
        const paint1 = new Paint(7);
        const paint2 = new Paint(5);
        decorator.addPaintToStock(paint1)
        decorator.addPaintToStock(paint2)
        const actual = decorator.litresOfPaintInStock();
        assert.StrictEqual(actual, 12);
    });

});
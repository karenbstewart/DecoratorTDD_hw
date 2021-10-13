const assert = require('assert');
const { isFunction } = require('util');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

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
        const paint3 = new Paint(10);
        decorator.addPaintToStock(paint1);
        decorator.addPaintToStock(paint2);
        decorator.addPaintToStock(paint3);
        const actual = decorator.litresOfPaintInStock();
        assert.strictEqual(actual, 22);
    });
    it('be able to calculate whether is has enough paint to paint a room', function(){
        const paint1 = new Paint(17);
        const paint2 = new Paint(15);
        decorator.addPaintToStock(paint1);
        decorator.addPaintToStock(paint2);
        room1 = new Room(21, true, true );
        const actual = decorator.hasEnoughPaint(room1);
        assert.strictEqual(actual, false);
    });
    it('be able to paint room if has enough paint in stock', function(){
        const paint1 = new Paint(27);
        const paint2 = new Paint(15);
        decorator.addPaintToStock(paint1);
        decorator.addPaintToStock(paint2);
        room1 = new Room(21, true, true );
        const actual = decorator.canRoomBePainted(room1);
        assert.strictEqual(actual, true);
    });

});
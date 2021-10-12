const assert = require('assert');
const { isFunction } = require('util');
const Paint = require('../paint.js');

describe('Paint', function(){
    let paint;

    beforeEach(function(){
        paint = new Paint(5)
    });

    it('should have a number of litres of paint', function(){
        const actual = paint.numOfLitres;
        assert.strictEqual(actual, 5)
    });
    it('should be able to check if it is empty', function(){
        const actual = paint.isTinEmpty(); 
        assert.strictEqual(actual, false);
    });
    it('should be able to empty itself of paint', function(){
        const actual = paint.emptyTin(); 
        assert.strictEqual(actual, 0);



});



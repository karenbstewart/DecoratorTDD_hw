const assert = require('assert');
const { isFunction } = require('util');
const Paint = require('../paint.js');

describe('Paint', function(){
    let paint;

    beforeEach(function(){
        paint = new Paint(5)
    });

    it('have a number of litres of paint', function(){
        const actual = paint.numOfLitres;
        assert.strictEqual(actual, 5)
    });




});



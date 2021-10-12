const assert = require('assert');
const { isFunction } = require('util');
const Decorator = require('../decorator.js');

describe('Decorator', function(){
    let decorator;

    this.beforeEach(function(){
        decorator = new Decorator();
    });
    it('should have an empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });


});
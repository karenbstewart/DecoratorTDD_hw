const assert = require('assert');
const { isFunction } = require('util');
const Room = require('../room.js');

describe('Room', function(){
    let room;

    this.beforeEach(function(){
        room = new Room(120, true, true )
    });
    it('should have an area in sq mtrs', function(){
        const actual = room.area;
        assert.strictEqual(actual, 120);
    });
    it('should start not painted', function(){
        const actual = room.notPainted;
        assert.strictEqual(actual, true);
    });
    it('should be able to be painted', function(){
        const actual = room.ableToPaint;
        assert.strictEqual(actual, true);
    });



});
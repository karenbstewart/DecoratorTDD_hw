// const Paint = require('/paint.js');

const { RawTextHelpFormatter } = require("argparse");

const Decorator = function(){
    this.paintStock = [];
};

Decorator.prototype.addPaintToStock = function(paint){
    this.paintStock.push(paint);
};
Decorator.prototype.litresOfPaintInStock = function(){
    let totalPaint = 0;
    for (let i = 0; i < this.paintStock.length; i++){
        currentPaint = this.paintStock[i];
        litres = currentPaint.numOfLitres;
        totalPaint += litres;
    };
    return totalPaint;
};

Decorator.prototype.hasEnoughPaint = function(room){
    let paintAmount = this.litresOfPaintInStock();
    let roomArea = room.area;
    let result;
    if ( roomArea >= paintAmount){
        result = true;
    }else{
        result = false;
    }
    return result;
};





module.exports = Decorator;
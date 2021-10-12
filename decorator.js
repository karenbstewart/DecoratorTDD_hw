const Decorator = function(){
    this.paintStock = [];
};

Decorator.prototype.addPaintToStock = function(paint){
    this.paintStock.push(paint);
}



module.exports = Decorator;
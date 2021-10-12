const Paint = function(numOfLitres){
    this.numOfLitres = numOfLitres;
};

Paint.prototype.isTinEmpty = function(){
    let result;
    if (this.numOfLitres === 0){
        result = true;
    }else{
        result = false;
    }
    return result;
};
Paint.prototype.emptyTin = function(){
    return this.numOfLitres = 0;
};


module.exports = Paint;
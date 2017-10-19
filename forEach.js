var array = [11,22,33,44,55];
array.forEach(function (value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
});

//底层
function  Log(value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
}

for(var i = 0; i < array.length;i++ ){
    Log(array[i],i,array);
}

//实现
//添加原型
Array.prototype.myforEach = function (callback,thisArg) {
    if(typeof callback !== "function"){
        throw new TypeError(callback + 'is a not function')
    }
    for(var i = 0;i < this.length ; i++){
        //判断数组下标
        if (Object.prototype.hasOwnProperty.call(this,i)){
            callback(this[i],i,this)
        }
        callback(this[i], i , this);
    }

}
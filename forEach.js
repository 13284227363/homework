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
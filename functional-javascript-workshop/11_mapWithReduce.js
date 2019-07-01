module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(mappedArr, current, index, array){
        mappedArr[index] = fn(current);
        return mappedArr
    },[]);
}

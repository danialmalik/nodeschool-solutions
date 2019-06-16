function reduce(arr, fn, initial) {
 return (function reduceStep(index, prevValue){
   if (index >= arr.length) return prevValue;

   return reduceStep(index+1, fn(prevValue, arr[index], index, arr));
  })(0, initial);

}

module.exports = reduce

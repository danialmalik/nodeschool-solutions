let inputInt = parseInt(process.argv[2]);
let ui32Arr = new Uint32Array(1);
ui32Arr[0] = inputInt;
let ui16Arr = new Uint16Array(ui32Arr.buffer);
console.log(JSON.stringify(ui16Arr));

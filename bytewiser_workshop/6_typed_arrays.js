/** Generic solution */

// var buffers = [];
// process.stdin.on('readable', function () {
//     var chunk = process.stdin.read();
//     if (chunk !== null) {
//         buffers.push(chunk);
//     }
// });
// process.stdin.on('end', function () {
//     for (let buffer of buffers) {
//         let typedArray = new Uint8Array(buffer);
//         console.log(JSON.stringify(typedArray));
//     }
// });

/** official solution */
process.stdin.once('data', function (buff) {
    var ui8 = new Uint8Array(buff)
    console.log(JSON.stringify(ui8))
})

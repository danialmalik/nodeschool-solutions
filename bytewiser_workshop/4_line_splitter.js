
const fs = require('fs');

const filepath = process.argv[2];
const NEWLINE = '\n'.charCodeAt(0);

fs.readFile(filepath, function (err, buf) {
    if (err) {
        console.error(err);
        return;
    }
    for (var prev = 0, curr = 0; curr < buf.length; ++curr) {
        if (buf[curr] === NEWLINE) {
            console.log(new Buffer(buf.slice(prev, curr)));
            prev = curr + 1;
        }
    }
    console.log(new Buffer(buf.slice(prev, buf.length)));
});

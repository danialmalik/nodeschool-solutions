const DOT_CODE = 46;

process.stdin.on('data', function (buf) {
    for (var i = 0; i < buf.length; ++i) {
      if (buf[i] === DOT_CODE) {
        buf.write("!", i);
      }
    }
    console.log(buf);
  });

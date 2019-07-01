function repeat(operation, num) {
    setTimeout(function(){
        if (num <= 0) return;
        operation();
        repeat(operation, --num);
    })
}

module.exports = repeat

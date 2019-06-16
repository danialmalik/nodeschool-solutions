function duckCount() {
    let count = 0;
    [].forEach.call(arguments, element => {
        if (Object.hasOwnProperty.call(element, 'quack')){
            count++;
        }
    });
    return count;
}

module.exports = duckCount

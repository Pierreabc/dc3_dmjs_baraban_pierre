let array = [9, 13, 1, 26, 90, 22, 597, 372]
const lepluslong = (array) => {
    var long = array[0];

    for (var i = 0; i < array.length; i++) {
        if (long < array[i] ) {
            long = array[i];
        }
    }
    return long
}
console.log(lepluslong(array))

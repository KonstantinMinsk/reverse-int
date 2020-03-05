module.exports = function reverse (n) {
    
    if (n<0) {
        n = -1*n
    }

    let arr = String(n).split("").reverse().join("");

    return Number(arr)
}

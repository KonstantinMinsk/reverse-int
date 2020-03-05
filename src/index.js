module.exports = function reverse (n) {
    
    if (n<0) {
        n = -1*n
    }

    let arr = String(n).split("").reverse().join("");

    return Number(arr)
 /*
    if(res%2==0) {
        res = res*(-1);
        return res;
    } else {
        return res;
    }
        */
}

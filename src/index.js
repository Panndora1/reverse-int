module.exports = function reverse (n) {
  let str = '' + n;

    if (str[0] == '-') {
        str = str.slice(1, str.length);
    }
  
    str = str.split('').reverse().join('');
    return Number(str)
}

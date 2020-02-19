module.exports = function reverse (n) {
    return Number(String(n).split('').filter(a => a !== '-').reverse().join(''));
}

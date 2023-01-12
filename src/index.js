module.exports = function reverse (n) {
  return +n.toString().split('').reverse().join('').replace(/[\D]+/g, '');
}

console.log(module.exports(-1234));

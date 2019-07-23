
// if divisible by 3 it prints fizz
// if divisible by 5 it prints buzz
// if both prints both

const fizzBuzz = (num, Nums, Strs) => {
  let returnArr = [];
  
  for (let i = 1; i <= num; i++ ) {
    let output = '';
    for (let y = 0; y < Nums.length; y++) {
      if (i % Nums[y] === 0) {
        output += Strs[y];
      }
    }
    if (output === '') {
      returnArr.push(i);
    } else {
      returnArr.push (output);
    }
  }
    return returnArr;
}

console.log (fizzBuzz(100, [ 3, 5, 7, 9, 13], ['fizz', 'buzz','foo', 'bar','woof']));
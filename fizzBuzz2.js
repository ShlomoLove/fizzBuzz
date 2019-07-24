// a retake on fizzBuzz
// conditions consider each digit of the number;
// all elements of the output array are strings ie. 13 === 1fizz;

const fizzBuzz = (num, Nums, Strs) => {
  let returnArr = [];
  let checkObj = {};
  // create an object for checking the numeric values. Number: Strings are Key: Value pairs
  for (let x = 0; x < Nums.length; x++) {
    let checkObjStr = Nums[x].toString();
    checkObj[checkObjStr] = Strs[x];
  }
  // the outer loop will loop through and iterate up for the number parameter
  for (let i = 1; i <= num; i++ ) {
    let checkStr = i.toString();
    let output = '';
    // inside the outer loop, loop through the number values to check if they match the value of the num.
    for (let y = 0; y < Nums.length; y++) {
      let numStr = Nums[y].toString();
      if (numStr === checkStr) {
        output += Strs[y];
      } 
      // the inner loop will then check digit values of larger numbers
      if (checkStr.length > numStr.length && checkStr.includes(numStr)) { 
        for (let x = 0; x < checkStr.length; x++) {
          if (checkObj[checkStr[x]]) {
            output += checkObj[checkStr[x]];
          } else {
            output += checkStr[x];
          }
        }
        // the break jumps out of the loop to prevent duplicate entries
        break;
      }
    }
    if ( output === '') {
      returnArr.push (i.toString())
    } else {
      returnArr.push (output);
    }
  }
  return returnArr;
}

console.log (fizzBuzz(100, [3, 5, 7], ['three', 'five', 'seven']));
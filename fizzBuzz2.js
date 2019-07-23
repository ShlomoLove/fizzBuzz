const fizzBuzz = (num, Nums, Strs) => {
  let returnArr = [];
  let checkObj = {};

  for (let x = 0; x < Nums.length; x++) {
    let checkObjStr = Nums[x].toString();
    checkObj[checkObjStr] = Strs[x];
  }
  
  for (let i = 1; i <= num; i++ ) {
    let checkStr = i.toString();
    let output = '';
    for (let y = 0; y < Nums.length; y++) {
      let numStr = Nums[y].toString();
      if (numStr === checkStr) {
        output += Strs[y];
      } 
      if (checkStr.length > numStr.length && checkStr.includes(numStr)) { 
        for (let x = 0; x < checkStr.length; x++) {
          if (checkObj[checkStr[x]]) {
            output += checkObj[checkStr[x]];
          } else {
            output += checkStr[x];
          }
        }
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
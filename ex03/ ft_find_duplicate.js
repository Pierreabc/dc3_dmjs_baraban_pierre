function Duplicates(array) {
    let values = {};
    for (let i = 0; i < array.length; i++) {
      if (values[array[i]]) {
        return true;
      }
      values[array[i]] = true;
    }
    return false;
  }
  
  let Chiffres = [1,2,3,4,5,6,7,8,9,9]
  console.log(Duplicates(Chiffres));
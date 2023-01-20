/*function getDnkCode(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] == 'A') {
        arr[i] = 'T';
       }
        else if(arr[i] == 'T'){
            arr[i] = 'A';
        }
        else if(arr[i] == 'C'){
            arr[i] = 'G';
        }
        else if(arr[i] == 'G'){
            arr[i] = 'C';
        }
    }
    return arr;
}
getDnkCode('ATTGC');*/
function getDnkCode(str) {
    let arr = str.split('');
    let newArray = [];

arr.forEach(n => {
          switch (true) {
               case n == 'A':
                    n = 'T';
                    break;
               case n == 'T':
                    n = 'A';
                    break;
               case n == 'C':
                    n = 'G';
                    break;
               case n == 'G':
                    n = 'C';
                    break;
          }

       newArray.push(n);
     });

return newArray;
}
getDnkCode('ATTGC')
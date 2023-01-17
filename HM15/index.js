function getShortestWord(str) {
   let arr = str.split(' ');
   let shortWord = arr[0];
   for (let i = 0; i < arr.length; i++) {
    if (shortWord.length > arr[i].length) {
        shortWord = arr[i];
    }
   }
   return shortWord.length;
   //return shortWord;
}
getShortestWord('bitcoin take over the world maybe who knows perhaps');
/*
"turns out random test cases are easier than writing out basic ones" --> 3

"lets talk about javascript the best language" --> 3

"i want to travel the world writing code one day" --> 1

"Lets all go on holiday somewhere very cold" --> 2
*/
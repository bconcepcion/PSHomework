/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1,num2) => {
    if(num1===num2){
        return('The numbers are equal.')
        
    }
    let largest;
    if(num1>num2){
        largest = num1
    }else{
        largest = num2
    }

return largest
  };
  
  maxOfThree(num1,num2,num3);
  let largest;
     if(num1===num2 && num1===num3){
         return('All numbers are equal')
     }

     if(num1 > num2 && num1 > num3){
         largest = num1
     }else if(num2 > num1 && num2 > num3){
         largest = num2
     }else if(num3 > num1 && num3 > num2){
         largest = num3
     }
 
//   3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//   */
  isCharacterAVowel = (string) => {
    string = string.toLowerCase();
    
    if(string == 'a' || string == 'e' || string == 'i' || string == 'o' || string == 'u'){
        return true
    }else{
        return false
    }
  };
  
  /*
  4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
  */
  
  sumArray = (array) => {
    let sum = 0;
     for(let i = 0; i < array.length; i ++){
        //  console.log(array[i])
        sum+=array[i]
     }
     

     return sum;
  };

   multiplyArray=(array)=>{
    let multiples = 1;
    for(let j = 0;i < array.length; j ++){
        multiples*=array[j]
    }

    return multiples 
}
  
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  argumentsCalled=()=>{
    let counter = 0;
    for(let i = 0; i <= arguments.length-1; i++){
        counter++

    }
    return counter
}

  /*
  6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  
  reverseString = (string) => {
    let strSplit = string.split('');

    let strArr = strSplit.reverse();
    let newStr = strArr.join("");

   return newStr
}

  
  /*
  7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
  */
  findLongestWord = (wordArr) => {
    let longest = '';

    for(let word of wordArr){
        if(word.length>longest.length){
            longest = word
        }


    }
    return longest.length;
  };
  
  /*
  8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (words) => {
    let longest = [];
    for(let word of words){
        if(word.length>i){
            longest.push(word)

        }
    }
    return longest;
  };
  
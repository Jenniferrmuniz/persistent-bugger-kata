function persistence(num) {
  
  let iterator = 0;
  
  
    function calculateAns(num){
    
  let str = num.toString();
  let numOfDigits = str.length;
  
  if(numOfDigits == 1){
    return iterator;
  }
  
 let ans = 1;
  
  for(let i=0; i<numOfDigits; i++){
    ans = ans * Number(str[i]);
  }
  
  iterator++;
  calculateAns(ans);
  
  return iterator;
    
  }
  
  
   return calculateAns(num);
}



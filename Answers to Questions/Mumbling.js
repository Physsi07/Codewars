function accum(s) {

  let k = 1;
  let chars = s.split('');
  let ans = chars[0].toUpperCase();
  
  for(let i = 1; i < chars.length; i++){
    let j = i;
    while(j !== 0){
      if(k === 1){
        ans += '-' + chars[i].toUpperCase();
        k--;
      }
        
      ans += chars[i].toLowerCase();
      j--;
    }
    k = 1;  
  }
  
  return ans;  
}

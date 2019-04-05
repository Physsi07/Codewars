function printerError(s) {
    // your code
    let goodAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    let badCharCount = 0;

    for(let i = 0; i < s.length; i++){
      if(!goodAlph.includes(s[i])){
        badCharCount++;
      }
    } 
    
    return (badCharCount + "/" + s.length);   
}

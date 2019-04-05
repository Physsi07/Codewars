function DNAStrand(dna){
  //your code here
  let newDNA = "";
  for(let el = 0; el < dna.length; el++){
    if(dna[el] === 'A') newDNA += 'T';
    if(dna[el] === 'T') newDNA += 'A';
    if(dna[el] === 'C') newDNA += 'G';
    if(dna[el] === 'G') newDNA += 'C';
  }
  
  return newDNA;
}

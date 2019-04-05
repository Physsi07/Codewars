function coinsToGetToTotal(total){
  let amountOfCoins = 0
  let coins = [4, 2, 1];
  let pointer = 0;
  let myTotal = 0;

  while(myTotal !== total){
    if(coins[pointer] <= (total - myTotal)){
      myTotal += coins[pointer];
      amountOfCoins++;
    } else {
      pointer++;
    }
  }

  return amountOfCoins;
}

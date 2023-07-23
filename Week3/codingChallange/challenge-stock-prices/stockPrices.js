function best(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
  
    return maxProfit;
  }s
  console.log(best([15, 10, 20, 22, 1, 9]))
  
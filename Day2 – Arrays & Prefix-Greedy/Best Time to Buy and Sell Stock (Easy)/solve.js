var maxProfit = function (prices) {
  let minBuyPrice = Number.MAX_VALUE;
  let maxSellProfit = 0;
  for (const price of prices) {
    if (price < minBuyPrice) {
      minBuyPrice = price;
    } else if (price - minBuyPrice > maxSellProfit) {
      maxSellProfit = price - minBuyPrice;
    }
  }
  return maxSellProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

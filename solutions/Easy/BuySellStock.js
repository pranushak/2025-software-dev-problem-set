/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let b = 0; // b is  a buy day
    let maxP = 0;
    for(let s = 1; s < prices.length; s++) { // s is a sell day
        if(prices[b] < prices[s]) {
            let profit = prices[s] - prices[b];
            maxP = Math.max(profit,maxP);
        } else {
            b = s;
        }

    }
    return maxP;
};
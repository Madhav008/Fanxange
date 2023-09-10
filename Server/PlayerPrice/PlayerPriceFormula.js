

function calculatePlayerOldPrice() {
    return 50;
}

function PriceChangeFactor(MatchPoints, Performance_avg) {
    /* 
        MatchPoints = Total Points that are earned by the player in the single match
        Performance_avg = Average points of 30 matches
    */

    let price_differntial = 1 + 0.14 * ((MatchPoints - Performance_avg) / ((0.5 * MatchPoints) + Performance_avg));

    let price_change_factor = 0.005 + 1 / (2 - price_differntial);

    return price_change_factor;

}

function calculatePlayerPrice(MatchPoints, Performance_avg) {
    /* Price New = Price OLD  + Price Change Factor */

    let new_price = PriceChangeFactor(MatchPoints, Performance_avg) + Performance_avg;

    return new_price;
}

module.exports = { calculatePlayerPrice };

// console.log(calculatePlayerPrice(52.2,50))

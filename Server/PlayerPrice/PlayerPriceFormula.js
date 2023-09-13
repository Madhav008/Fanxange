

function PriceChangeFactor(MatchPoints, Performance_avg) {
    /* 
        MatchPoints = Total Points that are earned by the player in the single match
        Performance_avg = Average points of 30 matches
    */



    let price_differntial = 1 + 0.14 * ((MatchPoints - Performance_avg) / ((0.5 * MatchPoints) + Performance_avg));

    let price_change_factor = 0.005 + 1 / (2 - price_differntial);

    return price_change_factor;
}

function calculatePlayerPrice(MatchPoints, Performance_avg, oldPrice) {
    /* Price New = Price OLD  + Price Change Factor */

    if (MatchPoints == 0 && Performance_avg == 0) {
        return oldPrice;
    }
    let new_price = PriceChangeFactor(MatchPoints, Performance_avg) * oldPrice;

    return new_price;
}

module.exports = { calculatePlayerPrice };

// console.log(calculatePlayerPrice(59,-191,25))


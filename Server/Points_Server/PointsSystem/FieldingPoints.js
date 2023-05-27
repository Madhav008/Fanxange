function calculateCatchPoints(catches){
    return catches*4;
}

function calculateRunOutPoints(runout){
    return runout*4;
}

function calculateStumpingPoints(stuping){
    return stuping  * 4;
}

module.exports = {calculateCatchPoints,calculateRunOutPoints,calculateStumpingPoints}
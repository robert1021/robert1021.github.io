function changeAction(object) {
    // get input value
    const inputBoxValue = document.querySelector('#search-option-input').value.replaceAll(' ', '');
    const formActionElement = document.querySelector('#search-option-form');
    // iterate object keys to find match
    for (let key in object) {
        console.log(key);
        if (inputBoxValue === key.toLowerCase()) {
            // change action
            formActionElement.action = object[key];
            break;
        } 
    }
}

// obeject containing strategy/page url pairs
const strategyPages = {
    call: 'optionStrategies/subPages/longCall/longCall.html',
    put: 'optionStrategies/subPages/longPut/longPut.html',
    backSpreadWithCalls: 'optionStrategies/subPages/backSpreadWithCalls/backSpreadWithCalls.html',
    backSpreadWithPuts: 'optionStrategies/subPages/backSpreadWithPuts/backSpreadWithPuts.html',
    brokenWingButterflysWithPuts: 'optionStrategies/subPages/brokenWingButterflysWithPuts/brokenWingButterflysWithPuts.html',
    brokenWingButterflyWithCalls: 'optionStrategies/subPages/brokenWingButterflyWithCalls/brokenWingButterflyWithCalls.html',
    cashSecuredPuts: 'optionStrategies/subPages/cashSecuredPuts/cashSecuredPuts.html',
    christmasTreeButterflyWithCalls: 'optionStrategies/subPages/christmasTreeButterflyWithCalls/christmasTreeButterflyWithCalls.html',
    christmasTreeButterflyWithPuts: 'optionStrategies/subPages/christmasTreeButterflyWithPuts/christmasTreeButterflyWithPuts.html',
    collar: 'optionStrategies/subPages/collar/collar.html',
    coveredCall: 'optionStrategies/subPages/coveredCall/coveredCall.html',
    diagonalSpreadWithCalls: 'optionStrategies/subPages/diagonalSpreadWithCalls/diagonalSpreadWithCalls.html',
    diagonalSpreadWithPuts: 'optionStrategies/subPages/diagonalSpreadWithPuts/diagonalSpreadWithPuts.html',
    doubleDiagonalSpread: 'optionStrategies/subPages/doubleDiagonalSpread/doubleDiagonalSpread.html',
    frontSpreadWithCalls: 'optionStrategies/subPages/frontSpreadWithCalls/frontSpreadWithCalls.html',
    frontSpreadWithPuts: 'optionStrategies/subPages/frontSpreadWithPuts/frontSpreadWithPuts.html',
    inverseBrokenWingButterflyWithCalls: 'optionStrategies/subPages/inverseBrokenWingButterflyWithCalls/inverseBrokenWingButterflyWithCalls.html',
    ironButterfly: 'optionStrategies/subPages/ironButterfly/ironButterfly.html',
    ironCondor: 'optionStrategies/subPages/ironCondor/ironCondor.html',
    jadeLizard: 'optionStrategies/subPages/jadeLizard/jadeLizard.html',
    longButterflySpreadWithCalls: 'optionStrategies/subPages/longButterflySpreadWithCalls/longButterflySpreadWithCalls.html',
    longButterflySpreadWithPuts: 'optionStrategies/subPages/longButterflySpreadWithPuts/longButterflySpreadWithPuts.html',
    longCalendarSpreadWithCalls: 'optionStrategies/subPages/longCalendarSpreadWithCalls/longCalendarSpreadWithCalls.html',
    longCalendarSpreadWithPuts: 'optionStrategies/subPages/longCalendarSpreadWithPuts/longCalendarSpreadWithPuts.html',
    longCall: 'optionStrategies/subPages/longCall/longCall.html',
    longCallSpread: 'optionStrategies/subPages/longCallSpread/longCallSpread.html',
    longCondorSpreadWithCalls: 'optionStrategies/subPages/longCondorSpreadWithCalls/longCondorSpreadWithCalls.html',
    longCondorSpreadWithPuts: 'optionStrategies/subPages/longCondorSpreadWithPuts/longCondorSpreadWithPuts.html',
    longPut: 'optionStrategies/subPages/longPut/longPut.html',
    longPutSpread: 'optionStrategies/subPages/longPutSpread/longPutSpread.html',
    longStraddle: 'optionStrategies/subPages/longStraddle/longStraddle.html',
    longStrangle: 'optionStrategies/subPages/longStrangle/longStrangle.html',
    pmcc: 'optionStrategies/subPages/pmcc/pmcc.html',
    poorManCoveredCall: 'optionStrategies/subPages/pmcc/pmcc.html',
    protectivePut: 'optionStrategies/subPages/protectivePut/protectivePut.html',
    shortCall: 'optionStrategies/subPages/shortCall/shortCall.html',
    shortCallSpread: 'optionStrategies/subPages/shortCallSpread/shortCallSpread.html',
    shortPut: 'optionStrategies/subPages/shortPut/shortPut.html',
    shortPutSpread: 'optionStrategies/subPages/shortPutSpread/shortPutSpread.html',
    shortStraddle: 'optionStrategies/subPages/shortStraddle/shortStraddle.html',
    shortStrangle: 'optionStrategies/subPages/shortStrangle/shortStrangle.html',
    syntheticLong: 'optionStrategies/subPages/syntheticLong/syntheticLong.html',
    syntheticShort: 'optionStrategies/subPages/syntheticShort/syntheticShort.html'
}

// add event listener to button
const searchButton = document.querySelector('#search-option-btn');
searchButton.addEventListener('click', function(){
    changeAction(strategyPages);
});


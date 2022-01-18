function changeAction(object) {
    // get input value
    const inputBoxValue = document.querySelector('#search-option-input').value.replace(' ', '');
    const formActionElement = document.querySelector('#search-option-form');
    // iterate object keys to find match
    for (let key in object) {
        if (inputBoxValue === key.toLocaleLowerCase()) {
            // change action
            formActionElement.action = object[key];
            break;
        } 
    }
}


// obeject containing strategy/page url pairs
const strategyPages = {
    call: '../optionStrategies/subPages/longCall/longCall.html',
    longCall: '../optionStrategies/subPages/longCall/longCall.html',
    put: '../optionStrategies/subPages/longPut/longPut.html',
    longPut:'../optionStrategies/subPages/longPut/longPut.html',
    coveredCall: '../optionStrategies/subPages/coveredCall/coveredCall.html'
}

// add event listener to button
const searchButton = document.querySelector('#search-option-btn');
searchButton.addEventListener('click', function(){
    changeAction(strategyPages);
});


function setFilterAplhabet(letter) {
    const btn = document.querySelector(`#${letter}`);
    btn.addEventListener('click', function () {
        const allBoxes = document.querySelectorAll('.box');
        for (let box of allBoxes) {
            const id = box.id;
            // determine if starts with specific letter
            if (id.indexOf(letter) === 0) {
                box.style.display = 'block';
                
            } else {
                box.style.display = 'none';
            }
            setMainTitle(letter);
        }
    });
}

function setMainTitle(letter) {
    const title = document.querySelector('#key-terms');
    const newTitle = `Key Terms - ${letter.toUpperCase()}`;
    title.textContent = newTitle;
}

// all button
const btnAll = document.querySelector('#all');
btnAll.addEventListener('click', function () {
    const allBoxes = document.querySelectorAll('.box');
    for (let box of allBoxes) {
        box.style.display = 'block';
    }
    setMainTitle('all');
});

// a-z buttons
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let char of alphabet) {
    setFilterAplhabet(char);
}



window.onload = () => countCharacters();

document.querySelector('#textarea-input').addEventListener('input', countCharacters);
document.querySelector('#max-paragraph-char-count').addEventListener('input', countCharacters);

function countCharacters() {
    // get paragraphs
    const textarea: HTMLSpanElement = document.querySelector('#textarea-input');
    let paragraphs = [];

    if (textarea) {
        paragraphs = textarea.innerText.split('\n').filter((item) => item !== '');
    }

    // get max paragraph character count
    const maxParagraphCharCountElement: HTMLInputElement = document.querySelector('#max-paragraph-char-count');
    let maxParagraphCharCount = 256;

    if (maxParagraphCharCountElement) {
        maxParagraphCharCount = parseInt(maxParagraphCharCountElement.value);
    }

    // reset list items
    const outputList: HTMLOListElement = document.querySelector('#output-list');
    outputList.innerHTML = '';
    
    // render output list
    if (paragraphs.length === 0) {
        const listItem = document.createElement('li');
        listItem.classList.add('no-text-found');
        listItem.innerHTML = 'No input text found <span class="emoji">🤷🏻</span>!';
        outputList.appendChild(listItem);
    } else {
        paragraphs.forEach((paragraph) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="emoji">${(paragraph.length <= maxParagraphCharCount) ? '✅' : '❌'}</span> ${paragraph.length.toString()}`;
            outputList.appendChild(listItem);
        });
    }
}

export {};

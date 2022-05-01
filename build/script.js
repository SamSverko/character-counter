window.onload = function () { return countCharacters(); };
document.querySelector('#textarea-input').addEventListener('input', countCharacters);
document.querySelector('#max-paragraph-char-count').addEventListener('input', countCharacters);
function countCharacters() {
    // get paragraphs
    var textarea = document.querySelector('#textarea-input');
    var paragraphs = [];
    if (textarea) {
        paragraphs = textarea.innerText.split('\n').filter(function (item) { return item !== ''; });
    }
    // get max paragraph character count
    var maxParagraphCharCountElement = document.querySelector('#max-paragraph-char-count');
    var maxParagraphCharCount = 256;
    if (maxParagraphCharCountElement) {
        maxParagraphCharCount = parseInt(maxParagraphCharCountElement.value);
    }
    // reset list items
    var outputList = document.querySelector('#output-list');
    outputList.innerHTML = '';
    // render output list
    if (paragraphs.length === 0) {
        var listItem = document.createElement('li');
        listItem.classList.add('no-text-found');
        listItem.innerHTML = 'No input text found <span class="emoji">🤷🏻</span>!';
        outputList.appendChild(listItem);
    }
    else {
        paragraphs.forEach(function (paragraph) {
            var listItem = document.createElement('li');
            listItem.innerHTML = "<span class=\"emoji\">".concat((paragraph.length <= maxParagraphCharCount) ? '✅' : '❌', "</span> ").concat(paragraph.length.toString());
            outputList.appendChild(listItem);
        });
    }
}

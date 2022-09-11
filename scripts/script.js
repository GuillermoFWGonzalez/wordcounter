const inputTextArea = document.getElementById('inputTextArea');

function findCode(){
    var words = inputTextArea.value.replace(/\n/g, ' ').split(' ');
    words = words.filter(e=>e);

    document.getElementById('displayInfo').innerHTML = words.length + ' Words & ' + inputTextArea.value.replace(/\n/g, '').length + ' Characters';
}

inputTextArea.addEventListener('keyup', findCode);

function lancerDe(buttonId, url) {
    let diceButton = document.getElementById(buttonId);

    diceButton.classList.add('rotation');

    setTimeout(function () {
        diceButton.classList.remove('rotation');

        window.location.href = url;
    }, 1100);
}
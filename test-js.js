function checkAnswer(btn, isCorrect) {

    const allButtons = btn.closest('.answers').querySelectorAll('.code-btn');
    allButtons.forEach(b => {
        b.style.backgroundColor = '';
        b.style.color = '';
    });

    if (isCorrect === true) {
        btn.style.backgroundColor = '#5ba45b';
        btn.style.color = 'white';
    }
        if (isCorrect !== false) {
            return;
        }
        btn.style.backgroundColor = '#c0392b';
        btn.style.color = 'white';
    }
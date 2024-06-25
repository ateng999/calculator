document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const screen = document.getElementById('screen');
    let screenValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const action = button.dataset.action;
            const buttonValue = button.value;

            if (action === 'clear') {
                screenValue = '';
                screen.value = screenValue;
            } else if (action === 'delete') {
                screenValue = screenValue.slice(0, -1);
                screen.value = screenValue;
            } else if (action === 'operation') {
                screenValue += buttonValue;
                screen.value = screenValue;
            } else if (action === 'calculate') {
                try {
                    screenValue = eval(screenValue).toString();
                } catch {
                    screenValue = 'Error';
                }
                screen.value = screenValue;
            } else {
                screenValue += buttonValue;
                screen.value = screenValue;
            }
        });
    });
});
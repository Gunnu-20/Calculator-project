const input = document.getElementById('input');
const buttons = document.querySelectorAll('#btn, #zero');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === 'AC') {
            input.value = '';
        } else if (value === 'DEL') {
            input.value = input.value.slice(0, -1);
        } else if (value === '=') {
            try {
                // Replace % with /100 for percentage calculation
                let expression = input.value.replace(/%/g, '/100');
                input.value = eval(expression);
            } catch {
                input.value = 'Error';
            }
        } else {
            input.value += value;
        }
    });
});
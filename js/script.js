const itemInput = document.getElementById('item-input');
const heading = document.querySelector('h2');
const priorityInput = document.getElementById('select-input');
const select = document.querySelector('.select-title')
const checkbox = document.getElementById('checkbox');
const checkTitle = document.querySelector('.check-title')


function onInput(e) {
    heading.textContent = e.target.value;
}

function onFocus() {
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '3px';
    itemInput.style.outlineColor = '#84a59d';
}

function onBlur() {
    itemInput.style.outlineStyle = 'none';
}

function onSelect(e) {
    select.textContent = e.target.value;
}

function onChecked(e) {
    const isChecked = e.target.checked;
    checkTitle.textContent = isChecked ? 'Checked' : 'Not Checked';
}


itemInput.addEventListener('input', onInput);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
priorityInput.addEventListener('input', onSelect)
checkbox.addEventListener('input', onChecked)

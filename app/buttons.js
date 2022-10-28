const buttons = [
    {
        key: 'rocket',
        name: 'Ракета'
    },
    {
        key: 'drone',
        name: 'Безпілотник'
    },
    {
        key: 'plane',
        name: 'Літак'
    },
    {
        key: 'helicopter',
        name: 'Гелікоптер'
    },
    {
        key: 'explosion',
        name: 'Вибух'
    },
    {
        key: 'test',
        name: 'Тест'
    }
];

const createButton = (button) => {
    const newButton = document.createElement('button');
    newButton.className = 'selection-buttons__button';
    newButton.innerHTML = button.name;
    newButton.onclick = function() {
        alert(button.key);
    };
    return newButton;
}

export const initButtons = () => {
    const selectionButtonsWrap = document.querySelector('.selection-buttons-wrap');
    buttons.forEach(button => {
        selectionButtonsWrap.appendChild(createButton(button));
    })
}
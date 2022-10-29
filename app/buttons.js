import { initCompass } from "./compas";

const buttons = [
    {
        key: 'rocket',
        name: 'Ракета',
        icon: 'fa-solid fa-rocket'
    },
    {
        key: 'drone',
        name: 'Безпілотник',
        icon: 'fa-solid fa-shuttle-space'
    },
    {
        key: 'plane',
        name: 'Літак',
        icon: 'fa-solid fa-jet-fighter-up'
    },
    {
        key: 'helicopter',
        name: 'Гелікоптер',
        icon: 'fa-solid fa-helicopter'
    },
    {
        key: 'explosion',
        name: 'Вибух',
        icon: 'fa-solid fa-explosion'
    },
    {
        key: 'test',
        name: 'Тест',
        icon: 'fa-solid fa-wrench'
    }
];

const createButton = (button) => {
    const newButton = document.createElement('button');
    newButton.className = 'selection-buttons__button';
    const icon = document.createElement('i');
    icon.className = button?.icon;
    const label = document.createElement('span');
    label.innerHTML = button.name;
    newButton.appendChild(icon);
    newButton.appendChild(label);
    
    newButton.onclick = function() {
        const selectedButton = document.querySelector('.selection-buttons__button--selected');
        if(selectedButton) {
            selectedButton.className = 'selection-buttons__button';
        }
        initCompass();
        const selectedIcon = document.querySelector('.selected-icon');
        selectedIcon.innerHTML = icon.outerHTML;
        newButton.className = 'selection-buttons__button selection-buttons__button--selected'
    };
    return newButton;
}

export const initButtons = () => {
    const selectionButtonsWrap = document.querySelector('.selection-buttons-wrap');
    buttons.forEach(button => {
        selectionButtonsWrap.appendChild(createButton(button));
    })
}
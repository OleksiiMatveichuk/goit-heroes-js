const orderInput = document.querySelector('[name="order"]');
const orderListBox = document.querySelector('.listbox');
let isVisible = false;

// виводим options у массив

const options = Array.from(orderInput.children);
options.forEach(option => {
    const value = option.value;
    const textContent = option.textContent;
    createButton(value, textContent);
});


// показуємо і приховуємо дропдаун на click по іnput

orderInput.addEventListener('click', (event) => {
    if (isVisible) {
        closeDropDown();
    } else {
        orderListBox.classList.remove('visually-hidden');
        isVisible = true;
    }
});

// функція яка створює варіанти елементів дропдауну

function createButton(value, text) {
    const btn = document.createElement('button');
    btn.classList.add('listbox-item');
    btn.dataset.value = value;
    btn.textContent = text;
    btn.type = 'button';
    btn.addEventListener('click', () => {
        orderInput.value = value;
        closeDropDown();
    }); 
    orderListBox.append(btn);
}

// функція яка приховує дропдаун на click по іnput

function closeDropDown() {
    orderListBox.classList.add('visually-hidden');
    isVisible = false;
}

//  приховуємо дропдаун на click по document

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!orderListBox.contains(target) && !orderInput.contains(target)) {
        closeDropDown();
    }
});


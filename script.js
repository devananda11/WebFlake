const storedWishes = JSON.parse(localStorage.getItem('wishes')) || [];
const christmasTreeContainer = document.getElementById('christmas-tree-container');
const title = document.getElementById('title');

storedWishes.forEach((wish) => {
    addWishToTree(wish);
});

function addWish() {
    const nameInput = document.getElementById('name-input');
    const wishInput = document.getElementById('wish-input');

    if (nameInput.value.trim() !== '' && wishInput.value.trim() !== '') {
        const wish = {
            name: nameInput.value,
            message: wishInput.value,
            position: {
                bottom: 10 + Math.random() * 10 + '%',
                left: Math.random() * 100 + '%'
            }
        };

        const storedWishes = JSON.parse(localStorage.getItem('wishes')) || [];
        storedWishes.push(wish);
        localStorage.setItem('wishes', JSON.stringify(storedWishes));

        addWishToTree(wish);

        nameInput.value = '';
        wishInput.value = '';
    } else {
        alert('Please enter your name and wish.');
    }
}

function resetTree() {
    localStorage.removeItem('wishes');

    const wishes = document.querySelectorAll('.wish');
    wishes.forEach(wish => wish.remove());

    const giftBoxes = document.querySelectorAll('.gift-box');
    giftBoxes.forEach(giftBox => giftBox.remove());
}

function addWishToTree(wish) {
    const wishElement = document.createElement('div');
    wishElement.className = 'wish';
    wishElement.style.bottom = wish.position.bottom;
    wishElement.style.left = wish.position.left;
    christmasTreeContainer.appendChild(wishElement);

    const messageContainer = document.createElement('div');
    messageContainer.className = 'wish-message';
    messageContainer.innerHTML = `<p>${wish.name}: "${wish.message}"</p>`;
    wishElement.appendChild(messageContainer);

    const newGiftBox = document.createElement('div');
    newGiftBox.className = 'gift-box';
    newGiftBox.style.bottom = wish.position.bottom;
    newGiftBox.style.left = wish.position.left;
    christmasTreeContainer.appendChild(newGiftBox);

    const giftImage = document.createElement('img');
    giftImage.src = 'gift-box.png';
    newGiftBox.appendChild(giftImage);

    const clickTag = document.createElement('div');
    clickTag.className = 'click-tag';
    clickTag.innerHTML = 'Click to see message';
    newGiftBox.appendChild(clickTag);

    newGiftBox.addEventListener('click', function () {
        wishElement.style.display = wishElement.style.display === 'none' ? 'block' : 'none';
    });

    newGiftBox.addEventListener('mouseover', function () {
        clickTag.style.display = 'block';
    });

    newGiftBox.addEventListener('mouseout', function () {
        clickTag.style.display = 'none';
    });
}

const christmasTree = document.getElementById('christmas-tree');
const sleigh = document.getElementById('sleigh');

christmasTree.addEventListener('click', function () {
   
    sleigh.style.animation = 'flyAcross 10s linear';
   
    sleigh.addEventListener('animationend', function () {
        sleigh.style.animation = '';
    });
});




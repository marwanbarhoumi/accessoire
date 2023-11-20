let selectedAccessories = [];

function buyAccessory(accessoryName) {
    const accessory = document.querySelector(`.card[data-name="${accessoryName}"]`);
    
    // Toggle the selected state
    if (selectedAccessories.includes(accessoryName)) {
        selectedAccessories = selectedAccessories.filter(item => item !== accessoryName);
        accessory.classList.remove('selected');
    } else {
        selectedAccessories.push(accessoryName);
        accessory.classList.add('selected');
    }

    // Calculate the total price
    const totalPrice = calculateTotalPrice();
    
    // Update the total price display
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function calculateTotalPrice() {
    let totalPrice = 0;

    // Sum the prices of selected accessories
    for (const accessoryName of selectedAccessories) {
        const accessory = document.querySelector(`.card[data-name="${accessoryName}"]`);
        const price = parseFloat(accessory.dataset.price);
        totalPrice += price;
    }

    return totalPrice;
}

function searchAccessories() {
    // Récupérer la valeur de la zone de recherche
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    // Filtrer les accessoires en fonction du terme de recherche
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardName = card.dataset.name.toLowerCase();
        const cardDescription = card.querySelector('p').textContent.toLowerCase();

        // Afficher ou masquer la carte en fonction du terme de recherche
        if (cardName.includes(searchTerm) || cardDescription.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
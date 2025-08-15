document.addEventListener('DOMContentLoaded', () => {
    const modelSelect = document.getElementById('model-select');
    const colorSelect = document.getElementById('color-select');
    const exhaustSelect = document.getElementById('exhaust-select');
    const bikeImage = document.getElementById('bike-image');
    const priceDisplay = document.getElementById('price-display');

    const prices = {
        maverick: 17999,
        apex: 21499,
        outlander: 19999,
        performanceExhaust: 1500
    };

    window.updateBikeImage = () => {
        const selectedModel = modelSelect.value;
        const selectedColor = colorSelect.value;
        const selectedExhaust = exhaustSelect.value;

        // Update the image source based on selection
        // Note: You must have images in the /images folder for all combinations
        bikeImage.src = `images/${selectedModel}-${selectedColor}.jpg`;

        // Calculate and update the price
        let newPrice = prices[selectedModel];
        if (selectedExhaust === 'performance') {
            newPrice += prices.performanceExhaust;
        }

        priceDisplay.textContent = `$${newPrice.toLocaleString()}`;
    };

    // Initialize with default values
    updateBikeImage();
});
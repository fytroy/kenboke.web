document.addEventListener('DOMContentLoaded', () => {

    // --- Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Data Source for all Models ---
    const modelsData = {
        "KBT F51 (Electric)": {
            type: "Electric",
            price: "KSh 143,000",
            image: "../assets/images/KBT-F51.jpg",
            details: {
                topSpeed: "≥ 60 km/h",
                engineType: "2000W Motor",
                dimensions: "1820 x 735 x 1090 mm",
                netWeight: "N/A"
            }
        },
        "KBT F52 (Electric)": {
            type: "Electric",
            price: "KSh 133,000",
            image: "../assets/images/KBT-F52.jpg",
            details: {
                topSpeed: "≥ 50 km/h",
                engineType: "1200W Motor",
                dimensions: "1710 x 730 x 1155 mm",
                netWeight: "N/A"
            }
        },
        "KBS3-2 (Electric)": {
            type: "Electric",
            price: "KSh 123,000",
            image: "../assets/images/KBS3-2.jpg",
            details: {
                topSpeed: "60 km/h",
                engineType: "1200W Motor",
                dimensions: "1870 x 680 x 1120 mm",
                netWeight: "N/A"
            }
        },
        "KBT 73 (Electric)": {
            type: "Electric",
            price: "KSh 163,000",
            image: "../assets/images/KBT-F73.jpg",
            details: {
                topSpeed: "≥ 65 km/h",
                engineType: "2000W Motor",
                dimensions: "1760 x 690 x 1114 mm",
                netWeight: "N/A"
            }
        },
        "KBT JS31 (Electric)": {
            type: "Electric",
            price: "KSh 63,000",
            image: "../assets/images/KBT-JS31.jpg",
            details: {
                topSpeed: "≥ 32 km/h",
                engineType: "500W Motor",
                dimensions: "1400 x 630 x 1020 mm",
                netWeight: "N/A"
            }
        },
        "KB200ZH-20D": {
            type: "Petrol",
            price: "KSh 360,000",
            image: "../assets/images/KB200ZH-20D.jpg",
            details: {
                topSpeed: "N/A",
                engineType: "Single cylinder / 4 stroke / Water cool",
                dimensions: "3550 x 1500 x 1850 mm",
                netWeight: "520 kg"
            }
        },
        "KB200ZH-20B": {
            type: "Petrol",
            price: "KSh 430,000",
            image: "../assets/images/KB200ZH-20B.jpg",
            details: {
                topSpeed: "N/A",
                engineType: "Single cylinder / 4 stroke / Air cool",
                dimensions: "3700 x 1400 x 1850 mm",
                netWeight: "440 kg"
            }
        },
        "KB110": {
            type: "Petrol",
            price: "KSh 138,000",
            image: "../assets/images/KB110.jpg",
            details: {
                topSpeed: "N/A",
                engineType: "Single cylinder / 4 stroke / Air cool",
                dimensions: "1890 x 685 x 1080 mm",
                netWeight: "90 kg"
            }
        },
        "KB100": {
            type: "Petrol",
            price: "KSh 135,000",
            image: "../assets/images/KB100.jpg",
            details: {
                topSpeed: "N/A",
                engineType: "Single cylinder / 4 stroke / Air cool",
                dimensions: "1870 x 850 x 1230 mm",
                netWeight: "100 kg"
            }
        },
        "KB125-CG": {
            type: "Petrol",
            price: "KSh 139,000",
            image: "../assets/images/KB125-CG.jpg",
            details: {
                topSpeed: "N/A",
                engineType: "Single cylinder / 4 stroke / Air cool",
                dimensions: "1920 x 768 x 1036 mm",
                netWeight: "99 kg"
            }
        }
    };

    // --- Dynamic Models Page Generation ---
    const modelList = document.getElementById('model-list');
    const filterType = document.getElementById('filter-type');

    if (modelList && filterType) {
        const populateModels = (filter = 'all') => {
            modelList.innerHTML = ''; // Clear previous models
            Object.entries(modelsData).forEach(([modelName, data]) => {
                if (filter === 'all' || filter === data.type) {
                    const modelCard = document.createElement('div');
                    modelCard.className = 'model-card';
                    modelCard.innerHTML = `
                        <img src="${data.image}" alt="${modelName}">
                        <h3>${modelName}</h3>
                        <p class="model-price">${data.price}</p>
                        <a href="model-details.html?model=${encodeURIComponent(modelName)}" class="btn btn-secondary">View Details</a>
                    `;
                    modelList.appendChild(modelCard);
                }
            });
        };

        filterType.addEventListener('change', (e) => populateModels(e.target.value));
        populateModels(); // Initial load
    }

    // --- Dynamic Model Details Page ---
    const modelDetailsContainer = document.querySelector('.model-details-container');
    if (modelDetailsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const modelName = urlParams.get('model');
        const modelData = modelsData[modelName];

        if (modelData) {
            document.getElementById('model-name').textContent = modelName;
            document.getElementById('model-price').textContent = modelData.price;
            document.getElementById('model-image').src = modelData.image;

            document.getElementById('engine-type').textContent = modelData.details.engineType;
            document.getElementById('top-speed').textContent = modelData.details.topSpeed;
            document.getElementById('net-weight').textContent = modelData.details.netWeight;
            document.getElementById('dimensions').textContent = modelData.details.dimensions;

        } else {
            modelDetailsContainer.innerHTML = '<h1>Model Not Found</h1><p>The motorcycle you are looking for does not exist. Please <a href="models.html">go back to all models</a>.</p>';
        }
    }
});
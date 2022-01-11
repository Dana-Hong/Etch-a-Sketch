let textField = document.getElementById('textField');
let button = document.getElementById('button');
let gridContainer = document.getElementById('gridContainer');

function runListener() {
    // Reset container
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }
    let rawInput = textField.value;
    let length = Number(rawInput);
    function generateGrid(length) {
        
        function setGridContainerDimensions(length) {
            gridContainer.style.gridTemplate = `repeat(${length}, 1fr) / repeat(${length}, 1fr)`;
            
        }
        
        // Create function that generates a square
        function generateSquare() {
            let square = document.createElement('div');
            square.classList = 'square'
            let setColour = () => {
                // Create a function that gives you random RG value
                let generateRGB = () => {
                    let R = Math.floor(Math.random() * 256);
                    let G = Math.floor(Math.random() * 256);
                    let B = Math.floor(Math.random() * 256);
                    return `rgb(${R}, ${G}, ${B})`
                
                }
                let colour = square.style.backgroundColor = generateRGB()
            };
            square.addEventListener('mouseenter', setColour);
            gridContainer.appendChild(square);
            
        }
    
        setGridContainerDimensions(length);
        // Create squares 
        for (let i = 0; i < (length ** 2); i++) {
            generateSquare()
        }
    
    
    }
    generateGrid(length);
}

button.addEventListener('click', runListener);
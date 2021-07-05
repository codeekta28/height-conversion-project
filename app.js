console.log("This is index.js file");
// d(cm) = d(ft) × 30.48 + d(in) × 2.54

let userInput = {
    'user': { 'feet': '#feet', 'inches': '#inches', 'form': '#calculator', 'inCentimeterContainer': '#results' },
}
let height = userInput.user;

document.querySelector(height.form).addEventListener("submit", calculateHeight);

function calculateHeight(e) {
    let heightInFeet = document.querySelector(height.feet).value;
    let heightInInch = document.querySelector(height.inches).value;
    let heightInCentimeter = heightInFeet * 30.48 + heightInInch * 2.54;
    document.querySelector(height.inCentimeterContainer).innerHTML = heightInCentimeter;
    e.preventDefault();
}

// Green Check
async function greenCheck(hostName) {
    let url = `https://api.thegreenwebfoundation.org/api/v3/greencheck/${hostName}`
    let data = await fetch(url);
    let res = await data.json();
    return res;
}

function buildGreenCheck (inputId, buttonId, appendElementId){
    const website = document.getElementById(inputId);
    const button = document.getElementById(buttonId);
    const greenCheckBox = document.createElement('section');
    greenCheckBox.classList = 'greenCheckBox';
    const appendElement = document.getElementById(appendElementId);      
    const greenText = document.createElement('p');
    const inputText = document.createElement('h2');
    const anotherButton = document.createElement('button');

    greenCheckBox.appendChild(inputText);
    greenCheckBox.appendChild(greenText);
    greenCheckBox.appendChild(anotherButton);
    appendElement.appendChild(greenCheckBox);

    button.addEventListener('click', async () => {
        greenCheckBox.style.display = 'block';
        const inputtedWebsite = website.value;
        let greenCheckData = await greenCheck(inputtedWebsite);
        inputText.innerText = 'Website: ' + inputtedWebsite;
        greenText.innerText = greenCheckData.green ? 'This website is green!' : 'This website is not green or we dont have the neccessary data';
        anotherButton.innerText = 'Try another Website!';

        anotherButton.addEventListener('click', () => {
            greenCheckBox.style.display = 'none';
        })

    });
}

buildGreenCheck('greenCheck', 'greenCheckButton', 'greencheckBox');


// CO2 Check
async function co2Check(address) {
    let url = `https://api.thegreenwebfoundation.org/api/v3/ip-to-co2intensity/${address}.`
    let data = await fetch(url);
    let res = await data.json();
    return res;
}

function buildCo2Check (inputId, buttonId, appendElementId) {
    const website = document.getElementById(inputId);
    const button = document.getElementById(buttonId);
    const co2CheckBox = document.createElement('section');
    co2CheckBox.classList = 'co2CheckBox';
    const appendElement = document.getElementById(appendElementId);
    const country = document.createElement('p');
    const intensity = document.createElement('p');
    const level = document.createElement('p');
    const anotherbutton = document.createElement('button');
    const websitetext = document.createElement('h2');

    co2CheckBox.appendChild(websitetext);
    co2CheckBox.appendChild(country);
    co2CheckBox.appendChild(intensity);
    co2CheckBox.appendChild(level);
    co2CheckBox.appendChild(anotherbutton);
    
    appendElement.appendChild(co2CheckBox);


    button.addEventListener('click', async () => {
        co2CheckBox.style.display = 'block';
        const inputtedWebsite = website.value;
        let co2CheckData = await co2Check(inputtedWebsite);
        websitetext.innerText = 'Website: ' + inputtedWebsite;
        country.innerText = 'Country: ' + co2CheckData.country_name;
        intensity.innerText = 'Co2 Intensity: ' + co2CheckData.carbon_intensity;
        level.innerText = 'Co2 Intensity Type: ' + co2CheckData.carbon_intensity_type;
        anotherbutton.innerText = 'Try another website!';

        anotherbutton.addEventListener('click', () => {
            co2CheckBox.style.display = 'none';
        }); 

    });
    
}

buildCo2Check ('co2Calculator', 'calculateButton', 'calculate');

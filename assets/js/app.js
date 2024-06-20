// Green Check
async function greenCheck(hostName) {
    let url = `https://api.thegreenwebfoundation.org/api/v3/greencheck/${hostName}`
    let data = await fetch(url);
    let res = await data.json();
    return res;
}

let greenCheckData = await greenCheck('www.techcollege.dk');

console.log(greenCheckData);




// CO2 Check
async function co2Check(address) {
    let url = `https://api.thegreenwebfoundation.org/api/v3/ip-to-co2intensity/${address}.`
    let data = await fetch(url);
    let res = await data.json();
    return res;
}

let co2CheckData = await co2Check('www.techcollege.dk');

console.log(co2CheckData);
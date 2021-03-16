// const axios = require('axios');
// const priceButton = document.querySelector('#priceButton');

axios
    .get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(res => {
        const newLI = document.createElement("LI");
        bitcoinPriceList.append(newLI);
        newLI.append(res.data.ticker.price);
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });
axios
    .get("https://api.cryptonator.com/api/ticker/ltc-usd")
    .then(res => {
        const newLI = document.createElement("LI");
        litecoinPriceList.append(newLI);
        newLI.append(res.data.ticker.price);
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });
axios
    .get("https://api.cryptonator.com/api/ticker/eth-usd")
    .then(res => {
        const newLI = document.createElement("LI");
        etherPriceList.append(newLI);
        newLI.append(res.data.ticker.price);
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });
axios
    .get("https://api.cryptonator.com/api/ticker/dash-usd")
    .then(res => {
        const newLI = document.createElement("LI");
        dashPriceList.append(newLI);
        newLI.append(res.data.ticker.price);
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });
axios
    .get("https://api.cryptonator.com/api/ticker/zec-usd")
    .then(res => {
        const newLI = document.createElement("LI");
        zecPriceList.append(newLI);
        newLI.append(res.data.ticker.price);
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });
axios
    .get("https://api.cryptonator.com/api/ticker/eos-usd")
    .then(res => {
        const newLI = document.createElement("LI");
        eosPriceList.append(newLI);
        newLI.append(res.data.ticker.price);
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });
axios
    .get("https://api.cryptonator.com/api/ticker/atom-usd")
    .then(res => {
        const newLI = document.createElement("LI");
        cosmosPriceList.append(newLI);
        newLI.append(res.data.ticker.price);
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });
axios
    .get("https://api.cryptonator.com/api/ticker/xlm-usd")
    .then(res => {
        const newLI = document.createElement("LI");
        stellarPriceList.append(newLI);
        newLI.append(res.data.ticker.price);
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });
axios
    .get("https://api.cryptonator.com/api/ticker/vet-usd")
    .then(res => {
        const newLI = document.createElement("LI");
        vetPriceList.append(newLI);
        newLI.append(res.data.ticker.price);
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR!", err);
    });

// axios
//     .get("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then(res => {
//         const priceButton = document.querySelector("#priceButton");
//         priceButton.addEventListener("click", fetchBitcoinPrice());
//         const newLI = document.createElement("LI");
//         newLI.append(res.data.ticker.price);
//         priceList.append(newLI);
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log("ERROR!! =( ", err);
//     });

// const fetchBitcoinPrice = async() => {
//     try {
//         const res = await axios.get(
//             "https://api.cryptonator.com/api/ticker/btc-usd"
//         );
//         console.log(res.data.ticker.price);
//     } catch (e) {
//         console.log("ERROR!", e);
//     }
// };

// const priceButton = document.querySelector('#priceButton');
// const button = document.querySelector('button');

// const fetchBitcoinPrice = async() => {
//     const res = await axios.get(
//         "https://api.cryptonator.com/api/full/btc-usd");
//     newLI.append(res.data.ticker.volume);
//     priceList.append(newLI);
//     console.log(res.data.ticker.volume);
// }
// priceButton.addEventListener("click", fetchBitcoinPrice());
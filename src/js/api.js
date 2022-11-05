document.addEventListener('DOMContentLoaded', () => {

const CRYPTO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd';

    function showRate () {
        fetch(CRYPTO_API)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('localRate', JSON.stringify(data));
                let obj = JSON.parse(localStorage.getItem('localRate'));

                document.querySelector('.bitcoin').textContent = obj.bitcoin.usd + ' usd';
                document.querySelector('.litecoin').textContent = obj.litecoin.usd + ' usd';
                document.querySelector('.dogecoin').textContent = obj.dogecoin.usd + ' usd';
                document.querySelector('.ethereum').textContent = obj.ethereum.usd + ' usd';
                document.querySelector('.diplexcoin').textContent = (obj.bitcoin.usd * 0.18).toFixed(2) + ' usd';
                // console.log(obj)
            })

            .catch((error) => {
                console.log('Помилка запиту до біржі! ' + error);
            })
        return
    }

    showRate()
    setInterval(showRate, 600000) //кожні 10хв
    

})
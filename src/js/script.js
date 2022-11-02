// зміна мови--------------------------------------------------------------------------------------------!
const SELECT = document.querySelector('.header-dropdown');

SELECT.addEventListener('change', changeURL);

const allLanguages = ['en', 'ua', 'ru'];
// додавання приставки hash в кінець url
function changeURL() {
    let lang = SELECT.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload()
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    // console.log(hash)
    // помилка при невірному url
    if (!allLanguages.includes(hash)) {
        location.href = window.location.pathname + "#ua";
        location.reload()
    }
    SELECT.value = hash;
    // зміна мови для title
    document.querySelector('title').textContent = langArr['title'][hash];
    
    for (let key in langArr) {
        let elem  = document.querySelector(".lng-" + key);
        if (elem) {
            elem.textContent = langArr[key][hash];
        }
    }
}

changeLanguage()





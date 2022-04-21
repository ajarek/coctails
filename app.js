var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Coctail, OneCoctail } from "./class/class.js";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
function displayCoctail() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        const data = yield res.json();
        data.drinks.forEach((element) => {
            let coctail = new Coctail(element.idDrink, element.strDrink, element.strCategory, element.strAlcoholic, element.strDrinkThumb);
            coctail.show();
        });
        const btnOne = document.querySelectorAll('.card-body> button');
        btnOne.forEach((el) => {
            el.addEventListener('click', displayOneCoctail);
        });
    });
}
displayCoctail();
function searchCoctail() {
    const coctails = document.querySelectorAll('.col-lg-4');
    const search = document.querySelector('#search');
    const searchValue = search.value.toLowerCase();
    let arrNone = [];
    coctails.forEach((el, index, arr) => {
        const text = el.querySelector('.h3').innerHTML;
        if (text.toLowerCase().includes(searchValue)) {
            el.style.display = 'block';
        }
        if (!text.toLowerCase().includes(searchValue)) {
            el.style.display = 'none';
            arrNone.push('none');
        }
    });
    if (coctails.length == arrNone.length) {
        document.querySelector('.h1').innerHTML = 'No Cocktails Matched Your Search Criteria';
        arrNone = [];
    }
    else {
        document.querySelector('.h1').innerHTML = 'Cocktails';
    }
}
const search = document.querySelector('#search');
search.addEventListener('input', searchCoctail);
function displayOneCoctail(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        const data = yield res.json();
        data.drinks.forEach((element) => {
            if (element.idDrink == e.target.id) {
                let coctailOne = new OneCoctail(element.idDrink, element.strDrink, element.strCategory, element.strAlcoholic, element.strDrinkThumb, element.strInstructions, element.strGlass, element.strIngredient1, element.strIngredient2, element.strIngredient3, element.strIngredient4, element.strIngredient5);
                let play = coctailOne.showOneCoctail();
            }
        });
    });
}

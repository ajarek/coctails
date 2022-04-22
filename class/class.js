export class Coctail {
    constructor(idDrink, strDrink, strCategory, strAlcoholic, strDrinkThumb) {
        this.idDrink = idDrink;
        this.strDrink = strDrink;
        this.strCategory = strCategory;
        this.strAlcoholic = strAlcoholic;
        this.strDrinkThumb = strDrinkThumb;
    }
    show() {
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('shadow');
        div.classList.add('my-3');
        div.innerHTML = `<img src="${this.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body text-start">
                <p class="h3">${this.strDrink}</p>
              <p class="h4">${this.strCategory}</p>
              <p class="text-secundary">${this.strAlcoholic}</p>
              <button id="${this.idDrink}"  class="btn btn-success">DETALIS</button>
            </div>`;
        const row = document.querySelector('.row');
        row.appendChild(div);
    }
}
export class OneCoctail extends Coctail {
    constructor(idDrink, strDrink, strCategory, strAlcoholic, strDrinkThumb, strInstructions, strGlass, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5) {
        super(idDrink, strDrink, strCategory, strAlcoholic, strDrinkThumb);
        this.strInstructions = strInstructions;
        this.strGlass = strGlass;
        this.strIngredient1 = strIngredient1 || "";
        this.strIngredient2 = strIngredient2 || "";
        this.strIngredient3 = strIngredient3 || "";
        this.strIngredient4 = strIngredient4 || "";
        this.strIngredient5 = strIngredient5 || "";
    }
    showOneCoctail() {
        const cont = document.querySelector('#cont');
        cont.innerHTML = "";
        const div = document.createElement('div');
        div.classList.add('col-lg-12');
        div.innerHTML = `<div class="row "> <div class="col-lg-6 "><img  class="card-img-top" src="${this.strDrinkThumb}" class="card-img-top" alt="..."></div>
        <div class="col-lg-6 card-body text-start d-flex flex-column justify-content-evenly align-items-start">
             <a href="index.html" class="btn btn-success">BACK HOME</a>
            <p class="h3"> ${this.strDrink}</p>
    
          <p class="text-dark fw-bold"><span class="p-2" style="background:lightgreen">Name :</span>  ${this.strDrink}</p>
          <p class="text-dark fw-bold"><span class="p-2" style="background:lightgreen">Category :</span>  ${this.strCategory}</p>
          <p class="text-dark fw-bold"><span class="p-2" style="background:lightgreen">Info  :</span>  ${this.strAlcoholic}</p>
          <p class="text-dark fw-bold"><span class="p-2" style="background:lightgreen">Instructons :</span>  ${this.strInstructions}</p>
          <p class="text-dark fw-bold"><span class="p-2" style="background:lightgreen">Glass  :</span>  ${this.strGlass}</p>
          <p class="text-dark fw-bold"><span class="p-2" style="background:lightgreen">Ingredients :</span>  ${this.strIngredient1},${this.strIngredient2},${this.strIngredient3},
          ${this.strIngredient4},${this.strIngredient5}</p>
          
        </div>
        </div>`;
        cont.appendChild(div);
    }
}

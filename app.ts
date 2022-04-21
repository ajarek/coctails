import { Coctail, OneCoctail } from "./class/class.js";

const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

async function displayCoctail() {
    const res = await fetch(url)
    const data = await res.json()
    data.drinks.forEach((element: { idDrink: string; strDrink: string; strCategory: string; strAlcoholic: string; strDrinkThumb:string}) => {
        let coctail = new Coctail(element.idDrink,element.strDrink,element.strCategory,element.strAlcoholic,element.strDrinkThumb)
        coctail.show();
    })
    const btnOne=document.querySelectorAll('.card-body> button') as NodeListOf<HTMLButtonElement>
    btnOne.forEach((el)=>{
        el.addEventListener('click',displayOneCoctail)
    })
}
displayCoctail()

function searchCoctail(){
    const coctails = document.querySelectorAll('.col-lg-4') as NodeListOf<HTMLElement>
    const search = document.querySelector('#search') as HTMLInputElement
    const searchValue = search.value.toLowerCase()
    let arrNone=[]
         coctails.forEach((el,index,arr)=>{
                const text = (el.querySelector('.h3') as HTMLElement).innerHTML
                if(text.toLowerCase().includes(searchValue) ){
                    el.style.display = 'block' ;  
                }
                if(!text.toLowerCase().includes(searchValue)){
                    el.style.display = 'none' ; 
                    arrNone.push('none')
                }                  
            })   
            if(coctails.length==arrNone.length){                    
                (document.querySelector('.h1')as HTMLDivElement).innerHTML='No Cocktails Matched Your Search Criteria'
                arrNone=[]
            }
            else{
                (document.querySelector('.h1')as HTMLDivElement).innerHTML='Cocktails'
            }       
}

const search = document.querySelector('#search') as HTMLInputElement
search.addEventListener('input',searchCoctail)

 async function displayOneCoctail(e:Event) {
    
    const res = await fetch(url)
    const data = await res.json()
    data.drinks.forEach((element: { idDrink: string; strDrink: string; strCategory: string; strAlcoholic: string; strDrinkThumb: string;strInstructions: string; strGlass: string;strIngredient1: string;strIngredient2: string;strIngredient3: string;strIngredient4: string;strIngredient5: string}) => {
        if(element.idDrink==(e.target as HTMLButtonElement).id){
        let coctailOne = new OneCoctail(element.idDrink,element.strDrink,element.strCategory,element.strAlcoholic,element.strDrinkThumb,element.strInstructions,element.strGlass,element.strIngredient1,element.strIngredient2,element.strIngredient3,element.strIngredient4,element.strIngredient5)
        let play=coctailOne.showOneCoctail()
        }
    })
}


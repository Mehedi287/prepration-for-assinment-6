
document.getElementById('button-addon2').addEventListener('click', function () {
    const inputFlied = document.getElementById('result');
    const drinksName = inputFlied.value;
    // console.log(drinksName);
    inputFlied.value = '';
    if (drinksName === '') {
        alert('please write something ');
    }
    else {
        getDrings(drinksName);
    }
})
// feth dada by api -------------------------------
const getDrings = (name) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => getItem(data.drinks))
}
// display drinks ---------------------------------
const getItem = drinks => {
    console.log(drinks);
    if (drinks == null) {
        alert('Your Drinks Did not finde')
    }
    else {

        const cardContainer = document.getElementById('container');
        drinks.forEach(drink => {
            const div = document.createElement('div');
            div.classList.add('card-group', 'm-5')
            div.innerHTML = `
        <div class="card ">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${drink.strIngredient1}</h5>
                <p class="card-text"> ${drink.strInstructions}.</p> 
            </div>
        </div>
        `;
            cardContainer.appendChild(div)
            // console.log(drinks);
        })
    }
}



// categories 
const handleCategories = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const categoriesData = await response.json()
    const categoriesDataArr = categoriesData.data
    console.log(categoriesDataArr)


    const categoriesContainer = document.getElementById('categories-container');
    categoriesDataArr.forEach(element => {
        console.log(element)
        const div = document.createElement('div');
        div.innerHTML = `
        <input class="btn px-6 normal-case" type="radio" name="options" aria-label="${element.category}" />
        `
        categoriesContainer.appendChild(div)

    });









}
handleCategories()
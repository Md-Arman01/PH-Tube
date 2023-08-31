// categories 
const handleCategories = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const categoriesData = await response.json()
    const categoriesDataArr = categoriesData.data


    const categoriesContainer = document.getElementById('categories-container');
    categoriesDataArr.forEach(element => {
        // console.log(element)
        const div = document.createElement('div');
        div.innerHTML = `
        <input  onclick="categoriesClick('${element.category_id}')" class="btn px-6 normal-case" type="radio" name="options" aria-label="${element.category}" />
        
        `
        categoriesContainer.appendChild(div)


    });


}

const categoriesClick =async (id) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const idData = await response.json()
    console.log(idData)
    


}









handleCategories()
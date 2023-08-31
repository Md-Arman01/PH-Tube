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
    const idDataArr = idData.data
    // console.log(idDataArr)

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML= ''

    idDataArr.forEach((element) =>{
        console.log(element)
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="card">
                <figure class="px-10 pt-10">
                  <img src='${element.thumbnail}' alt="Shoes" class="rounded-xl h-48 w-80" />
                </figure>
                <div class="flex gap-3 px-10 pt-5">
                  <div>
                    <img class="rounded-full h-12 w-12 bg-contain" src="${element.authors[0].profile_picture}" alt="">
                  </div>
                  <div class="space-y-2">
                    <h1 class="text-[#171717] font-bold">${element.title}</h1>
                    <p class="text-[#666464] text-xs">${element.authors[0].profile_name}</p>
                    <p class="text-[#666464] text-xs">${element.others.views}</p>
                  </div>
                </div>
              </div>
        
        `
        cardContainer.appendChild(div)


    })
    


    


}









handleCategories()
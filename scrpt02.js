const form = document.querySelector('.js-form')
form.addEventListener('submit', hendleForm)
const arr = JSON.parse(localStorage.getItem("card")) ?? [] ;
function hendleForm(evt){
    evt.preventDefault()

    const{title, text} = evt.currentTarget.elements
    const markup = `<li>
    <h3>${title.value}</h3>
    <p>${text.value}</p>
</li>`
listContainer.insertAdjacentHTML("beforeend", markup)

const object = {
    title,
    decription
}

arr.push(object)
localStorage.setItem("card", JSON.stringify(arr))
    console.dir(title.value);
    console.dir(text.value);

    

}
const listContainer = document.querySelector('.js-card')

function markup(arr){
    return arr.map({title, description}) => `<li>
    <h3>${title.value}</h3>
    <p>${text.value}</p>
</li>`.join("")
    
}
listContainer.insertAdjacentHTML("afterbegin", markup(arr))

const form = document.querySelector('.js-form');
const listContainer = document.querySelector('.js-list');
const arr = JSON.parse(localStorage.getItem("card")) ?? [];
form.addEventListener('submit', hendleForm);


function hendleForm(evt){
    evt.preventDefault()
    const title = evt.target.elements.title.value;
    const description = evt.target.elements.descr.value;
    const id = Math.random().toString(36).substring(2);
    const object = {
        title,
        description,
        id
    }
    const markup = `<li data-id =${id}>
    <h3>${title}</h3>
    <p>${description}</p>
</li>`
listContainer.insertAdjacentHTML("beforeend", markup)



arr.shift(object)
localStorage.setItem("card", JSON.stringify(arr))

evt.target.elements.title.value = " ";
evt.target.elements.descr.value = " ";
}


function markup(arr){
    return arr.map(({title, description, id, completed}) => `<li class="${completed?"complete":""}" data-id =${id}> 
    <h3>${title}</h3>
    <p>${description}</p>
</li>`).join("")
    
}
listContainer.insertAdjacentHTML("afterbegin", markup(arr));

listContainer.addEventListener("click", onClick)

function onClick(e){
    if(e.target === e.currentTarget) return;
    
    const item = e.target.closest("li");
    
    item.classList.add("complete");

    const findElement = arr.find(({id}) => id === item.dataset.id)
    findElement.completed = true

    localStorage.setItem("card", JSON.stringify(arr))
}


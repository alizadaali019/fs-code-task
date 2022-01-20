window.addEventListener("click", function(event) {
   
    if(event.target.classList.contains('addBtn') ){
        createAddInputSection(element=event.target)
    }
    if(event.target.classList.contains('removeBtn') ){
        removeSection(element=event.target)
    }
    if(event.target.classList.contains('exitCategory')){
        event.target.parentElement.remove();
    }
    if(event.target.classList.contains('addCategory')){
        formSubmit(event.target);
    }
});
let modal =  document.querySelector('.modal')

function removeSection(element){
    element.closest('li').setAttribute('isDelete', '1');
    modal.style.display = 'block';
}

modal.querySelector('#deleteCategory').addEventListener('click', ()=>{
    parent = document.querySelector('[isDelete="1"]').parentElement;
    if(parent.childElementCount===1){
        parent.remove()
    }else{
        document.querySelector('[isDelete="1"]').remove();
    }
    modal.style.display = 'none';
});

modal.querySelector('#closeModel').addEventListener('click', ()=>{
    document.querySelector('[isDelete="1"]').removeAttribute('isDelete');
    modal.style.display = 'none';
});


function formSubmit(element){
   let newCategoryName = element.parentElement.querySelector('.newCategoryName').value;
   if (newCategoryName.length < 5 || newCategoryName.length>9){
       alert('Something went wrong');
       return 
   }
   let contentElement = element.parentElement.parentElement;
   element.parentElement.remove();
   let contentParentElement = contentElement.parentElement;
   if (contentParentElement.querySelector('ul')){
        contentParentElement.querySelector('ul').innerHTML+=`
            <li>
                <div class="content">
                    <span>${newCategoryName}</span>
                    <div class="buttonWrapper">
                        <button class="removeBtn">
                            <div class="first"></div>
                            <div class="last"></div>
                        </button>
                        <button class="addBtn">
                            <div class="first"></div>
                            <div class="last"></div>
                        </button>
                    </div>
                </div>
            </li>`;
   }
   else{
        contentParentElement.innerHTML += `
        <ul>
            <li>
                <div class="content">
                    <span>${newCategoryName}</span>
                    <div class="buttonWrapper">
                        <button class="removeBtn">
                            <div class="first"></div>
                            <div class="last"></div>
                        </button>
                        <button class="addBtn">
                            <div class="first"></div>
                            <div class="last"></div>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        `
   }
   
}

function createAddInputSection(element){
    let oldAddInputSection = document.querySelector('.addInput');
    if(oldAddInputSection){
        oldAddInputSection.remove();
    }
    element.parentElement.parentElement.innerHTML+=`<div class="addInput">
            <input type="text" class="newCategoryName" placeholder="Add categoriy name" name="name">
            <button class="exitCategory" id="exitInput" style="background-image: url('./img/close.png');"></button>
            <button class="addCategory" type="submit" style="background-image: url('./img/check.png');"></button>
        </div> `;
}
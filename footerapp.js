// modelo
const btnExpand = document.querySelector('.bi-arrow-down-circle-fill');
const formDiv = document.querySelector('.google-form-div');
const btnExpandDiv = document.querySelector('.div-expand')





// visao

expand = () => {
    formDiv.classList.toggle('expanded');
  
    btnExpandDiv.classList.toggle('icon-clicked-down');
}

// controle

btnExpand.addEventListener("click", expand);


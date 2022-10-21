// modelo
const btnExpand = document.querySelector('.div-expand');
const formDiv = document.querySelector('.google-form-div');





// visao

expand = () => {
    formDiv.classList.toggle('expanded');
  
    btnExpand.classList.toggle('icon-clicked-down');
}

// controle

btnExpand.addEventListener("click", expand);


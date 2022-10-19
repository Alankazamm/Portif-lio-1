// modelo
// instanciando elementos do html
const root = document.documentElement;
const nav = document.querySelector('.nav-items');

let cores = ['34, 34, 59', '74, 78, 105', '154, 140, 152', '201, 173, 167', '242, 233, 228']
cores = cores.reverse();

pegaVar = (variavel) => {
    return getComputedStyle(root).getPropertyValue(variavel);
}

mudaVar = (i, cores) => {
    root.style.setProperty('--cor' + i, 'rgb(' + cores[i] + ')');
    console.log('--cor' + i, 'rgb(' + cores[i] + ')')
}

setTheme = () => {
    cores = cores.reverse();
    for (i = 0; i < cores.length; i++) {
        mudaVar(i, cores);
    }

    mudaTema();
}

// visão




mudaIcone = () => {
    if (pegaVar("--theme") === 'dark') {
        const iconeAtivo = document.querySelector('.bi-sun');
        iconeAtivo.style.setProperty('opacity', '1');

        const iconeInativo = document.querySelector('.bi-moon-fill');
        iconeInativo.style.setProperty('opacity', '0');

            
    }
    else{
        const iconeInativo = document.querySelector('.bi-sun');
        iconeInativo.style.setProperty('opacity', '0');

        const iconeAtivo = document.querySelector('.bi-moon-fill');
        iconeAtivo.style.setProperty('opacity', '1');

            
    }

}

clickMenu = () => {
    btnList.classList.toggle('active-menu');
    if (nav.style.left === "-100%") {
        nav.style.left = "0";
      } else {
        nav.style.left = "-100%";
      }

}


mudaTema = () => {
    const temaAtual = pegaVar('--theme'); //fazer um desvio condicional

    if (temaAtual === 'dark') {
        root.style.setProperty('--theme', 'light');
    }
    else {
        root.style.setProperty('--theme', 'dark');
    }

    mudaIcone();
}



// controle
const btnTema = document.querySelector('.theme-mode');
btnTema.addEventListener('click', setTheme);

const btnList = document.querySelector('.bi-list');
btnList.addEventListener('click', clickMenu);

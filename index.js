



//Slider e slider automatico

const l0 = document.getElementById('item0')
const l1 = document.getElementById('item1')
const l2 = document.getElementById('item2')
const l3 = document.getElementById('item3')
const l4 = document.getElementById('item4')
const l5 = document.getElementById('item5')
const l6 = document.getElementById('item6')
const l7 = document.getElementById('item7')

const imgs = document.querySelector('.slides')
const img = document.querySelector('.slides img')

let pos = 0


l0.addEventListener('click', function () {
    l0.classList.add('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 0


    if (window.screen.width <= 451) {
        imgs.style.transform = `translateX(${-pos * 300}px)`
    } else {
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }

})
l1.addEventListener('click', function () {
    l0.classList.remove('atual2')
    l1.classList.add('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 1

    if (window.screen.width <= 451) {
        imgs.style.transform = `translateX(${-pos * 300}px)`
    } else {
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
console.log(window.screen.width)
l2.addEventListener('click', function () {
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.add('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 2

    if (window.screen.width <= 451) {
        imgs.style.transform = `translateX(${-pos * 300}px)`
    } else {
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l3.addEventListener('click', function () {
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.add('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 3

    if (window.screen.width <= 451) {
        imgs.style.transform = `translateX(${-pos * 300}px)`
    } else {
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l4.addEventListener('click', function () {
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.add('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 4

    if (window.screen.width <= 451) {
        imgs.style.transform = `translateX(${-pos * 300}px)`
    } else {
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l5.addEventListener('click', function () {
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.add('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 5

    if (window.screen.width <= 451) {
        imgs.style.transform = `translateX(${-pos * 300}px)`
    } else {
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l6.addEventListener('click', function () {
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.add('atual2')
    l7.classList.remove('atual2')
    pos = 6

    if (window.screen.width <= 451) {
        imgs.style.transform = `translateX(${-pos * 300}px)`
    } else {
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l7.addEventListener('click', function () {
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.add('atual2')
    pos = 7

    if (window.screen.width <= 451) {
        imgs.style.transform = `translateX(${-pos * 300}px)`
    } else {
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})


function carrossel() {
    pos++


    if (pos == 1) {
        l0.classList.remove('atual2')
        l1.classList.add('atual2')
        l2.classList.remove('atual2')
        l3.classList.remove('atual2')
        l4.classList.remove('atual2')
        l5.classList.remove('atual2')
        l6.classList.remove('atual2')
        l7.classList.remove('atual2')
    }
    if (pos == 2) {
        l0.classList.remove('atual2')
        l1.classList.remove('atual2')
        l2.classList.add('atual2')
        l3.classList.remove('atual2')
        l4.classList.remove('atual2')
        l5.classList.remove('atual2')
        l6.classList.remove('atual2')
        l7.classList.remove('atual2')
    }
    if (pos == 3) {
        l0.classList.remove('atual2')
        l1.classList.remove('atual2')
        l2.classList.remove('atual2')
        l3.classList.add('atual2')
        l4.classList.remove('atual2')
        l5.classList.remove('atual2')
        l6.classList.remove('atual2')
        l7.classList.remove('atual2')
    }
    if (pos == 4) {
        l0.classList.remove('atual2')
        l1.classList.remove('atual2')
        l2.classList.remove('atual2')
        l3.classList.remove('atual2')
        l4.classList.add('atual2')
        l5.classList.remove('atual2')
        l6.classList.remove('atual2')
        l7.classList.remove('atual2')
    }
    if (pos == 5) {
        l0.classList.remove('atual2')
        l1.classList.remove('atual2')
        l2.classList.remove('atual2')
        l3.classList.remove('atual2')
        l4.classList.remove('atual2')
        l5.classList.add('atual2')
        l6.classList.remove('atual2')
        l7.classList.remove('atual2')
    }
    if (pos == 6) {
        l0.classList.remove('atual2')
        l1.classList.remove('atual2')
        l2.classList.remove('atual2')
        l3.classList.remove('atual2')
        l4.classList.remove('atual2')
        l5.classList.remove('atual2')
        l6.classList.add('atual2')
        l7.classList.remove('atual2')
    }
    if (pos == 7) {
        l0.classList.remove('atual2')
        l1.classList.remove('atual2')
        l2.classList.remove('atual2')
        l3.classList.remove('atual2')
        l4.classList.remove('atual2')
        l5.classList.remove('atual2')
        l6.classList.remove('atual2')
        l7.classList.add('atual2')
    }
    if (pos == 8) {
        pos = 0
        l0.classList.add('atual2')
        l1.classList.remove('atual2')
        l2.classList.remove('atual2')
        l3.classList.remove('atual2')
        l4.classList.remove('atual2')
        l5.classList.remove('atual2')
        l6.classList.remove('atual2')
        l7.classList.remove('atual2')
    }


    if (window.screen.width <= 451) {
        imgs.style.transform = `translateX(${-pos * 300}px)`
    } else {
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }

}

setInterval(carrossel, 4500)


//Efeito m??quina de escrever

const meuNome = document.querySelector('.meu-nome')
const fName = meuNome.innerHTML

function typeWriter(nome) {
    setTimeout(() => {
        const meuNomeF = nome.split('');
        meuNome.innerHTML = '';
        meuNomeF.forEach((letra, index) => {
            setTimeout(function () {
                meuNome.innerHTML += letra;
            }, 160 * index)
        })
    }, 300)

}

typeWriter(fName)


//Alternar cor de borda do menu de navega????o





//conforme o scroll
window.onscroll = function () { transparent() }

function transparent() {

    if (document.documentElement.scrollTop <= 700) {
        home.classList.add('atual')
        projetos.classList.remove('atual')
        sobre.classList.remove('atual')
    } else if (document.documentElement.scrollTop <= 6000 && document.documentElement.scrollTop > 700) {
        home.classList.remove('atual')
        projetos.classList.add('atual')
        sobre.classList.remove('atual')
    } else if (document.documentElement.scrollTop > 6000) {
        home.classList.remove('atual')
        projetos.classList.remove('atual')
        sobre.classList.add('atual')
    }
}


//conforme o click
const home = document.getElementById('home')
const projetos = document.getElementById('projetos')
const sobre = document.getElementById('sobre')


home.addEventListener('click', function () {
    home.classList.add('atual')
    projetos.classList.remove('atual')
    sobre.classList.remove('atual')
})
projetos.addEventListener('click', function () {
    home.classList.remove('atual')
    projetos.classList.add('atual')
    sobre.classList.remove('atual')
})
sobre.addEventListener('click', function () {
    home.classList.remove('atual')
    projetos.classList.remove('atual')
    sobre.classList.add('atual')
})


// conforme o reiniciamento da p??gina 




// descri????o das tecnologias

const skillDesc = document.getElementById('skillDescription')



function htmlDesc() {
    skillDesc.innerText = 'HTML ?? uma linguagem de marca????o utilizada na constru????o de p??ginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia ?? fruto da jun????o entre os padr??es HyTime e SGML. HyTime ?? um padr??o para a representa????o estruturada de hiperm??dia e conte??do baseado em tempo.'
}


function cssDesc() {
    skillDesc.innerText = 'CSS ?? um mecanismo para adicionar estilos a uma p??gina web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style. Tamb??m ?? poss??vel, adicionar estilos adicionando um link para um arquivo CSS que cont??m os estilos.'
}

function jsDesc() {
    skillDesc.innerText = 'JavaScript ?? uma linguagem de programa????o interpretada estruturada, de script em alto n??vel com tipagem din??mica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript ?? uma das tr??s principais tecnologias da World Wide Web.'
}

function bootsDesc() {
    skillDesc.innerText = 'Bootstrap ?? um framework web com c??digo-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplica????es web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experi??ncia do usu??rio em um site amig??vel e responsivo.'
}

function reactDesc() {
    skillDesc.innerText = 'O React ?? uma biblioteca front-end JavaScript de c??digo aberto com foco em criar interfaces de usu??rio em p??ginas web.'
}

function leave() {
    skillDesc.innerText = 'Passe o mouse por cima para obter informa????es da ferramenta...'
}





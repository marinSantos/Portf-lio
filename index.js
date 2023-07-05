

//Efeito máquina de escrever

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


//Alternar cor de borda do menu de navegação





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




// descrição das tecnologias

const skillDesc = document.getElementById('skillDescription')

function leave() {
    skillDesc.innerText = 'Passe o mouse por cima para obter informações da ferramenta...'
}

function htmlDesc() {
    skillDesc.innerText = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.'
}


function cssDesc() {
    skillDesc.innerText = 'CSS é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.'
}

function jsDesc() {
    skillDesc.innerText = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'
}

function bootsDesc() {
    skillDesc.innerText = 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.'
}

function reactDesc() {
    skillDesc.innerText = 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
}

function sassDesc() {
    skillDesc.innerText = 'O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas que iremos comentar. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente.'
}




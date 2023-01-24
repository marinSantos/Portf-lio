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


l0.addEventListener('click',function(){
    l0.classList.add('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 0
  

    if(window.screen.width <= 451){
        imgs.style.transform = `translateX(${-pos * 300}px)`
    }else{
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }

})
l1.addEventListener('click',function(){
    l0.classList.remove('atual2')
    l1.classList.add('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
     pos = 1
     
     if(window.screen.width <= 451){
        imgs.style.transform = `translateX(${-pos * 300}px)`
    }else{
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
console.log(window.screen.width)
l2.addEventListener('click',function(){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.add('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 2
    
     if(window.screen.width <= 451){
        imgs.style.transform = `translateX(${-pos * 300}px)`
    }else{
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l3.addEventListener('click',function(){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.add('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 3
    
     if(window.screen.width <= 451){
        imgs.style.transform = `translateX(${-pos * 300}px)`
    }else{
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l4.addEventListener('click',function(){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.add('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 4
    
     if(window.screen.width <= 451){
        imgs.style.transform = `translateX(${-pos * 300}px)`
    }else{
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l5.addEventListener('click',function(){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.add('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
    pos = 5
    
     if(window.screen.width <= 451){
        imgs.style.transform = `translateX(${-pos * 300}px)`
    }else{
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l6.addEventListener('click',function(){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.add('atual2')
    l7.classList.remove('atual2')
    pos = 6
    
     if(window.screen.width <= 451){
        imgs.style.transform = `translateX(${-pos * 300}px)`
    }else{
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})
l7.addEventListener('click',function(){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.add('atual2')
    pos = 7
    
     if(window.screen.width <= 451){
        imgs.style.transform = `translateX(${-pos * 300}px)`
    }else{
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }
})




function carrossel(){
 pos++


 if(pos == 1){
    l0.classList.remove('atual2')
    l1.classList.add('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
 }
  if(pos == 2){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.add('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
 }
 if(pos == 3){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.add('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
 }
 if(pos == 4){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.add('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
 }
 if(pos == 5){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.add('atual2')
    l6.classList.remove('atual2')
    l7.classList.remove('atual2')
 }
 if(pos == 6){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.add('atual2')
    l7.classList.remove('atual2')
 }
 if(pos == 7){
    l0.classList.remove('atual2')
    l1.classList.remove('atual2')
    l2.classList.remove('atual2')
    l3.classList.remove('atual2')
    l4.classList.remove('atual2')
    l5.classList.remove('atual2')
    l6.classList.remove('atual2')
    l7.classList.add('atual2')
 }
 if(pos == 8){
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


  if(window.screen.width <= 451){
        imgs.style.transform = `translateX(${-pos * 300}px)`
    }else{
        imgs.style.transform = `translateX(${-pos * 450}px)`
    }

}

setInterval(carrossel,4500)


//Efeito máquina de escrever

const meuNome = document.querySelector('.meu-nome')
const fName = meuNome.innerHTML

function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 300 * index)
    })}, 300)
    
}

typeWriter(fName)


//Alternar opções do menu

const home = document.getElementById('home')
const projetos = document.getElementById('projetos')
const sobre = document.getElementById('sobre')

home.addEventListener('click', function(){
    home.classList.add('atual')
    projetos.classList.remove('atual')
    sobre.classList.remove('atual')
})
projetos.addEventListener('click', function(){
    home.classList.remove('atual')
    projetos.classList.add('atual')
    sobre.classList.remove('atual')
})
sobre.addEventListener('click', function(){
    home.classList.remove('atual')
    projetos.classList.remove('atual')
    sobre.classList.add('atual')
})


//Data em tempo real

const data = document.getElementById('data')

data.innerText = new Date().getFullYear()


//Ultilizando a biblioteca scrollReveal

if(window.screen.width > 768){
    window.sr = ScrollReveal({ reset: true })
    ScrollReveal({ distance: '20px',duration:1500 }); 
    ScrollReveal().reveal('.caseR', { origin: 'right' });
    ScrollReveal().reveal('.case', { origin: 'left' });
    ScrollReveal().reveal('.parte1', {origin: 'left'});
    ScrollReveal().reveal('.parte2', {origin: 'top'});
    ScrollReveal().reveal('.p1', {origin: 'bottom'});
    ScrollReveal().reveal('.p2', {origin: 'left'});
    ScrollReveal().reveal('.imgs', { origin: 'right'});
    ScrollReveal().reveal('.tecs', { origin: 'right' });
}else{
    window.sr = ScrollReveal({ reset: true })
    ScrollReveal({distance: '20px',duration:1500 }); 
    ScrollReveal().reveal('.caseR', { scale: 1 });
    ScrollReveal().reveal('.case', { scale: 1 });
    ScrollReveal().reveal('.parte1', {scale: 1 });
    ScrollReveal().reveal('.parte2', {scale: 1});
    ScrollReveal().reveal('.p1', {scale: 1});
    ScrollReveal().reveal('.p2', {scale: 1});
    ScrollReveal().reveal('.imgs', { scale: 1});
    ScrollReveal().reveal('.tecs', { scale: 1 });
}











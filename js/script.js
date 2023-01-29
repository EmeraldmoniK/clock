let ArrowHours = document.querySelector('.h'),
    ArrowMinutes = document.querySelector('.m'),
    ArrowSeconds = document.querySelector('.s'),
    ArrowMSeconds = document.querySelector('.ms'),
    NumHours = document.querySelector('.hours'),
    NumMinutes = document.querySelector('.minutes')

function clock(){
    let time = new Date(),
        ms = time.getMilliseconds() * 0.36,
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

    ArrowMSeconds.style = `transform: rotate(${ms}deg)`

    ArrowSeconds.style = `transform: rotate(${seconds}deg)`

    ArrowMinutes.style = `transform: rotate(${minutes}deg)`

    ArrowHours.style = `transform: rotate(${hours}deg)`

    NumHours.innerHTML = time.getHours() < 10 ? '0' + time.getHours : time.getHours() ; 
    NumMinutes.innerHTML = time.getMinutes() < 10 ?  '0' + time.getMinutes()  : time.getMinutes() ;

    

    setTimeout(() => clock(),1)
}

clock()


let link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem')

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', function() {
        for(let x = 0; x < link.length; x++ ){
            link[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
    
    link[i].classList.add('active')
    tabs[i].classList.add('active')
    })
}


let btn = document.querySelector('.stopwatch__btn'),
    msectap = document.querySelector('.stopwatch__mseconds')
    sectap = document.querySelector('.stopwatch__seconds')
    mintap = document.querySelector('.stopwatch__minutes')
    hourtap = document.querySelector('.stopwatch__hours')



btn.addEventListener('click' , function (){
    if(btn.innerHTML === 'start'){
        btn.innerHTML = 'stop'
        let ms = 0;
        let sec = 0;
        setTimeout(() => count(btn,sec,ms),1000)
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
    }else {
        btn.innerHTML = 'start'
        sectap.innerHTML = 0
        mintap.innerHTML = 0
        hourtap.innerHTML = 0
        msectap.innerHTML = 0
    }
     
})
    
function count(btn,sec,ms){
    if(btn.innerHTML === 'stop'){
        if(ms === 9){
            ms = 0
            msectap.innerHTML = 0
                if(sec === 59){
                    sec = 0
                    sectap.innerHTML = 0
                    if(mintap.innerHTML == 59){
                        mintap.innerHTML = 0
                        hourtap.innerHTML++
                    }else{
                        mintap.innerHTML++
                    }
                }else{
                    sec++
                    sectap.innerHTML = sec
                }
        }else{
            ms ++
            msectap.innerHTML = ms
        }
    }
    setTimeout(() => count(btn,sec,ms),100)
}







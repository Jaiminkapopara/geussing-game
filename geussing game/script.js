const input = document.querySelector('#input')
const outText = document.querySelector('.output h2')
const btn = document.querySelector('.btn')
const result = document.querySelector('.judge')
const remaining = document.querySelector('.try')


const random = Math.floor(Math.random() * 100 + 1)

let tries = 10;

const matching = () => {
    const inValue = Number.parseInt(input.value)

 if(tries > 0 && inValue >0 && inValue <= 100){
        
    outText.innerHTML = `Your guessed Number is: ${inValue}`

    tries -= 1

    if(inValue === random ){
        result.innerHTML = `You Won !!`
            //btn disable  
            btn.classList.add('disable')
            result.classList.add('succes')
    } else if(inValue > random){
        result.innerHTML = `too high!`
    }else{
        result.innerHTML = `too low!`
    }
remaining.innerHTML = `You'r remaining tries: ${tries}`

}else if(tries === 0){
    result.innerHTML = `You'r 10 try is overed !!`
    result.innerHTML = `You Loose !!`
    result.classList.add('danger')

    //btn disable
    btn.classList.add('disable')


}

}

btn.addEventListener('click', matching)
input.addEventListener("keypress", (event)=> {
    if (event.key === 'Enter') { // key code of the keybord key
      event.preventDefault();
      btn.click()
    }
  });
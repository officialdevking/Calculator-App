const keys = document.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')
keys.addEventListener('click', e =>{
    if(!e.target.closest('button')) 

    return

    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    

    if(displayValue == '0'){
        display.textContent = keyValue
    }else{
        display.textContent = displayValue
    }
})
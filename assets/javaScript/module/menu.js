const menuIcon = document.querySelector('.menu-icon')
const menuWraper = document.querySelector('.menu-wrapper')
const removeMenu = document.querySelector('.remove-icon')
const overlay = document.querySelector('.menu-overlay')
export default function menu(){
    if(menuIcon){
        menuIcon.onclick = function(){
            menuWraper.classList.add('active')
            console.log(123)
        }
        removeMenu.onclick = function(){
            menuWraper.classList.remove('active')
        }
        overlay.onclick = function(){
            menuWraper.classList.remove('active')
        }
    }
}

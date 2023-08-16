const show = document.querySelector('.show-more')
const showMore = document.querySelector('.prod-wrapper')
export default function showProd(){
    if(show){
        show.onclick = function(){
          
            showMore.classList.toggle('show-more')
            if(showMore.classList.contains("show-more")){
                show.innerHTML = 'SHOW LESS'
               }
               else{
                show.innerHTML = 'SHOW MORE'
               }
        }
    }
}   

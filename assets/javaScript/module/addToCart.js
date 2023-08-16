export default function addToCart() {
   

    const prodItems = document.querySelectorAll(".box-cart")
    const arrivalsBody = document.querySelector('.arrivals')
    if(prodItems){
        prodItems.forEach((item,index)=>{
            const cartBtn = item.querySelector('.btn-add-to')
            const boxCart = item.querySelector('.prod-add')
            const proSize = item.querySelector('.prod-size')
           
            const hiddenBox = (e) =>{
                const removeBoxCart = document.querySelector('.prod-add.active')
                if(removeBoxCart){
                    removeBoxCart.classList.remove('active')
                }
            }
            const removeBoxSize = ()=>{
                const removeSize = document.querySelector('.prod-size.open')
                    if(removeSize){
                        removeSize.classList.remove('open')
                    }
            }
            item.onmouseover = function(e){
                hiddenBox()
                boxCart.classList.add('active')
            }
            if(cartBtn){
                cartBtn.onclick = function(){
                    hiddenBox()
                    removeBoxSize()
                    proSize.classList.add('open')
                }
                
            }
            window.onmouseover = function(event) {
                if(event.target ===  arrivalsBody){
                  hiddenBox()
                    removeBoxSize()
                }
            }
        })
    }
}


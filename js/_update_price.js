window.addEventListener('DOMContentLoaded', function(event) {
    document.addEventListener('change', function(evt){

        if(evt.target.classList.contains('qty')){
            var button = evt.target.parentNode.querySelector('.buy-button')
            var qty = parseInt(evt.target.value)
            var input = evt.target.parentNode.querySelector('.qty')
            // console.log(input.getAttribute("price"))
            price = parseInt(input.getAttribute("price"))
            button.setAttribute('data-item-quantity', qty)
            var label = button.innerHTML
            label = "Add to cart (Total: INR "+ (qty * price)+")"
            button.innerHTML = label;
        }
    })
});

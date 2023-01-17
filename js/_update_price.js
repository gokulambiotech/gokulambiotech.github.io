
window.addEventListener('DOMContentLoaded', function(event) {
    document.addEventListener('change', function(evt){
        console.log("event target",evt)
        if(evt.target.attributes.price.value > 1){
            var button = evt.target.childNode.querySelector('.buy-button')
            var qty = parseInt(evt.target.value)
            price = parseInt(evt.target.attributes.price.value)
            button.setAttribute('data-item-quantity', qty)
            var label = button.innerHTML
            label = "Add to cart (Total: INR "+ (qty * price)+")"
            button.innerHTML = label;
        }
    })
});

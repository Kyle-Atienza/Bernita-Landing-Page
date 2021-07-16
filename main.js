console.log("connected")

var offer_name = document.querySelector("#offers-name>h1")
var offers = document.querySelector("#offers-images").children

for (let i = 0; i < offers.length; i++) {
    offers[i].addEventListener("mouseout", function(){
        offer_name.innerHTML = "Offers"
    })
    offers[i].addEventListener("mouseover", function(){
        //console.log(isHover)
        //console.log(offers[i])
        var offer_item = offers[i].dataset.name
        switch (offer_item){
            case 'pizza':
                offer_name.innerHTML = "Pizza"
                break;
            case 'burger':
                offer_name.innerHTML = "Burger"
                break;
            case 'pasta':
                offer_name.innerHTML = "Pasta"
                break;
            case 'quencher':
                offer_name.innerHTML = "Quencher"
                break;
            case 'shawarma':
                offer_name.innerHTML = "Shawarma"
                break;
        }
    })
    
}



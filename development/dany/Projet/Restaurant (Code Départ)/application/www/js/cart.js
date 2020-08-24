'use strict'

class Cart
{
    constructor()
    {
        this.products = [];
        
        $('#add').click( this.addProduct.bind(this) );
        $('#confirm').click( this.validateCart.bind(this) );
        $(document).on('click' , '.delete' , this.deleteProduct.bind(this));
        
        // charger les produits du localStorage
        // si le localstorage n'est pas vide
        
        if ( window.localStorage.getItem('cart') != null )
        {
            let json = window.localStorage.getItem('cart');
            this.products = JSON.parse(json);
        }
        
        // reafficher le panier au demarrage de la page
        
        this.displayProducts();
    }
    
    deleteProduct( event )
    {
        let id = $(event.target).data('id');
        $(`tr[data-id=${id}]`).remove();
        
        for( let i = 0 ; i < this.products.length ; i++)
        {
            if ( this.products[i].id == id)
            {
                // suppression de l'index du tableau
                this.products.splice(i,1);
                break;
            }
        }
        
        window.localStorage.setItem('cart', JSON.stringify(this.products));
    }
    
    addProduct()
    {
        let price = parseFloat($("#price").text());
        let name = $("#name").text();
        let quantity = parseInt($("#quantity").val());
        let id = $("#product").val();
        
        let product = {
            'price' : price,
            'name' : name,
            'quantity' : quantity,
            'id' : id
        }
        
        let isInCart = false;
        
        // recherche du produit dans le panier
        
        for( let i = 0; i < this.products.length;i ++)
        {
            // si il existe : mettre à jour la quantité
            if ( this.products[i].id == id )
            {
                isInCart = true;
                this.products[i].quantity += quantity;
            }
        }
        
        // si le produit n'existe pas : ajouter
        
        if( isInCart == false)
        {
            this.products.push(product);
        }

        this.displayProducts();
        
        // JSON : javascript object notation
        
        window.localStorage.setItem('cart', JSON.stringify(this.products));
    }
    
    displayProduct( price , name, quantity , id)
    {
        let html = `<tr data-id='${id}'> 
            <td>${quantity}</td> 
            <td>${name}</td> 
            <td>${price}</td>
            <td>${quantity * price}</td>
            <td> <button class="delete" data-id='${id}'> X </button></td>
        </tr>`
        $('#cart tbody').append(html);
    }
    
    displayProducts()
    {
        // vider l'affichage du panier 
        // pour remplacer l'ancien affichage
        $('#cart tbody').empty();
        
        for( let i = 0 ; i < this.products.length; i++)
        {
            this.displayProduct(
                this.products[i].price, 
                this.products[i].name, 
                this.products[i].quantity,
                this.products[i].id);
        }
    }
    
     validateCart()
    {
        let url = getRequestUrl() +'/sendcart';
        let cart = window.localStorage.getItem('cart');
        let data = { 'cart' : cart };
        
        $.post(url, data, this.confirmCart )
    }
    
    confirmCart( data )
    {
        if( data == 'true')
        {
            // redirection en javascript
            
            window.location.href = getRequestUrl() +'/confirm';
        }
    }
}

document.addEventListener('DOMContentLoaded' , function()
{
    let cart = new Cart();
    
})
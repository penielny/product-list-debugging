# The Issues 

## app.componet.ts
- @Coponent Decorator is to wrap the Class 
Also remove the sei-column at the end of the @component Decorator declaration 
Added to the AddToCartComponent imports array

## App.component.html
- Looping through the desserts list and rendering each data specifically 
Price formarting 


## add-to-cart.component.ts
- To successfully import it in the app.component.ts i had to make the component a standalone
- Added a return to the decreaseProductItem  method if the quantity < 1. To fix negative dessert quantity 

import { CartService } from "./cart";
import { DessertService } from "./dessert";

describe("test cart service", () => {
    let cartService: CartService;
    let dessertSservice: DessertService;
    const dessertName = "Banku";

    beforeEach(() => {
        dessertSservice = new DessertService();
        cartService = new CartService(dessertSservice);
    });


    it('checks the default value of cart', () => {
        expect(cartService.getValue()).toEqual([])
    });

    it('add item to cart', () => {

        cartService.addToCart(dessertName)
        expect(cartService.getValue().length).toBe(1)
        expect(cartService.getValue()).toEqual([{
            dessertName: dessertName,
            quantity: 1,
        }])
        
    });

    it('increase item quantity in cart', () => {
        cartService.addToCart(dessertName)
        cartService.quantityAction(dessertName, "INCREASE");

        expect(cartService.getValue()).toEqual([{
            dessertName: dessertName,
            quantity: 2,
        }])
    });

    it('increase item quantity in cart', () => {
        cartService.addToCart(dessertName)
        cartService.quantityAction(dessertName, "INCREASE");
        cartService.quantityAction(dessertName, "DECREASE");

        expect(cartService.getValue()).toEqual([{
            dessertName: dessertName,
            quantity: 1,
        }])

        it('Checks if dessert is in cart', () => {
            cartService.addToCart(dessertName)
            expect(cartService.isInCart(dessertName)).toBeInstanceOf(Number)
            expect(cartService.isInCart(dessertName)).not.toBe(-1)
            expect(cartService.isInCart("Kenkey")).toBe(-1)
        });


        it('removes an item from cart', () => {
            cartService.addToCart(dessertName)
            cartService.removeFromCart(dessertName)
            expect(cartService.getValue().length).toBe(0)
        });


        it('gets the total price in cart', () => {
            const actualDesertName="Waffle with Berries";
            const dessertActualPrice = 6.50
            cartService.addToCart(actualDesertName)
            expect(cartService.getTotal()).toBe(dessertActualPrice)
        });
        

    });



})
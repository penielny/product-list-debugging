import { DessertService } from "./dessert";
import desseretData from './../../../public/data.json';
import { Dessert } from "../interfaces/dessert";

describe("testing dessert service", () => {
    let dessertSservice: DessertService;

    beforeEach(() => {
        dessertSservice = new DessertService()
    })

    it('load dessert from json data', () => {
        dessertSservice.loadJsonData()
        expect(dessertSservice.getDesserts().length).toBe(desseretData.length)
        expect(dessertSservice.getDesserts()).toEqual(desseretData)
    });


    it('gets a single dessert from dessert list', () => {
        const validDessert = dessertSservice.getDessert("Vanilla Bean Crème Brûlée")
        const inValidDessert = dessertSservice.getDessert("Banku")
        expect(validDessert).not.toBe(undefined)
        expect((validDessert as Dessert).name).not.toBeUndefined()
        expect(inValidDessert).toBe(undefined)
    });

})
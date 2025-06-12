import { Injectable } from "@angular/core";
import { Dessert } from "../interfaces/dessert";
import desseretData from './../../../public/data.json';

@Injectable({
    providedIn: 'root'
})

export class DessertService {

    private desserts: Dessert[] = []

    constructor() {
        this.loadJsonData()
    }

    getDesserts():Dessert[]{
        return this.desserts;
    }

    getDessert(dessertName: string): Dessert|undefined {
        return this.desserts.find((dessert)=>dessert.name === dessertName )
    }

    loadJsonData() {
        this.desserts = desseretData;
    }
}

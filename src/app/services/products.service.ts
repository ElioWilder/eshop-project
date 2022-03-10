import { Injectable } from "@angular/core";
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products: Product[] = [
        new Product(
            1,
            "Noctis Lucis Caelum",
            "Figurine Play Arts Kai - Square-Enix - Final Fantasy XV",
            "../img/Noctis.jpg",
            14900,
            0,
            "Like",
            new Date("2021-07-17"),
            ['27 cm']
        ),
        new Product(
            2,
            "Cloud Strife",
            "Figurine Play Arts Kai - Square-Enix - Final Fantasy VII Remake",
            "../img/Cloud.jpeg",
            15900,
            0,
            "Like",
            new Date("2021-05-24"),
            ['28 cm']
        ),
        new Product(
            3,
            "Lightning",
            "Figurine Play Arts Kai - Square-Enix - Final Fantasy Dissidia",
            "../img/Lightning.jpg",
            15400,
            0,
            "Like",
            new Date("2022-03-02"),
            ['25 cm']
        ),
        new Product(
            4,
            "Zack Fair",
            "Figurine Play Arts Kai - Square-Enix - Final Fantasy VII Crisis Core",
            "../img/Zack.jpg",
            20100,
            0,
            "Like",
            new Date("2021-02-28"),
            ['27 cm']
        ),
        new Product(
            5,
            "Sephiroth",
            "Figurine Play Arts Kai - Square-Enix - Final Fantasy VII Remake",
            "../img/Sephiroth.webp",
            16000,
            0,
            "Like",
            new Date("2020-09-19"),
            ['26 cm']
        ),
        new Product(
            6,
            "Freya Crescent & Beatrix",
            "Figurine Bring Arts - Square-Enix - Final Fantasy IX",
            "../img/Freya-Beatrix.jpeg",
            15900,
            0,
            "Like",
            new Date("2021-07-25"),
            ['16 cm']
        ),
        new Product(
            7,
            "Bibi Ornitier & Adelbert Steiner",
            "Figurine Bring Arts - Square-Enix - Final Fantasy IX",
            "../img/Bibi-Steiner.jpg",
            21100,
            0,
            "Like",
            new Date("2019-03-26"),
            ['15 cm']
        ),
        new Product(
            8,
            "Y'shtola",
            "figurine Minion - Square-Enix - Final Fantasy XIV",
            "../img/Y'shtola.jpg",
            5300,
            0,
            "Like",
            new Date("2021-04-14"),
            ['22 cm']
        ),
        new Product(
            9,
            "Aerith Gainsborough",
            "Figurine Static Arts - Square-Enix - Final Fantasy VII Remake",
            "../img/Aerith.webp",
            21400,
            0,
            "Like",
            new Date("2022-01-15"),
            ['24 cm']
        ),
        new Product(
            10,
            "Vincent Valentine",
            "Figurine Static Arts - Square-Enix - Final Fantasy VII : Advent Children",
            "../img/Vincent.jpg",
            4500,
            0,
            "Like",
            new Date("2019-06-29"),
            ['14 cm']
        )

    ]

    getAllProducts(): Product[]{
        return this.products;
    }

    getOneProduct(id: number): Product | undefined {
        return this.products.find((p) => p.id === id);
    }

    onAddLike(product: Product): void {
        if (product.likes === 0) {
          product.likes++;
          product.likelabel = "Unlike";
        } else {
          product.likes--;
          product.likelabel = "Like";
        } 
      }
}
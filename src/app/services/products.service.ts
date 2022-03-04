import { Injectable } from "@angular/core";
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products: Product[] = [
        new Product(
            "Final Fantasy XV - Figurine Play Arts Kai Noctis Lucis Caelum",
            "Marque : Square-Enix",
            "../img/Noctis.jpg",
            14900,
            0,
            "Like",
            new Date("2022-03-02"),
            ['27 cm']
        ),
        new Product(
            "Final Fantasy VII Remake - Figurine Play Arts Kai n°1 Cloud Strife",
            "Marque : Square-Enix",
            "../img/Cloud.jpeg",
            15900,
            0,
            "Like",
            new Date("2022-03-02"),
            ['28 cm']
        ),
        new Product(
            "Final Fantasy Dissidia - Figurine Play Arts Kai Lightning",
            "Marque : Square-Enix",
            "../img/Lightning.jpg",
            15400,
            0,
            "Like",
            new Date("2022-03-02"),
            ['25 cm']
        ),
        new Product(
            "Final Fantasy VII Crisis Core - Figurine Play Arts Kai Zack Fair",
            "Marque : Square-Enix",
            "../img/Zack.jpg",
            20100,
            0,
            "Like",
            new Date("2022-03-02"),
            ['27 cm']
        ),
        new Product(
            "Final Fantasy VII Remake - Figurine Play Arts Kai Sephitoth",
            "Marque : Square-Enix",
            "../img/Sephiroth.webp",
            16000,
            0,
            "Like",
            new Date("2022-03-02"),
            ['26 cm']
        ),
        new Product(
            "Final Fantasy IX - Figurine Bring Arts Freya Crescent & Beatrix",
            "Marque : Square-Enix",
            "../img/Freya-Beatrix.jpeg",
            15900,
            0,
            "Like",
            new Date("2022-03-02"),
            ['16 cm']
        ),
        new Product(
            "Final Fantasy IX - Figurine Bring Arts Bibi Ornitier & Adelbert Steiner",
            "Marque : Square-Enix",
            "../img/Bibi-Steiner.jpg",
            21100,
            0,
            "Like",
            new Date("2022-03-02"),
            ['15 cm']
        ),
        new Product(
            "Final Fantasy XIV - Minion Figurine Y'shtola",
            "Marque : Square-Enix",
            "../img/Y'shtola.jpg",
            5300,
            0,
            "Like",
            new Date("2022-03-02"),
            ['22 cm']
        ),
        new Product(
            "Final Fantasy VII Remake - Figurine Aerith Dress Ver. Static Arts",
            "Marque : Square-Enix",
            "../img/Aerith.webp",
            21400,
            0,
            "Like",
            new Date("2022-03-02"),
            ['24 cm']
        ),
        new Product(
            "Final Fantasy VII : Advent Children - Figurine Static Arts Vincent Valentine",
            "Marque : Square-Enix",
            "../img/Vincent.jpg",
            4500,
            0,
            "Like",
            new Date("2022-03-02"),
            ['14 cm']
        )

    ]

    getAllProducts(): Product[]{
        return this.products;
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
export class Product {
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public likes: number,
        public likelabel: string,
        public createDate: Date,
        public size?: string[],
        
    ) {

    }
}
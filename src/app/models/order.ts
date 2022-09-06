export class Order{
    items!: OrderItem[] ;
}

export class OrderItem{

    name?: string ;
    quantity!: number ;
    accompaniment?: string;
    sauces!: string[] ;
    price!: number;
    image?:string;
}
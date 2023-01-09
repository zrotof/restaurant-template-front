export class Order{
    items!: OrderItem[] ;
}

export class OrderItem{

    name?: string ;
    quantity!: number ;
    mandatory?: string;
    optionals!: string[] ;
    price!: number;
    image?:string;
    ref?:string;
}
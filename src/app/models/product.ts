export class Product {

    id?: string;
    name?: string;
    price?: number;
    image?: string;
    imageBg?: string;
    shortDescription?: string;
    longDescription?: string;
    ingredients?: string[];
    mandatoryChoices?: string[];
    optionalChoices?: [];
    combined?: boolean;
    ref?: string; 
}
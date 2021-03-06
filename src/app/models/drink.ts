export interface Drink {
    idDrink: string;
    strDrink: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
    strDrinkThumb: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsDE: string;
    strInstructionsIT: string;
    strCategory: string;
    // strIBA?: any;
    // strDrinkAlternate?: any;     

    // strInstructionsES?: any;
    // strInstructionsFR?: any;
    // strInstructionsZHHANS?: any;
    // strInstructionsZHHANT?: any;
    // strTags?: any;
    // strVideo?: any;
    // strIngredient1: string;
    // strIngredient2: string;
    // strIngredient3: string;
    // strIngredient4: string;
    // strIngredient5?: any;
    // strIngredient6?: any;
    // strIngredient7?: any;
    // strIngredient8?: any;
    // strIngredient9?: any;
    // strIngredient10?: any;
    // strIngredient11?: any;
    // strIngredient12?: any;
    // strIngredient13?: any;
    // strIngredient14?: any;
    // strIngredient15?: any;

    // strImageSource?: any;
    // strImageAttribution?: any;

    // strMeasure4?: any;
    // strMeasure5?: any;
    // strMeasure6?: any;
    // strMeasure7?: any;
    // strMeasure8?: any;
    // strMeasure9?: any;
    // strMeasure10?: any;
    // strMeasure11?: any;
    // strMeasure12?: any;
    // strMeasure13?: any;
    // strMeasure14?: any;
    // strMeasure15?: any;
}

export interface RootObject {
    drinks: Drink[];
}
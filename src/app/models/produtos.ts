export interface Produtos {
    imagem: string;
    nomeProduto: string;
    descricao: string;
    preco: number;
    emPromocao: boolean;
    desconto: number;
    categoriaBebida: CategoriaBebida;
}
export enum CategoriaBebida {
    ABSINTO = 'absinto',
    CACHACA = 'cachaça',
    CERVEJA = 'cerveja',
    CHAMPANHE = 'champanhe',
    CONHAQUE = 'conhaque',
    ENERGETICO = 'energético',
    GIM = 'gim',
    LICOR = 'licor',
    RUM = 'rum',
    SAQUE = 'saquê',
    TEQUILA = 'tequila',
    VINHO = 'vinho',
    VODKA = 'vodka',
    WHISKY = 'whisky'
}

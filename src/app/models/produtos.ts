export interface Produtos {
    imagem: string;
    nomeDoProduto: string;
    descricao: string;
    preco: string;
    emPromocao: string;
    desconto: string;
    categoria: CategoriaProduto;
}
export enum CategoriaProduto{
    BEBIDAS = 'bebidas'

}

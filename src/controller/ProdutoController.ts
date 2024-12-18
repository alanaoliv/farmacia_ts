import { Produto  } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{
    
    //Coleção Array para armazenar os Objetos do Produto
    private listaProdutos = new Array<Produto>;

    public id: number = 0;

    procurarPorID(id: number): void {
        
    }
}
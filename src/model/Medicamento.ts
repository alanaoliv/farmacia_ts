import { Produto } from "./Produto";

export class Medicamento extends Produto{
    
    //Atributo de Medicamento
    private _generico: string;

    //Metodo Construtor
	constructor(id: number, nome: string, tipo: number, preco: number, generico: string) {
        super(id, nome, tipo, preco);
		this._generico = generico;
	}

	public get generico(): string {
		return this._generico;
	}

	public set generico(value: string) {
		this._generico = value;
	}

    public visualizar(): void {
       super.visualizar();
       console.log(`\nGenérico: ${this._generico}`);
    }
}

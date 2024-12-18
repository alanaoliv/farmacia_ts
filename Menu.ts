import readlinesync = require('readline-sync');
import {colors} from "./src/util/Colors"
import { ProdutoController } from './src/controller/ProdutoController';
import { Medicamento } from './src/model/Medicamento';
import { Cosmetico } from './src/model/Cosmetico';

export function main (){

    let opcao, id, tipo, preco: number;
    let nome, generico, fragrancia: string;
    const tipoProduto = ['Medicamento', 'Cosmetico'];

    //Instanciar Objeto da Classe ProdutoController
    const produtoController = new ProdutoController();

    //Objetos de teste
    produtoController.cadastrar(new Medicamento(produtoController.gerarID(), "Tylenol", 1, 42.00, "Paracetamol"))
    produtoController.cadastrar(new Medicamento(produtoController.gerarID(), "Sabonete Rexona", 2, 3.00, "Sun"))

    while (true){

        menu();

        opcao = readlinesync.questionInt();

        if (opcao === 0 ){
            about()
            process.exit(0)
        }

        switch(opcao){
            case 1:
                console.log("\nCriar Produto\n");
                
                nome = readlinesync.question("Digite o Nome do Produto: ");
 
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
 
                preco = readlinesync.questionFloat("Digite o preco: ");

                switch(tipo){
                    case 1:
                        generico = readlinesync.question("Digite o Nome Generico do Produto: ");
                        produtoController.cadastrar (new Medicamento(produtoController.gerarID(), nome, tipo, preco, generico))
                        break;
                    case 2:
                        fragrancia = readlinesync.question("Digite a Fragrancia do Produto: ");
                        produtoController.cadastrar (new Cosmetico(produtoController.gerarID(), nome, tipo, preco, fragrancia))
                        break;
                }
                keyPress();
                break;
            case 2:
                console.log("\nListar Todos os produtoController\n");
                produtoController.listarTodas();
                keyPress();
                break;
            case 3:
                console.log("\nConsultar Produto por ID\n");

                id = readlinesync.questionInt("Digite o ID: ");
                produtoController.procurarPorID(id);

                keyPress();
                break;
            case 4: 
            console.log("\nAtualizar Produto\n ");

            id = readlinesync.questionInt("Digite o Id do Produto: ");
 
            // Verifica se o Produto existe
            let produto = produtoController.buscarNoArray(id);

            if (produto !== null) {

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = produto.tipo;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        generico = readlinesync.question("Digite o Nome Generico do Medicamento: ");
                        // Observe que na atualização, enviamos o id, ao invés de chamaramos
                        // o método gerarId()
                        produtoController.atualizar(new Medicamento(id, nome, tipo, preco, generico));


                        break;
                    case 2:
                        fragrancia = readlinesync.question("Digite a frangancia do Cosmetico: ");
                        // Observe que na atualização, enviamos o id, ao invés de chamaramos
                        // o método gerarId()
                        produtoController.atualizar(new Cosmetico(id, nome, tipo, preco, fragrancia));

                        break;
                }

            } else
                console.log("Produto não encontrado!")

                keyPress();
                break;
            case 5: 
                console.log("\nDeletar Produto\n");

                id = readlinesync.questionInt("Digite o ID: ");
                produtoController.deletar(id);

                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress();
            break;

        }


    }
}

function menu(): void{
    console.log(colors.bg.black, colors.fg.red)
    console.log("_________________________________________________________")
    console.log("                        Farmácia                         ")
    console.log("_________________________________________________________")
    console.log("           1 - Criar Produto                             ")
    console.log("           2 - Listar Todos os produtoController                  ")
    console.log("           3 - Buscar Produto por ID                     ")
    console.log("           4 - Atualizar Dados do Produto                ")
    console.log("           5 - Deletar Produto                           ")
    console.log("           0 - Sair                                      ")
    console.log("_________________________________________________________")
    console.log("Entre com a opção desejada: ", colors.reset)
}   

function about(){
    console.log(colors.bg.black, colors.fg.red)
    console.log("\n_________________________________________________________");
    console.log("\nProjeto Desenvolvido por: ");
    console.log("\nAlana Sanches Oliveira - alanasanches97@gmail.com");
    console.log("\n");
    console.log("\n_________________________________________________________", colors.reset)
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
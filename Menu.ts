import readlinesync = require('readline-sync');
import {colors} from "./src/util/Colors"

export function main (){

    let opcao, id, tipo, preco: number;
    let nome: string;
    const tipoProdutos = ['Medicamento', 'Cosmetico'];

    do{

        menu();

        opcao = readlinesync.questionInt();

        if (opcao === 0 ){
            about()
            process.exit(0)
        }

        switch(opcao){
            case 1:
                console.log("\nCriar Produto\n");

                keyPress();
            break;
            case 2:
                console.log("\nListar Todos os Produtos\n");
                keyPress();
            break;
            case 3:
                console.log("\nConsultar Produto por ID\n");

                keyPress();
            break;
            case 4: 
            console.log("\nAtualizar Produto\n ");
                keyPress();
            break;
            case 5: 
            console.log("\nDeletar Produto\n");
                keyPress();
            break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress();
            break;

        }


    }while
}

function menu(): void{
    console.log(colors.bg.black, colors.fg.red)
    console.log("_________________________________________________________")
    console.log("                        Farmácia                         ")
    console.log("_________________________________________________________")
    console.log("           1 - Criar Produto                               ")
    console.log("           2 - Listar Todos os Produtos                    ")
    console.log("           3 - Consultar Produto por ID                   ")
    console.log("           4 - Atualizar Produto                  ")
    console.log("           5 - Deletar Produto                  ")
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
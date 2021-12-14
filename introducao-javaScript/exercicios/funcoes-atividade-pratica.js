//Alunos aprovados
/*
const alunos = [
    {nome: 'Ana', nota: 7},
    {nome: 'João', nota: 3},
    {nome: 'Pedro', nota:9},

];

function alunosAprovados(arr, media){
    let aprovados =[];

    for(let i = 0; i < alunos.length; i++){
        const {nota, nome} = arr[i];

        if(nota >= media)
            aprovados.push(nome);
        }return aprovados;
    }
console.log(alunosAprovados(alunos, 5));
*/

// Calcula idade



function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade. `;
}

const pessoa = { nome: 'Naldo', idade: 38 };

console.log(calculaIdade.call(pessoa, 5));
console.log(calculaIdade.apply(pessoa,[7]));
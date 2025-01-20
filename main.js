const alunos = [
    { nome: "Felipe", nota: 5 },
    { nome: "Naruto", nota: 7 },
    { nome: "Goku", nota: 8 },
    { nome: "Luffy", nota: 4 },
    { nome: "Seiya", nota: 6 }
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);

aprovados.forEach(aluno => {
console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`);
}); // conteúdo completo dos objetos


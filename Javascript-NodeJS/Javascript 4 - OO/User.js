export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {

        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante"; 
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    } 

    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error("Formato inválido.")
        }
        this.#nome = novoNome;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    set nascimento(novoNascimento) {
        this.#nascimento = novoNome;
    }

    set role(novaRole) {
        this.#role = novaRole;
    }

    set Ativo(novoStatus) {
        this.#ativo = novoStatus;
    }


    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo,
        })
    }

    exibirInfos() {

        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
    }
}; 

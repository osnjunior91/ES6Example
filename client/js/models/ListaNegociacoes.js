class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adcionaNegociacoes(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return this._negociacoes;
    }
}
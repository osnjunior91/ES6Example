class NegociacaoController {
    
    constructor() {
        //Diminui a busca dos componentes no DOM.
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adciona(event) {
        event.preventDefault();
        let negociacao = new Negociacao(
            new Date(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }
}
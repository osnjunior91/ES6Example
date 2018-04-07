class NegociacaoController {
    
    constructor() {
        //Diminui a busca dos componentes no DOM.
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adciona(this._criaNegociacao());
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            new Date(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }

    _limpaFormulario() {
        this._data = '';
        this._quantidade = 1;
        this._valor = 0.0;
        this._data.focus();
    }
}
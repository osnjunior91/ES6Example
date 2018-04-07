class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adcionaNegociacoes(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateTime.textToDate(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }

    _limpaFormulario() {
        this._data = '';
        this._quantidade = 1;
        this._valor = 0.0;
    }
}
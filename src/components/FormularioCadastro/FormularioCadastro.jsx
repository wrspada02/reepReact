
    import React,{ Component } from "react";
    import "./style.css";

    export class FormularioCadastro extends Component{

        constructor(props){
            super(props);
            this.titulo = " ";
            this.texto = " ";
            this.categoria = "Sem categoria";
        }

        _handleMudancaCategoria(evento){
            evento.stopPropagation();
            this.categoria = evento.target.value;
        }

        _handleMudancaTitulo(evento){
            evento.stopPropagation();
            this.titulo = evento.target.value;
            console.log(this.titulo);
        }

        _handleMudancaTexto(evento){
            evento.stopPropagation();
            this.texto = evento.target.value;
            console.log(this.texto);
        }

        _criarNota(evento){
            evento.preventDefault();
            evento.stopPropagation();
            this.props.criarNota(this.titulo, this.texto, this.categoria);
        }

        render(){
            return(
                <form className="formulario-input__pai"
                onSubmit={this._criarNota.bind(this)}>
                <select 
                onChange={this._handleMudancaCategoria.bind(this)} 
                className="formulario-input__select-categorias">
                    <option>Sem categoria</option>
                    {this.props.categorias.map((categoria) => {
                        return <option>{categoria}</option>
                    })}
                </select>
                <input 
                className="formulario-input__titulo" 
                type="text" 
                placeholder="Titulo"
                onChange={this._handleMudancaTitulo.bind(this)}/>
                <textarea 
                rows={15}
                className="formulario-input-areaTitulo"
                placeholder="Escreva sua nota"
                onChange={this._handleMudancaTexto.bind(this)}/>
                <button className="formulario--input__botao">Criar nota</button>
              </form>
            );
        }
    }
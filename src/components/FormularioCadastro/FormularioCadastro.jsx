
    import React,{ Component } from "react";
    import "./style.css";

    export class FormularioCadastro extends Component{

        constructor(){
            super();
            this.titulo = " ";
        }

        handleMudancaTitulo(evento){
            this.titulo = evento.target.value;
            console.log(this.titulo);
        }

        render(){
            return(
                <form className="formulario-input__pai">
                <input 
                className="formulario-input__titulo" 
                type="text" 
                placeholder="Titulo"
                onChange={this.handleMudancaTitulo}/>
                <textarea 
                rows={15}
                className="formulario-input-areaTitulo"
                placeholder="Escreva sua nota"/>
                <button className="formulario--input__botao">Criar nota</button>
              </form>
            );
        }
    }
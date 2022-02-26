
    import React, { Component } from 'react';
    import "./style.css";

    export class ListaDeCategorias extends Component {

        constructor(){
            super();
            this.state = {categorias: []};
        }

        componentDidMount(){
            this.props.categoria.inscrever(this._novasCategorias.bind(this));
        }

        _novasCategorias(categorias){
            console.log(categorias);
            this.setState({...this.state, categorias});
        }

        _handlerEventoInput(evento){
            if(evento.key == 'Enter'){
                let valorCategoria = evento.target.value;
                this.props.adicionarCategoria(valorCategoria);
            }
        }

        render() { 
            return (
                <section className='conteudoCategorias'>
                    <ul className='conteudoCategorias__lista'>
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className='conteudoCategorias__lista--item'>{categoria}</li>
                    })}
                    </ul>
                    <input 
                    type="text" 
                    className='conteudoCategorias__botao'
                    placeholder='Adicionar categoria'
                    onKeyUp={this._handlerEventoInput.bind(this)}/>
                </section>
            );
        }
    }
     
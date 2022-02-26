
import { ListaDeNotas } from './components/ListaDeNotas';
import { FormularioCadastro } from './components/FormularioCadastro';
import { ListaDeCategorias } from './components/ListaDeCategorias';
import React, { Component } from 'react';
import "./assets/reset.css";
import "./assets/App.css";
import './assets/index.css';
import Categorias from './dados/Categoria';
import ArrayDeNotas from './dados/ArrayDeNotas';


export class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    };


  render(){
    return (
      <main className='conteudoPagina'>
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}//Passando a function como propriedade do formulario, que pode ser acessada no arquivo deste componente
          className="formulario-pagina" />
        <section className='conteudoPagina__principal'>
          <ListaDeCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categoria={this.categorias}/>
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas}
            className="notas-pagina" />
        </section>
      </main>
    );
  }
}
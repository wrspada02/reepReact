
import { ListaDeNotas } from './components/ListaDeNotas';
import { FormularioCadastro } from './components/FormularioCadastro';
import { ListaDeCategorias } from './components/ListaDeCategorias';
import React, { Component } from 'react';
import "./assets/reset.css";
import "./assets/App.css";
import './assets/index.css';


export class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    }
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state.categorias, categorias: novoArrayCategorias};
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <main className='conteudoPagina'>
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}//Passando a function como propriedade do formulario, que pode ser acessada no arquivo deste componente
          className="formulario-pagina" />
        <section className='conteudoPagina__principal'>
          <ListaDeCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categoria={this.state.categorias}/>
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
            className="notas-pagina" />
        </section>
      </main>
    );
  }
}

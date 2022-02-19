    
    import { ListaDeNotas } from './components/ListaDeNotas';
    import { FormularioCadastro } from './components/FormularioCadastro';
    import React, { Component } from 'react';
    import "./assets/reset.css";
    import "./assets/App.css";
    import './assets/index.css';
    

    export class App extends Component{

      constructor(){
        super();
        this.state = {
          notas: []
        };
      }

      criarNota(titulo, texto){
        const novaNota = {titulo, texto};
        const novoArrayNotas = [...this.state.notas, novaNota];
        console.log(this.state);
        const novoEstado = {
          notas:novoArrayNotas
        }
        this.setState(novoEstado);
      }

      render(){
        console.log(`render`);
        return(
          <main className='conteudoPrincipal'>
            <FormularioCadastro 
            criarNota = {this.criarNota.bind(this)}//Passando a function como propriedade do formulario, que pode ser acessada no arquivo deste componente
            className="formulario-pagina"/>
            <ListaDeNotas
            notas = {this.state.notas} 
            className="notas-pagina"/>
          </main>
        );
      }
    }

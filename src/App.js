    
    import { ListaDeNotas } from './components/ListaDeNotas';
    import { FormularioCadastro } from './components/FormularioCadastro';
    import React, { Component } from 'react';
    import "./assets/reset.css";
    import "./assets/App.css";
    import './assets/index.css';
    

    export class App extends Component{
      render(){
        return(
          <main className='conteudoPrincipal'>
            <FormularioCadastro className="formulario-pagina"/>
            <ListaDeNotas className="notas-pagina"/>
          </main>
        );
      }
    }

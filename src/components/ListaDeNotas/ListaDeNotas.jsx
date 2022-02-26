
    import React,{ Component } from "react";
    import { CardNota } from "../CardNota";
    import "./style.css";

    export class ListaDeNotas extends Component{

        constructor(){
            super();
            this.state = {notas: []};
        }

    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas.bind(this));
      }
  
      _novasNotas(notas){
        this.setState({...this.state, notas});
      }

        render(){
            return (
                <ul className="lista-notas">
                    {this.props.notas.map((nota, index) => {
                        return (  
                            <li className="lista-notas__item" key={index}>        
                                <CardNota 
                                indice={index}
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo}
                                texto={nota.texto}
                                categoria={nota.categoria}
                                />
                            </li>
                        );
                    })}
                </ul>
                );
        }
    }
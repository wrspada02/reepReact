
    import React,{ Component } from "react";
    import { CardNota } from "../CardNota";
    import "./style.css";

    export class ListaDeNotas extends Component{

        render(){
            return (
                <ul className="lista-notas">
                    {this.props.notas.map((nota, index) => {
                        return (
                            <li className="lista-notas__item" key={index}>
                                {console.log(nota.titulo, nota.texto)}
                                <CardNota 
                                titulo={nota.titulo}
                                texto={nota.texto}
                                />
                            </li>
                        );
                    })}
                </ul>
                );
        }
    }

    import React,{ Component } from "react";
    import { CardNota } from "../CardNota";
    import "./style.css";

    export class ListaDeNotas extends Component{
        render(){
            return (
                <ul className="lista-notas">
                    {Array.of("Trabalho", "Trabalho", "Estudos", 1, 1, 1, 1, 1, 1, 1).map((categoria, index) => {
                        return (
                            <li className="lista-notas__item" key={index}>
                                <CardNota/>
                            </li>
                        );
                    })}
                </ul>
                );
        }
    }

    import React,{ Component } from 'react';//imrc
    import "./style.css";
    import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";
    
    export class CardNota extends Component{//cc 

        apagarNota(){
            const indice = this.props.indice;
            this.props.apagarNota(indice);
        }

        render(){ 
            return(
                <article className='card-nota'>
                    <header className='card-nota__cabecalho'>
                        <h3 className='card-nota__titulo'>{this.props.titulo}</h3>
                        <DeleteSVG onClick={this.apagarNota.bind(this)}/>
                        <h4>{this.props.categoria}</h4>
                    </header>
                    <p className='card-nota__descricao'>{this.props.texto}</p>
                </article>
            );
        }
    }

    import React,{ Component } from 'react';//imrc
    import "./style.css";
    
    export class CardNota extends Component{//cc 
        render(){ 
            return(
                <article className='card-nota'>
                    <header>
                        <h3 className='card-nota__titulo'>{this.props.titulo}</h3>
                    </header>
                    <p>{this.props.texto}</p>
                </article>
            );
        }
    }
import Pessoa from '../Pessoa/Pessoa'
import './Times.css'
const Times = (props) => {
   
    const css = { backgroundColor: props.corSecundaria }

    return (
         (props.colaboradores.length > 0) ?  <section className='times' style={css}>
         <h3 style={{borderColor:  props.corPrimaria}}>{props.titulo}</h3>
            <div className='pessoas'>
            {props.colaboradores.map(colaborador => <Pessoa corDeFundo ={props.corPrimaria} key ={colaborador.titulo} titulo={colaborador.titulo} autor={colaborador.autor} imagem={colaborador.imagem}/>)}
      </div>
        </section> 
    : ''
    ) 
}
export default Times
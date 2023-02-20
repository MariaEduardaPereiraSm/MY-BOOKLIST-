import './Pessoa.css'

const Pessoa = ({ titulo, imagem, autor, corDeFundo }) => {
    return(
        <div className='Pessoa'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={titulo}></img>
            </div>
            <div className='rodape'>
                <h4 style={{color: corDeFundo}}> {titulo}</h4>
                <h5> {autor} </h5>
            </div>
        </div>
        
    )
}

export default Pessoa
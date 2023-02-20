import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [imagem, setImagem] = useState('')
    const [tipo, settipo] = useState('')

    const salvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            titulo,
            autor,
            imagem,
            tipo
        
        })
        setTitulo('')
        setAutor('')
        setImagem('')
        settipo('')
    }

    return (
        <section className="formulario">
            <form onSubmit={salvar} >
                <h2>Preencha os campos abaixo para adicionar seus livros lidos</h2>
                <CampoTexto
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                    obrigatorio={true}
                    label="titulo"
                    placeholder="Digite o titulo do livro" />

                <CampoTexto
                    valor={autor}
                    aoAlterado={valor => setAutor(valor)}
                    obrigatorio={true}
                    label="Autor"
                    placeholder="Digite o nome do autor do livro" />

                <CampoTexto
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem do livro" />

                <ListaSuspensa
                    valor={tipo}
                    aoAlterado={valor => settipo(valor)}
                    obrigatorio={true}
                    label="Tipo"
                    itens={props.times} />

                <Botao>Criar Card</Botao>
          
                
            </form>
        </section>
    )
}
export default Formulario
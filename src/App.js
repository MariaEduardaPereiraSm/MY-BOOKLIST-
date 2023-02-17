import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import { useState } from 'react';
import Times from './componentes/Times/Times';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const time = [
    {
      titulo: 'Romance',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      titulo: 'Ficção',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      titulo: 'Terror',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      titulo: 'Fantasia',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      titulo: 'Suspense',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      titulo: 'Desenvolvimento Pessoal',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      titulo: 'Estudos',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  return (

    <div className="App">
      <Banner />
      <Formulario times={time.map(time => time.titulo)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      {time.map(time => <Times
        key={time.titulo}
        titulo={time.titulo}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.titulo)}
      />)}

    </div>
  );
}

export default App;

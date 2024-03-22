import React, { useState } from 'react';
import FormularioNota from './FormularioNota';
import ListaNotas from './ListaNotas';
import './styles.css';

function App() {
    const [notas, setNotas] = useState([]);

    const agregarNota = (nuevaNota) => {
        setNotas([...notas, nuevaNota]);
    };

    const editarNota = (id, nuevoContenido) => {
        const nuevasNotas = notas.map(nota =>
            nota.id === id ? { ...nota, contenido: nuevoContenido } : nota
        );
        setNotas(nuevasNotas);
    };

    const eliminarNota = (id) => {
        const nuevasNotas = notas.filter(nota => nota.id !== id);
        setNotas(nuevasNotas);
    };

    const marcarFavorita = (id) => {
        const nuevasNotas = notas.map(nota =>
            nota.id === id ? { ...nota, favorita: !nota.favorita } : nota
        );
        setNotas(nuevasNotas);
    };

    return (
        <div className="container">
            <h1>Mi diario de notas</h1>
            <FormularioNota agregarNota={agregarNota} />
            <ListaNotas
                notas={notas}
                editarNota={editarNota}
                eliminarNota={eliminarNota}
                marcarFavorita={marcarFavorita}
            />
        </div>
    );
}

export default App;
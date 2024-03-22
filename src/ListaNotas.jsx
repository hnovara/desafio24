import React from 'react';

function ListaNotas({ notas, editarNota, eliminarNota, marcarFavorita }) {
    const notasOrdenadas = [...notas].sort((a, b) => {
        if (a.favorita && !b.favorita) return -1;
        if (!a.favorita && b.favorita) return 1;
        return 0;
    });

    return (
        <ul className="lista">
            {notasOrdenadas.map(nota => (
                <li className="nota" key={nota.id}>
                    <h2>{nota.titulo}</h2>
                    <p>{nota.contenido}</p>
                    <button className="editar" onClick={() => editarNota(nota.id, prompt('Nuevo contenido'))}>Editar</button>
                    <button className="eliminar" onClick={() => eliminarNota(nota.id)}>Eliminar</button>
                    <button className="favorita" onClick={() => marcarFavorita(nota.id)}>
                        {nota.favorita ? 'Desmarcar' : 'Marcar'}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ListaNotas;
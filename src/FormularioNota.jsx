import React, { useState } from 'react';

function FormularioNota({ agregarNota }) {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo || !contenido) return;
        agregarNota({ id: Date.now(), titulo, contenido, favorita: false });
        setTitulo('');
        setContenido('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                className="input"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <textarea
                placeholder="Contenido"
                className="textarea"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
            ></textarea>
            <button className="button" type="submit">Agregar Nota</button>
        </form>
    );
}

export default FormularioNota;
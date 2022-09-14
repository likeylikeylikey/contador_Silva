import React, {useState} from "react";

const Usuariuos = () => {
    const [usuarios, setUsuarios] = useState([{ nombre: Nirvana}, { nombre: Bianca}])
    
    const nicolas = {nombre:'Nicolas'};

    const agregarNicolas = () =>{
        setUsuarios([...usuarios,nicolas])
    }

    return(
        <>
        <h1>Usuarios</h1>
        <button onClick={agregarNicolas}>Agregar a Nico</button>
        <ul>
            {usuarios.map((usuario,indice)=>(
                <h2>{usuario.nombre}</h2>
            ))}
        </ul>
        </>
    )
}

export default Usuarios
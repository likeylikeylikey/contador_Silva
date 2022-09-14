import React from "react";

const MiComponente = ({stock, funcion}) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        setContador(contador - 1);
    }

    const reset = () => {
        setContador(0);
        funcion();
    }

return (
    <>
    <div>MiComponente</div>
    <h1>{contador}</h1>
    <button onClick={handlerClick}>click me</button>
    </>
    )
}

export default MiComponente


import { useState, useEffect } from "react"

export const Efecto = () => {
  const [contador, setContador] = useState(0);

    //console.log('El componente se renderizó');

    useEffect(() => {
        console.log('El efecto se ejecutó');
    }, [contador]);

  return (
    <div>                   
        <h2>useEffect: ejemplo</h2>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
            Cambiar estado
        </button>
    </div>
  )
}
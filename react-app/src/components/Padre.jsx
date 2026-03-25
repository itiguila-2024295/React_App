import { Hijo } from './Hijo.jsx'

export const Padre = () => {
  return (
    <div>
        <h3>Componente Padre</h3>
        <Hijo mensaje="Hola, soy el padre" />
    </div>
  )
}

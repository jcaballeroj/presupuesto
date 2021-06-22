import React, {Fragment, useState} from 'react';
import Error from './Error';
const Pregunta = () => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);

    //lee el presupuesto 
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value));
    }

    const [error, guardarError] = useState(false);

    //submit
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //validar 
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        //si se pasa la validacion
        guardarError(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es incorrecto"/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>

     );
}
 
export default Pregunta;
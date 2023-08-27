import { NavLink } from "react-router-dom";
import styles from "./landing.module.css"

export default function Landing(){
    return(
        <div className={styles.form}> 
            <NavLink to="/formAlta" className={styles.link}>Formulario de Alta de Usuarios</NavLink>
            <NavLink to="/formBaja" className={styles.link}>Formulario de Baja de Usuarios</NavLink>
            <NavLink to="/formTransf" className={styles.link}>Formulario de Transferencia de Usuarios</NavLink>
        </div>
    )
}
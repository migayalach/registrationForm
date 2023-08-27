import React from 'react';
import styles from './formTransf.module.css';
import { Link } from 'react-router-dom';

const camposServidorPublico = [
    { label: 'Nombre', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Cargo anterior', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Cargo nuevo', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Ubicación (oficina)', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Fecha de inicio del nuevo cargo', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Fecha de archivo', placeholder: 'Llenado por Apoyo en Telefonia' },
];

const camposEquipoComputacion = [
    { label: 'Tipo', value: 'PC de escritorio', readOnly: true },
    { label: 'Host', placeholder: 'Llenado por Servicio Técnico' },
    { label: 'Dirección IP', placeholder: 'Llenado por Servicio Técnico' },
    { label: 'Etiqueta de Control', placeholder: 'Llenado por Servicio Técnico' },
    { label: 'Tipo', value: 'Portátil', readOnly: true },
    { label: 'Host', placeholder: 'Llenado por Servicio Técnico' },
    { label: 'Dirección IP', placeholder: 'Llenado por Servicio Técnico' },
    { label: 'Etiqueta de Control', placeholder: 'Llenado por Servicio Técnico' },
];

export default function FormTransf() {
    return (
        <form className={styles.form}>
            <div className={styles.title}>
                <h1>Formulario de Transferencia de Usuarios</h1>
                <h2>FORM-UTIC-002</h2>
            </div>

            <hr className={styles.hr}/>

            <div className={styles.contenido}>
                <h3>1. Datos del servidor público:</h3>
                {camposServidorPublico.map((campo, index) => (
                    <div key={index}>
                        <label className={styles.label}>{campo.label}: </label>
                        <input className={styles.input} placeholder={campo.placeholder} />
                    </div>
                ))}
            </div>

            <hr className={styles.hr}/>

            <div className={styles.contenido}>
                <h3>2. Equipos de Computación:</h3>
                {camposEquipoComputacion.map((campo, index) => (
                    <div key={index}>
                        <label className={styles.label}>{campo.label}: </label>
                        {campo.readOnly ? (
                            <input className={styles.input} value={campo.value} readOnly />
                        ) : (
                            <input className={styles.input} placeholder={campo.placeholder} />
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.btn}>
            <Link to="/" className={styles.btn}>
            <button className={styles.btnback}>Volver</button>
            </Link>
            <Link to="" className={styles.btn}>
            <button className={styles.btnback}>Enviar</button>
            </Link>
            </div>

            <hr className={styles.hr}/>

            <h4 className={styles.texto}>
                Para el ejercicio del nuevo cargo, la Unidad de Tecnologías de Información y Comunicación preverá la habilitación máxima de
                dos equipos de computación por servidor Público, siempre que la naturaleza de su trabajo exija el uso de ambos equipos de
                manera simultánea, no debiendo ser transferidos de manera parcial, total o en calidad de préstamo a otros servidores públicos,
                o actuar en contra de lo establecido por el área de Activos Fijos.
            </h4>
            
            <hr className={styles.hr}/>

            <h4 className={styles.texto}>
                El servidor público tiene la obligación de transferir la correspondencia a su cargo y concluir las acciones administrativas
                pendientes en un plazo máximo de 4 días hábiles computables a partir de la designación del nuevo cargo en coordinación con
                su inmediato superior. La Unidad de Tecnologías de Información y Comunicación, efectuara el bloqueo correspondiente de los
                equipos de computación y sistemas de información a cargo del servidor público cumplido el plazo establecido anteriormente.
            </h4>

            <h3 className={styles.texto}>
                MEDIANTE EL PRESENTE, EXPRESO MI CONFORMIDAD A LA ENTREGA DEL EQUIPO DE COMPUTACIÓN ASIGNADO A MI
                PERSONA, EL CUAL FUNCIONA ADECUADAMENTE Y CUENTA CON ACCESO DE RED Y A LOS SISTEMAS INFORMÁTICOS
                INSTITUCIONALES. ASIMISMO, EXPRESO MI CONFORMIDAD CON LA INDUCCIÓN A DICHOS SISTEMAS REALIZADA POR EL
                PERSONAL DE LA UTIC A MI PERSONA.
            </h3>

        </form>
    );
}

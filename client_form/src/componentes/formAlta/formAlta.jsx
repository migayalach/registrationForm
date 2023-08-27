import React from 'react';
import styles from './formAlta.module.css';
import { Link } from 'react-router-dom';

const camposServidorPublico = [
    { label: 'Nombre', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Cargo', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Ubicación (oficina)', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Fecha De Inicio', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Fecha De Archivo', placeholder: 'Llenado por Apoyo en Telefonia' },
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

export default function FormAlta() {
    return (
        <form className={styles.form}>
            <div className={styles.title}>
                <h1>Formulario de Alta de Usuarios</h1>
                <h2>FORM-UTIC-001</h2>
            </div>

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
                La Unidad de Tecnologías de Información y Comunicación prevé la habilitación máxima de dos equipos de computación, por
                servidor Público, siempre que la naturaleza de su trabajo exija el uso de ambos equipos de manera simultánea, no pudiendo
                ser transferidos de manera parcial, total o en calidad de préstamo a otros servidores públicos, o actuar en contra de lo
                establecido por el área de Activos Fijos.
            </h4>
            
        </form>
    );
}

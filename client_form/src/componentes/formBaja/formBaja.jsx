import React from 'react';
import styles from './formBaja.module.css';
import { Link } from 'react-router-dom';

const camposServidorPublico = [
    { label: 'Nombre', placeholder: 'Unidad de Recursos Humanos' },
    { label: 'Cargo', placeholder: 'Unidad de Recursos Humanos' },
    { label: 'Ubicación (oficina)', placeholder: 'Unidad de Recursos Humanos' },
    { label: 'Fecha De Documentación de desvinculación', placeholder: 'Llenado por Recursos Humanos' },
    { label: 'Fecha De Archivo', placeholder: 'Llenado por Apoyo en Telefonia' },
];

const camposEquipoComputacion = [
    { label: 'Tipo', value: 'PC de escritorio', readOnly: true },
    { label: 'Teléfono interno', placeholder: 'Llenado por Infrestructura de Redes' },
    { label: 'Dirección IP', placeholder: 'Llenado por Servicio Técnico' },
    { label: 'Etiqueta de Control', placeholder: 'Llenado por Servicio Técnico' },
    { label: 'Tipo', value: 'Portátil', readOnly: true },
    { label: 'Host', placeholder: 'Llenado por Infrestructura de Redes' },
    { label: 'Dirección IP', placeholder: 'Llenado por Servicio Técnico' },
    { label: 'Etiqueta de Control', placeholder: 'Llenado por Servicio Técnico' },
];

export default function FormBaja() {
    return (
        <form className={styles.form}>
            <div className={styles.title}>
                <h1>Formulario de Baja de Usuarios</h1>
                <h2>FORM-UTIC-003</h2>
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
            <h4 className={styles.texto}>
                El servidor público debe adjuntar la copia del documento que determine la desvinculación laboral para dar inicio al proceso
                de baja.
            </h4>
            <hr className={styles.hr}/>

            <div className={styles.contenido}>
                <h3>2. Datos técnicos del (de los) equipo (s) de computación asignado (s): </h3>
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
            <hr className={styles.hr}/>
           
            <div className={styles.btn}>
            <Link to="/" className={styles.btn}>
            <button className={styles.btnback}>Volver</button>
            </Link>
            <Link to="" className={styles.btn}>
            <button className={styles.btnback}>Enviar</button>
            </Link>
            </div>

        </form>
    );
}

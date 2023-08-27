import styles from "./footer.module.css"

export default function Footer(){
    return(
        <div >
            <h2 className={styles.footer}>"2023 AÑO DE LA JUVENTUD HACIA EL BICENTENARIO "</h2>

            <hr className={styles.hr}/>

            <h3 className={styles.footer}>Zona Central, calle Ayacucho - esq. Potosí, Teléfonos: (591-2) 2184178 - (591-2) 2184183</h3>
            <h3 className={styles.footer}>La Paz - Bolivia</h3>
        </div>
    )
}
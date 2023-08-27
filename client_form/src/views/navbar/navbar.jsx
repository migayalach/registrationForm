import imagen from "../logo/bolivia.jpg"
import imagen2 from "../logo/logoM.png"
import styles from "./navbar.module.css";

export default function Navbar(){
    return(
        <div className={styles.Navbar}>
            <img src={imagen} alt="logo" className={styles.img}/>
            <img src={imagen2} alt="logo" className={styles.img2}/>
        </div>
    )
}
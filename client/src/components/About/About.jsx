import { Link } from "react-router-dom";
import kike from "../../media/para-presentacion.png"
import logo from "../../media/logo-kike.png"
import instagram from "../../media/logo-instagram.png"
import twitter from "../../media/logo-twitter.png"
import github from "../../media/logo-github.png"
import linkedin from "../../media/logo-linkedin.png"
import styles from "./about.module.css"

export default function About(){
    return (
        <div className={styles.page}>
            <div className={styles.text}>
                <h3 className={styles.title}>¡HI I'M KIKE!</h3>
                <p className={styles.parrafo}>My name is Luis Garcia but they call me kike and I'm from Venezuela, I'm 19 years old and I'm a junior web developer with knowledge in JavaScript, HTML, CSS, React.js, Redux, node.js and various other technologies between frontend and backend, I'm also graphic designer with experience in branding and design for RRSS.</p>
                <Link className={styles.home} to="/home">/home</Link>
            </div>

            <div className={styles.image}>
                <img className={styles.img} src={kike} alt="Luis Garcia" />
            </div>

            <div className={styles.containerRedes}>
                <a href="https://instagram.com/kike.ai" target="_blank" rel="noreferrer"><img className={styles.redes} src={instagram} alt="instagram" /></a>
                <a href="https://twitter.com/KIKEill" target="_blank" rel="noreferrer"><img className={styles.redes} src={twitter} alt="twitter" /></a>
                <a href="https://github.com/kikeai" target="_blank" rel="noreferrer"><img className={styles.redes} src={github} alt="github" /></a>
                <a href="https://linkedin.com/in/kikeai" target="_blank" rel="noreferrer"><img className={styles.redes} src={linkedin} alt="linkedin" /></a>
            </div>

            <div className={styles.containerLogo}>
                <img className={styles.logo} src={logo} alt="Logo Kike" />
            </div>

        </div>
    )
}
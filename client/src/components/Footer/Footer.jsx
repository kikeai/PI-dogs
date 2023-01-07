import github from '../../media/github-white.png';
import instagram from '../../media/instagram-white.png';
import linkedin from '../../media/linkedin-white.png';
import twitter from '../../media/twitter-white.png';
import logoDogs from '../../media/logo-wikidogsWhite.png';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer(){

    return (
        <div className={styles.footerContainer}>
            <img className={styles.logoFooter} src={logoDogs} alt="logowikiwhite" />
            <p className={styles.textFooter}>Pagina para conseguir informacion sobre cualquier raza de perro ademas de poder agregar alguna raza que no este incluida.</p>
            <div className={styles.redesContainer}>
                <a href="https://github.com/kikeai"><img className={styles.redes} src={github} alt="github" /></a>
                <a href="https://instagram.com/kike.ai"><img className={styles.redes} src={instagram} alt="instagram" /></a>
                <a href="https://linkedin.com/in/kikeai"><img className={styles.redes} src={linkedin} alt="linkedin" /></a>
                <a href="https://twitter.com/KIKEill"><img className={styles.redes} src={twitter} alt="twitter" /></a>
            </div>

            <div className={styles.linkContainer}>
                <Link className={styles.link} to='/home'>/Home</Link>
                <Link className={styles.link} to='/create'>/Create breed</Link>
                <Link className={styles.link} to='/about'>/About</Link>
            </div>

            <div className={styles.copyContainer}>
                <p className={styles.copy}>©Copyright 2023 | Create by: Luis Garcia</p>
            </div>
        </div>
    )
}
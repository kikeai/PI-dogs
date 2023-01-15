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
            <p className={styles.textFooter}>Page to get information about any breed of dog in addition to being able to add a breed that is not included.</p>
            <div className={styles.redesContainer}>
                <a href="https://github.com/kikeai" target="_blank" rel="noreferrer"><img className={styles.redes} src={github} alt="github" /></a>
                <a href="https://instagram.com/kike.ai" target="_blank" rel="noreferrer"><img className={styles.redes} src={instagram} alt="instagram" /></a>
                <a href="https://linkedin.com/in/kikeai" target="_blank" rel="noreferrer"><img className={styles.redes} src={linkedin} alt="linkedin" /></a>
                <a href="https://twitter.com/KIKEill" target="_blank" rel="noreferrer"><img className={styles.redes} src={twitter} alt="twitter" /></a>
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
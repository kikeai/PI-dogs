import styles from './landingpage.module.css';
import { Link } from 'react-router-dom';
import dog from '../../media/perro.png';
import logoBrand from '../../media/logo-wikidogs.png';
import instagram from '../../media/instagram.png';
import github from '../../media/github.png';
import linkedin from '../../media/linkedin.png';
import twitter from '../../media/twitter.png';

export default function LandingPage(){
    return (
        <div className={styles.body}>
            <div className={styles.shape} />
            <div className={styles.info}>
                <div>
                    <img className={styles.logo} src={logoBrand} alt="Logo-WikiDogs" />
                </div>
                <div>
                    <h3 className={styles.text1}>Get info about your</h3>
                    <h3 className={styles.text2}>favorite dog breed</h3>
                    <div className={styles.buttonContainer}>
                        <Link className={styles.button} to='/home'>Home</Link>
                    </div>
                </div>
                <div>
                    <p className={styles.desc}>Luis Garcia / <b>PI Dogs</b></p>
                    <div className={styles.socialsContainer}>
                        <a href="https://github.com/kikeai" target="_blank" rel="noreferrer"><img className={styles.socials1} src={github} alt="github" /></a>
                        <a href="https://linkedin.com/in/kikeai" target="_blank" rel="noreferrer"><img className={styles.socials} src={linkedin} alt="linkedin" /></a>
                        <a href="https://instagram.com/kike.ai" target="_blank" rel="noreferrer"><img className={styles.socials} src={instagram} alt="instagram" /></a>
                        <a href="https://twitter.com/KIKEill" target="_blank" rel="noreferrer"><img className={styles.socials} src={twitter} alt="twitter" /></a>
                    </div>
                </div>
            </div>

            <div>
                <img className={styles.dog} src={dog} alt="Dog" />
            </div>
        </div>
    )
}
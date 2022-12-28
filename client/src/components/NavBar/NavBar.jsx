import styles from './navbar.module.css'
import logoWhite from '../../media/logo-wikidogsWhite.png'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom';

export default function NavBar(){

    return (
        <div className={styles.nav}>
            <div>
                <Link to='/home'>
                    <img className={styles.logo} src={logoWhite} alt="Logo White" />
                </Link>
            </div>
            <SearchBar />
            <div>
                <Link className={styles.pages} to='/home'>Home</Link>
                <Link className={styles.pages} to='/create'>Create breed</Link>
                <Link className={styles.pages} to='/about'>About</Link>
            </div>
        </div>
    )
}
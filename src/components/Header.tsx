import appLogo from '../assets/app-logo.png';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={appLogo} alt="Task Logo" />
        </header>
    )
}
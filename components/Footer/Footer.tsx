import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.description}>
                © 2023, Misha Mas, Inc. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
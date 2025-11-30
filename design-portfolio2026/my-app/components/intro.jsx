import styles from "../components/intro.module.css"

export function Intro() {
    return (
        <div className={styles.box}>
            <p>CHRISTIAAN DINARTHO SANMOEKMIN</p>
            <p>UX DESIGNER TURNED DEVELOPER (DESIGN ENGINEER)</p>
            <div className={styles.linkcontainer}>
                <div className={styles.linkitem}>
                    <p>LINKEDIN:</p>
                    <a href="https://www.linkedin.com/in/chrisdsan" target="_blank" rel="noreferrer" >[/chrisdsan]</a>
                </div>
                <div className={styles.linkitem}>
                    <p>EMAIL:</p>
                    <a href="mailto:chrisds.ux@gmail.com">[@chrisdsan]</a>
                </div>
                <div className={styles.linkitem}>
                    <p>GITHUB:</p>
                    <a href="https://github.com/Chrisdsan">[/chrisdsan]</a>
                </div>
            </div>
        </div>
    )
};
import styles from "../components/intro.module.css"

export function Intro() {
    return (
        <div className={styles.box}>
            <p>CHRISTIAAN DINARTHO SANMOEKMIN</p>
            <p>UX Designer turned Developer (Design Engineer)</p>
            <div className={styles.linkcontainer}>
                <div className={styles.linkitem}>
                    <p>LINKEDIN:</p>
                    <a href="www.linkedin.com/in/chrisdsan">[/chrisdsan]</a>
                </div>
                <div className={styles.linkitem}>
                    <p>EMAIL:</p>
                    <a href="mailto:chrisds.ux@gmail.com">[chrisds.ux@gmail.com]</a>
                </div>
            </div>
        </div>
    )
};
import styles from "./projectssection.module.css";

const projects = [
    {
        image: "",
        title: "UX Portfolio 2026",
        href: "https://chrisdsan.com/",
        label: "link",
        stack: "Framer + Custom Code",
    },
    {
        image: "",
        title: "Developer Portfolio 2026",
        href: "https://chrisdsan.framer.website/",
        label: "link",
        stack: "HTML, CSS, Javascript, React, Nextjs, Git, Github",
    },
    {
        image: "",
        title: "UX Portfolio 2025",
        href: "https://chrisdsan.framer.website/",
        label: "link",
        stack: "Framer + Custom Code",
    },
    {
        image: "",
        title: "Fingro",
        href: "https://fingro.nl/",
        label: "link",
        stack: "HTML, CSS, Javascript, Git, Github",
    },
    {
        image: "",
        title: "UX Portfolio 2022",
        href: "https://chrisds-portfolio-lide.webflow.io/",
        label: "link",
        stack: "Webflow",
    },
    {
        image: "",
        title: "Weather Checker 2020",
        href: "https://peaceful-chandrasekhar-00c1c4.netlify.app/",
        label: "link",
        stack: "HTML, CSS, Javascript",
    },
    {
        image: "",
        title: "Digital Clock 2020",
        href: "https://quizzical-mcclintock-85e1a4.netlify.app/",
        label: "link",
        stack: "HTML, CSS, Javascript",   
    },
    {
        image: "",
        title: "SpaceX Dashboard 2020",
        href: "https://zealous-visvesvaraya-7306dd.netlify.app/",
        label: "link",
        stack: "HTML, CSS, Javascript",   
    },
    {
        image: "",
        title: "Portfolio 2020",
        href: "https://christiaansanmoekmin.netlify.app/home/",
        label: "link",
        stack: "HTML, CSS, Javascript",   
    },
];

export function ProjectsSection() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {projects.map((project) => (

          <li key={project.title} className={styles.item}>
            <a href={project.href} target="_blank" rel="noreferrer" className={styles.card}>
                <img
                   src={project.image}
                   alt={project.titel}
                   className={styles.thumbnail}
            />
               <div className={styles.text}>
                    <span className={styles.projectName}>{project.title}</span>
                <div className={styles.smalltext}>
                  <p className={styles.stack}>{project.stack}</p>
                  <p className={styles.badge}>{project.label}</p>
                </div>
               </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}


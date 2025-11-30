import styles from "./projectssection.module.css";

const projects = [
    {
        image: "/videos/uxportfolio2026.webm",
        title: "UX PORTFOLIO 2026",
        href: "https://chrisdsan.com/",
        label: "link",
        stack: "FRAMER + CUSTOM CODE",
    },
    {
        image: "/videos/dev_portfolio2026.webm",
        title: "DEVELOPER PORTFOLIO 2026",
        href: "https://chrisdsan-dev-portfolio-2026-sigma.vercel.app/",
        label: "link",
        stack: "HTML, CSS, JAVASCRIPT, REACT, NEXTJS, GIT, GITHUB",
    },
    {
        image: "/videos/uxportfolio2025.webm",
        title: "UX PORTFOLIO 2025",
        href: "https://chrisdsan.framer.website/",
        label: "link",
        stack: "FRAMER + CUSTOM CODE",
    },
    {
        image: "/videos/fingro.webm",
        title: "FINGRO",
        href: "https://fingro.nl/",
        label: "link",
        stack: "HTML, CSS, JAVASCRIPT, GIT, GITHUB",
    },
    {
        image: "/videos/uxportfolio2022.webm",
        title: "UX PORTFOLIO 2022",
        href: "https://chrisds-portfolio-lide.webflow.io/",
        label: "link",
        stack: "WEBFLOW",
    },
    {
        image: "/videos/weatherchecker2020.webm",
        title: "WEATHER CHECKER 2020",
        href: "https://peaceful-chandrasekhar-00c1c4.netlify.app/",
        label: "link",
        stack: "HTML, CSS, JAVASCRIPT",
    },
    {
        image: "/videos/digitalclock2020.webm",
        title: "DIGITAL CLOCK 2020",
        href: "https://quizzical-mcclintock-85e1a4.netlify.app/",
        label: "link",
        stack: "HTML, CSS, JAVASCRIPT",   
    },
    {
        image: "/videos/spacexdashboard2020.webm",
        title: "SPACEX DASHBOARD 2020",
        href: "https://zealous-visvesvaraya-7306dd.netlify.app/",
        label: "link",
        stack: "HTML, CSS, JAVASCRIPT",   
    },
    {
        image: "/videos/uxportfolio2020.webm",
        title: "PORTFOLIO 2020",
        href: "https://christiaansanmoekmin.netlify.app/home/",
        label: "link",
        stack: "HTML, CSS, JAVASCRIPT",   
    },
];

export function ProjectsSection() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {projects.map((project) => (

          <li key={project.title} className={styles.item}>
            <a href={project.href} target="_blank" rel="noreferrer" className={styles.card}>
                <video
                   src={project.image}
                   alt={project.titel}
                   className={styles.thumbnail}
                   autoPlay
                   loop
                   muted
                   playsInline
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


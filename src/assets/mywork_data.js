// Work experience (shown first in "My Work")
export const Experience_Data = [
    {
        title: "Research Assistant – Technical Testing & Documentation",
        org: "University of Luxembourg, SnT",
        duration: "Dec 2024 – Mar 2025",
        bullets: [
            "Tested Android applications hands-on using ADB commands, a vulnerability scanner (VUSC) and manual checks to find and reproduce issues.",
            "Recorded findings in a structured, reproducible way and wrote technical reports for the research team.",
        ],
    },
    {
        title: "Event Team Member – Summer Job",
        org: "LUGA Luxembourg Urban Garden",
        duration: "Aug 2025 – Oct 2025",
        bullets: [
            "Worked in a diverse team during a busy public event, coordinating with colleagues under time pressure and solving problems on the spot.",
        ],
    },
]

// Selected technical projects
const MyWork_Data = [
    {
        title: "VaultLab – Password Manager & Ubuntu Home Server",
        link: "https://blog.nepeu.eu/",
        linkLabel: "Read the journal",
        bullets: [
            "Building a password manager and an Ubuntu home server, documenting setup, troubleshooting and debugging in a public daily learning journal.",
        ],
    },
    {
        title: "Open Network Security Lab",
        bullets: [
            "Built a Linux-based virtual lab to reproduce and analyse ARP spoofing and man-in-the-middle attacks, using packet analysis, HTTPS/TLS and iptables to investigate traffic and harden the setup.",
        ],
    },
    {
        title: "Database Security Project",
        link: "https://github.com/shishirpandey18/Database-Security",
        linkLabel: "View on GitHub",
        bullets: [
            "Designed a PostgreSQL 16 medical records system with five roles (patient, doctor, pharmacist, admin, system), RBAC and row-level security, field encryption with pgcrypto, audit logging and pg_dump backups, documented with an ERD and demo videos.",
        ],
    },
    {
        title: "Serious Game for Cyberbullying Awareness",
        bullets: [
            "2nd Place, CyberEdu4Teens Hackathon (Google.org & SnT), 2025; selected for workshops in Luxembourg lycées.",
            "Took a research-based learning tool from requirements and design to a tested prototype, evaluated it with users, and documented the full process.",
        ],
    },
    {
        title: "Adversarial Attack Transferability – AI & Cybersecurity",
        link: "https://github.com/shishirpandey18/AI-and-Cybersecurity-Project",
        linkLabel: "View on GitHub",
        bullets: [
            "In a team of two, reproduced a USENIX Security 2019 study on how evasion and poisoning attacks transfer between ML models, implemented in Python/Jupyter on MNIST, and extended it to run attacks against multiple surrogate models at once.",
        ],
    },
    {
        title: "NIS2 Compliance Audit Report",
        bullets: [
            "Worked from long regulatory and framework documents (NIS2, ENISA, CIS Controls, NIST CSF) to assess a fictional organisation and produce a structured report with prioritised recommendations.",
        ],
    },
]

export default MyWork_Data;

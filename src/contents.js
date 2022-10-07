import barclayslogo from "./img/logos/barclays.png";

// portfolio thumbnails
import ffmsvdthumb from "./img/thumbs/ffmsvdthumb.jpeg";
import gtathumb from "./img/thumbs/gtathumb.jpeg";
import cgtthumb from "./img/thumbs/CGThumb.jpg";
import gravthumb from "./img/thumbs/gravthumb.jpg";
import peggy from "./img/thumbs/peggy.jpg";

// education logos
import durham from "./img/logos/durham.jpg";
import hartismere from "./img/logos/hartismere.png";

// experience logos
import barclays from "./img/logos/barclays.png";
import dreamheritage from "./img/logos/dreamheritage.jpg";
import geckoboard from "./img/logos/geckoboard.png";

export const originalPortfolioLink = "https://kai-widdeson.com/"

export const headliners = 
    ["<1st Class MEng Durham Computer Scientist /", 
    "<100km Ultramarathon Runner /",
    "<AICCSA 2022 Conference Academic /",
    "<Self-Published Fiction Author /",
    "<Newsletter Creator /"
    ]

export const socials =
    {
        Mail: "kwiddeson4@gmail.com",
        Github: "https://github.com/Kwiddy",
        LinkedIn: "https://www.linkedin.com/in/kai-widdeson/"
    }

export const skills = 
    {
        Python: 95,
        HTMLCSS: 90,
        React: 50,
        Javascript: 50,
        SQL: 35,
        Java: 30,
        CSharp: 30,
        C: 15
    }

    // 0: Desired Job, 1: Qualificiation, 2: Fields of Interest, 3: Interest1, 4: Interest2, 5: link to interest2, 6: Interest3
export const aboutme = 
    [
        [
            "Software Developer 💻 / Front-End Engineer 👨‍💻", 
            "1st Class MEng Computer Science @ Durham University 🏰",
            "Front-end development, Data analytics, Machine learning, Recommender systems, and Software development",
            "100km Ultramarathon Runner 🏃‍♂️",
            "Self-Published Fiction Author 📖📚 and Newsletter writer 🧾",
            "https://www.amazon.co.uk/Kings-Tribe-Kai-Widdeson/dp/B086G11WMN/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1584809815&sr=1-3",
            "(Barely) Surfing 🏄‍♂️"
        ]
    ]

export const testimonials = 
    [
        ["Krishna Vinjamuri", barclayslogo, "Barclays CTO of Cards & Payments and Connected Platforms", "Excellent work in defining and implementing a number of improvements to the Jira model and generating F2B automated reports - releasing capacity for the teams. Thank you Kai for your outstanding contribution in delivering these improvements for the team"],
        ["Tung Nhon Du", barclayslogo, "Barclays Lead UI Developer", "Kai is refreshingly curious about technology and is always keen to learn new approaches. I am sure his positive attitude will be a great advantage in his next engagements. He can be extremely proud of his achievements at Barclays. I'd like to thank Kai for his great effort and wish him all the best for the future."],
    ]

export const portfolios =
    [
        [ffmsvdthumb, "FFM-SVD: A Novel Approach for Personality-Aware Recommender Systems", "Master's Project (89%), Accepted to AICCSA 2022 Conference, Abu Dhabi", "https://kai-widdeson.com/ffmsvd.html"],
        [gtathumb, "GTA Movie-Human Style Trasfer", "Utilised a Mask-RCNN, OpenPose, and CycleGANs", "https://kai-widdeson.com/GTA.html"],
        [cgtthumb, "WebGL Living Room", "An interactive living room created with WebGL", "https://kai-widdeson.com/Portfolio/CG/public/index.html"],
        [gravthumb, "Gravitar Reinforcement Learning", "A (Double) Duelling DWN with multistep learning, noisy layers, prioritised experience replay with a target network, and loss of life penalty", "https://kai-widdeson.com/Gravitar.html"],
        [peggy, "DCGAN Pegasus Generator", "A custom DCGAN operating on CIFAR-10 and STL-10 datasets to generate images of Pegasi by combining horses, planes, and birds", "https://kai-widdeson.com/Pegasus.html"]
    ]

export const instituions =
    [
        [durham, "Durham University (Collingwood College)", "1st Class (78%)", "MEng Computer Science - Software Engineering, Networks and Systems, Software Methodologies, Theory of Computation, Computational Complexity, Bioinformatics, Recommender Systems, Parallel Scientific Computing, Algorithmic Game Theory, Codes and Complexity, Deep Learning and Reinforcement Learning, Computational Modelling in the Humanities and Social Sciences, Multimedia and Game Development, Programming Paradigms, Mathematics for Computer Science, Algorithms and Data Structures, Computational Thinking, Computer Systems, Programming.", "Master's Project accepted to the AICCSA 2022 Conference, Abu Dhabi, 2nd and 4th Year Awards for Outstanding Achievement"],
        [hartismere, "Hartismere High School & Sixth Form", "AAA(A) [A-Level] | 8A* 3A 2B [GCSE]", "Further Mathematics, Mathematics, Physics, (Computing)", "Head Boy, A* EPQ in Quantum Cryptography, Head of Yearbook and Prom Committees, Represented in 5 sports"],
    ]

export const jobs =
    [
        [barclays, "Developer Graduate - Barclays", "August 2022 - Present", [
            "Constructing a custom API to integrate Jira Xray and Specflow",
            "Currently working on developing Hedge Accounting systems for the bank using C# and .NET. ",
            "Spearheading behaviour-driven development",
        ]],

        [barclays, "Summer CTO Developer Intern - Barclays", "Summer 2021", [
            "Developed report automation processes which improved data quality and team efficiency using JIRA Kanban rules and domain model documentation. Presentations to the CTO Leadership led to a formal recognition for Excellence. Received all maximum performance gradings in final review",
            "Created an automated metrics dashboard to allow for easier and more accurate progress tracking and reporting",
            "Developed architecture diagrams for management visualization",
        ]],

        [barclays, "Summer Front-End Developer Intern - Barclays", "Summer 2020", [
            "Successfully completed a front-end Barclays iPortal website using React and SCSS",
            "Used a GitFlow methodology with extensive testing and best practices for components, enabling compatibility with existing systems",
            "Received all maximum performance gradings in final review",
        ]],

        [dreamheritage, "Student Project - Dream Heritage", "Winter 2019 - Spring 2020", [
            "This was a University group project where we were the only group whose client presentation was added to the department YouTube channel as a demonstration of excellence",
            "Developed the front-end of the Beaurepaire Priory website",
            "Wrote a complete user manual for the final deliverable to ensure value to the client and allow for future developments",
        ]],

        [geckoboard, "Student Work Experience - Geckoboard", "Summer 2015", [
            "Student work experience which involved developing the Geckoboard site to include tutorials for improved customer support",
            "Assisted finance management with generating spending reports",
            "Attended daily scrum meetings and was introduced to Agile methodologies",
        ]],
    ]
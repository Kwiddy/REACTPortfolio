import Card from "./Card"

const About = () => {
    return(
        <div>
            <ul>
                <li> <b>Job: </b> Software Developer 💻 / Front-End Engineer 👨‍💻 </li>
                <li> <b> Qualifications: </b> 1st Class MEng Computer Science @ Durham University 🏰</li>
                <li> <b> Field of Interest: </b> Front-end development, Data analytics, Machine learning, Recommender systems, and Software development</li>
            </ul>
            <div>
                I have many interests away from the screens:
                <ul>
                    <li> 100km Ultramarathon Runner 🏃‍♂️</li>
                    <li> Self-Published Fiction Author <a href="#">(Pss... click here)</a> 📖📚 and Newsletter writer 🧾</li>
                    <li> (Barely) Surfing 🏄‍♂️</li>
                </ul>
            </div>
        </div>
    )
}

function AboutMe() {
    return(
        <div className="aboutme">
            <Card title="About Me" content={<About/>}/>
        </div>
    )
}

export default AboutMe;
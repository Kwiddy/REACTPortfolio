import Card from "./Card"

import { aboutme } from "../contents";

const About = () => {
    // return(
    //     <div>
    //         <ul>
    //             <li> <b> (Desired) Job: </b> Software Developer ๐ป / Front-End Engineer ๐จโ๐ป </li>
    //             <li> <b> Qualifications: </b> 1st Class MEng Computer Science @ Durham University ๐ฐ</li>
    //             <li> <b> Field of Interest: </b> Front-end development, Data analytics, Machine learning, Recommender systems, and Software development</li>
    //         </ul>
    //         <div>
    //             Here are a few of my interests away from the screens:
    //             <ul>
    //                 <li> 100km Ultramarathon Runner ๐โโ๏ธ</li>
    //                 <li> Self-Published Fiction Author <a href="#">(Pss... click here)</a> ๐๐ and Newsletter writer ๐งพ</li>
    //                 <li> (Barely) Surfing ๐โโ๏ธ</li>
    //             </ul>
    //         </div>
    //     </div>
    // )
    const meItems = aboutme.map((item) => 
    <div>
        <ul>
            <li> <b> (Desired) Job: </b> {item[0]} </li>
            <li> <b> Qualifications: </b> {item[1]}</li>
            <li> <b> Field of Interest: </b> {item[2]}</li>
        </ul>
        <br/>
        <div>
            Here are a few of my interests away from the screens:
            <ul>
                <li> {item[3]}</li>
                <li> {item[4]} <a href={item[5]}>(Pss... click here)</a></li>
                <li> {item[6]}</li>
                <li> {item[7]}</li>
            </ul>
        </div>
    </div>
    );
    return(
        <table id="contact-table">
            <ul>
                {meItems}
            </ul>
        </table>
    );
}

function AboutMe() {
    return(
        <div className="aboutme">
            <Card title="About Me" content={<About/>}/>
        </div>
    )
}

export default AboutMe;
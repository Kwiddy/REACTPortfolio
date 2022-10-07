import Card from "./Card"
import ProgressBar from 'react-bootstrap/ProgressBar';

import { skills } from "../contents";


const SkillContent = () => {
    return(
        <div>
            <ProgressBar className="skill" now={skills.Python} label={"Python"} />
            <ProgressBar className="skill" now={skills.HTMLCSS} label={"HTML/CSS"} />
            <ProgressBar className="skill" now={skills.React} label={"React"} />
            <ProgressBar className="skill" now={skills.Javascript} label={"Javascript"} />
            <ProgressBar className="skill" now={skills.SQL} label={"SQL"} />
            <ProgressBar className="skill" now={skills.Java} label={"Java"} />
            <ProgressBar className="skill" now={skills.CSharp} label={"C#"} />
            <ProgressBar className="skill" now={skills.C} label={"C"} />
        </div>
    );
}

function Skills() {
    return(
        <div className="skills">
            <Card title="Skills" content={<SkillContent />}/>
        </div>
    )
}

export default Skills;
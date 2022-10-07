import Card from "./Card"

import { instituions } from "../contents";

const Insitutions = () => {
    const eduItems = instituions.map((quote) => 
    <tr>
        <td> <img src={quote[0]} className="testilogo" alt="portfolio-thumb"></img> </td>
        <td> <b> {quote[1]} </b> <br /> <b>Grade: </b> {quote[2]} <br /> <b>Subjects: </b> <i> {quote[3]} </i> <br /> <b>Notable achievements: </b> {quote[4]}</td>
    </tr>
    );
    return(
        <table id="contact-table">
            <tbody>
                {eduItems}
            </tbody>
        </table>
    );
}

function Education() {
    return(
        <div className="education">
            <Card title="Education" content={<Insitutions />}/>
        </div>
    )
}

export default Education;
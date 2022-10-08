import Card from "./Card"

import { jobs } from "../contents";

const Jobs = () => {
    const jobPlaces = jobs.map((quote) => 
    <tr>
        <td> <img src={quote[0]} className="explogo" alt="portfolio-thumb"></img> </td>
        <td> 
            <b> {quote[1]} </b> <br />
            <i> {quote[2]} </i>
            <ul> 
                <li> {quote[3][0]}</li>
                <li> {quote[3][1]}</li>
                <li> {quote[3][2]}</li>
            </ul> 
        </td>
    </tr>
    );
    return(
        <div>
            <table id="contact-table">
                <tbody>
                    {jobPlaces}
                </tbody>
            </table>
            <div>
                <i>In addition to the relevant professional experience above, I have also been a: Website developer volunteer, manual labourer, cafe front-of-house, kitchen porter, college receptionist, entrance exam volunteer, and private tutor.</i>
            </div>
        </div>
    );
}

function Experience() {
    return(
        <div className="experience">
            <Card title="Experience" content={<Jobs />}/>
        </div>
    )
}

export default Experience;
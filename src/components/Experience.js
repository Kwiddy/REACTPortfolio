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
        <table id="contact-table">
            <tbody>
                {jobPlaces}
            </tbody>
        </table>
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
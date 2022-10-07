import Card from "./Card"
import mail from '../img/icons/mail.png'
import github from '../img/icons/github.png'
import linkedin from '../img/icons/linkedin.png'

import { socials } from "../contents"

const Contactcontents = () => {
    return(
        <div id="contact-contents">
            <table>
                <tbody>
                    <tr>
                        <td><img src={mail} height="50px" alt="mail-logo"></img></td>
                        <td>{socials.Mail}</td>
                    </tr>
                    <tr>
                        <td><img src={linkedin} height="50px" alt="linkedin-logo"></img></td>
                        <td>{socials.LinkedIn}</td>
                    </tr>
                    <tr>
                        <td><img src={github} height="50px" alt="github-logo"></img></td>
                        <td>{socials.Github}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function Contact() {
    return(
        <div className="contact">
            <Card title="Contact" content={<Contactcontents />}/>
        </div>
    )
}

export default Contact;
import Card from "./Card"
import mail from '../img/icons/mail.png'
import github from '../img/icons/github.png'
import linkedin from '../img/icons/linkedin.png'

import { socials } from "../contents"

const mailto = "mailto:" + socials.Mail

const Contactcontents = () => {
    return(
        <div id="contact-contents">
            <table id="contact-table">
                <tbody>
                    <tr>
                        <td><img src={mail} height="50px" alt="mail-logo"></img></td>
                        <td><a href={mailto}>{socials.Mail}</a></td>
                    </tr>
                    <tr>
                        <td><img src={linkedin} height="50px" alt="linkedin-logo"></img></td>
                        <td><a href={socials.LinkedIn}>{socials.LinkedIn}</a></td>
                    </tr>
                    <tr>
                        <td><img src={github} height="50px" alt="github-logo"></img></td>
                        <td><a href={socials.Github}>{socials.Github}</a></td>
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
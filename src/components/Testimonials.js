import Card from "./Card"
import { testimonials } from "../contents";

const TestimonialContent = () => {
    const testimonialsItems = testimonials.map((quote) =>
    <tr>
        <td> <img src={quote[1]} className="testilogo" alt="testimonial-logo"></img></td>
        <td> <b> {quote[0] + " - " + quote[2]} </b> <br /> <i>{"'" + quote[3] + "'"}</i> </td>
    </tr> 
    );
    return(
        <table id="contact-table">
            <tbody>
                {testimonialsItems}
            </tbody>
        </table>
    );
}

function Testimonials() {
    return(
        <div className="testimonials">
            <Card title="Testimonials" content={<TestimonialContent />}/>
        </div>
    )
}

export default Testimonials;
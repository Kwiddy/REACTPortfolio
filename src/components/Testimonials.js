import Card from "./Card"
import { testimonials } from "../contents";

const TestimonialContent = () => {
    const testimonialsItems = testimonials.map((quote) => 
    <li className="invisilist"> <b> {quote[0] + " - " + quote[1]} </b> <br /> <i>{"'" + quote[2] + "'"}</i> </li>
    );
    return(
        <ul>
            {testimonialsItems}
        </ul>
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
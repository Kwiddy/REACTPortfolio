import Card from "./Card"

const TestimonialContent = () => {
    return(
        <div>
            hi
        </div>
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
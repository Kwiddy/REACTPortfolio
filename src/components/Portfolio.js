import Card from "./Card"
import { portfolios } from "../contents";


const PortfolioContent = () => {
    const portfolioItems = portfolios.map((quote) => 
    <tr>
        <td> img </td>
        <td> <b> {quote[0] + " - " + quote[1]} </b> <br /> <i>{"'" + quote[2] + "'"}</i> </td>
    </tr>
    );
    return(
        <table id="contact-table">
            <tbody>
                {portfolioItems}
            </tbody>
        </table>
    );
}

function Portfolio() {
    return(
        <div className="portfolio">
            <Card title="Portfolio" content={<PortfolioContent />}/>
        </div>
    )
}

export default Portfolio;
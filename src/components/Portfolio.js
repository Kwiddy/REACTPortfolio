import Card from "./Card"
import { portfolios } from "../contents";


function goToPage(link) {
    window.location.href = link;
}

const PortfolioContent = () => {
    const portfolioItems = portfolios.map((quote) => 
    <tr className="bottom-sep-tr" onClick={() => goToPage(quote[3])}>
        <td> <img src={quote[0]} className="testilogo" alt="portfolio-thumb"></img> </td>
        <td> <b> {quote[1]} </b> <br /> <i>{quote[2]}</i> </td>
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
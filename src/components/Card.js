function Card(props) {
    return(
        <div className="card">
            <div className="card-title">
                {props.title}
            </div>
            <div className="card-content">
                {props.content}
            </div>
        </div>
    );
}

export default Card;
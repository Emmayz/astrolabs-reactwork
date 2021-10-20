function Card(props) {
    return (
        <div className="card shadow-sm">
        <img src={props.image} />
        <div className="card-body">
            <p><strong>{props.title}</strong></p>
            <p className="card-text">{props.description}</p>
            <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">Read</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-muted">9 mins</small>
            </div>
        </div>
        </div>
    )
}

export default Card;
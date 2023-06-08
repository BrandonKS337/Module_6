function Movie(props) {
    const {title, year, synopsis} = props;
    return(
        
        <li>
        <h3>{title}</h3> <span>({year})</span>
        <div>{synopsis}</div>
        </li>
    )
    
}

export default Movie
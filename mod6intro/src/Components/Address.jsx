function Address ({name, houseNum, city, country}) {
    return (
        <div className="Address componentBox">
            <p><strong>{name}'s address:</strong> </p> 
            <p>{houseNum} </p>
            <p>{city} {country}</p>

        </div>
    )
}
export default Address
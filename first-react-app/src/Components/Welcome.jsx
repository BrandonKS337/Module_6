function Welcome(props) {
    return (
        <div className="Welcome">
            <h3>Welcome {props.name}!</h3>
            {props.children}
        </div>
    )
}

export default Welcome;
const Header = (props) => {
    console.log(props)
    return (
        <div>Hello There indeed, { props.name }, { props.color }</div>
    )
}

export default Header
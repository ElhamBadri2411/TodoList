import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className="header">
            <h1 className="title">{title}</h1>
            <Button color ={showAdd ? "red" : "green"} text={showAdd ? "Hide" : "Show"} onClick = {onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Todo-list"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header

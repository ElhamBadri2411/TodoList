import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {

    return (
        <div className="btn-box">
            <button className="btn"
                style={{backgroundColor: color, color: "white"}}
                onClick = {onClick}
            >
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'light-blue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button

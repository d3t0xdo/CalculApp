import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber => {

    const renderButton = item => (
        <Button text={item.toString()} clickHandler={onClickNumber} />
    )

    return numbers.map(renderButton)
}

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)    
        }
    </section>
)

Numbers.prototype = {
    onClickNumbers: PropTypes.func.isRequired
}

export default Numbers

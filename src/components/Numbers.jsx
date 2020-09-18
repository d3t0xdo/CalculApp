import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Numbers = ({ onClickNumbers }) => (
    <section className="numbers">
        <Button text="1" clickHandler={onClickNumbers} />
        <Button text="2" clickHandler={onClickNumbers} />
        <Button text="3" clickHandler={onClickNumbers} />
        <Button text="4" clickHandler={onClickNumbers} />
        <Button text="5" clickHandler={onClickNumbers} />
        <Button text="6" clickHandler={onClickNumbers} />
        <Button text="7" clickHandler={onClickNumbers} />
        <Button text="8" clickHandler={onClickNumbers} />
        <Button text="9" clickHandler={onClickNumbers} />
        <Button text="0" clickHandler={onClickNumbers} />
    </section>
)

Numbers.prototype = {
    onClickNumbers: PropTypes.func.isRequired
}

export default Numbers

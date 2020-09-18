import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Functions = ({ onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="CE" clickHandler={onContentClear}/>
        <Button text="C" clickHandler={onDelete}/>
    </section>
)

Functions.prototype = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions
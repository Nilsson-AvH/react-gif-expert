import { useState } from "react"
import { PropTypes } from "prop-types";

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {
        // console.log('Hola mundo desde onSubmit en AddCategory.jsx (Para Test)')
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ] )
        setInputValue('')
        onNewCategory(inputValue.trim())
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form"> 
        {/* <form onSubmit={ ( event ) => onSubmit(event) }>  */}
            <input
                type='text'
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = { //Me obligan a <algo> de cierta constante/variable
    onNewCategory: PropTypes.func.isRequired
}
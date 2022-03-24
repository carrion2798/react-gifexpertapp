import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategorias }) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();//para que no se recargue toda la pagina

        if (inputValue.trim().length > 2) {
            setCategorias(categorias => [inputValue,...categorias]);//el categorias toma el valor actual, por eso
            //no es necesario pasarlo en las propiedades
            setinputValue('');
        }


    }
    return (

        <form onSubmit={handleSubmit}>
            <input
                placeholder='Nueva categoría'
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired//esto para indicar el tipo y que es requerido
}

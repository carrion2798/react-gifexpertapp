import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from '../components/GifGridItem'
//usar la pagina de animate.style para las animaciones
export const GifGrid = ({ categoria }) => {
    const {data:imagenes,loading}=useFetchGifs(categoria);
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>
                {categoria}
            </h3>
            {loading && <p className='card animate__animated animate__flash'>Cargando...</p>}

            <div className='card-grid'>
                {
                    imagenes.map((imagen) => {
                        return <GifGridItem
                            key={imagen.id}
                            {...imagen} />//de esta forma envio el cojunto de propiedades de imagen de una vez
                        //y puedo desestructurar del otro lado
                    })
                }
            </div>
        </>
    )
}

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//usar rafc para crear todo esto de una vez

const GifExpertApp = () => {
    // const categorias=['One Punch','Samurai X','Dragon Ball'];
    const [categorias, setCategorias] = useState(['Dragon Ball']);//uso esto para poder cambiarlo
    // const handleAdd=()=>{
    //     // setCategorias(categorias.concat('nueva'))
    //     setCategorias([...categorias,'Nueva']);
    // }


    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setCategorias={setCategorias}/>
            <ol>
                {
                    categorias.map((categoria)=>{
                        return <GifGrid 
                        key ={categoria }
                        categoria={categoria}
                        />
                    })
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;


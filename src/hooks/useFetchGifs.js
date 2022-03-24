import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(categoria)
            .then(imagenes => {
                setState({
                    data: imagenes,
                    loading: false
                })

            })
    }, [categoria])//cada vez que cambie se ejecute


    return state;

}

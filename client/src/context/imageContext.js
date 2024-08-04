import { getImage } from '../services/getImage';

import { createContext, useEffect, useState } from "react";

export const ImageContext = createContext()

export const ImageContextProvider = ({children}) => {
    const [currentImage, setCurrentImage] = useState(JSON.parse(localStorage.getItem('image')) || null)

    const image = async () => {

        //from services
        await getImage().then((result) => {
            setCurrentImage(result.data)
        })
    }

    useEffect(() => {
        localStorage.setItem('image', JSON.stringify(currentImage));
    },[currentImage]);

    return (
        <ImageContext.Provider value={{currentImage, image}}>
            {children}
        </ImageContext.Provider>
    )
}
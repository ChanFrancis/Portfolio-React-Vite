import { useState, useEffect } from 'react'

function useImageSelect() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imageImport = async () => {
            const images = import.meta.glob('/src/assets/*');
            const imageArray = []

            for (const path in images) {
                const mod = await images[path]();
                imageArray.push(
                     mod.default
                );
            }
            setImages(imageArray)
            
        }

        imageImport()
    }, []);


    return images
}

export default useImageSelect
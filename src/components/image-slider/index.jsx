import { useEffect, useState } from "react"

export default function ImageSlider({ url, page, limit }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }


    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])



    if (loading) {
        return <div>Loading data! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error occurred : {errorMsg}</div>
    }

    console.log(images)

    return <div className="container">

    </div>
}
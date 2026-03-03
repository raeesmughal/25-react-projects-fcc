import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'


export default function ImageSlider({ url, page, limit }) {

    const [images, setImages] = useState([]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const [errorMsg, setErrorMsg] = useState(null);

    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(getUrl);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
                console.log(data)
            }


        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(`${url}?page=${page}&limit=${limit}`);
    }, [url])


    if (loading) {
        return <div>Loading Data | Please wait</div>
    }


    if (errorMsg !== null) {
        return <div>Error occurred : {errorMsg}</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" />
        {
            images && images.length ?
                images.map(imageItem => (
                    <img key={imageItem.id} alt={imageItem.download_url} src={imageItem.download_url} className="current-image" height={imageItem.height} width={imageItem.width} />
                )) : null
        }

        <BsArrowRightCircleFill className="arrow arrow-right" />

        <span className="circle-indicators">
            {
                images && images.length ?
                    images.map((_, index) => (
                        <button key={index} className="current-indicator" >
                        </button>
                    )) : null
            }
        </span>
    </div>
}
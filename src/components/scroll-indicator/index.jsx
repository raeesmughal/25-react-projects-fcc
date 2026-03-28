import { useEffect, useState } from "react"
import './scroll.css'




export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);


    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
            }
            setLoading(false);

        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
            setLoading(false);

        }
    }

    useEffect(() => {
        const controller = new AbortController();
        fetchData(url, controller.signal);
        return () => controller.abort();
    }, [url])

    function handleScrollPercentage() {

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage(height > 0 ? (howMuchScrolled / height) * 100 : 0);

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        }
    }, [])


    console.log(data, scrollPercentage);

    if (errorMessage) {
        return <div>Error Occured ! {errorMessage}</div>
    }

    if (loading) {
        return <div className="loading-message">Loading Data Please Wait</div>
    }

    return <div className="scroll-indicator">
        <div className="top-container" >
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container">
                <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
            </div>
        </div>

        <div className="data-container">
            {
                data && data.length > 0 ?
                    data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>) : null
            }
        </div>
    </div >
}
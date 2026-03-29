import { useEffect, useState } from "react"
import User from "./card";
import './style.css'

export default function GithubProfileFinder() {

    const [username, setUsername] = useState('raeesmughal');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);



    async function fetchGithubUserData() {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${username}`);



            if (!response.ok) {
                console.error(`GitHub API error: ${response.status}`);
                setLoading(false);
                return;
            }


            const data = await response.json();
            console.log(data);

            if (data) {
                setUserData(data);
                setLoading(false);
                setUsername('')
            }

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if (loading) {
        return <h1>Loading Data! Please Wait</h1>
    }


    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    type="text"
                    name="search-by-username"
                    placeholder="Search Github Username..."
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                />
                <button type="button" onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>
    )
}
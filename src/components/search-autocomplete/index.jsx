import { useEffect } from "react";
import { useState } from "react"
import Suggestions from "./suggestions";
import './style.css'

export default function SearchAutocomplete() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);


    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);

        if (query.length > 1) {
            const filteredData = user && user.length ? user.filter((item) => (
                item.toLowerCase().indexOf(query) > -1
            )) : []

            setFilteredUsers(filteredData);
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    function handleClick(event) {
        console.log(event.target.innerText);
        setSearchParam(event.target.innerText);
        setShowDropDown(false);
    }

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/users`);
            if (!res.ok) {
                throw new Error(`HTTP error : ${res.status}`)
            }
            const data = await res.json();

            console.log(data);

            if (data && data.users && data.users.length) {
                setUser(data.users.map((userItem) => userItem.firstName));
            }

            setError(null);


        } catch (er) {
            setError(er);
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        fetchListOfUsers()
    }, [])



    console.log(filteredUsers);

    return (
        <div className="search-autocomplete-container">
            {
                loading ? <h1>Loading Data! Please Wait</h1> : error ? <h1>Error loading data. Please try again.</h1> : <input
                    value={searchParam}
                    type="text"
                    name="search-users"
                    placeholder="Search Users here..."
                    onChange={handleChange}
                />
            }


            {
                showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    )
}
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favouritesList, setFavouritesList] = useState([]);
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        setLoading(true);
        try {
            const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}`);

            const data = await res.json();

            console.log(data);

            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam('');
                navigate('/');

            }
        } catch (er) {
            console.log(er);
            setLoading(false);
            setSearchParam('');
        }

    }
    console.log(loading, recipeList)

    function handleAddToFavourite(getCurrentItem) {
        console.log(getCurrentItem);
        let copyFavouritesList = [...favouritesList];
        const index = copyFavouritesList.findIndex((item) => item.id === getCurrentItem.id);

        if (index == -1) {
            copyFavouritesList.push(getCurrentItem);
        } else {
            copyFavouritesList.splice(index);
        }

        setFavouritesList(copyFavouritesList);

    }

    console.log(favouritesList, 'favouriteslist')

    return <GlobalContext.Provider
        value={{
            searchParam,
            loading,
            recipeList,
            setSearchParam,
            handleSubmit,
            recipeDetailsData,
            setRecipeDetailsData,
            handleAddToFavourite,
            favouritesList,
        }}>
        {children}
    </GlobalContext.Provider>

}
import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";




export const FeatureFlagsContext = createContext(null);


export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            setLoading(true);
            // original service call
            const response = await featureFlagsDataServiceCall();
            setEnabledFlags(response);
            setLoading(false);

        } catch (er) {
            console.log(er);
            setLoading(false);
            throw new Error(er);
        }
    }

    useEffect(() => {
        fetchFeatureFlags()
    }, [])

    return <FeatureFlagsContext.Provider value={{loading, enabledFlags }}>
        {children}
    </FeatureFlagsContext.Provider>
}
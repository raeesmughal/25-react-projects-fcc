import { useContext } from 'react'
import Accordion from '../accordion/Accordion'
import LightDarkMode from '../light-dark-mode/index'
import RandomColor from '../random-color-generator'
import TicTacTeo from '../tic-tac-teo'
import TreeView from '../tree-view'
import menus from '../tree-view/data'
import TabsTest from '../custom-tabs/tab-test'
import { FeatureFlagsContext } from './context'

export default function FeatureFlags() {


    const { loading, enabledFlags } = useContext(FeatureFlagsContext)

    const componentToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />
        },
        {
            key: "showTicTacTeoBoard",
            component: <TicTacTeo />
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />
        },
        {
            key: "showAccordion",
            component: <Accordion />
        },
        {
            key: "showTreeView",
            component: <TreeView menus={menus} />
        },
        {
            key: "showTabs",
            component : <TabsTest />
        }
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey]
    }

    if (loading) return <h1>Loading Data ! Please Wait</h1>

    return <div>
        <h1>Feature Flags</h1>
        {
            componentToRender.map((componentItem) => 
                checkEnabledFlags(componentItem.key) ? componentItem.component : null
        )}
    </div>
}
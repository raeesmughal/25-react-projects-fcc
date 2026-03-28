import Tabs from "./tabs";

function RandomComponent() {
    return <h1>Some Random Content</h1>
}

export default function TabsTest() {

    const tabs = [
        {
            label: 'tab 1',
            content: <div>This is content for tab 1</div>
        },
        {
            label: 'tab 2',
            content: <div>This is content for tab 2</div>
        },
        {
            label: 'tab 3',
            content: <RandomComponent />
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex)
    }


    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}
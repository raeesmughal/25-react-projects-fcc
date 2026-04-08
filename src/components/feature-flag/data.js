// const dummyApiResponse = {
//     showLightAndDarkMode: false,
//     showTicTacTeoBoard: true,
//     showRandomColorGenerator: true,
//     showAccordion: false,
//     showTreeView: true,
//     showTabs: true,
// }



const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacTeoBoard: true,
    showRandomColorGenerator: true,
    showAccordion: true,
    showTreeView: true,
    showTabs: true,
}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('Some error occured! Please try again');
    })
}


export default featureFlagsDataServiceCall;
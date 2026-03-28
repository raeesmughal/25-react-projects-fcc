
import './App.css'
// import ImageSlider from './components/image-slider'
// import LoadMoreData from './components/load-more-data'
// import QrCodeGenerator from './components/qr-code-generator'
// import TreeView from './components/tree-view'
// import menus from './components/tree-view/data'
// import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from './components/scroll-indicator'
import TabsTest from './components/custom-tabs/tab-test'
function App() {

  return (
    <>
      {/* <ImageSlider url={`https://picsum.photos/v2/list`} page={2} limit={4}/> */}


      {/* load more products component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component */}
      {/* <TreeView menus={menus}/> */}

      {/* Qr Code Generator */}
      {/* <QrCodeGenerator /> */}

      {/* light-dark-mode */}
      {/* <LightDarkMode /> */}


      {/* scroll indicator */}
      {/* <ScrollIndicator url={`https://dummyjson.com/products?limit=100`} /> */}

      {/* Custom Tabs */}
      <TabsTest />

    </>
  )
}

export default App

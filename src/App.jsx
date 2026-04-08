
import './App.css'
import FeatureFlags from './components/feature-flag'
import FeatureFlagGlobalState from './components/feature-flag/context'
// import ImageSlider from './components/image-slider'
// import LoadMoreData from './components/load-more-data'
// import QrCodeGenerator from './components/qr-code-generator'
// import TreeView from './components/tree-view'
// import menus from './components/tree-view/data'
// import LightDarkMode from "./components/light-dark-mode";
// import ScrollIndicator from './components/scroll-indicator'
// import TabsTest from './components/custom-tabs/tab-test'
// import ModalTest from './components/custom-modal-popup/modal-test'
// import GithubProfileFinder from './components/github-profile-finder'
// import SearchAutocomplete from './components/search-autocomplete'
// import TicTacTeo from './components/tic-tac-teo'


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
      {/* <TabsTest /> */}

      {/* custom modal popup */}
      {/* <ModalTest /> */}

      {/* github profile finder */}
      {/* <GithubProfileFinder /> */}

      {/* search autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Teo */}
      {/* <TicTacTeo /> */}


      {/* Feature Flag */}
      <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState>

    </>
  )
}

export default App

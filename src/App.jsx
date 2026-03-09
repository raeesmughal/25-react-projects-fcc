
import './App.css'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
function App() {

  return (
    <>
      {/* <ImageSlider url={`https://picsum.photos/v2/list`} page={2} limit={4}/> */}


      {/* load more products component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component */}
      <TreeView menus={menus}/>

    </>
  )
}

export default App

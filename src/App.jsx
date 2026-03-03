
import './App.css'
import ImageSlider from './components/image-slider'
function App() {

  return (
    <>
      <ImageSlider url={`https://picsum.photos/v2/list`} page={2} limit={2}/>
    </>
  )
}

export default App

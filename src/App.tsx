import './App.css'
import { PhotosItem } from './components/photoItem'
import { photos } from './mock'
function App() {

  return <>
    <ul>{
    
      photos.map((item) => (
        <PhotosItem item={item} key={item.id}/>
      ))
    
    }</ul>
  </>
}

export default App

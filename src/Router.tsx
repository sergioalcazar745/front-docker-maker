import Container from './components/Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Volume from './components/Volume'
import Image from './components/Image'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/container' element={<Image />} />
        <Route path='/volumes' element={<Volume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

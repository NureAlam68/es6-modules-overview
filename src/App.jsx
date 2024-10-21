import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  }, [])
  
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Rolex Submariner",
  //     price: 12000
  //   },
  //   {
  //     id: 2,
  //     name: "Omega Seamaster",
  //     price: 8000
  //   },
  //   {
  //     id: 3,
  //     name: "Tag Heuer Carrera",
  //     price: 5000
  //   },
  //   {
  //     id: 4,
  //     name: "Casio G-Shock",
  //     price: 150
  //   },
  //   {
  //     id: 5,
  //     name: "Apple Watch Series 9",
  //     price: 500
  //   }
  // ];
  

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App

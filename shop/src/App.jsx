import { useState, useEffect } from 'react'
import './App.css'
import StoreFront from './StoreFront'

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ products, setProducts ] = useState()
  const [ cart, setCart ] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProducts(data)
    })
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    document.title = `${cart.length} items in cart`
  }, [cart])

  function handleAddToCart(product_id) {
    const product = products.find(p => p.id === product_id)
    setCart([...cart, product])
  }

  if (!loggedIn) return (<div className='welcome-screen'>
    <h2>You're not logged in.</h2>
    <button onClick={() => setLoggedIn(prev => !prev)}>Log in</button>
  </div>)

  return (<div className='cart'>
  <h2>Items in cart</h2>
  <ul>
    { cart.length > 0 && 
    cart.map(item => {
      return <li key={item.id}>{item.title}</li>
    })
    }
  </ul>
  { products && <StoreFront products={products} onAddToCart={handleAddToCart}/> }
  </div>)
}

export default App

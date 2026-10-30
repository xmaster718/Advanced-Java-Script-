import Header from './Header'
import ProductList from './ProductList'

function App() {
  // Массив товаров
  const products = [
    { id: 1, title: "Headphones", price: 15000, inStock: true },
    { id: 2, title: "IPhone", price: 150000, inStock: true },
    { id: 3, title: "Laptop", price: 200000, inStock: true },
    { id: 4, title: "Macbook", price: 170000, inStock: false },
    { id: 5, title: "Samsung", price: 105000, inStock: true },
  ]

  // Оставляем только те товары, которые есть в наличии
  const productsInStock = products.filter(function (product) {
    return product.inStock === true
  })

  // Считаем, сколько их
  const countInStock = productsInStock.length

  return (
    <div>
      <Header />
      <ProductList products={products} />
      <p>Have: {countInStock}</p>
    </div>
  )
}

export default App
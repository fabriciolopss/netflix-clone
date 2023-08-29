import './App.css';
import Row from './components/website-row'
import Banner from './components/banner'
import Navbar from './components/navbar'
import categories from './api'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <main className = "main-wrapper">
        {categories.map((category) => {
          return <Row
            key={category.name}
            title={category.title}
            path={category.url}
            isLarge={category.isLarge} />;
        })
        }
      </main>

    </div>

  )
}

export default App;

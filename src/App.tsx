import Navigation from './components/Header/Navigation/Navigation.tsx';
import Footer from './components/Footer/Footer.tsx';
import Main from './components/Main/Main.tsx';
// import jsonData from './assets/data.json';
// interface MyData {
//     id: string;
//     title: string;
//     description: string;
//     level: string;
//     duration: number;
//     price: number;
//     image: string;
//     createdAt: string;
// }
// const dataArray: MyData[] = Array.isArray(jsonData)
//     ? jsonData.map(item => ({ key: item.id, value: item }))
//     : [{ key: jsonData.id, value: jsonData }];


function App() {

  return (
    <>
      <header className='header'>
          <div className='header__inner'>
              <a data-test-id="header-logo" href="/" className="header__logo">
                  Travel App
              </a>
              <Navigation />
          </div>
      </header>
        <Main>
            {/* Content specific to the main section */}
            <p>Welcome to the Travel App!</p>
        </Main>
        <Footer />
    </>
  )
}

export default App

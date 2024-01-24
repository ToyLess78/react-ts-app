// import Navigation from './components/Header/Navigation/Navigation.tsx';
// import Footer from './components/Footer/Footer.tsx';
// import MainPage from './components/MainPage/MainPage.tsx';
// import {RouterProvider} from 'react-router-dom';

// import tripsData from './assets/trips.json';
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


import Main from './components/Main/Main.tsx';

function App() {

  return (
    <>
        <Main>
            <h1>Text</h1>
        </Main>
    </>
  )
}

export default App

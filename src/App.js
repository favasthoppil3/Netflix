import './App.css';
import Row from './component/Row';
import request from './request';
import Banner from './component/Banner';
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NetFlix Orginals" fetchUrl={request.fetchNetflixOriginals } isLarge={true}  />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;

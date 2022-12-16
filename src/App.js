import './App.css';
import Movie from './components/Movie';
import MovieData from './components/MovieData';


function App() {
  return (
  <div className="container">
{MovieData.map((value)=>{
  return(
  <Movie title={value.title} subtitle={value.subtitle} smallImg={value.smallImg} bigImg={value.bigImg} dis={value.dis} dur={value.dur} action={value.action}/>
)})}

  </div>
  );
}

export default App;

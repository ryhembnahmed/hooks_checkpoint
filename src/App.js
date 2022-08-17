import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import NavBar from "./Components/NavBar";

function App() {
  const films = [
    {
      id: 1,
      title: "Snowpiercer",
      desc: "In a future where a failed climate change experiment has killed all life except for the survivors who boarded the Snowpiercer, a new class system emerges.",
      url: "snowpiercer.jpg",
      rating: "7/10",
    },
    {
      id: 2,
      title: "Behind Her Eyes",
      desc: "It follows Louise, a single mom with a son and a part-time job in a psychiatrist's office. She begins an affair with her boss and strikes up an unlikely friendship with his wife.",
      url: "behindhereys.jpg",
      rating: "8/10",
    },
    {
      id: 3,
      title: "Remarriage & Desires",
      desc: "Matchmaking company Rex exists to serve the wealthiest high class individuals. Their clients want to enter this high class world or maintain their status at the top through marriage or remarriage. ",
      url: "remarriage.jpg",
      rating: "7.2/10",
    },
  ];
  return (
    <div>
      <NavBar />
      <br />
      <MovieList list={films}/>
    </div>
  );
}

export default App;

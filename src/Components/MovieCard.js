import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieCard({title, desc, url, rating}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>Title: {title} </Card.Title>
        <Card.Text><b>Description:</b> {desc}</Card.Text>
        <Card.Text><b>Rating:</b> {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;

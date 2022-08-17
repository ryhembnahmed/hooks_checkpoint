import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MovieCard from "./MovieCard";

function AddCard() {
  const handleClick =()=> {
    <MovieCard />
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  />
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" />
        <Form.Label>Rating</Form.Label>
        <Form.Control type="text" />
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="dark" onClick={handleClick}>
        OK
      </Button>
    </Form>
  );
}

export default AddCard;

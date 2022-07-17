import { Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const axios = require("axios").default;

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("http://localhost:5001/api/notes");
    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const notesArr = notes.map((note) => {
    return (
      <Card key={note._id}>
        <Card.Header>
          <span>{note.title}</span>
          <div>
            <Button href={`/note/${note._id}`}>Edit</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{note.content}</p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  });
  return (
    <div>
      <MainScreen title="Heya">
        <Link to="create-note">
          <Button>Create</Button>
        </Link>
        {notesArr}
      </MainScreen>
    </div>
  );
};

export default MyNotes;

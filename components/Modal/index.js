import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import AppContext from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";
const MainModal = ({ show, name, onHide, value, label, drink, setDrink }) => {
  //   const { setDrink, drink } = useContext(AppContext);
  const [state, setState] = useState("");

  useEffect(() => {
    console.log("drink", drink, "name:::", name);
    let val = "";
    // name == "substitute" ? drink.substitute : drink.ingredients;
    if (name == "substitute") {
      val = drink?.substitute;
    } else if (name == "ingredients") {
      val = drink?.ingredients;
    } else if (name == "sources") {
      val = drink?.sources;
    } else if (name == "direction") {
      val = drink?.direction;
    }
    setState(val);
  }, [drink]);

  const handleAdd = () => {
    setDrink({ ...drink, [name]: state });
    // setState("");
    onHide();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Form.Label column sm="2">
              {label}
            </Form.Label>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col sm="20">
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                name={name}
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder={`Write ${name} here...........`}
                required
              />
            </Form.Group>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleAdd()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MainModal;

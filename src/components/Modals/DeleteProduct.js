import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import db from "../../firebase";

function DeleteProduct ({product, collection}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const deleteProduct = () => {
        db.collection(collection).doc(product.id)
            .delete()
            .then(() => window.location.reload())
                
    }

  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Brisanje
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Brisanje prizvoda</Modal.Title>
        </Modal.Header>
        <Modal.Body>Da li ste stigurni da zelite da izbrisete proizvod?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={deleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteProduct
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {db} from "../../firebase";


function AddProduct({collection}) {

    const [show, setShow] = useState(false);

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [amount, setAmount] = useState("")
    const [doc, setDoc] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function addProduct() {
        db.collection(collection).doc(doc)
        .set({
            name: name,
            price: price,
            amount: amount
        })
        .then(()=> window.location.reload())

       // window.location.reload()
    }

    return (
        <div>
        <Button variant="light" onClick={handleShow}>
          Dodaj
       </Button>

       <Modal show={show} onHide={handleClose}>
           <Modal.Header >
           <Modal.Title>Dodaj proizvod</Modal.Title>
           </Modal.Header>
           <Modal.Body>
                <div className="form-label-group">
                   <label htmlFor="inputName">Name document</label>
                   <input type="text" id="inputName" onChange={e=>setDoc(e.target.value)} className="form-control" required autoFocus/>
                   
               </div>
               <div className="form-label-group">
                   <label htmlFor="inputName">Name</label>
                   <input type="text" id="inputName" onChange={e=>setName(e.target.value)} className="form-control" required/>
                   
               </div>
               <div className="form-label-group">
                   <label htmlFor="inputPrice">Price</label>
                   <input type="number" id="inputPrice" onChange={e=>setPrice(e.target.value)} className="form-control" required/>
                   
               </div>
               <div className="form-label-group">
                   <label htmlFor="inputAmount">Amount</label>
                   <input type="text" id="inputAmount" onChange={e=>setAmount(e.target.value)} className="form-control" required/>
               </div>
           </Modal.Body>
           <Modal.Footer>
           <Button variant="danger" onClick={handleClose}>
               Close
           </Button>
           <Button variant="success" onClick={addProduct}>
               Save Changes
           </Button>
           </Modal.Footer>
       </Modal>
   </div>
    )
}

export default AddProduct
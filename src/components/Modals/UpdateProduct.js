import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {db} from "../../firebase";


function UpdateProduct({product, collection}) {

    const [show, setShow] = useState(false);

    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [amount, setAmount] = useState(product.amount)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let history = useHistory()

    function updateProduct() {
        
        db.collection(collection)
        .doc(product.id)
        .update({
            name: name, 
            price: price, 
            amount: amount
        })
        .then(() =>window.location.reload())
        
    }

    return (
        <div>
        <Button variant="success" onClick={handleShow}>
          Izmeni
       </Button>

       <Modal show={show} onHide={handleClose}>
           <Modal.Header >
           <Modal.Title>Izmeni proizvod</Modal.Title>
           </Modal.Header>
           <Modal.Body>
               <div className="form-label-group">
                   <label htmlFor="inputName">Name</label>
                   <input type="text" id="inputName" onChange={e=>setName(e.target.value)} className="form-control" value={name} required autoFocus/>
                   
               </div>
               <div className="form-label-group">
                   <label htmlFor="inputPrice">Price</label>
                   <input type="number" id="inputPrice" onChange={e=>setPrice(e.target.value)} className="form-control" value={price} required/>
                   
               </div>
               <div className="form-label-group">
                   <label htmlFor="inputAmount">Amount</label>
                   <input type="text" id="inputAmount" onChange={e=>setAmount(e.target.value)} className="form-control" value={amount} required/>
               </div>
           </Modal.Body>
           <Modal.Footer>
           <Button variant="danger" onClick={handleClose}>
               Close
           </Button>
           <Button variant="success" onClick={updateProduct} >
               Save Changes
           </Button>
           </Modal.Footer>
       </Modal>
   </div>
    )
}

export default UpdateProduct
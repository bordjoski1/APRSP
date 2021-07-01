import React, { useEffect, useState } from "react"
import UpdateProduct from "../components/Modals/UpdateProduct";
import AddProduct from "../components/Modals/AddProduct";
import DeleteProduct from "../components/Modals/DeleteProduct";
import DrinksService from "../services/DrinksService";
import UserUtility from "../utility/UserUtility";

function Drinks() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        DrinksService.getAll()
            .then(setDrinks)
    }, [])
    
    return(
        <div className="team-boxed" style={{backgroundImage:"url(assets/img/pages/drinks.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className="container">
            <div className="intro">
                <h2 className="text-center" style={{color:" white"}}>Pice</h2>
                <p className="text-center" style={{color:"white"}}>Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
                <p className="text-center" style={{marginTop:"5px"}}>{UserUtility.isLoggedIn()? <AddProduct collection={"drinks"}/>: <span></span>}</p>
            </div>
            <div className="row people">
                {drinks.map(item => {
                  return(
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <h3 className="name">{item.name}</h3>
                            <p className="title">{item.price}din {item.amount}</p>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                            <div className="social">
                                {/* <button className="btn btn-success" type="button">Izmeni</button> */}
                                <a href="/"></a>
                                {UserUtility.isLoggedIn()? 
                                    <div>
                                        <UpdateProduct product={item}
                                                collection={'drinks'} />

                                        <DeleteProduct product={item}
                                                collection={'drinks'}/>
                                    </div>: 
                                    <span></span>}
                                {/* <button className="btn btn-danger" type="button">Izbrisi</button> */}
                                </div>
                        </div>
                    </div>
                  )  
                })}
            </div>
        </div>
    </div>
    )
}

export default Drinks
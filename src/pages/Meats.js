import React, { useEffect, useState } from "react"
import UpdateProduct from "../components/Modals/UpdateProduct";
import AddProduct from "../components/Modals/AddProduct";
import DeleteProduct from "../components/Modals/DeleteProduct";
import { MeatsService } from "../services/MeatsService";

function Meats() {
    const [meats, setMeats] = useState([]);

    useEffect(() => {
        MeatsService.getAll()
            .then(setMeats)
    }, [])
    
    return(
        <div className="team-boxed" style={{backgroundImage:"url(assets/img/pages/meat.jpg)"}}>
        <div className="container">
            <div className="intro">
                <h2 className="text-center" style={{color:" rgb(132,135,137)"}}>Mesni proizvodi</h2>
                <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
                <p className="text-center" style={{marginTop:"5px"}}><AddProduct collection={"meats"}/></p>
            </div>
            <div className="row people">
                {meats.map(meat => {
                  return(
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <h3 className="name">{meat.name}</h3>
                            <p className="title">{meat.price}din {meat.amount}</p>
                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                            <div className="social">
                                {/* <button className="btn btn-success" type="button">Izmeni</button> */}
                                <a href="#"></a>
                                <UpdateProduct product={meat}
                                                collection={'meats'} />

                                <DeleteProduct product={meat}
                                                collection={'meats'}/>
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

export default Meats
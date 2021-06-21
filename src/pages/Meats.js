import React, { useEffect, useState } from "react"
import db from "../firebase";
import { MeatsService } from "../services/MeatsService";

function Meats() {
    const [meats, setMeats] = useState([]);

    useEffect(() => {
        MeatsService.getAll()
            .then(setMeats)
    }, [])


    return(
        <div>
           <p>meso</p>
            {meats.map(meat=> {
                return <span>{meat.name}</span>
            })}
        </div>
    )
}

export default Meats
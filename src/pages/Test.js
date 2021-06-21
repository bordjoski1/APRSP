import React, { useEffect, useState } from "react"
import db from '../firebase'
function Test() {
    const [test, setTest] = useState([]);
    const [id, setId] = useState(2);
    const [name, setName] = useState("test2")

    useEffect(() => {
        fetchBlogs()
        add()
    },[])

    
    const fetchBlogs=async()=>{
        const response=db.collection('test');
        const data=await response.get();
        console.log(data)
        data.docs.forEach(item=>{
            console.log(item.data())
         setTest(item.data())
        })
    }

    function add() {
        db.collection("test").doc("test").set({
           id: id,
           name: name
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    return (
        <h1>test</h1>
    )
}


export default Test
import axios from "axios"

// import axois from 'axois';


export default axios.create({
    baseUrl:"http://127.0.0.1:8000/api",
    headers:{
        "content-type" : "application/json",
    }
})
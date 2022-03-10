import React from "react";
import axios from "axios";



const Home = ({data}) => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
        console.log(res.data);
    });
    axios.delete("https://reqres.in/api/users?page=2").then((res) => {
        console.log(res.data);
    });
    axios.put("https://reqres.in/api/users?page=2").then((res) => {
        console.log(res.data);
    })

    return(
        <div>
            <h1>RedSky Coding Challenge</h1>
            <button>CREATE NEW USER</button>
            {/*<button onClick={modal Button}></button>*/}
            <div>
                <div>
                  <img src={require(data.avatar)}/>
                    <p>{data.first_name}</p>
                    <p>{data.last_name}</p>
                    <p>{data.email}</p>
                    <button>EDIT</button>
                    <button>DELETE</button>

                </div>
            </div>



        </div>
    )

}



export default Home;

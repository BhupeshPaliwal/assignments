import axios from "axios";
import React, {useState} from 'react';

const Contactme = () => {
    const [name, setName] = useState("")
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted", name, query);

            axios
              .post("testurl.com/login", {
                name: name,
                query: query,
              })
              .then((res) => {
                //dispatch(loginSuccess())
              })
              .catch((err) => {
                console.log(err);
                //dispatch(loginFailed());
              });
            };

  return (
    <div className="contactform">
            <form className="contactmeform" onSubmit={(e) => handleSubmit(e)}>
                <h1>Fill the form to contact me!</h1>
                <input 
                type="name" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />
                <br /><br/>
                <input 
                type="query" 
                placeholder="Query" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                />
                <br /><br/>
                <button type="submit" className="submitbtn" >Submit</button>
            </form>
        </div>
  )
}

export default Contactme



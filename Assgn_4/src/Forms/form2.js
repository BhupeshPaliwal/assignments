import React, {useState} from 'react';

const Contactme = () => {
    const [name, setName] = useState("")
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted", name, query)}

  return (
    <div className="contactform">
            <form className="contactmeform" onSubmit={(e) => handleSubmit(e)}>
                <h1>Form 2</h1>
                <input 
                type="name" 
                placeholder="Entry 1" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />
                <br /><br/>
                <input 
                type="query" 
                placeholder="Entry 2" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                />
                <br /><br/>
                <button type="submit" className="submitbtn" >Submit</button>
            </form>
        </div>
  )
}

export default Contactme;



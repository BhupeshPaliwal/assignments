import './App.css';
import React,{useState} from 'react'; 

function Contact(){
    
    const [mnumber,setMnumber] = useState("");
    const [email,setEmail]=useState("")  ;


    const updateMnumber= e =>{
        setMnumber(e.target.value);
        console.log(mnumber);
    }
    const updateEmail= e =>{
        setEmail(e.target.value);
        console.log(email);
    }

    const onSubmit= ()=>
    {
        if (!mnumber || !email)
        {return alert("Enter in all fields")}
        else
        {
             fetch('testurl.com/contactme',{
            method: "POST",
            headers: { "content-type":"application/json",
            },
          body: JSON.stringify({
            mnumber: mnumber,
            email: email
            
          })
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
        

        }
    }
    
    
    
    
    return(
        <div>
        
        
            <div>
               
            <input type="text" placeholder="Your Contact Number" name="mnumber" value={mnumber}
               onChange={updateMnumber}></input>
            </div>
            <div>
           
            <input type="text" name="email" placeholder="Your Email Address" value={email}
            onChange={updateEmail}></input>
            </div>
            <button onClick={onSubmit}>
            Submit</button>
        </div>
    )
}
export default Contact;

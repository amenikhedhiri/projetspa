import React , {useState} from "react";

function Sign (){

    const [submitting, setSubmitting] = useState(false);
            const handleSubmit = event => {
                event.preventDefault();
                setSubmitting(true);
                setTimeout(()=> {
                    setSubmitting(false);
                },3000 )
                    
            }

 
return(

 
<div className="wrapper">
    <h1> Formulaire</h1>
   
        {submitting && <div> Submitting form </div>}

    <form onSubmit = {handleSubmit}>
        
        <fieldset> 
            <label>
                <p> Name</p>
                <input name="name"/>
                <p> lastname</p>
                <input lastname="lastname"/>
                <p> Password</p>
                <input Password="password"/>

            </label>
        </fieldset>
        <button type="submit">SUBMIT</button>
    </form>

</div> 



);

}
    
export default Sign;
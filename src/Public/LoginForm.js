import React,{useState, useEffect} from 'react';

function LoginForm() {
    const initialValues = {username:"" ,email:"",password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange =(e) =>{
        const {name , value} = e.target;
        setFormValues({...formValues , [name]:value});
    };

    const handleSubmit =(e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() =>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    } ,[formErrors]);
        const validate = (values)=>{
        const errors = {};
        const regex = " /";
        if(!values.username ){
            errors.username = <p>Username is required!</p>;
        }
        if(!values.email){
            errors.email = <p>Email is required!</p>;
        }else if(!regex.test(values.email)){
            errors.email = <p>This is not a valid email formate!</p>;
        }
        if(!values.password){
            errors.password = <p>Password is required!</p>;
        }
        else if(values.password.length < 8){
            errors.password = <p>Password must be 8 characters.</p> ;
        }else if(values.password.length > 15){
            errors.password = <p>Password can't exceed more than 15 characters.</p>;
        }
        return errors;
    }

    return (
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui messages success"><h3>Signed in successfully!</h3></div>
            ):(
            <form onSubmit = {handleSubmit}>
                <div className="form-inner">
                    <h2>Login </h2>
                    <div className="form-group">
                        <label htmlFor="login" className="label">Username:</label> 
                        <input type="text" className="form-control" name="username" values={formValues.username} onChange={handleChange}/>               
                    </div>
                    <p>{formErrors.username}</p>
                    <div className="form-group">
                        <label htmlFor="email" className="label">Email:</label> 
                        <input type="email"  className="form-control" name="email"  values={formValues.email} onChange={handleChange} />               
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="form-group">
                        <label htmlFor="password" className="label">Password:</label> 
                        <input type="password"  className="form-control" name="password" values={formValues.password} onChange={handleChange}/>               
                    </div>
                    <p>{formErrors.password}</p>
                    <div className="form-check ">
                        <input className="form-check-input " type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label "  id ="checkheading" htmlFor="flexCheckDefault">
                           Remember me
                        </label>
                     </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            )} 
       
    </div>
    );
}

export default LoginForm;

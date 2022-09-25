import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// API
import {signIn} from '../Auth/index';

// Import LAYOUT
import Layout from '../Core/Layout/Layout';

function Signin() {
    const { register, handleSubmit, setValue, formState:{errors} } = useForm();

    // State
    const [success, setSuccess] = useState(0);
    const [error, setError] = useState(0);


    // Show Error Message
    const showError = () => {
        return (
            <div className='alert alert-danger text-center' style={{ display: error ? "" : "none" }}>
                {error}
            </div>
        )
    };


    // Show Error Message
    const showSuccess = () => {
        return (
            <div className='alert alert-info text-center' style={{ display: success ? "" : "none" }}>
                SignIn Successfull
            </div>
        )
    };


    // Signup Form
    const signInForm = () => {
        return (
            <Container>
                <Row>
                    <Col md={8} className="offset-md-2">
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <h3>Sign In</h3>
                            <div className="form-group mb-3">
                                <label htmlFor='email' className='text-muted'><strong>Email</strong><span className='err'>{errors.email && "This Field is Required"}</span></label>
                                <input type="email" className="form-control" id='email' placeholder="Enter your email" {...register("email", {required: true})} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor='password' className='text-muted'><strong>Password</strong><span className='err'>{errors.password && "This Field is Required"}</span></label>
                                <input type="password" className="form-control" id='password' placeholder="Enter your password" {...register("password", {required: true, maxLength: 55})} />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Sign Up</button>
                            
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }


    // For Submiting the Form
    const submitHandler = (data) => {
        const {email, password} = data;

        signIn({email, password})
        .then((data) => {
            if(data.error) {
                setSuccess(0);
                setError(data.error);
            }
            else {
                setSuccess(1);
                setError(0);
                setValue("email", "", {shouldValidate: false});
                setValue("password", "", {shouldValidate: false});
            }
        })
    };


    return (
        <Layout title="Signin" description="This is the Signin page">
            {showError()}
            {showSuccess()}
            {signInForm()}
        </Layout>
    )
}

export default Signin;
import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import NavBar from "../component/Navbar"
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Register = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [batch, setBatch] = useState("6-7 AM");
    const [response, setReponse] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };


    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    
    const ageChange = (e) => {
        setAge(e.target.value);
    };

    const batchChange = (e) => {
        setBatch(e.target.value);
    };

    const onSubmit = async (data) => {
        data.batch = batch;
        try {
            const config = {
                headers: {
                  "Content-Type": "application/json",
                  "access-control-allow-origin": "*",
                },
              };
              await axios
                .post(
                  `http://localhost:3000/register`,
                  {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    age: data.age,
                    batch: data.batch,
                  },
                  config
                ).then((res) => {
                    setReponse(res.data.message);
                    console.log(response);
                    handleShow();
                  });
            } catch (error) {
                console.log("ERROR")
            }
        
          
    };

    
    return (
        <div className="nav"><NavBar />
        <div className="container" color="brown">
            
        <div className="container-div">
            <form method="POST">
                <div className="mb-3 input-div">
                <p>
                    Full Name
                </p>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    autoComplete="off"
                    onChange={nameChange}
                    {...register("name", { required: true, maxLength: 100 })}
                />
                {errors.name && <p className="error">Field required with limit: 100 chars</p>}
                </div>
        
                <div className="mb-3 input-div">
                <p>Email</p>
                <input
                    type="mail"
                    className="form-control"
                    id="email"
                    autoComplete="off"
                    onChange={emailChange}
                    {...register("email", {
                    required: true,
                    pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                />
                {errors.email && <p className="error">Invalid Mail</p>}
                </div>
                <div className="mb-3 input-div">
                <p>Password</p>
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    autoComplete="off"
                    onChange={passwordChange}
                    {...register("password", {
                    required: true,
                    minLength: 8,
                    })}
                />
                {errors.password && <p className="error">Password must be of min 8 characters.</p>}
                </div>
                <div className="mb-3 input-div">
                <p>Age</p>
                <input
                    type="number"
                    className="form-control"
                    id="inputAge"
                    autoComplete="off"
                    onChange={ageChange}
                    {...register("age", {
                    required: true,
                    min: 18,
                    max: 65,
                    })}
                />
                {errors.age && <p className="error">Age Range Allowed: 18-65</p>}
                </div>
                <div className="mb-3 input-div">
                <p>Batch</p>
                <select className="form-select" onChange={batchChange}>
                    <option value="6-7 AM" className="form-control">
                    6-7 AM
                    </option>
                    <option value="7-8 AM" className="form-control">
                    7-8 AM
                    </option>
                    <option value="8-9 AM" className="form-control">
                    8-9 AM
                    </option>
                    <option value="5-6 PM" className="form-control">
                    5-6 PM
                    </option>
                </select>
                </div>
            <p>Payment of Enrollment Fees (500/- Rs INR.)</p>
            <button
                type="submit"
                className="btn primary-button"
                onClick={
                    handleSubmit(onSubmit)
                }
            >
                CompletePayment()
            </button>
            
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>{response}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>
    </div>
    );
    
};

export default Register;
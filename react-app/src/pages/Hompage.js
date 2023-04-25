import React, {useEffect,useState} from "react";
import {useNavigate } from "react-router-dom";
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
import MainNav from "../components/Nav/MainNav";
//import ServiceCards from "../components/Services/ServiceCards";
import {findUserInSession} from '../auth';
import HomeCarousel from "../components/homepage/carousel";

const Homepage = ()=>{
    const navigate = useNavigate();
    const [username, setUsername] = useState("");   
    
    useEffect(()=>{
        fetch("http://localhost:4000/api/users/auth", {
            credentials: 'include',
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
        })
        .then((res)=>{
            if(!res.ok){
                alert('Unauthorised, User is not logged in')
                //navigate("/")
            }    
            else{
                const getUser =  async() =>{
                    const user = await res.json()
                    setUsername(user.name)
                }
                getUser()
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    return (
        <div>
            <MainNav />
            <h2>Welcome to Bikz Detailer {username}, The Carwash Company are market leaders in hand car washing and valeting.</h2>
            <HomeCarousel />
           
        </div>

    )
    


}


export default Homepage;
import React, {useEffect,useState} from "react";
import {useNavigate } from "react-router-dom";
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import MainNav from "../components/Nav/MainNav";
import ServiceCards from "../components/Services/ServiceCards";


function Services(){
    return(
        <div>
                <MainNav />
                <ServiceCards/>
                
               
                
            </div>
    
    )
    
}

export default Services;
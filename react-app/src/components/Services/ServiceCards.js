import { Container, Row, Col, Card } from "react-bootstrap";
//import carone from "./data/car1.jpg";

const ServiceCards = () =>{    
    const data = [
        {
            //image: carone,
            image: "./data/car1.jpg",
            title: "Wash/Dry Service",
            description: "Included with every service",
            price: 15
        
        },

        {
            image: "./data/exterior1.jpg",
            title: "Wheel Polish Service",
            description: "Get wheels polished with special spray",
            price: 12
        },

        {
            image: "./data/foam.jpg",
            title: "Full Valet Service",
            description: "Car vaccumed, both interior and the trunk",
            price: 20
        },

        {
            image: "carpet.jpg",
            title: "Carpet Cleaning",
            description: "Car carpet cleaned with our special cleaner",
            price: 15
        },
    ]


    return (
        <Container>
            <Row className="justify-content-center">
            {data.map((item, k) => (
                <Col key={k} xs={12} md={4} lg={3}>
                <Card>
                    <Card.Img src={item.image}  />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>€ {item.price}</Card.Text>
                        
                        
                    </Card.Body>
                </Card>
            </Col>
             ))}
            </Row>
        </Container>
    )


}

export default ServiceCards;
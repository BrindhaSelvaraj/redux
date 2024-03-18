import React, { useContext } from 'react';
import { mycontext } from './App';
import { Card, Button } from 'react-bootstrap';

const Taskoutput = () => {
    const [data, setdata] = useContext(mycontext);

    const handleIncrease = (id, quantity) => {
        setdata(predata => {
            return predata.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: (item.quantity + 1 || quantity + 1) };
                }
                return item;
            });
        });
    };

    const handleDecrease = (id, quantity) => {
        setdata(predata => {
            return predata.map(item => {
                if (item.id === id) {
                    const newQuantity = (item.quantity || quantity || 1) - 1;
                    return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
                }
                return item;
            });
        });
    };

    return (
        <div>
            <h1 className="text-center">YOUR SEARCH RESULT</h1>
            <div className="row justify-content-center">
                {data.map((item, index) => (
                    <div className="col-12 mb-4" key={index}>
                        <Card style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <Card.Img variant="top" src={item.images[0]} alt={`Item ${index}`} style={{ width: '80%', height: 'auto' }} />
                                </div>
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>Brand:{item.brand}</Card.Text>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Card.Text>Rating: {item.rating}</Card.Text>
                                        <Card.Text>Price: {item.price}</Card.Text>
                                        <h6>Last updated 5 mins ago</h6>
                                        <hr></hr>
                                        <Button variant="primary" onClick={() => handleDecrease(item.id, item.quantity || 1)}>-</Button>{ item.quantity || 1}
                                        <Button variant="primary" onClick={() => handleIncrease(item.id, item.quantity || 1)}>+</Button>
                                       
                                        <Card.Text>Original Price: {item.price}</Card.Text>
                                        <Card.Text>Discount Percentage: {item.discountPercentage}%</Card.Text>
                                        <Card.Text>Total Price: {item.price * (item.quantity || 1)}</Card.Text> {/* Display total price */}
                                        <Button variant="primary">Proceed To Pay</Button>
                                        
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Taskoutput;

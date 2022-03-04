import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'

const Pizza = (props) => {
    const { pizza } = props
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small');
    const [show, setShow] = useState(false);
    return (
        <>
            <div style={{ margin: '20px' }} className='p-4 shadow-lg p-3 mb-5 bg-white rounded ' >
                <div onClick={() => { setShow(true) }}>
                    <h1> {pizza.name}</h1>
                    <img src={pizza.image} alt="information about pizza" style={{ height: '200px', width: '200px' }} className="img-fluid" />

                </div>
                <div className='flex-container'>
                    <div className='w-100 m-1'>
                        <p>Varients</p>
                        <select className='form-control' value={varient} onChange={e => setVarient(e.target.value)}>
                            {pizza.varients.map(varient => {
                                return (
                                    <option value={varient} key={varient}>
                                        {varient}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='w-100 m-1'>
                        <p>Quantity</p>
                        <select className='form-control' value={quantity} onChange={e => setQuantity(e.target.value)}>
                            {[...Array(10).keys()].map((x, i) => {
                                return (
                                    <option value={i + 1} key={i}>
                                        {i + 1}
                                    </option>
                                )
                            })}
                        </select>
                    </div>


                </div>
                <div className='flex-container'>
                    <div className='w-100'>
                        <h1 className='mt-1'>Price: {pizza.prices[0][varient] * quantity} VND</h1>
                    </div>
                    <div className='w-100'>
                        <button className='btn'>ADD TO CART</button>
                    </div>
                </div>

                <Modal show={show} onHide={() => { setShow(false) }} >
                    <Modal.Header closeButton>
                        <Modal.Title>{pizza.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <img src={pizza.image} alt="information about pizza"  style={{ height: '400px'}} className="img-fluid" />
                    <p>{pizza.description}</p>

                    </Modal.Body>

                    <Modal.Footer>
                        <button onClick={() => { setShow(false) }} className='btn' > CLOSE</button >
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    );
};



export default Pizza;

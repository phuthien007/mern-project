import React, { useEffect, useState } from 'react';
import Pizza from '../components/Pizza';
// import data from '../data';
import { PizzaApi } from '../api';
const Homepage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        PizzaApi.getAllPizza()
            .then((d) => {
                setData(d.data)
                console.log(d)
            }).catch(e => {
                console.log(e)
            })
    }, []);
    return (
        <>
            <h1>{data.length}</h1>
            <div className='row' style={{ margin: '0 auto' }}>
                {data.length > 0 && data.map(pizza => {
                    return <div className='col-md-4 p-3'>
                        <Pizza pizza={pizza} />
                    </div>
                })}

            </div>
        </>
    );
};



export default Homepage;

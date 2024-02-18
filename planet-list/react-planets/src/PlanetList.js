import './PlanetList.css';
import React from 'react';
import Planet from './Planet';


const PlanetList = () => {
    return(
        <>
            <div>
                <div className='container'>
                    <input className='planetSizing' type='image' src={require('./mercurY.jpg')} alt='mercury' data-bs-toggle="modal" data-bs-target="#mercury"></input>
                    <input className='planetSizing' type='image' src={require('./venus.jpg')} alt='venus' data-bs-toggle="modal" data-bs-target="#venus"></input>
                    <input className='planetSizing' type='image' src={require('./earth.jpg')} alt='earth' data-bs-toggle="modal" data-bs-target="#earth"></input>
                    <input className='planetSizing' type='image' src={require('./mars.jpg')} alt='mars' data-bs-toggle="modal" data-bs-target="#mars"></input>
                    <input className='planetSizing' type='image' src={require('./jupiter.jpg')} alt='jupiter' data-bs-toggle="modal" data-bs-target="#jupiter"></input>
                    <input className='saturn' type='image' src={require('./saturn.jpg')} alt='saturn' data-bs-toggle="modal" data-bs-target="#saturn"></input>
                    <input className='planetSizing' type='image' src={require('./uranus.jpg')} alt='uranus' data-bs-toggle="modal" data-bs-target="#uranus"></input>
                    <input className='planetSizing' type='image' src={require('./neptune.png')} alt='neptune' data-bs-toggle="modal" data-bs-target="#neptune"></input>
                </div>
            </div>
        
        <Planet />

        </>
    );
}

export default PlanetList;
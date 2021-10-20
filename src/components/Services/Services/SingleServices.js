import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router';
import ServicesApi from '../../../hooks/ServicesApi';



const SingleServices = () => {
    const { id } = useParams()
    const { services } = ServicesApi()
    const clickedServices = services.filter(service => service?.id === id)
    console.log(clickedServices)
    return (

        <div className="container ">
            <br />
            <h2>Seeing Our Full Information</h2>
            <br />
            <p>You wouldn't go to a hospital, you wouldn't go to a law firm where the doctors and lawyers were not retained on merit: where they all had tenure regardless of competence. Parents feel the same way about schools that they send their children to.</p>
            <br />
            <br />
            <div className="card mb-3" style={{ mazWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4 ">
                        <img src={clickedServices[0]?.img} className="img-fluid rounded-start p-3 " alt="..." />
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                            <h3 className="card-title"> Name: {clickedServices[0]?.title}</h3>
                            <h3 className="card-title">Price: {clickedServices[0]?.price}</h3>
                            <p className="card-text">Details: {clickedServices[0]?.description}</p>


                        </div>

                    </div>
                </div>

            </div>
            <FontAwesomeIcon className="icon" icon={faClinicMedical} size='3x' />
        </div>
    );
};

export default SingleServices;
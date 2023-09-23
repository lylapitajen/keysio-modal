"use client";

import Modal from 'react-bootstrap/Modal';
import propertyData from '@/app/data/properties-data';
import Property from '@/app/components/Property';

const PropertiesModal = ({ show, handleClose }) => {
    return (
        <Modal id="properties-modal" size="lg" show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Chain of Properties</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id="properties-modal-content">
                    {propertyData.map((property ) => (
                        <Property property={property} key={property.number}/>
                    ))}
                </div>
            </Modal.Body>
        </Modal>
    );
    
};

export default PropertiesModal;
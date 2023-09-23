"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import PropertiesModal from "@/app/components/PropertiesModal";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="base-page">
      <img src="/images/logo.webp" />
      <div className="text-content">
        <h1>Keysio Property Chain Modal</h1>
        <p>
          This is a dummy page set up to demo the property chain modal
          functionality for Keysio.
        </p>
        <Button variant="primary" onClick={handleShow}>
          Launch Modal
        </Button>
      </div>

      <PropertiesModal show={show} handleClose={handleClose} />
    </div>
  );
};
export default Home;

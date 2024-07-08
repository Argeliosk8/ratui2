import React from 'react';
import { Form } from 'react-bootstrap';

const WeekSelector = ({ label, onChange }) => {
  return (
    <Form.Group controlId="weekSelector">
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type="week" 
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default WeekSelector;
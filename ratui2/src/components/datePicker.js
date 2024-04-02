import React, { useState } from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const goToPreviousWeek = () => {
    setCurrentWeekStart((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const goToNextWeek = () => {
    setCurrentWeekStart((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getWeekDates = () => {
    const weekDates = [];
    const start = new Date(currentWeekStart);
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  return (
    <Form.Group controlId="datePicker">
      <Form.Label>Select a Date</Form.Label>
      <ButtonGroup className="mb-2">
        <Button onClick={goToPreviousWeek}>&lt;</Button>
        <Button onClick={goToNextWeek}>&gt;</Button>
      </ButtonGroup>
      <ButtonGroup>
        {daysOfWeek.map((day, index) => (
          <Button
            key={day}
            onClick={() => handleDateClick(getWeekDates()[index].toLocaleDateString())}
            variant={selectedDate === getWeekDates()[index].toLocaleDateString() ? 'primary' : 'secondary'}
            disabled={day === "Saturday" || day === "Sunday" ? true : false}
          >
            {day} - {getWeekDates()[index].toLocaleDateString()}
          </Button>
        ))}
      </ButtonGroup>
      <Form.Text>{selectedDate && `Selected date: ${selectedDate}`}</Form.Text>
    </Form.Group>
  );
};

export default DatePickerComponent;



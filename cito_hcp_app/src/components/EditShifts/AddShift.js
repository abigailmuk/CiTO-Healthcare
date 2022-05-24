import React, { useState, useEffect } from "react";
import { ButtonSmall, ButtonSmallToggle, InputGroup } from './EditShiftElements'
import { Alert, ButtonGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form'


import ShiftDataService from "../../services/shift.services";

const AddShift = ({ id, setShiftId }) => {
  const [nursetype, setNurseType] = useState("");
  const [shiftpattern, setShiftPattern] = useState("");
  const [starttime, setStartTime] = useState("");
  const [endtime, setEndTime] = useState("");
  const [status, setStatus] = useState("Approved");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (nursetype === "" || shiftpattern === "" || starttime === "" || endtime === "") {
    setMessage({ error: true, msg: "All fields are mandatory" }); /* validation to check if all fields have been inputed */
      return;
    }
    const newShift = {
      nursetype,
      shiftpattern,
      starttime,
      endtime,
      status,
    };
    console.log(newShift);

    try {
      if (id !== undefined && id !== "") {
        await ShiftDataService.updateShift(id, newShift);
        setShiftId("");
        setMessage({ error: false, msg: "Shift Updated!" });
      } else {
        await ShiftDataService.addShift(newShift);
        setMessage({ error: false, msg: "New Shift Added!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setNurseType("");
    setShiftPattern("");
    setStartTime("");
    setEndTime("");
  };

  useEffect(() => {
    const editHandler = async () => {
        setMessage("");
        try {
          const docSnap = await ShiftDataService.getShift(id);
          console.log("the record is :", docSnap.data());
          setNurseType(docSnap.data().nursetype);
          setShiftPattern(docSnap.data().shiftpattern);
          setStartTime(docSnap.data().starttime);
          setEndTime(docSnap.data().endtime);
          setStatus(docSnap.data().status);
        } catch (err) {
          setMessage({ error: true, msg: err.message });
        }
      };
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Nurse Type"
                value={nursetype}
                onChange={(e) => setNurseType(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" >
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Shift Pattern"
                value={shiftpattern}
                onChange={(e) => setShiftPattern(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" >
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Start Time"
                value={starttime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" >
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="End Time"
                value={endtime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <ButtonSmallToggle
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Approved");
                setFlag(true);
              }}
            >
              Approved  
            </ButtonSmallToggle>
            <ButtonSmallToggle
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Declined");
                setFlag(false);
              }}
            >
              Declined
            </ButtonSmallToggle>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <ButtonSmall variant="primary" type="Submit">
              Add / Update
            </ButtonSmall>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddShift;
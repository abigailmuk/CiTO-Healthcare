import React, { useEffect, useState } from "react";
import ShiftDataService from "../../services/shift.services";
import { ButtonSmall, ButtonSmallDelete } from './EditShiftElements'
import './EditShift.css'

const ShiftList = ({ getShiftId }) => {
  const [shifts, setShift] = useState([]);
  useEffect(() => {
    getShift();
  }, []);

  const getShift = async () => {
    const data = await ShiftDataService.getAllShifts();
    console.log(data.docs);
    setShift(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ShiftDataService.deleteShift(id);
    getShift();
  };
  return (
    <>
      <div className="mb-2">
        <ButtonSmall variant="dark edit" onClick={getShift}>
          Refresh List
        </ButtonSmall>
      </div>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nurse Type </th>
            <th>Shift Pattern </th>  
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td className="ShiftTable">{index + 1}</td>
                <td className="ShiftTable">{doc.nursetype}</td>
                <td className="ShiftTable">{doc.shiftpattern}</td>
                <td className="ShiftTable">{doc.starttime}</td>
                <td className="ShiftTable">{doc.endtime}</td>
                <td className="ShiftTable">{doc.status}</td>
                <td className="ShiftTable">
                  <ButtonSmall
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getShiftId(doc.id)}
                  >
                    Edit
                  </ButtonSmall>
                  <ButtonSmallDelete
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </ButtonSmallDelete>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ShiftList;
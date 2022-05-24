import { db } from "../firebase.config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const shiftCollectionRef = collection(db, "shifts");

class ShiftDataService {
  addShift = (newShift) => {
    return addDoc(shiftCollectionRef, newShift);
  };

  updateShift = (id, updatedShift) => {
    const shiftDoc = doc(db, "shifts", id);
    return updateDoc(shiftDoc, updatedShift);
  };

  deleteShift = (id) => {
    const shiftDoc = doc(db, "shifts", id);
    return deleteDoc(shiftDoc);
  };

  getAllShifts = () => {
    return getDocs(shiftCollectionRef);
  };

  getShift = (id) => {
    const shiftDoc = doc(db, "shifts", id);
    return getDoc(shiftDoc);
  };
}

export default new ShiftDataService();
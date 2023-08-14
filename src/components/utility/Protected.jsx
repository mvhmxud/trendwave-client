import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { isAuthed } = useSelector((state) => state.auth);

  if (!isAuthed) {
    return <Navigate to="/" replace/>;
  }

  return children;
};

export default Protected;

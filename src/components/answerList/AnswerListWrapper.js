import React, { useState, useEffect } from "react";
import AnswerList from "./AnswerList";
import { getAnswers } from "../../api";

const AnswerListWrapper = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnswers();
      setAnswers(data.body);
    };
    fetchData();
  }, []);

  if (answers === []) {
    return <></>;
  }
  return <AnswerList answers={answers} />;
};

export default AnswerListWrapper;

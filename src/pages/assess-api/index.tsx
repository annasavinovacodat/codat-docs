import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Assess.json"

const AssessApi = () => {
  return (
    <Api url={URL} title="Lending API reference"/>
  );
}

export default AssessApi
import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function SequenceInput({ value, setValue }) {
  const [otp, setOtp] = useState("");

  return (
    <OtpInput
      value={value}
      onChange={(e) => setValue(e)}
      numInputs={5}
      separator={<span style={{ width: "8px" }}></span>}
      isInputNum={true}
      shouldAutoFocus={true}
      containerStyle={{
        justifyContent: "center",
      }}
      inputStyle={{
        border: "1px solid #6b21a8",
        borderRadius: "8px",
        width: "54px",
        height: "54px",
        fontSize: "12px",
        color: "black",
        fontWeight: "400",
        margin: "10px 10px",
        caretColor: "blue",
      }}
      focusStyle={{
        border: "1px solid #3b0764",
        outline: "none",
      }}
      renderInput={(props) => <input {...props} />}
    />
  );
}

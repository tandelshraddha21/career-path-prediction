import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function SequenceInput({value,setValue}) {
  const [otp, setOtp] = useState('');

  return (
    <OtpInput
      value={value}
      onChange={e => setValue(e)}
      numInputs={5}
      separator={<span style={{ width: "8px" }}></span>}
      isInputNum={true}
      shouldAutoFocus={true}
      containerStyle={{
        justifyContent:"center"
      }}
      inputStyle={{
        border: "1px solid #9CA3AF",
        borderRadius: "8px",
        width: "54px",
        height: "54px",
        fontSize: "12px",
        color: "#000",
        fontWeight: "400",
        margin:"10px 10px",
        caretColor: "blue"
      }}
      focusStyle={{
        border: "1px solid #CFD3DB",
        outline: "none"
      }}

      renderInput={(props) => <input {...props} />}
    />
  );
}
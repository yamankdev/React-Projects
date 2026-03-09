import React, { useState } from "react";
import OtpInput from "react-otp-input";

const MockOtp = () => {
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [step, setStep] = useState("enter-mobile"); // enter-mobile | enter-otp
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  // generate a random 6-digit OTP
  const generateMockOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    console.log("Mock OTP:", otp); // in real app, send to backend/SMS
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      setMessage("Please enter a valid mobile number");
      return;
    }
    generateMockOtp();
    setStep("enter-otp");
    setMessage("Mock OTP generated (shown below for demo)");
  };

  const handleVerify = () => {
    if (userOtp === generatedOtp) {
      setMessage("OTP verified successfully ✅");
    } else {
      setMessage("Invalid OTP ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {step === "enter-mobile" && (
        <form
          onSubmit={handleSendOtp}
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <h2>Enter mobile number</h2>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile"
            style={{ padding: "8px 12px", fontSize: "16px" }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send OTP
          </button>
        </form>
      )}

      {step === "enter-otp" && (
        <div style={{ textAlign: "center" }}>
          <h2>Enter OTP</h2>

          {/* For demo: show generated OTP on screen */}
          <p style={{ marginBottom: "8px", color: "gray" }}>
            Mock OTP (for testing): <strong>{generatedOtp}</strong>
          </p>

          <OtpInput
            value={userOtp}
            onChange={setUserOtp}
            numInputs={6}
            inputType="tel"
            renderSeparator={<span style={{ width: 8 }}></span>}
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  width: "40px",
                  height: "40px",
                  fontSize: "20px",
                  textAlign: "center",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            )}
          />

          <div style={{ marginTop: "12px" }}>
            <button
              onClick={handleVerify}
              style={{
                padding: "8px 12px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Verify OTP
            </button>
          </div>

          <button
            style={{
              marginTop: "8px",
              padding: "4px 8px",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={() => {
              generateMockOtp();
              setUserOtp("");
            }}
          >
            Resend mock OTP
          </button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default MockOtp;

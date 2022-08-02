import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router";

// scss
import "./Cart.scss";

// Components
import Step2 from "./Step2";

// mui
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CardDetails from "./../../mainLayout/CardDetails/CardDetails";

const steps = ["User Information", "Shipping Address", "Card Detail"];

const Cart = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  // Modal State and methods
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  console.log(open);
  const ContentDivs = () => {
    // if (activeStep === 0) {
    //   return (
    //     <>
    //       <StepOne value={[open, setOpen]} />
    //     </>
    //   )};
    if (activeStep === 0) {
      return <Step2 handleNext={handleNext} />;
    } else if (activeStep === 1) {
      return (
        <>
          {/* <Step3
            handleNext={
              (handleNext,
              cardname,
              setcardName,
              cardno,
              setcardno,
              cardexp,
              setcardexp,
              cardcvv,
              setcardcvv,
              selectLocation,
              handleSelectLocationChange)
            }
          /> */}
        </>
      );
    } else if (activeStep === 2) {
      return (
        <>
          <CardDetails />
        </>
      );
    }
  };

  return (
    <div className="cartContainer">
      <div>
        <Stepper style={{ display: "none" }} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {ContentDivs()}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}

              {/* {
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              } */}
            </Box>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Cart;

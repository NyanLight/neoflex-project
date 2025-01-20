import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../store";

export function useBanner() {
    const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const clickHandler = () => {
    if (step === 1) {
      const prescoring = document.getElementById('prescoring');
      prescoring?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const applicationId = useAuthStore.getState().applicationId;
    switch (step) {
      case 2:
        navigate(`/loan/${applicationId}`);
        break;
      case 3:
        navigate(`/loan/${applicationId}/document`);
        break;
      case 4:
        navigate(`/loan/${applicationId}/document/sign`);
        break;
      case 5:
        navigate(`/loan/${applicationId}/code`);
        break;
    }
  };

  useEffect(() => {
    const currentStep = useAuthStore.getState().step;
    setStep(currentStep);
  }, []);

  return {step, clickHandler};
}
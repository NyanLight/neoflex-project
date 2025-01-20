import { Navigate, Outlet, useParams } from 'react-router';
import { useAuthStore } from '../../store';

export const ProtectedRoute = ({ requiredStep }: { requiredStep: number }) => {
  const { applicationId } = useParams();
  const storedApplicationId = useAuthStore((state) => state.applicationId);
  const currentStep = useAuthStore((state) => state.step);

  if (storedApplicationId != applicationId) {
    return <Navigate to="/" replace />;
  }

  if (currentStep < requiredStep) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

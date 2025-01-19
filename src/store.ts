import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OfferData } from './types/OfferData.type';

type OfferState = {
  offers: OfferData[];
  setOffers: (offers: OfferData[]) => void;
};

type AuthState = {
  applicationId: string,
  setApplicationId: (application: string) => void;
  step: number,
  setStep: (step: number) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      applicationId: '',
      setApplicationId: (applicationId) => set({applicationId}),
      step: 1,
      setStep: (step) => set({step}),
    }),
    {
      name: 'auth',
    },
  ),
)

export const useOfferStore = create<OfferState>()(
  persist(
    (set) => ({
      offers: [],
      setOffers: (offers) => set({ offers }),
    }),
    {
      name: 'offer-storage',
    },
  ),
);

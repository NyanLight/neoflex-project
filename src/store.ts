import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OfferData } from './types/OfferData.type';

type OfferState = {
  offers: OfferData[];
  setOffers: (offers: OfferData[]) => void;
};

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

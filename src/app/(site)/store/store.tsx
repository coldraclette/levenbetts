import { create } from 'zustand';

type StoreState = {
  showNavigation: boolean;
  setShowNavigation: (isVisible: boolean) => void;
};

const useStore = create<StoreState>((set) => ({
  showNavigation: false,
  setShowNavigation: (isVisible) => set({ showNavigation: isVisible }),
}));

export default useStore;

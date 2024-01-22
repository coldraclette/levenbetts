import { create } from 'zustand';

type StoreState = {
  showNavigation: boolean;
  navigationHeight: number;
  setShowNavigation: (isVisible: boolean) => void;
  setNavigationHeight: (height: number) => void;
};

const useStore = create<StoreState>((set) => ({
  showNavigation: false,
  navigationHeight: 0,
  setShowNavigation: (isVisible) => set({ showNavigation: isVisible }),
  setNavigationHeight: (height) => set({ navigationHeight: height }),
}));
export default useStore;

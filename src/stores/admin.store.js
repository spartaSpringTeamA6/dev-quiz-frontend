import { create } from 'zustand';

export const useAdminStore = create((set) => ({
  admin: null,
  setAdmin: (admin) => {
    set((state) => ({ ...state, admin: 'admin' }));
  },
  removeAdmin: () => {
    set((state) => ({ ...state, admin: null }));
  },
}));

export default useAdminStore;

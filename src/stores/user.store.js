import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  accessToken: null,
  setUser: (user) => {
    set((state) => ({ ...state, user: user }));
  },
  setAccessToken: (token) => {
    set((state) => ({ ...state, accessToken: token }));
  },
  removeUser: () => {
    set((state) => ({ ...state, user: null, accessToken: null }));
  },
}));

export default useUserStore;

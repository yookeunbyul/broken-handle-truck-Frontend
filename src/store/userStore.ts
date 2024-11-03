import { create } from 'zustand';
import { IUser } from '../types/auth';

interface UserState {
    user: IUser | null;
    setUser: (newUser: IUser | null) => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (newUser) => set({ user: newUser }),
}));

export default useUserStore;

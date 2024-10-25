import { create } from 'zustand';

interface TitleState {
    title: string;
    setTitle: (newTitle: string) => void;
}

const useTitleStore = create<TitleState>((set) => ({
    title: 'Title',
    setTitle: (newTitle) => set({ title: newTitle }),
}));

export default useTitleStore;

import { create } from "zustand";

const useScoreStore = create((set) => ({
  aptitudeScore: 0,
  codingScore: 0,
  writingScore: 0,
  memoryScore: 0,
  certificationCategory: undefined,
  userData: {
    fullName: undefined,
    contact: undefined,
    email: undefined,
  },
  setCertificationCategory: (cat) => set({ certificationCategory: cat }),
  updateAptitudeScore: (newScore) => set({ aptitudeScore: newScore }),
  updateCodingScore: (newScore) => set({ codingScore: newScore }),
  updateWritingScore: (newScore) => set({ writingScore: newScore }),
  updateMemoryScore: (newScore) => set({ memoryScore: newScore }),
  updateUserData: (newUserData) => set({ userData: newUserData }),
}));

export default useScoreStore;

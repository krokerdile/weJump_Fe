import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useClubTabStore = create()(
  devtools((set) => ({
    clubTabStatus: "Notice",
    setClubTabStatus: (clubTabStatus) => set({ clubTabStatus }),
  }))
);

export default useClubTabStore;

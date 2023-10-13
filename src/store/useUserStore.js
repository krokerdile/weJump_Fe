import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialUser = {
  userInfo: {
    id: -1,
    email: "",
    name: "",
    introduction: "",
    profileImagePath: "",
    createdAt: "",
  },
};

export const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        userInfo: initialUser.userInfo,

        setUserInfo: (userInfo) => set({ userInfo }),

        resetUser: () =>
          set({
            userInfo: initialUser.userInfo,
          }),
      }),
      { name: "user" }
    )
  )
);

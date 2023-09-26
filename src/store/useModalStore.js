import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useModalStore = create()(
  devtools((set) => ({
    modalType: null,
    showModal: false,
    setModalType: (modalType) => set({ modalType }),
    setShowModal: (showModal) => set({ showModal }),
  }))
);

export default useModalStore;

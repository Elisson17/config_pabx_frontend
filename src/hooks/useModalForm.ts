"use client";
import { Item } from "@/components/table/Table";
import { IssueHistoryEvent } from "@/models/issues";
import { create } from "zustand";

export interface OptionsProps {
  id: number;
  name: string;
  bot_id?: number;
}

export type TData = IssueHistoryEvent[];

export interface ModalStore<T, D> {
  item?: T;
  itemsArray?: T[];
  type?: string;
  options?: OptionsProps[];
  data?: TData;
  isOpen: boolean;
  openModal: (
    type: string,
    item?: T,
    options?: OptionsProps[],
    data?: D,
  ) => void;
  closeModal: () => void;
  addItemToArray: (newItem: T) => void;
  removeItem: (index: number) => void;
  clearItemsArray: () => void;
}

const useModalForm = create<ModalStore<any, any>>()((set, get) => ({
  item: undefined,
  type: "",
  children: undefined,
  options: undefined,
  data: undefined,
  isOpen: false,
  openModal: (
    type: string,
    item?: Item,
    options?: OptionsProps[],
    data?: TData,
  ) => set({ isOpen: true, item, type, options, data }),
  closeModal: () =>
    set({
      isOpen: false,
      item: undefined,
      type: undefined,
      data: undefined,
    }),
  addItemToArray: (newItem: Item) => {
    const { itemsArray } = get();
    const updatedItemsArray = itemsArray ? [...itemsArray, newItem] : [newItem];
    set({ itemsArray: updatedItemsArray });
  },
  removeItem: (index: number) => {
    const { itemsArray } = get();
    if (Array.isArray(itemsArray) && itemsArray.length > 0) {
      const updatedItemsArray = itemsArray.filter((_, i) => i !== index);
      set({ itemsArray: updatedItemsArray });
    }
  },
  clearItemsArray: () => {
    set({ itemsArray: undefined });
  },
}));

export default useModalForm;

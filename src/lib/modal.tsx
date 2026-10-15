import { createContext, useContext } from 'react';
import type { ModalType } from '../data';

export const ModalContext = createContext<(type: ModalType) => void>(() => {});

export const useOpenModal = () => useContext(ModalContext);

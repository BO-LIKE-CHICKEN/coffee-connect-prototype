import { atom } from 'recoil';

export const formAtom = atom({
  key: 'form',
  default: { name: '' },
});

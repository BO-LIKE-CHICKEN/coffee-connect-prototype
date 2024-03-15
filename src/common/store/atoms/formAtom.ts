import { atom } from 'recoil';
import { JOB_GROUP } from '@common/constants/jobGroup';
import { ValueOf } from '@common/custom-types';

export const formAtom = atom<{ name: string; jobGroup: '' | ValueOf<typeof JOB_GROUP> }>({
  key: 'form',
  default: { name: '', jobGroup: '' },
});

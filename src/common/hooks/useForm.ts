import { useRecoilState } from 'recoil';
import { formAtom } from '@common/store/atoms';

export const useForm = () => {
  const [form, setForm] = useRecoilState(formAtom);

  const { name } = form;

  const setName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm((prev) => ({ ...prev, name: e.target.value }));
  };

  return { name, setName };
};

import { useRecoilState } from 'recoil';
import { formAtom } from '@common/store/atoms';
import { ValueOf } from '@common/custom-types';
import { JOB_GROUP } from '@common/constants/jobGroup';

export const useForm = () => {
  const [form, setForm] = useRecoilState(formAtom);

  const { name, jobGroup, content } = form;

  const setName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm((prev) => ({ ...prev, name: e.target.value }));
  };

  const setJobGroup = (jobGroup: ValueOf<typeof JOB_GROUP>) => () => {
    return setForm((prev) => ({ ...prev, jobGroup }));
  };

  const setContent: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setForm((prev) => ({ ...prev, content: e.target.value }));
  };

  return { name, setName, jobGroup, setJobGroup, content, setContent, form };
};

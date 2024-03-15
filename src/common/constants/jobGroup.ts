export const JOB_GROUP = {
  '프론트엔드 개발자': 'FRONTEND',
  '백엔드 개발자': 'BACKEND',
  'IOS 개발자': 'IOS',
  'Android 개발자': 'ANDROID',
  //   DevOps: 'DEV_OPS',
  '데이터 분야': 'DATA',
  'QA 엔지니어': 'QA',
} as const;

export const JOB_GROUP_LABEL = {
  FRONTEND: '프론트엔드 개발자',
  BACKEND: '백엔드 개발자',
  IOS: 'IOS 개발자',
  ANDROID: 'Android 개발자',
  //   DevOps: 'DEV_OPS',
  DATA: '데이터 분야',
  QA: 'QA 엔지니어',
} as const;

export const JOB_GROUPS = Object.entries(JOB_GROUP).map(([label, value]) => ({
  label,
  value,
  src: `/images/jobGroup/${value}.png`,
}));

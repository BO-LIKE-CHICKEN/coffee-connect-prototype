import { GetServerSideProps } from 'next';
import Complete from '@common/components/page/Complete';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  const host = req.headers.host ?? 'localhost:3000';

  const protocol = 'https:';
  const currentDomain = `${protocol}//${host}`;

  return {
    props: { currentDomain },
  };
};

export default Complete;

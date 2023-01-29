import { GetServerSideProps, GetServerSidePropsContext } from "next";

const withGetServerSideProps = (getServerSideProps: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      return await getServerSideProps(context).then(
        (res: { [key: string]: any }) => {
          return {
            ...res,
            props: {
              ...res.props,
              isError: false,
            },
          };
        }
      );
    } catch (err) {
      console.log({ err });
      return {
        props: {
          isError: true,
        },
      };
    }
  };
};

export default withGetServerSideProps;

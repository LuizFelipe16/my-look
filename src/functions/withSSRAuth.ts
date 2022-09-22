import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";
import { appVariables } from "_app";

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    const token = cookies[appVariables.cookies.token];

    if (!token) {
      return {
        redirect: {
          destination: '/sign',
          permanent: false,
        }
      }
    }

    return await fn(ctx);
  }
}

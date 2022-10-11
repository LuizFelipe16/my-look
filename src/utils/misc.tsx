import { useRouter } from 'next/router';

function GoPage(href?: string) {
  const router = useRouter();

  router.push(`/${href}` || '/');

  return null;
};

function goHome() {
  GoPage()
}

const RouterManager = {
  goPage: GoPage,
  goHome
};

export { RouterManager };

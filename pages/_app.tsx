import '../styles/globals.css';
import cookies from 'next-cookies';
import type { AppContext, AppProps } from 'next/app';

function App(props: AppProps) {
  return <props.Component {...props.pageProps} />;
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const cookiz = cookies(ctx);

  return {
    pageProps: {
      cookiz,
    },
  };
};

export default App;

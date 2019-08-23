import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
// import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Grommet, grommet as grommetTheme } from 'grommet';
import Page from '../components/Page';

import withData from '../lib/withData';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;

    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <ApolloHooksProvider client={apollo}>
            <Grommet theme={grommetTheme}>
              <Page>
                <Component {...pageProps} />
              </Page>
            </Grommet>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);

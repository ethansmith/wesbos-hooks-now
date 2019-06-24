import App, { Container } from "next/app"
import Page from "../components/Page"
import { ApolloProvider } from "react-apollo"
// import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import withData from "../lib/withData"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // this exposes the query to the user
    pageProps.query = ctx.query

    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <ApolloHooksProvider client={apollo}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(MyApp)

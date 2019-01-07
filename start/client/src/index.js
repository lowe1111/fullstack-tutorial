import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'server-9kk4p4c5l.now.sh',
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>hello</div>
  </ApolloProvider>, document.getElementById('root'));

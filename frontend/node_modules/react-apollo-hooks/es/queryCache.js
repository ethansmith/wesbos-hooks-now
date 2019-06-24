function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { print } from 'graphql/language/printer';
import { objToKey } from './utils';
var cachedQueriesByClient = new WeakMap();
export function getCachedObservableQuery(client, options) {
  var queriesForClient = getCachedQueriesForClient(client);
  var cacheKey = getCacheKey(options);
  var observableQuery = queriesForClient.get(cacheKey);

  if (observableQuery == null) {
    observableQuery = client.watchQuery(options);
    queriesForClient.set(cacheKey, observableQuery);
  }

  return observableQuery;
}
export function invalidateCachedObservableQuery(client, options) {
  var queriesForClient = getCachedQueriesForClient(client);
  var cacheKey = getCacheKey(options);
  queriesForClient.delete(cacheKey);
}

function getCachedQueriesForClient(client) {
  var queriesForClient = cachedQueriesByClient.get(client);

  if (queriesForClient == null) {
    queriesForClient = new Map();
    cachedQueriesByClient.set(client, queriesForClient);
  }

  return queriesForClient;
}

function getCacheKey(_ref) {
  var query = _ref.query,
      options = _objectWithoutPropertiesLoose(_ref, ["query"]);

  return print(query) + "@@" + objToKey(options);
}
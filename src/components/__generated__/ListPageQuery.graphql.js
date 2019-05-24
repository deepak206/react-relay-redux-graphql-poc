/**
 * @flow
 * @relayHash 9215fbea5332a3a1c3515fe22bc86138
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListPageQueryVariables = {||};
export type ListPageQueryResponse = {|
  +allPosts: $ReadOnlyArray<{|
    +id: string,
    +title: string,
    +text: string,
  |}>
|};
export type ListPageQuery = {|
  variables: ListPageQueryVariables,
  response: ListPageQueryResponse,
|};
*/


/*
query ListPageQuery {
  allPosts {
    id
    title
    text
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allPosts",
    "storageKey": null,
    "args": null,
    "concreteType": "Post",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ListPageQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ListPageQuery",
    "id": null,
    "text": "query ListPageQuery {\n  allPosts {\n    id\n    title\n    text\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cf33eb34efe95950ae5fa159b29ee836';
module.exports = node;

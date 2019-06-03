/**
 * @flow
 * @relayHash d7cca419d2d75756e1ca555e2af597ec
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
  allPosts(orderBy: createdAt_DESC) {
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
    "storageKey": "allPosts(orderBy:\"createdAt_DESC\")",
    "args": [
      {
        "kind": "Literal",
        "name": "orderBy",
        "value": "createdAt_DESC"
      }
    ],
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
    "text": "query ListPageQuery {\n  allPosts(orderBy: createdAt_DESC) {\n    id\n    title\n    text\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4ae8b1a60dd2c2622df0002588743389';
module.exports = node;

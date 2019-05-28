/**
 * @flow
 * @relayHash 054ca17c77ce159ddc21bcf3f7968090
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePostMutationVariables = {|
  id: string
|};
export type DeletePostMutationResponse = {|
  +deletePost: ?{|
    +id: string
  |}
|};
export type DeletePostMutation = {|
  variables: DeletePostMutationVariables,
  response: DeletePostMutationResponse,
|};
*/


/*
mutation DeletePostMutation(
  $id: ID!
) {
  deletePost(id: $id) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deletePost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Post",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "DeletePostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeletePostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeletePostMutation",
    "id": null,
    "text": "mutation DeletePostMutation(\n  $id: ID!\n) {\n  deletePost(id: $id) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3d4e0663cd02c529a2e2200a4a41b0bc';
module.exports = node;

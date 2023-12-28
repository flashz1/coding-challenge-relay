/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProductInput = {|
  name: string,
  description: string,
  price: number,
  category: string,
|};
export type create_createProductMutationVariables = {|
  input: CreateProductInput
|};
export type create_createProductMutationResponse = {|
  +createProduct: {|
    +id: string,
    +name: string,
    +description: string,
    +price: number,
    +category: string,
    +createdAt: string,
  |}
|};
export type create_createProductMutation = {|
  variables: create_createProductMutationVariables,
  response: create_createProductMutationResponse,
|};
*/


/*
mutation create_createProductMutation(
  $input: CreateProductInput!
) {
  createProduct(input: $input) {
    id
    name
    description
    price
    category
    createdAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "createProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "create_createProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "create_createProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e9c72b5eadd552fc25d1b737c1be8121",
    "id": null,
    "metadata": {},
    "name": "create_createProductMutation",
    "operationKind": "mutation",
    "text": "mutation create_createProductMutation(\n  $input: CreateProductInput!\n) {\n  createProduct(input: $input) {\n    id\n    name\n    description\n    price\n    category\n    createdAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '912607f2cd7c0b956bea648c6ae82025';

module.exports = node;

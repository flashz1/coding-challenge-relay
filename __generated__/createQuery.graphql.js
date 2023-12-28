/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createQueryVariables = {||};
export type createQueryResponse = {|
  +viewer: {|
    +products: $ReadOnlyArray<{|
      +id: string,
      +name: string,
      +description: string,
      +price: number,
      +category: string,
      +createdAt: string,
    |}>
  |}
|};
export type createQuery = {|
  variables: createQueryVariables,
  response: createQueryResponse,
|};
*/


/*
query createQuery {
  viewer {
    products {
      id
      name
      description
      price
      category
      createdAt
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "products",
        "plural": true,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "createQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "createQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "02731088cd429e2223fceb0afdafec39",
    "id": null,
    "metadata": {},
    "name": "createQuery",
    "operationKind": "query",
    "text": "query createQuery {\n  viewer {\n    products {\n      id\n      name\n      description\n      price\n      category\n      createdAt\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '02e97c72464a7b52f75f790fb81ffe31';

module.exports = node;

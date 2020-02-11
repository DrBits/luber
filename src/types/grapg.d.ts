export const typeDefs = ["type Greeting {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayBye: Greeting\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: Greeting | null;
}

export interface Greeting {
  text: string;
  error: boolean;
}

import { Greeting } from 'types/grapg';

const resolvers = {
  Query: {
    sayBye: (): Greeting => {
      return {
        error: false,
        text: 'Love you'
      };
    }
  }
};

export default resolvers;

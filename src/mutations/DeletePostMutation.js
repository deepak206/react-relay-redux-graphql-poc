import {
    commitMutation,
    graphql,
  } from 'react-relay';
import environment from '../config/Environment';

const mutation = graphql`
    mutation DeletePostMutation($id: ID!) {
      deletePost(id: $id) {
        id
      }
    }
`;
  
export default function DeletePostMutation(id, callback) {
    const variables = { id };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: response => {
        console.log(response, environment);
        callback();
        },
        onError: err => console.error(err)
    });
}
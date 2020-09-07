import { gql } from "apollo-boost";

const loginUser = gql`
  mutation loginUser($username:String!,$password: String!) {
    login(username: $username,password: $password) {
      expiresAt
      token
    }
  }
`;

export default loginUser;
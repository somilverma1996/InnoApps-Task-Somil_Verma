import { gql } from "apollo-boost";

const resetPassword = gql`
mutation resetPassword($email : String!) {
    reset_password(email: $email) {
        success
      }
}
`;


export default resetPassword;
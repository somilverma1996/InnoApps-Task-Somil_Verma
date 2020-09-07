import { gql } from "apollo-boost";

const registerUser = gql`
mutation createUser($username: String!,$name: String!,$last_name: String!,$email: String!,$title: String!,$is_manager:Boolean!,$company_name:String!) {
    insert_users(objects: {username: $username,name: $name,last_name: $last_name,email: $email,title: $title,is_manager : $is_manager,is_investor : true,company_handle : $company_name}) {
        returning{
            username,name,last_name,email,title,is_manager,is_investor,company_handle
          }
    }
}
`;

export default registerUser;
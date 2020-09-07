
import { gql } from "apollo-boost";

const addPost = gql`
mutation MyMutation($title: String!,$content: String!,$company_handle:String!,$created_by:String!) {
  insert_posts(objects: {title: $title, content: $content, company_handle: $company_handle, created_by: $created_by}) {
    returning {
      title
      content
    }
  }
}
`;

export default addPost;
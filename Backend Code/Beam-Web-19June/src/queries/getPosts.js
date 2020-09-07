import { gql } from "apollo-boost";

const getPostsQuery = gql`query getPosts  {
  posts(order_by: {created_at: desc}) {
      id
      title
      content
      created_at
      user {
          email
          name
          last_name
          is_investor
        }
        company {
          name
        }
    }
}
`;

export default getPostsQuery;
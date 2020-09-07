import { gql } from "apollo-boost";

const updateCompanyDetailQuery = gql`
mutation updateCompanyData($overview: String!,$firm: String!,$team: String!,$strategy: String!,$terms: String!,$address: String!) {
  update_companies(_set: {overview: $overview, firm : $firm, team : $team, strategy : $strategy, terms : $terms,address :$address }, where: {handle: {_eq: "firstinvestmentco"}}) {
    returning {
      name
    }
  }
}
`;

export default updateCompanyDetailQuery;
import { gql } from "apollo-boost";

const getCompaniesDetailQuery = gql`
query getCompanies($companyName: String!)   {
  companies(where: {handle: {_eq: $companyName}}) {
      address
      firm
      overview
      strategy
      team
      terms
    }
}
`;

export default getCompaniesDetailQuery;
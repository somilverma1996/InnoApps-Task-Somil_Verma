import { gql } from "apollo-boost";

const getCompaniesQuery = gql`query getCompanies {
  companies {
    name
    handle
  }
}
`;

export default getCompaniesQuery;
import { gql } from "apollo-boost";

const getCompanyInvestorsQuery = gql`
query getCompanyInvestors($companyName: String!)  {
  company_investors(where: {company: {handle: {_eq: $companyName}}}){
    investor_username
    company {
      name
    }
    user {
      name
      last_name
      username
      title
    }
  }
}
`;

export default getCompanyInvestorsQuery;
import {gql} from "@apollo/client";


export const GET_CURRENCIES = gql`
  query {
    currencies {
      icon
      value
      name
      code
      badge
  }
  }
`
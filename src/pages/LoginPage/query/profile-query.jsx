import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query profile {
    booking_app_profile {
      email
      password
    }
  }
`;

import { gql } from "@apollo/client";

// Read Booking Data
export const GET_BOOKING = gql``;

// Insert Booking Data
export const ADD_BOOKING = gql`
  mutation booking($object: booking_app_booking_insert_input!) {
    insert_booking_app_booking_one(object: $object) {
      kode_booking
    }
  }
`;

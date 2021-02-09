import { gql } from "@apollo/client";

export const GET_INFO_SW = gql`
  query {
    allPeople {
      people {
        id
        name
        species {
          name
        }
        homeworld {
          name
        }
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection {
          vehicles {
            name
          }
        }
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_ARTBOARDS = gql`
  query {
    share(shortId: "Y8wDM") {
      shortId
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

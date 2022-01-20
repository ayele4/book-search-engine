import { gql } from "@apollo/clinet";

export const GET_ME = gql`
query me {
    me {
        _id
        username
        savedBooks {
            bookId
            authors
            descriptin
            image
            title
        }
    }
}
`;
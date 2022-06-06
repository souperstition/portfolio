import { gql, GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cl3ycl8oa1ldt01z70n9r90uk/master');

export const getPosts = async () => {
	const query = gql`
		query GetPosts {
			postsConnection {
				edges {
					cursor
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await graphQLClient.request(query);
	return result.postsConnection.edges;
};

import { gql, GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cl3ycl8oa1ldt01z70n9r90uk/master');

export const getPosts = async () => {
	const query = gql`
		query GetPosts {
			postsConnection {
				edges {
					cursor
					node {
						slug
						title
						demoLink
						codeLink
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

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;
	const result = await graphQLClient.request(query);

	return result.categories;
};

export const getCategoryPost = async slug => {
	const query = gql`
		query GetCategoryPost($slug: String!) {
			postsConnection(where: { categories_some: { slug: $slug } }) {
				edges {
					cursor
					node {
						slug
						title
						demoLink
						codeLink
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

	const result = await graphQLClient.request(query, { slug });

	return result.postsConnection.edges;
};

export const getProject = async slug => {
	const query = gql`
		query GetProject($slug: String!) {
			post(where: { slug: $slug }) {
				slug
				title
				excerpt
				demoLink
				codeLink
				projectPost
				featuredImage {
					url
				}
				categories {
					name
					slug
				}
			}
		}
	`;

	const result = await graphQLClient.request(query, { slug });

	return result.post;
};

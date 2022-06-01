import { AUTH_TOKEN } from '../../constants';
import { timeDifferenceForDate } from '../../utils';
import { useMutation, gql } from '@apollo/client';

const VOTE_MUTATION = gql`
	mutation VoteMutation($linkId: ID!) {
		vote(linkId: $linkId) {
			id
			link {
				id
				votes {
					id
					user {
						id
					}
				}
			}
			user {
				id
			}
		}
	}
`;

const Link = props => {
	const { link } = props;
	const authToken = localStorage.getItem(AUTH_TOKEN);
	const [ vote ] = useMutation(VOTE_MUTATION, {
		variables: {
			linkId: link.id
		}
	});
	return (
		<div>
			<span>{props.index + 1}. </span>
			{authToken && (
				<div style={{ cursor: 'pointer' }} onClick={vote}>
					▲
				</div>
			)}
			<div>
				{link.description} ({link.url})
			</div>
			{
				<div>
					{link.votes.length} votes | by {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
					{timeDifferenceForDate(link.createdAt)}
				</div>
			}
		</div>
	);
};

export default Link;

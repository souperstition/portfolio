import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProject } from '../../services';
import Categories from './Categories';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';
import remarkGemoji from 'remark-gemoji';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import '../../scss/projectbody.scss';

const ProjectPage = () => {
	let params = useParams();
	const [ project, setProject ] = useState('');
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(
		() => {
			getProject(params.post)
				.then(res => {
					setProject(res);
				})
				.finally(() => setIsLoading(false));
		},
		[ params.post ]
	);

	const container = {
		hidden: {
			opacity: 0
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.25
			}
		},
		exit: {
			opacity: 0
		}
	};

	const TableImg = props => <img src={props.src} alt={props.alt} className="table-img" />;

	const md = `## [:arrow_up_small:](#) Section Header`;

	return (
		<motion.div variants={container} initial="hidden" animate="show" exit="exit">
			<h1>{project.title}</h1>
			<div className="cat-list">
				<Link to="/posts">Show All</Link>
				<Categories />
			</div>
			<hr />
			<motion.div className="post" variants={container} initial="hidden" animate="show" exit="exit">
				<h2>{project.title}</h2>
				<p>{project.excerpt}</p>
				{!isLoading && (
					<div className="project-image" style={{ backgroundImage: `url(${project.featuredImage.url})` }} />
				)}

				<a href={`${project.demoLink}`} rel="noreferrer" target="_blank">
					Live Site Demo
				</a>
				<ReactMarkdown
					id="markdown"
					remarkPlugins={[ gfm, remarkHeadingId, remarkGemoji ]}
					// children={md}
					children={project.projectPost}
					components={{
						code({ node, inline, className, children, ...props }) {
							const match = /language-(\w+)/.exec(className || '');
							return !inline && match ? (
								<SyntaxHighlighter
									children={children}
									style={oneDark}
									showLineNumbers={true}
									language={match[1]}
									PreTag="div"
									{...props}
								/>
							) : (
								<SyntaxHighlighter
									children={children}
									showLineNumbers={true}
									style={oneDark}
									PreTag="div"
									{...props}
								/>
							);
						},
						img: ({ node, ...props }) => <TableImg {...props} allowDangerousHtml />
					}}
				/>
			</motion.div>
		</motion.div>
	);
};

export default ProjectPage;

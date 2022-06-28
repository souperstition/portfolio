import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProject } from '../../services';
import Categories from './Categories';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkHeadingId from 'remark-heading-id';
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
				<ReactMarkdown
					remarkPlugins={([ gfm ], [ remarkToc ], [ remarkHeadingId ])}
					children={project.projectPost}
					components={{
						code({ node, inline, className, children, ...props }) {
							const match = /language-(\w+)/.exec(className || '');
							return !inline && match ? (
								<SyntaxHighlighter
									children={String(children).replace(/\n$/, '')}
									style={oneDark}
									language={match[1]}
									PreTag="div"
									{...props}
								/>
							) : (
								<SyntaxHighlighter children={children} style={oneDark} PreTag="div" {...props} />
							);
						}
					}}
				/>
			</motion.div>
		</motion.div>
	);
};

export default ProjectPage;

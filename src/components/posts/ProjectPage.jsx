import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import { getProject } from '../../services';
import Categories from './Categories';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';
import rehypeRaw from 'rehype-raw'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import remarkGemoji from 'remark-gemoji';
import { faHome, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import '../../scss/projectbody.scss';

const ProjectPage = () => {
	let params = useParams();

	const useReactQuery = () => {
		return useQuery('project', () => getProject(params.post));
	};

	const { data: project, isLoading } = useReactQuery();
	
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

	return (
		<motion.div variants={container} initial="hidden" animate="show" exit="exit">
			{isLoading && <div className='loading-div'>Loading...</div> }
			{project && (
				<>
				<h1>{project.title}</h1>
			<div className="cat-list">
				<Link to="/posts">Back to Portfolio</Link>
				<Categories />
			</div>
			<hr />
			<motion.div className="post" variants={container} initial="hidden" animate="show" exit="exit">
				<h2 id="project-title">{project.title}
					<a href={project.categories[0].slug} className='title-category'>{project.categories[0].name}</a>
				</h2>
				<p>{project.excerpt}</p>
					<div className="project-image" style={{ backgroundImage: `url(${project.featuredImage.url})` }} />
				{project.demoLink && (
					<>
					💻 <a href={`${project.demoLink}`} rel="noreferrer" target="_blank">
						Live Site Demo
						</a>
						</>
				)}

				<ReactMarkdown
					id="markdown"
					remarkPlugins={[gfm, remarkHeadingId, remarkGemoji]}
					rehypePlugins={[rehypeRaw]}
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
								<SyntaxHighlighter children={children} style={oneDark} PreTag="div" {...props} />
							);
						},
						img: ({ node, ...props }) => <TableImg {...props} allowDangerousHtml />
					}}
				/>
			</motion.div>
			<div className='bottom-nav'>
				<Link to="/posts" title="Back to Portfolio"><FontAwesomeIcon icon={faBackward} /><span className='bottom-link'>Portfolio</span></Link>
				<Link to="/" title="Home"><FontAwesomeIcon icon={faHome} /><span className='bottom-link'>Home</span></Link>
				<Link to={project.categories[0].slug} title={`More ${project.categories[0].name} Projects`}><FontAwesomeIcon icon={faForward} /><span className='bottom-link'>More {project.categories[0].name} Projects </span></Link>
			</div>
				</>
			)}
		</motion.div>
	);
};

export default ProjectPage;
import Button from './Button';

const Project = ({ title, body, site, source, screenshot }) => {
  return (
    <div className='project'>
      <h3>{title}</h3>
      <img src={screenshot} alt={title} />
  
      <p>{body}</p>
      <div className='code-links'>
      {site && (
        <div>
          <a href={site} target='_blank' rel='noreferrer'>
            <Button>Visit Site</Button>
          </a>
        </div>
        )}
      {source && (
        <div>
          <a href={source} target='_blank' rel='noreferrer'>
          <Button>View Source Code</Button>
          </a>
        </div>
      )}
      </div>
    </div>
  );
};

export default Project;

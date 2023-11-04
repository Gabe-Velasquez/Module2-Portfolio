import Button from './Button';

const Project = ({ title, body, site, screenshot }) => {
  return (
    <div className='project'>
      <img src={screenshot} alt={title} />
      <h2>{title}</h2>
      <p>{body}</p>
      {site && (
        <div>
          <a href={site} target='_blank'>
            <Button>Visit Site</Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;

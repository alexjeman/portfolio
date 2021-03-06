import React, { useContext } from "react";
import PropTypes from 'prop-types'
import ProjectContext from '../../context/project/projectContext'

const ProjectItemEdit = ({ project }) => {
  const projectContext = useContext(ProjectContext)
  const { deleteProject, setCurrent, clearCurrent } = projectContext;

  const {
    id,
    title,
    sample_url,
    project_url,
  } = project;

  const onDelete = () => {
    deleteProject(id);
    clearCurrent()
  }

  return (
    <div className='card-preview'>
      <h3>{title}</h3>
      <ul className='list'>
        <li>{sample_url}</li>
        <li>{project_url}</li>
      </ul>
      <p>
        <button className='btn btn-animated' onClick={() => setCurrent(project)}>Edit</button>
        <button className='btn btn-animated' onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

ProjectItemEdit.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectItemEdit;

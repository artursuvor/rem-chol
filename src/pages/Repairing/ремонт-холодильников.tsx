import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Issue, issues } from './issuesDataRef'; 
import './Repair.css';
import './issueDescription/style.css';

const IssuesList: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const handleClick = (issue: Issue) => {
    setSelectedIssue(issue);
  };

  return (
    <div className='issue-container'>
      <h2>Выберите проблему:</h2>
      <ul className='issues-list'>
        {issues.map((issue, index) => (
          <li key={index} className='issue-item'>
            <NavLink
              to="."
              className={selectedIssue === issue ? 'issue-active' : 'issue'}
              onClick={() => handleClick(issue)}
            >
              {issue.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {selectedIssue && (
        <div className='selected-issue'>
          <h3>{selectedIssue.title}</h3>
          {selectedIssue.description()}
        </div>
      )}
    </div>
  );
};

export default IssuesList;

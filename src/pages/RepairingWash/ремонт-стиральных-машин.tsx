import React, { useState } from 'react';
import { Issue, issues } from './issuesData'; 

const IssuesList: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const handleClick = (issue: Issue) => {
    setSelectedIssue(issue);
  };

  return (
    <div>
      <h2>Выберите проблему:</h2>
      <ul>
        {issues.map((issue, index) => (
          <li key={index}>
            <button onClick={() => handleClick(issue)}>{issue.title}</button>
          </li>
        ))}
      </ul>
      {selectedIssue && (
        <div>
          <h3>{selectedIssue.title}</h3>
          <p>{selectedIssue.description}</p>
        </div>
      )}
    </div>
  );
};

export default IssuesList;

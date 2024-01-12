import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Issue, issues } from './issuesDataWash'; 
import './Repair.css';

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
          <div className='selected-issue-description'>
            {selectedIssue.description()}
          </div>
        </div>
      )}
      <div className='warning-container'>
        <p> 
            Если вы не уверены в своих навыках или не обладаете необходимыми инструментами для самостоятельного ремонта, то нужно обратиться к профессиональному мастеру. 
            Не правильные попытки самостоятельного ремонта могут привести к дополнительным проблемам и неудачам.
            Как частный мастер, я готов предоставить вам профессиональные услуги по ремонту холодильников и стиральных машин. Обращайтесь для консультации и оценки неисправностей.
            Не стесняйтесь связаться со мной для получения дополнительной информации и доверьтесь опыту частного мастера.
        </p>
      </div>
    </div>
  );
};

export default IssuesList;

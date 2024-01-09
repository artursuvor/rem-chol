import React from 'react';
import SilnoShumit from './issueDescription/WashingIssue/SilnoShumit';
import NeOtjimaet from './issueDescription/WashingIssue/NeOtjimaet';
import NeKrutitBaraban from './issueDescription/WashingIssue/NeKrutitBaraban';
import NeSlivaetVodu from './issueDescription/WashingIssue/NeSlivaetVodu';
import NeGreetsyaVoda from './issueDescription/WashingIssue/NeGreetsyaVoda';
import NeGoritIndikacia from './issueDescription/WashingIssue/NeGoritIndikacia';
import NeNabiraetVodu from './issueDescription/WashingIssue/NeNabiraetVodu';
import NeStiraet from './issueDescription/WashingIssue/NeStiraet';
import NeOtravaetsyaDver from './issueDescription/WashingIssue/NeOtravaetsyaDver';
import NeZakryvaetsyaDver from './issueDescription/WashingIssue/NeZakryvaetsyaDver';

export interface Issue {
    title: string;
    description: () => React.ReactNode;
  }
  
  export const issues: Issue[] = [
    { title: 'Сильно шумит', description: SilnoShumit },
    { title: 'Не отжимает', description: NeOtjimaet },
    { title: 'Не крутит барабан', description: NeKrutitBaraban },
    { title: 'Не сливает воду', description: NeSlivaetVodu },
    { title: 'Не греется вода', description: NeGreetsyaVoda },
    { title: 'Не горит индикация', description: NeGoritIndikacia },
    { title: 'Не набирает воду', description: NeNabiraetVodu },
    { title: 'Не стирает', description: NeStiraet },
    { title: 'Не открывается дверь', description: NeOtravaetsyaDver },
    { title: 'Не закрывается дверь', description: NeZakryvaetsyaDver },
  ];
  
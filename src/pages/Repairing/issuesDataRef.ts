import React from 'react';
import NeMorozit from './issueDescription/RefregiratorIssue/NeMorozit';
import NeRabotaet from './issueDescription/RefregiratorIssue/NeRabotaet';
import PlohoMorozit from './issueDescription/RefregiratorIssue/PlohoMorozit';
import TechetVoda from './issueDescription/RefregiratorIssue/TechetVoda';
import Obledenenie from './issueDescription/RefregiratorIssue/Obledenenie';
import NeVkluchaetsya from './issueDescription/RefregiratorIssue/NeVkluchaetsya';
import NeOtkluchaetsya from './issueDescription/RefregiratorIssue/NeOtkluchaetsya';
import NeRabotaetSvet from './issueDescription/RefregiratorIssue/NeRabotaetSvet';
import SilnoShumit from './issueDescription/RefregiratorIssue/SilnoShumit';
import MorgaetIndikacia from './issueDescription/RefregiratorIssue/MorgaetIndikacia';
import Pishit from './issueDescription/RefregiratorIssue/Pishit';


export interface Issue {
    title: string;
    description: () => React.ReactNode;
  }
  
export const issues: Issue[] = [
  { 
    title: 'Не морозит', 
    description: NeMorozit
  },
  { 
    title: 'Не работает', 
    description: NeRabotaet 
  },
  { 
    title: 'Плохо морозит', 
    description: PlohoMorozit
  },
  { 
    title: 'Течет вода', 
    description: TechetVoda 
  },
  { 
    title: 'Обледенение', 
    description: Obledenenie
  },
  { 
    title: 'Не включается', 
    description: NeVkluchaetsya 
  },
  { 
    title: 'Не отключается', 
    description: NeOtkluchaetsya 
  },
  { 
    title: 'Не работает свет', 
    description: NeRabotaetSvet
  },
  { 
    title: 'Сильно шумит', 
    description: SilnoShumit
  },
  { 
    title: 'Моргает индикация', 
    description: MorgaetIndikacia 
  },
  { 
    title: 'Пищит', 
    description: Pishit
  },
];
  
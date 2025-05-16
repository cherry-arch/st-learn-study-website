
export interface Unit {
  name: string;
  link?: string;
}

export interface Subject {
  id: string;
  name: string;
  units: (Unit | string)[];
}

export type SubjectsList = Subject[];

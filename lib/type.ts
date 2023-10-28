export interface TaskDetails {
  title: string;
  description: string;
  priority: string;
  deadline: Date;
  // any other fields that you want to include
}

export interface BugDetails {
  severity: string;
  description: string;
  screenshots?: string[];
  // any other fields that you want to include
}
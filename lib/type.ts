export interface TaskDetails {
  title?: string;
  status?: string;
  label?: string;
  description?: string;
  priority?: string;
  deadline?: Date;
  createdAt?: Date;
  modifiedAt?: Date;
  createdBy?: string;
  assignedTo?: string[];
  teamId?: string;
  // any other fields that you want to include
}

export interface BugDetails {
  severity?: string;
  description?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  screenshots?: string[];
  createdBy?: string;
  assignedTo?: string[];
  teamId?: string;

  // any other fields that you want to include
}

export interface TeamMembers extends Array<{
  id: string;
  displayName: string;
  email: string;
  role: string;
  joinedAt: Date;
}> { }
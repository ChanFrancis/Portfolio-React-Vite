export interface DescriptionData {
  title: string;
  stacks: string;
  description: string;
  git?: string;
  link?: string;
}

export interface Project extends DescriptionData {
  id: number;
  git: string;
  link: string;
}

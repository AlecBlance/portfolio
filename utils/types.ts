export interface Project {
  id: number;
  emoji: string;
  title: string;
  app: string;
  description: string;
  technologies: string[];
  liveSite: string;
  sourceCode: string;
}

export interface Visual {
  id: number;
  image: string;
  isPortrait: boolean;
}

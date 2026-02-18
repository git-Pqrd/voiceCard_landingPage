export interface Article {
  title: string;
  href: string;
  synopsis: string;
  date: string;
  tags?: string[];
  disabled?: boolean;
  markdown?: boolean;
}

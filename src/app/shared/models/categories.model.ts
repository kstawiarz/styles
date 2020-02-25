import { LinksModel } from './links.model';

export interface CategoriesModel {
  id: string;
  name: string;
  iconUrl: string;
  links: LinksModel[];
}

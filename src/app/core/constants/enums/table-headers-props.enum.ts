export enum TableHeadersProps {
  Thumbnail = 'thumbnail',
  Name = 'name',
  Age = 'age',
  HairColor = 'hair_color',
  Height = 'height',
  Weight = 'weight',
  Friends = 'friends',
  Professions = 'professions'
}

export const TableHeadersPropsToValue = new Map<string, string>([
  [TableHeadersProps.Thumbnail, 'Аватар'],
  [TableHeadersProps.Name, 'Имя'],
  [TableHeadersProps.Age, 'Возраст'],
  [TableHeadersProps.HairColor, 'Цвет волос'],
  [TableHeadersProps.Height, 'Высота'],
  [TableHeadersProps.Weight, 'Ширина'],
  [TableHeadersProps.Friends, 'Друзья'],
  [TableHeadersProps.Professions, 'Профессии'],
]);



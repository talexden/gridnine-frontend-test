export const HIDDEN_TAB_INDEX = -1;

export enum AppRoute {
  Main = '/',
  Catalog = '/catalog',
}

export enum APIRoute {
  BackendUrl = 'https://ya.ru:9999',
}

export enum ErrorTexts {
  LoadGuitarsFailMessage = 'Сервер не доступен. Попробуйте попозже',
  CommentPostFailMessage = 'Не удалось отправить комментарий. Попробуйте попозже',
}

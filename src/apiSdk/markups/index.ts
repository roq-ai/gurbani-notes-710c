import queryString from 'query-string';
import { MarkupInterface, MarkupGetQueryInterface } from 'interfaces/markup';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMarkups = async (query?: MarkupGetQueryInterface): Promise<PaginatedInterface<MarkupInterface>> => {
  return fetcher('/api/markups', {}, query);
};

export const createMarkup = async (markup: MarkupInterface) => {
  return fetcher('/api/markups', { method: 'POST', body: JSON.stringify(markup) });
};

export const updateMarkupById = async (id: string, markup: MarkupInterface) => {
  return fetcher(`/api/markups/${id}`, { method: 'PUT', body: JSON.stringify(markup) });
};

export const getMarkupById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/markups/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMarkupById = async (id: string) => {
  return fetcher(`/api/markups/${id}`, { method: 'DELETE' });
};

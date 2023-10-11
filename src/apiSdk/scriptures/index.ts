import queryString from 'query-string';
import { ScriptureInterface, ScriptureGetQueryInterface } from 'interfaces/scripture';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getScriptures = async (
  query?: ScriptureGetQueryInterface,
): Promise<PaginatedInterface<ScriptureInterface>> => {
  return fetcher('/api/scriptures', {}, query);
};

export const createScripture = async (scripture: ScriptureInterface) => {
  return fetcher('/api/scriptures', { method: 'POST', body: JSON.stringify(scripture) });
};

export const updateScriptureById = async (id: string, scripture: ScriptureInterface) => {
  return fetcher(`/api/scriptures/${id}`, { method: 'PUT', body: JSON.stringify(scripture) });
};

export const getScriptureById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/scriptures/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteScriptureById = async (id: string) => {
  return fetcher(`/api/scriptures/${id}`, { method: 'DELETE' });
};

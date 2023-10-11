import queryString from 'query-string';
import { CommentInterface, CommentGetQueryInterface } from 'interfaces/comment';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getComments = async (query?: CommentGetQueryInterface): Promise<PaginatedInterface<CommentInterface>> => {
  return fetcher('/api/comments', {}, query);
};

export const createComment = async (comment: CommentInterface) => {
  return fetcher('/api/comments', { method: 'POST', body: JSON.stringify(comment) });
};

export const updateCommentById = async (id: string, comment: CommentInterface) => {
  return fetcher(`/api/comments/${id}`, { method: 'PUT', body: JSON.stringify(comment) });
};

export const getCommentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/comments/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCommentById = async (id: string) => {
  return fetcher(`/api/comments/${id}`, { method: 'DELETE' });
};

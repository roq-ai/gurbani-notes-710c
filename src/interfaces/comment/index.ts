import { UserInterface } from 'interfaces/user';
import { ScriptureInterface } from 'interfaces/scripture';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  content: string;
  user_id: string;
  scripture_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  scripture?: ScriptureInterface;
  _count?: {};
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  scripture_id?: string;
}

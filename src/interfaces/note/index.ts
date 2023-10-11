import { ScriptureInterface } from 'interfaces/scripture';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  content: string;
  scripture_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  scripture?: ScriptureInterface;
  user?: UserInterface;
  _count?: {};
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  scripture_id?: string;
  user_id?: string;
}

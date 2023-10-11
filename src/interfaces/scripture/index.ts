import { CommentInterface } from 'interfaces/comment';
import { MarkupInterface } from 'interfaces/markup';
import { NoteInterface } from 'interfaces/note';
import { GetQueryInterface } from 'interfaces';

export interface ScriptureInterface {
  id?: string;
  title: string;
  content: string;
  translation?: string;
  transliteration?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  markup?: MarkupInterface[];
  note?: NoteInterface[];

  _count?: {
    comment?: number;
    markup?: number;
    note?: number;
  };
}

export interface ScriptureGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  translation?: string;
  transliteration?: string;
}

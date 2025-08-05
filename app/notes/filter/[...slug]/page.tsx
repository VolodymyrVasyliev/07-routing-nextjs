import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesPage(params: Props) {
  const  slug = await params;
  
  const initialPage = 1;
  const initialQuery = '';

  const initialData = await fetchNotes(initialPage, initialQuery);

  return <NotesClient initialData={initialData} tags={slug} />;
}

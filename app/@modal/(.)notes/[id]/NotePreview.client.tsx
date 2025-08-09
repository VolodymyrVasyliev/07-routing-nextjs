'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api';
import css from './NotePreview.module.css';
import { useState } from 'react';

const NotePreview = () => {
  const { id } = useParams<{ id: string }>();
  const [isCloseModal, setCloseModal] = useState(true);
  const { data, isError, isLoading } = useQuery({
    queryKey: ['notes', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !data) return <p>Something went wrong.</p>;

  return (
    <>
      {isCloseModal && (
        <Modal onClose={() => setCloseModal(false)}>
          <div className={css.container}>
            <div className={css.item}>
              <div className={css.header}>
                <h2>{data.title}</h2>
              </div>
              <p className={css.content}>{data.content}</p>
              <p className={css.content}>{data.tag}</p>
              <p className={css.date}>{data.createdAt}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default NotePreview;

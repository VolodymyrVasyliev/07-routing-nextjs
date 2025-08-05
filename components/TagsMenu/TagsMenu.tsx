'use client';
import css from './TagsMenu.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { NoteTag } from '@/types/note';

type Props = {
  tags: NoteTag[];
};

function TagsMenu({ tags }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={toggle}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link href={`/notes/filter/${tag}`} onClick={toggle}>
                {tag}
              </Link>
            </li>
          ))}
          <li className={css.menuItem}>
            <Link href={`/notes/filter/all`} onClick={toggle} className={css.menuLink}>
              All notes
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default TagsMenu;

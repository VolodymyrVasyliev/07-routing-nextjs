import Link from 'next/link';
import css from './Header.module.css';
import TaggMenu from '../TagsMenu/TagsMenu';
// import {getTags } from '@/lib/api'

const Header = async () => {
  // const tags = await getTags()
const tags = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TaggMenu tags={tags} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

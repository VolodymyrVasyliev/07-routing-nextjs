import { getTags } from "@/lib/api";
import css from "./SidebarNotes.module.css"
import Link from "next/link";


const SidebarNotes = async() => {
    const tags = await getTags()
    return (
      <ul className={css.menuList}>
        <Link href="/notes/filter/all" className={css.menuLink}>
          All notes
        </Link>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    );
}

export default SidebarNotes;



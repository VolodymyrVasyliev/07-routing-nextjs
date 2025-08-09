import css from "./LayoutNotes.module.css"

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NoteLayout = ({ children, sidebar }: Props) => {
  return (
    <section className={css.container}>
      <div className={css.sidebar}>{sidebar}</div>
      <main className={css.notesWrapper}>{children}</main>
    </section>
  );
};

export default NoteLayout;

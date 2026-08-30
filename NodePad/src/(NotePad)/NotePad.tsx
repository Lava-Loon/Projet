import Items from "./components/Items";
import Content from "./components/Content";
import type { Note } from "../types/Note";
import { useState } from "react";
import useNotes from "./hooks/useNotes";

const NotePad = () => {
  const { notes, addNote, removeNote, editNote } = useNotes();
  const [activeNote, setActiveNote] = useState<Note | null>(null);

  const handleAddNote = async () => {
    const newNote = await addNote("Nouvelle Note");
    if (newNote) {
      setActiveNote(newNote);
    }
  };

  const handleRemoveNote = async (id: string) => {
    await removeNote(id);
    if (activeNote?.id === id) {
      setActiveNote(null);
    }
  };

  return (
    <div
      className="
        w-full
        bg-[#14213D]
        text-[#E5E5E5]
        grid
        grid-cols-[250px_1fr]
        h-screen
        
      "
    >
      <Items
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        removeNote={handleRemoveNote}
        notes={notes}
        addNote={handleAddNote}
      />
      <Content
        note={activeNote}
        editNote={editNote}
      />

    </div>
  );
}

export default NotePad;
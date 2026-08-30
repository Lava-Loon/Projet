import type { Note } from "../../types/Note";
import { useEffect, useState } from "react";
import { getNotes, createNote, updateNote, deleteNote } from "./noteApi";

const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const res = await getNotes();

    setNotes(res.data)
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (title: string) => {
    const res = await createNote({ title, content: "" });

    setNotes(prev =>
      [...prev, res.data]);
    return res.data;
  }

  const removeNote = async (id: string) => {
    await deleteNote(id);

    setNotes(prev =>
      prev.filter(note => note.id !== id)
    );
  };

  const editNote = async (id: string, data: { title?: string; content?: string }) => {
    const res = await updateNote(id, data);

    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? res.data
          : note
      )
    );
  };

  return {
    notes,
    fetchNotes,
    addNote,
    removeNote,
    editNote
  };
};

export default useNotes;
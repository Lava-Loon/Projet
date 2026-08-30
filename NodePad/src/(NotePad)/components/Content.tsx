import { useEffect, useState } from "react";
import type { Note } from "../../types/Note";

interface ContentProps {
  note: Note | null;
  editNote: (id: string, data: { title?: string; content?: string }) => void;
}

const Content = ({ note, editNote }: ContentProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Sync state with note prop changes (reset only when selecting another note)
  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setContent(note.content || "");
      setIsSaving(false);
    }
  }, [note?.id]);

  // Debounced auto-save effect triggered by user typing
  useEffect(() => {
    if (!note) return;

    if (title === (note.title || "") && content === (note.content || "")) {
      return;
    }

    setIsSaving(true);
    const delayDebounceFn = setTimeout(async () => {
      await editNote(note.id, { title, content });
      setIsSaving(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [title, content]);

  return (
    <div
      className="
        flex
        justify-center  
        h-full
      "
    >
      <div
        className="
          w-px
          h-full          
          bg-gray-500
        "
      />


      {note ? (
        <div
          className="
            flex-1
            w-full
            p-8
            flex
            flex-col
            gap-4
          "
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre de la note"
            className="
              w-full
              bg-transparent
              text-2xl
              font-bold
              border-none
              outline-none
              placeholder-gray-500
              text-[#E5E5E5]
            "
          />
          <div className="h-px bg-gray-700 w-full" />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Commencez à écrire..."
            className="
              flex-1
              w-full
              text-xl
              font-serif
              bg-transparent
              border-none
              outline-none
              resize-none
              placeholder-gray-500
              text-[#E5E5E5]
            "
          >
          </textarea>
          <div className="text-xs text-gray-500 self-end select-none">
            {isSaving ? "Enregistrement..." : "Enregistré"}
          </div>
        </div>
      ) : (
        <h2
          className="
            flex
            justify-center
            items-center
            w-full
            text-3xl
            font-bold
          "
        >
          Select a note
        </h2>
      )}



    </div>
  )
};

export default Content;
import type { Note } from "../../types/Note";
import { Trash2 } from "lucide-react";
import Button from "../../components/Button";
import ActionButton from "../../components/ActionButton";
import useConfirm from "../hooks/useConfirm";

interface ItemsProps {
  activeNote: Note | null;
  setActiveNote: (note: Note | null) => void;
  removeNote: (id: string) => void;
  addNote: () => void;
  notes: Note[];
}
const Items = ({
  setActiveNote,
  removeNote,
  addNote,
  notes,
  activeNote

}: ItemsProps) => {

  const { confirm, ConfirmModal } = useConfirm();

  return (
    <>
      <div
        className="
        p-4
      
      "
      >
        {notes.map(note => (
          <li
            key={note.id}
            className="
            group
            relative
            flex         
            items-center
            py-1
            rounded-lg
          "
          >
            <Button
              type="button"
              onClick={() => setActiveNote(note)}
              isActive={activeNote?.id === note.id}

            >
              {note.title}
            </Button>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center">
              <ActionButton
                type="button"
                icon={Trash2}
                visible={activeNote?.id === note.id}
                onClick={() => {
                  confirm(`Supprimer "${note.title}" ?`, () => removeNote(note.id))
                }
                }
                alone={true}
              />
            </div>
          </li>))}

        <Button
          type="button"
          onClick={addNote}
        >
          Add note

        </Button>

      </div>

      {ConfirmModal}
    </>
  )
};

export default Items;
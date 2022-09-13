import { Note } from "../types"
import {Button } from "react-bootstrap"

type Props = {
  note: Note;
  onArchive: (id:Note['id'])=>void
  onDelete: (id:Note['id'])=>void
  onEdit:(note:Note) => void
}
export const NoteCard = ({note, onArchive, onDelete, onEdit}:Props) => {
  return (
    <div>
      <div>
        <h3>{note.title}</h3>
        <p>Last Updated: {note.lastEdited}</p>
      </div>
      <div>
        <Button variant="primary" onClick={()=>onArchive(note.id)}>Archivar</Button>
        <Button variant="secondary" onClick={()=>onEdit(note)}>Editar</Button>
        <Button variant="notify" onClick={()=>onDelete(note.id)}>Borrar</Button>
      </div>
    </div>
  )
}


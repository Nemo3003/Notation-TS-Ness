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
    <div className="nes-container">
      <div>
        <h3 className="title">{note.title}</h3>
        <p>Last Updated: {note.lastEdited}</p>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <Button variant="primary" onClick={()=>onArchive(note.id)}>Archivar</Button>
        <Button variant="secondary" onClick={()=>onEdit(note)}>Editar</Button>
        <Button variant="info" onClick={()=>onDelete(note.id)}>Borrar</Button>
      </div>
    </div>
  )
}


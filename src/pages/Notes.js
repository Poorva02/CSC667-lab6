import React from "react";
import { connect } from "react-redux";
import {
  listNotes,
  setId,
  setNewNote,
  updateNote
} from "../redux/actions/notesActions";

const Notes = ({ dispatch, notes, _id, newNote }) => {
  React.useEffect(() => {
    dispatch(listNotes());
  }, []);

  return (
    <div>
      <h2>Notes</h2>

      <div>
        _id:
        <input onChange={e => dispatch(setId(e.target.value))} value={_id} />
        <hr /> 
        New Value:
        <input
          onChange={e => dispatch(setNewNote(e.target.value))}
          value={newNote}
        />
        <hr />
        <button onClick={() => dispatch(updateNote())} >Save</button>
      </div>

      {notes.map(note => (
        <div>
          <h4>{note._id}</h4>
          <p>{note.notes}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  notes: state.notesReducer.notes,
  _id: state.notesReducer._id,
  newNote: state.notesReducer.newNote
});

export default connect(mapStateToProps)(Notes);

import { useContext } from 'react';
import Notes from './Notes';
import noteContext from "../context/notes/noteContext"

export const Home = () => {
    const context = useContext(noteContext)
    const {notes,setNotes} = context;
   
    return (
        <div>          
            <Notes/>
        </div>
    )
}
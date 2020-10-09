import React from 'react';
import  { useDispatch,useSelector }  from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    // Otra forma de sacar informacion del redux

    // const store = useStore();
    // const { auth } = store.getState();
    // const { name } = auth;
    
    // Segunda forma de sacar información del redux
    const { name } = useSelector(state => state.auth);


    const handleLogout = () =>{
        dispatch( startLogout() );
    }
    const handleAddNew = () =>{
        dispatch(startNewNote());
    }

    return (
        <aside className="journal__sidebar" >
            
            <div className="journal__sidebar-navbar" >
                <h3 className="mt-5" >
                    <i className="far fa-moon"></i>
                    <span> { name } </span>
                </h3>
                <button className="btn" 
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>
            <div 
            
                className="journal__new-entry" 
                onClick = { handleAddNew }
                >
                <i className="far fa-calendar-plus fa-5x" ></i>
                <p className="mt-5" >
                    New entry
                </p>
            </div>
            <JournalEntries />
            
        </aside>
    )
}

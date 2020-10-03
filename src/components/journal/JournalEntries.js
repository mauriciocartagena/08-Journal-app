import React from 'react'
import { JornalEntry } from './JornalEntry';

export const JournalEntries = () => {
    
    const entries = [1,2,3,4,5];

    return (
        <div className="journal__estries" >
            
            {
                entries.map( value =>(
                   <JornalEntry key={ value }  />
                ))
            }
            

        </div>
    )
}

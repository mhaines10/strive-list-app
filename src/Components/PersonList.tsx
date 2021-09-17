import React, { useState, useEffect } from 'react';
import { Person } from '../Models/Person';
import { GetPeople } from '../Services/GetPeople';
import '../Styles/PersonList.scss';

function PersonList (props:{queryString: string}) {
    const [personList, setPersonList] = useState<Person[]>([]);

    useEffect(() => {
        const tempList: Person[] = GetPeople(props.queryString);
        setPersonList(tempList);
    }, [props.queryString]);

    return (
        <div className="PersonList">
            {personList.map((person: Person) => (
                <div className="CardDiv">
                    <img src={person.avatar} />
                    <div className="TextDiv">
                        <h4>{person.name}</h4>
                        <h5>{person.desc}</h5>
                    </div>                    
                </div>                    
            ))}
        </div>
    );
}

export default PersonList;
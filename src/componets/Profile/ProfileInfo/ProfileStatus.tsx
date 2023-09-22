import React, { useState} from 'react';


type ProfileStatusPropsType = {
    status: string
}


export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = (e: React.FocusEvent<HTMLInputElement> ) => {
        setEditMode(false)
    }
    return (
        <div>
            {!editMode && <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>}
            {editMode && <div>
                <input autoFocus={true} onBlur={deactivateEditMode} type="text" value={props.status}/>
            </div>}
        </div>

    );
};


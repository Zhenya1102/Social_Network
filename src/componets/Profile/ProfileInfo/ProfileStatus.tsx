import React, {ChangeEvent, useEffect, useState} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatusTC: (status: string) => void
}


export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, SetStatus] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false)
        props.updateStatusTC(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        SetStatus(e.currentTarget.value)
    }
    useEffect(()=> {
        if (status !== props.status) {
            SetStatus(props.status)
        }
    },[])


    return (
        <div>
            {!editMode && <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'NO STATUS'}: STATUS</span>
            </div>}
            {editMode && <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text"
                       value={status}/>:STATUS
            </div>}
        </div>

    );
};

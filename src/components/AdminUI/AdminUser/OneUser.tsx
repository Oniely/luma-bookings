import { UserData } from '@/lib/types';
import React from 'react';
export default function OneUser({ selectedUser}: {selectedUser:UserData}){
    return (
        <div>
            <h1>{selectedUser.fullName}</h1>
            <p>User ID: {selectedUser.user_id}</p>
            <p>User Name: {selectedUser.username}</p>
        </div>
    );
};
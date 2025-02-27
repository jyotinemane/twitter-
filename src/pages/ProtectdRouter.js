import React from 'react'
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Navigate } from 'react-router-dom';
import PageLoading from './PageLoading';

const ProtectdRouter = ({children}) => {

    const [user, isLoading] = useAuthState(auth)
    
    if (isLoading){
        return<PageLoading/>
    }
    if(!user) {
        return <Navigate to="/Login"/>
    }
    return children;
  
}

export default ProtectdRouter
import { useState } from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function IconsContainer() {
  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <div>
      <RefreshIcon fontSize='large' style={{cursor: 'pointer'}}/>
      { loggedIn ? 
      <LogoutIcon fontSize='large' style={{cursor: 'pointer'}} /> 
      : <LoginIcon fontSize='large' style={{cursor: 'pointer'}} />}
    </div>
  )
}

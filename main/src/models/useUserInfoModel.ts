import { useState, useCallback } from 'react'
export default function useAuthModel() {
  const [user, setUser] = useState({})
  const signin = useCallback((account, password) => {
    // signin implementation
    setUser({ name: 'liwenqiang hooks' })
  }, [])
  const signout = useCallback(() => {
    // signout implementation
    setUser({})
  }, [])
  return {
    user,
    signin,
    signout
  }
}
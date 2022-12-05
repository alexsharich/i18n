import { useAppSelector } from '../../../hooks/hooks'

export const Profile = () => {
  const user = useAppSelector((state) => state.auth)

  return (
    <div>
      {user.initialized ? 'YEEEEE' : 'NOOOO'}
      <h1>{user.fullName}</h1>
      <h3>{user.email}</h3>
    </div>
  )
}

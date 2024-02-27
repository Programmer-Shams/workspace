import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <h1>No user</h1>
  return (
    <div>
        Profile: <br />
        UserName: {user.username} <br />
        Password: {user.password}
    </div>
  )
}

export default Profile
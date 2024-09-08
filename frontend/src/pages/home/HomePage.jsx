import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./authScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {

  const {user} = useAuthStore();

  return (

    <>
      {user ? <HomeScreen /> : <AuthScreen />}
    </>

  )
}

export default HomePage
import { useSelector } from "react-redux";
import HomePage from "../components/Body/Homepage";
import Header from "../components/Layout/Header";

export default function Home(){
    const {user} = useSelector(state => state.auth)
    
    if(user){
        console.log(user)
        //console.log("mail",user.user.email)
        return(
            <>
        <Header/>
        <HomePage/>

        </>
            
        )
    }

};
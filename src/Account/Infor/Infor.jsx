import "./Infor.css"
import Header from "../../Pages/Header/Header.jsx"
const Infor =()=>{
    return(
        <div className="Backgr">
            <Header/>
            <div className="Body">
                <div className="Header">
                    My Profile
                </div>
                <div className="Infor">
                    <form action="">
                        <div className="FirstName">
                            <label htmlFor="">FirstName</label>
                            <input
                                className="IpFirstName"
                                type="text" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Infor
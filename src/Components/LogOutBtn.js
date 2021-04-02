import { authentication } from "myFireBase";
import RequestLogout from "./RequestLogout";

const LogOutBtn = () => {
    
    return (
        <div>
            <br></br>
            <button onClick={RequestLogout}>로그아웃</button>
            <br></br><br></br>
        </div>         
    );
};

export default LogOutBtn;
import { authentication } from "myFireBase";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

const LogInForm = () => {

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [newAccount, setnewAccount] = useState(false);

    const onChange = e => {
        const {target: {name, value}} = e;
        if(name === "email"){
            setEmail(value);
        } else if(name === "password"){
            setPassword(value);
        }    
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            if(!newAccount) {
                await authentication.signInWithEmailAndPassword(email, password);
            }
            else {
                await authentication.createUserWithEmailAndPassword(email, password);
            }
        } catch(err) {
            console.error(err.message);
            window.alert(ErrorMessage(err.message));
        }
    };

    useEffect(() => {
        document.querySelector("#email").focus();
    },[]);

    const toggleSignIn = () => setnewAccount(prev => !prev);

    return (
        <form name="submitButton" id="authForm" onSubmit={onSubmit} className="my-8">
            <div id="emailDiv" className="mt-12 my-4 border-8 border-white">
                <input id="email" name="email" type="text" placeholder=" Email" value={email} onChange={onChange} className="text-lg" size="32" required />
            </div>
            <div id="passwordDiv" className="my-4 border-8 border-white">
                <input id="password" name="password" type="password" placeholder=" Password" value={password} onChange={onChange} className="text-lg" size="32" required />
            </div>
            <div id="submitDiv" className="mt-12 mb-6 my-4 md:text-center text-base">
                <input id="submit" type="submit" value={newAccount ? "회원 가입" : "로그인"} className="bg-gradient-to-r from-yellow-100 to-yellow-100 hover:from-yellow-100 hover:via-red-100 hover:to-yellow-100"/>
            </div>
            <div id="toggleBtnDiv" className="my-4 md:text-center text-base">
                <input id="toggleBtn" type="button" value={newAccount ? "홈으로 돌아가기" : "회원 가입"} onClick={toggleSignIn} className="bg-gradient-to-r from-yellow-100 to-yellow-100 hover:via-red-100 hover:to-yellow-100"/>
            </div>
        </form>
    );
};

export default LogInForm;   
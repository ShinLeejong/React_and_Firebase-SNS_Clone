import { authentication, author } from "myFireBase";
import GoogleImage from '../Res/Images/Icons/google-icon.png';
import FacebookImage from '../Res/Images/Icons/facebook-icon.png';
import GithubImage from '../Res/Images/Icons/github-icon.png';

const Social = () => {

    const socialSignIn = async (e) => {
        const {target:{parentNode:{id}}} = e;
        let provider;

        if(id === "google"){
            provider = new author.GoogleAuthProvider();
        } else if (id === "facebook") {
            provider = new author.FacebookAuthProvider();
        } else if (id === "github") {
            provider = new author.GithubAuthProvider();
        } else {
            console.log("Maybe I mistyped while I'm coding, sorry");
            console.assert(id, " id");
        }

        await authentication.signInWithPopup(provider);
        // authentication.getRedirectResult().then(result => {
        // }).catch(error => console.log(error));

        // await authentication.signInWithRedirect(provider);
        // authentication.getRedirectResult().then(result => {
        //     // nothing //
        // }).catch(error => {
        //     console.error(error);
        //     console.log(`${error.code}\n${error.email}\n${error.credential}`);
        // });


    };

    return (
        <div id="buttonContainer" className="">
            <table className="border-separate">
                <tbody className="border-2 border-grey-50 hover:border-indigo-300">
                    <tr id="google" className="mt-4" onClick={socialSignIn}>
                        <td><img src={GoogleImage} alt="구글 로그인" width="50px" height="50px"/></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;구글 계정으로 로그인</td>
                    </tr>
                    <tr id="facebook" className="" onClick={socialSignIn}>
                        <td><img src={FacebookImage} alt="페이스북 로그인" width="50px" height="50px"/></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;페이스북 계정으로 로그인</td>
                    </tr>
                    <tr id="github" className="" onClick={socialSignIn}>
                        <td><img src={GithubImage} alt="깃허브 로그인" width="50px" height="50px"/></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;깃허브 계정으로 로그인</td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    );
};

export default Social;
import { authentication } from "myFireBase";

const RequestLogout = () => {
    authentication.signOut();
    window.location.replace("/");
};

export default RequestLogout;
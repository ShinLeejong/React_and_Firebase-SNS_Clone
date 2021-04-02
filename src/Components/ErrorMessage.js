const ErrorMessage = (message) => {

    if(message.includes("The password is invalid")) {
        return "비밀번호가 틀렸습니다.";
    } else if(message.includes("The email address is badly formatted.")) {
        return "이메일 형식이 잘못되었습니다.";
    } else if(message.includes("There is no user record corresponding")) {
        return "존재하지 않는 이메일입니다. 다시 확인해주세요!";
    } else {
        return "관리자에 문의해주세요!";
    }
};

export default ErrorMessage;  
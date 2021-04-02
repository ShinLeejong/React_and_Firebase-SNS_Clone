import RequestLogout from "./RequestLogout";

const Header = ({getInfo}) => {

    return (
        <header id="header_image" className="h-24 items-end">
            <div className="grid justify-items-end mr-5">{getInfo.photoURL && <img src={getInfo.photoURL} alt='Profile' className='rounded-full h-16 w-16'/>}</div>
            <div id="header_requestLogin" className="h-3 grid justify-items-end mt-3 mr-7">{getInfo.displayName && getInfo.displayName}</div>
            <div id="header_requestLogout" className="h-3 grid justify-items-end mt-3 mr-7" onClick={RequestLogout}>{getInfo.displayName && '로그아웃'}</div>
        </header>
    );
};

export default Header;  
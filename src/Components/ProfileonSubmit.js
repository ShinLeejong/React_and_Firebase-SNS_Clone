import { useState } from "react";
import { connect } from "react-redux";
import { ProfileSubmit } from "./ProfileSubmit";

const ProfileonSubmit = ({state}) => {

    const {uid, displayName} = state;
    const [text, setText] = useState(''); 
    const [photo, setPhoto] = useState('');
    const [isChanging, setIsChanging] = useState(false);

    const onSubmit = async e => {
        e.preventDefault();
        ProfileSubmit(uid, photo, text, displayName);
    };

    const onImageSelected = e => {
        const {target:{files}} = e;
        if(files[1]){
            window.alert("한 개의 사진만 등록해주세요!");
            return;
        }
        const file = files[0];
        const reader = new FileReader();
        reader.onloadend = onloadevent => {
            console.log(onloadevent);
            const {srcElement:{result}} = onloadevent;
            setPhoto(result);
        };
        reader.readAsDataURL(file);
    };

    const changeMe = () => setIsChanging(prev => !prev);
    const onChangingCancelClick = () => changeMe();
    const onPhotoCancelClick = () => setPhoto(null);
    const onTextChange = e => setText(e.target.value);
    const onChangingClick = () => changeMe();

    return (
        <>
            {isChanging ? (
                <form onSubmit={onSubmit}>
                    <h4>
                        이름&nbsp;&nbsp;
                        <input type="text" value={text} onChange={onTextChange} placeholder=" 바꿀 이름"></input>
                        <br></br><br></br>
                        프로필 사진&nbsp;&nbsp;
                        <input type="file" accept="image/*" onChange={onImageSelected}/>
                        <br></br><br></br>
                        {photo && 
                            <>
                                <img src={photo} alt="this is to change" width="60px" height="60px" className="ml-3 mb-3"/>
                                <input type="button" value="사진 선택 취소" onClick={onPhotoCancelClick} />
                            </>
                        }
                        <br></br><br></br>
                        <input type="submit" value="프로필 변경" className="mr-3" />
                        <input type="button" value="취소" onClick={onChangingCancelClick} />
                    </h4>               
                </form>
            ) : <input type="button" value="프로필 변경하기" onClick={onChangingClick} /> }
        </>
    );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProfileonSubmit);
import { database, storage } from "myFireBase";
import { useEffect, useRef, useState } from "react";
import { TimeFormatter } from "./TimeFormatter";

const PrintTweet = (tweets) => {

    const {tweets:{id, message, displayName, uid, uploadPhoto, createdAt, updatedAt}, isTheOwner} = tweets;
    const [tweet, setTweet] = useState(message);
    const [editing, setEditing] = useState(false);

    const tweetInput = useRef();

    const updateBtn = e => {
        setEditing(prev => !prev);
    }
    
    const deleteBtn = async () => {
        const confirmation = window.confirm("정말 지우시겠습니까?");
        if(confirmation){
            await database.doc(`tweets/${id}`).delete();
            await storage.refFromURL(uploadPhoto).delete();
        }
    }

    const onSubmit = async (e, isDeleting) => {
        e.preventDefault();
        let deleteMe;
        if(isDeleting === true) {
            deleteMe = null;
        } else {
            deleteMe = uploadPhoto;
        }

        const updatedAt = TimeFormatter(Date.now());
        await database.doc(`tweets/${id}`).update({
            message: tweet,
            updatedAt,
            uploadPhoto: deleteMe
        });
    }

    const onChange = e => {
        setTweet(e.target.value);
    }

    const photoDelete = async e => {
        onSubmit(e, true);
    }
    
    useEffect(() => {
        tweetInput.current.innerHTML =
            (isTheOwner ? '나' : displayName) + ' : ' + message + '<br></br>' + createdAt +  '에 작성 ' + 
            (updatedAt ? ('<br>' + updatedAt + '에 수정 ') : "") + '&nbsp;';
    }, [message]);

    return (
        <>
            <br></br>
            <div className={"w-4/5" + (isTheOwner ? " ml-48" : " ml-4")}>
                <div className="shadow-md w-5/6">
                    <div id="tweet_container" ref={tweetInput} className="ml-4" ></div>
                    {uploadPhoto && <div><img src={uploadPhoto} alt="from storage" width="100px" height="100px"/></div>}
                    {editing && isTheOwner ? (
                        <form onSubmit={onSubmit}>
                            {uploadPhoto && <><input type="button" value="사진 삭제" onClick={photoDelete}></input><br></br></>}
                            <input type="text" value={tweet} placeholder="수정" onChange={onChange}></input>
                            <input type="submit" value="확인"></input>
                            <input type="button" value="취소" onClick={updateBtn}></input>
                        </form>
                    ) : (<>
                        {isTheOwner ? <> <button id={uid} onClick={updateBtn} className="ml-8 mr-2">수정</button><button id={uid} onClick={deleteBtn}>삭제</button> </> : ''}
                    </>)}
                    <br></br>               
                </div>                    
            </div>
        </>
    );
}

export default PrintTweet;
import { useState } from "react";

const Preview = () => {

    const [photo, setPhoto] = useState("");

    const onCancelClick = () => setPhoto(null);

    return (
        <>
            <input type="submit" value="Send" />
            {photo && 
                <>  
                    <br></br>
                    <h3>미리 보기</h3>
                    <div>
                        <img src={photo} alt="Uploaded Here" width="60px" height="60px"></img>
                        &nbsp;&nbsp;<input type="button" value="취소" onClick={onCancelClick} />
                    </div>
                </>
            }            
        </>

    );
};

export default Preview;
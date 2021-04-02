import { authentication, storage } from "myFireBase";

export const ProfileSubmit = async (uid, photo, text, displayName) => {
    try{
        if(displayName === text){
            window.alert("같은 이름에 한자가 다른건가요? 한국어가 아닌진 모르겠지만요.");
            return;
        } else {
            let uploadPhoto;
            if(photo){
                const ref = storage.ref().child(`${uid}/${uid}_ProfilePicture/${Date.now()}`);
                const res = await ref.putString(photo, "data_url");
                uploadPhoto = await res.ref.getDownloadURL();
            }
            if(!photo && !text){
                window.alert("바꿀 내용이 없어요!");
                return;
            } else if(!photo){
                await authentication.currentUser.updateProfile({
                    displayName: text
                });
            } else if(!text){
                await authentication.currentUser.updateProfile({
                    photoURL: uploadPhoto
                });                
            }  else {
                await authentication.currentUser.updateProfile({
                    displayName: text,
                    photoURL: uploadPhoto
                });
            }
            window.alert("성공!");
            window.location.replace("/Profile");
        }
    } catch (e) {
        console.log(e);
        window.alert("어.. 왜 안되지 ㅠㅠ 고칠게요 미안해요 에러났다고 관리자에게 카톡해주세요 ㅠㅠ");
    }
    return;
};
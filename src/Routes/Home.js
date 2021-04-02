import PrintTweet from 'Components/PrintTweet';
import { TimeFormatter } from 'Components/TimeFormatter';
import { database, storage } from 'myFireBase';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Home = (state) => {
    const [tweet, setTweet] = useState('');
    const [tweets, setTweets] = useState([]);
    const [photo, setPhoto] = useState("");
    const {email, displayName, photoURL, creationTime, lastSignInTime, uid} = state;

    useEffect(() => {
        document.title = displayName + '의 Sempathy';
        database.collection("tweets").onSnapshot(snapshot => {
            const snapshotArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()          
            }));
            setTweets(snapshotArray);
        });
    }, []);

    const onChange = e => {
        const {target:{value}} = e;
        setTweet(value);
    };

    const onSubmit = async e => {
        e.preventDefault();
        if(!tweet) return;
        
        const date = new Date();

        let uploadPhoto = null;

        if(photo){
            const ref = storage.ref().child(`${uid}/${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}/${Date.now()}`);
            const res = await ref.putString(photo, "data_url");
            uploadPhoto = await res.ref.getDownloadURL();
        }

        const createdAt = TimeFormatter(Date.now());

        const req = {
            message: tweet,
            email,
            displayName,
            creationTime,
            lastSignInTime,
            uid,
            uploadPhoto,
            photoURL,
            createdAt,
            updatedAt: 0,
            datenow: Date.now()
        };

        await database.collection("tweets").add(req);

        setTweet('');
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
            const {srcElement:{result}} = onloadevent;
            setPhoto(result);
        };
        reader.readAsDataURL(file);
    };
    
    return (
        <div id="tweetDiv" className="flex flex-wrap content-between">
            <article id="tweetsDiv" className="mt-6 mb-6 w-1/2 h-96 overflow-y-scroll">
                {tweets.map(tweets => 
                    <PrintTweet key={tweets.id} tweets={tweets} isTheOwner={tweets.uid === state.uid} /> )}
            </article> 
            <form id="tweetForm" onSubmit={onSubmit} className="w-full">
                <input 
                    id="text"
                    type="text" 
                    placeholder="섹스킹이진형" 
                    size="60" 
                    maxLength="40" 
                    onChange={onChange} 
                    value={tweet}
                    />&nbsp;
                <input type="file" accept="image/*" onChange={onImageSelected}/>
                <input type="submit" value="보내기"></input>
            </form>  
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Home);
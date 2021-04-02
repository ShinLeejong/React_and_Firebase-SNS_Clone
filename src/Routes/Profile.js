import React, { useEffect } from 'react';
import { database } from '../myFireBase';
import { connect } from 'react-redux';
import LogOutBtn from 'Components/LogOutBtn';
import ProfileonSubmit from 'Components/ProfileonSubmit';

const Profile = (state) => {

    const {uid, displayName} = state;

    const getTweets = async () => {
        const tweets = await database.collection("tweets").where("uid ", "==", uid).orderBy("createdAt", "desc").get();
        console.log(tweets.docs.map(doc => doc.getData()));
    }

    useEffect(() => {
        getTweets();
    }, []);

    return (
        <div>{displayName && displayName + '님, '}좋은 하루 보내고 계신가요?<br></br><br></br>
            <ProfileonSubmit state={state} uid={uid} displayName={displayName}/>
            <LogOutBtn />
        </div>
    );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Profile);
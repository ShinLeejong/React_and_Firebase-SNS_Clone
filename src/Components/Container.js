import Router from "./Router";

const Container = ({init}) => {

    return (
        <div id="container" className="place-items-auto">{init ? <Router /> : "Loading.."}</div>
    );
};

export default Container;  
import Icon from '../Res/Images/Icons/Sempathy_Temporary.png';

const SempathyIcon = () => {
    return (
        <>
            <img src={Icon} alt="Sempathy 아이콘" width="120px" className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-indigo-200"/>
            <article className="text-xl mt-4">Sempathy</article>
        </>
    );
};

export default SempathyIcon;
import MidBlueBox from "../Mid blue box/MidBlueBox";
import MidGreenBox from "../Mid green box/MidGreenBox";
import MidRedBox from "../Mid red box/MidRedBox";
import MidYellowBox from "../Mid yellow box/MidYellowBox";

const MainBox = () => {
    return (<>
        <div className="mainbox">
            <MidBlueBox />
            <MidGreenBox />
            <MidRedBox />
            <MidYellowBox />
        </div>
    </>)
}
export default MainBox;
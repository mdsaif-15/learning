import CopyRight from "./CopyRight/CopyRight";
import LanguageSelecter from "./LanguageSelecter/LanguageSelecter";
import SecurityNotice from "./SecurityNotice/SecurityNotice";

const FooterSection = () => {
    return (<>
        <div>
            <LanguageSelecter />
            <CopyRight />
            <SecurityNotice />
        </div>
    </>)
}
export default FooterSection;
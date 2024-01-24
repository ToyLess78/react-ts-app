import {useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation.tsx";

const RenderNavigation = () => {

    const location = useLocation();
    const locationPaths = ['/sign-up', '/sign-in'];
    const shouldRender = locationPaths.includes(location.pathname);

    return shouldRender ? <></> : <Navigation />
}

export default RenderNavigation;
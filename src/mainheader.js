import { Outlet } from "react-router-dom";
import { Navigationbar } from "./component/navigationbar";

export function Mainheader() {
    return <>
    <Navigationbar />
    <Outlet />
    </>
}
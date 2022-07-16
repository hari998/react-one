import { NavLink } from "react-router-dom";

export function Navigationbar() {
    return (<>
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/newsletter'>Newsletter</NavLink></li>
                    <li><NavLink to='/signup'>Sign-up</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    {/* <li><NavLink to='/sample'>Sample</NavLink></li> */}

                </ul>
            </nav>
        </header>
        </>
    )
}
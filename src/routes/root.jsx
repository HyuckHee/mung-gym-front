import {Outlet, Link} from "react-router-dom";
// import {useSelector} from 'react-redux'

export default function Root() {
    // const inCartItem = useSelector((state) => state.cartInOut.items)

    return (
        <>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    );
}
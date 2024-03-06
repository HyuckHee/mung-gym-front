import {createBrowserRouter,Route, Routes } from "react-router-dom";
import LogoPage from '../pages/logoPage'
import Home from '../pages/home'
import UserAge from '../pages/userAge'
import UserKneecap from '../pages/userKneecap'
import Root from "../routes/root";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root/>,
//         // errorElement: <ErrorPage/>,
//         children: [
//             {
//                 path: "/home",
//                 element: <Home/>
//             },
//             {
//                 path: "/products",
//                 element: <UserAge/>,
//             },
//             {
//                 path: "/cart",
//                 element: <UserKneecap/>,
//             }
//         ]
//     },
// ]);


const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogoPage/>} >
            <Route index element={<LogoPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/production" element={<UserAge />} />
            <Route path="/cart" element={<UserKneecap />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

export default Router;


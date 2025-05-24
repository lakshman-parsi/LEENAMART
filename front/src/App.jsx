import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Allapi from "./common";
import mycontext from "./context/index";
import { useDispatch, useSelector } from "react-redux";
import { setuserDetails } from "./store/userslice";
import Categorycmp from "./components/Categorycmp";
import Sliding from "./components/Sliding";
import Productshome from "./components/ProductsHome";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user.userDetails);

  const fetchuserdetails = async () => {
    try {
      const response = await fetch(Allapi.userdet.url, {
        method: Allapi.userdet.method,
        credentials: "include",
      });

      if (!response.ok) {
        console.error("HTTP error", response.status, response.statusText);
        return;
      }

      const current_user = await response.json();
      console.log("current user is", current_user);

      if (current_user.success) {
        dispatch(setuserDetails(current_user.data));
      } else {
        console.error("Failed to fetch user details:", current_user.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchuserdetails();
  }, []);

  // If user is logged in and on auth pages, redirect to user page
  if (
    user &&
    (location.pathname === "/login" || location.pathname === "/signup")
  ) {
    return <Navigate to="/user" replace />;
  }

  return (
    <>
      <mycontext.Provider value={{ fetchuserdetails }}>
        <ToastContainer />
        <Header />
        <main className="min-h-[calc(100vh-90px)] pt-16">
          {!user && location.pathname === "/" && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50">
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">
                  Welcome to Our Store
                </h1>
                <p className="text-gray-600 mb-6">
                  Please login or signup to continue shopping
                </p>
                <div className="space-x-4">
                  <a
                    href="/login"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="inline-block px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          )}
          <Outlet />
        </main>
        <Footer />
      </mycontext.Provider>
    </>
  );
}

export default App;

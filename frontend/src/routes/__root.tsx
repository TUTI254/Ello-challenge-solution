import { Outlet, createRootRoute } from "@tanstack/react-router";
import NavBar from "../components/Navbar";

export const Route = createRootRoute({
    component: () =>(
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
});
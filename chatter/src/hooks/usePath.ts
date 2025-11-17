import { useEffect, useState } from "react";
import router from "../components/Routes";

const UsePath = () => {
    const [path,setPath] = useState(window.location.pathname);

    useEffect(()=>{
        router.subscribe((state)=>{
            setPath(state.location.pathname);
        })
    });
    return {path}
};

export {UsePath}

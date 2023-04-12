import { useSelector } from "react-redux";

const useAuth = () => {
    const user = useSelector((store) => store.auth.user);

    return {
        isAuth: !!user,
        user
    };
};

export default useAuth;
import { MessageResponse } from '../../models/errors/response.dto';
import { LoginDTO } from '../../models/user/LoginDTO';
import User from '../../models/user/user';
import hamzaApi from '../axios.config.hamza';

const CONTROLLER_ENDPOINT = '/authentication';

const routes = {
    authenticate: () => `${CONTROLLER_ENDPOINT}`,
};

const AuthService = () => {
    const logOut = () => {
        sessionStorage.clear();
        window.location.reload();
    };

    const authenticate = async (dto: LoginDTO): Promise<User | undefined> => {
        const response = await hamzaApi().post<MessageResponse<User>>(
            routes.authenticate(),
            dto,
        );
        return response.data.result;
    };

    return {
        logOut,
        authenticate,
    };
};

export default AuthService;

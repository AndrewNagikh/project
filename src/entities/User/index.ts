import { userReducer, userActions } from './model/slice/userSlice';
import { User, UserShema } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData';

export {
    userReducer,
    userActions,
    User,
    UserShema,
    getUserAuthData,
};

import { UserShema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    user: UserShema
    username: LoginSchema
}

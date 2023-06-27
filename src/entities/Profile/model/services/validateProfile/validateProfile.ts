import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { Profile } from '../../types/profile';

const validateProfile = (profile: Profile | undefined) => {
    let errors: string = '';
    Object.entries(profile as Profile).forEach(([key, value]) => {
        if (value === '') {
            errors += `${key} cannot be empty\n`;
        }
    });
    return errors;
};

export default validateProfile;

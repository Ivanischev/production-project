import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};
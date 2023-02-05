import React, { FC, useState } from 'react'
import cls from './SideBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }
  return (
    <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
        <button onClick={onToggle}>toggle</button>
        <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang}/>
        </div>
    </div>
  )
}
import React, { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import Modal from 'shared/ui/Modal/Modal';

function App() {
    const [open, setOpen] = useState<boolean>(false);
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                {/* <button type="button" onClick={() => setOpen(true)}>modal</button> */}
                {/* <Modal open={open} onClose={() => setOpen(false)}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam repellendus ad inventore aspernatur sunt, rem laboriosam fugit minus repellat blanditiis! Quibusdam non quam architecto illum est provident animi, asperiores qui?
                </Modal> */}
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;

import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sydebar } from 'widgets/Sydebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

export default function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sydebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

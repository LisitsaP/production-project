import { BugButton } from 'app/providers/ErrorBoundaries';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation('main');
    return (
        <div>
            <BugButton />
            {t('Main page')}
        </div>
    );
}

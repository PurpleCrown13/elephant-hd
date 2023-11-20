import { HeaderSearch } from '@/components/Header/HeaderSearch';
import '../App.css'
import { FooterSimple } from '@/components/Footer/FooterSimple';
import { SwitchesCard } from '@/components/SwitchesCard/SwitchesCard';
import { useLocation } from 'react-router-dom';

export function FilmPage() {
    window.scrollTo(0, 0);
    const location = useLocation();
    const { state } = location;

    const { image, title, movie_link, sub_ru, sub_en, sub_ua } = state;

    return (
        <div>
            <HeaderSearch />
            <div className='container'>
                <div className='watch'>
                    <SwitchesCard image={image} title={title} sub_ru={sub_ru} sub_ua={sub_ua} sub_en={sub_en} movie_link={movie_link} />
                    <div>
                    </div>
                </div>
            </div>
            <FooterSimple />
        </div>
    );
}

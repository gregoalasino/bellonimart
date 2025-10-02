// app/gallery/joyas/page.tsx
import GalleryContent from '../GalleryContent';

// 🚨 AQUÍ DEBE IR TU ARRAY DE OBRAS DE JOYERÍA 🚨
const joyas = [
    // Joyas del 80 al 90
    { id: 201, src: '/images/joyas/1981/1.jpg', alt: 'Anillo A', title: '', description: '' },
    { id: 202, src: '/images/joyas/1981/2.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 203, src: '/images/joyas/1981/3.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 204, src: '/images/joyas/1981/4.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 205, src: '/images/joyas/1981/5.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 206, src: '/images/joyas/1981/6.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 207, src: '/images/joyas/1981/7.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 208, src: '/images/joyas/1981/8.jpg', alt: 'Collar B', title: '', description: '' },

    // joyas del 90 al 2000
    { id: 209, src: '/images/joyas/1991/1.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 210, src: '/images/joyas/1991/2.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 211, src: '/images/joyas/1991/3.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 212, src: '/images/joyas/1991/4.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 213, src: '/images/joyas/1991/5.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 214, src: '/images/joyas/1991/6.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 215, src: '/images/joyas/1991/7.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 216, src: '/images/joyas/1991/8.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 217, src: '/images/joyas/1991/9.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 218, src: '/images/joyas/1991/10.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 219, src: '/images/joyas/1991/11.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 220, src: '/images/joyas/1991/12.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 221, src: '/images/joyas/1991/13.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 222, src: '/images/joyas/1991/14.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 223, src: '/images/joyas/1991/15.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 224, src: '/images/joyas/1991/16.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 225, src: '/images/joyas/1991/17.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 226, src: '/images/joyas/1991/18.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 227, src: '/images/joyas/1991/19.jpg', alt: 'Collar B', title: '', description: '' },

    // joyas del 2000 al 2010
    { id: 228, src: '/images/joyas/2001/1.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 229, src: '/images/joyas/2001/2.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 230, src: '/images/joyas/2001/3.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 231, src: '/images/joyas/2001/4.jpg', alt: 'Collar B', title: '', description: '' },
    { id: 232, src: '/images/joyas/2001/5.jpg', alt: 'Collar B', title: '', description: '' },
];

export default function JoyasPage() {
    return (
        <GalleryContent 
            title="" 
            paintings={joyas}
        />
    );
}
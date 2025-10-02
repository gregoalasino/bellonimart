// app/gallery/pinturas/page.tsx
import GalleryContent from '../GalleryContent';

// 🚨 AQUÍ DEBE IR TU ARRAY DE OBRAS DE PINTURA 🚨
const pinturas = [


    { id: 150, src: '/images/pinturas/2001/48.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 151, src: '/images/pinturas/2001/49.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 152, src: '/images/pinturas/2001/50.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 153, src: '/images/pinturas/2001/la foto.JPG', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 136, src: '/images/pinturas/2001/4.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 147, src: '/images/pinturas/2001/45.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 148, src: '/images/pinturas/2001/46.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 149, src: '/images/pinturas/2001/47.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 141, src: '/images/pinturas/2001/34.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 142, src: '/images/pinturas/2001/38.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 145, src: '/images/pinturas/2001/41.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 144, src: '/images/pinturas/2001/40.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 137, src: '/images/pinturas/2001/8.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 138, src: '/images/pinturas/2001/19.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 139, src: '/images/pinturas/2001/28.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 140, src: '/images/pinturas/2001/31.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 133, src: '/images/pinturas/2001/1.jpg', alt: 'Pintura B', title: 'Mapas de Navegacion', description: '' },
    { id: 134, src: '/images/pinturas/2001/2.jpg', alt: 'Pintura B', title: 'Mapas de Navegacion', description: '' },
    { id: 135, src: '/images/pinturas/2001/3.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 146, src: '/images/pinturas/2001/43.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },
    { id: 143, src: '/images/pinturas/2001/39.jpg', alt: 'Pintura B', title: 'Navegando', description: '' },



    { id: 124, src: '/images/pinturas/1991/13.jpg', alt: 'Pintura B', title: 'Serie de los Papiros', description: '' },
    { id: 125, src: '/images/pinturas/1991/14.jpg', alt: 'Pintura B', title: 'Serie de los Papiros', description: '' },
    { id: 126, src: '/images/pinturas/1991/15.jpg', alt: 'Pintura B', title: 'Serie de los Papiros', description: '' },
    { id: 127, src: '/images/pinturas/1991/16.jpg', alt: 'Pintura B', title: 'Serie de los Papiros', description: '' },
    { id: 122, src: '/images/pinturas/1991/11.jpg', alt: 'Pintura B', title: 'Serie de los Papiros', description: '' },
    { id: 123, src: '/images/pinturas/1991/12.jpg', alt: 'Pintura B', title: 'Serie de los Papiros', description: '' },
    { id: 131, src: '/images/pinturas/1991/20.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 132, src: '/images/pinturas/1991/21.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 120, src: '/images/pinturas/1991/9.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 121, src: '/images/pinturas/1991/10.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 129, src: '/images/pinturas/1991/18.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 130, src: '/images/pinturas/1991/19.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 116, src: '/images/pinturas/1991/5.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 117, src: '/images/pinturas/1991/6.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 118, src: '/images/pinturas/1991/7.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 119, src: '/images/pinturas/1991/8.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 113, src: '/images/pinturas/1991/2.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 114, src: '/images/pinturas/1991/3.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 115, src: '/images/pinturas/1991/4.jpg', alt: 'Pintura B', title: 'Serie de los Esteros', description: '' },
    { id: 109, src: '/images/pinturas/1981/9.jpg', alt: 'Pintura B', title: 'Serie de las Sedas', description: '' },
    { id: 110, src: '/images/pinturas/1981/10.jpg', alt: 'Pintura B', title: 'Serie de las Sedas', description: '' },
    { id: 111, src: '/images/pinturas/1981/11.jpg', alt: 'Pintura B', title: 'Serie de las Sedas', description: '' },
    { id: 112, src: '/images/pinturas/1981/12.jpg', alt: 'Pintura B', title: 'Serie de las Sedas', description: '' },
    { id: 105, src: '/images/pinturas/1981/5.jpg', alt: 'Pintura B', title: 'Serie de las Sedas', description: '' },
    { id: 101, src: '/images/pinturas/1981/1.jpg', alt: 'Pintura A', title: 'Serie de las Sedas', description: '' },
    { id: 102, src: '/images/pinturas/1981/2.jpg', alt: 'Pintura B', title: 'Serie de las Sedas', description: '' },
    { id: 103, src: '/images/pinturas/1981/3.jpg', alt: 'Pintura B', title: 'Serie de las Sedas', description: '' },

    // pinturas del 80 al 90
    //{ id: 104, src: '/images/pinturas/1981/4.jpg', alt: 'Pintura B', title: 'El Serie de las Sedas', description: '' },
    //{ id: 107, src: '/images/pinturas/1981/7.jpg', alt: 'Pintura B', title: 'El Serie de las Sedas', description: '' },
    //{ id: 108, src: '/images/pinturas/1981/8.jpg', alt: 'Pintura B', title: 'El Despertar', description: '' },

    // pinturas del 90 al 2000
    
    // pinturas del 2000 al 2010
];

export default function PinturasPage() {
    return (
        <GalleryContent 
            title="" 
            paintings={pinturas}
        />
    );
}
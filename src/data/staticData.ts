import logo from "@/assets/logo.png";

type t_static = {
    navigation: {
        brand: link & {
            logo: image;
        };
        menu: Array<link>;
    }
}

export const staticData: t_static = {
    navigation: {
        brand: {
            label: 'Countries DLE',
            logo: {
                alt: 'Countries DLE - logo',
                src: logo.src,
                title: 'Countries DLE - logo'
            },
            uri: '/'
        },
        menu: [
            {
                label: 'SEO',
                uri: 'https://radweb.pl/seo'
            },
            {
                label: 'WWW',
                uri: 'https://radweb.pl/www'
            },
            {
                label: 'Ubezpieczenia',
                uri: 'https://radweb.pl/ubezpieczenia'
            },
            {
                label: 'LifeeStylee',
                uri: 'https://lifeestylee.pl'
            }
        ]
    }
}
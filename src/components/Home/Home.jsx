import "./Home.scss";
import { useState } from 'react'

const Home = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const slides = [
        {
            image: "./Angleterre.jpg",
            title1: "Angle",
            title2: "terre",
            alt: "Londre, Big Ben",
            location: "Londre",
            subject: "0.1 Angleterre Tour",
            description: "L'Angleterre est riche en histoire, avec des sites emblématiques tels que le Tower Bridge, le Palais de Buckingham, le château de Windsor et Stonehenge. Les visiteurs peuvent explorer des siècles d'histoire à travers des châteaux, des cathédrales et des musées fascinants.",
            link: "https://www.quartier-libre.fr/guide-voyage-angleterre"
        },
        {
            image: "./Australie.jpg",
            title1: "Aust",
            title2: "ralie",
            alt: "Opéra Sydney",
            location: "Sydney",
            subject: "0.2 Australie Tour",
            description: "L'Australie est réputée pour ses paysages naturels spectaculaires, allant des plages de sable blanc aux récifs de corail colorés en passant par les forêts tropicales luxuriantes et les déserts rouges. Des sites emblématiques tels que la Grande Barrière de Corail, Uluru (Ayers Rock) et les Blue Mountains attirent des visiteurs du monde entier.",
            link: "https://www.australia.com/fr-fr/facts-and-planning/beginners-guide-to-australia.html"
        },
        {
            image: "./Canada.jpg",
            title1: "Cana",
            title2: "da",
            alt: "Lac Bow",
            location: "Lac Bow",
            subject: "0.3 Canada Tour",
            description: " Le Canada est renommé pour ses vastes étendues sauvages et ses paysages spectaculaires. Des montagnes majestueuses des Rocheuses aux lacs cristallins de Banff et de Jasper, en passant par les forêts luxuriantes de la Colombie-Britannique et les côtes escarpées de l'Atlantique, le Canada offre une variété de paysages à couper le souffle.",
            link: "https://www.terres-lointaines.com/voyage-canada/?gad_source=1&gclid=CjwKCAjwrcKxBhBMEiwAIVF8rCUxcrtnYEIyAhNoDxmUgPwXelSGaBQyBwc4-1viJ4EYXsYrejwq4xoCnXoQAvD_BwE"
        },
        {
            image: "./Chine.jpeg",
            title1: "Chi",
            title2: "ne",
            alt: "Muraille de Chine",
            location: "Grande Muraille",
            subject: "0.4 Chine Tour",
            description: "La Chine possède une histoire millénaire riche et fascinante, avec des sites historiques emblématiques tels que la Grande Muraille, la Cité Interdite, les guerriers en terre cuite de Xi'an et les temples bouddhistes millénaires. Ces sites offrent aux visiteurs un aperçu de la riche histoire et de la culture ancienne de la Chine.",
            link: "https://www.asia.fr/infos-voyage-chine"
        },
        {
            image: "./Ecosse.jpg",
            title1: "Éco",
            title2: "sse",
            alt: "Trossachs, Écosse",
            location: "Trossachs",
            subject: "0.5 Écosse Tour",
            description: "L'Écosse est réputée pour ses paysages époustouflants, allant des majestueuses Highlands aux îles sauvages des Hébrides en passant par les falaises abruptes des îles Orcades. Les visiteurs peuvent explorer des lochs tranquilles, des montagnes imposantes et des landes mystérieuses à chaque tournant.",
            link: "https://www.visitscotland.com/fr-fr/travel-planning"
        },
        {
            image: "./Egypte.jpg",
            title1: "Égyp",
            title2: "te",
            alt: "Pyramides de Gizeh",
            location: "Gizeh",
            subject: "0.6 Égypte Tour",
            description: "L'Égypte est la mère du monde, c'est une destination que les touristes du monde entier visitent, et comprend de nombreuses attractions touristiques et historiques uniques, ainsi que des trésors archéologiques et anciens, qui ont longtemps été la marque de fabrique de l'Égypte, où de nombreux touristes viennent visiter pour découvrir les pyramides et le Sphinx, en plus des vestiges de la civilisation Égyptienne antique, qui reflète l'histoire islamique, copte, romaine, grecque et pharaonique.",
            link: "https://www.evaneos.fr/egypte/?utm_source=google&utm_medium=cpc&utm_campaign=G_DES_CTH-Egypte_FR_fr_FR_D:32&utm_term=egypte%20voyage&gad_source=1&gclid=CjwKCAjwrcKxBhBMEiwAIVF8rHdO7ZqKfroystUaAmwOPQmcU0IoXtGLysemJ66R9oeDz_cTGoDc6xoC_4gQAvD_BwE&gclsrc=aw.ds"
        },
        {
            image: "./etats-unis.jpg",
            title1: "États",
            title2: "Unis",
            alt: "New York",
            location: "New York",
            subject: "0.7 États-Unis Tour",
            description: "Les États-Unis offrent une incroyable diversité de paysages, allant des plages spectaculaires de la Californie aux montagnes majestueuses des Rocheuses, en passant par les déserts arides du sud-ouest et les vastes forêts verdoyantes du nord-ouest. Des sites emblématiques tels que la Statue de la Liberté, le Golden Gate Bridge, le Grand Canyon, les parcs nationaux de Yellowstone et de Yosemite, ainsi que des villes dynamiques comme New York, Los Angeles, Chicago et San Francisco attirent des millions de visiteurs chaque année.",
            link: "https://www.directours.com/d/les-ameriques/etats-unis?gad_source=1&gclid=CjwKCAjwrcKxBhBMEiwAIVF8rI4JQA28hxcbs1fvkZMKQvGimk583FJUKipLILtyU4n0cRfCsfA8oxoC_P4QAvD_BwE"

        },
        {
            image: "./France.jpg",
            title1: "Fran",
            title2: "ce",
            alt: "Paris",
            location: "Paris",
            subject: "0.8 France Tour",
            description: "La France est imprégnée d'une riche histoire et d'une culture fascinante. Des châteaux médiévaux aux monuments emblématiques tels que la Tour Eiffel, le Louvre et la cathédrale Notre-Dame de Paris, en passant par les villages pittoresques de la campagne française, chaque coin du pays regorge de témoignages de son passé.",
            link: "https://www.france-voyage.com/"
        },
        {
            image: "./Grece.jpg",
            title1: "Grè",
            title2: "ce",
            alt: "Santorini",
            location: "Santorini",
            subject: "0.9 Grèce Tour",
            description: "La Grèce est le berceau de la civilisation occidentale, avec une histoire et un patrimoine riches remontant à l'Antiquité. Des sites emblématiques tels que l'Acropole d'Athènes, le site archéologique de Delphes, les ruines de l'ancienne Olympie et les palais de la Crète minoenne offrent aux visiteurs un aperçu de la grandeur de la civilisation grecque.",
            link: "https://www.directours.com/d/europe-mediterranee/grece?page=1&gad_source=1&gclid=CjwKCAjwrcKxBhBMEiwAIVF8rP0PAEpsP40rvRNURQ79XuMufZtsk3KF9ItnEgMl_zkG46pojT--dRoCtkAQAvD_BwE"
        },
        {
            image: "./Irlande.jpg",
            title1: "Irla",
            title2: "nde",
            alt: "Wild Atlantic Way",
            location: "Wild Atlantic Way",
            subject: "1.1 Irlande Tour",
            description: " L'Irlande est célèbre pour ses paysages verdoyants et vallonnés, avec des prairies luxuriantes, des collines ondulantes et des falaises spectaculaires le long de la côte atlantique. Les visiteurs peuvent explorer des régions comme le Connemara, le Kerry et le Donegal pour découvrir la beauté naturelle de l'île.",
            link: "https://www.celtictours.fr/?gad_source=1&gclid=CjwKCAjwrcKxBhBMEiwAIVF8rHwcGxZra1CcMjp_GbmbbNUdNieZEDZteySjhn81aWzc_natz_-zghoCRdAQAvD_BwE"
        },
        {
            image: "./Italie.png",
            title1: "Ita",
            title2: "lie",
            alt: "Colisé Italie",
            location: "Rome",
            subject: "1.2 Italie Tour",
            description: "L'Italie est le berceau de la Renaissance et abrite certains des trésors artistiques les plus célèbres au monde. Des chefs-d'œuvre tels que la chapelle Sixtine au Vatican, la basilique Saint-Marc à Venise, la galerie des Offices à Florence et le Colisée à Rome témoignent de la richesse culturelle et architecturale du pays.",
            link: "https://www.visiteurope.fr/guide-italie"
        },
        {
            image: "./Japon.jpg",
            title1: "Jap",
            title2: "on",
            alt: "Pagode Chureito",
            location: "Fujiyoshida",
            subject: "1.3 Japon Tour",
            description: "Le Japon est imprégné de traditions anciennes et d'une culture riche qui se mêle harmonieusement à la modernité. Des temples bouddhistes aux jardins zen en passant par les festivals traditionnels et les cérémonies du thé, les visiteurs peuvent découvrir une culture unique et fascinante à chaque étape de leur voyage.",
            link: "https://www.asia.fr/infos-voyage-japon"
        },
        {
            image: "./Norvege.jpg",
            title1: "Norv",
            title2: "ège",
            alt: "Sorvagen",
            location: "Sorvagen",
            subject: "1.4 Norvège Tour",
            description: "La Norvège est réputée pour ses paysages naturels époustouflants, comprenant des fjords majestueux, des montagnes imposantes, des cascades vertigineuses et des glaciers étincelants. Des endroits comme le fjord de Geiranger, le glacier de Jostedalsbreen et le parc national de Rondane offrent aux visiteurs des vues à couper le souffle sur la nature sauvage norvégienne.",
            link: "https://www.scanditours.fr/destinations/norvege/"
        },
        {
            image: "./Russie.jpeg",
            title1: "Russ",
            title2: "ie",
            alt: "Place Rouge",
            location: "Moscou",
            subject: "1.5 Russie Tour",
            description: "La Russie possède une histoire et une culture riches qui remontent à des siècles. Des sites emblématiques comme le Kremlin de Moscou, la Place Rouge, la cathédrale Saint-Basile-le-Bienheureux, et le musée de l'Ermitage à Saint-Pétersbourg témoignent de la grandeur et de la richesse de l'histoire russe.",
            link: "https://www.terres-de-russie.com/"
        },
        {
            image: "./Turquie.jpg",
            title1: "Tur",
            title2: "quie",
            alt: "Istanbul",
            location: "Istanbul",
            subject: "1.6 Turquie Tour",
            description: "La Turquie abrite de nombreux sites archéologiques impressionnants témoignant de sa riche histoire ancienne, notamment les ruines de Troie, les villes souterraines de Cappadoce, les monuments de l'Empire ottoman à Istanbul, et les sites antiques comme Éphèse et Pergame.",
            link: "https://www.tooistanbul.com/turquie/#:~:text=La%20grande%20diversit%C3%A9%20g%C3%A9ologique%20de,des%20randonn%C3%A9es%20et%20du%20ski."
        }
    ]

    const numberOfSlides = slides.length;

    const nextSlide = () => {
        setSlideNumber((prevSlideNumber) => (prevSlideNumber + 1) % numberOfSlides);
    };

    const prevSlide = () => {
        setSlideNumber((prevSlideNumber) => (prevSlideNumber - 1 + numberOfSlides) % numberOfSlides);
    };

    return(
        <>
            <section className="home">
                <div className="home__slider">
                    {slides.map((slide, index) => ( 
                        <div key={index} className={`home__slide ${index === slideNumber ? 'active' : ''}`}>
                            <img className="home__img" src={slide.image} alt={slide.alt} />
                            <div className="home__left-info">
                                <div className="left-info__blur">
                                    <h1 className="left-info__title">{slide.title1}</h1>
                                </div>
                                <div className="left-info__content">
                                    <h2 className="left-info__subject">{slide.subject}</h2>
                                    <p className="left-info__desc">{slide.description}</p>
                                    <a className="left-info__btn" href={slide.link} target="_blank">Détails</a>
                                </div>
                            </div>
                            <div className="home__right-info">
                                    <h1 className="right-info__title">{slide.title2}</h1>
                                    <h2 className="right-info__location">{slide.location}</h2>  
                            </div>
                        </div>
                    ))}
                </div>

                <div className="home__navigation">
                    <span className="home__btn prev" onClick={prevSlide}>
                        <i class='bx bx-chevron-left'></i>
                    </span>
                    <span className="home__btn next" onClick={nextSlide}>
                        <i class='bx bx-chevron-right' ></i>
                    </span>
                </div>
            </section>
        </>
    )
}

export default Home;
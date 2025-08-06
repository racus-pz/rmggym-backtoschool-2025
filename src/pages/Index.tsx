import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navbar from "../components/Navbar";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const [isButtonFixed, setIsButtonFixed] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero-section');
    const handleScroll = () => {
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsButtonFixed(heroBottom < window.innerHeight * 0.2);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const registrationUrl = "https://rmggym.pl/back-to-school-promo";

  return (
    <div className="min-h-screen bg-background dark:bg-background font-inter">
      <Navbar />

      {/* Hero Section */}
      <section id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/rmggym-wakacje2025.mp4" type="video/mp4" />
            Twoja przeglądarka nie wspiera odtwarzania wideo.
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-pine/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-white mb-6">
              Wracasz po wakacjach? My też.
            </h1>
            
            <p className="text-xl md:text-3xl font-poppins font-extrabold text-accent mb-8">Trenuj do końca września za 39 zł i zatrzymaj starą cenę zanim wzrośnie</p>
            <p className="font-poppins font-normal text-white mb-8"></p>
            <motion.a
              href={registrationUrl}
              target="_self"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent uppercase text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90 text-center w-full md:w-auto mt-6"
            >
              Kupuję karnet w promocyjnej cenie
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Fixed Button */}
      <AnimatePresence>
        {isButtonFixed && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 w-full bg-black/80 py-3 z-50"
            style={{ 
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              width: '100%'
            }}
          >
            <div className="container mx-auto px-4 flex justify-center">
              <motion.a
                href={registrationUrl}
                target="_self"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent uppercase text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90 text-center w-full md:w-auto"
              >
                Kupuję karnet - zamrażam cenę
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Section */}
      <section className="bg-black py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-2xl font-poppins font-bold text-center mb-16 text-white">
            Od 1.09 ceny karnetów rosną – ale nie dla Ciebie! Ty trenujesz taniej i zachowujesz starą cenę karnetu – bez względu na wrześniową podwyżkę!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <i className="fa-solid fa-ticket-perforated text-white text-3xl"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-white mb-3">Karnety już za 39 zł</h5>
              <p className="text-white">za pierwszą płatność</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <i className="fa-solid fa-shield-check text-white text-3xl"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-white mb-3">cena regularna od 99 zł</h5>
              <p className="text-white">zachowujesz cenę sprzed podwyżki</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <i className="fa-solid fa-wallet text-white text-3xl"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-white mb-3">z góry wiesz ile zapłacisz</h5>
              <p className="text-white">bez niespodzianek i bez podwyżek </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <i className="fa-solid fa-infinity text-white text-3xl"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-white mb-3">dostęp 24/7</h5>
              <p className="text-white">ćwiczysz kiedy chcesz i ile chcesz </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <i className="fa-solid fa-user-ninja text-3xl text-lime-500"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-lime-500 mb-3">Trening wprowadzający<span className="bg-lime-500 text-black px-2 py-1 rounded-md font-bold text-xs">GRATIS</span></h5>
              <p className="text-lime-500">odkryj swoje możliwości dzięki pomocy trenera personalnego </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
              <i class="fa-solid fa-pot-food text-3xl text-lime-500"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-lime-500 mb-3">Program dietetyczny<span className="bg-lime-500 text-black px-2 py-1 rounded-md font-bold text-xs">GRATIS</span></h5>
              <p className="text-lime-500">zadbaj o swoje zdrowie stosując dietę dopasowaną do Twoich potrzeb </p>
            </div>
          </div>
          
          <p className="text-center text-lg md:text-xl text-white font-semibold">
            Nie przegap lata i tej oferty! To mogą być Twoje najlepsze wakacje z RMG GYM.
          </p>
        </div>
      </section>

      {/* Why Worth It Section */}
      <section className="bg-gradient-to-br from-pine to-pine-dark py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-8">
                Dlaczego warto?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">📆</span>
                  <p className="text-xl text-white leading-relaxed">
                    Od września ceny wszystkich naszych karnetów drożeją
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">💥</span>
                  <p className="text-xl text-white leading-relaxed">
                    Ale Ty możesz zatrzymać cenę sprzed podwyżki i do końca września trenować za mniej
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">⏳</span>
                  <p className="text-xl text-white leading-relaxed">
                    Nie czekaj! Takie ceny już nie wrócą.
                  </p>
                </div>
              </div>
              <motion.a
                href={registrationUrl}
                target="_self"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-accent uppercase text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90 text-center mt-8"
              >
                Kupuję karnet teraz
              </motion.a>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center border-2 border-accent/50">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏋️‍♂️</div>
                  <p className="text-accent font-bold text-2xl">69 zł</p>
                  <p className="text-white text-lg">na wakacje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-center mb-6 text-white">
            Masz pytania?
          </h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-white">
            Sprawdź nasze FAQ lub skontaktuj się z nami bezpośrednio.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Na czym polega wakacyjna promocja w RMG GYM?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Oferujemy trzy karnety do wyboru, których ważność rozpoczyna się 26.05. Płacisz z góry za cały okres wakacyjny (26.05 - 31.08) już od 69 zł, <strong className="font-bold text-accent">a po jego zakończeniu obowiązuje cena wybranej przez Ciebie subskrypcji.</strong>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Czy kupuję karnet tylko na wakacje?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <strong className="font-bold text-accent">Nie, karnet wakacyjny to promocyjny start dłuższej subskrypcji. Wybierając karnet wakacyjny w promocyjnej cenie, automatycznie aktywujesz karnet na kolejne miesiące – zgodnie z warunkami wybranej oferty.</strong>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Jakie karnety w ramach wakacyjnej promocji mogę wybrać?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Do wyboru masz karnet na 12 miesięcy lub na czas nieokreślony z subskrypcją. Szczegóły znajdziesz po kliknięciu "Kupuję wakacyjny karnet".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Czy mogę trenować na siłowni RMG GYM jeśli nie jestem pełnoletni?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <p>Jasne! Do RMG GYM mogą uczęszczać osoby, które mają ukończone 13 lat.</p>
                <p className="mt-2">Pamiętaj, aby dostarczyć pisemną zgodę rodzica/opiekuna prawnego w formie skanu lub zdjęć na adres bok@rmggym.pl. Wzór zgody do druku znajdziesz tutaj: <a href="https://rmggym.pl/Zgoda_pelnoletnosc.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-accent hover:underline">Zgoda</a></p>
                <p className="mt-2 font-semibold">Uwaga: W przypadku braku zgody, konto może zostać tymczasowo zablokowane.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Index;
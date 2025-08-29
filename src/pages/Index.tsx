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
            <source src="/videos/rmggym-backtoschool.mp4" type="video/mp4" />
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
            <h1 className="text-4xl md:text-6xl font-poppins leading-relaxed font-extrabold text-white mb-6">
              Zacznij trenować<br /><span className="text-yellow-400 text-8xl">za 39 zł</span> <br /> zachowaj dobrą cenę na kolejne miesiące
            </h1>

            
            <p className="text-xl md:text-3xl font-poppins font-extrabold text-accent mb-8">Nie daj się zaskoczyć podwyżkom</p>
            <p className="font-poppins font-normal text-white mb-8"></p>
            <motion.a
              href={registrationUrl}
              target="_self"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent uppercase text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90 text-center w-full md:w-auto mt-6"
            >
              KUP KARNET - ZAMROŹ CENĘ
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
            Od 1.09 ceny rosną, ale nie dla Ciebie! Ty łapiesz super promkę: pierwszy miesiąc za 39&nbsp;zł i&nbsp;gwarancję cen karnetów sprzed podwyżki na dłuuużej!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <i className="fa-solid fa-ticket-perforated text-yellow-400 text-3xl"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-yellow-400 mb-3">Karnety już od 39 zł</h5>
              <p className="text-yellow-400">za pierwszą płatność</p>
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
              <p className="text-white">bez niespodzianek i&nbsp;bez podwyżek</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <i className="fa-solid fa-infinity text-white text-3xl"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-white mb-3">dostęp<br />24/7</h5>
              <p className="text-white">ćwiczysz kiedy chcesz i&nbsp;ile chcesz</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <i className="fa-solid fa-user-ninja text-3xl text-lime-500"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-lime-500 mb-3">Trening wprowadzający<span className="bg-lime-500 ms-2 text-black px-1 py-1 rounded-md font-bold text-xs">GRATIS</span></h5>
              <p className="text-lime-500">odkryj swoje możliwości dzięki pomocy trenera personalnego </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <i className="fa-solid fa-pot-food text-3xl text-lime-500"></i>
              </div>
              <h5 className="text-lg font-poppins font-bold text-lime-500 mb-3">Program dietetyczny<span className="bg-lime-500 ms-2 text-black px-1 py-1 rounded-md font-bold text-xs">GRATIS</span></h5>
              <p className="text-lime-500">zadbaj o swoje zdrowie korzystając z dopasowanej diety </p>
            </div>
          </div>
          
          <p className="text-center text-lg md:text-xl text-white font-semibold">
            Liczba karnetów w promocji ograniczona!
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
                  
                  <p className="text-xl text-white leading-relaxed">
                    Od września ceny wszystkich naszych karnetów drożeją
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  
                  <p className="text-xl text-white leading-relaxed">
                    Ale Ty możesz zatrzymać cenę sprzed podwyżki i&nbsp;dodatkowo pierwszy miesiąc trenować za mniej!
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  
                  <p className="text-xl text-white leading-relaxed">
                    Nie czekaj! Takie ceny już nie wrócą.
                  </p>
                </div>
              </div>
              
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src="/images/rmggym-silownia.webp" 
                alt="Promocyjna oferta siłowni" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black pt-20 pb-40 px-4">
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
                Na czym polega promocja Back to school w RMG GYM
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Oferujemy trzy karnety do wyboru, których ważność rozpoczyna się od 25.08. Płacisz z góry za pierwszy miesiąc (okres rozliczeniowy 28 dni) już od 39 zł, <span className="font-bold">a po jego zakończeniu obowiązuje cena wybranej przez Ciebie subskrypcji.</span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Czy kupuję karnet tylko na miesiąc?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Kupując karnet w promocyjnej cenie, automatycznie aktywujesz karnet na kolejne miesiące - zgodnie z warunkami wybranej oferty.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Jakie karnety w ramach promocji Back to School mogę wybrać?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <span className="font-bold">Do wyboru masz trzy rodzaje karnetów:</span> na 12 miesięcy, na czas nieokreślony z subskrypcją i okresem wypowiedzenia oraz na czas nieokreślony z subskrypcją bez wypowiedzenia. Szczegóły znajdziesz po kliknięciu "<a href={registrationUrl} target="_self" rel="noopener noreferrer" className="font-bold text-accent hover:underline">Kupuję karnet w promocyjnej cenie</a>".
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Czy to działa we wszystkich klubach?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Tak – promocja obowiązuje <span className="font-bold">w całej sieci RMG GYM</span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Czy mogę trenować na siłowni RMG GYM jeśli nie jestem pełnoletni?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
              <p>Jasne! Do RMG GYM <span className="font-bold">mogą uczęszczać osoby, które mają ukończone 13 lat.</span></p> <p>Pamiętaj, aby dostarczyć pisemną zgodę rodzica/opiekuna prawnego w formie skanu lub zdjęć na adres <a href="mailto:bok@rmggym.pl">bok@rmggym.pl</a>. Wzór zgody do druku znajdziesz tutaj: <a href="https://rmggym.pl/Zgoda_pelnoletnosc.pdf">Zgoda</a></p> <p>Uwaga: W przypadku braku zgody, konto może zostać tymczasowo zablokowane.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Co znaczy “gwarancja ceny”?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Kupując karnet w promocji Back to School <span className="font-bold">zachowujesz starą cenę</span> (obowiązującą na wybraną przez Ciebie subskrypcje przed 01.09.2025 r.) – na cały czas trwania wybranej subskrypcji, nawet jeśli inni zapłacą więcej.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Index;
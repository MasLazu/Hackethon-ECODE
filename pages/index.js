import Head from "next/head";
import Image from "next/image";

import Button from "../components/Button";
import CardReason from "../components/CardReason";
import ExpoloreMenu from "../components/Browse/ExploreMenu";
import CardNews from "../components/CardNews";
import ButtonSosmed from "../components/ButtonSosmed";

import logo from "../assets/Logo.png";
import illustrationPizza from "../assets/Pizza.png";
import illustrationChef from "../assets/Chef.png";
import illustrasiBurger from "../assets/Burger.png";
import arrowIcon from "../assets/arrow-right.svg";
import illustrasitestimoni from "../assets/testimoni/testimoni.png";
import testimoniMobile1 from "../assets/testimoni/testimoni-mobile-1.png";
import testimoniMobile2 from "../assets/testimoni/testimoni-mobile-2.png";
import testimoniMobile3 from "../assets/testimoni/testimoni-mobile-3.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Figo</title>
        <meta
          name="description"
          content="Figo is cozy restaurant serves up delicious, freshly-prepared dishes made with locally-sourced ingredients. The menu features a wide variety of options, including hearty sandwiches, savory soups, and mouthwatering salads. The restaurant also boasts an extensive wine list, featuring both local and international options. The warm and welcoming atmosphere, combined with the friendly and attentive staff, makes this the perfect spot for a casual dinner with friends or a romantic date night."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center w-[100vw]">
        <div className="md:px-6 px-3 container">
          <section className="min-h-[100vh] md:grid md:grid-cols-2 items-center">
            <h1 className="md:hidden pt-20 text-[2.5rem] leading-[3.4rem] text-center text-[#2c3722]">
              All in good Taste Food With Figo.
            </h1>
            <div className="illustration md:mt-0 md:hidden flex justify-center">
              <Image
                src={illustrationPizza}
                className="w-[80%] h-auto md:hidden"
              />
            </div>
            <div className="caption">
              <h1 className="hidden md:block xl:text-[4.5rem] lg:text-[3rem] lg:leading-[4rem] md:text-4xl xl:leading-[6rem] text-left my-6 text-[#2c3722]">
                All in good Taste Food With Figo.
              </h1>
              <h2 className="lg:text-xl text-lg md:leading-[2rem] text-[#636465] font-medium text-center md:text-left">
                Quick predominate standard compilant architecture
              </h2>
              <h2 className="lg:text-xl text-lg md:leading-[2rem] text-[#636465] font-medium text-center md:text-left">
                and may have prospective internal or organic sosurce.
              </h2>
              <div className="form flex items-center justify-center md:justify-start">
                <input
                  type="text"
                  className="outline-0 md:my-12 my-6 rounded-lg shadow-lg lg:py-4 py-3 px-5 lg:text-xl xl:w-80 lg:w-72 w-52 md:mr-5 mr-3"
                  placeholder="Enter Your Address"
                />
                <Button caption={"Get Started"} />
              </div>
            </div>
            <div className="illustration hidden md:block">
              <Image src={illustrationPizza} className="w-[100%] h-auto" />
            </div>
          </section>
          <section className="min-h-[100vh] md:grid md:grid-cols-2 items-center sm:mt-20 md:mt-0">
            <h3 className="text-accent text-2xl mb-1 md:hidden text-center">
              Welcome
            </h3>
            <h2 className="text-4xl text-[#2c3722] mb-7 md:hidden text-center">
              Welcome to Figo Restaurant
            </h2>
            <div className="illustration lg:px-5 px-8 md:px-1">
              <Image
                src={illustrationChef}
                className="w-[100%] h-auto mb-6 md:mb-0"
              />
            </div>
            <div className="caption px-5">
              <h3 className="text-accent lg:text-3xl text-2xl lg:mb-5 mb-2 hidden md:block">
                Welcome
              </h3>
              <h2 className="lg:text-[2.75rem] lg:leading-[3rem] text-3xl text-[#2c3722] lg:mb-7 mb-3 hidden md:block">
                Welcome to Figo Restaurant
              </h2>
              <p className="lg:text-lg lg:leading-[2rem] text-[#636465] md:mb-4 mb-2">
                Quickly predeminate standard compliants architecture and
                prospective internal or "organic" sources. Synergistically mesh
                quality quality vectors for one-to-one leadership.
              </p>
              <p className="lg:text-lg lg:block block md:hidden lg:leading-[2rem] text-[#636465] md:mb-4 mb-4">
                Quickly predeminate standard compliants architecture and
                prospective internal or "organic" sources. Synergistically mesh
                quality quality vectors for one-to-one leadership.
              </p>
              <Button caption={"Explore Our Story"} />
            </div>
          </section>
          <section className="min-h-[100vh] flex flex-col justify-center">
            <h3 className="text-accent lg:text-3xl lg:mb-5 mb-1 text-center mt-20 md:mt-0 text-2xl">
              Reason
            </h3>
            <h2 className="lg:text-4xl md:text-3xl text-4xl leading-[3rem] text-[#2c3722] mb-16 lg:mb-20 text-center">
              Why Choose Us?
            </h2>
            <div className="wraper-card-chooseUs grid md:grid-cols-3">
              <CardReason
                active={false}
                image={"/assets/menu.png"}
                caption={"Various Menus"}
                desc={
                  "Etim feugiat eleifend est, odo tempor vitaeVivamus maximus scelerique ipsum nec commodo."
                }
              />
              <CardReason
                active={true}
                image={"/assets/scooter.png"}
                caption={"Pocket Friendly Delivery"}
                desc={
                  "Etim feugiat eleifend est, odo tempor vitaeVivamus maximus scelerique ipsum nec commodo."
                }
              />
              <CardReason
                active={false}
                image={"/assets/voucher.png"}
                caption={"Best Offers"}
                desc={
                  "Etim feugiat eleifend est, odo tempor vitaeVivamus maximus scelerique ipsum nec commodo."
                }
              />
            </div>
          </section>
          <section className="min-h-[100vh] flex flex-col justify-center">
            <h3 className="text-accent md:text-3xl md:mb-5 mb-1 text-center mt-20 md:mt-0 text-2xl">
              Browse
            </h3>
            <h2 className="md:text-[2.75rem] text-4xl leading-[3rem] text-[#2c3722] mb-16 md:mb-20 text-center">
              Explore Our Menu
            </h2>
            <ExpoloreMenu />
          </section>
          <section className="min-h-[100vh] md:grid md:grid-cols-2 items-center">
            <h3 className="text-accent text-2xl mb-1 md:hidden text-center mt-24">
              History of Figo
            </h3>
            <h2 className="text-4xl text-[#2c3722] mb-7 md:hidden text-center">
              We Coock Tradition & Family Recipes
            </h2>
            <div className="illustration md:px-5 px-8 md:hidden">
              <Image
                src={illustrasiBurger}
                className="w-[100%] h-auto mb-6 md:mb-0"
              />
            </div>
            <div className="caption px-5">
              <h3 className="text-accent lg:text-3xl md:text-xl lg:mb-5 mb-3 hidden md:block">
                History of Figo
              </h3>
              <h2 className="lg:text-[2.75rem] lg:leading-[3rem] text-3xl text-[#2c3722] lg:mb-7 mb-3 hidden md:block">
                We Coock Tradition & Family Recipes
              </h2>
              <p className="lg:text-lg lg:leading-[2rem] text-[#636465] md:mb-4 mb-2">
                Quickly predeminate standard compliants architecture and
                prospective internal or "organic" sources. Synergistically mesh
                quality quality vectors for one-to-one leadership.
              </p>
              <p className="lg:text-lg lg:leading-[2rem] text-[#636465] md:mb-4 mb-4 md:hidden lg:block">
                Quickly predeminate standard compliants architecture and
                prospective internal or "organic" sources.
              </p>
              <Button caption={"Explore Our Story"} />
            </div>
            <div className="illustration md:px-5 px-8 hidden md:block">
              <Image
                src={illustrasiBurger}
                className="w-[100%] h-auto mb-6 md:mb-0"
              />
            </div>
          </section>
          <section className="min-h-[100vh] flex flex-col justify-center items-center">
            <h3 className="text-accent text-3xl lg:text-3xl md:text-2xl mb-5 lg:mb-5 md:mb-2 text-center mt-20 md:mt-0">
              Testimonials
            </h3>
            <h2 className="lg:text-[2.75rem] text-[2.75rem] lg:leading-[3rem] leading-[3rem] md:text-3xl text-[#2c3722] mb-16 lg:mb-16 md:mb-7 text-center">
              Food Lover's Say
            </h2>
            <Image
              src={illustrasitestimoni}
              width={1799}
              height={797}
              className="w-[100%] h-auto hidden sm:block"
            />
            <Image
              src={testimoniMobile1}
              width={670}
              height={370}
              className="w-[100%] sm:hidden"
            />
            <Image
              src={testimoniMobile2}
              width={670}
              height={370}
              className="w-[100%] sm:hidden"
            />
            <Image
              src={testimoniMobile3}
              width={670}
              height={370}
              className="w-[100%] sm:hidden"
            />
          </section>
          <section className="min-h-[100vh] flex flex-col justify-center">
            <h3 className="text-accent text-3xl lg:text-3xl md:text-2xl mb-5 lg:mb-5 md:mb-2 text-center mt-20 md:mt-0">
              News
            </h3>
            <h2 className="lg:text-[2.75rem] text-[2.75rem] lg:leading-[3rem] leading-[3rem] md:text-3xl text-[#2c3722] mb-16 lg:mb-16 md:mb-7 text-center">
              Lastest News
            </h2>
            <div className="wraper-news grid md:grid-cols-3">
              <CardNews
                image={"/assets/Food1.png"}
                caption={"Spain Appetizer"}
                desc={
                  "Quick of predominate and standards compliiants and an architectures."
                }
              />
              <CardNews
                image={"/assets/Food2.png"}
                caption={"Wine And Cheese"}
                desc={
                  "Quick of predominate and standards compliiants and an architectures."
                }
              />
              <CardNews
                image={"/assets/Food3.png"}
                caption={"Cups Of Coffee"}
                desc={
                  "Quick of predominate and standards compliiants and an architectures."
                }
              />
            </div>
          </section>
          <section className="subsvribe-section py-24 flex flex-col items-center">
            <h3 className="text-accent text-3xl mb-5 text-center">
              Subscription
            </h3>
            <h2 className="text-[2.75rem] leading-[3rem] text-[#2c3722] mb-7 text-center">
              Wants to Get Update?
            </h2>
            <div className="form-subscription flex lg:w-[34rem] sm-[25rem] w-[94%] my-16 rounded-full shadow-lg">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="py-2 px-6 rounded-l-full grow outline-none text-[#2c3722]"
              />
              <div className="rounded-r-full h-14 flex justify-center items-center px-1">
                <button className="active:brightness-90 rounded-full bg-main h-12 w-12 flex items-center justify-center">
                  <Image src={arrowIcon} className="h-6 w-auto" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="w-[100vw] flex justify-center py-24 bg-[#f8fbf5] left-0">
        <div className="inner-footer md:px-6 px-3 container grid grid-cols-8">
          <div className="footer-brand md:col-span-3 col-span-8 pr-10">
            <Image src={logo} width={231} className="h-12 w-auto" />
            <p className="lg:text-[1.4rem] md:text-lg text-[#636465] my-5">
              Don't miss to subscribe to our new feeds, Kindly fill the form
              bellow.
            </p>
            <div className="button-sosmed-wraper">
              <ButtonSosmed image={"/assets/sosmed/facebook.svg"} />
              <ButtonSosmed image={"/assets/sosmed/twitter.svg"} />
              <ButtonSosmed image={"/assets/sosmed/instagram.svg"} />
              <ButtonSosmed image={"/assets/sosmed/pinterest.png"} />
            </div>
          </div>
          <dev className="footer-desc md:col-span-5 col-span-8 grid grid-cols-3 mt-5 md:mt-5">
            <div className="Our-Menu lg:text-[1.4rem] md:text-lg">
              <h3>Our Menu</h3>
              <p className="mt-5 text-[#636465]">Lunch</p>
              <p className="mt-5 text-[#636465]">Dinner</p>
              <p className="mt-5 text-[#636465]">Catering</p>
            </div>
            <div className="Our-Menu lg:text-[1.4rem] md:text-lg">
              <h3>Links</h3>
              <p className="mt-5 text-[#636465]">About Us</p>
              <p className="mt-5 text-[#636465]">Terms Of Use</p>
              <p className="mt-5 text-[#636465]">Privacy Policy</p>
            </div>
            <div className="Our-Menu lg:text-[1.4rem] md:text-lg">
              <h3>Contact</h3>
              <p className="mt-5 text-[#636465]">+8801622010442</p>
              <p className="mt-5 text-[#636465]">info@restaurant.com</p>
              <p className="mt-5 text-[#636465]">Daudkandi, Comilla</p>
            </div>
          </dev>
        </div>
      </footer>
    </>
  );
}

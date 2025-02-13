import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
// import profilepic from "../../public/images/profile/laravelexpert.webp";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import LogoAnimation from "@/components/LogoAnimation";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <Head>
        {/* <title>Laravel Developer</title>
        <meta name="description" content="Looking for an Laravel developer? Explore top-notch web development services with a focus on Laravel, Vue.js, and more. Enhance your digital presence today!" />
        <meta name="keyword" content="Laravel developer, web development services, laravel developer, Laravel framework, Vue.js development, responsive web design" /> */}
      </Head>
      <NextSeo

      title="Laravel Developer"
      description="Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers."
      canonical="https://laraveldeveloper.online/"
       openGraph={{
        url: 'https://laraveldeveloper.online/',
        title: 'Laravel Developer',
        description: 'Explore top-notch web development with Laravel, Vue.js, and more. Elevate your online presence with top-tier developers.',
        images: [
          {
            url: 'https://laraveldeveloper.online/images/laravelexpert.webp',
            width: 1200,
            height: 640,
            alt: 'Laravel Developer',
            type: 'image/jpeg',
          },
        ],
        siteName: 'Laravel Developer',
      }}

      />
      <TransitionEffect />
      <main className="flex items-center text-black w-full min-h-screen dark:text-white ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col lg:text-center">
            <div className="w-1/2 md:w-full">
              {/* <Image
                src={profilepic}
                alt="Laravel Developer Online"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              /> */}
              <LogoAnimation />
            </div>
            <div className="w-1/2 flex flex-col item-center self-center lg:w-full">
              <AnimatedText
                text="Coding the Future: Empowering Innovation as a Full Stack"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Empower innovation with a versatile Full Stack Developer, adept in front-end finesse and back-end robustness. From concept to execution, elevate your digital presence with expertise in Laravel, RestAPI, VueJS, ReactJS,  NextJS and more.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/JIGAR_PATEL_10_YEARS_PHP_DEVELOPER.pdf"
                  target={"_black"}
                  className="flex items-center bg-black text-white p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-white hover:text-black
                  border-2 border-solid border-transparent hover:border-black
                   dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white
                   hover:dark:border-white
                   md:p-2 md:px-4 mD:text-base
                  "
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:tp.jigar@gmail.com"
                  target={"_black"}
                  className="ml-4 text-lg font-medium capitalize text-black underline dark:text-white md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 ms:hidden">
          <Image src={lightBulb} alt="Laravel Developer" className="w-full h-auto " />
        </div>
      </main>
    </>
  );
}

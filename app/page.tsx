"use client";

import Image from "next/image";
import { Poppins, Inter, Roboto_Mono } from "next/font/google";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikon hamburger & close

// Import font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-3 shadow-md bg-white z-50">
        <h1 className="text-xl font-bold text-[#FFE074]">BBDB</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Hamburger Menu (mobile) */}
        <button
          className="md:hidden p-2 rounded-md text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md p-5 md:hidden z-40">
          <ul className="flex flex-col space-y-4 font-semibold">
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[650px] flex items-center mt-[65px] 
                      bg-white md:bg-[url('/img/6.png')] md:bg-cover md:bg-center">
        <div className="relative z-20 px-6 md:pl-30 max-w-2xl">
          <h3 className={`${robotoMono.className} text-6xl md:text-7xl font-bold`}>
            Hello, It's <span className="text-[#ffd12a]">Beabadoobee</span>
          </h3>

          <p className={`${poppins.className} text-lg md:text-2xl`}>
            Musician Artist
          </p>

          <p className={`${inter.className} max-w-xl mt-4 text-gray-800 text-sm md:text-base`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            aliquam dolor cumque facere assumenda voluptates accusantium natus quasi.
          </p>

          {/* Info Box */}
          <div className="mt-6 flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
            <div>
              <p className="text-[#ffd12a] font-bold">Most Streams Musics</p>
              <p className="text-gray-600">Death Bed - 1.89B</p>
            </div>
            <div>
              <p className="text-[#ffd12a] font-bold">Awards</p>
              <p className="text-gray-600">
                Gold Derby Music Award for Best New Artist (2025).
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-[#FFE074] text-black font-semibold px-6 py-3 rounded-md hover:bg-black hover:text-[#FFE074] transition">
              Songs
            </button>
            <button className="bg-black text-[#FFE074] font-semibold px-6 py-3 rounded-md hover:bg-[#FFE074] hover:text-black transition">
              Arts
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="relative z-30 px-6 md:px-60 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Card 1 */}
        <div className="flex items-center justify-between bg-black text-white shadow-lg rounded-2xl px-6 py-5 hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#FFE074] text-white rounded-full">
              🎵
            </div>
            <div>
              <h3 className="text-lg font-semibold">Songs</h3>
              <p className="text-gray-400 text-sm">Created websites for you</p>
            </div>
          </div>
          <span className="text-gray-400">→</span>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-between bg-[#FFE074] shadow-lg rounded-2xl px-6 py-5 hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
              👥
            </div>
            <div>
              <h3 className="text-lg font-semibold">Partners</h3>
              <p className="text-gray-500 text-sm">Awesome photo & video</p>
            </div>
          </div>
          <span className="text-gray-400">→</span>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-between bg-black text-white shadow-lg rounded-2xl px-6 py-5 hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#FFE074] text-white rounded-full">
              📓
            </div>
            <div>
              <h3 className="text-lg font-semibold">Albums</h3>
              <p className="text-gray-400 text-sm">You can hire me now</p>
            </div>
          </div>
          <span className="text-gray-400">→</span>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full px-5 md:px-50 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 bg-[#FFE074] rounded-[50%] -z-10 top-10"></div>
          <Image
            src="/img/7.png"
            alt="Profile"
            width={400}
            height={400}
            className="relative rounded-lg object-contain"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className={`${robotoMono.className} text-3xl font-bold`}>
            What's the social media of <span className="text-[#ffd12a]">Beabadoobee?</span> <br />
          </h2>
          <p className={`${inter.className} text-gray-600 mt-4 leading-relaxed`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, magnam.
            Iure ipsa reprehenderit officiis earum similique, ad sint, non laudantium
            quibusdam dicta, cum excepturi? Ex officiis commodi sapiente cum ratione.
          </p>

          <p className="mt-6 font-semibold">You Can Follow Her Here:</p>
          <div className="flex space-x-6 mt-3">
            <a href="https://instagram.com">
              <Image src="/img/ig.png" alt="Instagram" width={40} height={40} />
            </a>
            <a href="https://x.com">
              <Image src="/img/X.png" alt="X" width={40} height={40} />
            </a>
            <a href="https://spotify.com">
              <Image src="/img/spotify.png" alt="Spotify" width={40} height={40} />
            </a>
            <a href="https://music.apple.com">
              <Image src="/img/music.png" alt="Apple Music" width={40} height={40} />
            </a>
          </div>
        </div>
      </section>

      {/* My Design Skills Section */}
      <section className="w-full px-6 md:px-60 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div>
          <h2 className={`${robotoMono.className} text-2xl font-bold mb-4`}>
            What My Design Skills Included</h2>
          <p className="text-gray-600 mb-6">
            These are the skills we live by in everything we do. Every story we tell,
            every brand we build, and every interaction we create must not only look
            beautiful.
          </p>

          {/* Progress Bars */}
          <div className="mb-4">
            <p className="font-semibold">Photoshop</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full w-[85%]"></div>
            </div>
            <span className="text-sm text-gray-600">85%</span>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Illustrator</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full w-[90%]"></div>
            </div>
            <span className="text-sm text-gray-600">90%</span>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Sketch</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full w-[70%]"></div>
            </div>
            <span className="text-sm text-gray-600">70%</span>
          </div>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-2xl flex flex-col items-center justify-center p-6">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-3">
              🎨
            </div>
            <p className="font-semibold">UI/UX Design</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl flex flex-col items-center justify-center p-6">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-3">
              🖌️
            </div>
            <p className="font-semibold">Graphic Design</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl flex flex-col items-center justify-center p-6">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-3">
              🎞️
            </div>
            <p className="font-semibold">Motion Design</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl flex flex-col items-center justify-center p-6">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-3">
              📷
            </div>
            <p className="font-semibold">Photo Retouch</p>
          </div>
        </div>
      </section>
    </div>
  );
}

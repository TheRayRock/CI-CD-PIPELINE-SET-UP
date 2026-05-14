import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-between px-20 py-24 bg-gray-100">
      <div>
        <h1 className="text-6xl font-bold leading-tight text-gray-800">
          Lessons and insights <br />
          <span className="text-green-500">from 8 years</span>
        </h1>

        <p className="mt-6 text-gray-500">
          Where to grow your business as a photographer: site or social media?
        </p>

        <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-md">
          Register
        </button>
      </div>

      <Image src="/Illustration.svg" alt="Hero" width={450} height={450} />
    </section>
  );
}
4;

import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";

export default function Home() {
  const dispatch = useDispatch();
  const numberArr = [
    { id: 0, number: 0 },
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 },
    { id: 7, number: 7 },
    { id: 8, number: 8 },
    { id: 9, number: 9 },
  ];
  const [phase, setPhase] = useState("numberpool");
  const [input, setInput] = useState("");
  const [numberPool, setNumberPool] = useState([]);
  const [luckyNumber, setLuckyNumber] = useState([]);
  const [showNumberPool, setShowNumberPool] = useState(true);
  const [showLuckyNumber, setShowLuckyNumber] = useState(false);
  const [regen, setRegen] = useState(false);
  const [allLuckyNumber, setAllLuckyNumber] = useState([]);

  const addNumber = (e) => {
    e.preventDefault();
    if (input.length == 0) {
      alert("please enter a number");
    }
    if (input == "") false;
    numberPool.push(input);
    setInput("");
  };

  const generateLuckyNumber = (e) => {
    e.preventDefault();
    var random = numberPool.sort(() => Math.random() - 0.5);
    console.log(random);
    setLuckyNumber(random);
    setShowNumberPool(false);
    setShowLuckyNumber(true);
  };

  const regenerate = (e) => {
    // setLuckyNumber([]);
    // var random = numberPool.sort(() => Math.random() - 0.5);
    // setLuckyNumber(random);

    // setShowNumberPool(true);
    // setShowLuckyNumber(false);
    setRegen(true);
  };

  const reset = (e) => {
    setNumberPool([]);
    setLuckyNumber([]);
    setShowNumberPool(true);
    setShowLuckyNumber(false);
  };

  useEffect(() => {
    if (regen) {
      setLuckyNumber([]);
      var random = numberPool.sort(() => Math.random() - 0.5);
      setLuckyNumber(random);
      setShowNumberPool(true);
      setShowLuckyNumber(false);
      setRegen(false);
    }
  }, [regen]);

  const generateAll = () => {
    var newLuck = Math.floor(Math.random() * 10000);
    var newLuckToArray = newLuck.toString().split("");
    console.log(newLuckToArray);
    setShowLuckyNumber(true);
    setLuckyNumber(newLuckToArray);
    // if (newLuckToArray.length == 4) {
    //   let newLuckyNumber = "";
    //   newLuckyNumber.concat(newLuckToArray);

    //   setLuckyNumber(newLuckyNumber);
    // }
  };
  console.log("pool", luckyNumber);

  return (
    <div className="bg-black relative text-white">
      <Head>
        <title>CNY Lucky Draw</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col absolute z-50 w-full h-full items-center justify-center">
        <main className="w-full lg:w-1/2 p-4">
          <h1 className="text-3xl lg:text-5xl font-bold text-center my-10">
            Rabbit Year Lucky Number
          </h1>
          <div className="flex items-center justify-center">
            <div
              className={`px-5 my-10 grid grid-flow-row-dense gap-10 ${
                luckyNumber?.length == 0 ? "grid-cols-2" : "grid-cols-4"
              }`}
            >
              {showNumberPool &&
                numberPool?.map((number, index) => (
                  <>
                    <Fade bottom>
                      <div
                        key={index}
                        className="bg-red-600 w-16  h-16 flex items-center justify-center leading-tight rounded-full shadow-lg shadow-white"
                      >
                        <h2 className="text-lg font-bold text-center">
                          {number}
                        </h2>
                      </div>
                    </Fade>
                  </>
                ))}

              {showLuckyNumber &&
                luckyNumber.map((number, index) => (
                  <>
                    <Fade bottom>
                      <div
                        key={index}
                        className="bg-red-600 w-16  h-16 flex items-center justify-center leading-tight rounded-full shadow-lg shadow-white"
                      >
                        <h2 className="text-lg font-bold text-center">
                          {number}
                        </h2>
                      </div>
                    </Fade>
                  </>
                ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Number"
              min={0}
              max={9}
              type="number"
              className={` focus:shadow-2xl focus:shadow-red-500 font-bold tracking-widest bg-gradient-to-l text-gray-800 from-[#D2AF26] p-2 px-5 h-full w-full flex-grow rounded flex-shrink rounded-l-md focus:outline-none
           `}
            />
            {luckyNumber.length == 0 ? (
              <>
                {numberPool.length != 4 ? (
                  <button
                    disabled={input.length > 1}
                    onClick={addNumber}
                    className="bg-[#E50914] w-full rounded-lg p-2 font-bold mt-4 hover:opacity-50 outline-none"
                  >
                    Add Number
                  </button>
                ) : (
                  <button
                    onClick={generateLuckyNumber}
                    className="bg-[#E50914] w-full rounded-lg p-2 font-bold mt-4 hover:opacity-50 outline-none"
                  >
                    Generate Lucky Number
                  </button>
                )}
              </>
            ) : (
              <>
                <button
                  onClick={regenerate}
                  className="bg-[#E50914] w-full rounded-lg p-2 font-bold mt-4 hover:opacity-50 outline-none"
                >
                  ReGenerate
                </button>
                <button
                  onClick={reset}
                  className="bg-white text-[#E50914] w-full rounded-lg p-2 font-bold mt-4 hover:opacity-50 outline-none"
                >
                  Reset
                </button>
              </>
            )}
          </div>
        </main>
        <p>
          Dunno Your Lucky Number <span onClick={generateAll}>click me</span>
        </p>
      </div>
      <div className="w-full h-screen">
        <Image
          src={"/image/cny2.webp"}
          className=" object-cover"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
    </div>
  );
}

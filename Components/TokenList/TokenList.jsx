import Image from "next/image";
import images from "./../../assets";
import { TokenListPortal } from "./index";

const TokenList = ({
  tokenDate,
  setOpenTokenBox,
  tokenModalCoordinates: {
    parentCHeight,
    parentCLeftCoord,
    parentCTopCoord,
    parentCWidth,
  },
}) => {
  const data = [1, 2, 3, 4, 5];

  const finalTopCoord = parentCTopCoord + parentCHeight;
  return (
    <section className="grid justify-center max-w-3xl grid-cols-12 gap-2">
      {typeof window === "object" ? (
        <TokenListPortal>
          <section
            style={{ top: `${finalTopCoord}px`, left: `${parentCLeftCoord}px` }}
            className="absolute top-0 right-0 grid items-center justify-center max-w-xs grid-cols-12 gap-2 mx-auto"
          >
            <div className="col-span-8">Tokenlist</div>
            <div className="col-span-4">
              <Image
                src={images.close}
                height={50}
                width={50}
                alt="Close"
                className="cursor-pointer"
                onClick={() => setOpenTokenBox(false)}
              />
            </div>
            {/* <div className="col-span-12"> */}
            <div className="grid items-center grid-cols-12 col-span-12 gap-2">
              {data.map((property, idx) => (
                <>
                  {/* <div className="grid grid-cols-12 col-span-12 gap-2 pb-2 mt-2 border-0 border-b-2 border-solid"> */}
                  <div
                    className="col-span-3 font-bold bg-[#C7C7C7] text-base rounded-lg px-2 py-1"
                    key={`symbol_${idx}`}
                  >
                    Symb
                  </div>
                  <div
                    className="col-span-4"
                    key={`qty_${idx}`}
                  >
                    Qty
                  </div>
                  <div
                    className="col-span-5"
                    key={`name_${idx}`}
                  >
                    Name
                  </div>
                  <div
                    className="border-0 border-b-2 border-solid col-span-full"
                    key={`divider_${idx}`}
                  ></div>
                </>
                // </div>
              ))}
            </div>
          </section>
        </TokenListPortal>
      ) : null}
    </section>
  );
};

export default TokenList;

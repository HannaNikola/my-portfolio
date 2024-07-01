import Link from 'next/link';


export const LinkPortfolio = () => {
    return (
      <div className=" button-styles w-48 mb-6 px-10 ">
        <Link className="flex justify-center" href="/portfolio">
          View Portfolio
        </Link>
      </div>
    );
};

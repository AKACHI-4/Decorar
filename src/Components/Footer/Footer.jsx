function Footer() {
  return (
    <footer className="border-t-2 border-gray-300 border-dashed">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:p-8 lg:p-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center justify-center">
              <span className="self-center text-3xl text-gray-300 font-semibold font-mono whitespace-nowrap">
                DecorAR
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-around mt-4 md:mt-0">
            <div className="mb-6 md:mb-0 ml-4">
              <h2 className="mb-2 text-lg font-semibold text-gray-400 uppercase">
                Follow us
              </h2>
              <hr className="my-5 w-20 ml-1 md:hidden" />
              <ul className="text-gray-500 font-medium">
                <p>dotDEVs</p>
              </ul>
            </div>
            <div className="ml-4">
              <h2 className="mb-2 text-lg font-semibold text-gray-400 uppercase">
                Address
              </h2>
              <hr className="my-5 w-20 ml-[1.5] md:hidden" />
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Dehradun Uttarakhand India <br />
                248001
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-xl text-center justify-center dark:text-gray-400 text-white">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Decorar
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

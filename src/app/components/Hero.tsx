import Link from "next/link";

export function Hero() {
  return (
    <main className="flex px-10 py-5">
      <div className="w-[30%] max-w-[30%]">
        <h2 className="font-bold text-4xl">Password Generator</h2>
        <p>
          A simple password generator with a simple feature. Generate random
          passwords with ease and no stress at all.
        </p>
        <div className="mt-7">
          <Link
            className="btn bg-green-400 hover:bg-green-500"
            href="https://github.com/tintinthedev"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
            Author's GitHub
          </Link>
        </div>
      </div>

      <div className="w-[70%] max-w-[70%] flex items-center justify-center">
        <label className="input input-bordered flex items-center gap-2 rounded-sm">
          <input type="text" placeholder="Password" readOnly />
        </label>
        <button className="btn bg-green-400 hover:bg-rgeen-500 ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30"
          >
            <path d="M 18.5 3 C 13.806 3 10 6.806 10 11.5 C 10 12.542294 10.19765 13.536204 10.541016 14.458984 L 3 22 L 3 27 L 8 27 L 8 24 L 11 24 L 11 21 L 14 21 L 15.541016 19.458984 C 16.463796 19.80235 17.457706 20 18.5 20 C 23.194 20 27 16.194 27 11.5 C 27 6.806 23.194 3 18.5 3 z M 20.5 7 C 21.881 7 23 8.119 23 9.5 C 23 10.881 21.881 12 20.5 12 C 19.119 12 18 10.881 18 9.5 C 18 8.119 19.119 7 20.5 7 z"></path>
          </svg>
          Generate password
        </button>
      </div>
    </main>
  );
}

import Section from "../Section";

export default function Footer() {
  return (
    <footer>
      <Section bgColor="lightest">
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
              aria-label="Brand"
            >
              Look-a-Book
            </a>
          </div>

          <div className="mt-3">
            <p className="text-gray-500">
              Made by{" "}
              <a
                className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                href="https://richnicholls.co.uk"
              >
                Rich Nicholls
              </a>
              , Samuel and Harriet.
            </p>
            <p className="text-gray-500">
              © Rich Nicholls 2024. All rights reserved.
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
}

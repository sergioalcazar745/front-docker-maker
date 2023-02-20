import { Modal } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { useState } from 'react'
import { Checkbox, Label, TextInput } from 'flowbite-react/lib/esm/components'

const Container = () => {
  const [modal, setModal] = useState(false)

  const onClick = () => {
    setModal(!modal)
  }

  return (
    <div className="px-2 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold dark:text-white my-8 mb-">
        Container
      </h1>
      {/* <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        New
      </button> */}
      <Button onClick={onClick} color='success' className={"mb-5"}>New</Button>
      <ul className="w-full divide-y divide-gray-100 dark:divide-gray-700 rounded">
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={'30px'}
                className="pt-3"
              >
                <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0 mt-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Nombre contenedor
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                Imagen
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {/* <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={'30px'}
                className="hover:bg-gray-600 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                ></path>
              </svg> */}
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={'30px'}
                className="hover:bg-gray-600 cursor-pointer rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
          </div>
        </li>
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={'30px'}
                className="pt-3"
              >
                <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0 mt-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Nombre contenedor
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                Imagen
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {/* <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={'30px'}
                className="hover:bg-gray-600 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                ></path>
              </svg> */}
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={'30px'}
                className="hover:bg-gray-600 cursor-pointer rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
          </div>
        </li>
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={'30px'}
                className="pt-3"
              >
                <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0 mt-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Nombre contenedor
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                Imagen
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {/* <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={'30px'}
                className="hover:bg-gray-600 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                ></path>
              </svg> */}
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={'30px'}
                className="hover:bg-gray-600 cursor-pointer rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
          </div>
        </li>
      </ul>
      <Modal show={modal} size="md" popup={true} onClose={onClick}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required={true} />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="/modal"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button>Log in to your account</Button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{' '}
                <a
                  href="/modal"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default Container

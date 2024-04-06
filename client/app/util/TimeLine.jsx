export default function Timeline() {
    return (
      <main className="h-screen overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="card w-full bg-base-100 shadow-xl mt-10 mb-10">
          <button type="button" aria-label="Close" className="uk-close absolute top-2 right-2 z-10"></button>
          <div className="flex-shrink-0 group block">
            <div className="flex items-center">
              <img
                className="inline-block flex-shrink-0 w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <div className="ms-3">
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Mark Wanner
                </h3>
                <p className="text-sm font-medium text-gray-400">mark@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="text-base">
              If a dog chews shoes whose dog chews shoes whose dog chews shoes whose
              dog chews shoes whose dog chews shoes whose shoes does he choose?
              If a dog chews shoes whose dog chews shoes whose dog chews shoes whose
              dog chews shoes whose dog chews shoes whose shoes does he choose?
              If a dog chews shoes whose dog chews shoes whose dog chews shoes whose
              dog chews shoes whose dog chews shoes whose shoes does he choose?
              If a dog chews shoes whose dog chews shoes whose dog chews shoes whose
              dog chews shoes whose dog chews shoes whose shoes does he choose?
            </p>
          </div>
          <figure className="mb-4">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
      </main>
    );
  }
  
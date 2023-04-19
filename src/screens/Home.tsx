export const Home = () => {
    return (
        <div className="">
            <h1 className='mt-4'>How2LearnCodeOnline</h1>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Commencer Maintenant !</button>
            <div className="mt-6 mb-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Code Image" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Parfait</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Apprenez correctement</a>
                        <p className="mt-2 text-slate-500">Arrêtez de suivre des vidéos en recopiant bêtement le code, et apprennez correctement !</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Ide = () => {
    return (
        <div className="mt-8">
            <h2 className="font-bold mb-8 text-blue-500">Les IDE</h2>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/ij.png" alt="Modern building architecture" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ide Java</div>
                        <a href="https://www.jetbrains.com/fr-fr/idea/download/#section=windows" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Intellij Idea</a>
                        <p className="mt-2 text-slate-500">Excellent Ide combinant style, ergonomie, facilité d'utilisation et bien plus. Aujourd'hui Intellij Idea détrone largement NetBeans ainsi que Eclipse. Deux version vous sont disposé: IJ Community qui est gratuit et IJ Ultimate qui est payant.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/clion.png" alt="Modern building architecture" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ide C++</div>
                        <a href="https://www.jetbrains.com/fr-fr/idea/download/#section=windows" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">CLion</a>
                        <p className="mt-2 text-slate-500">Ide basé sous Intellij Idea, qui à été adapté au C++. C'est la version "premium" de Visual Studio. CLion est payant, mais est très pratique. Si vous voulez un IDE C++ Gratuit, téléchargez Visual Studio. </p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/vscode.png" alt="Modern building architecture" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ide dit "Web"</div>
                        <a href="https://www.jetbrains.com/fr-fr/idea/download/#section=windows" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Visual Studio Code</a>
                        <p className="mt-2 text-slate-500">Du même style que Visual Studio, VsCode en ont déjà conquis plus d'un ! C'est gratuit, bourée de plugins; themes. Si vous avez les moyens je vous conseille d'acheter Intellij Idea qui est aussi un Ide pour le Web, mais malheuresement vous devez avec la version "Ultimate" de Ij pour faire du web.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/pycharm.jpeg" alt="Modern building architecture" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ide Python</div>
                        <a href="https://www.jetbrains.com/fr-fr/idea/download/#section=windows" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">PyCharm</a>
                        <p className="mt-2 text-slate-500">Basée lui aussi sur Intellij Idea, est un Ide combinant style, ergonomie, facilité d'utilisation et bien plus. Avec un compilateur performant, cette ide vous fera gagner du temps, en plus il est 100% gratuit :) !</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
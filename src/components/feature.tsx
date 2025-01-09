import Image from 'next/image'

export default function Feature() {
    return (
        <div className="overflow-hidden bg-white pt-24 sm:pt-20 pb-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-indigo-600">CNN News Central</h2>
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Jacob Silverman on Rising Executive Threats and Proactive Security Strategies
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                        </div>
                    </div>
                    <Image
                        alt="Product screenshot"
                        src="https://media-cdn.kroll.com/jssmedia/kroll-images/insights/final-jacob-silverman-interviewed-by-sara-sidner-home-page-feature.png?h=350&iar=0&w=670&mw=640"
                        width={2432}
                        height={1442}
                        className="w-[30rem] max-w-none rounded-lg shadow-xl ring-1 ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="btn btn-wide">More on CNN update</button>
                </div>
            </div>
        </div>
    )
}

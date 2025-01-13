import React from 'react'

import Gradient from "../../../../public/assets/Gradient"
import Images from "../../../../public/assets/imgs.png"

const reviewSection = () => {
  return (
    <div>
        <div className="absolute inset-1 -top-20 -right-20 hidden lg:block  justify-center">
                            <Image
                                src={Gradient}
                                alt="hero"
                                width={900}
                                height={563.16}
                                className="flex-shrink-0 mt-36 w-full h-auto lg:mt-0"
                            />
                            <div className="absolute px-10 bottom-[-50px] left-20 bg-white p-4 rounded-full shadow-lg shadow-orange-500/20 flex items-center">
                                <Image
                                    src={Images}
                                    width={80}
                                    height={80}
                                    alt="User"
                                    className="rounded-full"
                                />
                                <span className="ml-2 text-gray-600">60 Million User Use This App</span>
                            </div>
                        </div>
    </div>
  )
}

export default reviewSection
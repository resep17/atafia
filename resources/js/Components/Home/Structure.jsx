const Structure = () => {
    return (
        <div class="bg-gray-100 p-10">
            <div class="flex flex-col items-center space-y-6">
                {/* <!-- Direktur --> */}
                <div class="text-white bg-blue-600 px-6 py-3 rounded-xl shadow-lg font-bold">
                    DIREKTUR
                </div>

                {/* <!-- Garis ke horizontal --> */}
                <div class="line-vertical"></div>

                {/* <!-- Horizontal Line --> */}
                <div class="w-full max-w-5xl relative h-6">
                    <div class="absolute top-2 left-0 right-0 h-0.5 bg-blue-600"></div>

                    {/* <!-- Garis vertikal ke setiap divisi --> */}
                    <div class="absolute top-0 left-[8%] w-0.5 h-6 bg-blue-600"></div>
                    <div class="absolute top-0 left-[26%] w-0.5 h-6 bg-blue-600"></div>
                    <div class="absolute top-0 left-[50%] w-0.5 h-6 bg-blue-600"></div>
                    <div class="absolute top-0 left-[74%] w-0.5 h-6 bg-blue-600"></div>
                    <div class="absolute top-0 left-[92%] w-0.5 h-6 bg-blue-600"></div>
                </div>

                {/* <!-- HRD, GA, Business Dev, Finance, Logistic --> */}
                <div class="flex justify-center max-w-5xl space-x-10 items-start">
                    {/* <!-- HRD --> */}
                    <div class="flex flex-col items-center space-y-2 w-32">
                        <div class="text-white bg-blue-500 px-4 py-2 rounded-lg shadow">
                            HRD
                        </div>
                        <div class="line-vertical"></div>
                        <div class="flex space-x-2">
                            <div class="text-white bg-blue-400 px-2 py-1 rounded shadow">
                                FIELD
                            </div>
                            <div class="text-white bg-blue-400 px-2 py-1 rounded shadow">
                                HO
                            </div>
                        </div>
                    </div>

                    {/* <!-- GA --> */}
                    <div class="flex flex-col items-center space-y-2 w-32">
                        <div class="text-white bg-blue-500 px-4 py-2 rounded-lg shadow">
                            GA
                        </div>
                        <div class="line-vertical"></div>
                        <div class="flex space-x-2">
                            <div class="text-white bg-blue-400 px-2 py-1 rounded shadow">
                                FIELD
                            </div>
                            <div class="text-white bg-blue-400 px-2 py-1 rounded shadow">
                                HO
                            </div>
                        </div>
                    </div>

                    {/* <!-- Business Development --> */}
                    <div class="flex flex-col items-center space-y-2 w-32">
                        <div class="text-white bg-blue-500 px-4 py-2 rounded-lg shadow text-center">
                            BUSINESS DEV.
                        </div>
                        <div class="line-vertical"></div>
                        <div class="text-white bg-blue-400 px-2 py-1 rounded shadow">
                            PROJECT DEV.
                        </div>
                        <div class="line-vertical"></div>
                        <div class="text-white bg-blue-300 px-2 py-1 rounded shadow">
                            ASSESSMENT
                        </div>
                    </div>

                    {/* <!-- Finance --> */}
                    <div class="flex flex-col items-center space-y-2 w-32">
                        <div class="text-white bg-blue-500 px-4 py-2 rounded-lg shadow">
                            FINANCE
                        </div>
                        <div class="line-vertical"></div>
                        <div class="flex space-x-2">
                            <div class="text-white bg-blue-400 px-2 py-1 rounded shadow">
                                ACCOUNTING
                            </div>
                            <div class="text-white bg-blue-400 px-2 py-1 rounded shadow">
                                TAX
                            </div>
                        </div>
                    </div>

                    {/* <!-- Logistic --> */}
                    <div class="flex flex-col items-center space-y-2 w-32">
                        <div class="text-white bg-blue-500 px-4 py-2 rounded-lg shadow">
                            LOGISTIC
                        </div>
                        <div class="line-vertical"></div>
                        <div class="flex space-x-2">
                            <div class="text-white bg-blue-400 px-2 py-1 rounded shadow">
                                TRAFFIC
                            </div>
                            <div class="text-white bg-blue-400 px-2 py-1 rounded shadow">
                                DOCUMENTING
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Structure;

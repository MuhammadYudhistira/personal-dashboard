import React from "react";

const LoginPage = () => {
    return (
        <>
            <div
                className="min-h-screen flex items-center justify-center p-4 text-[#bf988a]"
                style={{
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: "#031c26",
                    backgroundImage:
                        "radial-gradient(circle at top right, rgba(36, 124, 109, 0.2), transparent 40%), radial-gradient(circle at bottom left, rgba(191, 152, 138, 0.1), transparent 50%)",
                }}
            >
                <div className="w-full max-w-md mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1
                            className="text-4xl text-white"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                            }}
                        >
                            Selamat Datang
                        </h1>
                        <p className="text-[#bf988a]/80 mt-2">
                            Masuk untuk melanjutkan ke dasbor Anda.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="bg-[#0e2a36]/50 border border-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
                        <form className="space-y-6">
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-[#bf988a]/90"
                                >
                                    Alamat Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="block w-full rounded-lg py-3 px-4 bg-[#0e2a36] border border-[#bf988a30] text-[#bf988a] placeholder-[#bf988a70] focus:outline-none focus:border-[#247c6d] focus:ring-2 focus:ring-[#247c6d]/50 transition"
                                        placeholder="anda@email.com"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-[#bf988a]/90"
                                    >
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-medium text-[#bf988a]/70 hover:text-[#247c6d] transition-colors"
                                        >
                                            Lupa password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="block w-full rounded-lg py-3 px-4 bg-[#0e2a36] border border-[#bf988a30] text-[#bf988a] placeholder-[#bf988a70] focus:outline-none focus:border-[#247c6d] focus:ring-2 focus:ring-[#247c6d]/50 transition"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#247c6d] hover:bg-[#1a594d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#031c26] focus:ring-[#247c6d] transition-all duration-300"
                                >
                                    Masuk
                                </button>
                            </div>
                        </form>

                        {/* Footer */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-[#bf988a]/70">
                                Belum punya akun?
                                <a
                                    href="#"
                                    className="font-bold text-[#bf988a] hover:text-[#247c6d] transition-colors"
                                >
                                    {" "}
                                    Daftar di sini
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;

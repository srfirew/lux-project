export const metadata = {
  title: "Lux - Login",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="font-nacelle text-3xl font-semibold text-black md:text-4xl">
              Olá, novamente!
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-500"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Seu e-mail"
                  required
                />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between gap-3">
                  <label
                    className="block text-sm font-medium text-indigo-500"
                    htmlFor="password"
                  >
                    Senha
                  </label>
                  <Link
                    className="text-sm text-gray-600 hover:underline"
                    href="/reset-password"
                  >
                    Esqueceu?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Sua senha"
                  required
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                Logar
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-500">
            Não possui uma conta?{" "}
            <Link className="font-bold text-indigo-500" href="/signup">
              Registrar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

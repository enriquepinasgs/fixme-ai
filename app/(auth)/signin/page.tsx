import SignInForm from "../_components/login-form";

export default function LoginPage() {
  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-16">
      <div className="flex items-center gap-6">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-7xl">
          Fixme.<span className="text-primary">ai</span>
        </h1>
      </div>
      <SignInForm />
    </main>
  );
}

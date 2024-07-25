export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const email: string | undefined =
    typeof searchParams.email === "string" ? searchParams.email : undefined;
  return (
    <main className="flex w-full container m-auto h-screen justify-center items-center">
      <div>
        A confirmation email has been sent to {email}. Check your inbox!
      </div>
    </main>
  );
}

import Link from "next/link";

const CustomErrorPage = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Back to home.</Link>
    </>
  );
};

export default CustomErrorPage;

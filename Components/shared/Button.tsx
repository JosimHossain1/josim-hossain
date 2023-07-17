import Link from "next/link";

const Button = (props: any) => {
  const { text, bg } = props;
  return (
    <Link href="/login">
      <button
        type="button"
        className={` ${bg}  font-semibold rounded-lg text-md px-4 py-2 text-center`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;

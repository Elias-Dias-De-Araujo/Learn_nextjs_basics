import { useRouter } from "next/router";

export default function callWithAutorization(Component) {
  const isLoged = true;

  return (props) => {
    if (typeof window === "undefined") {
      return null;
    }
    const router = useRouter();
    if (isLoged) {
      return <Component {...props} />;
    }
    router.push("/login");
    return null;
  };
}

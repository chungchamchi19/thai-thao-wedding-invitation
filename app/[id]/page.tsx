import MetaTags from "../components/MetaTag";
import Home from "../page";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <>
      <MetaTags />
      <Home name={decodeURIComponent(id) || "My Friend"}></Home>
    </>
  );
};

export default Page;

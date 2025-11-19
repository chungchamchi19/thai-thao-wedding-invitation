import Invitation from "../components/Invitation";
import MetaTags from "../components/MetaTag";

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
      <Invitation name={decodeURIComponent(id) || "My Friend"}></Invitation>
    </>
  );
};

export default Page;

import Invitation from "../components/Invitation";
import MetaTags from "../components/MetaTag";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const name = decodeURIComponent(id) || "bạn";
  return (
    <>
      <MetaTags
        title={`
        A Special Invitation for ${name}
        `}
        description={`Dear ${name}, we would be so happy if you could join us on our special day. Open this to see a little piece of our happiness!`}
      />
      <Invitation name={decodeURIComponent(id) || "bạn"}></Invitation>
    </>
  );
};

export default Page;

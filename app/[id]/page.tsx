import Invitation from "../components/Invitation";
import MetaTags from "../components/MetaTag";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const name = decodeURIComponent(id) || "Bạn";
  return (
    <>
      <MetaTags
        title={`
        Thiệp mời đặc biệt gửi đến ${name}
        `}
        description={`Dear ${name}, hãy mở thiệp để xem một phần nhỏ niềm hạnh phúc của chúng mình nhé!`}
      />
      <Invitation name={decodeURIComponent(id) || "Bạn"}></Invitation>
    </>
  );
};

export default Page;

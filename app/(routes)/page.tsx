import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard/Billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const Home = async () => {
  const billboard = await getBillboard("364171c0-3008-438a-b754-f11bc9058dcc");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default Home;

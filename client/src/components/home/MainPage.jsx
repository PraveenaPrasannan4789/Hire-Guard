import Review from "./Review";
import ManageJob from "./manageJob";
const MainPage = () => {
  return (
    <>
      <section>
        <ManageJob />
      </section>
      <section>
        <Review />
      </section>
    </>
  );
};

export default MainPage;

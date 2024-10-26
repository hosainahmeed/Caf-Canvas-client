import pageBg from "../../src/assets/images/more/3.png";
function PageHeader() {
  return (
    <div
      style={{ backgroundImage: `url(${pageBg})` }}
      className="h-[800px] w-full bg-center bg-cover bg-no-repeat"
    >
    </div>
  );
}

export default PageHeader;

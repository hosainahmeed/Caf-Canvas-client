function SectionHeader({head,subHead}) {
  return (
    <div className="text-center font-ranch">
      <p className="text-lg md:text-2xl">{subHead}</p>
      <h1 className="text-3xl md:text-7xl font-bold">{head}</h1>
    </div>
  );
}

export default SectionHeader;

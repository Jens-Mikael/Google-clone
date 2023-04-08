const Footer = () => {
  return (
    <div className="bg-[#171717] text-[#999da2] w-full text-sm">
      <div className="py-3 px-8 border-b border-greyDark">Suomi</div>
      <div className="items-center px-4 flex flex-col lg:justify-between lg:flex-row relative">
        <div className="flex p-4 justify-center lg:absolute lg:inset-x-0 lg:bottom-0">
          <div className="flex items-center pr-1">
            <img className="h-3" src="assets/asset 4.png" alt="lehti" />
          </div>
          <div>Hiilineutraali vuodesta 2007 saakka</div>
        </div>
        <div className="flex p-4 gap-8 ">
          <div>Tietoja</div>
          <div>Mainokset</div>
          <div>Yritykset</div>
          <div>Näin Haku toimii</div>
        </div>
        <div className="flex p-4 gap-8">
          <div>Tietosuoja</div>
          <div>Käyttöehdot</div>
          <div>Asetukset</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

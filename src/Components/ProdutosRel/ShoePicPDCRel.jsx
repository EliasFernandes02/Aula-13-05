import PromoPDCRel from "./PromoPDCRel";
function ShoePicPDCRel({
  percentage = "",
  ogPrice = 100,
  Name = "Tênis Nike Feminino",
  Pic = "https://imgcentauro-a.akamaihd.net/1300x1300/9858250PA9.jpg",
}) {
  return (
    <>
      <div>
        <div id="ImgPdtRel">
          <PromoPDCRel percentage={percentage} />
          <img src={Pic} alt="Produtos Relacionados" />
        </div>
        <p id="PriceNameImgPDT">
          {Name}
          <p>
            {" "}
            {percentage ? (
              <>
                {" "}
                <span style={{ textDecoration: "line-through" }}>
                  R${ogPrice.toFixed(2)}
                </span>{" "}
                R$ <span style={{fontWeight: 'bold'}}>{(-(percentage * ogPrice) / 100 + ogPrice).toFixed(2)}</span>
              </>
            ) : (
              <>R${ogPrice.toFixed(2)}</>
            )}
          </p>
        </p>
      </div>
    </>
  );
}
export default ShoePicPDCRel;

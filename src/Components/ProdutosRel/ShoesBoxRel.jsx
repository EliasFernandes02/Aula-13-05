import ShoePicPDCRel from "./ShoePicPDCRel";
function ShoesBoxRel() {
  let T1 = "https://th.bing.com/th?q=Tenis+Nike+Air+Max+Masculino&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247"
  let T2 = "https://th.bing.com/th?q=Tenis+Oakley+Flack+2&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247"
  let T3 = "https://th.bing.com/th?q=Tenis+All-Star+Feminino&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247"
  let T4 = "https://th.bing.com/th/id/OIP._2gEo8-8DwLLC4ZhxDxhqgHaHa?w=178&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.5&pid=1.7&rm=3"
  return (
    <>
      <div id="ShoesBoxRel">
        <ShoePicPDCRel Name="Tênis Nike Masculino"  percentage="50" ogPrice={300} Pic={T1}/>
        <ShoePicPDCRel percentage="25" />
        <ShoePicPDCRel
          Name="Sapato para trilha"
          percentage="20"
          ogPrice={254.35}
          Pic={T2}
        />
        <ShoePicPDCRel
        Name="All Star Feminino"
        percentage="10"
        ogPrice={288}
        Pic={T3}
        />
        <ShoePicPDCRel 
        Name="Tênis infatil Sonic Filme"
        ogPrice={950}
        Pic={T4}
        />
        <ShoePicPDCRel />
        <ShoePicPDCRel />
        <ShoePicPDCRel />
      </div>
    </>
  );
}
export default ShoesBoxRel;

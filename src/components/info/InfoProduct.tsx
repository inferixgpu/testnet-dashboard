import "@/app/styles/infoProduct.scss";
import InfoProductBottom from "./InfoProductBottom";
import InfoProductTop from "./InfoProductTop";

export default function InfoProduct() {
  return (
    <div className={"product"}>
      <div className={"product-container"}>
        <InfoProductBottom/>
        <InfoProductTop/>
      </div>
    </div>
  );
}

import React from "react";
import { Bar, Currency, Fill, Label, Labels, LimitBarClass, LimitTotal } from "./style";
const LimitBar = () => (
<LimitBarClass>
  <h2>Limite do cartão:</h2>
  <Labels>
    <div>
      <Label>
        Utilizado:
      </Label>
      <div className="value">
        <Currency>R$</Currency> 1.280,00
      </div>
    </div>
    <LimitTotal>
      <Label>
        Disponível:
      </Label>
      <div className="value">
        <Currency>R$</Currency> 10.000,00
      </div>
    </LimitTotal>
  </Labels>
  <Bar>
    <Fill></Fill>
  </Bar>
</LimitBarClass>

)
export default LimitBar;
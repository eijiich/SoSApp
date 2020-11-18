import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";

export default function CartView() {
  return (
    <div>
      <h1>Carrinho de compras</h1>
      <Card variant="outlined" color="secondary">
        <Button variant="contained" color="primary">
          Teste
        </Button>
      </Card>
    </div>
  );
}

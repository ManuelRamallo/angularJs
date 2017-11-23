export class ArticuloModel {
  public id: number;
  public foto: string;
  public descripcion: string;
  public color: string;
  public talla: number;
  public cantidad: number;
  public precioGeneral: number;
  public precioRebaja: number;
  public rebajado: boolean;

  constructor(id: number, foto: string, descripcion: string, color: string, talla: number, cantidad: number,
              precioGeneral: number, precioRebaja: number, rebajado: boolean) {
    this.id = id;
    this.foto = foto;
    this.descripcion = descripcion;
    this.color = color;
    this.talla = talla;
    this.cantidad = cantidad;
    this.precioGeneral = precioGeneral;
    this.precioRebaja = precioRebaja;
    this.rebajado = rebajado;
  }
}

export interface Bordado {
  id: string;
  nombreCliente: string;
  numeroContacto: string;
  descripcion: string;
  cantidad: number;
  precio: number;
  precioTotal: number;
  fechaEntrega: string;
  fechaCreacion: string;
  completado: boolean;
}

export type EstadoBordado = 'pendiente' | 'completado'; 
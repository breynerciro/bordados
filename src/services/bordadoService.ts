import type { Bordado } from '../types/Bordado';

const STORAGE_KEY = 'bordados-data';

export const bordadoService = {
  // Obtener todos los bordados
  getBordados: (): Bordado[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error al cargar bordados:', error);
      return [];
    }
  },

  // Guardar bordados
  saveBordados: (bordados: Bordado[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bordados));
    } catch (error) {
      console.error('Error al guardar bordados:', error);
    }
  },

  // Agregar nuevo bordado
  addBordado: (bordado: Omit<Bordado, 'id' | 'fechaCreacion' | 'completado'>): Bordado => {
    const bordados = bordadoService.getBordados();
    const nuevoBordado: Bordado = {
      ...bordado,
      id: Date.now().toString(),
      fechaCreacion: new Date().toISOString(),
      completado: false,
    };
    
    bordados.push(nuevoBordado);
    bordadoService.saveBordados(bordados);
    return nuevoBordado;
  },

  // Marcar bordado como completado
  toggleCompletado: (id: string): void => {
    const bordados = bordadoService.getBordados();
    const bordado = bordados.find(b => b.id === id);
    if (bordado) {
      bordado.completado = !bordado.completado;
      bordadoService.saveBordados(bordados);
    }
  },

  // Eliminar bordado
  deleteBordado: (id: string): void => {
    const bordados = bordadoService.getBordados();
    const filteredBordados = bordados.filter(b => b.id !== id);
    bordadoService.saveBordados(filteredBordados);
  }
}; 
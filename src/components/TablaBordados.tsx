import React from 'react';
import type { Bordado } from '../types/Bordado';

interface TablaBordadosProps {
  bordados: Bordado[];
  onToggleCompletado: (id: string) => void;
  onDelete: (id: string) => void;
  titulo: string;
  mostrarCompletados?: boolean;
}

export const TablaBordados: React.FC<TablaBordadosProps> = ({
  bordados,
  onToggleCompletado,
  onDelete,
  titulo,
  mostrarCompletados = false
}) => {
  const abrirWhatsApp = (numero: string) => {
    const numeroLimpio = numero.replace(/\D/g, '');
    const url = `https://web.whatsapp.com/send?phone=+57${numeroLimpio}`;
    
    // Usar nombre de ventana específico para reutilizar
    const windowName = 'whatsapp_web_window';
    window.open(url, windowName)?.focus;
  };

  const confirmarCompletado = (bordado: Bordado) => {
    const confirmacion = window.confirm(
      `¿Confirmar que el bordado de ${bordado.nombreCliente} está completado?\n\n` +
      `Esto marcará el bordado como completado.`
    );
    
    if (confirmacion) {
      onToggleCompletado(bordado.id);
    }
  };

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (bordados.length === 0) {
    return (
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '0.5rem', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
        padding: '1.5rem' 
      }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>{titulo}</h2>
        <p style={{ color: '#6b7280', textAlign: 'center', padding: '2rem 0' }}>
          {mostrarCompletados ? 'No hay bordados completados' : 'No hay bordados pendientes'}
        </p>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '0.5rem', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
      padding: '1.5rem' 
    }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>{titulo}</h2>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ minWidth: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f9fafb' }}>
            <tr>
              <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Cliente
              </th>
              <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Contacto
              </th>
              <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Descripción
              </th>
              <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Cantidad
              </th>
              <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Precio
              </th>
              <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Total
              </th>
              <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Entrega
              </th>
              <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: 'white' }}>
            {bordados.map((bordado, index) => (
              <tr key={bordado.id} style={{ 
                borderBottom: '1px solid #e5e7eb',
                backgroundColor: index % 2 === 0 ? 'white' : '#f9fafb'
              }}>
                <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>
                    {bordado.nombreCliente}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                  <button
                    onClick={() => abrirWhatsApp(bordado.numeroContacto)}
                    style={{ 
                      fontSize: '0.875rem', 
                      color: '#2563eb', 
                      textDecoration: 'underline',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#1d4ed8'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#2563eb'}
                  >
                    {bordado.numeroContacto}
                  </button>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ fontSize: '0.875rem', color: '#111827', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {bordado.descripcion}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                  <div style={{ fontSize: '0.875rem', color: '#111827' }}>
                    {bordado.cantidad}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                  <div style={{ fontSize: '0.875rem', color: '#111827' }}>
                    ${bordado.precio.toFixed(2)}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>
                    ${bordado.precioTotal.toFixed(2)}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}>
                  <div style={{ fontSize: '0.875rem', color: '#111827' }}>
                    {formatearFecha(bordado.fechaEntrega)}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap', fontSize: '0.875rem', fontWeight: '500' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                                         <button
                       onClick={() => bordado.completado ? onToggleCompletado(bordado.id) : confirmarCompletado(bordado)}
                       style={{
                         padding: '0.25rem 0.75rem',
                         borderRadius: '0.375rem',
                         fontSize: '0.75rem',
                         fontWeight: '500',
                         border: 'none',
                         cursor: 'pointer',
                         backgroundColor: bordado.completado ? '#fef3c7' : '#dcfce7',
                         color: bordado.completado ? '#92400e' : '#166534'
                       }}
                       onMouseOver={(e) => {
                         e.currentTarget.style.backgroundColor = bordado.completado ? '#fde68a' : '#bbf7d0';
                       }}
                       onMouseOut={(e) => {
                         e.currentTarget.style.backgroundColor = bordado.completado ? '#fef3c7' : '#dcfce7';
                       }}
                     >
                       {bordado.completado ? 'Desmarcar' : 'Completar'}
                     </button>
                    <button
                      onClick={() => onDelete(bordado.id)}
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: '#fee2e2',
                        color: '#991b1b'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fecaca'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 
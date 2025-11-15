// Guest data structure and utilities
// This file contains the guest list and helper functions

export interface Guest {
  id: string;
  code: string;
  name: string;
  maxGuests: number;
  tableNumber?: number;
  group?: string;
  personalMessage?: string;
  isProbable?: boolean; // For guests that might not attend
}

// Your actual guest list
export const guestList: Guest[] = [
  // Familia Directa
  { id: '001', code: 'VYS-001', name: 'Mamá', maxGuests: 1, group: 'Familia Directa' },
  { id: '002', code: 'VYS-002', name: 'Papá', maxGuests: 1, group: 'Familia Directa' },
  { id: '003', code: 'VYS-003', name: 'Alan', maxGuests: 1, group: 'Familia Directa' },
  
  // Familia Extendida
  { id: '004', code: 'VYS-004', name: 'Tío Chavo', maxGuests: 1, group: 'Familia' },
  { id: '005', code: 'VYS-005', name: 'Silvia', maxGuests: 1, group: 'Familia' },
  { id: '006', code: 'VYS-006', name: 'Nancy e Israel', maxGuests: 2, group: 'Familia' },
  { id: '007', code: 'VYS-007', name: 'Laura', maxGuests: 1, group: 'Familia' },
  { id: '008', code: 'VYS-008', name: 'Edgar', maxGuests: 1, group: 'Familia' },
  { id: '009', code: 'VYS-009', name: 'Edgar Jr', maxGuests: 1, group: 'Familia' },
  { id: '010', code: 'VYS-010', name: 'Abby', maxGuests: 1, group: 'Familia' },
  
  // Familia Godina
  { id: '011', code: 'VYS-011', name: 'Juan Godina y Maru', maxGuests: 2, group: 'Familia Godina' },
  { id: '012', code: 'VYS-012', name: 'Jona Godina', maxGuests: 2, group: 'Familia Godina', isProbable: true },
  { id: '013', code: 'VYS-013', name: 'Alan Godina', maxGuests: 1, group: 'Familia Godina', isProbable: true },
  
  // Amigos y Familia Extendida
  { id: '014', code: 'VYS-014', name: 'Yury', maxGuests: 1, group: 'Amigos' },
  { id: '015', code: 'VYS-015', name: 'Andrea', maxGuests: 1, group: 'Amigos' },
  { id: '016', code: 'VYS-016', name: 'Tito y Familia', maxGuests: 2, group: 'Familia' },
  { id: '018', code: 'VYS-018', name: 'Samuel', maxGuests: 1, group: 'Amigos' },
  { id: '019', code: 'VYS-019', name: 'Cynthia', maxGuests: 1, group: 'Amigos' },
  { id: '020', code: 'VYS-020', name: 'Danna', maxGuests: 1, group: 'Amigos' },
  { id: '021', code: 'VYS-021', name: 'Alex', maxGuests: 1, group: 'Amigos' },
  { id: '022', code: 'VYS-022', name: 'Juan', maxGuests: 1, group: 'Amigos' },
  { id: '023', code: 'VYS-023', name: 'Julissa', maxGuests: 1, group: 'Amigos' },
  { id: '024', code: 'VYS-024', name: 'Paulita', maxGuests: 1, group: 'Amigos' },
  { id: '025', code: 'VYS-025', name: 'Nacho', maxGuests: 1, group: 'Amigos' },
  { id: '026', code: 'VYS-026', name: 'Omar', maxGuests: 1, group: 'Amigos' },
  { id: '027', code: 'VYS-027', name: 'Maribel y Fer', maxGuests: 2, group: 'Amigos' },
  { id: '028', code: 'VYS-028', name: 'Jimmy', maxGuests: 1, group: 'Amigos' },
  { id: '029', code: 'VYS-029', name: 'Karen, Alo e Isaac', maxGuests: 3, group: 'Amigos' },
  { id: '030', code: 'VYS-030', name: 'Gus', maxGuests: 1, group: 'Amigos' },
  { id: '031', code: 'VYS-031', name: 'Hanna', maxGuests: 1, group: 'Amigos' },
  { id: '032', code: 'VYS-032', name: 'Nani', maxGuests: 1, group: 'Amigos' },
  { id: '033', code: 'VYS-033', name: 'Dan', maxGuests: 1, group: 'Amigos' },
  { id: '034', code: 'VYS-034', name: 'Habacuc', maxGuests: 1, group: 'Amigos' },
  { id: '037', code: 'VYS-037', name: 'Keren', maxGuests: 1, group: 'Amigos' },
  { id: '038', code: 'VYS-038', name: 'Jibran y Milena', maxGuests: 2, group: 'Amigos' },
  { id: '039', code: 'VYS-039', name: 'Jaime (Papá)', maxGuests: 1, group: 'Familia' },
  { id: '042', code: 'VYS-042', name: 'Karina', maxGuests: 1, group: 'Familia' },
  { id: '043', code: 'VYS-043', name: 'Luis', maxGuests: 1, group: 'Familia' },
  
  // Probables
  { id: '045', code: 'VYS-045', name: 'Joaquín', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '045a', code: 'VYS-045A', name: 'Lucy', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '045b', code: 'VYS-045B', name: 'Kevin', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '045c', code: 'VYS-045C', name: 'Josué', maxGuests: 1, group: 'Amigos', isProbable: true },
  
  { id: '046', code: 'VYS-046', name: 'Heber', maxGuests: 1, group: 'Amigos' },
  { id: '047', code: 'VYS-047', name: 'May', maxGuests: 1, group: 'Amigos' },
  { id: '048', code: 'VYS-048', name: 'Hugo y Esposa', maxGuests: 2, group: 'Amigos' },
  { id: '050', code: 'VYS-050', name: 'Yunny', maxGuests: 1, group: 'Amigos' },
  { id: '051', code: 'VYS-051', name: 'Guer', maxGuests: 1, group: 'Amigos' },
  
  // Más probables
  { id: '052', code: 'VYS-052', name: 'Kiki', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '053', code: 'VYS-053', name: 'Norma', maxGuests: 1, group: 'Familia', isProbable: true },
  { id: '054', code: 'VYS-054', name: 'Charlie', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '055', code: 'VYS-055', name: 'Ximena', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '056', code: 'VYS-056', name: 'Joss', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '057', code: 'VYS-057', name: 'Miguel Beltrán', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '058', code: 'VYS-058', name: 'Brenda Beltrán', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '059', code: 'VYS-059', name: 'Brandon', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '060', code: 'VYS-060', name: 'Naomi', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '061', code: 'VYS-061', name: 'Husa', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '062', code: 'VYS-062', name: 'Dani', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '063', code: 'VYS-063', name: 'Tencha', maxGuests: 1, group: 'Familia', isProbable: true },
  { id: '064', code: 'VYS-064', name: 'Fani', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '065', code: 'VYS-065', name: 'Erick', maxGuests: 1, group: 'Amigos', isProbable: true },
  { id: '066', code: 'VYS-066', name: 'Silvia (Mamá de Cynthia)', maxGuests: 1, group: 'Familia', isProbable: true },
  { id: '067', code: 'VYS-067', name: 'Azarias', maxGuests: 1, group: 'Amigos', isProbable: true },
  
  // Continuación lista
  { id: '068', code: 'VYS-068', name: 'Joshua', maxGuests: 1, group: 'Amigos' },
  { id: '069', code: 'VYS-069', name: 'Vanessa', maxGuests: 1, group: 'Amigos' },
  { id: '070', code: 'VYS-070', name: 'Perla', maxGuests: 1, group: 'Amigos' },
  { id: '071', code: 'VYS-071', name: 'Michel', maxGuests: 1, group: 'Amigos' },
  { id: '072', code: 'VYS-072', name: 'Jefe Chava y Esposa', maxGuests: 2, group: 'Trabajo' },
  { id: '074', code: 'VYS-074', name: 'Hijo 1 (Jefe)', maxGuests: 1, group: 'Trabajo' },
  { id: '075', code: 'VYS-075', name: 'Hijo 2 (Jefe)', maxGuests: 1, group: 'Trabajo' },
  { id: '076', code: 'VYS-076', name: 'Chuy', maxGuests: 1, group: 'Amigos' },
  { id: '077', code: 'VYS-077', name: 'José', maxGuests: 1, group: 'Amigos' },
  { id: '078', code: 'VYS-078', name: 'Andrés', maxGuests: 1, group: 'Amigos' },
  { id: '079', code: 'VYS-079', name: 'Jael', maxGuests: 1, group: 'Amigos' },
  { id: '080', code: 'VYS-080', name: 'Lupita', maxGuests: 1, group: 'Amigos' },
  { id: '081', code: 'VYS-081', name: 'González', maxGuests: 1, group: 'Amigos' },
  { id: '082', code: 'VYS-082', name: 'Marvin', maxGuests: 1, group: 'Amigos' },
  { id: '083', code: 'VYS-083', name: 'Sandy', maxGuests: 1, group: 'Amigos' },
  { id: '084', code: 'VYS-084', name: 'Samuel', maxGuests: 1, group: 'Amigos' },
  { id: '085', code: 'VYS-085', name: 'Melissa', maxGuests: 1, group: 'Amigos' },
  { id: '086', code: 'VYS-086', name: 'Ricardo y Esposa', maxGuests: 2, group: 'Amigos' },
  { id: '088', code: 'VYS-088', name: 'Janett', maxGuests: 1, group: 'Amigos' },
  { id: '089', code: 'VYS-089', name: 'Saulo', maxGuests: 1, group: 'Amigos' },
  { id: '090', code: 'VYS-090', name: 'Enrique', maxGuests: 1, group: 'Amigos' },
  { id: '091', code: 'VYS-091', name: 'Karen', maxGuests: 1, group: 'Amigos' },
  
  // Novios y familia cercana
  { id: '092', code: 'VYS-092', name: 'Valeria', maxGuests: 1, group: 'Novios' },
  { id: '093', code: 'VYS-093', name: 'Chava', maxGuests: 1, group: 'Novios' },
  { id: '094', code: 'VYS-094', name: 'Lili', maxGuests: 1, group: 'Familia' },
  { id: '095', code: 'VYS-095', name: 'Toño', maxGuests: 1, group: 'Familia' },
  { id: '096', code: 'VYS-096', name: 'Gastón', maxGuests: 1, group: 'Familia' },
  { id: '097', code: 'VYS-097', name: 'Gaby', maxGuests: 1, group: 'Familia' },
  { id: '098', code: 'VYS-098', name: 'Jazhiel', maxGuests: 1, group: 'Amigos' },
  { id: '099', code: 'VYS-099', name: 'Brandon', maxGuests: 1, group: 'Amigos' },
];

// Helper function to find guest by code
export function findGuestByCode(code: string): Guest | undefined {
  return guestList.find(guest => guest.code.toLowerCase() === code.toLowerCase());
}

// Helper function to generate personalized URL
export function generateGuestUrl(guest: Guest): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const encodedData = btoa(JSON.stringify({
    code: guest.code,
    name: guest.name,
    id: guest.id
  }));
  return `${baseUrl}/?invite=${encodedData}`;
}

// Helper function to decode guest data from URL
export function decodeGuestFromUrl(inviteParam: string): Guest | null {
  try {
    const decoded = JSON.parse(atob(inviteParam));
    return findGuestByCode(decoded.code) || null;
  } catch {
    return null;
  }
}

// Get guest statistics
export function getGuestStats() {
  const total = guestList.length;
  const probable = guestList.filter(g => g.isProbable).length;
  const confirmed = total - probable;
  const totalCapacity = guestList.reduce((sum, guest) => sum + guest.maxGuests, 0);
  
  return {
    totalGuests: total,
    confirmedGuests: confirmed,
    probableGuests: probable,
    totalCapacity,
    groups: {
      familia: guestList.filter(g => g.group?.includes('Familia')).length,
      amigos: guestList.filter(g => g.group === 'Amigos').length,
      trabajo: guestList.filter(g => g.group === 'Trabajo').length,
    }
  };
}

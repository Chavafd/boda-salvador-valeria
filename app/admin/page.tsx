'use client'

import { useState } from 'react'
import { guestList, generateGuestUrl, getGuestStats } from '@/lib/guest-data'
import { FaCopy, FaDownload, FaUsers, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa'

export default function AdminPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'probable'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  const stats = getGuestStats()
  
  const filteredGuests = guestList.filter(guest => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'probable' && guest.isProbable) ||
      (filter === 'confirmed' && !guest.isProbable)
    
    const matchesSearch = guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          guest.code.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const downloadGuestList = () => {
    const csvContent = [
      ['Código', 'Nombre', 'Invitados Max', 'Grupo', 'Estado', 'URL Personalizada'],
      ...guestList.map(guest => [
        guest.code,
        guest.name,
        guest.maxGuests.toString(),
        guest.group || '',
        guest.isProbable ? 'Probable' : 'Confirmado',
        generateGuestUrl(guest)
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'lista-invitados-boda.csv'
    a.click()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Panel de Administración - Invitados
          </h1>
          <p className="text-gray-600">
            Gestiona los enlaces personalizados para cada invitado
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Invitados</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalGuests}</p>
              </div>
              <FaUsers className="text-3xl text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Confirmados</p>
                <p className="text-2xl font-bold text-green-600">{stats.confirmedGuests}</p>
              </div>
              <FaCheckCircle className="text-3xl text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Probables</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.probableGuests}</p>
              </div>
              <FaQuestionCircle className="text-3xl text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Capacidad Total</p>
                <p className="text-2xl font-bold text-purple-600">{stats.totalCapacity}</p>
              </div>
              <FaUsers className="text-3xl text-purple-500" />
            </div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Buscar por nombre o código..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
            >
              <option value="all">Todos ({stats.totalGuests})</option>
              <option value="confirmed">Confirmados ({stats.confirmedGuests})</option>
              <option value="probable">Probables ({stats.probableGuests})</option>
            </select>
            
            <button
              onClick={downloadGuestList}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
              <FaDownload />
              Descargar CSV
            </button>
          </div>
        </div>

        {/* Guest List Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Código
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invitados
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grupo
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredGuests.map((guest) => {
                  const guestUrl = generateGuestUrl(guest)
                  return (
                    <tr key={guest.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {guest.code}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {guest.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {guest.maxGuests}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          {guest.group}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {guest.isProbable ? (
                          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                            Probable
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Confirmado
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button
                          onClick={() => copyToClipboard(guestUrl, guest.id)}
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          <FaCopy />
                          {copiedId === guest.id ? 'Copiado!' : 'Copiar Link'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2">Instrucciones:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Cada invitado tiene un enlace único que incluye su información personal</li>
            <li>• Cuando visiten su enlace, verán un mensaje de bienvenida personalizado</li>
            <li>• Después de confirmar asistencia, recibirán un código QR único</li>
            <li>• El código QR servirá como entrada al evento</li>
            <li>• Puedes descargar la lista completa en formato CSV</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

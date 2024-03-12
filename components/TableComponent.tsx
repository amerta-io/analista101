import React from 'react'
import { IoIosCheckbox, IoMdRadioButtonOn } from 'react-icons/io'
import { FaPython, FaBalanceScale } from 'react-icons/fa'

// Fungsi untuk mengurai dan merender string ke dalam komponen React
const renderComponentFromString = (str) => {
  // Peta untuk memetakan string ke komponen React yang sesuai
  const componentMap = {
    '<IoIosCheckbox />': <IoIosCheckbox />,
    '<IoMdRadioButtonOn />': <IoMdRadioButtonOn />,
    '<FaPython />': <FaPython />,
    '<FaBalanceScale />': <FaBalanceScale />,
  }

  // Mencari komponen dalam peta berdasarkan string
  const Component = componentMap[str]
  // Mengembalikan komponen jika ditemukan, atau string asli jika tidak
  return Component || str
}

const TableComponent = () => (
  <table style={{ marginTop: 14 }}>
    <tbody>
      {[
          { key: 'Pilih Beberapa', value: '<IoIosCheckbox /> Checkbox' },
          { key: 'Pilih Satu', value: '<IoMdRadioButtonOn /> Radio' },
          { key: 'Isian Singkat', value: '<FaPython /> Opini, Saran, Kritik, dll.' },
          { key: 'Skala', value: '<FaBalanceScale /> 1-5, 1-10, dsb.' },
      ].map(item => (
          <tr key={item.key}>
              <td>{item.key}</td>
              <td>{renderComponentFromString(item.value)}{item.value.replace(/<.*?>/, '')}</td>
          </tr>
      ))}
    </tbody>
  </table>
)

export default TableComponent
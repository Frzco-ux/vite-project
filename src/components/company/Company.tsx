import './Company.css'
import SectionHeading from '../section-heading/SectionHeading'

const companyDetails = [
  { label: '会社名', value: '株式会社ルーシー' },
  { label: '電話番号', value: '03-6452-9355', href: 'tel:0364529355' },
  {
    label: '住所',
    value: '東京都港区新橋5丁目10-5 PMO新橋II 8F',
  },
]

function Company() {
  return (
    <section
      aria-labelledby="company-title"
      className="xeory-company"
      id="company"
    >
      <SectionHeading eyebrow="COMPANY" id="company-title" title="会社紹介" />

      <div className="xeory-company-table-wrap">
        <table className="xeory-company-table">
          <tbody>
            {companyDetails.map((detail) => (
              <tr key={detail.label}>
                <th scope="row">{detail.label}</th>
                <td>
                  {detail.href ? (
                    <a href={detail.href}>{detail.value}</a>
                  ) : (
                    detail.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Company

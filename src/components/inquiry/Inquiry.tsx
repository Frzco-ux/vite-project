import { useState } from 'react'
import type { FormEvent } from 'react'
import SectionHeading from '../section-heading/SectionHeading'
import './Inquiry.css'

function Inquiry() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      aria-labelledby="inquiry-title"
      className="xeory-inquiry"
      id="inquiry"
    >
      <SectionHeading eyebrow="INQUIRY" id="inquiry-title" title="お問い合わせ" />
      <form className="xeory-inquiry-form" onSubmit={handleSubmit}>
        <label className="xeory-inquiry-field">
          <span>お名前 <span className="xeory-required">必須</span></span>
          <input autoComplete="name" name="name" required />
        </label>
        <label className="xeory-inquiry-field">
          <span>メールアドレス <span className="xeory-required">必須</span></span>
          <input
            autoComplete="email"
            name="email"
            required
            type="email"
          />
        </label>
        <label className="xeory-inquiry-field">
          <span>題名</span>
          <input name="subject" />
        </label>
        <label className="xeory-inquiry-field">
          <span>メッセージ本文</span>
          <textarea name="message" required rows={6} />
        </label>
        <button className="xeory-inquiry-submit" type="submit">
          送信する <span aria-hidden="true">→</span>
        </button>
        {submitted && (
          <p aria-live="polite" className="xeory-inquiry-notice" role="status">
            お問い合わせフォームの送信機能は現在準備中です。お電話にてお問い合わせください。
          </p>
        )}
      </form>
    </section>
  )
}

export default Inquiry

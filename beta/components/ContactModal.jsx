'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { SERVICES_OPTIONS } from '../data/content';

const initial = {
  name: '',
  email: '',
  contact: '',
  description: '',
  servicesRequired: '',
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.contact.trim()) {
    errors.contact = 'Contact phone is required.';
  } else if (!/^[+\d][\d\s().-]{6,}$/.test(values.contact.trim())) {
    errors.contact = 'Enter a valid phone number.';
  }
  if (!values.description.trim()) {
    errors.description = 'Description is required.';
  } else if (values.description.trim().length < 12) {
    errors.description = 'Please share a bit more detail (at least 12 characters).';
  }
  if (!values.servicesRequired) {
    errors.servicesRequired = 'Select a service.';
  }
  return errors;
}

export default function ContactModal({ open, onClose }) {
  const titleId = useId();
  const descId = useId();
  const firstFieldRef = useRef(null);
  const dialogRef = useRef(null);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 20);
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const list = Array.from(focusable);
        if (list.length === 0) return;
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setValues(initial);
      setErrors({});
      setSubmitted(false);
    }
  }, [open]);

  if (!open) return null;

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitted(true);
  };

  return (
    <div className="modal-root" role="presentation">
      <button type="button" className="modal-backdrop" aria-label="Close contact dialog" onClick={onClose} />
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        ref={dialogRef}
      >
        <div className="modal-dialog__head">
          <div>
            <h2 id={titleId} className="modal-dialog__title">
              Contact Us
            </h2>
            <p id={descId} className="modal-dialog__lede">
              Tell us about your project. We typically reply within one business day.
            </p>
          </div>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {submitted ? (
          <div className="modal-success" role="status">
            <p className="modal-success__title">Message received</p>
            <p>
              Thanks, {values.name.trim().split(' ')[0]}. Our team will follow up about{' '}
              {values.servicesRequired.toLowerCase()}.
            </p>
            <button type="button" className="btn btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input
                ref={firstFieldRef}
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={onChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'err-name' : undefined}
                required
              />
              {errors.name && (
                <p id="err-name" className="field-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={onChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'err-email' : undefined}
                required
              />
              {errors.email && (
                <p id="err-email" className="field-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="contact-phone">Contact</label>
              <input
                id="contact-phone"
                name="contact"
                type="tel"
                autoComplete="tel"
                placeholder="Phone number"
                value={values.contact}
                onChange={onChange}
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? 'err-contact' : undefined}
                required
              />
              {errors.contact && (
                <p id="err-contact" className="field-error" role="alert">
                  {errors.contact}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="contact-services">Services Required</label>
              <select
                id="contact-services"
                name="servicesRequired"
                value={values.servicesRequired}
                onChange={onChange}
                aria-invalid={Boolean(errors.servicesRequired)}
                aria-describedby={errors.servicesRequired ? 'err-services' : undefined}
                required
              >
                <option value="">Select a service…</option>
                {SERVICES_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.servicesRequired && (
                <p id="err-services" className="field-error" role="alert">
                  {errors.servicesRequired}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="contact-description">Description</label>
              <textarea
                id="contact-description"
                name="description"
                rows={4}
                value={values.description}
                onChange={onChange}
                aria-invalid={Boolean(errors.description)}
                aria-describedby={errors.description ? 'err-description' : undefined}
                required
              />
              {errors.description && (
                <p id="err-description" className="field-error" role="alert">
                  {errors.description}
                </p>
              )}
            </div>

            <div className="contact-form__actions">
              <button type="button" className="btn btn--ghost" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn--primary">
                Send message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { ContactFormValues } from "@/lib/types";
import { validateContactForm } from "@/lib/validation";
import { buildContactMessage, buildWhatsAppLink } from "@/lib/whatsapp";

const fieldClassName =
  "h-12 w-full rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 text-sm outline-none transition-colors focus:border-[var(--color-accent)]/45";

const textareaClassName =
  "w-full rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4 text-sm outline-none transition-colors focus:border-[var(--color-accent)]/45";

const defaultValues: ContactFormValues = {
  fullName: "",
  phone: "",
  whatsapp: "",
  subject: "",
  note: ""
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(defaultValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});

  function updateValue<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateContactForm(values);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    window.location.href = buildWhatsAppLink(buildContactMessage(values));
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card p-5 sm:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <ContactField
          label="Ad soyad"
          error={errors.fullName}
          input={
            <input
              value={values.fullName}
              onChange={(event) => updateValue("fullName", event.target.value)}
              className={fieldClassName}
              placeholder="Ad və soyad"
            />
          }
        />
        <ContactField
          label="Telefon"
          error={errors.phone}
          input={
            <input
              value={values.phone}
              onChange={(event) => updateValue("phone", event.target.value)}
              className={fieldClassName}
              placeholder="+994"
            />
          }
        />
      </div>

      <div className="mt-4 grid gap-4">
        <ContactField
          label="WhatsApp nömrəsi (opsional)"
          error={errors.whatsapp}
          input={
            <input
              value={values.whatsapp}
              onChange={(event) => updateValue("whatsapp", event.target.value)}
              className={fieldClassName}
              placeholder="+994"
            />
          }
        />
        <ContactField
          label="Mövzu"
          error={errors.subject}
          input={
            <input
              value={values.subject}
              onChange={(event) => updateValue("subject", event.target.value)}
              className={fieldClassName}
              placeholder="Gündəlik icarə, toy maşını, VIP transfer..."
            />
          }
        />
        <ContactField
          label="Mesaj"
          error={errors.note}
          input={
            <textarea
              value={values.note}
              onChange={(event) => updateValue("note", event.target.value)}
              rows={5}
              className={textareaClassName}
              placeholder="Tarix, model və ya xidmət ehtiyacınızı qısa qeyd edin."
            />
          }
        />
      </div>

      <div className="mt-6">
        <Button type="submit" icon="whatsapp" className="w-full justify-center sm:w-auto">
          WhatsApp ilə göndər
        </Button>
      </div>
    </form>
  );
}

type ContactFieldProps = { label: string; error?: string; input: ReactNode };

function ContactField({ label, error, input }: ContactFieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-xs sm:tracking-[0.24em]">
        {label}
      </span>
      {input}
      {error ? <span className="text-sm text-[#d86c5c]">{error}</span> : null}
    </label>
  );
}

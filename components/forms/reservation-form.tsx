"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { business } from "@/data/business";
import { cars } from "@/data/fleet";
import type { ReservationFormValues } from "@/lib/types";
import { validateReservationForm } from "@/lib/validation";
import { buildReservationMessage, buildWhatsAppLink } from "@/lib/whatsapp";

type ReservationFormProps = {
  initialValues?: Partial<ReservationFormValues>;
};

const defaultValues: ReservationFormValues = {
  fullName: "",
  phone: "",
  whatsapp: "",
  selectedCar: "",
  pickupDate: "",
  pickupTime: "10:00",
  returnDate: "",
  returnTime: "10:00",
  pickupLocation: business.addressLine,
  deliveryRequested: false,
  note: ""
};

export function ReservationForm({ initialValues }: ReservationFormProps) {
  const [values, setValues] = useState<ReservationFormValues>({
    ...defaultValues,
    ...initialValues
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "redirecting">("idle");

  function updateValue<K extends keyof ReservationFormValues>(
    key: K,
    value: ReservationFormValues[K]
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateReservationForm(values);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setStatus("redirecting");
    window.location.href = buildWhatsAppLink(buildReservationMessage(values));
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card p-5 sm:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Ad soyad"
          error={errors.fullName}
          input={
            <input
              value={values.fullName}
              onChange={(event) => updateValue("fullName", event.target.value)}
              className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
              placeholder="Ad və soyad"
            />
          }
        />
        <Field
          label="Telefon"
          error={errors.phone}
          input={
            <input
              value={values.phone}
              onChange={(event) => updateValue("phone", event.target.value)}
              className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
              placeholder="+994"
            />
          }
        />
        <Field
          label="WhatsApp nömrəsi (opsional)"
          error={errors.whatsapp}
          input={
            <input
              value={values.whatsapp}
              onChange={(event) => updateValue("whatsapp", event.target.value)}
              className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
              placeholder="+994"
            />
          }
        />
        <Field
          label="Seçilən avtomobil"
          error={errors.selectedCar}
          input={
            <select
              value={values.selectedCar}
              onChange={(event) => updateValue("selectedCar", event.target.value)}
              className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
            >
              <option value="">Avtomobil seçin</option>
              {cars.map((car) => (
                <option key={car.slug} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          }
        />
        <Field
          label="Götürülmə tarixi"
          error={errors.pickupDate}
          input={
            <input
              type="date"
              value={values.pickupDate}
              onChange={(event) => updateValue("pickupDate", event.target.value)}
              className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
            />
          }
        />
        <Field
          label="Götürülmə saatı"
          error={errors.pickupTime}
          input={
            <input
              type="time"
              value={values.pickupTime}
              onChange={(event) => updateValue("pickupTime", event.target.value)}
              className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
            />
          }
        />
        <Field
          label="Qaytarılma tarixi"
          error={errors.returnDate}
          input={
            <input
              type="date"
              value={values.returnDate}
              onChange={(event) => updateValue("returnDate", event.target.value)}
              className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
            />
          }
        />
        <Field
          label="Qaytarılma saatı"
          error={errors.returnTime}
          input={
            <input
              type="time"
              value={values.returnTime}
              onChange={(event) => updateValue("returnTime", event.target.value)}
              className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
            />
          }
        />
      </div>
      <div className="mt-4 grid gap-4">
        <Field
          label="Götürülmə yeri"
          error={errors.pickupLocation}
          input={
            <input
              value={values.pickupLocation}
              onChange={(event) => updateValue("pickupLocation", event.target.value)}
              className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
              placeholder="Təhvil nöqtəsi"
            />
          }
        />
        <label className="flex items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4 text-sm text-[var(--color-text)]">
          <input
            type="checkbox"
            checked={values.deliveryRequested}
            onChange={(event) => updateValue("deliveryRequested", event.target.checked)}
            className="size-4 accent-[var(--color-accent)]"
          />
          Ünvana çatdırılma istəyirəm
        </label>
        <Field
          label="Xüsusi qeyd"
          error={errors.note}
          input={
            <textarea
              value={values.note}
              onChange={(event) => updateValue("note", event.target.value)}
              rows={5}
              className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
              placeholder="Uşaq oturacağı, toy sifarişi, aeroport təhvil və s."
            />
          }
        />
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--color-muted)]">
          Göndərildikdən sonra WhatsApp-a yönləndiriləcəksiniz.
        </p>
        <Button type="submit" disabled={status === "redirecting"} className="justify-center">
          {status === "redirecting" ? "WhatsApp açılır..." : "Rezervasiyanı göndər"}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = { label: string; error?: string; input: ReactNode };

function Field({ label, error, input }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{label}</span>
      {input}
      {error ? <span className="text-sm text-[#d86c5c]">{error}</span> : null}
    </label>
  );
}

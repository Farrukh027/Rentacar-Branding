import type { ContactFormValues, ReservationFormValues } from "@/lib/types";

const phoneRegex = /^[0-9+\s()-]{7,}$/;

export function validateContactForm(values: ContactFormValues) {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (values.fullName.trim().length < 3) {
    errors.fullName = "Ad və soyadı tam yazın.";
  }

  if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = "Əlaqə nömrəsini düzgün daxil edin.";
  }

  if (values.whatsapp && !phoneRegex.test(values.whatsapp.trim())) {
    errors.whatsapp = "WhatsApp nömrəsi düzgün formatda olmalıdır.";
  }

  if (values.subject.trim().length < 2) {
    errors.subject = "Mövzu hissəsini qısa da olsa qeyd edin.";
  }

  if (values.note.trim().length < 10) {
    errors.note = "Sorğunuzu bir az daha detallı yazın.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}

export function validateReservationForm(values: ReservationFormValues) {
  const errors: Partial<Record<keyof ReservationFormValues, string>> = {};

  if (values.fullName.trim().length < 3) {
    errors.fullName = "Ad və soyad lazımdır.";
  }

  if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = "Telefon nömrəsini düzgün yazın.";
  }

  if (values.whatsapp && !phoneRegex.test(values.whatsapp.trim())) {
    errors.whatsapp = "WhatsApp nömrəsi düzgün deyil.";
  }

  if (!values.selectedCar.trim()) {
    errors.selectedCar = "Avtomobil seçin.";
  }

  if (!values.pickupDate) {
    errors.pickupDate = "Götürülmə tarixini seçin.";
  }

  if (!values.returnDate) {
    errors.returnDate = "Qaytarılma tarixini seçin.";
  }

  if (!values.pickupTime) {
    errors.pickupTime = "Götürülmə saatını seçin.";
  }

  if (!values.returnTime) {
    errors.returnTime = "Qaytarılma saatını seçin.";
  }

  if (!values.pickupLocation.trim()) {
    errors.pickupLocation = "Təhvil yerini qeyd edin.";
  }

  if (values.note.trim().length > 0 && values.note.trim().length < 5) {
    errors.note = "Qeydi ya boş saxlayın, ya da biraz daha aydın yazın.";
  }

  if (
    values.pickupDate &&
    values.returnDate &&
    new Date(`${values.returnDate}T${values.returnTime || "00:00"}`) <=
      new Date(`${values.pickupDate}T${values.pickupTime || "00:00"}`)
  ) {
    errors.returnDate = "Qaytarılma tarixi götürülmə vaxtından sonra olmalıdır.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
